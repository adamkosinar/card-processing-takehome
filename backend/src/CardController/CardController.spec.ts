import "reflect-metadata";
import {container} from "tsyringe";
import {CardController} from "./CardController";
import {CardService} from "../CardService/CardService";
import {CardServiceMock} from "../CardService/CardServiceMock";
import {BadRequestException} from "../ErrorHandling/BadRequestException";

describe("CardController", () => {

    container.register(CardService, CardServiceMock);
    const controller = container.resolve(CardController);

    const response =  {
        code: jest.fn(),
        send: jest.fn()
    };

    describe("When asked to handle adding a new card", () => {

        beforeEach(() => {

           CardServiceMock.toThrow = null;
           CardServiceMock.toReturn = null;

           response.send.mockReset();
           response.code.mockReset();
        });

        it("should add new card via card service", () => {

            const mockRequest = {
                body: {
                    number: "49927398716",
                    name: "validTestCard",
                    limit: 0
                }
            };

            controller.addCard(mockRequest, response);

            expect(response.send).toBeCalledWith({ success: true});

        });

        it("should render 400 response if the request is invalid", () => {

            const mockRequest = {
                body: {
                    number: "49927398716",
                    name: "mock",
                    limit: 0
                }
            };

            CardServiceMock.toThrow = new BadRequestException("I am mock");

            controller.addCard(mockRequest, response);

            expect(response.code).toBeCalledWith(400);
            expect(response.send).toBeCalledWith({ message: "I am mock"});

        });

        it("should render 500 response if internal server error occurs", () => {

            const mockRequest = {
                body: {
                    number: "49927398716",
                    name: "mock",
                    limit: 0
                }
            };

            CardServiceMock.toThrow = new Error();

            controller.addCard(mockRequest, response);

            expect(response.code).toBeCalledWith(500);
            expect(response.send).toBeCalledWith({ message: "Internal Server Error"});

        });

        it("should should validate the payload", () => {

            const mockRequest = {
                body: {
                    number: "I am not a number, I am a free man",
                    name: "test",
                    limit: 0
                }
            };

            controller.addCard(mockRequest, response);

            expect(response.code).toBeCalledWith(400);

        });

    });

    describe("When asked to handle getting all cards from the system", () => {

        beforeEach(() => {

            CardServiceMock.toThrow = null;
            CardServiceMock.toReturn = null;

            response.send.mockReset();
            response.code.mockReset();
        });

        it("should render all cards from the system with 200 response", () => {

            const cards = [
                {
                    number: "49927398717",
                    name: "someCard",
                    limit: 0,
                    balance: 0
                },
                {
                    number: "49927398717",
                    name: "anotherCard",
                    limit: 0,
                    balance: 0
                }
            ];

            CardServiceMock.toReturn = cards;

            controller.getCards({}, response);

            expect(response.code).toBeCalledWith(200);
            expect(response.send).toBeCalledWith(cards);
        });

        it("should render 500 response if internal server error occurs", () => {

            const mockRequest = {
                body: {
                    number: "49927398716",
                    name: "mock",
                    limit: 0
                }
            };

            CardServiceMock.toThrow = new Error();

            controller.getCards(mockRequest, response);

            expect(response.code).toBeCalledWith(500);
            expect(response.send).toBeCalledWith({ message: "Internal Server Error"});

        });
    });
});
