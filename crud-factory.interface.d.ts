import Creator from "./create.interface.js";
import Deleter from "./delete.interface.js";
import Reader from "./read.interface.js";
import Updater from "./update.interface.js";

export default interface CRUDAbstractCreator{
    createCreate(): Creator;
    createRead(): Reader;
    createUpdate(): Updater;
    createDelete(): Deleter;
}