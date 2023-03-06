import { ResumeSchema } from '../types/resume'
import { Title } from './partials/title'

type ReferencesProps = {
    resumeReferences?: ResumeSchema['references']
}

export function References({ resumeReferences }: ReferencesProps) {
    if (resumeReferences === undefined || resumeReferences.length == 0) {
        return null
    }

    const referenceItems = resumeReferences.map((ref) => {
        let referenceTag = null
        if (ref.reference !== undefined) {
            referenceTag = (
                <>
                    <i class="fa fa-quote-left pull-left" aria-hidden="true" />
                    <blockquote>{ref.reference}</blockquote>
                </>
            )
        }

        let nameTag = null
        if (ref.name !== undefined) {
            nameTag = <h5 class="pull-right"> — {ref.name}</h5>
        }

        return (
            <section class="item clearfix">
                {referenceTag}
                {nameTag}
            </section>
        )
    })

    return (
        <div class="container references-container">
            <Title value="References" />
            {referenceItems}
        </div>
    )
}
