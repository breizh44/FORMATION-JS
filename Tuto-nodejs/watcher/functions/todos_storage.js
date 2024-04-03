import { readFile, writeFile } from "node:fs/promises"
import { NotFoundError } from "./errors.js"

const path = 'storage/todos.json'

/**
 * @typedef {object} Todo
 * @property {number} id 
 * @property {string} title
 * @property {boolean} completed
 */

/**
 * @return {Promise<Todo[]>}
 */
export async function findTodos() {
    const data = await readFile(path, 'utf-8')
    return JSON.parse(data)
}

/**
 * 
 * @param {string} title
 * @param {boolean} completed
 * @return {Promise<Todo>}
 */
export async function createTodo({title, completed = false}) {
    const todo = {title, completed, id: Date.now()} //creation du nouveau todo avec les paramètres en entrée
    const todos = [todo, ...await findTodos()] //ajout du nouveau todo en début de liste des todos
    await writeFile(path, JSON.stringify(todos, null, 2))
    return todo
}

/**
 * @param {number} id
 * @param {{completed?: boolean, title?: string}} partialTodo
 * @return {Promise<Todo>}
 */
export async function updateTodo(id, partialTodo) {
    const todos = await findTodos()
    const todo = todos.find(todo => todo.id === id)
    if (todo === undefined) {
        throw new NotFoundError()
    }
    Object.assign(todo, partialTodo)
    await writeFile(path, JSON.stringify(todos, null, 2))
    return todo
}

/**
 * 
 * @param {number} id
 * @return {Promise}
 */
export async function removeTodo(id) {
    const todos = await findTodos() 
    const todo = todos.findIndex(todo => todo.id === id)
    if (todo === -1) {
        throw new NotFoundError()
    }
    //todos.filter(todo => todo.id !== id) //on garde tous les todos qui ne correspondent pas à celui qu'on veut supprimer
    await writeFile(path, JSON.stringify(todos.filter(todo => todo.id !== id), null, 2))
}