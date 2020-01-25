"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Bip", {
  enumerable: true,
  get: function get() {
    return _Bip["default"];
  }
});
Object.defineProperty(exports, "Tour", {
  enumerable: true,
  get: function get() {
    return _Tour["default"];
  }
});
exports["default"] = void 0;

var _Bip = _interopRequireDefault(require("./Bip"));

var _Tour = _interopRequireDefault(require("./Tour"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Tour: _Tour["default"],
  Bip: _Bip["default"]
};
exports["default"] = _default;