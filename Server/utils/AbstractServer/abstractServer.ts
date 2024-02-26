
export class AbstractServer {
    public static bodyParser = require('body-parser');
    public static cors = require('cors');

    static createServer(): any{
        const express = require('express');
        const app = express();
        app.use(AbstractServer.bodyParser.json());
        app.use(AbstractServer.cors());

        return app;
    }

    static serverListen(app: any, port: number): void{
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}