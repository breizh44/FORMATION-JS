import { createReadStream } from 'node:fs'
import {createServer} from 'node:http'
import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'
import {text} from 'stream/consumers'

const dir = dirname(fileURLToPath(import.meta.url))
const filename = join(dir, 'index.html')

const server = createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    let body = ''
    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('close', () => {
        console.log(body)
        res.end()
    })

    // console.log('URL= ', url)    
    // res.write(`Bonjour ${url.searchParams.get('name')}`) //fonctionne si l'url est de la forme http://localhost:8888/?name=john
    // res.end()
    // console.log(req.headers.accept)
    // const file = createReadStream(filename)
    // //file.pipe(res) //par défaut la réponse est fermée quand plus de données sur le pipe
    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // })
    // file.pipe(res, {end:false}) //on décide de fermer manuellement le flux de réponse
    // file.on('end', () => {
    //     res.end()
    // })    

    //res.write('hello') //pour info res dérive de stream
    //res.end() //clôture la réponse renvoyée au navigateur
})

server.listen('8888') //le serveur écoute sur le port 8888 et par défaut sur localhost
