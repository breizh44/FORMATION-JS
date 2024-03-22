import fs from 'node:fs'
import {readFile} from 'node:fs/promises'
import {writeFile, stat} from 'node:fs/promises'
import {open} from 'node:fs/promises'
import {watch} from 'node:fs/promises'
import {fileURLToPath} from 'node:url'
import {dirname} from 'node:path'
import {readdir} from 'node:fs/promises'

//lecture d'un fichier de manière synchrone (donc bloquant)
//const content = fs.readFileSync('demo.txt', {encoding: 'utf-8'})

//lecture d'un fichier de manière asynchrone
const content = fs.readFile('demo.txt', {encoding: 'utf-8'}, function(err,content) {
    console.log(content) //la callback function n'est appelée que lorsque la lecture du fichier est terminée
})
console.log('hello')


//lecture d'un fichier avec fs/promises (promesses à la place de la callback)
//lecture d'un fichier de manière asynchrone
const content2 = await readFile('demo.txt', {encoding: 'utf-8'}) //attente du resultat de la promesse puis execution de la suite du code
console.log(content2)

//lecture de 2 fichiers puis passage à la suite du code
const content3 = await Promise.all([
    await readFile('demo.txt', {encoding: 'utf-8'}),
    await readFile('app.js', {encoding: 'utf-8'})
])
console.log(content3)

await writeFile('demo.txt', 'Bonjour les gens', {encoding:'utf-8', flag: 'a'})

const i = await stat('demo.txt')
console.log(i)

const file = await open('demo.txt', 'a')
file.write('hello')
file.close()

//surveillance d'un répertoire
// const watcher = watch('./')

// for await (const event of watcher) {
//     console.log(event)
// }

//lecture du contenu d'un répertoire puis affichage
//const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration))

const dir = dirname(fileURLToPath(import.meta.url))
const files = await readdir(dir, {withFileTypes: true})
for (const file of files) {
    const isDir = file.isDirectory()
    const parts = [
        isDir ? 'D' : 'F', 
        file.name
    ]
    if (!isDir) {
        //pb la ligne ci-dessous est bloquante et peut ralentir la boucle
        const {size} = await stat(file.name)
        parts.push(`${size}o`)
    }
    
    console.log(parts.join(' - '))
}


//version totalement asynchrone : 
console.time('code')
await Promise.allSettled(
    files.map(async (file) => {
        const isDir = file.isDirectory()
        const parts = [
            isDir ? 'D' : 'F', 
            file.name
        ]
        if (!isDir) {
            //pb la ligne ci-dessous est bloquante et peut ralentir la boucle
            const {size} = await stat(file.name)
            parts.push(`${size}o`)
        }
        
        console.log(parts.join(' - '))
    })
)
console.timeEnd('code')