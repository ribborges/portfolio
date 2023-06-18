import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { displayText, en, pt } from "./data/lang";

import './style/_app.scss';
import Home from "./views/Home";
import FisioHome from "./views/FisioHome";

export default function App() {
  const [lang, setLang] = useState<displayText>(pt);

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home languageChange={handleLanguageChange} lang={lang} />} />
          <Route path="/fisio-home" element={<FisioHome lang={lang} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}