declare class Poisson {
}
declare class Chat {
}
declare function generator<T extends {
    nager: any;
} | {
    sauter: any;
}>(options: T): T extends {
    nager: any;
} ? Poisson : Chat;
declare const a: Poisson;
