import { Context, useContext } from 'react';

import { 
    VisibilityContext 
} from 'providers/VisibilityProvider';

import { 
    TVisibility 
} from 'types/Provider';

export const useVisibility = () => useContext<TVisibility>(VisibilityContext as Context<TVisibility>);