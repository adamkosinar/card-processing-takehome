import "reflect-metadata";
import {container} from "tsyringe";
import {CardRepository} from "./CardRepository";
import {Card} from "../Card";

describe("CardRepository", () => {

    describe("When asked to insert a card", () => {

        it("should insert a card into repository", () => {

            const repository = container.resolve(CardRepository);
            const card: Card = {
                number: "1111222233334444",
                name: "testCard",
                limit: 0,
                balance: 0
            };

            repository.insert(card);

            const inserted = repository.getCard(card.number);

            Object.keys(card).forEach((key) => {
                expect(card[key]).toEqual(inserted[key]);
            });

        });

    });

    describe("When asked to get all cards", () => {

        it("should get all inserted cards", () => {

            const repository = container.resolve(CardRepository);

            const cards: Card[] = [
                {
                    number: "1111222233334444",
                    name: "testCard1",
                    limit: 0,
                    balance: 0
                },
                {
                    number: "2111222233334444",
                    name: "testCard2",
                    limit: 0,
                    balance: 0
                },
                {
                    number: "3111222233334444",
                    name: "testCard3",
                    limit: 0,
                    balance: 0
                }
            ];

            cards.forEach((card) => {
                repository.insert(card);
            });

            const storedCards = repository.getAll();

            expect(cards.length).toEqual(storedCards.length);

        });

    });

});
