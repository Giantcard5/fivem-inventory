import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
    GlobalStyles 
} from 'styles/global';

import Inventory from 'pages/Inventory';

import { 
    VisibilityProvider 
} from 'providers/VisibilityProvider';

import { 
    ModalProvider 
} from 'providers/ModalProvider';

import { 
    ItemProvider 
} from 'providers/ItemProvider';

import { 
    MenuProvider 
} from 'providers/MenuProvider';

import { 
    debugData 
} from 'utils/debugData';

const root = ReactDOM.createRoot(document.getElementById('root')!);

debugData([
    {
        action: 'setVisible',
        data: true,
    },
]);

debugData([
    {
        action: 'getPlayer',
        data: {
            player: {
                name: 'Renato',
                lastName: 'Soares',
                age: '20'
            },
            weight: {
                value: 90,
                maxValue: 100,
            },
            inventory: [
                {
                    "id": 1,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 10,
                    "weight": 1
                },
                {
                    "id": 2,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 3,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 4,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 5,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 10,
                    "weight": 1
                },
                {
                    "id": 6,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 7,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 8,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 9,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 10,
                    "weight": 1
                },
                {
                    "id": 10,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 11,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 12,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 1,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 2,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 3,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 4,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 5,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 6,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 7,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 8,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 9,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 10,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 11,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 12,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 1,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 2,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 3,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 4,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 5,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 6,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 7,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 8,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 9,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 10,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 11,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 12,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 1,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 2,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 3,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 4,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 5,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 6,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 7,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 8,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 9,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 10,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 11,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 12,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 1,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 2,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 3,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 4,
                    "name": "Weapon",
                    "description": "Weapon Description",
                    "type": "Weapon",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 5,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 6,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 7,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 8,
                    "name": "Food",
                    "description": "Food Description",
                    "type": "Food",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 9,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 10,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 11,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
                {
                    "id": 12,
                    "name": "Other",
                    "description": "Other Description",
                    "type": "Other",
                    "amount": 1,
                    "weight": 1
                },
            ],
        },
    },
]);

root.render(      
    <React.StrictMode>
        <VisibilityProvider>
            <ModalProvider>
                <ItemProvider>
                    <MenuProvider>
                        {GlobalStyles()}
                        
                        <Inventory/>
                    </MenuProvider>
                </ItemProvider>
            </ModalProvider>
        </VisibilityProvider>
    </React.StrictMode>
);