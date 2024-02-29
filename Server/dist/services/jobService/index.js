"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractServer_1 = require("../../utils/AbstractServer/abstractServer");
const dbAccess_1 = require("../../utils/DbAccess/dbAccess");
const userServiceApi_1 = require("../userService/api/userServiceApi");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = abstractServer_1.AbstractServer.createServer();
        abstractServer_1.AbstractServer.serverListen(app, 3001);
        yield dbAccess_1.DBAccess.init("mongodb+srv://chaimmist:chaim123@workerforce.nuzyqqc.mongodb.net/?retryWrites=true&w=majority&appName=workerForce");
        yield userServiceApi_1.UserServiceApi.init(app);
    });
}
run();
