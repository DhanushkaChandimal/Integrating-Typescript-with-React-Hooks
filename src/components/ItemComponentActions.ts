import type { Item } from "./Item";

type ItemComponentActions =
    | { type: 'ADD_ITEM'; payload: Item }
    | { type: 'REMOVE_ITEM'; payload: number };

export type { ItemComponentActions };