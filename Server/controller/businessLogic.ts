import Joi from "joi";
import {DBAccess} from "../services/DbAccess/dbAccess";
import {ObjectId, UpdateResult} from "mongodb";
import {Request, Response} from "express";
import {Credentials} from "../types/credentials";
import {User} from "../types/user";
import {credentialsSchema, userSchemas} from "../schemas/userSchemas";


export class BusinessLogic {

    static translateError(message: string): string {
        if (message.includes('email_1 dup key')) {
            return ('User already exists');
        }
        return message;
    }

    static async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const users: User[] = await DBAccess.selectMany('Users', {});
            res.status(200).send(users);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }

    static async getUserById(req: Request, res: Response): Promise<void> {
        const userId: string = req.params.userId;
        try {
            return await DBAccess.selectOne('Users', {_id: new ObjectId(userId)});
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async updateUser(req: Request, res: Response): Promise<void> {
        const userId: string = req.body.id;
        const user: User = req.body.user;
        try {
            const upsertInfo: UpdateResult = await DBAccess.upsert('Users', {_id: new ObjectId(userId)}, {$set: user});
            res.status(200).send(`User id: ${upsertInfo.upsertedId} updated successfully`);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }

    static async signIn(req: Request, res: Response): Promise<void> {
        const credentials: Credentials = req.body.credentials;
        const validation: Joi.ValidationResult = credentialsSchema.validate(credentials);
        if (validation.error) {
            res.status(442).send(validation.error.message);
            return;
        }

        try {
            const user: User = await DBAccess.selectOne('Users', {
                email: credentials.email,
                password: credentials.password
            });
            if (user) {
                res.status(200).send('Login successful');
            } else {
                res.status(401).send('email or password is incorrect');
            }
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }

    static async insertUser(req: Request, res: Response): Promise<void> {
        const user: User = req.body.user;
        const validation: Joi.ValidationResult = userSchemas.validate(user);
        if (validation.error) {
            res.status(442).send(validation.error.message);
        }
        try {
            await DBAccess.upsert('Users', {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password
            }, {$set: user});
            res.status(200).send('User created successfully');
        } catch (e: any) {
            res.status(500).send(BusinessLogic.translateError(e.message));
        }
    }

    static async deleteUser(req: Request, res: Response): Promise<void> {
        const userId: string = req.body.data;
        try {
            await DBAccess.deleteOne('Users', {_id: new ObjectId(userId)});
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

}
