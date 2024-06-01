import styled from "styled-components";
import { PersonFill, MortarboardFill, GeoAltFill, PersonCircle, EnvelopeFill, Whatsapp } from "react-bootstrap-icons";

import { Blanckspace } from '../Separator';
import { StackContainer, StackCard } from '../Stack';
import { radius } from "../../styles/theme";

export default function About() {
	return (
		<AboutContainer id="about">
			<h1><PersonFill /> ABOUT ME</h1>
			<Blanckspace />
			<div className="summary">
				<p className="paragraph">Sou desenvolvedor full stack, bacharel em ciência da computação e atualmente cursando MBA em Engenharia de Software pela Escola Politécnica da USP. Apaixonado por tecnologia desde cedo, iniciei meus estudos na área com um curso técnico em informática e, logo em seguida, para o curso de ciência da computação na Pontifícia Universidade Católica de Minas Gerais (PUC Minas).</p>
				<p className="paragraph">Minhas principais habilidades são voltadas para o desenvolvimento Full Stack com tecnologias web (MERN Stack) como: HTML, CSS, JavaScript, TypeScript, Node.js, express.js, React.js, React Native, MongoDB e SASS. Possuo um perfil comunicativo, calmo e ágil, com uma grande facilidade para trabalho em equipe.</p>
			</div>
			<Blanckspace height="1rem" />
			<Info>
				<InfoSection>
					<StyledTag><PersonCircle className="icon" />Richard de Carvalho Borges</StyledTag>
					<StyledTag><MortarboardFill className="icon" />Engenheiro de Software</StyledTag>
					<StyledTag><EnvelopeFill className="icon" />ribborges@outlook.com</StyledTag>
					<StyledTag><Whatsapp className="icon" />+55 (11) 94234-7830</StyledTag>
					<StyledTag><GeoAltFill className="icon" />São Paulo, SP</StyledTag>
				</InfoSection>

				<InfoSection>
					<AcademicHistoryTag
						icon="/static/img/info/poli.jpeg"
						alt="Poli USP logo"
						field="MBA em Engenharia de Software"
						school="Poli USP"
						date="2024 - 2025"
					/>
					<AcademicHistoryTag
						icon="/static/img/info/desco.jpeg"
						alt="Descomplica Logo"
						field="Pós-Graduação em Desenvolvimento Full Stack"
						school="Descomplica Faculdade Digital"
						date="2023 - 2024"
					/>
					<AcademicHistoryTag
						icon="/static/img/info/puc.jpeg"
						alt="PUC Minas Logo"
						field="Bacharel em Ciência da Computação"
						school="PUC Minas"
						date="2018 - 2023"
					/>
					<AcademicHistoryTag
						icon="/static/img/info/etec.jpeg"
						alt="ETEC Logo"
						field="Técnico em Informática"
						school="ETEC"
						date="2017"
					/>
				</InfoSection>
			</Info>
			<Blanckspace height="1rem" />
			<StackContainer title={"Languages"}>
				<StackCard image="https://img.icons8.com/?size=512&id=108784&format=png" alt="JavaScript logo" name="JavaScript" />
				<StackCard image="https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png" alt="TypeScript logo" name="TypeScript" />
				<StackCard image="https://img.icons8.com/?size=512&id=13679&format=png" alt="Java logo" name="Java" />
				<StackCard image="https://img.icons8.com/?size=512&id=13441&format=png" alt="Python logo" name="Python" />
				<StackCard image="https://img.icons8.com/?size=512&id=haeAxVQEIg0F&format=png" alt="Rust logo" name="Rust" />
			</StackContainer>
			<StackContainer title={"Back-End"}>
				<StackCard image="https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png" alt="Node.js logo" name="Node.js" />
				<StackCard image="https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png" alt="express.js logo" name="express.js" />
				<StackCard image="https://img.icons8.com/?size=512&id=zJh5Gyrd6ZKu&format=png" alt="Prisma logo" name="Prisma" />
			</StackContainer>
			<StackContainer title={"Front-End"}>
				<StackCard image="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png" alt="React logo" name="React.js" />
				<StackCard image="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png" alt="React Native logo" name="React Native" />
				<StackCard image="https://img.icons8.com/?size=512&id=QBqFNfPPB2Kx&format=png" alt="SASS logo" name="SASS" />
				<StackCard image="https://img.icons8.com/?size=512&id=aVf5vRtxZGEY&format=png" alt="Styled Components logo" name="Styled Components" />
				<StackCard image="https://img.icons8.com/?size=512&id=84710&format=png" alt="Bootstrap logo" name="Bootstrap" />
				<StackCard image="https://img.icons8.com/?size=512&id=4PiNHtUJVbLs&format=png" alt="TailwindCSS logo" name="TailwindCSS" />
			</StackContainer>
			<StackContainer title={"Cloud and Database"}>
				<StackCard image="https://img.icons8.com/?size=512&id=33039&format=png" alt="AWS logo" name="AWS" />
				<StackCard image="https://img.icons8.com/?size=512&id=74402&format=png" alt="MongoDB logo" name="MongoDB" />
				<StackCard image="https://img.icons8.com/?size=512&id=38561&format=png" alt="PostgreSQL logo" name="PostgreSQL" />
			</StackContainer>
			<StackContainer title={"Tools"}>
				<StackCard image="https://img.icons8.com/?size=512&id=22813&format=png" alt="Docker logo" name="Docker" />
				<StackCard image="https://img.icons8.com/?size=512&id=9OGIyU8hrxW5&format=png" alt="VS Code logo" name="VS Code" />
				<StackCard image="https://img.icons8.com/?size=512&id=20906&format=png" alt="Git logo" name="Git" />
				<StackCard image="https://img.icons8.com/?size=512&id=QEQQKirln6Tf&format=png" alt="Postman logo" name="Postman" />
				<StackCard image="https://img.icons8.com/?size=512&id=34301&format=png" alt="Unreal Engine logo" name="Unreal Engine" />
			</StackContainer>
		</AboutContainer>
	)
}

function AcademicHistoryTag(props: { icon: string, alt?: string, field?: string, school?: string, date?: string }) {
	return (
		<StyledTag>
			<img className="icon" src={props.icon} alt={props.alt} />
			<div>
				<div>
					<span>{props.field} | <strong>{props.school}</strong></span>
				</div>

				<span>({props.date})</span>
			</div>
		</StyledTag>
	);
}

const AboutContainer = styled.section`
	p {
        display: inline-block;
        text-align: justify;
        text-justify: inter-word;
        margin-top: 10px;
        margin-bottom: 10px;
    }

	.summary {
    	padding-left: 10vw;
    	padding-right: 10vw;

    	.paragraph {
        	text-indent: 50px;
    	}
	}

	@media screen and (max-width: 700px) {
		.summary {
			padding-left: 5vw;
			padding-right: 5vw;
		
			.paragraph {
				text-indent: 25px;
			}
		}
	}
`;

const Info = styled.div`
	display: flex;

	@media screen and (max-width: 700px) {
		flex-direction: column;
		gap: 50px;
	}
`;

const InfoSection = styled.div`
	flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const StyledTag = styled.span`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    .icon {
        border-radius: ${radius.small};
        min-width: 25px;
        min-height: 25px;
        max-width: 35px;
        max-height: 35px;
    }
`;