import { Fragment } from "react";
import Header from "./components/Header";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';


import './css/reset.css'
import './css/base.css'
import './css/container.css'

function App (){

    return(
        <Fragment>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </Fragment>
    );
}

export default App;