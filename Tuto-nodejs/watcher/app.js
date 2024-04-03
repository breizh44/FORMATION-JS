import { createServer } from "node:http";
import { json } from "node:stream/consumers";
import { createTodo, findTodos } from "./functions/todos_storage.js";

// createServer((req,res) => {
//     res.write('Bonjour')
//     res.end()
// }).listen('8888')

createServer(async (req,res) => {
    res.setHeader('Content-Type', 'application/json')
    const url = new URL(req.url, `http://${req.headers.host}`)
    if (url.pathname === '/todos') {
        if (req.method === 'GET') { //URL = .../todos en méthode GET
            const todos = await findTodos()
            res.write(JSON.stringify(todos))
        } else if (req.method === 'POST') { //URL = .../todos en méthode POST
            //const newTodo = await json(req)
            //await createTodo(newTodo)
            const todo = await createTodo(await json(req))
            res.write(JSON.stringify(todo))
        }

    } else {
        res.writeHead(404)
    }

    res.end()
}).listen('3000')