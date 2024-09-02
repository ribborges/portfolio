'use client';

import { ReactNode, useState } from "react";
import { StyledToggleButton, StyledToggleContainer } from "./style";

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