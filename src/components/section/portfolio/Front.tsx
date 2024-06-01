import Card from "../../Card";
import Grid from "../../Grid";
import ButtonLink from "../../Input/Button";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";

export default function Front() {
    return (
        <Grid>
            <Card
                thumb="/static/img/projects/rocketnews.png"
                title="Rocket News"
                text="Desafio Rocketseat newsletter."
            >
                <ButtonLink href="https://ribborges.github.io/rocketnews/"><BoxArrowUpRight /> Demo</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/rocketnews/"><Github /> Código</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/socialTree.png"
                title="Social tree"
                text="Desafio Rocketseat social tree."
            >
                <ButtonLink href="https://socialtree-richardborges.vercel.app/"><BoxArrowUpRight /> Demo</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/social-tree/"><Github /> Código</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/rkPortfofio.png"
                title="Rocket Portfolio"
                text="Desafio Rocketseat portfolio."
            >
                <ButtonLink href="https://ribborges.github.io/rocket-portfolio/"><BoxArrowUpRight /> Demo</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/rocket-portfolio/"><Github /> Código</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/rocketseatListaPresenca.png"
                title="Lista de Presença"
                text="Rocketseat - Lista de presença."
            >
                <ButtonLink href="https://lista-presenca-two.vercel.app/"><BoxArrowUpRight /> Demo</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/lista-presenca/"><Github /> Código</ButtonLink>
            </Card>

            <Card
                thumb="/static/img/projects/aluraStudies.png"
                title="Alura studies"
                text="Lista de estudos com cronômetro."
            >
                <ButtonLink href="https://alura-studies-gray.vercel.app/"><BoxArrowUpRight /> Demo</ButtonLink>
                <ButtonLink href="https://github.com/ribborges/alura-studies/"><Github /> Código</ButtonLink>
            </Card>
        </Grid>
    );
}