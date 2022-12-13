import { 
    TWeight 
} from 'types/Weight';

import { 
    TItem 
} from 'types/Item';

type TPlayer = {
    player?: {
        name: string,
        lastName: string,
        age: number,
    },
    weight?: TWeight,
    inventory?: TItem[],
};

export { TPlayer };