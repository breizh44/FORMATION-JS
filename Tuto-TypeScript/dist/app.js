"use strict";
// function reverse<T>(arr: readonly T[]): T[] {
//     //return arr.reverse(); //pb ce code modifie le contenu du tableau ce qu'on ne veut pas
//     return [...arr].reverse(); //on fait un reverse sur une copie du tableau
// }
// class A {
//     private a = 3 //ne peut être accédée qu'à l'interieur de la classe
//     protected b = 4 //idem que private sauf que les enfants (classe dérivée) peuvent y accéder
//     public c = 5 //accessible de partout (visibilité par défaut)
// }
// const aInstance = new A();
// class Collection<T> {
//     constructor(private items: T[]) {
//     }
//     add(item: T): this {
//         this.items.push(item)
//         return this
//     }
//     first(): T | null {
//         return this.items[0] || null
//     }
//     isEqual(a: this) { //ici on attend en paramètre qq chose qui est de la même forme que la classe courante
//         return a.items === this.items
//     }
// }
// class subCollection<T> extends Collection<T> {
//     a = 3
// }
// const maCollec = new Collection<number>([1, 2])
// const maCollec2 = new Collection([1, 2]) //fonctionne également
// const bFirst = maCollec2.first()
// const maSubColl = new subCollection([2,2])
// //maSubColl.isEqual(maCollec) //ne compile pas car subCollection possède un attribut a en plus par rapport à la classe Collection
// class Point {
//     x = 0
//     y = 0
// }
// class Geometry {
//     x = 0 
//     y = 0
//     surface = 0
// }
// function getX(p: Point) {
//     return p.x
// }
// getX(new Geometry());  //fonctionne car la classe Geometry recouvre la classe Point en terme d'attributs
//                        //Duck Typing : "si ça fait coincoin et que ça marche comme un canard, c'est un canard" ;-))
// /**
//  * Classe abstraite
//  */
// abstract class AbstractGeometry {
//     x = 0 
//     y = 0
//     abstract surface() : number //méthode abstraite
// }  
// class Triangle extends AbstractGeometry {
//     x = 2
//     y = 2
//     surface() {
//         return 3
//     }    
// }
// class Geometry2 {
//     static #origin: {x:number, y: number}
//     static {
//         Geometry2.#origin = {x:0, y:0}
//     }
//     constructor(x: number, y: number) {
//     }
// }
// class Triangle2 {
//     constructor(x: number, y: number) {
//     }    
// }
// type InstantiableShape = {
//     //new(x: number, y: number): any
//     new(x: number, y: number): { //le type InstantiableShape possède une méthode new qui prend en entrée les paramètres x et y
//                                 //et retourne un objet qui possède une fonction surface qui retourne un nombre
//         surface: () => number
//     }
// }
// function shapeGenerator(shapeType: InstantiableShape, x: number, y: number) {
//     return new shapeType(x, y).surface()
// }
// //shapeGenerator(Geometry2, 10, 20) //ne compile pas car Geometry2 ne possède pas de dméthode surface
// shapeGenerator(Triangle, 10, 20)
// interface Point2D {
//     x: number;
//     y: number;
// }
// class TwoDimensionPoint implements Point2D {
//     x = 0;
//     y = 0;
// }
// function draw(p: Point2D) {
// }
// draw(new TwoDimensionPoint())
const a = [1, 2, 3]; //tableau const => ne peut être modifié
const a1 = ['tomate', 2]; //tuple constitué d'un string et d'un nombre. On ne peut pas ajouter d'element à a1
const b = ['tomate', 2]; //tableau qui peut contenir des string ou des nombres
const b1 = ['banane', 3];
function merge(a, b) {
    return [...a, ...b];
}
const c = merge(a1, b1); //c: [string, number, string, number]
const d = merge(a1, [1, 2, 3]); //d: [string, number, ...number[]]
const e = [];
console.log(a1[0].toUpperCase());
//console.log(e[0].toUpperCase())  //ne compile pas si ajout de "noUncheckedIndexedAccess": true dans compilerOptions de tsconfig.json
var STEPS;
(function (STEPS) {
    STEPS[STEPS["Intro"] = 0] = "Intro";
    STEPS[STEPS["Selection"] = 1] = "Selection";
    STEPS[STEPS["Panier"] = 2] = "Panier";
    STEPS[STEPS["Paiement"] = 3] = "Paiement";
})(STEPS || (STEPS = {}));
const step = STEPS.Selection;
if (step === STEPS.Selection) {
    console.log(STEPS[step]);
}
