/**
 * Gestion de l'evenement de click sur les boutons
 * @param {PointerEvent} event 
 */
function onButtonClick(event) {
    console.log('Button click')
    event.preventDefault() //permet d'empêcher le comportement par défaut de l'élément
                        //si l'evt est déclenché par un lien, il ne nous renverra pas sur la cible du lien
    event.stopPropagation()
    console.log(this)
    console.log(event.currentTarget)
}

document.querySelectorAll('button, a').forEach(button => {
    button.addEventListener('click', onButtonClick)
})

document.querySelector('div').addEventListener('click', () => {
    console.log('click div')
})
