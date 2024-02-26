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
exports.DBAccess = void 0;
const mongodb_1 = require("mongodb");
class DBAccess {
    static init(connectionString) {
        return __awaiter(this, void 0, void 0, function* () {
            DBAccess.client = new mongodb_1.MongoClient(connectionString, {
                serverApi: {
                    version: mongodb_1.ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
            });
            yield DBAccess.client.connect();
        });
    }
    static selectOne(collection, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DBAccess.client.db('WorkerForce').collection(collection).findOne(query);
        });
    }
    static selectMany(collection, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DBAccess.client.db('WorkerForce').collection(collection).find(query).toArray();
        });
    }
    static upsert(collection, query, update) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DBAccess.client.db('WorkerForce').collection(collection).updateOne(query, update, { upsert: true });
        });
    }
    static deleteOne(collection, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DBAccess.client.db('WorkerForce').collection(collection).deleteOne(query);
        });
    }
}
exports.DBAccess = DBAccess;
