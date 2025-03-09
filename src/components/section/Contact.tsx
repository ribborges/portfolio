import { SendFill, EnvelopeFill, Linkedin, Github } from "react-bootstrap-icons";

import { Button } from "@/components/Input";
import { Blanckspace } from "@/components/Separator";
import { FlexContainer } from "@/components/Container";

import Title from "./Title";

export default function Contact() {
  return (
    <section id="contact">
      <Title icon={<SendFill />} title="CONTATO" />
      <Blanckspace />
      <FlexContainer direction="col">
        <Button href="mailto:ribborges@outlook.com" className="accent big" icon={<EnvelopeFill />} label="Email" />
        <Button href="https://linkedin.com/in/ribborges" className="accent big" icon={<Linkedin />} label="LinkedIn" />
        <Button href="https://github.com/ribborges" className="accent big" icon={<Github />} label="Github" />
      </FlexContainer>
    </section>
  );
}