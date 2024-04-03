import { readFile, writeFile } from "node:fs/promises"

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
    await writeFile(path, JSON.stringify(todos))
    return todo
}