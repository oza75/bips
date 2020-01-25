export interface TourItemOptions {
    selector?: string;
    x?: number;
    y?: number;
    title?: string;
    description: string;
    color?: string;
    position?: string;
}
export interface CallBack {
    (): void;
}
export interface CallBacks {
    close?: CallBack[];
    [key: string]: CallBack[] | undefined;
}
declare class Bip {
    private _options;
    private _element;
    private _info;
    private _pagination;
    private _callbacks;
    constructor(options: TourItemOptions);
    show(pagination?: HTMLElement): void;
    on(type: string, func: CallBack): this;
    exec(type: string): void;
    render(): this;
    hide(): void;
    hideInfo(): void;
    get element(): HTMLDivElement;
    get position(): string | undefined;
    get top(): number;
    get left(): number;
    get description(): string;
    get title(): string;
    get color(): string | undefined;
    buildHtml(): HTMLDivElement;
    private buildPulse;
    private buildInfo;
    close(e: MouseEvent): void;
}
export default Bip;
//# sourceMappingURL=Bip.d.ts.map