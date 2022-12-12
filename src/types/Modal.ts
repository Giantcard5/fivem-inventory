type TModal = {
    type: 'item' | 'text';
    title: string;
    subtitle: string;
    handleAccept?: () => void;
    handleDecline?: () => void;
};

export { TModal };