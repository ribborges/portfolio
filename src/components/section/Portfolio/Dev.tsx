import { Github, ThreeDotsVertical, BoxArrowUpRight } from "react-bootstrap-icons";

import Card from "../../Card";
import { Tag, TagContainer } from "../../Tag";
import ButtonLink from "../../Input/Button";
import { GridContainer } from "../../Container";

export default function Dev() {
    return (
        <GridContainer>
            <Card
                key={"dev-0"}
                thumb="https://imgs.search.brave.com/aKNaDsFYkmoVkVhGb4p5QHRCwDy9RXamzQW2OTBPq7U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9uZ29kYi5jb20v/ZG9jcy9kcml2ZXJz/L25vZGUvY3VycmVu/dC9zdGF0aWMvYjNh/ZGRkMGViNDI0NGE4/MDJmYjY0MzUyNjA4/NWI0Y2EvOGU3Njgv/Tm9kZV9DYXRhbG9n/LndlYnA"
                tags={<TagContainer>
                    <Tag text="TypeScript" className="bg-blue-700" />
                    <Tag text="Node" className="bg-lime-500" />
                    <Tag text="Express" className="bg-black" />
                    <Tag text="MongoDB" className="bg-emerald-500" />
                    <Tag text="REST API" className="bg-black" />
                    <Tag text="Authentication" className="bg-black" />
                </TagContainer>}
                title="REST API com autenticação"
                text={`
						Uma API REST com autenticação e recursos de segurança para endpoints.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/api-with-auth" target="_self" icon={<Github />} label="APP" />
            </Card>

            <Card
                key={"dev-1"}
                thumb="/static/img/projects/tasks.png"
                tags={<TagContainer>
                    <Tag text="React" className="bg-sky-400" />
                    <Tag text="TypeScript" className="bg-blue-500" />
                    <Tag text="Vite" className="bg-blue-900" />
                    <Tag text="Styled Components" className="bg-rose-700" />
                    <Tag text="Node" className="bg-lime-500" />
                    <Tag text="Express" className="bg-black" />
                    <Tag text="MongoDB" className="bg-emerald-500" />
                    <Tag text="REST API" className="bg-black" />
                </TagContainer>}
                title="Tasks"
                text={`
						Um app simples para registrar suas tarefas diárias.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/tasks-app" target="_self" icon={<Github />} label="APP" />
                <ButtonLink href="https://github.com/ribborges/tasks-api" target="_self" icon={<Github />} label="API" />
            </Card>

            <Card
                key={"dev-2"}
                thumb="/static/img/projects/cookApp.png"
                tags={
                    <TagContainer>
                        <Tag text="React Native" className="bg-sky-400" />
                        <Tag text="Expo" className="bg-indigo-950" />
                        <Tag text="Expo Router" className="bg-indigo-950" />
                        <Tag text="Supabase" className="bg-violet-800" />
                        <Tag text="React Native Reanimated" className="bg-sky-400" />
                        <Tag text="REST API" className="bg-black" />
                    </TagContainer>
                }
                title="Cook App"
                text={`
						Projeto desenvolvido durante o evento "React Native na prática" da Rocketseat. Aplicação 
						que sugere receitas conforme os ingredientes selecionados pelo usuário.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/cook-app/tree/master" icon={<Github />} label="Código" />
            </Card>

            <Card
                key={"dev-3"}
                thumb="/static/img/projects/fisioHome.png"
                tags={
                    <TagContainer>
                        <Tag text="React Native" className="bg-sky-400" />
                        <Tag text="Expo" className="bg-indigo-950" />
                        <Tag text="Node" className="bg-lime-500" />
                        <Tag text="Express" className="bg-black" />
                        <Tag text="MongoDB" className="bg-emerald-500" />
                        <Tag text="REST API" className="bg-black" />
                    </TagContainer>
                }
                title="Fisio Home"
                text={`
						Aplicação desenvolvida durante a disciplina de "Trabalho de Diplomação" em parceria
						entre os cursos de Ciência da Computação e Fisioterapia da Pontifícia Universidade Católica, campus
						Poços de Caldas, visa estabelecer uma conexão remota entre pacientes em processo de recuperação
						pós-acidente vascular encefálico (AVE) e os profissionais de fisioterapia presentes no campus.
					`}
            >
                <ButtonLink href="/fisio-home" target="_self" icon={<ThreeDotsVertical />} label="Detalhes" />
            </Card>

            <Card
                key={"dev-4"}
                thumb="/static/img/projects/catFact.png"
                tags={
                    <TagContainer>
                        <Tag text="React Native" className="bg-sky-400" />
                        <Tag text="Expo" className="bg-indigo-950" />
                        <Tag text="Axios" className="bg-black" />
                        <Tag text="REST API" className="bg-black" />
                    </TagContainer>
                }
                title="Cat Fact App"
                text={`
						Veja fatos aleatórios sobre gatos junto de uma imagem fofinha :3
					`}
            >
                <ButtonLink href="https://github.com/ribborges/cat-fact-app" icon={<Github />} label="Código" />
            </Card>

            <Card
                key={"dev-5"}
                thumb="/static/img/projects/cv-creator.png"
                tags={
                    <TagContainer>
                        <Tag text="React" className="bg-sky-400" />
                        <Tag text="TypeScript" className="bg-blue-500" />
                        <Tag text="Vite" className="bg-blue-900" />
                        <Tag text="SCSS" className="bg-pink-500" />
                        <Tag text="ReactPDF" className="bg-red-600" />
                    </TagContainer>
                }
                title="Criador de CV"
                text={`
						Crie seu currículo com essa ferramenta simples que gera o PDF dinamicamente com as suas informações
						e permite exportar os dados em formato .json para futuras alterações.
					`}
            >
                <ButtonLink href="https://cvcreator.richardborges.dev/" icon={<BoxArrowUpRight />} label="Demo" />
                <ButtonLink href="https://github.com/ribborges/cv-creator/" icon={<Github />} label="Código" />
            </Card>

            <Card
                key={"dev-6"}
                thumb="/static/img/projects/habits.png"
                tags={
                    <TagContainer>
                        <Tag text="React" className="bg-sky-400" />
                        <Tag text="TypeScript" className="bg-blue-500" />
                        <Tag text="Vite" className="bg-blue-900" />
                        <Tag text="TailwindCSS" className="bg-sky-300" />
                        <Tag text="Node" className="bg-lime-500" />
                        <Tag text="SQLite" className="bg-black" />
                        <Tag text="REST API" className="bg-black" />
                    </TagContainer>
                }
                title="Habits"
                text={`
						Projeto desenvolvido durante o evento NLW Setup - Ignite da Rocketseat.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/nlw-setup-ignite/" icon={<Github />} label="Código" />
            </Card>

            <Card
                key={"dev-7"}
                thumb="/static/img/projects/socialTree.png"
                tags={
                    <TagContainer>
                        <Tag text="React" className="bg-sky-400" />
                        <Tag text="TypeScript" className="bg-blue-500" />
                        <Tag text="Vite" className="bg-blue-900" />
                        <Tag text="SCSS" className="bg-pink-500" />
                    </TagContainer>
                }
                title="Social tree"
                text={`
						Minha Social Tree com links para as minhas redes sociais.
					`}
            >
                <ButtonLink href="https://linktree.richardborges.dev" icon={<BoxArrowUpRight />} label="Demo" />
                <ButtonLink href="https://github.com/ribborges/social-tree/" icon={<Github />} label="Código" />
            </Card>
        </GridContainer>
    );
}