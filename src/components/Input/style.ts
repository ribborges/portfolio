'use client';

import styled from 'styled-components';
import { color, radius } from '../../styles/theme';

const StyledButton = styled.a`
    color: ${color.light};
    background-color: transparent;
    text-decoration: none;
    display: flex;
    align-items: center;
    align-content: center;
    gap: 5px;
    flex-basis: max-content;
    border-radius: ${radius.medium};
    border: 2px solid ${color.accent_primary};
    padding: 15px;
    margin: 15px;
    transition: 1s;

    span {
        font-size: 1.2rem;
    }

    &:hover, &:focus {
        color: unset;
        background-color: ${color.accent_primary};
        box-shadow: 0 0 100px 0 ${color.light}22;
        text-decoration: none;
    }

    &:disabled {
        color: ${color.light}22;
        border: 2px solid ${color.light}22;

        &:hover, &:focus {
            background-color: transparent;
            box-shadow: none;
        }
    }

    @media screen and (max-width: 700px) {
        padding: 10px;
        margin: 5px;

        span {
            font-size: 0.8rem;
        }
    }

    @media (prefers-color-scheme: light) {
        color: ${color.dark};

        &:hover, &:focus {
            color: ${color.dark};
        }

        &:disabled {
            color: ${color.dark}22;
            border: 2px solid ${color.accent_primary}22;
        }
    }
`;

const StyledToggleButton = styled.button`
    padding: 10px;
    border-radius: ${radius.medium};
    transition: 1s;

    &::after {
        content: "";
        margin-top: 2px;
        display: block;
        width: 100%;
        height: 4px;
        background-color: transparent;
        border-radius: ${radius.medium};

        transition: ease-in-out .5s;
    }

    &:hover {
        background-color: ${color.accent_primary};
    }

    &.active {
        &::after {
            background-color: ${color.accent_secondary};
        }
    }
`;

const StyledToggleContainer = styled.div`
    display: flex;
    gap: 10px;
    margin: 15px;
`;

export { StyledButton, StyledToggleButton, StyledToggleContainer };