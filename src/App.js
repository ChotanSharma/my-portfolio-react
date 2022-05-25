import Intro from "./components/Intro/Intro";
import Testimonials from "./components/Testimonials/Testimonials";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import "./app.css";


function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <div className="sections">
        <div className="section-intro">
          <Intro></Intro>
        </div>
        <div className="section-port">
          <Portfolio></Portfolio>
        </div>
        <div className="section-con">
          <Contact></Contact>
        </div>
        <div className="section-test">
          <Testimonials></Testimonials>
        </div>
      </div>
    </div>
  );
}

export default App;
