import axios, {AxiosInstance, AxiosResponse} from "axios";
import {User} from "../../types/user";
import {Credentials} from "../../types/credentials";
import Cookies from "js-cookie";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001/users'
});

export const signUp = async (user: User): Promise<string> => {
    return await axiosInstance.post('/signUp', {user});
}

export const signIn = async (credentials: Credentials): Promise<User> => {
    return (await axiosInstance.post('/signIn', {credentials})).data;
}

export const updateUser = async (user: User): Promise<void> => {
    const token: string | undefined = Cookies.get('token');
    if (!token) return;
    await axiosInstance.put(`/update`, user, {headers: {token}});

}

export const getUser = async (): Promise<User | undefined> => {
    const token: string | undefined = Cookies.get('token');
    if (!token) return;
    const response: AxiosResponse = await axiosInstance.get('/user', {headers: {token}});
    return response.data;
}

export const getUsers = async (): Promise<User[]> => {
    const token: string | undefined = Cookies.get('token');
    if (!token) return [];
    const response: AxiosResponse = await axiosInstance.get('/users', {headers: {token}});
    return response.data;
}

