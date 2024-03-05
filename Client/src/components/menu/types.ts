import {ReactNode} from "react";
import {PopoverOrigin, SxProps, Theme} from "@mui/material";


export interface MenuProps {
    children: ReactNode;
    anchorEl: null | HTMLElement;
    setAnchorEl: (value: null | HTMLElement) => void;
    sx?:  SxProps<Theme> | undefined;
    anchorOriginPos?: PopoverOrigin | undefined;
    transformPos?: PopoverOrigin | undefined;
}