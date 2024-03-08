import {User} from "../../types/user";

export interface EditModalProps{
    open: boolean;
    setOpen: (open: boolean) => void;
    user: User;

}