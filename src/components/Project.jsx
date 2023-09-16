import '../css/proyectos-desarrollados/proyecto.css'
import '../css/proyectos-desarrollados/proyecto-titulo.css'
import '../css/proyectos-desarrollados/proyecto-imagen.css'
import '../css/proyectos-desarrollados/proyecto-descripcion.css'
import '../css/proyectos-desarrollados/proyecto-boton.css'
import '../css/proyectos-desarrollados/proyecto-boton-container.css'


function Project() {

    return (
        <div class="proyecto">
            <div>
                <img src="/img/projects/ahorcado.png" class="proyecto__imagen" />
            </div>
            <div>
                <p class="proyecto__titulo">Cifrador y descifrador</p>
                <p class="proyecto__descripcion">Aplicación desarrollada con Html, Css y Javascript</p>
                <div class="proyecto__boton-container">
                    <a class="proyecto__boton-repositorio btn" href="https://github.com/ponsger/CfriadoDeCodigoJs">Ver
                        repositorio</a>
                    <a class="proyecto__boton-visitar btn" href="https://ponsger.github.io/CfriadoDeCodigoJs/">Ver
                        aplicación</a>
                </div>
            </div>
        </div>
    );
}

export default Project;