import '../styles/main.scss';
import type { ResumeSchema } from '../types/resume'

type ResumeProps = {
  resume: ResumeSchema;
};

// TODO: translate Handlebars to: components, partials
export function Resume({ resume }: ResumeProps) {
  return (
    <>
      <main id="resume" class="page">
        {/* {{> resume-header}} */}
        <div class="resume-content">
          <aside class="left-column">
            {/* {{> about }} */}
            {/* {{> skills }} */}
            {/* {{> languages }} */}
            {/* {{> interests }} */}
          </aside>
          <div class="right-column">
            {/* {{> summary}} */}
            {/* {{> work }} */}
            {/* {{> volunteer }} */}
            {/* {{> education }} */}
            {/* {{> awards }} */}
            {/* {{> publications }} */}
            {/* {{> references }} */}
          </div>
        </div>
      </main>
    </>
  )
}
