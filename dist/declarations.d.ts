interface Ethereum {
    send: unknown;
    enable: () => Promise<string[]>;
    on?: (method: string, listener: (...args: any[]) => void) => void;
    removeListener?: (method: string, listener: (...args: any[]) => void) => void;
}
interface KuCoin {
    provider: Ethereum;
}
declare interface Window {
    kucoin: KuCoin;
}
declare const __DEV__: boolean;
