import type { ResumeSchema } from '/@/types/resume'

type MainSectionNames =
    | 'summary'
    | 'work'
    | 'volunteer'
    | 'education'
    | 'awards'
    | 'publications'
    | 'projects'
    | 'references'

type SidebarNames = 'about' | 'skills' | 'languages' | 'interests'
/**
 * Extension of ResumeSchema['meta'] field with extra custom data.
 */
export type ColdbrewResumeMeta = Exclude<ResumeSchema['meta'], undefined> & {
    coldbrewTheme?: {
        locale?: string
        mainSectionOrder?: MainSectionNames[]
        sidebarOrder?: SidebarNames[]
    }
}
