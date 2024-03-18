console.log(document.querySelector('#hello'))
const lis = document.querySelectorAll('li')
console.log(lis[2])
lis.forEach(v => console.log(v))
console.log(Array.from(lis))

const lis2 = document.querySelectorAll('ul li:first-child')
console.log(Array.from(lis2))

const ul = document.querySelector('ul')
console.log(ul.nodeName)