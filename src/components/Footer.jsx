import '../css/pie-de-pagina/pie-de-pagina.css'
import '../css/pie-de-pagina/creator.css'
import '../css/pie-de-pagina/important-message.css'

function Footer() {
    return (
        <div class="pie-de-pagina">
            <h1 class="pie-de-pagina__creator">Creado por Germán Pons</h1>
            <p class="pie-de-pagina__important-mesagge">Esta página se encuentra en constante cambio, debido a que se
                agregan y modifican proyectos</p>
        </div>
    );
}

export default Footer;