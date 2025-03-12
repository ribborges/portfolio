import { BriefcaseFill, HouseDoorFill, PersonFill, SendFill } from "react-bootstrap-icons";

import { NavBar } from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/section/About";
import { Blanckspace, Spacer } from "@/components/Separator";
import Portfolio from "@/components/section/Portfolio";
import Footer from "@/components/Footer";
import { MenuLink } from "@/components/Input";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <>
      <NavBar>
        <MenuLink icon={<HouseDoorFill />} label="Inicio" href="#header" />
        <MenuLink icon={<PersonFill />} label="Sobre mim" href="#about" />
        <MenuLink icon={<BriefcaseFill />} label="Portfolio" href="#portfolio" />
        <MenuLink icon={<SendFill />} label="Contato" href="#contact" />
      </NavBar>
      
      <Header/>

      <Blanckspace space={120} />

      <main className="p-2 md:p-4 lg:p-16">
        <About />
        <Spacer space={240} />
        <Portfolio />
        <Spacer space={240} />
        <Contact />
      </main>

      <Footer />
    </>
  );
}