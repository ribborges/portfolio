import { Github, ThreeDotsVertical, BoxArrowUpRight } from "react-bootstrap-icons";

import Card from "@/components/Card";
import { Tag, TagContainer } from "@/components/Tag";
import { ButtonLink } from "@/components/Input";
import { GridContainer } from "@/components/Container";

export default function Dev() {
    return (
        <GridContainer>
            <Card
                thumb="/static/img/projects/kakebo.webp"
                tags={<TagContainer>
                    <Tag text="TypeScript" className="bg-blue-700" />
                    <Tag text="React Native" className="bg-sky-400" />
                    <Tag text="Expo" className="bg-indigo-950" />
                    <Tag text="Expo Router" className="bg-indigo-950" />
                    <Tag text="Nativewind" className="bg-teal-300" />
                    <Tag text="Zustand" className="bg-purple-500" />
                    <Tag text="SQLite" className="bg-zinc-600" />
                </TagContainer>}
                title="Kakebo"
                text={`
						Kakebo é um simples app para controlar despesas inspirado no método japonês para poupar dinheiro.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/kakebo"><Github /><span>Código</span></ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/cv-creator.webp"
                tags={
                    <TagContainer>
                        <Tag text="React" className="bg-sky-400" />
                        <Tag text="TypeScript" className="bg-blue-500" />
                        <Tag text="Vite" className="bg-blue-900" />
                        <Tag text="TailwindCSS" className="bg-sky-300" />
                        <Tag text="i18next" className="bg-zinc-600" />
                        <Tag text="Zustand" className="bg-purple-500" />
                        <Tag text="Axios" className="bg-indigo-500" />
                        <Tag text="AI" className="bg-blue-900" />
                    </TagContainer>
                }
                title="Criador de CV"
                text={`
						Crie seu currículo com essa ferramenta simples que gera o PDF dinamicamente com as suas informações.
                        Além disso, a aplicação possui tradução para inglês e português, um sistema de inteligência artificial
                        que permite importar os seus dados de um currículo em formato .pdf e também um sistema de exportação
                        que permite salvar os dados em formato .json para futuras alterações.
					`}
            >
                <ButtonLink href="https://cvcreator.richardborges.dev/"><BoxArrowUpRight /><span>Site</span></ButtonLink>
                <ButtonLink href="https://github.com/ribborges/cv-creator/"><Github /><span>Código</span></ButtonLink>
                <ButtonLink href="https://github.com/ribborges/cv-creator-ai/"><Github /><span>Código API AI</span></ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/tasks.webp"
                tags={<TagContainer>
                    <Tag text="Node" className="bg-lime-500" />
                    <Tag text="Express" className="bg-black" />
                    <Tag text="TypeScript" className="bg-blue-500" />
                    <Tag text="React" className="bg-sky-400" />
                    <Tag text="Next.js" className="bg-zinc-800" />
                    <Tag text="React Native" className="bg-sky-400" />
                    <Tag text="Expo" className="bg-indigo-950" />
                    <Tag text="Zustand" className="bg-purple-500" />
                    <Tag text="Axios" className="bg-indigo-500" />
                    <Tag text="JWT" className="bg-rose-600" />
                    <Tag text="TailwindCSS" className="bg-sky-300" />
                    <Tag text="Nativewind" className="bg-teal-300" />
                    <Tag text="MongoDB" className="bg-emerald-500" />
                    <Tag text="REST API" className="bg-black" />
                    <Tag text="Authentication" className="bg-black" />
                </TagContainer>}
                title="Tasks"
                text={`
						Um app simples para registrar e organizar suas tarefas diárias com categorias, prioridades e datas.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/tasks-web"><Github /><span>Código Web</span></ButtonLink>
                <ButtonLink href="https://github.com/ribborges/tasks-mobile"><Github /><span>Código Mobile</span></ButtonLink>
                <ButtonLink href="https://github.com/ribborges/tasks-api"><Github /><span>Código API</span></ButtonLink>
                <ButtonLink href="https://tasks.richardborges.dev/"><BoxArrowUpRight /><span>Demo</span></ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/fisio-home.webp"
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
                <ButtonLink href="https://fisiohome.richardborges.dev/"><ThreeDotsVertical /><span>Detalhes</span></ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/node.webp"
                tags={<TagContainer>
                    <Tag text="TypeScript" className="bg-blue-700" />
                    <Tag text="Node" className="bg-lime-500" />
                    <Tag text="Express" className="bg-black" />
                    <Tag text="MongoDB" className="bg-emerald-500" />
                    <Tag text="JWT" className="bg-rose-600" />
                    <Tag text="REST API" className="bg-black" />
                    <Tag text="Authentication" className="bg-black" />
                </TagContainer>}
                title="REST API com autenticação"
                text={`
						Uma API REST com autenticação e recursos de segurança para endpoints.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/api-with-auth"><Github /><span>Código</span></ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/habits.webp"
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
                <ButtonLink href="https://github.com/ribborges/nlw-setup-ignite/"><Github /><span>Código</span></ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/cook-app.webp"
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
                <ButtonLink href="https://github.com/ribborges/cook-app/tree/master"><Github /><span>Código</span></ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/cat-fact.webp"
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
                <ButtonLink href="https://github.com/ribborges/cat-fact-app"><Github /><span>Código</span></ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/social-tree.webp"
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
                <ButtonLink href="https://linktree.richardborges.dev"><BoxArrowUpRight /><span>Demo</span></ButtonLink>
                <ButtonLink href="https://github.com/ribborges/social-tree/"><Github /><span>Código</span></ButtonLink>
            </Card>
        </GridContainer>
    );
}