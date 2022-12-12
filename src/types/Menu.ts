type TPosition = {
    x: number;
    y: number;
};

type TMenu = {
    title: string;
    subtitle?: string;
} & TPosition;

export { TPosition, TMenu };