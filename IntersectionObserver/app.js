const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    for (const entry of entries) {
        //console.log(entry.target, entry.isIntersecting)
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
             entry.target.animate([
                 {transform: 'translateX(-50px)', opacity: 0},
                 {transform: 'translateX(0px)', opacity: 1},
             ], {
                 duration: 500
             })
             observer.unobserve(entry.target)
        }
    }
}, {
    //rootMargin: '50px 50px 50px 50px'
    //threshold: .5
})

observer.observe(document.querySelector('.btn1'))
observer.observe(document.querySelector('.btn2'))
observer.disconnect() //unobserve global sur tous les elts préalablement observés