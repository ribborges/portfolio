import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Nav from "./components/navbar/Nav"
import About from "./components/section/About"
import Contact from "./components/section/Contact"
import Portfolio from "./components/section/Portfolio"
import Spacer from "./components/separator/Spacer"

import './styles/_app.scss'

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <main className="content">
        <About />
        <Spacer />
        <Portfolio />
        <Spacer />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}