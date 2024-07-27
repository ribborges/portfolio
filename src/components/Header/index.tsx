import { EnvelopeFill, Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

import ButtonLink from '../Input/Button';
import { Blanckspace } from '../Separator';
import { StyledHeader, HeaderInfo, Name, SocialButtons, HeaderPicture } from "./style";

export default function Header() {
	return (
		<StyledHeader>
			<HeaderInfo>
				<div>
					<h3>Olá</h3>
					<Name>Sou RICHARD BORGES</Name>
					<h2>Desenvolvedor Full Stack e Engenheiro de Software</h2>
				</div>
				<Blanckspace />
				<SocialButtons>
					<ButtonLink href="mailto:ribborges@outlook.com" className="accent big" icon={<EnvelopeFill />} label="Email"/>
					<ButtonLink href="https://linkedin.com/in/ribborges" className="accent big" icon={<Linkedin />} label="Linkedin"/>
					<ButtonLink href="https://github.com/ribborges" className="accent big" icon={<Github />} label="Github"/>
					<ButtonLink href="/cv/cv-richard-borges.pdf" className="accent big" icon={<FileEarmarkPersonFill />} label="CV"/>
				</SocialButtons>
			</HeaderInfo>
			<HeaderPicture>
				<img src="/static/img/avatar.png" />
			</HeaderPicture>
		</StyledHeader>
	);
}