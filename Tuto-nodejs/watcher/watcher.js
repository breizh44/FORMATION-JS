import {exec, spawn} from 'node:child_process'
import { error } from 'node:console'

const [node, _, file] = process.argv

exec('dir', (error, out, err) => {
    console.log({
        error,
        out, err
    })
})
console.log(process.argv)