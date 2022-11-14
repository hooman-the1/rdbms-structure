import Updater from "./update.interface.js";

export default class CrawlUpdate implements Updater{
    async update(): Promise<boolean> {
        return await true;
    }
}