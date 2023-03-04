import { ResumeSchema } from "./resume";

/**
 * Extension of ResumeSchema['education'] to include custom fields
 */
type ResumeEducation = (
  Exclude<ResumeSchema['education'], undefined>[number]
  & {
    studyType?: string
    location?: string
    specialization?: string
  }
)[]
