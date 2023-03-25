import { displayText } from '../../data/lang';
import ButtonLink from '../input/ButtonLink';
import Blanckspace from '../separator/Blackspace';
import './_style.scss';

interface headerProps {
	lang?: displayText,
}

export default function Header(props: headerProps) {
	return (
		<header className="header">
			<div>
				<h3>{props.lang?.header.h3}</h3>
				<h1>{props.lang?.header.h1}</h1>
				<h2>{props.lang?.header.h2}</h2>
				<Blanckspace />
				<ButtonLink href="mailto:ribborges@outlook.com" className="accent big"><i className="bi bi-envelope-fill"/></ButtonLink>
				<ButtonLink href="https://linkedin.com/in/ribborges" className="accent big"><i className="bi bi-linkedin"/></ButtonLink>
				<ButtonLink href="https://github.com/ribborges" className="accent big"><i className="bi bi-github"/></ButtonLink>
				<ButtonLink href="/cv/cv-richard-borges.pdf" className="accent big"><i className="bi bi-file-earmark-person-fill"/></ButtonLink>
			</div>
		</header>
	)
}