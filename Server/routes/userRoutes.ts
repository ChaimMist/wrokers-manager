import express, {Router} from "express";
import {BusinessLogic} from "../controller/businessLogic";
import {Controller} from "../controller/controller";


export const getUserRouter = (): Router => {
    const router: Router = express.Router();
    router.get('/users', Controller.users);
    router.get('/user', Controller.user);
    router.post('/signUp', Controller.signUp);
    router.post('/signIn', Controller.signIn);
    router.put('/update', Controller.updateUser);
    router.delete('/delete', Controller.deleteUser);
    return router;
}

