import { displayText } from '../../data/lang';
import Blanckspace from '../separator/Blackspace';
import { PersonFill } from "react-bootstrap-icons";

import './_about.scss';

interface aboutProps {
	lang?: displayText,
}

export default function About(props: aboutProps) {
	return (
		<section id="about">
			<h1><PersonFill /> {props.lang?.nav.about.toUpperCase()}</h1>
			<Blanckspace />
			<p>{props.lang?.about.text}</p>
			<Blanckspace />
			<div>
				<img className="icon" src="https://img.icons8.com/?size=512&id=20909&format=png" alt="HTML logo" />
				<img className="icon" src="https://img.icons8.com/?size=512&id=21278&format=png" alt="CSS logo" />
				<img className="icon" src="https://img.icons8.com/?size=512&id=108784&format=png" alt="JavaScript logo" />
				<img className="icon" src="https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png" alt="TypeScript logo" />
				<img className="icon" src="https://img.icons8.com/?size=512&id=QBqFNfPPB2Kx&format=png" alt="SASS logo" />
				<img className="icon" src="https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png" alt="Node.js logo" />
				<img className="icon" src="https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png" alt="express.js logo" />
				<img className="icon" src="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png" alt="React logo" />
				<img className="icon" src="https://img.icons8.com/?size=512&id=74402&format=png" alt="MongoDB logo" />
				<img className="icon" src="https://img.icons8.com/?size=512&id=34301&format=png" alt="Unreal Engine logo" />
			</div>
		</section>
	)
}