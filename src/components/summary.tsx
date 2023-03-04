import { ResumeSchema } from "../types/resume";
import { Title } from "./partials/title";

type SummaryProps = {
  resumeSummary: Exclude<ResumeSchema['basics'], undefined>['summary']
}

export function Summary({ resumeSummary }: SummaryProps) {
  if (resumeSummary === undefined) {
    return null
  }

  return (
    <div class="container summary-container">
      <Title value="Summary" />
      <p class="summary">
        {resumeSummary}
      </p>
    </div>
  )
}
