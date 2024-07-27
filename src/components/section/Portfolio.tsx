import { BriefcaseFill, BoxArrowUpRight, Github, ThreeDotsVertical } from "react-bootstrap-icons";

import { TagContainer, Tag } from "../Tag";
import { Blanckspace } from "../Separator";
import Grid from "../Grid";
import Card from "../Card";
import ButtonLink from "../Input/Button";

export default function About() {

	return (
		<section id="portfolio">
			<h1><BriefcaseFill /> PORTFÓLIO</h1>
			<Blanckspace />
			<Grid>
				<Card
					thumb="/static/img/projects/tasks.png"
					tags={<TagContainer>
						<Tag text="React" color="#7ae2ff" />
						<Tag text="TypeScript" color="#1475dd" />
						<Tag text="Vite" color="#4c54fa" />
						<Tag text="Styled Components" color="#f33d7a" />
						<Tag text="Node" color="#259221" />
						<Tag text="Express" color="#000000" />
						<Tag text="MongoDB" color="#28831a" />
						<Tag text="REST API" color="#000000" />
					</TagContainer>}
					title="Tasks"
					text={`A simple app to track your tasks. Developed using React, TypeScript, Vite and Styled Components for the the front-end and Node, Express and TypeScript for the back-end and MongoDB for the database.`}
				>
					<ButtonLink href="https://github.com/ribborges/tasks-app" target="_self" icon={<Github />} label="APP"/>
					<ButtonLink href="https://github.com/ribborges/tasks-api" target="_self" icon={<Github />} label="API"/>
				</Card>

				<Card
					thumb="/static/img/projects/cookApp.png"
					tags={
						<TagContainer>
							<Tag text="React Native" color="#61dafb" />
							<Tag text="Expo" color="#000020" />
							<Tag text="Expo Router" color="#000020" />
							<Tag text="Supabase" color="#4f46e5" />
							<Tag text="React Native Reanimated" color="#61dafb" />
							<Tag text="REST API" color="#000000" />
						</TagContainer>
					}
					title="Cook App"
					text={`
                    Projeto desenvolvido durante o evento "React Native na prática" da Rocketseat. Aplicação 
                    que sugere receitas conforme os ingredientes selecionados pelo usuário usando React Native, Expo, Expo router, 
                    Supabase e React Native reanimated.
                `}
				>
					<ButtonLink href="https://github.com/ribborges/cook-app/tree/master" icon={<Github/>} label="Código"/>
				</Card>

				<Card
					thumb="/static/img/projects/fisioHome.png"
					tags={
						<TagContainer>
							<Tag text="React Native" color="#61dafb" />
							<Tag text="Expo" color="#000020" />
							<Tag text="Node" color="#259221" />
							<Tag text="Express" color="#000000" />
							<Tag text="MongoDB" color="#28831a" />
							<Tag text="REST API" color="#000000" />
						</TagContainer>
					}
					title="Fisio Home"
					text={`
                    A aplicação desenvolvida durante a disciplina de 'Trabalho de Diplomação'.Foi densenvolvida em 
                    React Native (Expo) no front-end e Node.js no back-end em conjunto com alguns pacotes como: 
                    Express.js, Mongoose, Axios e outros. A base de dados foi desenvolvida em MongoDB.
                `}
				>
					<ButtonLink href="/fisio-home" target="_self" icon={<ThreeDotsVertical/>} label="Detalhes"/>
				</Card>

				<Card
					thumb="/static/img/projects/catFact.png"
					tags={
						<TagContainer>
							<Tag text="React Native" color="#61dafb" />
							<Tag text="Expo" color="#000020" />
							<Tag text="Axios" color="#000000" />
							<Tag text="REST API" color="#000000" />
						</TagContainer>
					}
					title="Cat Fact App"
					text={`
                    Veja fatos aleatórios sobre gatos junto de uma imagem fofinha :3 Desenvolvido com React Native.
                `}
				>
					<ButtonLink href="https://github.com/ribborges/cat-fact-app" icon={<Github/>} label="Código"/>
				</Card>

				<Card
					thumb="/static/img/projects/cv-creator.png"
					tags={
						<TagContainer>
							<Tag text="React" color="#61dafb" />
							<Tag text="TypeScript" color="#1475dd" />
							<Tag text="Vite" color="#4c54fa" />
							<Tag text="SCSS" color="#c00060" />
							<Tag text="ReactPDF" color="#da0000" />
						</TagContainer>
					}
					title="Criador de CV"
					text={`
                    Crie seu currículo com essa ferramenta simples que gera o PDF dinamicamente com as suas informações e permite exportar os dados em formato .json para futuras alterações. Desenvolvido em React, TypeScript, Vite, SCSS e ReactPDF. 
                `}
				>
					<ButtonLink href="https://cv-creator-ten.vercel.app/" icon={<BoxArrowUpRight/>} label="Demo"/>
					<ButtonLink href="https://github.com/ribborges/cv-creator/" icon={<Github/>} label="Código"/>
				</Card>

				<Card
					thumb="/static/img/projects/habits.png"
					tags={
						<TagContainer>
							<Tag text="React" color="#61dafb" />
							<Tag text="TypeScript" color="#1475dd" />
							<Tag text="Vite" color="#4c54fa" />
							<Tag text="TailwindCSS" color="#06b6d4" />
							<Tag text="Node" color="#259221" />
							<Tag text="SQLite" color="#000000" />
							<Tag text="REST API" color="#000000" />
						</TagContainer>
					}
					title="Habits"
					text={`
                    Rocketseat NLW Setup - Ignite.
                `}
				>
					<ButtonLink href="https://github.com/ribborges/nlw-setup-ignite/" icon={<Github/>} label="Código"/>
				</Card>

				<Card
					thumb="/static/img/projects/socialTree.png"
					tags={
						<TagContainer>
							<Tag text="React" color="#61dafb" />
							<Tag text="TypeScript" color="#1475dd" />
							<Tag text="Vite" color="#4c54fa" />
							<Tag text="SCSS" color="#c00060" />
						</TagContainer>
					}
					title="Social tree"
					text="Minha Social Tree com links para as minhas redes sociais. Desenvolvido em React."
				>
					<ButtonLink href="https://socialtree-richardborges.vercel.app/" icon={<BoxArrowUpRight/>} label="Demo"/>
					<ButtonLink href="https://github.com/ribborges/social-tree/" icon={<Github/>} label="Código"/>
				</Card>
			</Grid>
		</section>
	)
}