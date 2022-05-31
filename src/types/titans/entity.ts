import { Character } from "../characters/entity";

type Allegiance = 'marley' | 'eldia';

export type Titan = {
    id: number;
    name: string;
    other_names: string;
    abilities: string;
    allegiance: Allegiance;
    owner_id: number;
    owner: Character;
};
