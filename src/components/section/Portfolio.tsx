import Blanckspace from "../separator/Blackspace";
import { displayText } from "../../data/lang";
import { ToggleContainer } from "../input/Toggle";
import Web from "./portfolio/Web";
import Mobile from "./portfolio/Mobile";

import { BriefcaseFill } from "react-bootstrap-icons";

interface portfolioProps {
	lang?: displayText,
}

export default function About(props: portfolioProps) {

	return (
		<section id="portfolio">
			<h1><BriefcaseFill /> {props.lang?.nav.portfolio.toUpperCase()}</h1>
			<Blanckspace />
			<ToggleContainer id="portfolioToggle" labels={["Web", "Mobile"]}>
				<Web lang={props.lang} />
				<Mobile lang={props.lang} />
			</ToggleContainer>
		</section>
	)
}