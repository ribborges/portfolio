import { ReactNode } from 'react';
import styled from 'styled-components';

import { color, fx, radius } from '../../styles/theme';

interface CardProps {
	thumb?: string,
	title?: string,
	text?: string,
    tags?: ReactNode,
	children?: ReactNode,
}

export default function Card(props: CardProps) {
    return (
        <StyledCard>
			<div className="card-thumb">
				<img src={props.thumb} alt={props.title}/>
			</div>
			<div className="card-caption">
                { props.tags! }
				<h4>{props.title}</h4>
				<p>{props.text}</p>
				<div className="card-opt">
                    {props.children}
				</div>
			</div>
		</StyledCard>
    )
}

const StyledCard = styled.div`
	background-color: ${color.dark_grey}77;
    border-radius: ${radius.medium};
    border: 1px solid ${color.light}22;
    overflow: hidden;
    flex-direction: column;
	transition: 0.5s;
    display: flex;

    .card-thumb {
        width: 100%;
        border-bottom: 1px solid ${color.light}22;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &:hover {
        box-shadow: 0 0 100px ${color.light}44;
        scale: 1.05;

        .card-caption {
            background-color: ${color.accent_primary}44;
        }
    }

    .card-caption {
		backdrop-filter: ${fx.blur};
        z-index: 100;
        padding: 20px;
        display: flex;
        flex: 1;
        flex-direction: column;

        transition: all 0.5s ease;

        h4 {
            margin-bottom: 10px;
        }

        p {
            text-align: justify;
            text-justify: inter-word;
        }

        .card-opt {
            margin-top: auto;
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
        }
    }

	@media screen and (max-width: 1000px) {
        flex: 0 1 40%;
    }

	@media screen and (max-width: 600px) {
    	flex: 0 1 100%;
    }

	@media (prefers-color-scheme: light) {
        &:hover {
            box-shadow: 0 0 100px ${color.dark}88;
        }
    }
`;