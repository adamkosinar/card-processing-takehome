import {singleton} from "tsyringe";
import {CardService} from "../CardService/CardService";
import {BadRequestException} from "../ErrorHandling/BadRequestException";
import * as z from "zod";

@singleton()
export class CardController {

    constructor(private cardService: CardService) {
    }

    public addCard(request, response) {

        const payload = request.body;

        try {

            this.validatePayload(payload);

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

    private validatePayload(payload) {

        try {

            z.object({
                number: z.string()
                    .max(19)
                    .regex(/^\d+$/),
                limit: z.number(),
                name: z.string()
            }).parse(payload);

        } catch (zodError) {
            console.log(zodError.issues);
            throw new BadRequestException(zodError.issues[0].message);
        }

    }

    private renderResponse(statusCode, body, response) {

        response.code(statusCode);
        response.send(body);
    }

    private renderBadRequest(message: string, response) {

        this.renderResponse(400, {
            success: false,
            message: message
        }, response);
    }

    private renderInternalServerError(response) {

        this.renderResponse(500, {
            success: false,
            message: "Internal Server Error"
        }, response);
    }
}

