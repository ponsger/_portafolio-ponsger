
import '../../css/encabezado/encabezado-imagen.css'
import '../../css/encabezado/encabezado-titulo.css'
import '../../css/encabezado/encabezado-descripcion.css'
import '../../css/encabezado/encabezado-yo.css'

function Me() {
    return (
        <div class="encabezado__yo">
            {/* <div class="encabezado__imagen"></div> */}
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
    );
}

export default Me;