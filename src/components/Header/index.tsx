import { EnvelopeFill, Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

import ButtonLink from '@/components/Input/Button';
import { Blanckspace } from '@/components/Separator';
import { H1, H2 } from "@/components/Heading";

import "./style.css";

export default function Header() {
	return (
		<header className="
			h-screen
			header-bg
			flex items-center justify-center md:justify-between flex-col-reverse
			md:flex-row
			p-6 md:p-12 lg:p-24
		" id="header">
			<div className="md:flex-1">
				<div>
					<span className="font-bold text-lg md:text-xl lg:text-2xl">Olá</span>
					<H1 className="justify-start flex-wrap">
						<span>Sou</span>
						<span className="
							font-bold
							px-1
							bg-zinc-950 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 hover:bg-indigo-700
							transition duration-500
						">RICHARD BORGES</span>
					</H1>
					<H2>Engenheiro de Software</H2>
				</div>
				<Blanckspace />
				<div className="flex flex-wrap justify-center md:justify-start gap-2">
					<ButtonLink href="mailto:contato@richardborges.dev" icon={<EnvelopeFill />} label="Email" />
					<ButtonLink href="https://linkedin.com/in/ribborges" icon={<Linkedin />} label="Linkedin" />
					<ButtonLink href="https://github.com/ribborges" icon={<Github />} label="Github" />
					<ButtonLink href="/static/docs/cv-richard-borges.pdf" icon={<FileEarmarkPersonFill />} label="CV" />
				</div>
			</div>
			<div className="
				flex
				overflow-hidden
				h-52 w-52 md:h-72 md:w-72 lg:h-96 lg:w-96
				border-2 border-solid border-zinc-300 dark:border-zinc-800 border-opacity-50
				rounded-[50%] hover:rounded-3xl
				mt-24 md:mt-0
				transition-all duration-500
			">
				<img className="grayscale hover:grayscale-0 transition duration-1000" src="/static/img/avatar.webp" />
			</div>
		</header>
	);
}
