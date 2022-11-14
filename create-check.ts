import Creator from "./create.interface.js";

export default class CheckCreate implements Creator{
    async create(){
        return await true 
    }
}