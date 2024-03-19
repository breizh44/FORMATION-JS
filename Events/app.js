document.querySelector('form').addEventListener('submit', (e) => {
   console.log(e) 
   //e.preventDefault()
   const form = e.currentTarget
   const data = new FormData(form)
   const firstname = data.get('firstname')
   if (firstname.length < 2) {
    console.log('invalide')
    e.preventDefault() //on empêche le formulaire d'être soumis tant que les données ne sont pas valides
   }
})

//exemple d'evt qui détecte que le champ a changé
document.querySelector('input').addEventListener('change', (e) => {
    console.log('change')
 })

 document.querySelector('input').addEventListener('input', (e) => {
    console.log('input', e.currentTarget.value)
 })

 //si CRT+K pressé sur la page
 document.addEventListener('keydown', (e) => {
    if (e.ctrlKey === true && e.key === 'k')
    {
        e.preventDefault()
        console.log('raccourci')
    }
 })

 document.querySelector('input').addEventListener('focus', (e) => {
    console.log(e)
 })

 const check = document.querySelector('input[type="checkbox"]')
 console.log(check)
 document.querySelector('#chk').addEventListener('change', (e) => {
    console.log(e.currentTarget.checked)
 }) 

document.querySelector('select')
 .addEventListener('change', (e) => {
    console.log(
        Array.from(e.currentTarget.selectedOptions)
            .map(option => option.value)
    )
 })
