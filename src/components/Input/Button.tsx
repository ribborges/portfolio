import { ReactNode } from 'react';

interface ButtonProps {
    href?: string,
    className?: string,
    icon?: ReactNode,
    label?: string,
    target?: React.HTMLAttributeAnchorTarget | undefined
}

export default function Button(props: ButtonProps) {
    return (
        <a
            className="
                flex basis-[max-content] items-center justify-center content-center gap-2 
                p-3 m-2
                text-zinc-950 hover:text-zinc-950 dark:text-zinc-100 dark:hover:text-zinc-100
                hover:bg-indigo-700
                hover:no-underline
                border-2 border-solid rounded-lg hover:border-indigo-700
                transition duration-500
                select-none
            "
            href={props.href}
            target={props.target ? props.target : "_blank"}
            rel="noopener noreferrer"
        >
            {props.icon}
            <span>{props.label}</span>
        </a>
    );
}