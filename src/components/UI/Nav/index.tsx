import React from 'react';

import { 
    Container
} from './styles';

import { 
    TNav
} from 'types/Nav';

import { 
    TChildren 
} from 'types/Children';

const Nav: React.FC<TNav & TChildren> = (props) => {
    return (
        <Container onClick={props.onClick}>
            {props.children}
        </Container>
    )
}

export default Nav;