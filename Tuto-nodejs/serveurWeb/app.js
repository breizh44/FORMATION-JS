import { createReadStream } from 'node:fs'
import {createServer} from 'node:http'
import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'
import {json, text} from 'node:stream/consumers'

const dir = dirname(fileURLToPath(import.meta.url))
const filename = join(dir, 'index.html')

const server = createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    //let body = ''
    res.write(`Bonjour ${(await json(req)).name}`)
    res.end()
})

server.listen('8888') //le serveur écoute sur le port 8888 et par défaut sur localhost
