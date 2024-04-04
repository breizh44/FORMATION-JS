"use strict";
const user2 = {
    firstname: 'John',
    lastname: 'Doe',
    age: 32
};
const user = { firstname: "John", lastname: "Doe" };
const compteur = document.querySelector('#compteur');
let i = 0;
/**
 * Fonction qui utilise un type générique qui doit étendre un type
 * qui doit posséder une clé "length" de type number
 * @param arg
 * @returns
 */
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const abb = consoleSize(['3', 2]);
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
function isDate(a) {
    return a instanceof Date;
}
/**
 *
 * @param arg argument qui peut être de n'importe quel type
 * @returns retourne un type indéterminé
 */
function identity(arg) {
    return arg;
}
const aa = identity(3);
const aa2 = identity(3);
function first(arg) {
    return arg[0];
}
const bb = first(["aze", "bze", "cze"]);
const cc = ["aze", "cze", 3];
