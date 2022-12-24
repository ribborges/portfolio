import Button from "../button/Button";

import './_portfolio.scss';

export default function Contact() {
  return (
    <section id="contact">
		<h1><i className="bi bi-card-list"></i> CONTACT ME</h1>

		<div className="flex-container">
            <Button href="mailto:ribborges@outlook.com" className="email big"><i className="bi bi-envelope-fill"></i> Email</Button>
            <Button href="https://linkedin.com/in/ribborges" className="linkedin big"><i className="bi bi-linkedin"></i> LinkedIn</Button>
            <Button href="https://github.com/ribborges" className="github big"><i className="bi bi-github"></i> Github</Button>
            <Button href="" className="cv big"><i className="bi bi-file-earmark-person-fill"></i> Curriculum Vitae</Button>
		</div>
	</section>
  )
}