import {exec, spawn} from 'node:child_process'
import { error } from 'node:console'

const [node, _, file] = process.argv
const pr = spawn('dir', [], {shell: true})
pr.stdout.on('data', (data) => {
    console.log(data.toString('utf-8'))
})

pr.stderr.on('data', (data) => {
    console.error(data.toString('utf-8'))
})

pr.on('close', (code) => {
    console.log(`process exited with code : ${code}`)
})