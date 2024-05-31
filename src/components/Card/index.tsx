import { ReactNode } from 'react';
import styled from 'styled-components';

import { color, fx, radius } from '../../styles/theme';

interface CardProps {
	thumb?: string,
	title?: string,
	text?: string,
	children?: ReactNode,
}

export default function Card(props: CardProps) {
    return (
        <StyledCard>
			<div className="card-thumb">
				<img src={props.thumb} alt={props.title}/>
			</div>
			<div className="card-caption">
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
	background-color: ${color.dark_grey};
    border-radius: ${radius.medium};
    position: relative;
    overflow: hidden;
    flex-direction: column;
    flex: 0 1 30%;
	transition: 1s;

    .card-thumb {
        width: 100%;
        height: 100%;
        
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
            overflow-y: scroll;
            opacity: 1;
        }
    }

    .card-caption {
		backdrop-filter: ${fx.blur};
        background-color: ${color.accent_primary}44;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        padding: 10px;
        display: flex;
        flex-direction: column;

        transition: all 1s ease;
        opacity: 0;

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