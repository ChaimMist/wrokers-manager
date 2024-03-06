import jwt from 'jsonwebtoken';
import {User} from "../../types/user";
import dotenv from 'dotenv';
dotenv.config();

export class Auth {

    static isAdmin(token: string): boolean{
        try {
            const decoded: any = this.decodeToken(token);
            return decoded.user.admin;
        } catch (e) {
            return false;
        }
    }

    static createToken(user:User): string{
        return jwt.sign({user}, process.env.JWT_SECRET as string, {expiresIn: '3m'});
    }

    static decodeToken(token: string): string | jwt.JwtPayload | Error{
        return jwt.verify(token, process.env.JWT_SECRET as string);
    }

    static isTokenExpired(token: string): boolean{
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
        return decoded.exp < Date.now();
    }
}