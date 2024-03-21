const h1 = document.querySelector('h1')
console.log('Position par rapport au haut', window.scrollY + h1.getBoundingClientRect().y,
recursiveOffsetTop(h1))

document.querySelector('div').addEventListener('mousemove', e => {
    console.log(e)
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