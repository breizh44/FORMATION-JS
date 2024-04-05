declare class FeatureFlags {
    env: string;
    darkMode(): boolean;
    privateMode(): boolean;
    nsfwMode(): boolean;
}
type optionsFlag<T> = {
    +readonly [key in keyof T as `get${string & key}`]: T[key] extends () => boolean ? boolean : never;
};
type A = optionsFlag<FeatureFlags>;
