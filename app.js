console.log(document.querySelector('#hello'))
const lis = document.querySelectorAll('li')
console.log(lis[2])
lis.forEach(v => console.log(v))
console.log(Array.from(lis))

const lis2 = document.querySelectorAll('ul li:first-child')
console.log(Array.from(lis2))

const ul = document.querySelector('ul')
console.log(ul.nodeName, ul.innerHTML)
const lis1 = document.querySelector('ul li:first-child')
console.log(lis1.getAttribute('class'))

console.log(lis1.classList)

/**
 * Pour faire clignoter en rouge le premier li
 */
setInterval(() => {
    lis1.classList.toggle('red')
}, 1000)

lis1.style.fontWeight = 'bold'
lis1.style.color = 'blue'

console.log(getComputedStyle(lis1).color)

/**
 * Ajout d'un élément au DOM
 */
const newLi = document.createElement('li')
newLi.innerHTML = 'Bonjour les gens'
//document.querySelector('ul').appendChild(newLi)
document.querySelector('ul').append(newLi)

const div = document.createElement('div')
div.innerHTML = 'Bonjour les gens'
//ul.insertAdjacentElement('beforebegin', div)


/**
 * Parcours des enfants dans le DOM
 */
console.log(ul.children)
console.log(ul.childNodes)

const firstLi = document.querySelector('ul li')
console.log(
    firstLi.parentElement
)
console.log(
    firstLi.nextElementSibling
)
//firstLi.remove()
ul.append(firstLi.cloneNode(true))