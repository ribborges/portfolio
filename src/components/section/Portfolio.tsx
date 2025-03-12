import { BriefcaseFill } from "react-bootstrap-icons";

import { Blanckspace } from "@/components/Separator";
import { Toggle } from "@/components/Toggle";
import { H3 } from "@/components/Heading";
import Translator from "@/components/Translator";

import Dev from "./Portfolio/Dev";
import Design from "./Portfolio/Design";


export default function About() {

	return (
		<section className="p-2 md:p-4 lg:p-16" id="portfolio">
			<H3><BriefcaseFill /><span><Translator path="portfolio.title" /></span></H3>
			<Blanckspace />
			<Toggle id="portfolio" items={[
				{
					label: Translator({ path: "portfolio.dev" }),
					content: <Dev />
				}, {
					label: Translator({ path: "portfolio.design" }),
					content: <Design />
				}
			]} />
		</section>
	);
	
}