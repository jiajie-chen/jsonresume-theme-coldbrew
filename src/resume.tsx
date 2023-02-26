import './styles/main.scss';
import type { ResumeSchema } from './types/resume'

type ResumeProps = {
  resume: ResumeSchema;
};

// TODO: translate Handlebars to: components, partials
export function Resume({ resume }: ResumeProps) {
  return (
    <>
      <h1>Test</h1>
    </>
  )
}
