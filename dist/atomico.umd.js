!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.Atomico={})}(this,function(e){"use strict";function t(e){return e.shadowRoot||e}function n(e,n){t(e).removeChild(n)}function r(e,n){t(e).appendChild(n)}function i(e,n,r){t(e).replaceChild(n,r)}function s(e,t,n){this.tag=e,this.props=t||{},this.children=n||[]}function o(e,t){void 0===t&&(t=[]);for(var n=0;n<e.length;n++){var r=e[n];Array.isArray(r)?o(r,t):t.push("object"==typeof(i=r)&&i instanceof s?r:new s("",{},r||""))}var i;return t}function a(e,t,n,r){for(var i=Object.keys(t).concat(Object.keys(n)),s=0;s<i.length;s++){var o=i[s];if(t[o]!==n[o])if("function"==typeof n[o]||"function"==typeof t[o])e[o.toLowerCase()]=n[o]||null;else if(o in n)if(o in e&&!r||r&&"style"===o)if("style"===o)if("object"==typeof n[o])for(var a in n[o])e.style[a]=n[o][a];else e.style.cssText=n[o];else e[o]=n[o];else r?e.setAttributeNS(null,o,n[o]):e.setAttribute(o,n[o]);else e.removeAttribute(o)}}function c(e,t){for(var n={},r=0;r<e.length;r++){var i=e[r],s=t instanceof HTMLElement?t.getAttribute(i):t[i];n[i.replace(/-+([\w])/g,function(e,t){return t.toUpperCase()})]=/^json-/.test(i)?JSON.parse(s):s}return n}e.h=function(e,t){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];return new s(e,t,o(n))},e.Component=class extends HTMLElement{constructor(){super(),this.autorun()}static get observedAttributes(){return this.props||[]}autorun(){var e=this;this.state={},this.props={children:[]},this._props=this.constructor.props||[],this._render=[];var t=!0;["create","mount","unmount","receiveProp","receiveChildren"].map(function(n){var r=n.replace(/\w/,function(e){return"on"+e.toUpperCase()});e.addEventListener(n,function(i){i.type===n&&("mount"===n&&(e.props=c(e._props,e),t=!1),t||(e[r]&&e[r](i),i.defaultPrevented||("receiveProp"===n&&(e.props=Object.assign({},e.props,i.detail)),"receiveChildren"===n&&(e.props.children=i.detail),e.setState({}))))})})}connectedCallback(){this.dispatch("mount")}disconnectedCallback(){this.dispatch("unmount")}attributeChangedCallback(e,t,n){var r;t!==n&&this.dispatch("receiveProp",c([e],((r={})[e]=n,r)))}dispatch(e,t){this.dispatchEvent(new CustomEvent(e,{cancelable:!0,detail:t}))}setState(e){if(e){this.state=Object.assign({},this.state,e);var c=o([this.render()]);!function e(t,o,c,d){for(var l=t.childNodes||[],p=Math.max(o.length,c.length),h=0;h<p;h++){var u=o[h]||new s,f=c[h],v=l[h];if(f){var g=v;if(d=d||"svg"===f.tag,u.tag!==f.tag)if(f.tag)if(g=d?document.createElementNS("http://www.w3.org/2000/svg",f.tag):document.createElement(f.tag),v){if(i(t,g,v),!g.dispatch)for(;v.firstChild;)r(g,v.firstChild)}else r(t,g);else g=document.createTextNode(""),u.tag?i(t,g,v):r(t,g);"#text"===g.nodeName?u.children!==f.children&&(g.textContent=f.children):(g.dispatch&&g.dispatch("receiveChildren",f.children),a(g,u.props,f.props,d),g&&!g.render&&e(g,u.children,f.children,d))}else v&&n(t,v)}}(t(this),this._render,c),this._render=c}}render(){}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=atomico.umd.js.map
