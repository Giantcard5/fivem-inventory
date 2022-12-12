import React from 'react';

import { 
    Container 
} from './styles';

import { 
    TButton
} from 'types/Button';

import { 
    TChildren 
} from 'types/Children';

const Button: React.FC<TButton & TChildren> = (props)=> {
    return (
        <Container {...props}/>
    )
}

export default Button;