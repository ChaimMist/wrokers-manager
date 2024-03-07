import {Request, Response} from "express";
import {BusinessLogic} from "./businessLogic";
import {ErrorMessage} from "../types/errorMessage";
import {User} from "../types/user";


export class Controller {
    static async user(req: Request, res: Response): Promise<void> {
        const token: string = req.headers.token as string;
        try {
            const user: User = await BusinessLogic.getUser(token);
            res.status(200).send(user);
        } catch (e: any) {
            e = e as ErrorMessage;
            res.status(e.status).send(e.message);
        }
    }


}