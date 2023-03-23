/* eslint-env node */
// basic script for generating typescript files for compatibility
import { mkdirSync, writeFileSync } from 'node:fs'
import { compile } from 'json-schema-to-typescript'
import { schema } from 'resume-schema'

async function generate() {
    mkdirSync(new URL('../src/types/', import.meta.url), { recursive: true })
    // JSON Resume type definitions
    writeFileSync(
        new URL('../src/types/resume.ts', import.meta.url),
        await compile(schema)
    )
}
await generate()
