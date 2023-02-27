import { render } from 'preact'
import { Resume } from './components/resume'
import sampleResume from './assets/resume-sample.json'

render(<Resume resume={sampleResume}/>, document.body as HTMLElement)
