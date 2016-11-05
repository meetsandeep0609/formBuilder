/*
formBuilder - https://formbuilder.online/
Version: 1.24.2
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * mi18n - https://github.com/Draggable/mi18n
 * Version: 0.3.2
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
 */
module.exports=function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="dist/",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(45),u=r(o),i=e(39),f=r(i),c=e(43),a=r(c),s=e(44),l=r(s),p=function(){function t(){(0,a["default"])(this,t);var n={location:"assets/lang/",langs:["en-US","es-ES"],locale:"en-US",preloaded:{}},e=this;e.init=function(t){return e.config=(0,f["default"])({},n,t),e.langs=(0,f["default"])({},e.config.preloaded),e.locale=e.config.locale||e.config.langs[0],e.setCurrent(e.locale)}}return(0,l["default"])(t,[{key:"getValue",value:function(t){return this.current&&this.current[t]||t}},{key:"makeSafe",value:function(t){var n={"{":"\\{","}":"\\}","|":"\\|"};return t=t.replace(/\{|\}|\|/g,function(t){return n[t]}),new RegExp(t,"g")}},{key:"put",value:function(t,n){return this.current[t]=n}},{key:"get",value:function(t,n){var e=this,r=this.getValue(t),o=r.match(/\{[^\}]+?\}/g),i=void 0;if(n&&o)if("object"===("undefined"==typeof n?"undefined":(0,u["default"])(n)))for(var f=0;f<o.length;f++)i=o[f].substring(1,o[f].length-1),r=r.replace(e.makeSafe(o[f]),n[i]||"");else r=r.replace(/\{[^\}]+?\}/g,n);return r}},{key:"fromFile",value:function(t){for(var n,e=t.split("\n"),r={},o=0;o<e.length;o++)n=e[o].match(/^(.+?) *?= *?([^\n]+)/),n&&(r[n[1]]=n[2].replace(/^\s+|\s+$/,""));return r}},{key:"processFile",value:function(t){var n=this,e=t.replace(/\n\n/g,"\n");return n.langs[n.locale]=n.fromFile(e)}},{key:"loadLang",value:function(t){var n=this;return new window.Promise(function(e,r){n.langs[n.locale]?e(n.langs[n.locale]):!function(){var o=new XMLHttpRequest;o.open("GET",n.config.location+t+".lang",!0),o.onload=function(){this.status<=304?(n.processFile(o.responseText),e(o.response)):r({status:this.status,statusText:o.statusText})},o.onerror=function(){r({status:this.status,statusText:o.statusText})},o.send()}()})}},{key:"setCurrent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",n=this.loadLang(t);return this.locale=t,this.current=this.langs[t],window.sessionStorage.setItem("locale",t),n}},{key:"getLangs",get:function(){return this.config.langs}}]),t}();n["default"]=new p},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(11),o=e(31),u=e(26),i=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(32),o=e(17);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(4),o=e(15);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(24)("wks"),o=e(16),u=e(1).Symbol,i="function"==typeof u,f=t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))};f.store=r},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n,e){var r=e(36),o=e(18);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(1),o=e(8),u=e(53),i=e(6),f="prototype",c=function(t,n,e){var a,s,l,p=t&c.F,v=t&c.G,y=t&c.S,d=t&c.P,h=t&c.B,g=t&c.W,b=v?o:o[n]||(o[n]={}),m=b[f],x=v?r:y?r[n]:(r[n]||{})[f];v&&(e=n);for(a in e)s=!p&&x&&void 0!==x[a],s&&a in b||(l=s?x[a]:e[a],b[a]=v&&"function"!=typeof x[a]?e[a]:h&&s?u(l,r):g&&x[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(l):d&&"function"==typeof l?u(Function.call,l):l,d&&((b.virtual||(b.virtual={}))[a]=l,t&c.R&&m&&!m[a]&&i(m,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(4).f,o=e(3),u=e(7)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,u)&&r(t,u,{configurable:!0,value:n})}},function(t,n,e){var r=e(24)("keys"),o=e(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(13);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(8),u=e(20),i=e(28),f=e(4).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:i.f(t)})}},function(t,n,e){n.f=e(7)},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(13),o=e(1).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,e){t.exports=!e(2)&&!e(9)(function(){return 7!=Object.defineProperty(e(30)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(20),o=e(12),u=e(37),i=e(6),f=e(3),c=e(19),a=e(57),s=e(22),l=e(65),p=e(7)("iterator"),v=!([].keys&&"next"in[].keys()),y="@@iterator",d="keys",h="values",g=function(){return this};t.exports=function(t,n,e,b,m,x,O){a(e,n,b);var w,S,_,j=function(t){if(!v&&t in M)return M[t];switch(t){case d:return function(){return new e(this,t)};case h:return function(){return new e(this,t)}}return function(){return new e(this,t)}},E=n+" Iterator",P=m==h,k=!1,M=t.prototype,T=M[p]||M[y]||m&&M[m],F=T||j(m),A=m?P?j("entries"):F:void 0,I="Array"==n?M.entries||T:T;if(I&&(_=l(I.call(new t)),_!==Object.prototype&&(s(_,E,!0),r||f(_,p)||i(_,p,g))),P&&T&&T.name!==h&&(k=!0,F=function(){return T.call(this)}),r&&!O||!v&&!k&&M[p]||i(M,p,F),c[n]=F,c[E]=g,m)if(w={values:P?F:j(h),keys:x?F:j(d),entries:A},O)for(S in w)S in M||u(M,S,w[S]);else o(o.P+o.F*(v||k),n,w);return w}},function(t,n,e){var r=e(11),o=e(62),u=e(18),i=e(23)("IE_PROTO"),f=function(){},c="prototype",a=function(){var t,n=e(30)("iframe"),r=u.length,o="<",i=">";for(n.style.display="none",e(55).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+i+"document.F=Object"+o+"/script"+i),t.close(),a=t.F;r--;)delete a[c][u[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(f[c]=r(t),e=new f,f[c]=null,e[i]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(36),o=e(18).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(5),u=e(52)(!1),i=e(23)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=i&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~u(a,e)||a.push(e));return a}},function(t,n,e){t.exports=e(6)},function(t,n,e){var r=e(17);t.exports=function(t){return Object(r(t))}},function(t,n,e){t.exports={"default":e(46),__esModule:!0}},function(t,n,e){t.exports={"default":e(47),__esModule:!0}},function(t,n,e){t.exports={"default":e(48),__esModule:!0}},function(t,n,e){t.exports={"default":e(49),__esModule:!0}},function(t,n){"use strict";n.__esModule=!0,n["default"]=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(40),u=r(o);n["default"]=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u["default"])(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(42),u=r(o),i=e(41),f=r(i),c="function"==typeof f["default"]&&"symbol"==typeof u["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":typeof t};n["default"]="function"==typeof f["default"]&&"symbol"===c(u["default"])?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,n,e){e(70),t.exports=e(8).Object.assign},function(t,n,e){e(71);var r=e(8).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){e(74),e(72),e(75),e(76),t.exports=e(8).Symbol},function(t,n,e){e(73),e(77),t.exports=e(28).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(5),o=e(68),u=e(67);t.exports=function(t){return function(n,e,i){var f,c=r(n),a=o(c.length),s=u(i,a);if(t&&e!=e){for(;a>s;)if(f=c[s++],f!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(50);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(10),o=e(21),u=e(14);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var i,f=e(t),c=u.f,a=0;f.length>a;)c.call(t,i=f[a++])&&n.push(i);return n}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){var r=e(29);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(34),o=e(15),u=e(22),i={};e(6)(i,e(7)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(i,{next:o(1,e)}),u(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(10),o=e(5);t.exports=function(t,n){for(var e,u=o(t),i=r(u),f=i.length,c=0;f>c;)if(u[e=i[c++]]===n)return e}},function(t,n,e){var r=e(16)("meta"),o=e(13),u=e(3),i=e(4).f,f=0,c=Object.isExtensible||function(){return!0},a=!e(9)(function(){return c(Object.preventExtensions({}))}),s=function(t){i(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!u(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},v=function(t){return a&&y.NEED&&c(t)&&!u(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:v}},function(t,n,e){"use strict";var r=e(10),o=e(21),u=e(14),i=e(38),f=e(32),c=Object.assign;t.exports=!c||e(9)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=i(t),c=arguments.length,a=1,s=o.f,l=u.f;c>a;)for(var p,v=f(arguments[a++]),y=s?r(v).concat(s(v)):r(v),d=y.length,h=0;d>h;)l.call(v,p=y[h++])&&(e[p]=v[p]);return e}:c},function(t,n,e){var r=e(4),o=e(11),u=e(10);t.exports=e(2)?Object.defineProperties:function(t,n){o(t);for(var e,i=u(n),f=i.length,c=0;f>c;)r.f(t,e=i[c++],n[e]);return t}},function(t,n,e){var r=e(14),o=e(15),u=e(5),i=e(26),f=e(3),c=e(31),a=Object.getOwnPropertyDescriptor;n.f=e(2)?a:function(t,n){if(t=u(t),n=i(n,!0),c)try{return a(t,n)}catch(e){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(5),o=e(35).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(n){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(3),o=e(38),u=e(23)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,n,e){var r=e(25),o=e(17);t.exports=function(t){return function(n,e){var u,i,f=String(o(n)),c=r(e),a=f.length;return c<0||c>=a?t?"":void 0:(u=f.charCodeAt(c),u<55296||u>56319||c+1===a||(i=f.charCodeAt(c+1))<56320||i>57343?t?f.charAt(c):u:t?f.slice(c,c+2):(u-55296<<10)+(i-56320)+65536)}}},function(t,n,e){var r=e(25),o=Math.max,u=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):u(t,n)}},function(t,n,e){var r=e(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";var r=e(51),o=e(58),u=e(19),i=e(5);t.exports=e(33)(Array,"Array",function(t,n){this._t=i(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(12);r(r.S+r.F,"Object",{assign:e(61)})},function(t,n,e){var r=e(12);r(r.S+r.F*!e(2),"Object",{defineProperty:e(4).f})},function(t,n){},function(t,n,e){"use strict";var r=e(66)(!0);e(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(1),o=e(3),u=e(2),i=e(12),f=e(37),c=e(60).KEY,a=e(9),s=e(24),l=e(22),p=e(16),v=e(7),y=e(28),d=e(27),h=e(59),g=e(54),b=e(56),m=e(11),x=e(5),O=e(26),w=e(15),S=e(34),_=e(64),j=e(63),E=e(4),P=e(10),k=j.f,M=E.f,T=_.f,F=r.Symbol,A=r.JSON,I=A&&A.stringify,N="prototype",C=v("_hidden"),L=v("toPrimitive"),R={}.propertyIsEnumerable,W=s("symbol-registry"),D=s("symbols"),G=s("op-symbols"),J=Object[N],U="function"==typeof F,K=r.QObject,q=!K||!K[N]||!K[N].findChild,z=u&&a(function(){return 7!=S(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=k(J,n);r&&delete J[n],M(t,n,e),r&&t!==J&&M(J,n,r)}:M,B=function(t){var n=D[t]=S(F[N]);return n._k=t,n},V=U&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,n,e){return t===J&&Y(G,n,e),m(t),n=O(n,!0),m(e),o(D,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=S(e,{enumerable:w(0,!1)})):(o(t,C)||M(t,C,w(1,{})),t[C][n]=!0),z(t,n,e)):M(t,n,e)},H=function(t,n){m(t);for(var e,r=g(n=x(n)),o=0,u=r.length;u>o;)Y(t,e=r[o++],n[e]);return t},Q=function(t,n){return void 0===n?S(t):H(S(t),n)},X=function(t){var n=R.call(this,t=O(t,!0));return!(this===J&&o(D,t)&&!o(G,t))&&(!(n||!o(this,t)||!o(D,t)||o(this,C)&&this[C][t])||n)},$=function(t,n){if(t=x(t),n=O(n,!0),t!==J||!o(D,n)||o(G,n)){var e=k(t,n);return!e||!o(D,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=T(x(t)),r=[],u=0;e.length>u;)o(D,n=e[u++])||n==C||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===J,r=T(e?G:x(t)),u=[],i=0;r.length>i;)!o(D,n=r[i++])||e&&!o(J,n)||u.push(D[n]);return u};U||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===J&&n.call(G,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),z(this,t,w(1,e))};return u&&q&&z(J,t,{configurable:!0,set:n}),B(t)},f(F[N],"toString",function(){return this._k}),j.f=$,E.f=Y,e(35).f=_.f=Z,e(14).f=X,e(21).f=tt,u&&!e(20)&&f(J,"propertyIsEnumerable",X,!0),y.f=function(t){return B(v(t))}),i(i.G+i.W+i.F*!U,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)v(nt[et++]);for(var nt=P(v.store),et=0;nt.length>et;)d(nt[et++]);i(i.S+i.F*!U,"Symbol",{"for":function(t){return o(W,t+="")?W[t]:W[t]=F(t)},keyFor:function(t){if(V(t))return h(W,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){q=!0},useSimple:function(){q=!1}}),i(i.S+i.F*!U,"Object",{create:Q,defineProperty:Y,defineProperties:H,getOwnPropertyDescriptor:$,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),A&&i(i.S+i.F*(!U||a(function(){var t=F();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!V(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&b(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!V(n))return n}),r[1]=n,I.apply(A,r)}}}),F[N][L]||e(6)(F[N],L,F[N].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(27)("asyncIterator")},function(t,n,e){e(27)("observable")},function(t,n,e){e(69);for(var r=e(1),o=e(6),u=e(19),i=e(7)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[i]&&o(l,i,a),u[a]=u.Array}}]);
},{}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":19}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":20}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":21}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":22}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":23}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":24}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":25}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":26}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":27}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
},{"../core-js/promise":8}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
},{}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":3,"../core-js/is-iterable":4}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":2}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":9,"../core-js/symbol/iterator":10}],16:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":126}],17:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],18:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"base64-js":17,"ieee754":123,"isarray":124}],19:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":42,"../../modules/es6.array.from":109,"../../modules/es6.string.iterator":116}],20:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":107,"../modules/es6.string.iterator":116,"../modules/web.dom.iterable":121}],21:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":108,"../modules/es6.string.iterator":116,"../modules/web.dom.iterable":121}],22:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":42,"../modules/es6.map":111,"../modules/es6.object.to-string":114,"../modules/es6.string.iterator":116,"../modules/es7.map.to-json":118,"../modules/web.dom.iterable":121}],23:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":42,"../../modules/es6.object.assign":112}],24:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":42,"../../modules/es6.object.keys":113}],25:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":42,"../modules/es6.object.to-string":114,"../modules/es6.promise":115,"../modules/es6.string.iterator":116,"../modules/web.dom.iterable":121}],26:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":42,"../../modules/es6.object.to-string":114,"../../modules/es6.symbol":117,"../../modules/es7.symbol.async-iterator":119,"../../modules/es7.symbol.observable":120}],27:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":104,"../../modules/es6.string.iterator":116,"../../modules/web.dom.iterable":121}],28:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],29:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],30:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],31:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":62}],32:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":52}],33:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":96,"./_to-iobject":98,"./_to-length":99}],34:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require('./_ctx')
  , IObject  = require('./_iobject')
  , toObject = require('./_to-object')
  , toLength = require('./_to-length')
  , asc      = require('./_array-species-create');
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":36,"./_ctx":44,"./_iobject":59,"./_to-length":99,"./_to-object":100}],35:[function(require,module,exports){
var isObject = require('./_is-object')
  , isArray  = require('./_is-array')
  , SPECIES  = require('./_wks')('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"./_is-array":61,"./_is-object":62,"./_wks":105}],36:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":35}],37:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":38,"./_wks":105}],38:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],39:[function(require,module,exports){
'use strict';
var dP          = require('./_object-dp').f
  , create      = require('./_object-create')
  , redefineAll = require('./_redefine-all')
  , ctx         = require('./_ctx')
  , anInstance  = require('./_an-instance')
  , defined     = require('./_defined')
  , forOf       = require('./_for-of')
  , $iterDefine = require('./_iter-define')
  , step        = require('./_iter-step')
  , setSpecies  = require('./_set-species')
  , DESCRIPTORS = require('./_descriptors')
  , fastKey     = require('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":30,"./_ctx":44,"./_defined":45,"./_descriptors":46,"./_for-of":52,"./_iter-define":65,"./_iter-step":67,"./_meta":71,"./_object-create":74,"./_object-dp":75,"./_redefine-all":87,"./_set-species":89}],40:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":32,"./_classof":37}],41:[function(require,module,exports){
'use strict';
var global         = require('./_global')
  , $export        = require('./_export')
  , meta           = require('./_meta')
  , fails          = require('./_fails')
  , hide           = require('./_hide')
  , redefineAll    = require('./_redefine-all')
  , forOf          = require('./_for-of')
  , anInstance     = require('./_an-instance')
  , isObject       = require('./_is-object')
  , setToStringTag = require('./_set-to-string-tag')
  , dP             = require('./_object-dp').f
  , each           = require('./_array-methods')(0)
  , DESCRIPTORS    = require('./_descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":30,"./_array-methods":34,"./_descriptors":46,"./_export":50,"./_fails":51,"./_for-of":52,"./_global":53,"./_hide":55,"./_is-object":62,"./_meta":71,"./_object-dp":75,"./_redefine-all":87,"./_set-to-string-tag":90}],42:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],43:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":75,"./_property-desc":86}],44:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":28}],45:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],46:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":51}],47:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":53,"./_is-object":62}],48:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],49:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":80,"./_object-keys":83,"./_object-pie":84}],50:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":42,"./_ctx":44,"./_global":53,"./_hide":55}],51:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],52:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":31,"./_ctx":44,"./_is-array-iter":60,"./_iter-call":63,"./_to-length":99,"./core.get-iterator-method":106}],53:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],54:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],55:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":46,"./_object-dp":75,"./_property-desc":86}],56:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":53}],57:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":46,"./_dom-create":47,"./_fails":51}],58:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],59:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":38}],60:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":68,"./_wks":105}],61:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":38}],62:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],63:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":31}],64:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":55,"./_object-create":74,"./_property-desc":86,"./_set-to-string-tag":90,"./_wks":105}],65:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":50,"./_has":54,"./_hide":55,"./_iter-create":64,"./_iterators":68,"./_library":70,"./_object-gpo":81,"./_redefine":88,"./_set-to-string-tag":90,"./_wks":105}],66:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":105}],67:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],68:[function(require,module,exports){
module.exports = {};
},{}],69:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":83,"./_to-iobject":98}],70:[function(require,module,exports){
module.exports = true;
},{}],71:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":51,"./_has":54,"./_is-object":62,"./_object-dp":75,"./_uid":102}],72:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"./_cof":38,"./_global":53,"./_task":95}],73:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":51,"./_iobject":59,"./_object-gops":80,"./_object-keys":83,"./_object-pie":84,"./_to-object":100}],74:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":31,"./_dom-create":47,"./_enum-bug-keys":48,"./_html":56,"./_object-dps":76,"./_shared-key":91}],75:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":31,"./_descriptors":46,"./_ie8-dom-define":57,"./_to-primitive":101}],76:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":31,"./_descriptors":46,"./_object-dp":75,"./_object-keys":83}],77:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":46,"./_has":54,"./_ie8-dom-define":57,"./_object-pie":84,"./_property-desc":86,"./_to-iobject":98,"./_to-primitive":101}],78:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":79,"./_to-iobject":98}],79:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":48,"./_object-keys-internal":82}],80:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],81:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":54,"./_shared-key":91,"./_to-object":100}],82:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":33,"./_has":54,"./_shared-key":91,"./_to-iobject":98}],83:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":48,"./_object-keys-internal":82}],84:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],85:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":42,"./_export":50,"./_fails":51}],86:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],87:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":55}],88:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":55}],89:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":42,"./_descriptors":46,"./_global":53,"./_object-dp":75,"./_wks":105}],90:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":54,"./_object-dp":75,"./_wks":105}],91:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":92,"./_uid":102}],92:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":53}],93:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":28,"./_an-object":31,"./_wks":105}],94:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":45,"./_to-integer":97}],95:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":38,"./_ctx":44,"./_dom-create":47,"./_global":53,"./_html":56,"./_invoke":58}],96:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":97}],97:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],98:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":45,"./_iobject":59}],99:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":97}],100:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":45}],101:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":62}],102:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],103:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":42,"./_global":53,"./_library":70,"./_object-dp":75,"./_wks-ext":104}],104:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":105}],105:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":53,"./_shared":92,"./_uid":102}],106:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":37,"./_core":42,"./_iterators":68,"./_wks":105}],107:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":31,"./_core":42,"./core.get-iterator-method":106}],108:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":37,"./_core":42,"./_iterators":68,"./_wks":105}],109:[function(require,module,exports){
'use strict';
var ctx            = require('./_ctx')
  , $export        = require('./_export')
  , toObject       = require('./_to-object')
  , call           = require('./_iter-call')
  , isArrayIter    = require('./_is-array-iter')
  , toLength       = require('./_to-length')
  , createProperty = require('./_create-property')
  , getIterFn      = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":43,"./_ctx":44,"./_export":50,"./_is-array-iter":60,"./_iter-call":63,"./_iter-detect":66,"./_to-length":99,"./_to-object":100,"./core.get-iterator-method":106}],110:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":29,"./_iter-define":65,"./_iter-step":67,"./_iterators":68,"./_to-iobject":98}],111:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.1 Map Objects
module.exports = require('./_collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":41,"./_collection-strong":39}],112:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":50,"./_object-assign":73}],113:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":83,"./_object-sap":85,"./_to-object":100}],114:[function(require,module,exports){

},{}],115:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":28,"./_an-instance":30,"./_classof":37,"./_core":42,"./_ctx":44,"./_export":50,"./_for-of":52,"./_global":53,"./_is-object":62,"./_iter-detect":66,"./_library":70,"./_microtask":72,"./_redefine-all":87,"./_set-species":89,"./_set-to-string-tag":90,"./_species-constructor":93,"./_task":95,"./_wks":105}],116:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":65,"./_string-at":94}],117:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":31,"./_descriptors":46,"./_enum-keys":49,"./_export":50,"./_fails":51,"./_global":53,"./_has":54,"./_hide":55,"./_is-array":61,"./_keyof":69,"./_library":70,"./_meta":71,"./_object-create":74,"./_object-dp":75,"./_object-gopd":77,"./_object-gopn":79,"./_object-gopn-ext":78,"./_object-gops":80,"./_object-keys":83,"./_object-pie":84,"./_property-desc":86,"./_redefine":88,"./_set-to-string-tag":90,"./_shared":92,"./_to-iobject":98,"./_to-primitive":101,"./_uid":102,"./_wks":105,"./_wks-define":103,"./_wks-ext":104}],118:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":40,"./_export":50}],119:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":103}],120:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":103}],121:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":53,"./_hide":55,"./_iterators":68,"./_wks":105,"./es6.array.iterator":110}],122:[function(require,module,exports){
(function (Buffer){
/*!
 * @description Recursive object extending
 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
 * @license MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2015 Viacheslav Lotsmanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

function isSpecificValue(val) {
	return (
		val instanceof Buffer
		|| val instanceof Date
		|| val instanceof RegExp
	) ? true : false;
}

function cloneSpecificValue(val) {
	if (val instanceof Buffer) {
		var x = new Buffer(val.length);
		val.copy(x);
		return x;
	} else if (val instanceof Date) {
		return new Date(val.getTime());
	} else if (val instanceof RegExp) {
		return new RegExp(val);
	} else {
		throw new Error('Unexpected situation');
	}
}

/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
	var clone = [];
	arr.forEach(function (item, index) {
		if (typeof item === 'object' && item !== null) {
			if (Array.isArray(item)) {
				clone[index] = deepCloneArray(item);
			} else if (isSpecificValue(item)) {
				clone[index] = cloneSpecificValue(item);
			} else {
				clone[index] = deepExtend({}, item);
			}
		} else {
			clone[index] = item;
		}
	});
	return clone;
}

/**
 * Extening object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = module.exports = function (/*obj_1, [obj_2], [obj_N]*/) {
	if (arguments.length < 1 || typeof arguments[0] !== 'object') {
		return false;
	}

	if (arguments.length < 2) {
		return arguments[0];
	}

	var target = arguments[0];

	// convert arguments to array and cut off target object
	var args = Array.prototype.slice.call(arguments, 1);

	var val, src, clone;

	args.forEach(function (obj) {
		// skip argument if it is array or isn't object
		if (typeof obj !== 'object' || Array.isArray(obj)) {
			return;
		}

		Object.keys(obj).forEach(function (key) {
			src = target[key]; // source value
			val = obj[key]; // new value

			// recursion prevention
			if (val === target) {
				return;

			/**
			 * if new value isn't object then just overwrite by new value
			 * instead of extending.
			 */
			} else if (typeof val !== 'object' || val === null) {
				target[key] = val;
				return;

			// just clone arrays (and recursive clone objects inside)
			} else if (Array.isArray(val)) {
				target[key] = deepCloneArray(val);
				return;

			// custom cloning and overwrite for specific objects
			} else if (isSpecificValue(val)) {
				target[key] = cloneSpecificValue(val);
				return;

			// overwrite by new value if source isn't object or array
			} else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
				target[key] = deepExtend({}, val);
				return;

			// source value and new value is objects both, extending...
			} else {
				target[key] = deepExtend(src, val);
				return;
			}
		});
	});

	return target;
}

}).call(this,require("buffer").Buffer)

},{"buffer":18}],123:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],124:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],125:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],126:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./runtime":127}],127:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return Promise.resolve(value.arg).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":125}],128:[function(require,module,exports){
'use strict';

/**
 * Form Builder events
 * @return {Object} various events to be trigger
 */
// function fbEvents(){
var events = {};

events.loaded = new Event('loaded');
events.viewData = new Event('viewData');
events.userDeclined = new Event('userDeclined');
events.modalClosed = new Event('modalClosed');
events.modalOpened = new Event('modalOpened');
events.formSaved = new Event('formSaved');
events.fieldAdded = new Event('fieldAdded');
events.fieldRemoved = new Event('fieldRemoved');
events.fieldRendered = new Event('fieldRendered');

//   return events;
// }

module.exports = events;

},{}],129:[function(require,module,exports){
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./kc-toggle.js');
require('./polyfills.js');
var extend = require('deep-extend');

(function ($) {
  var FormBuilder = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(options, element) {
      var _this = this;

      var utils, mi18n, formBuilder, defaults, frmbID, _extend, i18n, opts, _helpers, subtypes, $sortableFields, lastID, boxID, frmbFields, cbUl, $cbUL, processControl, $formWrap, $stageWrap, cbWrap, viewDataText, m, buttons, clearAll, saveAll, formActions, saveAndUpdate, nonEditableFields, prepFieldVars, loadFields, nameAttr, fieldOptions, advFields, processTypeUserAttrs, inputUserAttrs, selectUserAttrs, boolAttribute, btnStyles, numberAttribute, selectAttribute, textAttribute, requiredField, appendNewField, selectFieldOptions, cloneItem;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              selectUserAttrs = function selectUserAttrs(name, options) {
                var optis = (0, _keys2.default)(options.options).map(function (val) {
                  var attrs = { value: val };
                  if (val === options.value) {
                    attrs.selected = null;
                  }
                  return '<option ' + utils.attrString(attrs) + '>' + options.options[val] + '</option>';
                });
                var selectAttrs = {
                  id: name + '-' + lastID,
                  title: options.description || options.label || name.toUpperCase(),
                  name: name,
                  className: 'fld-' + name + ' form-control'
                };
                var label = '<label for="' + selectAttrs.id + '">' + opts.messages[name] + '</label>';

                (0, _keys2.default)(options).filter(function (prop) {
                  return !utils.inArray(prop, ['value', 'options', 'label']);
                }).forEach(function (attr) {
                  selectAttrs[attr] = options[attr];
                });

                var select = '<select ' + utils.attrString(selectAttrs) + '>' + optis.join('') + '</select>';
                var inputWrap = '<div class="input-wrap">' + select + '</div>';
                return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
              };

              inputUserAttrs = function inputUserAttrs(name, attrs) {
                var textAttrs = {
                  id: name + '-' + lastID,
                  title: attrs.description || attrs.label || name.toUpperCase(),
                  name: name,
                  type: attrs.type || 'text',
                  className: ['fld-' + name]
                };
                var label = '<label for="' + textAttrs.id + '">' + opts.messages[name] + '</label>';

                if (!utils.inArray(textAttrs.type, ['checkbox', 'checkbox-group', 'radio-group'])) {
                  textAttrs.className.push('form-control');
                }

                textAttrs = (0, _assign2.default)({}, attrs, textAttrs);
                var textInput = '<input ' + utils.attrString(textAttrs) + '>';
                var inputWrap = '<div class="input-wrap">' + textInput + '</div>';
                return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
              };

              processTypeUserAttrs = function processTypeUserAttrs(typeUserAttr, values) {
                var advField = [];

                for (var attribute in typeUserAttr) {
                  if (typeUserAttr.hasOwnProperty(attribute)) {
                    var orig = opts.messages[attribute];
                    var origValue = typeUserAttr[attribute].value;
                    typeUserAttr[attribute].value = values[attribute] || typeUserAttr[attribute].value || '';

                    if (typeUserAttr[attribute].label) {
                      opts.messages[attribute] = typeUserAttr[attribute].label;
                    }

                    if (typeUserAttr[attribute].options) {
                      advField.push(selectUserAttrs(attribute, typeUserAttr[attribute]));
                    } else {
                      advField.push(inputUserAttrs(attribute, typeUserAttr[attribute]));
                    }

                    opts.messages[attribute] = orig;
                    typeUserAttr[attribute].value = origValue;
                  }
                }

                return advField.join('');
              };

              utils = require('./utils.js');
              mi18n = require('mi18n').default;
              formBuilder = this;
              defaults = {
                controlPosition: 'right',
                controlOrder: ['autocomplete', 'button', 'checkbox', 'checkbox-group', 'date', 'file', 'header', 'hidden', 'paragraph', 'number', 'radio-group', 'select', 'text', 'textarea'],
                dataType: 'json',
                // Array of fields to disable
                disableFields: [],
                editOnAdd: false,
                // Uneditable fields or other content you would like to appear
                // before and after regular fields:
                append: false,
                prepend: false,
                // array of objects with fields values
                // ex:
                // defaultFields: [{
                //   label: 'First Name',
                //   name: 'first-name',
                //   required: 'true',
                //   description: 'Your first name',
                //   type: 'text'
                // }, {
                //   label: 'Phone',
                //   name: 'phone',
                //   description: 'How can we reach you?',
                //   type: 'text'
                // }],
                defaultFields: [],
                inputSets: [],
                fieldRemoveWarn: false,
                roles: {
                  1: 'Administrator'
                },
                messages: {
                  addOption: 'Add Option +',
                  allFieldsRemoved: 'All fields were removed.',
                  allowMultipleFiles: 'Allow users to upload multiple files',
                  autocomplete: 'Autocomplete',
                  button: 'Button',
                  cannotBeEmpty: 'This field cannot be empty',
                  checkboxGroup: 'Checkbox Group',
                  checkbox: 'Checkbox',
                  checkboxes: 'Checkboxes',
                  className: 'Class',
                  clearAllMessage: 'Are you sure you want to clear all fields?',
                  clearAll: 'Clear',
                  close: 'Close',
                  content: 'Content',
                  copy: 'Copy To Clipboard',
                  copyButton: '&#43;',
                  copyButtonTooltip: 'Copy',
                  dateField: 'Date Field',
                  description: 'Help Text',
                  descriptionField: 'Description',
                  devMode: 'Developer Mode',
                  editNames: 'Edit Names',
                  editorTitle: 'Form Elements',
                  editXML: 'Edit XML',
                  enableOther: 'Enable &quot;Other&quot;',
                  enableOtherMsg: 'Let users to enter an unlisted option',
                  fieldDeleteWarning: false,
                  fieldVars: 'Field Variables',
                  fieldNonEditable: 'This field cannot be edited.',
                  fieldRemoveWarning: 'Are you sure you want to remove this field?',
                  fileUpload: 'File Upload',
                  formUpdated: 'Form Updated',
                  getStarted: 'Drag a field from the right to this area',
                  header: 'Header',
                  hide: 'Edit',
                  hidden: 'Hidden Input',
                  label: 'Label',
                  labelEmpty: 'Field Label cannot be empty',
                  limitRole: 'Limit access to one or more of the following roles:',
                  mandatory: 'Mandatory',
                  maxlength: 'Max Length',
                  minOptionMessage: 'This field requires a minimum of 2 options',
                  multipleFiles: 'Multiple Files',
                  name: 'Name',
                  no: 'No',
                  noFieldsToClear: 'There are no fields to clear',
                  number: 'Number',
                  off: 'Off',
                  on: 'On',
                  option: 'Option',
                  optional: 'optional',
                  optionLabelPlaceholder: 'Label',
                  optionValuePlaceholder: 'Value',
                  optionEmpty: 'Option value required',
                  other: 'Other',
                  paragraph: 'Paragraph',
                  placeholder: 'Placeholder',
                  placeholders: {
                    value: 'Value',
                    label: 'Label',
                    text: '',
                    textarea: '',
                    email: 'Enter you email',
                    placeholder: '',
                    className: 'space separated classes',
                    password: 'Enter your password'
                  },
                  preview: 'Preview',
                  radioGroup: 'Radio Group',
                  radio: 'Radio',
                  removeMessage: 'Remove Element',
                  removeOption: 'Remove Option',
                  remove: '&#215;',
                  required: 'Required',
                  richText: 'Rich Text Editor',
                  roles: 'Access',
                  rows: 'Rows',
                  save: 'Save',
                  selectOptions: 'Options',
                  select: 'Select',
                  selectColor: 'Select Color',
                  selectionsMessage: 'Allow Multiple Selections',
                  size: 'Size',
                  sizes: {
                    xs: 'Extra Small',
                    sm: 'Small',
                    m: 'Default',
                    lg: 'Large'
                  },
                  style: 'Style',
                  styles: {
                    btn: {
                      'default': 'Default',
                      danger: 'Danger',
                      info: 'Info',
                      primary: 'Primary',
                      success: 'Success',
                      warning: 'Warning'
                    }
                  },
                  subtype: 'Type',
                  text: 'Text Field',
                  textArea: 'Text Area',
                  toggle: 'Toggle',
                  warning: 'Warning!',
                  value: 'Value',
                  viewJSON: '{  }',
                  viewXML: '&lt;/&gt;',
                  yes: 'Yes'
                },
                notify: {
                  error: function error(message) {
                    return console.error(message);
                  },
                  success: function success(message) {
                    return console.log(message);
                  },
                  warning: function warning(message) {
                    return console.warn(message);
                  }
                },
                onSave: utils.noop,
                onClearAll: utils.noop,
                actionButtons: [{
                  label: 'Clear',
                  className: 'clear-all btn btn-danger',
                  events: {
                    click: function click(e) {
                      var fields = $('li.form-field', formBuilder.stage);
                      var buttonPosition = e.target.getBoundingClientRect();
                      var bodyRect = document.body.getBoundingClientRect();
                      var coords = {
                        pageX: buttonPosition.left + buttonPosition.width / 2,
                        pageY: buttonPosition.top - bodyRect.top - 12
                      };

                      if (fields.length) {
                        _helpers.confirm(opts.messages.clearAllMessage, function () {
                          _helpers.removeAllfields();
                          opts.notify.success(opts.messages.allFieldsRemoved);
                          _helpers.save();
                          opts.onClearAll();
                        }, coords);
                      } else {
                        _helpers.dialog(opts.messages.noFieldsToClear, coords);
                      }
                    }
                  }
                }, {
                  label: 'Save',
                  type: 'button',
                  className: 'btn btn-primary save-template',
                  events: {
                    click: function click() {
                      return opts.onSave(_helpers.save());
                    }
                  }
                }],
                sortableControls: false,
                stickyControls: false,
                showActionButtons: true,
                typeUserAttrs: {},
                typeUserEvents: {},
                prefix: 'form-builder-'
              };


              defaults.i18n = {
                langs: ['en-US'],
                preloaded: {
                  'en-US': {
                    addOption: 'Add Option +',
                    allFieldsRemoved: 'All fields were removed.',
                    allowMultipleFiles: 'Allow users to upload multiple files',
                    autocomplete: 'Autocomplete',
                    button: 'Button',
                    cannotBeEmpty: 'This field cannot be empty',
                    checkboxGroup: 'Checkbox Group',
                    checkbox: 'Checkbox',
                    checkboxes: 'Checkboxes',
                    className: 'Class',
                    clearAllMessage: 'Are you sure you want to clear all fields?',
                    clearAll: 'Clear',
                    close: 'Close',
                    content: 'Content',
                    copy: 'Copy To Clipboard',
                    copyButton: '&#43;',
                    copyButtonTooltip: 'Copy',
                    dateField: 'Date Field',
                    description: 'Help Text',
                    descriptionField: 'Description',
                    devMode: 'Developer Mode',
                    editNames: 'Edit Names',
                    editorTitle: 'Form Elements',
                    editXML: 'Edit XML',
                    enableOther: 'Enable &quot;Other&quot;',
                    enableOtherMsg: 'Let users to enter an unlisted option',
                    fieldDeleteWarning: false,
                    fieldVars: 'Field Variables',
                    fieldNonEditable: 'This field cannot be edited.',
                    fieldRemoveWarning: 'Are you sure you want to remove this field?',
                    fileUpload: 'File Upload',
                    formUpdated: 'Form Updated',
                    getStarted: 'Drag a field from the right to this area',
                    header: 'Header',
                    hide: 'Edit',
                    hidden: 'Hidden Input',
                    label: 'Label',
                    labelEmpty: 'Field Label cannot be empty',
                    limitRole: 'Limit access to one or more of the following roles:',
                    mandatory: 'Mandatory',
                    maxlength: 'Max Length',
                    minOptionMessage: 'This field requires a minimum of 2 options',
                    multipleFiles: 'Multiple Files',
                    name: 'Name',
                    no: 'No',
                    noFieldsToClear: 'There are no fields to clear',
                    number: 'Number',
                    off: 'Off',
                    on: 'On',
                    option: 'Option',
                    optional: 'optional',
                    optionLabelPlaceholder: 'Label',
                    optionValuePlaceholder: 'Value',
                    optionEmpty: 'Option value required',
                    other: 'Other',
                    paragraph: 'Paragraph',
                    placeholder: 'Placeholder',
                    placeholders: {
                      value: 'Value',
                      label: 'Label',
                      text: '',
                      textarea: '',
                      email: 'Enter you email',
                      placeholder: '',
                      className: 'space separated classes',
                      password: 'Enter your password'
                    },
                    preview: 'Preview',
                    radioGroup: 'Radio Group',
                    radio: 'Radio',
                    removeMessage: 'Remove Element',
                    removeOption: 'Remove Option',
                    remove: '&#215;',
                    required: 'Required',
                    richText: 'Rich Text Editor',
                    roles: 'Access',
                    rows: 'Rows',
                    save: 'Save',
                    selectOptions: 'Options',
                    select: 'Select',
                    selectColor: 'Select Color',
                    selectionsMessage: 'Allow Multiple Selections',
                    size: 'Size',
                    sizes: {
                      xs: 'Extra Small',
                      sm: 'Small',
                      m: 'Default',
                      lg: 'Large'
                    },
                    style: 'Style',
                    styles: {
                      btn: {
                        'default': 'Default',
                        danger: 'Danger',
                        info: 'Info',
                        primary: 'Primary',
                        success: 'Success',
                        warning: 'Warning'
                      }
                    },
                    subtype: 'Type',
                    text: 'Text Field',
                    textArea: 'Text Area',
                    toggle: 'Toggle',
                    warning: 'Warning!',
                    value: 'Value',
                    viewJSON: '{  }',
                    viewXML: '&lt;/&gt;',
                    yes: 'Yes'
                  }
                }
              };

              frmbID = 'frmb-' + $('ul[id^=frmb-]').length++;

              formBuilder.formID = frmbID;
              _extend = extend(defaults, options), i18n = _extend.i18n, opts = (0, _objectWithoutProperties3.default)(_extend, ['i18n']);
              _context2.next = 13;
              return mi18n.init(i18n);

            case 13:
              _helpers = require('./helpers.js')(opts, formBuilder);
              subtypes = _helpers.processSubtypes(opts.subtypes);
              $sortableFields = $('<ul/>').attr('id', frmbID).addClass('frmb');


              formBuilder.layout = _helpers.editorLayout(opts.controlPosition);
              formBuilder.stage = $sortableFields[0];

              lastID = frmbID + '-fld-1';
              boxID = frmbID + '-control-box';

              // create array of field objects to cycle through

              frmbFields = [{
                label: opts.messages.autocomplete,
                attrs: {
                  type: 'autocomplete',
                  className: 'autocomplete',
                  name: 'autocomplete'
                }
              }, {
                label: opts.messages.button,
                attrs: {
                  type: 'button',
                  className: 'button-input',
                  name: 'button'
                }
              }, {
                label: opts.messages.checkbox,
                attrs: {
                  type: 'checkbox',
                  className: 'checkbox',
                  name: 'checkbox'
                }
              }, {
                label: opts.messages.checkboxGroup,
                attrs: {
                  type: 'checkbox-group',
                  className: 'checkbox-group',
                  name: 'checkbox-group'
                }
              }, {
                label: opts.messages.dateField,
                attrs: {
                  type: 'date',
                  className: 'calendar',
                  name: 'date-input'
                }
              }, {
                label: opts.messages.fileUpload,
                attrs: {
                  type: 'file',
                  className: 'file-input',
                  name: 'file-input'
                }
              }, {
                label: opts.messages.header,
                attrs: {
                  type: 'header',
                  className: 'header'
                }
              }, {
                label: opts.messages.hidden,
                attrs: {
                  type: 'hidden',
                  className: 'hidden-input',
                  name: 'hidden-input'
                }
              }, {
                label: opts.messages.number,
                attrs: {
                  type: 'number',
                  className: 'number',
                  name: 'number'
                }
              }, {
                label: opts.messages.paragraph,
                attrs: {
                  type: 'paragraph',
                  className: 'paragraph'
                }
              }, {
                label: opts.messages.radioGroup,
                attrs: {
                  type: 'radio-group',
                  className: 'radio-group',
                  name: 'radio-group'
                }
              }, {
                label: opts.messages.select,
                attrs: {
                  type: 'select',
                  className: 'select',
                  name: 'select'
                }
              }, {
                label: opts.messages.text,
                attrs: {
                  type: 'text',
                  className: 'text-input',
                  name: 'text-input'
                }
              }, {
                label: opts.messages.textArea,
                attrs: {
                  type: 'textarea',
                  className: 'text-area',
                  name: 'textarea'
                }
              }];


              frmbFields = _helpers.orderFields(frmbFields);

              if (opts.disableFields) {
                // remove disabledFields
                frmbFields = frmbFields.filter(function (field) {
                  return !utils.inArray(field.attrs.type, opts.disableFields);
                });
              }

              // Create draggable fields for formBuilder
              cbUl = utils.markup('ul', null, { id: boxID, className: 'frmb-control' });

              formBuilder.controls = cbUl;

              if (opts.sortableControls) {
                cbUl.classList.add('sort-enabled');
              }

              $cbUL = $(cbUl);

              // Loop through

              utils.forEach(frmbFields, function (i) {
                var $field = $('<li/>', {
                  'class': 'icon-' + frmbFields[i].attrs.className,
                  'type': frmbFields[i].type,
                  'name': frmbFields[i].className,
                  'label': frmbFields[i].label
                });

                $field.data('newFieldData', frmbFields[i]);

                var typeLabel = utils.markup('span', frmbFields[i].label);
                $field.html(typeLabel).appendTo($cbUL);
              });

              if (opts.inputSets.length) {
                $('<li/>', { 'class': 'fb-separator' }).html('<hr>').appendTo($cbUL);
                opts.inputSets.forEach(function (set) {
                  set.name = set.name || _helpers.makeClassName(set.label);
                  var $set = $('<li/>', { 'class': 'input-set-control', type: set.name });
                  $set.html(set.label).appendTo($cbUL);
                });
              }

              // Sortable fields
              $sortableFields.sortable({
                cursor: 'move',
                opacity: 0.9,
                revert: 150,
                beforeStop: _helpers.beforeStop,
                start: _helpers.startMoving,
                stop: _helpers.stopMoving,
                cancel: 'input, select, .disabled, .form-group, .btn',
                placeholder: 'frmb-placeholder'
              });

              // ControlBox with different fields
              $cbUL.sortable({
                helper: 'clone',
                opacity: 0.9,
                connectWith: $sortableFields,
                cancel: '.fb-separator',
                cursor: 'move',
                scroll: false,
                placeholder: 'ui-state-highlight',
                start: _helpers.startMoving,
                stop: _helpers.stopMoving,
                revert: 150,
                beforeStop: _helpers.beforeStop,
                distance: 3,
                update: function update(event, ui) {
                  if (_helpers.doCancel) {
                    return false;
                  }
                  if (ui.item.parent()[0] === $sortableFields[0]) {
                    processControl(ui.item);
                    _helpers.doCancel = true;
                  } else {
                    _helpers.setFieldOrder($cbUL);
                    _helpers.doCancel = !opts.sortableControls;
                  }
                }
              });

              processControl = function processControl(control) {
                if (control[0].classList.contains('input-set-control')) {
                  var inputSet = opts.inputSets.filter(function (set) {
                    return set.name === control[0].type;
                  })[0];
                  if (inputSet.showHeader) {
                    var header = {
                      type: 'header',
                      subtype: 'h2',
                      id: inputSet.name,
                      label: inputSet.label
                    };
                    prepFieldVars(header, true);
                  }
                  inputSet.fields.forEach(function (field) {
                    prepFieldVars(field, true);
                  });
                } else {
                  prepFieldVars(control, true);
                }
              };

              $formWrap = $('<div/>', {
                id: frmbID + '-form-wrap',
                'class': 'form-wrap form-builder' + _helpers.mobileClass()
              });


              formBuilder.editor = $formWrap[0];

              $stageWrap = $('<div/>', {
                id: frmbID + '-stage-wrap',
                'class': 'stage-wrap ' + formBuilder.layout.stage
              });
              cbWrap = $('<div/>', {
                id: frmbID + '-cb-wrap',
                'class': 'cb-wrap ' + formBuilder.layout.controls
              }).append($cbUL[0]);


              if (opts.showActionButtons) {
                // Build our headers and action links
                viewDataText = void 0;
                m = utils.markup;

                if (opts.dataType === 'xml') {
                  viewDataText = opts.messages.viewXML;
                } else {
                  viewDataText = opts.messages.viewJSON;
                }

                buttons = opts.actionButtons.map(_helpers.processActionButtons);

                // const viewData = m('button', viewDataText, {
                //   id: frmbID + '-view-data',
                //   type: 'button',
                //   className: 'view-data btn btn-default'
                // });

                clearAll = m('button', opts.messages.clearAll, {
                  id: frmbID + '-clear-all',
                  type: 'button',
                  className: 'clear-all btn btn-danger'
                });
                saveAll = m('button', opts.messages.save, {
                  className: 'btn btn-primary ' + opts.prefix + 'save',
                  id: frmbID + '-save',
                  type: 'button'
                });
                formActions = m('div', buttons, {
                  className: 'form-actions btn-group'
                });


                cbWrap.append(formActions);
              }

              $stageWrap.append($sortableFields, cbWrap);
              $stageWrap.before($formWrap);
              $formWrap.append($stageWrap, cbWrap);

              if (element.type !== 'textarea') {
                $(element).append($formWrap);
              } else {
                $(element).replaceWith($formWrap);
              }

              saveAndUpdate = _helpers.debounce(function (evt) {
                if (evt) {
                  if (evt.type === 'keyup' && evt.target.name === 'className') {
                    return false;
                  }

                  var $field = $(evt.target).closest('.form-field');
                  _helpers.updatePreview($field);
                  _helpers.save();
                }
              });

              // Save field on change

              $sortableFields.on('change blur keyup', '.form-elements input, .form-elements select, .form-elements textarea', saveAndUpdate);

              $('li', $cbUL).click(function (evt) {
                var $control = $(evt.target).closest('.ui-sortable-handle');
                _helpers.stopIndex = undefined;
                processControl($control);
                _helpers.save();
              });

              // Add append and prepend options if necessary

              nonEditableFields = function nonEditableFields() {
                var cancelArray = [];

                if (opts.prepend && !$('.disabled.prepend', $sortableFields).length) {
                  var prependedField = utils.markup('li', opts.prepend, { className: 'disabled prepend' });
                  cancelArray.push(true);
                  $sortableFields.prepend(prependedField);
                }

                if (opts.append && !$('.disabled.append', $sortableFields).length) {
                  var appendedField = utils.markup('li', opts.append, { className: 'disabled append' });
                  cancelArray.push(true);
                  $sortableFields.append(appendedField);
                }

                if (cancelArray.some(function (elem) {
                  return elem === true;
                })) {
                  $stageWrap.removeClass('empty');
                }
              };

              prepFieldVars = function prepFieldVars($field) {
                var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                var field = {};
                if ($field instanceof jQuery) {
                  var fieldData = $field.data('newFieldData');
                  if (fieldData) {
                    field = fieldData.attrs;
                    field.label = fieldData.label;
                  } else {
                    var attrs = $field[0].attributes;
                    if (!isNew) {
                      field.values = $field.children().map(function (index, elem) {
                        return {
                          label: $(elem).text(),
                          value: $(elem).attr('value'),
                          selected: Boolean($(elem).attr('selected'))
                        };
                      });
                    }

                    for (var i = attrs.length - 1; i >= 0; i--) {
                      field[attrs[i].name] = attrs[i].value;
                    }
                  }
                } else {
                  field = (0, _assign2.default)({}, $field);
                }

                field.name = isNew ? nameAttr(field) : field.name || nameAttr(field);

                if (isNew && utils.inArray(field.type, ['text', 'number', 'file', 'select', 'textarea'])) {
                  field.className = 'form-control'; // backwards compatibility
                } else {
                  field.className = field.class || field.className; // backwards compatibility
                }

                var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
                if (match) {
                  field.style = match[1];
                }

                utils.escapeAttrs(field);

                appendNewField(field, isNew);
                if (isNew) {
                  document.dispatchEvent(formBuilder.events.fieldAdded);
                }
                $stageWrap.removeClass('empty');
              };

              // Parse saved XML template data


              loadFields = function loadFields() {
                var formData = formBuilder.formData;
                if (formData && formData.length) {
                  for (var i = 0; i < formData.length; i++) {
                    prepFieldVars(formData[i]);
                  }
                  $stageWrap.removeClass('empty');
                } else if (opts.defaultFields && opts.defaultFields.length) {
                  // Load default fields if none are set
                  opts.defaultFields.forEach(function (field) {
                    return prepFieldVars(field);
                  });
                  $stageWrap.removeClass('empty');
                } else if (!opts.prepend && !opts.append) {
                  $stageWrap.addClass('empty').attr('data-content', opts.messages.getStarted);
                }
                _helpers.save();

                var $fields = $('li.form-field:not(.disabled)', $sortableFields);

                $fields.each(function (i) {
                  return _helpers.updatePreview($($fields[i]));
                });

                nonEditableFields();
              };

              // callback to track disabled tooltips


              $sortableFields.on('mousemove', 'li.disabled', function (e) {
                $('.frmb-tt', _this).css({
                  left: e.offsetX - 16,
                  top: e.offsetY - 34
                });
              });

              // callback to call disabled tooltips
              $sortableFields.on('mouseenter', 'li.disabled', function (e) {
                return _helpers.disabledTT.add($(_this));
              });

              // callback to call disabled tooltips
              $sortableFields.on('mouseleave', 'li.disabled', function (e) {
                return _helpers.disabledTT.remove($(_this));
              });

              nameAttr = function nameAttr(field) {
                var epoch = new Date().getTime();
                return field.type + '-' + epoch;
              };

              /**
               * Add data for field with options [select, checkbox-group, radio-group]
               *
               * @todo   refactor this nasty ~crap~ code, its actually painful to look at
               * @param  {Object} values
               * @return {String} field options markup
               */


              fieldOptions = function fieldOptions(values) {
                var optionActions = [utils.markup('a', opts.messages.addOption, { className: 'add add-opt' })];
                var fieldOptions = ['<label class="false-label">' + opts.messages.selectOptions + '</label>'];
                var isMultiple = values.multiple || values.type === 'checkbox-group';

                if (!values.values || !values.values.length) {
                  values.values = [1, 2, 3].map(function (index) {
                    var label = opts.messages.option + ' ' + index;
                    var option = {
                      selected: false,
                      label: label,
                      value: utils.hyphenCase(label)
                    };
                    return option;
                  });
                  values.values[0].selected = true;
                } else {
                  // ensure option data is has all required keys
                  values.values.forEach(function (option) {
                    return (0, _assign2.default)({}, { selected: false }, option);
                  });
                }

                fieldOptions.push('<div class="sortable-options-wrap">');

                fieldOptions.push('<ol class="sortable-options">');
                utils.forEach(values.values, function (i) {
                  fieldOptions.push(selectFieldOptions(values.name, values.values[i], isMultiple));
                });
                fieldOptions.push('</ol>');
                fieldOptions.push(utils.markup('div', optionActions, { className: 'option-actions' }).outerHTML);
                fieldOptions.push('</div>');

                return utils.markup('div', fieldOptions.join(''), { className: 'form-group field-options' }).outerHTML;
              };

              /**
               * Build the editable properties for the field
               * @param  {object} values configuration object for advanced fields
               * @return {String}        markup for advanced fields
               */


              advFields = function advFields(values) {
                var advFields = [];
                var key = void 0;
                var optionFields = ['select', 'checkbox-group', 'radio-group'];
                var isOptionField = function () {
                  return optionFields.indexOf(values.type) !== -1;
                }();
                var valueField = !utils.inArray(values.type, ['header', 'paragraph', 'file'].concat(optionFields));
                var roles = values.role !== undefined ? values.role.split(',') : [];

                advFields.push(requiredField(values));

                if (values.type === 'checkbox') {
                  advFields.push(boolAttribute('toggle', values, { first: opts.messages.toggle }));
                }

                advFields.push(textAttribute('label', values));

                values.size = values.size || 'm';
                values.style = values.style || 'default';

                // Help Text / Description Field
                if (!utils.inArray(values.type, ['header', 'paragraph', 'button'])) {
                  advFields.push(textAttribute('description', values));
                }

                if (subtypes[values.type]) {
                  var optionData = subtypes[values.type];
                  advFields.push(selectAttribute('subtype', values, optionData));
                }

                if (values.type === 'button') {
                  advFields.push(btnStyles(values.style));
                }

                if (values.type === 'number') {
                  advFields.push(numberAttribute('min', values));
                  advFields.push(numberAttribute('max', values));
                  advFields.push(numberAttribute('step', values));
                }

                // Placeholder
                advFields.push(textAttribute('placeholder', values));

                // TextArea Rows Attribute
                if (values.type === 'textarea') {
                  advFields.push(numberAttribute('rows', values));
                }

                // Class
                advFields.push(textAttribute('className', values));

                advFields.push(textAttribute('name', values));

                if (valueField) {
                  advFields.push(textAttribute('value', values));
                }

                if (values.type === 'file') {
                  var labels = {
                    first: opts.messages.multipleFiles,
                    second: opts.messages.allowMultipleFiles
                  };
                  advFields.push(boolAttribute('multiple', values, labels));
                }

                var rolesDisplay = values.role !== undefined ? 'style="display:block"' : '';
                var availableRoles = ['<div class="available-roles" ' + rolesDisplay + '>'];
                for (key in opts.roles) {
                  if (opts.roles.hasOwnProperty(key)) {
                    var checked = utils.inArray(key, roles) ? 'checked' : '';
                    var roleId = 'fld-' + lastID + '-roles-' + key;
                    availableRoles.push('<input type="checkbox" name="roles[]" value="' + key + '" id="' + roleId + '" ' + checked + ' class="roles-field" /> <label for="' + roleId + '">' + opts.roles[key] + '</label><br/>');
                  }
                }

                availableRoles.push('</div>');

                var accessLabels = { first: opts.messages.roles, second: opts.messages.limitRole, content: availableRoles.join('') };

                advFields.push(boolAttribute('access', values, accessLabels));

                if (values.type === 'checkbox-group' || values.type === 'radio-group') {
                  advFields.push(boolAttribute('other', values, { first: opts.messages.enableOther, second: opts.messages.enableOtherMsg }));
                }

                if (values.type === 'select') {
                  advFields.push(boolAttribute('multiple', values, { first: ' ', second: opts.messages.selectionsMessage }));
                }

                if (isOptionField) {
                  advFields.push(fieldOptions(values));
                }

                if (utils.inArray(values.type, ['text', 'textarea'])) {
                  advFields.push(numberAttribute('maxlength', values));
                }

                // Append custom attributes as defined in typeUserAttrs option
                if (opts.typeUserAttrs[values.type]) {
                  advFields.push(processTypeUserAttrs(opts.typeUserAttrs[values.type], values));
                }

                return advFields.join('');
              };

              /**
               * Processes typeUserAttrs
               * @param  {Object} typeUserAttr option
               * @param  {Object} values       field attributes
               * @return {String}              markup for custom user attributes
               */


              /**
               * Text input value for attribute
               * @param  {String} name
               * @param  {Object} attrs also known as values
               * @return {String}       input markup
               */


              /**
               * Select input for multiple choice user attributes
               * @todo  replace with selectAttr
               * @param  {String} name
               * @param  {Object} options
               * @return {String}         select markup
               */


              boolAttribute = function boolAttribute(name, values, labels) {
                if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][name]) {
                  return;
                }

                var label = function label(txt) {
                  return '<label for="' + name + '-' + lastID + '">' + txt + '</label>';
                };
                var checked = values[name] !== undefined ? 'checked' : '';
                var input = '<input type="checkbox" class="fld-' + name + '" name="' + name + '" value="true" ' + checked + ' id="' + name + '-' + lastID + '"/> ';
                var left = [];
                var right = [input];

                if (labels.first) {
                  left.unshift(label(labels.first));
                }

                if (labels.second) {
                  right.push(label(labels.second));
                }

                if (labels.content) {
                  right.push(labels.content);
                }

                right.unshift('<div class="input-wrap">');
                right.push('</div>');

                return '<div class="form-group ' + name + '-wrap">' + left.concat(right).join('') + '</div>';
              };

              btnStyles = function btnStyles(style) {
                var styles = opts.messages.styles.btn;
                var styleField = '';

                if (styles) {
                  var styleLabel = '<label>' + opts.messages.style + '</label>';
                  styleField += '<input value="' + style + '" name="style" type="hidden" class="btn-style">';
                  styleField += '<div class="btn-group" role="group">';

                  (0, _keys2.default)(styles).forEach(function (element) {
                    var classList = ['btn-xs', 'btn', 'btn-' + element];
                    if (style === element) {
                      classList.push('selected');
                    }

                    styleField += '<button value="' + element + '" type="button" class="' + classList.join(' ') + '">' + opts.messages.styles.btn[element] + '</button>';
                  });

                  styleField += '</div>';

                  styleField = '<div class="form-group style-wrap">' + styleLabel + ' ' + styleField + '</div>';
                }

                return styleField;
              };

              /**
               * Add a number attribute to a field.
               * @param  {String} attribute
               * @param  {Object} values
               * @return {String} markup for number attribute
               */


              numberAttribute = function numberAttribute(attribute, values) {
                if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
                  return;
                }

                var attrVal = values[attribute];
                var attrLabel = opts.messages[attribute] || attribute;
                var placeholder = opts.messages.placeholders[attribute];
                var inputConfig = {
                  type: 'number',
                  value: attrVal,
                  name: attribute,
                  min: '0',
                  placeholder: placeholder,
                  className: 'fld-' + attribute + ' form-control',
                  id: attribute + '-' + lastID
                };
                var numberAttribute = '<input ' + utils.attrString(utils.trimObj(inputConfig)) + '>';
                var inputWrap = '<div class="input-wrap">' + numberAttribute + '</div>';

                return '<div class="form-group ' + attribute + '-wrap"><label for="' + inputConfig.id + '">' + attrLabel + '</label> ' + inputWrap + '</div>';
              };

              /**
               * selectAttribute
               * @param  {String} attribute  attribute name
               * @param  {Object} values     aka attrs
               * @param  {Array} optionData  select field option data
               * @return {String}            select input makrup
               */


              selectAttribute = function selectAttribute(attribute, values, optionData) {
                if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
                  return;
                }
                var selectOptions = optionData.map(function (option, i) {
                  var optionAttrs = (0, _assign2.default)({
                    label: opts.messages.option + ' ' + i,
                    value: undefined
                  }, option);
                  if (option.value === values[attribute]) {
                    optionAttrs.selected = true;
                  }
                  return '<option ' + utils.attrString(utils.trimObj(optionAttrs)) + '>' + optionAttrs.label + '</option>';
                });
                var selectAttrs = {
                  id: attribute + '-' + lastID,
                  name: attribute,
                  className: 'fld-' + attribute + ' form-control'
                };
                var label = '<label for="' + selectAttrs.id + '">' + (opts.messages[attribute] || utils.capitalize(attribute)) + '</label>';
                var select = '<select ' + utils.attrString(selectAttrs) + '>' + selectOptions.join('') + '</select>';
                var inputWrap = '<div class="input-wrap">' + select + '</div>';

                return '<div class="form-group ' + selectAttrs.name + '-wrap">' + label + inputWrap + '</div>';
              };

              /**
               * Generate some text inputs for field attributes, **will be replaced**
               * @param  {String} attribute
               * @param  {Object} values
               * @return {String}
               */


              textAttribute = function textAttribute(attribute, values) {
                if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
                  return;
                }

                var placeholderFields = ['text', 'textarea', 'select'];

                var noName = ['header', 'paragraph'];

                var textArea = ['paragraph'];

                var attrVal = values[attribute] || '';
                var attrLabel = opts.messages[attribute];
                if (attribute === 'label' && utils.inArray(values.type, textArea)) {
                  attrLabel = opts.messages.content;
                }

                if (subtypes.header) {
                  noName = noName.concat(subtypes.header);
                }

                var placeholders = opts.messages.placeholders;
                var placeholder = placeholders[attribute] || '';
                var attributefield = '';
                var noMakeAttr = [];

                // Field has placeholder attribute
                if (attribute === 'placeholder' && !utils.inArray(values.type, placeholderFields)) {
                  noMakeAttr.push(true);
                }

                // Field has name attribute
                if (attribute === 'name' && utils.inArray(values.type, noName)) {
                  noMakeAttr.push(true);
                }

                if (!noMakeAttr.some(function (elem) {
                  return elem === true;
                })) {
                  var inputConfig = {
                    name: attribute,
                    placeholder: placeholder,
                    className: 'fld-' + attribute + ' form-control',
                    id: attribute + '-' + lastID
                  };
                  var attributeLabel = '<label for="' + inputConfig.id + '">' + attrLabel + '</label>';

                  if (attribute === 'label' && utils.inArray(values.type, textArea) || attribute === 'value' && values.type === 'textarea') {
                    attributefield += '<textarea ' + utils.attrString(inputConfig) + '>' + attrVal + '</textarea>';
                  } else {
                    inputConfig.value = attrVal;
                    inputConfig.type = 'text';
                    attributefield += '<input ' + utils.attrString(inputConfig) + '>';
                  }

                  var inputWrap = '<div class="input-wrap">' + attributefield + '</div>';

                  attributefield = '<div class="form-group ' + attribute + '-wrap">' + attributeLabel + ' ' + inputWrap + '</div>';
                }

                return attributefield;
              };

              requiredField = function requiredField(values) {
                var noRequire = ['header', 'paragraph', 'button'];
                var noMake = [];
                var requireField = '';

                if (utils.inArray(values.type, noRequire)) {
                  noMake.push(true);
                }
                if (!noMake.some(function (elem) {
                  return elem === true;
                })) {
                  requireField = boolAttribute('required', values, { first: opts.messages.required });
                }

                return requireField;
              };

              // Append the new field to the editor


              appendNewField = function appendNewField(values) {
                var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                var m = utils.markup;
                var type = values.type || 'text';
                var label = values.label || opts.messages[type] || opts.messages.label;
                var delBtn = m('a', opts.messages.remove, {
                  id: 'del_' + lastID,
                  className: 'del-button btn delete-confirm',
                  title: opts.messages.removeMessage
                });
                var toggleBtn = m('a', null, {
                  id: lastID + '-edit',
                  className: 'toggle-form btn icon-pencil',
                  title: opts.messages.hide
                });
                var copyBtn = m('a', opts.messages.copyButton, {
                  id: lastID + '-copy',
                  className: 'copy-button btn icon-copy',
                  title: opts.messages.copyButtonTooltip
                });

                var liContents = m('div', [toggleBtn, copyBtn, delBtn], { className: 'field-actions' }).outerHTML;

                // Field preview Label
                liContents += '<label class="field-label">' + label + '</label>';

                if (values.description) {
                  var attrs = {
                    className: 'tooltip-element',
                    tooltip: values.description
                  };
                  liContents += '<span ' + utils.attrString(attrs) + '>?</span>';
                }

                var requiredDisplay = values.required ? 'style="display:inline"' : '';
                liContents += '<span class="required-asterisk" ' + requiredDisplay + '> *</span>';

                liContents += m('div', '', { className: 'prev-holder' }).outerHTML;
                liContents += '<div id="' + lastID + '-holder" class="frm-holder">';
                liContents += '<div class="form-elements">';

                liContents += advFields(values);
                liContents += m('a', opts.messages.close, { className: 'close-field' }).outerHTML;

                liContents += '</div>';
                liContents += '</div>';

                var field = m('li', liContents, {
                  'class': type + '-field form-field',
                  'type': type,
                  id: lastID
                });
                var $li = $(field);

                $li.data('fieldData', { attrs: values });

                if (typeof _helpers.stopIndex !== 'undefined') {
                  $('> li', $sortableFields).eq(_helpers.stopIndex).before($li);
                } else {
                  $sortableFields.append($li);
                }

                $('.sortable-options', $li).sortable({ update: function update() {
                    return _helpers.updatePreview($li);
                  } });

                _helpers.updatePreview($li);

                if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
                  opts.typeUserEvents[type].onadd(field);
                }

                if (opts.editOnAdd && isNew) {
                  _helpers.closeAllEdit();
                  _helpers.toggleEdit(lastID, false);
                }

                lastID = _helpers.incrementId(lastID);
              };

              // Select field html, since there may be multiple


              selectFieldOptions = function selectFieldOptions(name, optionData, multipleSelect) {
                var optionInputType = {
                  selected: multipleSelect ? 'checkbox' : 'radio'
                };
                var optionDataOrder = ['value', 'label', 'selected'];
                var optionInputs = [];
                var optionTemplate = { selected: false, label: '', value: '' };

                optionData = (0, _assign2.default)(optionTemplate, optionData);

                for (var i = optionDataOrder.length - 1; i >= 0; i--) {
                  var prop = optionDataOrder[i];
                  if (optionData.hasOwnProperty(prop)) {
                    var attrs = {
                      type: optionInputType[prop] || 'text',
                      'class': 'option-' + prop,
                      value: optionData[prop],
                      name: name + '-option'
                    };

                    if (opts.messages.placeholders[prop]) {
                      attrs.placeholder = opts.messages.placeholders[prop];
                    }

                    if (prop === 'selected' && optionData.selected === true) {
                      attrs.checked = optionData.selected;
                    }

                    optionInputs.push(utils.markup('input', null, attrs));
                  }
                }

                var removeAttrs = {
                  className: 'remove btn',
                  title: opts.messages.removeMessage
                };
                optionInputs.push(utils.markup('a', opts.messages.remove, removeAttrs));

                var field = utils.markup('li', optionInputs);

                return field.outerHTML;
              };

              cloneItem = function cloneItem(currentItem) {
                var currentId = currentItem.attr('id');
                var type = currentItem.attr('type');
                var ts = new Date().getTime();
                var cloneName = type + '-' + ts;
                var $clone = currentItem.clone();

                $clone.find('[id]').each(function () {
                  this.id = this.id.replace(currentId, lastID);
                });

                $clone.find('[for]').each(function () {
                  this.setAttribute('for', this.getAttribute('for').replace(currentId, lastID));
                });

                $clone.each(function () {
                  $('e:not(.form-elements)').each(function () {
                    var newName = this.getAttribute('name');
                    newName = newName.substring(0, newName.lastIndexOf('-') + 1);
                    newName = newName + ts.toString();
                    this.setAttribute('name', newName);
                  });
                });

                $clone.find('.form-elements').find(':input').each(function () {
                  if (this.getAttribute('name') === 'name') {
                    var newVal = this.getAttribute('value');
                    newVal = newVal.substring(0, newVal.lastIndexOf('-') + 1);
                    newVal = newVal + ts.toString();
                    this.setAttribute('value', newVal);
                  }
                });

                $clone.attr('id', lastID);
                $clone.attr('name', cloneName);
                $clone.addClass('cloned');
                $('.sortable-options', $clone).sortable();

                if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
                  opts.typeUserEvents[type].onclone($clone[0]);
                }

                lastID = _helpers.incrementId(lastID);
                return $clone;
              };

              // ---------------------- UTILITIES ---------------------- //

              // delete options


              $sortableFields.on('click touchstart', '.remove', function (e) {
                var $field = $(this).parents('.form-field:eq(0)');
                e.preventDefault();
                var optionsCount = $(this).parents('.sortable-options:eq(0)').children('li').length;
                if (optionsCount <= 2) {
                  opts.notify.error('Error: ' + opts.messages.minOptionMessage);
                } else {
                  $(this).parent('li').slideUp('250', function () {
                    $(this).remove();
                    _helpers.updatePreview($field);
                    _helpers.save();
                  });
                }
              });

              // touch focus
              $sortableFields.on('touchstart', 'input', function (e) {
                var $input = $(this);
                if (e.handled !== true) {
                  if ($input.attr('type') === 'checkbox') {
                    $input.trigger('click');
                  } else {
                    $input.focus();
                    var fieldVal = $input.val();
                    $input.val(fieldVal);
                  }
                } else {
                  return false;
                }
              });

              // toggle fields
              $sortableFields.on('click touchstart', '.toggle-form, .close-field', function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (e.handled !== true) {
                  var targetID = $(e.target).parents('.form-field:eq(0)').attr('id');
                  _helpers.toggleEdit(targetID);
                  e.handled = true;
                } else {
                  return false;
                }
              });

              $sortableFields.on('change', '.prev-holder input, .prev-holder select', function (e) {
                if (e.target.classList.contains('other-option')) {
                  return;
                }
                var field = $(e.target).closest('li.form-field')[0];
                if (utils.inArray(field.type, ['select', 'checkbox-group', 'radio-group'])) {
                  (function () {
                    var options = field.getElementsByClassName('option-value');
                    var preview = document.getElementsByName(e.target.name);
                    console.log([preview]);
                    utils.forEach(options, function (i) {
                      var selectedOption = options[i].parentElement.childNodes[0];
                      console.log();
                      if (Array.isArray(e.target.value)) {
                        selectedOption.checked = utils.inArray(options[i].value, e.target.value);
                      } else {
                        selectedOption.checked = options[i].value === e.target.value;
                      }
                    });
                  })();
                } else {
                  document.getElementById('value-' + field.id).value = e.target.value;
                }

                _helpers.save();
              });

              // update preview to label
              $sortableFields.on('keyup change', '[name="label"]', function (e) {
                $('.field-label', $(e.target).closest('li')).text($(e.target).val());
              });

              // remove error styling when users tries to correct mistake
              $sortableFields.delegate('input.error', 'keyup', function (e) {
                $(e.target).removeClass('error');
              });

              // update preview for description
              $sortableFields.on('keyup', 'input[name="description"]', function (e) {
                var $field = $(e.target).parents('.form-field:eq(0)');
                var closestToolTip = $('.tooltip-element', $field);
                var ttVal = $(e.target).val();
                if (ttVal !== '') {
                  if (!closestToolTip.length) {
                    var tt = '<span class="tooltip-element" tooltip="' + ttVal + '">?</span>';
                    $('.field-label', $field).after(tt);
                  } else {
                    closestToolTip.attr('tooltip', ttVal).css('display', 'inline-block');
                  }
                } else {
                  if (closestToolTip.length) {
                    closestToolTip.css('display', 'none');
                  }
                }
              });

              $sortableFields.on('change', '.fld-multiple', function (e) {
                var newType = e.target.checked ? 'checkbox' : 'radio';

                $(e.target).parents('.form-elements:eq(0)').find('.sortable-options input.option-selected').each(function () {
                  e.target.type = newType;
                });
              });

              // format name attribute
              $sortableFields.on('blur', 'input.fld-name', function (e) {
                e.target.value = _helpers.safename(e.target.value);
                if (e.target.value === '') {
                  $(e.target).addClass('field-error').attr('placeholder', opts.messages.cannotBeEmpty);
                } else {
                  $(e.target).removeClass('field-error');
                }
              });

              $sortableFields.on('blur', 'input.fld-maxlength', function (e) {
                e.target.value = _helpers.forceNumber(e.target.value);
              });

              // Copy field
              $sortableFields.on('click touchstart', '.icon-copy', function (e) {
                e.preventDefault();
                var currentItem = $(e.target).parent().parent('li');
                var $clone = cloneItem(currentItem);
                $clone.insertAfter(currentItem);
                _helpers.updatePreview($clone);
                _helpers.save();
              });

              // Delete field
              $sortableFields.on('click touchstart', '.delete-confirm', function (e) {
                e.preventDefault();

                var buttonPosition = e.target.getBoundingClientRect();
                var bodyRect = document.body.getBoundingClientRect();
                var coords = {
                  pageX: buttonPosition.left + buttonPosition.width / 2,
                  pageY: buttonPosition.top - bodyRect.top - 12
                };

                var deleteID = $(e.target).parents('.form-field:eq(0)').attr('id');
                var $field = $(document.getElementById(deleteID));

                document.addEventListener('modalClosed', function () {
                  $field.removeClass('deleting');
                }, false);

                // Check if user is sure they want to remove the field
                if (opts.fieldRemoveWarn) {
                  var warnH3 = utils.markup('h3', opts.messages.warning);
                  var warnMessage = utils.markup('p', opts.messages.fieldRemoveWarning);
                  _helpers.confirm([warnH3, warnMessage], function () {
                    return _helpers.removeField(deleteID);
                  }, coords);
                  $field.addClass('deleting');
                } else {
                  _helpers.removeField(deleteID);
                }
              });

              // Update button style selection
              $sortableFields.on('click', '.style-wrap button', function (e) {
                var $button = $(e.target);
                var styleVal = $button.val();
                var $btnStyle = $button.parent().prev('.btn-style');
                $btnStyle.val(styleVal);
                $button.siblings('.btn').removeClass('selected');
                $button.addClass('selected');
                _helpers.updatePreview($btnStyle.closest('.form-field'));
                _helpers.save();
              });

              // Attach a callback to toggle required asterisk
              $sortableFields.on('click', '.fld-required', function (e) {
                $(e.target).closest('.form-field').find('.required-asterisk').toggle();
              });

              // Attach a callback to toggle roles visibility
              $sortableFields.on('click', 'input.fld-access', function (e) {
                var roles = $(e.target).closest('.form-field').find('.available-roles');
                var enableRolesCB = $(e.target);
                roles.slideToggle(250, function () {
                  if (!enableRolesCB.is(':checked')) {
                    $('input[type="checkbox"]', roles).removeAttr('checked');
                  }
                });
              });

              // Attach a callback to add new options
              $sortableFields.on('click', '.add-opt', function (e) {
                e.preventDefault();
                var $optionWrap = $(e.target).closest('.field-options');
                var $multiple = $('[name="multiple"]', $optionWrap);
                var $firstOption = $('.option-selected:eq(0)', $optionWrap);
                var isMultiple = false;

                if ($multiple.length) {
                  isMultiple = $multiple.prop('checked');
                } else {
                  isMultiple = $firstOption.attr('type') === 'checkbox';
                }

                var name = $firstOption.attr('name');

                $('.sortable-options', $optionWrap).append(selectFieldOptions(name, false, isMultiple));
              });

              $sortableFields.on('mouseover mouseout', '.remove, .del-button', function (e) {
                return $(e.target).closest('li').toggleClass('delete');
              });

              if (opts.showActionButtons) {
                // View XML
                // let xmlButton = $(document.getElementById(frmbID + '-view-data'));
                // xmlButton.click(function(e) {
                //   e.preventDefault();
                //   _helpers.showData();
                // });

                // Clear all fields in form editor
                // let clearButton = document.getElementById(`${frmbID}-clear-all`);
                // clearButton.onclick = () => {
                //   let fields = $('li.form-field', formBuilder.stage);
                //   let buttonPosition = clearButton.getBoundingClientRect();
                //   let bodyRect = document.body.getBoundingClientRect();
                //   let coords = {
                //     pageX: buttonPosition.left + (buttonPosition.width / 2),
                //     pageY: (buttonPosition.top - bodyRect.top) - 12
                //   };

                //   if (fields.length) {
                //     _helpers.confirm(opts.messages.clearAllMessage, function() {
                //       _helpers.removeAllfields();
                //       opts.notify.success(opts.messages.allFieldsRemoved);
                //       _helpers.save();
                //       opts.onClearAll();
                //     }, coords);
                //   } else {
                //     _helpers.dialog('There are no fields to clear', coords);
                //   }
                // };

                // Save Idea Template
                // document.getElementById(`${frmbID}-save`).onclick = () => {
                //   opts.onSave(_helpers.save());
                // };
              }

              _helpers.getData();
              loadFields();

              $sortableFields.css('min-height', $cbUL.height());

              // If option set, controls will remain in view in editor
              if (opts.stickyControls) {
                _helpers.stickyControls($sortableFields);
              }

              document.dispatchEvent(formBuilder.events.loaded);

              // Make actions accessible
              formBuilder.actions = {
                clearFields: _helpers.removeAllfields,
                showData: _helpers.showData,
                save: _helpers.save,
                addField: function addField(field, index) {
                  _helpers.stopIndex = formBuilder.stage.children.length ? index : undefined;
                  prepFieldVars(field);
                  document.dispatchEvent(formBuilder.events.fieldAdded);
                },
                removeField: _helpers.removeField,
                getData: function getData() {
                  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'js';

                  var stage = formBuilder.stage;
                  var h = _helpers;
                  var data = {
                    js: function js() {
                      return h.prepData(stage);
                    },
                    xml: function xml() {
                      return h.xmlSave(stage);
                    },
                    json: function json() {
                      return window.JSON.stringify(h.prepData(stage), null, '\t');
                    }
                  };

                  return data[type]();
                },
                setData: function setData(formData) {
                  _helpers.removeAllfields();
                  _helpers.getData(formData);
                  loadFields();
                }
              };

              formBuilder.i18n = {
                setLang: function () {
                  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(locale) {
                    var newLang;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return mi18n.setCurrent.call(mi18n, locale);

                          case 2:
                            newLang = _context.sent;

                            console.log(newLang);

                          case 4:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function setLang(_x6) {
                    return _ref2.apply(this, arguments);
                  };
                }()
              };

              return _context2.abrupt('return', formBuilder);

            case 88:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function FormBuilder(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  $.fn.formBuilder = function (options) {
    if (!options) {
      options = {};
    }
    var elems = this;
    return elems.each(function (i) {
      var formBuilder = new FormBuilder(options, elems[i]);
      $(elems[i]).data('formBuilder', formBuilder);

      return formBuilder;
    });
  };
})(jQuery);

},{"./helpers.js":130,"./kc-toggle.js":131,"./polyfills.js":132,"./utils.js":133,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/asyncToGenerator":11,"babel-runtime/helpers/objectWithoutProperties":12,"babel-runtime/regenerator":16,"deep-extend":122,"mi18n":1}],130:[function(require,module,exports){
'use strict';

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper functions specific to formBuilder.
 * Called form formBuilder
 * @param  {Object}   opts
 * @param  {Instance} formBuilder
 * @return {Object} helper functions
 */
function helpers(opts, formBuilder) {
  var mi18n = require('mi18n').default;

  var _helpers = {
    doCancel: false
  };

  var utils = require('./utils.js');
  formBuilder.events = require('./events.js');

  /**
   * Convert converts messy `cl#ssNames` into valid `class-names`
   *
   * @param  {String} str
   * @return {String} hyphenated string
   */
  _helpers.makeClassName = function (str) {
    str = str.replace(/[^\w\s\-]/gi, '');
    return utils.hyphenCase(str);
  };

  /**
   * Add a mobile class
   * @todo find css only solution
   * @return {String} Mobile class added to formBuilder
   */
  _helpers.mobileClass = function () {
    var mobileClass = '';
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        mobileClass = ' fb-mobile';
      }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return mobileClass;
  };

  /**
   * Callback for when a drag begins
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  _helpers.startMoving = function (event, ui) {
    ui.item.show().addClass('moving');
    _helpers.startIndex = $('li', this).index(ui.item);
  };

  /**
   * Callback for when a drag ends
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  _helpers.stopMoving = function (event, ui) {
    ui.item.removeClass('moving');
    if (_helpers.doCancel) {
      $(ui.sender).sortable('cancel');
      $(this).sortable('cancel');
    }
    _helpers.save();
    _helpers.doCancel = false;
  };

  /**
   * jQuery UI sortable beforeStop callback used for both lists.
   * Logic for canceling the sort or drop.
   * @param  {Object} event
   * @param  {Object} ui
   * @return {void}
   */
  _helpers.beforeStop = function (event, ui) {
    var form = document.getElementById(formBuilder.formID);
    var lastIndex = form.children.length - 1;
    var cancelArray = [];
    _helpers.stopIndex = ui.placeholder.index() - 1;

    if (!opts.sortableControls && ui.item.parent().hasClass('frmb-control')) {
      cancelArray.push(true);
    }

    if (opts.prepend) {
      cancelArray.push(_helpers.stopIndex === 0);
    }

    if (opts.append) {
      cancelArray.push(_helpers.stopIndex + 1 === lastIndex);
    }

    _helpers.doCancel = cancelArray.some(function (elem) {
      return elem === true;
    });
  };

  /**
   * Make strings safe to be used as classes
   *
   * @param  {String} str string to be converted
   * @return {String}     converter string
   */
  _helpers.safename = function (str) {
    return str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
  };

  /**
   * Strips non-numbers from a number only input
   *
   * @param  {string} str string with possible number
   * @return {string}     string without numbers
   */
  _helpers.forceNumber = function (str) {
    return str.replace(/[^0-9]/g, '');
  };

  /**
   * hide and show mouse tracking tooltips, only used for disabled
   * fields in the editor.
   *
   * @todo   remove or refactor to make better use
   * @param  {Object} tt jQuery option with nexted tooltip
   * @return {void}
   */
  _helpers.initTooltip = function (tt) {
    var tooltip = tt.find('.tooltip');
    tt.mouseenter(function () {
      if (tooltip.outerWidth() > 200) {
        tooltip.addClass('max-width');
      }
      tooltip.css('left', tt.width() + 14);
      tooltip.stop(true, true).fadeIn('fast');
    }).mouseleave(function () {
      tt.find('.tooltip').stop(true, true).fadeOut('fast');
    });
    tooltip.hide();
  };

  /**
   * Attempts to get element type and subtype
   *
   * @param  {Object} $field
   * @return {Object} {type: 'fieldType', subtype: 'fieldSubType'}
   */
  _helpers.getTypes = function ($field) {
    var types = {
      type: $field.attr('type')
    };
    var subtype = $('.fld-subtype', $field).val();

    if (subtype !== types.type) {
      types.subtype = subtype;
    }

    return types;
  };

  /**
   * Get option data for a field
   * @param  {Object} field jQuery field object
   * @return {Array}        Array of option values
   */
  _helpers.fieldOptionData = function (field) {
    var options = [];

    $('.sortable-options li', field).each(function () {
      var $option = $(this);
      var selected = $('.option-selected', $option).is(':checked');
      var attrs = {
        label: $('.option-label', $option).val(),
        value: $('.option-value', $option).val()
      };

      if (selected) {
        attrs.selected = selected;
      }

      options.push(attrs);
    });

    return options;
  };

  /**
   * XML save
   *
   * @param  {Object} form sortableFields node
   * @return {String} xml in string
   */
  _helpers.xmlSave = function (form) {
    var m = utils.markup;
    var formData = _helpers.prepData(form);
    var xml = ['<form-template>\n\t<fields>'];

    utils.forEach(formData, function (fieldIndex, field) {
      var fieldContent = null;

      // Handle options
      if (field.type.match(/(select|checkbox-group|radio-group)/)) {
        var optionData = field.values;
        var options = [];

        for (var i = 0; i < optionData.length; i++) {
          var option = m('option', optionData[i].label, optionData[i]).outerHTML;
          options.push('\n\t\t\t' + option);
        }
        options.push('\n\t\t');

        fieldContent = options.join('');
        delete field.values;
      }

      var xmlField = m('field', fieldContent, field);
      xml.push('\n\t\t' + xmlField.outerHTML);
    });

    xml.push('\n\t</fields>\n</form-template>');

    return xml.join('');
  };

  _helpers.prepData = function (form) {
    var formData = [];

    if (form.childNodes.length !== 0) {
      // build data object
      utils.forEach(form.childNodes, function (index, field) {
        var $field = $(field);

        if (!$field.hasClass('disabled')) {
          (function () {
            var fieldData = _helpers.getTypes($field);
            var roleVals = $('.roles-field:checked', field).map(function () {
              return this.value;
            }).get();

            $('[class*="fld-"]', field).each(function () {
              var attr = this;
              var name = utils.camelCase(attr.name);
              fieldData[name] = attr.type === 'checkbox' ? attr.checked : attr.value;
            });

            if (roleVals.length) {
              fieldData.role = roleVals.join(',');
            }

            fieldData.className = fieldData.className || fieldData.class;

            var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(fieldData.className);
            if (match) {
              fieldData.style = match[1];
            }

            fieldData = utils.trimObj(fieldData);
            fieldData = utils.escapeAttrs(fieldData);

            var multipleField = fieldData.type.match(/(select|checkbox-group|radio-group)/);

            if (multipleField) {
              fieldData.values = _helpers.fieldOptionData($field);
            }

            formData.push(fieldData);
          })();
        }
      });
    }

    return formData;
  };

  _helpers.jsonSave = function (form) {
    return window.JSON.stringify(_helpers.prepData(form), null, '\t');
  };

  _helpers.getData = function (formData) {
    var data = formData || opts.formData;

    if (!data) {
      return false;
    }

    var setData = {
      xml: function xml(formData) {
        return utils.parseXML(formData);
      },
      json: function json(formData) {
        return window.JSON.parse(formData);
      }
    };

    formBuilder.formData = setData[opts.dataType](data) || [];

    return formBuilder.formData;
  };

  /**
   * Saves and returns formData
   * @return {XML|JSON} formData
   */
  _helpers.save = function () {
    var form = document.getElementById(formBuilder.formID);

    var doSave = {
      xml: _helpers.xmlSave,
      json: _helpers.jsonSave
    };

    // save action for current `dataType`
    formBuilder.formData = doSave[opts.dataType](form);

    // trigger formSaved event
    document.dispatchEvent(formBuilder.events.formSaved);
    return formBuilder.formData;
  };

  /**
   * increments the field ids with support for multiple editors
   * @param  {String} id field ID
   * @return {String}    incremented field ID
   */
  _helpers.incrementId = function (id) {
    var split = id.lastIndexOf('-');
    var newFieldNumber = parseInt(id.substring(split + 1)) + 1;
    var baseString = id.substring(0, split);

    return baseString + '-' + newFieldNumber;
  };

  /**
   * Collect field attribute values and call fieldPreview to generate preview
   * @param  {Object} field DOM element
   */
  _helpers.updatePreview = function (field) {
    var fieldClass = field.attr('class');
    if (fieldClass.indexOf('ui-sortable-handle') !== -1) {
      return;
    }

    var fieldType = $(field).attr('type');
    var $prevHolder = $('.prev-holder', field);
    var previewData = {
      type: fieldType
    };
    var preview = void 0;

    $('[class*="fld-"]', field).each(function () {
      var name = utils.camelCase(this.name);
      previewData[name] = this.type === 'checkbox' ? this.checked : this.value;
    });

    var style = $('.btn-style', field).val();
    if (style) {
      previewData.style = style;
    }

    if (fieldType.match(/(select|checkbox-group|radio-group)/)) {
      previewData.values = [];
      previewData.multiple = $('[name="multiple"]', field).is(':checked');

      $('.sortable-options li', field).each(function () {
        var option = {};
        option.selected = $('.option-selected', this).is(':checked');
        option.value = $('.option-value', this).val();
        option.label = $('.option-label', this).val();
        previewData.values.push(option);
      });
    }

    previewData = utils.trimObj(previewData);

    previewData.className = _helpers.classNames(field, previewData);
    $('.fld-className', field).val(previewData.className);

    field.data('fieldData', previewData);
    preview = utils.getTemplate(previewData, opts, true);

    utils.empty($prevHolder[0]);
    $prevHolder[0].appendChild(preview);
    preview.dispatchEvent(formBuilder.events.fieldRendered);

    $('input[toggle]', $prevHolder).kcToggle();
  };

  _helpers.debounce = function (func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var timeout = void 0;
    return function () {
      var context = this;
      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  /**
   * Display a custom tooltip for disabled fields.
   *
   * @param  {Object} field
   */
  _helpers.disabledTT = {
    className: 'frmb-tt',
    add: function add(field) {
      var title = opts.messages.fieldNonEditable;

      if (title) {
        var tt = utils.markup('p', title, { className: _helpers.disabledTT.className });
        field.append(tt);
      }
    },
    remove: function remove(field) {
      $('.frmb-tt', field).remove();
    }
  };

  _helpers.classNames = function (field, previewData) {
    var i = void 0;
    var type = previewData.type;
    var style = previewData.style;
    var className = field[0].querySelector('.fld-className').value;
    var classes = className.split(' ');
    var types = {
      button: 'btn',
      submit: 'btn'
    };

    var primaryType = types[type];

    if (primaryType) {
      if (style) {
        for (i = 0; i < classes.length; i++) {
          var re = new RegExp('(?:^|s)' + primaryType + '-(.*?)(?:s|$)+', 'g');
          var match = classes[i].match(re);
          if (match) {
            classes.splice(i, 1);
          }
        }
        classes.push(primaryType + '-' + style);
      }
      classes.push(primaryType);
    }

    // reverse the array to put custom classes at end,
    // remove any duplicates, convert to string, remove whitespace
    return utils.unique(classes).join(' ').trim();
  };

  /**
   * Closes and open dialog
   *
   * @param  {Object} overlay Existing overlay if there is one
   * @param  {Object} dialog  Existing dialog
   */
  _helpers.closeConfirm = function (overlay, dialog) {
    if (!overlay) {
      overlay = document.getElementsByClassName('form-builder-overlay')[0];
    }
    if (!dialog) {
      dialog = document.getElementsByClassName('form-builder-dialog')[0];
    }
    overlay.classList.remove('visible');
    dialog.remove();
    overlay.remove();
    document.dispatchEvent(formBuilder.events.modalClosed);
  };

  /**
   * Returns the layout data based on controlPosition option
   * @param  {String} controlPosition 'left' or 'right'
   * @return {Object} layout object
   */
  _helpers.editorLayout = function (controlPosition) {
    var layoutMap = {
      left: {
        stage: 'pull-right',
        controls: 'pull-left'
      },
      right: {
        stage: 'pull-left',
        controls: 'pull-right'
      }
    };

    return layoutMap[controlPosition] ? layoutMap[controlPosition] : '';
  };

  /**
   * Adds overlay to the page. Used for modals.
   * @return {Object} DOM Object
   */
  _helpers.showOverlay = function () {
    var overlay = utils.markup('div', null, {
      className: 'form-builder-overlay'
    });
    document.body.appendChild(overlay);
    overlay.classList.add('visible');

    overlay.onclick = function () {
      _helpers.closeConfirm(overlay);
    };

    return overlay;
  };

  /**
   * Custom confirmation dialog
   *
   * @param  {Object}  message   Content to be displayed in the dialog
   * @param  {Func}  yesAction callback to fire if they confirm
   * @param  {Boolean} coords    location to put the dialog
   * @param  {String}  className Custom class to be added to the dialog
   * @return {Object}            Reference to the modal
   */
  _helpers.confirm = function (message, yesAction) {
    var coords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var m = utils.markup;
    var overlay = _helpers.showOverlay();
    var yes = m('button', opts.messages.yes, {
      className: 'yes btn btn-success btn-sm'
    });
    var no = m('button', opts.messages.no, {
      className: 'no btn btn-danger btn-sm'
    });

    no.onclick = function () {
      _helpers.closeConfirm(overlay);
    };

    yes.onclick = function () {
      yesAction();
      _helpers.closeConfirm(overlay);
    };

    var btnWrap = m('div', [no, yes], { className: 'button-wrap' });

    className = 'form-builder-dialog ' + className;

    var miniModal = m('div', [message, btnWrap], { className: className });
    if (!coords) {
      coords = {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';

    document.body.appendChild(miniModal);

    yes.focus();
    return miniModal;
  };

  /**
   * Popup dialog the does not require confirmation.
   * @param  {String|DOM|Array}  content
   * @param  {Boolean} coords    false if no coords are provided. Without coordinates
   *                             the popup will appear center screen.
   * @param  {String}  className classname to be added to the dialog
   * @return {Object}            dom
   */
  _helpers.dialog = function (content) {
    var coords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    _helpers.showOverlay();

    className = 'form-builder-dialog ' + className;

    var miniModal = utils.markup('div', content, { className: className });
    if (!coords) {
      coords = {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';

    document.body.appendChild(miniModal);

    document.dispatchEvent(formBuilder.events.modalOpened);

    if (className.indexOf('data-dialog') !== -1) {
      document.dispatchEvent(formBuilder.events.viewData);
    }

    return miniModal;
  };

  /**
   * Removes all fields from the form
   */
  _helpers.removeAllfields = function () {
    var form = document.getElementById(formBuilder.formID);
    var fields = form.querySelectorAll('li.form-field');
    var $fields = $(fields);
    var markEmptyArray = [];

    if (!fields.length) {
      return false;
    }

    if (opts.prepend) {
      markEmptyArray.push(true);
    }

    if (opts.append) {
      markEmptyArray.push(true);
    }

    if (!markEmptyArray.some(function (elem) {
      return elem === true;
    })) {
      form.parentElement.classList.add('empty');
      form.parentElement.dataset.content = opts.messages.getStarted;
    }

    form.classList.add('removing');

    var outerHeight = 0;
    $fields.each(function (i) {
      outerHeight += $($fields[i]).outerHeight() + 3;
    });

    fields[0].style.marginTop = -outerHeight + 'px';

    setTimeout(function () {
      $fields.remove();
      document.getElementById(formBuilder.formID).classList.remove('removing');
      _helpers.save();
    }, 400);
  };

  /**
   * If user re-orders the elements their order should be saved.
   *
   * @param {Object} $cbUL our list of elements
   */
  _helpers.setFieldOrder = function ($cbUL) {
    if (!opts.sortableControls) {
      return false;
    }
    var fieldOrder = {};
    $cbUL.children().each(function (index, element) {
      fieldOrder[index] = $(element).data('attrs').type;
    });
    if (window.sessionStorage) {
      window.sessionStorage.setItem('fieldOrder', window.JSON.stringify(fieldOrder));
    }
  };

  /**
   * Reorder the controls if the user has previously ordered them.
   *
   * @param  {Array} frmbFields
   * @return {Array} ordered fields
   */
  _helpers.orderFields = function (frmbFields) {
    var fieldOrder = false;
    var newOrderFields = [];

    if (window.sessionStorage) {
      if (opts.sortableControls) {
        fieldOrder = window.sessionStorage.getItem('fieldOrder');
      } else {
        window.sessionStorage.removeItem('fieldOrder');
      }
    }

    if (!fieldOrder) {
      var controlOrder = opts.controlOrder.concat(frmbFields.map(function (field) {
        return field.attrs.type;
      }));
      fieldOrder = utils.unique(controlOrder);
    } else {
      fieldOrder = window.JSON.parse(fieldOrder);
      fieldOrder = (0, _keys2.default)(fieldOrder).map(function (i) {
        return fieldOrder[i];
      });
    }

    fieldOrder.forEach(function (fieldType) {
      var field = frmbFields.filter(function (field) {
        return field.attrs.type === fieldType;
      })[0];
      newOrderFields.push(field);
    });

    return newOrderFields.filter(Boolean);
  };

  /**
   * Close fields being editing
   * @param  {Object} stage
   */
  _helpers.closeAllEdit = function () {
    var fields = $('> li.editing', formBuilder.stage);
    var toggleBtns = $('.toggle-form', formBuilder.stage);
    var editPanels = $('.frm-holder', fields);

    toggleBtns.removeClass('open');
    fields.removeClass('editing');
    $('.prev-holder', fields).show();
    editPanels.hide();
  };

  /**
   * Toggles the edit mode for the given field
   * @param  {String} fieldId
   * @param  {Boolean} animate
   */
  _helpers.toggleEdit = function (fieldId) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var field = document.getElementById(fieldId);
    var toggleBtn = $('.toggle-form', field);
    var editPanel = $('.frm-holder', field);
    field.classList.toggle('editing');
    toggleBtn.toggleClass('open');
    if (animate) {
      $('.prev-holder', field).slideToggle(250);
      editPanel.slideToggle(250);
    } else {
      $('.prev-holder', field).toggle();
      editPanel.toggle();
    }
  };

  /**
   * Controls follow scroll to the bottom of the editor
   */
  _helpers.stickyControls = function () {
    var $cbWrap = $(formBuilder.controls).parent();
    var $stageWrap = $(formBuilder.stage).parent();
    var cbWidth = $cbWrap.width();
    var cbPosition = formBuilder.controls.getBoundingClientRect();

    $(window).scroll(function (evt) {
      var scrollTop = $(evt.target).scrollTop();

      if (scrollTop > $stageWrap.offset().top) {
        var cbStyle = {
          position: 'fixed',
          width: cbWidth,
          top: '5px',
          bottom: 'auto',
          right: 'auto',
          left: cbPosition.left
        };

        var cbOffset = $cbWrap.offset();
        var stageOffset = $stageWrap.offset();
        var cbBottom = cbOffset.top + $cbWrap.height();
        var stageBottom = stageOffset.top + $stageWrap.height();

        if (cbBottom > stageBottom && cbOffset.top !== stageOffset.top) {
          $cbWrap.css({
            position: 'absolute',
            top: 'auto',
            bottom: 0,
            right: 0,
            left: 'auto'
          });
        }

        if (cbBottom < stageBottom || cbBottom === stageBottom && cbOffset.top > scrollTop) {
          $cbWrap.css(cbStyle);
        }
      } else {
        formBuilder.controls.parentElement.removeAttribute('style');
      }
    });
  };

  /**
   * Open a dialog with the form's data
   */
  _helpers.showData = function () {
    var m = utils.markup;
    var data = utils.escapeHtml(formBuilder.formData);
    var code = m('code', data, { className: 'formData-' + opts.dataType });

    _helpers.dialog(m('pre', code), null, 'data-dialog');
  };

  /**
   * Remove a field from the stage
   * @param  {String}  fieldID ID of the field to be removed
   * @return {Boolean} fieldRemoved returns true if field is removed
   */
  _helpers.removeField = function (fieldID) {
    var fieldRemoved = false;
    var form = document.getElementById(formBuilder.formID);
    var fields = form.getElementsByClassName('form-field');

    if (!fields.length) {
      console.warn('No fields to remove');
      return false;
    }

    if (!fieldID) {
      var availableIds = [].slice.call(fields).map(function (field) {
        return field.id;
      });
      console.warn('fieldID required to use `removeField` action.');
      console.warn('Available IDs: ' + availableIds.join(', '));
    }

    var field = document.getElementById(fieldID);
    var $field = $(document.getElementById(fieldID));
    if (!field) {
      console.warn('Field not found');
      return false;
    }

    $field.slideUp(250, function () {
      $field.removeClass('deleting');
      $field.remove();
      fieldRemoved = true;
      _helpers.save();
      if (!form.childNodes.length) {
        var stageWrap = form.parentElement;
        stageWrap.classList.add('empty');
        stageWrap.dataset.content = opts.messages.getStarted;
      }
    });

    document.dispatchEvent(formBuilder.events.fieldRemoved);
    return fieldRemoved;
  };

  _helpers.processActionButtons = function (buttonData) {
    var m = utils.markup;
    var label = buttonData.label,
        events = buttonData.events,
        attrs = (0, _objectWithoutProperties3.default)(buttonData, ['label', 'events']);

    var button = m('button', label, attrs);

    if (events) {
      var _loop = function _loop(event) {
        if (events.hasOwnProperty(event)) {
          button.addEventListener(event, function (evt) {
            return events[event](evt);
          });
        }
      };

      for (var event in events) {
        _loop(event);
      }
    }

    return button;
  };

  _helpers.processSubtypes = function (subtypeOpts) {
    var subtypeFormat = function subtypeFormat(subtype) {
      return {
        label: mi18n.get(subtype),
        value: subtype
      };
    };

    var defaultSubtypes = {
      text: ['text', 'password', 'email', 'color', 'tel'],
      header: ['h1', 'h2', 'h3'],
      button: ['button', 'submit', 'reset'],
      paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'],
      textarea: ['textarea', 'quill', 'tinymce']
    };

    var subtypes = utils.merge(defaultSubtypes, subtypeOpts);

    for (var subtype in subtypes) {
      if (subtypes.hasOwnProperty(subtype)) {
        subtypes[subtype] = subtypes[subtype].map(subtypeFormat);
      }
    }

    return subtypes;
  };

  return _helpers;
}

module.exports = helpers;

},{"./events.js":128,"./utils.js":133,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/objectWithoutProperties":12,"mi18n":1}],131:[function(require,module,exports){
'use strict';

var kcToggle = function kcToggle() {
  var Toggle = function Toggle(element, options) {
    var defaults = {
      theme: 'fresh',
      messages: {
        off: 'Off',
        on: 'On'
      }
    };

    var opts = $.extend(defaults, options);
    var $kcToggle = $('<div class="kc-toggle"/>').insertAfter(element).append(element);

    $kcToggle.toggleClass('on', element.is(':checked'));

    var kctOn = '<div class="kct-on">' + opts.messages.on + '</div>';
    var kctOff = '<div class="kct-off">' + opts.messages.off + '</div>';
    var kctHandle = '<div class="kct-handle"></div>';
    var kctInner = '<div class="kct-inner">' + kctOn + kctHandle + kctOff + '</div>';

    $kcToggle.append(kctInner);

    $kcToggle.click(function (evt) {
      element.attr('checked', !element.attr('checked'));
      $kcToggle.toggleClass('on');
    });
  };

  jQuery.fn.kcToggle = function (options) {
    var toggle = this;
    return toggle.each(function (i) {
      var element = $(toggle[i]);
      if (element.data('kcToggle')) {
        return;
      }
      var kcToggle = new Toggle(element, options);
      element.data('kcToggle', kcToggle);
    });
  };
};

module.exports = kcToggle();

},{}],132:[function(require,module,exports){
'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Polyfills for older browsers and added functionality
 * @return {void}
 */
function polyfills() {
  // Element.remove() polyfill
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  // Event polyfill
  if (typeof Event !== 'function') {
    (function () {
      window.Event = function (evt) {
        var event = document.createEvent('Event');
        event.initEvent(evt, true, true);
        return event;
      };
    })();
  }

  // Object.assign polyfill
  if (typeof _assign2.default != 'function') {
    Object.assign = function (target) {
      'use strict';

      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      target = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
  }
}

module.exports = polyfills();

},{"babel-runtime/core-js/object/assign":6}],133:[function(require,module,exports){
'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} fbUtils
 */
// function utils() {
var fbUtils = {};
window.fbLoadedScripts = [];

// cleaner syntax for testing indexOf element
fbUtils.inArray = function (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

/**
 * Remove null or undefined values
 * @param  {Object} attrs {attrName: attrValue}
 * @return {Object}       Object trimmed of null or undefined values
 */
fbUtils.trimObj = function (attrs) {
  var xmlRemove = [null, undefined, '', false, 'false'];
  for (var attr in attrs) {
    if (fbUtils.inArray(attrs[attr], xmlRemove)) {
      delete attrs[attr];
    } else if (Array.isArray(attrs[attr])) {
      if (!attrs[attr].length) {
        delete attrs[attr];
      }
    }
  }

  return attrs;
};

/**
 * Test if attribute is a valid HTML attribute
 * @param  {String} attr
 * @return {Boolean}
 */
fbUtils.validAttr = function (attr) {
  var invalid = ['values', 'enableOther', 'other', 'label',
  // 'style',
  'subtype'];
  return !fbUtils.inArray(attr, invalid);
};

/**
 * Convert an attrs object into a string
 *
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
fbUtils.attrString = function (attrs) {
  var attributes = [];

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr) && fbUtils.validAttr(attr)) {
      attr = fbUtils.safeAttr(attr, attrs[attr]);
      attributes.push(attr.name + attr.value);
    }
  }
  return attributes.join(' ');
};

/**
 * Convert attributes to markup safe strings
 * @param  {String} name  attribute name
 * @param  {String} value attribute value
 * @return {Object}       {attrName: attrValue}
 */
fbUtils.safeAttr = function (name, value) {
  name = fbUtils.safeAttrName(name);
  var valString = void 0;

  if (value) {
    if (Array.isArray(value)) {
      valString = fbUtils.escapeAttr(value.join(' '));
    } else {
      if (typeof value === 'boolean') {
        value = value.toString();
      }
      valString = fbUtils.escapeAttr(value.replace(',', ' ').trim());
    }
  }

  value = value ? '="' + valString + '"' : '';
  return {
    name: name,
    value: value
  };
};

fbUtils.safeAttrName = function (name) {
  var safeAttr = {
    className: 'class'
  };

  return safeAttr[name] || fbUtils.hyphenCase(name);
};

/**
 * Convert strings into lowercase-hyphen
 *
 * @param  {String} str
 * @return {String}
 */
fbUtils.hyphenCase = function (str) {
  str = str.replace(/[^\w\s\-]/gi, '');
  str = str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });

  return str.replace(/\s/g, '-').replace(/^-+/g, '');
};

/**
 * convert a hyphenated string to camelCase
 * @param  {String} str
 * @return {String}
 */
fbUtils.camelCase = function (str) {
  return str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
};

/**
 * Determine content type
 * @param  {Node | String | Array | Object} content
 * @return {String}                         contentType for mapping
 */
fbUtils.contentType = function (content) {
  var type = typeof content === 'undefined' ? 'undefined' : (0, _typeof3.default)(content);
  if (content instanceof Node || content instanceof HTMLElement) {
    type = 'node';
  } else if (Array.isArray(content)) {
    type = 'array';
  }

  return type;
};

/**
 * Bind events to an element
 * @param  {Object} element DOM element
 * @param  {Object} events  object full of events eg. {click: evt => callback}
 * @return {void}
 */
fbUtils.bindEvents = function (element, events) {
  if (events) {
    var _loop = function _loop(event) {
      if (events.hasOwnProperty(event)) {
        element.addEventListener(event, function (evt) {
          return events[event](evt);
        });
      }
    };

    for (var event in events) {
      _loop(event);
    }
  }
};

/**
 * Generate markup wrapper where needed
 *
 * @param  {string}              tag
 * @param  {String|Array|Object} content we wrap this
 * @param  {Object}              attrs
 * @return {Object} DOM Element
 */
fbUtils.markup = function (tag) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var contentType = fbUtils.contentType(content);
  var events = attributes.events,
      attrs = (0, _objectWithoutProperties3.default)(attributes, ['events']);

  var field = document.createElement(tag);

  var appendContent = {
    string: function string(content) {
      field.innerHTML += content;
    },
    object: function object(config) {
      var tag = config.tag,
          content = config.content,
          data = (0, _objectWithoutProperties3.default)(config, ['tag', 'content']);

      return field.appendChild(fbUtils.markup(tag, content, data));
    },
    node: function node(content) {
      return field.appendChild(content);
    },
    array: function array(content) {
      for (var i = 0; i < content.length; i++) {
        contentType = fbUtils.contentType(content[i]);
        appendContent[contentType](content[i]);
      }
    },
    function: function _function(content) {
      content = content();
      contentType = fbUtils.contentType(content);
      appendContent[contentType](content);
    },
    undefined: function undefined() {
      console.error(tag, content, attributes);
    }
  };

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var name = fbUtils.safeAttrName(attr);
      field.setAttribute(name, attrs[attr]);
    }
  }

  if (content) {
    appendContent[contentType].call(this, content);
  }

  fbUtils.bindEvents(field, events);

  return field;
};
var m = fbUtils.markup;

/**
 * Convert html element attributes to key/value object
 * @param  {Object} elem DOM element
 * @return {Object} ex: {attrName: attrValue}
 */
fbUtils.parseAttrs = function (elem) {
  var attrs = elem.attributes;
  var data = {};
  fbUtils.forEach(attrs, function (attr) {
    var attrVal = attrs[attr].value;
    if (attrVal.match(/false|true/g)) {
      attrVal = attrVal === 'true';
    } else if (attrVal.match(/undefined/g)) {
      attrVal = undefined;
    }

    if (attrVal) {
      data[attrs[attr].name] = attrVal;
    }
  });

  return data;
};

/**
 * Convert field options to optionData
 * @param  {Object} field  DOM element
 * @return {Array}         optionData array
 */
fbUtils.parseOptions = function (field) {
  var options = field.getElementsByTagName('option');
  var optionData = {};
  var data = [];

  if (options.length) {
    for (var i = 0; i < options.length; i++) {
      optionData = fbUtils.parseAttrs(options[i]);
      optionData.label = options[i].textContent;
      data.push(optionData);
    }
  }

  return data;
};

/**
 * Parse XML formData
 * @param  {String} xmlString
 * @return {Array}            formData array
 */
fbUtils.parseXML = function (xmlString) {
  var parser = new window.DOMParser();
  var xml = parser.parseFromString(xmlString, 'text/xml');
  var formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');
    for (var i = 0; i < fields.length; i++) {
      var fieldData = fbUtils.parseAttrs(fields[i]);

      if (fields[i].children && fields[i].children.length) {
        fieldData.values = fbUtils.parseOptions(fields[i]);
      }

      formData.push(fieldData);
    }
  }

  return formData;
};

/**
 * Escape markup so it can be displayed rather than rendered
 * @param  {String} html markup
 * @return {String}      escaped html
 */
fbUtils.escapeHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

// Escape an attribute
fbUtils.escapeAttr = function (str) {
  var match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  var replaceTag = function replaceTag(tag) {
    return match[tag] || tag;
  };

  return typeof str === 'string' ? str.replace(/["&<>]/g, replaceTag) : str;
};

// Escape attributes
fbUtils.escapeAttrs = function (attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = fbUtils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};

// forEach that can be used on nodeList
fbUtils.forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

/**
 * Remove duplicates from an array of elements
 * @param  {Array} array  array with possible duplicates
 * @return {Array}        array with only unique values
 */
fbUtils.unique = function (array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};

fbUtils.makeLabel = function (data) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var labelContents = [document.createTextNode(label)];

  if (data.hasOwnProperty('required')) {
    labelContents.push(m('span', '*', { className: 'required' }));
  }

  if (data.type !== 'hidden') {
    if (description) {
      labelContents.push(m('span', '?', {
        className: 'tooltip-element',
        tooltip: description
      }));
    }
  }

  return m('label', labelContents, {
    for: data.id,
    className: 'fb-' + data.type + '-label'
  });
};

fbUtils.templateMap = function (templates, type, fallback) {
  var template = void 0;
  var templateMap = new _map2.default(templates);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(templateMap), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref3 = _step.value;

      var _ref2 = (0, _slicedToArray3.default)(_ref3, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      if (Array.isArray(key)) {
        if (fbUtils.inArray(type, key)) {
          template = value;
          break;
        }
      } else if (type === key) {
        template = value;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (!template) {
    template = fallback;
  }

  return template();
};

/**
 * Generate DOM elements for select, checkbox-group and radio-group.
 * @param  {Object} fieldData
 * @return {Object}           DOM elements
 */
fbUtils.selectTemplate = function (fieldData) {
  var template = void 0;
  var options = [];
  var values = fieldData.values,
      placeholder = fieldData.placeholder,
      type = fieldData.type,
      inline = fieldData.inline,
      other = fieldData.other,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['values', 'placeholder', 'type', 'inline', 'other']);

  var optionType = type.replace('-group', '');
  var isSelect = type === 'select';

  if (values) {
    if (placeholder && isSelect) {
      options.push(m('option', placeholder, {
        disabled: null,
        selected: null
      }));
    }

    for (var i = 0; i < values.length; i++) {
      var _values$i = values[i],
          _values$i$label = _values$i.label,
          label = _values$i$label === undefined ? '' : _values$i$label,
          optionAttrs = (0, _objectWithoutProperties3.default)(_values$i, ['label']);


      optionAttrs.id = data.id + '-' + i;

      if (!optionAttrs.selected || placeholder) {
        delete optionAttrs.selected;
      }
      if (isSelect) {
        var o = m('option', document.createTextNode(label), optionAttrs);
        options.push(o);
      } else {
        var wrapperClass = optionType;
        if (inline) {
          wrapperClass += '-inline';
        }
        optionAttrs.type = optionType;
        var input = m('input', null, (0, _assign2.default)({}, data, optionAttrs));
        var inputLabel = m('label', [input, label], { for: optionAttrs.id });
        var wrapper = m('div', inputLabel, { className: wrapperClass });
        options.push(wrapper);
      }
    }

    if (!isSelect && other) {
      (function () {
        var otherOptionAttrs = {
          id: data.id + '-other',
          className: data.className + ' other-option',
          events: {
            click: function click() {
              return fbUtils.otherOptionCB(otherOptionAttrs.id);
            }
          }
        };
        // let label = mi18n.current.other;
        var wrapperClass = optionType;
        if (inline) {
          wrapperClass += '-inline';
        }

        var optionAttrs = (0, _assign2.default)({}, data, otherOptionAttrs);
        optionAttrs.type = optionType;

        var otherValAttrs = {
          type: 'text',
          name: data.name,
          id: otherOptionAttrs.id + '-value',
          className: 'other-val'
        };
        var otherInputs = [m('input', null, optionAttrs), document.createTextNode('Other'), m('input', null, otherValAttrs)];
        var inputLabel = m('label', otherInputs, { for: optionAttrs.id });
        var wrapper = m('div', inputLabel, { className: wrapperClass });
        options.push(wrapper);
      })();
    }
  }

  var templates = [['select', function () {
    return m(optionType, options, data);
  }], [['checkbox-group', 'radio-group'], function () {
    return m('div', options, { className: type });
  }]];

  return fbUtils.templateMap(templates, type);
};

fbUtils.defaultField = function (fieldData) {
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      type = fieldData.type,
      id = fieldData.id,
      isPreview = fieldData.isPreview,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype', 'type', 'id', 'isPreview']);

  if (id) {
    if (isPreview) {
      data.name = data.name + '-preview';
    }
    data.id = data.name;
  }
  if (description) {
    data.title = description;
  }
  if (subtype) {
    type = subtype;
  }

  return function () {
    return m(type, label, data);
  };
};

/**
 * Loads an array of scripts using jQuery's `getScript`
 * @param  {Array}  arr    scripts
 * @param  {String} path   optional to load form
 * @return {Promise}        a promise
 */
fbUtils.getScripts = function (arr, path) {
  var $ = jQuery;
  var _arr = $.map(arr, function (scr) {
    return $.getScript((path || '') + scr);
  });
  _arr.push($.Deferred(function (deferred) {
    return $(deferred.resolve);
  }));

  return $.when.apply($, (0, _toConsumableArray3.default)(_arr));
};

/**
 * Appends stylesheets to the head
 * @param  {Array} arr
 * @param  {String} path
 * @return {void}
 */
fbUtils.getStyles = function (arr, path) {
  var appendStyle = function appendStyle(href) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };
  arr.forEach(function (scr) {
    return appendStyle((path || '') + scr);
  });
};

fbUtils.longTextTemplate = function (data) {
  var value = data.value,
      attrs = (0, _objectWithoutProperties3.default)(data, ['value']);

  var template = {
    field: m('textarea', value, attrs)
  };
  var editors = {
    tinymce: {
      js: ['//cdnjs.cloudflare.com/ajax/libs/tinymce/4.4.3/jquery.tinymce.min.js'],
      onRender: function onRender(response) {
        console.log('field rendered');
      }
    },
    quill: {
      js: ['//cdn.quilljs.com/1.1.3/quill.js'],
      css: ['//cdn.quilljs.com/1.1.3/quill.snow.css'],
      onRender: function onRender(evt) {
        var onLoad = function onLoad() {
          new window.Quill(template.field, {
            modules: {
              toolbar: [[{ 'header': [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']]
            },
            placeholder: attrs.placeholder || '',
            theme: 'snow'
          });
        };
        if (fbUtils.inArray(data.type, window.fbLoadedScripts)) {
          onLoad();
        } else {
          fbUtils.getStyles(editors[data.type].css);
          fbUtils.getScripts(editors[data.type].js).done(function () {
            window.fbLoadedScripts.push(data.type);
            onLoad();
          });
        }
        document.removeEventListener('fieldRendered', editors['quill'].onRender);
      }
    }
  };

  if (data.type !== 'textarea') {
    template.onRender = editors[data.type].onRender;
    template.field = m('div', null, attrs);
  }

  return { field: template.field, onRender: template.onRender };
};

fbUtils.getTemplate = function (fieldData, opts) {
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      isPreview = fieldData.isPreview,
      onRender = fieldData.onRender,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype', 'isPreview', 'onRender']);

  var template = void 0;
  var field = void 0;

  if (isPreview) {
    data.name = data.name + '-preview';
  }
  data.id = data.name;

  if (subtype) {
    data.type = subtype;
  }

  if (data.multiple || data.type === 'checkbox-group') {
    data.name = data.name + '[]';
  }

  if (data.required) {
    data.required = null;
    data['aria-required'] = 'true';
  }

  var fieldLabel = fbUtils.makeLabel(data, label, description);

  var templates = [[['text', 'password', 'email', 'number', 'file', 'color', 'date', 'tel'], function () {
    var template = {
      field: [fieldLabel, m('input', null, data)],
      onRender: fbUtils.noop
    };
    return template;
  }], [['button', 'submit', 'reset'], function () {
    var template = {
      field: m('button', label, data),
      onRender: fbUtils.noop
    };
    return template;
  }], [['select', 'checkbox-group', 'radio-group'], function () {
    var field = fbUtils.selectTemplate(data);
    var template = {
      field: [fieldLabel, field],
      onRender: fbUtils.noop
    };
    return template;
  }], [['textarea', 'tinymce', 'quill'], function () {
    var field = fbUtils.longTextTemplate(data);
    var template = {
      field: [fieldLabel, field.field],
      onRender: field.onRender
    };
    return template;
  }]];

  template = fbUtils.templateMap(templates, data.type, fbUtils.defaultField(fieldData) // fallback
  );

  if (data.type !== 'hidden') {
    var wrapperAttrs = {};
    if (data.id) {
      wrapperAttrs.className = 'fb-' + data.type + ' form-group field-' + data.id;
    }
    field = fbUtils.markup('div', template.field, wrapperAttrs);
  } else {
    field = fbUtils.markup('input', null, data);
  }

  field.addEventListener('fieldRendered', template.onRender);

  return field;
};

/**
 * Generate preview markup
 * @param  {Object}  fieldData
 * @param  {Object}  opts
 * @param  {Boolean} preview
 * @return {String}  preview markup for field
 */
fbUtils.fieldRender = function (fieldData, opts) {
  var preview = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var fieldMarkup = '';
  var fieldLabel = '';
  var optionsMarkup = '';
  var fieldLabelText = fieldData.label || '';
  var fieldDesc = fieldData.description || '';
  var fieldRequired = '';
  var fieldOptions = fieldData.values;
  fieldData.isPreview = preview;
  var template = fbUtils.getTemplate(fieldData, opts);

  fieldData.name = preview ? fieldData.name + '-preview' : fieldData.name;
  fieldData.id = fieldData.name;
  if (fieldData.multiple) {
    fieldData.name = fieldData.name + '[]';
  }

  fieldData.type = fieldData.subtype || fieldData.type;

  if (fieldData.required) {
    fieldData.required = null;
    fieldData['aria-required'] = 'true';
    fieldRequired = '<span class="required">*</span>';
  }

  if (fieldData.type !== 'hidden') {
    if (fieldDesc) {
      fieldDesc = '<span class="tooltip-element" tooltip="' + fieldDesc + '">?</span>';
    }
    fieldLabel = '<label for="' + fieldData.id + '" class="fb-' + fieldData.type + '-label">' + fieldLabelText + ' ' + fieldRequired + ' ' + fieldDesc + '</label>';
  }

  var fieldLabelVal = fieldData.label;

  delete fieldData.label;
  delete fieldData.description;

  var fieldDataString = fbUtils.attrString(fieldData);

  switch (fieldData.type) {
    case 'textarea':
    case 'rich-text':
      delete fieldData.type;
      var fieldVal = fieldData.value || '';
      fieldMarkup = fieldLabel + '<textarea ' + fieldDataString + '>' + fieldVal + '</textarea>';
      break;
    // case 'select':
    //   let optionAttrsString;
    //   fieldData.type = fieldData.type.replace('-group', '');

    //   if (fieldOptions) {
    //     if (fieldData.placeholder) {
    //       optionsMarkup += `<option disabled selected>${fieldData.placeholder}</option>`;
    //     }

    //     for (let i = 0; i < fieldOptions.length; i++) {
    //       if (!fieldOptions[i].selected || fieldData.placeholder) {
    //         delete fieldOptions[i].selected;
    //       }
    //       if (!fieldOptions[i].label) {
    //         fieldOptions[i].label = '';
    //       }
    //       optionAttrsString = fbUtils.attrString(fieldOptions[i]);
    //       optionsMarkup += `<option ${optionAttrsString}>${fieldOptions[i].label}</option>`;
    //     }
    //   }

    //   fieldMarkup = `${fieldLabel}<select ${fieldDataString}>${optionsMarkup}</select>`;
    //   break;
    // case 'checkbox-group':
    // case 'radio-group':
    //   let optionAttrs;
    //   fieldData.type = fieldData.type.replace('-group', '');

    //   if (fieldData.type === 'checkbox') {
    //     fieldData.name = fieldData.name + '[]';
    //   }

    //   if (fieldOptions) {
    //     let optionAttrsString;

    //     for (let i = 0; i < fieldOptions.length; i++) {
    //       optionAttrs = Object.assign({value: '', label: ''}, fieldData, fieldOptions[i]);

    //       if (optionAttrs.selected) {
    //         delete optionAttrs.selected;
    //         optionAttrs.checked = null;
    //       }

    //       optionAttrs.id = fieldData.id + '-' + i;
    //       optionAttrsString = fbUtils.attrString(optionAttrs);
    //       optionsMarkup += `<input ${optionAttrsString} /> <label for="${optionAttrs.id}">${optionAttrs.label}</label><br>`;
    //     }

    //     if (fieldData.other) {
    //       let otherOptionAttrs = {
    //         id: fieldData.id + '-' + 'other',
    //         className: fieldData.className + ' other-option',
    //         onclick: `fbUtils.otherOptionCB('${fieldData.id}-other')`
    //       };

    //       optionAttrsString = fbUtils.attrString(Object.assign({}, fieldData, otherOptionAttrs));

    //       optionsMarkup += `<input ${optionAttrsString} /> <label for="${otherOptionAttrs.id}">${opts.messages.other}</label> <input type="text" name="${fieldData.name}" id="${otherOptionAttrs.id}-value" style="display:none;" />`;
    //     }
    //   }
    //   fieldMarkup = `${fieldLabel}<div class="${fieldData.type}-group">${optionsMarkup}</div>`;
    //   break;
    // case 'text':
    // case 'password':
    // case 'email':
    // case 'number':
    // case 'file':
    // case 'hidden':
    // case 'date':
    // case 'tel':
    // case 'autocomplete':
    //   fieldMarkup = `${fieldLabel} <input ${fieldDataString}>`;
    //   break;
    // case 'color':
    //   fieldMarkup = `${fieldLabel} <input ${fieldDataString}> ${opts.messages.selectColor}`;
    //   break;
    case 'button':
    case 'submit':
      fieldMarkup = '<button ' + fieldDataString + '>' + fieldLabelVal + '</button>';
      break;
    case 'checkbox':
      fieldMarkup = '<input ' + fieldDataString + '> ' + fieldLabel;

      if (fieldData.toggle) {
        setTimeout(function () {
          $(document.getElementById(fieldData.id)).kcToggle();
        }, 100);
      }
      break;
    default:
      fieldMarkup = '<' + fieldData.type + ' ' + fieldDataString + '>' + fieldLabelVal + '</' + fieldData.type + '>';
  }

  if (fieldData.type !== 'hidden') {
    var className = fieldData.id ? 'fb-' + fieldData.type + ' form-group field-' + fieldData.id : '';
    fieldMarkup = fbUtils.markup('div', template, {
      className: className
    });
  } else {
    fieldMarkup = fbUtils.markup('input', null, fieldData);
  }

  return fieldMarkup;
};

/**
 * Callback for other option.
 * Toggles the hidden text area for "other" option.
 * @param  {String} otherId id of the "other" option input
 */
fbUtils.otherOptionCB = function (otherId) {
  var otherInput = document.getElementById(otherId);
  var otherInputValue = document.getElementById(otherId + '-value');

  if (otherInput.checked) {
    otherInputValue.style.display = 'inline-block';
  } else {
    otherInputValue.style.display = 'none';
  }
};

/**
 * Capitalizes a string
 * @param  {String} str uncapitalized string
 * @return {String} str capitalized string
 */
fbUtils.capitalize = function (str) {
  return str.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
};

fbUtils.merge = function (obj1, obj2) {
  var mergedObj = (0, _assign2.default)({}, obj1, obj2);
  for (var prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? fbUtils.unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
      } else if ((0, _typeof3.default)(obj2[prop]) === 'object') {
        mergedObj[prop] = fbUtils.merge(obj1[prop], obj2[prop]);
      } else {
        mergedObj[prop] = obj2[prop];
      }
    }
  }
  return mergedObj;
};

/**
 * Util to remove contents of DOM Object
 * @param  {Object} element
 * @return {Object}         element with its children removed
 */
fbUtils.empty = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

fbUtils.noop = function () {
  return null;
};

module.exports = fbUtils;

},{"babel-runtime/core-js/get-iterator":3,"babel-runtime/core-js/map":5,"babel-runtime/core-js/object/assign":6,"babel-runtime/helpers/objectWithoutProperties":12,"babel-runtime/helpers/slicedToArray":13,"babel-runtime/helpers/toConsumableArray":14,"babel-runtime/helpers/typeof":15}]},{},[129])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vZGlzdC9taTE4bi5taW4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvZGVlcC1leHRlbmQvbGliL2RlZXAtZXh0ZW5kLmpzIiwibm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJzcmMvanMvZXZlbnRzLmpzIiwic3JjL2pzL2Zvcm0tYnVpbGRlci5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL2tjLXRvZ2dsZS5qcyIsInNyYy9qcy9wb2x5ZmlsbHMuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN3ZEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIVxuICogbWkxOG4gLSBodHRwczovL2dpdGh1Yi5jb20vRHJhZ2dhYmxlL21pMThuXG4gKiBWZXJzaW9uOiAwLjMuMlxuICogQXV0aG9yOiBLZXZpbiBDaGFwcGVsbCA8a2V2aW4uYi5jaGFwcGVsbEBnbWFpbC5jb20+IChodHRwOi8va2V2aW4tY2hhcHBlbGwuY29tKVxuICovXG5tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmxvYWRlZD0hMCxvLmV4cG9ydHN9dmFyIGU9e307cmV0dXJuIG4ubT10LG4uYz1lLG4ucD1cImRpc3QvXCIsbigwKX0oW2Z1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZSg0NSksdT1yKG8pLGk9ZSgzOSksZj1yKGkpLGM9ZSg0MyksYT1yKGMpLHM9ZSg0NCksbD1yKHMpLHA9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7KDAsYVtcImRlZmF1bHRcIl0pKHRoaXMsdCk7dmFyIG49e2xvY2F0aW9uOlwiYXNzZXRzL2xhbmcvXCIsbGFuZ3M6W1wiZW4tVVNcIixcImVzLUVTXCJdLGxvY2FsZTpcImVuLVVTXCIscHJlbG9hZGVkOnt9fSxlPXRoaXM7ZS5pbml0PWZ1bmN0aW9uKHQpe3JldHVybiBlLmNvbmZpZz0oMCxmW1wiZGVmYXVsdFwiXSkoe30sbix0KSxlLmxhbmdzPSgwLGZbXCJkZWZhdWx0XCJdKSh7fSxlLmNvbmZpZy5wcmVsb2FkZWQpLGUubG9jYWxlPWUuY29uZmlnLmxvY2FsZXx8ZS5jb25maWcubGFuZ3NbMF0sZS5zZXRDdXJyZW50KGUubG9jYWxlKX19cmV0dXJuKDAsbFtcImRlZmF1bHRcIl0pKHQsW3trZXk6XCJnZXRWYWx1ZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmN1cnJlbnQmJnRoaXMuY3VycmVudFt0XXx8dH19LHtrZXk6XCJtYWtlU2FmZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXtcIntcIjpcIlxcXFx7XCIsXCJ9XCI6XCJcXFxcfVwiLFwifFwiOlwiXFxcXHxcIn07cmV0dXJuIHQ9dC5yZXBsYWNlKC9cXHt8XFx9fFxcfC9nLGZ1bmN0aW9uKHQpe3JldHVybiBuW3RdfSksbmV3IFJlZ0V4cCh0LFwiZ1wiKX19LHtrZXk6XCJwdXRcIix2YWx1ZTpmdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmN1cnJlbnRbdF09bn19LHtrZXk6XCJnZXRcIix2YWx1ZTpmdW5jdGlvbih0LG4pe3ZhciBlPXRoaXMscj10aGlzLmdldFZhbHVlKHQpLG89ci5tYXRjaCgvXFx7W15cXH1dKz9cXH0vZyksaT12b2lkIDA7aWYobiYmbylpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBuP1widW5kZWZpbmVkXCI6KDAsdVtcImRlZmF1bHRcIl0pKG4pKSlmb3IodmFyIGY9MDtmPG8ubGVuZ3RoO2YrKylpPW9bZl0uc3Vic3RyaW5nKDEsb1tmXS5sZW5ndGgtMSkscj1yLnJlcGxhY2UoZS5tYWtlU2FmZShvW2ZdKSxuW2ldfHxcIlwiKTtlbHNlIHI9ci5yZXBsYWNlKC9cXHtbXlxcfV0rP1xcfS9nLG4pO3JldHVybiByfX0se2tleTpcImZyb21GaWxlXCIsdmFsdWU6ZnVuY3Rpb24odCl7Zm9yKHZhciBuLGU9dC5zcGxpdChcIlxcblwiKSxyPXt9LG89MDtvPGUubGVuZ3RoO28rKyluPWVbb10ubWF0Y2goL14oLis/KSAqPz0gKj8oW15cXG5dKykvKSxuJiYocltuWzFdXT1uWzJdLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKSk7cmV0dXJuIHJ9fSx7a2V5OlwicHJvY2Vzc0ZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgbj10aGlzLGU9dC5yZXBsYWNlKC9cXG5cXG4vZyxcIlxcblwiKTtyZXR1cm4gbi5sYW5nc1tuLmxvY2FsZV09bi5mcm9tRmlsZShlKX19LHtrZXk6XCJsb2FkTGFuZ1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyB3aW5kb3cuUHJvbWlzZShmdW5jdGlvbihlLHIpe24ubGFuZ3Nbbi5sb2NhbGVdP2Uobi5sYW5nc1tuLmxvY2FsZV0pOiFmdW5jdGlvbigpe3ZhciBvPW5ldyBYTUxIdHRwUmVxdWVzdDtvLm9wZW4oXCJHRVRcIixuLmNvbmZpZy5sb2NhdGlvbit0K1wiLmxhbmdcIiwhMCksby5vbmxvYWQ9ZnVuY3Rpb24oKXt0aGlzLnN0YXR1czw9MzA0PyhuLnByb2Nlc3NGaWxlKG8ucmVzcG9uc2VUZXh0KSxlKG8ucmVzcG9uc2UpKTpyKHtzdGF0dXM6dGhpcy5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9KX0sby5vbmVycm9yPWZ1bmN0aW9uKCl7cih7c3RhdHVzOnRoaXMuc3RhdHVzLHN0YXR1c1RleHQ6by5zdGF0dXNUZXh0fSl9LG8uc2VuZCgpfSgpfSl9fSx7a2V5Olwic2V0Q3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiZW4tVVNcIixuPXRoaXMubG9hZExhbmcodCk7cmV0dXJuIHRoaXMubG9jYWxlPXQsdGhpcy5jdXJyZW50PXRoaXMubGFuZ3NbdF0sd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIix0KSxufX0se2tleTpcImdldExhbmdzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29uZmlnLmxhbmdzfX1dKSx0fSgpO25bXCJkZWZhdWx0XCJdPW5ldyBwfSxmdW5jdGlvbih0LG4pe3ZhciBlPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPWUpfSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPSFlKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9Lmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDExKSxvPWUoMzEpLHU9ZSgyNiksaT1PYmplY3QuZGVmaW5lUHJvcGVydHk7bi5mPWUoMik/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHQsbixlKXtpZihyKHQpLG49dShuLCEwKSxyKGUpLG8pdHJ5e3JldHVybiBpKHQsbixlKX1jYXRjaChmKXt9aWYoXCJnZXRcImluIGV8fFwic2V0XCJpbiBlKXRocm93IFR5cGVFcnJvcihcIkFjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIVwiKTtyZXR1cm5cInZhbHVlXCJpbiBlJiYodFtuXT1lLnZhbHVlKSx0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMzIpLG89ZSgxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByKG8odCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNCksbz1lKDE1KTt0LmV4cG9ydHM9ZSgyKT9mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHIuZih0LG4sbygxLGUpKX06ZnVuY3Rpb24odCxuLGUpe3JldHVybiB0W25dPWUsdH19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI0KShcIndrc1wiKSxvPWUoMTYpLHU9ZSgxKS5TeW1ib2wsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LGY9dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT1pJiZ1W3RdfHwoaT91Om8pKFwiU3ltYm9sLlwiK3QpKX07Zi5zdG9yZT1yfSxmdW5jdGlvbih0LG4pe3ZhciBlPXQuZXhwb3J0cz17dmVyc2lvbjpcIjIuNC4wXCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9ZSl9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4hIXQoKX1jYXRjaChuKXtyZXR1cm4hMH19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgzNiksbz1lKDE4KTt0LmV4cG9ydHM9T2JqZWN0LmtleXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKCFyKHQpKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhbiBvYmplY3QhXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMSksbz1lKDgpLHU9ZSg1MyksaT1lKDYpLGY9XCJwcm90b3R5cGVcIixjPWZ1bmN0aW9uKHQsbixlKXt2YXIgYSxzLGwscD10JmMuRix2PXQmYy5HLHk9dCZjLlMsZD10JmMuUCxoPXQmYy5CLGc9dCZjLlcsYj12P286b1tuXXx8KG9bbl09e30pLG09YltmXSx4PXY/cjp5P3Jbbl06KHJbbl18fHt9KVtmXTt2JiYoZT1uKTtmb3IoYSBpbiBlKXM9IXAmJngmJnZvaWQgMCE9PXhbYV0scyYmYSBpbiBifHwobD1zP3hbYV06ZVthXSxiW2FdPXYmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHhbYV0/ZVthXTpoJiZzP3UobCxyKTpnJiZ4W2FdPT1sP2Z1bmN0aW9uKHQpe3ZhciBuPWZ1bmN0aW9uKG4sZSxyKXtpZih0aGlzIGluc3RhbmNlb2YgdCl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbmV3IHQ7Y2FzZSAxOnJldHVybiBuZXcgdChuKTtjYXNlIDI6cmV0dXJuIG5ldyB0KG4sZSl9cmV0dXJuIG5ldyB0KG4sZSxyKX1yZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3JldHVybiBuW2ZdPXRbZl0sbn0obCk6ZCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbD91KEZ1bmN0aW9uLmNhbGwsbCk6bCxkJiYoKGIudmlydHVhbHx8KGIudmlydHVhbD17fSkpW2FdPWwsdCZjLlImJm0mJiFtW2FdJiZpKG0sYSxsKSkpfTtjLkY9MSxjLkc9MixjLlM9NCxjLlA9OCxjLkI9MTYsYy5XPTMyLGMuVT02NCxjLlI9MTI4LHQuZXhwb3J0cz1jfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fX0sZnVuY3Rpb24odCxuKXtuLmY9e30ucHJvcGVydHlJc0VudW1lcmFibGV9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJue2VudW1lcmFibGU6ISgxJnQpLGNvbmZpZ3VyYWJsZTohKDImdCksd3JpdGFibGU6ISg0JnQpLHZhbHVlOm59fX0sZnVuY3Rpb24odCxuKXt2YXIgZT0wLHI9TWF0aC5yYW5kb20oKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PXQ/XCJcIjp0LFwiKV9cIiwoKytlK3IpLnRvU3RyaW5nKDM2KSl9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZih2b2lkIDA9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK3QpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9XCJjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2ZcIi5zcGxpdChcIixcIil9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPXt9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz0hMH0sZnVuY3Rpb24odCxuKXtuLmY9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc30sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNCkuZixvPWUoMyksdT1lKDcpKFwidG9TdHJpbmdUYWdcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0JiYhbyh0PWU/dDp0LnByb3RvdHlwZSx1KSYmcih0LHUse2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTpufSl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNCkoXCJrZXlzXCIpLG89ZSgxNik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT1vKHQpKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEpLG89XCJfX2NvcmUtanNfc2hhcmVkX19cIix1PXJbb118fChyW29dPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHVbdF18fCh1W3RdPXt9KX19LGZ1bmN0aW9uKHQsbil7dmFyIGU9TWF0aC5jZWlsLHI9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9yOmUpKHQpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2lmKCFyKHQpKXJldHVybiB0O3ZhciBlLG87aWYobiYmXCJmdW5jdGlvblwiPT10eXBlb2YoZT10LnRvU3RyaW5nKSYmIXIobz1lLmNhbGwodCkpKXJldHVybiBvO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKGU9dC52YWx1ZU9mKSYmIXIobz1lLmNhbGwodCkpKXJldHVybiBvO2lmKCFuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihlPXQudG9TdHJpbmcpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMSksbz1lKDgpLHU9ZSgyMCksaT1lKDI4KSxmPWUoNCkuZjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49by5TeW1ib2x8fChvLlN5bWJvbD11P3t9OnIuU3ltYm9sfHx7fSk7XCJfXCI9PXQuY2hhckF0KDApfHx0IGluIG58fGYobix0LHt2YWx1ZTppLmYodCl9KX19LGZ1bmN0aW9uKHQsbixlKXtuLmY9ZSg3KX0sZnVuY3Rpb24odCxuKXt2YXIgZT17fS50b1N0cmluZzt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY2FsbCh0KS5zbGljZSg4LC0xKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKSxvPWUoMSkuZG9jdW1lbnQsdT1yKG8pJiZyKG8uY3JlYXRlRWxlbWVudCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB1P28uY3JlYXRlRWxlbWVudCh0KTp7fX19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9IWUoMikmJiFlKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlKDMwKShcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyOSk7dC5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKHQpe3JldHVyblwiU3RyaW5nXCI9PXIodCk/dC5zcGxpdChcIlwiKTpPYmplY3QodCl9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgyMCksbz1lKDEyKSx1PWUoMzcpLGk9ZSg2KSxmPWUoMyksYz1lKDE5KSxhPWUoNTcpLHM9ZSgyMiksbD1lKDY1KSxwPWUoNykoXCJpdGVyYXRvclwiKSx2PSEoW10ua2V5cyYmXCJuZXh0XCJpbltdLmtleXMoKSkseT1cIkBAaXRlcmF0b3JcIixkPVwia2V5c1wiLGg9XCJ2YWx1ZXNcIixnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSxiLG0seCxPKXthKGUsbixiKTt2YXIgdyxTLF8saj1mdW5jdGlvbih0KXtpZighdiYmdCBpbiBNKXJldHVybiBNW3RdO3N3aXRjaCh0KXtjYXNlIGQ6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMsdCl9O2Nhc2UgaDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMsdCl9fSxFPW4rXCIgSXRlcmF0b3JcIixQPW09PWgsaz0hMSxNPXQucHJvdG90eXBlLFQ9TVtwXXx8TVt5XXx8bSYmTVttXSxGPVR8fGoobSksQT1tP1A/aihcImVudHJpZXNcIik6Rjp2b2lkIDAsST1cIkFycmF5XCI9PW4/TS5lbnRyaWVzfHxUOlQ7aWYoSSYmKF89bChJLmNhbGwobmV3IHQpKSxfIT09T2JqZWN0LnByb3RvdHlwZSYmKHMoXyxFLCEwKSxyfHxmKF8scCl8fGkoXyxwLGcpKSksUCYmVCYmVC5uYW1lIT09aCYmKGs9ITAsRj1mdW5jdGlvbigpe3JldHVybiBULmNhbGwodGhpcyl9KSxyJiYhT3x8IXYmJiFrJiZNW3BdfHxpKE0scCxGKSxjW25dPUYsY1tFXT1nLG0paWYodz17dmFsdWVzOlA/RjpqKGgpLGtleXM6eD9GOmooZCksZW50cmllczpBfSxPKWZvcihTIGluIHcpUyBpbiBNfHx1KE0sUyx3W1NdKTtlbHNlIG8oby5QK28uRioodnx8ayksbix3KTtyZXR1cm4gd319LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDExKSxvPWUoNjIpLHU9ZSgxOCksaT1lKDIzKShcIklFX1BST1RPXCIpLGY9ZnVuY3Rpb24oKXt9LGM9XCJwcm90b3R5cGVcIixhPWZ1bmN0aW9uKCl7dmFyIHQsbj1lKDMwKShcImlmcmFtZVwiKSxyPXUubGVuZ3RoLG89XCI8XCIsaT1cIj5cIjtmb3Iobi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGUoNTUpLmFwcGVuZENoaWxkKG4pLG4uc3JjPVwiamF2YXNjcmlwdDpcIix0PW4uY29udGVudFdpbmRvdy5kb2N1bWVudCx0Lm9wZW4oKSx0LndyaXRlKG8rXCJzY3JpcHRcIitpK1wiZG9jdW1lbnQuRj1PYmplY3RcIitvK1wiL3NjcmlwdFwiK2kpLHQuY2xvc2UoKSxhPXQuRjtyLS07KWRlbGV0ZSBhW2NdW3Vbcl1dO3JldHVybiBhKCl9O3QuZXhwb3J0cz1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbih0LG4pe3ZhciBlO3JldHVybiBudWxsIT09dD8oZltjXT1yKHQpLGU9bmV3IGYsZltjXT1udWxsLGVbaV09dCk6ZT1hKCksdm9pZCAwPT09bj9lOm8oZSxuKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDM2KSxvPWUoMTgpLmNvbmNhdChcImxlbmd0aFwiLFwicHJvdG90eXBlXCIpO24uZj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDMpLG89ZSg1KSx1PWUoNTIpKCExKSxpPWUoMjMpKFwiSUVfUFJPVE9cIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7dmFyIGUsZj1vKHQpLGM9MCxhPVtdO2ZvcihlIGluIGYpZSE9aSYmcihmLGUpJiZhLnB1c2goZSk7Zm9yKDtuLmxlbmd0aD5jOylyKGYsZT1uW2MrK10pJiYofnUoYSxlKXx8YS5wdXNoKGUpKTtyZXR1cm4gYX19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9ZSg2KX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KHIodCkpfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg0NiksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNDcpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ4KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg0OSksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbil7XCJ1c2Ugc3RyaWN0XCI7bi5fX2VzTW9kdWxlPSEwLG5bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKHQsbil7aWYoISh0IGluc3RhbmNlb2YgbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19bi5fX2VzTW9kdWxlPSEwO3ZhciBvPWUoNDApLHU9cihvKTtuW1wiZGVmYXVsdFwiXT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXtmb3IodmFyIGU9MDtlPG4ubGVuZ3RoO2UrKyl7dmFyIHI9bltlXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksKDAsdVtcImRlZmF1bHRcIl0pKHQsci5rZXkscil9fXJldHVybiBmdW5jdGlvbihuLGUscil7cmV0dXJuIGUmJnQobi5wcm90b3R5cGUsZSksciYmdChuLHIpLG59fSgpfSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e1wiZGVmYXVsdFwiOnR9fW4uX19lc01vZHVsZT0hMDt2YXIgbz1lKDQyKSx1PXIobyksaT1lKDQxKSxmPXIoaSksYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBmW1wiZGVmYXVsdFwiXSYmXCJzeW1ib2xcIj09dHlwZW9mIHVbXCJkZWZhdWx0XCJdP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZ0LmNvbnN0cnVjdG9yPT09ZltcImRlZmF1bHRcIl0/XCJzeW1ib2xcIjp0eXBlb2YgdH07bltcImRlZmF1bHRcIl09XCJmdW5jdGlvblwiPT10eXBlb2YgZltcImRlZmF1bHRcIl0mJlwic3ltYm9sXCI9PT1jKHVbXCJkZWZhdWx0XCJdKT9mdW5jdGlvbih0KXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCl9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBmW1wiZGVmYXVsdFwiXSYmdC5jb25zdHJ1Y3Rvcj09PWZbXCJkZWZhdWx0XCJdP1wic3ltYm9sXCI6XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpjKHQpfX0sZnVuY3Rpb24odCxuLGUpe2UoNzApLHQuZXhwb3J0cz1lKDgpLk9iamVjdC5hc3NpZ259LGZ1bmN0aW9uKHQsbixlKXtlKDcxKTt2YXIgcj1lKDgpLk9iamVjdDt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3JldHVybiByLmRlZmluZVByb3BlcnR5KHQsbixlKX19LGZ1bmN0aW9uKHQsbixlKXtlKDc0KSxlKDcyKSxlKDc1KSxlKDc2KSx0LmV4cG9ydHM9ZSg4KS5TeW1ib2x9LGZ1bmN0aW9uKHQsbixlKXtlKDczKSxlKDc3KSx0LmV4cG9ydHM9ZSgyOCkuZihcIml0ZXJhdG9yXCIpfSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKCl7fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNSksbz1lKDY4KSx1PWUoNjcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24obixlLGkpe3ZhciBmLGM9cihuKSxhPW8oYy5sZW5ndGgpLHM9dShpLGEpO2lmKHQmJmUhPWUpe2Zvcig7YT5zOylpZihmPWNbcysrXSxmIT1mKXJldHVybiEwfWVsc2UgZm9yKDthPnM7cysrKWlmKCh0fHxzIGluIGMpJiZjW3NdPT09ZSlyZXR1cm4gdHx8c3x8MDtyZXR1cm4hdCYmLTF9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNTApO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7aWYocih0KSx2b2lkIDA9PT1uKXJldHVybiB0O3N3aXRjaChlKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0LmNhbGwobixlKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiB0LmNhbGwobixlLHIpfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKGUscixvKXtyZXR1cm4gdC5jYWxsKG4sZSxyLG8pfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseShuLGFyZ3VtZW50cyl9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTApLG89ZSgyMSksdT1lKDE0KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49cih0KSxlPW8uZjtpZihlKWZvcih2YXIgaSxmPWUodCksYz11LmYsYT0wO2YubGVuZ3RoPmE7KWMuY2FsbCh0LGk9ZlthKytdKSYmbi5wdXNoKGkpO3JldHVybiBufX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz1lKDEpLmRvY3VtZW50JiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnR9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KTt0LmV4cG9ydHM9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24odCl7cmV0dXJuXCJBcnJheVwiPT1yKHQpfX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoMzQpLG89ZSgxNSksdT1lKDIyKSxpPXt9O2UoNikoaSxlKDcpKFwiaXRlcmF0b3JcIiksZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7dC5wcm90b3R5cGU9cihpLHtuZXh0Om8oMSxlKX0pLHUodCxuK1wiIEl0ZXJhdG9yXCIpfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57dmFsdWU6bixkb25lOiEhdH19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCksbz1lKDUpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe2Zvcih2YXIgZSx1PW8odCksaT1yKHUpLGY9aS5sZW5ndGgsYz0wO2Y+YzspaWYodVtlPWlbYysrXV09PT1uKXJldHVybiBlfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTYpKFwibWV0YVwiKSxvPWUoMTMpLHU9ZSgzKSxpPWUoNCkuZixmPTAsYz1PYmplY3QuaXNFeHRlbnNpYmxlfHxmdW5jdGlvbigpe3JldHVybiEwfSxhPSFlKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIGMoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSl9KSxzPWZ1bmN0aW9uKHQpe2kodCxyLHt2YWx1ZTp7aTpcIk9cIisgKytmLHc6e319fSl9LGw9ZnVuY3Rpb24odCxuKXtpZighbyh0KSlyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OihcInN0cmluZ1wiPT10eXBlb2YgdD9cIlNcIjpcIlBcIikrdDtpZighdSh0LHIpKXtpZighYyh0KSlyZXR1cm5cIkZcIjtpZighbilyZXR1cm5cIkVcIjtzKHQpfXJldHVybiB0W3JdLml9LHA9ZnVuY3Rpb24odCxuKXtpZighdSh0LHIpKXtpZighYyh0KSlyZXR1cm4hMDtpZighbilyZXR1cm4hMTtzKHQpfXJldHVybiB0W3JdLnd9LHY9ZnVuY3Rpb24odCl7cmV0dXJuIGEmJnkuTkVFRCYmYyh0KSYmIXUodCxyKSYmcyh0KSx0fSx5PXQuZXhwb3J0cz17S0VZOnIsTkVFRDohMSxmYXN0S2V5OmwsZ2V0V2VhazpwLG9uRnJlZXplOnZ9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgxMCksbz1lKDIxKSx1PWUoMTQpLGk9ZSgzOCksZj1lKDMyKSxjPU9iamVjdC5hc3NpZ247dC5leHBvcnRzPSFjfHxlKDkpKGZ1bmN0aW9uKCl7dmFyIHQ9e30sbj17fSxlPVN5bWJvbCgpLHI9XCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiO3JldHVybiB0W2VdPTcsci5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe25bdF09dH0pLDchPWMoe30sdClbZV18fE9iamVjdC5rZXlzKGMoe30sbikpLmpvaW4oXCJcIikhPXJ9KT9mdW5jdGlvbih0LG4pe2Zvcih2YXIgZT1pKHQpLGM9YXJndW1lbnRzLmxlbmd0aCxhPTEscz1vLmYsbD11LmY7Yz5hOylmb3IodmFyIHAsdj1mKGFyZ3VtZW50c1thKytdKSx5PXM/cih2KS5jb25jYXQocyh2KSk6cih2KSxkPXkubGVuZ3RoLGg9MDtkPmg7KWwuY2FsbCh2LHA9eVtoKytdKSYmKGVbcF09dltwXSk7cmV0dXJuIGV9OmN9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDQpLG89ZSgxMSksdT1lKDEwKTt0LmV4cG9ydHM9ZSgyKT9PYmplY3QuZGVmaW5lUHJvcGVydGllczpmdW5jdGlvbih0LG4pe28odCk7Zm9yKHZhciBlLGk9dShuKSxmPWkubGVuZ3RoLGM9MDtmPmM7KXIuZih0LGU9aVtjKytdLG5bZV0pO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTQpLG89ZSgxNSksdT1lKDUpLGk9ZSgyNiksZj1lKDMpLGM9ZSgzMSksYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO24uZj1lKDIpP2E6ZnVuY3Rpb24odCxuKXtpZih0PXUodCksbj1pKG4sITApLGMpdHJ5e3JldHVybiBhKHQsbil9Y2F0Y2goZSl7fWlmKGYodCxuKSlyZXR1cm4gbyghci5mLmNhbGwodCxuKSx0W25dKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDUpLG89ZSgzNSkuZix1PXt9LnRvU3RyaW5nLGk9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93JiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcz9PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpOltdLGY9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiBvKHQpfWNhdGNoKG4pe3JldHVybiBpLnNsaWNlKCl9fTt0LmV4cG9ydHMuZj1mdW5jdGlvbih0KXtyZXR1cm4gaSYmXCJbb2JqZWN0IFdpbmRvd11cIj09dS5jYWxsKHQpP2YodCk6byhyKHQpKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDMpLG89ZSgzOCksdT1lKDIzKShcIklFX1BST1RPXCIpLGk9T2JqZWN0LnByb3RvdHlwZTt0LmV4cG9ydHM9T2JqZWN0LmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdD1vKHQpLHIodCx1KT90W3VdOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29uc3RydWN0b3ImJnQgaW5zdGFuY2VvZiB0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IucHJvdG90eXBlOnQgaW5zdGFuY2VvZiBPYmplY3Q/aTpudWxsfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjUpLG89ZSgxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihuLGUpe3ZhciB1LGksZj1TdHJpbmcobyhuKSksYz1yKGUpLGE9Zi5sZW5ndGg7cmV0dXJuIGM8MHx8Yz49YT90P1wiXCI6dm9pZCAwOih1PWYuY2hhckNvZGVBdChjKSx1PDU1Mjk2fHx1PjU2MzE5fHxjKzE9PT1hfHwoaT1mLmNoYXJDb2RlQXQoYysxKSk8NTYzMjB8fGk+NTczNDM/dD9mLmNoYXJBdChjKTp1OnQ/Zi5zbGljZShjLGMrMik6KHUtNTUyOTY8PDEwKSsoaS01NjMyMCkrNjU1MzYpfX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI1KSxvPU1hdGgubWF4LHU9TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ9cih0KSx0PDA/byh0K24sMCk6dSh0LG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjUpLG89TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0PjA/byhyKHQpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg1MSksbz1lKDU4KSx1PWUoMTkpLGk9ZSg1KTt0LmV4cG9ydHM9ZSgzMykoQXJyYXksXCJBcnJheVwiLGZ1bmN0aW9uKHQsbil7dGhpcy5fdD1pKHQpLHRoaXMuX2k9MCx0aGlzLl9rPW59LGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdCxuPXRoaXMuX2ssZT10aGlzLl9pKys7cmV0dXJuIXR8fGU+PXQubGVuZ3RoPyh0aGlzLl90PXZvaWQgMCxvKDEpKTpcImtleXNcIj09bj9vKDAsZSk6XCJ2YWx1ZXNcIj09bj9vKDAsdFtlXSk6bygwLFtlLHRbZV1dKX0sXCJ2YWx1ZXNcIiksdS5Bcmd1bWVudHM9dS5BcnJheSxyKFwia2V5c1wiKSxyKFwidmFsdWVzXCIpLHIoXCJlbnRyaWVzXCIpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMik7cihyLlMrci5GLFwiT2JqZWN0XCIse2Fzc2lnbjplKDYxKX0pfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMik7cihyLlMrci5GKiFlKDIpLFwiT2JqZWN0XCIse2RlZmluZVByb3BlcnR5OmUoNCkuZn0pfSxmdW5jdGlvbih0LG4pe30sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoNjYpKCEwKTtlKDMzKShTdHJpbmcsXCJTdHJpbmdcIixmdW5jdGlvbih0KXt0aGlzLl90PVN0cmluZyh0KSx0aGlzLl9pPTB9LGZ1bmN0aW9uKCl7dmFyIHQsbj10aGlzLl90LGU9dGhpcy5faTtyZXR1cm4gZT49bi5sZW5ndGg/e3ZhbHVlOnZvaWQgMCxkb25lOiEwfToodD1yKG4sZSksdGhpcy5faSs9dC5sZW5ndGgse3ZhbHVlOnQsZG9uZTohMX0pfSl9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDEpLG89ZSgzKSx1PWUoMiksaT1lKDEyKSxmPWUoMzcpLGM9ZSg2MCkuS0VZLGE9ZSg5KSxzPWUoMjQpLGw9ZSgyMikscD1lKDE2KSx2PWUoNykseT1lKDI4KSxkPWUoMjcpLGg9ZSg1OSksZz1lKDU0KSxiPWUoNTYpLG09ZSgxMSkseD1lKDUpLE89ZSgyNiksdz1lKDE1KSxTPWUoMzQpLF89ZSg2NCksaj1lKDYzKSxFPWUoNCksUD1lKDEwKSxrPWouZixNPUUuZixUPV8uZixGPXIuU3ltYm9sLEE9ci5KU09OLEk9QSYmQS5zdHJpbmdpZnksTj1cInByb3RvdHlwZVwiLEM9dihcIl9oaWRkZW5cIiksTD12KFwidG9QcmltaXRpdmVcIiksUj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxXPXMoXCJzeW1ib2wtcmVnaXN0cnlcIiksRD1zKFwic3ltYm9sc1wiKSxHPXMoXCJvcC1zeW1ib2xzXCIpLEo9T2JqZWN0W05dLFU9XCJmdW5jdGlvblwiPT10eXBlb2YgRixLPXIuUU9iamVjdCxxPSFLfHwhS1tOXXx8IUtbTl0uZmluZENoaWxkLHo9dSYmYShmdW5jdGlvbigpe3JldHVybiA3IT1TKE0oe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBNKHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSk/ZnVuY3Rpb24odCxuLGUpe3ZhciByPWsoSixuKTtyJiZkZWxldGUgSltuXSxNKHQsbixlKSxyJiZ0IT09SiYmTShKLG4scil9Ok0sQj1mdW5jdGlvbih0KXt2YXIgbj1EW3RdPVMoRltOXSk7cmV0dXJuIG4uX2s9dCxufSxWPVUmJlwic3ltYm9sXCI9PXR5cGVvZiBGLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIEZ9LFk9ZnVuY3Rpb24odCxuLGUpe3JldHVybiB0PT09SiYmWShHLG4sZSksbSh0KSxuPU8obiwhMCksbShlKSxvKEQsbik/KGUuZW51bWVyYWJsZT8obyh0LEMpJiZ0W0NdW25dJiYodFtDXVtuXT0hMSksZT1TKGUse2VudW1lcmFibGU6dygwLCExKX0pKToobyh0LEMpfHxNKHQsQyx3KDEse30pKSx0W0NdW25dPSEwKSx6KHQsbixlKSk6TSh0LG4sZSl9LEg9ZnVuY3Rpb24odCxuKXttKHQpO2Zvcih2YXIgZSxyPWcobj14KG4pKSxvPTAsdT1yLmxlbmd0aDt1Pm87KVkodCxlPXJbbysrXSxuW2VdKTtyZXR1cm4gdH0sUT1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uP1ModCk6SChTKHQpLG4pfSxYPWZ1bmN0aW9uKHQpe3ZhciBuPVIuY2FsbCh0aGlzLHQ9Tyh0LCEwKSk7cmV0dXJuISh0aGlzPT09SiYmbyhELHQpJiYhbyhHLHQpKSYmKCEobnx8IW8odGhpcyx0KXx8IW8oRCx0KXx8byh0aGlzLEMpJiZ0aGlzW0NdW3RdKXx8bil9LCQ9ZnVuY3Rpb24odCxuKXtpZih0PXgodCksbj1PKG4sITApLHQhPT1KfHwhbyhELG4pfHxvKEcsbikpe3ZhciBlPWsodCxuKTtyZXR1cm4hZXx8IW8oRCxuKXx8byh0LEMpJiZ0W0NdW25dfHwoZS5lbnVtZXJhYmxlPSEwKSxlfX0sWj1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT1UKHgodCkpLHI9W10sdT0wO2UubGVuZ3RoPnU7KW8oRCxuPWVbdSsrXSl8fG49PUN8fG49PWN8fHIucHVzaChuKTtyZXR1cm4gcn0sdHQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBuLGU9dD09PUoscj1UKGU/Rzp4KHQpKSx1PVtdLGk9MDtyLmxlbmd0aD5pOykhbyhELG49cltpKytdKXx8ZSYmIW8oSixuKXx8dS5wdXNoKERbbl0pO3JldHVybiB1fTtVfHwoRj1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBGKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciFcIik7dmFyIHQ9cChhcmd1bWVudHMubGVuZ3RoPjA/YXJndW1lbnRzWzBdOnZvaWQgMCksbj1mdW5jdGlvbihlKXt0aGlzPT09SiYmbi5jYWxsKEcsZSksbyh0aGlzLEMpJiZvKHRoaXNbQ10sdCkmJih0aGlzW0NdW3RdPSExKSx6KHRoaXMsdCx3KDEsZSkpfTtyZXR1cm4gdSYmcSYmeihKLHQse2NvbmZpZ3VyYWJsZTohMCxzZXQ6bn0pLEIodCl9LGYoRltOXSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa30pLGouZj0kLEUuZj1ZLGUoMzUpLmY9Xy5mPVosZSgxNCkuZj1YLGUoMjEpLmY9dHQsdSYmIWUoMjApJiZmKEosXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLFgsITApLHkuZj1mdW5jdGlvbih0KXtyZXR1cm4gQih2KHQpKX0pLGkoaS5HK2kuVytpLkYqIVUse1N5bWJvbDpGfSk7Zm9yKHZhciBudD1cImhhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzXCIuc3BsaXQoXCIsXCIpLGV0PTA7bnQubGVuZ3RoPmV0Oyl2KG50W2V0KytdKTtmb3IodmFyIG50PVAodi5zdG9yZSksZXQ9MDtudC5sZW5ndGg+ZXQ7KWQobnRbZXQrK10pO2koaS5TK2kuRiohVSxcIlN5bWJvbFwiLHtcImZvclwiOmZ1bmN0aW9uKHQpe3JldHVybiBvKFcsdCs9XCJcIik/V1t0XTpXW3RdPUYodCl9LGtleUZvcjpmdW5jdGlvbih0KXtpZihWKHQpKXJldHVybiBoKFcsdCk7dGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgc3ltYm9sIVwiKX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7cT0hMH0sdXNlU2ltcGxlOmZ1bmN0aW9uKCl7cT0hMX19KSxpKGkuUytpLkYqIVUsXCJPYmplY3RcIix7Y3JlYXRlOlEsZGVmaW5lUHJvcGVydHk6WSxkZWZpbmVQcm9wZXJ0aWVzOkgsZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiQsZ2V0T3duUHJvcGVydHlOYW1lczpaLGdldE93blByb3BlcnR5U3ltYm9sczp0dH0pLEEmJmkoaS5TK2kuRiooIVV8fGEoZnVuY3Rpb24oKXt2YXIgdD1GKCk7cmV0dXJuXCJbbnVsbF1cIiE9SShbdF0pfHxcInt9XCIhPUkoe2E6dH0pfHxcInt9XCIhPUkoT2JqZWN0KHQpKX0pKSxcIkpTT05cIix7c3RyaW5naWZ5OmZ1bmN0aW9uKHQpe2lmKHZvaWQgMCE9PXQmJiFWKHQpKXtmb3IodmFyIG4sZSxyPVt0XSxvPTE7YXJndW1lbnRzLmxlbmd0aD5vOylyLnB1c2goYXJndW1lbnRzW28rK10pO3JldHVybiBuPXJbMV0sXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKGU9biksIWUmJmIobil8fChuPWZ1bmN0aW9uKHQsbil7aWYoZSYmKG49ZS5jYWxsKHRoaXMsdCxuKSksIVYobikpcmV0dXJuIG59KSxyWzFdPW4sSS5hcHBseShBLHIpfX19KSxGW05dW0xdfHxlKDYpKEZbTl0sTCxGW05dLnZhbHVlT2YpLGwoRixcIlN5bWJvbFwiKSxsKE1hdGgsXCJNYXRoXCIsITApLGwoci5KU09OLFwiSlNPTlwiLCEwKX0sZnVuY3Rpb24odCxuLGUpe2UoMjcpKFwiYXN5bmNJdGVyYXRvclwiKX0sZnVuY3Rpb24odCxuLGUpe2UoMjcpKFwib2JzZXJ2YWJsZVwiKX0sZnVuY3Rpb24odCxuLGUpe2UoNjkpO2Zvcih2YXIgcj1lKDEpLG89ZSg2KSx1PWUoMTkpLGk9ZSg3KShcInRvU3RyaW5nVGFnXCIpLGY9W1wiTm9kZUxpc3RcIixcIkRPTVRva2VuTGlzdFwiLFwiTWVkaWFMaXN0XCIsXCJTdHlsZVNoZWV0TGlzdFwiLFwiQ1NTUnVsZUxpc3RcIl0sYz0wO2M8NTtjKyspe3ZhciBhPWZbY10scz1yW2FdLGw9cyYmcy5wcm90b3R5cGU7bCYmIWxbaV0mJm8obCxpLGEpLHVbYV09dS5BcnJheX19XSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIpO1xuICAgIH0pO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBwbGFjZUhvbGRlcnNDb3VudCAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuICAvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG4gIC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcbiAgLy8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuICByZXR1cm4gYjY0W2xlbiAtIDJdID09PSAnPScgPyAyIDogYjY0W2xlbiAtIDFdID09PSAnPScgPyAxIDogMFxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG4gIHJldHVybiBiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnNDb3VudChiNjQpXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcbiAgcGxhY2VIb2xkZXJzID0gcGxhY2VIb2xkZXJzQ291bnQoYjY0KVxuXG4gIGFyciA9IG5ldyBBcnIobGVuICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICBsID0gcGxhY2VIb2xkZXJzID4gMCA/IGxlbiAtIDQgOiBsZW5cblxuICB2YXIgTCA9IDBcblxuICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8IHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBvdXRwdXQgPSAnJ1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMl1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXVxuICAgIG91dHB1dCArPSAnPT0nXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArICh1aW50OFtsZW4gLSAxXSlcbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAxMF1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9J1xuICB9XG5cbiAgcGFydHMucHVzaChvdXRwdXQpXG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59OyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgY3JlYXRlICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGFuSW5zdGFuY2UgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGRlZmluZWQgICAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgZm9yT2YgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBzZXRTcGVjaWVzICA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBmYXN0S2V5ICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5XG4gICwgU0laRSAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgJ2ZvckVhY2gnKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBmcm9tICAgID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBtZXRhICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGZhaWxzICAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGZvck9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBhbkluc3RhbmNlICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZFAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgZWFjaCAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMClcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGlmKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSwgJ19jJyk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSxmdW5jdGlvbihLRVkpe1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKWhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgS0VZKTtcbiAgICAgICAgaWYoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKXJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJ3NpemUnIGluIHByb3RvKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59OyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTsiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLCIiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iLCIvKiFcbiAqIEBkZXNjcmlwdGlvbiBSZWN1cnNpdmUgb2JqZWN0IGV4dGVuZGluZ1xuICogQGF1dGhvciBWaWFjaGVzbGF2IExvdHNtYW5vdiA8bG90c21hbm92ODlAZ21haWwuY29tPlxuICogQGxpY2Vuc2UgTUlUXG4gKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLTIwMTUgVmlhY2hlc2xhdiBMb3RzbWFub3ZcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4gKiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4gKiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4gKiB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuICogdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcbiAqIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBpc1NwZWNpZmljVmFsdWUodmFsKSB7XG5cdHJldHVybiAoXG5cdFx0dmFsIGluc3RhbmNlb2YgQnVmZmVyXG5cdFx0fHwgdmFsIGluc3RhbmNlb2YgRGF0ZVxuXHRcdHx8IHZhbCBpbnN0YW5jZW9mIFJlZ0V4cFxuXHQpID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjbG9uZVNwZWNpZmljVmFsdWUodmFsKSB7XG5cdGlmICh2YWwgaW5zdGFuY2VvZiBCdWZmZXIpIHtcblx0XHR2YXIgeCA9IG5ldyBCdWZmZXIodmFsLmxlbmd0aCk7XG5cdFx0dmFsLmNvcHkoeCk7XG5cdFx0cmV0dXJuIHg7XG5cdH0gZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSh2YWwuZ2V0VGltZSgpKTtcblx0fSBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcblx0XHRyZXR1cm4gbmV3IFJlZ0V4cCh2YWwpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBzaXR1YXRpb24nKTtcblx0fVxufVxuXG4vKipcbiAqIFJlY3Vyc2l2ZSBjbG9uaW5nIGFycmF5LlxuICovXG5mdW5jdGlvbiBkZWVwQ2xvbmVBcnJheShhcnIpIHtcblx0dmFyIGNsb25lID0gW107XG5cdGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAhPT0gbnVsbCkge1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcblx0XHRcdFx0Y2xvbmVbaW5kZXhdID0gZGVlcENsb25lQXJyYXkoaXRlbSk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzU3BlY2lmaWNWYWx1ZShpdGVtKSkge1xuXHRcdFx0XHRjbG9uZVtpbmRleF0gPSBjbG9uZVNwZWNpZmljVmFsdWUoaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbG9uZVtpbmRleF0gPSBkZWVwRXh0ZW5kKHt9LCBpdGVtKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xvbmVbaW5kZXhdID0gaXRlbTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gY2xvbmU7XG59XG5cbi8qKlxuICogRXh0ZW5pbmcgb2JqZWN0IHRoYXQgZW50ZXJlZCBpbiBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBSZXR1cm5zIGV4dGVuZGVkIG9iamVjdCBvciBmYWxzZSBpZiBoYXZlIG5vIHRhcmdldCBvYmplY3Qgb3IgaW5jb3JyZWN0IHR5cGUuXG4gKlxuICogSWYgeW91IHdpc2ggdG8gY2xvbmUgc291cmNlIG9iamVjdCAod2l0aG91dCBtb2RpZnkgaXQpLCBqdXN0IHVzZSBlbXB0eSBuZXdcbiAqIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudCwgbGlrZSB0aGlzOlxuICogICBkZWVwRXh0ZW5kKHt9LCB5b3VyT2JqXzEsIFt5b3VyT2JqX05dKTtcbiAqL1xudmFyIGRlZXBFeHRlbmQgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgvKm9ial8xLCBbb2JqXzJdLCBbb2JqX05dKi8pIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG5cdFx0cmV0dXJuIGFyZ3VtZW50c1swXTtcblx0fVxuXG5cdHZhciB0YXJnZXQgPSBhcmd1bWVudHNbMF07XG5cblx0Ly8gY29udmVydCBhcmd1bWVudHMgdG8gYXJyYXkgYW5kIGN1dCBvZmYgdGFyZ2V0IG9iamVjdFxuXHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cblx0dmFyIHZhbCwgc3JjLCBjbG9uZTtcblxuXHRhcmdzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuXHRcdC8vIHNraXAgYXJndW1lbnQgaWYgaXQgaXMgYXJyYXkgb3IgaXNuJ3Qgb2JqZWN0XG5cdFx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRzcmMgPSB0YXJnZXRba2V5XTsgLy8gc291cmNlIHZhbHVlXG5cdFx0XHR2YWwgPSBvYmpba2V5XTsgLy8gbmV3IHZhbHVlXG5cblx0XHRcdC8vIHJlY3Vyc2lvbiBwcmV2ZW50aW9uXG5cdFx0XHRpZiAodmFsID09PSB0YXJnZXQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIGlmIG5ldyB2YWx1ZSBpc24ndCBvYmplY3QgdGhlbiBqdXN0IG92ZXJ3cml0ZSBieSBuZXcgdmFsdWVcblx0XHRcdCAqIGluc3RlYWQgb2YgZXh0ZW5kaW5nLlxuXHRcdFx0ICovXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnIHx8IHZhbCA9PT0gbnVsbCkge1xuXHRcdFx0XHR0YXJnZXRba2V5XSA9IHZhbDtcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHQvLyBqdXN0IGNsb25lIGFycmF5cyAoYW5kIHJlY3Vyc2l2ZSBjbG9uZSBvYmplY3RzIGluc2lkZSlcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdHRhcmdldFtrZXldID0gZGVlcENsb25lQXJyYXkodmFsKTtcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHQvLyBjdXN0b20gY2xvbmluZyBhbmQgb3ZlcndyaXRlIGZvciBzcGVjaWZpYyBvYmplY3RzXG5cdFx0XHR9IGVsc2UgaWYgKGlzU3BlY2lmaWNWYWx1ZSh2YWwpKSB7XG5cdFx0XHRcdHRhcmdldFtrZXldID0gY2xvbmVTcGVjaWZpY1ZhbHVlKHZhbCk7XG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0Ly8gb3ZlcndyaXRlIGJ5IG5ldyB2YWx1ZSBpZiBzb3VyY2UgaXNuJ3Qgb2JqZWN0IG9yIGFycmF5XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzcmMgIT09ICdvYmplY3QnIHx8IHNyYyA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KHNyYykpIHtcblx0XHRcdFx0dGFyZ2V0W2tleV0gPSBkZWVwRXh0ZW5kKHt9LCB2YWwpO1xuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdC8vIHNvdXJjZSB2YWx1ZSBhbmQgbmV3IHZhbHVlIGlzIG9iamVjdHMgYm90aCwgZXh0ZW5kaW5nLi4uXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YXJnZXRba2V5XSA9IGRlZXBFeHRlbmQoc3JjLCB2YWwpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdHJldHVybiB0YXJnZXQ7XG59XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKChvdXRlckZuIHx8IEdlbmVyYXRvcikucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnRgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLiBTb21lIG1heSBjb25zaWRlciB0aGUgbmFtZSBvZiB0aGlzIG1ldGhvZCB0b29cbiAgLy8gY3V0ZXN5LCBidXQgdGhleSBhcmUgY3VybXVkZ2VvbnMuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gbmV3IEF3YWl0QXJndW1lbnQoYXJnKTtcbiAgfTtcblxuICBmdW5jdGlvbiBBd2FpdEFyZ3VtZW50KGFyZykge1xuICAgIHRoaXMuYXJnID0gYXJnO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5hcmcpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5kb21haW4pIHtcbiAgICAgIGludm9rZSA9IHByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIiB8fFxuICAgICAgICAgICAgICAobWV0aG9kID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSxcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yLFxuICAgICAgICAgICAgYXJnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlbGVnYXRlIGdlbmVyYXRvciByYW4gYW5kIGhhbmRsZWQgaXRzIG93biBleGNlcHRpb25zIHNvXG4gICAgICAgICAgLy8gcmVnYXJkbGVzcyBvZiB3aGF0IHRoZSBtZXRob2Qgd2FzLCB3ZSBjb250aW51ZSBhcyBpZiBpdCBpc1xuICAgICAgICAgIC8vIFwibmV4dFwiIHdpdGggYW4gdW5kZWZpbmVkIGFyZy5cbiAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlICYmIG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuIiwiLyoqXG4gKiBGb3JtIEJ1aWxkZXIgZXZlbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHZhcmlvdXMgZXZlbnRzIHRvIGJlIHRyaWdnZXJcbiAqL1xuLy8gZnVuY3Rpb24gZmJFdmVudHMoKXtcbiAgY29uc3QgZXZlbnRzID0ge307XG5cbiAgZXZlbnRzLmxvYWRlZCA9IG5ldyBFdmVudCgnbG9hZGVkJyk7XG4gIGV2ZW50cy52aWV3RGF0YSA9IG5ldyBFdmVudCgndmlld0RhdGEnKTtcbiAgZXZlbnRzLnVzZXJEZWNsaW5lZCA9IG5ldyBFdmVudCgndXNlckRlY2xpbmVkJyk7XG4gIGV2ZW50cy5tb2RhbENsb3NlZCA9IG5ldyBFdmVudCgnbW9kYWxDbG9zZWQnKTtcbiAgZXZlbnRzLm1vZGFsT3BlbmVkID0gbmV3IEV2ZW50KCdtb2RhbE9wZW5lZCcpO1xuICBldmVudHMuZm9ybVNhdmVkID0gbmV3IEV2ZW50KCdmb3JtU2F2ZWQnKTtcbiAgZXZlbnRzLmZpZWxkQWRkZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkQWRkZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVtb3ZlZCA9IG5ldyBFdmVudCgnZmllbGRSZW1vdmVkJyk7XG4gIGV2ZW50cy5maWVsZFJlbmRlcmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbmRlcmVkJyk7XG5cbi8vICAgcmV0dXJuIGV2ZW50cztcbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudHM7XG4iLCJyZXF1aXJlKCcuL2tjLXRvZ2dsZS5qcycpO1xucmVxdWlyZSgnLi9wb2x5ZmlsbHMuanMnKTtcbmNvbnN0IGV4dGVuZCA9IHJlcXVpcmUoJ2RlZXAtZXh0ZW5kJyk7XG5cbihmdW5jdGlvbigkKSB7XG4gIGNvbnN0IEZvcm1CdWlsZGVyID0gYXN5bmMgZnVuY3Rpb24ob3B0aW9ucywgZWxlbWVudCkge1xuICAgIGNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpO1xuICAgIGNvbnN0IG1pMThuID0gcmVxdWlyZSgnbWkxOG4nKS5kZWZhdWx0O1xuICAgIGNvbnN0IGZvcm1CdWlsZGVyID0gdGhpcztcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIGNvbnRyb2xQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGNvbnRyb2xPcmRlcjogW1xuICAgICAgICAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgJ2ZpbGUnLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2hpZGRlbicsXG4gICAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ3RleHRhcmVhJ1xuICAgICAgXSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAvLyBBcnJheSBvZiBmaWVsZHMgdG8gZGlzYWJsZVxuICAgICAgZGlzYWJsZUZpZWxkczogW10sXG4gICAgICBlZGl0T25BZGQ6IGZhbHNlLFxuICAgICAgLy8gVW5lZGl0YWJsZSBmaWVsZHMgb3Igb3RoZXIgY29udGVudCB5b3Ugd291bGQgbGlrZSB0byBhcHBlYXJcbiAgICAgIC8vIGJlZm9yZSBhbmQgYWZ0ZXIgcmVndWxhciBmaWVsZHM6XG4gICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgcHJlcGVuZDogZmFsc2UsXG4gICAgICAvLyBhcnJheSBvZiBvYmplY3RzIHdpdGggZmllbGRzIHZhbHVlc1xuICAgICAgLy8gZXg6XG4gICAgICAvLyBkZWZhdWx0RmllbGRzOiBbe1xuICAgICAgLy8gICBsYWJlbDogJ0ZpcnN0IE5hbWUnLFxuICAgICAgLy8gICBuYW1lOiAnZmlyc3QtbmFtZScsXG4gICAgICAvLyAgIHJlcXVpcmVkOiAndHJ1ZScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnWW91ciBmaXJzdCBuYW1lJyxcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXG4gICAgICAvLyB9LCB7XG4gICAgICAvLyAgIGxhYmVsOiAnUGhvbmUnLFxuICAgICAgLy8gICBuYW1lOiAncGhvbmUnLFxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ0hvdyBjYW4gd2UgcmVhY2ggeW91PycsXG4gICAgICAvLyAgIHR5cGU6ICd0ZXh0J1xuICAgICAgLy8gfV0sXG4gICAgICBkZWZhdWx0RmllbGRzOiBbXSxcbiAgICAgIGlucHV0U2V0czogW10sXG4gICAgICBmaWVsZFJlbW92ZVdhcm46IGZhbHNlLFxuICAgICAgcm9sZXM6IHtcbiAgICAgICAgMTogJ0FkbWluaXN0cmF0b3InXG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgYWRkT3B0aW9uOiAnQWRkIE9wdGlvbiArJyxcbiAgICAgICAgYWxsRmllbGRzUmVtb3ZlZDogJ0FsbCBmaWVsZHMgd2VyZSByZW1vdmVkLicsXG4gICAgICAgIGFsbG93TXVsdGlwbGVGaWxlczogJ0FsbG93IHVzZXJzIHRvIHVwbG9hZCBtdWx0aXBsZSBmaWxlcycsXG4gICAgICAgIGF1dG9jb21wbGV0ZTogJ0F1dG9jb21wbGV0ZScsXG4gICAgICAgIGJ1dHRvbjogJ0J1dHRvbicsXG4gICAgICAgIGNhbm5vdEJlRW1wdHk6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgIGNoZWNrYm94R3JvdXA6ICdDaGVja2JveCBHcm91cCcsXG4gICAgICAgIGNoZWNrYm94OiAnQ2hlY2tib3gnLFxuICAgICAgICBjaGVja2JveGVzOiAnQ2hlY2tib3hlcycsXG4gICAgICAgIGNsYXNzTmFtZTogJ0NsYXNzJyxcbiAgICAgICAgY2xlYXJBbGxNZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNsZWFyIGFsbCBmaWVsZHM/JyxcbiAgICAgICAgY2xlYXJBbGw6ICdDbGVhcicsXG4gICAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgICBjb250ZW50OiAnQ29udGVudCcsXG4gICAgICAgIGNvcHk6ICdDb3B5IFRvIENsaXBib2FyZCcsXG4gICAgICAgIGNvcHlCdXR0b246ICcmIzQzOycsXG4gICAgICAgIGNvcHlCdXR0b25Ub29sdGlwOiAnQ29weScsXG4gICAgICAgIGRhdGVGaWVsZDogJ0RhdGUgRmllbGQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbHAgVGV4dCcsXG4gICAgICAgIGRlc2NyaXB0aW9uRmllbGQ6ICdEZXNjcmlwdGlvbicsXG4gICAgICAgIGRldk1vZGU6ICdEZXZlbG9wZXIgTW9kZScsXG4gICAgICAgIGVkaXROYW1lczogJ0VkaXQgTmFtZXMnLFxuICAgICAgICBlZGl0b3JUaXRsZTogJ0Zvcm0gRWxlbWVudHMnLFxuICAgICAgICBlZGl0WE1MOiAnRWRpdCBYTUwnLFxuICAgICAgICBlbmFibGVPdGhlcjogJ0VuYWJsZSAmcXVvdDtPdGhlciZxdW90OycsXG4gICAgICAgIGVuYWJsZU90aGVyTXNnOiAnTGV0IHVzZXJzIHRvIGVudGVyIGFuIHVubGlzdGVkIG9wdGlvbicsXG4gICAgICAgIGZpZWxkRGVsZXRlV2FybmluZzogZmFsc2UsXG4gICAgICAgIGZpZWxkVmFyczogJ0ZpZWxkIFZhcmlhYmxlcycsXG4gICAgICAgIGZpZWxkTm9uRWRpdGFibGU6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlZGl0ZWQuJyxcbiAgICAgICAgZmllbGRSZW1vdmVXYXJuaW5nOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIGZpZWxkPycsXG4gICAgICAgIGZpbGVVcGxvYWQ6ICdGaWxlIFVwbG9hZCcsXG4gICAgICAgIGZvcm1VcGRhdGVkOiAnRm9ybSBVcGRhdGVkJyxcbiAgICAgICAgZ2V0U3RhcnRlZDogJ0RyYWcgYSBmaWVsZCBmcm9tIHRoZSByaWdodCB0byB0aGlzIGFyZWEnLFxuICAgICAgICBoZWFkZXI6ICdIZWFkZXInLFxuICAgICAgICBoaWRlOiAnRWRpdCcsXG4gICAgICAgIGhpZGRlbjogJ0hpZGRlbiBJbnB1dCcsXG4gICAgICAgIGxhYmVsOiAnTGFiZWwnLFxuICAgICAgICBsYWJlbEVtcHR5OiAnRmllbGQgTGFiZWwgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgbGltaXRSb2xlOiAnTGltaXQgYWNjZXNzIHRvIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgcm9sZXM6JyxcbiAgICAgICAgbWFuZGF0b3J5OiAnTWFuZGF0b3J5JyxcbiAgICAgICAgbWF4bGVuZ3RoOiAnTWF4IExlbmd0aCcsXG4gICAgICAgIG1pbk9wdGlvbk1lc3NhZ2U6ICdUaGlzIGZpZWxkIHJlcXVpcmVzIGEgbWluaW11bSBvZiAyIG9wdGlvbnMnLFxuICAgICAgICBtdWx0aXBsZUZpbGVzOiAnTXVsdGlwbGUgRmlsZXMnLFxuICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgIG5vOiAnTm8nLFxuICAgICAgICBub0ZpZWxkc1RvQ2xlYXI6ICdUaGVyZSBhcmUgbm8gZmllbGRzIHRvIGNsZWFyJyxcbiAgICAgICAgbnVtYmVyOiAnTnVtYmVyJyxcbiAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgb246ICdPbicsXG4gICAgICAgIG9wdGlvbjogJ09wdGlvbicsXG4gICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxuICAgICAgICBvcHRpb25MYWJlbFBsYWNlaG9sZGVyOiAnTGFiZWwnLFxuICAgICAgICBvcHRpb25WYWx1ZVBsYWNlaG9sZGVyOiAnVmFsdWUnLFxuICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXG4gICAgICAgIG90aGVyOiAnT3RoZXInLFxuICAgICAgICBwYXJhZ3JhcGg6ICdQYXJhZ3JhcGgnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgICAgICAgcGxhY2Vob2xkZXJzOiB7XG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgdGV4dGFyZWE6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnRW50ZXIgeW91IGVtYWlsJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3BhY2Ugc2VwYXJhdGVkIGNsYXNzZXMnLFxuICAgICAgICAgIHBhc3N3b3JkOiAnRW50ZXIgeW91ciBwYXNzd29yZCdcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlldzogJ1ByZXZpZXcnLFxuICAgICAgICByYWRpb0dyb3VwOiAnUmFkaW8gR3JvdXAnLFxuICAgICAgICByYWRpbzogJ1JhZGlvJyxcbiAgICAgICAgcmVtb3ZlTWVzc2FnZTogJ1JlbW92ZSBFbGVtZW50JyxcbiAgICAgICAgcmVtb3ZlT3B0aW9uOiAnUmVtb3ZlIE9wdGlvbicsXG4gICAgICAgIHJlbW92ZTogJyYjMjE1OycsXG4gICAgICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQnLFxuICAgICAgICByaWNoVGV4dDogJ1JpY2ggVGV4dCBFZGl0b3InLFxuICAgICAgICByb2xlczogJ0FjY2VzcycsXG4gICAgICAgIHJvd3M6ICdSb3dzJyxcbiAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICBzZWxlY3RPcHRpb25zOiAnT3B0aW9ucycsXG4gICAgICAgIHNlbGVjdDogJ1NlbGVjdCcsXG4gICAgICAgIHNlbGVjdENvbG9yOiAnU2VsZWN0IENvbG9yJyxcbiAgICAgICAgc2VsZWN0aW9uc01lc3NhZ2U6ICdBbGxvdyBNdWx0aXBsZSBTZWxlY3Rpb25zJyxcbiAgICAgICAgc2l6ZTogJ1NpemUnLFxuICAgICAgICBzaXplczoge1xuICAgICAgICAgIHhzOiAnRXh0cmEgU21hbGwnLFxuICAgICAgICAgIHNtOiAnU21hbGwnLFxuICAgICAgICAgIG06ICdEZWZhdWx0JyxcbiAgICAgICAgICBsZzogJ0xhcmdlJ1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogJ1N0eWxlJyxcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgYnRuOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdEZWZhdWx0JyxcbiAgICAgICAgICAgIGRhbmdlcjogJ0RhbmdlcicsXG4gICAgICAgICAgICBpbmZvOiAnSW5mbycsXG4gICAgICAgICAgICBwcmltYXJ5OiAnUHJpbWFyeScsXG4gICAgICAgICAgICBzdWNjZXNzOiAnU3VjY2VzcycsXG4gICAgICAgICAgICB3YXJuaW5nOiAnV2FybmluZydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1YnR5cGU6ICdUeXBlJyxcbiAgICAgICAgdGV4dDogJ1RleHQgRmllbGQnLFxuICAgICAgICB0ZXh0QXJlYTogJ1RleHQgQXJlYScsXG4gICAgICAgIHRvZ2dsZTogJ1RvZ2dsZScsXG4gICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nIScsXG4gICAgICAgIHZhbHVlOiAnVmFsdWUnLFxuICAgICAgICB2aWV3SlNPTjogJ3sgIH0nLFxuICAgICAgICB2aWV3WE1MOiAnJmx0Oy8mZ3Q7JyxcbiAgICAgICAgeWVzOiAnWWVzJ1xuICAgICAgfSxcbiAgICAgIG5vdGlmeToge1xuICAgICAgICBlcnJvcjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICB3YXJuaW5nOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uU2F2ZTogdXRpbHMubm9vcCxcbiAgICAgIG9uQ2xlYXJBbGw6IHV0aWxzLm5vb3AsXG4gICAgICBhY3Rpb25CdXR0b25zOiBbe1xuICAgICAgICBsYWJlbDogJ0NsZWFyJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xlYXItYWxsIGJ0biBidG4tZGFuZ2VyJyxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZmllbGRzID0gJCgnbGkuZm9ybS1maWVsZCcsIGZvcm1CdWlsZGVyLnN0YWdlKTtcbiAgICAgICAgICAgIGxldCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSB7XG4gICAgICAgICAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICAgICAgICAgIHBhZ2VZOiAoYnV0dG9uUG9zaXRpb24udG9wIC0gYm9keVJlY3QudG9wKSAtIDEyXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBfaGVscGVycy5jb25maXJtKG9wdHMubWVzc2FnZXMuY2xlYXJBbGxNZXNzYWdlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMoKTtcbiAgICAgICAgICAgICAgICBvcHRzLm5vdGlmeS5zdWNjZXNzKG9wdHMubWVzc2FnZXMuYWxsRmllbGRzUmVtb3ZlZCk7XG4gICAgICAgICAgICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgICAgICAgICAgIG9wdHMub25DbGVhckFsbCgpO1xuICAgICAgICAgICAgICB9LCBjb29yZHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX2hlbHBlcnMuZGlhbG9nKG9wdHMubWVzc2FnZXMubm9GaWVsZHNUb0NsZWFyLCBjb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogJ1NhdmUnLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1wcmltYXJ5IHNhdmUtdGVtcGxhdGUnLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKCkgPT4gb3B0cy5vblNhdmUoX2hlbHBlcnMuc2F2ZSgpKVxuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIHNvcnRhYmxlQ29udHJvbHM6IGZhbHNlLFxuICAgICAgc3RpY2t5Q29udHJvbHM6IGZhbHNlLFxuICAgICAgc2hvd0FjdGlvbkJ1dHRvbnM6IHRydWUsXG4gICAgICB0eXBlVXNlckF0dHJzOiB7fSxcbiAgICAgIHR5cGVVc2VyRXZlbnRzOiB7fSxcbiAgICAgIHByZWZpeDogJ2Zvcm0tYnVpbGRlci0nXG4gICAgfTtcblxuXG4gICAgZGVmYXVsdHMuaTE4biA9IHtcbiAgICAgIGxhbmdzOiBbXG4gICAgICAgICdlbi1VUydcbiAgICAgIF0sXG4gICAgICBwcmVsb2FkZWQ6IHtcbiAgICAgICAgJ2VuLVVTJzoge1xuICAgICAgICAgIGFkZE9wdGlvbjogJ0FkZCBPcHRpb24gKycsXG4gICAgICAgICAgYWxsRmllbGRzUmVtb3ZlZDogJ0FsbCBmaWVsZHMgd2VyZSByZW1vdmVkLicsXG4gICAgICAgICAgYWxsb3dNdWx0aXBsZUZpbGVzOiAnQWxsb3cgdXNlcnMgdG8gdXBsb2FkIG11bHRpcGxlIGZpbGVzJyxcbiAgICAgICAgICBhdXRvY29tcGxldGU6ICdBdXRvY29tcGxldGUnLFxuICAgICAgICAgIGJ1dHRvbjogJ0J1dHRvbicsXG4gICAgICAgICAgY2Fubm90QmVFbXB0eTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgICBjaGVja2JveEdyb3VwOiAnQ2hlY2tib3ggR3JvdXAnLFxuICAgICAgICAgIGNoZWNrYm94OiAnQ2hlY2tib3gnLFxuICAgICAgICAgIGNoZWNrYm94ZXM6ICdDaGVja2JveGVzJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDbGFzcycsXG4gICAgICAgICAgY2xlYXJBbGxNZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNsZWFyIGFsbCBmaWVsZHM/JyxcbiAgICAgICAgICBjbGVhckFsbDogJ0NsZWFyJyxcbiAgICAgICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgICAgICBjb250ZW50OiAnQ29udGVudCcsXG4gICAgICAgICAgY29weTogJ0NvcHkgVG8gQ2xpcGJvYXJkJyxcbiAgICAgICAgICBjb3B5QnV0dG9uOiAnJiM0MzsnLFxuICAgICAgICAgIGNvcHlCdXR0b25Ub29sdGlwOiAnQ29weScsXG4gICAgICAgICAgZGF0ZUZpZWxkOiAnRGF0ZSBGaWVsZCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdIZWxwIFRleHQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uRmllbGQ6ICdEZXNjcmlwdGlvbicsXG4gICAgICAgICAgZGV2TW9kZTogJ0RldmVsb3BlciBNb2RlJyxcbiAgICAgICAgICBlZGl0TmFtZXM6ICdFZGl0IE5hbWVzJyxcbiAgICAgICAgICBlZGl0b3JUaXRsZTogJ0Zvcm0gRWxlbWVudHMnLFxuICAgICAgICAgIGVkaXRYTUw6ICdFZGl0IFhNTCcsXG4gICAgICAgICAgZW5hYmxlT3RoZXI6ICdFbmFibGUgJnF1b3Q7T3RoZXImcXVvdDsnLFxuICAgICAgICAgIGVuYWJsZU90aGVyTXNnOiAnTGV0IHVzZXJzIHRvIGVudGVyIGFuIHVubGlzdGVkIG9wdGlvbicsXG4gICAgICAgICAgZmllbGREZWxldGVXYXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICBmaWVsZFZhcnM6ICdGaWVsZCBWYXJpYWJsZXMnLFxuICAgICAgICAgIGZpZWxkTm9uRWRpdGFibGU6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlZGl0ZWQuJyxcbiAgICAgICAgICBmaWVsZFJlbW92ZVdhcm5pbmc6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgZmllbGQ/JyxcbiAgICAgICAgICBmaWxlVXBsb2FkOiAnRmlsZSBVcGxvYWQnLFxuICAgICAgICAgIGZvcm1VcGRhdGVkOiAnRm9ybSBVcGRhdGVkJyxcbiAgICAgICAgICBnZXRTdGFydGVkOiAnRHJhZyBhIGZpZWxkIGZyb20gdGhlIHJpZ2h0IHRvIHRoaXMgYXJlYScsXG4gICAgICAgICAgaGVhZGVyOiAnSGVhZGVyJyxcbiAgICAgICAgICBoaWRlOiAnRWRpdCcsXG4gICAgICAgICAgaGlkZGVuOiAnSGlkZGVuIElucHV0JyxcbiAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgICBsYWJlbEVtcHR5OiAnRmllbGQgTGFiZWwgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgICBsaW1pdFJvbGU6ICdMaW1pdCBhY2Nlc3MgdG8gb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyByb2xlczonLFxuICAgICAgICAgIG1hbmRhdG9yeTogJ01hbmRhdG9yeScsXG4gICAgICAgICAgbWF4bGVuZ3RoOiAnTWF4IExlbmd0aCcsXG4gICAgICAgICAgbWluT3B0aW9uTWVzc2FnZTogJ1RoaXMgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mIDIgb3B0aW9ucycsXG4gICAgICAgICAgbXVsdGlwbGVGaWxlczogJ011bHRpcGxlIEZpbGVzJyxcbiAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgbm86ICdObycsXG4gICAgICAgICAgbm9GaWVsZHNUb0NsZWFyOiAnVGhlcmUgYXJlIG5vIGZpZWxkcyB0byBjbGVhcicsXG4gICAgICAgICAgbnVtYmVyOiAnTnVtYmVyJyxcbiAgICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICAgIG9uOiAnT24nLFxuICAgICAgICAgIG9wdGlvbjogJ09wdGlvbicsXG4gICAgICAgICAgb3B0aW9uYWw6ICdvcHRpb25hbCcsXG4gICAgICAgICAgb3B0aW9uTGFiZWxQbGFjZWhvbGRlcjogJ0xhYmVsJyxcbiAgICAgICAgICBvcHRpb25WYWx1ZVBsYWNlaG9sZGVyOiAnVmFsdWUnLFxuICAgICAgICAgIG9wdGlvbkVtcHR5OiAnT3B0aW9uIHZhbHVlIHJlcXVpcmVkJyxcbiAgICAgICAgICBvdGhlcjogJ090aGVyJyxcbiAgICAgICAgICBwYXJhZ3JhcGg6ICdQYXJhZ3JhcGgnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGxhY2Vob2xkZXInLFxuICAgICAgICAgIHBsYWNlaG9sZGVyczoge1xuICAgICAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgdGV4dGFyZWE6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICdFbnRlciB5b3UgZW1haWwnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3BhY2Ugc2VwYXJhdGVkIGNsYXNzZXMnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdFbnRlciB5b3VyIHBhc3N3b3JkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJldmlldzogJ1ByZXZpZXcnLFxuICAgICAgICAgIHJhZGlvR3JvdXA6ICdSYWRpbyBHcm91cCcsXG4gICAgICAgICAgcmFkaW86ICdSYWRpbycsXG4gICAgICAgICAgcmVtb3ZlTWVzc2FnZTogJ1JlbW92ZSBFbGVtZW50JyxcbiAgICAgICAgICByZW1vdmVPcHRpb246ICdSZW1vdmUgT3B0aW9uJyxcbiAgICAgICAgICByZW1vdmU6ICcmIzIxNTsnLFxuICAgICAgICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQnLFxuICAgICAgICAgIHJpY2hUZXh0OiAnUmljaCBUZXh0IEVkaXRvcicsXG4gICAgICAgICAgcm9sZXM6ICdBY2Nlc3MnLFxuICAgICAgICAgIHJvd3M6ICdSb3dzJyxcbiAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgc2VsZWN0T3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgICAgIHNlbGVjdDogJ1NlbGVjdCcsXG4gICAgICAgICAgc2VsZWN0Q29sb3I6ICdTZWxlY3QgQ29sb3InLFxuICAgICAgICAgIHNlbGVjdGlvbnNNZXNzYWdlOiAnQWxsb3cgTXVsdGlwbGUgU2VsZWN0aW9ucycsXG4gICAgICAgICAgc2l6ZTogJ1NpemUnLFxuICAgICAgICAgIHNpemVzOiB7XG4gICAgICAgICAgICB4czogJ0V4dHJhIFNtYWxsJyxcbiAgICAgICAgICAgIHNtOiAnU21hbGwnLFxuICAgICAgICAgICAgbTogJ0RlZmF1bHQnLFxuICAgICAgICAgICAgbGc6ICdMYXJnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlOiAnU3R5bGUnLFxuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgYnRuOiB7XG4gICAgICAgICAgICAgICdkZWZhdWx0JzogJ0RlZmF1bHQnLFxuICAgICAgICAgICAgICBkYW5nZXI6ICdEYW5nZXInLFxuICAgICAgICAgICAgICBpbmZvOiAnSW5mbycsXG4gICAgICAgICAgICAgIHByaW1hcnk6ICdQcmltYXJ5JyxcbiAgICAgICAgICAgICAgc3VjY2VzczogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgICB3YXJuaW5nOiAnV2FybmluZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1YnR5cGU6ICdUeXBlJyxcbiAgICAgICAgICB0ZXh0OiAnVGV4dCBGaWVsZCcsXG4gICAgICAgICAgdGV4dEFyZWE6ICdUZXh0IEFyZWEnLFxuICAgICAgICAgIHRvZ2dsZTogJ1RvZ2dsZScsXG4gICAgICAgICAgd2FybmluZzogJ1dhcm5pbmchJyxcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICAgICAgICB2aWV3SlNPTjogJ3sgIH0nLFxuICAgICAgICAgIHZpZXdYTUw6ICcmbHQ7LyZndDsnLFxuICAgICAgICAgIHllczogJ1llcydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgZnJtYklEID0gJ2ZybWItJyArICQoJ3VsW2lkXj1mcm1iLV0nKS5sZW5ndGgrKztcbiAgICBmb3JtQnVpbGRlci5mb3JtSUQgPSBmcm1iSUQ7XG4gICAgbGV0IHtpMThuLCAuLi5vcHRzfSA9IGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBhd2FpdCBtaTE4bi5pbml0KGkxOG4pO1xuICAgIGxldCBfaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycy5qcycpKG9wdHMsIGZvcm1CdWlsZGVyKTtcblxuICAgIGNvbnN0IHN1YnR5cGVzID0gX2hlbHBlcnMucHJvY2Vzc1N1YnR5cGVzKG9wdHMuc3VidHlwZXMpO1xuXG4gICAgbGV0ICRzb3J0YWJsZUZpZWxkcyA9ICQoJzx1bC8+JykuYXR0cignaWQnLCBmcm1iSUQpLmFkZENsYXNzKCdmcm1iJyk7XG5cbiAgICBmb3JtQnVpbGRlci5sYXlvdXQgPSBfaGVscGVycy5lZGl0b3JMYXlvdXQob3B0cy5jb250cm9sUG9zaXRpb24pO1xuICAgIGZvcm1CdWlsZGVyLnN0YWdlID0gJHNvcnRhYmxlRmllbGRzWzBdO1xuXG4gICAgbGV0IGxhc3RJRCA9IGZybWJJRCArICctZmxkLTEnO1xuICAgIGxldCBib3hJRCA9IGZybWJJRCArICctY29udHJvbC1ib3gnO1xuXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIGZpZWxkIG9iamVjdHMgdG8gY3ljbGUgdGhyb3VnaFxuICAgIGxldCBmcm1iRmllbGRzID0gW3tcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmF1dG9jb21wbGV0ZSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdhdXRvY29tcGxldGUnLFxuICAgICAgICBjbGFzc05hbWU6ICdhdXRvY29tcGxldGUnLFxuICAgICAgICBuYW1lOiAnYXV0b2NvbXBsZXRlJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmJ1dHRvbixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdidXR0b24taW5wdXQnLFxuICAgICAgICBuYW1lOiAnYnV0dG9uJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmNoZWNrYm94LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICBuYW1lOiAnY2hlY2tib3gnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuY2hlY2tib3hHcm91cCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94LWdyb3VwJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmRhdGVGaWVsZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2FsZW5kYXInLFxuICAgICAgICBuYW1lOiAnZGF0ZS1pbnB1dCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5maWxlVXBsb2FkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICBjbGFzc05hbWU6ICdmaWxlLWlucHV0JyxcbiAgICAgICAgbmFtZTogJ2ZpbGUtaW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuaGVhZGVyLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2hlYWRlcicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2hlYWRlcidcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5oaWRkZW4sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnaGlkZGVuLWlucHV0JyxcbiAgICAgICAgbmFtZTogJ2hpZGRlbi1pbnB1dCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5udW1iZXIsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgbmFtZTogJ251bWJlcidcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5wYXJhZ3JhcGgsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYWdyYXBoJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLnJhZGlvR3JvdXAsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAncmFkaW8tZ3JvdXAnLFxuICAgICAgICBjbGFzc05hbWU6ICdyYWRpby1ncm91cCcsXG4gICAgICAgIG5hbWU6ICdyYWRpby1ncm91cCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5zZWxlY3QsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgbmFtZTogJ3NlbGVjdCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy50ZXh0LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjbGFzc05hbWU6ICd0ZXh0LWlucHV0JyxcbiAgICAgICAgbmFtZTogJ3RleHQtaW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMudGV4dEFyZWEsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAndGV4dGFyZWEnLFxuICAgICAgICBjbGFzc05hbWU6ICd0ZXh0LWFyZWEnLFxuICAgICAgICBuYW1lOiAndGV4dGFyZWEnXG4gICAgICB9XG4gICAgfV07XG5cbiAgICBmcm1iRmllbGRzID0gX2hlbHBlcnMub3JkZXJGaWVsZHMoZnJtYkZpZWxkcyk7XG5cbiAgICBpZiAob3B0cy5kaXNhYmxlRmllbGRzKSB7XG4gICAgICAvLyByZW1vdmUgZGlzYWJsZWRGaWVsZHNcbiAgICAgIGZybWJGaWVsZHMgPSBmcm1iRmllbGRzLmZpbHRlcihmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkoZmllbGQuYXR0cnMudHlwZSwgb3B0cy5kaXNhYmxlRmllbGRzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBkcmFnZ2FibGUgZmllbGRzIGZvciBmb3JtQnVpbGRlclxuICAgIGxldCBjYlVsID0gdXRpbHMubWFya3VwKCd1bCcsIG51bGwsIHtpZDogYm94SUQsIGNsYXNzTmFtZTogJ2ZybWItY29udHJvbCd9KTtcbiAgICBmb3JtQnVpbGRlci5jb250cm9scyA9IGNiVWw7XG5cbiAgICBpZiAob3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICBjYlVsLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZW5hYmxlZCcpO1xuICAgIH1cblxuICAgIGxldCAkY2JVTCA9ICQoY2JVbCk7XG5cbiAgICAvLyBMb29wIHRocm91Z2hcbiAgICB1dGlscy5mb3JFYWNoKGZybWJGaWVsZHMsIChpKSA9PiB7XG4gICAgICBsZXQgJGZpZWxkID0gJCgnPGxpLz4nLCB7XG4gICAgICAgICdjbGFzcyc6ICdpY29uLScgKyBmcm1iRmllbGRzW2ldLmF0dHJzLmNsYXNzTmFtZSxcbiAgICAgICAgJ3R5cGUnOiBmcm1iRmllbGRzW2ldLnR5cGUsXG4gICAgICAgICduYW1lJzogZnJtYkZpZWxkc1tpXS5jbGFzc05hbWUsXG4gICAgICAgICdsYWJlbCc6IGZybWJGaWVsZHNbaV0ubGFiZWxcbiAgICAgIH0pO1xuXG4gICAgICAkZmllbGQuZGF0YSgnbmV3RmllbGREYXRhJywgZnJtYkZpZWxkc1tpXSk7XG5cbiAgICAgIGxldCB0eXBlTGFiZWwgPSB1dGlscy5tYXJrdXAoJ3NwYW4nLCBmcm1iRmllbGRzW2ldLmxhYmVsKTtcbiAgICAgICRmaWVsZC5odG1sKHR5cGVMYWJlbCkuYXBwZW5kVG8oJGNiVUwpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9wdHMuaW5wdXRTZXRzLmxlbmd0aCkge1xuICAgICAgJCgnPGxpLz4nLCB7J2NsYXNzJzogJ2ZiLXNlcGFyYXRvcid9KS5odG1sKCc8aHI+JykuYXBwZW5kVG8oJGNiVUwpO1xuICAgICAgb3B0cy5pbnB1dFNldHMuZm9yRWFjaCgoc2V0KSA9PiB7XG4gICAgICAgIHNldC5uYW1lID0gc2V0Lm5hbWUgfHwgX2hlbHBlcnMubWFrZUNsYXNzTmFtZShzZXQubGFiZWwpO1xuICAgICAgICBsZXQgJHNldCA9ICQoJzxsaS8+JywgeydjbGFzcyc6ICdpbnB1dC1zZXQtY29udHJvbCcsIHR5cGU6IHNldC5uYW1lfSk7XG4gICAgICAgICRzZXQuaHRtbChzZXQubGFiZWwpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNvcnRhYmxlIGZpZWxkc1xuICAgICRzb3J0YWJsZUZpZWxkcy5zb3J0YWJsZSh7XG4gICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgIHJldmVydDogMTUwLFxuICAgICAgYmVmb3JlU3RvcDogX2hlbHBlcnMuYmVmb3JlU3RvcCxcbiAgICAgIHN0YXJ0OiBfaGVscGVycy5zdGFydE1vdmluZyxcbiAgICAgIHN0b3A6IF9oZWxwZXJzLnN0b3BNb3ZpbmcsXG4gICAgICBjYW5jZWw6ICdpbnB1dCwgc2VsZWN0LCAuZGlzYWJsZWQsIC5mb3JtLWdyb3VwLCAuYnRuJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnZnJtYi1wbGFjZWhvbGRlcidcbiAgICB9KTtcblxuICAgIC8vIENvbnRyb2xCb3ggd2l0aCBkaWZmZXJlbnQgZmllbGRzXG4gICAgJGNiVUwuc29ydGFibGUoe1xuICAgICAgaGVscGVyOiAnY2xvbmUnLFxuICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgY29ubmVjdFdpdGg6ICRzb3J0YWJsZUZpZWxkcyxcbiAgICAgIGNhbmNlbDogJy5mYi1zZXBhcmF0b3InLFxuICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgcGxhY2Vob2xkZXI6ICd1aS1zdGF0ZS1oaWdobGlnaHQnLFxuICAgICAgc3RhcnQ6IF9oZWxwZXJzLnN0YXJ0TW92aW5nLFxuICAgICAgc3RvcDogX2hlbHBlcnMuc3RvcE1vdmluZyxcbiAgICAgIHJldmVydDogMTUwLFxuICAgICAgYmVmb3JlU3RvcDogX2hlbHBlcnMuYmVmb3JlU3RvcCxcbiAgICAgIGRpc3RhbmNlOiAzLFxuICAgICAgdXBkYXRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgaWYgKF9oZWxwZXJzLmRvQ2FuY2VsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS5pdGVtLnBhcmVudCgpWzBdID09PSAkc29ydGFibGVGaWVsZHNbMF0pIHtcbiAgICAgICAgICBwcm9jZXNzQ29udHJvbCh1aS5pdGVtKTtcbiAgICAgICAgICBfaGVscGVycy5kb0NhbmNlbCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2hlbHBlcnMuc2V0RmllbGRPcmRlcigkY2JVTCk7XG4gICAgICAgICAgX2hlbHBlcnMuZG9DYW5jZWwgPSAhb3B0cy5zb3J0YWJsZUNvbnRyb2xzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvY2Vzc0NvbnRyb2wgPSAoY29udHJvbCkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2xbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1zZXQtY29udHJvbCcpKSB7XG4gICAgICAgIGxldCBpbnB1dFNldCA9IG9wdHMuaW5wdXRTZXRzLmZpbHRlcigoc2V0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNldC5uYW1lID09PSBjb250cm9sWzBdLnR5cGU7XG4gICAgICAgIH0pWzBdO1xuICAgICAgICBpZiAoaW5wdXRTZXQuc2hvd0hlYWRlcikge1xuICAgICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICAgICAgICBzdWJ0eXBlOiAnaDInLFxuICAgICAgICAgICAgICBpZDogaW5wdXRTZXQubmFtZSxcbiAgICAgICAgICAgICAgbGFiZWw6IGlucHV0U2V0LmxhYmVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIHByZXBGaWVsZFZhcnMoaGVhZGVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFNldC5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICBwcmVwRmllbGRWYXJzKGZpZWxkLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmVwRmllbGRWYXJzKGNvbnRyb2wsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgJGZvcm1XcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctZm9ybS13cmFwJyxcbiAgICAgICdjbGFzcyc6ICdmb3JtLXdyYXAgZm9ybS1idWlsZGVyJyArIF9oZWxwZXJzLm1vYmlsZUNsYXNzKClcbiAgICB9KTtcblxuICAgIGZvcm1CdWlsZGVyLmVkaXRvciA9ICRmb3JtV3JhcFswXTtcblxuICAgIGxldCAkc3RhZ2VXcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctc3RhZ2Utd3JhcCcsXG4gICAgICAnY2xhc3MnOiAnc3RhZ2Utd3JhcCAnICsgZm9ybUJ1aWxkZXIubGF5b3V0LnN0YWdlXG4gICAgfSk7XG5cbiAgICBsZXQgY2JXcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctY2Itd3JhcCcsXG4gICAgICAnY2xhc3MnOiAnY2Itd3JhcCAnICsgZm9ybUJ1aWxkZXIubGF5b3V0LmNvbnRyb2xzXG4gICAgfSkuYXBwZW5kKCRjYlVMWzBdKTtcblxuICAgIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgICAvLyBCdWlsZCBvdXIgaGVhZGVycyBhbmQgYWN0aW9uIGxpbmtzXG4gICAgICBsZXQgdmlld0RhdGFUZXh0O1xuICAgICAgbGV0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgICBpZihvcHRzLmRhdGFUeXBlID09PSAneG1sJykge1xuICAgICAgICB2aWV3RGF0YVRleHQgPSBvcHRzLm1lc3NhZ2VzLnZpZXdYTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWV3RGF0YVRleHQgPSBvcHRzLm1lc3NhZ2VzLnZpZXdKU09OO1xuICAgICAgfVxuXG4gICAgICBsZXQgYnV0dG9ucyA9IG9wdHMuYWN0aW9uQnV0dG9ucy5tYXAoX2hlbHBlcnMucHJvY2Vzc0FjdGlvbkJ1dHRvbnMpO1xuXG4gICAgICAvLyBjb25zdCB2aWV3RGF0YSA9IG0oJ2J1dHRvbicsIHZpZXdEYXRhVGV4dCwge1xuICAgICAgLy8gICBpZDogZnJtYklEICsgJy12aWV3LWRhdGEnLFxuICAgICAgLy8gICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIC8vICAgY2xhc3NOYW1lOiAndmlldy1kYXRhIGJ0biBidG4tZGVmYXVsdCdcbiAgICAgIC8vIH0pO1xuICAgICAgY29uc3QgY2xlYXJBbGwgPSBtKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLmNsZWFyQWxsLCB7XG4gICAgICAgIGlkOiBmcm1iSUQgKyAnLWNsZWFyLWFsbCcsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdjbGVhci1hbGwgYnRuIGJ0bi1kYW5nZXInXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHNhdmVBbGwgPSBtKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLnNhdmUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgYnRuIGJ0bi1wcmltYXJ5ICR7b3B0cy5wcmVmaXh9c2F2ZWAsXG4gICAgICAgIGlkOiBmcm1iSUQgKyAnLXNhdmUnLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJ1xuICAgICAgfSk7XG4gICAgICBjb25zdCBmb3JtQWN0aW9ucyA9IG0oJ2RpdicsIGJ1dHRvbnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZm9ybS1hY3Rpb25zIGJ0bi1ncm91cCdcbiAgICAgIH0pO1xuXG4gICAgICBjYldyYXAuYXBwZW5kKGZvcm1BY3Rpb25zKTtcbiAgICB9XG5cbiAgICAkc3RhZ2VXcmFwLmFwcGVuZCgkc29ydGFibGVGaWVsZHMsIGNiV3JhcCk7XG4gICAgJHN0YWdlV3JhcC5iZWZvcmUoJGZvcm1XcmFwKTtcbiAgICAkZm9ybVdyYXAuYXBwZW5kKCRzdGFnZVdyYXAsIGNiV3JhcCk7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAkKGVsZW1lbnQpLmFwcGVuZCgkZm9ybVdyYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGVsZW1lbnQpLnJlcGxhY2VXaXRoKCRmb3JtV3JhcCk7XG4gICAgfVxuXG4gICAgbGV0IHNhdmVBbmRVcGRhdGUgPSBfaGVscGVycy5kZWJvdW5jZShldnQgPT4ge1xuICAgICAgaWYgKGV2dCkge1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZ0LnRhcmdldC5uYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCAkZmllbGQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XG4gICAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGZpZWxkKTtcbiAgICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSBmaWVsZCBvbiBjaGFuZ2VcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZSBibHVyIGtleXVwJywgJy5mb3JtLWVsZW1lbnRzIGlucHV0LCAuZm9ybS1lbGVtZW50cyBzZWxlY3QsIC5mb3JtLWVsZW1lbnRzIHRleHRhcmVhJywgc2F2ZUFuZFVwZGF0ZSk7XG5cbiAgICAkKCdsaScsICRjYlVMKS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGxldCAkY29udHJvbCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLnVpLXNvcnRhYmxlLWhhbmRsZScpO1xuICAgICAgX2hlbHBlcnMuc3RvcEluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgcHJvY2Vzc0NvbnRyb2woJGNvbnRyb2wpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGFwcGVuZCBhbmQgcHJlcGVuZCBvcHRpb25zIGlmIG5lY2Vzc2FyeVxuICAgIGxldCBub25FZGl0YWJsZUZpZWxkcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNhbmNlbEFycmF5ID0gW107XG5cbiAgICAgIGlmIChvcHRzLnByZXBlbmQgJiYgISQoJy5kaXNhYmxlZC5wcmVwZW5kJywgJHNvcnRhYmxlRmllbGRzKS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHByZXBlbmRlZEZpZWxkID0gdXRpbHMubWFya3VwKCdsaScsIG9wdHMucHJlcGVuZCwge2NsYXNzTmFtZTogJ2Rpc2FibGVkIHByZXBlbmQnfSk7XG4gICAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICRzb3J0YWJsZUZpZWxkcy5wcmVwZW5kKHByZXBlbmRlZEZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuYXBwZW5kICYmICEkKCcuZGlzYWJsZWQuYXBwZW5kJywgJHNvcnRhYmxlRmllbGRzKS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGFwcGVuZGVkRmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0cy5hcHBlbmQsIHtjbGFzc05hbWU6ICdkaXNhYmxlZCBhcHBlbmQnfSk7XG4gICAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICRzb3J0YWJsZUZpZWxkcy5hcHBlbmQoYXBwZW5kZWRGaWVsZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxBcnJheS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHByZXBGaWVsZFZhcnMgPSBmdW5jdGlvbigkZmllbGQsIGlzTmV3ID0gZmFsc2UpIHtcbiAgICAgIGxldCBmaWVsZCA9IHt9O1xuICAgICAgaWYgKCRmaWVsZCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gJGZpZWxkLmRhdGEoJ25ld0ZpZWxkRGF0YScpO1xuICAgICAgICBpZiAoZmllbGREYXRhKSB7XG4gICAgICAgICAgZmllbGQgPSBmaWVsZERhdGEuYXR0cnM7XG4gICAgICAgICAgZmllbGQubGFiZWwgPSBmaWVsZERhdGEubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGF0dHJzID0gJGZpZWxkWzBdLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgaWYgKCFpc05ldykge1xuICAgICAgICAgICAgZmllbGQudmFsdWVzID0gJGZpZWxkLmNoaWxkcmVuKCkubWFwKChpbmRleCwgZWxlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAkKGVsZW0pLnRleHQoKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJChlbGVtKS5hdHRyKCd2YWx1ZScpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBCb29sZWFuKCQoZWxlbSkuYXR0cignc2VsZWN0ZWQnKSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAobGV0IGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgZmllbGRbYXR0cnNbaV0ubmFtZV0gPSBhdHRyc1tpXS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgJGZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgZmllbGQubmFtZSA9IGlzTmV3ID8gbmFtZUF0dHIoZmllbGQpIDogKCBmaWVsZC5uYW1lIHx8IG5hbWVBdHRyKGZpZWxkKSApO1xuXG4gICAgICBpZiAoaXNOZXcgJiYgdXRpbHMuaW5BcnJheShmaWVsZC50eXBlLCBbJ3RleHQnLCAnbnVtYmVyJywgJ2ZpbGUnLCAnc2VsZWN0JywgJ3RleHRhcmVhJ10pKSB7XG4gICAgICAgIGZpZWxkLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnOyAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQuY2xhc3NOYW1lID0gZmllbGQuY2xhc3MgfHwgZmllbGQuY2xhc3NOYW1lOyAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgfVxuXG4gICAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZC5jbGFzc05hbWUpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGZpZWxkLnN0eWxlID0gbWF0Y2hbMV07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmVzY2FwZUF0dHJzKGZpZWxkKTtcblxuICAgICAgYXBwZW5kTmV3RmllbGQoZmllbGQsIGlzTmV3KTtcbiAgICAgIGlmIChpc05ldykge1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZEFkZGVkKTtcbiAgICAgIH1cbiAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlIHNhdmVkIFhNTCB0ZW1wbGF0ZSBkYXRhXG4gICAgbGV0IGxvYWRGaWVsZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IGZvcm1CdWlsZGVyLmZvcm1EYXRhO1xuICAgICAgaWYgKGZvcm1EYXRhICYmIGZvcm1EYXRhLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcHJlcEZpZWxkVmFycyhmb3JtRGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5kZWZhdWx0RmllbGRzICYmIG9wdHMuZGVmYXVsdEZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gTG9hZCBkZWZhdWx0IGZpZWxkcyBpZiBub25lIGFyZSBzZXRcbiAgICAgICAgb3B0cy5kZWZhdWx0RmllbGRzLmZvckVhY2goZmllbGQgPT4gcHJlcEZpZWxkVmFycyhmaWVsZCkpO1xuICAgICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgfSBlbHNlIGlmICghb3B0cy5wcmVwZW5kICYmICFvcHRzLmFwcGVuZCkge1xuICAgICAgICAkc3RhZ2VXcmFwLmFkZENsYXNzKCdlbXB0eScpXG4gICAgICAgIC5hdHRyKCdkYXRhLWNvbnRlbnQnLCBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQpO1xuICAgICAgfVxuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuXG4gICAgICBsZXQgJGZpZWxkcyA9ICQoJ2xpLmZvcm0tZmllbGQ6bm90KC5kaXNhYmxlZCknLCAkc29ydGFibGVGaWVsZHMpO1xuXG4gICAgICAkZmllbGRzLmVhY2goaSA9PiBfaGVscGVycy51cGRhdGVQcmV2aWV3KCQoJGZpZWxkc1tpXSkpKTtcblxuICAgICAgbm9uRWRpdGFibGVGaWVsZHMoKTtcbiAgICB9O1xuXG4gICAgLy8gY2FsbGJhY2sgdG8gdHJhY2sgZGlzYWJsZWQgdG9vbHRpcHNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlbW92ZScsICdsaS5kaXNhYmxlZCcsIGUgPT4ge1xuICAgICAgJCgnLmZybWItdHQnLCB0aGlzKS5jc3Moe1xuICAgICAgICBsZWZ0OiBlLm9mZnNldFggLSAxNixcbiAgICAgICAgdG9wOiBlLm9mZnNldFkgLSAzNFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBjYWxsYmFjayB0byBjYWxsIGRpc2FibGVkIHRvb2x0aXBzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdtb3VzZWVudGVyJywgJ2xpLmRpc2FibGVkJywgZSA9PlxuICAgICAgX2hlbHBlcnMuZGlzYWJsZWRUVC5hZGQoJCh0aGlzKSkpO1xuXG4gICAgLy8gY2FsbGJhY2sgdG8gY2FsbCBkaXNhYmxlZCB0b29sdGlwc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignbW91c2VsZWF2ZScsICdsaS5kaXNhYmxlZCcsIGUgPT5cbiAgICAgIF9oZWxwZXJzLmRpc2FibGVkVFQucmVtb3ZlKCQodGhpcykpKTtcblxuICAgIGxldCBuYW1lQXR0ciA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBsZXQgZXBvY2ggPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBmaWVsZC50eXBlICsgJy0nICsgZXBvY2g7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBkYXRhIGZvciBmaWVsZCB3aXRoIG9wdGlvbnMgW3NlbGVjdCwgY2hlY2tib3gtZ3JvdXAsIHJhZGlvLWdyb3VwXVxuICAgICAqXG4gICAgICogQHRvZG8gICByZWZhY3RvciB0aGlzIG5hc3R5IH5jcmFwfiBjb2RlLCBpdHMgYWN0dWFsbHkgcGFpbmZ1bCB0byBsb29rIGF0XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IGZpZWxkIG9wdGlvbnMgbWFya3VwXG4gICAgICovXG4gICAgbGV0IGZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgbGV0IG9wdGlvbkFjdGlvbnMgPSBbXG4gICAgICAgICAgdXRpbHMubWFya3VwKCdhJywgb3B0cy5tZXNzYWdlcy5hZGRPcHRpb24sIHtjbGFzc05hbWU6ICdhZGQgYWRkLW9wdCd9KVxuICAgICAgICBdO1xuICAgICAgbGV0IGZpZWxkT3B0aW9ucyA9IFtcbiAgICAgICAgYDxsYWJlbCBjbGFzcz1cImZhbHNlLWxhYmVsXCI+JHtvcHRzLm1lc3NhZ2VzLnNlbGVjdE9wdGlvbnN9PC9sYWJlbD5gXG4gICAgICBdO1xuICAgICAgY29uc3QgaXNNdWx0aXBsZSA9IHZhbHVlcy5tdWx0aXBsZSB8fCAodmFsdWVzLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcpO1xuXG4gICAgICBpZiAoIXZhbHVlcy52YWx1ZXMgfHwgIXZhbHVlcy52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlcy52YWx1ZXMgPSBbMSwgMiwgM10ubWFwKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IGxhYmVsID0gYCR7b3B0cy5tZXNzYWdlcy5vcHRpb259ICR7aW5kZXh9YDtcbiAgICAgICAgICBsZXQgb3B0aW9uID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgdmFsdWU6IHV0aWxzLmh5cGhlbkNhc2UobGFiZWwpXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsdWVzLnZhbHVlc1swXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbnN1cmUgb3B0aW9uIGRhdGEgaXMgaGFzIGFsbCByZXF1aXJlZCBrZXlzXG4gICAgICAgIHZhbHVlcy52YWx1ZXMuZm9yRWFjaChvcHRpb24gPT4gT2JqZWN0LmFzc2lnbih7fSwge3NlbGVjdGVkOiBmYWxzZX0sIG9wdGlvbikpO1xuICAgICAgfVxuXG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPGRpdiBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnMtd3JhcFwiPicpO1xuXG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPG9sIGNsYXNzPVwic29ydGFibGUtb3B0aW9uc1wiPicpO1xuICAgICAgdXRpbHMuZm9yRWFjaCh2YWx1ZXMudmFsdWVzLCAoaSkgPT4ge1xuICAgICAgICBmaWVsZE9wdGlvbnMucHVzaChzZWxlY3RGaWVsZE9wdGlvbnModmFsdWVzLm5hbWUsIHZhbHVlcy52YWx1ZXNbaV0sIGlzTXVsdGlwbGUpKTtcbiAgICAgIH0pO1xuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzwvb2w+Jyk7XG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCh1dGlscy5tYXJrdXAoJ2RpdicsIG9wdGlvbkFjdGlvbnMsIHtjbGFzc05hbWU6ICdvcHRpb24tYWN0aW9ucyd9KS5vdXRlckhUTUwpO1xuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzwvZGl2PicpO1xuXG4gICAgICByZXR1cm4gdXRpbHMubWFya3VwKCdkaXYnLCBmaWVsZE9wdGlvbnMuam9pbignJyksIHtjbGFzc05hbWU6ICdmb3JtLWdyb3VwIGZpZWxkLW9wdGlvbnMnfSkub3V0ZXJIVE1MO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgZWRpdGFibGUgcHJvcGVydGllcyBmb3IgdGhlIGZpZWxkXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSB2YWx1ZXMgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGFkdmFuY2VkIGZpZWxkc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgIG1hcmt1cCBmb3IgYWR2YW5jZWQgZmllbGRzXG4gICAgICovXG4gICAgbGV0IGFkdkZpZWxkcyA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgbGV0IGFkdkZpZWxkcyA9IFtdO1xuICAgICAgbGV0IGtleTtcbiAgICAgIGxldCBvcHRpb25GaWVsZHMgPSBbXG4gICAgICAgICdzZWxlY3QnLFxuICAgICAgICAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICAncmFkaW8tZ3JvdXAnXG4gICAgICBdO1xuICAgICAgbGV0IGlzT3B0aW9uRmllbGQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAob3B0aW9uRmllbGRzLmluZGV4T2YodmFsdWVzLnR5cGUpICE9PSAtMSk7XG4gICAgICB9KSgpO1xuICAgICAgbGV0IHZhbHVlRmllbGQgPSAhdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgWydoZWFkZXInLCAncGFyYWdyYXBoJywgJ2ZpbGUnXS5jb25jYXQob3B0aW9uRmllbGRzKSk7XG4gICAgICBsZXQgcm9sZXMgPSB2YWx1ZXMucm9sZSAhPT0gdW5kZWZpbmVkID8gdmFsdWVzLnJvbGUuc3BsaXQoJywnKSA6IFtdO1xuXG4gICAgICBhZHZGaWVsZHMucHVzaChyZXF1aXJlZEZpZWxkKHZhbHVlcykpO1xuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgndG9nZ2xlJywgdmFsdWVzLCB7Zmlyc3Q6IG9wdHMubWVzc2FnZXMudG9nZ2xlfSkpO1xuICAgICAgfVxuXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdsYWJlbCcsIHZhbHVlcykpO1xuXG4gICAgICB2YWx1ZXMuc2l6ZSA9IHZhbHVlcy5zaXplIHx8ICdtJztcbiAgICAgIHZhbHVlcy5zdHlsZSA9IHZhbHVlcy5zdHlsZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAgIC8vIEhlbHAgVGV4dCAvIERlc2NyaXB0aW9uIEZpZWxkXG4gICAgICBpZiAoIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsnaGVhZGVyJywgJ3BhcmFncmFwaCcsICdidXR0b24nXSkpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgnZGVzY3JpcHRpb24nLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnR5cGVzW3ZhbHVlcy50eXBlXSkge1xuICAgICAgICBsZXQgb3B0aW9uRGF0YSA9IHN1YnR5cGVzW3ZhbHVlcy50eXBlXTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goc2VsZWN0QXR0cmlidXRlKCdzdWJ0eXBlJywgdmFsdWVzLCBvcHRpb25EYXRhKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYnRuU3R5bGVzKHZhbHVlcy5zdHlsZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWluJywgdmFsdWVzKSk7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWF4JywgdmFsdWVzKSk7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnc3RlcCcsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBQbGFjZWhvbGRlclxuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB2YWx1ZXMpKTtcblxuICAgICAgLy8gVGV4dEFyZWEgUm93cyBBdHRyaWJ1dGVcbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ3Jvd3MnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xhc3NcbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2NsYXNzTmFtZScsIHZhbHVlcykpO1xuXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCduYW1lJywgdmFsdWVzKSk7XG5cbiAgICAgIGlmICh2YWx1ZUZpZWxkKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGxldCBsYWJlbHMgPSB7XG4gICAgICAgICAgZmlyc3Q6IG9wdHMubWVzc2FnZXMubXVsdGlwbGVGaWxlcyxcbiAgICAgICAgICBzZWNvbmQ6IG9wdHMubWVzc2FnZXMuYWxsb3dNdWx0aXBsZUZpbGVzXG4gICAgICAgIH07XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ211bHRpcGxlJywgdmFsdWVzLCBsYWJlbHMpKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJvbGVzRGlzcGxheSA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCInIDogJyc7XG4gICAgICBsZXQgYXZhaWxhYmxlUm9sZXMgPSBbXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYXZhaWxhYmxlLXJvbGVzXCIgJHtyb2xlc0Rpc3BsYXl9PmBcbiAgICAgIF07XG4gICAgICBmb3IgKGtleSBpbiBvcHRzLnJvbGVzKSB7XG4gICAgICAgIGlmIChvcHRzLnJvbGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsZXQgY2hlY2tlZCA9IHV0aWxzLmluQXJyYXkoa2V5LCByb2xlcykgPyAnY2hlY2tlZCcgOiAnJztcbiAgICAgICAgICBsZXQgcm9sZUlkID0gYGZsZC0ke2xhc3RJRH0tcm9sZXMtJHtrZXl9YDtcbiAgICAgICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJvbGVzW11cIiB2YWx1ZT1cIiR7a2V5fVwiIGlkPVwiJHtyb2xlSWR9XCIgJHtjaGVja2VkfSBjbGFzcz1cInJvbGVzLWZpZWxkXCIgLz4gPGxhYmVsIGZvcj1cIiR7cm9sZUlkfVwiPiR7b3B0cy5yb2xlc1trZXldfTwvbGFiZWw+PGJyLz5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKCc8L2Rpdj4nKTtcblxuICAgICAgbGV0IGFjY2Vzc0xhYmVscyA9IHtmaXJzdDogb3B0cy5tZXNzYWdlcy5yb2xlcywgc2Vjb25kOiBvcHRzLm1lc3NhZ2VzLmxpbWl0Um9sZSwgY29udGVudDogYXZhaWxhYmxlUm9sZXMuam9pbignJyl9O1xuXG4gICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdhY2Nlc3MnLCB2YWx1ZXMsIGFjY2Vzc0xhYmVscykpO1xuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcgfHwgdmFsdWVzLnR5cGUgPT09ICdyYWRpby1ncm91cCcpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnb3RoZXInLCB2YWx1ZXMsIHtmaXJzdDogb3B0cy5tZXNzYWdlcy5lbmFibGVPdGhlciwgc2Vjb25kOiBvcHRzLm1lc3NhZ2VzLmVuYWJsZU90aGVyTXNnfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ211bHRpcGxlJywgdmFsdWVzLCB7Zmlyc3Q6ICcgJywgc2Vjb25kOiBvcHRzLm1lc3NhZ2VzLnNlbGVjdGlvbnNNZXNzYWdlfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNPcHRpb25GaWVsZCkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChmaWVsZE9wdGlvbnModmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ3RleHQnLCAndGV4dGFyZWEnXSkpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtYXhsZW5ndGgnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIGN1c3RvbSBhdHRyaWJ1dGVzIGFzIGRlZmluZWQgaW4gdHlwZVVzZXJBdHRycyBvcHRpb25cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHByb2Nlc3NUeXBlVXNlckF0dHJzKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0sIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWR2RmllbGRzLmpvaW4oJycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdHlwZVVzZXJBdHRyc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gdHlwZVVzZXJBdHRyIG9wdGlvblxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzICAgICAgIGZpZWxkIGF0dHJpYnV0ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICBtYXJrdXAgZm9yIGN1c3RvbSB1c2VyIGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcm9jZXNzVHlwZVVzZXJBdHRycyh0eXBlVXNlckF0dHIsIHZhbHVlcykge1xuICAgICAgbGV0IGFkdkZpZWxkID0gW107XG5cbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiB0eXBlVXNlckF0dHIpIHtcbiAgICAgICAgaWYgKHR5cGVVc2VyQXR0ci5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgbGV0IG9yaWcgPSBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV07XG4gICAgICAgICAgbGV0IG9yaWdWYWx1ZSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlO1xuICAgICAgICAgIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgfHwgJyc7XG5cbiAgICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWwpIHtcbiAgICAgICAgICAgIG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLmxhYmVsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5vcHRpb25zKSB7XG4gICAgICAgICAgICBhZHZGaWVsZC5wdXNoKHNlbGVjdFVzZXJBdHRycyhhdHRyaWJ1dGUsIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkdkZpZWxkLnB1c2goaW5wdXRVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXSA9IG9yaWc7XG4gICAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFkdkZpZWxkLmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRleHQgaW5wdXQgdmFsdWUgZm9yIGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMgYWxzbyBrbm93biBhcyB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIGlucHV0IG1hcmt1cFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlucHV0VXNlckF0dHJzKG5hbWUsIGF0dHJzKSB7XG4gICAgICBsZXQgdGV4dEF0dHJzID0ge1xuICAgICAgICAgIGlkOiBuYW1lICsgJy0nICsgbGFzdElELFxuICAgICAgICAgIHRpdGxlOiBhdHRycy5kZXNjcmlwdGlvbiB8fCBhdHRycy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBhdHRycy50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgICBjbGFzc05hbWU6IFtgZmxkLSR7bmFtZX1gXVxuICAgICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3RleHRBdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXNbbmFtZV19PC9sYWJlbD5gO1xuXG4gICAgICBpZiAoIXV0aWxzLmluQXJyYXkodGV4dEF0dHJzLnR5cGUsIFsnY2hlY2tib3gnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSkpIHtcbiAgICAgICAgdGV4dEF0dHJzLmNsYXNzTmFtZS5wdXNoKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgIH1cblxuICAgICAgdGV4dEF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIHRleHRBdHRycyk7XG4gICAgICBsZXQgdGV4dElucHV0ID0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcodGV4dEF0dHJzKX0+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3RleHRJbnB1dH08L2Rpdj5gO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGlucHV0IGZvciBtdWx0aXBsZSBjaG9pY2UgdXNlciBhdHRyaWJ1dGVzXG4gICAgICogQHRvZG8gIHJlcGxhY2Ugd2l0aCBzZWxlY3RBdHRyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgIHNlbGVjdCBtYXJrdXBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZWxlY3RVc2VyQXR0cnMobmFtZSwgb3B0aW9ucykge1xuICAgICAgbGV0IG9wdGlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5vcHRpb25zKS5tYXAodmFsID0+IHtcbiAgICAgICAgbGV0IGF0dHJzID0ge3ZhbHVlOiB2YWx9O1xuICAgICAgICBpZiAodmFsID09PSBvcHRpb25zLnZhbHVlKSB7XG4gICAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4ke29wdGlvbnMub3B0aW9uc1t2YWxdfTwvb3B0aW9uPmA7XG4gICAgICB9KTtcbiAgICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgICAgaWQ6IG5hbWUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgIHRpdGxlOiBvcHRpb25zLmRlc2NyaXB0aW9uIHx8IG9wdGlvbnMubGFiZWwgfHwgbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHtuYW1lfSBmb3JtLWNvbnRyb2xgXG4gICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7b3B0cy5tZXNzYWdlc1tuYW1lXX08L2xhYmVsPmA7XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihwcm9wID0+IHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5pbkFycmF5KHByb3AsIFsndmFsdWUnLCAnb3B0aW9ucycsICdsYWJlbCddKTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24oYXR0cikge1xuICAgICAgICBzZWxlY3RBdHRyc1thdHRyXSA9IG9wdGlvbnNbYXR0cl07XG4gICAgICB9KTtcblxuICAgICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7b3B0aXMuam9pbignJyl9PC9zZWxlY3Q+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgbGV0IGJvb2xBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZXMsIGxhYmVscykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVtuYW1lXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbCA9ICh0eHQpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGFiZWwgZm9yPVwiJHtuYW1lfS0ke2xhc3RJRH1cIj4ke3R4dH08L2xhYmVsPmA7XG4gICAgICB9O1xuICAgICAgbGV0IGNoZWNrZWQgPSAodmFsdWVzW25hbWVdICE9PSB1bmRlZmluZWQgPyAnY2hlY2tlZCcgOiAnJyk7XG4gICAgICBsZXQgaW5wdXQgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZmxkLSR7bmFtZX1cIiBuYW1lPVwiJHtuYW1lfVwiIHZhbHVlPVwidHJ1ZVwiICR7Y2hlY2tlZH0gaWQ9XCIke25hbWV9LSR7bGFzdElEfVwiLz4gYDtcbiAgICAgIGxldCBsZWZ0ID0gW107XG4gICAgICBsZXQgcmlnaHQgPSBbXG4gICAgICAgIGlucHV0XG4gICAgICBdO1xuXG4gICAgICBpZiAobGFiZWxzLmZpcnN0KSB7XG4gICAgICAgIGxlZnQudW5zaGlmdChsYWJlbChsYWJlbHMuZmlyc3QpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhYmVscy5zZWNvbmQpIHtcbiAgICAgICAgcmlnaHQucHVzaChsYWJlbChsYWJlbHMuc2Vjb25kKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYWJlbHMuY29udGVudCkge1xuICAgICAgICByaWdodC5wdXNoKGxhYmVscy5jb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmlnaHQudW5zaGlmdCgnPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4nKTtcbiAgICAgIHJpZ2h0LnB1c2goJzwvZGl2PicpO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGVmdC5jb25jYXQocmlnaHQpLmpvaW4oJycpfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIGxldCBidG5TdHlsZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICBsZXQgc3R5bGVzID0gb3B0cy5tZXNzYWdlcy5zdHlsZXMuYnRuO1xuICAgICAgICBsZXQgc3R5bGVGaWVsZCA9ICcnO1xuXG4gICAgICBpZiAoc3R5bGVzKSB7XG4gICAgICAgIGxldCBzdHlsZUxhYmVsID0gYDxsYWJlbD4ke29wdHMubWVzc2FnZXMuc3R5bGV9PC9sYWJlbD5gO1xuICAgICAgICBzdHlsZUZpZWxkICs9IGA8aW5wdXQgdmFsdWU9XCIke3N0eWxlfVwiIG5hbWU9XCJzdHlsZVwiIHR5cGU9XCJoaWRkZW5cIiBjbGFzcz1cImJ0bi1zdHlsZVwiPmA7XG4gICAgICAgIHN0eWxlRmllbGQgKz0gJzxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj4nO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBsZXQgY2xhc3NMaXN0ID0gWydidG4teHMnLCAnYnRuJywgYGJ0bi0ke2VsZW1lbnR9YF07XG4gICAgICAgICAgaWYgKHN0eWxlID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBjbGFzc0xpc3QucHVzaCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdHlsZUZpZWxkICs9IGA8YnV0dG9uIHZhbHVlPVwiJHtlbGVtZW50fVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7Y2xhc3NMaXN0LmpvaW4oJyAnKX1cIj4ke29wdHMubWVzc2FnZXMuc3R5bGVzLmJ0bltlbGVtZW50XX08L2J1dHRvbj5gO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdHlsZUZpZWxkICs9ICc8L2Rpdj4nO1xuXG4gICAgICAgIHN0eWxlRmllbGQgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc3R5bGUtd3JhcFwiPiR7c3R5bGVMYWJlbH0gJHtzdHlsZUZpZWxkfTwvZGl2PmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZUZpZWxkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBudW1iZXIgYXR0cmlidXRlIHRvIGEgZmllbGQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gbWFya3VwIGZvciBudW1iZXIgYXR0cmlidXRlXG4gICAgICovXG4gICAgbGV0IG51bWJlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgYXR0clZhbCA9IHZhbHVlc1thdHRyaWJ1dGVdO1xuICAgICAgbGV0IGF0dHJMYWJlbCA9IG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXSB8fCBhdHRyaWJ1dGU7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSBvcHRzLm1lc3NhZ2VzLnBsYWNlaG9sZGVyc1thdHRyaWJ1dGVdO1xuICAgICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgdmFsdWU6IGF0dHJWYWwsXG4gICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgbWluOiAnMCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2xhc3RJRH1gXG4gICAgICB9O1xuICAgICAgbGV0IG51bWJlckF0dHJpYnV0ZSA9IGA8aW5wdXQgJHt1dGlscy5hdHRyU3RyaW5nKHV0aWxzLnRyaW1PYmooaW5wdXRDb25maWcpKX0+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke251bWJlckF0dHJpYnV0ZX08L2Rpdj5gO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7YXR0cmlidXRlfS13cmFwXCI+PGxhYmVsIGZvcj1cIiR7aW5wdXRDb25maWcuaWR9XCI+JHthdHRyTGFiZWx9PC9sYWJlbD4gJHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogc2VsZWN0QXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGUgIGF0dHJpYnV0ZSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgIGFrYSBhdHRyc1xuICAgICAqIEBwYXJhbSAge0FycmF5fSBvcHRpb25EYXRhICBzZWxlY3QgZmllbGQgb3B0aW9uIGRhdGFcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgc2VsZWN0IGlucHV0IG1ha3J1cFxuICAgICAqL1xuICAgIGxldCBzZWxlY3RBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcywgb3B0aW9uRGF0YSkge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzZWxlY3RPcHRpb25zID0gb3B0aW9uRGF0YS5tYXAoKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICBsZXQgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBsYWJlbDogYCR7b3B0cy5tZXNzYWdlcy5vcHRpb259ICR7aX1gLFxuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSwgb3B0aW9uKTtcbiAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdmFsdWVzW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgICBvcHRpb25BdHRycy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8b3B0aW9uICR7dXRpbHMuYXR0clN0cmluZyh1dGlscy50cmltT2JqKG9wdGlvbkF0dHJzKSl9PiR7b3B0aW9uQXR0cnMubGFiZWx9PC9vcHRpb24+YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IHNlbGVjdEF0dHJzID0ge1xuICAgICAgICAgIGlkOiBhdHRyaWJ1dGUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgICAgbmFtZTogYXR0cmlidXRlLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYFxuICAgICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7b3B0cy5tZXNzYWdlc1thdHRyaWJ1dGVdIHx8IHV0aWxzLmNhcGl0YWxpemUoYXR0cmlidXRlKX08L2xhYmVsPmA7XG4gICAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtzZWxlY3RPcHRpb25zLmpvaW4oJycpfTwvc2VsZWN0PmA7XG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtzZWxlY3R9PC9kaXY+YDtcblxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke3NlbGVjdEF0dHJzLm5hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHNvbWUgdGV4dCBpbnB1dHMgZm9yIGZpZWxkIGF0dHJpYnV0ZXMsICoqd2lsbCBiZSByZXBsYWNlZCoqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBsZXQgdGV4dEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgcGxhY2Vob2xkZXJGaWVsZHMgPSBbXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICAgJ3NlbGVjdCdcbiAgICAgIF07XG5cbiAgICAgIGxldCBub05hbWUgPSBbXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAncGFyYWdyYXBoJ1xuICAgICAgXTtcblxuICAgICAgbGV0IHRleHRBcmVhID0gWydwYXJhZ3JhcGgnXTtcblxuICAgICAgbGV0IGF0dHJWYWwgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCAnJztcbiAgICAgIGxldCBhdHRyTGFiZWwgPSBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV07XG4gICAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHRleHRBcmVhKSkge1xuICAgICAgICBhdHRyTGFiZWwgPSBvcHRzLm1lc3NhZ2VzLmNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJ0eXBlcy5oZWFkZXIpIHtcbiAgICAgICAgbm9OYW1lID0gbm9OYW1lLmNvbmNhdChzdWJ0eXBlcy5oZWFkZXIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcGxhY2Vob2xkZXJzID0gb3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnM7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcnNbYXR0cmlidXRlXSB8fCAnJztcbiAgICAgIGxldCBhdHRyaWJ1dGVmaWVsZCA9ICcnO1xuICAgICAgbGV0IG5vTWFrZUF0dHIgPSBbXTtcblxuICAgICAgLy8gRmllbGQgaGFzIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZVxuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3BsYWNlaG9sZGVyJyAmJiAhdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgcGxhY2Vob2xkZXJGaWVsZHMpKSB7XG4gICAgICAgIG5vTWFrZUF0dHIucHVzaCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gRmllbGQgaGFzIG5hbWUgYXR0cmlidXRlXG4gICAgICBpZiAoYXR0cmlidXRlID09PSAnbmFtZScgJiYgdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgbm9OYW1lKSkge1xuICAgICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbm9NYWtlQXR0ci5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgICAgIGlkOiBgJHthdHRyaWJ1dGV9LSR7bGFzdElEfWBcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZUxhYmVsID0gYDxsYWJlbCBmb3I9XCIke2lucHV0Q29uZmlnLmlkfVwiPiR7YXR0ckxhYmVsfTwvbGFiZWw+YDtcblxuICAgICAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHRleHRBcmVhKSB8fCAoYXR0cmlidXRlID09PSAndmFsdWUnICYmIHZhbHVlcy50eXBlID09PSAndGV4dGFyZWEnKSkge1xuICAgICAgICAgIGF0dHJpYnV0ZWZpZWxkICs9IGA8dGV4dGFyZWEgJHt1dGlscy5hdHRyU3RyaW5nKGlucHV0Q29uZmlnKX0+JHthdHRyVmFsfTwvdGV4dGFyZWE+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dENvbmZpZy52YWx1ZSA9IGF0dHJWYWw7XG4gICAgICAgICAgaW5wdXRDb25maWcudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyhpbnB1dENvbmZpZyl9PmA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHthdHRyaWJ1dGVmaWVsZH08L2Rpdj5gO1xuXG4gICAgICAgIGF0dHJpYnV0ZWZpZWxkID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7YXR0cmlidXRlfS13cmFwXCI+JHthdHRyaWJ1dGVMYWJlbH0gJHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZWZpZWxkO1xuICAgIH07XG5cbiAgICBsZXQgcmVxdWlyZWRGaWVsZCA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgbGV0IG5vUmVxdWlyZSA9IFtcbiAgICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgICAncGFyYWdyYXBoJyxcbiAgICAgICAgICAnYnV0dG9uJ1xuICAgICAgICBdO1xuICAgICAgbGV0IG5vTWFrZSA9IFtdO1xuICAgICAgbGV0IHJlcXVpcmVGaWVsZCA9ICcnO1xuXG4gICAgICBpZiAodXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgbm9SZXF1aXJlKSkge1xuICAgICAgICBub01ha2UucHVzaCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICghbm9NYWtlLnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgICByZXF1aXJlRmllbGQgPSBib29sQXR0cmlidXRlKCdyZXF1aXJlZCcsIHZhbHVlcywge2ZpcnN0OiBvcHRzLm1lc3NhZ2VzLnJlcXVpcmVkfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXF1aXJlRmllbGQ7XG4gICAgfTtcblxuICAgIC8vIEFwcGVuZCB0aGUgbmV3IGZpZWxkIHRvIHRoZSBlZGl0b3JcbiAgICBsZXQgYXBwZW5kTmV3RmllbGQgPSBmdW5jdGlvbih2YWx1ZXMsIGlzTmV3ID0gdHJ1ZSkge1xuICAgICAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICAgIGxldCB0eXBlID0gdmFsdWVzLnR5cGUgfHwgJ3RleHQnO1xuICAgICAgbGV0IGxhYmVsID0gdmFsdWVzLmxhYmVsIHx8IG9wdHMubWVzc2FnZXNbdHlwZV0gfHwgb3B0cy5tZXNzYWdlcy5sYWJlbDtcbiAgICAgIGxldCBkZWxCdG4gPSBtKCdhJywgb3B0cy5tZXNzYWdlcy5yZW1vdmUsIHtcbiAgICAgICAgICBpZDogJ2RlbF8nICsgbGFzdElELFxuICAgICAgICAgIGNsYXNzTmFtZTogJ2RlbC1idXR0b24gYnRuIGRlbGV0ZS1jb25maXJtJyxcbiAgICAgICAgICB0aXRsZTogb3B0cy5tZXNzYWdlcy5yZW1vdmVNZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgbGV0IHRvZ2dsZUJ0biA9IG0oJ2EnLCBudWxsLCB7XG4gICAgICAgIGlkOiBsYXN0SUQgKyAnLWVkaXQnLFxuICAgICAgICBjbGFzc05hbWU6ICd0b2dnbGUtZm9ybSBidG4gaWNvbi1wZW5jaWwnLFxuICAgICAgICB0aXRsZTogb3B0cy5tZXNzYWdlcy5oaWRlXG4gICAgICB9KTtcbiAgICAgIGxldCBjb3B5QnRuID0gbSgnYScsIG9wdHMubWVzc2FnZXMuY29weUJ1dHRvbiwge1xuICAgICAgICBpZDogbGFzdElEICsgJy1jb3B5JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY29weS1idXR0b24gYnRuIGljb24tY29weScsXG4gICAgICAgIHRpdGxlOiBvcHRzLm1lc3NhZ2VzLmNvcHlCdXR0b25Ub29sdGlwXG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpQ29udGVudHMgPSBtKFxuICAgICAgICAnZGl2JywgW3RvZ2dsZUJ0biwgY29weUJ0biwgZGVsQnRuXSwge2NsYXNzTmFtZTogJ2ZpZWxkLWFjdGlvbnMnfVxuICAgICAgKS5vdXRlckhUTUw7XG5cbiAgICAgIC8vIEZpZWxkIHByZXZpZXcgTGFiZWxcbiAgICAgIGxpQ29udGVudHMgKz0gYDxsYWJlbCBjbGFzcz1cImZpZWxkLWxhYmVsXCI+JHtsYWJlbH08L2xhYmVsPmA7XG5cbiAgICAgIGlmICh2YWx1ZXMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3Rvb2x0aXAtZWxlbWVudCcsXG4gICAgICAgICAgdG9vbHRpcDogdmFsdWVzLmRlc2NyaXB0aW9uXG4gICAgICAgIH07XG4gICAgICAgIGxpQ29udGVudHMgKz0gYDxzcGFuICR7dXRpbHMuYXR0clN0cmluZyhhdHRycyl9Pj88L3NwYW4+YDtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlcXVpcmVkRGlzcGxheSA9IHZhbHVlcy5yZXF1aXJlZCA/ICdzdHlsZT1cImRpc3BsYXk6aW5saW5lXCInIDogJyc7XG4gICAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCIgJHtyZXF1aXJlZERpc3BsYXl9PiAqPC9zcGFuPmA7XG5cbiAgICAgIGxpQ29udGVudHMgKz0gbSgnZGl2JywgJycsIHtjbGFzc05hbWU6ICdwcmV2LWhvbGRlcid9KS5vdXRlckhUTUw7XG4gICAgICBsaUNvbnRlbnRzICs9IGA8ZGl2IGlkPVwiJHtsYXN0SUR9LWhvbGRlclwiIGNsYXNzPVwiZnJtLWhvbGRlclwiPmA7XG4gICAgICBsaUNvbnRlbnRzICs9ICc8ZGl2IGNsYXNzPVwiZm9ybS1lbGVtZW50c1wiPic7XG5cbiAgICAgIGxpQ29udGVudHMgKz0gYWR2RmllbGRzKHZhbHVlcyk7XG4gICAgICBsaUNvbnRlbnRzICs9IG0oJ2EnLCBvcHRzLm1lc3NhZ2VzLmNsb3NlLCB7Y2xhc3NOYW1lOiAnY2xvc2UtZmllbGQnfSkub3V0ZXJIVE1MO1xuXG4gICAgICBsaUNvbnRlbnRzICs9ICc8L2Rpdj4nO1xuICAgICAgbGlDb250ZW50cyArPSAnPC9kaXY+JztcblxuICAgICAgbGV0IGZpZWxkID0gbSgnbGknLCBsaUNvbnRlbnRzLCB7XG4gICAgICAgICAgJ2NsYXNzJzogdHlwZSArICctZmllbGQgZm9ybS1maWVsZCcsXG4gICAgICAgICAgJ3R5cGUnOiB0eXBlLFxuICAgICAgICAgIGlkOiBsYXN0SURcbiAgICAgICAgfSk7XG4gICAgICBsZXQgJGxpID0gJChmaWVsZCk7XG5cbiAgICAgICRsaS5kYXRhKCdmaWVsZERhdGEnLCB7YXR0cnM6IHZhbHVlc30pO1xuXG4gICAgICBpZiAodHlwZW9mIF9oZWxwZXJzLnN0b3BJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJCgnPiBsaScsICRzb3J0YWJsZUZpZWxkcykuZXEoX2hlbHBlcnMuc3RvcEluZGV4KS5iZWZvcmUoJGxpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRzb3J0YWJsZUZpZWxkcy5hcHBlbmQoJGxpKTtcbiAgICAgIH1cblxuICAgICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkbGkpXG4gICAgICAuc29ydGFibGUoe3VwZGF0ZTogKCkgPT4gX2hlbHBlcnMudXBkYXRlUHJldmlldygkbGkpfSk7XG5cbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGxpKTtcblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmFkZCkge1xuICAgICAgICBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uYWRkKGZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuZWRpdE9uQWRkICYmIGlzTmV3KSB7XG4gICAgICAgIF9oZWxwZXJzLmNsb3NlQWxsRWRpdCgpO1xuICAgICAgICBfaGVscGVycy50b2dnbGVFZGl0KGxhc3RJRCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBsYXN0SUQgPSBfaGVscGVycy5pbmNyZW1lbnRJZChsYXN0SUQpO1xuICAgIH07XG5cbiAgICAvLyBTZWxlY3QgZmllbGQgaHRtbCwgc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlXG4gICAgbGV0IHNlbGVjdEZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbkRhdGEsIG11bHRpcGxlU2VsZWN0KSB7XG4gICAgICBsZXQgb3B0aW9uSW5wdXRUeXBlID0ge1xuICAgICAgICAgIHNlbGVjdGVkOiAobXVsdGlwbGVTZWxlY3QgPyAnY2hlY2tib3gnIDogJ3JhZGlvJylcbiAgICAgICAgfTtcbiAgICAgIGxldCBvcHRpb25EYXRhT3JkZXIgPSBbXG4gICAgICAgICd2YWx1ZScsXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdzZWxlY3RlZCdcbiAgICAgIF07XG4gICAgICBsZXQgb3B0aW9uSW5wdXRzID0gW107XG4gICAgICBsZXQgb3B0aW9uVGVtcGxhdGUgPSB7c2VsZWN0ZWQ6IGZhbHNlLCBsYWJlbDogJycsIHZhbHVlOiAnJ307XG5cbiAgICAgIG9wdGlvbkRhdGEgPSBPYmplY3QuYXNzaWduKG9wdGlvblRlbXBsYXRlLCBvcHRpb25EYXRhKTtcblxuICAgICAgZm9yIChsZXQgaSA9IG9wdGlvbkRhdGFPcmRlci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgcHJvcCA9IG9wdGlvbkRhdGFPcmRlcltpXTtcbiAgICAgICAgaWYgKG9wdGlvbkRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAgICAgICB0eXBlOiBvcHRpb25JbnB1dFR5cGVbcHJvcF0gfHwgJ3RleHQnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ29wdGlvbi0nICsgcHJvcCxcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb25EYXRhW3Byb3BdLFxuICAgICAgICAgICAgbmFtZTogbmFtZSArICctb3B0aW9uJ1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAob3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnNbcHJvcF0pIHtcbiAgICAgICAgICAgIGF0dHJzLnBsYWNlaG9sZGVyID0gb3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnNbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3AgPT09ICdzZWxlY3RlZCcgJiYgb3B0aW9uRGF0YS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXR0cnMuY2hlY2tlZCA9IG9wdGlvbkRhdGEuc2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3B0aW9uSW5wdXRzLnB1c2godXRpbHMubWFya3VwKCdpbnB1dCcsIG51bGwsIGF0dHJzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHJlbW92ZUF0dHJzID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdyZW1vdmUgYnRuJyxcbiAgICAgICAgdGl0bGU6IG9wdHMubWVzc2FnZXMucmVtb3ZlTWVzc2FnZVxuICAgICAgfTtcbiAgICAgIG9wdGlvbklucHV0cy5wdXNoKHV0aWxzLm1hcmt1cCgnYScsIG9wdHMubWVzc2FnZXMucmVtb3ZlLCByZW1vdmVBdHRycykpO1xuXG4gICAgICBsZXQgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0aW9uSW5wdXRzKTtcblxuICAgICAgcmV0dXJuIGZpZWxkLm91dGVySFRNTDtcbiAgICB9O1xuXG4gICAgbGV0IGNsb25lSXRlbSA9IGZ1bmN0aW9uIGNsb25lSXRlbShjdXJyZW50SXRlbSkge1xuICAgICAgbGV0IGN1cnJlbnRJZCA9IGN1cnJlbnRJdGVtLmF0dHIoJ2lkJyk7XG4gICAgICBsZXQgdHlwZSA9IGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKTtcbiAgICAgIGxldCB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgbGV0IGNsb25lTmFtZSA9IHR5cGUgKyAnLScgKyB0cztcbiAgICAgIGxldCAkY2xvbmUgPSBjdXJyZW50SXRlbS5jbG9uZSgpO1xuXG4gICAgICAkY2xvbmUuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgdGhpcy5pZCA9IHRoaXMuaWQucmVwbGFjZShjdXJyZW50SWQsIGxhc3RJRCk7XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmZpbmQoJ1tmb3JdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZvcicpLnJlcGxhY2UoY3VycmVudElkLCBsYXN0SUQpKTtcbiAgICAgIH0pO1xuXG4gICAgICAkY2xvbmUuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnZTpub3QoLmZvcm0tZWxlbWVudHMpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgbmV3TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIChuZXdOYW1lLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUgKyB0cy50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCduYW1lJywgbmV3TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5maW5kKCcuZm9ybS1lbGVtZW50cycpLmZpbmQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSAnbmFtZScpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgbmV3VmFsID0gbmV3VmFsLnN1YnN0cmluZygwLCAobmV3VmFsLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgICAgbmV3VmFsID0gbmV3VmFsICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmF0dHIoJ2lkJywgbGFzdElEKTtcbiAgICAgICRjbG9uZS5hdHRyKCduYW1lJywgY2xvbmVOYW1lKTtcbiAgICAgICRjbG9uZS5hZGRDbGFzcygnY2xvbmVkJyk7XG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRjbG9uZSkuc29ydGFibGUoKTtcblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKSB7XG4gICAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSgkY2xvbmVbMF0pO1xuICAgICAgfVxuXG4gICAgICBsYXN0SUQgPSBfaGVscGVycy5pbmNyZW1lbnRJZChsYXN0SUQpO1xuICAgICAgcmV0dXJuICRjbG9uZTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVVElMSVRJRVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gICAgLy8gZGVsZXRlIG9wdGlvbnNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnJlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkZmllbGQgPSAkKHRoaXMpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgb3B0aW9uc0NvdW50ID0gJCh0aGlzKS5wYXJlbnRzKCcuc29ydGFibGUtb3B0aW9uczplcSgwKScpLmNoaWxkcmVuKCdsaScpLmxlbmd0aDtcbiAgICAgIGlmIChvcHRpb25zQ291bnQgPD0gMikge1xuICAgICAgICBvcHRzLm5vdGlmeS5lcnJvcignRXJyb3I6ICcgKyBvcHRzLm1lc3NhZ2VzLm1pbk9wdGlvbk1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuc2xpZGVVcCgnMjUwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRmaWVsZCk7XG4gICAgICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRvdWNoIGZvY3VzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCd0b3VjaHN0YXJ0JywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGlmICgkaW5wdXQuYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgJGlucHV0LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgbGV0IGZpZWxkVmFsID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICRpbnB1dC52YWwoZmllbGRWYWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0b2dnbGUgZmllbGRzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy50b2dnbGUtZm9ybSwgLmNsb3NlLWZpZWxkJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChlLmhhbmRsZWQgIT09IHRydWUpIHtcbiAgICAgICAgbGV0IHRhcmdldElEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgICAgICBfaGVscGVycy50b2dnbGVFZGl0KHRhcmdldElEKTtcbiAgICAgICAgZS5oYW5kbGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlJywgJy5wcmV2LWhvbGRlciBpbnB1dCwgLnByZXYtaG9sZGVyIHNlbGVjdCcsIGUgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3RoZXItb3B0aW9uJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGZpZWxkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGkuZm9ybS1maWVsZCcpWzBdO1xuICAgICAgaWYgKHV0aWxzLmluQXJyYXkoZmllbGQudHlwZSwgWydzZWxlY3QnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSkpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBmaWVsZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb24tdmFsdWUnKTtcbiAgICAgICAgY29uc3QgcHJldmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGUudGFyZ2V0Lm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhbcHJldmlld10pO1xuICAgICAgICB1dGlscy5mb3JFYWNoKG9wdGlvbnMsIGkgPT4ge1xuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbnNbaV0ucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5jaGVja2VkID0gdXRpbHMuaW5BcnJheShvcHRpb25zW2ldLnZhbHVlLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmNoZWNrZWQgPSBvcHRpb25zW2ldLnZhbHVlID09PSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlLScgKyBmaWVsZC5pZCkudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHByZXZpZXcgdG8gbGFiZWxcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2tleXVwIGNoYW5nZScsICdbbmFtZT1cImxhYmVsXCJdJywgZnVuY3Rpb24oZSkge1xuICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKSkudGV4dCgkKGUudGFyZ2V0KS52YWwoKSk7XG4gICAgfSk7XG5cbiAgICAvLyByZW1vdmUgZXJyb3Igc3R5bGluZyB3aGVuIHVzZXJzIHRyaWVzIHRvIGNvcnJlY3QgbWlzdGFrZVxuICAgICRzb3J0YWJsZUZpZWxkcy5kZWxlZ2F0ZSgnaW5wdXQuZXJyb3InLCAna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBwcmV2aWV3IGZvciBkZXNjcmlwdGlvblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbigna2V5dXAnLCAnaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0ICRmaWVsZCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XG4gICAgICBsZXQgY2xvc2VzdFRvb2xUaXAgPSAkKCcudG9vbHRpcC1lbGVtZW50JywgJGZpZWxkKTtcbiAgICAgIGxldCB0dFZhbCA9ICQoZS50YXJnZXQpLnZhbCgpO1xuICAgICAgaWYgKHR0VmFsICE9PSAnJykge1xuICAgICAgICBpZiAoIWNsb3Nlc3RUb29sVGlwLmxlbmd0aCkge1xuICAgICAgICAgIGxldCB0dCA9IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtZWxlbWVudFwiIHRvb2x0aXA9XCIke3R0VmFsfVwiPj88L3NwYW4+YDtcbiAgICAgICAgICAkKCcuZmllbGQtbGFiZWwnLCAkZmllbGQpLmFmdGVyKHR0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9zZXN0VG9vbFRpcC5hdHRyKCd0b29sdGlwJywgdHRWYWwpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNsb3Nlc3RUb29sVGlwLmxlbmd0aCkge1xuICAgICAgICAgIGNsb3Nlc3RUb29sVGlwLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlJywgJy5mbGQtbXVsdGlwbGUnLCBlID0+IHtcbiAgICAgIGxldCBuZXdUeXBlID0gZS50YXJnZXQuY2hlY2tlZCA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xuXG4gICAgICAkKGUudGFyZ2V0KVxuICAgICAgLnBhcmVudHMoJy5mb3JtLWVsZW1lbnRzOmVxKDApJylcbiAgICAgIC5maW5kKCcuc29ydGFibGUtb3B0aW9ucyBpbnB1dC5vcHRpb24tc2VsZWN0ZWQnKVxuICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGUudGFyZ2V0LnR5cGUgPSBuZXdUeXBlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JtYXQgbmFtZSBhdHRyaWJ1dGVcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2JsdXInLCAnaW5wdXQuZmxkLW5hbWUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IF9oZWxwZXJzLnNhZmVuYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgJChlLnRhcmdldClcbiAgICAgICAgLmFkZENsYXNzKCdmaWVsZC1lcnJvcicpXG4gICAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsIG9wdHMubWVzc2FnZXMuY2Fubm90QmVFbXB0eSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnZmllbGQtZXJyb3InKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignYmx1cicsICdpbnB1dC5mbGQtbWF4bGVuZ3RoJywgZSA9PiB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IF9oZWxwZXJzLmZvcmNlTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIENvcHkgZmllbGRcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmljb24tY29weScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBjdXJyZW50SXRlbSA9ICQoZS50YXJnZXQpLnBhcmVudCgpLnBhcmVudCgnbGknKTtcbiAgICAgIGxldCAkY2xvbmUgPSBjbG9uZUl0ZW0oY3VycmVudEl0ZW0pO1xuICAgICAgJGNsb25lLmluc2VydEFmdGVyKGN1cnJlbnRJdGVtKTtcbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGNsb25lKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIERlbGV0ZSBmaWVsZFxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuZGVsZXRlLWNvbmZpcm0nLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgICAgICB9O1xuXG4gICAgICBsZXQgZGVsZXRlSUQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpLmF0dHIoJ2lkJyk7XG4gICAgICBjb25zdCAkZmllbGQgPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZUlEKSk7XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vZGFsQ2xvc2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBzdXJlIHRoZXkgd2FudCB0byByZW1vdmUgdGhlIGZpZWxkXG4gICAgICBpZiAob3B0cy5maWVsZFJlbW92ZVdhcm4pIHtcbiAgICAgICAgbGV0IHdhcm5IMyA9IHV0aWxzLm1hcmt1cCgnaDMnLCBvcHRzLm1lc3NhZ2VzLndhcm5pbmcpO1xuICAgICAgICBsZXQgd2Fybk1lc3NhZ2UgPSB1dGlscy5tYXJrdXAoJ3AnLCBvcHRzLm1lc3NhZ2VzLmZpZWxkUmVtb3ZlV2FybmluZyk7XG4gICAgICAgIF9oZWxwZXJzLmNvbmZpcm0oW3dhcm5IMywgd2Fybk1lc3NhZ2VdLCAoKSA9PlxuICAgICAgICAgIF9oZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKSwgY29vcmRzKTtcbiAgICAgICAgJGZpZWxkLmFkZENsYXNzKCdkZWxldGluZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2hlbHBlcnMucmVtb3ZlRmllbGQoZGVsZXRlSUQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIGJ1dHRvbiBzdHlsZSBzZWxlY3Rpb25cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJy5zdHlsZS13cmFwIGJ1dHRvbicsIGUgPT4ge1xuICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoZS50YXJnZXQpO1xuICAgICAgbGV0IHN0eWxlVmFsID0gJGJ1dHRvbi52YWwoKTtcbiAgICAgIGxldCAkYnRuU3R5bGUgPSAkYnV0dG9uLnBhcmVudCgpLnByZXYoJy5idG4tc3R5bGUnKTtcbiAgICAgICRidG5TdHlsZS52YWwoc3R5bGVWYWwpO1xuICAgICAgJGJ1dHRvbi5zaWJsaW5ncygnLmJ0bicpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgJGJ1dHRvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGJ0blN0eWxlLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJlcXVpcmVkIGFzdGVyaXNrXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuZmxkLXJlcXVpcmVkJywgZSA9PiB7XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5yZXF1aXJlZC1hc3RlcmlzaycpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJvbGVzIHZpc2liaWxpdHlcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJ2lucHV0LmZsZC1hY2Nlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgcm9sZXMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5hdmFpbGFibGUtcm9sZXMnKTtcbiAgICAgIGxldCBlbmFibGVSb2xlc0NCID0gJChlLnRhcmdldCk7XG4gICAgICByb2xlcy5zbGlkZVRvZ2dsZSgyNTAsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWVuYWJsZVJvbGVzQ0IuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCByb2xlcykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIGFkZCBuZXcgb3B0aW9uc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnLmFkZC1vcHQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgJG9wdGlvbldyYXAgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZmllbGQtb3B0aW9ucycpO1xuICAgICAgbGV0ICRtdWx0aXBsZSA9ICQoJ1tuYW1lPVwibXVsdGlwbGVcIl0nLCAkb3B0aW9uV3JhcCk7XG4gICAgICBsZXQgJGZpcnN0T3B0aW9uID0gJCgnLm9wdGlvbi1zZWxlY3RlZDplcSgwKScsICRvcHRpb25XcmFwKTtcbiAgICAgIGxldCBpc011bHRpcGxlID0gZmFsc2U7XG5cbiAgICAgIGlmICgkbXVsdGlwbGUubGVuZ3RoKSB7XG4gICAgICAgIGlzTXVsdGlwbGUgPSAkbXVsdGlwbGUucHJvcCgnY2hlY2tlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNNdWx0aXBsZSA9ICgkZmlyc3RPcHRpb24uYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5hbWUgPSAkZmlyc3RPcHRpb24uYXR0cignbmFtZScpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRvcHRpb25XcmFwKS5hcHBlbmQoc2VsZWN0RmllbGRPcHRpb25zKG5hbWUsIGZhbHNlLCBpc011bHRpcGxlKSk7XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlb3ZlciBtb3VzZW91dCcsICcucmVtb3ZlLCAuZGVsLWJ1dHRvbicsIGUgPT5cbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJykudG9nZ2xlQ2xhc3MoJ2RlbGV0ZScpKTtcblxuICAgIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgICAvLyBWaWV3IFhNTFxuICAgICAgLy8gbGV0IHhtbEJ1dHRvbiA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZnJtYklEICsgJy12aWV3LWRhdGEnKSk7XG4gICAgICAvLyB4bWxCdXR0b24uY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyAgIF9oZWxwZXJzLnNob3dEYXRhKCk7XG4gICAgICAvLyB9KTtcblxuICAgICAgLy8gQ2xlYXIgYWxsIGZpZWxkcyBpbiBmb3JtIGVkaXRvclxuICAgICAgLy8gbGV0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZnJtYklEfS1jbGVhci1hbGxgKTtcbiAgICAgIC8vIGNsZWFyQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAvLyAgIGxldCBmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgICAgLy8gICBsZXQgYnV0dG9uUG9zaXRpb24gPSBjbGVhckJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIC8vICAgbGV0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIC8vICAgbGV0IGNvb3JkcyA9IHtcbiAgICAgIC8vICAgICBwYWdlWDogYnV0dG9uUG9zaXRpb24ubGVmdCArIChidXR0b25Qb3NpdGlvbi53aWR0aCAvIDIpLFxuICAgICAgLy8gICAgIHBhZ2VZOiAoYnV0dG9uUG9zaXRpb24udG9wIC0gYm9keVJlY3QudG9wKSAtIDEyXG4gICAgICAvLyAgIH07XG5cbiAgICAgIC8vICAgaWYgKGZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIC8vICAgICBfaGVscGVycy5jb25maXJtKG9wdHMubWVzc2FnZXMuY2xlYXJBbGxNZXNzYWdlLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcygpO1xuICAgICAgLy8gICAgICAgb3B0cy5ub3RpZnkuc3VjY2VzcyhvcHRzLm1lc3NhZ2VzLmFsbEZpZWxkc1JlbW92ZWQpO1xuICAgICAgLy8gICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgLy8gICAgICAgb3B0cy5vbkNsZWFyQWxsKCk7XG4gICAgICAvLyAgICAgfSwgY29vcmRzKTtcbiAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICBfaGVscGVycy5kaWFsb2coJ1RoZXJlIGFyZSBubyBmaWVsZHMgdG8gY2xlYXInLCBjb29yZHMpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9O1xuXG4gICAgICAvLyBTYXZlIElkZWEgVGVtcGxhdGVcbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZybWJJRH0tc2F2ZWApLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAvLyAgIG9wdHMub25TYXZlKF9oZWxwZXJzLnNhdmUoKSk7XG4gICAgICAvLyB9O1xuICAgIH1cblxuICAgIF9oZWxwZXJzLmdldERhdGEoKTtcbiAgICBsb2FkRmllbGRzKCk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMuY3NzKCdtaW4taGVpZ2h0JywgJGNiVUwuaGVpZ2h0KCkpO1xuXG4gICAgLy8gSWYgb3B0aW9uIHNldCwgY29udHJvbHMgd2lsbCByZW1haW4gaW4gdmlldyBpbiBlZGl0b3JcbiAgICBpZiAob3B0cy5zdGlja3lDb250cm9scykge1xuICAgICAgX2hlbHBlcnMuc3RpY2t5Q29udHJvbHMoJHNvcnRhYmxlRmllbGRzKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5sb2FkZWQpO1xuXG4gICAgLy8gTWFrZSBhY3Rpb25zIGFjY2Vzc2libGVcbiAgICBmb3JtQnVpbGRlci5hY3Rpb25zID0ge1xuICAgICAgY2xlYXJGaWVsZHM6IF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcyxcbiAgICAgIHNob3dEYXRhOiBfaGVscGVycy5zaG93RGF0YSxcbiAgICAgIHNhdmU6IF9oZWxwZXJzLnNhdmUsXG4gICAgICBhZGRGaWVsZDogKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBfaGVscGVycy5zdG9wSW5kZXggPSBmb3JtQnVpbGRlci5zdGFnZS5jaGlsZHJlbi5sZW5ndGggPyBpbmRleCA6IHVuZGVmaW5lZDtcbiAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkQWRkZWQpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUZpZWxkOiBfaGVscGVycy5yZW1vdmVGaWVsZCxcbiAgICAgIGdldERhdGE6ICh0eXBlID0gJ2pzJykgPT4ge1xuICAgICAgICBjb25zdCBzdGFnZSA9IGZvcm1CdWlsZGVyLnN0YWdlO1xuICAgICAgICBjb25zdCBoID0gX2hlbHBlcnM7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAganM6ICgpID0+IGgucHJlcERhdGEoc3RhZ2UpLFxuICAgICAgICAgIHhtbDogKCkgPT4gaC54bWxTYXZlKHN0YWdlKSxcbiAgICAgICAgICBqc29uOiAoKSA9PiB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoaC5wcmVwRGF0YShzdGFnZSksIG51bGwsICdcXHQnKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBkYXRhW3R5cGVdKCk7XG4gICAgICB9LFxuICAgICAgc2V0RGF0YTogZm9ybURhdGEgPT4ge1xuICAgICAgICBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMoKTtcbiAgICAgICAgX2hlbHBlcnMuZ2V0RGF0YShmb3JtRGF0YSk7XG4gICAgICAgIGxvYWRGaWVsZHMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9ybUJ1aWxkZXIuaTE4biA9IHtcbiAgICAgIHNldExhbmc6IGFzeW5jIGxvY2FsZSA9PiB7XG4gICAgICAgIGxldCBuZXdMYW5nID0gYXdhaXQgbWkxOG4uc2V0Q3VycmVudC5jYWxsKG1pMThuLCBsb2NhbGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdMYW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1CdWlsZGVyO1xuICB9O1xuXG4gICQuZm4uZm9ybUJ1aWxkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGxldCBlbGVtcyA9IHRoaXM7XG4gICAgcmV0dXJuIGVsZW1zLmVhY2goKGkpID0+IHtcbiAgICAgIGxldCBmb3JtQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcihvcHRpb25zLCBlbGVtc1tpXSk7XG4gICAgICAkKGVsZW1zW2ldKS5kYXRhKCdmb3JtQnVpbGRlcicsIGZvcm1CdWlsZGVyKTtcblxuICAgICAgcmV0dXJuIGZvcm1CdWlsZGVyO1xuICAgIH0pO1xuICB9O1xufSkoalF1ZXJ5KTtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyBzcGVjaWZpYyB0byBmb3JtQnVpbGRlci5cbiAqIENhbGxlZCBmb3JtIGZvcm1CdWlsZGVyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgb3B0c1xuICogQHBhcmFtICB7SW5zdGFuY2V9IGZvcm1CdWlsZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IGhlbHBlciBmdW5jdGlvbnNcbiAqL1xuZnVuY3Rpb24gaGVscGVycyhvcHRzLCBmb3JtQnVpbGRlcikge1xuICBjb25zdCBtaTE4biA9IHJlcXVpcmUoJ21pMThuJykuZGVmYXVsdDtcblxuICBsZXQgX2hlbHBlcnMgPSB7XG4gICAgZG9DYW5jZWw6IGZhbHNlXG4gIH07XG5cbiAgY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG4gIGZvcm1CdWlsZGVyLmV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzLmpzJyk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgY29udmVydHMgbWVzc3kgYGNsI3NzTmFtZXNgIGludG8gdmFsaWQgYGNsYXNzLW5hbWVzYFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IGh5cGhlbmF0ZWQgc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy5tYWtlQ2xhc3NOYW1lID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICByZXR1cm4gdXRpbHMuaHlwaGVuQ2FzZShzdHIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBtb2JpbGUgY2xhc3NcbiAgICogQHRvZG8gZmluZCBjc3Mgb25seSBzb2x1dGlvblxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IE1vYmlsZSBjbGFzcyBhZGRlZCB0byBmb3JtQnVpbGRlclxuICAgKi9cbiAgX2hlbHBlcnMubW9iaWxlQ2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbW9iaWxlQ2xhc3MgPSAnJztcbiAgICAoZnVuY3Rpb24oYSkge1xuICAgICAgaWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSB7XG4gICAgICAgIG1vYmlsZUNsYXNzID0gJyBmYi1tb2JpbGUnO1xuICAgICAgfVxuICAgIH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xuICAgIHJldHVybiBtb2JpbGVDbGFzcztcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBkcmFnIGJlZ2luc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICovXG4gIF9oZWxwZXJzLnN0YXJ0TW92aW5nID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgdWkuaXRlbS5zaG93KCkuYWRkQ2xhc3MoJ21vdmluZycpO1xuICAgIF9oZWxwZXJzLnN0YXJ0SW5kZXggPSAkKCdsaScsIHRoaXMpLmluZGV4KHVpLml0ZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igd2hlbiBhIGRyYWcgZW5kc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICovXG4gIF9oZWxwZXJzLnN0b3BNb3ZpbmcgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICB1aS5pdGVtLnJlbW92ZUNsYXNzKCdtb3ZpbmcnKTtcbiAgICBpZiAoX2hlbHBlcnMuZG9DYW5jZWwpIHtcbiAgICAgICQodWkuc2VuZGVyKS5zb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgICAkKHRoaXMpLnNvcnRhYmxlKCdjYW5jZWwnKTtcbiAgICB9XG4gICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIGpRdWVyeSBVSSBzb3J0YWJsZSBiZWZvcmVTdG9wIGNhbGxiYWNrIHVzZWQgZm9yIGJvdGggbGlzdHMuXG4gICAqIExvZ2ljIGZvciBjYW5jZWxpbmcgdGhlIHNvcnQgb3IgZHJvcC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfaGVscGVycy5iZWZvcmVTdG9wID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG4gICAgbGV0IGxhc3RJbmRleCA9IGZvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBsZXQgY2FuY2VsQXJyYXkgPSBbXTtcbiAgICBfaGVscGVycy5zdG9wSW5kZXggPSB1aS5wbGFjZWhvbGRlci5pbmRleCgpIC0gMTtcblxuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzICYmIHVpLml0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoJ2ZybWItY29udHJvbCcpKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goX2hlbHBlcnMuc3RvcEluZGV4ID09PSAwKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5hcHBlbmQpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goKF9oZWxwZXJzLnN0b3BJbmRleCArIDEpID09PSBsYXN0SW5kZXgpO1xuICAgIH1cblxuICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYWtlIHN0cmluZ3Mgc2FmZSB0byBiZSB1c2VkIGFzIGNsYXNzZXNcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgc3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICBjb252ZXJ0ZXIgc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy5zYWZlbmFtZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvW15hLXpBLVowLTlcXC1dL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdHJpcHMgbm9uLW51bWJlcnMgZnJvbSBhIG51bWJlciBvbmx5IGlucHV0XG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc3RyIHN0cmluZyB3aXRoIHBvc3NpYmxlIG51bWJlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBzdHJpbmcgd2l0aG91dCBudW1iZXJzXG4gICAqL1xuICBfaGVscGVycy5mb3JjZU51bWJlciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgfTtcblxuICAvKipcbiAgICogaGlkZSBhbmQgc2hvdyBtb3VzZSB0cmFja2luZyB0b29sdGlwcywgb25seSB1c2VkIGZvciBkaXNhYmxlZFxuICAgKiBmaWVsZHMgaW4gdGhlIGVkaXRvci5cbiAgICpcbiAgICogQHRvZG8gICByZW1vdmUgb3IgcmVmYWN0b3IgdG8gbWFrZSBiZXR0ZXIgdXNlXG4gICAqIEBwYXJhbSAge09iamVjdH0gdHQgalF1ZXJ5IG9wdGlvbiB3aXRoIG5leHRlZCB0b29sdGlwXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfaGVscGVycy5pbml0VG9vbHRpcCA9IGZ1bmN0aW9uKHR0KSB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHR0LmZpbmQoJy50b29sdGlwJyk7XG4gICAgdHQubW91c2VlbnRlcihmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0b29sdGlwLm91dGVyV2lkdGgoKSA+IDIwMCkge1xuICAgICAgICB0b29sdGlwLmFkZENsYXNzKCdtYXgtd2lkdGgnKTtcbiAgICAgIH1cbiAgICAgIHRvb2x0aXAuY3NzKCdsZWZ0JywgdHQud2lkdGgoKSArIDE0KTtcbiAgICAgIHRvb2x0aXAuc3RvcCh0cnVlLCB0cnVlKS5mYWRlSW4oJ2Zhc3QnKTtcbiAgICB9KS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xuICAgICAgdHQuZmluZCgnLnRvb2x0aXAnKS5zdG9wKHRydWUsIHRydWUpLmZhZGVPdXQoJ2Zhc3QnKTtcbiAgICB9KTtcbiAgICB0b29sdGlwLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gZ2V0IGVsZW1lbnQgdHlwZSBhbmQgc3VidHlwZVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICRmaWVsZFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IHt0eXBlOiAnZmllbGRUeXBlJywgc3VidHlwZTogJ2ZpZWxkU3ViVHlwZSd9XG4gICAqL1xuICBfaGVscGVycy5nZXRUeXBlcyA9IGZ1bmN0aW9uKCRmaWVsZCkge1xuICAgIGxldCB0eXBlcyA9IHtcbiAgICAgICAgdHlwZTogJGZpZWxkLmF0dHIoJ3R5cGUnKVxuICAgICAgfTtcbiAgICBsZXQgc3VidHlwZSA9ICQoJy5mbGQtc3VidHlwZScsICRmaWVsZCkudmFsKCk7XG5cbiAgICBpZiAoc3VidHlwZSAhPT0gdHlwZXMudHlwZSkge1xuICAgICAgdHlwZXMuc3VidHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgb3B0aW9uIGRhdGEgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZCBqUXVlcnkgZmllbGQgb2JqZWN0XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgQXJyYXkgb2Ygb3B0aW9uIHZhbHVlc1xuICAgKi9cbiAgX2hlbHBlcnMuZmllbGRPcHRpb25EYXRhID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMgbGknLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGxldCAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICRvcHRpb24pLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgIGxhYmVsOiAkKCcub3B0aW9uLWxhYmVsJywgJG9wdGlvbikudmFsKCksXG4gICAgICAgICAgdmFsdWU6ICQoJy5vcHRpb24tdmFsdWUnLCAkb3B0aW9uKS52YWwoKVxuICAgICAgICB9O1xuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5wdXNoKGF0dHJzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBYTUwgc2F2ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZvcm0gc29ydGFibGVGaWVsZHMgbm9kZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHhtbCBpbiBzdHJpbmdcbiAgICovXG4gIF9oZWxwZXJzLnhtbFNhdmUgPSBmdW5jdGlvbihmb3JtKSB7XG4gICAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQgZm9ybURhdGEgPSBfaGVscGVycy5wcmVwRGF0YShmb3JtKTtcbiAgICBsZXQgeG1sID0gWyc8Zm9ybS10ZW1wbGF0ZT5cXG5cXHQ8ZmllbGRzPiddO1xuXG4gICAgdXRpbHMuZm9yRWFjaChmb3JtRGF0YSwgZnVuY3Rpb24oZmllbGRJbmRleCwgZmllbGQpIHtcbiAgICAgIGxldCBmaWVsZENvbnRlbnQgPSBudWxsO1xuXG4gICAgICAvLyBIYW5kbGUgb3B0aW9uc1xuICAgICAgaWYgKGZpZWxkLnR5cGUubWF0Y2goLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXApLykpIHtcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBmaWVsZC52YWx1ZXM7XG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IG0oJ29wdGlvbicsIG9wdGlvbkRhdGFbaV0ubGFiZWwsIG9wdGlvbkRhdGFbaV0pLm91dGVySFRNTDtcbiAgICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdFxcdCcgKyBvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMucHVzaCgnXFxuXFx0XFx0Jyk7XG5cbiAgICAgICAgZmllbGRDb250ZW50ID0gb3B0aW9ucy5qb2luKCcnKTtcbiAgICAgICAgZGVsZXRlIGZpZWxkLnZhbHVlcztcbiAgICAgIH1cblxuICAgICAgbGV0IHhtbEZpZWxkID0gbSgnZmllbGQnLCBmaWVsZENvbnRlbnQsIGZpZWxkKTtcbiAgICAgIHhtbC5wdXNoKCdcXG5cXHRcXHQnICsgeG1sRmllbGQub3V0ZXJIVE1MKTtcbiAgICB9KTtcblxuICAgIHhtbC5wdXNoKCdcXG5cXHQ8L2ZpZWxkcz5cXG48L2Zvcm0tdGVtcGxhdGU+Jyk7XG5cbiAgICByZXR1cm4geG1sLmpvaW4oJycpO1xuICB9O1xuXG4gIF9oZWxwZXJzLnByZXBEYXRhID0gZnVuY3Rpb24oZm9ybSkge1xuICAgIGxldCBmb3JtRGF0YSA9IFtdO1xuXG4gICAgaWYgKGZvcm0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIGJ1aWxkIGRhdGEgb2JqZWN0XG4gICAgICB1dGlscy5mb3JFYWNoKGZvcm0uY2hpbGROb2RlcywgZnVuY3Rpb24oaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGxldCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICBpZiAoISgkZmllbGQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgICAgbGV0IGZpZWxkRGF0YSA9IF9oZWxwZXJzLmdldFR5cGVzKCRmaWVsZCk7XG4gICAgICAgICAgbGV0IHJvbGVWYWxzID0gJCgnLnJvbGVzLWZpZWxkOmNoZWNrZWQnLCBmaWVsZCkubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0pLmdldCgpO1xuXG4gICAgICAgICAgJCgnW2NsYXNzKj1cImZsZC1cIl0nLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UoYXR0ci5uYW1lKTtcbiAgICAgICAgICAgIGZpZWxkRGF0YVtuYW1lXSA9IGF0dHIudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGF0dHIuY2hlY2tlZCA6IGF0dHIudmFsdWU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAocm9sZVZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEucm9sZSA9IHJvbGVWYWxzLmpvaW4oJywnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZERhdGEuY2xhc3NOYW1lID0gZmllbGREYXRhLmNsYXNzTmFtZSB8fCBmaWVsZERhdGEuY2xhc3M7XG5cbiAgICAgICAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZERhdGEuY2xhc3NOYW1lKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5zdHlsZSA9IG1hdGNoWzFdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YSA9IHV0aWxzLnRyaW1PYmooZmllbGREYXRhKTtcbiAgICAgICAgICBmaWVsZERhdGEgPSB1dGlscy5lc2NhcGVBdHRycyhmaWVsZERhdGEpO1xuXG4gICAgICAgICAgbGV0IG11bHRpcGxlRmllbGQgPSBmaWVsZERhdGFcbiAgICAgICAgICAudHlwZS5tYXRjaCgvKHNlbGVjdHxjaGVja2JveC1ncm91cHxyYWRpby1ncm91cCkvKTtcblxuICAgICAgICAgIGlmIChtdWx0aXBsZUZpZWxkKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEudmFsdWVzID0gX2hlbHBlcnMuZmllbGRPcHRpb25EYXRhKCRmaWVsZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH07XG5cbiAgX2hlbHBlcnMuanNvblNhdmUgPSBmb3JtID0+XG4gICAgd2luZG93LkpTT04uc3RyaW5naWZ5KF9oZWxwZXJzLnByZXBEYXRhKGZvcm0pLCBudWxsLCAnXFx0Jyk7XG5cbiAgX2hlbHBlcnMuZ2V0RGF0YSA9IGZvcm1EYXRhID0+IHtcbiAgICBsZXQgZGF0YSA9IGZvcm1EYXRhIHx8IG9wdHMuZm9ybURhdGE7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgc2V0RGF0YSA9IHtcbiAgICAgIHhtbDogZm9ybURhdGEgPT4gdXRpbHMucGFyc2VYTUwoZm9ybURhdGEpLFxuICAgICAganNvbjogZm9ybURhdGEgPT4gd2luZG93LkpTT04ucGFyc2UoZm9ybURhdGEpXG4gICAgfTtcblxuICAgIGZvcm1CdWlsZGVyLmZvcm1EYXRhID0gc2V0RGF0YVtvcHRzLmRhdGFUeXBlXShkYXRhKSB8fCBbXTtcblxuICAgIHJldHVybiBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogU2F2ZXMgYW5kIHJldHVybnMgZm9ybURhdGFcbiAgICogQHJldHVybiB7WE1MfEpTT059IGZvcm1EYXRhXG4gICAqL1xuICBfaGVscGVycy5zYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG5cbiAgICBsZXQgZG9TYXZlID0ge1xuICAgICAgeG1sOiBfaGVscGVycy54bWxTYXZlLFxuICAgICAganNvbjogX2hlbHBlcnMuanNvblNhdmVcbiAgICB9O1xuXG4gICAgLy8gc2F2ZSBhY3Rpb24gZm9yIGN1cnJlbnQgYGRhdGFUeXBlYFxuICAgIGZvcm1CdWlsZGVyLmZvcm1EYXRhID0gZG9TYXZlW29wdHMuZGF0YVR5cGVdKGZvcm0pO1xuXG4gICAgLy8gdHJpZ2dlciBmb3JtU2F2ZWQgZXZlbnRcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5mb3JtU2F2ZWQpO1xuICAgIHJldHVybiBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogaW5jcmVtZW50cyB0aGUgZmllbGQgaWRzIHdpdGggc3VwcG9ydCBmb3IgbXVsdGlwbGUgZWRpdG9yc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkIGZpZWxkIElEXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgaW5jcmVtZW50ZWQgZmllbGQgSURcbiAgICovXG4gIF9oZWxwZXJzLmluY3JlbWVudElkID0gZnVuY3Rpb24oaWQpIHtcbiAgICBsZXQgc3BsaXQgPSBpZC5sYXN0SW5kZXhPZignLScpO1xuICAgIGxldCBuZXdGaWVsZE51bWJlciA9IHBhcnNlSW50KGlkLnN1YnN0cmluZyhzcGxpdCArIDEpKSArIDE7XG4gICAgbGV0IGJhc2VTdHJpbmcgPSBpZC5zdWJzdHJpbmcoMCwgc3BsaXQpO1xuXG4gICAgcmV0dXJuIGAke2Jhc2VTdHJpbmd9LSR7bmV3RmllbGROdW1iZXJ9YDtcbiAgfTtcblxuICAvKipcbiAgICogQ29sbGVjdCBmaWVsZCBhdHRyaWJ1dGUgdmFsdWVzIGFuZCBjYWxsIGZpZWxkUHJldmlldyB0byBnZW5lcmF0ZSBwcmV2aWV3XG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgRE9NIGVsZW1lbnRcbiAgICovXG4gIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkQ2xhc3MgPSBmaWVsZC5hdHRyKCdjbGFzcycpO1xuICAgIGlmIChmaWVsZENsYXNzLmluZGV4T2YoJ3VpLXNvcnRhYmxlLWhhbmRsZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmaWVsZFR5cGUgPSAkKGZpZWxkKS5hdHRyKCd0eXBlJyk7XG4gICAgbGV0ICRwcmV2SG9sZGVyID0gJCgnLnByZXYtaG9sZGVyJywgZmllbGQpO1xuICAgIGxldCBwcmV2aWV3RGF0YSA9IHtcbiAgICAgIHR5cGU6IGZpZWxkVHlwZVxuICAgIH07XG4gICAgbGV0IHByZXZpZXc7XG5cbiAgICAkKCdbY2xhc3MqPVwiZmxkLVwiXScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UodGhpcy5uYW1lKTtcbiAgICAgIHByZXZpZXdEYXRhW25hbWVdID0gdGhpcy50eXBlID09PSAnY2hlY2tib3gnID8gdGhpcy5jaGVja2VkIDogdGhpcy52YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCBzdHlsZSA9ICQoJy5idG4tc3R5bGUnLCBmaWVsZCkudmFsKCk7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBwcmV2aWV3RGF0YS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIGlmIChmaWVsZFR5cGUubWF0Y2goLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXApLykpIHtcbiAgICAgIHByZXZpZXdEYXRhLnZhbHVlcyA9IFtdO1xuICAgICAgcHJldmlld0RhdGEubXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgZmllbGQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgb3B0aW9uID0ge307XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCB0aGlzKS5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJCgnLm9wdGlvbi12YWx1ZScsIHRoaXMpLnZhbCgpO1xuICAgICAgICBvcHRpb24ubGFiZWwgPSAkKCcub3B0aW9uLWxhYmVsJywgdGhpcykudmFsKCk7XG4gICAgICAgIHByZXZpZXdEYXRhLnZhbHVlcy5wdXNoKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2aWV3RGF0YSA9IHV0aWxzLnRyaW1PYmoocHJldmlld0RhdGEpO1xuXG4gICAgcHJldmlld0RhdGEuY2xhc3NOYW1lID0gX2hlbHBlcnMuY2xhc3NOYW1lcyhmaWVsZCwgcHJldmlld0RhdGEpO1xuICAgICQoJy5mbGQtY2xhc3NOYW1lJywgZmllbGQpLnZhbChwcmV2aWV3RGF0YS5jbGFzc05hbWUpO1xuXG4gICAgZmllbGQuZGF0YSgnZmllbGREYXRhJywgcHJldmlld0RhdGEpO1xuICAgIHByZXZpZXcgPSB1dGlscy5nZXRUZW1wbGF0ZShwcmV2aWV3RGF0YSwgb3B0cywgdHJ1ZSk7XG5cbiAgICB1dGlscy5lbXB0eSgkcHJldkhvbGRlclswXSk7XG4gICAgJHByZXZIb2xkZXJbMF0uYXBwZW5kQ2hpbGQocHJldmlldyk7XG4gICAgcHJldmlldy5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZFJlbmRlcmVkKTtcblxuICAgICQoJ2lucHV0W3RvZ2dsZV0nLCAkcHJldkhvbGRlcikua2NUb2dnbGUoKTtcbiAgfTtcblxuICBfaGVscGVycy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQgPSAyNTAsIGltbWVkaWF0ZSA9IGZhbHNlKSB7XG4gICAgbGV0IHRpbWVvdXQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBsZXQgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGEgY3VzdG9tIHRvb2x0aXAgZm9yIGRpc2FibGVkIGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxuICAgKi9cbiAgX2hlbHBlcnMuZGlzYWJsZWRUVCA9IHtcbiAgICBjbGFzc05hbWU6ICdmcm1iLXR0JyxcbiAgICBhZGQ6IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBsZXQgdGl0bGUgPSBvcHRzLm1lc3NhZ2VzLmZpZWxkTm9uRWRpdGFibGU7XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICBsZXQgdHQgPSB1dGlscy5tYXJrdXAoJ3AnLCB0aXRsZSwge2NsYXNzTmFtZTogX2hlbHBlcnMuZGlzYWJsZWRUVC5jbGFzc05hbWV9KTtcbiAgICAgICAgZmllbGQuYXBwZW5kKHR0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICQoJy5mcm1iLXR0JywgZmllbGQpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfaGVscGVycy5jbGFzc05hbWVzID0gZnVuY3Rpb24oZmllbGQsIHByZXZpZXdEYXRhKSB7XG4gICAgbGV0IGk7XG4gICAgbGV0IHR5cGUgPSBwcmV2aWV3RGF0YS50eXBlO1xuICAgIGxldCBzdHlsZSA9IHByZXZpZXdEYXRhLnN0eWxlO1xuICAgIGxldCBjbGFzc05hbWUgPSBmaWVsZFswXS5xdWVyeVNlbGVjdG9yKCcuZmxkLWNsYXNzTmFtZScpLnZhbHVlO1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgbGV0IHR5cGVzID0ge1xuICAgICAgYnV0dG9uOiAnYnRuJyxcbiAgICAgIHN1Ym1pdDogJ2J0bidcbiAgICB9O1xuXG4gICAgbGV0IHByaW1hcnlUeXBlID0gdHlwZXNbdHlwZV07XG5cbiAgICBpZiAocHJpbWFyeVR5cGUpIHtcbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoYCg/Ol58XFxzKSR7cHJpbWFyeVR5cGV9LSguKj8pKD86XFxzfCQpK2AsICdnJyk7XG4gICAgICAgICAgbGV0IG1hdGNoID0gY2xhc3Nlc1tpXS5tYXRjaChyZSk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlICsgJy0nICsgc3R5bGUpO1xuICAgICAgfVxuICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlKTtcbiAgICB9XG5cbiAgICAvLyByZXZlcnNlIHRoZSBhcnJheSB0byBwdXQgY3VzdG9tIGNsYXNzZXMgYXQgZW5kLFxuICAgIC8vIHJlbW92ZSBhbnkgZHVwbGljYXRlcywgY29udmVydCB0byBzdHJpbmcsIHJlbW92ZSB3aGl0ZXNwYWNlXG4gICAgcmV0dXJuIHV0aWxzLnVuaXF1ZShjbGFzc2VzKS5qb2luKCcgJykudHJpbSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW5kIG9wZW4gZGlhbG9nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3ZlcmxheSBFeGlzdGluZyBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGRpYWxvZyAgRXhpc3RpbmcgZGlhbG9nXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUNvbmZpcm0gPSBmdW5jdGlvbihvdmVybGF5LCBkaWFsb2cpIHtcbiAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItb3ZlcmxheScpWzBdO1xuICAgIH1cbiAgICBpZiAoIWRpYWxvZykge1xuICAgICAgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1idWlsZGVyLWRpYWxvZycpWzBdO1xuICAgIH1cbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5tb2RhbENsb3NlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxheW91dCBkYXRhIGJhc2VkIG9uIGNvbnRyb2xQb3NpdGlvbiBvcHRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSBjb250cm9sUG9zaXRpb24gJ2xlZnQnIG9yICdyaWdodCdcbiAgICogQHJldHVybiB7T2JqZWN0fSBsYXlvdXQgb2JqZWN0XG4gICAqL1xuICBfaGVscGVycy5lZGl0b3JMYXlvdXQgPSBmdW5jdGlvbihjb250cm9sUG9zaXRpb24pIHtcbiAgICBsZXQgbGF5b3V0TWFwID0ge1xuICAgICAgbGVmdDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtcmlnaHQnLFxuICAgICAgICBjb250cm9sczogJ3B1bGwtbGVmdCdcbiAgICAgIH0sXG4gICAgICByaWdodDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtbGVmdCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1yaWdodCdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGxheW91dE1hcFtjb250cm9sUG9zaXRpb25dID8gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gOiAnJztcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBvdmVybGF5IHRvIHRoZSBwYWdlLiBVc2VkIGZvciBtb2RhbHMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIE9iamVjdFxuICAgKi9cbiAgX2hlbHBlcnMuc2hvd092ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgb3ZlcmxheSA9IHV0aWxzLm1hcmt1cCgnZGl2JywgbnVsbCwge1xuICAgICAgY2xhc3NOYW1lOiAnZm9ybS1idWlsZGVyLW92ZXJsYXknXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgIG92ZXJsYXkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2hlbHBlcnMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfTtcblxuICAvKipcbiAgICogQ3VzdG9tIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbWVzc2FnZSAgIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7RnVuY30gIHllc0FjdGlvbiBjYWxsYmFjayB0byBmaXJlIGlmIHRoZXkgY29uZmlybVxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgbG9jYXRpb24gdG8gcHV0IHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIEN1c3RvbSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICBSZWZlcmVuY2UgdG8gdGhlIG1vZGFsXG4gICAqL1xuICBfaGVscGVycy5jb25maXJtID0gKG1lc3NhZ2UsIHllc0FjdGlvbiwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSA9PiB7XG4gICAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQgb3ZlcmxheSA9IF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG4gICAgbGV0IHllcyA9IG0oJ2J1dHRvbicsIG9wdHMubWVzc2FnZXMueWVzLCB7XG4gICAgICBjbGFzc05hbWU6ICd5ZXMgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSdcbiAgICB9KTtcbiAgICBsZXQgbm8gPSBtKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLm5vLCB7XG4gICAgICBjbGFzc05hbWU6ICdubyBidG4gYnRuLWRhbmdlciBidG4tc20nXG4gICAgfSk7XG5cbiAgICBuby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHllcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB5ZXNBY3Rpb24oKTtcbiAgICAgIF9oZWxwZXJzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgbGV0IGJ0bldyYXAgPSBtKCdkaXYnLCBbbm8sIHllc10sIHtjbGFzc05hbWU6ICdidXR0b24td3JhcCd9KTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICBsZXQgbWluaU1vZGFsID0gbSgnZGl2JywgW21lc3NhZ2UsIGJ0bldyYXBdLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9KTtcbiAgICBpZiAoIWNvb3Jkcykge1xuICAgICAgY29vcmRzID0ge1xuICAgICAgICBwYWdlWDogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSAvIDIsXG4gICAgICAgIHBhZ2VZOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCkgLyAyXG4gICAgICB9O1xuICAgICAgbWluaU1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWluaU1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uZWQnKTtcbiAgICB9XG5cbiAgICBtaW5pTW9kYWwuc3R5bGUubGVmdCA9IGNvb3Jkcy5wYWdlWCArICdweCc7XG4gICAgbWluaU1vZGFsLnN0eWxlLnRvcCA9IGNvb3Jkcy5wYWdlWSArICdweCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1pbmlNb2RhbCk7XG5cbiAgICB5ZXMuZm9jdXMoKTtcbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQb3B1cCBkaWFsb2cgdGhlIGRvZXMgbm90IHJlcXVpcmUgY29uZmlybWF0aW9uLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8RE9NfEFycmF5fSAgY29udGVudFxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgZmFsc2UgaWYgbm8gY29vcmRzIGFyZSBwcm92aWRlZC4gV2l0aG91dCBjb29yZGluYXRlc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGNlbnRlciBzY3JlZW4uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGNsYXNzTmFtZSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8gdGhlIGRpYWxvZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgZG9tXG4gICAqL1xuICBfaGVscGVycy5kaWFsb2cgPSBmdW5jdGlvbihjb250ZW50LCBjb29yZHMgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycpIHtcbiAgICBfaGVscGVycy5zaG93T3ZlcmxheSgpO1xuXG4gICAgY2xhc3NOYW1lID0gJ2Zvcm0tYnVpbGRlci1kaWFsb2cgJyArIGNsYXNzTmFtZTtcblxuICAgIGxldCBtaW5pTW9kYWwgPSB1dGlscy5tYXJrdXAoJ2RpdicsIGNvbnRlbnQsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgIGlmICghY29vcmRzKSB7XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIC8gMixcbiAgICAgICAgcGFnZVk6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcbiAgICAgIH07XG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pTW9kYWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xuICAgIH1cblxuICAgIG1pbmlNb2RhbC5zdHlsZS5sZWZ0ID0gY29vcmRzLnBhZ2VYICsgJ3B4JztcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWluaU1vZGFsKTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLm1vZGFsT3BlbmVkKTtcblxuICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignZGF0YS1kaWFsb2cnKSAhPT0gLTEpIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLnZpZXdEYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBmaWVsZHMgZnJvbSB0aGUgZm9ybVxuICAgKi9cbiAgX2hlbHBlcnMucmVtb3ZlQWxsZmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQnVpbGRlci5mb3JtSUQpO1xuICAgIGxldCBmaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmZvcm0tZmllbGQnKTtcbiAgICBsZXQgJGZpZWxkcyA9ICQoZmllbGRzKTtcbiAgICBsZXQgbWFya0VtcHR5QXJyYXkgPSBbXTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIG1hcmtFbXB0eUFycmF5LnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmICghbWFya0VtcHR5QXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICBmb3JtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgIGZvcm0ucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvbnRlbnQgPSBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQ7XG4gICAgfVxuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdyZW1vdmluZycpO1xuXG4gICAgbGV0IG91dGVySGVpZ2h0ID0gMDtcbiAgICAkZmllbGRzLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgb3V0ZXJIZWlnaHQgKz0gJCgkZmllbGRzW2ldKS5vdXRlckhlaWdodCgpICsgMztcbiAgICB9KTtcblxuICAgIGZpZWxkc1swXS5zdHlsZS5tYXJnaW5Ub3AgPSAoLW91dGVySGVpZ2h0KSArICdweCc7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGZpZWxkcy5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCkuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZpbmcnKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9LCA0MDApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB1c2VyIHJlLW9yZGVycyB0aGUgZWxlbWVudHMgdGhlaXIgb3JkZXIgc2hvdWxkIGJlIHNhdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGNiVUwgb3VyIGxpc3Qgb2YgZWxlbWVudHNcbiAgICovXG4gIF9oZWxwZXJzLnNldEZpZWxkT3JkZXIgPSBmdW5jdGlvbigkY2JVTCkge1xuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmaWVsZE9yZGVyID0ge307XG4gICAgJGNiVUwuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICBmaWVsZE9yZGVyW2luZGV4XSA9ICQoZWxlbWVudCkuZGF0YSgnYXR0cnMnKS50eXBlO1xuICAgIH0pO1xuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmaWVsZE9yZGVyJywgd2luZG93LkpTT04uc3RyaW5naWZ5KGZpZWxkT3JkZXIpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlb3JkZXIgdGhlIGNvbnRyb2xzIGlmIHRoZSB1c2VyIGhhcyBwcmV2aW91c2x5IG9yZGVyZWQgdGhlbS5cbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGZybWJGaWVsZHNcbiAgICogQHJldHVybiB7QXJyYXl9IG9yZGVyZWQgZmllbGRzXG4gICAqL1xuICBfaGVscGVycy5vcmRlckZpZWxkcyA9IGZ1bmN0aW9uKGZybWJGaWVsZHMpIHtcbiAgICBsZXQgZmllbGRPcmRlciA9IGZhbHNlO1xuICAgIGxldCBuZXdPcmRlckZpZWxkcyA9IFtdO1xuXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgICBmaWVsZE9yZGVyID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZpZWxkT3JkZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZE9yZGVyKSB7XG4gICAgICBsZXQgY29udHJvbE9yZGVyID0gb3B0cy5jb250cm9sT3JkZXIuY29uY2F0KGZybWJGaWVsZHMubWFwKGZpZWxkID0+XG4gICAgICAgIGZpZWxkLmF0dHJzLnR5cGUpKTtcbiAgICAgIGZpZWxkT3JkZXIgPSB1dGlscy51bmlxdWUoY29udHJvbE9yZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5KU09OLnBhcnNlKGZpZWxkT3JkZXIpO1xuICAgICAgZmllbGRPcmRlciA9IE9iamVjdC5rZXlzKGZpZWxkT3JkZXIpLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBmaWVsZE9yZGVyW2ldO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmaWVsZE9yZGVyLmZvckVhY2goKGZpZWxkVHlwZSkgPT4ge1xuICAgICAgbGV0IGZpZWxkID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmF0dHJzLnR5cGUgPT09IGZpZWxkVHlwZTtcbiAgICAgIH0pWzBdO1xuICAgICAgbmV3T3JkZXJGaWVsZHMucHVzaChmaWVsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3T3JkZXJGaWVsZHMuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZSBmaWVsZHMgYmVpbmcgZWRpdGluZ1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YWdlXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUFsbEVkaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0gJCgnPiBsaS5lZGl0aW5nJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgIGNvbnN0IHRvZ2dsZUJ0bnMgPSAkKCcudG9nZ2xlLWZvcm0nLCBmb3JtQnVpbGRlci5zdGFnZSk7XG4gICAgY29uc3QgZWRpdFBhbmVscyA9ICQoJy5mcm0taG9sZGVyJywgZmllbGRzKTtcblxuICAgIHRvZ2dsZUJ0bnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICBmaWVsZHMucmVtb3ZlQ2xhc3MoJ2VkaXRpbmcnKTtcbiAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZHMpLnNob3coKTtcbiAgICBlZGl0UGFuZWxzLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZWRpdCBtb2RlIGZvciB0aGUgZ2l2ZW4gZmllbGRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZElkXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGFuaW1hdGVcbiAgICovXG4gIF9oZWxwZXJzLnRvZ2dsZUVkaXQgPSBmdW5jdGlvbihmaWVsZElkLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gJCgnLnRvZ2dsZS1mb3JtJywgZmllbGQpO1xuICAgIGNvbnN0IGVkaXRQYW5lbCA9ICQoJy5mcm0taG9sZGVyJywgZmllbGQpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcbiAgICB0b2dnbGVCdG4udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnNsaWRlVG9nZ2xlKDI1MCk7XG4gICAgICBlZGl0UGFuZWwuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnRvZ2dsZSgpO1xuICAgICAgZWRpdFBhbmVsLnRvZ2dsZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ29udHJvbHMgZm9sbG93IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIF9oZWxwZXJzLnN0aWNreUNvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0ICRjYldyYXAgPSAkKGZvcm1CdWlsZGVyLmNvbnRyb2xzKS5wYXJlbnQoKTtcbiAgICBjb25zdCAkc3RhZ2VXcmFwID0gJChmb3JtQnVpbGRlci5zdGFnZSkucGFyZW50KCk7XG4gICAgY29uc3QgY2JXaWR0aCA9ICRjYldyYXAud2lkdGgoKTtcbiAgICBjb25zdCBjYlBvc2l0aW9uID0gZm9ybUJ1aWxkZXIuY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0IHNjcm9sbFRvcCA9ICQoZXZ0LnRhcmdldCkuc2Nyb2xsVG9wKCk7XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPiAkc3RhZ2VXcmFwLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBsZXQgY2JTdHlsZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB3aWR0aDogY2JXaWR0aCxcbiAgICAgICAgICB0b3A6ICc1cHgnLFxuICAgICAgICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgbGVmdDogY2JQb3NpdGlvbi5sZWZ0XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNiT2Zmc2V0ID0gJGNiV3JhcC5vZmZzZXQoKTtcbiAgICAgICAgbGV0IHN0YWdlT2Zmc2V0ID0gJHN0YWdlV3JhcC5vZmZzZXQoKTtcbiAgICAgICAgbGV0IGNiQm90dG9tID0gY2JPZmZzZXQudG9wICsgJGNiV3JhcC5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHN0YWdlQm90dG9tID0gc3RhZ2VPZmZzZXQudG9wICsgJHN0YWdlV3JhcC5oZWlnaHQoKTtcblxuICAgICAgICBpZiAoY2JCb3R0b20gPiBzdGFnZUJvdHRvbSAmJiAoY2JPZmZzZXQudG9wICE9PSBzdGFnZU9mZnNldC50b3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3Moe1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgbGVmdDogJ2F1dG8nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2JCb3R0b20gPCBzdGFnZUJvdHRvbSB8fCAoY2JCb3R0b20gPT09IHN0YWdlQm90dG9tICYmIGNiT2Zmc2V0LnRvcCA+IHNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAkY2JXcmFwLmNzcyhjYlN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybUJ1aWxkZXIuY29udHJvbHMucGFyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE9wZW4gYSBkaWFsb2cgd2l0aCB0aGUgZm9ybSdzIGRhdGFcbiAgICovXG4gIF9oZWxwZXJzLnNob3dEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgY29uc3QgZGF0YSA9IHV0aWxzLmVzY2FwZUh0bWwoZm9ybUJ1aWxkZXIuZm9ybURhdGEpO1xuICAgIGNvbnN0IGNvZGUgPSBtKCdjb2RlJywgZGF0YSwge2NsYXNzTmFtZTogYGZvcm1EYXRhLSR7b3B0cy5kYXRhVHlwZX1gfSk7XG5cbiAgICBfaGVscGVycy5kaWFsb2cobSgncHJlJywgY29kZSksIG51bGwsICdkYXRhLWRpYWxvZycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBmaWVsZCBmcm9tIHRoZSBzdGFnZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBmaWVsZElEIElEIG9mIHRoZSBmaWVsZCB0byBiZSByZW1vdmVkXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IGZpZWxkUmVtb3ZlZCByZXR1cm5zIHRydWUgaWYgZmllbGQgaXMgcmVtb3ZlZFxuICAgKi9cbiAgX2hlbHBlcnMucmVtb3ZlRmllbGQgPSAoZmllbGRJRCkgPT4ge1xuICAgIGxldCBmaWVsZFJlbW92ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUJ1aWxkZXIuZm9ybUlEKTtcbiAgICBjb25zdCBmaWVsZHMgPSBmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tZmllbGQnKTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKCdObyBmaWVsZHMgdG8gcmVtb3ZlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZElEKSB7XG4gICAgICBsZXQgYXZhaWxhYmxlSWRzID0gW10uc2xpY2UuY2FsbChmaWVsZHMpLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmlkO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLndhcm4oJ2ZpZWxkSUQgcmVxdWlyZWQgdG8gdXNlIGByZW1vdmVGaWVsZGAgYWN0aW9uLicpO1xuICAgICAgY29uc29sZS53YXJuKCdBdmFpbGFibGUgSURzOiAnICsgYXZhaWxhYmxlSWRzLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJRCk7XG4gICAgY29uc3QgJGZpZWxkID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElEKSk7XG4gICAgaWYgKCFmaWVsZCkge1xuICAgICAgY29uc29sZS53YXJuKCdGaWVsZCBub3QgZm91bmQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAkZmllbGQuc2xpZGVVcCgyNTAsIGZ1bmN0aW9uKCkge1xuICAgICAgJGZpZWxkLnJlbW92ZUNsYXNzKCdkZWxldGluZycpO1xuICAgICAgJGZpZWxkLnJlbW92ZSgpO1xuICAgICAgZmllbGRSZW1vdmVkID0gdHJ1ZTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgIGlmICghZm9ybS5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBsZXQgc3RhZ2VXcmFwID0gZm9ybS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgICAgc3RhZ2VXcmFwLmRhdGFzZXQuY29udGVudCA9IG9wdHMubWVzc2FnZXMuZ2V0U3RhcnRlZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkUmVtb3ZlZCk7XG4gICAgcmV0dXJuIGZpZWxkUmVtb3ZlZDtcbiAgfTtcblxuICBfaGVscGVycy5wcm9jZXNzQWN0aW9uQnV0dG9ucyA9IGJ1dHRvbkRhdGEgPT4ge1xuICAgIGxldCBtID0gdXRpbHMubWFya3VwO1xuICAgIGxldCB7bGFiZWwsIGV2ZW50cywgLi4uYXR0cnN9ID0gYnV0dG9uRGF0YTtcbiAgICBjb25zdCBidXR0b24gPSBtKCdidXR0b24nLCBsYWJlbCwgYXR0cnMpO1xuXG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgZm9yIChsZXQgZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBfaGVscGVycy5wcm9jZXNzU3VidHlwZXMgPSBzdWJ0eXBlT3B0cyA9PiB7XG4gICAgY29uc3Qgc3VidHlwZUZvcm1hdCA9IHN1YnR5cGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxhYmVsOiBtaTE4bi5nZXQoc3VidHlwZSksXG4gICAgICAgICAgdmFsdWU6IHN1YnR5cGVcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRTdWJ0eXBlcyA9IHtcbiAgICAgICAgdGV4dDogWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ2NvbG9yJywgJ3RlbCddLFxuICAgICAgICBoZWFkZXI6IFsnaDEnLCAnaDInLCAnaDMnXSxcbiAgICAgICAgYnV0dG9uOiBbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgICAgICAgcGFyYWdyYXBoOiBbJ3AnLCAnYWRkcmVzcycsICdibG9ja3F1b3RlJywgJ2NhbnZhcycsICdvdXRwdXQnXSxcbiAgICAgICAgdGV4dGFyZWE6IFsndGV4dGFyZWEnLCAncXVpbGwnLCAndGlueW1jZSddXG4gICAgICB9O1xuXG4gICAgICBsZXQgc3VidHlwZXMgPSB1dGlscy5tZXJnZShkZWZhdWx0U3VidHlwZXMsIHN1YnR5cGVPcHRzKTtcblxuICAgICAgZm9yIChsZXQgc3VidHlwZSBpbiBzdWJ0eXBlcykge1xuICAgICAgICBpZiAoc3VidHlwZXMuaGFzT3duUHJvcGVydHkoc3VidHlwZSkpIHtcbiAgICAgICAgICBzdWJ0eXBlc1tzdWJ0eXBlXSA9IHN1YnR5cGVzW3N1YnR5cGVdLm1hcChzdWJ0eXBlRm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VidHlwZXM7XG4gIH07XG5cbiAgcmV0dXJuIF9oZWxwZXJzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG4iLCJjb25zdCBrY1RvZ2dsZSA9ICgpID0+IHtcbiAgY29uc3QgVG9nZ2xlID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgdGhlbWU6ICdmcmVzaCcsXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICBvbjogJ09uJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgb3B0cyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBsZXQgJGtjVG9nZ2xlID0gJCgnPGRpdiBjbGFzcz1cImtjLXRvZ2dsZVwiLz4nKVxuICAgICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbWVudClcbiAgICAgICAgLmFwcGVuZChlbGVtZW50KTtcblxuICAgICRrY1RvZ2dsZS50b2dnbGVDbGFzcygnb24nLCBlbGVtZW50LmlzKCc6Y2hlY2tlZCcpKTtcblxuICAgIGxldCBrY3RPbiA9IGA8ZGl2IGNsYXNzPVwia2N0LW9uXCI+JHtvcHRzLm1lc3NhZ2VzLm9ufTwvZGl2PmA7XG4gICAgbGV0IGtjdE9mZiA9IGA8ZGl2IGNsYXNzPVwia2N0LW9mZlwiPiR7b3B0cy5tZXNzYWdlcy5vZmZ9PC9kaXY+YDtcbiAgICBsZXQga2N0SGFuZGxlID0gJzxkaXYgY2xhc3M9XCJrY3QtaGFuZGxlXCI+PC9kaXY+JztcbiAgICBsZXQga2N0SW5uZXIgPSBgPGRpdiBjbGFzcz1cImtjdC1pbm5lclwiPiR7a2N0T259JHtrY3RIYW5kbGV9JHtrY3RPZmZ9PC9kaXY+YDtcblxuICAgICRrY1RvZ2dsZS5hcHBlbmQoa2N0SW5uZXIpO1xuXG4gICAgJGtjVG9nZ2xlLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgZWxlbWVudC5hdHRyKCdjaGVja2VkJywgIWVsZW1lbnQuYXR0cignY2hlY2tlZCcpKTtcbiAgICAgICRrY1RvZ2dsZS50b2dnbGVDbGFzcygnb24nKTtcbiAgICB9KTtcbiAgfTtcblxuICBqUXVlcnkuZm4ua2NUb2dnbGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gdGhpcztcbiAgICByZXR1cm4gdG9nZ2xlLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IGVsZW1lbnQgPSAkKHRvZ2dsZVtpXSk7XG4gICAgICBpZiAoZWxlbWVudC5kYXRhKCdrY1RvZ2dsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBrY1RvZ2dsZSA9IG5ldyBUb2dnbGUoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICBlbGVtZW50LmRhdGEoJ2tjVG9nZ2xlJywga2NUb2dnbGUpO1xuICAgIH0pO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrY1RvZ2dsZSgpO1xuIiwiLyoqXG4gKiBQb2x5ZmlsbHMgZm9yIG9sZGVyIGJyb3dzZXJzIGFuZCBhZGRlZCBmdW5jdGlvbmFsaXR5XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwb2x5ZmlsbHMoKSB7XG4gIC8vIEVsZW1lbnQucmVtb3ZlKCkgcG9seWZpbGxcbiAgaWYgKCEoJ3JlbW92ZScgaW4gRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRXZlbnQgcG9seWZpbGxcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5FdmVudCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KGV2dCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgfVxuXG4gIC8vIE9iamVjdC5hc3NpZ24gcG9seWZpbGxcbiAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldCA9IE9iamVjdCh0YXJnZXQpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbHMoKTtcbiIsIi8qKlxuICogQ3Jvc3MgZmlsZSB1dGlsaXRpZXMgZm9yIHdvcmtpbmcgd2l0aCBhcnJheXMsXG4gKiBzb3J0aW5nIGFuZCBvdGhlciBmdW4gc3R1ZmZcbiAqIEByZXR1cm4ge09iamVjdH0gZmJVdGlsc1xuICovXG4vLyBmdW5jdGlvbiB1dGlscygpIHtcbiAgY29uc3QgZmJVdGlscyA9IHt9O1xuICB3aW5kb3cuZmJMb2FkZWRTY3JpcHRzID0gW107XG5cbiAgLy8gY2xlYW5lciBzeW50YXggZm9yIHRlc3RpbmcgaW5kZXhPZiBlbGVtZW50XG4gIGZiVXRpbHMuaW5BcnJheSA9IGZ1bmN0aW9uKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIE9iamVjdCB0cmltbWVkIG9mIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy50cmltT2JqID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgeG1sUmVtb3ZlID0gW1xuICAgICAgbnVsbCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgICcnLFxuICAgICAgZmFsc2UsXG4gICAgICAnZmFsc2UnXG4gICAgXTtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoZmJVdGlscy5pbkFycmF5KGF0dHJzW2F0dHJdLCB4bWxSZW1vdmUpKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhdHRyc1thdHRyXSkpIHtcbiAgICAgICAgaWYgKCFhdHRyc1thdHRyXS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgYXR0cmlidXRlIGlzIGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBmYlV0aWxzLnZhbGlkQXR0ciA9IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICBsZXQgaW52YWxpZCA9IFtcbiAgICAgICd2YWx1ZXMnLFxuICAgICAgJ2VuYWJsZU90aGVyJyxcbiAgICAgICdvdGhlcicsXG4gICAgICAnbGFiZWwnLFxuICAgICAgLy8gJ3N0eWxlJyxcbiAgICAgICdzdWJ0eXBlJ1xuICAgIF07XG4gICAgcmV0dXJuICFmYlV0aWxzLmluQXJyYXkoYXR0ciwgaW52YWxpZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gYXR0cnMgb2JqZWN0IGludG8gYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBvYmplY3Qgb2YgYXR0cmlidXRlcyBmb3IgbWFya3VwXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuYXR0clN0cmluZyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSAmJiBmYlV0aWxzLnZhbGlkQXR0cihhdHRyKSkge1xuICAgICAgICBhdHRyID0gZmJVdGlscy5zYWZlQXR0cihhdHRyLCBhdHRyc1thdHRyXSk7XG4gICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyLm5hbWUgKyBhdHRyLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuam9pbignICcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGF0dHJpYnV0ZXMgdG8gbWFya3VwIHNhZmUgc3RyaW5nc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgYXR0cmlidXRlIHZhbHVlXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnNhZmVBdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUobmFtZSk7XG4gICAgbGV0IHZhbFN0cmluZztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5qb2luKCcgJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB2YWxTdHJpbmcgPSBmYlV0aWxzLmVzY2FwZUF0dHIodmFsdWUucmVwbGFjZSgnLCcsICcgJykudHJpbSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlID8gYD1cIiR7dmFsU3RyaW5nfVwiYCA6ICcnO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIGZiVXRpbHMuc2FmZUF0dHJOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGxldCBzYWZlQXR0ciA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJ1xuICAgIH07XG5cbiAgICByZXR1cm4gc2FmZUF0dHJbbmFtZV0gfHwgZmJVdGlscy5oeXBoZW5DYXNlKG5hbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHN0cmluZ3MgaW50byBsb3dlcmNhc2UtaHlwaGVuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuaHlwaGVuQ2FzZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC9eLSsvZywgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0IGEgaHlwaGVuYXRlZCBzdHJpbmcgdG8gY2FtZWxDYXNlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuY2FtZWxDYXNlID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24obSwgdykge1xuICAgICAgcmV0dXJuIHcudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGNvbnRlbnQgdHlwZVxuICAgKiBAcGFyYW0gIHtOb2RlIHwgU3RyaW5nIHwgQXJyYXkgfCBPYmplY3R9IGNvbnRlbnRcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSBmb3IgbWFwcGluZ1xuICAgKi9cbiAgZmJVdGlscy5jb250ZW50VHlwZSA9IGNvbnRlbnQgPT4ge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIGNvbnRlbnQ7XG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdHlwZSA9ICdub2RlJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgIHR5cGUgPSAnYXJyYXknO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50cyB0byBhbiBlbGVtZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudCBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50cyAgb2JqZWN0IGZ1bGwgb2YgZXZlbnRzIGVnLiB7Y2xpY2s6IGV2dCA9PiBjYWxsYmFja31cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZiVXRpbHMuYmluZEV2ZW50cyA9IChlbGVtZW50LCBldmVudHMpID0+IHtcbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICBmb3IgKGxldCBldmVudCBpbiBldmVudHMpIHtcbiAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgd3JhcHBlciB3aGVyZSBuZWVkZWRcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgdGFnXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheXxPYmplY3R9IGNvbnRlbnQgd2Ugd3JhcCB0aGlzXG4gICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgIGF0dHJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIEVsZW1lbnRcbiAgICovXG4gIGZiVXRpbHMubWFya3VwID0gZnVuY3Rpb24odGFnLCBjb250ZW50ID0gJycsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGxldCBjb250ZW50VHlwZSA9IGZiVXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XG4gICAgbGV0IHtldmVudHMsIC4uLmF0dHJzfSA9IGF0dHJpYnV0ZXM7XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICBjb25zdCBhcHBlbmRDb250ZW50ID0ge1xuICAgICAgc3RyaW5nOiAoY29udGVudCkgPT4ge1xuICAgICAgICBmaWVsZC5pbm5lckhUTUwgKz0gY29udGVudDtcbiAgICAgIH0sXG4gICAgICBvYmplY3Q6IChjb25maWcpID0+IHtcbiAgICAgICAgbGV0IHt0YWcsIGNvbnRlbnQsIC4uLmRhdGF9ID0gY29uZmlnO1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoZmJVdGlscy5tYXJrdXAodGFnLCBjb250ZW50LCBkYXRhKSk7XG4gICAgICB9LFxuICAgICAgbm9kZTogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgfSxcbiAgICAgIGFycmF5OiAoY29udGVudCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb250ZW50VHlwZSA9IGZiVXRpbHMuY29udGVudFR5cGUoY29udGVudFtpXSk7XG4gICAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbjogY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50KCk7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50KTtcbiAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudCk7XG4gICAgICB9LFxuICAgICAgdW5kZWZpbmVkOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGFnLCBjb250ZW50LCBhdHRyaWJ1dGVzKTtcbiAgICAgIH0sXG4gICAgfTtcblxuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGxldCBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUoYXR0cik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdLmNhbGwodGhpcywgY29udGVudCk7XG4gICAgfVxuXG4gICAgZmJVdGlscy5iaW5kRXZlbnRzKGZpZWxkLCBldmVudHMpO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuICBjb25zdCBtID0gZmJVdGlscy5tYXJrdXA7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaHRtbCBlbGVtZW50IGF0dHJpYnV0ZXMgdG8ga2V5L3ZhbHVlIG9iamVjdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW0gRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSBleDoge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlQXR0cnMgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgbGV0IGF0dHJzID0gZWxlbS5hdHRyaWJ1dGVzO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgZmJVdGlscy5mb3JFYWNoKGF0dHJzLCBhdHRyID0+IHtcbiAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbYXR0cl0udmFsdWU7XG4gICAgICBpZiAoYXR0clZhbC5tYXRjaCgvZmFsc2V8dHJ1ZS9nKSkge1xuICAgICAgICBhdHRyVmFsID0gKGF0dHJWYWwgPT09ICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJWYWwubWF0Y2goL3VuZGVmaW5lZC9nKSkge1xuICAgICAgICBhdHRyVmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0clZhbCkge1xuICAgICAgICBkYXRhW2F0dHJzW2F0dHJdLm5hbWVdID0gYXR0clZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZpZWxkIG9wdGlvbnMgdG8gb3B0aW9uRGF0YVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkICBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICBvcHRpb25EYXRhIGFycmF5XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKTtcbiAgICBsZXQgb3B0aW9uRGF0YSA9IHt9O1xuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvcHRpb25EYXRhID0gZmJVdGlscy5wYXJzZUF0dHJzKG9wdGlvbnNbaV0pO1xuICAgICAgICBvcHRpb25EYXRhLmxhYmVsID0gb3B0aW9uc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgZGF0YS5wdXNoKG9wdGlvbkRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZSBYTUwgZm9ybURhdGFcbiAgICogQHBhcmFtICB7U3RyaW5nfSB4bWxTdHJpbmdcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgZm9ybURhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VYTUwgPSBmdW5jdGlvbih4bWxTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICAgIGxldCB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbFN0cmluZywgJ3RleHQveG1sJyk7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG5cbiAgICBpZiAoeG1sKSB7XG4gICAgICBsZXQgZmllbGRzID0geG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWVsZCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IGZiVXRpbHMucGFyc2VBdHRycyhmaWVsZHNbaV0pO1xuXG4gICAgICAgIGlmIChmaWVsZHNbaV0uY2hpbGRyZW4gJiYgZmllbGRzW2ldLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBmYlV0aWxzLnBhcnNlT3B0aW9ucyhmaWVsZHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogRXNjYXBlIG1hcmt1cCBzbyBpdCBjYW4gYmUgZGlzcGxheWVkIHJhdGhlciB0aGFuIHJlbmRlcmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaHRtbCBtYXJrdXBcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIGVzY2FwZWQgaHRtbFxuICAgKi9cbiAgZmJVdGlscy5lc2NhcGVIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50ID0gaHRtbDtcbiAgICByZXR1cm4gZXNjYXBlRWxlbWVudC5pbm5lckhUTUw7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGFuIGF0dHJpYnV0ZVxuICBmYlV0aWxzLmVzY2FwZUF0dHIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgbWF0Y2ggPSB7XG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OydcbiAgICB9O1xuXG4gICAgY29uc3QgcmVwbGFjZVRhZyA9IHRhZyA9PiBtYXRjaFt0YWddIHx8IHRhZztcblxuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpID8gc3RyLnJlcGxhY2UoL1tcIiY8Pl0vZywgcmVwbGFjZVRhZykgOiBzdHI7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGF0dHJpYnV0ZXNcbiAgZmJVdGlscy5lc2NhcGVBdHRycyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGF0dHJzW2F0dHJdID0gZmJVdGlscy5lc2NhcGVBdHRyKGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLy8gZm9yRWFjaCB0aGF0IGNhbiBiZSB1c2VkIG9uIG5vZGVMaXN0XG4gIGZiVXRpbHMuZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7IC8vIHBhc3NlcyBiYWNrIHN0dWZmIHdlIG5lZWRcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtICB7QXJyYXl9IGFycmF5ICBhcnJheSB3aXRoIHBvc3NpYmxlIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBhcnJheSB3aXRoIG9ubHkgdW5pcXVlIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGVsZW0sIHBvcywgYXJyKSA9PiB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoZWxlbSkgPT09IHBvcztcbiAgICB9KTtcbiAgfTtcblxuICBmYlV0aWxzLm1ha2VMYWJlbCA9IChkYXRhLCBsYWJlbCA9ICcnLCBkZXNjcmlwdGlvbiA9ICcnKSA9PiB7XG4gICAgbGV0IGxhYmVsQ29udGVudHMgPSBbZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFiZWwpXTtcblxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdyZXF1aXJlZCcpKSB7XG4gICAgICBsYWJlbENvbnRlbnRzLnB1c2gobSgnc3BhbicsICcqJywge2NsYXNzTmFtZTogJ3JlcXVpcmVkJ30pKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJz8nLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndG9vbHRpcC1lbGVtZW50JyxcbiAgICAgICAgICB0b29sdGlwOiBkZXNjcmlwdGlvblxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG0oJ2xhYmVsJywgbGFiZWxDb250ZW50cywge1xuICAgICAgZm9yOiBkYXRhLmlkLFxuICAgICAgY2xhc3NOYW1lOiBgZmItJHtkYXRhLnR5cGV9LWxhYmVsYFxuICAgIH0pO1xuICB9O1xuXG4gIGZiVXRpbHMudGVtcGxhdGVNYXAgPSAodGVtcGxhdGVzLCB0eXBlLCBmYWxsYmFjaykgPT4ge1xuICAgIGxldCB0ZW1wbGF0ZTtcbiAgICBsZXQgdGVtcGxhdGVNYXAgPSBuZXcgTWFwKHRlbXBsYXRlcyk7XG5cbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgdGVtcGxhdGVNYXApIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgaWYoZmJVdGlscy5pbkFycmF5KHR5cGUsIGtleSkpIHtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGtleSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICB0ZW1wbGF0ZSA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBET00gZWxlbWVudHMgZm9yIHNlbGVjdCwgY2hlY2tib3gtZ3JvdXAgYW5kIHJhZGlvLWdyb3VwLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkRGF0YVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICBET00gZWxlbWVudHNcbiAgICovXG4gIGZiVXRpbHMuc2VsZWN0VGVtcGxhdGUgPSAoZmllbGREYXRhKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCBvcHRpb25zID0gW107XG4gICAgbGV0IHt2YWx1ZXMsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbmxpbmUsIG90aGVyLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBsZXQgb3B0aW9uVHlwZSA9IHR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpO1xuICAgIGxldCBpc1NlbGVjdCA9IHR5cGUgPT09ICdzZWxlY3QnO1xuXG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgaWYgKHBsYWNlaG9sZGVyICYmIGlzU2VsZWN0KSB7XG4gICAgICAgIG9wdGlvbnMucHVzaChtKCdvcHRpb24nLCBwbGFjZWhvbGRlciwge1xuICAgICAgICAgIGRpc2FibGVkOiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkOiBudWxsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHtsYWJlbCA9ICcnLCAuLi5vcHRpb25BdHRyc30gPSB2YWx1ZXNbaV07XG5cbiAgICAgICAgb3B0aW9uQXR0cnMuaWQgPSBgJHtkYXRhLmlkfS0ke2l9YDtcblxuICAgICAgICBpZiAoIW9wdGlvbkF0dHJzLnNlbGVjdGVkIHx8IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1NlbGVjdCkge1xuICAgICAgICAgIGxldCBvID0gbSgnb3B0aW9uJywgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFiZWwpLCBvcHRpb25BdHRycyk7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCB3cmFwcGVyQ2xhc3MgPSBvcHRpb25UeXBlO1xuICAgICAgICAgIGlmIChpbmxpbmUpIHtcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzcyArPSAnLWlubGluZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdGlvbkF0dHJzLnR5cGUgPSBvcHRpb25UeXBlO1xuICAgICAgICAgIGxldCBpbnB1dCA9IG0oJ2lucHV0JywgbnVsbCwgT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgb3B0aW9uQXR0cnMpKTtcbiAgICAgICAgICBsZXQgaW5wdXRMYWJlbCA9IG0oJ2xhYmVsJywgW2lucHV0LCBsYWJlbF0sIHtmb3I6IG9wdGlvbkF0dHJzLmlkfSk7XG4gICAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgICBvcHRpb25zLnB1c2god3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1NlbGVjdCAmJiBvdGhlcikge1xuICAgICAgICBsZXQgb3RoZXJPcHRpb25BdHRycyA9IHtcbiAgICAgICAgICBpZDogYCR7ZGF0YS5pZH0tb3RoZXJgLFxuICAgICAgICAgIGNsYXNzTmFtZTogYCR7ZGF0YS5jbGFzc05hbWV9IG90aGVyLW9wdGlvbmAsXG4gICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICBjbGljazogKCkgPT4gZmJVdGlscy5vdGhlck9wdGlvbkNCKG90aGVyT3B0aW9uQXR0cnMuaWQpXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBsZXQgbGFiZWwgPSBtaTE4bi5jdXJyZW50Lm90aGVyO1xuICAgICAgICBsZXQgd3JhcHBlckNsYXNzID0gb3B0aW9uVHlwZTtcbiAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgIHdyYXBwZXJDbGFzcyArPSAnLWlubGluZSc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBvdGhlck9wdGlvbkF0dHJzKTtcbiAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG5cbiAgICAgICAgbGV0IG90aGVyVmFsQXR0cnMgPSB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICBpZDogYCR7b3RoZXJPcHRpb25BdHRycy5pZH0tdmFsdWVgLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ290aGVyLXZhbCdcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG90aGVySW5wdXRzID0gW1xuICAgICAgICAgIG0oJ2lucHV0JywgbnVsbCwgb3B0aW9uQXR0cnMpLFxuICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdPdGhlcicpLFxuICAgICAgICAgIG0oJ2lucHV0JywgbnVsbCwgb3RoZXJWYWxBdHRycylcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBtKCdsYWJlbCcsIG90aGVySW5wdXRzLCB7Zm9yOiBvcHRpb25BdHRycy5pZH0pO1xuICAgICAgICBsZXQgd3JhcHBlciA9IG0oJ2RpdicsIGlucHV0TGFiZWwsIHtjbGFzc05hbWU6IHdyYXBwZXJDbGFzc30pO1xuICAgICAgICBvcHRpb25zLnB1c2god3JhcHBlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGVtcGxhdGVzID0gW1xuICAgICAgWydzZWxlY3QnLFxuICAgICAgICAoKSA9PiBtKG9wdGlvblR5cGUsIG9wdGlvbnMsIGRhdGEpXSxcbiAgICAgIFtbJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10sXG4gICAgICAgICgpID0+IG0oJ2RpdicsIG9wdGlvbnMsIHtjbGFzc05hbWU6IHR5cGV9KV1cbiAgICBdO1xuXG4gICAgcmV0dXJuIGZiVXRpbHMudGVtcGxhdGVNYXAodGVtcGxhdGVzLCB0eXBlKTtcbiAgfTtcblxuICBmYlV0aWxzLmRlZmF1bHRGaWVsZCA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IHtsYWJlbCwgZGVzY3JpcHRpb24sIHN1YnR5cGUsIHR5cGUsIGlkLCBpc1ByZXZpZXcsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGlmIChpZCkge1xuICAgICAgaWYgKGlzUHJldmlldykge1xuICAgICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnLXByZXZpZXcnO1xuICAgICAgfVxuICAgICAgZGF0YS5pZCA9IGRhdGEubmFtZTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICBkYXRhLnRpdGxlID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGlmIChzdWJ0eXBlKSB7XG4gICAgICB0eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gbSh0eXBlLCBsYWJlbCwgZGF0YSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvYWRzIGFuIGFycmF5IG9mIHNjcmlwdHMgdXNpbmcgalF1ZXJ5J3MgYGdldFNjcmlwdGBcbiAgICogQHBhcmFtICB7QXJyYXl9ICBhcnIgICAgc2NyaXB0c1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGggICBvcHRpb25hbCB0byBsb2FkIGZvcm1cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgIGEgcHJvbWlzZVxuICAgKi9cbiAgZmJVdGlscy5nZXRTY3JpcHRzID0gKGFyciwgcGF0aCkgPT4ge1xuICAgIGNvbnN0ICQgPSBqUXVlcnk7XG4gICAgbGV0IF9hcnIgPSAkLm1hcChhcnIsIHNjciA9PiAkLmdldFNjcmlwdCggKHBhdGggfHwgJycpICsgc2NyICkpO1xuICAgIF9hcnIucHVzaCgkLkRlZmVycmVkKCBkZWZlcnJlZCA9PiAkKCBkZWZlcnJlZC5yZXNvbHZlICkpKTtcblxuICAgIHJldHVybiAkLndoZW4oLi4uX2Fycik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgc3R5bGVzaGVldHMgdG8gdGhlIGhlYWRcbiAgICogQHBhcmFtICB7QXJyYXl9IGFyclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGhcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZiVXRpbHMuZ2V0U3R5bGVzID0gKGFyciwgcGF0aCkgPT4ge1xuICAgIGNvbnN0IGFwcGVuZFN0eWxlID0gKGhyZWYpID0+IHtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKHNjciA9PiBhcHBlbmRTdHlsZSgocGF0aCB8fCAnJykgKyBzY3IpKTtcbiAgfTtcblxuICBmYlV0aWxzLmxvbmdUZXh0VGVtcGxhdGUgPSBkYXRhID0+IHtcbiAgICBsZXQge3ZhbHVlLCAuLi5hdHRyc30gPSBkYXRhO1xuICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgIGZpZWxkOiBtKCd0ZXh0YXJlYScsIHZhbHVlLCBhdHRycylcbiAgICB9O1xuICAgIGxldCBlZGl0b3JzID0ge1xuICAgICAgdGlueW1jZToge1xuICAgICAgICBqczogWycvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90aW55bWNlLzQuNC4zL2pxdWVyeS50aW55bWNlLm1pbi5qcyddLFxuICAgICAgICBvblJlbmRlcjogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZpZWxkIHJlbmRlcmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBxdWlsbDoge1xuICAgICAgICBqczogWycvL2Nkbi5xdWlsbGpzLmNvbS8xLjEuMy9xdWlsbC5qcyddLFxuICAgICAgICBjc3M6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuc25vdy5jc3MnXSxcbiAgICAgICAgb25SZW5kZXI6IGV2dCA9PiB7XG4gICAgICAgICAgY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgbmV3IHdpbmRvdy5RdWlsbCh0ZW1wbGF0ZS5maWVsZCwge1xuICAgICAgICAgICAgICBtb2R1bGVzOiB7XG4gICAgICAgICAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgICAgICAgW3snaGVhZGVyJzogWzEsIDIsIGZhbHNlXX1dLFxuICAgICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcbiAgICAgICAgICAgICAgICAgIFsnaW1hZ2UnLCAnY29kZS1ibG9jayddXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogYXR0cnMucGxhY2Vob2xkZXIgfHwgJycsXG4gICAgICAgICAgICAgIHRoZW1lOiAnc25vdydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGZiVXRpbHMuaW5BcnJheShkYXRhLnR5cGUsIHdpbmRvdy5mYkxvYWRlZFNjcmlwdHMpKSB7XG4gICAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmJVdGlscy5nZXRTdHlsZXMoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcyk7XG4gICAgICAgICAgICBmYlV0aWxzLmdldFNjcmlwdHMoZWRpdG9yc1tkYXRhLnR5cGVdLmpzKS5kb25lKCgpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LmZiTG9hZGVkU2NyaXB0cy5wdXNoKGRhdGEudHlwZSk7XG4gICAgICAgICAgICAgIG9uTG9hZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCBlZGl0b3JzWydxdWlsbCddLm9uUmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoZGF0YS50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICB0ZW1wbGF0ZS5vblJlbmRlciA9IGVkaXRvcnNbZGF0YS50eXBlXS5vblJlbmRlcjtcbiAgICAgIHRlbXBsYXRlLmZpZWxkID0gbSgnZGl2JywgbnVsbCwgYXR0cnMpO1xuICAgIH1cblxuICAgIHJldHVybiB7ZmllbGQ6IHRlbXBsYXRlLmZpZWxkLCBvblJlbmRlcjogdGVtcGxhdGUub25SZW5kZXJ9O1xuICB9O1xuXG4gIGZiVXRpbHMuZ2V0VGVtcGxhdGUgPSAoZmllbGREYXRhLCBvcHRzKSA9PiB7XG4gICAgbGV0IHtsYWJlbCwgZGVzY3JpcHRpb24sIHN1YnR5cGUsIGlzUHJldmlldywgb25SZW5kZXIsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCB0ZW1wbGF0ZTtcbiAgICBsZXQgZmllbGQ7XG5cbiAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnLXByZXZpZXcnO1xuICAgIH1cbiAgICBkYXRhLmlkID0gZGF0YS5uYW1lO1xuXG4gICAgaWYgKHN1YnR5cGUpIHtcbiAgICAgIGRhdGEudHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubXVsdGlwbGUgfHwgZGF0YS50eXBlID09PSAnY2hlY2tib3gtZ3JvdXAnKSB7XG4gICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnW10nO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnJlcXVpcmVkKSB7XG4gICAgICBkYXRhLnJlcXVpcmVkID0gbnVsbDtcbiAgICAgIGRhdGFbJ2FyaWEtcmVxdWlyZWQnXSA9ICd0cnVlJztcbiAgICB9XG5cbiAgICBsZXQgZmllbGRMYWJlbCA9IGZiVXRpbHMubWFrZUxhYmVsKGRhdGEsIGxhYmVsLCBkZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgdGVtcGxhdGVzID0gW1xuICAgICAgW1sndGV4dCcsICdwYXNzd29yZCcsICdlbWFpbCcsICdudW1iZXInLCAnZmlsZScsICdjb2xvcicsICdkYXRlJywgJ3RlbCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBtKCdpbnB1dCcsIG51bGwsIGRhdGEpXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbWydidXR0b24nLCAnc3VibWl0JywgJ3Jlc2V0J10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogbSgnYnV0dG9uJywgbGFiZWwsIGRhdGEpLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gZmJVdGlscy5zZWxlY3RUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbWyd0ZXh0YXJlYScsICd0aW55bWNlJywgJ3F1aWxsJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgZmllbGQgPSBmYlV0aWxzLmxvbmdUZXh0VGVtcGxhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBmaWVsZC5maWVsZF0sXG4gICAgICAgICAgICBvblJlbmRlcjogZmllbGQub25SZW5kZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV1cbiAgICAgIF07XG5cbiAgICAgIHRlbXBsYXRlID0gZmJVdGlscy50ZW1wbGF0ZU1hcChcbiAgICAgICAgdGVtcGxhdGVzLFxuICAgICAgICBkYXRhLnR5cGUsXG4gICAgICAgIGZiVXRpbHMuZGVmYXVsdEZpZWxkKGZpZWxkRGF0YSkgLy8gZmFsbGJhY2tcbiAgICAgICk7XG5cbiAgICAgIGlmIChkYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgIGxldCB3cmFwcGVyQXR0cnMgPSB7fTtcbiAgICAgICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgICAgICB3cmFwcGVyQXR0cnMuY2xhc3NOYW1lID1cbiAgICAgICAgICBgZmItJHtkYXRhLnR5cGV9IGZvcm0tZ3JvdXAgZmllbGQtJHtkYXRhLmlkfWA7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGQgPSBmYlV0aWxzLm1hcmt1cCgnZGl2JywgdGVtcGxhdGUuZmllbGQsIHdyYXBwZXJBdHRycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZCA9IGZiVXRpbHMubWFya3VwKCdpbnB1dCcsIG51bGwsIGRhdGEpO1xuICAgICAgfVxuXG4gICAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdmaWVsZFJlbmRlcmVkJywgdGVtcGxhdGUub25SZW5kZXIpO1xuXG4gICAgICByZXR1cm4gZmllbGQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHByZXZpZXcgbWFya3VwXG4gICAqIEBwYXJhbSAge09iamVjdH0gIGZpZWxkRGF0YVxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvcHRzXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IHByZXZpZXdcbiAgICogQHJldHVybiB7U3RyaW5nfSAgcHJldmlldyBtYXJrdXAgZm9yIGZpZWxkXG4gICAqL1xuICBmYlV0aWxzLmZpZWxkUmVuZGVyID0gZnVuY3Rpb24oZmllbGREYXRhLCBvcHRzLCBwcmV2aWV3ID0gZmFsc2UpIHtcbiAgICAgIGxldCBmaWVsZE1hcmt1cCA9ICcnO1xuICAgICAgbGV0IGZpZWxkTGFiZWwgPSAnJztcbiAgICAgIGxldCBvcHRpb25zTWFya3VwID0gJyc7XG4gICAgICBsZXQgZmllbGRMYWJlbFRleHQgPSBmaWVsZERhdGEubGFiZWwgfHwgJyc7XG4gICAgICBsZXQgZmllbGREZXNjID0gZmllbGREYXRhLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgICAgbGV0IGZpZWxkUmVxdWlyZWQgPSAnJztcbiAgICAgIGxldCBmaWVsZE9wdGlvbnMgPSBmaWVsZERhdGEudmFsdWVzO1xuICAgICAgZmllbGREYXRhLmlzUHJldmlldyA9IHByZXZpZXc7XG4gICAgICBsZXQgdGVtcGxhdGUgPSBmYlV0aWxzLmdldFRlbXBsYXRlKGZpZWxkRGF0YSwgb3B0cyk7XG5cbiAgICAgIGZpZWxkRGF0YS5uYW1lID0gcHJldmlldyA/IGZpZWxkRGF0YS5uYW1lICsgJy1wcmV2aWV3JyA6IGZpZWxkRGF0YS5uYW1lO1xuICAgICAgZmllbGREYXRhLmlkID0gZmllbGREYXRhLm5hbWU7XG4gICAgICBpZiAoZmllbGREYXRhLm11bHRpcGxlKSB7XG4gICAgICAgIGZpZWxkRGF0YS5uYW1lID0gZmllbGREYXRhLm5hbWUgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBmaWVsZERhdGEudHlwZSA9IGZpZWxkRGF0YS5zdWJ0eXBlIHx8IGZpZWxkRGF0YS50eXBlO1xuXG4gICAgICBpZiAoZmllbGREYXRhLnJlcXVpcmVkKSB7XG4gICAgICAgIGZpZWxkRGF0YS5yZXF1aXJlZCA9IG51bGw7XG4gICAgICAgIGZpZWxkRGF0YVsnYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgICAgICBmaWVsZFJlcXVpcmVkID0gJzxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPic7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZERhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgaWYgKGZpZWxkRGVzYykge1xuICAgICAgICAgIGZpZWxkRGVzYyA9IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtZWxlbWVudFwiIHRvb2x0aXA9XCIke2ZpZWxkRGVzY31cIj4/PC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRMYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtmaWVsZERhdGEuaWR9XCIgY2xhc3M9XCJmYi0ke2ZpZWxkRGF0YS50eXBlfS1sYWJlbFwiPiR7ZmllbGRMYWJlbFRleHR9ICR7ZmllbGRSZXF1aXJlZH0gJHtmaWVsZERlc2N9PC9sYWJlbD5gO1xuICAgICAgfVxuXG4gICAgICBsZXQgZmllbGRMYWJlbFZhbCA9IGZpZWxkRGF0YS5sYWJlbDtcblxuICAgICAgZGVsZXRlIGZpZWxkRGF0YS5sYWJlbDtcbiAgICAgIGRlbGV0ZSBmaWVsZERhdGEuZGVzY3JpcHRpb247XG5cbiAgICAgIGxldCBmaWVsZERhdGFTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcoZmllbGREYXRhKTtcblxuICAgICAgc3dpdGNoIChmaWVsZERhdGEudHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIGNhc2UgJ3JpY2gtdGV4dCc6XG4gICAgICAgICAgZGVsZXRlIGZpZWxkRGF0YS50eXBlO1xuICAgICAgICAgIGxldCBmaWVsZFZhbCA9IGZpZWxkRGF0YS52YWx1ZSB8fCAnJztcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PHRleHRhcmVhICR7ZmllbGREYXRhU3RyaW5nfT4ke2ZpZWxkVmFsfTwvdGV4dGFyZWE+YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgLy8gICBsZXQgb3B0aW9uQXR0cnNTdHJpbmc7XG4gICAgICAgIC8vICAgZmllbGREYXRhLnR5cGUgPSBmaWVsZERhdGEudHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG5cbiAgICAgICAgLy8gICBpZiAoZmllbGRPcHRpb25zKSB7XG4gICAgICAgIC8vICAgICBpZiAoZmllbGREYXRhLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIC8vICAgICAgIG9wdGlvbnNNYXJrdXAgKz0gYDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQ+JHtmaWVsZERhdGEucGxhY2Vob2xkZXJ9PC9vcHRpb24+YDtcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZE9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgICAgaWYgKCFmaWVsZE9wdGlvbnNbaV0uc2VsZWN0ZWQgfHwgZmllbGREYXRhLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIC8vICAgICAgICAgZGVsZXRlIGZpZWxkT3B0aW9uc1tpXS5zZWxlY3RlZDtcbiAgICAgICAgLy8gICAgICAgfVxuICAgICAgICAvLyAgICAgICBpZiAoIWZpZWxkT3B0aW9uc1tpXS5sYWJlbCkge1xuICAgICAgICAvLyAgICAgICAgIGZpZWxkT3B0aW9uc1tpXS5sYWJlbCA9ICcnO1xuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICAgIG9wdGlvbkF0dHJzU3RyaW5nID0gZmJVdGlscy5hdHRyU3RyaW5nKGZpZWxkT3B0aW9uc1tpXSk7XG4gICAgICAgIC8vICAgICAgIG9wdGlvbnNNYXJrdXAgKz0gYDxvcHRpb24gJHtvcHRpb25BdHRyc1N0cmluZ30+JHtmaWVsZE9wdGlvbnNbaV0ubGFiZWx9PC9vcHRpb24+YDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9XG5cbiAgICAgICAgLy8gICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PHNlbGVjdCAke2ZpZWxkRGF0YVN0cmluZ30+JHtvcHRpb25zTWFya3VwfTwvc2VsZWN0PmA7XG4gICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgIC8vIGNhc2UgJ2NoZWNrYm94LWdyb3VwJzpcbiAgICAgICAgLy8gY2FzZSAncmFkaW8tZ3JvdXAnOlxuICAgICAgICAvLyAgIGxldCBvcHRpb25BdHRycztcbiAgICAgICAgLy8gICBmaWVsZERhdGEudHlwZSA9IGZpZWxkRGF0YS50eXBlLnJlcGxhY2UoJy1ncm91cCcsICcnKTtcblxuICAgICAgICAvLyAgIGlmIChmaWVsZERhdGEudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAvLyAgICAgZmllbGREYXRhLm5hbWUgPSBmaWVsZERhdGEubmFtZSArICdbXSc7XG4gICAgICAgIC8vICAgfVxuXG4gICAgICAgIC8vICAgaWYgKGZpZWxkT3B0aW9ucykge1xuICAgICAgICAvLyAgICAgbGV0IG9wdGlvbkF0dHJzU3RyaW5nO1xuXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgICBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe3ZhbHVlOiAnJywgbGFiZWw6ICcnfSwgZmllbGREYXRhLCBmaWVsZE9wdGlvbnNbaV0pO1xuXG4gICAgICAgIC8vICAgICAgIGlmIChvcHRpb25BdHRycy5zZWxlY3RlZCkge1xuICAgICAgICAvLyAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcbiAgICAgICAgLy8gICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gbnVsbDtcbiAgICAgICAgLy8gICAgICAgfVxuXG4gICAgICAgIC8vICAgICAgIG9wdGlvbkF0dHJzLmlkID0gZmllbGREYXRhLmlkICsgJy0nICsgaTtcbiAgICAgICAgLy8gICAgICAgb3B0aW9uQXR0cnNTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcob3B0aW9uQXR0cnMpO1xuICAgICAgICAvLyAgICAgICBvcHRpb25zTWFya3VwICs9IGA8aW5wdXQgJHtvcHRpb25BdHRyc1N0cmluZ30gLz4gPGxhYmVsIGZvcj1cIiR7b3B0aW9uQXR0cnMuaWR9XCI+JHtvcHRpb25BdHRycy5sYWJlbH08L2xhYmVsPjxicj5gO1xuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vICAgICBpZiAoZmllbGREYXRhLm90aGVyKSB7XG4gICAgICAgIC8vICAgICAgIGxldCBvdGhlck9wdGlvbkF0dHJzID0ge1xuICAgICAgICAvLyAgICAgICAgIGlkOiBmaWVsZERhdGEuaWQgKyAnLScgKyAnb3RoZXInLFxuICAgICAgICAvLyAgICAgICAgIGNsYXNzTmFtZTogZmllbGREYXRhLmNsYXNzTmFtZSArICcgb3RoZXItb3B0aW9uJyxcbiAgICAgICAgLy8gICAgICAgICBvbmNsaWNrOiBgZmJVdGlscy5vdGhlck9wdGlvbkNCKCcke2ZpZWxkRGF0YS5pZH0tb3RoZXInKWBcbiAgICAgICAgLy8gICAgICAgfTtcblxuICAgICAgICAvLyAgICAgICBvcHRpb25BdHRyc1N0cmluZyA9IGZiVXRpbHMuYXR0clN0cmluZyhPYmplY3QuYXNzaWduKHt9LCBmaWVsZERhdGEsIG90aGVyT3B0aW9uQXR0cnMpKTtcblxuICAgICAgICAvLyAgICAgICBvcHRpb25zTWFya3VwICs9IGA8aW5wdXQgJHtvcHRpb25BdHRyc1N0cmluZ30gLz4gPGxhYmVsIGZvcj1cIiR7b3RoZXJPcHRpb25BdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXMub3RoZXJ9PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIiR7ZmllbGREYXRhLm5hbWV9XCIgaWQ9XCIke290aGVyT3B0aW9uQXR0cnMuaWR9LXZhbHVlXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgLz5gO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PGRpdiBjbGFzcz1cIiR7ZmllbGREYXRhLnR5cGV9LWdyb3VwXCI+JHtvcHRpb25zTWFya3VwfTwvZGl2PmA7XG4gICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgIC8vIGNhc2UgJ3RleHQnOlxuICAgICAgICAvLyBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgIC8vIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgLy8gY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgLy8gY2FzZSAnZmlsZSc6XG4gICAgICAgIC8vIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgIC8vIGNhc2UgJ2RhdGUnOlxuICAgICAgICAvLyBjYXNlICd0ZWwnOlxuICAgICAgICAvLyBjYXNlICdhdXRvY29tcGxldGUnOlxuICAgICAgICAvLyAgIGZpZWxkTWFya3VwID0gYCR7ZmllbGRMYWJlbH0gPGlucHV0ICR7ZmllbGREYXRhU3RyaW5nfT5gO1xuICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlICdjb2xvcic6XG4gICAgICAgIC8vICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfSA8aW5wdXQgJHtmaWVsZERhdGFTdHJpbmd9PiAke29wdHMubWVzc2FnZXMuc2VsZWN0Q29sb3J9YDtcbiAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgY2FzZSAnc3VibWl0JzpcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGA8YnV0dG9uICR7ZmllbGREYXRhU3RyaW5nfT4ke2ZpZWxkTGFiZWxWYWx9PC9idXR0b24+YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYDxpbnB1dCAke2ZpZWxkRGF0YVN0cmluZ30+ICR7ZmllbGRMYWJlbH1gO1xuXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YS50b2dnbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGREYXRhLmlkKSkua2NUb2dnbGUoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYDwke2ZpZWxkRGF0YS50eXBlfSAke2ZpZWxkRGF0YVN0cmluZ30+JHtmaWVsZExhYmVsVmFsfTwvJHtmaWVsZERhdGEudHlwZX0+YDtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkRGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gZmllbGREYXRhLmlkID8gYGZiLSR7ZmllbGREYXRhLnR5cGV9IGZvcm0tZ3JvdXAgZmllbGQtJHtmaWVsZERhdGEuaWR9YCA6ICcnO1xuICAgICAgICBmaWVsZE1hcmt1cCA9IGZiVXRpbHMubWFya3VwKCdkaXYnLCB0ZW1wbGF0ZSwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRNYXJrdXAgPSBmYlV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBmaWVsZERhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmllbGRNYXJrdXA7XG4gICAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIG90aGVyIG9wdGlvbi5cbiAgICogVG9nZ2xlcyB0aGUgaGlkZGVuIHRleHQgYXJlYSBmb3IgXCJvdGhlclwiIG9wdGlvbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBvdGhlcklkIGlkIG9mIHRoZSBcIm90aGVyXCIgb3B0aW9uIGlucHV0XG4gICAqL1xuICBmYlV0aWxzLm90aGVyT3B0aW9uQ0IgPSAob3RoZXJJZCkgPT4ge1xuICAgIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdGhlcklkKTtcbiAgICBjb25zdCBvdGhlcklucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtvdGhlcklkfS12YWx1ZWApO1xuXG4gICAgaWYgKG90aGVySW5wdXQuY2hlY2tlZCkge1xuICAgICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDYXBpdGFsaXplcyBhIHN0cmluZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciB1bmNhcGl0YWxpemVkIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHN0ciBjYXBpdGFsaXplZCBzdHJpbmdcbiAgICovXG4gIGZiVXRpbHMuY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcYlxcdy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgIHJldHVybiBtLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgfTtcblxuXG5mYlV0aWxzLm1lcmdlID0gKG9iajEsIG9iajIpID0+IHtcbiAgbGV0IG1lcmdlZE9iaiA9IE9iamVjdC5hc3NpZ24oe30sIG9iajEsIG9iajIpO1xuICBmb3IgKGxldCBwcm9wIGluIG9iajIpIHtcbiAgICBpZiAobWVyZ2VkT2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmoyW3Byb3BdKSkge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBBcnJheS5pc0FycmF5KG9iajFbcHJvcF0pID8gZmJVdGlscy51bmlxdWUob2JqMVtwcm9wXS5jb25jYXQob2JqMltwcm9wXSkpIDogb2JqMltwcm9wXTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iajJbcHJvcF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IGZiVXRpbHMubWVyZ2Uob2JqMVtwcm9wXSwgb2JqMltwcm9wXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBvYmoyW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VkT2JqO1xufTtcblxuLyoqXG4gKiBVdGlsIHRvIHJlbW92ZSBjb250ZW50cyBvZiBET00gT2JqZWN0XG4gKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBlbGVtZW50IHdpdGggaXRzIGNoaWxkcmVuIHJlbW92ZWRcbiAqL1xuZmJVdGlscy5lbXB0eSA9IGVsZW1lbnQgPT4ge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZmJVdGlscy5ub29wID0gKCkgPT4gbnVsbDtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZiVXRpbHM7XG4iXX0=
