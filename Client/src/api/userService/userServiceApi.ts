import axios from "axios";


export const signUp = async (data: any): Promise<any> => {
        return await axios.post('http://localhost:3001/api/createUser', {data})
}

