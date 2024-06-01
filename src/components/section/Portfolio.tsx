import { BriefcaseFill } from "react-bootstrap-icons";

import { Blanckspace } from "../Separator";
import { ToggleContainer } from "../Input/Toggle";
import Full from "./portfolio/Full";
import Front from "./portfolio/Front";

export default function About() {

	return (
		<section id="portfolio">
			<h1><BriefcaseFill /> PORTFÓLIO</h1>
			<Blanckspace />
			<ToggleContainer id="portfolioToggle" labels={["Full Stack", "Front End"]}>
				<Full />
				<Front />
			</ToggleContainer>
		</section>
	)
}