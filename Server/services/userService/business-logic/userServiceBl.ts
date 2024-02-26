import {DBAccess} from "../../../utils/DbAccess/dbAccess";
import {ObjectId} from "mongodb";
import {User} from "../types/user";
import {QueryHandler} from "./queryHandler";


export class UserServiceBl {
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
            return await DBAccess.selectOne('Users', QueryHandler.getUserByIdQuery(userId));
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async insertUser(user: any): Promise<void> {
        try {
            await DBAccess.upsert('Users', QueryHandler.createUserQuery(user), {$set: user});
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async updateUser(user: any): Promise<void> {
        try {
            await DBAccess.upsert('Users', QueryHandler.updateUserQuery(user), {$set: user});
        } catch (e) {
            console.error(e);
            throw e;
        }
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
