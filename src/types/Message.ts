type NuiMessageData<T = unknown> = {
    action: string;
    data: T;
};

type NuiHandlerSignature<T> = (data: T) => void;

export { NuiMessageData, NuiHandlerSignature };