import type { ResumeEducation } from '/@/types/resume-education'
import { SectionHeader } from '/@/components/partials/section-header'
import { Title } from '/@/components/partials/title'

type EducationProps = {
    resumeEducation?: ResumeEducation
}

export function Education({ resumeEducation }: EducationProps) {
    if (resumeEducation === undefined || resumeEducation.length == 0) {
        return null
    }

    const educationItems = resumeEducation.map((education, i) => {
        let locationTag = null
        if (education.location !== undefined) {
            locationTag = <h5 class="location">{education.location}</h5>
        }

        const studyAreaText = []
        if (education.studyType !== undefined) {
            studyAreaText.push(education.studyType)
        }
        if (education.area !== undefined) {
            studyAreaText.push(education.area)
        }
        let studyAreaTag = null
        if (studyAreaText.length > 0) {
            studyAreaTag = <h4>{studyAreaText.join(' ')}</h4>
        }

        let scoreTag = null
        if (education.score !== undefined) {
            scoreTag = <h5>{education.score}</h5>
        }

        let specializationTag = null
        if (education.specialization !== undefined) {
            specializationTag = (
                <h5 class="specialization">{education.specialization}</h5>
            )
        }

        let courseItems = null
        if (education.courses !== undefined && education.courses.length > 0) {
            courseItems = (
                <ul class="two-column">
                    {education.courses.map((course, i) => (
                        <li key={i}>{course}</li>
                    ))}
                </ul>
            )
        }

        return (
            <section class="item" key={i}>
                <SectionHeader
                    name={education.institution}
                    startDate={education.startDate}
                    endDate={education.endDate}
                    website={education.url}
                />
                {locationTag}
                {studyAreaTag}
                {scoreTag}
                {specializationTag}
                {courseItems}
            </section>
        )
    })

    return (
        <div class="container education-container">
            <Title value="Education" />
            {educationItems}
        </div>
    )
}
