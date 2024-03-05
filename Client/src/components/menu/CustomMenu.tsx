import {Menu, PopoverOrigin} from "@mui/material";
import {MenuProps} from "./types";


export const CustomMenu = (props: MenuProps) => {
    const anchorOriginPos: PopoverOrigin = props.anchorOriginPos ? props.anchorOriginPos : {
        vertical: 'bottom',
        horizontal: 'center',
    }

    const transformPos: PopoverOrigin = props.transformPos ? props.transformPos : {
        vertical: 'top',
        horizontal: 'center',
    }

    return (
        <Menu
            id="menu"
            anchorEl={props.anchorEl}
            anchorOrigin={anchorOriginPos}
            transformOrigin={transformPos}
            open={Boolean(props.anchorEl)}
            onClose={() => props.setAnchorEl(null)}
            sx={props.sx}
        >
            {props.children}
        </Menu>
    )
}