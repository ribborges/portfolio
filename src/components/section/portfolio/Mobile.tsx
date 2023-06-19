import { displayText } from "../../../data/lang";
import Card from "../../card/Card";
import Grid from "../../grid/Grid";
import ButtonLink from "../../input/ButtonLink";
import { ThreeDotsVertical, Github } from "react-bootstrap-icons";

interface portfolioProps {
    lang?: displayText,
}

export default function Mobile(props: portfolioProps) {
    return (
        <Grid>
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
                thumb="/static/img/projects/habits.png"
                title={props.lang?.portfolio[0].project[1].title}
                text={props.lang?.portfolio[0].project[1].text}
            >
                <ButtonLink href="https://github.com/ribborges/nlw-setup-ignite/"><Github /> {props.lang?.portfolio[0].project[1].btn[0]}</ButtonLink>
            </Card>
        </Grid>
    );
}