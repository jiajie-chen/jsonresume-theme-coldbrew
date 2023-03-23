import type { ResumeSchema } from '/@/types/resume'

/**
 * Extension of ResumeSchema['meta'] field with extra custom data.
 */
export type ColdbrewResumeMeta = Exclude<ResumeSchema['meta'], undefined> & {
    coldbrewTheme?: {
        locale?: string
    }
}
