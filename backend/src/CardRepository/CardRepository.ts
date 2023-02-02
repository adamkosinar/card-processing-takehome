import {injectable} from "tsyringe";
import {Card} from "../Card";

@injectable()
export class CardRepository {

    private data = new Map();

    public insert(card: Card) {

       return this.data.set(card.number, card);

    }

    public getAll(): Card[] {

        return [...this.data.values()];
    }

    public getCard(id: string) {

        return this.data.get(id);

    }
}
