class Bip {
    _x;
    _y;
    _color = "blue";
    _message = {};
    _message_id;
    elems = {};

    constructor(x, y, color, message) {
        this._x = x;
        this._y = y;
        this._color = color;
        this._message = message;
    }

    set color(color) {
        this._color = color;
    }

    static byId(id, color, message) {
        let elem = document.getElementById(id);
        if (!elem) throw new Error(`No element found for id : ${id}`)
        let top = elem.offsetTop;
        let left = elem.offsetLeft;

        return new Bip(left, top, color, message);
    }

    static selector(selector) {
        let elems = [].slice.call(document.querySelectorAll(selector));
        let result = []

        elems.forEach(function (elem) {
            let x = elem.offsetLeft;
            let y = elem.offsetTop;
            console.log(x, y);
            result.push(new Bip(x, y))
        })

        return result;
    }

    show() {
        if (this.elems.wrapper) {
            this.elems.wrapper.style.display = 'block';
            return;
        }

        let body = document.getElementsByTagName("body")[0];
        body.appendChild(this.html())
    }

    get top() {
        return this._y + 'px';
    }

    get left() {
        return this._x + 'px';
    }

    html() {
        let wrapper = document.createElement('div');
        wrapper.classList.add('bip-wrapper')
        wrapper.style.position = 'fixed';
        let bip = document.createElement('div');
        bip.classList.add('bip');
        let ringing = document.createElement('div');
        ringing.classList.add('ringing');
        ringing.style.borderColor = this._color;
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.backgroundColor = this._color;

        dot.addEventListener('mouseover', (e) => {
            this.showMessageIfExist(e);
        })

        dot.addEventListener('mouseleave', (e) => {
            this.hideMessageIfExist(e);
        })

        bip.appendChild(ringing);
        bip.appendChild(dot);
        wrapper.appendChild(bip);

        wrapper.style.top = this._y + wrapper.scrollHeight - 30 + "px";
        wrapper.style.left = this._x + wrapper.scrollWidth - 30 + "px";

        this.elems.wrapper = wrapper;
        this.elems.dot = dot;
        this.elems.ringing = ringing;

        return wrapper;
    }

    showMessageIfExist(event) {
        if (!this._message) return;
        this._message_id = (new Date()).getMilliseconds()
        let target = event.target;
        let parent = target.parentNode;
        let messageElem = document.createElement('div')
        messageElem.setAttribute('id', 'bip-message-' + this._message_id);
        messageElem.classList.add('message');
        messageElem.innerHTML = this._message.html;
        messageElem.style.left = this._x + 'px';
        messageElem.style.top = this._y - parent.scrollHeight - 10 + 'px';
        messageElem.style.position = 'fixed';
        messageElem.style.backgroundColor = this._message.bgColor || this._color || 'blue';
        messageElem.style.color = this._message.color || 'white';

        this.elems.dot.style.backgroundColor = this._message.bgColor || this._color || 'blue';
        this.elems.ringing.style.animation = 'none';

        target.parentNode.appendChild(messageElem);
    }

    hideMessageIfExist(event) {
        if (!this._message) return;
        let id = "bip-message-" + this._message_id;
        document.getElementById(id).remove();
        this.elems.dot.style.backgroundColor = this._color;
        this.elems.ringing.style.animation = 'pulsate 1s ease-out infinite';
    }

    hide() {
        this.elems.wrapper.style.display = "none";
    }

    remove () {
        this.elems.wrapper.remove();
        this.elems = {};
    }
}

export default Bip