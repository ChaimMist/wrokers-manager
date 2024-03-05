import {ReactNode} from "react";

export interface BaseLayoutProps {
    children: ReactNode,
}

export interface Page {
    title: string;
    link: string;
}