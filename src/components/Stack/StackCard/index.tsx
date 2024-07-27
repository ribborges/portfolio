import { StyledStackCard } from "../style";

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