import type { ResumeBasicsProps } from "../types/resume-basics";
import { Title } from "./partials/title";

export function About({ resumeBasics }: ResumeBasicsProps) {
  return (
    <>
      <section class="container about-container">
        <Title value="About" />

        {/* {{#if location}} */}
          {/* {{#location}} */}
          {/* {{> info-tag text=(formatAddress address city region postalCode countryCode) icon="fa-map-marker"}} */}
          {/* {{/location}} */}
        {/* {{/if}} */}

        {/* {{#if email}} */}
          {/* {{> info-tag text=this.email icon="fa-envelope-o"}} */}
        {/* {{/if}} */}

        {/* {{#if phone}} */}
          {/* {{> info-tag text=this.phone icon="fa-mobile"}} */}
        {/* {{/if}} */}

        {/* {{#if website}} */}
          {/* {{> info-tag text=this.website icon="fa-desktop" url=this.website}} */}
        {/* {{/if}} */}

        {/* {{#if profiles}} */}
          {/* {{#each profiles}} */}
              {/* {{> social}} */}
          {/* {{/each}} */}
        {/* {{/if}} */}
      </section>
    </>
  )
}
