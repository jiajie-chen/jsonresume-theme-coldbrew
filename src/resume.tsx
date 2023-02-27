import { About } from './components/about';
import { Awards } from './components/awards';
import { Education } from './components/education';
import { Interests } from './components/interests';
import { Languages } from './components/languages';
import { Publications } from './components/publications';
import { References } from './components/references';
import { ResumeHeader } from './components/resume-header';
import { Skills } from './components/skills';
import { Summary } from './components/summary';
import { Volunteer } from './components/volunteer';
import { Work } from './components/work';
import './styles/main.scss';
import type { ResumeSchema } from './types/resume'

type ResumeProps = {
  resume: ResumeSchema;
};

// TODO: translate Handlebars to: components, partials
export function Resume({ resume }: ResumeProps) {
  return (
    <>
      <main id="resume" class="page">
        <ResumeHeader resumeBasics={resume.basics}/>
        <div class="resume-content">
          <aside class="left-column">
            <About resumeBasics={resume.basics}/>
            <Skills />
            <Languages />
            <Interests />
          </aside>
          <div class="right-column">
            <Summary />
            <Work />
            <Volunteer />
            <Education />
            <Awards />
            <Publications />
            <References />
          </div>
        </div>
      </main>
    </>
  )
}
