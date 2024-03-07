import Joi from "joi";
import {DBAccess} from "../services/DbAccess/dbAccess";
import {Credentials} from "../types/credentials";
import {User} from "../types/user";
import {credentialsSchema, userSchemas} from "../schemas/userSchemas";
import {Auth} from "../services/auth/auth";
import jwt from "jsonwebtoken";


export class BusinessLogic {
    static privateKey: string = process.env.JWT_SECRET as string;

    static translateError(message: string): string {
        if (message.includes('email_1 dup key')) {
            return ('User already exists');
        }
        return message;
    }

    static async getUsers(token: string): Promise<User[]> {
        const user: User = await BusinessLogic.getUser(token);
        if (user.admin) {
            return await DBAccess.selectMany('Users', {});
        } else {
            return await DBAccess.selectMany('Users', {}, {
                projection: {
                    password: false,
                    token: false,
                    admin: false,
                    _id: false
                }
            })
        }
    }

    static async getUser(token: string): Promise<User> {
        const decoded: any = jwt.verify(token, BusinessLogic.privateKey);
        if (!decoded) {
            throw {status: 401, message: 'Unauthorized'};
        }
        const user: User = await DBAccess.selectOne('Users', {
            email: decoded.user.email,
            password: decoded.user.password
        });
        if (user) {
            return user
        } else {
            throw {status: 404, message: 'User not found'};
        }
    }

    static async updateUser(userId: string, user: User, token: string): Promise<boolean> {
        if (!Auth.isAdmin(token)) {
            throw {status: 401, message: 'Unauthorized'};
        }
        try {
            return (await DBAccess.update('Users', {_id: userId}, {$set: user})).acknowledged;
        } catch (e: any) {
            throw {status: 500, message: e.message};
        }
    }

    static async signIn(credentials: Credentials): Promise<User> {
        const validation: Joi.ValidationResult = credentialsSchema.validate(credentials);
        if (validation.error) {
            throw {status: 442, message: validation.error.message}
        }
        const user: User = await DBAccess.selectOne('Users', {
            email: credentials.email,
            password: credentials.password
        });
        if (user) {
            user.token = Auth.createToken(user);
            return user;
        } else {
            throw {status: 401, message: 'Email or password incorrect'}
        }
    }

    static async insertUser(user: User): Promise<void> {
        const validation: Joi.ValidationResult = userSchemas.validate(user);
        if (validation.error) {
            throw {status: 442, message: validation.error.message}
        }
        try {
            await DBAccess.insertOne('Users', {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                phone: user.phone,
                address: user.address,
                job: user.job,
                image: user.image,
            });
        } catch (e: any) {
            throw {status: 500, message: BusinessLogic.translateError(e.message)};
        }
    }

    static async deleteUser(token: string, userId: string): Promise<void> {
        if (!Auth.isAdmin(token)) {
            throw {status: 401, message: 'Unauthorized'};
        }
        try {
            await DBAccess.deleteOne('Users', {_id: userId});
        } catch (e: any) {
            throw {status: 500, message: e.message};
        }
    }
}
