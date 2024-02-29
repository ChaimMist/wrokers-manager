import axios from "axios";
import {useMutation} from "react-query";


export const usePost = (url: string, data: any) => {
    return useMutation({
            mutationFn: async (): Promise<any> => {
                return await axios.post(url, data)
            },
            meta: {
                enabled: false,
            }
        }
    )
}


