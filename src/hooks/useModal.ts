import { Context, useContext } from 'react';

import { 
    ModalContext 
} from 'providers/ModalProvider';

import { 
    TTypes,
    TVisibility 
} from 'types/Provider';

export const useModal = () => useContext<TVisibility & TTypes>(ModalContext as Context<TVisibility & TTypes>);