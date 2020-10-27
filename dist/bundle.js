(()=>{"use strict";var e={424:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"html,\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nbody {\r\n    padding: 20px;\r\n}\r\n\r\n.editor {\r\n  width: 100%;\r\n  height: 450px;\r\n  border: 1px solid #ccc;\r\n  padding: 10px;\r\n}\r\n\r\n.editor:focus {\r\n  outline: none;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},548:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(379),o=n.n(r),i=n(424);o()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],l=t.base?c[0]+t.base:c[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:h(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function h(e,t){var n,r,o;if(t.singleton){var i=v++;n=p||(p=l(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=l(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var l=c(e,t),s=0;s<n.length;s++){var u=a(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=l}}}},607:(e,t,n)=>{n(548);var r=function(e,t,n){var r=document.createElement(e);return r.innerText=t,r.onclick=function(e){n&&n(this)},r};new(function(){function e(e){this.options=e;var t=e.el;this.dom=document.querySelector(t),this.selection=window.getSelection(),this.init()}return e.prototype.attr=function(e,t){var n;null===(n=this.dom)||void 0===n||n.setAttribute(e,t)},e.prototype.exec=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=""),document.execCommand(e,t,n)},e.prototype.setRange=function(){var e=this.selection;if(e&&!(null==e?void 0:e.isCollapsed)){var t=null==e?void 0:e.getRangeAt(0);console.log("selection",null==e?void 0:e.toString(),e,t),this.range=t}},e.prototype.recoverRange=function(){var e=this.selection,t=this.range;e&&t&&(e.rangeCount>0&&e.removeAllRanges(),null==e||e.addRange(t.cloneRange()))},e.prototype.init=function(){var e,t,n=this;n.attr("contenteditable","true"),n.attr("class","editor"),null===(e=n.dom)||void 0===e||e.before(r("button","加粗",n.setBold.bind(n)),r("button","字体颜色",n.setColor.bind(n)),r("button","背景颜色",n.setBgColor.bind(n))),null===(t=n.dom)||void 0===t||t.addEventListener("blur",(function(){n.setRange()}))},e.prototype.setBold=function(){this.recoverRange(),this.exec("bold")},e.prototype.setColor=function(){var e;this.recoverRange();var t=null!==(e=prompt("请输入颜色"))&&void 0!==e?e:"#000";this.exec("foreColor",!1,t)},e.prototype.setBgColor=function(){var e;this.recoverRange();var t=null!==(e=prompt("请输入颜色"))&&void 0!==e?e:"#000";this.exec("backColor",!0,t),console.log("setBgColor",t)},e}())({el:"#app"})}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(607)})();