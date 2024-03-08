import {Request, Response} from "express";
import {BusinessLogic} from "./businessLogic";
import {User} from "../types/user";
import {Credentials} from "../types/credentials";


export class Controller {
    static async user(req: Request, res: Response): Promise<void> {
        const token: string = req.headers.token as string;
        try {
            const user: User = await BusinessLogic.getUser(token);
            res.status(200).send(user);
        } catch (e: any) {
            res.status(e.status ?? 500).send(e.message);
        }
    }

    static async users(req: Request, res: Response): Promise<void> {
        const token: string = req.headers.token as string;
        try {
            const users: User[] = await BusinessLogic.getUsers(token);
            res.status(200).send(users);
        } catch (e: any) {
            res.status(e.status ?? 500).send(e.message);
        }
    }

    static async signIn(req: Request, res: Response): Promise<void> {
        const credentials: Credentials = req.body.credentials;
        try {
            const user: User = await BusinessLogic.signIn(credentials);
            res.status(200).send(user);
        } catch (e: any) {
            res.status(e.status ?? 500).send(e.message);
        }
    }

    static async signUp(req: Request, res: Response): Promise<void> {
        const user: User = req.body.user;
        try {
            await BusinessLogic.insertUser(user);
            res.status(200).send('User inserted successfully');
        } catch (e: any) {
            res.status(e.status ?? 500).send(e.message);
        }
    }

    static async deleteUser(req: Request, res: Response): Promise<void> {
        const userId: string = req.body.id;
        const token: string = req.headers.token as string;
        try {
            await BusinessLogic.deleteUser(token, userId);
            res.status(200).send('User deleted successfully');
        } catch (e: any) {
            res.status(e.status ?? 500).send(e.message);
        }
    }

    static async updateUser(req: Request, res: Response): Promise<void> {
        const user: User = req.body;
        const token: string = req.headers.token as string;
        try {
            await BusinessLogic.updateUser(user, token);
            res.status(200).send(`User id: ${user._id} updated successfully`);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }
}