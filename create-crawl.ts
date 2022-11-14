import Creator from "./create.interface.js";

export default class CrawlCreate implements Creator{
    async create(): Promise<boolean> {
        return await true;
    }
}