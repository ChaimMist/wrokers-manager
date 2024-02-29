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
            app.get('/api/users', UserServiceApi.getUsers);
            app.get('/api/users/:userId', UserServiceApi.getUserById);
            app.post('/api/createUser', UserServiceApi.createUser);
            app.post('/api/updateUser', UserServiceApi.updateUser);
            app.post('/api/deleteUser', UserServiceApi.deleteUser);
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
            console.log('got request to get user by id');
            const userId = req.params;
            try {
                const user = yield userServiceBl_1.UserServiceBl.getUserById(userId);
                res.status(200).send(user);
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('got request to create user');
            yield UserServiceApi.wait(1000);
            const user = req.body.data;
            try {
                yield userServiceBl_1.UserServiceBl.insertUser(user);
                res.status(200).send('User created successfully');
            }
            catch (e) {
                res.status(500).send(userServiceBl_1.UserServiceBl.translateError(e.message));
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body.user;
            const id = req.body.id;
            try {
                yield userServiceBl_1.UserServiceBl.updateUser(id, user);
                res.status(200).send('User updated successfully');
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.body.data;
            try {
                yield userServiceBl_1.UserServiceBl.deleteUser(userId);
                res.status(200).send('User deleted successfully');
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        });
    }
    static wait(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            });
        });
    }
}
exports.UserServiceApi = UserServiceApi;
