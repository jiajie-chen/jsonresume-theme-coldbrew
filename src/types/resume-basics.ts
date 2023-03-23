import type { ResumeSchema } from '/@/types/resume'

/**
 * Extension of ResumeSchema['basics'] to include custom fields
 */
export type ResumeBasics = Exclude<ResumeSchema['basics'], undefined> & {
    pronouns?: string
}

/**
 * Component property that only takes in ResumeBasics
 */
export type ResumeBasicsProps = {
    resumeBasics?: ResumeBasics
}
