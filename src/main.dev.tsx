import { render } from 'preact'
import { Resume } from './resume'
import sampleResume from './assets/resume-sample.json'

render(<Resume resume={sampleResume}/>, document.body as HTMLElement)
