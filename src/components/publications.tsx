import { ResumeSchema } from '/@/types/resume'
import { SectionHeader } from '/@/components/partials/section-header'
import { Title } from '/@/components/partials/title'

type PublicationsProps = {
    resumePublications?: ResumeSchema['publications']
}

export function Publications({ resumePublications }: PublicationsProps) {
    if (resumePublications === undefined || resumePublications.length == 0) {
        return null
    }

    const publicationItems = resumePublications.map((pub, i) => {
        let publisherTag = null
        if (pub.publisher !== undefined) {
            publisherTag = <h5 class="awarder">{pub.publisher}</h5>
        }

        let summaryTag = null
        if (pub.summary !== undefined) {
            summaryTag = <p class="summary">{pub.summary}</p>
        }
        return (
            <section class="item" key={i}>
                <SectionHeader
                    name={pub.name}
                    releaseDate={pub.releaseDate}
                    website={pub.url}
                />
                {publisherTag}
                {summaryTag}
            </section>
        )
    })

    return (
        <div class="container publications-container">
            <Title value="Publications" />
            {publicationItems}
        </div>
    )
}
