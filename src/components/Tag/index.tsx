import { ReactNode } from "react";
import { StyledTag, StyledTagContainer } from "./style";

interface TagContainerProps {
    children?: ReactNode,
}

interface TagProps {
    text?: string,
    color?: string,
}

export function TagContainer(props: TagContainerProps) {
    return (
        <StyledTagContainer>
            { props.children }
        </StyledTagContainer>
    );
}

export function Tag(props: TagProps) {
    return (
        <StyledTag color={ props.color }>
            <span>{ props.text }</span>
        </StyledTag>
    );
}