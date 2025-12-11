import { Literata, Alfa_Slab_One } from "next/font/google";
import { EnvelopeFill, Linkedin, Github, FileEarmarkPersonFill, Whatsapp } from "react-bootstrap-icons";

import { ButtonLink } from '@/components/Input';
import { Blanckspace } from '@/components/Separator';
import { H1, H2 } from "@/components/Heading";
import Translator from "@/components/Translator";

import "./style.css";

const alfaSlabOne = Alfa_Slab_One({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false
})

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
				<div className={alfaSlabOne.className}>
					<span className="text-lg md:text-xl lg:text-2xl"><Translator path="home.greeting" /></span>
					<H1 className="justify-start flex-wrap">
						<span><Translator path="home.name" /></span>
						<span className="
							p-0 px-4 mx-4
							bg-zinc-950 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 hover:bg-slate-600
							rounded-full
							transition duration-500
						">RICHARD BORGES</span>
					</H1>
					<H2><Translator path="home.title" /></H2>
				</div>
				<Blanckspace />
				<div className="flex flex-wrap justify-center md:justify-start gap-2">
					<ButtonLink href="mailto:contato@richardborges.dev"><EnvelopeFill /><span className="hidden md:block"><Translator path="home.email" /></span></ButtonLink>
					<ButtonLink href="https://wa.me/5511942347830"><Whatsapp /><span className="hidden md:block"><Translator path="home.whatsapp" /></span></ButtonLink>
					<ButtonLink href="https://linkedin.com/in/ribborges"><Linkedin /><span className="hidden md:block"><Translator path="home.linkedin" /></span></ButtonLink>
					<ButtonLink href="https://github.com/ribborges"><Github /><span className="hidden md:block"><Translator path="home.github" /></span></ButtonLink>
					<ButtonLink href="/static/docs/cv-richard-borges.pdf"><FileEarmarkPersonFill /><span className="hidden md:block"><Translator path="home.cv" /></span></ButtonLink>
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
