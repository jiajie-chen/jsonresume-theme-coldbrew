import { ResumeSchema } from '/@/types/resume'
import { Title } from '/@/components/partials/title'

type SkillsProps = {
    resumeSkills?: ResumeSchema['skills']
}

export function Skills({ resumeSkills }: SkillsProps) {
    if (resumeSkills === undefined || resumeSkills.length == 0) {
        return null
    }

    const skillsItems = resumeSkills.map((skill, i) => {
        let nameTag = null
        if (skill.name !== undefined) {
            nameTag = <Title value={skill.name} />
        }

        let levelTag = null
        if (skill.level !== undefined) {
            levelTag = <h4 class="bold">{skill.level}</h4>
        }

        let keywordItems = null
        if (skill.keywords !== undefined && skill.keywords.length > 0) {
            keywordItems = (
                <ul class="minimal">
                    {skill.keywords.map((keyword, i) => (
                        <li key={i}>
                            <h6>{keyword}</h6>
                        </li>
                    ))}
                </ul>
            )
        }

        return (
            <section class="container" key={i}>
                {nameTag}
                {levelTag}
                {keywordItems}
            </section>
        )
    })

    return <div class="skills-container">{skillsItems}</div>
}
