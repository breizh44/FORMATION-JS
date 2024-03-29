
export async function fetchJSON(url, options = {}) {
    const headers = {Accept: 'application/json', ...options.headers}
    const r = await fetch(url, {...options, headers})

    if (r.ok) {
        console.log('retour fetchJSON OK')
        return r.json()
    }
    throw new Error('Erreur serveur', {cause: r})
}

