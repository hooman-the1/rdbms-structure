import Deleter from "./delete.interface.js";

export default class CheckDelete implements Deleter{
    async delete(): Promise<boolean> {
        return await true;
    }
} 