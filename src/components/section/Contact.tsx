import Card from "../card/Card";
import ButtonLink from "../input/ButtonLink";
import Blanckspace from "../separator/Blackspace";

export default function Contact() {
  return (
    <section id="contact">
      <h1><i className="bi bi-list-task"></i> CONTACT ME</h1>
      <Blanckspace />
      <div className="flex-container flex-col">
        <ButtonLink href="mailto:ribborges@outlook.com" className="accent big"><i className="bi bi-envelope-fill" /> Email</ButtonLink>
        <ButtonLink href="https://linkedin.com/in/ribborges" className="accent big"><i className="bi bi-linkedin" /> LinkedIn</ButtonLink>
        <ButtonLink href="https://github.com/ribborges" className="accent big"><i className="bi bi-github" /> Github</ButtonLink>
      </div>
    </section>
  )
}