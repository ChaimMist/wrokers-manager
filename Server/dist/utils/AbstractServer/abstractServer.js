"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractServer = void 0;
class AbstractServer {
    static createServer() {
        const express = require('express');
        const app = express();
        app.use(AbstractServer.bodyParser.json());
        app.use(AbstractServer.cors());
        return app;
    }
    static serverListen(app, port) {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}
exports.AbstractServer = AbstractServer;
AbstractServer.bodyParser = require('body-parser');
AbstractServer.cors = require('cors');
