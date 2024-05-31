import { ReactNode } from 'react';
import styled from 'styled-components';

import { color, radius } from '../../styles/theme';

interface ButtonProps{
    href?: string,
    className?: string,
    children?: ReactNode,
    target?: React.HTMLAttributeAnchorTarget | undefined
}

export default function Button(props: ButtonProps) {
    return (
        <StyledButton className={props.className} href={props.href} target={props.target ? props.target : "_blank"} rel="noopener noreferrer">{props.children}</StyledButton>
    )
}

const StyledButton = styled.a`
    color: ${color.light};
    background-color: transparent;
    text-decoration: none;
    display: flex;
    align-items: center;
    align-content: center;
    gap: 5px;
    flex-basis: max-content;
    border-radius: ${radius.medium};
    border: 2px solid ${color.accent_primary};
    padding: 15px;
    margin: 15px;
    transition: 1s;

    &:hover, &:focus {
        color: unset;
        background-color: ${color.accent_primary};
        box-shadow: 0 0 100px 0 ${color.light}22;
        text-decoration: none;
    }

    &:disabled {
        color: ${color.light}22;
        border: 2px solid ${color.light}22;

        &:hover, &:focus {
            background-color: transparent;
            box-shadow: none;
        }
    }

    @media screen and (max-width: 700px) {
        padding: 10px;
        margin: 5px;
    }

    @media (prefers-color-scheme: light) {
        color: ${color.dark};

        &:hover, &:focus {
            color: ${color.dark};
        }

        &:disabled {
            color: ${color.dark}22;
            border: 2px solid ${color.accent_primary}22;
        }
    }
`;