import {UserServiceBl} from "../business-logic/userServiceBl";
import {User} from "../types/user";
import {userSchemas} from "../schemas/schemas";


export class UserServiceApi {

    static async init(app: any ): Promise<void> {
        app.get('/api/users', UserServiceApi.getUsers);
        app.get('/api/users/:userId', UserServiceApi.getUserById);
        app.post('/api/createUser', UserServiceApi.createUser);
        app.post('/api/updateUser', UserServiceApi.updateUser);
        app.post('/api/deleteUser', UserServiceApi.deleteUser);
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
        console.log('got request to get user by id');
        const userId: string = req.params;
        try {
            const user: User = await UserServiceBl.getUserById(userId);
            res.status(200).send(user);
        } catch (e:any) {
            res.status(500).send(e.message);
        }
    }
    static async createUser(req: any, res: any): Promise<void> {
        console.log('got request to create user');
        await UserServiceApi.wait(1000);
        const user: User = req.body.data;
        try {
            await UserServiceBl.insertUser(user);
            res.status(200).send('User created successfully');
        } catch (e:any) {
            res.status(500).send(UserServiceBl.translateError(e.message));
        }
    }

    static async updateUser(req: any, res: any): Promise<void> {
        const user: User = req.body.user;
        const id: string = req.body.id;
        try {
            await UserServiceBl.updateUser(id, user);
            res.status(200).send('User updated successfully');
        } catch (e:any) {
            res.status(500).send(e.message);
        }
    }

    static async deleteUser(req: any, res: any): Promise<void> {
        const userId: string = req.body.data;
        try {
            await UserServiceBl.deleteUser(userId);
            res.status(200).send('User deleted successfully');
        } catch (e:any) {
            res.status(500).send(e.message);
        }
    }

    private static async wait(ms: number) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
}