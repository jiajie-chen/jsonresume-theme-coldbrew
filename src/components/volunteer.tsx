import { Title } from "./partials/title";

export function Volunteer() {
  return (
    <>
      {/* {{#if resume.volunteer.length}} */}
      <div class="container volunteer-container">
        <Title value="Volunteer"/>

        {/* {{#each resume.volunteer}} */}
        <section class="item">
          {/* {{> section-header name=this.organization }} */}
          {/* {{#if position}} */}
            <h5>{/* {{position}} */}</h5>
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
