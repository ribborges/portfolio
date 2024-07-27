import { ReactNode } from 'react';

import { GridContainer } from './style';

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