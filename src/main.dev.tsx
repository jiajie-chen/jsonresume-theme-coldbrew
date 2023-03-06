import { render } from 'preact'
import { Resume } from '/@/resume'
import sampleResumeJson from '/@/assets/resume-sample.json'
import type { ResumeSchema } from '/@/types/resume'
import type { ColdbrewResumeMeta } from '/@/types/resume-meta'
import { loadCountryFormatters } from '/@/helpers/utils'
import '/@/styles/main.scss'

const sampleResume = sampleResumeJson as ResumeSchema
const coldbrewMeta = sampleResume.meta as ColdbrewResumeMeta | undefined
const locale = coldbrewMeta?.coldbrewTheme?.locale || 'en'
const localeCountries = await loadCountryFormatters(locale)

render(
    <Resume resume={sampleResume} countryFormatters={localeCountries} />,
    document.body as HTMLElement
)
