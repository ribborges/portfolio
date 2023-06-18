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
                thumb="https://cdn1.epicgames.com/ue/product/Thumbnail/PlatformGameEngine_thumb-284x284-5da9a0a09c8ae25d553d34fb567c5c8c.png"
                title={props.lang?.portfolio[1].project[0].title}
                text={props.lang?.portfolio[1].project[0].text}
            >
                <ButtonLink href="https://www.unrealengine.com/marketplace/en-US/product/c45a3c5b4b274a8d8871dc27bc0d2959"><i className="bi bi-cart-fill" /> {props.lang?.portfolio[1].project[0].btn[0]}</ButtonLink>
            </Card>

            <Card
                thumb="https://cdn1.epicgames.com/ue/product/Thumbnail/InteractiveObjectsSystemV2_thumb-284x284-f4d0f34d7f76d84ae53c6c06dc2db14d.png"
                title={props.lang?.portfolio[1].project[1].title}
                text={props.lang?.portfolio[1].project[1].text}
            >
                <ButtonLink href="https://www.unrealengine.com/marketplace/en-US/product/8f65c721a80445d09382a2d884ef1262"><i className="bi bi-box-arrow-up-right" /> {props.lang?.portfolio[1].project[1].btn[0]}</ButtonLink>
            </Card>

            <Card
                thumb="https://cdn1.epicgames.com/ue/product/Thumbnail/TowerDefenseStarterSample_thumb-284x284-2de3ec3bb659e20fc3d26753a290b008.png"
                title={props.lang?.portfolio[1].project[2].title}
                text={props.lang?.portfolio[1].project[2].text}
            >
                <ButtonLink href="https://www.unrealengine.com/marketplace/en-US/product/08cbb2b5f6e947ebadec92129df1d76b"><i className="bi bi-box-arrow-up-right" /> {props.lang?.portfolio[1].project[2].btn[0]}</ButtonLink>
            </Card>
        </Grid>
    );
}