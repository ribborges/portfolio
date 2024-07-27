import React from "react";
import { ReactNode, useState } from "react";
import styled from "styled-components";

import { color, radius } from "../../styles/theme";

interface toggleButtonProps {
    id?: string,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: ReactNode;
}

interface toggleContainerProps {
    id: string,
    items: Array<{
        label: string,
        content: ReactNode
    }>
}

export function ToggleButton(props: toggleButtonProps) {

    return (
        <StyledToggleButton id={props.id} onClick={props.onClick} className={props.className}>
            {props.children}
        </StyledToggleButton>
    );
}

export function ToggleContainer(props: toggleContainerProps) {
    const [active, setActive] = useState(0);

    return (
        <div id={props.id} className="flex-container flex-col flex-center">
            <StyledToggleContainer>
                {
                    props.items?.map((value, index) => (
                        <ToggleButton key={index} id={props.id + "_btn" + index} onClick={() => setActive(index)} className={active === index? "active" : ""}>{props.items[index].label}</ToggleButton>
                    ))
                }
            </StyledToggleContainer>
            {
                props.items[active].content
            }
        </div>
    );
}

const StyledToggleButton = styled.button`
    padding: 10px;
    border-radius: ${radius.medium};
    transition: 1s;

    &:hover {
        background-color: ${color.accent_primary};
    }

    &.active {
        background-color: ${color.accent_secondary};
    }
`;

const StyledToggleContainer = styled.div`
    display: flex;
    gap: 10px;
    margin: 15px;
    border-radius: ${radius.medium};
    border: 2px solid ${color.light_grey}22;

    @media (prefers-color-scheme: light) {
        border: 2px solid ${color.dark_grey}22;
    }
`;