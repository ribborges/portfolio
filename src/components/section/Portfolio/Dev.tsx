import Card from "../../Card";
import Grid from "../../Grid";
import { Tag, TagContainer } from "../../Tag";
import ButtonLink from "../../Input/Button";
import { Github, ThreeDotsVertical, BoxArrowUpRight } from "react-bootstrap-icons";

export default function Dev() {
    return (
        <Grid>
            <Card
                thumb="https://imgs.search.brave.com/aKNaDsFYkmoVkVhGb4p5QHRCwDy9RXamzQW2OTBPq7U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9uZ29kYi5jb20v/ZG9jcy9kcml2ZXJz/L25vZGUvY3VycmVu/dC9zdGF0aWMvYjNh/ZGRkMGViNDI0NGE4/MDJmYjY0MzUyNjA4/NWI0Y2EvOGU3Njgv/Tm9kZV9DYXRhbG9n/LndlYnA"
                tags={<TagContainer>
                    <Tag text="TypeScript" color="#1475dd" />
                    <Tag text="Node" color="#259221" />
                    <Tag text="Express" color="#000000" />
                    <Tag text="MongoDB" color="#28831a" />
                    <Tag text="REST API" color="#000000" />
                    <Tag text="Authentication" color="#000000" />
                </TagContainer>}
                title="REST API com autenticação"
                text={`
						Uma API REST com autenticação e recursos de segurança para endpoints.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/api-with-auth" target="_self" icon={<Github />} label="APP" />
            </Card>

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
                text={`
						Um app simples para registrar suas tarefas diárias.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/tasks-app" target="_self" icon={<Github />} label="APP" />
                <ButtonLink href="https://github.com/ribborges/tasks-api" target="_self" icon={<Github />} label="API" />
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
						que sugere receitas conforme os ingredientes selecionados pelo usuário.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/cook-app/tree/master" icon={<Github />} label="Código" />
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
						Aplicação desenvolvida durante a disciplina de "Trabalho de Diplomação" em parceria
						entre os cursos de Ciência da Computação e Fisioterapia da Pontifícia Universidade Católica, campus
						Poços de Caldas, visa estabelecer uma conexão remota entre pacientes em processo de recuperação
						pós-acidente vascular encefálico (AVE) e os profissionais de fisioterapia presentes no campus.
					`}
            >
                <ButtonLink href="/fisio-home" target="_self" icon={<ThreeDotsVertical />} label="Detalhes" />
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
						Veja fatos aleatórios sobre gatos junto de uma imagem fofinha :3
					`}
            >
                <ButtonLink href="https://github.com/ribborges/cat-fact-app" icon={<Github />} label="Código" />
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
						Crie seu currículo com essa ferramenta simples que gera o PDF dinamicamente com as suas informações
						e permite exportar os dados em formato .json para futuras alterações.
					`}
            >
                <ButtonLink href="https://cvcreator.richardborges.dev/" icon={<BoxArrowUpRight />} label="Demo" />
                <ButtonLink href="https://github.com/ribborges/cv-creator/" icon={<Github />} label="Código" />
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
						Projeto desenvolvido durante o evento NLW Setup - Ignite da Rocketseat.
					`}
            >
                <ButtonLink href="https://github.com/ribborges/nlw-setup-ignite/" icon={<Github />} label="Código" />
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
                text={`
						Minha Social Tree com links para as minhas redes sociais.
					`}
            >
                <ButtonLink href="https://linktree.richardborges.dev" icon={<BoxArrowUpRight />} label="Demo" />
                <ButtonLink href="https://github.com/ribborges/social-tree/" icon={<Github />} label="Código" />
            </Card>
        </Grid>
    );
}