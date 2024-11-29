'use client';

import { ReactNode } from "react";

interface TitleProps {
    icon: ReactNode,
    title: string
}

export default function Title(props: TitleProps) {

    return (
        <h1 className="flex items-center gap-6">
            {props.icon}
            <span className="font-bold">{props.title}</span>
        </h1>
    );
}