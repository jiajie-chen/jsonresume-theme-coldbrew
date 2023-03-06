import { ResumeSchema } from '../types/resume'
import { Title } from './partials/title'

type InterestsProps = {
    resumeInterests?: ResumeSchema['interests']
}

export function Interests({ resumeInterests }: InterestsProps) {
    if (resumeInterests === undefined || resumeInterests.length == 0) {
        return null
    }

    const interestItems = resumeInterests.map((item, i) => {
        let nameTag = null
        if (item.name !== undefined) {
            nameTag = <h4 class="bold">{item.name}</h4>
        }

        let keywordItems = null
        if (item.keywords !== undefined && item.keywords.length > 0) {
            keywordItems = (
                <ul class="minimal">
                    {item.keywords.map((keyword, i) => (
                        <li key={i}>{keyword}</li>
                    ))}
                </ul>
            )
        }

        return (
            <section class="item" key={i}>
                {nameTag}
                {keywordItems}
            </section>
        )
    })

    return (
        <div class="container interests-container">
            <Title value="Interests" />
            {interestItems}
        </div>
    )
}
