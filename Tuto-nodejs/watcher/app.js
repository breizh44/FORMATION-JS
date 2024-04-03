import { createServer } from "node:http";
import { index, create } from "./api/todo.js";

// createServer((req,res) => {
//     res.write('Bonjour')
//     res.end()
// }).listen('8888')

createServer(async (req,res) => {
    res.setHeader('Content-Type', 'application/json')
    const url = new URL(req.url, `http://${req.headers.host}`)
    const endpoint = `${req.method}:${url.pathname}`
    let results
    switch (endpoint) {
        case 'GET:/todos':
            results = await index(req, res)
            break;
            case 'POST:/todos':
                results = await create(req, res)
                break;
            default:
                res.writeHead(404)
    }
    if (results) {
        res.write(JSON.stringify(results))
    }
    res.end()
}).listen('3000')