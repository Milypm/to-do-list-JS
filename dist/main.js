(()=>{"use strict";var t={402:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(645),a=e.n(r)()((function(t){return t[1]}));a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap);"]),a.push([t.id,"body {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Quicksand', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.main-header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px 0;\r\n  background: #4e9a6a;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  height: 100px;\r\n}\r\n\r\n.main-container {\r\n  display: grid;\r\n  grid-template-columns: 25% 37.5% 37.5%;\r\n  width: 100%;\r\n  height: calc(100vh - 100px);\r\n}\r\n\r\n.column-view {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #d0ecda;\r\n  margin: 0 2.5px 0 2.5px;\r\n  padding: 25px 0 25px 25px;\r\n  height: 100%;\r\n}\r\n\r\n.mylists-maincontainer {\r\n  width: 90%;\r\n  padding-bottom: 30px;\r\n  border-bottom: 3px solid #fff;\r\n}\r\n\r\n.mylists-title-btn {\r\n  width: 100%;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.column-view h3 {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin: auto 0;\r\n}\r\n\r\n.fa-plus {\r\n  font-size: 20px;\r\n  padding: 5px 7px;\r\n  margin: 0;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n\r\n.plus-btn {\r\n  border: none;\r\n  background: transparent;\r\n  padding: 0;\r\n  border-radius: 50%;\r\n}\r\n\r\n.fa-plus:hover {\r\n  background: #96ccaa;\r\n}\r\n\r\n.column-view form {\r\n  width: 90%;\r\n}\r\n\r\n.new-project-btn {\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n  padding: 5px 10px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  background: #70b088;\r\n  color: #fff;\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n}\r\n\r\n.new-project-btn:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.project-form {\r\n  display: none;\r\n}\r\n\r\n.fa-list-alt {\r\n  position: absolute;\r\n  left: 15px;\r\n  font-size: 20px;\r\n}\r\n\r\n.fa-pen {\r\n  position: absolute;\r\n  left: 190px;\r\n  font-size: 13px;\r\n}\r\n\r\n.fa-trash {\r\n  position: absolute;\r\n  left: 215px;\r\n  font-size: 13px;\r\n}\r\n\r\n.fa-pen:hover,\r\n.fa-trash:hover {\r\n  opacity: 0.5;\r\n}\r\n\r\n.projectList-btn {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 265px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  background: transparent;\r\n  text-align: start;\r\n  padding: 8px 0 8px 45px;\r\n  font-size: 18px;\r\n}\r\n\r\n.projectList-btn:hover {\r\n  background: #96ccaa;\r\n}\r\n\r\n.projectList-btn span {\r\n  display: flex;\r\n  width: 150px;\r\n}\r\n\r\n.mylists-container {\r\n  width: 100%;\r\n  height: max-content;\r\n  margin-top: 25px;\r\n  border: 2px solid red;\r\n}\r\n\r\n.default-list-btn {\r\n  margin-top: 20px;\r\n}\r\n\r\n.myTasks-title-btn {\r\n  display: flex;\r\n  width: 90%;\r\n  height: 40px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.myTasks-title-btn h3 {\r\n  margin: auto 0;\r\n}\r\n\r\n#add-task-btn {\r\n  border: none;\r\n  background: transparent;\r\n  border-bottom: 1.5px solid;\r\n  padding: 0;\r\n}\r\n\r\n.plus-btn-sm {\r\n  font-size: 15px;\r\n  margin: 0;\r\n}\r\n\r\n#add-task-btn:hover {\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 5px 10px 6px 5px;\r\n  background: #96ccaa;\r\n}\r\n\r\n#add-task-btn span {\r\n  margin-left: 3px;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n}\r\n\r\n",""]);const s=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(a[o]=!0)}for(var i=0;i<t.length;i++){var d=[].concat(t[i]);r&&a[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),n.push(d))}},n}},962:(t,n,e)=>{e.r(n),e.d(n,{default:()=>o});var r=e(379),a=e.n(r),s=e(402);a()(s.Z,{insert:"head",singleton:!1});const o=s.Z.locals||{}},379:(t,n,e)=>{var r,a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),s=[];function o(t){for(var n=-1,e=0;e<s.length;e++)if(s[e].identifier===t){n=e;break}return n}function i(t,n){for(var e={},r=[],a=0;a<t.length;a++){var i=t[a],d=n.base?i[0]+n.base:i[0],c=e[d]||0,l="".concat(d," ").concat(c);e[d]=c+1;var p=o(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(s[p].references++,s[p].updater(u)):s.push({identifier:l,updater:h(u,n),references:1}),r.push(l)}return r}function d(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var s=e.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var c,l=(c=[],function(t,n){return c[t]=n,c.filter(Boolean).join("\n")});function p(t,n,e,r){var a=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(n,a);else{var s=document.createTextNode(a),o=t.childNodes;o[n]&&t.removeChild(o[n]),o.length?t.insertBefore(s,o[n]):t.appendChild(s)}}function u(t,n,e){var r=e.css,a=e.media,s=e.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(t,n){var e,r,a;if(n.singleton){var s=f++;e=m||(m=d(n)),r=p.bind(null,e,s,!1),a=p.bind(null,e,s,!0)}else e=d(n),r=u.bind(null,e,n),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else a()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=i(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var a=o(e[r]);s[a].references--}for(var d=i(t,n),c=0;c<e.length;c++){var l=o(e[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}e=d}}}}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var s=n[r]={id:r,exports:{}};return t[r](s,s.exports,e),s.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const t=(()=>{let t,n={name:"",content:[]},e={name:"General List",content:[]};const r=()=>{const n=localStorage.getItem("projects");return t=null===n||null===n[1]?[e]:JSON.parse(localStorage.getItem("projects")),t};return{projects:t,getProjects:r,addProject:t=>{const e=r();n.name=t,e.push(n),localStorage.setItem("projects",JSON.stringify(e))}}})(),n=(()=>{const n=t=>{let n;n="string"==typeof t?t:t.name;const e=document.querySelector(".mylists-container");console.log(e),document.createElement("button").classList.add("projectList-btn");const r=document.createElement("i");r.classList.add("fas"),r.classList.add("fa-list-alt"),document.createElement("span").textContent=`${n}`;const a=document.createElement("i");a.classList.add("fas"),a.classList.add("fa-pen");const s=document.createElement("i");s.classList.add("fas"),s.classList.add("fa-trash")};return{displayProjects:()=>{t.getProjects().forEach((t=>n(t)))},addProjectToProjects:n,clearFields:()=>{document.querySelector(".input-formProject").value=""}}})();e(962),(()=>{const e=document.getElementById("content");e.appendChild((()=>{const t=document.createElement("header");t.classList.add("main-header");const n=document.createElement("h1");return n.classList.add("header-title"),n.textContent="ToDo List",t.appendChild(n),t})()),e.appendChild((()=>{const e=document.createElement("main");return e.classList.add("main-container"),e.setAttribute("id","main"),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("column-view");const r=document.createElement("div");r.classList.add("mylists-maincontainer");const a=document.createElement("div");a.classList.add("mylists-title-btn");const s=document.createElement("h3");s.textContent="My Lists";const o=document.createElement("i");o.classList.add("fas"),o.classList.add("fa-plus");const i=document.createElement("button");i.classList.add("plus-btn"),i.setAttribute("id","add-project-btn"),i.addEventListener("click",(function(){document.querySelector("#id-project-form").style.display="block"}));const d=document.createElement("div");d.classList.add("mylists-container");const c=document.createElement("i");c.classList.add("fas"),c.classList.add("fa-list-alt");const l=document.createElement("span");l.textContent="General List";const p=document.createElement("button");p.classList.add("projectList-btn"),p.classList.add("default-list-btn");const u=document.createElement("input");u.classList.add("input-formProject"),u.type="text";const m=document.createElement("button");m.classList.add("new-project-btn"),m.classList.add("form-save-btn"),m.setAttribute("id","project-save-btn"),m.textContent="Save";const f=document.createElement("button");f.classList.add("new-project-btn"),f.classList.add("form-cancel-btn"),f.setAttribute("id","project-cancel-btn"),f.textContent="Cancel";const h=document.createElement("form");h.classList.add("project-form"),h.setAttribute("id","id-project-form"),h.addEventListener("click",(e=>{if(e.target.classList.contains("form-save-btn")){e.preventDefault();const r=document.querySelector(".input-formProject").value;""===r?alert("Please fill the name field."):(t.addProject(r),b(r),n.clearFields(),document.querySelector("#id-project-form").style.display="none")}else e.target.classList.contains("form-cancel-btn")&&(document.querySelector("#id-project-form").style.display="none")}));const b=t=>{let n;n="string"==typeof t?t:t.name;const e=document.querySelector(".mylists-container");console.log(e);const r=document.createElement("button");r.classList.add("projectList-btn");const a=document.createElement("i");a.classList.add("fas"),a.classList.add("fa-list-alt");const s=document.createElement("span");s.textContent=`${n}`;const o=document.createElement("i");o.classList.add("fas"),o.classList.add("fa-pen");const i=document.createElement("i");i.classList.add("fas"),i.classList.add("fa-trash"),r.appendChild(a),r.appendChild(s),r.appendChild(o),r.appendChild(i),console.log(r),d.appendChild(r)};return i.appendChild(o),a.appendChild(s),a.appendChild(i),h.appendChild(u),h.appendChild(m),h.appendChild(f),r.appendChild(a),r.appendChild(h),r.appendChild(d),p.appendChild(c),p.appendChild(l),e.appendChild(r),e.appendChild(p),document.addEventListener("DOMContentLoaded",void t.getProjects().forEach((t=>b(t)))),e})()),e.appendChild((()=>{const t=document.createElement("div");t.classList.add("column-view");const n=document.createElement("div");n.classList.add("myTasks-title-btn");const e=document.createElement("h3");e.textContent="General List";const r=document.createElement("i");r.classList.add("fas"),r.classList.add("fa-plus"),r.classList.add("plus-btn-sm");const a=document.createElement("span");a.textContent="Add Task";const s=document.createElement("button");s.setAttribute("id","add-task-btn");const o=document.createElement("input");o.classList.add("task-form-input"),o.type="text";const i=document.createElement("button");i.classList.add("new-project-btn"),i.classList.add("form-save-btn"),i.setAttribute("id","project-save-btn"),i.textContent="Save";const d=document.createElement("button");return d.classList.add("new-project-btn"),d.classList.add("form-cancel-btn"),d.setAttribute("id","project-cancel-btn"),d.textContent="Cancel",document.createElement("form"),document.createElement("div").classList.add("mytasks-list"),s.appendChild(r),s.appendChild(a),n.appendChild(e),n.appendChild(s),t.appendChild(n),t})()),e.appendChild((()=>{const t=document.createElement("div");t.classList.add("column-view");const n=document.createElement("h3");return n.textContent="Item List Details",t.appendChild(n),t})()),e})())})()})()})();