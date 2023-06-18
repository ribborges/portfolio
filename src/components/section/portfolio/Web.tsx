import { displayText } from "../../../data/lang";
import Card from "../../card/Card";
import Grid from "../../grid/Grid";
import ButtonLink from "../../input/ButtonLink";

interface portfolioProps {
	lang?: displayText,
}

export default function Web(props: portfolioProps) {
    return (
        <Grid>
            <Card
                thumb="/static/img/projects/cv-creator.png"
                title={props.lang?.portfolio[0].project[0].title}
                text={props.lang?.portfolio[0].project[0].text}
            >
                <ButtonLink href="https://cv-creator-ten.vercel.app/"><i className="bi bi-box-arrow-up-right" /> {props.lang?.portfolio[0].project[0].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/cv-creator/"><i className="bi bi-github" /> {props.lang?.portfolio[0].project[0].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/habits.png"
                title={props.lang?.portfolio[0].project[1].title}
                text={props.lang?.portfolio[0].project[1].text}
            >
                <ButtonLink href="https://github.com/ribborges/nlw-setup-ignite/"><i className="bi bi-github" /> {props.lang?.portfolio[0].project[1].btn[0]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/rocketnews.png"
                title={props.lang?.portfolio[0].project[2].title}
                text={props.lang?.portfolio[0].project[2].text}
            >
                <ButtonLink href="https://ribborges.github.io/rocketnews/"><i className="bi bi-box-arrow-up-right" /> {props.lang?.portfolio[0].project[2].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/rocketnews/"><i className="bi bi-github" /> {props.lang?.portfolio[0].project[2].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/socialTree.png"
                title={props.lang?.portfolio[0].project[3].title}
                text={props.lang?.portfolio[0].project[3].text}
            >
                <ButtonLink href="https://socialtree-richardborges.vercel.app/"><i className="bi bi-box-arrow-up-right" /> {props.lang?.portfolio[0].project[3].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/social-tree/"><i className="bi bi-github" /> {props.lang?.portfolio[0].project[3].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/rkPortfofio.png"
                title={props.lang?.portfolio[0].project[4].title}
                text={props.lang?.portfolio[0].project[4].text}
            >
                <ButtonLink href="https://ribborges.github.io/rocket-portfolio/"><i className="bi bi-box-arrow-up-right" /> {props.lang?.portfolio[0].project[4].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/rocket-portfolio/"><i className="bi bi-github" /> {props.lang?.portfolio[0].project[4].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/rocketseatListaPresenca.png"
                title={props.lang?.portfolio[0].project[5].title}
                text={props.lang?.portfolio[0].project[5].text}
            >
                <ButtonLink href="https://lista-presenca-two.vercel.app/"><i className="bi bi-box-arrow-up-right" /> {props.lang?.portfolio[0].project[5].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/lista-presenca/"><i className="bi bi-github" /> {props.lang?.portfolio[0].project[5].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/aluraStudies.png"
                title={props.lang?.portfolio[0].project[6].title}
                text={props.lang?.portfolio[0].project[6].text}
            >
                <ButtonLink href="https://alura-studies-gray.vercel.app/"><i className="bi bi-box-arrow-up-right" /> {props.lang?.portfolio[0].project[6].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/alura-studies/"><i className="bi bi-github" /> {props.lang?.portfolio[0].project[6].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/mTable.png"
                title={props.lang?.portfolio[0].project[7].title}
                text={props.lang?.portfolio[0].project[7].text}
            >
                <ButtonLink href="https://ribborges.github.io/Multiply-Table/"><i className="bi bi-box-arrow-up-right" /> {props.lang?.portfolio[0].project[7].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/Multiply-Table/"><i className="bi bi-github" /> {props.lang?.portfolio[0].project[7].btn[1]}</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/students.png"
                title={props.lang?.portfolio[0].project[8].title}
                text={props.lang?.portfolio[0].project[8].text}
            >
                <ButtonLink href="https://ribborges.github.io/University/"><i className="bi bi-box-arrow-up-right" /> {props.lang?.portfolio[0].project[8].btn[0]}</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/University/"><i className="bi bi-github" /> {props.lang?.portfolio[0].project[8].btn[1]}</ButtonLink>
            </Card>
        </Grid>
    );
}