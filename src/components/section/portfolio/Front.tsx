import { displayText } from "../../../data/lang";
import Card from "../../card/Card";
import Grid from "../../grid/Grid";
import ButtonLink from "../../input/ButtonLink";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";

interface portfolioProps {
    lang?: displayText,
}

export default function Front(props: portfolioProps) {
    return (
        <Grid>
            <Card
                thumb="/static/img/projects/rocketnews.png"
                title={props.lang?.portfolio[0].project[2].title}
                text={props.lang?.portfolio[0].project[2].text}
            >
                <ButtonLink href="https://ribborges.github.io/rocketnews/"><BoxArrowUpRight /> {props.lang?.portfolio[0].project[2].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/rocketnews/"><Github /> {props.lang?.portfolio[0].project[2].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/socialTree.png"
                title={props.lang?.portfolio[0].project[3].title}
                text={props.lang?.portfolio[0].project[3].text}
            >
                <ButtonLink href="https://socialtree-richardborges.vercel.app/"><BoxArrowUpRight /> {props.lang?.portfolio[0].project[3].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/social-tree/"><Github /> {props.lang?.portfolio[0].project[3].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/rkPortfofio.png"
                title={props.lang?.portfolio[0].project[4].title}
                text={props.lang?.portfolio[0].project[4].text}
            >
                <ButtonLink href="https://ribborges.github.io/rocket-portfolio/"><BoxArrowUpRight /> {props.lang?.portfolio[0].project[4].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/rocket-portfolio/"><Github /> {props.lang?.portfolio[0].project[4].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/rocketseatListaPresenca.png"
                title={props.lang?.portfolio[0].project[5].title}
                text={props.lang?.portfolio[0].project[5].text}
            >
                <ButtonLink href="https://lista-presenca-two.vercel.app/"><BoxArrowUpRight /> {props.lang?.portfolio[0].project[5].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/lista-presenca/"><Github /> {props.lang?.portfolio[0].project[5].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/aluraStudies.png"
                title={props.lang?.portfolio[0].project[6].title}
                text={props.lang?.portfolio[0].project[6].text}
            >
                <ButtonLink href="https://alura-studies-gray.vercel.app/"><BoxArrowUpRight /> {props.lang?.portfolio[0].project[6].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/alura-studies/"><Github /> {props.lang?.portfolio[0].project[6].btn[1]}</ButtonLink>
            </Card>
        </Grid>
    );
}