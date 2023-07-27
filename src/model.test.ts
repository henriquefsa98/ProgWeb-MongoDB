import {Database} from "./database"

const database = new Database();

database.connect().then(() => {
    database.disconnect();
});