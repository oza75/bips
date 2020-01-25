import Bip, {TourItemOptions} from "./Bip";


export interface TourOptions {
  nextText: string,
  prevText: string,
  color?: string
}

export interface TourEvent {
  (): void
}

export enum TourEvents {
  FINISH,
  NAVIGATE_PREV,
  NAVIGATE_NEXT
}

class Tour {
  private items: Bip[] = [];
  private _options: TourOptions = {nextText: "Next", prevText: "Previous"};
  private _current: number = 0;
  private _events: { [key: string]: TourEvent[] } = {};

  constructor(options?: TourOptions) {
    if (options) {
      this._options = Object.assign(this._options, options);
    }
  }

  private get body(): HTMLElement {
    let body: HTMLElement | null = document.querySelector('body');
    if (body) {
      return body;
    } else throw new Error("Page body is not found !");
  }

  /**
   * Add an event to execute later when a specific action is executed
   *
   * @param {TourEvents} event
   * @param {TourEvent} func
   */
  on(event: TourEvents | number, func: TourEvent): this {
    let e = this._events[event] || [];
    e.push(func);
    this._events[event] = e;

    return this;
  }

  /**
   * Executes the event stack corresponding to an action
   *
   * @param event
   * @return {void}
   */
  private exec(event: TourEvents): void {
    let e = this._events[event] || [];
    e.forEach(i => i());
  }

  /**
   *  Add a new Bip
   *
   * @param item
   */
  add(item: Bip | TourItemOptions): Tour {
    if (!(item instanceof Bip)) {
      if (this._options.color && !item.color)
        item.color = this._options.color;
      item = new Bip(item);
    }
    (item as Bip).on('close', this.finish.bind(this));
    this.items.push(item as Bip);
    if (this.body) {
      this.body.appendChild((item as Bip).element);
    }
    return this;
  }

  /**
   *  Get current Bip
   */
  get current(): Bip {
    return this.items[this._current];
  }

  /**
   * Show current Bip
   */
  play(): void {
    this.current.show(this.items.length > 1 ? this.buildPagination() : undefined);
  }


  private buildPagination(): HTMLElement {
    let pagn: HTMLElement = document.createElement('div');
    pagn.classList.add('bip-pagination');
    let p = document.createElement('div');
    p.innerText = (this._current + 1) + "/" + this.items.length;
    let btns = document.createElement('div');
    let nextButton = document.createElement('a');
    nextButton.classList.add('pagination-nav');
    if (this._current + 1 >= this.items.length) {
      nextButton.classList.add('disabled');
    } else {
      nextButton.addEventListener("click", this.next.bind(this));
    }
    nextButton.innerText = this._options.nextText;

    let prevButton = document.createElement('a');
    prevButton.classList.add('pagination-nav');
    if (this._current <= 0) prevButton.classList.add('disabled');
    else prevButton.addEventListener("click", this.prev.bind(this));
    prevButton.innerText = this._options.prevText;

    btns.appendChild(prevButton);
    btns.appendChild(nextButton);
    pagn.appendChild(p);
    pagn.appendChild(btns);
    return pagn;
  }

  private html(): HTMLUListElement {
    let container: HTMLUListElement = document.createElement('ul');
    container.classList.add('bip-tour-container');
    return container;
  }

  private next(e: MouseEvent) {
    if (this._current + 1 < this.items.length) {
      this.current.hideInfo();
      this._current = this._current + 1;
      this.play();
      this.exec(TourEvents.NAVIGATE_NEXT);
    }
  }

  private prev(e: MouseEvent) {
    if (this._current > 0) {
      this.current.hideInfo();
      this._current -= 1;
      this.play();
      this.exec(TourEvents.NAVIGATE_PREV);
    }
  }

  private finish() {
    this.items.forEach(item => this.body.removeChild(item.element));
    this.exec(TourEvents.FINISH);
  }

}

if (window) {
  (window as any).Tour = Tour;
  (window as any).TourEvents = TourEvents;
}
export default Tour;
