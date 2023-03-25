import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import About from "./components/section/About";
//import Contact from "./components/section/Contact";
import Portfolio from "./components/section/Portfolio";
import Spacer from "./components/separator/Spacer";
import { useState } from "react";
import { displayText, en, pt } from "./data/lang";

import './style/_app.scss';

export default function App() {
  const [lang, setLang] = useState<displayText>(en);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;

    switch (lang) {
      case "en":
        setLang(en);
        break;
      case "pt":
        setLang(pt);
        break;
    }
  };

  return (
    <div className="App">
      <Nav onChange={handleLanguageChange} lang={lang} />
      <Header lang={lang} />

      <main className="content">
        <About lang={lang} />
        <Spacer />
        <Portfolio lang={lang} />
      </main>

      <Footer />
    </div>
  );
}