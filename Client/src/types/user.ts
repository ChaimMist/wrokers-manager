import {Credentials} from "./credentials";

export interface User extends Credentials {
    firstName: string;
    lastName: string;
    _id?: string;
    admin?: boolean;
    image?: string;
    token?: string;
    address?: string;
    job?: string;
    phone?: string;
}