import {CustomIconProps} from "./types";
import {ButtonBase} from "@mui/material";


export const CustomIcon = (props: CustomIconProps) => {
    let borderRadius:string;
    switch (props.shape) {
        case 'circle':
            borderRadius = '50%';
            break;
        case 'square':
            borderRadius = '0%';
            break;
        default:
            borderRadius = '10px';
            break;
    }

    return (
        <ButtonBase sx={{
            backgroundColor: props.fill ? props.color : 'transparent',
            color: "white",
            borderRadius: borderRadius,
            width: props.size ?? 32,
            height: props.size ?? 32,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }} onClick={props.onClick}>
            {props.children}
        </ButtonBase>
    )
}