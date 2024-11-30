import { EnvelopeFill, Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";
import ButtonLink from '../Input/Button';
import { Blanckspace } from '../Separator';

import "./style.css";

export default function Header() {
	return (
		<header className="
			header-bg
			flex items-center justify-between flex-col-reverse
			md:flex-row
		"
			id="header"
		>
			<div className="flex-1 m-5">
				<div>
					<h3>Olá</h3>
					<h1>Sou <span className="
						font-bold
						p-1
						bg-zinc-950 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 hover:bg-violet-700
						transition duration-500
					">RICHARD BORGES</span></h1>
					<h2>Desenvolvedor Full Stack e Engenheiro de Software</h2>
				</div>
				<Blanckspace />
				<div className="flex flex-wrap">
					<ButtonLink href="mailto:ribborges@outlook.com" icon={<EnvelopeFill />} label="Email" />
					<ButtonLink href="https://linkedin.com/in/ribborges" icon={<Linkedin />} label="Linkedin" />
					<ButtonLink href="https://github.com/ribborges" icon={<Github />} label="Github" />
					<ButtonLink href="/cv/cv-richard-borges.pdf" icon={<FileEarmarkPersonFill />} label="CV" />
				</div>
			</div>
			<div className="
				flex
				overflow-hidden
				max-w-96 max-h-96
				border-2 border-solid border-zinc-500 border-opacity-50
				rounded-[50%] hover:rounded-3xl
				mt-24 md:mt-0
				transition-all duration-1000
			">
				<img className="grayscale hover:grayscale-0 transition duration-1000" src="/static/img/avatar.png" />
			</div>
		</header>
	);
}