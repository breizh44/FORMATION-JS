type User = {firstname: string, lastname: string} //alias de type
type Id = string | number //Autre alias de type
type Identity<ArgType> = (arg: ArgType) => ArgType
type Username = User['firstname'] //le type Username ici sera string car firstname est de type string dans le type User
type Usernamekey = keyof User

const user2 = {
    firstname: 'John',
    lastname: 'Doe',
    age: 32
}

type UserT = typeof user2 //pour créer un type à la volée à partir de la definition d'un objet

const user : User = {firstname: "John", lastname: "Doe"}
const compteur = document.querySelector<HTMLButtonElement>('#compteur')
let i = 0;

/**
 * Fonction qui utilise un type générique qui doit étendre un type 
 * qui doit posséder une clé "length" de type number
 * @param arg 
 * @returns 
 */
function consoleSize<Type extends {length: number}>(arg: Type): Type {
    console.log(arg.length)
    return arg
}

const abb = consoleSize(['3', 2])

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if (span) {
        span.innerText = i.toString()
    }
}

compteur?.addEventListener('click', increment) 

function printId(id: string | number): void {
    if (typeof id === "number") {
        console.log((id * 3).toString())
    } else {
        console.log(id.toUpperCase())
    }
}

function isDate(a: any): a is Date {
    return a instanceof Date
}

/**
 * 
 * @param arg argument qui peut être de n'importe quel type
 * @returns retourne un type indéterminé
 */
function identity<ArgType>(arg: ArgType): ArgType {
    return arg;
}

const aa = identity<number>(3)
const aa2 = identity(3)

function first<Type>(arg: Type[]): Type {
    return arg[0]
}

const bb = first(["aze", "bze", "cze"])
const cc: Array<string | number> = ["aze", "cze", 3]