import {useQuery} from "react-query";
import axios from "axios";

export const useGet = (url: string) => {
    return useQuery({
            queryFn: async (): Promise<any> => {
                return await axios.get(url)
            },
        }
    )
}