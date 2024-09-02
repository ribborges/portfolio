'use client';

import { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
    icon: ReactNode,
    title: string
}

export default function Title(props: TitleProps) {

    return (
        <StyledTitle>{props.icon} <span>{props.title}</span></StyledTitle>
    );
}

const StyledTitle = styled.h1`
    display: flex;
    gap: 20px;
    align-items: center;

    span {
        font-weight: bold;
    }
`;