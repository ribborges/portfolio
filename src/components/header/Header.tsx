import Button from '../button/Button';
import Blanckspace from '../separator/Blackspace';
import './_style.scss';

export default function Header() {
  return (
    <header className="header">
		<div>
			<h3>Hi there 🫡</h3>
			<h1>I'm Richard Borges</h1>
			<h2>Front-end developer</h2>
			<Blanckspace/>
			<Button href="/cv/cv-richard-borges.pdf" className="accent big"><i className="bi bi-file-earmark-person-fill"></i> Curriculum Vitae</Button>
		</div>
	</header>
  )
}