import React from "react";
import { ReactNode, useState } from "react";
import styled from "styled-components";

import { color, radius } from "../../style/theme";

interface toggleButtonProps {
    id?: string,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: ReactNode;
}

interface toggleContainerProps {
    id: string,
    labels: Array<string>,
    children: ReactNode;
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

    const childrenArray = React.Children.toArray(props.children);

    return (
        <div id={props.id} className="flex-container flex-col flex-center">
            <StyledToggleContainer>
                {
                    childrenArray?.map((value, index) => (
                        <ToggleButton key={index} id={props.id + "_btn" + index} onClick={() => setActive(index)} className={active === index? "active" : ""}>{props.labels[index]}</ToggleButton>
                    ))
                }
            </StyledToggleContainer>
            {
                childrenArray[active]
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