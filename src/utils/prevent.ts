const preventMinus = (event: any) => event.code === 'Minus' && event.preventDefault();

export { preventMinus };