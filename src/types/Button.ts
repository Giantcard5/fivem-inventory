import { 
    DOMAttributes 
} from 'react';

type TType = {
    type: 
        'image' | 
        'item' | 
        'search' | 
        'slot' | 
        'modal' | 
        'weapon' | 
        'menu';
};

type TButton = DOMAttributes<HTMLButtonElement> & TType;

export { TType, TButton };