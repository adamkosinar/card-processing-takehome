import "reflect-metadata";
import {container} from "tsyringe";
import {CardService} from "./CardService";

describe("CardService", () => {

    describe("When asked to add card", () => {

        it("should throw an error if the card number is not valid", () => {

            const service = container.resolve(CardService);

            expect(() => {
                service.addCard({
                    number: "49927398717",
                    name: "testCard",
                    limit: 0,
                    balance: 0
                });
            }).toThrowError();

        });


        it("should not throw an error if the card number is not valid", () => {

            const service = container.resolve(CardService);

            expect(() => {
                service.addCard({
                    number: "49927398716",
                    name: "testCard",
                    limit: 0,
                    balance: 0
                });
            }).not.toThrowError();

        });
    });

});
