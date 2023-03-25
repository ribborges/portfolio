import { displayText } from '../../data/lang';
import Blanckspace from '../separator/Blackspace';
import './_about.scss';

interface aboutProps {
	lang?: displayText,
}

export default function About(props: aboutProps) {
  return (
    <section id="about">
		<h1><i className="bi bi-person-fill"></i> {props.lang?.nav.about.toUpperCase()}</h1>
		<Blanckspace/>
		<p>{props.lang?.about.text}</p>
		<Blanckspace/>
		<div>
			<img className="icon" src="/static/img/icons/JS.png"/>
			<img className="icon" src="/static/img/icons/TS.png"/>
			<img className="icon" src="/static/img/icons/SASS.png"/>
			<img className="icon" src="/static/img/icons/Node.png"/>
			<img className="icon" src="/static/img/icons/React.png"/>
			<img className="icon" src="/static/img/icons/Mongo.png"/>
			<img className="icon" src="/static/img/icons/Unreal.png"/>
		</div>
	</section>
  )
}