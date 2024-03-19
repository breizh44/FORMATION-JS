//1ere version qui gère les spoilers individuellement
/*
document.querySelectorAll('.spoiler').forEach(spoiler => {
    spoiler.addEventListener('click', e => {
        e.currentTarget.classList.remove('spoiler')
    })
})
*/

//2eme version qui gère tous les spoilers en même temps
const spoilers = document.querySelectorAll('.spoiler')

function revealSpoiler() {
    spoilers.forEach(spoiler => spoiler.classList.remove('spoiler'))
}

spoilers.forEach(spoiler => {
    spoiler.addEventListener('click',revealSpoiler)
})