// const h1 = document.querySelector('h1')
// console.log('Position par rapport au haut', window.scrollY + h1.getBoundingClientRect().y,
// recursiveOffsetTop(h1))

// document.querySelector('div').addEventListener('mousemove', e => {
//     console.log(e)
// })

const div =document.querySelector('div')
console.log(div.dataset)
console.log(div.dataset.user)
div.dataset.hello = "bonjour"
console.log(div.dataset)

const button = document.querySelector('button')
let i = 0
const listener = () => {
    i++
    console.log(button.dataset.name)
    if (i >= 3) {
        button.removeEventListener('click', listener)
    }
}
button.addEventListener('click', listener)

button.animate([
    {transform: 'translateY(0)'},
    {transform: 'translateY(100px)', rotate:'360deg'},    
], {
    duration: 1000,
    iterations: 2,
    fill: 'both'
})

/**
 * 
 * @param {HTMLElement} element 
 * @return {number}
 */
function recursiveOffsetTop(element) {
    // let top = 0
    // while(element.offsetParent) {
    //     top += element.offsetTop
    //     element = element.offsetParent
    // }
    // return top
    //version recursive de la fonction
    if (element.offsetParent) {
        return element.offsetTop + recursiveOffsetTop(element.offsetParent)
    } else {
        return element.offsetTop
    }
}