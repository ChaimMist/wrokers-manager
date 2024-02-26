import {ObjectId} from "mongodb";


export class QueryHandler {
    static getUserByIdQuery(userId: string): any {
        return {_id: new ObjectId(userId)};
    }

    static createUserQuery(user: any): any {
        return {firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.password, admin: user.admin};
    }

    static updateUserQuery(user: any): any {
        return {firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.password, admin: user.admin};
    }
}