import '../css/skills/skills.css'
import '../css/skills/skills-titulo.css'
import '../css/skills/skills-container.css'

import SkillsLayer from './SkillsLayer'
import {skills} from '../data/skills'

function Skills() {

    return (
        <section id="Skills" class="skills">
            <h1 class="skills__titulo">Skills</h1>
            <div class='skills__container'>
                <SkillsLayer title="Frontend" data={skills.frontend} />
                <SkillsLayer title="Backend" data={skills.backend} />
                <SkillsLayer title="Database" data={skills.database} />
            </div>
        </section>
    )
}

export default Skills;