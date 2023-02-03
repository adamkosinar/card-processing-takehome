import {singleton} from "tsyringe";
import {CardService} from "../CardService/CardService";
import {Card} from "../Card";

@singleton()
export class CardController {

    constructor(private cardService: CardService) {
    }

    public async addCard(request, response) {

        const payload = request.body;

        this.cardService.addCard(payload);

        response.send({
            success: true
        });

    }

    public async getCards(request, response) {

        response.send(this.cardService.getCards());

    }
}

