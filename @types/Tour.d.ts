import Bip, { TourItemOptions } from "./Bip";
export interface TourOptions {
    nextText: string;
    prevText: string;
    color?: string;
}
export interface TourEvent {
    (): void;
}
export declare enum TourEvents {
    FINISH = 0,
    NAVIGATE_PREV = 1,
    NAVIGATE_NEXT = 2
}
declare class Tour {
    private items;
    private _options;
    private _current;
    private _events;
    constructor(options?: TourOptions);
    private get body();
    /**
     * Add an event to execute later when a specific action is executed
     *
     * @param {TourEvents} event
     * @param {TourEvent} func
     */
    on(event: TourEvents | number, func: TourEvent): this;
    /**
     * Executes the event stack corresponding to an action
     *
     * @param event
     * @return {void}
     */
    private exec;
    /**
     *  Add a new Bip
     *
     * @param item
     */
    add(item: Bip | TourItemOptions): Tour;
    /**
     *  Get current Bip
     */
    get current(): Bip;
    /**
     * Show current Bip
     */
    play(): void;
    private buildPagination;
    private html;
    private next;
    private prev;
    private finish;
}
export default Tour;
//# sourceMappingURL=Tour.d.ts.map