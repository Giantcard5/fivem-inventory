import React, { useState } from 'react';

import { 
    Container, 
    Navigator,
    Content,
    Section,
    Article,
    Block
} from './styles';

import Nav from 'components/UI/Nav';
import Text from 'components/UI/Text';
import Item from 'components/UI/Item';
import Grid from 'components/UI/Grid';
import Menu from 'components/UI/Menu';
import Input from 'components/UI/Input';
import Modal from 'components/UI/Modal';
import Search from 'components/UI/Search';
import Header from 'components/UI/Header';
import Progress from 'components/UI/Progress';

import { 
    useNuiEvent 
} from 'hooks/useNuiEvent';

import { 
    useModal 
} from 'hooks/useModal';

import { 
    useItem 
} from 'hooks/useItem';

import { 
    useMenu 
} from 'hooks/useMenu';

import { 
    TPlayer 
} from 'types/Player';

import { 
    TItem 
} from 'types/Item';

import { 
    preventMinus 
} from 'utils/prevent';

import { 
    fetchNui 
} from 'utils/fetchNui';

const Inventory: React.FC = () => {
    const [player, setPlayer] = useState<TPlayer>({} as TPlayer);

    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('');

    const [quantity, setQuantity] = useState<number>(0);

    // Providers
    const { 
        visible: modalVisible, 
        setVisible: setModalVisible,
        type: modalType
    } = useModal();

    const { 
        visible: menuVisible,
        position: menuPosition
    } = useMenu();
    
    const { 
        item 
    } = useItem();

    // Nui Events
    useNuiEvent<TPlayer>('getPlayer', setPlayer);

    // Functions
    const handleFilter = (value: string) => value !== filter ? setFilter(value) : setFilter('');

    return (
        <Container>
            <Content>
                <Header>
                    <Text type='subtitle'>Player</Text>
                    <Text type='title'>Inventory</Text>

                    <Search 
                        type='text' 
                        placeholder='Search by name' 
                        onChange={(event) => setSearch(event.target.value)}
                        value={search}
                    />
                </Header>

                <Section>
                    <Navigator>
                        <Block type='header'>
                            <Article>
                                <Nav onClick={() => handleFilter('Weapon')}>
                                    <Text type='navigator'>Weapons</Text>
                                </Nav>

                                <Nav onClick={() => handleFilter('Food')}>
                                    <Text type='navigator'>Foods</Text>
                                </Nav>

                                <Nav onClick={() => handleFilter('Other')}>
                                    <Text type='navigator'>Others</Text>
                                </Nav>
                            </Article>

                            <Block type='weight'>
                                <Text type='weight'>{player.weight?.value} / {player.weight?.maxValue} KG</Text>
                            </Block>
                        </Block>

                        <Progress value={player.weight?.value as number} max={player.weight?.maxValue as number}/>
                    </Navigator>

                    {player.inventory?.length ? (
                        <Grid>
                            {player.inventory.filter((value) => {
                                if (search === '') {
                                    if (filter === '') {
                                        return value;
                                    } else if (filter === value.type) {
                                        return value;
                                    };
                                } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                                    if (filter === '') {
                                        return value;
                                    } else if (filter === value.type) {
                                        return value;
                                    };
                                };

                                return false;
                            })
                            .sort(function (a, b) {
                                return a.name.length - b.name.length;
                            }).map((value, key) => (
                                <Item
                                    key={key}
                                    
                                    id={value.id}
                                    name={value.name} 
                                    description={value.description}
                                    type={value.type} 
                                    weight={value.weight}
                                    amount={value.amount}
                                />
                            ))}
                        </Grid>
                    ) : (
                        <Text type='items'>No results found.</Text>
                    )}
                </Section>
            </Content>

            {modalVisible && 
                <Modal
                    type='item'
                    title={modalType + ' ' + item.name}
                    subtitle={'Choose the quantity you want to ' + modalType}
                    handleAccept={() => {
                        if(quantity > 0 && quantity <= item.amount ) {
                            fetchNui<TItem>(modalType.toLowerCase() + 'Item', item);

                            setModalVisible(false);
                        };
                    }}
                    handleDecline={() => setModalVisible(false)}
                >
                    <Input
                        type='number'
                        placeholder='Choose the quantity . . .'
                        onKeyPress={preventMinus}
                        onChange={(event) => setQuantity(parseInt(event.target.value))}
                    />
                </Modal>
            }

            {menuVisible && 
                <Menu 
                    title={item.name} 
                    subtitle={item.description} 
                    x={menuPosition.x} 
                    y={menuPosition.y}
                />
            }
        </Container>
    )
}

export default Inventory;