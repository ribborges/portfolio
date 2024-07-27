import { ReactNode } from 'react';

import { StyledButton } from './style';

interface ButtonProps {
    href?: string,
    className?: string,
    icon?: ReactNode,
    label?: string,
    target?: React.HTMLAttributeAnchorTarget | undefined
}

export default function Button(props: ButtonProps) {
    return (
        <StyledButton className={props.className} href={props.href} target={props.target ? props.target : "_blank"} rel="noopener noreferrer">{props.icon} <span>{props.label}</span></StyledButton>
    );
}