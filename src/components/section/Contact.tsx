import Button from "../button/Button";
import Blanckspace from "../separator/Blackspace";

import './_portfolio.scss';

export default function Contact() {
  return (
    <section id="contact">
      <h1><i className="bi bi-card-list"></i> CONTACT ME</h1>
      <Blanckspace/>
      <div className="flex-container">
        <Button href="mailto:ribborges@outlook.com" className="accent big"><i className="bi bi-envelope-fill"></i> Email</Button>
        <Button href="https://linkedin.com/in/ribborges" className="accent big"><i className="bi bi-linkedin"></i> LinkedIn</Button>
        <Button href="https://github.com/ribborges" className="accent big"><i className="bi bi-github"></i> Github</Button>
      </div>
    </section>
  )
}