!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!x[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--b&&0===y&&k()}(e,n),t&&t(e,n)};var n,r=!0,o="33318fc81db4175c6d66",i=1e4,s={},a=[],c=[];function l(e){var t=I[e];if(!t)return D;var r=function(r){return t.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),D(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}};for(var i in D)Object.prototype.hasOwnProperty.call(D,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===f&&p("prepare"),y++,D.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===f&&(g[e]||O(e),0===y&&0===b&&k())}},r.t=function(e,t){return 1&t&&(e=r(e)),D.t(e,-2&t)},r}function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:j,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:s[e]};return n=void 0,t}var u=[],f="idle";function p(e){f=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,v,m,b=0,y=0,g={},w={},x={};function _(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=D.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;w={},g={},x=e.c,m=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});v={};return O(0),"prepare"===f&&0===y&&0===b&&k(),t});var t}function O(e){x[e]?(w[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=D.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function k(){p("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return j(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(_(n));e.resolve(t)}}function j(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,i,c,l;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((c=I[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var a=0;a<c.parents.length;a++){var l=c.parents[a],d=I[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),u(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},b=[],y={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var E;l=_(w);var O=!1,k=!1,j=!1,C="";switch((E=v[w]?d(l):{type:"disposed",moduleId:w}).chain&&(C="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+C));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+C));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+l+" is not accepted"+C));break;case"accepted":t.onAccepted&&t.onAccepted(E),k=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),j=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return p("abort"),Promise.reject(O);if(k)for(l in y[l]=v[l],u(b,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,l)&&(h[l]||(h[l]=[]),u(h[l],E.outdatedDependencies[l]));j&&(u(b,[E.moduleId]),y[l]=g)}var L,M=[];for(r=0;r<b.length;r++)l=b[r],I[l]&&I[l].hot._selfAccepted&&M.push({module:l,errorHandler:I[l].hot._selfAccepted});p("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)});for(var U,A,H=b.slice();H.length>0;)if(l=H.pop(),c=I[l]){var S={},P=c.hot._disposeHandlers;for(i=0;i<P.length;i++)(n=P[i])(S);for(s[l]=S,c.hot.active=!1,delete I[l],delete h[l],i=0;i<c.children.length;i++){var R=I[c.children[i]];R&&((L=R.parents.indexOf(l))>=0&&R.parents.splice(L,1))}}for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(c=I[l]))for(A=h[l],i=0;i<A.length;i++)U=A[i],(L=c.children.indexOf(U))>=0&&c.children.splice(L,1);for(l in p("apply"),o=m,y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var T=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(c=I[l])){A=h[l];var N=[];for(r=0;r<A.length;r++)if(U=A[r],n=c.hot._acceptedDependencies[U]){if(-1!==N.indexOf(n))continue;N.push(n)}for(r=0;r<N.length;r++){n=N[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:A[r],error:e}),t.ignoreErrored||T||(T=e)}}}for(r=0;r<M.length;r++){var B=M[r];l=B.module,a=[l];try{D(l)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||T||(T=n),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||T||(T=e)}}return T?(p("fail"),Promise.reject(T)):(p("idle"),new Promise(function(e){e(b)}))}var I={};function D(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:d(t),parents:(c=a,a=[],c),children:[]};return e[t].call(n.exports,n,n.exports,l(t)),n.l=!0,n.exports}D.m=e,D.c=I,D.d=function(e,t,n){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(D.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)D.d(n,r,function(t){return e[t]}.bind(null,r));return n},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="",D.h=function(){return o},l(5)(D.s=5)}([function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".new-feature {\n  padding: 10px 15px;\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n  border-radius: 6px;\n  background-color: #16a085;\n  color: white;\n  font-weight: bold;\n  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.15); }\n  .new-feature.blue {\n    background-color: #0984e3; }\n  .new-feature.green {\n    background-color: #00b894; }\n  .new-feature.red {\n    background-color: #d63031; }\n\n.bip {\n  position: relative;\n  cursor: pointer; }\n  .bip .ringing {\n    border: 3px solid blue;\n    -webkit-border-radius: 30px;\n    -moz-border-radius: 30px;\n    border-radius: 30px;\n    height: 25px;\n    width: 25px;\n    position: absolute;\n    left: 15px;\n    top: 15px;\n    animation: pulsate 1s ease-out infinite;\n    opacity: 0.0; }\n  .bip .message {\n    padding: 11px 10px;\n    background-color: blue;\n    border-radius: 6px;\n    color: white;\n    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.3); }\n  .bip .dot {\n    width: 15px;\n    height: 15px;\n    background-color: blue;\n    border-radius: 50%;\n    position: absolute;\n    top: 23px;\n    left: 23px; }\n\n@keyframes bip {\n  0% {\n    width: 0;\n    height: 0;\n    background-color: rgba(0, 0, 255, 0.5); }\n  100% {\n    width: 50px;\n    height: 50px;\n    background-color: blue; } }\n\n@keyframes pulsate {\n  0% {\n    -webkit-transform: scale(0.1, 0.1);\n    -moz-transform: scale(0.1, 0.1);\n    -ms-transform: scale(0.1, 0.1);\n    -o-transform: scale(0.1, 0.1);\n    transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  50% {\n    opacity: 1.0; }\n  100% {\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n",""])},function(e,t,n){var r=n(0);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n(3)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(0,function(){var t=n(0);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,d=[],u=n(4);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(y(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=l++;n=c||(c=m(t)),r=x.bind(null,n,s,!1),o=x.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&f(p(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_x",void 0),o(this,"_y",void 0),o(this,"_color","blue"),o(this,"_message",{}),o(this,"_message_id",void 0),o(this,"elems",{}),this._x=t,this._y=n,this._color=r,this._message=i}var t,n,i;return t=e,i=[{key:"byId",value:function(t,n,r){var o=document.getElementById(t);if(!o)throw new Error("No element found for id : ".concat(t));var i=o.offsetTop;return new e(o.offsetLeft,i,n,r)}},{key:"selector",value:function(t){var n=[].slice.call(document.querySelectorAll(t)),r=[];return n.forEach(function(t){var n=t.offsetLeft,o=t.offsetTop;console.log(n,o),r.push(new e(n,o))}),r}}],(n=[{key:"show",value:function(){this.elems.wrapper?this.elems.wrapper.style.display="block":document.getElementsByTagName("body")[0].appendChild(this.html())}},{key:"html",value:function(){var e=this,t=document.createElement("div");t.classList.add("bip-wrapper"),t.style.position="fixed";var n=document.createElement("div");n.classList.add("bip");var r=document.createElement("div");r.classList.add("ringing"),r.style.borderColor=this._color;var o=document.createElement("div");return o.classList.add("dot"),o.style.backgroundColor=this._color,o.addEventListener("mouseover",function(t){e.showMessageIfExist(t)}),o.addEventListener("mouseleave",function(t){e.hideMessageIfExist(t)}),n.appendChild(r),n.appendChild(o),t.appendChild(n),t.style.top=this._y+t.scrollHeight-30+"px",t.style.left=this._x+t.scrollWidth-30+"px",this.elems.wrapper=t,this.elems.dot=o,this.elems.ringing=r,t}},{key:"showMessageIfExist",value:function(e){if(this._message){this._message_id=(new Date).getMilliseconds();var t=e.target,n=t.parentNode,r=document.createElement("div");r.setAttribute("id","bip-message-"+this._message_id),r.classList.add("message"),r.innerHTML=this._message.html,r.style.left=this._x+"px",r.style.top=this._y-n.scrollHeight-10+"px",r.style.position="fixed",r.style.backgroundColor=this._message.bgColor||this._color||"blue",r.style.color=this._message.color||"white",this.elems.dot.style.backgroundColor=this._message.bgColor||this._color||"blue",this.elems.ringing.style.animation="none",t.parentNode.appendChild(r)}}},{key:"hideMessageIfExist",value:function(e){if(this._message){var t="bip-message-"+this._message_id;document.getElementById(t).remove(),this.elems.dot.style.backgroundColor=this._color,this.elems.ringing.style.animation="pulsate 1s ease-out infinite"}}},{key:"hide",value:function(){this.elems.wrapper.style.display="none"}},{key:"remove",value:function(){this.elems.wrapper.remove(),this.elems={}}},{key:"color",set:function(e){this._color=e}},{key:"top",get:function(){return this._y+"px"}},{key:"left",get:function(){return this._x+"px"}}])&&r(t.prototype,n),i&&r(t,i),e}();n.d(t,"bip",function(){return s}),window.Bip=i;var s=i;t.default=i}]);