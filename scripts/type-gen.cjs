// basic script for generating typescript definitions for compatibility
import fs from 'fs'
import path from 'path'
import json2ts from 'json-schema-to-typescript'
import resumeSchema from 'resume-schema'

async function generate() {
    fs.mkdirSync(path.resolve(__dirname, '../src/types/'), { recursive: true })
    // JSON Resume type definitions
    fs.writeFileSync(
        path.resolve(__dirname, '../src/types/resume.d.ts'),
        await json2ts.compile(resumeSchema.schema)
    )
}

await generate()
