import Blanckspace from "../separator/Blackspace";
import { displayText } from "../../data/lang";
import { ToggleContainer } from "../input/Toggle";
import Web from "./portfolio/Web";
import Mobile from "./portfolio/Mobile";
import Unreal from "./portfolio/Unreal";

interface portfolioProps {
	lang?: displayText,
}

export default function About(props: portfolioProps) {

	return (
		<section id="portfolio">
			<h1><i className="bi bi-briefcase-fill"></i> {props.lang?.nav.portfolio.toUpperCase()}</h1>
			<Blanckspace />
			<ToggleContainer id="portfolioToggle" labels={["Web", "Mobile", "Unreal Engine"]}>
				<Web lang={props.lang} />
				<Mobile lang={props.lang} />
				<Unreal lang={props.lang} />
			</ToggleContainer>
		</section>
	)
}