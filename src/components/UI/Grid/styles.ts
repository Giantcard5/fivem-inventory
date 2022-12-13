import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 6.17vmax)',
    
    rowGap: '.7vmax',

    maxHeight: '40.3vmax',

    overflow: 'hidden',
    overflowY: 'scroll',

    '&::-webkit-scrollbar': { 
        width: '0px',
        height: '0px',
    },

    '&::-webkit-scrollbar-track': { 
        background: 'none',
    },
})