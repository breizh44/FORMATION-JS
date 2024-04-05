export class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
        return this; //on retourne this pour pourvoir enchainer les méthodes
    }
}
import scrollTo from 'scroll-to';
//var scrollTo = require('scroll-to');
scrollTo(500, 1200, {
    ease: 'out-bounce',
    duration: 1500
});
