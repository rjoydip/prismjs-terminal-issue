// ESM only, sorry, blame chalk
// But less reason to use CommonJS for new CLI apps anyway
import { highlight } from 'prismjs-terminal'

// get some code somehow
import { readFileSync } from 'fs'
const code = readFileSync('some-file.ts', 'utf8')

// highlight it
console.log(highlight(code, 'typescript'))