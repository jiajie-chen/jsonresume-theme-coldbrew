import { render as preactRender } from 'preact-render-to-string'
import { loadCountryFormatters } from '/@/helpers/utils'
import { Resume } from '/@/resume'
import type { ResumeSchema } from '/@/types/resume'
import type { ColdbrewResumeMeta } from '/@/types/resume-meta'
import resumeStyle from '/@/styles/main.scss?inline'

export async function render(resume: ResumeSchema | object): Promise<string> {
    // TODO: validatation of resume
    const _resume = resume as ResumeSchema
    const coldbrewMeta = _resume.meta as ColdbrewResumeMeta | undefined
    const locale = coldbrewMeta?.coldbrewTheme?.locale ?? 'en'

    // this is done outside of the components to avoid async logic in Preact
    const localeCountries = await loadCountryFormatters(locale)

    const resumeHtml = (
        <html lang={locale}>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no, minimal-ui"
                />
                <title>JSONResume</title>
                {/*  TODO: remove and replace with package/asset */}
                <link
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    rel="stylesheet"
                />
                {/* HACK: inject inline CSS via dangerouslySetInnerHTML */}
                {/* eslint-disable-next-line react/no-danger */}
                <style dangerouslySetInnerHTML={{ __html: resumeStyle }} />
            </head>
            <body>
                <Resume resume={_resume} countryFormatters={localeCountries} />
            </body>
        </html>
    )
    return preactRender(resumeHtml)
}
