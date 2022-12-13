import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'flex',

    flexDirection: 'column',

    position: 'absolute',

    width: '7.7vmax',

    zIndex: 20,
});

export const Block = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    variants: {
        type: {
            header: {
                width: '100%',
                height: '2.4vmax',

                margin: '0vmax 0vmax .1vmax 0vmax',
                padding: '.2vmax',

                border: '0.15vmax solid rgba(213, 213, 213, 0.1)',
                borderRadius: '.1vmax',

                boxShadow: '0vmax 0vmax 1vmax rgba(213, 213, 213, 0.05), inset 0vmax 0vmax 2vmax rgba(213, 213, 213, 0.05)',

                background: 'var(--background)',
            },
            buttons: {},
        },
    },
});