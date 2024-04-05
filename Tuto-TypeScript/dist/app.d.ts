declare class Poisson {
    cri(): boolean;
}
declare class Chat {
    cri(): string;
}
type AnimalCri<T> = T extends {
    cri: () => infer U;
} ? U : never;
type A = AnimalCri<Chat>;
type B = AnimalCri<Poisson>;
