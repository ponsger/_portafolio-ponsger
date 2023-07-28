import '../css/skills/skills.css'
import '../css/skills/skills-caja.css'
import '../css/skills/skills-caja-imagen.css'
import '../css/skills/skills-caja-texto.css'
import '../css/skills/skills-titulo.css'
import '../css/skills/skills-container-cajas.css'

function Skills() {

    return (
        <section id="skills" class="skills">
            <h1 class="skills__titulo">Skills</h1>
            <div class="skills__container--cajas">
                <div class="skills__caja">
                    <div class="skills__caja__imagen--html"></div>
                    <p class="skills__caja__texto">HTML</p>
                </div>
                <div class="skills__caja">
                    <div class="skills__caja__imagen--javascript"></div>
                    <p class="skills__caja__texto">Javascript</p>
                </div>
                <div class="skills__caja">
                    <div class="skills__caja__imagen--css"></div>
                    <p class="skills__caja__texto">Css</p>
                </div>
                <div class="skills__caja">
                    <div class="skills__caja__imagen--database"></div>
                    <p class="skills__caja__texto">Bases de datos estructuradas</p>
                </div>
                <div class="skills__caja">
                    <div class="skills__caja__imagen--net"></div>
                    <p class="skills__caja__texto">.Net</p>
                </div>
                <div class="skills__caja">
                    <div class="skills__caja__imagen--python"></div>
                    <p class="skills__caja__texto">Python</p>
                </div>
            </div>
        </section>
    )
}

export default Skills;