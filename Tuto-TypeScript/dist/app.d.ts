declare class Poisson {
}
declare class Chat {
}
type AnimalOptions = {
    nager: any;
} | {
    sauter: any;
};
type AnimalFromOption<T> = T extends {
    nager: any;
} ? Poisson : Chat;
declare function generator<T extends AnimalOptions>(options: T): AnimalFromOption<T>;
declare const a: Poisson;
