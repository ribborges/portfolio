import { ReactNode } from 'react';

import './style/_button.scss';

interface ButtonProps{
    href?: string,
    className?: string,
    children?: ReactNode,
    target?: React.HTMLAttributeAnchorTarget | undefined
}

export default function ButtonLink(props: ButtonProps) {
    return (
        <a className={props.className + " button"} href={props.href} target={props.target ? props.target : "_blank"} rel="noopener noreferrer">{props.children}</a>
    )
}