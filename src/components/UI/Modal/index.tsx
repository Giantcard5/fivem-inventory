import React from 'react';

import { 
    Container,
    Buttons,
    Block
} from './styles';

import Text from 'components/UI/Text';
import Button from 'components/UI/Button';

import { 
    TModal 
} from 'types/Modal';

import { 
    TChildren 
} from 'types/Children';

const Modal: React.FC<TModal & TChildren> = (props)=> {
    return (
        <Container>
            <Block type='text'>
                <Text type='modalTitle'>{props.title}</Text>
                <Text type='modalSubtitle'>{props.subtitle}</Text>
            </Block>
            
            {props.type === 'item' &&
                <Block type='amount'>
                    {props.children}
                </Block>
            }

            <Buttons>
                <Button type='modal' onClick={props.handleAccept}>
                    <Text type='modalButtons'>Accept</Text>
                </Button>

                <Button type='modal' onClick={props.handleDecline}>
                    <Text type='modalButtons'>Decline</Text>
                </Button>
            </Buttons>
        </Container>
    )
}

export default Modal;