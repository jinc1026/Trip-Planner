!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var r=n(2),o=n.n(r)()((function(e){return e[1]}));o.push([e.i,"html,body{margin:0;background:#fff;height:100%}body{display:flex;flex-direction:column}.content{flex:1 0 auto}#app{display:grid;grid-auto-rows:minmax(100px, auto);grid-template-columns:50%;height:auto;background:#fff;color:#444;justify-content:center;grid-gap:1em;font-size:20px;padding-bottom:20px}#location{margin-bottom:20px}#error{color:#dc3545;margin-bottom:20px}.holder{display:flex;flex-direction:column;align-items:center}.entry{display:flex;justify-content:center;background:#e9ecef;margin-top:10px;margin-bottom:10px;padding:10px 15px;border-radius:3px;width:100%}.headline{font-size:40px;color:#fff;background-color:#f23557;margin-bottom:20px;padding:10px 0}.userInput{display:flex;flex-direction:column;align-items:flex-start}.cityImage{width:300px;height:200px;object-fit:contain;margin-right:10px}.weatherInfo{display:flex;flex-direction:column;justify-content:center;margin-left:20px;font-size:18px}.addBtn{width:100%;height:80px;font-size:20px;border:none;box-shadow:2px 4px 5px #444;margin-top:10px}.deleteBtn{display:inline-flex;align-items:center;justify-content:center;width:100%;height:30px;margin-top:10px;box-shadow:2px 4px 5px #444}.footer{flex-shrink:0;text-align:center;font-size:12px;width:100%}label{display:block;font-size:20px}input{display:block;height:60px;width:320px;font-size:20px;border:none;padding:0 10px}h1{font-size:36px}img{border-radius:3px}input:focus,select:focus,textarea:focus,button:focus{outline:none}::placeholder{font-family:sans-serif}:-ms-input-placeholder{font-family:sans-serif}::-ms-input-placeholder{font-family:sans-serif}",""]),t.a=o},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],d=t.base?a[0]+t.base:a[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=c(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:s,updater:g(f,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var a=h++;n=m||(m=l(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=d(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";n.r(t);new Date;let r=(new Date).toISOString().slice(0,10);document.getElementById("departureDate").setAttribute("min",r),document.getElementById("generate").addEventListener("click",(async function(){const e=document.getElementById("location").value,t=document.getElementById("departureDate").value,n=new Date(r),l=new Date(t),s=Math.abs(l-n),u=Math.ceil(s/864e5),f=await o(e);if(void 0!==f[0])if(""===t)document.getElementById("error").innerHTML="Please set your departure date correctly";else if(u<7){const e=await a(f[0]);await c("/add",{date:t,city:e.data[0].city_name,country:e.data[0].country_code,weather:e.data[0].weather.description,temp:e.data[0].temp,rh:Math.round(10*e.data[0].rh)/10,wind_spd:Math.round(10*e.data[0].wind_spd)/10}).then((function(e){d()}))}else{const e=await i(f[0]);console.log(e),await c("/add",{date:t,city:e.city_name,country:e.country_code,weather:e.data[0].weather.description,temp:e.data[0].temp,precip:e.data[0].precip,rh:Math.round(10*e.data[0].rh)/10,wind_spd:Math.round(10*e.data[0].wind_spd)/10}).then((function(e){d()}))}document.getElementById("location").value="",document.getElementById("departureDate").value=""}));const o=async function(e){try{const t=await fetch("http://api.openweathermap.org/geo/1.0/direct?q="+e+"&limit=1&appid=eb5a120ff7fc79e89928882f7c56d924"),n=await t.json();if(!t.ok||0===n.length)throw document.getElementById("error").innerHTML="Incorrect city name! Please double check the city name",new Error("Bad response from server. Fail to get coordinate info");return n}catch(e){console.log("Error: "+e)}},a=async function(e){const t=await fetch("https://api.weatherbit.io/v2.0/current?lat="+e.lat.toString()+"&lon="+e.lon.toString()+"&key=c086327b5e2345ddb6a22055e7e275a8");if(!t.ok)throw document.getElementById("error").innerHTML="Unable to get weather info. Check latitude and longitude info",new Error("Bad response from server. Fail to get weather info");try{return await t.json()}catch(e){console.log("Error: "+e)}},i=async function(e){const t=await fetch("https://api.weatherbit.io/v2.0/forecast/daily?lat="+e.lat.toString()+"&lon="+e.lon.toString()+"&key=c086327b5e2345ddb6a22055e7e275a8");if(!t.ok)throw document.getElementById("error").innerHTML="Unable to get weather info. Check latitude and longitude info",new Error("Bad response from server. Fail to get weather info");try{return await t.json()}catch(e){console.log("Error: "+e)}},c=async function(e="",t={}){const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("Error",e)}},d=async function(){try{const e=await fetch("/recent"),t=await e.json(),n=await fetch("https://pixabay.com/api/?key=26197022-380369692144c45e27439b513&q="+t.city+"&image_type=photo&orientation=horizontal"),r=(await n.json()).hits[0].webformatURL;let o=document.createElement("div"),a=document.createElement("img"),i=document.createElement("div");o.classList.add("entry"),i.classList.add("weatherInfo"),a.setAttribute("src",r),a.setAttribute("alt",t.city),a.classList.add("cityImage"),o.appendChild(a);let c=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),u=document.createElement("div");c.innerHTML="Departure Date: "+t.date,d.innerHTML=`Location: ${t.city}, ${t.country}`,l.innerHTML="Weather: "+t.weather,s.innerHTML="Temperature(C): "+t.temp,u.innerHTML="Relative Humidity(%): "+t.rh,i.appendChild(c),i.appendChild(d),i.appendChild(l),i.appendChild(s),i.appendChild(u);let f=document.createElement("button");f.classList.add("deleteBtn","btn","btn-danger"),f.innerHTML="Delete",f.addEventListener("click",(function(){this.parentNode.parentNode.remove()})),i.appendChild(f),o.appendChild(i),document.getElementById("schedule").appendChild(o),document.getElementById("error").innerHTML=""}catch(e){console.log("Error: ",e)}};var l=n(1),s=n.n(l),u=n(0),f={insert:"head",singleton:!1};s()(u.a,f),u.a.locals}]);