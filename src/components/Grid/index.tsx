import { ReactNode } from 'react';
import styled from 'styled-components';

interface gridProps {
    children: ReactNode
}

export default function Grid(props: gridProps) {
    return (
        <GridContainer>
            {props.children}
        </GridContainer>
    );
}

const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;