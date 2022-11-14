import Deleter from "./delete.interface.js";

export default class CrawlDelete implements Deleter{
    async delete(): Promise<boolean> {
        return await true;
    }
} 