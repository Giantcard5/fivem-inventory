import React from 'react';

import { 
    Container,
    Content
} from './styles';

import { 
    TInput
} from 'types/Input';

const Input: React.FC<TInput> = ({...rest}) => {
    return (
        <Container>
            <Content {...rest}/>
        </Container>
    )
}

export default Input;