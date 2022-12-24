import { ReactNode } from 'react';
import './_style.scss';

interface ButtonProps{
    href?: string,
    className?: string,
    children?: ReactNode,
}

export default function Button(props: ButtonProps) {
    return (
        <a href={props.href} className={"button" + " " + props.className} target="_blank" rel="noopener noreferrer">{props.children}</a>
    )
}