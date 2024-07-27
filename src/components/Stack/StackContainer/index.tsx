import { ReactNode } from "react";

import { StyledStackSection, StyledStackContainer } from "../style";

interface stackContainerProps {
    title: ReactNode,
    children?: ReactNode,
}

export default function StackContainer(props: stackContainerProps) {
    return (
        <StyledStackSection>
            <h3>{ props.title }</h3>
            <StyledStackContainer>
                { props.children }
            </StyledStackContainer>
        </StyledStackSection>
    );
}