import { HouseDoorFill, PersonFill, BriefcaseFill } from "react-bootstrap-icons";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { NavBar, NavItem } from "../../components/Navbar";
import About from "../../components/section/About";
import Portfolio from "../../components/section/Portfolio";
import { Spacer } from "../../components/Separator";

export default function Home() {
  return (
    <>
      <NavBar title="R" >
        <NavItem icon={<HouseDoorFill />} label="Inicio" href="#header" />
        <NavItem icon={<PersonFill />} label="Sobre mim" href="#about" />
        <NavItem icon={<BriefcaseFill />} label="Portfolio" href="#portfolio" />
      </NavBar>
      <Header />

      <main className="content">
        <About />
        <Spacer />
        <Portfolio />
      </main>

      <Footer />
    </>
  );
}