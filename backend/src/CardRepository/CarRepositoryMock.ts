import {CardRepository} from "./CardRepository";
import {injectable} from "tsyringe";

@injectable()
export class CarRepositoryMock extends CardRepository {

    public static toReturn;
    public static calledArgs;

    public insert(...args) {
        return this.callMock(...args);
    }

    public getAll(...args) {
        return this.callMock(...args);
    }

    public getCard(...args) {
        return this.callMock(...args);
    }

    private callMock(...args) {
        CarRepositoryMock.calledArgs = args;
        return CarRepositoryMock.toReturn;
    }
}
