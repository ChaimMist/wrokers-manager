import axios, {AxiosInstance} from "axios";
import {User} from "../../types/user";
import {Credentials} from "../../types/credentials";

const axiosInstance:AxiosInstance = axios.create({
        baseURL: 'http://localhost:3001/user'
});

export const signUp = async (user: User): Promise<string> => {
        return await axiosInstance.post('/signUp', {user});
}

export const signIn = async (credentials: Credentials): Promise<string> => {
        return await axiosInstance.post('/signIn', {credentials});
}

