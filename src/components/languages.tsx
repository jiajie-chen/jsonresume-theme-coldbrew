import { ResumeSchema } from '/@/types/resume'
import { Title } from '/@/components/partials/title'

type LanguagesProps = {
    resumeLanguages?: ResumeSchema['languages']
}

export function Languages({ resumeLanguages }: LanguagesProps) {
    if (resumeLanguages === undefined || resumeLanguages.length == 0) {
        return null
    }

    const languageInnerItems = resumeLanguages.map((lang, i) => {
        if (lang.language === undefined) {
            return null
        }

        let fluencyTag = null
        if (lang.fluency !== undefined) {
            fluencyTag = <em>({lang.fluency})</em>
        }

        return (
            <li key={i}>
                <h6>
                    {lang.language} {fluencyTag}
                </h6>
            </li>
        )
    })

    return (
        <div class="container languages-container">
            <Title value="Languages" />

            <ul class="minimal">{languageInnerItems}</ul>
        </div>
    )
}
