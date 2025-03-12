import { BriefcaseFill, HouseDoorFill, PersonFill, SendFill } from "react-bootstrap-icons";

import { NavBar } from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/section/About";
import { Blanckspace, Spacer } from "@/components/Separator";
import Portfolio from "@/components/section/Portfolio";
import Footer from "@/components/Footer";
import { MenuLink } from "@/components/Input";
import Contact from "@/components/section/Contact";
import Translator from "@/components/Translator";

export default function Home() {
  return (
    <>
      <NavBar>
        <MenuLink icon={<HouseDoorFill />} label={Translator({path: "nav.home"})} href="#header" />
        <MenuLink icon={<PersonFill />} label={Translator({path: "nav.about"})} href="#about" />
        <MenuLink icon={<BriefcaseFill />} label={Translator({path: "nav.portfolio"})} href="#portfolio" />
        <MenuLink icon={<SendFill />} label={Translator({path: "nav.contact"})} href="#contact" />
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