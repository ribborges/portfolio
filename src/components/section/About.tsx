import { PersonFill, MortarboardFill, GeoAltFill, PersonCircle, EnvelopeFill, Whatsapp } from "react-bootstrap-icons";

import { displayText } from '../../data/lang';
import { Blanckspace } from '../separator';
import { StackContainer, StackCard } from '../Stack';

import './_about.scss';

interface aboutProps {
	lang?: displayText,
}

export default function About(props: aboutProps) {
	return (
		<section id="about">
			<h1><PersonFill /> {props.lang?.nav.about.toUpperCase()}</h1>
			<Blanckspace />
			<div className="summary">
				<p className="paragraph">Sou desenvolvedor full stack, bacharel em ciência da computação e atualmente cursando MBA em Engenharia de Software pela Escola Politécnica da USP. Apaixonado por tecnologia desde cedo, iniciei meus estudos na área com um curso técnico em informática e, logo em seguida, para o curso de ciência da computação na Pontifícia Universidade Católica de Minas Gerais (PUC Minas).</p>
				<p className="paragraph">Minhas principais habilidades são voltadas para o desenvolvimento Full Stack com tecnologias web (MERN Stack) como: HTML, CSS, JavaScript, TypeScript, Node.js, express.js, React.js, React Native, MongoDB e SASS. Possuo um perfil comunicativo, calmo e ágil, com uma grande facilidade para trabalho em equipe.</p>
			</div>
			<Blanckspace height="1rem"/>
			<div className="info">
				<div className="info-section">
					<span className="tag"><PersonCircle className="icon" />Richard de Carvalho Borges</span>
					<span className="tag"><MortarboardFill className="icon" />Engenheiro de Software</span>
					<span className="tag"><EnvelopeFill className="icon" />ribborges@outlook.com</span>
					<span className="tag"><Whatsapp className="icon" />+55 (11) 94234-7830</span>
					<span className="tag"><GeoAltFill className="icon" />São Paulo, SP</span>
				</div>

				<div className="info-section">
					<span className="tag">
						<img className="icon" src="/static/img/info/poli.jpeg" alt="Poli USP Logo" />
						<span>MBA em Engenharia de Software <br /> <strong>Poli USP</strong></span>
						<span>(2024 - 2025)</span>
					</span>

					<span className="tag">
						<img className="icon" src="/static/img/info/desco.jpeg" alt="Descomplica Logo" />
						<span>Pós-Graduação em Desenvolvimento Full Stack <br /> <strong>Descomplica Faculdade Digital</strong></span>
						<span>(2023 - 2024)</span>
					</span>

					<span className="tag">
						<img className="icon" src="/static/img/info/puc.jpeg" alt="PUC Minas Logo" />
						<span>Bacharel em Ciência da Computação <br /> <strong>PUC Minas</strong></span>
						<span>(2018 - 2023)</span>
					</span>

					<span className="tag">
						<img className="icon" src="/static/img/info/etec.jpeg" alt="ETEC Logo" />
						<span>Técnico em Informática <br /> <strong>ETEC</strong></span>
						<span>(2017)</span>
					</span>
				</div>
			</div>
			<Blanckspace height="1rem"/>
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
		</section>
	)
}