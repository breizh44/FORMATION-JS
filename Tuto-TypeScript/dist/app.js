"use strict";
class Poisson {
}
class Chat {
}
//Fonction avec une condition sur le type de retour
function generator(options) {
    if ("nager" in options) {
        return new Poisson();
    }
    else {
        return new Chat();
    }
}
const a = generator({ nager: 'aze' });
