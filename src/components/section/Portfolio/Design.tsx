import { ArrowUpRightCircleFill } from "react-bootstrap-icons";

import Card from "@/components/Card";
import { Tag, TagContainer } from "@/components/Tag";
import { ButtonLink } from "@/components/Input";
import { GridContainer } from "@/components/Container";

export default function Design() {
    return (
        <GridContainer>
            <Card
                key={"design-0"}
                thumb="/static/img/projects/charity-app.webp"
                tags={<TagContainer>
                    <Tag text="Figma" className="bg-rose-900" />
                    <Tag text="UX/UI" className="bg-zinc-700" />
                </TagContainer>}
                title="Charity App"
                text={`
						Design de um aplicativo de doações para caridade, criado como uma
                        tarefa para a matéria de Experiência de Usuário da pós-graduação
                        em Engenharia de Software na USP
					`}
            >
                <ButtonLink href="https://www.figma.com/community/file/1412195434508691714/charity-app"><ArrowUpRightCircleFill /><span>Figma</span></ButtonLink>
            </Card>
        </GridContainer>
    );
}