(()=>{"use strict";var n={402:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(645),o=t.n(a)()((function(n){return n[1]}));o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap);"]),o.push([n.id,"body {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: 'Quicksand', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.main-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0;\n  background: #4e9a6a;\n  color: #fff;\n  font-size: 20px;\n  height: 100px;\n}\n\n.main-container {\n  display: grid;\n  grid-template-columns: 25% 37.5% 37.5%;\n  width: 100%;\n  height: calc(100vh - 100px);\n}\n\n.column-view {\n  display: flex;\n  flex-direction: column;\n  background: #d0ecda;\n  margin: 0 2.5px 0 2.5px;\n  padding: 25px 0 25px 25px;\n  height: 100%;\n}\n\n.mylists-maincontainer {\n  width: 90%;\n  padding-bottom: 30px;\n  border-bottom: 3px solid #fff;\n}\n\n.mylists-title-btn {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.column-view h3 {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.fa-plus {\n  font-size: 20px;\n  padding: 5px;\n  margin: 0;\n  border-radius: 50%;\n}\n\n.plus-btn {\n  border: none;\n  background: transparent;\n  padding: 0 4px 0 4px;\n  border-radius: 50%;\n}\n\n.plus-btn:hover {\n  background: #96ccaa;\n}\n\n.column-view form {\n  width: 90%;\n}\n\n.new-project-btn {\n  margin-top: 10px;\n  margin-right: 10px;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 10px;\n  background: #70b088;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.new-project-btn:hover {\n  opacity: 0.7;\n}\n\n.project-form {\n  display: none;\n}\n\n.fa-list-alt {\n  position: absolute;\n  left: 15px;\n  font-size: 20px;\n}\n\n.fa-pen {\n  position: absolute;\n  left: 190px;\n  font-size: 13px;\n}\n\n.fa-trash {\n  position: absolute;\n  left: 215px;\n  font-size: 13px;\n}\n\n.fa-pen:hover,\n.fa-trash:hover {\n  opacity: 0.5;\n}\n\n.default-list-btn {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 265px;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  text-align: start;\n  padding: 8px 0 8px 45px;\n  font-size: 18px;\n  margin-top: 20px;\n}\n\n.default-list-btn:hover {\n  background: #96ccaa;\n}\n\n.default-list-btn span {\n  display: flex;\n  width: 150px;\n}\n\n.myItems-title-btn {\n  display: flex;\n  width: 90%;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.myItems-title-btn h3 {\n  margin: auto 0;\n}\n\n#add-item-btn {\n  border: none;\n  background: transparent;\n  border-bottom: 1.5px solid;\n  padding: 0;\n}\n\n.plus-btn-sm {\n  font-size: 15px;\n  margin: 0;\n}\n\n#add-item-btn:hover {\n  border: none;\n  border-radius: 10px;\n  padding: 0 10px 0 5px;\n  background: #96ccaa;\n}\n\n#add-item-btn span {\n  margin-left: 3px;\n  font-size: 16px;\n  font-weight: 700;\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(a)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);a&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},962:(n,e,t)=>{t.r(e),t.d(e,{default:()=>r});var a=t(379),o=t.n(a),i=t(402);o()(i.Z,{insert:"head",singleton:!1});const r=i.Z.locals||{}},379:(n,e,t)=>{var a,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function r(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},a=[],o=0;o<n.length;o++){var s=n[o],d=e.base?s[0]+e.base:s[0],c=t[d]||0,l="".concat(d," ").concat(c);t[d]=c+1;var p=r(l),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:h(u,e),references:1}),a.push(l)}return a}function d(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var r=o(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var c,l=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,t,a){var o=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(i,r[e]):n.appendChild(i)}}function u(n,e,t){var a=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var m=null,f=0;function h(n,e){var t,a,o;if(e.singleton){var i=f++;t=m||(m=d(e)),a=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=d(e),a=u.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var o=r(t[a]);i[o].references--}for(var d=s(n,e),c=0;c<t.length;c++){var l=r(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{const n={buildProject:n=>{let e,t={name:"",content:[]},a={name:"General List",content:[]};const o=n,i=()=>{const n=localStorage.getItem("projects");return e=null===n[1]?[a]:JSON.parse(localStorage.getItem("projects")),e};return{projects:e,getProjects:i,addProject:()=>{const n=i();t.name=o,n.push(t),localStorage.setItem("projects",JSON.stringify(n))}}}};t(962),(()=>{const e=document.getElementById("content");e.appendChild((()=>{const n=document.createElement("header");n.classList.add("main-header");const e=document.createElement("h1");return e.classList.add("header-title"),e.textContent="ToDo List",n.appendChild(e),n})()),e.appendChild((()=>{const e=document.createElement("main");return e.classList.add("main-container"),e.setAttribute("id","main"),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("column-view");const t=document.createElement("div");t.classList.add("mylists-maincontainer");const a=document.createElement("div");a.classList.add("mylists-title-btn");const o=document.createElement("h3");o.textContent="My Lists";const i=document.createElement("i");i.classList.add("fas"),i.classList.add("fa-plus");const r=document.createElement("button");r.classList.add("plus-btn"),r.setAttribute("id","add-project-btn"),r.addEventListener("click",(function(){document.querySelector("#id-project-form").style.display="block"}));const s=document.createElement("div");s.classList.add("mylists-container");const d=document.createElement("i");d.classList.add("fas"),d.classList.add("fa-list-alt");const c=document.createElement("span");c.textContent="General List";const l=document.createElement("button");l.classList.add("default-list-btn");const p=document.createElement("input");p.classList.add("input-formProject"),p.type="text";const u=document.createElement("button");u.classList.add("new-project-btn"),u.classList.add("form-save-btn"),u.setAttribute("id","project-save-btn"),u.textContent="Save";const m=document.createElement("button");m.classList.add("new-project-btn"),m.setAttribute("id","project-cancel-btn"),m.textContent="Cancel";const f=document.createElement("form");return f.classList.add("project-form"),f.setAttribute("id","id-project-form"),f.addEventListener("click",(e=>{if(e.target.classList.contains("form-save-btn")){e.preventDefault();const t=document.querySelector(".input-formProject").value;""===t?alert("Please fill the name field."):(n(t).addProject(),p.value="",document.querySelector("#id-project-form").style.display="none")}else e.target.classList.contains("form-cancel-btn")&&(document.querySelector("#id-project-form").style.display="none")})),r.appendChild(i),a.appendChild(o),a.appendChild(r),f.appendChild(p),f.appendChild(u),f.appendChild(m),t.appendChild(a),t.appendChild(f),t.appendChild(s),l.appendChild(d),l.appendChild(c),e.appendChild(t),e.appendChild(l),e})()),e.appendChild((()=>{const n=document.createElement("div");n.classList.add("column-view");const e=document.createElement("div");e.classList.add("myItems-title-btn");const t=document.createElement("h3");t.textContent="General List";const a=document.createElement("i");a.classList.add("fas"),a.classList.add("fa-plus"),a.classList.add("plus-btn-sm");const o=document.createElement("span");o.textContent="Add Task";const i=document.createElement("button");return i.setAttribute("id","add-item-btn"),i.appendChild(a),i.appendChild(o),e.appendChild(t),e.appendChild(i),n.appendChild(e),n})()),e.appendChild((()=>{const n=document.createElement("div");n.classList.add("column-view");const e=document.createElement("h3");return e.textContent="Item List Details",n.appendChild(e),n})()),e})())})()})()})();