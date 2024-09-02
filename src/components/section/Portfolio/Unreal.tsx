import { CartFill } from "react-bootstrap-icons";

import Card from "../../Card";
import Grid from "../../Grid";
import { Tag, TagContainer } from "../../Tag";
import ButtonLink from "../../Input/Button";

export default function Unreal() {
    return (
        <Grid>
            <Card
                thumb="https://cdn1.epicgames.com/ue/product/Featured/PlatformGameEngine_featured-894x488-10d443a4181532f4500214f4babe81d2.png"
                tags={<TagContainer>
                    <Tag text="Unreal Engine 4" color="#ffe600" />
                    <Tag text="Unreal Engine 5" color="#ffe600" />
                </TagContainer>}
                title="Platform Game Engine"
                text={`
						Platform Game Engine is a complete platform game kit with meshes,
                        textures, materials, full gameplay, enemy AI, save game, collectibles,
                        power up system, interactive environment, puzzles, inventory and more...
					`}
            >
                <ButtonLink href="https://www.unrealengine.com/marketplace/en-US/slug/c45a3c5b4b274a8d8871dc27bc0d2959" target="_self" icon={<CartFill />} label="Unreal Marketplace" />
            </Card>

            <Card
                thumb="https://cdn1.epicgames.com/ue/product/Featured/TowerDefenseStarterSample_featured-894x488-ba4ba584839e4ff54b56f01b6a4eea0e.png"
                tags={<TagContainer>
                    <Tag text="Unreal Engine 4" color="#ffe600" />
                    <Tag text="Unreal Engine 5" color="#ffe600" />
                </TagContainer>}
                title="Tower Defense Starter Sample"
                text={`
						A very modular and easy to customize Tower Defense project made with
                        blueprint that provides functionalities for towers, enemys, rounds
                        and UI selection...
					`}
            >
                <ButtonLink href="https://www.unrealengine.com/marketplace/en-US/product/08cbb2b5f6e947ebadec92129df1d76b" target="_self" icon={<CartFill />} label="Unreal Marketplace" />
            </Card>

            <Card
                thumb="https://cdn1.epicgames.com/ue/product/Featured/InteractiveObjectsSystem_featured-894x488-4f9dea1ff2e6567b5bf5ef76f010d6b8.png"
                tags={<TagContainer>
                    <Tag text="Unreal Engine 4" color="#ffe600" />
                    <Tag text="Unreal Engine 5" color="#ffe600" />
                </TagContainer>}
                title="Interactive Objects System"
                text={`
						Interactive Objects System is a fully customizable and modular
                        system for interaction with objects, triggers, actions, doors,
                        windows, items, furniture, physics, inventory, weapons and more...
					`}
            >
                <ButtonLink href="https://www.unrealengine.com/marketplace/en-US/product/8f65c721a80445d09382a2d884ef1262" target="_self" icon={<CartFill />} label="Unreal Marketplace" />
            </Card>
        </Grid>
    );
}