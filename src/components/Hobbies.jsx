
import '../css/hobbies/hobbies.css'
import '../css/hobbies/hobbies-titulo.css'
import '../css/hobbies/hobbies-caja-imagen.css'
import '../css/hobbies/hobbies-caja-texto.css'
import '../css/hobbies/hobbies-container-cajas.css'
import '../css/hobbies/hobbies-caja.css'

function Hobbies() {

    return (
        <section id="hobbies" class="hobbies container">
            <h1 class="hobbies__titulo">Hobbies</h1>
            <div class="hobbies__container--cajas">
                <div class="hobbies__caja">
                    <div class="hobbies__caja__imagen videojuegos"></div>
                    <p class="hobbies__caja__texto">Videojuegos</p>
                </div>
                <div class="hobbies__caja">
                    <div class="hobbies__caja__imagen music"></div>
                    <p class="hobbies__caja__texto">Musica</p>
                </div>
                <div class="hobbies__caja">
                    <div class="hobbies__caja__imagen programming"></div>
                    <p class="hobbies__caja__texto">Programar nuevos frameworks o lenguajes de programación</p>
                </div>
                <div class="hobbies__caja">
                    <div class="hobbies__caja__imagen running"></div>
                    <p class="hobbies__caja__texto">Correr</p>
                </div>
                <div class="hobbies__caja">
                    <div class="hobbies__caja__imagen sports"></div>
                    <p class="hobbies__caja__texto">Deportes</p>
                </div>
                <div class="hobbies__caja">
                    <div class="hobbies__caja__imagen walk"></div>
                    <p class="hobbies__caja__texto">Caminar</p>
                </div>
            </div>
        </section>
    )
}

export default Hobbies;