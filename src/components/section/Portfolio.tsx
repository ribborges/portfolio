import { BriefcaseFill } from "react-bootstrap-icons";

import { Blanckspace } from "@/components/Separator";
import { Toggle } from "@/components/Input";

import Dev from "./Portfolio/Dev";
import Design from "./Portfolio/Design";
import Title from "./Title";

export default function About() {

	return (
		<section id="portfolio">
			<Title icon={<BriefcaseFill />} title="PORTFÓLIO" />
			<Blanckspace />
			<Toggle id="portfolio" items={[
				{
					label: "Desenvolvimento",
					content: <Dev />
				}, {
					label: "Design",
					content: <Design />
				}
			]} />
		</section>
	);
	
}