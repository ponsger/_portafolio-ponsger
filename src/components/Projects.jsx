import '../css/proyectos-desarrollados/proyectos.css'
import '../css/proyectos-desarrollados/proyectos-desarrollados.css'
import '../css/proyectos-desarrollados/proyectos-desarrollados-titulo.css'

import Project from './Project';

function Projects() {
    return (
        <section id="Proyectosdesarrollados" class="proyectos-desarrollados">
            <h1 class="proyectos-desarrollados__titulo">Proyectos desarrollados</h1>
            <div class="proyectos">
                <Project />
            </div>
        </section>
    );
}

export default Projects
