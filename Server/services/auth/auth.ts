import jwt from 'jsonwebtoken';
import {User} from "../../types/user";
import dotenv from 'dotenv';

dotenv.config();

export class Auth {

    static isAdmin(token: string): boolean {
        try {
            const decoded: any = this.decodeToken(token);
            return decoded.user.admin;
        } catch (e) {
            return false;
        }
    }

    static createToken(user: User): string {
        return jwt.sign({user}, process.env.JWT_SECRET as string, {expiresIn: '1h'});
    }

    static decodeToken(token: string): string | jwt.JwtPayload | Error {
        try {
            const decoded: jwt.JwtPayload = jwt.decode(token) as jwt.JwtPayload;
            if (!decoded || !decoded.exp) {
                throw new Error('Invalid token or missing expiration time.');
            }
            const currentTime = Math.floor(Date.now() / 1000);
            if (currentTime > decoded.exp) {
                throw new Error('Token has expired.');
            }
            return decoded;
        } catch (error: any) {
            return error.message;
        }
    }

}