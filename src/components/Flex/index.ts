import styled from "styled-components";

export const FlexContainer = styled.div<{
    direction?: "row" | "column",
    justify?: "center" | "space-between" | "space-around" | "flex-start" | "flex-end",
    align?: "center" | "flex-start" | "flex-end",
    wrap?: "wrap" | "nowrap",
    gap?: string
}>`
    display: flex;
    flex-wrap: ${props => props.wrap || "wrap"};
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    gap: ${props => props.gap || "0px"};
`;