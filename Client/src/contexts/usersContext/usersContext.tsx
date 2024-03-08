import {Context, createContext, FC, ReactNode, useReducer} from "react";
import {usersReducer} from "./reducers";
import {UsersContextTypes} from "../../types/usersContextTypes";

export const UsersContext: Context<UsersContextTypes | null> = createContext<UsersContextTypes | null>(null)
const UsersProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [users, dispatch] = useReducer(usersReducer, []);

    return (
        <UsersContext.Provider value={{users, dispatch}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;