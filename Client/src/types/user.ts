export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    id?: string;
    admin?: boolean;
}