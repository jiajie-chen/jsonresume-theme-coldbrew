// basic script for generating typescript definitions for compatibility
const fs = require('fs');
const path = require('path');
const json2ts = require('json-schema-to-typescript');
const resumeSchema = require('resume-schema');

async function generate() {
  fs.mkdirSync(
    path.resolve(__dirname, '../src/types/'),
    { recursive: true },
  );
  // JSON Resume type definitions
  fs.writeFileSync(
    path.resolve(__dirname, '../src/types/resume.d.ts'),
    await json2ts.compile(resumeSchema.schema)
  );
}

await generate();
