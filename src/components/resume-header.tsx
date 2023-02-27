import type { ResumeBasicsProps } from "../types/resume-basics";

export function ResumeHeader({ resumeBasics }: ResumeBasicsProps) {
  const resumeName = resumeBasics?.name || ''
  const resumeLabel = resumeBasics?.label || ''
  const resumePicture = resumeBasics?.image

  let pictureTag = null
  if (resumePicture !== undefined) {
    pictureTag = (
      <div class="profile-pic pull-right">
          <img src={resumePicture} alt="profile-pic"/>
      </div>
    )
  }

  return (
    <>
      <header class="resume-header clearfix">
        <div class="profile-header pull-left">
          <h1>{resumeName}</h1>
          <h2>{resumeLabel}</h2>
        </div>
        {pictureTag}
      </header>
    </>
  )
}
