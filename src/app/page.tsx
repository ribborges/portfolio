import { BriefcaseFill, HouseDoorFill, PersonFill } from "react-bootstrap-icons";

import { NavBar, NavItem } from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/section/About";
import { Spacer } from "../components/Separator";
import Portfolio from "../components/section/Portfolio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar>
        <NavItem icon={<HouseDoorFill />} label="Inicio" href="#header" />
        <NavItem icon={<PersonFill />} label="Sobre mim" href="#about" />
        <NavItem icon={<BriefcaseFill />} label="Portfolio" href="#portfolio" />
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