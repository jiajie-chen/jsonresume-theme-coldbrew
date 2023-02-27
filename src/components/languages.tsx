
export function Languages() {
  return (
    <>
      {/* {{#if resume.languages.length}} */}
      <div class="container languages-container">
        {/* {{> title value="Languages"}} */}

        <ul class="minimal">
          {/* {{#each resume.languages}} */}
          <li>
            <h6>{/* {{language}} */} {/* {{#if fluency}} */}<em>({/* {{fluency}} */})</em>{/* {{/if}} */}</h6>
          </li>
          {/* {{/each}} */}
        </ul>
      </div>
      {/* {{/if}} */}

    </>
  )
}
