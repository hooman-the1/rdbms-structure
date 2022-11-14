import Creator from "./create/create.interface.js";
import Deleter from "./delete/delete.interface.js";
import Reader from "./read/read.interface.js";
import Updater from "./update/update.interface.js";

export default interface CRUDAbstractCreator{
    createCreate(): Creator;
    createRead(): Reader;
    createUpdate(): Updater;
    createDelete(): Deleter;
}