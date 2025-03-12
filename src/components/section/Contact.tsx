import { SendFill, EnvelopeFill, Linkedin, Github, PersonFill, FileEarmarkPersonFill, Whatsapp } from "react-bootstrap-icons";

import { Button, ButtonLink } from "@/components/Input";
import { Blanckspace } from "@/components/Separator";
import { H3, H4 } from "@/components/Heading";
import { Input } from "../Input/Input";

export default function Contact() {
  return (
    <section className="p-2 md:p-4 lg:p-16" id="contact">
      <H3><SendFill /><span>CONTATO</span></H3>
      <Blanckspace />
      <div className="flex justify-start flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-1 gap-2">
          <H4>Me mande uma mensagem</H4>
          <form action="">
            <div className="flex gap-2">
              <Input
                rootClassName="flex-1"
                id="name"
                name="name"
                type="text"
                placeholder="Nome"
                icon={<PersonFill />}
                label="Nome"
              />
              <Input
                rootClassName="flex-1"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                icon={<EnvelopeFill />}
                label="Email"
              />
            </div>
            <Input
              id="message"
              name="message"
              type="textarea"
              placeholder="Mensagem"
              icon={<SendFill />}
              label="Mensagem"
            />
            <Button>Enviar</Button>
          </form>
        </div>
        <div className="flex flex-col gap-2">
          <H4>Ou me encontre também por:</H4>
          <div className="flex md:flex-col flex-wrap justify-center gap-2">
            <ButtonLink href="mailto:contato@richardborges.dev"><EnvelopeFill /><span className="hidden md:block">Email</span></ButtonLink>
            <ButtonLink href="https://wa.me/5511942347830"><Whatsapp /><span className="hidden md:block">Whatsapp</span></ButtonLink>
            <ButtonLink href="https://linkedin.com/in/ribborges"><Linkedin /><span className="hidden md:block">LinkedIn</span></ButtonLink>
            <ButtonLink href="https://github.com/ribborges"><Github /><span className="hidden md:block">Github</span></ButtonLink>
            <ButtonLink href="/static/docs/cv-richard-borges.pdf"><FileEarmarkPersonFill /><span className="hidden md:block">CV</span></ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}