import { json } from "node:stream/consumers"
import { createTodo, findTodos } from "../functions/todos_storage.js"

export async function index(req, res) {
    const todos = await findTodos()
    return todos   
}

export async function create(req, res) {
    const todo = await createTodo(await json(req))
    return todo
}