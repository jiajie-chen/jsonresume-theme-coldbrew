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
        let projTag = null
        if (proj.publisher !== undefined) {
            projTag = <h5 class="awarder">{proj.publisher}</h5>
        }

        let summaryTag = null
        if (proj.summary !== undefined) {
            summaryTag = <p class="summary">{proj.summary}</p>
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
                {projTag}
                {summaryTag}
                {highlightItems}
            </section>
        )
    })

    return (
        <div class="container work-container">
            <Title value="Projects" />
            {projectItems}
        </div>
    )
}
