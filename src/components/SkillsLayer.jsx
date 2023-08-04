import '../css/skills/skills-caja.css'
import '../css/skills/skills-caja-imagen.css'
import '../css/skills/skills-caja-texto.css'
import '../css/skills/skills-container-cajas.css'
import '../css/skills/skills-container-layer.css'
import '../css/skills/skills-layer-title.css'
function SkillsLayer({title, data }) {
    return (
        <div class='skills__container--layer'>
            <p class='skills__layer-title'>{title}</p>
            <div class='skills__container--cajas'>
                { data.map(item => {
                    return (<div class="skills__caja">
                        <img class='skills__caja__imagen' alt={`Imagen de ${item.name}`} src={item.image} />
                        <p class="skills__caja__texto">{item.name}</p>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default SkillsLayer;