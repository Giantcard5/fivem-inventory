import { Context, useContext } from 'react';

import { 
    MenuContext 
} from 'providers/MenuProvider';

import { 
    TMenus,
    TVisibility
} from 'types/Provider';

export const useMenu = () => useContext<TMenus & TVisibility>(MenuContext as Context<TMenus & TVisibility>);