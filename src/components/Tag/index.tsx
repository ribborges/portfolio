import { ReactNode } from "react";
import clsx from "clsx";

interface TagContainerProps {
    children?: ReactNode,
}

interface TagProps {
    text?: string,
    className?: string,
}

export function TagContainer(props: TagContainerProps) {
    return (
        <div className="
            flex flex-wrap content-center
        ">
            {props.children}
        </div>
    );
}

export function Tag({
    text,
    className,
}: TagProps) {
    return (
        <div className={clsx(
            `
                inline-block
                p-1 pr-2 pl-2 m-1
                rounded-full
                text-white text-xs
            `,
            className || ""
        )}>
            <span>{text}</span>
        </div>
    );
}