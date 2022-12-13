import { styled } from '@stitches/react';

export const Container = styled('img', {
    variants: {
        type: {
            upgrade: {
                width: '.8vmax',
                height: '.8vmax',
                
                filter: 'drop-shadow(0vmax 0vmax .4vmax rgba(235, 235, 235, 0.2))',
            },
            search: {
                width: '60%',
                height: '60%',
            },
            menu: {
                width: '.8vmax',
                height: '.8vmax',
                
                filter: 'drop-shadow(0vmax 0vmax .4vmax rgba(235, 235, 235, 0.4))',

                margin: '0vmax .4vmax 0vmax .2vmax',
            },
        },
    },
});