/**
 * 
 * @param {string} name 
 * @return {string|null}
 */
function getCookie(name) {
    const cookies = document.cookie.split('; ')
    const value = cookies.find(c => c.startsWith(name))?.split('=')[1]
    console.log(value)
    if (value === undefined) {
        return null
    }
    return decodeURIComponent(value)
}

/**
 * 
 * @param {string} name 
 * @param {string} value 
 * @param {number} days 
 */
function setCookie(name, value, days) {
    const date = new Date()
    date.setDate(date.getDate() + days)
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()};`
}

setCookie('hello', 'Bonjour les gens', 2)
console.log(getCookie('hello'))
console.log(getCookie('clé'))

fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
    credentials: 'include'
})