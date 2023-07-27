import {MongoClient} from "mongodb";
import {config} from "./config";



class Database{

    private client MongoClient;


    constructor() {
        this.client = new MongoClient(config.url);
    }

    async connect() : Promise<void> {
        try{
            await this.client.connect();
            console.log("Database connected!");
        }
        catch(error) {
            console.log(error);
            throw error;
        }

    }

    async disconnect(): Promise<void>{
        try{
            await this.client.disconnect();
            console.log("Database disconnected...");
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }

    getDB(): Db{
        try{
            return this.client.db(config.db.name);
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }


}