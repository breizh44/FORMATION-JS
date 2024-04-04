"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Geometry2_origin;
function reverse(arr) {
    //return arr.reverse(); //pb ce code modifie le contenu du tableau ce qu'on ne veut pas
    return [...arr].reverse(); //on fait un reverse sur une copie du tableau
}
class A {
    constructor() {
        this.a = 3; //ne peut être accédée qu'à l'interieur de la classe
        this.b = 4; //idem que private sauf que les enfants (classe dérivée) peuvent y accéder
        this.c = 5; //accessible de partout (visibilité par défaut)
    }
}
const aInstance = new A();
class Collection {
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    first() {
        return this.items[0] || null;
    }
    isEqual(a) {
        return a.items === this.items;
    }
}
class subCollection extends Collection {
    constructor() {
        super(...arguments);
        this.a = 3;
    }
}
const maCollec = new Collection([1, 2]);
const maCollec2 = new Collection([1, 2]); //fonctionne également
const bFirst = maCollec2.first();
const maSubColl = new subCollection([2, 2]);
//maSubColl.isEqual(maCollec) //ne compile pas car subCollection possède un attribut a en plus par rapport à la classe Collection
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Geometry {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.surface = 0;
    }
}
function getX(p) {
    return p.x;
}
getX(new Geometry()); //fonctionne car la classe Geometry recouvre la classe Point en terme d'attributs
//Duck Typing : "si ça fait coincoin et que ça marche comme un canard, c'est un canard" ;-))
/**
 * Classe abstraite
 */
class AbstractGeometry {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Triangle extends AbstractGeometry {
    constructor() {
        super(...arguments);
        this.x = 2;
        this.y = 2;
    }
    surface() {
        return 3;
    }
}
class Geometry2 {
    constructor(x, y) {
    }
}
_a = Geometry2;
_Geometry2_origin = { value: void 0 };
(() => {
    __classPrivateFieldSet(_a, _a, { x: 0, y: 0 }, "f", _Geometry2_origin);
})();
class Triangle2 {
    constructor(x, y) {
    }
}
function shapeGenerator(shapeType, x, y) {
    return new shapeType(x, y).surface();
}
//shapeGenerator(Geometry2, 10, 20) //ne compile pas car Geometry2 ne possède pas de dméthode surface
shapeGenerator(Triangle, 10, 20);
