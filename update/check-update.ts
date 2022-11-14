import Updater from "./update.interface.js";

export default class CheckUpdate implements Updater{
    async update(): Promise<boolean> {
        return await true;
    }
}