import { ResumeSchema } from '/@/types/resume'

/**
 * Extension of ResumeSchema['education'] to include custom fields
 */
export type ResumeEducation = (Exclude<
    ResumeSchema['education'],
    undefined
>[number] & {
    studyType?: string
    location?: string
    specialization?: string
})[]
