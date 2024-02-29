"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemas = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSchemas = joi_1.default.object({
    firstName: joi_1.default.string().required().min(3).max(30),
    lastName: joi_1.default.string().required().min(3).max(30),
    email: joi_1.default.string().email().required().email().max(60),
    password: joi_1.default.string().required().min(6).max(40),
});
