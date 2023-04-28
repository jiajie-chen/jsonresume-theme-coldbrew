import type { Country } from '@shopify/address'
import { About } from '/@/components/about'
import { Awards } from '/@/components/awards'
import { Education } from '/@/components/education'
import { Interests } from '/@/components/interests'
import { Languages } from '/@/components/languages'
import { Projects } from '/@/components/projects'
import { Publications } from '/@/components/publications'
import { References } from '/@/components/references'
import { ResumeHeader } from '/@/components/resume-header'
import { Skills } from '/@/components/skills'
import { Summary } from '/@/components/summary'
import { Volunteer } from '/@/components/volunteer'
import { Work } from '/@/components/work'
import type { ResumeSchema } from '/@/types/resume'
import type { ColdbrewResumeMeta } from '/@/types/resume-meta'

type ResumeProps = {
    resume: ResumeSchema
    countryFormatters: Country[]
}

export function Resume({ resume, countryFormatters }: ResumeProps) {
    // TODO: validatation of resume
    const coldbrewMeta = resume.meta as ColdbrewResumeMeta | undefined

    // allow customization of section ordering
    // NOTE: this allows repeated sections, and omission of sections
    const sidebarOrder = coldbrewMeta?.coldbrewTheme?.sidebarOrder || [
        'about',
        'skills',
        'languages',
        'interests',
    ]
    const mainSectionOrder = coldbrewMeta?.coldbrewTheme?.mainSectionOrder || [
        'summary',
        'work',
        'volunteer',
        'education',
        'awards',
        'publications',
        'projects',
        'references',
    ]
    const sidebarMapping = {
        about: (
            <About
                resumeBasics={resume.basics}
                countryFormatters={countryFormatters}
            />
        ),
        skills: <Skills resumeSkills={resume.skills} />,
        languages: <Languages resumeLanguages={resume.languages} />,
        interests: <Interests resumeInterests={resume.interests} />,
    }
    const mainSectionMapping = {
        summary: <Summary resumeSummary={resume.basics?.summary} />,
        work: <Work resumeWork={resume.work} />,
        volunteer: <Volunteer resumeVolunteer={resume.volunteer} />,
        education: <Education resumeEducation={resume.education} />,
        awards: <Awards resumeAwards={resume.awards} />,
        publications: <Publications resumePublications={resume.publications} />,
        projects: <Projects resumeProjects={resume.projects} />,
        references: <References resumeReferences={resume.references} />,
    }

    const sidebarItems = sidebarOrder.map((section) => sidebarMapping[section])
    const mainSectionItems = mainSectionOrder.map(
        (section) => mainSectionMapping[section]
    )
    return (
        <main id="resume" class="page">
            <ResumeHeader resumeBasics={resume.basics} />
            <div class="resume-content">
                <aside class="left-column">{sidebarItems}</aside>
                <div class="right-column">{mainSectionItems}</div>
            </div>
        </main>
    )
}
