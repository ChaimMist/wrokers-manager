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
exports.UserServiceApi = void 0;
const userServiceBl_1 = require("../business-logic/userServiceBl");
class UserServiceApi {
    static init(app) {
        return __awaiter(this, void 0, void 0, function* () {
            app.get('/users', UserServiceApi.getUsers);
            app.get('/users/:userId', UserServiceApi.getUserById);
            app.post('/createUser', UserServiceApi.createUser);
            app.put('/updateUser', UserServiceApi.updateUser);
            app.delete('/deleteUser', UserServiceApi.deleteUser);
        });
    }
    static getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userServiceBl_1.UserServiceBl.getUsers();
                res.status(200).send(users);
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        });
    }
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            try {
                const user = yield userServiceBl_1.UserServiceBl.getUserById(userId);
                res.status(200).send(user);
            }
            catch (e) {
                res.status(500).send(e);
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            try {
                yield userServiceBl_1.UserServiceBl.insertUser(user);
                res.status(200).send('User created successfully');
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            try {
                yield userServiceBl_1.UserServiceBl.updateUser(user);
                res.status(200).send('User updated successfully');
            }
            catch (e) {
                res.status(500).send(e);
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.body;
            try {
                yield userServiceBl_1.UserServiceBl.deleteUser(userId);
                res.status(200).send('User deleted successfully');
            }
            catch (e) {
                res.status(500).send(e);
            }
        });
    }
}
exports.UserServiceApi = UserServiceApi;
