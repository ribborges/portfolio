import Blanckspace from '../separator/Blackspace';
import './_about.scss';

export default function About() {
  return (
    <section id="about">
		<h1><i className="bi bi-person"></i> ABOUT ME</h1>
		<Blanckspace/>
		<p>
			I'm a Front-end developer, I have a communicative profile and I consider myself extremely creative.
			I've been passionate about technology since I was a kid. I started my studies in the area
			with a certificate program of computer technician and, soon after, with the bachelor degree
			of computer science at the Pontifical Catholic University of Minas Gerais. My main skills
			are focused on Front-end development such as: HTML, CSS, JavaScript, TypeScript, Node, React
			and SASS. I also have deep knowledge in non-relational databases such as MongoDB and I'm a
			great enthusiast in game development with Unreal (C++ and Blueprints).
		</p>
		<Blanckspace/>
		<div>
			<img className="icon" src="/public/static/img/icons/JS.png"/>
			<img className="icon" src="/public/static/img/icons/TS.png"/>
			<img className="icon" src="/public/static/img/icons/SASS.png"/>
			<img className="icon" src="/public/static/img/icons/Node.png"/>
			<img className="icon" src="/public/static/img/icons/React.png"/>
			<img className="icon" src="/public/static/img/icons/Mongo.png"/>
			<img className="icon" src="/public/static/img/icons/Unreal.png"/>
		</div>
	</section>
  )
}