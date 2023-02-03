import "reflect-metadata";
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import {container} from "tsyringe";
import {CardController} from "./src/CardController/CardController";

const server = fastify();
const port = process.env.PORT || 3000;

server.register(fastifyCors, {});

const controller = container.resolve(CardController);

server.post("/v1/card", controller.addCard.bind(controller));
server.get("/v1/cards", controller.getCards.bind(controller));

server.listen(port, "0.0.0.0", (err, address) => {

    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server listening at ${address}`);
});
