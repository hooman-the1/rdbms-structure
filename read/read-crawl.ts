import Reader from "./read.interface.js";

export default class CrawlRead implements Reader{
    async read(): Promise<any[]> {
        return await ['true']
    }
}