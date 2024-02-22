export type Comparator = (a: number, b: number) => number;

export function checksort(array: number[], comparator?: Comparator): boolean;
