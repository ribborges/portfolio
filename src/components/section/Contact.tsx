"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SendFill, EnvelopeFill, Linkedin, Github, PersonFill, FileEarmarkPersonFill, Whatsapp } from "react-bootstrap-icons";

import { Button, ButtonLink } from "@/components/Input";
import { Blanckspace } from "@/components/Separator";
import { H3, H4 } from "@/components/Heading";
import { Input } from "../Input/Input";
import useToast from "@/hooks/useToast";

export default function Contact() {
  const [emailData, setEmailData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  }

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) emailjs
      .sendForm('service_m9g7yqa', 'template_g95ipzi', form.current, {
        publicKey: 'BAd3FFTp20GZQg5lh',
      })
      .then(
        () => {
          setEmailData({
            from_name: '',
            from_email: '',
            message: '',
          });
          show({ message: 'Mensagem enviada com sucesso!', type: 'success' });
        },
        (error) => {
          show({ message: 'Falha ao enviar mensagem!', type: 'error' });
        },
      );
  };

  const { show } = useToast();

  return (
    <section className="p-2 md:p-4 lg:p-16" id="contact">
      <H3><SendFill /><span>CONTATO</span></H3>
      <Blanckspace />
      <div className="flex justify-start flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-1 gap-2">
          <H4>Me mande uma mensagem</H4>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex gap-2">
              <Input
                rootClassName="flex-1"
                id="name"
                name="from_name"
                type="text"
                placeholder="Nome"
                icon={<PersonFill />}
                label="Nome"
                value={emailData.from_name}
                onChange={handleChange}
              />
              <Input
                rootClassName="flex-1"
                id="email"
                name="from_email"
                type="email"
                placeholder="Email"
                icon={<EnvelopeFill />}
                label="Email"
                value={emailData.from_email}
                onChange={handleChange}
              />
            </div>
            <Input
              id="message"
              name="message"
              type="textarea"
              placeholder="Mensagem"
              icon={<SendFill />}
              label="Mensagem"
              value={emailData.message}
              onChange={handleChange}
            />
            <Button type="submit">Enviar</Button>
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