import { ResumeSchema } from '/@/types/resume'
import { SectionHeader } from '/@/components/partials/section-header'
import { Title } from '/@/components/partials/title'

type VolunteerProps = {
    resumeVolunteer?: ResumeSchema['volunteer']
}

export function Volunteer({ resumeVolunteer }: VolunteerProps) {
    if (resumeVolunteer === undefined || resumeVolunteer.length == 0) {
        return null
    }

    const volunteerItems = resumeVolunteer.map((volunteer, i) => {
        let positionTag = null
        if (volunteer.position !== undefined) {
            positionTag = <h5>{volunteer.position}</h5>
        }

        let summaryTag = null
        if (volunteer.summary !== undefined) {
            summaryTag = <p class="summary">{volunteer.summary}</p>
        }

        let highlightItems = null
        if (
            volunteer.highlights !== undefined &&
            volunteer.highlights.length > 0
        ) {
            highlightItems = (
                <ul>
                    {volunteer.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                    ))}
                </ul>
            )
        }
        return (
            <section class="item" key={i}>
                <SectionHeader
                    name={volunteer.organization}
                    startDate={volunteer.startDate}
                    endDate={volunteer.endDate}
                    website={volunteer.url}
                />
                {positionTag}
                {summaryTag}
                {highlightItems}
            </section>
        )
    })

    return (
        <div class="container volunteer-container">
            <Title value="Volunteer" />
            {volunteerItems}
        </div>
    )
}
