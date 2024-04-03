import { json } from "node:stream/consumers"
import { createTodo, findTodos, removeTodo, updateTodo } from "../functions/todos_storage.js"

export async function index(req, res) {
    return findTodos()  
}

export async function create(req, res) {
    return createTodo(await json(req))
}

export async function remove(req, res, url) {
    const id = parseInt(url.searchParams.get('id'), 10)
    await removeTodo(id)
    res.writeHead(204) //statut = 204 => statut no content (requete sans contenu)
}

export async function update(req, res, url) {
    const id = parseInt(url.searchParams.get('id'), 10)
    return updateTodo(id, await json(req))
}
