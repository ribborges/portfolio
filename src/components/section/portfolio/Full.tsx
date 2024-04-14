import { displayText } from "../../../data/lang";
import Card from "../../Card";
import Grid from "../../Grid";
import ButtonLink from "../../Input/Button";

import { BoxArrowUpRight, Github, ThreeDotsVertical } from "react-bootstrap-icons";

interface portfolioProps {
    lang?: displayText,
}

export default function Full(props: portfolioProps) {
    return (
        <Grid>
            <Card
                thumb="/static/img/projects/cookApp.png"
                title={"Cook App"}
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
                <ButtonLink href="https://github.com/ribborges/cook-app/tree/master"><Github /> {props.lang?.portfolio[1].project[1].btn[0]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/fisioHome.png"
                title={props.lang?.portfolio[1].project[0].title}
                text={props.lang?.portfolio[1].project[0].text}
            >
                <ButtonLink href="/fisio-home" target="_self"><ThreeDotsVertical /> {props.lang?.portfolio[1].project[0].btn[0]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/catFact.png"
                title={props.lang?.portfolio[1].project[1].title}
                text={props.lang?.portfolio[1].project[1].text}
            >
                <ButtonLink href="https://github.com/ribborges/cat-fact-app"><Github /> {props.lang?.portfolio[1].project[1].btn[0]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/cv-creator.png"
                title={props.lang?.portfolio[0].project[0].title}
                text={props.lang?.portfolio[0].project[0].text}
            >
                <ButtonLink href="https://cv-creator-ten.vercel.app/"><BoxArrowUpRight /> {props.lang?.portfolio[0].project[0].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/cv-creator/"><Github /> {props.lang?.portfolio[0].project[0].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/habits.png"
                title={props.lang?.portfolio[0].project[1].title}
                text={props.lang?.portfolio[0].project[1].text}
            >
                <ButtonLink href="https://github.com/ribborges/nlw-setup-ignite/"><Github /> {props.lang?.portfolio[0].project[1].btn[0]}</ButtonLink>
            </Card>
        </Grid>
    );
}