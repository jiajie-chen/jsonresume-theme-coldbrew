import type { Country } from '@shopify/address'
import { About } from '/@/components/about'
import { Awards } from '/@/components/awards'
import { Education } from '/@/components/education'
import { Interests } from '/@/components/interests'
import { Languages } from '/@/components/languages'
import { Publications } from '/@/components/publications'
import { References } from '/@/components/references'
import { ResumeHeader } from '/@/components/resume-header'
import { Skills } from '/@/components/skills'
import { Summary } from '/@/components/summary'
import { Volunteer } from '/@/components/volunteer'
import { Work } from '/@/components/work'
import type { ResumeSchema } from '/@/types/resume'

type ResumeProps = {
    resume: ResumeSchema
    countryFormatters: Country[]
}

export function Resume({ resume, countryFormatters }: ResumeProps) {
    return (
        <main id="resume" class="page">
            <ResumeHeader resumeBasics={resume.basics} />
            <div class="resume-content">
                <aside class="left-column">
                    <About
                        resumeBasics={resume.basics}
                        countryFormatters={countryFormatters}
                    />
                    <Skills resumeSkills={resume.skills} />
                    <Languages resumeLanguages={resume.languages} />
                    <Interests resumeInterests={resume.interests} />
                </aside>
                <div class="right-column">
                    <Summary resumeSummary={resume.basics?.summary} />
                    <Work resumeWork={resume.work} />
                    <Volunteer resumeVolunteer={resume.volunteer} />
                    <Education resumeEducation={resume.education} />
                    <Awards resumeAwards={resume.awards} />
                    <Publications resumePublications={resume.publications} />
                    <References resumeReferences={resume.references} />
                </div>
            </div>
        </main>
    )
}
