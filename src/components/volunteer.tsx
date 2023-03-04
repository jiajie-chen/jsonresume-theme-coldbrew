import { ResumeSchema } from "../types/resume";
import { SectionHeader } from "./partials/section-header";
import { Title } from "./partials/title";

type VolunteerProps = {
  resumeVolunteer?: ResumeSchema['volunteer']
}

export function Volunteer({ resumeVolunteer }: VolunteerProps) {
  if (resumeVolunteer === undefined || resumeVolunteer.length == 0) {
    return null
  }

  const volunteerItems = resumeVolunteer.map(volunteer => {
    let positionTag = null
    if (volunteer.position !== undefined) {
      positionTag = <h5>{volunteer.position}</h5>
    }

    let summaryTag = null
    if (volunteer.summary !== undefined) {
      summaryTag = <p class="summary">{summaryTag}</p>
    }

    let highlightItems = null
    if (volunteer.highlights !== undefined && volunteer.highlights.length > 0) {
      highlightItems = (
        <ul>
          {volunteer.highlights.map(highlight => <li>{highlight}</li>)}
        </ul>
      )
    }
    return (
      <section class="item">
        <SectionHeader name={volunteer.organization} startDate={volunteer.startDate} endDate={volunteer.endDate} website={volunteer.url}/>
        {positionTag}
        {summaryTag}
        {highlightItems}
      </section>
    )
  })

  return (
    <div class="container volunteer-container">
      <Title value="Volunteer"/>
      {volunteerItems}
    </div>
  )
}
