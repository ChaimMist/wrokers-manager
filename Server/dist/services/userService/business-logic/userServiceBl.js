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
exports.UserServiceBl = void 0;
const dbAccess_1 = require("../../../utils/DbAccess/dbAccess");
const mongodb_1 = require("mongodb");
const schemas_1 = require("../schemas/schemas");
class UserServiceBl {
    static translateError(message) {
        if (message.includes('email_1 dup key')) {
            return ('User already exists');
        }
        return message;
    }
    static getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield dbAccess_1.DBAccess.selectMany('Users', {});
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    static getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield dbAccess_1.DBAccess.selectOne('Users', { _id: new mongodb_1.ObjectId(userId) });
            }
            catch (e) {
                console.error(e);
                throw e;
            }
        });
    }
    static updateUser(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield dbAccess_1.DBAccess.upsert('Users', { _id: new mongodb_1.ObjectId(userId) }, { $set: user });
            }
            catch (e) {
                console.error(e);
                throw e;
            }
        });
    }
    static insertUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = schemas_1.userSchemas.validate(user);
            if (validation.error) {
                throw validation.error;
            }
            yield dbAccess_1.DBAccess.upsert('Users', { _id: new mongodb_1.ObjectId(user._id) }, { $set: user });
        });
    }
    static deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield dbAccess_1.DBAccess.deleteOne('Users', { _id: new mongodb_1.ObjectId(userId) });
            }
            catch (e) {
                console.error(e);
                throw e;
            }
        });
    }
}
exports.UserServiceBl = UserServiceBl;
