import express, {Router} from "express";
import {BusinessLogic} from "../controller/businessLogic";


export const getUserRouter = (): Router => {
    const router: Router = express.Router();
    router.get('/getUsers', BusinessLogic.getUsers);
    router.get('/getUser', BusinessLogic.getUser);
    router.get('/getUserById', BusinessLogic.getUserById);
    router.post('/signUp', BusinessLogic.insertUser);
    router.post('/signIn', BusinessLogic.signIn);
    router.post('/updateUser', BusinessLogic.updateUser);
    router.post('/deleteUser', BusinessLogic.deleteUser);
    return router;
}

