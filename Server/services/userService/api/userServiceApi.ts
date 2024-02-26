import {UserServiceBl} from "../business-logic/userServiceBl";
import {User} from "../types/user";


export class UserServiceApi {
    static async init(app: any): Promise<void> {
        app.get('/users', UserServiceApi.getUsers);
        app.get('/users/:userId', UserServiceApi.getUserById);
        app.post('/createUser', UserServiceApi.createUser);
        app.put('/updateUser', UserServiceApi.updateUser);
        app.delete('/deleteUser', UserServiceApi.deleteUser);
    }

    static async getUsers(req: any, res: any): Promise<any> {
        try {
            const users: User[] = await UserServiceBl.getUsers();
            res.status(200).send(users);
        } catch (e:any) {
            res.status(500).send(e.message);
        }
    }

    static async getUserById(req: any, res: any): Promise<any> {
        const userId: string = req.params.userId;
        try {
            const user: User = await UserServiceBl.getUserById(userId);
            res.status(200).send(user);
        } catch (e:any) {
            res.status(500).send(e.message);
        }
    }

    static async createUser(req: any, res: any): Promise<void> {
        const user: User = req.body;
        try {
            await UserServiceBl.insertUser(user);
            res.status(200).send('User created successfully');
        } catch (e:any) {
            res.status(500).send(e.message);
        }
    }

    static async updateUser(req: any, res: any): Promise<void> {
        const user: User = req.body;
        try {
            await UserServiceBl.updateUser(user);
            res.status(200).send('User updated successfully');
        } catch (e:any) {
            res.status(500).send(e.message);
        }
    }

    static async deleteUser(req: any, res: any): Promise<void> {
        const userId: string = req.body;
        try {
            await UserServiceBl.deleteUser(userId);
            res.status(200).send('User deleted successfully');
        } catch (e:any) {
            res.status(500).send(e.message);
        }
    }
}