import { Title } from "./partials/title";

export function References() {
  return (
    <>
      {/* {{#if resume.references.length}} */}
      <div class="container references-container">
        <Title value="References" />

        {/* {{#each resume.references}} */}
        <section class="item clearfix">
          {/* {{#if reference}} */}
            <i class="fa fa-quote-left pull-left" aria-hidden="true"></i>
            <blockquote>
              {/* {{reference}} */}
            </blockquote>
          {/* {{/if}} */}

          {/* {{#if name}} */}
            <h5 class="pull-right"> — {/* {{name}} */}</h5>
          {/* {{/if}} */}
        </section>
        {/* {{/each}} */}
      </div>
      {/* {{/if}} */}
    </>
  )
}
