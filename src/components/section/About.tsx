import { PersonFill} from "react-bootstrap-icons";

import { Blanckspace } from '../Separator';
import { StackContainer, StackCard } from '../Stack';
import Title from "./Title";

export default function About() {
	return (
		<section id="about">
			<Title icon={<PersonFill />} title="SOBRE MIM" />
			<Blanckspace />
			<div className="pl-2 pr-2 md:pl-32 md:pr-32 lg:pl-64 ld:pr-64">
				<Paragraph>Sou desenvolvedor full stack, bacharel em ciência da computação e atualmente cursando MBA em Engenharia de Software pela Escola Politécnica da USP. </Paragraph>
				<Paragraph>Minhas principais habilidades são voltadas para o desenvolvimento Full Stack com tecnologias web (MERN Stack) como: HTML, CSS, JavaScript, TypeScript, Node.js, express.js, React.js, React Native, MongoDB e SASS. Possuo um perfil comunicativo, calmo e ágil, com uma grande facilidade para trabalho em equipe.</Paragraph>
				<Paragraph>Apaixonado por tecnologia desde cedo, iniciei meus estudos na área com um curso técnico em informática e, logo em seguida, para o curso de ciência da computação na Pontifícia Universidade Católica de Minas Gerais (PUC Minas).</Paragraph>
			</div>
			<Blanckspace />
			<StackContainer title={"Languages"}>
				<StackCard image="https://img.icons8.com/?size=512&id=108784&format=png" alt="JavaScript logo" name="JavaScript" />
				<StackCard image="https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png" alt="TypeScript logo" name="TypeScript" />
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
				<StackCard image="https://img.icons8.com/?size=512&id=MWiBjkuHeMVq&format=png" alt="Next logo" name="Next.js" />
				<StackCard image="https://img.icons8.com/?size=512&id=QBqFNfPPB2Kx&format=png" alt="SASS logo" name="SASS" />
				<StackCard image="https://img.icons8.com/?size=512&id=aVf5vRtxZGEY&format=png" alt="Styled Components logo" name="Styled Components" />
				<StackCard image="https://img.icons8.com/?size=512&id=84710&format=png" alt="Bootstrap logo" name="Bootstrap" />
				<StackCard image="https://img.icons8.com/?size=512&id=4PiNHtUJVbLs&format=png" alt="TailwindCSS logo" name="TailwindCSS" />
			</StackContainer>
			<StackContainer title={"Cloud and Database"}>
				<StackCard image="https://img.icons8.com/?size=512&id=33039&format=png" alt="AWS logo" name="AWS" />
				<StackCard image="https://img.icons8.com/?size=512&id=74402&format=png" alt="MongoDB logo" name="MongoDB" />
				<StackCard image="https://img.icons8.com/?size=512&id=38561&format=png" alt="PostgreSQL logo" name="PostgreSQL" />
				<StackCard image="https://img.icons8.com/?size=512&id=62452&format=png" alt="Firebase logo" name="Firebase" />
			</StackContainer>
			<StackContainer title={"Tools"}>
				<StackCard image="https://img.icons8.com/?size=512&id=22813&format=png" alt="Docker logo" name="Docker" />
				<StackCard image="https://img.icons8.com/?size=512&id=9OGIyU8hrxW5&format=png" alt="VS Code logo" name="VS Code" />
				<StackCard image="https://img.icons8.com/?size=512&id=20906&format=png" alt="Git logo" name="Git" />
				<StackCard image="https://img.icons8.com/?size=512&id=zfHRZ6i1Wg0U&format=png" alt="Figma logo" name="Figma" />
				<StackCard image="https://img.icons8.com/?size=512&id=QEQQKirln6Tf&format=png" alt="Postman logo" name="Postman" />
				<StackCard image="https://img.icons8.com/?size=512&id=34301&format=png" alt="Unreal Engine logo" name="Unreal Engine" />
			</StackContainer>
		</section>
	)
}

function Paragraph(props: { children: React.ReactNode }) {
	return (
		<p className="inline-block text-justify text-xl mt-2 mb-2 indent-5 md:indent-10">{props.children}</p>
	);
}

/*
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
*/