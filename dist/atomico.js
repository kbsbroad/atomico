"use strict";function root(e){return e.shadowRoot||e}function remove(e,t){root(e).removeChild(t)}function append(e,t){root(e).appendChild(t)}function replace(e,t,r){root(e).replaceChild(t,r)}function h(e,t){for(var r=[],n=arguments.length-2;n-- >0;)r[n]=arguments[n+2];return new VDom(e,t,concat(r))}function VDom(e,t,r){this.tag=e,this.props=t||{},this.children=r||[]}function isVDom(e){return"object"==typeof e&&e instanceof VDom}function concat(e,t){void 0===t&&(t=[]);for(var r=0;r<e.length;r++){var n=e[r];Array.isArray(n)?concat(n,t):t.push(isVDom(n)?n:new VDom("",{},n||""))}return t}function diffProps(e,t,r,n){for(var o=Object.keys(t).concat(Object.keys(r)),i=0;i<o.length;i++){var s=o[i];if(t[s]!==r[s])if("function"==typeof r[s]||"function"==typeof t[s])e[s.toLowerCase()]=r[s]||null;else if(s in r)if(s in e&&!n||n&&"style"===s)if("style"===s)if("object"==typeof r[s])for(var a in r[s])e.style[a]=r[s][a];else e.style.cssText=r[s];else e[s]=r[s];else n?e.setAttributeNS(null,s,r[s]):e.setAttribute(s,r[s]);else e.removeAttribute(s)}}function diff(e,t,r,n){for(var o=e.childNodes||[],i=Math.max(t.length,r.length),s=0;s<i;s++){var a=t[s]||new VDom,c=r[s],p=o[s];if(c){var d=p;if(n=n||"svg"===c.tag,a.tag!==c.tag)if(c.tag)if(d=n?document.createElementNS("http://www.w3.org/2000/svg",c.tag):document.createElement(c.tag),p){if(replace(e,d,p),!d.dispatch)for(;p.firstChild;)append(d,p.firstChild)}else append(e,d);else d=document.createTextNode(""),a.tag?replace(e,d,p):append(e,d);"#text"===d.nodeName?a.children!==c.children&&(d.textContent=c.children):(d.dispatch&&d.dispatch("receiveChildren",c.children),diffProps(d,a.props,c.props,n),d&&!d.render&&diff(d,a.children,c.children,n))}else p&&remove(e,p)}}function getProps(e,t){for(var r={},n=0;n<e.length;n++){var o=e[n],i=t instanceof HTMLElement?t.getAttribute(o):t[o];r[o.replace(/-+([\w])/g,function(e,t){return t.toUpperCase()})]=/^json-/.test(o)?JSON.parse(i):i}return r}Object.defineProperty(exports,"__esModule",{value:!0});class component extends HTMLElement{constructor(){super(),this.autorun()}static get observedAttributes(){return this.props||[]}autorun(){var e=this;this.state={},this.props={children:[]},this._props=this.constructor.props||[],this._render=[];var t=!0;["create","mount","unmount","receiveProp","receiveChildren"].map(function(r){var n=r.replace(/\w/,function(e){return"on"+e.toUpperCase()});e.addEventListener(r,function(o){o.type===r&&("mount"===r&&(e.props=getProps(e._props,e),t=!1),t||(e[n]&&e[n](o),o.defaultPrevented||("receiveProp"===r&&(e.props=Object.assign({},e.props,o.detail)),"receiveChildren"===r&&(e.props.children=o.detail),e.setState({}))))})})}connectedCallback(){this.dispatch("mount")}disconnectedCallback(){this.dispatch("unmount")}attributeChangedCallback(e,t,r){var n;t!==r&&this.dispatch("receiveProp",getProps([e],((n={})[e]=r,n)))}dispatch(e,t){this.dispatchEvent(new CustomEvent(e,{cancelable:!0,detail:t}))}setState(e){if(e){this.state=Object.assign({},this.state,e);var t=concat([this.render()]);diff(root(this),this._render,t),this._render=t}}render(){}}exports.h=h,exports.Component=component;
//# sourceMappingURL=atomico.js.map
