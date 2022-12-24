import { ReactNode } from 'react';
import './_style.scss';

interface CardProps {
	thumb?: string,
	title?: string,
	text?: string,
	children?: ReactNode,
}

export default function Card(props: CardProps) {
    return (
        <div className="card">
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
		</div>
    )
}