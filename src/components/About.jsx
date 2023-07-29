import '../css/sobre-mi/sobre-mi-titulo.css'
import '../css/sobre-mi/sobre-mi-descripcion.css'
import '../css/sobre-mi/sobre-mi-imagen.css'

function About() {

    return (
        <section id="Sobremi" class="sobre-mi container">
            <h1 class="sobre-mi__titulo">Sobre mi</h1>
            <p class="sobre-mi__descripcion">Ingeniero en sistemas computacionales, en busca crecimiento personal y
                profesional
                como full stack developer, he desarrollado en mayor parte aplicaciones de escritorio
                aunque tambien tengo conocimiento sobre el desarrollo web, utilizando Javascript
                y React como frontend, para backend C# y Java y para bases de datos Mysql, Sqlite,
                Sql Server y JSON cuento con certificación a nivel internacional en fundamentos
                Azure. </p>
            <div class="sobre-mi__imagen"></div>
        </section>
    )
}

export default About;