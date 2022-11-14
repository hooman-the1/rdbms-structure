import Reader from "./read.interface.js";

export default class CheckRead implements Reader{
    async read(): Promise<any[]> {
        return await ['true']
    }
}