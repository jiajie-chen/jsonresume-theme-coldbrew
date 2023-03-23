import { Title } from "./partials/title";

export function Interests() {
  return (
    <>
      {/* {{#if resume.interests.length}} */}
      <div class="container interests-container">
        <Title value="Interests" />

        {/* {{#each resume.interests}} */}
          <section class="item">
            {/* {{#if name}} */}
              <h4 class="bold">{/* {{name}} */}</h4>
            {/* {{/if}} */}
            {/* {{#if keywords.length}} */}
              <ul class="minimal">
                {/* {{#each keywords}} */}
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
