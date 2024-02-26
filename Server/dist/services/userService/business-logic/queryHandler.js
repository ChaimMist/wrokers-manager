"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryHandler = void 0;
const mongodb_1 = require("mongodb");
class QueryHandler {
    static getUserByIdQuery(userId) {
        return { _id: new mongodb_1.ObjectId(userId) };
    }
    static createUserQuery(user) {
        return { firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.password, admin: user.admin };
    }
    static updateUserQuery(user) {
        return { firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.password, admin: user.admin };
    }
}
exports.QueryHandler = QueryHandler;
