import {CardRepository} from "../CardRepository/CardRepository";
import {Card} from "../Card";
import {singleton} from "tsyringe";

@singleton()
export class CardService {

    constructor(private cardRepository: CardRepository) {
    }

    public addCard(card: Card) {

        if (!this.isValid(card)) {
            throw new Error("Invalid Number");
        }

        this.cardRepository.insert(card);

    }

    private isValid(card: Card): boolean {

        const numbers = card.number.split("");

        let isSecond = false;

        const sum = numbers.reduceRight((sum, value) => {

            let intValue = parseInt(value);

            if (isSecond) {

                intValue = intValue * 2;

                if (intValue > 9) {

                    intValue = intValue
                        .toString()
                        .split("")
                        .reduce((sum, digit) => {
                            return sum + parseInt(digit);
                        }, 0);
                }

            }

            isSecond = !isSecond;

            return sum + intValue;
        }, 0);

        return (sum % 10 == 0);
    }
}
