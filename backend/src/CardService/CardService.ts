import {CardRepository} from "../CardRepository/CardRepository";
import {Card} from "../Card";
import {singleton} from "tsyringe";
import {BadRequestException} from "../ErrorHandling/BadRequestException";

@singleton()
export class CardService {

    constructor(private cardRepository: CardRepository) {
    }

    public addCard(card: Card) {

        if (!this.isValidLuhn10(card.number)) {
            throw new BadRequestException("The card number is not valid");
        }

        const storedCard = this.getCard(card.number);

        if (storedCard) {
            throw new BadRequestException("Card already exists.");
        }

        return this.cardRepository.insert(card);
    }

    public getCards(): Card[] {
        return this.cardRepository.getAll();
    }

    public getCard(cardNumber: string): Card {

        return this.cardRepository.getCard(cardNumber);
    }

    private isValidLuhn10(cardNumber: string): boolean {

        const numbers = cardNumber.split("");

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
