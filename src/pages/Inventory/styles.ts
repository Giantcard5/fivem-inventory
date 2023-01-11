import { 
    styled 
} from '@stitches/react';

export const Container = styled('div',{
    display: 'flex',

    width: '100vw',
    height: '100vh',

    background: 'var(--background)',
});

export const Content = styled('main', {
    display: 'flex',
    flexDirection: 'column',

    width: '24vw',
    height: '100%',

    margin: '0vmax 0vmax 0vmax 2.4vmax',
    padding: '2vmax 0vmax',
});

export const Section = styled('section', {
    display: 'flex',
    flexDirection: 'column',
});

export const Navigator = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    margin: '0vmax 0vmax .4vmax 0vmax',
});

export const Block = styled('div', {
    display: 'flex',

    variants: {
        type: {
            header: {
                justifyContent: 'space-between',
            },
            weight: {
                alignItems: 'center',

                height: '1.38vmax',
            }
        }
    }
});

export const Article = styled('article', {
    display: 'flex',
    alignItems: 'center',

    height: '1.38vmax',
});