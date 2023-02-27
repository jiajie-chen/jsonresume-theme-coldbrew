import { Title } from "./partials/title";

export function Summary() {
  return (
    <>
      {/* {{#resume.basics}} */}
      {/* {{#if summary}} */}
      <div class="container summary-container">
        <Title value="Summary" />
        <p class="summary">
          {/* {{summary}} */}
        </p>
      </div>
      {/* {{/if}} */}
      {/* {{/resume.basics}} */}
    </>
  )
}
