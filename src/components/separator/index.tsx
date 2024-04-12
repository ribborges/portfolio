import styled from 'styled-components';

import { color } from "../../style/theme";

interface SeparatorProps {
    height?: string;
}

export const Spacer = styled.hr<SeparatorProps>(props => ({
    display: 'block',
    marginTop: '60px',
    marginBottom: '60px',
    borderBottom: 'none',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: color.dark_grey,
}));

export const Blanckspace = styled.hr<SeparatorProps>(props => ({
    borderStyle: 'none',
    height: props.height ?? '5vw'
}));