'use client';

import styled from 'styled-components';

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

export { GridContainer };