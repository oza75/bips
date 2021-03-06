export interface TourItemOptions {
  selector?: string,
  x?: number,
  y?: number,
  title?: string,
  description: string,
  color?: string,
  position?: string
}

export interface CallBack {
  (): void;
}

export interface CallBacks {
  close?: CallBack[]

  [key: string]: CallBack[] | undefined;
}

class Bip {
  private _options!: TourItemOptions;
  private _element!: HTMLDivElement;
  private _info!: HTMLElement;
  private _pagination!: HTMLElement;
  private _callbacks: CallBacks = {};

  constructor(options: TourItemOptions) {
    this._options = options;
    this._element = this.buildHtml();
  }

  show(pagination?: HTMLElement) {
    this._element.classList.remove('hidden');
    if (this._pagination) this._info.removeChild(this._pagination);
    if (pagination) {
      this._pagination = pagination;
      this._info.appendChild(pagination);
    }
    this._info.classList.add('visible');
  }

  on(type: string, func: CallBack): this {
    let item = this._callbacks[type] || [];
    item.push(func);
    this._callbacks[type] = item;
    return this;
  }

  exec(type: string) {
    let funcs: CallBack[] = this._callbacks[type] || [];
    funcs.forEach(func => func());
  }

  render(): this {
    let body: HTMLElement | null = document.querySelector('body');
    if (body) {
      body.appendChild(this.element);
    }
    return this;
  }

  hide(): void {
    this._info.classList.remove('visible');
    this._element.classList.add('hidden');
  }

  hideInfo(): void {
    this._info.classList.remove('visible');
  }

  get element() {
    return this._element;
  }

  get position(): string | undefined {
    return this._options.position;
  }

  get top(): number {
    if (this._options.selector) {
      let selector: HTMLElement | null = document.querySelector(this._options.selector);
      if (!selector) throw new Error("Cannot find element " + this._options.selector);
      return selector.offsetTop;
    }
    if (this._options.y) return this._options.y;

    throw new Error("You must pass y position or a selector to tour item !");
  }

  get left(): number {
    if (this._options.selector) {
      let selector: HTMLElement | null = document.querySelector(this._options.selector);
      if (!selector) throw new Error("Cannot find element " + this._options.selector);
      return selector.offsetLeft;
    }
    if (this._options.x) return this._options.x;

    throw new Error("You must pass  x position or a selector to tour item !");
  }

  get description(): string {
    return this._options.description || '';
  }

  get title(): string {
    return this._options.title || '';
  }

  get color(): string | undefined {
    return this._options.color;
  }

  buildHtml(): HTMLDivElement {
    let div: HTMLDivElement = document.createElement('div');
    div.classList.add('tour-item');
    div.style.left = this.left + "px";
    div.style.top = this.top + "px";
    div.appendChild(this.buildPulse());
    this._info = this.buildInfo();
    div.appendChild(this._info);
    if (this.position) {
      div.classList.add('position-' + this.position);
    } else {
      let body = document.querySelector('body') as HTMLElement;
      body.appendChild(div);
      let width: number = this._info.offsetWidth;
      let height: number = this._info.offsetHeight;
      body.removeChild(div);
      if (this.left - (width / 2) < 0) {
        div.classList.add('position-right');
      } else if (this.left + (width / 2) >= window.innerWidth) {
        div.classList.add('position-left');
      } else if (this.top + height >= window.innerHeight) {
        div.classList.add('position-top');
      }
    }
    return div;
  }

  private buildPulse(): HTMLDivElement {
    let pulse: HTMLDivElement = document.createElement('div');
    let ringing: HTMLDivElement = document.createElement('div');
    let ringing1: HTMLDivElement = document.createElement('div');
    let dot: HTMLDivElement = document.createElement('div');
    pulse.classList.add('pulse-container');
    dot.classList.add('dot');
    ringing.classList.add('ringing');
    ringing1.classList.add('ringing', 'ringing-1');
    if (this.color) {
      dot.style.backgroundColor = this.color;
      ringing.style.borderColor = this.color;
      ringing1.style.borderColor = this.color;
    }
    pulse.appendChild(dot);
    pulse.appendChild(ringing);
    pulse.appendChild(ringing1);
    return pulse;
  }

  private buildInfo(): HTMLDivElement {
    let info: HTMLDivElement = document.createElement('div');
    let title: HTMLElement = document.createElement('h2');
    let p: HTMLParagraphElement = document.createElement('p');
    let closeButton: HTMLElement = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<path d=\"M13.41 12L17.71 7.71C17.8983 7.52169 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.4783 17.71 6.29C17.5217 6.10169 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.10169 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.10169 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.10169 6.29 6.29C6.1017 6.4783 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.52169 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z\" fill=\"black\"/>\n" +
      "</svg>\n";
    closeButton.addEventListener('click', this.close.bind(this));
    p.classList.add('info-description');
    p.innerHTML = this.description;
    info.style.borderColor = this.color || 'current';
    title.classList.add('info-title');
    title.innerText = this.title;
    info.classList.add('bip-info');
    info.appendChild(title);
    info.appendChild(p);
    info.appendChild(closeButton);
    return info;
  }

  close(e: MouseEvent) {
    e.preventDefault();
    this.hide();
    this.exec('close');
  }
}

if (window) {
  (window as any).TourItem = Bip;
}
export default Bip;
