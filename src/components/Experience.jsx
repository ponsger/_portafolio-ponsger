
import '../css/experiencia-laboral/experiencia-laboral-titulo.css'
import '../css/experiencia-laboral/trabajo-fecha.css'
import '../css/experiencia-laboral/trabajo-imagen.css'
import '../css/experiencia-laboral/trabajo-nombre-institucion.css'
import '../css/experiencia-laboral/trabajos.css'
import '../css/experiencia-laboral/trabajo.css'


function Experience() {
    return (
        <section id="experiencia" class="experiencia-laboral container">
            <h1 class="expericencia-laboral__titulo">Experiencia laboral</h1>
            <div class="trabajos">
                <div class="trabajo">
                    <div class="trabajo__imagen developware"></div>
                    <p class="trabajo__fecha">2022 - Actualmente</p>
                    <p class="trabajo__nombre-institucion">Developware</p>
                </div>
                <div class="trabajo">
                    <div class="trabajo__imagen valuita"></div>
                    <p class="trabajo__fecha">2020- 2022</p>
                    <p class="trabajo__nombre-institucion">Valuita</p>
                </div>
                <div class="trabajo">
                    <div class="trabajo__imagen banxico"></div>
                    <p class="trabajo__fecha">2020 - 2022</p>
                    <p class="trabajo__nombre-institucion">Banco de México</p>
                </div>
            </div>

        </section>
    );
}

export default Experience;