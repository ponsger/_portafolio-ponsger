import '../css/encabezado/encabezado-navegacion.css'
import '../css/encabezado/navegacion-lista-item.css'
import '../css/encabezado/navegacion-lista.css'

function Navbar({items}) {
    return (
        <nav class="encabezado__navegacion">
            <ul class="navegacion__lista">
                {items.map( i => <li>
                    <a href={`#${i.replace(' ','')}`} class="navegacion__lista--item">{i}</a>
                </li> )}
            </ul>
        </nav>
    );
}

export default Navbar;