import React from 'react';

import { 
    Container
} from './styles';

import { 
    TText 
} from 'types/Text';

import { 
    TChildren 
} from 'types/Children';

const Text: React.FC<TText & TChildren> = (props) => {
    return (
        <Container type={props.type}>
            {props.children}
        </Container>
    )
}

export default Text;