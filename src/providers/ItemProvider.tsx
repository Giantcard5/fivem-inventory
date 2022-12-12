import React, { useState, createContext } from 'react';

import { 
    TChildren 
} from 'types/Children';

import { 
    TItems 
} from 'types/Provider';

import { 
    TItem
} from 'types/Item';

export const ItemContext = createContext<TItems | {}>({} as TItem);

export const ItemProvider: React.FC<TChildren> = (props) => {
    const [item, setItem] = useState<TItem>({} as TItem);

    return (
        <ItemContext.Provider value={{ item, setItem }}>
            {props.children}
        </ItemContext.Provider>
    );
};