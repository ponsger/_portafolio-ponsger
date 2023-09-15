import { Fragment } from "react";
import Me from './components/Header/Me';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './css/base.css';
import './css/encabezado/encabezado.css'
import './css/navbar-about.css';
import './css/skills-projects.css';


import Navbar from "./components/Navbar";

import { items } from './data/navbarItems'

function App() {

    return (
        <Fragment>
            <header className="encabezado">
                <Me />
            </header>
            <section className="navbar-about">
                <Navbar items={items} />
                <About />
            </section>
            <main className="skills-projects">
                <Skills />
                <Projects />
            </main>
            <footer>
                <Footer />
            </footer>

        </Fragment>
    );
}

export default App;