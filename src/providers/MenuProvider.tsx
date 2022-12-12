import React, { useState, createContext } from 'react';

import { 
    TChildren 
} from 'types/Children';

import { 
    TMenus,
    TVisibility
} from 'types/Provider';

import { 
    TPosition 
} from 'types/Menu';

export const MenuContext = createContext<TMenus & TVisibility | {}>({} as TPosition);

export const MenuProvider: React.FC<TChildren> = (props) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [position, setPosition] = useState<TPosition>({} as TPosition);

    return (
        <MenuContext.Provider value={{ visible, setVisible, position, setPosition }}>
            {props.children}
        </MenuContext.Provider>
    );
};