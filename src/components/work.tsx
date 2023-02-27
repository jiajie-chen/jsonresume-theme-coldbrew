import { Title } from "./partials/title";

export function Work() {
  return (
    <>
      {/* {{#if resume.work.length}} */}
      <div class="container work-container">
        <Title value="Experience" />

        {/* {{#each resume.work}} */}
        <section class="item">
          {/* {{> section-header name=this.company }} */}

          {/* {{#if position}} */}
            <h4>{/* {{position}} */}</h4>
          {/* {{/if}} */}

          {/* {{#if summary}} */}
            <p class="summary">{/* {{summary}} */}</p>
          {/* {{/if}} */}

          {/* {{#if highlights.length}} */}
            <ul>
              {/* {{#each highlights}} */}
              <li>{/* {{.}} */}</li>
              {/* {{/each}} */}
            </ul>
          {/* {{/if}} */}
        </section>
        {/* {{/each}} */}
      </div>
      {/* {{/if}} */}
    </>
  )
}
