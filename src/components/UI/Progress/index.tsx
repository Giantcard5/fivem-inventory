import React from 'react';

import { 
    Container,
    Color
} from './styles';

interface IProgress {
    value: number;
    max: number;
}

const Progress: React.FC<IProgress> = (props) => {
    return (
        <Container>
            <Color style={{ width: (props.value / props.max) * 100 + '%' }}/>
        </Container>
    )
}

export default Progress;