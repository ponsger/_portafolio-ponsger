import Introduce from './Header/Introduce'
import Me from './Header/Me'
import List from './Header/List'

import {contact} from '../data/socialNetwork'

import '../css/encabezado/encabezado.css'


function Header() {
    return (
        <header class="encabezado container">
            <Introduce />
            <Me />
            <List socialNetwork={contact}/>
        </header>
    )

}

export default Header;