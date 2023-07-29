import '../../css/encabezado/encabezado-lista.css'
import '../../css/encabezado/encabezado-lista-item.css'

function List({socialNetwork}) {
    return (
        <ul class="encabezado__lista">
            {
                socialNetwork.map( item =>
                    <li>
                        <a class="encabezado__lista--item" href={item.link}
                            target="_blank">{item.name}<i>&#8663;</i></a>
                    </li> )
            }
            {/* <li><a class="encabezado__lista--item" href="Cv German Pons.pdf"
                download="Cv German Pons.pdf">Curriculo<i>&#8663;</i></a></li> */}
        </ul>
    );
}

export default List;