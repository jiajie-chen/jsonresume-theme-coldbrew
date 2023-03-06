import type { ResumeBasicsProps } from '/@/types/resume-basics'

export function ResumeHeader({ resumeBasics }: ResumeBasicsProps) {
    let nameTag = null
    if (resumeBasics?.name !== undefined) {
        nameTag = <h1>{resumeBasics.name}</h1>
    }

    let labelTag = null
    if (resumeBasics?.label !== undefined) {
        labelTag = <h2>{resumeBasics.label}</h2>
    }

    let pictureTag = null
    if (resumeBasics?.image !== undefined) {
        pictureTag = (
            <div class="profile-pic pull-right">
                <img src={resumeBasics.image} alt="profile-pic" />
            </div>
        )
    }

    let pronounsTag = null
    if (resumeBasics?.pronouns !== undefined) {
        pronounsTag = <h2>{resumeBasics.pronouns}</h2>
    }

    return (
        <header class="resume-header clearfix">
            <div class="profile-header pull-left">
                {nameTag}
                <div class="two-column">
                    {labelTag}
                    {pronounsTag}
                </div>
            </div>
            {pictureTag}
        </header>
    )
}
