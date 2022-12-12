import React, { memo } from 'react';

import { 
    Container,
    Image,
    Block
} from './styles';

import Text from 'components/UI/Text';
import Upgrade from 'components/UI/Image';
import Button from 'components/UI/Button';

import UpgradeSVG from 'assets/icons/upgrade.svg'

import { 
    TItem 
} from 'types/Item';

import { 
    TPosition 
} from 'types/Menu';

import { 
    useModal 
} from 'hooks/useModal';

import { 
    useItem 
} from 'hooks/useItem';

import { 
    useMenu 
} from 'hooks/useMenu';

const Item: React.FC<TItem> = (props) => {
    const { 
        setVisible: setModalVisible,
        setType: setModalType
    } = useModal();

    const { setItem } = useItem()

    const { 
        setVisible: setMenuVisible, 
        setPosition: setMenuPotision 
    } = useMenu();

    const openContextMenu = (event: React.MouseEvent, position: TPosition) => {
        event.preventDefault();
        
        setMenuPotision({ x: position.x, y: position.y });
        setMenuVisible(true);
    }

    return (
        <Container 
            key={props.id}
            onContextMenu={(event) => {
                setItem(props);

                openContextMenu(event, { x: event.pageX, y: event.pageY });
            }}
        >
            <Image>
                <Block type='header'>
                    {props.weight && <Text type='itemWeight'>{props.weight} KG</Text>}
                    {props.amount && <Text type='amount'>{props.amount}X</Text>}
                </Block>
                
                
                <Block type='footer'>
                    {props.type === 'Weapon' && 
                        <Button type='weapon'>
                            <Upgrade type='upgrade' src={UpgradeSVG} alt='Upgrade'/>
                        </Button>
                    }
                </Block>
            </Image>

            <Block type='name'>
                <Text type='item'>{props.name}</Text>
            </Block>

            <Button 
                type='item'
                onClick={() => { 
                    if (props.amount <= 1) {
                        console.log(props)
                    } else {
                        setItem(props);

                        setModalType('Use');
                        setModalVisible(true);
                    }
                }}
            >
                <Text type='button'>Use</Text>
            </Button>
        </Container>
    )
}

export default memo(Item);