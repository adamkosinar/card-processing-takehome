import {singleton} from "tsyringe";
import {CardService} from "../CardService/CardService";
import {BadRequestException} from "../ErrorHandling/BadRequestException";

@singleton()
export class CardController {

    constructor(private cardService: CardService) {
    }

    public addCard(request, response) {

        const payload = request.body;

        try {

            payload.balance = 0;
            this.cardService.addCard(payload);
            this.renderResponse(200, {success: true}, response);

        } catch (exception) {

            if (exception instanceof BadRequestException) {

                return this.renderBadRequest(exception.message, response);

            }

            this.renderInternalServerError(response);
        }

    }

    public getCards(request, response) {

        try {

            this.renderResponse(200, this.cardService.getCards(), response);
        }
        catch (exception) {

            this.renderInternalServerError(response);
        }
    }

    private renderResponse(statusCode, body, response) {

        response.code(statusCode);
        response.send(body);
    }

    private renderBadRequest(message: string, response) {

        this.renderResponse(400, {
            message: message
        }, response);
    }

    private renderInternalServerError(response) {

        this.renderResponse(500, {
            message: "Internal Server Error"
        }, response);
    }
}

