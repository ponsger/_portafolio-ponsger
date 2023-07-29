import '../css/proyectos-desarrollados/proyectos-desarrollados-titulo.css'
import '../css/proyectos-desarrollados/proyecto-titulo.css'
import '../css/proyectos-desarrollados/proyecto-imagen.css'
import '../css/proyectos-desarrollados/proyecto-descripcion.css'
import '../css/proyectos-desarrollados/proyecto-boton.css'
import '../css/proyectos-desarrollados/proyecto-boton-container.css'
import '../css/proyectos-desarrollados/proyectos.css'
import '../css/proyectos-desarrollados/proyectos-desarrollados.css'
import '../css/proyectos-desarrollados/proyecto.css'

function Projects() {
    return (
        <section id="Proyectosdesarrollados" class="proyectos-desarrollados">
            <h1 class="proyectos-desarrollados__titulo">Proyectos desarrollados</h1>
            <div class="proyectos">
                <div class="proyecto">
                    <p class="proyecto__titulo">Cifrador y descifrador</p>
                    <div class="proyecto__imagen cifrador"></div>
                    <p class="proyecto__descripcion">Aplicación desarrollada con Html, Css y Javascript</p>
                    <div class="proyecto__boton-container">
                        <a class="proyecto__boton-repositorio btn" href="https://github.com/ponsger/CfriadoDeCodigoJs">Ver
                            repositorio</a>
                        <a class="proyecto__boton-visitar btn" href="https://ponsger.github.io/CfriadoDeCodigoJs/">Ver
                            aplicación</a>
                    </div>
                </div>
                <div class="proyecto">
                    <p class="proyecto__titulo">Juego del ahorcado</p>
                    <div class="proyecto__imagen ahorcado"></div>
                    <p class="proyecto__descripcion">Juego desarrollado con Html, Css y Javascript, se recomienda utilizar
                        Pc para un mejor funcionamiento</p>
                    <div class="proyecto__boton-container">
                        <a class="proyecto__boton-repositorio btn" href="https://github.com/ponsger/AhorcadoJS">Ver
                            repositorio</a>
                        <a class="proyecto__boton-visitar btn" href="https://ponsger.github.io/AhorcadoJS/">Ver
                            aplicación</a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects
