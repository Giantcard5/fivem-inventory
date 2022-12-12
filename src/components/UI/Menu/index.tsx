import React, { useRef, useEffect } from 'react';

import { 
    Container,
    Block
} from './styles';

import Button from 'components/UI/Button';
import Image from 'components/UI/Image';
import Text from 'components/UI/Text';

import { 
    TMenu 
} from 'types/Menu';

import { 
    useModal 
} from 'hooks/useModal';

import { 
    useMenu 
} from 'hooks/useMenu';

import { 
    useItem 
} from 'hooks/useItem';

const Menu: React.FC<TMenu> = (props)=> {
    const { 
        setVisible: setModalVisible,
        setType: setModalType
    } = useModal();

    const { 
        setVisible: setMenuVisible
    } = useMenu();

    const { 
        item 
    } = useItem();

    const handleItemClick = (type: string) => {
        setMenuVisible(false);

        if (item.amount > 1) {
            setModalType(type);
            setModalVisible(true);
        } else {
            // Fetch NUI Item
            console.log(item)
        }
    };

    const MenuRef = useRef<HTMLElement>(null!);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (MenuRef.current && !MenuRef.current.contains(event.target as Node)) {
                setMenuVisible(false);
            };
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return (
        <Container 
            ref={MenuRef as any}
            style={{ 
                top: props.y + 15, 
                left: props.x + 15, 
            }}
        >
            <Block type='header'>
                <Text type='menuTitle'>{props.title}</Text>
                <Text type='menuSubtitle'>{props.subtitle}</Text>
            </Block>

            <Block type='buttons'>
                <Button type='menu' onClick={() => handleItemClick('Send')}>
                    <Image type='menu' src='' alt=''/>

                    <Text type='menu'>Send</Text>
                </Button>
                <Button type='menu' onClick={() => handleItemClick('Drop')}>
                    <Image type='menu' src='' alt=''/>

                    <Text type='menu'>Drop</Text>
                </Button>
                <Button type='menu' onClick={() => handleItemClick('Delete')}>
                    <Image type='menu' src='' alt=''/>

                    <Text type='menu'>Delete</Text>
                </Button>
            </Block>
        </Container>
    )
}

export default Menu;