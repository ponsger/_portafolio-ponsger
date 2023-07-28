import { Fragment } from "react";

import '../css/encabezado/encabezado.css'
import '../css/encabezado/encabezado-presentacion.css'
import '../css/encabezado/encabezado-presentacion-nombre.css'
import '../css/encabezado/encabezado-presentacion-contacto.css'
import '../css/encabezado/encabezado-imagen.css'
import '../css/encabezado/encabezado-titulo.css'
import '../css/encabezado/encabezado-descripcion.css'
import '../css/encabezado/encabezado-lista.css'
import '../css/encabezado/encabezado-lista-item.css'
import '../css/encabezado/encabezado-yo.css'
import '../css/encabezado/encabezado-navegacion.css'
import '../css/encabezado/navegacion-lista-item.css'
import '../css/encabezado/navegacion-lista.css'


function Header() {
    return (
        <Fragment>
            <header class="encabezado container">
                <div class="encabezado__presentacion">
                    <p class="encabezado__presentacion--nombre">Germán Pons</p>
                    <nav class="encabezado__navegacion">
                        <ul class="navegacion__lista">
                            <li><a href="#sobre-mi" class="navegacion__lista--item">Sobre mi</a></li>
                            <li><a href="#skills" class="navegacion__lista--item">Skills</a></li>
                            <li><a href="#hobbies" class="navegacion__lista--item">Hobbies</a></li>
                            <li><a href="#formacion" class="navegacion__lista--item">Formación academica</a></li>
                            <li><a href="#experiencia" class="navegacion__lista--item">Experiencia laboral</a></li>
                            <li><a href="#proyectos" class="navegacion__lista--item">Proyectos desarrollados</a></li>
                        </ul>
                    </nav>
                    <address><a class="encabezado__presentacion--contacto"
                        href="mailto:german.aopg@gmail.com">german.anorve@hotmail.com</a></address>
                </div>
                <div class="encabezado__yo">
                    <div class="encabezado__imagen"></div>
                    <div class="encabezado__texto">
                        <h1 class="encabezado__titulo">Hola mi nombre es Germán Pons y soy desarrollador Full Stack</h1>
                        <p class="encabezado__descripcion">Soy desarrollador Full Stack, utilizando tecnologias como .Net y como
                            backend, para bases de datos estructuradas como SQL Server, SQLite y MySQL.
                            <br />
                            Para la parte del frontend, he trabajado con JavaScript Vanilla, Razor Pages tambien he trabajado pero menos en React, Angular y JQuery. Cada día me voy preparando con mas tecnologías y tambien produndizando el conocimiento que tengo.
                            <br />
                            Hablo Español e Inglés, el link de descarga de mi Curriculo esta en inglés en caso que haya interes.
                        </p>
                    </div>

                </div>

                <ul class="encabezado__lista">
                    <li><a class="encabezado__lista--item" href="https://github.com/ponsger"
                        target="_blank">Github<i>&#8663;</i></a></li>
                    <li><a class="encabezado__lista--item" href="https://www.linkedin.com/in/germ%C3%A1n-a%C3%B1orve-459623232/"
                        target="_blank">LinkedIn<i>&#8663;</i></a></li>
                    <li><a class="encabezado__lista--item" href="https://www.instagram.com/ponsger/">Instagram<i>&#8663;</i></a>
                    </li>
                    <li><a class="encabezado__lista--item" href="Cv German Pons.pdf"
                        download="Cv German Pons.pdf">Curriculo<i>&#8663;</i></a></li>
                </ul>
            </header>
        </Fragment>
    )

}

export default Header;