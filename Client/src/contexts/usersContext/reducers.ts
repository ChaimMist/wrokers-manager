import {User} from "../../types/user";
import {UsersActions} from "../../types/usersContextTypes";

export const usersReducer = (state: User[] | [], action: UsersActions): User[] | [] => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'SET_USERS':
            return action.payload;
        default:
            return state;
    }
}