import { Titan } from "../titans/entity";

export type Character = {
    id: number;
    first_name: string;
    last_name: string;
    species: string;
    age: number;
    height?: number;
    residence: string;
    status: string;
    alias?: string;
    error?: string;

    titan: Titan | null;
};
