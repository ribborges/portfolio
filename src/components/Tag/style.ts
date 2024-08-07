'use client';

import styled from "styled-components";

import { radius } from "../../styles/theme";

const StyledTagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledTag = styled.div`
    display: inline-block;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem;
    border-radius: ${radius.large};
    background-color: ${props => props.color};
    color: white;
    font-size: 0.7rem;

    span {
        text-shadow: 0 0 5px black;
    }
`;

export { StyledTagContainer, StyledTag };