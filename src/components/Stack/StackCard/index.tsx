import styled from "styled-components";

interface StackCardProps {
    image: string,
    alt: string,
    name: string,
}

export default function StackCard(props: StackCardProps) {
    return (
        <StyledStackCard>
            <img src={ props.image } alt={props.alt} />
            <StyledStackCardContent>{ props.name }</StyledStackCardContent>
        </StyledStackCard>
    );
}

const StyledStackCard = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    img {
        width: 5rem;
        height: 5rem;
    };
    &:hover {
        transform: scale(1.1);
    }
`;

const StyledStackCardContent = styled.p({
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    width: '100%',
    padding: '0.5rem'
});