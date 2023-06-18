import React from "react";
import { ReactNode, useState } from "react";

import './style/_toggle.scss';

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
        <button id={props.id} onClick={props.onClick} className={"toggle-btn " + props.className}>
            {props.children}
        </button>
    );
}

export function ToggleContainer(props: toggleContainerProps) {
    const [active, setActive] = useState(0);

    const childrenArray = React.Children.toArray(props.children);

    return (
        <div id={props.id} className="flex-container flex-col flex-center">
            <div className="toggle">
                {
                    childrenArray?.map((value, index) => (
                        <ToggleButton key={index} id={props.id + "_btn" + index} onClick={() => setActive(index)} className={active === index? "active" : ""}>{props.labels[index]}</ToggleButton>
                    ))
                }
            </div>
            {
                childrenArray[active]
            }
        </div>
    );
}