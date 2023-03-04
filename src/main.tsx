import { render as preactRender } from 'preact-render-to-string';
import { loadCountryFormatters } from './helpers/utils';
import { Resume } from './resume'
import type { ResumeSchema } from './types/resume'
import { ColdbrewResumeMeta } from './types/resume-meta';

async function resumeRender(resume: ResumeSchema): Promise<string> {
    const coldbrewMeta = resume.meta as ColdbrewResumeMeta | undefined
    const locale = coldbrewMeta?.coldbrewTheme?.locale ?? "en"

    const localeCountries = await loadCountryFormatters(locale)

    let resumeHtml = (
        <html lang={locale}>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui" />
            <title>JSONResume</title>
            {/*  TODO: remove and replace with package/asset */}
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </head>
        <body>
            <Resume resume={resume} countryFormatters={localeCountries}/>
        </body>
        </html>
    )
    return preactRender(resumeHtml)
}

export default {
    render: resumeRender
}
