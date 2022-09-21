import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Scroll from "./components/Scroll";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
   return (
      <div>
         <Navbar />
         <Header />
         <Scroll />
         <Skills />
         <Projects />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;
