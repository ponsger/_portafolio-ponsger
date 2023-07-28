import '../css/formacion-academica/formacion-academica.css'
import '../css/formacion-academica/formacion-academica-titulo.css'
import '../css/formacion-academica/formacion-academica-imagen.css'
import '../css/formacion-academica/formacion-academica-fecha.css'
import '../css/formacion-academica/formacion-academica-nombre-institucion.css'
import '../css/formacion-academica/formacion-academica-instituciones.css'
import '../css/formacion-academica/formacion-academica-institucion.css'


function Formation() {
    return (
        <section id="formacion" class="formacion-academica">
            <h1 class="formacion-academica__tiulo">Formación academica</h1>
            <div class="formacion-academica__instituciones">
                <div class="formacion-academica__institucion">
                    <div class="formacion-academica__imagen ntust"></div>
                    <p class="formacion-academica__fecha">2018-2019</p>
                    <p class="formacion-academica__nombre-institucion">National Taiwan University of Science and Technology
                    </p>
                </div>
                <div class="formacion-academica__institucion">
                    <div class="formacion-academica__imagen escom"></div>
                    <p class="formacion-academica__fecha">2015- 2019</p>
                    <p class="formacion-academica__nombre-institucion">Escuela Superior de Cómputo,<br /> Instituto
                        Politécnico Nacional</p>
                </div>
            </div>
        </section>
    );
}

export default Formation;