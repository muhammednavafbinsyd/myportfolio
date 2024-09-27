import "./App.css";
import Navbar from "./components/navabar.jsx";
import Home from "../src/components/home.jsx";
import Projects from "./components/projects.jsx";
import Skills from "./components/skills.jsx";
import Aboutme from "./components/aboutme.jsx";
import Contacts from "./components/contacts.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="works">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about-me">
        <Aboutme />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <Footer/>
    </div>
  );
}

export default App;
