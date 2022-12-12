import { Context, useContext } from 'react';

import { 
    ItemContext 
} from 'providers/ItemProvider';

import { 
    TItems 
} from 'types/Provider';

export const useItem = () => useContext<TItems>(ItemContext as Context<TItems>);