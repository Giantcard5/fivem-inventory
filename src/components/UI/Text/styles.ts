import { styled } from '@stitches/react';

export const Container = styled('span', {
    display: 'flex',
    
    variants: {
        type: {
            title: {
                margin: '0vmax 0vmax 0vmax -0.2vmax',

                fontSize: '3.88vmax',
                fontWeight: '700',

                textTransform: 'uppercase',

                color: 'var(--green)',

                filter: 'drop-shadow(0vmax 0vmax .6vmax rgb(13, 232, 132, 0.2))',
            },
            subtitle: {
                margin: '0vmax 0vmax -0.6vmax 0vmax',
                
                fontSize: '1.5vmax',
                fontWeight: '400',

                textTransform: 'uppercase',

                color: 'var(--white)',

                filter: 'drop-shadow(0vmax 0vmax .4vmax rgba(235, 235, 235, 0.4))',
            },
            amount: {                
                fontSize: '.5vmax',
                fontWeight: '600',

                textTransform: 'uppercase',

                color: 'var(--white)',

                filter: 'drop-shadow(0vmax 0vmax .2vmax rgba(235, 235, 235, 0.4))',
            },
            itemWeight: {  
                fontSize: '.5vmax',
                fontWeight: '600',

                textTransform: 'uppercase',

                color: 'var(--white)',

                filter: 'drop-shadow(0vmax 0vmax .2vmax rgba(235, 235, 235, 0.4))',
            },
            weight: {
                margin: '0vmax .4vmax 0vmax 0vmax',
                
                fontSize: '.6vmax',
                fontWeight: '600',

                textTransform: 'uppercase',

                filter: 'drop-shadow(0vmax 0vmax .4vmax rgba(235, 235, 235, 0.2))',
            },
            item: {
                padding: '.2vmax 0vmax',

                fontSize: '.6vmax',
                fontWeight: '600',

                textAlign: 'center',
                textTransform: 'uppercase',

                overflow: 'hidden',

                whiteSpace: 'nowrap',

                color: 'var(--green)',

                filter: 'drop-shadow(0vmax 0vmax .6vmax rgb(13, 232, 132, 0.4))',
            },
            items: {
                fontSize: '.6vmax',
                fontWeight: '600',

                textAlign: 'center',
                textTransform: 'uppercase',

                color: 'var(--white)',

                filter: 'drop-shadow(0vmax 0vmax .4vmax rgba(235, 235, 235, 0.2))',
            },
            button: {
                fontSize: '.6vmax',
                fontWeight: '600',

                textAlign: 'center',
                textTransform: 'uppercase',

                color: 'var(--white)',
            },
            navigator: {
                margin: '0vmax .4vmax 0vmax 0vmax',
                
                fontSize: '.6vmax',
                fontWeight: '600',

                textTransform: 'uppercase',

                cursor: 'pointer',

                filter: 'drop-shadow(0vmax 0vmax .4vmax rgba(235, 235, 235, 0.2))',
                
                transition: 'all .2s',

                '&:hover': {
                    filter: 'drop-shadow(0vmax 0vmax .4vmax rgba(235, 235, 235, 0.3))',
                }
            },
            send: {
                fontSize: '.8vmax',
                fontWeight: '600',

                textAlign: 'center',
                textTransform: 'uppercase',

                color: 'var(--white)',
            },
            modalTitle: {
                fontSize: '1.8vmax',
                fontWeight: '600',

                textAlign: 'center',
                textTransform: 'uppercase',

                color: 'var(--green)',

                filter: 'drop-shadow(0vmax 0vmax .5vmax rgb(13, 232, 132, 0.4))',
            },
            modalSubtitle: {
                padding: '.2vmax',
                
                fontSize: '.8vmax',
                fontWeight: '600',

                textTransform: 'uppercase',

                color: 'var(--white)',

                filter: 'drop-shadow(0vmax 0vmax .2vmax rgba(235, 235, 235, 0.5))',
            },
            modalButtons: {
                fontSize: '.8vmax',
                fontWeight: '600',

                textTransform: 'uppercase',

                color: 'var(--white)',

                filter: 'drop-shadow(0vmax 0vmax .2vmax rgba(235, 235, 235, 0.4))',

                transition: 'all .2s',
            
                '&:hover': {
                    filter: 'drop-shadow(0vmax 0vmax .4vmax rgba(235, 235, 235, 0.5))',
                },
            },
            menu: {
                padding: '.2vmax 0vmax',

                fontSize: '.6vmax',
                fontWeight: '600',

                textAlign: 'center',
                textTransform: 'uppercase',

                overflow: 'hidden',

                whiteSpace: 'nowrap',

                color: 'var(--green)',

                filter: 'drop-shadow(0vmax 0vmax .6vmax rgb(13, 232, 132, 0.4))',
            },
            menuTitle: {
                fontSize: '.6vmax',
                fontWeight: '600',

                textAlign: 'center',
                textTransform: 'uppercase',

                color: 'var(--green)',

                filter: 'drop-shadow(0vmax 0vmax .5vmax rgb(13, 232, 132, 0.4))',
            },
            menuSubtitle: {                
                fontSize: '.4vmax',
                fontWeight: '600',

                textTransform: 'uppercase',

                color: 'var(--white)',

                filter: 'drop-shadow(0vmax 0vmax .2vmax rgba(235, 235, 235, 0.5))',
            },
        },
    },
});