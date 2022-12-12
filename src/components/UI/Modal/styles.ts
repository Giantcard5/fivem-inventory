import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    position: 'absolute',

    left: 0,
    top: 0,

    width: '100vw',
    height: '100vh',

    background: 'var(--background-modal)',
});

export const Buttons = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    margin: '2vmax 0vmax 0vmax 0vmax',
});

export const Block = styled('div', {
    display: 'flex',

    variants: {
        type: {
            text: {
                alignItems: 'center',
                flexDirection: 'column',
            },
            amount: {
                alignItems: 'center',

                width: '12%',
                
                margin: '1vmax 0vmax 0vmax 0vmax',
            },
        },
    },
});