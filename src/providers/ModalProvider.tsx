import React, { useState, createContext } from 'react';

import { 
    TChildren 
} from 'types/Children';

import { 
    TTypes,
    TVisibility
} from 'types/Provider';

export const ModalContext = createContext<TVisibility & TTypes | null>(null);

export const ModalProvider: React.FC<TChildren> = (props) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [type, setType] = useState<string>('');

    return (
        <ModalContext.Provider value={{ visible, setVisible, type, setType }}>
            {props.children}
        </ModalContext.Provider>
    );
};