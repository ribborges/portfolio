import { HouseDoorFill, PersonFill, BriefcaseFill } from "react-bootstrap-icons";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { NavBar, NavItem } from "../../components/navbar";
import About from "../../components/section/About";
import Portfolio from "../../components/section/Portfolio";
import { Spacer } from "../../components/separator";
import { displayText } from "../../data/lang";

interface homeProps {
  lang?: displayText,
  languageChange: any
}

export default function Home(props: homeProps) {
  return (
    <>
      <NavBar onChange={props.languageChange} title="R" >
        <NavItem icon={<HouseDoorFill />} label={props.lang?.nav.home} href="#header" />
        <NavItem icon={<PersonFill />} label={props.lang?.nav.about} href="#about" />
        <NavItem icon={<BriefcaseFill />} label={props.lang?.nav.portfolio} href="#portfolio" />
      </NavBar>
      <Header lang={props.lang} />

      <main className="content">
        <About lang={props.lang} />
        <Spacer />
        <Portfolio lang={props.lang} />
      </main>

      <Footer />
    </>
  );
}