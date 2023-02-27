import { Title } from "./partials/title";

export function Awards() {
  return (
    <>
      {/* {{#if resume.awards.length}} */}
      <div class="container awards-container">
        <Title value="Awards" />

        {/* {{#each resume.awards}} */}
          <section class="item">
            {/* {{> section-header name=this.title }} */}

            {/* {{#if awarder}} */}
              <h5 class="awarder">{/* {{awarder}} */}</h5>
            {/* {{/if}} */}

            {/* {{#if summary}} */}
              <p class="summary">{/* {{summary}} */}</p>
            {/* {{/if}} */}
          </section>
        {/* {{/each}} */}
      </div>
      {/* {{/if}} */}
    </>
  )
}
