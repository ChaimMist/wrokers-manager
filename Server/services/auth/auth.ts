import jwt from 'jsonwebtoken';
import {User} from "../../types/user";
import dotenv from 'dotenv';
dotenv.config();

export class Auth {

    static isAuthorized(token: string): boolean{
        return this.isTokenValid(token) && !this.isTokenExpired(token);
    }

    static isAdmin(token: string): boolean{
        const decoded: any = this.decodeToken(token);
        console.log(decoded)
        return decoded.user.admin;
    }

    static createToken(user:User): string{
        return jwt.sign({user}, process.env.JWT_SECRET as string, {expiresIn: '3m'});
    }

    static decodeToken(token: string): any{
        return jwt.verify(token, process.env.JWT_SECRET as string);
    }

    static isTokenValid(token: string): boolean{
        try{
            jwt.verify(token, process.env.JWT_SECRET as string);
            return true;
        }catch (e){
            return false;
        }
    }

    static isTokenExpired(token: string): boolean{
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
        return decoded.exp < Date.now();
    }
}