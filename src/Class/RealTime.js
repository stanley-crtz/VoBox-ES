import { Config } from "../Config";

class RealTime {

    constructor(){

        this.db = Config.connectFirebase.database;
        
    }

}

export default new RealTime();