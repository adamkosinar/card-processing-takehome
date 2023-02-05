import "reflect-metadata";
import {container} from "tsyringe";
import {CardService} from "./CardService";
import {CardRepository} from "../CardRepository/CardRepository";
import {CarRepositoryMock} from "../CardRepository/CarRepositoryMock";

describe("CardService", () => {

    container.register(CardRepository, CarRepositoryMock);

    const service = container.resolve(CardService);

    describe("When asked to add card", () => {

        beforeEach(() => {
           CarRepositoryMock.toReturn = null;
        });

        it("should throw an error if the card number is not valid", () => {

            expect(() => {
                service.addCard({
                    number: "49927398717",
                    name: "testCard",
                    limit: 0,
                    balance: 0
                });
            }).toThrowError();

        });

        it("should not throw an error if the card number is valid", () => {

            expect(() => {
                service.addCard({
                    number: "49927398716",
                    name: "testCard",
                    limit: 0,
                    balance: 0
                });
            }).not.toThrowError();

        });

        it("should throw an error if card already exists", () => {

            const card = {
                number: "49927398716",
                name: "testCard",
                limit: 0,
                balance: 0
            };

            CarRepositoryMock.toReturn = card;

            expect(() => {
                service.addCard(card);
            }).toThrowError();

        });
    });

    describe("When asked to get all cards", () => {

        it("should return all cards", () => {

            CarRepositoryMock.toReturn = [
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

            const cards = service.getCards();

            expect(cards.length).toEqual(2);

        });

    });

});
