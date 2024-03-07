import {Credentials} from "./credentials";

export interface User extends Credentials{
    firstName: string;
    lastName: string;
    admin: boolean;
    token: string;
    _id: string;

}