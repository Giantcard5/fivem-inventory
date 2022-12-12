import { styled } from '@stitches/react';

export const Container = styled('button', {
    display: 'flex',

    variants: {
        type: {
            image: {},
            item: {
                alignItems: 'center',
                justifyContent: 'center',
            
                width: '100%',
                height: '12%',
            
                backgroundColor: 'var(--green-darker)',
            
                borderRadius: '0.1vmax',
            
                boxShadow: '0vmax 0vmax 1vmax rgb(13, 232, 132, 0.1)',
            
                transition: 'all .2s',
            
                '&:hover': {
                    boxShadow: '0vmax 0vmax 1vmax rgb(13, 232, 132, 0.3)',
                },
            },
            slot: {
                alignItems: 'center',
                justifyContent: 'center',
            
                width: '100%',
                height: '12%',
            
                backgroundColor: 'var(--green-darker)',
            
                borderRadius: '.1vmax',
            },
            search: {
                alignItems: 'center',
                justifyContent: 'center',
            
                width: '10%',
                height: '100%',
            },
            modal: {
                alignItems: 'center',
                justifyContent: 'center',

                width: '4vmax',
                height: '2vmax',

                margin: '0vmax 2vmax',
            },
            weapon: {
                alignItems: 'center',
                justifyContent: 'center',

                width: '.8vmax',
                height: '.8vmax',
            },
            menu: {
                alignItems: 'center',

                width: '100%',
                height: '1.6vmax',

                margin: '0vmax 0vmax .1vmax 0vmax',

                border: '0.15vmax solid rgba(213, 213, 213, 0.1)',
                borderRadius: '.1vmax',

                boxShadow: '0vmax 0vmax 1vmax rgba(213, 213, 213, 0.05), inset 0vmax 0vmax 1vmax rgba(213, 213, 213, 0.05)',

                background: 'rgb(255, 255, 255, 0.05)',

                transition: 'all .2s',

                '&:hover': {
                    border: '0.15vmax solid rgb(213, 213, 213, 0.2)',
            
                    boxShadow: 'inset 0vmax 0vmax 2vmax rgba(213, 213, 213, 0.1)',
                }
            },
        },
    },
});