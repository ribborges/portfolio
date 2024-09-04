'use client';

import styled from 'styled-components';
import { color } from '../../styles/theme';

const StyledStackCard = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: ${color.dark_grey}bb;
    border: 1px solid ${color.light}33;
    border-radius: 10px;
    padding: 0.4rem;
    transition: 0.5s;

    img {
        width: 1.6rem;
        height: 1.6rem;
    };

    p {
        color: ${color.light};
        font-size: 1rem;
    };

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 0 30px ${color.light}44);
    }
    
    @media (prefers-color-scheme: light) {
        background-color: ${color.light_grey}bb;
        border: 1px solid ${color.dark}33;

        p {
            color: ${color.dark};
        };
    }
`;

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

export { StyledStackCard, StyledStackSection, StyledStackContainer };