
export function SectionHeader() {
  return (
    <>
      <div class="section-header clearfix">
        {/* {{#if name}} */}
        <h3 class="bold pull-left">
          {/* {{#if website}} */}
            <a href="{/* {{website}} */}" target="_blank">
              {/* {{name}} */} <i class="fa fa-external-link" aria-hidden="true"></i>
            </a>
          {/* {{else}} */}
            {/* {{name}} */}
          {/* {{/if}} */}
        </h3>
        {/* {{/if}} */}
        <h5 class="italic pull-right">
          {/* {{#if startDate}} */}
            <span class="startDate">{/* {{formatDate startDate}} */}</span>
          {/* {{#if endDate}} */}
            <span class="endDate"> - {/* {{formatDate endDate}} */}</span>
          {/* {{else}} */}
            <span class="endDate"> - Present</span>
          {/* {{/if}} */}
          {/* {{else if releaseDate}} */}
            {/* {{formatDate releaseDate}} */}
          {/* {{/if}} */}
        </h5>
      </div>

    </>
  )
}
