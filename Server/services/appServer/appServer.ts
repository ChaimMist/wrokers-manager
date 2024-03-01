import express, {Application} from "express";
import bodyParser from "body-parser";
import {getUserRouter} from "../../routes/userRoutes";

const cors = require('cors');

export class AppServer {

    static app: Application
    static initServer() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    static initRoutes(): void {
        this.app.use('/user', getUserRouter());
    }

    static serverListen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}

