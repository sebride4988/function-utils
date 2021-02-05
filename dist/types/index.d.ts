declare function lowerCase(a: string): string;

declare function toLength(a: string): number;

declare function upperCase(a: string): string;

declare const mapper_lowerCase: typeof lowerCase;
declare const mapper_toLength: typeof toLength;
declare const mapper_upperCase: typeof upperCase;
declare namespace mapper {
  export {
    mapper_lowerCase as lowerCase,
    mapper_toLength as toLength,
    mapper_upperCase as upperCase,
  };
}

declare function helloWorld(): string;
declare const _default: {
    helloWorld: typeof helloWorld;
    mapper: typeof mapper;
};

export default _default;
