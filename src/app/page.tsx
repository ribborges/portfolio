'use client';

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { displayText, en, pt } from "../data/lang";

import Home from "../pages/Home";
import FisioHome from "../pages/FisioHome";

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