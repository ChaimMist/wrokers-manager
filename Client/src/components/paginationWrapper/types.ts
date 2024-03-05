import {User} from "../../types/user";


export interface UserCardGridProps {
    users: User[],
    page?: number,
    pageSize?: number,
    pagination?: boolean
}