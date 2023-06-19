import { displayText } from '../../data/lang';
import ButtonLink from '../input/ButtonLink';
import Blanckspace from '../separator/Blackspace';
import { EnvelopeFill, Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

import './_style.scss';

interface headerProps {
	lang?: displayText,
}

export default function Header(props: headerProps) {
	return (
		<header id="header" className="header">
			<div className="header-info">
				<div>
					<h3>{props.lang?.header.h3}</h3>
					<h1>{props.lang?.header.h1}</h1>
					<h2>{props.lang?.header.h2}</h2>
				</div>
				<Blanckspace />
				<div className="social-btns">
					<ButtonLink href="mailto:ribborges@outlook.com" className="accent big"><EnvelopeFill /></ButtonLink>
					<ButtonLink href="https://linkedin.com/in/ribborges" className="accent big"><Linkedin /></ButtonLink>
					<ButtonLink href="https://github.com/ribborges" className="accent big"><Github /></ButtonLink>
					<ButtonLink href="/cv/cv-richard-borges.pdf" className="accent big"><FileEarmarkPersonFill /></ButtonLink>
				</div>
			</div>
			<div className="header-pic">
				<img src="https://avatars.githubusercontent.com/u/46366493?s=400&u=bbff0de6c5a3c5d0e73cbf89de1ee910c8604192&v=4" />
			</div>
		</header>
	)
}