import { createElement } from "../functions/dom.js"

/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

export class TodoList {

    /** @type {Todo[]} */
    #todos = [] //propriété privée = tableau vide par défaut

    /** @type {HTMLUListElement} */
    #listElement = [] //propriété privée = tableau vide par défaut

    /**
     * 
     * @param {Todo[]} todos 
     */
    constructor(todos) {
        this.#todos = todos
        console.log('TODOS=',todos)
    }

    /**
     * 
     * @param {HTMLElement} element 
     */
    appendTo(element) {
        element.innerHTML = `<form class="d-flex pb-4">
        <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title"
            data-com.bitwarden.browser.user-edited="yes">
        <button class="btn btn-primary">Ajouter</button>
    </form>
    <main>
        <div class="btn-group mb-4" role="group">
            <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
            <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
            <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
        </div>

        <ul class="list-group">
        </ul>
    </main>`
        this.#listElement = element.querySelector('.list-group')
        for (let todo of this.#todos) {
            const t = new TodoListItem(todo)
            this.#listElement.append(t.element)
        }
        element.querySelector('form').addEventListener('submit', e => this.onSubmit(e))
    }

    /**
     * 
     * @param {SubmitEvent} e 
     */
    onSubmit(e) {
        e.preventDefault()
        const form = e.currentTarget
        const title = new FormData(form).get('title').toString().trim()
        if (title === '') {
            return
        }
        const todo = {
            id: Date.now(),
            title: title,
            completed: false
        }
        const item = new TodoListItem(todo)
        this.#listElement.prepend(item.element)
        form.reset()
    }
}

class TodoListItem {

/* On va construire cette arborescence 
            <li class="todo list-group-item d-flex align-items-center">
                <input class="form-check-input" type="checkbox" id="todo-1">
                <label class="ms-2 form-check-label" for="todo-1">
                    Tâche à faire 2
                </label>
                <label class="ms-auto btn btn-danger btn-sm">
                    <i class="bi-trash"></i>
                </label>
            </li>
*/

    #element

    /** @type {Todo} */
    constructor(todo) {
        const idTodo = `todo-${todo.id}`
        const li = createElement('li', {
            class: 'todo list-group-item d-flex align-items-center'
        } )
        const checkbox = createElement('input', {
            type: 'checkbox',
            class: 'form-check-input',
            id: idTodo,
            checked: todo.completed ? '' : null
        })

        const label = createElement('label', {
            class: 'form-check-label',
            for: idTodo
        })
        label.innerText = todo.title

        const button = createElement('label', {
            class: 'ms-auto btn btn-danger btn-sm'
        })
        button.innerHTML = '<i class="bi-trash"></i>'
        li.append(checkbox)
        li.append(label)
        li.append(button)

        button.addEventListener('click', e => this.remove(e))

        this.#element = li
    }

    /**
     * 
     * @return {HTMLElement}
     */
    // appendTo(element) {
    //     element.append(this.#element)
    // }
    get element() {
        return this.#element
    }

    /**
     * 
     * @param {PointerEvent} e 
     */
    remove(e) {
        e.preventDefault()
        this.#element.remove()
    }
}