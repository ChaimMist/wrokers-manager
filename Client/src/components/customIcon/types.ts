import {ReactNode} from "react";


export interface CustomIconProps {
    children: ReactNode,
    color: string,
    size?: number,
    fill?: boolean,
    shape?: "square" | "circle"
    onClick?: () => void,
    animation?: string
}