import {exec, spawn} from 'node:child_process'
import { watch } from 'node:fs/promises'

const [node, _, file] = process.argv

function spawnNode() {
    const pr = spawn(node, [file])
    pr.stdout.pipe(process.stdout)
    pr.stderr.pipe(process.stderr)

    pr.on('close', (code) => {
        if (code !== null) {
            process.exit(code)
        }
    })
    return pr
}

let childNodeProces = spawnNode() //on lance le fichier passé en paramètre avec node.js
const watcher = watch('./', {recursive: true}) //on scrute le répertoire courant et ses enfants de manière récursive
for await (const event of watcher) {
    if (event.filename.endsWith('.js')) {
        childNodeProces.kill('SIGKILL') //on force la fermeture du process Node.js
        childNodeProces = spawnNode() //dès qu'un fichier javascript du dossier est modifié on relance node.js
    }
}
