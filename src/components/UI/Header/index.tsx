import React from 'react';

import { 
    Container 
} from './styles';

import { 
    TChildren 
} from 'types/Children';

const Header: React.FC<TChildren> = (props)=> {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Header;