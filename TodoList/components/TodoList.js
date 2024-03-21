import { cloneTemplate, createElement } from "../functions/dom.js"

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
        //utilisation du template pour l'insérer dans le DOM
        element.append(
            cloneTemplate('todolist-layout')
        )
        this.#listElement = element.querySelector('.list-group')
        for (let todo of this.#todos) {
            const t = new TodoListItem(todo)
            this.#listElement.append(t.element)
        }
        element.querySelector('form').addEventListener('submit', e => this.#onSubmit(e))
        //gestion des evts sur les boutons de filtres
        element.querySelectorAll('.btn-group button').forEach(button => {
            button.addEventListener('click', e => this.#toggleFilter(e))
        })

        //comme les evts declenchés par TodoListItem sont propagés (Bubbles=true), 
        //on peut les écouter depuis le composant Todo
        //on peut voir ici le 2eme paramètre de la methode addEventListener qui utilise 
        //la destructuration pour n'utiliser que le detail contenu dans l'evt
        this.#listElement.addEventListener('delete', ({detail: todo}) => {
            this.#todos = this.#todos.filter(t => t!== todo) //on filtre la liste des todos pour enlever celui qui vient d'être supprimé
            console.log(this.#todos)
            this.#onUpdate()
        })

        this.#listElement.addEventListener('toggle', ({detail: todo}) => {
            todo.completed = !todo.completed
            console.log(this.#todos)
            this.#onUpdate()
        })        
    }

    /**
     * Soumission du formulaire => ajout d'un Todo
     * @param {SubmitEvent} e 
     */
    #onSubmit(e) {
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
        this.#todos.push(todo) //on ajoute la nouvelle tâche au tableau des taches
        this.#onUpdate()
        form.reset()
    }

    #onUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.#todos)) //sauvegarde de nos todos en Json dans le localStorage
    }

    /**
     * 
     * @param {PointerEvent} e 
     */
    #toggleFilter(e) {
        e.preventDefault()
        const filter = e.currentTarget.getAttribute('data-filter')
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active') //désactive le filtre courant
        e.currentTarget.classList.add('active')
        if (filter === 'todo') {
            this.#listElement.classList.add('hide-completed')
            this.#listElement.classList.remove('hide-todo')
        } else if (filter === 'done')
        {
            this.#listElement.classList.add('hide-todo')
            this.#listElement.classList.remove('hide-completed')           
        } else {
            this.#listElement.classList.remove('hide-completed')           
            this.#listElement.classList.remove('hide-todo')          
        }
        console.log(filter)
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
    #todo

    /** @type {Todo} */
    constructor(todo) {
        this.#todo = todo
        const idTodo = `todo-${todo.id}`
        //on récupère le li du template qui vient d'être cloné
        const li = cloneTemplate('todolist-item').firstElementChild
        this.#element = li
        const checkbox = li.querySelector('input')
        checkbox.setAttribute('id', idTodo)
        if (todo.completed) {
            checkbox.setAttribute('checked', '')
        }
        const label = li.querySelector('label')
        label.setAttribute('for', idTodo)
        label.innerText = todo.title
        const button = li.querySelector('button')
        console.log('button = ', button)
        this.toggle(checkbox)

        button.addEventListener('click', e => this.remove(e))
        checkbox.addEventListener('change', e => this.toggle(e.currentTarget))

        //on s'abonne à l'evenement custom de suppression d'une tâche
        this.#element.addEventListener('delete', e=> {
            console.log(e)
            //e.preventDefault()
        })
       
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
        const event = new CustomEvent('delete', {
            detail: this.#todo,
            bubbles: true, //bubbles=true => on propage l'évenement
            cancelable: true //indique que l'evt peut être annulé grace à un preventDefault
        })
        //déclenche un evenement "Custom" pour prévenir de la suppression d'une tâche
        //ce custom event prend en 2eme paramètre un objet d'options
        this.#element.dispatchEvent(event)
        if (event.defaultPrevented) { //si l'evenement a été annulé, on n'effectue pas la suppression
            return 
        }
        this.#element.remove()
    }

    /**
     * Change l'état (à faire / fait) de la tâche
     * @param {HTMLInputElement} checkbox 
     */
    toggle(checkbox) {
        //ajout / suppression de la classe CSS 'is-completed'
        //suivant l'état de la checkbox
        if (checkbox.checked) {
            this.#element.classList.add('is-completed')
        } else {
            this.#element.classList.remove('is-completed')
        }
        const event = new CustomEvent('toggle', {
            detail: this.#todo,
            bubbles: true //bubbles=true => on propage l'évenement
        })  
        this.#element.dispatchEvent(event)      
    }
}