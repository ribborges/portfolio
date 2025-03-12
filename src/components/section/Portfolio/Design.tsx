import { ArrowUpRightCircleFill } from "react-bootstrap-icons";

import Card from "@/components/Card";
import { Tag, TagContainer } from "@/components/Tag";
import { ButtonLink } from "@/components/Input";
import { GridContainer } from "@/components/Container";
import Translator from "@/components/Translator";

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
                title={Translator({ path: "portfolio.charityApp.title" })}
                text={Translator({ path: "portfolio.charityApp.description" })}
            >
                <ButtonLink href="https://www.figma.com/community/file/1412195434508691714/charity-app"><ArrowUpRightCircleFill /><span><Translator path="portfolio.charityApp.figma" /></span></ButtonLink>
            </Card>
        </GridContainer>
    );
}