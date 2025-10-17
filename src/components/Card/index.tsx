import { ReactNode } from 'react';

import { H4 } from '@/components/Heading';
import { Blanckspace } from '@/components/Separator';

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
			backdrop-blur-md bg-zinc-200/60 dark:bg-zinc-900/60 hover:bg-slate-600/60
			border border-solid rounded-4xl border-zinc-300/60 dark:border-zinc-800/60
			hover:shadow-2xl hover:shadow-zinc-200/20
			overflow-hidden
			hover:scale-95
			transition duration-500
		">
			<div className="
				w-full
				border-b border-solid border-zinc-300/60 dark:border-zinc-800/60
			">
				<img src={props.thumb} alt={props.title} className="
					w-full
					object-cover
				" />
			</div>
			<div className="flex flex-1 flex-col p-6">
				{props.tags!}
				<H4>{props.title}</H4>
				<p className="text-justify">{props.text}</p>
				<Blanckspace space={20} />
				<div className="
					flex flex-col gap-2
					mt-auto pt-2
				">
					{props.children}
				</div>
			</div>
		</div>
	);
}