import { TodoList } from "./components/TodoList.js";
import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try {
    //const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //On charge maintenant nos todos depuis le localStorage
    //Attention : le localStorage permet de sauvegarder max 5 Mo de données (+ ou - selon les navigateurs)
    const todosInStorage = localStorage.getItem('todos')?.toString()
    let todos = []
    if (todosInStorage) {
        todos = JSON.parse(todosInStorage)
    }
    //const todos = [] //on ne charge plus les todos depuis jsonplaceholder, on part d'un tableau vide
    const list = new TodoList(todos) //construction de notre objet TodoList à partir du Json récupéré depuis l'api jsonplaceholder
    list.appendTo(document.querySelector('#todolist')) //ajout de la liste des todos à l'element d'id=todolist

} catch (e) {
    console.log(e)
    const alertElement = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    })
    alertElement.innerText = 'Impossible de charger les éléments'
    document.body.prepend(alertElement)
    console.log(e)
}

