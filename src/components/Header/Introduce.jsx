import Navbar from '../Navbar';
import {items} from '../../data/navbarItems'

import '../../css/encabezado/encabezado-presentacion.css'
import '../../css/encabezado/encabezado-presentacion-nombre.css'
import '../../css/encabezado/encabezado-presentacion-contacto.css'


function Introduce() {
    return (
        <div class="encabezado__presentacion">
            <Navbar items={items}/>
        </div>
    );
}

export default Introduce;