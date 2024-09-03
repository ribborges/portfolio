'use client';

import { ReactNode, useState } from "react";
import { StyledToggleButton, StyledToggleContainer } from "./style";
import { FlexContainer } from "../Flex";

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
            <span>{props.children}</span>
        </StyledToggleButton>
    );
}

export function Toggle(props: toggleContainerProps) {
    const [active, setActive] = useState(0);

    return (
        <FlexContainer id={props.id} direction="column" align="center">
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
        </FlexContainer>
    );
}