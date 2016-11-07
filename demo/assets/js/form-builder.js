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
                stickyControls: {
                  enable: true,
                  offset: {
                    top: 5,
                    bottom: 'auto',
                    right: 'auto'
                  }

                },
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

                // let $fields = $('li.form-field:not(.disabled)', $sortableFields);
                // $fields.each(i => _helpers.updatePreview($($fields[i])));

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
              if (opts.stickyControls.enable) {
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
          top: opts.stickyControls.offset.top,
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
window.fbLoaded = {
  js: [],
  css: []
};

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
 * @param  {Array|String}  scriptScr    scripts
 * @param  {String} path   optional to load form
 * @return {Promise}       a promise
 */
fbUtils.getScripts = function (scriptScr, path) {
  var $ = jQuery;
  var _arr = [];

  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr];
  }

  if (!fbUtils.isCached(scriptScr)) {
    _arr = $.map(scriptScr, function (src) {
      var options = {
        dataType: 'script',
        cache: true,
        url: (path || '') + src
      };
      return $.ajax(options).done(function () {
        return window.fbLoaded.js.push(src);
      });
    });
  }

  _arr.push($.Deferred(function (deferred) {
    return $(deferred.resolve);
  }));

  return $.when.apply($, (0, _toConsumableArray3.default)(_arr));
};

/**
 * Checks if remote resource is already loaded
 * @param  {String|Array} src  url of remote script or css
 * @param  {String}       type       'js' or 'css'
 * @return {Boolean}      isCached
 */
fbUtils.isCached = function (src) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js';

  var isCached = false;
  var cache = window.fbLoaded[type];
  if (Array.isArray(src)) {
    isCached = src.every(function (s) {
      return fbUtils.inArray(s, cache);
    });
  } else {
    isCached = fbUtils.inArray(src, cache);
  }
  return isCached;
};

/**
 * Appends stylesheets to the head
 * @param  {Array} scriptScr
 * @param  {String} path
 * @return {void}
 */
