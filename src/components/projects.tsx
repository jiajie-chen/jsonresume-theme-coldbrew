import { ResumeSchema } from '/@/types/resume'
import { SectionHeader } from '/@/components/partials/section-header'
import { Title } from '/@/components/partials/title'

type ProjectsProps = {
    resumeProjects?: ResumeSchema['projects']
}

export function Projects({ resumeProjects }: ProjectsProps) {
    if (resumeProjects === undefined || resumeProjects.length == 0) {
        return null
    }

    const projectItems = resumeProjects.map((proj, i) => {
        let entityTag = null
        if (proj.entity !== undefined) {
            // TODO: for now, use same style as 'awarder' in Publications
            entityTag = <h5 class="awarder">{proj.entity}</h5>
        }

        let descriptionTag = null
        if (proj.description !== undefined) {
            descriptionTag = <p class="summary">{proj.description}</p>
        }

        let highlightItems = null
        if (proj.highlights !== undefined && proj.highlights.length > 0) {
            highlightItems = (
                <ul>
                    {proj.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                    ))}
                </ul>
            )
        }

        return (
            <section class="item" key={i}>
                <SectionHeader
                    name={proj.name}
                    startDate={proj.startDate}
                    endDate={proj.endDate}
                    website={proj.url}
                />
                {entityTag}
                {descriptionTag}
                {highlightItems}
            </section>
        )
    })

    return (
        // TODO: for now, use same style as 'work-container' in Work
        <div class="container work-container">
            <Title value="Projects" />
            {projectItems}
        </div>
    )
}
