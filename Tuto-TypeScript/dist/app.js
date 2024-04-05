"use strict";
/* class Poisson {
    cri() {
        return false
    }
}

class Chat {
    cri() {
        return 'miaou'
    }
}

type AnimalCri<T> = T extends {cri: () => infer U} ? U : never
type A = AnimalCri<Chat> //A sera de type string
type B = AnimalCri<Poisson> //B sera de type boolean */
class FeatureFlags {
    constructor() {
        this.env = 'hello';
    }
    darkMode() { return true; }
    privateMode() { return true; }
    nsfwMode() { return true; }
}
/* type AnimalOptions = {nager: any} | {sauter: any}
type AnimalFromOption<T> = T extends {nager: any} ? Poisson : Chat
//Fonction avec une condition sur le type de retour
function generator<T extends AnimalOptions>(options: T): AnimalFromOption<T> {
    if ("nager" in options) {
        return new Poisson()
    } else {
        return new Chat()
    }
}


const a = generator({nager: 'aze'}) */ 
