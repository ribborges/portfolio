'use client';

import { ReactNode, useState } from "react";
import clsx from "clsx";

import { FlexContainer } from "@/components/Container";

interface toggleButtonProps {
    id?: string,
    active?: boolean,
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
        <button
            id={props.id}
            onClick={props.onClick}
            className={
                clsx(
                    props.className || '',
                    "inline-block p-2 rounded-lg",
                    "after:content-[\"\"] after:block after:mt-1 after:w-full after:h-1 after:rounded-lg after:transiton after:duration-500",
                    props.active ? "after:bg-slate-400" : "after:bg-transparent",
                    "hover:after:bg-slate-800",
                    "select-none"
                )
            }
        >
            <span className="p-1">{props.children}</span>
        </button>
    );
}

export function Toggle(props: toggleContainerProps) {
    const [active, setActive] = useState(0);

    return (
        <FlexContainer id={props.id} direction="col" items="center">
            <div className="flex justify-center w-11/12 m-4 overflow-x-scroll whitespace-nowrap select-none">
                {
                    props.items?.map((value, index) => (
                        <ToggleButton
                            key={index}
                            id={props.id + "_btn" + index}
                            onClick={() => setActive(index)}
                            active={active === index}
                        >{props.items[index].label}</ToggleButton>
                    ))
                }
            </div>
            {
                props.items[active].content
            }
        </FlexContainer>
    );
}