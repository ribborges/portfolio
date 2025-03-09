import { BriefcaseFill, HouseDoorFill, PersonFill } from "react-bootstrap-icons";

import { NavBar } from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/section/About";
import { Spacer } from "@/components/Separator";
import Portfolio from "@/components/section/Portfolio";
import Footer from "@/components/Footer";
import { MenuLink } from "@/components/Input";

export default function Home() {
  return (
    <>
      <NavBar>
        <MenuLink icon={<HouseDoorFill />} label="Inicio" href="#header" />
        <MenuLink icon={<PersonFill />} label="Sobre mim" href="#about" />
        <MenuLink icon={<BriefcaseFill />} label="Portfolio" href="#portfolio" />
      </NavBar>
      <Header/>

      <main className="content">
        <About />
        <Spacer />
        <Portfolio />
      </main>

      <Footer />
    </>
  );
}