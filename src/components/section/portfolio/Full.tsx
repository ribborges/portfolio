import Card from "../../Card";
import Grid from "../../Grid";
import ButtonLink from "../../Input/Button";

import { BoxArrowUpRight, Github, ThreeDotsVertical } from "react-bootstrap-icons";

export default function Full() {
    return (
        <Grid>
            <Card
                thumb="/static/img/projects/tasks.png"
                title="Tasks"
                text={`A simple app to track your tasks. Developed using React, TypeScript, Vite and Styled Components for the the front-end and Node, Express and TypeScript for the back-end and MongoDB for the database.`}
            >
                <ButtonLink href="https://github.com/ribborges/tasks-app" target="_self"><Github /> APP</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/tasks-api" target="_self"><Github /> API</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/cookApp.png"
                title="Cook App"
                text={`
                    Projeto desenvolvido durante o evento "React Native na prática" da Rocketseat.

                    Imagine chegar em casa com fome depois de um dia de muito trabalho e lembrar que você esqueceu de 
                    passar no mercado para fazer as compras da semana. Então você decide abrir a geladeira pra fazer 
                    uma janta com o que já tem em casa, mas está sem muita criatividade pra cozinhar. É esse problema 
                    que o Cook App pode resolve! Nessa aula do evento React Native na prática vamos criar uma aplicação 
                    que sugere receitas conforme os ingredientes selecionados usando React Native, Expo, Expo router, 
                    Supabase e React Native reanimated.
                `}
            >
                <ButtonLink href="https://github.com/ribborges/cook-app/tree/master"><Github /> Código</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/fisioHome.png"
                title="Fisio Home"
                text={`
                    A aplicação desenvolvida durante a disciplina de 'Trabalho de Diplomação'.Foi densenvolvida em 
                    React Native (Expo) no front-end e Node.js no back-end em conjunto com alguns pacotes como: 
                    Express.js, Mongoose, Axios e outros. A base de dados foi desenvolvida em MongoDB.
                `}
            >
                <ButtonLink href="/fisio-home" target="_self"><ThreeDotsVertical /> Detalhes</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/catFact.png"
                title="Cat Fact App"
                text={`
                    Veja fatos aleatórios sobre gatos junto de uma imagem fofinha :3 Desenvolvido com React Native.
                `}
            >
                <ButtonLink href="https://github.com/ribborges/cat-fact-app"><Github /> Código</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/cv-creator.png"
                title="Criador de CV"
                text={`
                    Crie seu currículo com essa ferramenta simples desenvolvida em React, TypeScript, Vite, SCSS e ReactPDF.
                `}
            >
                <ButtonLink href="https://cv-creator-ten.vercel.app/"><BoxArrowUpRight /> Demo</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/cv-creator/"><Github /> Código</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/habits.png"
                title="Habits"
                text={`
                    Rocketseat NLW Setup - Ignite.
                `}
            >
                <ButtonLink href="https://github.com/ribborges/nlw-setup-ignite/"><Github /> Código</ButtonLink>
            </Card>
        </Grid>
    );
}