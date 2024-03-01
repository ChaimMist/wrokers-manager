import {DBAccess} from "../../../utils/DbAccess/dbAccess";
import {ObjectId} from "mongodb";
import {User} from "../types/user";
import {userSchemas} from "../schemas/schemas";
import Joi from "joi";


export class UserServiceBl {


    static translateError(message: string): string {
        if (message.includes('email_1 dup key')) {
            return ('User already exists');
        }
        return message;
    }


    static async getUsers(): Promise<User[]> {
        try {
            return await DBAccess.selectMany('Users', {});
        } catch (e) {
            console.log(e)
            throw e;
        }
    }

    static async getUserById(userId: string): Promise<User> {
        try {
            return await DBAccess.selectOne('Users', {_id: new ObjectId(userId)});
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async updateUser(userId: string, user: User): Promise<void> {
        try {
            await DBAccess.upsert('Users', {_id: new ObjectId(userId)}, {$set: user});
        } catch (e) {
            console.error(e);
            throw e;
        }
    }


    static async insertUser(user: User): Promise<void> {
        const validation: Joi.ValidationResult = userSchemas.validate(user);
        if (validation.error) {
            throw validation.error;
        }
        await DBAccess.upsert('Users', {_id: new ObjectId(user._id)}, {$set: user});
    }

    static async deleteUser(userId: string): Promise<void> {
        try {
            await DBAccess.deleteOne('Users', {_id: new ObjectId(userId)});
        } catch (e) {
            console.error(e);
            throw e;

        }
    }

}
