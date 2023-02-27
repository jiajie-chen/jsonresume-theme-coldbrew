import { Title } from "./partials/title";

export function Publications() {
  return (
    <>
      {/* {{#if resume.publications.length}} */}
      <div class="container publications-container">
        <Title value="Publications"/>

        {/* {{#each resume.publications}} */}
        <section class="item">
          {/* {{> section-header name=this.name}} */}

          {/* {{#if publisher}} */}
            <h5 class="awarder">{/* {{publisher}} */}</h5>
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
