"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TourEvents = void 0;

var _Bip = _interopRequireDefault(require("./Bip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TourEvents;
exports.TourEvents = TourEvents;

(function (TourEvents) {
  TourEvents[TourEvents["FINISH"] = 0] = "FINISH";
  TourEvents[TourEvents["NAVIGATE_PREV"] = 1] = "NAVIGATE_PREV";
  TourEvents[TourEvents["NAVIGATE_NEXT"] = 2] = "NAVIGATE_NEXT";
})(TourEvents || (exports.TourEvents = TourEvents = {}));

var Tour =
/*#__PURE__*/
function () {
  function Tour(options) {
    _classCallCheck(this, Tour);

    this.items = [];
    this._options = {
      nextText: "Next",
      prevText: "Previous"
    };
    this._current = 0;
    this._events = {};

    if (options) {
      this._options = Object.assign(this._options, options);
    }
  }

  _createClass(Tour, [{
    key: "on",

    /**
     * Add an event to execute later when a specific action is executed
     *
     * @param {TourEvents} event
     * @param {TourEvent} func
     */
    value: function on(event, func) {
      var e = this._events[event] || [];
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

  }, {
    key: "exec",
    value: function exec(event) {
      var e = this._events[event] || [];
      e.forEach(function (i) {
        return i();
      });
    }
    /**
     *  Add a new Bip
     *
     * @param item
     */

  }, {
    key: "add",
    value: function add(item) {
      if (!(item instanceof _Bip["default"])) {
        if (this._options.color && !item.color) item.color = this._options.color;
        item = new _Bip["default"](item);
      }

      item.on('close', this.finish.bind(this));
      this.items.push(item);

      if (this.body) {
        this.body.appendChild(item.element);
      }

      return this;
    }
    /**
     *  Get current Bip
     */

  }, {
    key: "play",

    /**
     * Show current Bip
     */
    value: function play() {
      this.current.show(this.items.length > 1 ? this.buildPagination() : undefined);
    }
  }, {
    key: "buildPagination",
    value: function buildPagination() {
      var pagn = document.createElement('div');
      pagn.classList.add('bip-pagination');
      var p = document.createElement('div');
      p.innerText = this._current + 1 + "/" + this.items.length;
      var btns = document.createElement('div');
      var nextButton = document.createElement('a');
      nextButton.classList.add('pagination-nav');

      if (this._current + 1 >= this.items.length) {
        nextButton.classList.add('disabled');
      } else {
        nextButton.addEventListener("click", this.next.bind(this));
      }

      nextButton.innerText = this._options.nextText;
      var prevButton = document.createElement('a');
      prevButton.classList.add('pagination-nav');
      if (this._current <= 0) prevButton.classList.add('disabled');else prevButton.addEventListener("click", this.prev.bind(this));
      prevButton.innerText = this._options.prevText;
      btns.appendChild(prevButton);
      btns.appendChild(nextButton);
      pagn.appendChild(p);
      pagn.appendChild(btns);
      return pagn;
    }
  }, {
    key: "html",
    value: function html() {
      var container = document.createElement('ul');
      container.classList.add('bip-tour-container');
      return container;
    }
  }, {
    key: "next",
    value: function next(e) {
      if (this._current + 1 < this.items.length) {
        this.current.hideInfo();
        this._current = this._current + 1;
        this.play();
        this.exec(TourEvents.NAVIGATE_NEXT);
      }
    }
  }, {
    key: "prev",
    value: function prev(e) {
      if (this._current > 0) {
        this.current.hideInfo();
        this._current -= 1;
        this.play();
        this.exec(TourEvents.NAVIGATE_PREV);
      }
    }
  }, {
    key: "finish",
    value: function finish() {
      var _this = this;

      this.items.forEach(function (item) {
        return _this.body.removeChild(item.element);
      });
      this.exec(TourEvents.FINISH);
    }
  }, {
    key: "body",
    get: function get() {
      var body = document.querySelector('body');

      if (body) {
        return body;
      } else throw new Error("Page body is not found !");
    }
  }, {
    key: "current",
    get: function get() {
      return this.items[this._current];
    }
  }]);

  return Tour;
}();

if (window) {
  window.Tour = Tour;
  window.TourEvents = TourEvents;
}

var _default = Tour;
exports["default"] = _default;