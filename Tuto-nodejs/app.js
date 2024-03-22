import fs from 'node:fs'
import {readFile} from 'node:fs/promises'

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