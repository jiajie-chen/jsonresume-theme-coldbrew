import { ResumeSchema } from '../types/resume'
import { SectionHeader } from './partials/section-header'
import { Title } from './partials/title'

type WorkProps = {
    resumeWork?: ResumeSchema['work']
}

export function Work({ resumeWork }: WorkProps) {
    if (resumeWork === undefined || resumeWork.length == 0) {
        return null
    }

    const workItems = resumeWork.map((work) => {
        let positionTag = null
        if (work.position !== undefined) {
            positionTag = <h4>{work.position}</h4>
        }

        let summaryTag = null
        if (work.summary !== undefined) {
            summaryTag = <p class="summary">{work.summary}</p>
        }

        let highlightItems = null
        if (work.highlights !== undefined && work.highlights.length > 0) {
            highlightItems = (
                <ul>
                    {work.highlights.map((highlight) => (
                        <li>{highlight}</li>
                    ))}
                </ul>
            )
        }

        return (
            <section class="item">
                <SectionHeader
                    name={work.name}
                    startDate={work.startDate}
                    endDate={work.endDate}
                    website={work.url}
                />
                {positionTag}
                {summaryTag}
                {highlightItems}
            </section>
        )
    })

    return (
        <div class="container work-container">
            <Title value="Experience" />
            {workItems}
        </div>
    )
}
