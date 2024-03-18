export default function() {
    console.log('hello')
}

/**
 * Permet de savoir si l'utilisateur est majeur
 * @param {number} age 
 * @returns {boolean}
 */
function isMajeur(age) {
    return age >= 18
}

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title titre de l'article
 * @property {string} body
 */

/**
 * @returns {{id: number, title: string, body: string}}
 */
function fetchPost() {

}

/**
 * @returns {Promise<Post[]>}
 */
async function fetchPosts() {

}

const a = isMajeur(16)

const b= fetchPost()

const c = fetchPosts().then((posts) => {
    const post = posts[0]
})


class A {
    constructor() {
        /**
         * Prénom de l'utilisateur
         * @type {string[]}
         */
        this.firstname = []
    }
}

const z = new A();


