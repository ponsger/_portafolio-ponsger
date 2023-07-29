import Navbar from './Navbar';
import {items} from '../../data/navbarItems'

import '../../css/encabezado/encabezado-presentacion.css'
import '../../css/encabezado/encabezado-presentacion-nombre.css'
import '../../css/encabezado/encabezado-presentacion-contacto.css'


function Introduce() {
    return (
        <div class="encabezado__presentacion">
            <p class="encabezado__presentacion--nombre">Germán Pons</p>
            <Navbar items={items}/>
            <address><a class="encabezado__presentacion--contacto"
                href="mailto:german.aopg@gmail.com">german.anorve@hotmail.com</a></address>
        </div>
    );
}

export default Introduce;