import { ReactNode } from 'react';

interface CardProps {
	thumb?: string,
	title?: string,
	text?: string,
	tags?: ReactNode,
	children?: ReactNode,
}

export default function Card(props: CardProps) {
	return (
		<div className="
			flex flex-col
			backdrop-blur-md bg-zinc-400 dark:bg-zinc-800 hover:bg-violet-700 bg-opacity-70
			border border-solid border-zinc-300 dark:border-zinc-700 border-opacity-70
			hover:shadow-2xl hover:shadow-zinc-200/20
			rounded-2xl
			overflow-hidden
			hover:scale-105
			transition duration-500
		">
			<div className="
				w-full
				border-b border-solid border-zinc-300 dark:border-zinc-700 border-opacity-70
			">
				<img src={props.thumb} alt={props.title} className="
					w-full
					object-cover
				" />
			</div>
			<div className="flex flex-1 flex-col p-6">
				{props.tags!}
				<h4 className="mb-2">{props.title}</h4>
				<p className="text-justify">{props.text}</p>
				<div className="
					flex flex-row flex-wrap
					mt-auto pt-2
				">
					{props.children}
				</div>
			</div>
		</div>
	);
}