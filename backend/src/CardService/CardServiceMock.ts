import {CardService} from "./CardService";
import {injectable} from "tsyringe";

@injectable()
export class CardServiceMock extends CardService {

    public static toThrow;
    public static toReturn;

    public addCard() {

        return this.callMock();
    }

    public getCards() {

        return this.callMock();
    }

    private callMock() {

        if (CardServiceMock.toThrow) {
            throw CardServiceMock.toThrow;
        }

        return CardServiceMock.toReturn;
    }
}
