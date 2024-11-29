import { ReactNode } from "react";

interface stackContainerProps {
    title: ReactNode,
    children?: ReactNode,
}

export default function StackContainer(props: stackContainerProps) {
    return (
        <div className="
            flex flex-col gap-4
            mt-6 mb-6
        ">
            <h3>{ props.title }</h3>
            <div className="flex flex-wrap gap-4">
                { props.children }
            </div>
        </div>
    );
}