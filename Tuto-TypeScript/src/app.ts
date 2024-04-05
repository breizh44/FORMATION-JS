class Poisson {

}

class Chat {

}


//Fonction avec une condition sur le type de retour
function generator<T extends {nager: any} | {sauter: any}>(options: T): T extends {nager: any} ? Poisson : Chat {
    if ("nager" in options) {
        return new Poisson()
    } else {
        return new Chat()
    }
}


const a = generator({nager: 'aze'})