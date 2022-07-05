import Intro from "./components/Intro/Intro";
import Testimonials from "./components/Testimonials/Testimonials";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Menus from "./components/Menus/Menus";
import "./app.css";
import { Menu } from "@mui/material";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [menusOpen, setMenusOpen] = useState(false)
  return (
    <div className="app">
      <Nav menusOpen={menusOpen} setMenusOpen={setMenusOpen}></Nav>
      <Menus menusOpen={menusOpen} setMenusOpen={setMenusOpen}></Menus>
      <div className="sections">
          <Intro></Intro>
        <div className="section-test">
          <Testimonials></Testimonials>
        </div>
        <div className="section-port">
          <Portfolio></Portfolio>
        </div>
        <div className="section-con">
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
