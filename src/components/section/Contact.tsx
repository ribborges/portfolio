import { EnvelopeFill, Linkedin, Github } from "react-bootstrap-icons";

import ButtonLink from "../Input/Button";
import { Blanckspace } from "../Separator";

export default function Contact() {
  return (
    <section id="contact">
      <h1><i className="bi bi-list-task"></i> CONTACT ME</h1>
      <Blanckspace />
      <div className="flex-container flex-col">
        <ButtonLink href="mailto:ribborges@outlook.com" className="accent big" icon={<EnvelopeFill/>} label="Email"/>
        <ButtonLink href="https://linkedin.com/in/ribborges" className="accent big" icon={<Linkedin/>} label="LinkedIn"/>
        <ButtonLink href="https://github.com/ribborges" className="accent big" icon={<Github/>} label="Github"/>
      </div>
    </section>
  );
}