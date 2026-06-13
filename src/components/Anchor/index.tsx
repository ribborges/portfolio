import { AnchorHTMLAttributes } from "react";

export default function Anchor({
	className = "text-slate-400 hover:text-slate-900 dark:text-slate-600  dark:hover:text-slate-200 transition duration-500",
	...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<a className={className} {...props}>
			{props.children}
		</a>
	);
}
