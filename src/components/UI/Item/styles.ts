import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    width: '5.5vmax',
    height: '7.7vmax',
});

export const Button = styled('button', {
    display: 'flex',
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
});

export const Image = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    width: '100%',
    height: '75%',

    border: '0.15vmax solid rgba(213, 213, 213, 0.1)',
    borderRadius: '0.1vmax',

    boxShadow: 'inset 0vmax 0vmax 2vmax rgba(213, 213, 213, 0.05)',

    transition: 'all .2s',

    '&:hover': {
        border: '0.15vmax solid rgb(213, 213, 213, 0.2)',

        boxShadow: 'inset 0vmax 0vmax 2vmax rgba(213, 213, 213, 0.1)',
    }
});

export const Block = styled('div', {
    display: 'flex',

    variants: {
        type: {
            header: {
                justifyContent: 'space-between',

                padding: '.2vmax',
            },
            footer: {
                padding: '.1vmax',
            },
            name: {
                alignItems: 'center',
                justifyContent: 'center',
            
                margin: '.1vmax 0vmax',
            
                width: '100%',
                height: '1.15vmax',
            
                background: 'rgba(213,213,213,0.01)',
            
                border: '.1vmax solid rgba(213,213,213,0.02)',
                borderRadius: '0.1vmax',
            }
        }
    }
})