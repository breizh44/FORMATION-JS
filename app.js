
/**
 * Crée un élément HTML représentant un article
 * @param {{title: string, body: string}} post 
 * @return {HTMLElement}
 */
function createArticle(post) {
    const article = document.createElement('article')
    //ATTENTION : pas sécurisé car on injecte de l'HTML dans notre page
    // article.innerHTML = `
    //     <h2>${post.title}</h2>
    //     <p>${post.body}</p>
    // `

    //Version plus sécurisée
    article.append(createElementWithText('h2', post.title))
    article.append(createElementWithText('p', post.body))

    return article
}

/**
 * Crée un élément HTML avec son texte
 * @param {string} tagName 
 * @param {string} content 
 * @return {HTMLElement}
 */
function createElementWithText(tagName, content) {
    const el = document.createElement(tagName)
    el.innerText = content
    return el    
}


async function main() {
    const wrapper = document.querySelector('#lastPosts')
    const loader = document.createElement('p')
    loader.innerText = 'Chargement...'
    wrapper.append(loader)
    try {

        const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5',
            {
                headers: {
                    Accept: 'application/json'
                }
            })
        if (!r.ok) {
            throw new Error('Erreur serveur')
        }
        const posts = await r.json()
        loader.remove()
        for (let post of posts)
        {
            wrapper.append(createArticle(post))
        }
    } catch (e) {
        loader.innerText = 'Impossible de charger les articles'
        loader.style.color = 'red'
        return
    }
}

main()