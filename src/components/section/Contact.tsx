import { SendFill, EnvelopeFill, Linkedin, Github } from "react-bootstrap-icons";

import { Button } from "@/components/Input";
import { Blanckspace } from "@/components/Separator";
import { FlexContainer } from "@/components/Container";
import { H3 } from "@/components/Heading";

export default function Contact() {
  return (
    <section className="p-2 md:p-4 lg:p-16" id="contact">
      <H3><SendFill /><span>CONTATO</span></H3>
      <Blanckspace />
      <FlexContainer direction="col">
        <Button href="mailto:ribborges@outlook.com" className="accent big" icon={<EnvelopeFill />} label="Email" />
        <Button href="https://linkedin.com/in/ribborges" className="accent big" icon={<Linkedin />} label="LinkedIn" />
        <Button href="https://github.com/ribborges" className="accent big" icon={<Github />} label="Github" />
      </FlexContainer>
    </section>
  );
}