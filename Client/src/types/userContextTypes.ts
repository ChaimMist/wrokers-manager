import {User} from "./user";


export interface UserContextTypes {
    user: User | null
    setUser: (user: User | null) => void
}
