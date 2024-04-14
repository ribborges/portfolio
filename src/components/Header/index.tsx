import styled from "styled-components";
import { EnvelopeFill, Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

import { displayText } from '../../data/lang';
import ButtonLink from '../Input/Button';
import { Blanckspace } from '../Separator';
import { color, radius } from "../../style/theme";

interface headerProps {
	lang?: displayText
}

export default function Header(props: headerProps) {
	return (
		<StyledHeader>
			<HeaderInfo>
				<div>
					<h3>{props.lang?.header.h3}</h3>
					<Name>{props.lang?.header.h1}</Name>
					<h2>{props.lang?.header.h2}</h2>
				</div>
				<Blanckspace />
				<SocialButtons>
					<ButtonLink href="mailto:ribborges@outlook.com" className="accent big"><EnvelopeFill /></ButtonLink>
					<ButtonLink href="https://linkedin.com/in/ribborges" className="accent big"><Linkedin /></ButtonLink>
					<ButtonLink href="https://github.com/ribborges" className="accent big"><Github /></ButtonLink>
					<ButtonLink href="/cv/cv-richard-borges.pdf" className="accent big"><FileEarmarkPersonFill /></ButtonLink>
				</SocialButtons>
			</HeaderInfo>
			<HeaderPicture>
				<img src="/static/img/avatar.png" />
			</HeaderPicture>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	background-image: radial-gradient(${color.light}44 1px, transparent 0);
    background-size: 25px 25px;
    animation: move-it 10s linear infinite;
    min-height: 65vh;
    padding: 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row;

	h1 {
        color: $primary-accent-color;
    }

    * {
        z-index: 2;
    }

	@keyframes move-it {
		0% {
			background-position: initial;
		}

		100% {
			background-position: 100px 100px;
		}
	}

	@media screen and (max-width: 700px) {
		padding: 5vw;
        padding-top: 40%;
        min-height: 70vh;
        flex-direction: column;
	}

	@media (prefers-color-scheme: light) {
		background-image: radial-gradient(${color.dark}44 1px, transparent 0);
	}
`;

const HeaderInfo = styled.div`
	flex: 1;
    margin: 5vw;
`;

const SocialButtons = styled.div`
	display: flex;
    flex-direction: row;
`;

const HeaderPicture = styled.div`
	display: flex;
    overflow: hidden;
    max-width: 20vw;
    max-height: 20vw;
    border-radius: 50%;
    transition: 1s;

    &:hover {
        border-radius: ${radius.medium};
    }

	@media screen and (max-width: 700px) {
		max-width: 70vw;
        max-height: 70vw;
	}
`;

const Name = styled.h1`
	color: ${color.accent_primary};
`;