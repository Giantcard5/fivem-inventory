export const formatter = (value: number | any) => {
    const formatter = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD'
    }).format(value);

    return formatter;
};