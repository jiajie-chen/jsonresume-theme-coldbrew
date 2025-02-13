import { ResumeSchema } from '/@/types/resume'
import { SectionHeader } from '/@/components/partials/section-header'
import { Title } from '/@/components/partials/title'

type AwardsProps = {
    resumeAwards: ResumeSchema['awards']
}

export function Awards({ resumeAwards }: AwardsProps) {
    if (resumeAwards === undefined || resumeAwards.length == 0) {
        return null
    }

    const awardItems = resumeAwards.map((award, i) => {
        const awardHeader = (
            <SectionHeader name={award.title} releaseDate={award.date} />
        )

        let awarderTag = null
        if (award.awarder !== undefined) {
            awarderTag = <h5 class="awarder">{award.awarder}</h5>
        }

        let summaryTag = null
        if (award.summary !== undefined) {
            summaryTag = <p class="summary">{award.summary}</p>
        }

        return (
            <section class="item" key={i}>
                {awardHeader}
                {awarderTag}
                {summaryTag}
            </section>
        )
    })

    return (
        <div class="container awards-container">
            <Title value="Awards" />
            {awardItems}
        </div>
    )
}
