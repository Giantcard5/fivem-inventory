import { 
    TPosition 
} from 'types/Menu';

import { 
    TItem 
} from 'types/Item';

type TVisibility = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
};

type TItems = {
    item: TItem,
    setItem: (TItem: Object) => void,
}

type TMenus = {
    position: TPosition;
    setPosition: (TPosition: Object) => void;
};

type TTypes = {
    type: string;
    setType: (type: string) => void;
};

export { TVisibility, TMenus, TItems, TTypes };