
export function ResumeHeader() {
  return (
    <>
      {/* {{#resume.basics}} */}
      <header class="resume-header clearfix">
        <div class="profile-header pull-left">
          <h1>{/* {{name}} */}</h1>
          <h2>{/* {{label}} */}</h2>
        </div>
        <div class="profile-pic pull-right">
          {/* {{#if picture}} */}
            <img src="{/* {{picture}} */}" alt="profile-pic">
          {/* {{/if}} */}
        </div>
      </header>
      {/* {{/resume.basics}} */}

    </>
  )
}
