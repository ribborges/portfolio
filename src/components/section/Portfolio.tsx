import { BriefcaseFill } from "react-bootstrap-icons";

import { Blanckspace } from "../Separator";
import { ToggleContainer } from "../Input";
import Dev from "./Portfolio/Dev";
import Unreal from "./Portfolio/Unreal";
import Design from "./Portfolio/Design";
import Title from "./Title";

export default function About() {

	return (
		<section id="portfolio">
			<Title icon={<BriefcaseFill />} title="PORTFÓLIO" />
			<Blanckspace />
			<ToggleContainer id="portfolio" items={[
				{
					label: "Desenvolvimento",
					content: <Dev />
				}, {
					label: "Design",
					content: <Design />
				}, {
					label: "Unreal Engine",
					content: <Unreal />
				}
			]} />
		</section>
	);
	
}