fbUtils.getStyles = function (scriptScr, path) {
  if (fbUtils.isCached(scriptScr, 'css')) {
    return;
  }
  var appendStyle = function appendStyle(href) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    window.fbLoaded.css.push(href);
  };
  scriptScr.forEach(function (src) {
    return appendStyle((path || '') + src);
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
      js: ['//cdn.tinymce.com/4/tinymce.min.js'],
      onRender: function onRender(evt) {
        for (template.field.id in window.tinymce.editors) {
          window.tinymce.editors[template.field.id].remove();
        }
        window.tinymce.init({
          target: template.field,
          height: 250,
          plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table contextmenu paste code'],
          toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
        });
      }
    },
    quill: {
      js: ['//cdn.quilljs.com/1.1.3/quill.js'],
      css: ['//cdn.quilljs.com/1.1.3/quill.snow.css'],
      onRender: function onRender(evt) {
        new window.Quill(template.field, {
          modules: {
            toolbar: [[{ 'header': [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']]
          },
          placeholder: attrs.placeholder || '',
          theme: 'snow'
        });
      }
    }
  };

  if (data.type !== 'textarea') {
    template.onRender = editors[data.type].onRender;
  }
  if (data.type === 'quill') {
    template.field = m('div', null, attrs);
  }

  var onRender = function onRender() {
    if (editors[data.type]) {
      document.removeEventListener('fieldRendered', onRender);

      if (editors[data.type].css) {
        fbUtils.getStyles(editors[data.type].css);
      }
      if (editors[data.type].js && !fbUtils.isCached(editors[data.type].js)) {
        fbUtils.getScripts(editors[data.type].js).done(template.onRender);
      } else {
        template.onRender();
      }
    }
  };

  return { field: template.field, onRender: onRender };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vZGlzdC9taTE4bi5taW4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvZGVlcC1leHRlbmQvbGliL2RlZXAtZXh0ZW5kLmpzIiwibm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJzcmMvanMvZXZlbnRzLmpzIiwic3JjL2pzL2Zvcm0tYnVpbGRlci5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL2tjLXRvZ2dsZS5qcyIsInNyYy9qcy9wb2x5ZmlsbHMuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN3ZEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LENBQWxCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsU0FBTyxTQUFQO0FBQ0QsQ0FkRDs7QUFnQkE7Ozs7O0FBS0EsUUFBUSxLQUFSLEdBQWdCLG1CQUFXO0FBQ3pCLFNBQU8sUUFBUSxVQUFmLEVBQTJCO0FBQ3pCLFlBQVEsV0FBUixDQUFvQixRQUFRLFVBQTVCO0FBQ0Q7QUFDRCxTQUFPLE9BQVA7QUFDRCxDQUxEOztBQU9BLFFBQVEsSUFBUixHQUFlO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBZjs7QUFHQSxPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXG4gKiBtaTE4biAtIGh0dHBzOi8vZ2l0aHViLmNvbS9EcmFnZ2FibGUvbWkxOG5cbiAqIFZlcnNpb246IDAuMy4yXG4gKiBBdXRob3I6IEtldmluIENoYXBwZWxsIDxrZXZpbi5iLmNoYXBwZWxsQGdtYWlsLmNvbT4gKGh0dHA6Ly9rZXZpbi1jaGFwcGVsbC5jb20pXG4gKi9cbm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgZT17fTtyZXR1cm4gbi5tPXQsbi5jPWUsbi5wPVwiZGlzdC9cIixuKDApfShbZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1lKDQ1KSx1PXIobyksaT1lKDM5KSxmPXIoaSksYz1lKDQzKSxhPXIoYykscz1lKDQ0KSxsPXIocykscD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXsoMCxhW1wiZGVmYXVsdFwiXSkodGhpcyx0KTt2YXIgbj17bG9jYXRpb246XCJhc3NldHMvbGFuZy9cIixsYW5nczpbXCJlbi1VU1wiLFwiZXMtRVNcIl0sbG9jYWxlOlwiZW4tVVNcIixwcmVsb2FkZWQ6e319LGU9dGhpcztlLmluaXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY29uZmlnPSgwLGZbXCJkZWZhdWx0XCJdKSh7fSxuLHQpLGUubGFuZ3M9KDAsZltcImRlZmF1bHRcIl0pKHt9LGUuY29uZmlnLnByZWxvYWRlZCksZS5sb2NhbGU9ZS5jb25maWcubG9jYWxlfHxlLmNvbmZpZy5sYW5nc1swXSxlLnNldEN1cnJlbnQoZS5sb2NhbGUpfX1yZXR1cm4oMCxsW1wiZGVmYXVsdFwiXSkodCxbe2tleTpcImdldFZhbHVlXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY3VycmVudCYmdGhpcy5jdXJyZW50W3RdfHx0fX0se2tleTpcIm1ha2VTYWZlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49e1wie1wiOlwiXFxcXHtcIixcIn1cIjpcIlxcXFx9XCIsXCJ8XCI6XCJcXFxcfFwifTtyZXR1cm4gdD10LnJlcGxhY2UoL1xce3xcXH18XFx8L2csZnVuY3Rpb24odCl7cmV0dXJuIG5bdF19KSxuZXcgUmVnRXhwKHQsXCJnXCIpfX0se2tleTpcInB1dFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuY3VycmVudFt0XT1ufX0se2tleTpcImdldFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9dGhpcyxyPXRoaXMuZ2V0VmFsdWUodCksbz1yLm1hdGNoKC9cXHtbXlxcfV0rP1xcfS9nKSxpPXZvaWQgMDtpZihuJiZvKWlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIG4/XCJ1bmRlZmluZWRcIjooMCx1W1wiZGVmYXVsdFwiXSkobikpKWZvcih2YXIgZj0wO2Y8by5sZW5ndGg7ZisrKWk9b1tmXS5zdWJzdHJpbmcoMSxvW2ZdLmxlbmd0aC0xKSxyPXIucmVwbGFjZShlLm1ha2VTYWZlKG9bZl0pLG5baV18fFwiXCIpO2Vsc2Ugcj1yLnJlcGxhY2UoL1xce1teXFx9XSs/XFx9L2csbik7cmV0dXJuIHJ9fSx7a2V5OlwiZnJvbUZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIG4sZT10LnNwbGl0KFwiXFxuXCIpLHI9e30sbz0wO288ZS5sZW5ndGg7bysrKW49ZVtvXS5tYXRjaCgvXiguKz8pICo/PSAqPyhbXlxcbl0rKS8pLG4mJihyW25bMV1dPW5bMl0ucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpKTtyZXR1cm4gcn19LHtrZXk6XCJwcm9jZXNzRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMsZT10LnJlcGxhY2UoL1xcblxcbi9nLFwiXFxuXCIpO3JldHVybiBuLmxhbmdzW24ubG9jYWxlXT1uLmZyb21GaWxlKGUpfX0se2tleTpcImxvYWRMYW5nXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49dGhpcztyZXR1cm4gbmV3IHdpbmRvdy5Qcm9taXNlKGZ1bmN0aW9uKGUscil7bi5sYW5nc1tuLmxvY2FsZV0/ZShuLmxhbmdzW24ubG9jYWxlXSk6IWZ1bmN0aW9uKCl7dmFyIG89bmV3IFhNTEh0dHBSZXF1ZXN0O28ub3BlbihcIkdFVFwiLG4uY29uZmlnLmxvY2F0aW9uK3QrXCIubGFuZ1wiLCEwKSxvLm9ubG9hZD1mdW5jdGlvbigpe3RoaXMuc3RhdHVzPD0zMDQ/KG4ucHJvY2Vzc0ZpbGUoby5yZXNwb25zZVRleHQpLGUoby5yZXNwb25zZSkpOnIoe3N0YXR1czp0aGlzLnN0YXR1cyxzdGF0dXNUZXh0Om8uc3RhdHVzVGV4dH0pfSxvLm9uZXJyb3I9ZnVuY3Rpb24oKXtyKHtzdGF0dXM6dGhpcy5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9KX0sby5zZW5kKCl9KCl9KX19LHtrZXk6XCJzZXRDdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJlbi1VU1wiLG49dGhpcy5sb2FkTGFuZyh0KTtyZXR1cm4gdGhpcy5sb2NhbGU9dCx0aGlzLmN1cnJlbnQ9dGhpcy5sYW5nc1t0XSx3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLHQpLG59fSx7a2V5OlwiZ2V0TGFuZ3NcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb25maWcubGFuZ3N9fV0pLHR9KCk7bltcImRlZmF1bHRcIl09bmV3IHB9LGZ1bmN0aW9uKHQsbil7dmFyIGU9dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBfX2cmJihfX2c9ZSl9LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9IWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbil7dmFyIGU9e30uaGFzT3duUHJvcGVydHk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbCh0LG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTEpLG89ZSgzMSksdT1lKDI2KSxpPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTtuLmY9ZSgyKT9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24odCxuLGUpe2lmKHIodCksbj11KG4sITApLHIoZSksbyl0cnl7cmV0dXJuIGkodCxuLGUpfWNhdGNoKGYpe31pZihcImdldFwiaW4gZXx8XCJzZXRcImluIGUpdGhyb3cgVHlwZUVycm9yKFwiQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhXCIpO3JldHVyblwidmFsdWVcImluIGUmJih0W25dPWUudmFsdWUpLHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgzMiksbz1lKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIobyh0KSl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0KSxvPWUoMTUpO3QuZXhwb3J0cz1lKDIpP2Z1bmN0aW9uKHQsbixlKXtyZXR1cm4gci5mKHQsbixvKDEsZSkpfTpmdW5jdGlvbih0LG4sZSl7cmV0dXJuIHRbbl09ZSx0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjQpKFwid2tzXCIpLG89ZSgxNiksdT1lKDEpLlN5bWJvbCxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHUsZj10LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPWkmJnVbdF18fChpP3U6bykoXCJTeW1ib2wuXCIrdCkpfTtmLnN0b3JlPXJ9LGZ1bmN0aW9uKHQsbil7dmFyIGU9dC5leHBvcnRzPXt2ZXJzaW9uOlwiMi40LjBcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1lKX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKG4pe3JldHVybiEwfX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDM2KSxvPWUoMTgpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoIXIodCkpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGFuIG9iamVjdCFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxKSxvPWUoOCksdT1lKDUzKSxpPWUoNiksZj1cInByb3RvdHlwZVwiLGM9ZnVuY3Rpb24odCxuLGUpe3ZhciBhLHMsbCxwPXQmYy5GLHY9dCZjLkcseT10JmMuUyxkPXQmYy5QLGg9dCZjLkIsZz10JmMuVyxiPXY/bzpvW25dfHwob1tuXT17fSksbT1iW2ZdLHg9dj9yOnk/cltuXToocltuXXx8e30pW2ZdO3YmJihlPW4pO2ZvcihhIGluIGUpcz0hcCYmeCYmdm9pZCAwIT09eFthXSxzJiZhIGluIGJ8fChsPXM/eFthXTplW2FdLGJbYV09diYmXCJmdW5jdGlvblwiIT10eXBlb2YgeFthXT9lW2FdOmgmJnM/dShsLHIpOmcmJnhbYV09PWw/ZnVuY3Rpb24odCl7dmFyIG49ZnVuY3Rpb24obixlLHIpe2lmKHRoaXMgaW5zdGFuY2VvZiB0KXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuZXcgdDtjYXNlIDE6cmV0dXJuIG5ldyB0KG4pO2Nhc2UgMjpyZXR1cm4gbmV3IHQobixlKX1yZXR1cm4gbmV3IHQobixlLHIpfXJldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cmV0dXJuIG5bZl09dFtmXSxufShsKTpkJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP3UoRnVuY3Rpb24uY2FsbCxsKTpsLGQmJigoYi52aXJ0dWFsfHwoYi52aXJ0dWFsPXt9KSlbYV09bCx0JmMuUiYmbSYmIW1bYV0mJmkobSxhLGwpKSl9O2MuRj0xLGMuRz0yLGMuUz00LGMuUD04LGMuQj0xNixjLlc9MzIsYy5VPTY0LGMuUj0xMjgsdC5leHBvcnRzPWN9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9fSxmdW5jdGlvbih0LG4pe24uZj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6bn19fSxmdW5jdGlvbih0LG4pe3ZhciBlPTAscj1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09dD9cIlwiOnQsXCIpX1wiLCgrK2UrcikudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIrdCk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1cImNvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZlwiLnNwbGl0KFwiLFwiKX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9e319LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPSEwfSxmdW5jdGlvbih0LG4pe24uZj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0KS5mLG89ZSgzKSx1PWUoNykoXCJ0b1N0cmluZ1RhZ1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3QmJiFvKHQ9ZT90OnQucHJvdG90eXBlLHUpJiZyKHQsdSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOm59KX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI0KShcImtleXNcIiksbz1lKDE2KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPW8odCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMSksbz1cIl9fY29yZS1qc19zaGFyZWRfX1wiLHU9cltvXXx8KHJbb109e30pO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdVt0XXx8KHVbdF09e30pfX0sZnVuY3Rpb24odCxuKXt2YXIgZT1NYXRoLmNlaWwscj1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP3I6ZSkodCl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIGUsbztpZihuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihlPXQudG9TdHJpbmcpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87aWYoXCJmdW5jdGlvblwiPT10eXBlb2YoZT10LnZhbHVlT2YpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87aWYoIW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mKGU9dC50b1N0cmluZykmJiFyKG89ZS5jYWxsKHQpKSlyZXR1cm4gbzt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxKSxvPWUoOCksdT1lKDIwKSxpPWUoMjgpLGY9ZSg0KS5mO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1vLlN5bWJvbHx8KG8uU3ltYm9sPXU/e306ci5TeW1ib2x8fHt9KTtcIl9cIj09dC5jaGFyQXQoMCl8fHQgaW4gbnx8ZihuLHQse3ZhbHVlOmkuZih0KX0pfX0sZnVuY3Rpb24odCxuLGUpe24uZj1lKDcpfSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZS5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpLG89ZSgxKS5kb2N1bWVudCx1PXIobykmJnIoby5jcmVhdGVFbGVtZW50KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHU/by5jcmVhdGVFbGVtZW50KHQpOnt9fX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz0hZSgyKSYmIWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUoMzApKFwiZGl2XCIpLFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KTt0LmV4cG9ydHM9T2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKT9PYmplY3Q6ZnVuY3Rpb24odCl7cmV0dXJuXCJTdHJpbmdcIj09cih0KT90LnNwbGl0KFwiXCIpOk9iamVjdCh0KX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDIwKSxvPWUoMTIpLHU9ZSgzNyksaT1lKDYpLGY9ZSgzKSxjPWUoMTkpLGE9ZSg1Nykscz1lKDIyKSxsPWUoNjUpLHA9ZSg3KShcIml0ZXJhdG9yXCIpLHY9IShbXS5rZXlzJiZcIm5leHRcImluW10ua2V5cygpKSx5PVwiQEBpdGVyYXRvclwiLGQ9XCJrZXlzXCIsaD1cInZhbHVlc1wiLGc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlLGIsbSx4LE8pe2EoZSxuLGIpO3ZhciB3LFMsXyxqPWZ1bmN0aW9uKHQpe2lmKCF2JiZ0IGluIE0pcmV0dXJuIE1bdF07c3dpdGNoKHQpe2Nhc2UgZDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX07Y2FzZSBoOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgZSh0aGlzLHQpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX19LEU9bitcIiBJdGVyYXRvclwiLFA9bT09aCxrPSExLE09dC5wcm90b3R5cGUsVD1NW3BdfHxNW3ldfHxtJiZNW21dLEY9VHx8aihtKSxBPW0/UD9qKFwiZW50cmllc1wiKTpGOnZvaWQgMCxJPVwiQXJyYXlcIj09bj9NLmVudHJpZXN8fFQ6VDtpZihJJiYoXz1sKEkuY2FsbChuZXcgdCkpLF8hPT1PYmplY3QucHJvdG90eXBlJiYocyhfLEUsITApLHJ8fGYoXyxwKXx8aShfLHAsZykpKSxQJiZUJiZULm5hbWUhPT1oJiYoaz0hMCxGPWZ1bmN0aW9uKCl7cmV0dXJuIFQuY2FsbCh0aGlzKX0pLHImJiFPfHwhdiYmIWsmJk1bcF18fGkoTSxwLEYpLGNbbl09RixjW0VdPWcsbSlpZih3PXt2YWx1ZXM6UD9GOmooaCksa2V5czp4P0Y6aihkKSxlbnRyaWVzOkF9LE8pZm9yKFMgaW4gdylTIGluIE18fHUoTSxTLHdbU10pO2Vsc2UgbyhvLlArby5GKih2fHxrKSxuLHcpO3JldHVybiB3fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTEpLG89ZSg2MiksdT1lKDE4KSxpPWUoMjMpKFwiSUVfUFJPVE9cIiksZj1mdW5jdGlvbigpe30sYz1cInByb3RvdHlwZVwiLGE9ZnVuY3Rpb24oKXt2YXIgdCxuPWUoMzApKFwiaWZyYW1lXCIpLHI9dS5sZW5ndGgsbz1cIjxcIixpPVwiPlwiO2ZvcihuLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZSg1NSkuYXBwZW5kQ2hpbGQobiksbi5zcmM9XCJqYXZhc2NyaXB0OlwiLHQ9bi5jb250ZW50V2luZG93LmRvY3VtZW50LHQub3BlbigpLHQud3JpdGUobytcInNjcmlwdFwiK2krXCJkb2N1bWVudC5GPU9iamVjdFwiK28rXCIvc2NyaXB0XCIraSksdC5jbG9zZSgpLGE9dC5GO3ItLTspZGVsZXRlIGFbY11bdVtyXV07cmV0dXJuIGEoKX07dC5leHBvcnRzPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKHQsbil7dmFyIGU7cmV0dXJuIG51bGwhPT10PyhmW2NdPXIodCksZT1uZXcgZixmW2NdPW51bGwsZVtpXT10KTplPWEoKSx2b2lkIDA9PT1uP2U6byhlLG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMzYpLG89ZSgxOCkuY29uY2F0KFwibGVuZ3RoXCIsXCJwcm90b3R5cGVcIik7bi5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzfHxmdW5jdGlvbih0KXtyZXR1cm4gcih0LG8pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMyksbz1lKDUpLHU9ZSg1MikoITEpLGk9ZSgyMykoXCJJRV9QUk9UT1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXt2YXIgZSxmPW8odCksYz0wLGE9W107Zm9yKGUgaW4gZillIT1pJiZyKGYsZSkmJmEucHVzaChlKTtmb3IoO24ubGVuZ3RoPmM7KXIoZixlPW5bYysrXSkmJih+dShhLGUpfHxhLnB1c2goZSkpO3JldHVybiBhfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz1lKDYpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3Qocih0KSl9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ2KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg0NyksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNDgpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ5KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuKXtcInVzZSBzdHJpY3RcIjtuLl9fZXNNb2R1bGU9ITAsbltcImRlZmF1bHRcIl09ZnVuY3Rpb24odCxuKXtpZighKHQgaW5zdGFuY2VvZiBuKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1uLl9fZXNNb2R1bGU9ITA7dmFyIG89ZSg0MCksdT1yKG8pO25bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe2Zvcih2YXIgZT0wO2U8bi5sZW5ndGg7ZSsrKXt2YXIgcj1uW2VdO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSwoMCx1W1wiZGVmYXVsdFwiXSkodCxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKG4sZSxyKXtyZXR1cm4gZSYmdChuLnByb3RvdHlwZSxlKSxyJiZ0KG4sciksbn19KCl9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19bi5fX2VzTW9kdWxlPSEwO3ZhciBvPWUoNDIpLHU9cihvKSxpPWUoNDEpLGY9cihpKSxjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZcInN5bWJvbFwiPT10eXBlb2YgdVtcImRlZmF1bHRcIl0/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZltcImRlZmF1bHRcIl0mJnQuY29uc3RydWN0b3I9PT1mW1wiZGVmYXVsdFwiXT9cInN5bWJvbFwiOnR5cGVvZiB0fTtuW1wiZGVmYXVsdFwiXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBmW1wiZGVmYXVsdFwiXSYmXCJzeW1ib2xcIj09PWModVtcImRlZmF1bHRcIl0pP2Z1bmN0aW9uKHQpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Yyh0KX06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZ0LmNvbnN0cnVjdG9yPT09ZltcImRlZmF1bHRcIl0/XCJzeW1ib2xcIjpcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCl9fSxmdW5jdGlvbih0LG4sZSl7ZSg3MCksdC5leHBvcnRzPWUoOCkuT2JqZWN0LmFzc2lnbn0sZnVuY3Rpb24odCxuLGUpe2UoNzEpO3ZhciByPWUoOCkuT2JqZWN0O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHIuZGVmaW5lUHJvcGVydHkodCxuLGUpfX0sZnVuY3Rpb24odCxuLGUpe2UoNzQpLGUoNzIpLGUoNzUpLGUoNzYpLHQuZXhwb3J0cz1lKDgpLlN5bWJvbH0sZnVuY3Rpb24odCxuLGUpe2UoNzMpLGUoNzcpLHQuZXhwb3J0cz1lKDI4KS5mKFwiaXRlcmF0b3JcIil9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1KSxvPWUoNjgpLHU9ZSg2Nyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihuLGUsaSl7dmFyIGYsYz1yKG4pLGE9byhjLmxlbmd0aCkscz11KGksYSk7aWYodCYmZSE9ZSl7Zm9yKDthPnM7KWlmKGY9Y1tzKytdLGYhPWYpcmV0dXJuITB9ZWxzZSBmb3IoO2E+cztzKyspaWYoKHR8fHMgaW4gYykmJmNbc109PT1lKXJldHVybiB0fHxzfHwwO3JldHVybiF0JiYtMX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1MCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXtpZihyKHQpLHZvaWQgMD09PW4pcmV0dXJuIHQ7c3dpdGNoKGUpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2FsbChuLGUpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQuY2FsbChuLGUscil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24oZSxyLG8pe3JldHVybiB0LmNhbGwobixlLHIsbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCksbz1lKDIxKSx1PWUoMTQpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1yKHQpLGU9by5mO2lmKGUpZm9yKHZhciBpLGY9ZSh0KSxjPXUuZixhPTA7Zi5sZW5ndGg+YTspYy5jYWxsKHQsaT1mW2ErK10pJiZuLnB1c2goaSk7cmV0dXJuIG59fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPWUoMSkuZG9jdW1lbnQmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudH0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjkpO3QuZXhwb3J0cz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbih0KXtyZXR1cm5cIkFycmF5XCI9PXIodCl9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgzNCksbz1lKDE1KSx1PWUoMjIpLGk9e307ZSg2KShpLGUoNykoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksdC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0LnByb3RvdHlwZT1yKGkse25leHQ6bygxLGUpfSksdSh0LG4rXCIgSXRlcmF0b3JcIil9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybnt2YWx1ZTpuLGRvbmU6ISF0fX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEwKSxvPWUoNSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7Zm9yKHZhciBlLHU9byh0KSxpPXIodSksZj1pLmxlbmd0aCxjPTA7Zj5jOylpZih1W2U9aVtjKytdXT09PW4pcmV0dXJuIGV9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNikoXCJtZXRhXCIpLG89ZSgxMyksdT1lKDMpLGk9ZSg0KS5mLGY9MCxjPU9iamVjdC5pc0V4dGVuc2libGV8fGZ1bmN0aW9uKCl7cmV0dXJuITB9LGE9IWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gYyhPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKX0pLHM9ZnVuY3Rpb24odCl7aSh0LHIse3ZhbHVlOntpOlwiT1wiKyArK2Ysdzp7fX19KX0sbD1mdW5jdGlvbih0LG4pe2lmKCFvKHQpKXJldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6KFwic3RyaW5nXCI9PXR5cGVvZiB0P1wiU1wiOlwiUFwiKSt0O2lmKCF1KHQscikpe2lmKCFjKHQpKXJldHVyblwiRlwiO2lmKCFuKXJldHVyblwiRVwiO3ModCl9cmV0dXJuIHRbcl0uaX0scD1mdW5jdGlvbih0LG4pe2lmKCF1KHQscikpe2lmKCFjKHQpKXJldHVybiEwO2lmKCFuKXJldHVybiExO3ModCl9cmV0dXJuIHRbcl0ud30sdj1mdW5jdGlvbih0KXtyZXR1cm4gYSYmeS5ORUVEJiZjKHQpJiYhdSh0LHIpJiZzKHQpLHR9LHk9dC5leHBvcnRzPXtLRVk6cixORUVEOiExLGZhc3RLZXk6bCxnZXRXZWFrOnAsb25GcmVlemU6dn19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDEwKSxvPWUoMjEpLHU9ZSgxNCksaT1lKDM4KSxmPWUoMzIpLGM9T2JqZWN0LmFzc2lnbjt0LmV4cG9ydHM9IWN8fGUoOSkoZnVuY3Rpb24oKXt2YXIgdD17fSxuPXt9LGU9U3ltYm9sKCkscj1cImFiY2RlZmdoaWprbG1ub3BxcnN0XCI7cmV0dXJuIHRbZV09NyxyLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24odCl7blt0XT10fSksNyE9Yyh7fSx0KVtlXXx8T2JqZWN0LmtleXMoYyh7fSxuKSkuam9pbihcIlwiKSE9cn0pP2Z1bmN0aW9uKHQsbil7Zm9yKHZhciBlPWkodCksYz1hcmd1bWVudHMubGVuZ3RoLGE9MSxzPW8uZixsPXUuZjtjPmE7KWZvcih2YXIgcCx2PWYoYXJndW1lbnRzW2ErK10pLHk9cz9yKHYpLmNvbmNhdChzKHYpKTpyKHYpLGQ9eS5sZW5ndGgsaD0wO2Q+aDspbC5jYWxsKHYscD15W2grK10pJiYoZVtwXT12W3BdKTtyZXR1cm4gZX06Y30sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNCksbz1lKDExKSx1PWUoMTApO3QuZXhwb3J0cz1lKDIpP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzOmZ1bmN0aW9uKHQsbil7byh0KTtmb3IodmFyIGUsaT11KG4pLGY9aS5sZW5ndGgsYz0wO2Y+Yzspci5mKHQsZT1pW2MrK10sbltlXSk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNCksbz1lKDE1KSx1PWUoNSksaT1lKDI2KSxmPWUoMyksYz1lKDMxKSxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7bi5mPWUoMik/YTpmdW5jdGlvbih0LG4pe2lmKHQ9dSh0KSxuPWkobiwhMCksYyl0cnl7cmV0dXJuIGEodCxuKX1jYXRjaChlKXt9aWYoZih0LG4pKXJldHVybiBvKCFyLmYuY2FsbCh0LG4pLHRbbl0pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNSksbz1lKDM1KS5mLHU9e30udG9TdHJpbmcsaT1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W10sZj1mdW5jdGlvbih0KXt0cnl7cmV0dXJuIG8odCl9Y2F0Y2gobil7cmV0dXJuIGkuc2xpY2UoKX19O3QuZXhwb3J0cy5mPWZ1bmN0aW9uKHQpe3JldHVybiBpJiZcIltvYmplY3QgV2luZG93XVwiPT11LmNhbGwodCk/Zih0KTpvKHIodCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMyksbz1lKDM4KSx1PWUoMjMpKFwiSUVfUFJPVE9cIiksaT1PYmplY3QucHJvdG90eXBlO3QuZXhwb3J0cz1PYmplY3QuZ2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQpe3JldHVybiB0PW8odCkscih0LHUpP3RbdV06XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb25zdHJ1Y3RvciYmdCBpbnN0YW5jZW9mIHQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU6dCBpbnN0YW5jZW9mIE9iamVjdD9pOm51bGx9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNSksbz1lKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKG4sZSl7dmFyIHUsaSxmPVN0cmluZyhvKG4pKSxjPXIoZSksYT1mLmxlbmd0aDtyZXR1cm4gYzwwfHxjPj1hP3Q/XCJcIjp2b2lkIDA6KHU9Zi5jaGFyQ29kZUF0KGMpLHU8NTUyOTZ8fHU+NTYzMTl8fGMrMT09PWF8fChpPWYuY2hhckNvZGVBdChjKzEpKTw1NjMyMHx8aT41NzM0Mz90P2YuY2hhckF0KGMpOnU6dD9mLnNsaWNlKGMsYysyKToodS01NTI5Njw8MTApKyhpLTU2MzIwKSs2NTUzNil9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjUpLG89TWF0aC5tYXgsdT1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD1yKHQpLHQ8MD9vKHQrbiwwKTp1KHQsbil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNSksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9vKHIodCksOTAwNzE5OTI1NDc0MDk5MSk6MH19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDUxKSxvPWUoNTgpLHU9ZSgxOSksaT1lKDUpO3QuZXhwb3J0cz1lKDMzKShBcnJheSxcIkFycmF5XCIsZnVuY3Rpb24odCxuKXt0aGlzLl90PWkodCksdGhpcy5faT0wLHRoaXMuX2s9bn0sZnVuY3Rpb24oKXt2YXIgdD10aGlzLl90LG49dGhpcy5fayxlPXRoaXMuX2krKztyZXR1cm4hdHx8ZT49dC5sZW5ndGg/KHRoaXMuX3Q9dm9pZCAwLG8oMSkpOlwia2V5c1wiPT1uP28oMCxlKTpcInZhbHVlc1wiPT1uP28oMCx0W2VdKTpvKDAsW2UsdFtlXV0pfSxcInZhbHVlc1wiKSx1LkFyZ3VtZW50cz11LkFycmF5LHIoXCJrZXlzXCIpLHIoXCJ2YWx1ZXNcIikscihcImVudHJpZXNcIil9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEyKTtyKHIuUytyLkYsXCJPYmplY3RcIix7YXNzaWduOmUoNjEpfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEyKTtyKHIuUytyLkYqIWUoMiksXCJPYmplY3RcIix7ZGVmaW5lUHJvcGVydHk6ZSg0KS5mfSl9LGZ1bmN0aW9uKHQsbil7fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg2NikoITApO2UoMzMpKFN0cmluZyxcIlN0cmluZ1wiLGZ1bmN0aW9uKHQpe3RoaXMuX3Q9U3RyaW5nKHQpLHRoaXMuX2k9MH0sZnVuY3Rpb24oKXt2YXIgdCxuPXRoaXMuX3QsZT10aGlzLl9pO3JldHVybiBlPj1uLmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9Oih0PXIobixlKSx0aGlzLl9pKz10Lmxlbmd0aCx7dmFsdWU6dCxkb25lOiExfSl9KX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoMSksbz1lKDMpLHU9ZSgyKSxpPWUoMTIpLGY9ZSgzNyksYz1lKDYwKS5LRVksYT1lKDkpLHM9ZSgyNCksbD1lKDIyKSxwPWUoMTYpLHY9ZSg3KSx5PWUoMjgpLGQ9ZSgyNyksaD1lKDU5KSxnPWUoNTQpLGI9ZSg1NiksbT1lKDExKSx4PWUoNSksTz1lKDI2KSx3PWUoMTUpLFM9ZSgzNCksXz1lKDY0KSxqPWUoNjMpLEU9ZSg0KSxQPWUoMTApLGs9ai5mLE09RS5mLFQ9Xy5mLEY9ci5TeW1ib2wsQT1yLkpTT04sST1BJiZBLnN0cmluZ2lmeSxOPVwicHJvdG90eXBlXCIsQz12KFwiX2hpZGRlblwiKSxMPXYoXCJ0b1ByaW1pdGl2ZVwiKSxSPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFc9cyhcInN5bWJvbC1yZWdpc3RyeVwiKSxEPXMoXCJzeW1ib2xzXCIpLEc9cyhcIm9wLXN5bWJvbHNcIiksSj1PYmplY3RbTl0sVT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBGLEs9ci5RT2JqZWN0LHE9IUt8fCFLW05dfHwhS1tOXS5maW5kQ2hpbGQsej11JiZhKGZ1bmN0aW9uKCl7cmV0dXJuIDchPVMoTSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE0odGhpcyxcImFcIix7dmFsdWU6N30pLmF9fSkpLmF9KT9mdW5jdGlvbih0LG4sZSl7dmFyIHI9ayhKLG4pO3ImJmRlbGV0ZSBKW25dLE0odCxuLGUpLHImJnQhPT1KJiZNKEosbixyKX06TSxCPWZ1bmN0aW9uKHQpe3ZhciBuPURbdF09UyhGW05dKTtyZXR1cm4gbi5faz10LG59LFY9VSYmXCJzeW1ib2xcIj09dHlwZW9mIEYuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgRn0sWT1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHQ9PT1KJiZZKEcsbixlKSxtKHQpLG49TyhuLCEwKSxtKGUpLG8oRCxuKT8oZS5lbnVtZXJhYmxlPyhvKHQsQykmJnRbQ11bbl0mJih0W0NdW25dPSExKSxlPVMoZSx7ZW51bWVyYWJsZTp3KDAsITEpfSkpOihvKHQsQyl8fE0odCxDLHcoMSx7fSkpLHRbQ11bbl09ITApLHoodCxuLGUpKTpNKHQsbixlKX0sSD1mdW5jdGlvbih0LG4pe20odCk7Zm9yKHZhciBlLHI9ZyhuPXgobikpLG89MCx1PXIubGVuZ3RoO3U+bzspWSh0LGU9cltvKytdLG5bZV0pO3JldHVybiB0fSxRPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHZvaWQgMD09PW4/Uyh0KTpIKFModCksbil9LFg9ZnVuY3Rpb24odCl7dmFyIG49Ui5jYWxsKHRoaXMsdD1PKHQsITApKTtyZXR1cm4hKHRoaXM9PT1KJiZvKEQsdCkmJiFvKEcsdCkpJiYoIShufHwhbyh0aGlzLHQpfHwhbyhELHQpfHxvKHRoaXMsQykmJnRoaXNbQ11bdF0pfHxuKX0sJD1mdW5jdGlvbih0LG4pe2lmKHQ9eCh0KSxuPU8obiwhMCksdCE9PUp8fCFvKEQsbil8fG8oRyxuKSl7dmFyIGU9ayh0LG4pO3JldHVybiFlfHwhbyhELG4pfHxvKHQsQykmJnRbQ11bbl18fChlLmVudW1lcmFibGU9ITApLGV9fSxaPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbixlPVQoeCh0KSkscj1bXSx1PTA7ZS5sZW5ndGg+dTspbyhELG49ZVt1KytdKXx8bj09Q3x8bj09Y3x8ci5wdXNoKG4pO3JldHVybiByfSx0dD1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT10PT09SixyPVQoZT9HOngodCkpLHU9W10saT0wO3IubGVuZ3RoPmk7KSFvKEQsbj1yW2krK10pfHxlJiYhbyhKLG4pfHx1LnB1c2goRFtuXSk7cmV0dXJuIHV9O1V8fChGPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIEYpdGhyb3cgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIVwiKTt2YXIgdD1wKGFyZ3VtZW50cy5sZW5ndGg+MD9hcmd1bWVudHNbMF06dm9pZCAwKSxuPWZ1bmN0aW9uKGUpe3RoaXM9PT1KJiZuLmNhbGwoRyxlKSxvKHRoaXMsQykmJm8odGhpc1tDXSx0KSYmKHRoaXNbQ11bdF09ITEpLHoodGhpcyx0LHcoMSxlKSl9O3JldHVybiB1JiZxJiZ6KEosdCx7Y29uZmlndXJhYmxlOiEwLHNldDpufSksQih0KX0sZihGW05dLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLl9rfSksai5mPSQsRS5mPVksZSgzNSkuZj1fLmY9WixlKDE0KS5mPVgsZSgyMSkuZj10dCx1JiYhZSgyMCkmJmYoSixcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsWCwhMCkseS5mPWZ1bmN0aW9uKHQpe3JldHVybiBCKHYodCkpfSksaShpLkcraS5XK2kuRiohVSx7U3ltYm9sOkZ9KTtmb3IodmFyIG50PVwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXNcIi5zcGxpdChcIixcIiksZXQ9MDtudC5sZW5ndGg+ZXQ7KXYobnRbZXQrK10pO2Zvcih2YXIgbnQ9UCh2LnN0b3JlKSxldD0wO250Lmxlbmd0aD5ldDspZChudFtldCsrXSk7aShpLlMraS5GKiFVLFwiU3ltYm9sXCIse1wiZm9yXCI6ZnVuY3Rpb24odCl7cmV0dXJuIG8oVyx0Kz1cIlwiKT9XW3RdOldbdF09Rih0KX0sa2V5Rm9yOmZ1bmN0aW9uKHQpe2lmKFYodCkpcmV0dXJuIGgoVyx0KTt0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBzeW1ib2whXCIpfSx1c2VTZXR0ZXI6ZnVuY3Rpb24oKXtxPSEwfSx1c2VTaW1wbGU6ZnVuY3Rpb24oKXtxPSExfX0pLGkoaS5TK2kuRiohVSxcIk9iamVjdFwiLHtjcmVhdGU6USxkZWZpbmVQcm9wZXJ0eTpZLGRlZmluZVByb3BlcnRpZXM6SCxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6JCxnZXRPd25Qcm9wZXJ0eU5hbWVzOlosZ2V0T3duUHJvcGVydHlTeW1ib2xzOnR0fSksQSYmaShpLlMraS5GKighVXx8YShmdW5jdGlvbigpe3ZhciB0PUYoKTtyZXR1cm5cIltudWxsXVwiIT1JKFt0XSl8fFwie31cIiE9SSh7YTp0fSl8fFwie31cIiE9SShPYmplY3QodCkpfSkpLFwiSlNPTlwiLHtzdHJpbmdpZnk6ZnVuY3Rpb24odCl7aWYodm9pZCAwIT09dCYmIVYodCkpe2Zvcih2YXIgbixlLHI9W3RdLG89MTthcmd1bWVudHMubGVuZ3RoPm87KXIucHVzaChhcmd1bWVudHNbbysrXSk7cmV0dXJuIG49clsxXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYoZT1uKSwhZSYmYihuKXx8KG49ZnVuY3Rpb24odCxuKXtpZihlJiYobj1lLmNhbGwodGhpcyx0LG4pKSwhVihuKSlyZXR1cm4gbn0pLHJbMV09bixJLmFwcGx5KEEscil9fX0pLEZbTl1bTF18fGUoNikoRltOXSxMLEZbTl0udmFsdWVPZiksbChGLFwiU3ltYm9sXCIpLGwoTWF0aCxcIk1hdGhcIiwhMCksbChyLkpTT04sXCJKU09OXCIsITApfSxmdW5jdGlvbih0LG4sZSl7ZSgyNykoXCJhc3luY0l0ZXJhdG9yXCIpfSxmdW5jdGlvbih0LG4sZSl7ZSgyNykoXCJvYnNlcnZhYmxlXCIpfSxmdW5jdGlvbih0LG4sZSl7ZSg2OSk7Zm9yKHZhciByPWUoMSksbz1lKDYpLHU9ZSgxOSksaT1lKDcpKFwidG9TdHJpbmdUYWdcIiksZj1bXCJOb2RlTGlzdFwiLFwiRE9NVG9rZW5MaXN0XCIsXCJNZWRpYUxpc3RcIixcIlN0eWxlU2hlZXRMaXN0XCIsXCJDU1NSdWxlTGlzdFwiXSxjPTA7Yzw1O2MrKyl7dmFyIGE9ZltjXSxzPXJbYV0sbD1zJiZzLnByb3RvdHlwZTtsJiYhbFtpXSYmbyhsLGksYSksdVthXT11LkFycmF5fX1dKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbnZhciBfcHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcChcIm5leHRcIik7XG4gICAgfSk7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIHBsYWNlSG9sZGVyc0NvdW50IChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG4gIC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcbiAgLy8gcmVwcmVzZW50IG9uZSBieXRlXG4gIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuICAvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG4gIHJldHVybiBiNjRbbGVuIC0gMl0gPT09ICc9JyA/IDIgOiBiNjRbbGVuIC0gMV0gPT09ICc9JyA/IDEgOiAwXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICAvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbiAgcmV0dXJuIGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVyc0NvdW50KGI2NClcbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuICBwbGFjZUhvbGRlcnMgPSBwbGFjZUhvbGRlcnNDb3VudChiNjQpXG5cbiAgYXJyID0gbmV3IEFycihsZW4gKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gbGVuIC0gNCA6IGxlblxuXG4gIHZhciBMID0gMFxuXG4gIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHwgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICsgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIG91dHB1dCA9ICcnXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAyXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9PSdcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgKHVpbnQ4W2xlbiAtIDFdKVxuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDEwXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gJz0nXG4gIH1cblxuICBwYXJ0cy5wdXNoKG91dHB1dClcblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5czsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07IiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG1ldGEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGFuSW5zdGFuY2UgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBlYWNoICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgaWYoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLGZ1bmN0aW9uKEtFWSl7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59OyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpOyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIi8qIVxuICogQGRlc2NyaXB0aW9uIFJlY3Vyc2l2ZSBvYmplY3QgZXh0ZW5kaW5nXG4gKiBAYXV0aG9yIFZpYWNoZXNsYXYgTG90c21hbm92IDxsb3RzbWFub3Y4OUBnbWFpbC5jb20+XG4gKiBAbGljZW5zZSBNSVRcbiAqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNSBWaWFjaGVzbGF2IExvdHNtYW5vdlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbiAqIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbiAqIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbiAqIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4gKiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuICogQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGlzU3BlY2lmaWNWYWx1ZSh2YWwpIHtcblx0cmV0dXJuIChcblx0XHR2YWwgaW5zdGFuY2VvZiBCdWZmZXJcblx0XHR8fCB2YWwgaW5zdGFuY2VvZiBEYXRlXG5cdFx0fHwgdmFsIGluc3RhbmNlb2YgUmVnRXhwXG5cdCkgPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNsb25lU3BlY2lmaWNWYWx1ZSh2YWwpIHtcblx0aWYgKHZhbCBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuXHRcdHZhciB4ID0gbmV3IEJ1ZmZlcih2YWwubGVuZ3RoKTtcblx0XHR2YWwuY29weSh4KTtcblx0XHRyZXR1cm4geDtcblx0fSBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHZhbC5nZXRUaW1lKCkpO1xuXHR9IGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuXHRcdHJldHVybiBuZXcgUmVnRXhwKHZhbCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIHNpdHVhdGlvbicpO1xuXHR9XG59XG5cbi8qKlxuICogUmVjdXJzaXZlIGNsb25pbmcgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGRlZXBDbG9uZUFycmF5KGFycikge1xuXHR2YXIgY2xvbmUgPSBbXTtcblx0YXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0aWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICE9PSBudWxsKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuXHRcdFx0XHRjbG9uZVtpbmRleF0gPSBkZWVwQ2xvbmVBcnJheShpdGVtKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNTcGVjaWZpY1ZhbHVlKGl0ZW0pKSB7XG5cdFx0XHRcdGNsb25lW2luZGV4XSA9IGNsb25lU3BlY2lmaWNWYWx1ZShpdGVtKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsb25lW2luZGV4XSA9IGRlZXBFeHRlbmQoe30sIGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbG9uZVtpbmRleF0gPSBpdGVtO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBjbG9uZTtcbn1cblxuLyoqXG4gKiBFeHRlbmluZyBvYmplY3QgdGhhdCBlbnRlcmVkIGluIGZpcnN0IGFyZ3VtZW50LlxuICpcbiAqIFJldHVybnMgZXh0ZW5kZWQgb2JqZWN0IG9yIGZhbHNlIGlmIGhhdmUgbm8gdGFyZ2V0IG9iamVjdCBvciBpbmNvcnJlY3QgdHlwZS5cbiAqXG4gKiBJZiB5b3Ugd2lzaCB0byBjbG9uZSBzb3VyY2Ugb2JqZWN0ICh3aXRob3V0IG1vZGlmeSBpdCksIGp1c3QgdXNlIGVtcHR5IG5ld1xuICogb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50LCBsaWtlIHRoaXM6XG4gKiAgIGRlZXBFeHRlbmQoe30sIHlvdXJPYmpfMSwgW3lvdXJPYmpfTl0pO1xuICovXG52YXIgZGVlcEV4dGVuZCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKC8qb2JqXzEsIFtvYmpfMl0sIFtvYmpfTl0qLykge1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcblx0XHRyZXR1cm4gYXJndW1lbnRzWzBdO1xuXHR9XG5cblx0dmFyIHRhcmdldCA9IGFyZ3VtZW50c1swXTtcblxuXHQvLyBjb252ZXJ0IGFyZ3VtZW50cyB0byBhcnJheSBhbmQgY3V0IG9mZiB0YXJnZXQgb2JqZWN0XG5cdHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuXHR2YXIgdmFsLCBzcmMsIGNsb25lO1xuXG5cdGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG5cdFx0Ly8gc2tpcCBhcmd1bWVudCBpZiBpdCBpcyBhcnJheSBvciBpc24ndCBvYmplY3Rcblx0XHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvYmopKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0T2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHNyYyA9IHRhcmdldFtrZXldOyAvLyBzb3VyY2UgdmFsdWVcblx0XHRcdHZhbCA9IG9ialtrZXldOyAvLyBuZXcgdmFsdWVcblxuXHRcdFx0Ly8gcmVjdXJzaW9uIHByZXZlbnRpb25cblx0XHRcdGlmICh2YWwgPT09IHRhcmdldCkge1xuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogaWYgbmV3IHZhbHVlIGlzbid0IG9iamVjdCB0aGVuIGp1c3Qgb3ZlcndyaXRlIGJ5IG5ldyB2YWx1ZVxuXHRcdFx0ICogaW5zdGVhZCBvZiBleHRlbmRpbmcuXG5cdFx0XHQgKi9cblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gJ29iamVjdCcgfHwgdmFsID09PSBudWxsKSB7XG5cdFx0XHRcdHRhcmdldFtrZXldID0gdmFsO1xuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdC8vIGp1c3QgY2xvbmUgYXJyYXlzIChhbmQgcmVjdXJzaXZlIGNsb25lIG9iamVjdHMgaW5zaWRlKVxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdFx0dGFyZ2V0W2tleV0gPSBkZWVwQ2xvbmVBcnJheSh2YWwpO1xuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdC8vIGN1c3RvbSBjbG9uaW5nIGFuZCBvdmVyd3JpdGUgZm9yIHNwZWNpZmljIG9iamVjdHNcblx0XHRcdH0gZWxzZSBpZiAoaXNTcGVjaWZpY1ZhbHVlKHZhbCkpIHtcblx0XHRcdFx0dGFyZ2V0W2tleV0gPSBjbG9uZVNwZWNpZmljVmFsdWUodmFsKTtcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHQvLyBvdmVyd3JpdGUgYnkgbmV3IHZhbHVlIGlmIHNvdXJjZSBpc24ndCBvYmplY3Qgb3IgYXJyYXlcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHNyYyAhPT0gJ29iamVjdCcgfHwgc3JjID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoc3JjKSkge1xuXHRcdFx0XHR0YXJnZXRba2V5XSA9IGRlZXBFeHRlbmQoe30sIHZhbCk7XG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0Ly8gc291cmNlIHZhbHVlIGFuZCBuZXcgdmFsdWUgaXMgb2JqZWN0cyBib3RoLCBleHRlbmRpbmcuLi5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhcmdldFtrZXldID0gZGVlcEV4dGVuZChzcmMsIHZhbCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cblx0cmV0dXJuIHRhcmdldDtcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID1cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUoKG91dGVyRm4gfHwgR2VuZXJhdG9yKS5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9IEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudGAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuIFNvbWUgbWF5IGNvbnNpZGVyIHRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kIHRvb1xuICAvLyBjdXRlc3ksIGJ1dCB0aGV5IGFyZSBjdXJtdWRnZW9ucy5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBuZXcgQXdhaXRBcmd1bWVudChhcmcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEF3YWl0QXJndW1lbnQoYXJnKSB7XG4gICAgdGhpcy5hcmcgPSBhcmc7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFyZykudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8XG4gICAgICAgICAgICAgIChtZXRob2QgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAvLyBBIHJldHVybiBvciB0aHJvdyAod2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIHRocm93XG4gICAgICAgICAgICAvLyBtZXRob2QpIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChyZXR1cm5NZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXR1cm4gbWV0aG9kIHRocmV3IGFuIGV4Y2VwdGlvbiwgbGV0IHRoYXRcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb24gcHJldmFpbCBvdmVyIHRoZSBvcmlnaW5hbCByZXR1cm4gb3IgdGhyb3cuXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSBvdXRlciByZXR1cm4sIG5vdyB0aGF0IHRoZSBkZWxlZ2F0ZVxuICAgICAgICAgICAgICAvLyBpdGVyYXRvciBoYXMgYmVlbiB0ZXJtaW5hdGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3IsXG4gICAgICAgICAgICBhcmdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBhcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG4iLCIvKipcbiAqIEZvcm0gQnVpbGRlciBldmVudHNcbiAqIEByZXR1cm4ge09iamVjdH0gdmFyaW91cyBldmVudHMgdG8gYmUgdHJpZ2dlclxuICovXG4vLyBmdW5jdGlvbiBmYkV2ZW50cygpe1xuICBjb25zdCBldmVudHMgPSB7fTtcblxuICBldmVudHMubG9hZGVkID0gbmV3IEV2ZW50KCdsb2FkZWQnKTtcbiAgZXZlbnRzLnZpZXdEYXRhID0gbmV3IEV2ZW50KCd2aWV3RGF0YScpO1xuICBldmVudHMudXNlckRlY2xpbmVkID0gbmV3IEV2ZW50KCd1c2VyRGVjbGluZWQnKTtcbiAgZXZlbnRzLm1vZGFsQ2xvc2VkID0gbmV3IEV2ZW50KCdtb2RhbENsb3NlZCcpO1xuICBldmVudHMubW9kYWxPcGVuZWQgPSBuZXcgRXZlbnQoJ21vZGFsT3BlbmVkJyk7XG4gIGV2ZW50cy5mb3JtU2F2ZWQgPSBuZXcgRXZlbnQoJ2Zvcm1TYXZlZCcpO1xuICBldmVudHMuZmllbGRBZGRlZCA9IG5ldyBFdmVudCgnZmllbGRBZGRlZCcpO1xuICBldmVudHMuZmllbGRSZW1vdmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbW92ZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVuZGVyZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkUmVuZGVyZWQnKTtcblxuLy8gICByZXR1cm4gZXZlbnRzO1xuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50cztcbiIsInJlcXVpcmUoJy4va2MtdG9nZ2xlLmpzJyk7XG5yZXF1aXJlKCcuL3BvbHlmaWxscy5qcycpO1xuY29uc3QgZXh0ZW5kID0gcmVxdWlyZSgnZGVlcC1leHRlbmQnKTtcblxuKGZ1bmN0aW9uKCQpIHtcbiAgY29uc3QgRm9ybUJ1aWxkZXIgPSBhc3luYyBmdW5jdGlvbihvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG4gICAgY29uc3QgbWkxOG4gPSByZXF1aXJlKCdtaTE4bicpLmRlZmF1bHQ7XG4gICAgY29uc3QgZm9ybUJ1aWxkZXIgPSB0aGlzO1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgY29udHJvbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgY29udHJvbE9yZGVyOiBbXG4gICAgICAgICdhdXRvY29tcGxldGUnLFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnaGlkZGVuJyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICdudW1iZXInLFxuICAgICAgICAncmFkaW8tZ3JvdXAnLFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAndGV4dGFyZWEnXG4gICAgICBdLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIC8vIEFycmF5IG9mIGZpZWxkcyB0byBkaXNhYmxlXG4gICAgICBkaXNhYmxlRmllbGRzOiBbXSxcbiAgICAgIGVkaXRPbkFkZDogZmFsc2UsXG4gICAgICAvLyBVbmVkaXRhYmxlIGZpZWxkcyBvciBvdGhlciBjb250ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGFwcGVhclxuICAgICAgLy8gYmVmb3JlIGFuZCBhZnRlciByZWd1bGFyIGZpZWxkczpcbiAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICBwcmVwZW5kOiBmYWxzZSxcbiAgICAgIC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCBmaWVsZHMgdmFsdWVzXG4gICAgICAvLyBleDpcbiAgICAgIC8vIGRlZmF1bHRGaWVsZHM6IFt7XG4gICAgICAvLyAgIGxhYmVsOiAnRmlyc3QgTmFtZScsXG4gICAgICAvLyAgIG5hbWU6ICdmaXJzdC1uYW1lJyxcbiAgICAgIC8vICAgcmVxdWlyZWQ6ICd0cnVlJyxcbiAgICAgIC8vICAgZGVzY3JpcHRpb246ICdZb3VyIGZpcnN0IG5hbWUnLFxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcbiAgICAgIC8vIH0sIHtcbiAgICAgIC8vICAgbGFiZWw6ICdQaG9uZScsXG4gICAgICAvLyAgIG5hbWU6ICdwaG9uZScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnSG93IGNhbiB3ZSByZWFjaCB5b3U/JyxcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXG4gICAgICAvLyB9XSxcbiAgICAgIGRlZmF1bHRGaWVsZHM6IFtdLFxuICAgICAgaW5wdXRTZXRzOiBbXSxcbiAgICAgIGZpZWxkUmVtb3ZlV2FybjogZmFsc2UsXG4gICAgICByb2xlczoge1xuICAgICAgICAxOiAnQWRtaW5pc3RyYXRvcidcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICBhbGxGaWVsZHNSZW1vdmVkOiAnQWxsIGZpZWxkcyB3ZXJlIHJlbW92ZWQuJyxcbiAgICAgICAgYWxsb3dNdWx0aXBsZUZpbGVzOiAnQWxsb3cgdXNlcnMgdG8gdXBsb2FkIG11bHRpcGxlIGZpbGVzJyxcbiAgICAgICAgYXV0b2NvbXBsZXRlOiAnQXV0b2NvbXBsZXRlJyxcbiAgICAgICAgYnV0dG9uOiAnQnV0dG9uJyxcbiAgICAgICAgY2Fubm90QmVFbXB0eTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgY2hlY2tib3hHcm91cDogJ0NoZWNrYm94IEdyb3VwJyxcbiAgICAgICAgY2hlY2tib3g6ICdDaGVja2JveCcsXG4gICAgICAgIGNoZWNrYm94ZXM6ICdDaGVja2JveGVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2xhc3MnLFxuICAgICAgICBjbGVhckFsbE1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xlYXIgYWxsIGZpZWxkcz8nLFxuICAgICAgICBjbGVhckFsbDogJ0NsZWFyJyxcbiAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgIGNvbnRlbnQ6ICdDb250ZW50JyxcbiAgICAgICAgY29weTogJ0NvcHkgVG8gQ2xpcGJvYXJkJyxcbiAgICAgICAgY29weUJ1dHRvbjogJyYjNDM7JyxcbiAgICAgICAgY29weUJ1dHRvblRvb2x0aXA6ICdDb3B5JyxcbiAgICAgICAgZGF0ZUZpZWxkOiAnRGF0ZSBGaWVsZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscCBUZXh0JyxcbiAgICAgICAgZGVzY3JpcHRpb25GaWVsZDogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgZGV2TW9kZTogJ0RldmVsb3BlciBNb2RlJyxcbiAgICAgICAgZWRpdE5hbWVzOiAnRWRpdCBOYW1lcycsXG4gICAgICAgIGVkaXRvclRpdGxlOiAnRm9ybSBFbGVtZW50cycsXG4gICAgICAgIGVkaXRYTUw6ICdFZGl0IFhNTCcsXG4gICAgICAgIGVuYWJsZU90aGVyOiAnRW5hYmxlICZxdW90O090aGVyJnF1b3Q7JyxcbiAgICAgICAgZW5hYmxlT3RoZXJNc2c6ICdMZXQgdXNlcnMgdG8gZW50ZXIgYW4gdW5saXN0ZWQgb3B0aW9uJyxcbiAgICAgICAgZmllbGREZWxldGVXYXJuaW5nOiBmYWxzZSxcbiAgICAgICAgZmllbGRWYXJzOiAnRmllbGQgVmFyaWFibGVzJyxcbiAgICAgICAgZmllbGROb25FZGl0YWJsZTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVkaXRlZC4nLFxuICAgICAgICBmaWVsZFJlbW92ZVdhcm5pbmc6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgZmllbGQ/JyxcbiAgICAgICAgZmlsZVVwbG9hZDogJ0ZpbGUgVXBsb2FkJyxcbiAgICAgICAgZm9ybVVwZGF0ZWQ6ICdGb3JtIFVwZGF0ZWQnLFxuICAgICAgICBnZXRTdGFydGVkOiAnRHJhZyBhIGZpZWxkIGZyb20gdGhlIHJpZ2h0IHRvIHRoaXMgYXJlYScsXG4gICAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICAgIGhpZGU6ICdFZGl0JyxcbiAgICAgICAgaGlkZGVuOiAnSGlkZGVuIElucHV0JyxcbiAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgIGxhYmVsRW1wdHk6ICdGaWVsZCBMYWJlbCBjYW5ub3QgYmUgZW1wdHknLFxuICAgICAgICBsaW1pdFJvbGU6ICdMaW1pdCBhY2Nlc3MgdG8gb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyByb2xlczonLFxuICAgICAgICBtYW5kYXRvcnk6ICdNYW5kYXRvcnknLFxuICAgICAgICBtYXhsZW5ndGg6ICdNYXggTGVuZ3RoJyxcbiAgICAgICAgbWluT3B0aW9uTWVzc2FnZTogJ1RoaXMgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mIDIgb3B0aW9ucycsXG4gICAgICAgIG11bHRpcGxlRmlsZXM6ICdNdWx0aXBsZSBGaWxlcycsXG4gICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgbm86ICdObycsXG4gICAgICAgIG5vRmllbGRzVG9DbGVhcjogJ1RoZXJlIGFyZSBubyBmaWVsZHMgdG8gY2xlYXInLFxuICAgICAgICBudW1iZXI6ICdOdW1iZXInLFxuICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICBvbjogJ09uJyxcbiAgICAgICAgb3B0aW9uOiAnT3B0aW9uJyxcbiAgICAgICAgb3B0aW9uYWw6ICdvcHRpb25hbCcsXG4gICAgICAgIG9wdGlvbkxhYmVsUGxhY2Vob2xkZXI6ICdMYWJlbCcsXG4gICAgICAgIG9wdGlvblZhbHVlUGxhY2Vob2xkZXI6ICdWYWx1ZScsXG4gICAgICAgIG9wdGlvbkVtcHR5OiAnT3B0aW9uIHZhbHVlIHJlcXVpcmVkJyxcbiAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgIHBhcmFncmFwaDogJ1BhcmFncmFwaCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnUGxhY2Vob2xkZXInLFxuICAgICAgICBwbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICB0ZXh0YXJlYTogJycsXG4gICAgICAgICAgZW1haWw6ICdFbnRlciB5b3UgZW1haWwnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdzcGFjZSBzZXBhcmF0ZWQgY2xhc3NlcycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICdFbnRlciB5b3VyIHBhc3N3b3JkJ1xuICAgICAgICB9LFxuICAgICAgICBwcmV2aWV3OiAnUHJldmlldycsXG4gICAgICAgIHJhZGlvR3JvdXA6ICdSYWRpbyBHcm91cCcsXG4gICAgICAgIHJhZGlvOiAnUmFkaW8nLFxuICAgICAgICByZW1vdmVNZXNzYWdlOiAnUmVtb3ZlIEVsZW1lbnQnLFxuICAgICAgICByZW1vdmVPcHRpb246ICdSZW1vdmUgT3B0aW9uJyxcbiAgICAgICAgcmVtb3ZlOiAnJiMyMTU7JyxcbiAgICAgICAgcmVxdWlyZWQ6ICdSZXF1aXJlZCcsXG4gICAgICAgIHJpY2hUZXh0OiAnUmljaCBUZXh0IEVkaXRvcicsXG4gICAgICAgIHJvbGVzOiAnQWNjZXNzJyxcbiAgICAgICAgcm93czogJ1Jvd3MnLFxuICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgIHNlbGVjdE9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICAgICAgc2VsZWN0OiAnU2VsZWN0JyxcbiAgICAgICAgc2VsZWN0Q29sb3I6ICdTZWxlY3QgQ29sb3InLFxuICAgICAgICBzZWxlY3Rpb25zTWVzc2FnZTogJ0FsbG93IE11bHRpcGxlIFNlbGVjdGlvbnMnLFxuICAgICAgICBzaXplOiAnU2l6ZScsXG4gICAgICAgIHNpemVzOiB7XG4gICAgICAgICAgeHM6ICdFeHRyYSBTbWFsbCcsXG4gICAgICAgICAgc206ICdTbWFsbCcsXG4gICAgICAgICAgbTogJ0RlZmF1bHQnLFxuICAgICAgICAgIGxnOiAnTGFyZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiAnU3R5bGUnLFxuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICBidG46IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogJ0RlZmF1bHQnLFxuICAgICAgICAgICAgZGFuZ2VyOiAnRGFuZ2VyJyxcbiAgICAgICAgICAgIGluZm86ICdJbmZvJyxcbiAgICAgICAgICAgIHByaW1hcnk6ICdQcmltYXJ5JyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3VidHlwZTogJ1R5cGUnLFxuICAgICAgICB0ZXh0OiAnVGV4dCBGaWVsZCcsXG4gICAgICAgIHRleHRBcmVhOiAnVGV4dCBBcmVhJyxcbiAgICAgICAgdG9nZ2xlOiAnVG9nZ2xlJyxcbiAgICAgICAgd2FybmluZzogJ1dhcm5pbmchJyxcbiAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgIHZpZXdKU09OOiAneyAgfScsXG4gICAgICAgIHZpZXdYTUw6ICcmbHQ7LyZndDsnLFxuICAgICAgICB5ZXM6ICdZZXMnXG4gICAgICB9LFxuICAgICAgbm90aWZ5OiB7XG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm5pbmc6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25TYXZlOiB1dGlscy5ub29wLFxuICAgICAgb25DbGVhckFsbDogdXRpbHMubm9vcCxcbiAgICAgIGFjdGlvbkJ1dHRvbnM6IFt7XG4gICAgICAgIGxhYmVsOiAnQ2xlYXInLFxuICAgICAgICBjbGFzc05hbWU6ICdjbGVhci1hbGwgYnRuIGJ0bi1kYW5nZXInLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgICAgICAgICAgbGV0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHtcbiAgICAgICAgICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIF9oZWxwZXJzLmNvbmZpcm0ob3B0cy5tZXNzYWdlcy5jbGVhckFsbE1lc3NhZ2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcygpO1xuICAgICAgICAgICAgICAgIG9wdHMubm90aWZ5LnN1Y2Nlc3Mob3B0cy5tZXNzYWdlcy5hbGxGaWVsZHNSZW1vdmVkKTtcbiAgICAgICAgICAgICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICAgICAgICAgICAgb3B0cy5vbkNsZWFyQWxsKCk7XG4gICAgICAgICAgICAgIH0sIGNvb3Jkcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfaGVscGVycy5kaWFsb2cob3B0cy5tZXNzYWdlcy5ub0ZpZWxkc1RvQ2xlYXIsIGNvb3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnU2F2ZScsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdidG4gYnRuLXByaW1hcnkgc2F2ZS10ZW1wbGF0ZScsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiBvcHRzLm9uU2F2ZShfaGVscGVycy5zYXZlKCkpXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgc29ydGFibGVDb250cm9sczogZmFsc2UsXG4gICAgICBzdGlja3lDb250cm9sczoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgIH1cblxuICAgICAgfSxcbiAgICAgIHNob3dBY3Rpb25CdXR0b25zOiB0cnVlLFxuICAgICAgdHlwZVVzZXJBdHRyczoge30sXG4gICAgICB0eXBlVXNlckV2ZW50czoge30sXG4gICAgICBwcmVmaXg6ICdmb3JtLWJ1aWxkZXItJ1xuICAgIH07XG5cblxuICAgIGRlZmF1bHRzLmkxOG4gPSB7XG4gICAgICBsYW5nczogW1xuICAgICAgICAnZW4tVVMnXG4gICAgICBdLFxuICAgICAgcHJlbG9hZGVkOiB7XG4gICAgICAgICdlbi1VUyc6IHtcbiAgICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICAgIGFsbEZpZWxkc1JlbW92ZWQ6ICdBbGwgZmllbGRzIHdlcmUgcmVtb3ZlZC4nLFxuICAgICAgICAgIGFsbG93TXVsdGlwbGVGaWxlczogJ0FsbG93IHVzZXJzIHRvIHVwbG9hZCBtdWx0aXBsZSBmaWxlcycsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiAnQXV0b2NvbXBsZXRlJyxcbiAgICAgICAgICBidXR0b246ICdCdXR0b24nLFxuICAgICAgICAgIGNhbm5vdEJlRW1wdHk6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgY2hlY2tib3hHcm91cDogJ0NoZWNrYm94IEdyb3VwJyxcbiAgICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcbiAgICAgICAgICBjaGVja2JveGVzOiAnQ2hlY2tib3hlcycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2xhc3MnLFxuICAgICAgICAgIGNsZWFyQWxsTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbGVhciBhbGwgZmllbGRzPycsXG4gICAgICAgICAgY2xlYXJBbGw6ICdDbGVhcicsXG4gICAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgICAgY29udGVudDogJ0NvbnRlbnQnLFxuICAgICAgICAgIGNvcHk6ICdDb3B5IFRvIENsaXBib2FyZCcsXG4gICAgICAgICAgY29weUJ1dHRvbjogJyYjNDM7JyxcbiAgICAgICAgICBjb3B5QnV0dG9uVG9vbHRpcDogJ0NvcHknLFxuICAgICAgICAgIGRhdGVGaWVsZDogJ0RhdGUgRmllbGQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscCBUZXh0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbkZpZWxkOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgIGRldk1vZGU6ICdEZXZlbG9wZXIgTW9kZScsXG4gICAgICAgICAgZWRpdE5hbWVzOiAnRWRpdCBOYW1lcycsXG4gICAgICAgICAgZWRpdG9yVGl0bGU6ICdGb3JtIEVsZW1lbnRzJyxcbiAgICAgICAgICBlZGl0WE1MOiAnRWRpdCBYTUwnLFxuICAgICAgICAgIGVuYWJsZU90aGVyOiAnRW5hYmxlICZxdW90O090aGVyJnF1b3Q7JyxcbiAgICAgICAgICBlbmFibGVPdGhlck1zZzogJ0xldCB1c2VycyB0byBlbnRlciBhbiB1bmxpc3RlZCBvcHRpb24nLFxuICAgICAgICAgIGZpZWxkRGVsZXRlV2FybmluZzogZmFsc2UsXG4gICAgICAgICAgZmllbGRWYXJzOiAnRmllbGQgVmFyaWFibGVzJyxcbiAgICAgICAgICBmaWVsZE5vbkVkaXRhYmxlOiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZWRpdGVkLicsXG4gICAgICAgICAgZmllbGRSZW1vdmVXYXJuaW5nOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIGZpZWxkPycsXG4gICAgICAgICAgZmlsZVVwbG9hZDogJ0ZpbGUgVXBsb2FkJyxcbiAgICAgICAgICBmb3JtVXBkYXRlZDogJ0Zvcm0gVXBkYXRlZCcsXG4gICAgICAgICAgZ2V0U3RhcnRlZDogJ0RyYWcgYSBmaWVsZCBmcm9tIHRoZSByaWdodCB0byB0aGlzIGFyZWEnLFxuICAgICAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICAgICAgaGlkZTogJ0VkaXQnLFxuICAgICAgICAgIGhpZGRlbjogJ0hpZGRlbiBJbnB1dCcsXG4gICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgbGFiZWxFbXB0eTogJ0ZpZWxkIExhYmVsIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgbGltaXRSb2xlOiAnTGltaXQgYWNjZXNzIHRvIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgcm9sZXM6JyxcbiAgICAgICAgICBtYW5kYXRvcnk6ICdNYW5kYXRvcnknLFxuICAgICAgICAgIG1heGxlbmd0aDogJ01heCBMZW5ndGgnLFxuICAgICAgICAgIG1pbk9wdGlvbk1lc3NhZ2U6ICdUaGlzIGZpZWxkIHJlcXVpcmVzIGEgbWluaW11bSBvZiAyIG9wdGlvbnMnLFxuICAgICAgICAgIG11bHRpcGxlRmlsZXM6ICdNdWx0aXBsZSBGaWxlcycsXG4gICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgIG5vOiAnTm8nLFxuICAgICAgICAgIG5vRmllbGRzVG9DbGVhcjogJ1RoZXJlIGFyZSBubyBmaWVsZHMgdG8gY2xlYXInLFxuICAgICAgICAgIG51bWJlcjogJ051bWJlcicsXG4gICAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgICBvbjogJ09uJyxcbiAgICAgICAgICBvcHRpb246ICdPcHRpb24nLFxuICAgICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxuICAgICAgICAgIG9wdGlvbkxhYmVsUGxhY2Vob2xkZXI6ICdMYWJlbCcsXG4gICAgICAgICAgb3B0aW9uVmFsdWVQbGFjZWhvbGRlcjogJ1ZhbHVlJyxcbiAgICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXG4gICAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgICAgcGFyYWdyYXBoOiAnUGFyYWdyYXBoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgICAgIHZhbHVlOiAnVmFsdWUnLFxuICAgICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIHRleHRhcmVhOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnRW50ZXIgeW91IGVtYWlsJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NwYWNlIHNlcGFyYXRlZCBjbGFzc2VzJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnRW50ZXIgeW91ciBwYXNzd29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByZXZpZXc6ICdQcmV2aWV3JyxcbiAgICAgICAgICByYWRpb0dyb3VwOiAnUmFkaW8gR3JvdXAnLFxuICAgICAgICAgIHJhZGlvOiAnUmFkaW8nLFxuICAgICAgICAgIHJlbW92ZU1lc3NhZ2U6ICdSZW1vdmUgRWxlbWVudCcsXG4gICAgICAgICAgcmVtb3ZlT3B0aW9uOiAnUmVtb3ZlIE9wdGlvbicsXG4gICAgICAgICAgcmVtb3ZlOiAnJiMyMTU7JyxcbiAgICAgICAgICByZXF1aXJlZDogJ1JlcXVpcmVkJyxcbiAgICAgICAgICByaWNoVGV4dDogJ1JpY2ggVGV4dCBFZGl0b3InLFxuICAgICAgICAgIHJvbGVzOiAnQWNjZXNzJyxcbiAgICAgICAgICByb3dzOiAnUm93cycsXG4gICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgIHNlbGVjdE9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICAgICAgICBzZWxlY3Q6ICdTZWxlY3QnLFxuICAgICAgICAgIHNlbGVjdENvbG9yOiAnU2VsZWN0IENvbG9yJyxcbiAgICAgICAgICBzZWxlY3Rpb25zTWVzc2FnZTogJ0FsbG93IE11bHRpcGxlIFNlbGVjdGlvbnMnLFxuICAgICAgICAgIHNpemU6ICdTaXplJyxcbiAgICAgICAgICBzaXplczoge1xuICAgICAgICAgICAgeHM6ICdFeHRyYSBTbWFsbCcsXG4gICAgICAgICAgICBzbTogJ1NtYWxsJyxcbiAgICAgICAgICAgIG06ICdEZWZhdWx0JyxcbiAgICAgICAgICAgIGxnOiAnTGFyZ2UnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZTogJ1N0eWxlJyxcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIGJ0bjoge1xuICAgICAgICAgICAgICAnZGVmYXVsdCc6ICdEZWZhdWx0JyxcbiAgICAgICAgICAgICAgZGFuZ2VyOiAnRGFuZ2VyJyxcbiAgICAgICAgICAgICAgaW5mbzogJ0luZm8nLFxuICAgICAgICAgICAgICBwcmltYXJ5OiAnUHJpbWFyeScsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgd2FybmluZzogJ1dhcm5pbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWJ0eXBlOiAnVHlwZScsXG4gICAgICAgICAgdGV4dDogJ1RleHQgRmllbGQnLFxuICAgICAgICAgIHRleHRBcmVhOiAnVGV4dCBBcmVhJyxcbiAgICAgICAgICB0b2dnbGU6ICdUb2dnbGUnLFxuICAgICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nIScsXG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgICAgdmlld0pTT046ICd7ICB9JyxcbiAgICAgICAgICB2aWV3WE1MOiAnJmx0Oy8mZ3Q7JyxcbiAgICAgICAgICB5ZXM6ICdZZXMnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGZybWJJRCA9ICdmcm1iLScgKyAkKCd1bFtpZF49ZnJtYi1dJykubGVuZ3RoKys7XG4gICAgZm9ybUJ1aWxkZXIuZm9ybUlEID0gZnJtYklEO1xuICAgIGxldCB7aTE4biwgLi4ub3B0c30gPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgYXdhaXQgbWkxOG4uaW5pdChpMThuKTtcbiAgICBsZXQgX2hlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMuanMnKShvcHRzLCBmb3JtQnVpbGRlcik7XG5cbiAgICBjb25zdCBzdWJ0eXBlcyA9IF9oZWxwZXJzLnByb2Nlc3NTdWJ0eXBlcyhvcHRzLnN1YnR5cGVzKTtcblxuICAgIGxldCAkc29ydGFibGVGaWVsZHMgPSAkKCc8dWwvPicpLmF0dHIoJ2lkJywgZnJtYklEKS5hZGRDbGFzcygnZnJtYicpO1xuXG4gICAgZm9ybUJ1aWxkZXIubGF5b3V0ID0gX2hlbHBlcnMuZWRpdG9yTGF5b3V0KG9wdHMuY29udHJvbFBvc2l0aW9uKTtcbiAgICBmb3JtQnVpbGRlci5zdGFnZSA9ICRzb3J0YWJsZUZpZWxkc1swXTtcblxuICAgIGxldCBsYXN0SUQgPSBmcm1iSUQgKyAnLWZsZC0xJztcbiAgICBsZXQgYm94SUQgPSBmcm1iSUQgKyAnLWNvbnRyb2wtYm94JztcblxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiBmaWVsZCBvYmplY3RzIHRvIGN5Y2xlIHRocm91Z2hcbiAgICBsZXQgZnJtYkZpZWxkcyA9IFt7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5hdXRvY29tcGxldGUsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgbmFtZTogJ2F1dG9jb21wbGV0ZSdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5idXR0b24sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYnV0dG9uLWlucHV0JyxcbiAgICAgICAgbmFtZTogJ2J1dHRvbidcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5jaGVja2JveCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmNoZWNrYm94R3JvdXAsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICBjbGFzc05hbWU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgIG5hbWU6ICdjaGVja2JveC1ncm91cCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5kYXRlRmllbGQsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NhbGVuZGFyJyxcbiAgICAgICAgbmFtZTogJ2RhdGUtaW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuZmlsZVVwbG9hZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnZmlsZS1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICdmaWxlLWlucHV0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmhlYWRlcixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICBjbGFzc05hbWU6ICdoZWFkZXInXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuaGlkZGVuLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2hpZGRlbi1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICdoaWRkZW4taW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMubnVtYmVyLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIG5hbWU6ICdudW1iZXInXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMucGFyYWdyYXBoLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFncmFwaCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5yYWRpb0dyb3VwLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgY2xhc3NOYW1lOiAncmFkaW8tZ3JvdXAnLFxuICAgICAgICBuYW1lOiAncmFkaW8tZ3JvdXAnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuc2VsZWN0LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdCcsXG4gICAgICAgIG5hbWU6ICdzZWxlY3QnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMudGV4dCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAndGV4dC1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICd0ZXh0LWlucHV0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLnRleHRBcmVhLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3RleHRhcmVhJyxcbiAgICAgICAgY2xhc3NOYW1lOiAndGV4dC1hcmVhJyxcbiAgICAgICAgbmFtZTogJ3RleHRhcmVhJ1xuICAgICAgfVxuICAgIH1dO1xuXG4gICAgZnJtYkZpZWxkcyA9IF9oZWxwZXJzLm9yZGVyRmllbGRzKGZybWJGaWVsZHMpO1xuXG4gICAgaWYgKG9wdHMuZGlzYWJsZUZpZWxkcykge1xuICAgICAgLy8gcmVtb3ZlIGRpc2FibGVkRmllbGRzXG4gICAgICBmcm1iRmllbGRzID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5pbkFycmF5KGZpZWxkLmF0dHJzLnR5cGUsIG9wdHMuZGlzYWJsZUZpZWxkcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgZHJhZ2dhYmxlIGZpZWxkcyBmb3IgZm9ybUJ1aWxkZXJcbiAgICBsZXQgY2JVbCA9IHV0aWxzLm1hcmt1cCgndWwnLCBudWxsLCB7aWQ6IGJveElELCBjbGFzc05hbWU6ICdmcm1iLWNvbnRyb2wnfSk7XG4gICAgZm9ybUJ1aWxkZXIuY29udHJvbHMgPSBjYlVsO1xuXG4gICAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgY2JVbC5jbGFzc0xpc3QuYWRkKCdzb3J0LWVuYWJsZWQnKTtcbiAgICB9XG5cbiAgICBsZXQgJGNiVUwgPSAkKGNiVWwpO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoXG4gICAgdXRpbHMuZm9yRWFjaChmcm1iRmllbGRzLCAoaSkgPT4ge1xuICAgICAgbGV0ICRmaWVsZCA9ICQoJzxsaS8+Jywge1xuICAgICAgICAnY2xhc3MnOiAnaWNvbi0nICsgZnJtYkZpZWxkc1tpXS5hdHRycy5jbGFzc05hbWUsXG4gICAgICAgICd0eXBlJzogZnJtYkZpZWxkc1tpXS50eXBlLFxuICAgICAgICAnbmFtZSc6IGZybWJGaWVsZHNbaV0uY2xhc3NOYW1lLFxuICAgICAgICAnbGFiZWwnOiBmcm1iRmllbGRzW2ldLmxhYmVsXG4gICAgICB9KTtcblxuICAgICAgJGZpZWxkLmRhdGEoJ25ld0ZpZWxkRGF0YScsIGZybWJGaWVsZHNbaV0pO1xuXG4gICAgICBsZXQgdHlwZUxhYmVsID0gdXRpbHMubWFya3VwKCdzcGFuJywgZnJtYkZpZWxkc1tpXS5sYWJlbCk7XG4gICAgICAkZmllbGQuaHRtbCh0eXBlTGFiZWwpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICB9KTtcblxuICAgIGlmIChvcHRzLmlucHV0U2V0cy5sZW5ndGgpIHtcbiAgICAgICQoJzxsaS8+JywgeydjbGFzcyc6ICdmYi1zZXBhcmF0b3InfSkuaHRtbCgnPGhyPicpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICAgIG9wdHMuaW5wdXRTZXRzLmZvckVhY2goKHNldCkgPT4ge1xuICAgICAgICBzZXQubmFtZSA9IHNldC5uYW1lIHx8IF9oZWxwZXJzLm1ha2VDbGFzc05hbWUoc2V0LmxhYmVsKTtcbiAgICAgICAgbGV0ICRzZXQgPSAkKCc8bGkvPicsIHsnY2xhc3MnOiAnaW5wdXQtc2V0LWNvbnRyb2wnLCB0eXBlOiBzZXQubmFtZX0pO1xuICAgICAgICAkc2V0Lmh0bWwoc2V0LmxhYmVsKS5hcHBlbmRUbygkY2JVTCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0YWJsZSBmaWVsZHNcbiAgICAkc29ydGFibGVGaWVsZHMuc29ydGFibGUoe1xuICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICBvcGFjaXR5OiAwLjksXG4gICAgICByZXZlcnQ6IDE1MCxcbiAgICAgIGJlZm9yZVN0b3A6IF9oZWxwZXJzLmJlZm9yZVN0b3AsXG4gICAgICBzdGFydDogX2hlbHBlcnMuc3RhcnRNb3ZpbmcsXG4gICAgICBzdG9wOiBfaGVscGVycy5zdG9wTW92aW5nLFxuICAgICAgY2FuY2VsOiAnaW5wdXQsIHNlbGVjdCwgLmRpc2FibGVkLCAuZm9ybS1ncm91cCwgLmJ0bicsXG4gICAgICBwbGFjZWhvbGRlcjogJ2ZybWItcGxhY2Vob2xkZXInXG4gICAgfSk7XG5cbiAgICAvLyBDb250cm9sQm94IHdpdGggZGlmZmVyZW50IGZpZWxkc1xuICAgICRjYlVMLnNvcnRhYmxlKHtcbiAgICAgIGhlbHBlcjogJ2Nsb25lJyxcbiAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgIGNvbm5lY3RXaXRoOiAkc29ydGFibGVGaWVsZHMsXG4gICAgICBjYW5jZWw6ICcuZmItc2VwYXJhdG9yJyxcbiAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgIHBsYWNlaG9sZGVyOiAndWktc3RhdGUtaGlnaGxpZ2h0JyxcbiAgICAgIHN0YXJ0OiBfaGVscGVycy5zdGFydE1vdmluZyxcbiAgICAgIHN0b3A6IF9oZWxwZXJzLnN0b3BNb3ZpbmcsXG4gICAgICByZXZlcnQ6IDE1MCxcbiAgICAgIGJlZm9yZVN0b3A6IF9oZWxwZXJzLmJlZm9yZVN0b3AsXG4gICAgICBkaXN0YW5jZTogMyxcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgIGlmIChfaGVscGVycy5kb0NhbmNlbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkuaXRlbS5wYXJlbnQoKVswXSA9PT0gJHNvcnRhYmxlRmllbGRzWzBdKSB7XG4gICAgICAgICAgcHJvY2Vzc0NvbnRyb2wodWkuaXRlbSk7XG4gICAgICAgICAgX2hlbHBlcnMuZG9DYW5jZWwgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9oZWxwZXJzLnNldEZpZWxkT3JkZXIoJGNiVUwpO1xuICAgICAgICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gIW9wdHMuc29ydGFibGVDb250cm9scztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHByb2Nlc3NDb250cm9sID0gKGNvbnRyb2wpID0+IHtcbiAgICAgIGlmIChjb250cm9sWzBdLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQtc2V0LWNvbnRyb2wnKSkge1xuICAgICAgICBsZXQgaW5wdXRTZXQgPSBvcHRzLmlucHV0U2V0cy5maWx0ZXIoKHNldCkgPT4ge1xuICAgICAgICAgIHJldHVybiBzZXQubmFtZSA9PT0gY29udHJvbFswXS50eXBlO1xuICAgICAgICB9KVswXTtcbiAgICAgICAgaWYgKGlucHV0U2V0LnNob3dIZWFkZXIpIHtcbiAgICAgICAgICBsZXQgaGVhZGVyID0ge1xuICAgICAgICAgICAgICB0eXBlOiAnaGVhZGVyJyxcbiAgICAgICAgICAgICAgc3VidHlwZTogJ2gyJyxcbiAgICAgICAgICAgICAgaWQ6IGlucHV0U2V0Lm5hbWUsXG4gICAgICAgICAgICAgIGxhYmVsOiBpbnB1dFNldC5sYWJlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICBwcmVwRmllbGRWYXJzKGhlYWRlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRTZXQuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJlcEZpZWxkVmFycyhjb250cm9sLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0ICRmb3JtV3JhcCA9ICQoJzxkaXYvPicsIHtcbiAgICAgIGlkOiBmcm1iSUQgKyAnLWZvcm0td3JhcCcsXG4gICAgICAnY2xhc3MnOiAnZm9ybS13cmFwIGZvcm0tYnVpbGRlcicgKyBfaGVscGVycy5tb2JpbGVDbGFzcygpXG4gICAgfSk7XG5cbiAgICBmb3JtQnVpbGRlci5lZGl0b3IgPSAkZm9ybVdyYXBbMF07XG5cbiAgICBsZXQgJHN0YWdlV3JhcCA9ICQoJzxkaXYvPicsIHtcbiAgICAgIGlkOiBmcm1iSUQgKyAnLXN0YWdlLXdyYXAnLFxuICAgICAgJ2NsYXNzJzogJ3N0YWdlLXdyYXAgJyArIGZvcm1CdWlsZGVyLmxheW91dC5zdGFnZVxuICAgIH0pO1xuXG4gICAgbGV0IGNiV3JhcCA9ICQoJzxkaXYvPicsIHtcbiAgICAgIGlkOiBmcm1iSUQgKyAnLWNiLXdyYXAnLFxuICAgICAgJ2NsYXNzJzogJ2NiLXdyYXAgJyArIGZvcm1CdWlsZGVyLmxheW91dC5jb250cm9sc1xuICAgIH0pLmFwcGVuZCgkY2JVTFswXSk7XG5cbiAgICBpZiAob3B0cy5zaG93QWN0aW9uQnV0dG9ucykge1xuICAgICAgLy8gQnVpbGQgb3VyIGhlYWRlcnMgYW5kIGFjdGlvbiBsaW5rc1xuICAgICAgbGV0IHZpZXdEYXRhVGV4dDtcbiAgICAgIGxldCBtID0gdXRpbHMubWFya3VwO1xuICAgICAgaWYob3B0cy5kYXRhVHlwZSA9PT0gJ3htbCcpIHtcbiAgICAgICAgdmlld0RhdGFUZXh0ID0gb3B0cy5tZXNzYWdlcy52aWV3WE1MO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld0RhdGFUZXh0ID0gb3B0cy5tZXNzYWdlcy52aWV3SlNPTjtcbiAgICAgIH1cblxuICAgICAgbGV0IGJ1dHRvbnMgPSBvcHRzLmFjdGlvbkJ1dHRvbnMubWFwKF9oZWxwZXJzLnByb2Nlc3NBY3Rpb25CdXR0b25zKTtcblxuICAgICAgLy8gY29uc3Qgdmlld0RhdGEgPSBtKCdidXR0b24nLCB2aWV3RGF0YVRleHQsIHtcbiAgICAgIC8vICAgaWQ6IGZybWJJRCArICctdmlldy1kYXRhJyxcbiAgICAgIC8vICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAvLyAgIGNsYXNzTmFtZTogJ3ZpZXctZGF0YSBidG4gYnRuLWRlZmF1bHQnXG4gICAgICAvLyB9KTtcbiAgICAgIGNvbnN0IGNsZWFyQWxsID0gbSgnYnV0dG9uJywgb3B0cy5tZXNzYWdlcy5jbGVhckFsbCwge1xuICAgICAgICBpZDogZnJtYklEICsgJy1jbGVhci1hbGwnLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xlYXItYWxsIGJ0biBidG4tZGFuZ2VyJ1xuICAgICAgfSk7XG4gICAgICBjb25zdCBzYXZlQWxsID0gbSgnYnV0dG9uJywgb3B0cy5tZXNzYWdlcy5zYXZlLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYGJ0biBidG4tcHJpbWFyeSAke29wdHMucHJlZml4fXNhdmVgLFxuICAgICAgICBpZDogZnJtYklEICsgJy1zYXZlJyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbidcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZm9ybUFjdGlvbnMgPSBtKCdkaXYnLCBidXR0b25zLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Zvcm0tYWN0aW9ucyBidG4tZ3JvdXAnXG4gICAgICB9KTtcblxuICAgICAgY2JXcmFwLmFwcGVuZChmb3JtQWN0aW9ucyk7XG4gICAgfVxuXG4gICAgJHN0YWdlV3JhcC5hcHBlbmQoJHNvcnRhYmxlRmllbGRzLCBjYldyYXApO1xuICAgICRzdGFnZVdyYXAuYmVmb3JlKCRmb3JtV3JhcCk7XG4gICAgJGZvcm1XcmFwLmFwcGVuZCgkc3RhZ2VXcmFwLCBjYldyYXApO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAhPT0gJ3RleHRhcmVhJykge1xuICAgICAgJChlbGVtZW50KS5hcHBlbmQoJGZvcm1XcmFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChlbGVtZW50KS5yZXBsYWNlV2l0aCgkZm9ybVdyYXApO1xuICAgIH1cblxuICAgIGxldCBzYXZlQW5kVXBkYXRlID0gX2hlbHBlcnMuZGVib3VuY2UoZXZ0ID0+IHtcbiAgICAgIGlmIChldnQpIHtcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5dXAnICYmIGV2dC50YXJnZXQubmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgJGZpZWxkID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpO1xuICAgICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRmaWVsZCk7XG4gICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNhdmUgZmllbGQgb24gY2hhbmdlXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjaGFuZ2UgYmx1ciBrZXl1cCcsICcuZm9ybS1lbGVtZW50cyBpbnB1dCwgLmZvcm0tZWxlbWVudHMgc2VsZWN0LCAuZm9ybS1lbGVtZW50cyB0ZXh0YXJlYScsIHNhdmVBbmRVcGRhdGUpO1xuXG4gICAgJCgnbGknLCAkY2JVTCkuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBsZXQgJGNvbnRyb2wgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy51aS1zb3J0YWJsZS1oYW5kbGUnKTtcbiAgICAgIF9oZWxwZXJzLnN0b3BJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgIHByb2Nlc3NDb250cm9sKCRjb250cm9sKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBhcHBlbmQgYW5kIHByZXBlbmQgb3B0aW9ucyBpZiBuZWNlc3NhcnlcbiAgICBsZXQgbm9uRWRpdGFibGVGaWVsZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBjYW5jZWxBcnJheSA9IFtdO1xuXG4gICAgICBpZiAob3B0cy5wcmVwZW5kICYmICEkKCcuZGlzYWJsZWQucHJlcGVuZCcsICRzb3J0YWJsZUZpZWxkcykubGVuZ3RoKSB7XG4gICAgICAgIGxldCBwcmVwZW5kZWRGaWVsZCA9IHV0aWxzLm1hcmt1cCgnbGknLCBvcHRzLnByZXBlbmQsIHtjbGFzc05hbWU6ICdkaXNhYmxlZCBwcmVwZW5kJ30pO1xuICAgICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAkc29ydGFibGVGaWVsZHMucHJlcGVuZChwcmVwZW5kZWRGaWVsZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmFwcGVuZCAmJiAhJCgnLmRpc2FibGVkLmFwcGVuZCcsICRzb3J0YWJsZUZpZWxkcykubGVuZ3RoKSB7XG4gICAgICAgIGxldCBhcHBlbmRlZEZpZWxkID0gdXRpbHMubWFya3VwKCdsaScsIG9wdHMuYXBwZW5kLCB7Y2xhc3NOYW1lOiAnZGlzYWJsZWQgYXBwZW5kJ30pO1xuICAgICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAkc29ydGFibGVGaWVsZHMuYXBwZW5kKGFwcGVuZGVkRmllbGQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBwcmVwRmllbGRWYXJzID0gZnVuY3Rpb24oJGZpZWxkLCBpc05ldyA9IGZhbHNlKSB7XG4gICAgICBsZXQgZmllbGQgPSB7fTtcbiAgICAgIGlmICgkZmllbGQgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9ICRmaWVsZC5kYXRhKCduZXdGaWVsZERhdGEnKTtcbiAgICAgICAgaWYgKGZpZWxkRGF0YSkge1xuICAgICAgICAgIGZpZWxkID0gZmllbGREYXRhLmF0dHJzO1xuICAgICAgICAgIGZpZWxkLmxhYmVsID0gZmllbGREYXRhLmxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBhdHRycyA9ICRmaWVsZFswXS5hdHRyaWJ1dGVzO1xuICAgICAgICAgIGlmICghaXNOZXcpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlcyA9ICRmaWVsZC5jaGlsZHJlbigpLm1hcCgoaW5kZXgsIGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJChlbGVtKS50ZXh0KCksXG4gICAgICAgICAgICAgICAgdmFsdWU6ICQoZWxlbSkuYXR0cigndmFsdWUnKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogQm9vbGVhbigkKGVsZW0pLmF0dHIoJ3NlbGVjdGVkJykpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGZpZWxkW2F0dHJzW2ldLm5hbWVdID0gYXR0cnNbaV0udmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZCA9IE9iamVjdC5hc3NpZ24oe30sICRmaWVsZCk7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkLm5hbWUgPSBpc05ldyA/IG5hbWVBdHRyKGZpZWxkKSA6ICggZmllbGQubmFtZSB8fCBuYW1lQXR0cihmaWVsZCkgKTtcblxuICAgICAgaWYgKGlzTmV3ICYmIHV0aWxzLmluQXJyYXkoZmllbGQudHlwZSwgWyd0ZXh0JywgJ251bWJlcicsICdmaWxlJywgJ3NlbGVjdCcsICd0ZXh0YXJlYSddKSkge1xuICAgICAgICBmaWVsZC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJzsgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IGZpZWxkLmNsYXNzIHx8IGZpZWxkLmNsYXNzTmFtZTsgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgIH1cblxuICAgICAgbGV0IG1hdGNoID0gLyg/Ol58XFxzKWJ0bi0oLio/KSg/Olxcc3wkKS9nLmV4ZWMoZmllbGQuY2xhc3NOYW1lKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBmaWVsZC5zdHlsZSA9IG1hdGNoWzFdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5lc2NhcGVBdHRycyhmaWVsZCk7XG5cbiAgICAgIGFwcGVuZE5ld0ZpZWxkKGZpZWxkLCBpc05ldyk7XG4gICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMuZmllbGRBZGRlZCk7XG4gICAgICB9XG4gICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZSBzYXZlZCBYTUwgdGVtcGxhdGUgZGF0YVxuICAgIGxldCBsb2FkRmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgZm9ybURhdGEgPSBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgICAgIGlmIChmb3JtRGF0YSAmJiBmb3JtRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHByZXBGaWVsZFZhcnMoZm9ybURhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgICB9IGVsc2UgaWYgKG9wdHMuZGVmYXVsdEZpZWxkcyAmJiBvcHRzLmRlZmF1bHRGaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIExvYWQgZGVmYXVsdCBmaWVsZHMgaWYgbm9uZSBhcmUgc2V0XG4gICAgICAgIG9wdHMuZGVmYXVsdEZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHByZXBGaWVsZFZhcnMoZmllbGQpKTtcbiAgICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgIH0gZWxzZSBpZiAoIW9wdHMucHJlcGVuZCAmJiAhb3B0cy5hcHBlbmQpIHtcbiAgICAgICAgJHN0YWdlV3JhcC5hZGRDbGFzcygnZW1wdHknKVxuICAgICAgICAuYXR0cignZGF0YS1jb250ZW50Jywgb3B0cy5tZXNzYWdlcy5nZXRTdGFydGVkKTtcbiAgICAgIH1cbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcblxuICAgICAgLy8gbGV0ICRmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkOm5vdCguZGlzYWJsZWQpJywgJHNvcnRhYmxlRmllbGRzKTtcbiAgICAgIC8vICRmaWVsZHMuZWFjaChpID0+IF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJCgkZmllbGRzW2ldKSkpO1xuXG4gICAgICBub25FZGl0YWJsZUZpZWxkcygpO1xuICAgIH07XG5cbiAgICAvLyBjYWxsYmFjayB0byB0cmFjayBkaXNhYmxlZCB0b29sdGlwc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignbW91c2Vtb3ZlJywgJ2xpLmRpc2FibGVkJywgZSA9PiB7XG4gICAgICAkKCcuZnJtYi10dCcsIHRoaXMpLmNzcyh7XG4gICAgICAgIGxlZnQ6IGUub2Zmc2V0WCAtIDE2LFxuICAgICAgICB0b3A6IGUub2Zmc2V0WSAtIDM0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGNhbGxiYWNrIHRvIGNhbGwgZGlzYWJsZWQgdG9vbHRpcHNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlZW50ZXInLCAnbGkuZGlzYWJsZWQnLCBlID0+XG4gICAgICBfaGVscGVycy5kaXNhYmxlZFRULmFkZCgkKHRoaXMpKSk7XG5cbiAgICAvLyBjYWxsYmFjayB0byBjYWxsIGRpc2FibGVkIHRvb2x0aXBzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdtb3VzZWxlYXZlJywgJ2xpLmRpc2FibGVkJywgZSA9PlxuICAgICAgX2hlbHBlcnMuZGlzYWJsZWRUVC5yZW1vdmUoJCh0aGlzKSkpO1xuXG4gICAgbGV0IG5hbWVBdHRyID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIGxldCBlcG9jaCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgcmV0dXJuIGZpZWxkLnR5cGUgKyAnLScgKyBlcG9jaDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGRhdGEgZm9yIGZpZWxkIHdpdGggb3B0aW9ucyBbc2VsZWN0LCBjaGVja2JveC1ncm91cCwgcmFkaW8tZ3JvdXBdXG4gICAgICpcbiAgICAgKiBAdG9kbyAgIHJlZmFjdG9yIHRoaXMgbmFzdHkgfmNyYXB+IGNvZGUsIGl0cyBhY3R1YWxseSBwYWluZnVsIHRvIGxvb2sgYXRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gZmllbGQgb3B0aW9ucyBtYXJrdXBcbiAgICAgKi9cbiAgICBsZXQgZmllbGRPcHRpb25zID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICBsZXQgb3B0aW9uQWN0aW9ucyA9IFtcbiAgICAgICAgICB1dGlscy5tYXJrdXAoJ2EnLCBvcHRzLm1lc3NhZ2VzLmFkZE9wdGlvbiwge2NsYXNzTmFtZTogJ2FkZCBhZGQtb3B0J30pXG4gICAgICAgIF07XG4gICAgICBsZXQgZmllbGRPcHRpb25zID0gW1xuICAgICAgICBgPGxhYmVsIGNsYXNzPVwiZmFsc2UtbGFiZWxcIj4ke29wdHMubWVzc2FnZXMuc2VsZWN0T3B0aW9uc308L2xhYmVsPmBcbiAgICAgIF07XG4gICAgICBjb25zdCBpc011bHRpcGxlID0gdmFsdWVzLm11bHRpcGxlIHx8ICh2YWx1ZXMudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJyk7XG5cbiAgICAgIGlmICghdmFsdWVzLnZhbHVlcyB8fCAhdmFsdWVzLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWVzLnZhbHVlcyA9IFsxLCAyLCAzXS5tYXAoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgbGFiZWwgPSBgJHtvcHRzLm1lc3NhZ2VzLm9wdGlvbn0gJHtpbmRleH1gO1xuICAgICAgICAgIGxldCBvcHRpb24gPSB7XG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICB2YWx1ZTogdXRpbHMuaHlwaGVuQ2FzZShsYWJlbClcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH0pO1xuICAgICAgICB2YWx1ZXMudmFsdWVzWzBdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVuc3VyZSBvcHRpb24gZGF0YSBpcyBoYXMgYWxsIHJlcXVpcmVkIGtleXNcbiAgICAgICAgdmFsdWVzLnZhbHVlcy5mb3JFYWNoKG9wdGlvbiA9PiBPYmplY3QuYXNzaWduKHt9LCB7c2VsZWN0ZWQ6IGZhbHNlfSwgb3B0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8ZGl2IGNsYXNzPVwic29ydGFibGUtb3B0aW9ucy13cmFwXCI+Jyk7XG5cbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8b2wgY2xhc3M9XCJzb3J0YWJsZS1vcHRpb25zXCI+Jyk7XG4gICAgICB1dGlscy5mb3JFYWNoKHZhbHVlcy52YWx1ZXMsIChpKSA9PiB7XG4gICAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKHNlbGVjdEZpZWxkT3B0aW9ucyh2YWx1ZXMubmFtZSwgdmFsdWVzLnZhbHVlc1tpXSwgaXNNdWx0aXBsZSkpO1xuICAgICAgfSk7XG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9vbD4nKTtcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKHV0aWxzLm1hcmt1cCgnZGl2Jywgb3B0aW9uQWN0aW9ucywge2NsYXNzTmFtZTogJ29wdGlvbi1hY3Rpb25zJ30pLm91dGVySFRNTCk7XG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPC9kaXY+Jyk7XG5cbiAgICAgIHJldHVybiB1dGlscy5tYXJrdXAoJ2RpdicsIGZpZWxkT3B0aW9ucy5qb2luKCcnKSwge2NsYXNzTmFtZTogJ2Zvcm0tZ3JvdXAgZmllbGQtb3B0aW9ucyd9KS5vdXRlckhUTUw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBlZGl0YWJsZSBwcm9wZXJ0aWVzIGZvciB0aGUgZmllbGRcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHZhbHVlcyBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgYWR2YW5jZWQgZmllbGRzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgbWFya3VwIGZvciBhZHZhbmNlZCBmaWVsZHNcbiAgICAgKi9cbiAgICBsZXQgYWR2RmllbGRzID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICBsZXQgYWR2RmllbGRzID0gW107XG4gICAgICBsZXQga2V5O1xuICAgICAgbGV0IG9wdGlvbkZpZWxkcyA9IFtcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgICdyYWRpby1ncm91cCdcbiAgICAgIF07XG4gICAgICBsZXQgaXNPcHRpb25GaWVsZCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChvcHRpb25GaWVsZHMuaW5kZXhPZih2YWx1ZXMudHlwZSkgIT09IC0xKTtcbiAgICAgIH0pKCk7XG4gICAgICBsZXQgdmFsdWVGaWVsZCA9ICF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnZmlsZSddLmNvbmNhdChvcHRpb25GaWVsZHMpKTtcbiAgICAgIGxldCByb2xlcyA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyB2YWx1ZXMucm9sZS5zcGxpdCgnLCcpIDogW107XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKHJlcXVpcmVkRmllbGQodmFsdWVzKSk7XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCd0b2dnbGUnLCB2YWx1ZXMsIHtmaXJzdDogb3B0cy5tZXNzYWdlcy50b2dnbGV9KSk7XG4gICAgICB9XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2xhYmVsJywgdmFsdWVzKSk7XG5cbiAgICAgIHZhbHVlcy5zaXplID0gdmFsdWVzLnNpemUgfHwgJ20nO1xuICAgICAgdmFsdWVzLnN0eWxlID0gdmFsdWVzLnN0eWxlIHx8ICdkZWZhdWx0JztcblxuICAgICAgLy8gSGVscCBUZXh0IC8gRGVzY3JpcHRpb24gRmllbGRcbiAgICAgIGlmICghdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgWydoZWFkZXInLCAncGFyYWdyYXBoJywgJ2J1dHRvbiddKSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdkZXNjcmlwdGlvbicsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3VidHlwZXNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICAgIGxldCBvcHRpb25EYXRhID0gc3VidHlwZXNbdmFsdWVzLnR5cGVdO1xuICAgICAgICBhZHZGaWVsZHMucHVzaChzZWxlY3RBdHRyaWJ1dGUoJ3N1YnR5cGUnLCB2YWx1ZXMsIG9wdGlvbkRhdGEpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChidG5TdHlsZXModmFsdWVzLnN0eWxlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtaW4nLCB2YWx1ZXMpKTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtYXgnLCB2YWx1ZXMpKTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdzdGVwJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYWNlaG9sZGVyXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHZhbHVlcykpO1xuXG4gICAgICAvLyBUZXh0QXJlYSBSb3dzIEF0dHJpYnV0ZVxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgncm93cycsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGFzc1xuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgnY2xhc3NOYW1lJywgdmFsdWVzKSk7XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZXMpKTtcblxuICAgICAgaWYgKHZhbHVlRmllbGQpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgbGV0IGxhYmVscyA9IHtcbiAgICAgICAgICBmaXJzdDogb3B0cy5tZXNzYWdlcy5tdWx0aXBsZUZpbGVzLFxuICAgICAgICAgIHNlY29uZDogb3B0cy5tZXNzYWdlcy5hbGxvd011bHRpcGxlRmlsZXNcbiAgICAgICAgfTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIGxhYmVscykpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcm9sZXNEaXNwbGF5ID0gdmFsdWVzLnJvbGUgIT09IHVuZGVmaW5lZCA/ICdzdHlsZT1cImRpc3BsYXk6YmxvY2tcIicgOiAnJztcbiAgICAgIGxldCBhdmFpbGFibGVSb2xlcyA9IFtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhdmFpbGFibGUtcm9sZXNcIiAke3JvbGVzRGlzcGxheX0+YFxuICAgICAgXTtcbiAgICAgIGZvciAoa2V5IGluIG9wdHMucm9sZXMpIHtcbiAgICAgICAgaWYgKG9wdHMucm9sZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGxldCBjaGVja2VkID0gdXRpbHMuaW5BcnJheShrZXksIHJvbGVzKSA/ICdjaGVja2VkJyA6ICcnO1xuICAgICAgICAgIGxldCByb2xlSWQgPSBgZmxkLSR7bGFzdElEfS1yb2xlcy0ke2tleX1gO1xuICAgICAgICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicm9sZXNbXVwiIHZhbHVlPVwiJHtrZXl9XCIgaWQ9XCIke3JvbGVJZH1cIiAke2NoZWNrZWR9IGNsYXNzPVwicm9sZXMtZmllbGRcIiAvPiA8bGFiZWwgZm9yPVwiJHtyb2xlSWR9XCI+JHtvcHRzLnJvbGVzW2tleV19PC9sYWJlbD48YnIvPmApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goJzwvZGl2PicpO1xuXG4gICAgICBsZXQgYWNjZXNzTGFiZWxzID0ge2ZpcnN0OiBvcHRzLm1lc3NhZ2VzLnJvbGVzLCBzZWNvbmQ6IG9wdHMubWVzc2FnZXMubGltaXRSb2xlLCBjb250ZW50OiBhdmFpbGFibGVSb2xlcy5qb2luKCcnKX07XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ2FjY2VzcycsIHZhbHVlcywgYWNjZXNzTGFiZWxzKSk7XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJyB8fCB2YWx1ZXMudHlwZSA9PT0gJ3JhZGlvLWdyb3VwJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdvdGhlcicsIHZhbHVlcywge2ZpcnN0OiBvcHRzLm1lc3NhZ2VzLmVuYWJsZU90aGVyLCBzZWNvbmQ6IG9wdHMubWVzc2FnZXMuZW5hYmxlT3RoZXJNc2d9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIHtmaXJzdDogJyAnLCBzZWNvbmQ6IG9wdHMubWVzc2FnZXMuc2VsZWN0aW9uc01lc3NhZ2V9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc09wdGlvbkZpZWxkKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGZpZWxkT3B0aW9ucyh2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsndGV4dCcsICd0ZXh0YXJlYSddKSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBlbmQgY3VzdG9tIGF0dHJpYnV0ZXMgYXMgZGVmaW5lZCBpbiB0eXBlVXNlckF0dHJzIG9wdGlvblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0pIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gocHJvY2Vzc1R5cGVVc2VyQXR0cnMob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSwgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZHZGaWVsZHMuam9pbignJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyB0eXBlVXNlckF0dHJzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB0eXBlVXNlckF0dHIgb3B0aW9uXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgICAgZmllbGQgYXR0cmlidXRlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICAgIG1hcmt1cCBmb3IgY3VzdG9tIHVzZXIgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByb2Nlc3NUeXBlVXNlckF0dHJzKHR5cGVVc2VyQXR0ciwgdmFsdWVzKSB7XG4gICAgICBsZXQgYWR2RmllbGQgPSBbXTtcblxuICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIHR5cGVVc2VyQXR0cikge1xuICAgICAgICBpZiAodHlwZVVzZXJBdHRyLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICBsZXQgb3JpZyA9IG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXTtcbiAgICAgICAgICBsZXQgb3JpZ1ZhbHVlID0gdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWU7XG4gICAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZSB8fCAnJztcblxuICAgICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5sYWJlbCkge1xuICAgICAgICAgICAgb3B0cy5tZXNzYWdlc1thdHRyaWJ1dGVdID0gdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGFkdkZpZWxkLnB1c2goc2VsZWN0VXNlckF0dHJzKGF0dHJpYnV0ZSwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWR2RmllbGQucHVzaChpbnB1dFVzZXJBdHRycyhhdHRyaWJ1dGUsIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3B0cy5tZXNzYWdlc1thdHRyaWJ1dGVdID0gb3JpZztcbiAgICAgICAgICB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZSA9IG9yaWdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWR2RmllbGQuam9pbignJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGV4dCBpbnB1dCB2YWx1ZSBmb3IgYXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBhbHNvIGtub3duIGFzIHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgaW5wdXQgbWFya3VwXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5wdXRVc2VyQXR0cnMobmFtZSwgYXR0cnMpIHtcbiAgICAgIGxldCB0ZXh0QXR0cnMgPSB7XG4gICAgICAgICAgaWQ6IG5hbWUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgICAgdGl0bGU6IGF0dHJzLmRlc2NyaXB0aW9uIHx8IGF0dHJzLmxhYmVsIHx8IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IGF0dHJzLnR5cGUgfHwgJ3RleHQnLFxuICAgICAgICAgIGNsYXNzTmFtZTogW2BmbGQtJHtuYW1lfWBdXG4gICAgICAgIH07XG4gICAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7dGV4dEF0dHJzLmlkfVwiPiR7b3B0cy5tZXNzYWdlc1tuYW1lXX08L2xhYmVsPmA7XG5cbiAgICAgIGlmICghdXRpbHMuaW5BcnJheSh0ZXh0QXR0cnMudHlwZSwgWydjaGVja2JveCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xuICAgICAgICB0ZXh0QXR0cnMuY2xhc3NOYW1lLnB1c2goJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0QXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgdGV4dEF0dHJzKTtcbiAgICAgIGxldCB0ZXh0SW5wdXQgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh0ZXh0QXR0cnMpfT5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7dGV4dElucHV0fTwvZGl2PmA7XG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgaW5wdXQgZm9yIG11bHRpcGxlIGNob2ljZSB1c2VyIGF0dHJpYnV0ZXNcbiAgICAgKiBAdG9kbyAgcmVwbGFjZSB3aXRoIHNlbGVjdEF0dHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgc2VsZWN0IG1hcmt1cFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNlbGVjdFVzZXJBdHRycyhuYW1lLCBvcHRpb25zKSB7XG4gICAgICBsZXQgb3B0aXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLm9wdGlvbnMpLm1hcCh2YWwgPT4ge1xuICAgICAgICBsZXQgYXR0cnMgPSB7dmFsdWU6IHZhbH07XG4gICAgICAgIGlmICh2YWwgPT09IG9wdGlvbnMudmFsdWUpIHtcbiAgICAgICAgICBhdHRycy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8b3B0aW9uICR7dXRpbHMuYXR0clN0cmluZyhhdHRycyl9PiR7b3B0aW9ucy5vcHRpb25zW3ZhbF19PC9vcHRpb24+YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IHNlbGVjdEF0dHJzID0ge1xuICAgICAgICBpZDogbmFtZSArICctJyArIGxhc3RJRCxcbiAgICAgICAgdGl0bGU6IG9wdGlvbnMuZGVzY3JpcHRpb24gfHwgb3B0aW9ucy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke25hbWV9IGZvcm0tY29udHJvbGBcbiAgICAgIH07XG4gICAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7c2VsZWN0QXR0cnMuaWR9XCI+JHtvcHRzLm1lc3NhZ2VzW25hbWVdfTwvbGFiZWw+YDtcblxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZmlsdGVyKHByb3AgPT4ge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkocHJvcCwgWyd2YWx1ZScsICdvcHRpb25zJywgJ2xhYmVsJ10pO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbihhdHRyKSB7XG4gICAgICAgIHNlbGVjdEF0dHJzW2F0dHJdID0gb3B0aW9uc1thdHRyXTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtvcHRpcy5qb2luKCcnKX08L3NlbGVjdD5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7c2VsZWN0fTwvZGl2PmA7XG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9XG5cbiAgICBsZXQgYm9vbEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlcywgbGFiZWxzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW25hbWVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsID0gKHR4dCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxsYWJlbCBmb3I9XCIke25hbWV9LSR7bGFzdElEfVwiPiR7dHh0fTwvbGFiZWw+YDtcbiAgICAgIH07XG4gICAgICBsZXQgY2hlY2tlZCA9ICh2YWx1ZXNbbmFtZV0gIT09IHVuZGVmaW5lZCA/ICdjaGVja2VkJyA6ICcnKTtcbiAgICAgIGxldCBpbnB1dCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmbGQtJHtuYW1lfVwiIG5hbWU9XCIke25hbWV9XCIgdmFsdWU9XCJ0cnVlXCIgJHtjaGVja2VkfSBpZD1cIiR7bmFtZX0tJHtsYXN0SUR9XCIvPiBgO1xuICAgICAgbGV0IGxlZnQgPSBbXTtcbiAgICAgIGxldCByaWdodCA9IFtcbiAgICAgICAgaW5wdXRcbiAgICAgIF07XG5cbiAgICAgIGlmIChsYWJlbHMuZmlyc3QpIHtcbiAgICAgICAgbGVmdC51bnNoaWZ0KGxhYmVsKGxhYmVscy5maXJzdCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGFiZWxzLnNlY29uZCkge1xuICAgICAgICByaWdodC5wdXNoKGxhYmVsKGxhYmVscy5zZWNvbmQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhYmVscy5jb250ZW50KSB7XG4gICAgICAgIHJpZ2h0LnB1c2gobGFiZWxzLmNvbnRlbnQpO1xuICAgICAgfVxuXG4gICAgICByaWdodC51bnNoaWZ0KCc8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPicpO1xuICAgICAgcmlnaHQucHVzaCgnPC9kaXY+Jyk7XG5cbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsZWZ0LmNvbmNhdChyaWdodCkuam9pbignJyl9PC9kaXY+YDtcbiAgICB9O1xuXG4gICAgbGV0IGJ0blN0eWxlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIGxldCBzdHlsZXMgPSBvcHRzLm1lc3NhZ2VzLnN0eWxlcy5idG47XG4gICAgICAgIGxldCBzdHlsZUZpZWxkID0gJyc7XG5cbiAgICAgIGlmIChzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlTGFiZWwgPSBgPGxhYmVsPiR7b3B0cy5tZXNzYWdlcy5zdHlsZX08L2xhYmVsPmA7XG4gICAgICAgIHN0eWxlRmllbGQgKz0gYDxpbnB1dCB2YWx1ZT1cIiR7c3R5bGV9XCIgbmFtZT1cInN0eWxlXCIgdHlwZT1cImhpZGRlblwiIGNsYXNzPVwiYnRuLXN0eWxlXCI+YDtcbiAgICAgICAgc3R5bGVGaWVsZCArPSAnPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPic7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGxldCBjbGFzc0xpc3QgPSBbJ2J0bi14cycsICdidG4nLCBgYnRuLSR7ZWxlbWVudH1gXTtcbiAgICAgICAgICBpZiAoc3R5bGUgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0eWxlRmllbGQgKz0gYDxidXR0b24gdmFsdWU9XCIke2VsZW1lbnR9XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtjbGFzc0xpc3Quam9pbignICcpfVwiPiR7b3B0cy5tZXNzYWdlcy5zdHlsZXMuYnRuW2VsZW1lbnRdfTwvYnV0dG9uPmA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0eWxlRmllbGQgKz0gJzwvZGl2Pic7XG5cbiAgICAgICAgc3R5bGVGaWVsZCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzdHlsZS13cmFwXCI+JHtzdHlsZUxhYmVsfSAke3N0eWxlRmllbGR9PC9kaXY+YDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlRmllbGQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG51bWJlciBhdHRyaWJ1dGUgdG8gYSBmaWVsZC5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBtYXJrdXAgZm9yIG51bWJlciBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICBsZXQgbnVtYmVyQXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMpIHtcbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBhdHRyVmFsID0gdmFsdWVzW2F0dHJpYnV0ZV07XG4gICAgICBsZXQgYXR0ckxhYmVsID0gb3B0cy5tZXNzYWdlc1thdHRyaWJ1dGVdIHx8IGF0dHJpYnV0ZTtcbiAgICAgIGxldCBwbGFjZWhvbGRlciA9IG9wdHMubWVzc2FnZXMucGxhY2Vob2xkZXJzW2F0dHJpYnV0ZV07XG4gICAgICBsZXQgaW5wdXRDb25maWcgPSB7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICB2YWx1ZTogYXR0clZhbCxcbiAgICAgICAgbmFtZTogYXR0cmlidXRlLFxuICAgICAgICBtaW46ICcwJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGAsXG4gICAgICAgIGlkOiBgJHthdHRyaWJ1dGV9LSR7bGFzdElEfWBcbiAgICAgIH07XG4gICAgICBsZXQgbnVtYmVyQXR0cmlidXRlID0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcodXRpbHMudHJpbU9iaihpbnB1dENvbmZpZykpfT5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7bnVtYmVyQXR0cmlidXRlfTwvZGl2PmA7XG5cbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHthdHRyaWJ1dGV9LXdyYXBcIj48bGFiZWwgZm9yPVwiJHtpbnB1dENvbmZpZy5pZH1cIj4ke2F0dHJMYWJlbH08L2xhYmVsPiAke2lucHV0V3JhcH08L2Rpdj5gO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzZWxlY3RBdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZSAgYXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlcyAgICAgYWthIGF0dHJzXG4gICAgICogQHBhcmFtICB7QXJyYXl9IG9wdGlvbkRhdGEgIHNlbGVjdCBmaWVsZCBvcHRpb24gZGF0YVxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICBzZWxlY3QgaW5wdXQgbWFrcnVwXG4gICAgICovXG4gICAgbGV0IHNlbGVjdEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzLCBvcHRpb25EYXRhKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNlbGVjdE9wdGlvbnMgPSBvcHRpb25EYXRhLm1hcCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICAgIGxldCBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGxhYmVsOiBgJHtvcHRzLm1lc3NhZ2VzLm9wdGlvbn0gJHtpfWAsXG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9LCBvcHRpb24pO1xuICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSB2YWx1ZXNbYXR0cmlidXRlXSkge1xuICAgICAgICAgIG9wdGlvbkF0dHJzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxvcHRpb24gJHt1dGlscy5hdHRyU3RyaW5nKHV0aWxzLnRyaW1PYmoob3B0aW9uQXR0cnMpKX0+JHtvcHRpb25BdHRycy5sYWJlbH08L29wdGlvbj5gO1xuICAgICAgfSk7XG4gICAgICBsZXQgc2VsZWN0QXR0cnMgPSB7XG4gICAgICAgICAgaWQ6IGF0dHJpYnV0ZSArICctJyArIGxhc3RJRCxcbiAgICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgXG4gICAgICAgIH07XG4gICAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7c2VsZWN0QXR0cnMuaWR9XCI+JHtvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV0gfHwgdXRpbHMuY2FwaXRhbGl6ZShhdHRyaWJ1dGUpfTwvbGFiZWw+YDtcbiAgICAgIGxldCBzZWxlY3QgPSBgPHNlbGVjdCAke3V0aWxzLmF0dHJTdHJpbmcoc2VsZWN0QXR0cnMpfT4ke3NlbGVjdE9wdGlvbnMuam9pbignJyl9PC9zZWxlY3Q+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7c2VsZWN0QXR0cnMubmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgc29tZSB0ZXh0IGlucHV0cyBmb3IgZmllbGQgYXR0cmlidXRlcywgKip3aWxsIGJlIHJlcGxhY2VkKipcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIGxldCB0ZXh0QXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMpIHtcbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBwbGFjZWhvbGRlckZpZWxkcyA9IFtcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAnc2VsZWN0J1xuICAgICAgXTtcblxuICAgICAgbGV0IG5vTmFtZSA9IFtcbiAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICdwYXJhZ3JhcGgnXG4gICAgICBdO1xuXG4gICAgICBsZXQgdGV4dEFyZWEgPSBbJ3BhcmFncmFwaCddO1xuXG4gICAgICBsZXQgYXR0clZhbCA9IHZhbHVlc1thdHRyaWJ1dGVdIHx8ICcnO1xuICAgICAgbGV0IGF0dHJMYWJlbCA9IG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXTtcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdsYWJlbCcgJiYgdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgdGV4dEFyZWEpKSB7XG4gICAgICAgIGF0dHJMYWJlbCA9IG9wdHMubWVzc2FnZXMuY29udGVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnR5cGVzLmhlYWRlcikge1xuICAgICAgICBub05hbWUgPSBub05hbWUuY29uY2F0KHN1YnR5cGVzLmhlYWRlcik7XG4gICAgICB9XG5cbiAgICAgIGxldCBwbGFjZWhvbGRlcnMgPSBvcHRzLm1lc3NhZ2VzLnBsYWNlaG9sZGVycztcbiAgICAgIGxldCBwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyc1thdHRyaWJ1dGVdIHx8ICcnO1xuICAgICAgbGV0IGF0dHJpYnV0ZWZpZWxkID0gJyc7XG4gICAgICBsZXQgbm9NYWtlQXR0ciA9IFtdO1xuXG4gICAgICAvLyBGaWVsZCBoYXMgcGxhY2Vob2xkZXIgYXR0cmlidXRlXG4gICAgICBpZiAoYXR0cmlidXRlID09PSAncGxhY2Vob2xkZXInICYmICF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBwbGFjZWhvbGRlckZpZWxkcykpIHtcbiAgICAgICAgbm9NYWtlQXR0ci5wdXNoKHRydWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBGaWVsZCBoYXMgbmFtZSBhdHRyaWJ1dGVcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICduYW1lJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBub05hbWUpKSB7XG4gICAgICAgIG5vTWFrZUF0dHIucHVzaCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFub01ha2VBdHRyLnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgICBsZXQgaW5wdXRDb25maWcgPSB7XG4gICAgICAgICAgbmFtZTogYXR0cmlidXRlLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGAsXG4gICAgICAgICAgaWQ6IGAke2F0dHJpYnV0ZX0tJHtsYXN0SUR9YFxuICAgICAgICB9O1xuICAgICAgICBsZXQgYXR0cmlidXRlTGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7aW5wdXRDb25maWcuaWR9XCI+JHthdHRyTGFiZWx9PC9sYWJlbD5gO1xuXG4gICAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdsYWJlbCcgJiYgdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgdGV4dEFyZWEpIHx8IChhdHRyaWJ1dGUgPT09ICd2YWx1ZScgJiYgdmFsdWVzLnR5cGUgPT09ICd0ZXh0YXJlYScpKSB7XG4gICAgICAgICAgYXR0cmlidXRlZmllbGQgKz0gYDx0ZXh0YXJlYSAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT4ke2F0dHJWYWx9PC90ZXh0YXJlYT5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0Q29uZmlnLnZhbHVlID0gYXR0clZhbDtcbiAgICAgICAgICBpbnB1dENvbmZpZy50eXBlID0gJ3RleHQnO1xuICAgICAgICAgIGF0dHJpYnV0ZWZpZWxkICs9IGA8aW5wdXQgJHt1dGlscy5hdHRyU3RyaW5nKGlucHV0Q29uZmlnKX0+YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke2F0dHJpYnV0ZWZpZWxkfTwvZGl2PmA7XG5cbiAgICAgICAgYXR0cmlidXRlZmllbGQgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHthdHRyaWJ1dGV9LXdyYXBcIj4ke2F0dHJpYnV0ZUxhYmVsfSAke2lucHV0V3JhcH08L2Rpdj5gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlZmllbGQ7XG4gICAgfTtcblxuICAgIGxldCByZXF1aXJlZEZpZWxkID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICBsZXQgbm9SZXF1aXJlID0gW1xuICAgICAgICAgICdoZWFkZXInLFxuICAgICAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgICAgICdidXR0b24nXG4gICAgICAgIF07XG4gICAgICBsZXQgbm9NYWtlID0gW107XG4gICAgICBsZXQgcmVxdWlyZUZpZWxkID0gJyc7XG5cbiAgICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBub1JlcXVpcmUpKSB7XG4gICAgICAgIG5vTWFrZS5wdXNoKHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKCFub01ha2Uuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICAgIHJlcXVpcmVGaWVsZCA9IGJvb2xBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdmFsdWVzLCB7Zmlyc3Q6IG9wdHMubWVzc2FnZXMucmVxdWlyZWR9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcXVpcmVGaWVsZDtcbiAgICB9O1xuXG4gICAgLy8gQXBwZW5kIHRoZSBuZXcgZmllbGQgdG8gdGhlIGVkaXRvclxuICAgIGxldCBhcHBlbmROZXdGaWVsZCA9IGZ1bmN0aW9uKHZhbHVlcywgaXNOZXcgPSB0cnVlKSB7XG4gICAgICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuICAgICAgbGV0IHR5cGUgPSB2YWx1ZXMudHlwZSB8fCAndGV4dCc7XG4gICAgICBsZXQgbGFiZWwgPSB2YWx1ZXMubGFiZWwgfHwgb3B0cy5tZXNzYWdlc1t0eXBlXSB8fCBvcHRzLm1lc3NhZ2VzLmxhYmVsO1xuICAgICAgbGV0IGRlbEJ0biA9IG0oJ2EnLCBvcHRzLm1lc3NhZ2VzLnJlbW92ZSwge1xuICAgICAgICAgIGlkOiAnZGVsXycgKyBsYXN0SUQsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnZGVsLWJ1dHRvbiBidG4gZGVsZXRlLWNvbmZpcm0nLFxuICAgICAgICAgIHRpdGxlOiBvcHRzLm1lc3NhZ2VzLnJlbW92ZU1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICBsZXQgdG9nZ2xlQnRuID0gbSgnYScsIG51bGwsIHtcbiAgICAgICAgaWQ6IGxhc3RJRCArICctZWRpdCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3RvZ2dsZS1mb3JtIGJ0biBpY29uLXBlbmNpbCcsXG4gICAgICAgIHRpdGxlOiBvcHRzLm1lc3NhZ2VzLmhpZGVcbiAgICAgIH0pO1xuICAgICAgbGV0IGNvcHlCdG4gPSBtKCdhJywgb3B0cy5tZXNzYWdlcy5jb3B5QnV0dG9uLCB7XG4gICAgICAgIGlkOiBsYXN0SUQgKyAnLWNvcHknLFxuICAgICAgICBjbGFzc05hbWU6ICdjb3B5LWJ1dHRvbiBidG4gaWNvbi1jb3B5JyxcbiAgICAgICAgdGl0bGU6IG9wdHMubWVzc2FnZXMuY29weUJ1dHRvblRvb2x0aXBcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGlDb250ZW50cyA9IG0oXG4gICAgICAgICdkaXYnLCBbdG9nZ2xlQnRuLCBjb3B5QnRuLCBkZWxCdG5dLCB7Y2xhc3NOYW1lOiAnZmllbGQtYWN0aW9ucyd9XG4gICAgICApLm91dGVySFRNTDtcblxuICAgICAgLy8gRmllbGQgcHJldmlldyBMYWJlbFxuICAgICAgbGlDb250ZW50cyArPSBgPGxhYmVsIGNsYXNzPVwiZmllbGQtbGFiZWxcIj4ke2xhYmVsfTwvbGFiZWw+YDtcblxuICAgICAgaWYgKHZhbHVlcy5kZXNjcmlwdGlvbikge1xuICAgICAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndG9vbHRpcC1lbGVtZW50JyxcbiAgICAgICAgICB0b29sdGlwOiB2YWx1ZXMuZGVzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgICAgbGlDb250ZW50cyArPSBgPHNwYW4gJHt1dGlscy5hdHRyU3RyaW5nKGF0dHJzKX0+Pzwvc3Bhbj5gO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVxdWlyZWREaXNwbGF5ID0gdmFsdWVzLnJlcXVpcmVkID8gJ3N0eWxlPVwiZGlzcGxheTppbmxpbmVcIicgOiAnJztcbiAgICAgIGxpQ29udGVudHMgKz0gYDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIiAke3JlcXVpcmVkRGlzcGxheX0+ICo8L3NwYW4+YDtcblxuICAgICAgbGlDb250ZW50cyArPSBtKCdkaXYnLCAnJywge2NsYXNzTmFtZTogJ3ByZXYtaG9sZGVyJ30pLm91dGVySFRNTDtcbiAgICAgIGxpQ29udGVudHMgKz0gYDxkaXYgaWQ9XCIke2xhc3RJRH0taG9sZGVyXCIgY2xhc3M9XCJmcm0taG9sZGVyXCI+YDtcbiAgICAgIGxpQ29udGVudHMgKz0gJzxkaXYgY2xhc3M9XCJmb3JtLWVsZW1lbnRzXCI+JztcblxuICAgICAgbGlDb250ZW50cyArPSBhZHZGaWVsZHModmFsdWVzKTtcbiAgICAgIGxpQ29udGVudHMgKz0gbSgnYScsIG9wdHMubWVzc2FnZXMuY2xvc2UsIHtjbGFzc05hbWU6ICdjbG9zZS1maWVsZCd9KS5vdXRlckhUTUw7XG5cbiAgICAgIGxpQ29udGVudHMgKz0gJzwvZGl2Pic7XG4gICAgICBsaUNvbnRlbnRzICs9ICc8L2Rpdj4nO1xuXG4gICAgICBsZXQgZmllbGQgPSBtKCdsaScsIGxpQ29udGVudHMsIHtcbiAgICAgICAgICAnY2xhc3MnOiB0eXBlICsgJy1maWVsZCBmb3JtLWZpZWxkJyxcbiAgICAgICAgICAndHlwZSc6IHR5cGUsXG4gICAgICAgICAgaWQ6IGxhc3RJRFxuICAgICAgICB9KTtcbiAgICAgIGxldCAkbGkgPSAkKGZpZWxkKTtcblxuICAgICAgJGxpLmRhdGEoJ2ZpZWxkRGF0YScsIHthdHRyczogdmFsdWVzfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgX2hlbHBlcnMuc3RvcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAkKCc+IGxpJywgJHNvcnRhYmxlRmllbGRzKS5lcShfaGVscGVycy5zdG9wSW5kZXgpLmJlZm9yZSgkbGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHNvcnRhYmxlRmllbGRzLmFwcGVuZCgkbGkpO1xuICAgICAgfVxuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRsaSlcbiAgICAgIC5zb3J0YWJsZSh7dXBkYXRlOiAoKSA9PiBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRsaSl9KTtcblxuICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkbGkpO1xuXG4gICAgICBpZiAob3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXSAmJiBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uYWRkKSB7XG4gICAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25hZGQoZmllbGQpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5lZGl0T25BZGQgJiYgaXNOZXcpIHtcbiAgICAgICAgX2hlbHBlcnMuY2xvc2VBbGxFZGl0KCk7XG4gICAgICAgIF9oZWxwZXJzLnRvZ2dsZUVkaXQobGFzdElELCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGxhc3RJRCA9IF9oZWxwZXJzLmluY3JlbWVudElkKGxhc3RJRCk7XG4gICAgfTtcblxuICAgIC8vIFNlbGVjdCBmaWVsZCBodG1sLCBzaW5jZSB0aGVyZSBtYXkgYmUgbXVsdGlwbGVcbiAgICBsZXQgc2VsZWN0RmllbGRPcHRpb25zID0gZnVuY3Rpb24obmFtZSwgb3B0aW9uRGF0YSwgbXVsdGlwbGVTZWxlY3QpIHtcbiAgICAgIGxldCBvcHRpb25JbnB1dFR5cGUgPSB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IChtdWx0aXBsZVNlbGVjdCA/ICdjaGVja2JveCcgOiAncmFkaW8nKVxuICAgICAgICB9O1xuICAgICAgbGV0IG9wdGlvbkRhdGFPcmRlciA9IFtcbiAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgJ3NlbGVjdGVkJ1xuICAgICAgXTtcbiAgICAgIGxldCBvcHRpb25JbnB1dHMgPSBbXTtcbiAgICAgIGxldCBvcHRpb25UZW1wbGF0ZSA9IHtzZWxlY3RlZDogZmFsc2UsIGxhYmVsOiAnJywgdmFsdWU6ICcnfTtcblxuICAgICAgb3B0aW9uRGF0YSA9IE9iamVjdC5hc3NpZ24ob3B0aW9uVGVtcGxhdGUsIG9wdGlvbkRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBpID0gb3B0aW9uRGF0YU9yZGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBwcm9wID0gb3B0aW9uRGF0YU9yZGVyW2ldO1xuICAgICAgICBpZiAob3B0aW9uRGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICAgIHR5cGU6IG9wdGlvbklucHV0VHlwZVtwcm9wXSB8fCAndGV4dCcsXG4gICAgICAgICAgICAnY2xhc3MnOiAnb3B0aW9uLScgKyBwcm9wLFxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbkRhdGFbcHJvcF0sXG4gICAgICAgICAgICBuYW1lOiBuYW1lICsgJy1vcHRpb24nXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChvcHRzLm1lc3NhZ2VzLnBsYWNlaG9sZGVyc1twcm9wXSkge1xuICAgICAgICAgICAgYXR0cnMucGxhY2Vob2xkZXIgPSBvcHRzLm1lc3NhZ2VzLnBsYWNlaG9sZGVyc1twcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvcCA9PT0gJ3NlbGVjdGVkJyAmJiBvcHRpb25EYXRhLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBhdHRycy5jaGVja2VkID0gb3B0aW9uRGF0YS5zZWxlY3RlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcHRpb25JbnB1dHMucHVzaCh1dGlscy5tYXJrdXAoJ2lucHV0JywgbnVsbCwgYXR0cnMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVtb3ZlQXR0cnMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3JlbW92ZSBidG4nLFxuICAgICAgICB0aXRsZTogb3B0cy5tZXNzYWdlcy5yZW1vdmVNZXNzYWdlXG4gICAgICB9O1xuICAgICAgb3B0aW9uSW5wdXRzLnB1c2godXRpbHMubWFya3VwKCdhJywgb3B0cy5tZXNzYWdlcy5yZW1vdmUsIHJlbW92ZUF0dHJzKSk7XG5cbiAgICAgIGxldCBmaWVsZCA9IHV0aWxzLm1hcmt1cCgnbGknLCBvcHRpb25JbnB1dHMpO1xuXG4gICAgICByZXR1cm4gZmllbGQub3V0ZXJIVE1MO1xuICAgIH07XG5cbiAgICBsZXQgY2xvbmVJdGVtID0gZnVuY3Rpb24gY2xvbmVJdGVtKGN1cnJlbnRJdGVtKSB7XG4gICAgICBsZXQgY3VycmVudElkID0gY3VycmVudEl0ZW0uYXR0cignaWQnKTtcbiAgICAgIGxldCB0eXBlID0gY3VycmVudEl0ZW0uYXR0cigndHlwZScpO1xuICAgICAgbGV0IHRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBsZXQgY2xvbmVOYW1lID0gdHlwZSArICctJyArIHRzO1xuICAgICAgbGV0ICRjbG9uZSA9IGN1cnJlbnRJdGVtLmNsb25lKCk7XG5cbiAgICAgICRjbG9uZS5maW5kKCdbaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICB0aGlzLmlkID0gdGhpcy5pZC5yZXBsYWNlKGN1cnJlbnRJZCwgbGFzdElEKTtcbiAgICAgIH0pO1xuXG4gICAgICAkY2xvbmUuZmluZCgnW2Zvcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmdldEF0dHJpYnV0ZSgnZm9yJykucmVwbGFjZShjdXJyZW50SWQsIGxhc3RJRCkpO1xuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdlOm5vdCguZm9ybS1lbGVtZW50cyknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxldCBuZXdOYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgICBuZXdOYW1lID0gbmV3TmFtZS5zdWJzdHJpbmcoMCwgKG5ld05hbWUubGFzdEluZGV4T2YoJy0nKSArIDEpKTtcbiAgICAgICAgICBuZXdOYW1lID0gbmV3TmFtZSArIHRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuZXdOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmZpbmQoJy5mb3JtLWVsZW1lbnRzJykuZmluZCgnOmlucHV0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgPT09ICduYW1lJykge1xuICAgICAgICAgIGxldCBuZXdWYWwgPSB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgICBuZXdWYWwgPSBuZXdWYWwuc3Vic3RyaW5nKDAsIChuZXdWYWwubGFzdEluZGV4T2YoJy0nKSArIDEpKTtcbiAgICAgICAgICBuZXdWYWwgPSBuZXdWYWwgKyB0cy50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG5ld1ZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkY2xvbmUuYXR0cignaWQnLCBsYXN0SUQpO1xuICAgICAgJGNsb25lLmF0dHIoJ25hbWUnLCBjbG9uZU5hbWUpO1xuICAgICAgJGNsb25lLmFkZENsYXNzKCdjbG9uZWQnKTtcbiAgICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJGNsb25lKS5zb3J0YWJsZSgpO1xuXG4gICAgICBpZiAob3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXSAmJiBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uY2xvbmUpIHtcbiAgICAgICAgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKCRjbG9uZVswXSk7XG4gICAgICB9XG5cbiAgICAgIGxhc3RJRCA9IF9oZWxwZXJzLmluY3JlbWVudElkKGxhc3RJRCk7XG4gICAgICByZXR1cm4gJGNsb25lO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFVUSUxJVElFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgICAvLyBkZWxldGUgb3B0aW9uc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2sgdG91Y2hzdGFydCcsICcucmVtb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0ICRmaWVsZCA9ICQodGhpcykucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBvcHRpb25zQ291bnQgPSAkKHRoaXMpLnBhcmVudHMoJy5zb3J0YWJsZS1vcHRpb25zOmVxKDApJykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xuICAgICAgaWYgKG9wdGlvbnNDb3VudCA8PSAyKSB7XG4gICAgICAgIG9wdHMubm90aWZ5LmVycm9yKCdFcnJvcjogJyArIG9wdHMubWVzc2FnZXMubWluT3B0aW9uTWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGknKS5zbGlkZVVwKCcyNTAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGZpZWxkKTtcbiAgICAgICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gdG91Y2ggZm9jdXNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ3RvdWNoc3RhcnQnLCAnaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgIGlmIChlLmhhbmRsZWQgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKCRpbnB1dC5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAkaW5wdXQudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICBsZXQgZmllbGRWYWwgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgJGlucHV0LnZhbChmaWVsZFZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRvZ2dsZSBmaWVsZHNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnRvZ2dsZS1mb3JtLCAuY2xvc2UtZmllbGQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGUuaGFuZGxlZCAhPT0gdHJ1ZSkge1xuICAgICAgICBsZXQgdGFyZ2V0SUQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpLmF0dHIoJ2lkJyk7XG4gICAgICAgIF9oZWxwZXJzLnRvZ2dsZUVkaXQodGFyZ2V0SUQpO1xuICAgICAgICBlLmhhbmRsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjaGFuZ2UnLCAnLnByZXYtaG9sZGVyIGlucHV0LCAucHJldi1ob2xkZXIgc2VsZWN0JywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdGhlci1vcHRpb24nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgZmllbGQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaS5mb3JtLWZpZWxkJylbMF07XG4gICAgICBpZiAodXRpbHMuaW5BcnJheShmaWVsZC50eXBlLCBbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29wdGlvbi12YWx1ZScpO1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoZS50YXJnZXQubmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFtwcmV2aWV3XSk7XG4gICAgICAgIHV0aWxzLmZvckVhY2gob3B0aW9ucywgaSA9PiB7XG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9uc1tpXS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgY29uc29sZS5sb2coKTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlLnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLmNoZWNrZWQgPSB1dGlscy5pbkFycmF5KG9wdGlvbnNbaV0udmFsdWUsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uY2hlY2tlZCA9IG9wdGlvbnNbaV0udmFsdWUgPT09IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsdWUtJyArIGZpZWxkLmlkKS52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgfVxuXG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgcHJldmlldyB0byBsYWJlbFxuICAgICRzb3J0YWJsZUZpZWxkcy5vbigna2V5dXAgY2hhbmdlJywgJ1tuYW1lPVwibGFiZWxcIl0nLCBmdW5jdGlvbihlKSB7XG4gICAgICAkKCcuZmllbGQtbGFiZWwnLCAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpKS50ZXh0KCQoZS50YXJnZXQpLnZhbCgpKTtcbiAgICB9KTtcblxuICAgIC8vIHJlbW92ZSBlcnJvciBzdHlsaW5nIHdoZW4gdXNlcnMgdHJpZXMgdG8gY29ycmVjdCBtaXN0YWtlXG4gICAgJHNvcnRhYmxlRmllbGRzLmRlbGVnYXRlKCdpbnB1dC5lcnJvcicsICdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHByZXZpZXcgZm9yIGRlc2NyaXB0aW9uXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdrZXl1cCcsICdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nLCBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgJGZpZWxkID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKTtcbiAgICAgIGxldCBjbG9zZXN0VG9vbFRpcCA9ICQoJy50b29sdGlwLWVsZW1lbnQnLCAkZmllbGQpO1xuICAgICAgbGV0IHR0VmFsID0gJChlLnRhcmdldCkudmFsKCk7XG4gICAgICBpZiAodHRWYWwgIT09ICcnKSB7XG4gICAgICAgIGlmICghY2xvc2VzdFRvb2xUaXAubGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IHR0ID0gYDxzcGFuIGNsYXNzPVwidG9vbHRpcC1lbGVtZW50XCIgdG9vbHRpcD1cIiR7dHRWYWx9XCI+Pzwvc3Bhbj5gO1xuICAgICAgICAgICQoJy5maWVsZC1sYWJlbCcsICRmaWVsZCkuYWZ0ZXIodHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3Nlc3RUb29sVGlwLmF0dHIoJ3Rvb2x0aXAnLCB0dFZhbCkuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2xvc2VzdFRvb2xUaXAubGVuZ3RoKSB7XG4gICAgICAgICAgY2xvc2VzdFRvb2xUaXAuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjaGFuZ2UnLCAnLmZsZC1tdWx0aXBsZScsIGUgPT4ge1xuICAgICAgbGV0IG5ld1R5cGUgPSBlLnRhcmdldC5jaGVja2VkID8gJ2NoZWNrYm94JyA6ICdyYWRpbyc7XG5cbiAgICAgICQoZS50YXJnZXQpXG4gICAgICAucGFyZW50cygnLmZvcm0tZWxlbWVudHM6ZXEoMCknKVxuICAgICAgLmZpbmQoJy5zb3J0YWJsZS1vcHRpb25zIGlucHV0Lm9wdGlvbi1zZWxlY3RlZCcpXG4gICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgZS50YXJnZXQudHlwZSA9IG5ld1R5cGU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGZvcm1hdCBuYW1lIGF0dHJpYnV0ZVxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignYmx1cicsICdpbnB1dC5mbGQtbmFtZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gX2hlbHBlcnMuc2FmZW5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgICAkKGUudGFyZ2V0KVxuICAgICAgICAuYWRkQ2xhc3MoJ2ZpZWxkLWVycm9yJylcbiAgICAgICAgLmF0dHIoJ3BsYWNlaG9sZGVyJywgb3B0cy5tZXNzYWdlcy5jYW5ub3RCZUVtcHR5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdmaWVsZC1lcnJvcicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdibHVyJywgJ2lucHV0LmZsZC1tYXhsZW5ndGgnLCBlID0+IHtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gX2hlbHBlcnMuZm9yY2VOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQ29weSBmaWVsZFxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuaWNvbi1jb3B5JywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGN1cnJlbnRJdGVtID0gJChlLnRhcmdldCkucGFyZW50KCkucGFyZW50KCdsaScpO1xuICAgICAgbGV0ICRjbG9uZSA9IGNsb25lSXRlbShjdXJyZW50SXRlbSk7XG4gICAgICAkY2xvbmUuaW5zZXJ0QWZ0ZXIoY3VycmVudEl0ZW0pO1xuICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkY2xvbmUpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gRGVsZXRlIGZpZWxkXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5kZWxldGUtY29uZmlybScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgYnV0dG9uUG9zaXRpb24gPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHtcbiAgICAgICAgICBwYWdlWDogYnV0dG9uUG9zaXRpb24ubGVmdCArIChidXR0b25Qb3NpdGlvbi53aWR0aCAvIDIpLFxuICAgICAgICAgIHBhZ2VZOiAoYnV0dG9uUG9zaXRpb24udG9wIC0gYm9keVJlY3QudG9wKSAtIDEyXG4gICAgICAgIH07XG5cbiAgICAgIGxldCBkZWxldGVJRCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJykuYXR0cignaWQnKTtcbiAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlSUQpKTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxDbG9zZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJGZpZWxkLnJlbW92ZUNsYXNzKCdkZWxldGluZycpO1xuICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAvLyBDaGVjayBpZiB1c2VyIGlzIHN1cmUgdGhleSB3YW50IHRvIHJlbW92ZSB0aGUgZmllbGRcbiAgICAgIGlmIChvcHRzLmZpZWxkUmVtb3ZlV2Fybikge1xuICAgICAgICBsZXQgd2FybkgzID0gdXRpbHMubWFya3VwKCdoMycsIG9wdHMubWVzc2FnZXMud2FybmluZyk7XG4gICAgICAgIGxldCB3YXJuTWVzc2FnZSA9IHV0aWxzLm1hcmt1cCgncCcsIG9wdHMubWVzc2FnZXMuZmllbGRSZW1vdmVXYXJuaW5nKTtcbiAgICAgICAgX2hlbHBlcnMuY29uZmlybShbd2FybkgzLCB3YXJuTWVzc2FnZV0sICgpID0+XG4gICAgICAgICAgX2hlbHBlcnMucmVtb3ZlRmllbGQoZGVsZXRlSUQpLCBjb29yZHMpO1xuICAgICAgICAkZmllbGQuYWRkQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaGVscGVycy5yZW1vdmVGaWVsZChkZWxldGVJRCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgYnV0dG9uIHN0eWxlIHNlbGVjdGlvblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnLnN0eWxlLXdyYXAgYnV0dG9uJywgZSA9PiB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gJChlLnRhcmdldCk7XG4gICAgICBsZXQgc3R5bGVWYWwgPSAkYnV0dG9uLnZhbCgpO1xuICAgICAgbGV0ICRidG5TdHlsZSA9ICRidXR0b24ucGFyZW50KCkucHJldignLmJ0bi1zdHlsZScpO1xuICAgICAgJGJ0blN0eWxlLnZhbChzdHlsZVZhbCk7XG4gICAgICAkYnV0dG9uLnNpYmxpbmdzKCcuYnRuJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAkYnV0dG9uLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkYnRuU3R5bGUuY2xvc2VzdCgnLmZvcm0tZmllbGQnKSk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byB0b2dnbGUgcmVxdWlyZWQgYXN0ZXJpc2tcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJy5mbGQtcmVxdWlyZWQnLCBlID0+IHtcbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykuZmluZCgnLnJlcXVpcmVkLWFzdGVyaXNrJykudG9nZ2xlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byB0b2dnbGUgcm9sZXMgdmlzaWJpbGl0eVxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnaW5wdXQuZmxkLWFjY2VzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCByb2xlcyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykuZmluZCgnLmF2YWlsYWJsZS1yb2xlcycpO1xuICAgICAgbGV0IGVuYWJsZVJvbGVzQ0IgPSAkKGUudGFyZ2V0KTtcbiAgICAgIHJvbGVzLnNsaWRlVG9nZ2xlKDI1MCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghZW5hYmxlUm9sZXNDQi5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHJvbGVzKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gYWRkIG5ldyBvcHRpb25zXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuYWRkLW9wdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCAkb3B0aW9uV3JhcCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5maWVsZC1vcHRpb25zJyk7XG4gICAgICBsZXQgJG11bHRpcGxlID0gJCgnW25hbWU9XCJtdWx0aXBsZVwiXScsICRvcHRpb25XcmFwKTtcbiAgICAgIGxldCAkZmlyc3RPcHRpb24gPSAkKCcub3B0aW9uLXNlbGVjdGVkOmVxKDApJywgJG9wdGlvbldyYXApO1xuICAgICAgbGV0IGlzTXVsdGlwbGUgPSBmYWxzZTtcblxuICAgICAgaWYgKCRtdWx0aXBsZS5sZW5ndGgpIHtcbiAgICAgICAgaXNNdWx0aXBsZSA9ICRtdWx0aXBsZS5wcm9wKCdjaGVja2VkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc011bHRpcGxlID0gKCRmaXJzdE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbmFtZSA9ICRmaXJzdE9wdGlvbi5hdHRyKCduYW1lJyk7XG5cbiAgICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJG9wdGlvbldyYXApLmFwcGVuZChzZWxlY3RGaWVsZE9wdGlvbnMobmFtZSwgZmFsc2UsIGlzTXVsdGlwbGUpKTtcbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignbW91c2VvdmVyIG1vdXNlb3V0JywgJy5yZW1vdmUsIC5kZWwtYnV0dG9uJywgZSA9PlxuICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKS50b2dnbGVDbGFzcygnZGVsZXRlJykpO1xuXG4gICAgaWYgKG9wdHMuc2hvd0FjdGlvbkJ1dHRvbnMpIHtcbiAgICAgIC8vIFZpZXcgWE1MXG4gICAgICAvLyBsZXQgeG1sQnV0dG9uID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmcm1iSUQgKyAnLXZpZXctZGF0YScpKTtcbiAgICAgIC8vIHhtbEJ1dHRvbi5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vICAgX2hlbHBlcnMuc2hvd0RhdGEoKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICAvLyBDbGVhciBhbGwgZmllbGRzIGluIGZvcm0gZWRpdG9yXG4gICAgICAvLyBsZXQgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtmcm1iSUR9LWNsZWFyLWFsbGApO1xuICAgICAgLy8gY2xlYXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIC8vICAgbGV0IGZpZWxkcyA9ICQoJ2xpLmZvcm0tZmllbGQnLCBmb3JtQnVpbGRlci5zdGFnZSk7XG4gICAgICAvLyAgIGxldCBidXR0b25Qb3NpdGlvbiA9IGNsZWFyQnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgLy8gICBsZXQgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgLy8gICBsZXQgY29vcmRzID0ge1xuICAgICAgLy8gICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICAvLyAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICAgIC8vICAgfTtcblxuICAgICAgLy8gICBpZiAoZmllbGRzLmxlbmd0aCkge1xuICAgICAgLy8gICAgIF9oZWxwZXJzLmNvbmZpcm0ob3B0cy5tZXNzYWdlcy5jbGVhckFsbE1lc3NhZ2UsIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gICAgICAgX2hlbHBlcnMucmVtb3ZlQWxsZmllbGRzKCk7XG4gICAgICAvLyAgICAgICBvcHRzLm5vdGlmeS5zdWNjZXNzKG9wdHMubWVzc2FnZXMuYWxsRmllbGRzUmVtb3ZlZCk7XG4gICAgICAvLyAgICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICAvLyAgICAgICBvcHRzLm9uQ2xlYXJBbGwoKTtcbiAgICAgIC8vICAgICB9LCBjb29yZHMpO1xuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIF9oZWxwZXJzLmRpYWxvZygnVGhlcmUgYXJlIG5vIGZpZWxkcyB0byBjbGVhcicsIGNvb3Jkcyk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH07XG5cbiAgICAgIC8vIFNhdmUgSWRlYSBUZW1wbGF0ZVxuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZnJtYklEfS1zYXZlYCkub25jbGljayA9ICgpID0+IHtcbiAgICAgIC8vICAgb3B0cy5vblNhdmUoX2hlbHBlcnMuc2F2ZSgpKTtcbiAgICAgIC8vIH07XG4gICAgfVxuXG4gICAgX2hlbHBlcnMuZ2V0RGF0YSgpO1xuICAgIGxvYWRGaWVsZHMoKTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5jc3MoJ21pbi1oZWlnaHQnLCAkY2JVTC5oZWlnaHQoKSk7XG5cbiAgICAvLyBJZiBvcHRpb24gc2V0LCBjb250cm9scyB3aWxsIHJlbWFpbiBpbiB2aWV3IGluIGVkaXRvclxuICAgIGlmIChvcHRzLnN0aWNreUNvbnRyb2xzLmVuYWJsZSkge1xuICAgICAgX2hlbHBlcnMuc3RpY2t5Q29udHJvbHMoJHNvcnRhYmxlRmllbGRzKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5sb2FkZWQpO1xuXG4gICAgLy8gTWFrZSBhY3Rpb25zIGFjY2Vzc2libGVcbiAgICBmb3JtQnVpbGRlci5hY3Rpb25zID0ge1xuICAgICAgY2xlYXJGaWVsZHM6IF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcyxcbiAgICAgIHNob3dEYXRhOiBfaGVscGVycy5zaG93RGF0YSxcbiAgICAgIHNhdmU6IF9oZWxwZXJzLnNhdmUsXG4gICAgICBhZGRGaWVsZDogKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBfaGVscGVycy5zdG9wSW5kZXggPSBmb3JtQnVpbGRlci5zdGFnZS5jaGlsZHJlbi5sZW5ndGggPyBpbmRleCA6IHVuZGVmaW5lZDtcbiAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkQWRkZWQpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUZpZWxkOiBfaGVscGVycy5yZW1vdmVGaWVsZCxcbiAgICAgIGdldERhdGE6ICh0eXBlID0gJ2pzJykgPT4ge1xuICAgICAgICBjb25zdCBzdGFnZSA9IGZvcm1CdWlsZGVyLnN0YWdlO1xuICAgICAgICBjb25zdCBoID0gX2hlbHBlcnM7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAganM6ICgpID0+IGgucHJlcERhdGEoc3RhZ2UpLFxuICAgICAgICAgIHhtbDogKCkgPT4gaC54bWxTYXZlKHN0YWdlKSxcbiAgICAgICAgICBqc29uOiAoKSA9PiB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoaC5wcmVwRGF0YShzdGFnZSksIG51bGwsICdcXHQnKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBkYXRhW3R5cGVdKCk7XG4gICAgICB9LFxuICAgICAgc2V0RGF0YTogZm9ybURhdGEgPT4ge1xuICAgICAgICBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMoKTtcbiAgICAgICAgX2hlbHBlcnMuZ2V0RGF0YShmb3JtRGF0YSk7XG4gICAgICAgIGxvYWRGaWVsZHMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9ybUJ1aWxkZXIuaTE4biA9IHtcbiAgICAgIHNldExhbmc6IGFzeW5jIGxvY2FsZSA9PiB7XG4gICAgICAgIGxldCBuZXdMYW5nID0gYXdhaXQgbWkxOG4uc2V0Q3VycmVudC5jYWxsKG1pMThuLCBsb2NhbGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdMYW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1CdWlsZGVyO1xuICB9O1xuXG4gICQuZm4uZm9ybUJ1aWxkZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGxldCBlbGVtcyA9IHRoaXM7XG4gICAgcmV0dXJuIGVsZW1zLmVhY2goKGkpID0+IHtcbiAgICAgIGxldCBmb3JtQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcihvcHRpb25zLCBlbGVtc1tpXSk7XG4gICAgICAkKGVsZW1zW2ldKS5kYXRhKCdmb3JtQnVpbGRlcicsIGZvcm1CdWlsZGVyKTtcblxuICAgICAgcmV0dXJuIGZvcm1CdWlsZGVyO1xuICAgIH0pO1xuICB9O1xufSkoalF1ZXJ5KTtcbiIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyBzcGVjaWZpYyB0byBmb3JtQnVpbGRlci5cbiAqIENhbGxlZCBmb3JtIGZvcm1CdWlsZGVyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgb3B0c1xuICogQHBhcmFtICB7SW5zdGFuY2V9IGZvcm1CdWlsZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IGhlbHBlciBmdW5jdGlvbnNcbiAqL1xuZnVuY3Rpb24gaGVscGVycyhvcHRzLCBmb3JtQnVpbGRlcikge1xuICBjb25zdCBtaTE4biA9IHJlcXVpcmUoJ21pMThuJykuZGVmYXVsdDtcblxuICBsZXQgX2hlbHBlcnMgPSB7XG4gICAgZG9DYW5jZWw6IGZhbHNlXG4gIH07XG5cbiAgY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG4gIGZvcm1CdWlsZGVyLmV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzLmpzJyk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgY29udmVydHMgbWVzc3kgYGNsI3NzTmFtZXNgIGludG8gdmFsaWQgYGNsYXNzLW5hbWVzYFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IGh5cGhlbmF0ZWQgc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy5tYWtlQ2xhc3NOYW1lID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICByZXR1cm4gdXRpbHMuaHlwaGVuQ2FzZShzdHIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBtb2JpbGUgY2xhc3NcbiAgICogQHRvZG8gZmluZCBjc3Mgb25seSBzb2x1dGlvblxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IE1vYmlsZSBjbGFzcyBhZGRlZCB0byBmb3JtQnVpbGRlclxuICAgKi9cbiAgX2hlbHBlcnMubW9iaWxlQ2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbW9iaWxlQ2xhc3MgPSAnJztcbiAgICAoZnVuY3Rpb24oYSkge1xuICAgICAgaWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSB7XG4gICAgICAgIG1vYmlsZUNsYXNzID0gJyBmYi1tb2JpbGUnO1xuICAgICAgfVxuICAgIH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xuICAgIHJldHVybiBtb2JpbGVDbGFzcztcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBkcmFnIGJlZ2luc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICovXG4gIF9oZWxwZXJzLnN0YXJ0TW92aW5nID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgdWkuaXRlbS5zaG93KCkuYWRkQ2xhc3MoJ21vdmluZycpO1xuICAgIF9oZWxwZXJzLnN0YXJ0SW5kZXggPSAkKCdsaScsIHRoaXMpLmluZGV4KHVpLml0ZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igd2hlbiBhIGRyYWcgZW5kc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICovXG4gIF9oZWxwZXJzLnN0b3BNb3ZpbmcgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICB1aS5pdGVtLnJlbW92ZUNsYXNzKCdtb3ZpbmcnKTtcbiAgICBpZiAoX2hlbHBlcnMuZG9DYW5jZWwpIHtcbiAgICAgICQodWkuc2VuZGVyKS5zb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgICAkKHRoaXMpLnNvcnRhYmxlKCdjYW5jZWwnKTtcbiAgICB9XG4gICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIGpRdWVyeSBVSSBzb3J0YWJsZSBiZWZvcmVTdG9wIGNhbGxiYWNrIHVzZWQgZm9yIGJvdGggbGlzdHMuXG4gICAqIExvZ2ljIGZvciBjYW5jZWxpbmcgdGhlIHNvcnQgb3IgZHJvcC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfaGVscGVycy5iZWZvcmVTdG9wID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG4gICAgbGV0IGxhc3RJbmRleCA9IGZvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBsZXQgY2FuY2VsQXJyYXkgPSBbXTtcbiAgICBfaGVscGVycy5zdG9wSW5kZXggPSB1aS5wbGFjZWhvbGRlci5pbmRleCgpIC0gMTtcblxuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzICYmIHVpLml0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoJ2ZybWItY29udHJvbCcpKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goX2hlbHBlcnMuc3RvcEluZGV4ID09PSAwKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5hcHBlbmQpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goKF9oZWxwZXJzLnN0b3BJbmRleCArIDEpID09PSBsYXN0SW5kZXgpO1xuICAgIH1cblxuICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYWtlIHN0cmluZ3Mgc2FmZSB0byBiZSB1c2VkIGFzIGNsYXNzZXNcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgc3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICBjb252ZXJ0ZXIgc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy5zYWZlbmFtZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvW15hLXpBLVowLTlcXC1dL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdHJpcHMgbm9uLW51bWJlcnMgZnJvbSBhIG51bWJlciBvbmx5IGlucHV0XG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc3RyIHN0cmluZyB3aXRoIHBvc3NpYmxlIG51bWJlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBzdHJpbmcgd2l0aG91dCBudW1iZXJzXG4gICAqL1xuICBfaGVscGVycy5mb3JjZU51bWJlciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgfTtcblxuICAvKipcbiAgICogaGlkZSBhbmQgc2hvdyBtb3VzZSB0cmFja2luZyB0b29sdGlwcywgb25seSB1c2VkIGZvciBkaXNhYmxlZFxuICAgKiBmaWVsZHMgaW4gdGhlIGVkaXRvci5cbiAgICpcbiAgICogQHRvZG8gICByZW1vdmUgb3IgcmVmYWN0b3IgdG8gbWFrZSBiZXR0ZXIgdXNlXG4gICAqIEBwYXJhbSAge09iamVjdH0gdHQgalF1ZXJ5IG9wdGlvbiB3aXRoIG5leHRlZCB0b29sdGlwXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfaGVscGVycy5pbml0VG9vbHRpcCA9IGZ1bmN0aW9uKHR0KSB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHR0LmZpbmQoJy50b29sdGlwJyk7XG4gICAgdHQubW91c2VlbnRlcihmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0b29sdGlwLm91dGVyV2lkdGgoKSA+IDIwMCkge1xuICAgICAgICB0b29sdGlwLmFkZENsYXNzKCdtYXgtd2lkdGgnKTtcbiAgICAgIH1cbiAgICAgIHRvb2x0aXAuY3NzKCdsZWZ0JywgdHQud2lkdGgoKSArIDE0KTtcbiAgICAgIHRvb2x0aXAuc3RvcCh0cnVlLCB0cnVlKS5mYWRlSW4oJ2Zhc3QnKTtcbiAgICB9KS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xuICAgICAgdHQuZmluZCgnLnRvb2x0aXAnKS5zdG9wKHRydWUsIHRydWUpLmZhZGVPdXQoJ2Zhc3QnKTtcbiAgICB9KTtcbiAgICB0b29sdGlwLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gZ2V0IGVsZW1lbnQgdHlwZSBhbmQgc3VidHlwZVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICRmaWVsZFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IHt0eXBlOiAnZmllbGRUeXBlJywgc3VidHlwZTogJ2ZpZWxkU3ViVHlwZSd9XG4gICAqL1xuICBfaGVscGVycy5nZXRUeXBlcyA9IGZ1bmN0aW9uKCRmaWVsZCkge1xuICAgIGxldCB0eXBlcyA9IHtcbiAgICAgICAgdHlwZTogJGZpZWxkLmF0dHIoJ3R5cGUnKVxuICAgICAgfTtcbiAgICBsZXQgc3VidHlwZSA9ICQoJy5mbGQtc3VidHlwZScsICRmaWVsZCkudmFsKCk7XG5cbiAgICBpZiAoc3VidHlwZSAhPT0gdHlwZXMudHlwZSkge1xuICAgICAgdHlwZXMuc3VidHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgb3B0aW9uIGRhdGEgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZCBqUXVlcnkgZmllbGQgb2JqZWN0XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgQXJyYXkgb2Ygb3B0aW9uIHZhbHVlc1xuICAgKi9cbiAgX2hlbHBlcnMuZmllbGRPcHRpb25EYXRhID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMgbGknLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGxldCAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICRvcHRpb24pLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgIGxhYmVsOiAkKCcub3B0aW9uLWxhYmVsJywgJG9wdGlvbikudmFsKCksXG4gICAgICAgICAgdmFsdWU6ICQoJy5vcHRpb24tdmFsdWUnLCAkb3B0aW9uKS52YWwoKVxuICAgICAgICB9O1xuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5wdXNoKGF0dHJzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBYTUwgc2F2ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZvcm0gc29ydGFibGVGaWVsZHMgbm9kZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHhtbCBpbiBzdHJpbmdcbiAgICovXG4gIF9oZWxwZXJzLnhtbFNhdmUgPSBmdW5jdGlvbihmb3JtKSB7XG4gICAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQgZm9ybURhdGEgPSBfaGVscGVycy5wcmVwRGF0YShmb3JtKTtcbiAgICBsZXQgeG1sID0gWyc8Zm9ybS10ZW1wbGF0ZT5cXG5cXHQ8ZmllbGRzPiddO1xuXG4gICAgdXRpbHMuZm9yRWFjaChmb3JtRGF0YSwgZnVuY3Rpb24oZmllbGRJbmRleCwgZmllbGQpIHtcbiAgICAgIGxldCBmaWVsZENvbnRlbnQgPSBudWxsO1xuXG4gICAgICAvLyBIYW5kbGUgb3B0aW9uc1xuICAgICAgaWYgKGZpZWxkLnR5cGUubWF0Y2goLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXApLykpIHtcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBmaWVsZC52YWx1ZXM7XG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IG0oJ29wdGlvbicsIG9wdGlvbkRhdGFbaV0ubGFiZWwsIG9wdGlvbkRhdGFbaV0pLm91dGVySFRNTDtcbiAgICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdFxcdCcgKyBvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMucHVzaCgnXFxuXFx0XFx0Jyk7XG5cbiAgICAgICAgZmllbGRDb250ZW50ID0gb3B0aW9ucy5qb2luKCcnKTtcbiAgICAgICAgZGVsZXRlIGZpZWxkLnZhbHVlcztcbiAgICAgIH1cblxuICAgICAgbGV0IHhtbEZpZWxkID0gbSgnZmllbGQnLCBmaWVsZENvbnRlbnQsIGZpZWxkKTtcbiAgICAgIHhtbC5wdXNoKCdcXG5cXHRcXHQnICsgeG1sRmllbGQub3V0ZXJIVE1MKTtcbiAgICB9KTtcblxuICAgIHhtbC5wdXNoKCdcXG5cXHQ8L2ZpZWxkcz5cXG48L2Zvcm0tdGVtcGxhdGU+Jyk7XG5cbiAgICByZXR1cm4geG1sLmpvaW4oJycpO1xuICB9O1xuXG4gIF9oZWxwZXJzLnByZXBEYXRhID0gZnVuY3Rpb24oZm9ybSkge1xuICAgIGxldCBmb3JtRGF0YSA9IFtdO1xuXG4gICAgaWYgKGZvcm0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIGJ1aWxkIGRhdGEgb2JqZWN0XG4gICAgICB1dGlscy5mb3JFYWNoKGZvcm0uY2hpbGROb2RlcywgZnVuY3Rpb24oaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGxldCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICBpZiAoISgkZmllbGQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgICAgbGV0IGZpZWxkRGF0YSA9IF9oZWxwZXJzLmdldFR5cGVzKCRmaWVsZCk7XG4gICAgICAgICAgbGV0IHJvbGVWYWxzID0gJCgnLnJvbGVzLWZpZWxkOmNoZWNrZWQnLCBmaWVsZCkubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0pLmdldCgpO1xuXG4gICAgICAgICAgJCgnW2NsYXNzKj1cImZsZC1cIl0nLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UoYXR0ci5uYW1lKTtcbiAgICAgICAgICAgIGZpZWxkRGF0YVtuYW1lXSA9IGF0dHIudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGF0dHIuY2hlY2tlZCA6IGF0dHIudmFsdWU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAocm9sZVZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEucm9sZSA9IHJvbGVWYWxzLmpvaW4oJywnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZERhdGEuY2xhc3NOYW1lID0gZmllbGREYXRhLmNsYXNzTmFtZSB8fCBmaWVsZERhdGEuY2xhc3M7XG5cbiAgICAgICAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZERhdGEuY2xhc3NOYW1lKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5zdHlsZSA9IG1hdGNoWzFdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YSA9IHV0aWxzLnRyaW1PYmooZmllbGREYXRhKTtcbiAgICAgICAgICBmaWVsZERhdGEgPSB1dGlscy5lc2NhcGVBdHRycyhmaWVsZERhdGEpO1xuXG4gICAgICAgICAgbGV0IG11bHRpcGxlRmllbGQgPSBmaWVsZERhdGFcbiAgICAgICAgICAudHlwZS5tYXRjaCgvKHNlbGVjdHxjaGVja2JveC1ncm91cHxyYWRpby1ncm91cCkvKTtcblxuICAgICAgICAgIGlmIChtdWx0aXBsZUZpZWxkKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEudmFsdWVzID0gX2hlbHBlcnMuZmllbGRPcHRpb25EYXRhKCRmaWVsZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH07XG5cbiAgX2hlbHBlcnMuanNvblNhdmUgPSBmb3JtID0+XG4gICAgd2luZG93LkpTT04uc3RyaW5naWZ5KF9oZWxwZXJzLnByZXBEYXRhKGZvcm0pLCBudWxsLCAnXFx0Jyk7XG5cbiAgX2hlbHBlcnMuZ2V0RGF0YSA9IGZvcm1EYXRhID0+IHtcbiAgICBsZXQgZGF0YSA9IGZvcm1EYXRhIHx8IG9wdHMuZm9ybURhdGE7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgc2V0RGF0YSA9IHtcbiAgICAgIHhtbDogZm9ybURhdGEgPT4gdXRpbHMucGFyc2VYTUwoZm9ybURhdGEpLFxuICAgICAganNvbjogZm9ybURhdGEgPT4gd2luZG93LkpTT04ucGFyc2UoZm9ybURhdGEpXG4gICAgfTtcblxuICAgIGZvcm1CdWlsZGVyLmZvcm1EYXRhID0gc2V0RGF0YVtvcHRzLmRhdGFUeXBlXShkYXRhKSB8fCBbXTtcblxuICAgIHJldHVybiBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogU2F2ZXMgYW5kIHJldHVybnMgZm9ybURhdGFcbiAgICogQHJldHVybiB7WE1MfEpTT059IGZvcm1EYXRhXG4gICAqL1xuICBfaGVscGVycy5zYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG5cbiAgICBsZXQgZG9TYXZlID0ge1xuICAgICAgeG1sOiBfaGVscGVycy54bWxTYXZlLFxuICAgICAganNvbjogX2hlbHBlcnMuanNvblNhdmVcbiAgICB9O1xuXG4gICAgLy8gc2F2ZSBhY3Rpb24gZm9yIGN1cnJlbnQgYGRhdGFUeXBlYFxuICAgIGZvcm1CdWlsZGVyLmZvcm1EYXRhID0gZG9TYXZlW29wdHMuZGF0YVR5cGVdKGZvcm0pO1xuXG4gICAgLy8gdHJpZ2dlciBmb3JtU2F2ZWQgZXZlbnRcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5mb3JtU2F2ZWQpO1xuICAgIHJldHVybiBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogaW5jcmVtZW50cyB0aGUgZmllbGQgaWRzIHdpdGggc3VwcG9ydCBmb3IgbXVsdGlwbGUgZWRpdG9yc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkIGZpZWxkIElEXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgaW5jcmVtZW50ZWQgZmllbGQgSURcbiAgICovXG4gIF9oZWxwZXJzLmluY3JlbWVudElkID0gZnVuY3Rpb24oaWQpIHtcbiAgICBsZXQgc3BsaXQgPSBpZC5sYXN0SW5kZXhPZignLScpO1xuICAgIGxldCBuZXdGaWVsZE51bWJlciA9IHBhcnNlSW50KGlkLnN1YnN0cmluZyhzcGxpdCArIDEpKSArIDE7XG4gICAgbGV0IGJhc2VTdHJpbmcgPSBpZC5zdWJzdHJpbmcoMCwgc3BsaXQpO1xuXG4gICAgcmV0dXJuIGAke2Jhc2VTdHJpbmd9LSR7bmV3RmllbGROdW1iZXJ9YDtcbiAgfTtcblxuICAvKipcbiAgICogQ29sbGVjdCBmaWVsZCBhdHRyaWJ1dGUgdmFsdWVzIGFuZCBjYWxsIGZpZWxkUHJldmlldyB0byBnZW5lcmF0ZSBwcmV2aWV3XG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgRE9NIGVsZW1lbnRcbiAgICovXG4gIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkQ2xhc3MgPSBmaWVsZC5hdHRyKCdjbGFzcycpO1xuICAgIGlmIChmaWVsZENsYXNzLmluZGV4T2YoJ3VpLXNvcnRhYmxlLWhhbmRsZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmaWVsZFR5cGUgPSAkKGZpZWxkKS5hdHRyKCd0eXBlJyk7XG4gICAgbGV0ICRwcmV2SG9sZGVyID0gJCgnLnByZXYtaG9sZGVyJywgZmllbGQpO1xuICAgIGxldCBwcmV2aWV3RGF0YSA9IHtcbiAgICAgIHR5cGU6IGZpZWxkVHlwZVxuICAgIH07XG4gICAgbGV0IHByZXZpZXc7XG5cbiAgICAkKCdbY2xhc3MqPVwiZmxkLVwiXScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UodGhpcy5uYW1lKTtcbiAgICAgIHByZXZpZXdEYXRhW25hbWVdID0gdGhpcy50eXBlID09PSAnY2hlY2tib3gnID8gdGhpcy5jaGVja2VkIDogdGhpcy52YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCBzdHlsZSA9ICQoJy5idG4tc3R5bGUnLCBmaWVsZCkudmFsKCk7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBwcmV2aWV3RGF0YS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIGlmIChmaWVsZFR5cGUubWF0Y2goLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXApLykpIHtcbiAgICAgIHByZXZpZXdEYXRhLnZhbHVlcyA9IFtdO1xuICAgICAgcHJldmlld0RhdGEubXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgZmllbGQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgb3B0aW9uID0ge307XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCB0aGlzKS5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJCgnLm9wdGlvbi12YWx1ZScsIHRoaXMpLnZhbCgpO1xuICAgICAgICBvcHRpb24ubGFiZWwgPSAkKCcub3B0aW9uLWxhYmVsJywgdGhpcykudmFsKCk7XG4gICAgICAgIHByZXZpZXdEYXRhLnZhbHVlcy5wdXNoKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2aWV3RGF0YSA9IHV0aWxzLnRyaW1PYmoocHJldmlld0RhdGEpO1xuXG4gICAgcHJldmlld0RhdGEuY2xhc3NOYW1lID0gX2hlbHBlcnMuY2xhc3NOYW1lcyhmaWVsZCwgcHJldmlld0RhdGEpO1xuICAgICQoJy5mbGQtY2xhc3NOYW1lJywgZmllbGQpLnZhbChwcmV2aWV3RGF0YS5jbGFzc05hbWUpO1xuXG4gICAgZmllbGQuZGF0YSgnZmllbGREYXRhJywgcHJldmlld0RhdGEpO1xuICAgIHByZXZpZXcgPSB1dGlscy5nZXRUZW1wbGF0ZShwcmV2aWV3RGF0YSwgb3B0cywgdHJ1ZSk7XG5cbiAgICB1dGlscy5lbXB0eSgkcHJldkhvbGRlclswXSk7XG4gICAgJHByZXZIb2xkZXJbMF0uYXBwZW5kQ2hpbGQocHJldmlldyk7XG4gICAgcHJldmlldy5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZFJlbmRlcmVkKTtcblxuICAgICQoJ2lucHV0W3RvZ2dsZV0nLCAkcHJldkhvbGRlcikua2NUb2dnbGUoKTtcbiAgfTtcblxuICBfaGVscGVycy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQgPSAyNTAsIGltbWVkaWF0ZSA9IGZhbHNlKSB7XG4gICAgbGV0IHRpbWVvdXQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBsZXQgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGEgY3VzdG9tIHRvb2x0aXAgZm9yIGRpc2FibGVkIGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxuICAgKi9cbiAgX2hlbHBlcnMuZGlzYWJsZWRUVCA9IHtcbiAgICBjbGFzc05hbWU6ICdmcm1iLXR0JyxcbiAgICBhZGQ6IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBsZXQgdGl0bGUgPSBvcHRzLm1lc3NhZ2VzLmZpZWxkTm9uRWRpdGFibGU7XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICBsZXQgdHQgPSB1dGlscy5tYXJrdXAoJ3AnLCB0aXRsZSwge2NsYXNzTmFtZTogX2hlbHBlcnMuZGlzYWJsZWRUVC5jbGFzc05hbWV9KTtcbiAgICAgICAgZmllbGQuYXBwZW5kKHR0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICQoJy5mcm1iLXR0JywgZmllbGQpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfaGVscGVycy5jbGFzc05hbWVzID0gZnVuY3Rpb24oZmllbGQsIHByZXZpZXdEYXRhKSB7XG4gICAgbGV0IGk7XG4gICAgbGV0IHR5cGUgPSBwcmV2aWV3RGF0YS50eXBlO1xuICAgIGxldCBzdHlsZSA9IHByZXZpZXdEYXRhLnN0eWxlO1xuICAgIGxldCBjbGFzc05hbWUgPSBmaWVsZFswXS5xdWVyeVNlbGVjdG9yKCcuZmxkLWNsYXNzTmFtZScpLnZhbHVlO1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgbGV0IHR5cGVzID0ge1xuICAgICAgYnV0dG9uOiAnYnRuJyxcbiAgICAgIHN1Ym1pdDogJ2J0bidcbiAgICB9O1xuXG4gICAgbGV0IHByaW1hcnlUeXBlID0gdHlwZXNbdHlwZV07XG5cbiAgICBpZiAocHJpbWFyeVR5cGUpIHtcbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoYCg/Ol58XFxzKSR7cHJpbWFyeVR5cGV9LSguKj8pKD86XFxzfCQpK2AsICdnJyk7XG4gICAgICAgICAgbGV0IG1hdGNoID0gY2xhc3Nlc1tpXS5tYXRjaChyZSk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlICsgJy0nICsgc3R5bGUpO1xuICAgICAgfVxuICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlKTtcbiAgICB9XG5cbiAgICAvLyByZXZlcnNlIHRoZSBhcnJheSB0byBwdXQgY3VzdG9tIGNsYXNzZXMgYXQgZW5kLFxuICAgIC8vIHJlbW92ZSBhbnkgZHVwbGljYXRlcywgY29udmVydCB0byBzdHJpbmcsIHJlbW92ZSB3aGl0ZXNwYWNlXG4gICAgcmV0dXJuIHV0aWxzLnVuaXF1ZShjbGFzc2VzKS5qb2luKCcgJykudHJpbSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW5kIG9wZW4gZGlhbG9nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3ZlcmxheSBFeGlzdGluZyBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGRpYWxvZyAgRXhpc3RpbmcgZGlhbG9nXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUNvbmZpcm0gPSBmdW5jdGlvbihvdmVybGF5LCBkaWFsb2cpIHtcbiAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItb3ZlcmxheScpWzBdO1xuICAgIH1cbiAgICBpZiAoIWRpYWxvZykge1xuICAgICAgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1idWlsZGVyLWRpYWxvZycpWzBdO1xuICAgIH1cbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5tb2RhbENsb3NlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxheW91dCBkYXRhIGJhc2VkIG9uIGNvbnRyb2xQb3NpdGlvbiBvcHRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSBjb250cm9sUG9zaXRpb24gJ2xlZnQnIG9yICdyaWdodCdcbiAgICogQHJldHVybiB7T2JqZWN0fSBsYXlvdXQgb2JqZWN0XG4gICAqL1xuICBfaGVscGVycy5lZGl0b3JMYXlvdXQgPSBmdW5jdGlvbihjb250cm9sUG9zaXRpb24pIHtcbiAgICBsZXQgbGF5b3V0TWFwID0ge1xuICAgICAgbGVmdDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtcmlnaHQnLFxuICAgICAgICBjb250cm9sczogJ3B1bGwtbGVmdCdcbiAgICAgIH0sXG4gICAgICByaWdodDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtbGVmdCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1yaWdodCdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGxheW91dE1hcFtjb250cm9sUG9zaXRpb25dID8gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gOiAnJztcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBvdmVybGF5IHRvIHRoZSBwYWdlLiBVc2VkIGZvciBtb2RhbHMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIE9iamVjdFxuICAgKi9cbiAgX2hlbHBlcnMuc2hvd092ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgb3ZlcmxheSA9IHV0aWxzLm1hcmt1cCgnZGl2JywgbnVsbCwge1xuICAgICAgY2xhc3NOYW1lOiAnZm9ybS1idWlsZGVyLW92ZXJsYXknXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgIG92ZXJsYXkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2hlbHBlcnMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfTtcblxuICAvKipcbiAgICogQ3VzdG9tIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbWVzc2FnZSAgIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7RnVuY30gIHllc0FjdGlvbiBjYWxsYmFjayB0byBmaXJlIGlmIHRoZXkgY29uZmlybVxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgbG9jYXRpb24gdG8gcHV0IHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIEN1c3RvbSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICBSZWZlcmVuY2UgdG8gdGhlIG1vZGFsXG4gICAqL1xuICBfaGVscGVycy5jb25maXJtID0gKG1lc3NhZ2UsIHllc0FjdGlvbiwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSA9PiB7XG4gICAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQgb3ZlcmxheSA9IF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG4gICAgbGV0IHllcyA9IG0oJ2J1dHRvbicsIG9wdHMubWVzc2FnZXMueWVzLCB7XG4gICAgICBjbGFzc05hbWU6ICd5ZXMgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSdcbiAgICB9KTtcbiAgICBsZXQgbm8gPSBtKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLm5vLCB7XG4gICAgICBjbGFzc05hbWU6ICdubyBidG4gYnRuLWRhbmdlciBidG4tc20nXG4gICAgfSk7XG5cbiAgICBuby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHllcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB5ZXNBY3Rpb24oKTtcbiAgICAgIF9oZWxwZXJzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgbGV0IGJ0bldyYXAgPSBtKCdkaXYnLCBbbm8sIHllc10sIHtjbGFzc05hbWU6ICdidXR0b24td3JhcCd9KTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICBsZXQgbWluaU1vZGFsID0gbSgnZGl2JywgW21lc3NhZ2UsIGJ0bldyYXBdLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9KTtcbiAgICBpZiAoIWNvb3Jkcykge1xuICAgICAgY29vcmRzID0ge1xuICAgICAgICBwYWdlWDogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSAvIDIsXG4gICAgICAgIHBhZ2VZOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCkgLyAyXG4gICAgICB9O1xuICAgICAgbWluaU1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWluaU1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uZWQnKTtcbiAgICB9XG5cbiAgICBtaW5pTW9kYWwuc3R5bGUubGVmdCA9IGNvb3Jkcy5wYWdlWCArICdweCc7XG4gICAgbWluaU1vZGFsLnN0eWxlLnRvcCA9IGNvb3Jkcy5wYWdlWSArICdweCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1pbmlNb2RhbCk7XG5cbiAgICB5ZXMuZm9jdXMoKTtcbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQb3B1cCBkaWFsb2cgdGhlIGRvZXMgbm90IHJlcXVpcmUgY29uZmlybWF0aW9uLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8RE9NfEFycmF5fSAgY29udGVudFxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgZmFsc2UgaWYgbm8gY29vcmRzIGFyZSBwcm92aWRlZC4gV2l0aG91dCBjb29yZGluYXRlc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGNlbnRlciBzY3JlZW4uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGNsYXNzTmFtZSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8gdGhlIGRpYWxvZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgZG9tXG4gICAqL1xuICBfaGVscGVycy5kaWFsb2cgPSBmdW5jdGlvbihjb250ZW50LCBjb29yZHMgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycpIHtcbiAgICBfaGVscGVycy5zaG93T3ZlcmxheSgpO1xuXG4gICAgY2xhc3NOYW1lID0gJ2Zvcm0tYnVpbGRlci1kaWFsb2cgJyArIGNsYXNzTmFtZTtcblxuICAgIGxldCBtaW5pTW9kYWwgPSB1dGlscy5tYXJrdXAoJ2RpdicsIGNvbnRlbnQsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgIGlmICghY29vcmRzKSB7XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIC8gMixcbiAgICAgICAgcGFnZVk6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcbiAgICAgIH07XG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pTW9kYWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xuICAgIH1cblxuICAgIG1pbmlNb2RhbC5zdHlsZS5sZWZ0ID0gY29vcmRzLnBhZ2VYICsgJ3B4JztcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWluaU1vZGFsKTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLm1vZGFsT3BlbmVkKTtcblxuICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignZGF0YS1kaWFsb2cnKSAhPT0gLTEpIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLnZpZXdEYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBmaWVsZHMgZnJvbSB0aGUgZm9ybVxuICAgKi9cbiAgX2hlbHBlcnMucmVtb3ZlQWxsZmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQnVpbGRlci5mb3JtSUQpO1xuICAgIGxldCBmaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmZvcm0tZmllbGQnKTtcbiAgICBsZXQgJGZpZWxkcyA9ICQoZmllbGRzKTtcbiAgICBsZXQgbWFya0VtcHR5QXJyYXkgPSBbXTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIG1hcmtFbXB0eUFycmF5LnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmICghbWFya0VtcHR5QXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICBmb3JtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgIGZvcm0ucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvbnRlbnQgPSBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQ7XG4gICAgfVxuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdyZW1vdmluZycpO1xuXG4gICAgbGV0IG91dGVySGVpZ2h0ID0gMDtcbiAgICAkZmllbGRzLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgb3V0ZXJIZWlnaHQgKz0gJCgkZmllbGRzW2ldKS5vdXRlckhlaWdodCgpICsgMztcbiAgICB9KTtcblxuICAgIGZpZWxkc1swXS5zdHlsZS5tYXJnaW5Ub3AgPSAoLW91dGVySGVpZ2h0KSArICdweCc7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGZpZWxkcy5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCkuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZpbmcnKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9LCA0MDApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB1c2VyIHJlLW9yZGVycyB0aGUgZWxlbWVudHMgdGhlaXIgb3JkZXIgc2hvdWxkIGJlIHNhdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGNiVUwgb3VyIGxpc3Qgb2YgZWxlbWVudHNcbiAgICovXG4gIF9oZWxwZXJzLnNldEZpZWxkT3JkZXIgPSBmdW5jdGlvbigkY2JVTCkge1xuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmaWVsZE9yZGVyID0ge307XG4gICAgJGNiVUwuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICBmaWVsZE9yZGVyW2luZGV4XSA9ICQoZWxlbWVudCkuZGF0YSgnYXR0cnMnKS50eXBlO1xuICAgIH0pO1xuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmaWVsZE9yZGVyJywgd2luZG93LkpTT04uc3RyaW5naWZ5KGZpZWxkT3JkZXIpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlb3JkZXIgdGhlIGNvbnRyb2xzIGlmIHRoZSB1c2VyIGhhcyBwcmV2aW91c2x5IG9yZGVyZWQgdGhlbS5cbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGZybWJGaWVsZHNcbiAgICogQHJldHVybiB7QXJyYXl9IG9yZGVyZWQgZmllbGRzXG4gICAqL1xuICBfaGVscGVycy5vcmRlckZpZWxkcyA9IGZ1bmN0aW9uKGZybWJGaWVsZHMpIHtcbiAgICBsZXQgZmllbGRPcmRlciA9IGZhbHNlO1xuICAgIGxldCBuZXdPcmRlckZpZWxkcyA9IFtdO1xuXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgICBmaWVsZE9yZGVyID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZpZWxkT3JkZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZE9yZGVyKSB7XG4gICAgICBsZXQgY29udHJvbE9yZGVyID0gb3B0cy5jb250cm9sT3JkZXIuY29uY2F0KGZybWJGaWVsZHMubWFwKGZpZWxkID0+XG4gICAgICAgIGZpZWxkLmF0dHJzLnR5cGUpKTtcbiAgICAgIGZpZWxkT3JkZXIgPSB1dGlscy51bmlxdWUoY29udHJvbE9yZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5KU09OLnBhcnNlKGZpZWxkT3JkZXIpO1xuICAgICAgZmllbGRPcmRlciA9IE9iamVjdC5rZXlzKGZpZWxkT3JkZXIpLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBmaWVsZE9yZGVyW2ldO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmaWVsZE9yZGVyLmZvckVhY2goKGZpZWxkVHlwZSkgPT4ge1xuICAgICAgbGV0IGZpZWxkID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmF0dHJzLnR5cGUgPT09IGZpZWxkVHlwZTtcbiAgICAgIH0pWzBdO1xuICAgICAgbmV3T3JkZXJGaWVsZHMucHVzaChmaWVsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3T3JkZXJGaWVsZHMuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZSBmaWVsZHMgYmVpbmcgZWRpdGluZ1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YWdlXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUFsbEVkaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0gJCgnPiBsaS5lZGl0aW5nJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgIGNvbnN0IHRvZ2dsZUJ0bnMgPSAkKCcudG9nZ2xlLWZvcm0nLCBmb3JtQnVpbGRlci5zdGFnZSk7XG4gICAgY29uc3QgZWRpdFBhbmVscyA9ICQoJy5mcm0taG9sZGVyJywgZmllbGRzKTtcblxuICAgIHRvZ2dsZUJ0bnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICBmaWVsZHMucmVtb3ZlQ2xhc3MoJ2VkaXRpbmcnKTtcbiAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZHMpLnNob3coKTtcbiAgICBlZGl0UGFuZWxzLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZWRpdCBtb2RlIGZvciB0aGUgZ2l2ZW4gZmllbGRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZElkXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGFuaW1hdGVcbiAgICovXG4gIF9oZWxwZXJzLnRvZ2dsZUVkaXQgPSBmdW5jdGlvbihmaWVsZElkLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gJCgnLnRvZ2dsZS1mb3JtJywgZmllbGQpO1xuICAgIGNvbnN0IGVkaXRQYW5lbCA9ICQoJy5mcm0taG9sZGVyJywgZmllbGQpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcbiAgICB0b2dnbGVCdG4udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnNsaWRlVG9nZ2xlKDI1MCk7XG4gICAgICBlZGl0UGFuZWwuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnRvZ2dsZSgpO1xuICAgICAgZWRpdFBhbmVsLnRvZ2dsZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ29udHJvbHMgZm9sbG93IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIF9oZWxwZXJzLnN0aWNreUNvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0ICRjYldyYXAgPSAkKGZvcm1CdWlsZGVyLmNvbnRyb2xzKS5wYXJlbnQoKTtcbiAgICBjb25zdCAkc3RhZ2VXcmFwID0gJChmb3JtQnVpbGRlci5zdGFnZSkucGFyZW50KCk7XG4gICAgY29uc3QgY2JXaWR0aCA9ICRjYldyYXAud2lkdGgoKTtcbiAgICBjb25zdCBjYlBvc2l0aW9uID0gZm9ybUJ1aWxkZXIuY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0IHNjcm9sbFRvcCA9ICQoZXZ0LnRhcmdldCkuc2Nyb2xsVG9wKCk7XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPiAkc3RhZ2VXcmFwLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBsZXQgY2JTdHlsZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB3aWR0aDogY2JXaWR0aCxcbiAgICAgICAgICB0b3A6IG9wdHMuc3RpY2t5Q29udHJvbHMub2Zmc2V0LnRvcCxcbiAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgICAgIGxlZnQ6IGNiUG9zaXRpb24ubGVmdFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjYk9mZnNldCA9ICRjYldyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBzdGFnZU9mZnNldCA9ICRzdGFnZVdyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBjYkJvdHRvbSA9IGNiT2Zmc2V0LnRvcCArICRjYldyYXAuaGVpZ2h0KCk7XG4gICAgICAgIGxldCBzdGFnZUJvdHRvbSA9IHN0YWdlT2Zmc2V0LnRvcCArICRzdGFnZVdyYXAuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGNiQm90dG9tID4gc3RhZ2VCb3R0b20gJiYgKGNiT2Zmc2V0LnRvcCAhPT0gc3RhZ2VPZmZzZXQudG9wKSkge1xuICAgICAgICAgICRjYldyYXAuY3NzKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGxlZnQ6ICdhdXRvJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNiQm90dG9tIDwgc3RhZ2VCb3R0b20gfHwgKGNiQm90dG9tID09PSBzdGFnZUJvdHRvbSAmJiBjYk9mZnNldC50b3AgPiBzY3JvbGxUb3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3MoY2JTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1CdWlsZGVyLmNvbnRyb2xzLnBhcmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBPcGVuIGEgZGlhbG9nIHdpdGggdGhlIGZvcm0ncyBkYXRhXG4gICAqL1xuICBfaGVscGVycy5zaG93RGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuICAgIGNvbnN0IGRhdGEgPSB1dGlscy5lc2NhcGVIdG1sKGZvcm1CdWlsZGVyLmZvcm1EYXRhKTtcbiAgICBjb25zdCBjb2RlID0gbSgnY29kZScsIGRhdGEsIHtjbGFzc05hbWU6IGBmb3JtRGF0YS0ke29wdHMuZGF0YVR5cGV9YH0pO1xuXG4gICAgX2hlbHBlcnMuZGlhbG9nKG0oJ3ByZScsIGNvZGUpLCBudWxsLCAnZGF0YS1kaWFsb2cnKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGEgZmllbGQgZnJvbSB0aGUgc3RhZ2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgZmllbGRJRCBJRCBvZiB0aGUgZmllbGQgdG8gYmUgcmVtb3ZlZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBmaWVsZFJlbW92ZWQgcmV0dXJucyB0cnVlIGlmIGZpZWxkIGlzIHJlbW92ZWRcbiAgICovXG4gIF9oZWxwZXJzLnJlbW92ZUZpZWxkID0gKGZpZWxkSUQpID0+IHtcbiAgICBsZXQgZmllbGRSZW1vdmVkID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG4gICAgY29uc3QgZmllbGRzID0gZm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWZpZWxkJyk7XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybignTm8gZmllbGRzIHRvIHJlbW92ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghZmllbGRJRCkge1xuICAgICAgbGV0IGF2YWlsYWJsZUlkcyA9IFtdLnNsaWNlLmNhbGwoZmllbGRzKS5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5pZDtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS53YXJuKCdmaWVsZElEIHJlcXVpcmVkIHRvIHVzZSBgcmVtb3ZlRmllbGRgIGFjdGlvbi4nKTtcbiAgICAgIGNvbnNvbGUud2FybignQXZhaWxhYmxlIElEczogJyArIGF2YWlsYWJsZUlkcy5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSUQpO1xuICAgIGNvbnN0ICRmaWVsZCA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJRCkpO1xuICAgIGlmICghZmllbGQpIHtcbiAgICAgIGNvbnNvbGUud2FybignRmllbGQgbm90IGZvdW5kJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJGZpZWxkLnNsaWRlVXAoMjUwLCBmdW5jdGlvbigpIHtcbiAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgICRmaWVsZC5yZW1vdmUoKTtcbiAgICAgIGZpZWxkUmVtb3ZlZCA9IHRydWU7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICBpZiAoIWZvcm0uY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHN0YWdlV3JhcCA9IGZvcm0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgIHN0YWdlV3JhcC5kYXRhc2V0LmNvbnRlbnQgPSBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZFJlbW92ZWQpO1xuICAgIHJldHVybiBmaWVsZFJlbW92ZWQ7XG4gIH07XG5cbiAgX2hlbHBlcnMucHJvY2Vzc0FjdGlvbkJ1dHRvbnMgPSBidXR0b25EYXRhID0+IHtcbiAgICBsZXQgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQge2xhYmVsLCBldmVudHMsIC4uLmF0dHJzfSA9IGJ1dHRvbkRhdGE7XG4gICAgY29uc3QgYnV0dG9uID0gbSgnYnV0dG9uJywgbGFiZWwsIGF0dHJzKTtcblxuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldnQgPT4gZXZlbnRzW2V2ZW50XShldnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgX2hlbHBlcnMucHJvY2Vzc1N1YnR5cGVzID0gc3VidHlwZU9wdHMgPT4ge1xuICAgIGNvbnN0IHN1YnR5cGVGb3JtYXQgPSBzdWJ0eXBlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYWJlbDogbWkxOG4uZ2V0KHN1YnR5cGUpLFxuICAgICAgICAgIHZhbHVlOiBzdWJ0eXBlXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkZWZhdWx0U3VidHlwZXMgPSB7XG4gICAgICAgIHRleHQ6IFsndGV4dCcsICdwYXNzd29yZCcsICdlbWFpbCcsICdjb2xvcicsICd0ZWwnXSxcbiAgICAgICAgaGVhZGVyOiBbJ2gxJywgJ2gyJywgJ2gzJ10sXG4gICAgICAgIGJ1dHRvbjogWydidXR0b24nLCAnc3VibWl0JywgJ3Jlc2V0J10sXG4gICAgICAgIHBhcmFncmFwaDogWydwJywgJ2FkZHJlc3MnLCAnYmxvY2txdW90ZScsICdjYW52YXMnLCAnb3V0cHV0J10sXG4gICAgICAgIHRleHRhcmVhOiBbJ3RleHRhcmVhJywgJ3F1aWxsJywgJ3RpbnltY2UnXVxuICAgICAgfTtcblxuICAgICAgbGV0IHN1YnR5cGVzID0gdXRpbHMubWVyZ2UoZGVmYXVsdFN1YnR5cGVzLCBzdWJ0eXBlT3B0cyk7XG5cbiAgICAgIGZvciAobGV0IHN1YnR5cGUgaW4gc3VidHlwZXMpIHtcbiAgICAgICAgaWYgKHN1YnR5cGVzLmhhc093blByb3BlcnR5KHN1YnR5cGUpKSB7XG4gICAgICAgICAgc3VidHlwZXNbc3VidHlwZV0gPSBzdWJ0eXBlc1tzdWJ0eXBlXS5tYXAoc3VidHlwZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1YnR5cGVzO1xuICB9O1xuXG4gIHJldHVybiBfaGVscGVycztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuIiwiY29uc3Qga2NUb2dnbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFRvZ2dsZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHRoZW1lOiAnZnJlc2gnLFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgb246ICdPbidcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IG9wdHMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgbGV0ICRrY1RvZ2dsZSA9ICQoJzxkaXYgY2xhc3M9XCJrYy10b2dnbGVcIi8+JylcbiAgICAgICAgLmluc2VydEFmdGVyKGVsZW1lbnQpXG4gICAgICAgIC5hcHBlbmQoZWxlbWVudCk7XG5cbiAgICAka2NUb2dnbGUudG9nZ2xlQ2xhc3MoJ29uJywgZWxlbWVudC5pcygnOmNoZWNrZWQnKSk7XG5cbiAgICBsZXQga2N0T24gPSBgPGRpdiBjbGFzcz1cImtjdC1vblwiPiR7b3B0cy5tZXNzYWdlcy5vbn08L2Rpdj5gO1xuICAgIGxldCBrY3RPZmYgPSBgPGRpdiBjbGFzcz1cImtjdC1vZmZcIj4ke29wdHMubWVzc2FnZXMub2ZmfTwvZGl2PmA7XG4gICAgbGV0IGtjdEhhbmRsZSA9ICc8ZGl2IGNsYXNzPVwia2N0LWhhbmRsZVwiPjwvZGl2Pic7XG4gICAgbGV0IGtjdElubmVyID0gYDxkaXYgY2xhc3M9XCJrY3QtaW5uZXJcIj4ke2tjdE9ufSR7a2N0SGFuZGxlfSR7a2N0T2ZmfTwvZGl2PmA7XG5cbiAgICAka2NUb2dnbGUuYXBwZW5kKGtjdElubmVyKTtcblxuICAgICRrY1RvZ2dsZS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGVsZW1lbnQuYXR0cignY2hlY2tlZCcsICFlbGVtZW50LmF0dHIoJ2NoZWNrZWQnKSk7XG4gICAgICAka2NUb2dnbGUudG9nZ2xlQ2xhc3MoJ29uJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgalF1ZXJ5LmZuLmtjVG9nZ2xlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXM7XG4gICAgcmV0dXJuIHRvZ2dsZS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gJCh0b2dnbGVbaV0pO1xuICAgICAgaWYgKGVsZW1lbnQuZGF0YSgna2NUb2dnbGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQga2NUb2dnbGUgPSBuZXcgVG9nZ2xlKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgZWxlbWVudC5kYXRhKCdrY1RvZ2dsZScsIGtjVG9nZ2xlKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2NUb2dnbGUoKTtcbiIsIi8qKlxuICogUG9seWZpbGxzIGZvciBvbGRlciBicm93c2VycyBhbmQgYWRkZWQgZnVuY3Rpb25hbGl0eVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcG9seWZpbGxzKCkge1xuICAvLyBFbGVtZW50LnJlbW92ZSgpIHBvbHlmaWxsXG4gIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIEV2ZW50IHBvbHlmaWxsXG4gIGlmICh0eXBlb2YgRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cuRXZlbnQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudChldnQsIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gIH1cblxuICAvLyBPYmplY3QuYXNzaWduIHBvbHlmaWxsXG4gIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQgPSBPYmplY3QodGFyZ2V0KTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcG9seWZpbGxzKCk7XG4iLCIvKipcbiAqIENyb3NzIGZpbGUgdXRpbGl0aWVzIGZvciB3b3JraW5nIHdpdGggYXJyYXlzLFxuICogc29ydGluZyBhbmQgb3RoZXIgZnVuIHN0dWZmXG4gKiBAcmV0dXJuIHtPYmplY3R9IGZiVXRpbHNcbiAqL1xuLy8gZnVuY3Rpb24gdXRpbHMoKSB7XG4gIGNvbnN0IGZiVXRpbHMgPSB7fTtcbiAgd2luZG93LmZiTG9hZGVkID0ge1xuICAgIGpzOiBbXSxcbiAgICBjc3M6IFtdXG4gIH07XG5cbiAgLy8gY2xlYW5lciBzeW50YXggZm9yIHRlc3RpbmcgaW5kZXhPZiBlbGVtZW50XG4gIGZiVXRpbHMuaW5BcnJheSA9IGZ1bmN0aW9uKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIE9iamVjdCB0cmltbWVkIG9mIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy50cmltT2JqID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgeG1sUmVtb3ZlID0gW1xuICAgICAgbnVsbCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgICcnLFxuICAgICAgZmFsc2UsXG4gICAgICAnZmFsc2UnXG4gICAgXTtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoZmJVdGlscy5pbkFycmF5KGF0dHJzW2F0dHJdLCB4bWxSZW1vdmUpKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhdHRyc1thdHRyXSkpIHtcbiAgICAgICAgaWYgKCFhdHRyc1thdHRyXS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgYXR0cmlidXRlIGlzIGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBmYlV0aWxzLnZhbGlkQXR0ciA9IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICBsZXQgaW52YWxpZCA9IFtcbiAgICAgICd2YWx1ZXMnLFxuICAgICAgJ2VuYWJsZU90aGVyJyxcbiAgICAgICdvdGhlcicsXG4gICAgICAnbGFiZWwnLFxuICAgICAgLy8gJ3N0eWxlJyxcbiAgICAgICdzdWJ0eXBlJ1xuICAgIF07XG4gICAgcmV0dXJuICFmYlV0aWxzLmluQXJyYXkoYXR0ciwgaW52YWxpZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gYXR0cnMgb2JqZWN0IGludG8gYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBvYmplY3Qgb2YgYXR0cmlidXRlcyBmb3IgbWFya3VwXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuYXR0clN0cmluZyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSAmJiBmYlV0aWxzLnZhbGlkQXR0cihhdHRyKSkge1xuICAgICAgICBhdHRyID0gZmJVdGlscy5zYWZlQXR0cihhdHRyLCBhdHRyc1thdHRyXSk7XG4gICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyLm5hbWUgKyBhdHRyLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuam9pbignICcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGF0dHJpYnV0ZXMgdG8gbWFya3VwIHNhZmUgc3RyaW5nc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgYXR0cmlidXRlIHZhbHVlXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnNhZmVBdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUobmFtZSk7XG4gICAgbGV0IHZhbFN0cmluZztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5qb2luKCcgJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB2YWxTdHJpbmcgPSBmYlV0aWxzLmVzY2FwZUF0dHIodmFsdWUucmVwbGFjZSgnLCcsICcgJykudHJpbSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlID8gYD1cIiR7dmFsU3RyaW5nfVwiYCA6ICcnO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIGZiVXRpbHMuc2FmZUF0dHJOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGxldCBzYWZlQXR0ciA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJ1xuICAgIH07XG5cbiAgICByZXR1cm4gc2FmZUF0dHJbbmFtZV0gfHwgZmJVdGlscy5oeXBoZW5DYXNlKG5hbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHN0cmluZ3MgaW50byBsb3dlcmNhc2UtaHlwaGVuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuaHlwaGVuQ2FzZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC9eLSsvZywgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0IGEgaHlwaGVuYXRlZCBzdHJpbmcgdG8gY2FtZWxDYXNlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuY2FtZWxDYXNlID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24obSwgdykge1xuICAgICAgcmV0dXJuIHcudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGNvbnRlbnQgdHlwZVxuICAgKiBAcGFyYW0gIHtOb2RlIHwgU3RyaW5nIHwgQXJyYXkgfCBPYmplY3R9IGNvbnRlbnRcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSBmb3IgbWFwcGluZ1xuICAgKi9cbiAgZmJVdGlscy5jb250ZW50VHlwZSA9IGNvbnRlbnQgPT4ge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIGNvbnRlbnQ7XG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdHlwZSA9ICdub2RlJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgIHR5cGUgPSAnYXJyYXknO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50cyB0byBhbiBlbGVtZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudCBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50cyAgb2JqZWN0IGZ1bGwgb2YgZXZlbnRzIGVnLiB7Y2xpY2s6IGV2dCA9PiBjYWxsYmFja31cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZiVXRpbHMuYmluZEV2ZW50cyA9IChlbGVtZW50LCBldmVudHMpID0+IHtcbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICBmb3IgKGxldCBldmVudCBpbiBldmVudHMpIHtcbiAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2dCA9PiBldmVudHNbZXZlbnRdKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgd3JhcHBlciB3aGVyZSBuZWVkZWRcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgdGFnXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheXxPYmplY3R9IGNvbnRlbnQgd2Ugd3JhcCB0aGlzXG4gICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgIGF0dHJzXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIEVsZW1lbnRcbiAgICovXG4gIGZiVXRpbHMubWFya3VwID0gZnVuY3Rpb24odGFnLCBjb250ZW50ID0gJycsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGxldCBjb250ZW50VHlwZSA9IGZiVXRpbHMuY29udGVudFR5cGUoY29udGVudCk7XG4gICAgbGV0IHtldmVudHMsIC4uLmF0dHJzfSA9IGF0dHJpYnV0ZXM7XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICBjb25zdCBhcHBlbmRDb250ZW50ID0ge1xuICAgICAgc3RyaW5nOiAoY29udGVudCkgPT4ge1xuICAgICAgICBmaWVsZC5pbm5lckhUTUwgKz0gY29udGVudDtcbiAgICAgIH0sXG4gICAgICBvYmplY3Q6IChjb25maWcpID0+IHtcbiAgICAgICAgbGV0IHt0YWcsIGNvbnRlbnQsIC4uLmRhdGF9ID0gY29uZmlnO1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoZmJVdGlscy5tYXJrdXAodGFnLCBjb250ZW50LCBkYXRhKSk7XG4gICAgICB9LFxuICAgICAgbm9kZTogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgfSxcbiAgICAgIGFycmF5OiAoY29udGVudCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb250ZW50VHlwZSA9IGZiVXRpbHMuY29udGVudFR5cGUoY29udGVudFtpXSk7XG4gICAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbjogY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50KCk7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50KTtcbiAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudCk7XG4gICAgICB9LFxuICAgICAgdW5kZWZpbmVkOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGFnLCBjb250ZW50LCBhdHRyaWJ1dGVzKTtcbiAgICAgIH0sXG4gICAgfTtcblxuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGxldCBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUoYXR0cik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdLmNhbGwodGhpcywgY29udGVudCk7XG4gICAgfVxuXG4gICAgZmJVdGlscy5iaW5kRXZlbnRzKGZpZWxkLCBldmVudHMpO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuICBjb25zdCBtID0gZmJVdGlscy5tYXJrdXA7XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaHRtbCBlbGVtZW50IGF0dHJpYnV0ZXMgdG8ga2V5L3ZhbHVlIG9iamVjdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW0gRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSBleDoge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlQXR0cnMgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgbGV0IGF0dHJzID0gZWxlbS5hdHRyaWJ1dGVzO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgZmJVdGlscy5mb3JFYWNoKGF0dHJzLCBhdHRyID0+IHtcbiAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbYXR0cl0udmFsdWU7XG4gICAgICBpZiAoYXR0clZhbC5tYXRjaCgvZmFsc2V8dHJ1ZS9nKSkge1xuICAgICAgICBhdHRyVmFsID0gKGF0dHJWYWwgPT09ICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJWYWwubWF0Y2goL3VuZGVmaW5lZC9nKSkge1xuICAgICAgICBhdHRyVmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0clZhbCkge1xuICAgICAgICBkYXRhW2F0dHJzW2F0dHJdLm5hbWVdID0gYXR0clZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZpZWxkIG9wdGlvbnMgdG8gb3B0aW9uRGF0YVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkICBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICBvcHRpb25EYXRhIGFycmF5XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKTtcbiAgICBsZXQgb3B0aW9uRGF0YSA9IHt9O1xuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvcHRpb25EYXRhID0gZmJVdGlscy5wYXJzZUF0dHJzKG9wdGlvbnNbaV0pO1xuICAgICAgICBvcHRpb25EYXRhLmxhYmVsID0gb3B0aW9uc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgZGF0YS5wdXNoKG9wdGlvbkRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZSBYTUwgZm9ybURhdGFcbiAgICogQHBhcmFtICB7U3RyaW5nfSB4bWxTdHJpbmdcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgZm9ybURhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VYTUwgPSBmdW5jdGlvbih4bWxTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICAgIGxldCB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbFN0cmluZywgJ3RleHQveG1sJyk7XG4gICAgbGV0IGZvcm1EYXRhID0gW107XG5cbiAgICBpZiAoeG1sKSB7XG4gICAgICBsZXQgZmllbGRzID0geG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWVsZCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IGZiVXRpbHMucGFyc2VBdHRycyhmaWVsZHNbaV0pO1xuXG4gICAgICAgIGlmIChmaWVsZHNbaV0uY2hpbGRyZW4gJiYgZmllbGRzW2ldLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBmYlV0aWxzLnBhcnNlT3B0aW9ucyhmaWVsZHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogRXNjYXBlIG1hcmt1cCBzbyBpdCBjYW4gYmUgZGlzcGxheWVkIHJhdGhlciB0aGFuIHJlbmRlcmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaHRtbCBtYXJrdXBcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIGVzY2FwZWQgaHRtbFxuICAgKi9cbiAgZmJVdGlscy5lc2NhcGVIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50ID0gaHRtbDtcbiAgICByZXR1cm4gZXNjYXBlRWxlbWVudC5pbm5lckhUTUw7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGFuIGF0dHJpYnV0ZVxuICBmYlV0aWxzLmVzY2FwZUF0dHIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgbWF0Y2ggPSB7XG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OydcbiAgICB9O1xuXG4gICAgY29uc3QgcmVwbGFjZVRhZyA9IHRhZyA9PiBtYXRjaFt0YWddIHx8IHRhZztcblxuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpID8gc3RyLnJlcGxhY2UoL1tcIiY8Pl0vZywgcmVwbGFjZVRhZykgOiBzdHI7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGF0dHJpYnV0ZXNcbiAgZmJVdGlscy5lc2NhcGVBdHRycyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGF0dHJzW2F0dHJdID0gZmJVdGlscy5lc2NhcGVBdHRyKGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLy8gZm9yRWFjaCB0aGF0IGNhbiBiZSB1c2VkIG9uIG5vZGVMaXN0XG4gIGZiVXRpbHMuZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7IC8vIHBhc3NlcyBiYWNrIHN0dWZmIHdlIG5lZWRcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtICB7QXJyYXl9IGFycmF5ICBhcnJheSB3aXRoIHBvc3NpYmxlIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBhcnJheSB3aXRoIG9ubHkgdW5pcXVlIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGVsZW0sIHBvcywgYXJyKSA9PiB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoZWxlbSkgPT09IHBvcztcbiAgICB9KTtcbiAgfTtcblxuICBmYlV0aWxzLm1ha2VMYWJlbCA9IChkYXRhLCBsYWJlbCA9ICcnLCBkZXNjcmlwdGlvbiA9ICcnKSA9PiB7XG4gICAgbGV0IGxhYmVsQ29udGVudHMgPSBbZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFiZWwpXTtcblxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdyZXF1aXJlZCcpKSB7XG4gICAgICBsYWJlbENvbnRlbnRzLnB1c2gobSgnc3BhbicsICcqJywge2NsYXNzTmFtZTogJ3JlcXVpcmVkJ30pKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJz8nLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndG9vbHRpcC1lbGVtZW50JyxcbiAgICAgICAgICB0b29sdGlwOiBkZXNjcmlwdGlvblxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG0oJ2xhYmVsJywgbGFiZWxDb250ZW50cywge1xuICAgICAgZm9yOiBkYXRhLmlkLFxuICAgICAgY2xhc3NOYW1lOiBgZmItJHtkYXRhLnR5cGV9LWxhYmVsYFxuICAgIH0pO1xuICB9O1xuXG4gIGZiVXRpbHMudGVtcGxhdGVNYXAgPSAodGVtcGxhdGVzLCB0eXBlLCBmYWxsYmFjaykgPT4ge1xuICAgIGxldCB0ZW1wbGF0ZTtcbiAgICBsZXQgdGVtcGxhdGVNYXAgPSBuZXcgTWFwKHRlbXBsYXRlcyk7XG5cbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgdGVtcGxhdGVNYXApIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgaWYoZmJVdGlscy5pbkFycmF5KHR5cGUsIGtleSkpIHtcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGtleSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICB0ZW1wbGF0ZSA9IGZhbGxiYWNrO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBET00gZWxlbWVudHMgZm9yIHNlbGVjdCwgY2hlY2tib3gtZ3JvdXAgYW5kIHJhZGlvLWdyb3VwLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkRGF0YVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICBET00gZWxlbWVudHNcbiAgICovXG4gIGZiVXRpbHMuc2VsZWN0VGVtcGxhdGUgPSAoZmllbGREYXRhKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCBvcHRpb25zID0gW107XG4gICAgbGV0IHt2YWx1ZXMsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbmxpbmUsIG90aGVyLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBsZXQgb3B0aW9uVHlwZSA9IHR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpO1xuICAgIGxldCBpc1NlbGVjdCA9IHR5cGUgPT09ICdzZWxlY3QnO1xuXG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgaWYgKHBsYWNlaG9sZGVyICYmIGlzU2VsZWN0KSB7XG4gICAgICAgIG9wdGlvbnMucHVzaChtKCdvcHRpb24nLCBwbGFjZWhvbGRlciwge1xuICAgICAgICAgIGRpc2FibGVkOiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkOiBudWxsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHtsYWJlbCA9ICcnLCAuLi5vcHRpb25BdHRyc30gPSB2YWx1ZXNbaV07XG5cbiAgICAgICAgb3B0aW9uQXR0cnMuaWQgPSBgJHtkYXRhLmlkfS0ke2l9YDtcblxuICAgICAgICBpZiAoIW9wdGlvbkF0dHJzLnNlbGVjdGVkIHx8IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1NlbGVjdCkge1xuICAgICAgICAgIGxldCBvID0gbSgnb3B0aW9uJywgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFiZWwpLCBvcHRpb25BdHRycyk7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCB3cmFwcGVyQ2xhc3MgPSBvcHRpb25UeXBlO1xuICAgICAgICAgIGlmIChpbmxpbmUpIHtcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzcyArPSAnLWlubGluZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdGlvbkF0dHJzLnR5cGUgPSBvcHRpb25UeXBlO1xuICAgICAgICAgIGxldCBpbnB1dCA9IG0oJ2lucHV0JywgbnVsbCwgT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgb3B0aW9uQXR0cnMpKTtcbiAgICAgICAgICBsZXQgaW5wdXRMYWJlbCA9IG0oJ2xhYmVsJywgW2lucHV0LCBsYWJlbF0sIHtmb3I6IG9wdGlvbkF0dHJzLmlkfSk7XG4gICAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgICBvcHRpb25zLnB1c2god3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1NlbGVjdCAmJiBvdGhlcikge1xuICAgICAgICBsZXQgb3RoZXJPcHRpb25BdHRycyA9IHtcbiAgICAgICAgICBpZDogYCR7ZGF0YS5pZH0tb3RoZXJgLFxuICAgICAgICAgIGNsYXNzTmFtZTogYCR7ZGF0YS5jbGFzc05hbWV9IG90aGVyLW9wdGlvbmAsXG4gICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICBjbGljazogKCkgPT4gZmJVdGlscy5vdGhlck9wdGlvbkNCKG90aGVyT3B0aW9uQXR0cnMuaWQpXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBsZXQgbGFiZWwgPSBtaTE4bi5jdXJyZW50Lm90aGVyO1xuICAgICAgICBsZXQgd3JhcHBlckNsYXNzID0gb3B0aW9uVHlwZTtcbiAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgIHdyYXBwZXJDbGFzcyArPSAnLWlubGluZSc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBvdGhlck9wdGlvbkF0dHJzKTtcbiAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG5cbiAgICAgICAgbGV0IG90aGVyVmFsQXR0cnMgPSB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICBpZDogYCR7b3RoZXJPcHRpb25BdHRycy5pZH0tdmFsdWVgLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ290aGVyLXZhbCdcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG90aGVySW5wdXRzID0gW1xuICAgICAgICAgIG0oJ2lucHV0JywgbnVsbCwgb3B0aW9uQXR0cnMpLFxuICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdPdGhlcicpLFxuICAgICAgICAgIG0oJ2lucHV0JywgbnVsbCwgb3RoZXJWYWxBdHRycylcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBtKCdsYWJlbCcsIG90aGVySW5wdXRzLCB7Zm9yOiBvcHRpb25BdHRycy5pZH0pO1xuICAgICAgICBsZXQgd3JhcHBlciA9IG0oJ2RpdicsIGlucHV0TGFiZWwsIHtjbGFzc05hbWU6IHdyYXBwZXJDbGFzc30pO1xuICAgICAgICBvcHRpb25zLnB1c2god3JhcHBlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGVtcGxhdGVzID0gW1xuICAgICAgWydzZWxlY3QnLFxuICAgICAgICAoKSA9PiBtKG9wdGlvblR5cGUsIG9wdGlvbnMsIGRhdGEpXSxcbiAgICAgIFtbJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10sXG4gICAgICAgICgpID0+IG0oJ2RpdicsIG9wdGlvbnMsIHtjbGFzc05hbWU6IHR5cGV9KV1cbiAgICBdO1xuXG4gICAgcmV0dXJuIGZiVXRpbHMudGVtcGxhdGVNYXAodGVtcGxhdGVzLCB0eXBlKTtcbiAgfTtcblxuICBmYlV0aWxzLmRlZmF1bHRGaWVsZCA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IHtsYWJlbCwgZGVzY3JpcHRpb24sIHN1YnR5cGUsIHR5cGUsIGlkLCBpc1ByZXZpZXcsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGlmIChpZCkge1xuICAgICAgaWYgKGlzUHJldmlldykge1xuICAgICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnLXByZXZpZXcnO1xuICAgICAgfVxuICAgICAgZGF0YS5pZCA9IGRhdGEubmFtZTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICBkYXRhLnRpdGxlID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGlmIChzdWJ0eXBlKSB7XG4gICAgICB0eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gbSh0eXBlLCBsYWJlbCwgZGF0YSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvYWRzIGFuIGFycmF5IG9mIHNjcmlwdHMgdXNpbmcgalF1ZXJ5J3MgYGdldFNjcmlwdGBcbiAgICogQHBhcmFtICB7QXJyYXl8U3RyaW5nfSAgc2NyaXB0U2NyICAgIHNjcmlwdHNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwYXRoICAgb3B0aW9uYWwgdG8gbG9hZCBmb3JtXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgIGEgcHJvbWlzZVxuICAgKi9cbiAgZmJVdGlscy5nZXRTY3JpcHRzID0gKHNjcmlwdFNjciwgcGF0aCkgPT4ge1xuICAgIGNvbnN0ICQgPSBqUXVlcnk7XG4gICAgbGV0IF9hcnIgPSBbXTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShzY3JpcHRTY3IpKSB7XG4gICAgICBzY3JpcHRTY3IgPSBbc2NyaXB0U2NyXTtcbiAgICB9XG5cbiAgICBpZiAoIWZiVXRpbHMuaXNDYWNoZWQoc2NyaXB0U2NyKSkge1xuICAgICAgX2FyciA9ICQubWFwKHNjcmlwdFNjciwgc3JjID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZGF0YVR5cGU6ICdzY3JpcHQnLFxuICAgICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgICAgIHVybDogKHBhdGggfHwgJycpICsgc3JjXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAkLmFqYXgob3B0aW9ucykuZG9uZSgoKSA9PiB3aW5kb3cuZmJMb2FkZWQuanMucHVzaChzcmMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9hcnIucHVzaCgkLkRlZmVycmVkKCBkZWZlcnJlZCA9PiAkKCBkZWZlcnJlZC5yZXNvbHZlICkpKTtcblxuICAgIHJldHVybiAkLndoZW4oLi4uX2Fycik7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByZW1vdGUgcmVzb3VyY2UgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fSBzcmMgIHVybCBvZiByZW1vdGUgc2NyaXB0IG9yIGNzc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIHR5cGUgICAgICAgJ2pzJyBvciAnY3NzJ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgIGlzQ2FjaGVkXG4gICAqL1xuICBmYlV0aWxzLmlzQ2FjaGVkID0gKHNyYywgdHlwZSA9ICdqcycpID0+IHtcbiAgICBsZXQgaXNDYWNoZWQgPSBmYWxzZTtcbiAgICBjb25zdCBjYWNoZSA9IHdpbmRvdy5mYkxvYWRlZFt0eXBlXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKSB7XG4gICAgICBpc0NhY2hlZCA9IHNyYy5ldmVyeShzID0+IGZiVXRpbHMuaW5BcnJheShzLCBjYWNoZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0NhY2hlZCA9IGZiVXRpbHMuaW5BcnJheShzcmMsIGNhY2hlKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQ2FjaGVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHN0eWxlc2hlZXRzIHRvIHRoZSBoZWFkXG4gICAqIEBwYXJhbSAge0FycmF5fSBzY3JpcHRTY3JcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwYXRoXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBmYlV0aWxzLmdldFN0eWxlcyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcbiAgICBpZiAoZmJVdGlscy5pc0NhY2hlZChzY3JpcHRTY3IsICdjc3MnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhcHBlbmRTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgbGluay50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICB3aW5kb3cuZmJMb2FkZWQuY3NzLnB1c2goaHJlZik7XG4gICAgfTtcbiAgICBzY3JpcHRTY3IuZm9yRWFjaChzcmMgPT4gYXBwZW5kU3R5bGUoKHBhdGggfHwgJycpICsgc3JjKSk7XG4gIH07XG5cbiAgZmJVdGlscy5sb25nVGV4dFRlbXBsYXRlID0gZGF0YSA9PiB7XG4gICAgbGV0IHt2YWx1ZSwgLi4uYXR0cnN9ID0gZGF0YTtcbiAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICBmaWVsZDogbSgndGV4dGFyZWEnLCB2YWx1ZSwgYXR0cnMpXG4gICAgfTtcbiAgICBsZXQgZWRpdG9ycyA9IHtcbiAgICAgIHRpbnltY2U6IHtcbiAgICAgICAganM6IFsnLy9jZG4udGlueW1jZS5jb20vNC90aW55bWNlLm1pbi5qcyddLFxuICAgICAgICBvblJlbmRlcjogKGV2dCkgPT4ge1xuICAgICAgICAgIGZvciAodGVtcGxhdGUuZmllbGQuaWQgaW4gd2luZG93LnRpbnltY2UuZWRpdG9ycykge1xuICAgICAgICAgICAgd2luZG93LnRpbnltY2UuZWRpdG9yc1t0ZW1wbGF0ZS5maWVsZC5pZF0ucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdpbmRvdy50aW55bWNlLmluaXQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0ZW1wbGF0ZS5maWVsZCxcbiAgICAgICAgICAgIGhlaWdodDogMjUwLFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAnYWR2bGlzdCBhdXRvbGluayBsaXN0cyBsaW5rIGltYWdlIGNoYXJtYXAgcHJpbnQgcHJldmlldyBhbmNob3InLFxuICAgICAgICAgICAgICAnc2VhcmNocmVwbGFjZSB2aXN1YWxibG9ja3MgY29kZSBmdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgJ2luc2VydGRhdGV0aW1lIG1lZGlhIHRhYmxlIGNvbnRleHRtZW51IHBhc3RlIGNvZGUnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdG9vbGJhcjogJ2luc2VydGZpbGUgdW5kbyByZWRvIHwgc3R5bGVzZWxlY3QgfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8IGxpbmsgaW1hZ2UnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBxdWlsbDoge1xuICAgICAgICBqczogWycvL2Nkbi5xdWlsbGpzLmNvbS8xLjEuMy9xdWlsbC5qcyddLFxuICAgICAgICBjc3M6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuc25vdy5jc3MnXSxcbiAgICAgICAgb25SZW5kZXI6IGV2dCA9PiB7XG4gICAgICAgICAgbmV3IHdpbmRvdy5RdWlsbCh0ZW1wbGF0ZS5maWVsZCwge1xuICAgICAgICAgICAgbW9kdWxlczoge1xuICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgW3snaGVhZGVyJzogWzEsIDIsIGZhbHNlXX1dLFxuICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXG4gICAgICAgICAgICAgICAgWydpbWFnZScsICdjb2RlLWJsb2NrJ11cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBhdHRycy5wbGFjZWhvbGRlciB8fCAnJyxcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoZGF0YS50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICB0ZW1wbGF0ZS5vblJlbmRlciA9IGVkaXRvcnNbZGF0YS50eXBlXS5vblJlbmRlcjtcbiAgICB9XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3F1aWxsJykge1xuICAgICAgdGVtcGxhdGUuZmllbGQgPSBtKCdkaXYnLCBudWxsLCBhdHRycyk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25SZW5kZXIgPSAoKSA9PiB7XG4gICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCBvblJlbmRlcik7XG5cbiAgICAgICAgaWYgKGVkaXRvcnNbZGF0YS50eXBlXS5jc3MpIHtcbiAgICAgICAgICBmYlV0aWxzLmdldFN0eWxlcyhlZGl0b3JzW2RhdGEudHlwZV0uY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmpzICYmICFmYlV0aWxzLmlzQ2FjaGVkKGVkaXRvcnNbZGF0YS50eXBlXS5qcykpIHtcbiAgICAgICAgICBmYlV0aWxzLmdldFNjcmlwdHMoZWRpdG9yc1tkYXRhLnR5cGVdLmpzKS5kb25lKHRlbXBsYXRlLm9uUmVuZGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wbGF0ZS5vblJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7ZmllbGQ6IHRlbXBsYXRlLmZpZWxkLCBvblJlbmRlcn07XG4gIH07XG5cbiAgZmJVdGlscy5nZXRUZW1wbGF0ZSA9IChmaWVsZERhdGEsIG9wdHMpID0+IHtcbiAgICBsZXQge2xhYmVsLCBkZXNjcmlwdGlvbiwgc3VidHlwZSwgaXNQcmV2aWV3LCBvblJlbmRlciwgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCBmaWVsZDtcblxuICAgIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgfVxuICAgIGRhdGEuaWQgPSBkYXRhLm5hbWU7XG5cbiAgICBpZiAoc3VidHlwZSkge1xuICAgICAgZGF0YS50eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5tdWx0aXBsZSB8fCBkYXRhLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcpIHtcbiAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICdbXSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEucmVxdWlyZWQpIHtcbiAgICAgIGRhdGEucmVxdWlyZWQgPSBudWxsO1xuICAgICAgZGF0YVsnYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIGxldCBmaWVsZExhYmVsID0gZmJVdGlscy5tYWtlTGFiZWwoZGF0YSwgbGFiZWwsIGRlc2NyaXB0aW9uKTtcblxuICAgIGxldCB0ZW1wbGF0ZXMgPSBbXG4gICAgICBbWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ251bWJlcicsICdmaWxlJywgJ2NvbG9yJywgJ2RhdGUnLCAndGVsJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIG0oJ2lucHV0JywgbnVsbCwgZGF0YSldLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBtKCdidXR0b24nLCBsYWJlbCwgZGF0YSksXG4gICAgICAgICAgICBvblJlbmRlcjogZmJVdGlscy5ub29wXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1snc2VsZWN0JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgZmllbGQgPSBmYlV0aWxzLnNlbGVjdFRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGRdLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3RleHRhcmVhJywgJ3RpbnltY2UnLCAncXVpbGwnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IGZiVXRpbHMubG9uZ1RleHRUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkLmZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmaWVsZC5vblJlbmRlclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XVxuICAgICAgXTtcblxuICAgICAgdGVtcGxhdGUgPSBmYlV0aWxzLnRlbXBsYXRlTWFwKFxuICAgICAgICB0ZW1wbGF0ZXMsXG4gICAgICAgIGRhdGEudHlwZSxcbiAgICAgICAgZmJVdGlscy5kZWZhdWx0RmllbGQoZmllbGREYXRhKSAvLyBmYWxsYmFja1xuICAgICAgKTtcblxuICAgICAgaWYgKGRhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgbGV0IHdyYXBwZXJBdHRycyA9IHt9O1xuICAgICAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgICAgIHdyYXBwZXJBdHRycy5jbGFzc05hbWUgPVxuICAgICAgICAgIGBmYi0ke2RhdGEudHlwZX0gZm9ybS1ncm91cCBmaWVsZC0ke2RhdGEuaWR9YDtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZCA9IGZiVXRpbHMubWFya3VwKCdkaXYnLCB0ZW1wbGF0ZS5maWVsZCwgd3JhcHBlckF0dHJzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkID0gZmJVdGlscy5tYXJrdXAoJ2lucHV0JywgbnVsbCwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCB0ZW1wbGF0ZS5vblJlbmRlcik7XG5cbiAgICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgcHJldmlldyBtYXJrdXBcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgZmllbGREYXRhXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG9wdHNcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gcHJldmlld1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICBwcmV2aWV3IG1hcmt1cCBmb3IgZmllbGRcbiAgICovXG4gIGZiVXRpbHMuZmllbGRSZW5kZXIgPSBmdW5jdGlvbihmaWVsZERhdGEsIG9wdHMsIHByZXZpZXcgPSBmYWxzZSkge1xuICAgICAgbGV0IGZpZWxkTWFya3VwID0gJyc7XG4gICAgICBsZXQgZmllbGRMYWJlbCA9ICcnO1xuICAgICAgbGV0IG9wdGlvbnNNYXJrdXAgPSAnJztcbiAgICAgIGxldCBmaWVsZExhYmVsVGV4dCA9IGZpZWxkRGF0YS5sYWJlbCB8fCAnJztcbiAgICAgIGxldCBmaWVsZERlc2MgPSBmaWVsZERhdGEuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICBsZXQgZmllbGRSZXF1aXJlZCA9ICcnO1xuICAgICAgbGV0IGZpZWxkT3B0aW9ucyA9IGZpZWxkRGF0YS52YWx1ZXM7XG4gICAgICBmaWVsZERhdGEuaXNQcmV2aWV3ID0gcHJldmlldztcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IGZiVXRpbHMuZ2V0VGVtcGxhdGUoZmllbGREYXRhLCBvcHRzKTtcblxuICAgICAgZmllbGREYXRhLm5hbWUgPSBwcmV2aWV3ID8gZmllbGREYXRhLm5hbWUgKyAnLXByZXZpZXcnIDogZmllbGREYXRhLm5hbWU7XG4gICAgICBmaWVsZERhdGEuaWQgPSBmaWVsZERhdGEubmFtZTtcbiAgICAgIGlmIChmaWVsZERhdGEubXVsdGlwbGUpIHtcbiAgICAgICAgZmllbGREYXRhLm5hbWUgPSBmaWVsZERhdGEubmFtZSArICdbXSc7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkRGF0YS50eXBlID0gZmllbGREYXRhLnN1YnR5cGUgfHwgZmllbGREYXRhLnR5cGU7XG5cbiAgICAgIGlmIChmaWVsZERhdGEucmVxdWlyZWQpIHtcbiAgICAgICAgZmllbGREYXRhLnJlcXVpcmVkID0gbnVsbDtcbiAgICAgICAgZmllbGREYXRhWydhcmlhLXJlcXVpcmVkJ10gPSAndHJ1ZSc7XG4gICAgICAgIGZpZWxkUmVxdWlyZWQgPSAnPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+JztcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkRGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICBpZiAoZmllbGREZXNjKSB7XG4gICAgICAgICAgZmllbGREZXNjID0gYDxzcGFuIGNsYXNzPVwidG9vbHRpcC1lbGVtZW50XCIgdG9vbHRpcD1cIiR7ZmllbGREZXNjfVwiPj88L3NwYW4+YDtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZExhYmVsID0gYDxsYWJlbCBmb3I9XCIke2ZpZWxkRGF0YS5pZH1cIiBjbGFzcz1cImZiLSR7ZmllbGREYXRhLnR5cGV9LWxhYmVsXCI+JHtmaWVsZExhYmVsVGV4dH0gJHtmaWVsZFJlcXVpcmVkfSAke2ZpZWxkRGVzY308L2xhYmVsPmA7XG4gICAgICB9XG5cbiAgICAgIGxldCBmaWVsZExhYmVsVmFsID0gZmllbGREYXRhLmxhYmVsO1xuXG4gICAgICBkZWxldGUgZmllbGREYXRhLmxhYmVsO1xuICAgICAgZGVsZXRlIGZpZWxkRGF0YS5kZXNjcmlwdGlvbjtcblxuICAgICAgbGV0IGZpZWxkRGF0YVN0cmluZyA9IGZiVXRpbHMuYXR0clN0cmluZyhmaWVsZERhdGEpO1xuXG4gICAgICBzd2l0Y2ggKGZpZWxkRGF0YS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgY2FzZSAncmljaC10ZXh0JzpcbiAgICAgICAgICBkZWxldGUgZmllbGREYXRhLnR5cGU7XG4gICAgICAgICAgbGV0IGZpZWxkVmFsID0gZmllbGREYXRhLnZhbHVlIHx8ICcnO1xuICAgICAgICAgIGZpZWxkTWFya3VwID0gYCR7ZmllbGRMYWJlbH08dGV4dGFyZWEgJHtmaWVsZERhdGFTdHJpbmd9PiR7ZmllbGRWYWx9PC90ZXh0YXJlYT5gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlICdzZWxlY3QnOlxuICAgICAgICAvLyAgIGxldCBvcHRpb25BdHRyc1N0cmluZztcbiAgICAgICAgLy8gICBmaWVsZERhdGEudHlwZSA9IGZpZWxkRGF0YS50eXBlLnJlcGxhY2UoJy1ncm91cCcsICcnKTtcblxuICAgICAgICAvLyAgIGlmIChmaWVsZE9wdGlvbnMpIHtcbiAgICAgICAgLy8gICAgIGlmIChmaWVsZERhdGEucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgLy8gICAgICAgb3B0aW9uc01hcmt1cCArPSBgPG9wdGlvbiBkaXNhYmxlZCBzZWxlY3RlZD4ke2ZpZWxkRGF0YS5wbGFjZWhvbGRlcn08L29wdGlvbj5gO1xuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgICBpZiAoIWZpZWxkT3B0aW9uc1tpXS5zZWxlY3RlZCB8fCBmaWVsZERhdGEucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgLy8gICAgICAgICBkZWxldGUgZmllbGRPcHRpb25zW2ldLnNlbGVjdGVkO1xuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICAgIGlmICghZmllbGRPcHRpb25zW2ldLmxhYmVsKSB7XG4gICAgICAgIC8vICAgICAgICAgZmllbGRPcHRpb25zW2ldLmxhYmVsID0gJyc7XG4gICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgb3B0aW9uQXR0cnNTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcoZmllbGRPcHRpb25zW2ldKTtcbiAgICAgICAgLy8gICAgICAgb3B0aW9uc01hcmt1cCArPSBgPG9wdGlvbiAke29wdGlvbkF0dHJzU3RyaW5nfT4ke2ZpZWxkT3B0aW9uc1tpXS5sYWJlbH08L29wdGlvbj5gO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1cblxuICAgICAgICAvLyAgIGZpZWxkTWFya3VwID0gYCR7ZmllbGRMYWJlbH08c2VsZWN0ICR7ZmllbGREYXRhU3RyaW5nfT4ke29wdGlvbnNNYXJrdXB9PC9zZWxlY3Q+YDtcbiAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgLy8gY2FzZSAnY2hlY2tib3gtZ3JvdXAnOlxuICAgICAgICAvLyBjYXNlICdyYWRpby1ncm91cCc6XG4gICAgICAgIC8vICAgbGV0IG9wdGlvbkF0dHJzO1xuICAgICAgICAvLyAgIGZpZWxkRGF0YS50eXBlID0gZmllbGREYXRhLnR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpO1xuXG4gICAgICAgIC8vICAgaWYgKGZpZWxkRGF0YS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIC8vICAgICBmaWVsZERhdGEubmFtZSA9IGZpZWxkRGF0YS5uYW1lICsgJ1tdJztcbiAgICAgICAgLy8gICB9XG5cbiAgICAgICAgLy8gICBpZiAoZmllbGRPcHRpb25zKSB7XG4gICAgICAgIC8vICAgICBsZXQgb3B0aW9uQXR0cnNTdHJpbmc7XG5cbiAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgIG9wdGlvbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7dmFsdWU6ICcnLCBsYWJlbDogJyd9LCBmaWVsZERhdGEsIGZpZWxkT3B0aW9uc1tpXSk7XG5cbiAgICAgICAgLy8gICAgICAgaWYgKG9wdGlvbkF0dHJzLnNlbGVjdGVkKSB7XG4gICAgICAgIC8vICAgICAgICAgZGVsZXRlIG9wdGlvbkF0dHJzLnNlbGVjdGVkO1xuICAgICAgICAvLyAgICAgICAgIG9wdGlvbkF0dHJzLmNoZWNrZWQgPSBudWxsO1xuICAgICAgICAvLyAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgb3B0aW9uQXR0cnMuaWQgPSBmaWVsZERhdGEuaWQgKyAnLScgKyBpO1xuICAgICAgICAvLyAgICAgICBvcHRpb25BdHRyc1N0cmluZyA9IGZiVXRpbHMuYXR0clN0cmluZyhvcHRpb25BdHRycyk7XG4gICAgICAgIC8vICAgICAgIG9wdGlvbnNNYXJrdXAgKz0gYDxpbnB1dCAke29wdGlvbkF0dHJzU3RyaW5nfSAvPiA8bGFiZWwgZm9yPVwiJHtvcHRpb25BdHRycy5pZH1cIj4ke29wdGlvbkF0dHJzLmxhYmVsfTwvbGFiZWw+PGJyPmA7XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGlmIChmaWVsZERhdGEub3RoZXIpIHtcbiAgICAgICAgLy8gICAgICAgbGV0IG90aGVyT3B0aW9uQXR0cnMgPSB7XG4gICAgICAgIC8vICAgICAgICAgaWQ6IGZpZWxkRGF0YS5pZCArICctJyArICdvdGhlcicsXG4gICAgICAgIC8vICAgICAgICAgY2xhc3NOYW1lOiBmaWVsZERhdGEuY2xhc3NOYW1lICsgJyBvdGhlci1vcHRpb24nLFxuICAgICAgICAvLyAgICAgICAgIG9uY2xpY2s6IGBmYlV0aWxzLm90aGVyT3B0aW9uQ0IoJyR7ZmllbGREYXRhLmlkfS1vdGhlcicpYFxuICAgICAgICAvLyAgICAgICB9O1xuXG4gICAgICAgIC8vICAgICAgIG9wdGlvbkF0dHJzU3RyaW5nID0gZmJVdGlscy5hdHRyU3RyaW5nKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkRGF0YSwgb3RoZXJPcHRpb25BdHRycykpO1xuXG4gICAgICAgIC8vICAgICAgIG9wdGlvbnNNYXJrdXAgKz0gYDxpbnB1dCAke29wdGlvbkF0dHJzU3RyaW5nfSAvPiA8bGFiZWwgZm9yPVwiJHtvdGhlck9wdGlvbkF0dHJzLmlkfVwiPiR7b3B0cy5tZXNzYWdlcy5vdGhlcn08L2xhYmVsPiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiJHtmaWVsZERhdGEubmFtZX1cIiBpZD1cIiR7b3RoZXJPcHRpb25BdHRycy5pZH0tdmFsdWVcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIiAvPmA7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyAgIGZpZWxkTWFya3VwID0gYCR7ZmllbGRMYWJlbH08ZGl2IGNsYXNzPVwiJHtmaWVsZERhdGEudHlwZX0tZ3JvdXBcIj4ke29wdGlvbnNNYXJrdXB9PC9kaXY+YDtcbiAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgLy8gY2FzZSAndGV4dCc6XG4gICAgICAgIC8vIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgICAgLy8gY2FzZSAnZW1haWwnOlxuICAgICAgICAvLyBjYXNlICdudW1iZXInOlxuICAgICAgICAvLyBjYXNlICdmaWxlJzpcbiAgICAgICAgLy8gY2FzZSAnaGlkZGVuJzpcbiAgICAgICAgLy8gY2FzZSAnZGF0ZSc6XG4gICAgICAgIC8vIGNhc2UgJ3RlbCc6XG4gICAgICAgIC8vIGNhc2UgJ2F1dG9jb21wbGV0ZSc6XG4gICAgICAgIC8vICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfSA8aW5wdXQgJHtmaWVsZERhdGFTdHJpbmd9PmA7XG4gICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgIC8vIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgLy8gICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9IDxpbnB1dCAke2ZpZWxkRGF0YVN0cmluZ30+ICR7b3B0cy5tZXNzYWdlcy5zZWxlY3RDb2xvcn1gO1xuICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICBjYXNlICdidXR0b24nOlxuICAgICAgICBjYXNlICdzdWJtaXQnOlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYDxidXR0b24gJHtmaWVsZERhdGFTdHJpbmd9PiR7ZmllbGRMYWJlbFZhbH08L2J1dHRvbj5gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgPGlucHV0ICR7ZmllbGREYXRhU3RyaW5nfT4gJHtmaWVsZExhYmVsfWA7XG5cbiAgICAgICAgICBpZiAoZmllbGREYXRhLnRvZ2dsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZERhdGEuaWQpKS5rY1RvZ2dsZSgpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgPCR7ZmllbGREYXRhLnR5cGV9ICR7ZmllbGREYXRhU3RyaW5nfT4ke2ZpZWxkTGFiZWxWYWx9PC8ke2ZpZWxkRGF0YS50eXBlfT5gO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGREYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBmaWVsZERhdGEuaWQgPyBgZmItJHtmaWVsZERhdGEudHlwZX0gZm9ybS1ncm91cCBmaWVsZC0ke2ZpZWxkRGF0YS5pZH1gIDogJyc7XG4gICAgICAgIGZpZWxkTWFya3VwID0gZmJVdGlscy5tYXJrdXAoJ2RpdicsIHRlbXBsYXRlLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZE1hcmt1cCA9IGZiVXRpbHMubWFya3VwKCdpbnB1dCcsIG51bGwsIGZpZWxkRGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWVsZE1hcmt1cDtcbiAgICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igb3RoZXIgb3B0aW9uLlxuICAgKiBUb2dnbGVzIHRoZSBoaWRkZW4gdGV4dCBhcmVhIGZvciBcIm90aGVyXCIgb3B0aW9uLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG90aGVySWQgaWQgb2YgdGhlIFwib3RoZXJcIiBvcHRpb24gaW5wdXRcbiAgICovXG4gIGZiVXRpbHMub3RoZXJPcHRpb25DQiA9IChvdGhlcklkKSA9PiB7XG4gICAgY29uc3Qgb3RoZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG90aGVySWQpO1xuICAgIGNvbnN0IG90aGVySW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke290aGVySWR9LXZhbHVlYCk7XG5cbiAgICBpZiAob3RoZXJJbnB1dC5jaGVja2VkKSB7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemVzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHVuY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgKi9cbiAgZmJVdGlscy5jYXBpdGFsaXplID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxiXFx3L2csIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIG0udG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICB9O1xuXG5cbmZiVXRpbHMubWVyZ2UgPSAob2JqMSwgb2JqMikgPT4ge1xuICBsZXQgbWVyZ2VkT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqMSwgb2JqMik7XG4gIGZvciAobGV0IHByb3AgaW4gb2JqMikge1xuICAgIGlmIChtZXJnZWRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iajJbcHJvcF0pKSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IEFycmF5LmlzQXJyYXkob2JqMVtwcm9wXSkgPyBmYlV0aWxzLnVuaXF1ZShvYmoxW3Byb3BdLmNvbmNhdChvYmoyW3Byb3BdKSkgOiBvYmoyW3Byb3BdO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqMltwcm9wXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gZmJVdGlscy5tZXJnZShvYmoxW3Byb3BdLCBvYmoyW3Byb3BdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZE9ialtwcm9wXSA9IG9iajJbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtZXJnZWRPYmo7XG59O1xuXG4vKipcbiAqIFV0aWwgdG8gcmVtb3ZlIGNvbnRlbnRzIG9mIERPTSBPYmplY3RcbiAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIGVsZW1lbnQgd2l0aCBpdHMgY2hpbGRyZW4gcmVtb3ZlZFxuICovXG5mYlV0aWxzLmVtcHR5ID0gZWxlbWVudCA9PiB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5mYlV0aWxzLm5vb3AgPSAoKSA9PiBudWxsO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZmJVdGlscztcbiJdfQ==
