import { ArrowUpRightCircleFill } from "react-bootstrap-icons";

import Card from "../../Card";
import { Tag, TagContainer } from "../../Tag";
import ButtonLink from "../../Input/Button";
import { GridContainer } from "../../Container";

export default function Unreal() {
    return (
        <GridContainer>
            <Card
                key={"design-0"}
                thumb="https://s3-alpha.figma.com/hub/file/6539758802/44203e98-ebf2-45a2-ac4f-3cac5bac65c6-cover.png"
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
                <ButtonLink href="https://www.figma.com/community/file/1412195434508691714/charity-app" target="_self" icon={<ArrowUpRightCircleFill />} label="Figma" />
            </Card>
        </GridContainer>
    );
}