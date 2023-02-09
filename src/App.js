import React,{useState} from "react";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";

import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import "./App.scss"
import Menu from "./components/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="myApp">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Skills/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
