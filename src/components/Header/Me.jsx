import '../../css/encabezado/encabezado-texto.css'
import '../../css/encabezado/encabezado-imagen.css'
import '../../css/encabezado/encabezado-titulo.css'
import '../../css/encabezado/encabezado-descripcion.css'
import '../../css/encabezado/encabezado-yo.css'

function Me() {
    return (
        <div className="encabezado__yo">
            {/* <div class="encabezado__imagen"></div> */}
            <div className="encabezado__texto">
                <h1 className="encabezado__titulo">Hola, soy</h1>
                <p className="encabezado__titulo">Desarrollador Full Stack</p>
            </div>

        </div>
    );
}

export default Me;