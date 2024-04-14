import { BriefcaseFill } from "react-bootstrap-icons";

import { Blanckspace } from "../Separator";
import { displayText } from "../../data/lang";
import { ToggleContainer } from "../Input/Toggle";
import Full from "./portfolio/Full";
import Front from "./portfolio/Front";

interface portfolioProps {
	lang?: displayText,
}

export default function About(props: portfolioProps) {

	return (
		<section id="portfolio">
			<h1><BriefcaseFill /> {props.lang?.nav.portfolio.toUpperCase()}</h1>
			<Blanckspace />
			<ToggleContainer id="portfolioToggle" labels={["Full Stack", "Front End"]}>
				<Full lang={props.lang} />
				<Front lang={props.lang} />
			</ToggleContainer>
		</section>
	)
}