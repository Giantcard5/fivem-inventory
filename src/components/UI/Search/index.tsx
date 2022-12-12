import React from 'react';

import { 
    Container,
    Input
} from './styles';

import Button from 'components/UI/Button';
import Image from 'components/UI/Image';

import SearchSVG from 'assets/icons/search.svg';

import { 
    TInput
} from 'types/Input';

const Search: React.FC<TInput> = ({...rest}) => {
    return (
        <Container>
            <Input {...rest}/>
            
            <Button type='search'>
                <Image 
                    type='search' 
                    src={SearchSVG}
                    alt='Search'
                />
            </Button>
        </Container>
    )
}

export default Search;