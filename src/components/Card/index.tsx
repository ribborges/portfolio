import { ReactNode } from 'react';

import { StyledCard } from './style';

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
    );
}