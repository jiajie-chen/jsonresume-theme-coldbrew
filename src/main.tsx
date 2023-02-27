import { render } from 'preact-render-to-string';
import { Resume } from './components/resume'
import type { ResumeSchema } from './types/resume'

function resumeRender(resume: ResumeSchema): string {
    let resumeHtml = (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui" />
            <title>JSONResume</title>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </head>
        <body>
            <Resume resume={resume}/>
        </body>
        </html>
    )
    return render(resumeHtml)
}

export default {
    render: resumeRender
}
