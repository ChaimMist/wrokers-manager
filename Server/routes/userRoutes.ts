import express, {Router} from "express";
import {BusinessLogic} from "../controller/businessLogic";


export const getUserRouter = (): Router => {
    const router: Router = express.Router();
    router.get('/', BusinessLogic.getUsers);
    router.get(':userId', BusinessLogic.getUserById);
    router.post('/signUp', BusinessLogic.insertUser);
    router.post('/signIn', BusinessLogic.signIn);
    router.post('/updateUser', BusinessLogic.updateUser);
    router.post('/deleteUser', BusinessLogic.deleteUser);
    return router;
}

