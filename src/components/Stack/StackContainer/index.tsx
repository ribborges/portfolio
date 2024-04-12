import { ReactNode } from "react";
import styled from "styled-components";

import { Blanckspace } from "../../separator";

interface stackContainerProps {
    title: ReactNode,
    children?: ReactNode,
}

export default function StackContainer(props: stackContainerProps) {
    return (
        <StyledStackSection>
            <h2>{ props.title }</h2>
            <Blanckspace height="1vw"/>
            <StyledStackContainer>
                { props.children }
            </StyledStackContainer>
        </StyledStackSection>
    );
}

const StyledStackSection = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
`;

const StyledStackContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;