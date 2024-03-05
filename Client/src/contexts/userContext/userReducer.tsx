import {User} from "../../types/user";
import {UserActions} from "../../types/userContextTypes";

export const userReducer = (state: User | null, action: UserActions): User | null => {
    switch (action.type) {
        case 'UPDATE_USER':
            return action.payload;
        default:
            return state;
    }
}