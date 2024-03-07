import express, {Router} from "express";
import {BusinessLogic} from "../controller/businessLogic";
import {Controller} from "../controller/controller";


export const getUserRouter = (): Router => {
    const router: Router = express.Router();
    router.get('/users', BusinessLogic.getUsers);
    router.get('/user', Controller.user);
    router.get('/getUserById', BusinessLogic.getUserById);
    router.post('/signUp', BusinessLogic.insertUser);
    router.post('/signIn', BusinessLogic.signIn);
    router.post('/updateUser', BusinessLogic.updateUser);
    router.post('/deleteUser', BusinessLogic.deleteUser);
    return router;
}

