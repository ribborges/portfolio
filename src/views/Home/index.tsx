import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/navbar/Nav";
import About from "../../components/section/About";
import Portfolio from "../../components/section/Portfolio";
import Spacer from "../../components/separator/Spacer";
import { displayText } from "../../data/lang";

interface homeProps {
	lang?: displayText,
  languageChange: any
}

export default function Home(props: homeProps) {
  return (
    <>
      <Nav onChange={props.languageChange} lang={props.lang} />
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