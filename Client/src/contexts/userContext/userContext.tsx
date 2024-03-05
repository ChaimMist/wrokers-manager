import {Context, createContext, FC, ReactNode, useReducer} from "react";
import {UserContextTypes} from "../../types/userContextTypes";
import {userReducer} from "./userReducer";

export const UserContext: Context<UserContextTypes | null> = createContext<UserContextTypes | null>(null)
const UserProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [user, dispatch] = useReducer(userReducer, null);

    return (
        <UserContext.Provider value={{user, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;