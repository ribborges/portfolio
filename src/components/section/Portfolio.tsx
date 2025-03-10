import { BriefcaseFill } from "react-bootstrap-icons";

import { Blanckspace } from "@/components/Separator";
import { Toggle } from "@/components/Input";
import { H3 } from "@/components/Heading";

import Dev from "./Portfolio/Dev";
import Design from "./Portfolio/Design";

export default function About() {

	return (
		<section className="p-2 md:p-4 lg:p-16" id="portfolio">
			<H3><BriefcaseFill /><span>PORTFÓLIO</span></H3>
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