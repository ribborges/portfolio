import { ReactNode } from "react";
import styled from "styled-components";

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

const StyledStackSection = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
`;

const StyledStackContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;