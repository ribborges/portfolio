import styled from "styled-components";

import { color } from "../../../styles/theme";

interface StackCardProps {
    image: string,
    alt: string,
    name: string,
}

export default function StackCard(props: StackCardProps) {
    return (
        <StyledStackCard>
            <img src={ props.image } alt={props.alt} />
            <p>{ props.name }</p>
        </StyledStackCard>
    );
}

const StyledStackCard = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: ${color.dark_grey};
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
        background-color: ${color.light_grey};

        p {
            color: ${color.dark};
        };
    }
`;