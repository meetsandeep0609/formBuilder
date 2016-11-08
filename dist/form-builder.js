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
},{"core-js/library/fn/array/from":17}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":18}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":19}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":20}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":21}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":22}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":23}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":24}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":25}],11:[function(require,module,exports){
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

},{"regenerator-runtime":121}],17:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":40,"../../modules/es6.array.from":107,"../../modules/es6.string.iterator":114}],18:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":105,"../modules/es6.string.iterator":114,"../modules/web.dom.iterable":119}],19:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":106,"../modules/es6.string.iterator":114,"../modules/web.dom.iterable":119}],20:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":40,"../modules/es6.map":109,"../modules/es6.object.to-string":112,"../modules/es6.string.iterator":114,"../modules/es7.map.to-json":116,"../modules/web.dom.iterable":119}],21:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":40,"../../modules/es6.object.assign":110}],22:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":40,"../../modules/es6.object.keys":111}],23:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":40,"../modules/es6.object.to-string":112,"../modules/es6.promise":113,"../modules/es6.string.iterator":114,"../modules/web.dom.iterable":119}],24:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":40,"../../modules/es6.object.to-string":112,"../../modules/es6.symbol":115,"../../modules/es7.symbol.async-iterator":117,"../../modules/es7.symbol.observable":118}],25:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":102,"../../modules/es6.string.iterator":114,"../../modules/web.dom.iterable":119}],26:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],27:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],28:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],29:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":60}],30:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":50}],31:[function(require,module,exports){
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
},{"./_to-index":94,"./_to-iobject":96,"./_to-length":97}],32:[function(require,module,exports){
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
},{"./_array-species-create":34,"./_ctx":42,"./_iobject":57,"./_to-length":97,"./_to-object":98}],33:[function(require,module,exports){
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
},{"./_is-array":59,"./_is-object":60,"./_wks":103}],34:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":33}],35:[function(require,module,exports){
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
},{"./_cof":36,"./_wks":103}],36:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],37:[function(require,module,exports){
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
},{"./_an-instance":28,"./_ctx":42,"./_defined":43,"./_descriptors":44,"./_for-of":50,"./_iter-define":63,"./_iter-step":65,"./_meta":69,"./_object-create":72,"./_object-dp":73,"./_redefine-all":85,"./_set-species":87}],38:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":30,"./_classof":35}],39:[function(require,module,exports){
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
},{"./_an-instance":28,"./_array-methods":32,"./_descriptors":44,"./_export":48,"./_fails":49,"./_for-of":50,"./_global":51,"./_hide":53,"./_is-object":60,"./_meta":69,"./_object-dp":73,"./_redefine-all":85,"./_set-to-string-tag":88}],40:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],41:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":73,"./_property-desc":84}],42:[function(require,module,exports){
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
},{"./_a-function":26}],43:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],44:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":49}],45:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":51,"./_is-object":60}],46:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],47:[function(require,module,exports){
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
},{"./_object-gops":78,"./_object-keys":81,"./_object-pie":82}],48:[function(require,module,exports){
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
},{"./_core":40,"./_ctx":42,"./_global":51,"./_hide":53}],49:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],50:[function(require,module,exports){
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
},{"./_an-object":29,"./_ctx":42,"./_is-array-iter":58,"./_iter-call":61,"./_to-length":97,"./core.get-iterator-method":104}],51:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],52:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],53:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":44,"./_object-dp":73,"./_property-desc":84}],54:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":51}],55:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":44,"./_dom-create":45,"./_fails":49}],56:[function(require,module,exports){
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
},{}],57:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":36}],58:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":66,"./_wks":103}],59:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":36}],60:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],61:[function(require,module,exports){
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
},{"./_an-object":29}],62:[function(require,module,exports){
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
},{"./_hide":53,"./_object-create":72,"./_property-desc":84,"./_set-to-string-tag":88,"./_wks":103}],63:[function(require,module,exports){
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
},{"./_export":48,"./_has":52,"./_hide":53,"./_iter-create":62,"./_iterators":66,"./_library":68,"./_object-gpo":79,"./_redefine":86,"./_set-to-string-tag":88,"./_wks":103}],64:[function(require,module,exports){
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
},{"./_wks":103}],65:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],66:[function(require,module,exports){
module.exports = {};
},{}],67:[function(require,module,exports){
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
},{"./_object-keys":81,"./_to-iobject":96}],68:[function(require,module,exports){
module.exports = true;
},{}],69:[function(require,module,exports){
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
},{"./_fails":49,"./_has":52,"./_is-object":60,"./_object-dp":73,"./_uid":100}],70:[function(require,module,exports){
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
},{"./_cof":36,"./_global":51,"./_task":93}],71:[function(require,module,exports){
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
},{"./_fails":49,"./_iobject":57,"./_object-gops":78,"./_object-keys":81,"./_object-pie":82,"./_to-object":98}],72:[function(require,module,exports){
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

},{"./_an-object":29,"./_dom-create":45,"./_enum-bug-keys":46,"./_html":54,"./_object-dps":74,"./_shared-key":89}],73:[function(require,module,exports){
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
},{"./_an-object":29,"./_descriptors":44,"./_ie8-dom-define":55,"./_to-primitive":99}],74:[function(require,module,exports){
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
},{"./_an-object":29,"./_descriptors":44,"./_object-dp":73,"./_object-keys":81}],75:[function(require,module,exports){
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
},{"./_descriptors":44,"./_has":52,"./_ie8-dom-define":55,"./_object-pie":82,"./_property-desc":84,"./_to-iobject":96,"./_to-primitive":99}],76:[function(require,module,exports){
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

},{"./_object-gopn":77,"./_to-iobject":96}],77:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":46,"./_object-keys-internal":80}],78:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],79:[function(require,module,exports){
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
},{"./_has":52,"./_shared-key":89,"./_to-object":98}],80:[function(require,module,exports){
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
},{"./_array-includes":31,"./_has":52,"./_shared-key":89,"./_to-iobject":96}],81:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":46,"./_object-keys-internal":80}],82:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],83:[function(require,module,exports){
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
},{"./_core":40,"./_export":48,"./_fails":49}],84:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],85:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":53}],86:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":53}],87:[function(require,module,exports){
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
},{"./_core":40,"./_descriptors":44,"./_global":51,"./_object-dp":73,"./_wks":103}],88:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":52,"./_object-dp":73,"./_wks":103}],89:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":90,"./_uid":100}],90:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":51}],91:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":26,"./_an-object":29,"./_wks":103}],92:[function(require,module,exports){
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
},{"./_defined":43,"./_to-integer":95}],93:[function(require,module,exports){
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
},{"./_cof":36,"./_ctx":42,"./_dom-create":45,"./_global":51,"./_html":54,"./_invoke":56}],94:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":95}],95:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],96:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":43,"./_iobject":57}],97:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":95}],98:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":43}],99:[function(require,module,exports){
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
},{"./_is-object":60}],100:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],101:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":40,"./_global":51,"./_library":68,"./_object-dp":73,"./_wks-ext":102}],102:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":103}],103:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":51,"./_shared":90,"./_uid":100}],104:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":35,"./_core":40,"./_iterators":66,"./_wks":103}],105:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":29,"./_core":40,"./core.get-iterator-method":104}],106:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":35,"./_core":40,"./_iterators":66,"./_wks":103}],107:[function(require,module,exports){
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

},{"./_create-property":41,"./_ctx":42,"./_export":48,"./_is-array-iter":58,"./_iter-call":61,"./_iter-detect":64,"./_to-length":97,"./_to-object":98,"./core.get-iterator-method":104}],108:[function(require,module,exports){
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
},{"./_add-to-unscopables":27,"./_iter-define":63,"./_iter-step":65,"./_iterators":66,"./_to-iobject":96}],109:[function(require,module,exports){
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
},{"./_collection":39,"./_collection-strong":37}],110:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":48,"./_object-assign":71}],111:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":81,"./_object-sap":83,"./_to-object":98}],112:[function(require,module,exports){

},{}],113:[function(require,module,exports){
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
},{"./_a-function":26,"./_an-instance":28,"./_classof":35,"./_core":40,"./_ctx":42,"./_export":48,"./_for-of":50,"./_global":51,"./_is-object":60,"./_iter-detect":64,"./_library":68,"./_microtask":70,"./_redefine-all":85,"./_set-species":87,"./_set-to-string-tag":88,"./_species-constructor":91,"./_task":93,"./_wks":103}],114:[function(require,module,exports){
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
},{"./_iter-define":63,"./_string-at":92}],115:[function(require,module,exports){
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
},{"./_an-object":29,"./_descriptors":44,"./_enum-keys":47,"./_export":48,"./_fails":49,"./_global":51,"./_has":52,"./_hide":53,"./_is-array":59,"./_keyof":67,"./_library":68,"./_meta":69,"./_object-create":72,"./_object-dp":73,"./_object-gopd":75,"./_object-gopn":77,"./_object-gopn-ext":76,"./_object-gops":78,"./_object-keys":81,"./_object-pie":82,"./_property-desc":84,"./_redefine":86,"./_set-to-string-tag":88,"./_shared":90,"./_to-iobject":96,"./_to-primitive":99,"./_uid":100,"./_wks":103,"./_wks-define":101,"./_wks-ext":102}],116:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":38,"./_export":48}],117:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":101}],118:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":101}],119:[function(require,module,exports){
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
},{"./_global":51,"./_hide":53,"./_iterators":66,"./_wks":103,"./es6.array.iterator":108}],120:[function(require,module,exports){
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

},{}],121:[function(require,module,exports){
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

},{"./runtime":122}],122:[function(require,module,exports){
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

},{"_process":120}],123:[function(require,module,exports){
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

},{}],124:[function(require,module,exports){
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
// const extend = require('deep-extend');

(function ($) {
  var FormBuilder = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(options, element) {
      var _this = this;

      var formBuilder, utils, defaults, frmbID, _$$extend, i18n, opts, _helpers, subtypes, $sortableFields, lastID, boxID, frmbFields, cbUl, $cbUL, processControl, $formWrap, $stageWrap, cbWrap, viewDataText, m, buttons, clearAll, saveAll, formActions, saveAndUpdate, nonEditableFields, prepFieldVars, loadFields, nameAttr, fieldOptions, advFields, processTypeUserAttrs, inputUserAttrs, selectUserAttrs, boolAttribute, btnStyles, numberAttribute, selectAttribute, textAttribute, requiredField, appendNewField, selectFieldOptions, cloneItem;

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

              formBuilder = this;
              utils = require('./utils.js');

              formBuilder.events = require('./events.js');
              formBuilder.utils = utils;
              formBuilder.mi18n = require('mi18n').default;

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
              _$$extend = $.extend(defaults, options, true), i18n = _$$extend.i18n, opts = (0, _objectWithoutProperties3.default)(_$$extend, ['i18n']);
              _context2.next = 15;
              return formBuilder.mi18n.init(i18n);

            case 15:
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
                            return formBuilder.mi18n.setCurrent.call(formBuilder.mi18n, locale);

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

            case 90:
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

},{"./events.js":123,"./helpers.js":125,"./kc-toggle.js":126,"./polyfills.js":127,"./utils.js":128,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/asyncToGenerator":11,"babel-runtime/helpers/objectWithoutProperties":12,"babel-runtime/regenerator":16,"mi18n":1}],125:[function(require,module,exports){
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
  var i18n = formBuilder.mi18n;
  var utils = formBuilder.utils;

  var _helpers = {
    doCancel: false
  };

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
        label: i18n.get(subtype),
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

},{"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/objectWithoutProperties":12}],126:[function(require,module,exports){
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

},{}],127:[function(require,module,exports){
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

},{"babel-runtime/core-js/object/assign":6}],128:[function(require,module,exports){
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

},{"babel-runtime/core-js/get-iterator":3,"babel-runtime/core-js/map":5,"babel-runtime/core-js/object/assign":6,"babel-runtime/helpers/objectWithoutProperties":12,"babel-runtime/helpers/slicedToArray":13,"babel-runtime/helpers/toConsumableArray":14,"babel-runtime/helpers/typeof":15}]},{},[124])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi9EcmFnZ2FibGUvbUkxOE4vbWkxOG4vZGlzdC9taTE4bi5taW4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsInNyYy9qcy9ldmVudHMuanMiLCJzcmMvanMvZm9ybS1idWlsZGVyLmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMva2MtdG9nZ2xlLmpzIiwic3JjL2pzL3BvbHlmaWxscy5qcyIsInNyYy9qcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RDs7QUFnQkE7Ozs7O0FBS0EsUUFBUSxLQUFSLEdBQWdCLG1CQUFXO0FBQ3pCLFNBQU8sUUFBUSxVQUFmLEVBQTJCO0FBQ3pCLFlBQVEsV0FBUixDQUFvQixRQUFRLFVBQTVCO0FBQ0Q7QUFDRCxTQUFPLE9BQVA7QUFDRCxDQUxEOztBQU9BLFFBQVEsSUFBUixHQUFlO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBZjs7QUFHQSxPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXG4gKiBtaTE4biAtIGh0dHBzOi8vZ2l0aHViLmNvbS9EcmFnZ2FibGUvbWkxOG5cbiAqIFZlcnNpb246IDAuMy4yXG4gKiBBdXRob3I6IEtldmluIENoYXBwZWxsIDxrZXZpbi5iLmNoYXBwZWxsQGdtYWlsLmNvbT4gKGh0dHA6Ly9rZXZpbi1jaGFwcGVsbC5jb20pXG4gKi9cbm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgZT17fTtyZXR1cm4gbi5tPXQsbi5jPWUsbi5wPVwiZGlzdC9cIixuKDApfShbZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1lKDQ1KSx1PXIobyksaT1lKDM5KSxmPXIoaSksYz1lKDQzKSxhPXIoYykscz1lKDQ0KSxsPXIocykscD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXsoMCxhW1wiZGVmYXVsdFwiXSkodGhpcyx0KTt2YXIgbj17bG9jYXRpb246XCJhc3NldHMvbGFuZy9cIixsYW5nczpbXCJlbi1VU1wiLFwiZXMtRVNcIl0sbG9jYWxlOlwiZW4tVVNcIixwcmVsb2FkZWQ6e319LGU9dGhpcztlLmluaXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY29uZmlnPSgwLGZbXCJkZWZhdWx0XCJdKSh7fSxuLHQpLGUubGFuZ3M9KDAsZltcImRlZmF1bHRcIl0pKHt9LGUuY29uZmlnLnByZWxvYWRlZCksZS5sb2NhbGU9ZS5jb25maWcubG9jYWxlfHxlLmNvbmZpZy5sYW5nc1swXSxlLnNldEN1cnJlbnQoZS5sb2NhbGUpfX1yZXR1cm4oMCxsW1wiZGVmYXVsdFwiXSkodCxbe2tleTpcImdldFZhbHVlXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY3VycmVudCYmdGhpcy5jdXJyZW50W3RdfHx0fX0se2tleTpcIm1ha2VTYWZlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49e1wie1wiOlwiXFxcXHtcIixcIn1cIjpcIlxcXFx9XCIsXCJ8XCI6XCJcXFxcfFwifTtyZXR1cm4gdD10LnJlcGxhY2UoL1xce3xcXH18XFx8L2csZnVuY3Rpb24odCl7cmV0dXJuIG5bdF19KSxuZXcgUmVnRXhwKHQsXCJnXCIpfX0se2tleTpcInB1dFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuY3VycmVudFt0XT1ufX0se2tleTpcImdldFwiLHZhbHVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9dGhpcyxyPXRoaXMuZ2V0VmFsdWUodCksbz1yLm1hdGNoKC9cXHtbXlxcfV0rP1xcfS9nKSxpPXZvaWQgMDtpZihuJiZvKWlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIG4/XCJ1bmRlZmluZWRcIjooMCx1W1wiZGVmYXVsdFwiXSkobikpKWZvcih2YXIgZj0wO2Y8by5sZW5ndGg7ZisrKWk9b1tmXS5zdWJzdHJpbmcoMSxvW2ZdLmxlbmd0aC0xKSxyPXIucmVwbGFjZShlLm1ha2VTYWZlKG9bZl0pLG5baV18fFwiXCIpO2Vsc2Ugcj1yLnJlcGxhY2UoL1xce1teXFx9XSs/XFx9L2csbik7cmV0dXJuIHJ9fSx7a2V5OlwiZnJvbUZpbGVcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIG4sZT10LnNwbGl0KFwiXFxuXCIpLHI9e30sbz0wO288ZS5sZW5ndGg7bysrKW49ZVtvXS5tYXRjaCgvXiguKz8pICo/PSAqPyhbXlxcbl0rKS8pLG4mJihyW25bMV1dPW5bMl0ucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpKTtyZXR1cm4gcn19LHtrZXk6XCJwcm9jZXNzRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMsZT10LnJlcGxhY2UoL1xcblxcbi9nLFwiXFxuXCIpO3JldHVybiBuLmxhbmdzW24ubG9jYWxlXT1uLmZyb21GaWxlKGUpfX0se2tleTpcImxvYWRMYW5nXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49dGhpcztyZXR1cm4gbmV3IHdpbmRvdy5Qcm9taXNlKGZ1bmN0aW9uKGUscil7bi5sYW5nc1tuLmxvY2FsZV0/ZShuLmxhbmdzW24ubG9jYWxlXSk6IWZ1bmN0aW9uKCl7dmFyIG89bmV3IFhNTEh0dHBSZXF1ZXN0O28ub3BlbihcIkdFVFwiLG4uY29uZmlnLmxvY2F0aW9uK3QrXCIubGFuZ1wiLCEwKSxvLm9ubG9hZD1mdW5jdGlvbigpe3RoaXMuc3RhdHVzPD0zMDQ/KG4ucHJvY2Vzc0ZpbGUoby5yZXNwb25zZVRleHQpLGUoby5yZXNwb25zZSkpOnIoe3N0YXR1czp0aGlzLnN0YXR1cyxzdGF0dXNUZXh0Om8uc3RhdHVzVGV4dH0pfSxvLm9uZXJyb3I9ZnVuY3Rpb24oKXtyKHtzdGF0dXM6dGhpcy5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9KX0sby5zZW5kKCl9KCl9KX19LHtrZXk6XCJzZXRDdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJlbi1VU1wiLG49dGhpcy5sb2FkTGFuZyh0KTtyZXR1cm4gdGhpcy5sb2NhbGU9dCx0aGlzLmN1cnJlbnQ9dGhpcy5sYW5nc1t0XSx3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLHQpLG59fSx7a2V5OlwiZ2V0TGFuZ3NcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb25maWcubGFuZ3N9fV0pLHR9KCk7bltcImRlZmF1bHRcIl09bmV3IHB9LGZ1bmN0aW9uKHQsbil7dmFyIGU9dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBfX2cmJihfX2c9ZSl9LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9IWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbil7dmFyIGU9e30uaGFzT3duUHJvcGVydHk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbCh0LG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTEpLG89ZSgzMSksdT1lKDI2KSxpPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTtuLmY9ZSgyKT9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24odCxuLGUpe2lmKHIodCksbj11KG4sITApLHIoZSksbyl0cnl7cmV0dXJuIGkodCxuLGUpfWNhdGNoKGYpe31pZihcImdldFwiaW4gZXx8XCJzZXRcImluIGUpdGhyb3cgVHlwZUVycm9yKFwiQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhXCIpO3JldHVyblwidmFsdWVcImluIGUmJih0W25dPWUudmFsdWUpLHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgzMiksbz1lKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIobyh0KSl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0KSxvPWUoMTUpO3QuZXhwb3J0cz1lKDIpP2Z1bmN0aW9uKHQsbixlKXtyZXR1cm4gci5mKHQsbixvKDEsZSkpfTpmdW5jdGlvbih0LG4sZSl7cmV0dXJuIHRbbl09ZSx0fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjQpKFwid2tzXCIpLG89ZSgxNiksdT1lKDEpLlN5bWJvbCxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHUsZj10LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPWkmJnVbdF18fChpP3U6bykoXCJTeW1ib2wuXCIrdCkpfTtmLnN0b3JlPXJ9LGZ1bmN0aW9uKHQsbil7dmFyIGU9dC5leHBvcnRzPXt2ZXJzaW9uOlwiMi40LjBcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1lKX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKG4pe3JldHVybiEwfX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDM2KSxvPWUoMTgpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoIXIodCkpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGFuIG9iamVjdCFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxKSxvPWUoOCksdT1lKDUzKSxpPWUoNiksZj1cInByb3RvdHlwZVwiLGM9ZnVuY3Rpb24odCxuLGUpe3ZhciBhLHMsbCxwPXQmYy5GLHY9dCZjLkcseT10JmMuUyxkPXQmYy5QLGg9dCZjLkIsZz10JmMuVyxiPXY/bzpvW25dfHwob1tuXT17fSksbT1iW2ZdLHg9dj9yOnk/cltuXToocltuXXx8e30pW2ZdO3YmJihlPW4pO2ZvcihhIGluIGUpcz0hcCYmeCYmdm9pZCAwIT09eFthXSxzJiZhIGluIGJ8fChsPXM/eFthXTplW2FdLGJbYV09diYmXCJmdW5jdGlvblwiIT10eXBlb2YgeFthXT9lW2FdOmgmJnM/dShsLHIpOmcmJnhbYV09PWw/ZnVuY3Rpb24odCl7dmFyIG49ZnVuY3Rpb24obixlLHIpe2lmKHRoaXMgaW5zdGFuY2VvZiB0KXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuZXcgdDtjYXNlIDE6cmV0dXJuIG5ldyB0KG4pO2Nhc2UgMjpyZXR1cm4gbmV3IHQobixlKX1yZXR1cm4gbmV3IHQobixlLHIpfXJldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cmV0dXJuIG5bZl09dFtmXSxufShsKTpkJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP3UoRnVuY3Rpb24uY2FsbCxsKTpsLGQmJigoYi52aXJ0dWFsfHwoYi52aXJ0dWFsPXt9KSlbYV09bCx0JmMuUiYmbSYmIW1bYV0mJmkobSxhLGwpKSl9O2MuRj0xLGMuRz0yLGMuUz00LGMuUD04LGMuQj0xNixjLlc9MzIsYy5VPTY0LGMuUj0xMjgsdC5leHBvcnRzPWN9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9fSxmdW5jdGlvbih0LG4pe24uZj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6bn19fSxmdW5jdGlvbih0LG4pe3ZhciBlPTAscj1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09dD9cIlwiOnQsXCIpX1wiLCgrK2UrcikudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIrdCk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1cImNvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZlwiLnNwbGl0KFwiLFwiKX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9e319LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPSEwfSxmdW5jdGlvbih0LG4pe24uZj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg0KS5mLG89ZSgzKSx1PWUoNykoXCJ0b1N0cmluZ1RhZ1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLGUpe3QmJiFvKHQ9ZT90OnQucHJvdG90eXBlLHUpJiZyKHQsdSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOm59KX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI0KShcImtleXNcIiksbz1lKDE2KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPW8odCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMSksbz1cIl9fY29yZS1qc19zaGFyZWRfX1wiLHU9cltvXXx8KHJbb109e30pO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdVt0XXx8KHVbdF09e30pfX0sZnVuY3Rpb24odCxuKXt2YXIgZT1NYXRoLmNlaWwscj1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP3I6ZSkodCl9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIGUsbztpZihuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihlPXQudG9TdHJpbmcpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87aWYoXCJmdW5jdGlvblwiPT10eXBlb2YoZT10LnZhbHVlT2YpJiYhcihvPWUuY2FsbCh0KSkpcmV0dXJuIG87aWYoIW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mKGU9dC50b1N0cmluZykmJiFyKG89ZS5jYWxsKHQpKSlyZXR1cm4gbzt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxKSxvPWUoOCksdT1lKDIwKSxpPWUoMjgpLGY9ZSg0KS5mO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1vLlN5bWJvbHx8KG8uU3ltYm9sPXU/e306ci5TeW1ib2x8fHt9KTtcIl9cIj09dC5jaGFyQXQoMCl8fHQgaW4gbnx8ZihuLHQse3ZhbHVlOmkuZih0KX0pfX0sZnVuY3Rpb24odCxuLGUpe24uZj1lKDcpfSxmdW5jdGlvbih0LG4pe3ZhciBlPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZS5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTMpLG89ZSgxKS5kb2N1bWVudCx1PXIobykmJnIoby5jcmVhdGVFbGVtZW50KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHU/by5jcmVhdGVFbGVtZW50KHQpOnt9fX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz0hZSgyKSYmIWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUoMzApKFwiZGl2XCIpLFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDI5KTt0LmV4cG9ydHM9T2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKT9PYmplY3Q6ZnVuY3Rpb24odCl7cmV0dXJuXCJTdHJpbmdcIj09cih0KT90LnNwbGl0KFwiXCIpOk9iamVjdCh0KX19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDIwKSxvPWUoMTIpLHU9ZSgzNyksaT1lKDYpLGY9ZSgzKSxjPWUoMTkpLGE9ZSg1Nykscz1lKDIyKSxsPWUoNjUpLHA9ZSg3KShcIml0ZXJhdG9yXCIpLHY9IShbXS5rZXlzJiZcIm5leHRcImluW10ua2V5cygpKSx5PVwiQEBpdGVyYXRvclwiLGQ9XCJrZXlzXCIsaD1cInZhbHVlc1wiLGc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlLGIsbSx4LE8pe2EoZSxuLGIpO3ZhciB3LFMsXyxqPWZ1bmN0aW9uKHQpe2lmKCF2JiZ0IGluIE0pcmV0dXJuIE1bdF07c3dpdGNoKHQpe2Nhc2UgZDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX07Y2FzZSBoOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgZSh0aGlzLHQpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcyx0KX19LEU9bitcIiBJdGVyYXRvclwiLFA9bT09aCxrPSExLE09dC5wcm90b3R5cGUsVD1NW3BdfHxNW3ldfHxtJiZNW21dLEY9VHx8aihtKSxBPW0/UD9qKFwiZW50cmllc1wiKTpGOnZvaWQgMCxJPVwiQXJyYXlcIj09bj9NLmVudHJpZXN8fFQ6VDtpZihJJiYoXz1sKEkuY2FsbChuZXcgdCkpLF8hPT1PYmplY3QucHJvdG90eXBlJiYocyhfLEUsITApLHJ8fGYoXyxwKXx8aShfLHAsZykpKSxQJiZUJiZULm5hbWUhPT1oJiYoaz0hMCxGPWZ1bmN0aW9uKCl7cmV0dXJuIFQuY2FsbCh0aGlzKX0pLHImJiFPfHwhdiYmIWsmJk1bcF18fGkoTSxwLEYpLGNbbl09RixjW0VdPWcsbSlpZih3PXt2YWx1ZXM6UD9GOmooaCksa2V5czp4P0Y6aihkKSxlbnRyaWVzOkF9LE8pZm9yKFMgaW4gdylTIGluIE18fHUoTSxTLHdbU10pO2Vsc2UgbyhvLlArby5GKih2fHxrKSxuLHcpO3JldHVybiB3fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMTEpLG89ZSg2MiksdT1lKDE4KSxpPWUoMjMpKFwiSUVfUFJPVE9cIiksZj1mdW5jdGlvbigpe30sYz1cInByb3RvdHlwZVwiLGE9ZnVuY3Rpb24oKXt2YXIgdCxuPWUoMzApKFwiaWZyYW1lXCIpLHI9dS5sZW5ndGgsbz1cIjxcIixpPVwiPlwiO2ZvcihuLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZSg1NSkuYXBwZW5kQ2hpbGQobiksbi5zcmM9XCJqYXZhc2NyaXB0OlwiLHQ9bi5jb250ZW50V2luZG93LmRvY3VtZW50LHQub3BlbigpLHQud3JpdGUobytcInNjcmlwdFwiK2krXCJkb2N1bWVudC5GPU9iamVjdFwiK28rXCIvc2NyaXB0XCIraSksdC5jbG9zZSgpLGE9dC5GO3ItLTspZGVsZXRlIGFbY11bdVtyXV07cmV0dXJuIGEoKX07dC5leHBvcnRzPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKHQsbil7dmFyIGU7cmV0dXJuIG51bGwhPT10PyhmW2NdPXIodCksZT1uZXcgZixmW2NdPW51bGwsZVtpXT10KTplPWEoKSx2b2lkIDA9PT1uP2U6byhlLG4pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMzYpLG89ZSgxOCkuY29uY2F0KFwibGVuZ3RoXCIsXCJwcm90b3R5cGVcIik7bi5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzfHxmdW5jdGlvbih0KXtyZXR1cm4gcih0LG8pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMyksbz1lKDUpLHU9ZSg1MikoITEpLGk9ZSgyMykoXCJJRV9QUk9UT1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXt2YXIgZSxmPW8odCksYz0wLGE9W107Zm9yKGUgaW4gZillIT1pJiZyKGYsZSkmJmEucHVzaChlKTtmb3IoO24ubGVuZ3RoPmM7KXIoZixlPW5bYysrXSkmJih+dShhLGUpfHxhLnB1c2goZSkpO3JldHVybiBhfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz1lKDYpfSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3Qocih0KSl9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ2KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuLGUpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZSg0NyksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKHQsbixlKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoNDgpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKDQ5KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24odCxuKXtcInVzZSBzdHJpY3RcIjtuLl9fZXNNb2R1bGU9ITAsbltcImRlZmF1bHRcIl09ZnVuY3Rpb24odCxuKXtpZighKHQgaW5zdGFuY2VvZiBuKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntcImRlZmF1bHRcIjp0fX1uLl9fZXNNb2R1bGU9ITA7dmFyIG89ZSg0MCksdT1yKG8pO25bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe2Zvcih2YXIgZT0wO2U8bi5sZW5ndGg7ZSsrKXt2YXIgcj1uW2VdO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSwoMCx1W1wiZGVmYXVsdFwiXSkodCxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKG4sZSxyKXtyZXR1cm4gZSYmdChuLnByb3RvdHlwZSxlKSxyJiZ0KG4sciksbn19KCl9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7XCJkZWZhdWx0XCI6dH19bi5fX2VzTW9kdWxlPSEwO3ZhciBvPWUoNDIpLHU9cihvKSxpPWUoNDEpLGY9cihpKSxjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZcInN5bWJvbFwiPT10eXBlb2YgdVtcImRlZmF1bHRcIl0/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZltcImRlZmF1bHRcIl0mJnQuY29uc3RydWN0b3I9PT1mW1wiZGVmYXVsdFwiXT9cInN5bWJvbFwiOnR5cGVvZiB0fTtuW1wiZGVmYXVsdFwiXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBmW1wiZGVmYXVsdFwiXSYmXCJzeW1ib2xcIj09PWModVtcImRlZmF1bHRcIl0pP2Z1bmN0aW9uKHQpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Yyh0KX06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGZbXCJkZWZhdWx0XCJdJiZ0LmNvbnN0cnVjdG9yPT09ZltcImRlZmF1bHRcIl0/XCJzeW1ib2xcIjpcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCl9fSxmdW5jdGlvbih0LG4sZSl7ZSg3MCksdC5leHBvcnRzPWUoOCkuT2JqZWN0LmFzc2lnbn0sZnVuY3Rpb24odCxuLGUpe2UoNzEpO3ZhciByPWUoOCkuT2JqZWN0O3QuZXhwb3J0cz1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHIuZGVmaW5lUHJvcGVydHkodCxuLGUpfX0sZnVuY3Rpb24odCxuLGUpe2UoNzQpLGUoNzIpLGUoNzUpLGUoNzYpLHQuZXhwb3J0cz1lKDgpLlN5bWJvbH0sZnVuY3Rpb24odCxuLGUpe2UoNzMpLGUoNzcpLHQuZXhwb3J0cz1lKDI4KS5mKFwiaXRlcmF0b3JcIil9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1KSxvPWUoNjgpLHU9ZSg2Nyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihuLGUsaSl7dmFyIGYsYz1yKG4pLGE9byhjLmxlbmd0aCkscz11KGksYSk7aWYodCYmZSE9ZSl7Zm9yKDthPnM7KWlmKGY9Y1tzKytdLGYhPWYpcmV0dXJuITB9ZWxzZSBmb3IoO2E+cztzKyspaWYoKHR8fHMgaW4gYykmJmNbc109PT1lKXJldHVybiB0fHxzfHwwO3JldHVybiF0JiYtMX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSg1MCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXtpZihyKHQpLHZvaWQgMD09PW4pcmV0dXJuIHQ7c3dpdGNoKGUpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2FsbChuLGUpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQuY2FsbChuLGUscil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24oZSxyLG8pe3JldHVybiB0LmNhbGwobixlLHIsbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxMCksbz1lKDIxKSx1PWUoMTQpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj1yKHQpLGU9by5mO2lmKGUpZm9yKHZhciBpLGY9ZSh0KSxjPXUuZixhPTA7Zi5sZW5ndGg+YTspYy5jYWxsKHQsaT1mW2ErK10pJiZuLnB1c2goaSk7cmV0dXJuIG59fSxmdW5jdGlvbih0LG4sZSl7dC5leHBvcnRzPWUoMSkuZG9jdW1lbnQmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudH0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjkpO3QuZXhwb3J0cz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbih0KXtyZXR1cm5cIkFycmF5XCI9PXIodCl9fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSgzNCksbz1lKDE1KSx1PWUoMjIpLGk9e307ZSg2KShpLGUoNykoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksdC5leHBvcnRzPWZ1bmN0aW9uKHQsbixlKXt0LnByb3RvdHlwZT1yKGkse25leHQ6bygxLGUpfSksdSh0LG4rXCIgSXRlcmF0b3JcIil9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybnt2YWx1ZTpuLGRvbmU6ISF0fX19LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEwKSxvPWUoNSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7Zm9yKHZhciBlLHU9byh0KSxpPXIodSksZj1pLmxlbmd0aCxjPTA7Zj5jOylpZih1W2U9aVtjKytdXT09PW4pcmV0dXJuIGV9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNikoXCJtZXRhXCIpLG89ZSgxMyksdT1lKDMpLGk9ZSg0KS5mLGY9MCxjPU9iamVjdC5pc0V4dGVuc2libGV8fGZ1bmN0aW9uKCl7cmV0dXJuITB9LGE9IWUoOSkoZnVuY3Rpb24oKXtyZXR1cm4gYyhPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKX0pLHM9ZnVuY3Rpb24odCl7aSh0LHIse3ZhbHVlOntpOlwiT1wiKyArK2Ysdzp7fX19KX0sbD1mdW5jdGlvbih0LG4pe2lmKCFvKHQpKXJldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6KFwic3RyaW5nXCI9PXR5cGVvZiB0P1wiU1wiOlwiUFwiKSt0O2lmKCF1KHQscikpe2lmKCFjKHQpKXJldHVyblwiRlwiO2lmKCFuKXJldHVyblwiRVwiO3ModCl9cmV0dXJuIHRbcl0uaX0scD1mdW5jdGlvbih0LG4pe2lmKCF1KHQscikpe2lmKCFjKHQpKXJldHVybiEwO2lmKCFuKXJldHVybiExO3ModCl9cmV0dXJuIHRbcl0ud30sdj1mdW5jdGlvbih0KXtyZXR1cm4gYSYmeS5ORUVEJiZjKHQpJiYhdSh0LHIpJiZzKHQpLHR9LHk9dC5leHBvcnRzPXtLRVk6cixORUVEOiExLGZhc3RLZXk6bCxnZXRXZWFrOnAsb25GcmVlemU6dn19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDEwKSxvPWUoMjEpLHU9ZSgxNCksaT1lKDM4KSxmPWUoMzIpLGM9T2JqZWN0LmFzc2lnbjt0LmV4cG9ydHM9IWN8fGUoOSkoZnVuY3Rpb24oKXt2YXIgdD17fSxuPXt9LGU9U3ltYm9sKCkscj1cImFiY2RlZmdoaWprbG1ub3BxcnN0XCI7cmV0dXJuIHRbZV09NyxyLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24odCl7blt0XT10fSksNyE9Yyh7fSx0KVtlXXx8T2JqZWN0LmtleXMoYyh7fSxuKSkuam9pbihcIlwiKSE9cn0pP2Z1bmN0aW9uKHQsbil7Zm9yKHZhciBlPWkodCksYz1hcmd1bWVudHMubGVuZ3RoLGE9MSxzPW8uZixsPXUuZjtjPmE7KWZvcih2YXIgcCx2PWYoYXJndW1lbnRzW2ErK10pLHk9cz9yKHYpLmNvbmNhdChzKHYpKTpyKHYpLGQ9eS5sZW5ndGgsaD0wO2Q+aDspbC5jYWxsKHYscD15W2grK10pJiYoZVtwXT12W3BdKTtyZXR1cm4gZX06Y30sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNCksbz1lKDExKSx1PWUoMTApO3QuZXhwb3J0cz1lKDIpP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzOmZ1bmN0aW9uKHQsbil7byh0KTtmb3IodmFyIGUsaT11KG4pLGY9aS5sZW5ndGgsYz0wO2Y+Yzspci5mKHQsZT1pW2MrK10sbltlXSk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgxNCksbz1lKDE1KSx1PWUoNSksaT1lKDI2KSxmPWUoMyksYz1lKDMxKSxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7bi5mPWUoMik/YTpmdW5jdGlvbih0LG4pe2lmKHQ9dSh0KSxuPWkobiwhMCksYyl0cnl7cmV0dXJuIGEodCxuKX1jYXRjaChlKXt9aWYoZih0LG4pKXJldHVybiBvKCFyLmYuY2FsbCh0LG4pLHRbbl0pfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoNSksbz1lKDM1KS5mLHU9e30udG9TdHJpbmcsaT1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W10sZj1mdW5jdGlvbih0KXt0cnl7cmV0dXJuIG8odCl9Y2F0Y2gobil7cmV0dXJuIGkuc2xpY2UoKX19O3QuZXhwb3J0cy5mPWZ1bmN0aW9uKHQpe3JldHVybiBpJiZcIltvYmplY3QgV2luZG93XVwiPT11LmNhbGwodCk/Zih0KTpvKHIodCkpfX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMyksbz1lKDM4KSx1PWUoMjMpKFwiSUVfUFJPVE9cIiksaT1PYmplY3QucHJvdG90eXBlO3QuZXhwb3J0cz1PYmplY3QuZ2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQpe3JldHVybiB0PW8odCkscih0LHUpP3RbdV06XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb25zdHJ1Y3RvciYmdCBpbnN0YW5jZW9mIHQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU6dCBpbnN0YW5jZW9mIE9iamVjdD9pOm51bGx9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNSksbz1lKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKG4sZSl7dmFyIHUsaSxmPVN0cmluZyhvKG4pKSxjPXIoZSksYT1mLmxlbmd0aDtyZXR1cm4gYzwwfHxjPj1hP3Q/XCJcIjp2b2lkIDA6KHU9Zi5jaGFyQ29kZUF0KGMpLHU8NTUyOTZ8fHU+NTYzMTl8fGMrMT09PWF8fChpPWYuY2hhckNvZGVBdChjKzEpKTw1NjMyMHx8aT41NzM0Mz90P2YuY2hhckF0KGMpOnU6dD9mLnNsaWNlKGMsYysyKToodS01NTI5Njw8MTApKyhpLTU2MzIwKSs2NTUzNil9fX0sZnVuY3Rpb24odCxuLGUpe3ZhciByPWUoMjUpLG89TWF0aC5tYXgsdT1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD1yKHQpLHQ8MD9vKHQrbiwwKTp1KHQsbil9fSxmdW5jdGlvbih0LG4sZSl7dmFyIHI9ZSgyNSksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9vKHIodCksOTAwNzE5OTI1NDc0MDk5MSk6MH19LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1lKDUxKSxvPWUoNTgpLHU9ZSgxOSksaT1lKDUpO3QuZXhwb3J0cz1lKDMzKShBcnJheSxcIkFycmF5XCIsZnVuY3Rpb24odCxuKXt0aGlzLl90PWkodCksdGhpcy5faT0wLHRoaXMuX2s9bn0sZnVuY3Rpb24oKXt2YXIgdD10aGlzLl90LG49dGhpcy5fayxlPXRoaXMuX2krKztyZXR1cm4hdHx8ZT49dC5sZW5ndGg/KHRoaXMuX3Q9dm9pZCAwLG8oMSkpOlwia2V5c1wiPT1uP28oMCxlKTpcInZhbHVlc1wiPT1uP28oMCx0W2VdKTpvKDAsW2UsdFtlXV0pfSxcInZhbHVlc1wiKSx1LkFyZ3VtZW50cz11LkFycmF5LHIoXCJrZXlzXCIpLHIoXCJ2YWx1ZXNcIikscihcImVudHJpZXNcIil9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEyKTtyKHIuUytyLkYsXCJPYmplY3RcIix7YXNzaWduOmUoNjEpfSl9LGZ1bmN0aW9uKHQsbixlKXt2YXIgcj1lKDEyKTtyKHIuUytyLkYqIWUoMiksXCJPYmplY3RcIix7ZGVmaW5lUHJvcGVydHk6ZSg0KS5mfSl9LGZ1bmN0aW9uKHQsbil7fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZSg2NikoITApO2UoMzMpKFN0cmluZyxcIlN0cmluZ1wiLGZ1bmN0aW9uKHQpe3RoaXMuX3Q9U3RyaW5nKHQpLHRoaXMuX2k9MH0sZnVuY3Rpb24oKXt2YXIgdCxuPXRoaXMuX3QsZT10aGlzLl9pO3JldHVybiBlPj1uLmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9Oih0PXIobixlKSx0aGlzLl9pKz10Lmxlbmd0aCx7dmFsdWU6dCxkb25lOiExfSl9KX0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO3ZhciByPWUoMSksbz1lKDMpLHU9ZSgyKSxpPWUoMTIpLGY9ZSgzNyksYz1lKDYwKS5LRVksYT1lKDkpLHM9ZSgyNCksbD1lKDIyKSxwPWUoMTYpLHY9ZSg3KSx5PWUoMjgpLGQ9ZSgyNyksaD1lKDU5KSxnPWUoNTQpLGI9ZSg1NiksbT1lKDExKSx4PWUoNSksTz1lKDI2KSx3PWUoMTUpLFM9ZSgzNCksXz1lKDY0KSxqPWUoNjMpLEU9ZSg0KSxQPWUoMTApLGs9ai5mLE09RS5mLFQ9Xy5mLEY9ci5TeW1ib2wsQT1yLkpTT04sST1BJiZBLnN0cmluZ2lmeSxOPVwicHJvdG90eXBlXCIsQz12KFwiX2hpZGRlblwiKSxMPXYoXCJ0b1ByaW1pdGl2ZVwiKSxSPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFc9cyhcInN5bWJvbC1yZWdpc3RyeVwiKSxEPXMoXCJzeW1ib2xzXCIpLEc9cyhcIm9wLXN5bWJvbHNcIiksSj1PYmplY3RbTl0sVT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBGLEs9ci5RT2JqZWN0LHE9IUt8fCFLW05dfHwhS1tOXS5maW5kQ2hpbGQsej11JiZhKGZ1bmN0aW9uKCl7cmV0dXJuIDchPVMoTSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE0odGhpcyxcImFcIix7dmFsdWU6N30pLmF9fSkpLmF9KT9mdW5jdGlvbih0LG4sZSl7dmFyIHI9ayhKLG4pO3ImJmRlbGV0ZSBKW25dLE0odCxuLGUpLHImJnQhPT1KJiZNKEosbixyKX06TSxCPWZ1bmN0aW9uKHQpe3ZhciBuPURbdF09UyhGW05dKTtyZXR1cm4gbi5faz10LG59LFY9VSYmXCJzeW1ib2xcIj09dHlwZW9mIEYuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgRn0sWT1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIHQ9PT1KJiZZKEcsbixlKSxtKHQpLG49TyhuLCEwKSxtKGUpLG8oRCxuKT8oZS5lbnVtZXJhYmxlPyhvKHQsQykmJnRbQ11bbl0mJih0W0NdW25dPSExKSxlPVMoZSx7ZW51bWVyYWJsZTp3KDAsITEpfSkpOihvKHQsQyl8fE0odCxDLHcoMSx7fSkpLHRbQ11bbl09ITApLHoodCxuLGUpKTpNKHQsbixlKX0sSD1mdW5jdGlvbih0LG4pe20odCk7Zm9yKHZhciBlLHI9ZyhuPXgobikpLG89MCx1PXIubGVuZ3RoO3U+bzspWSh0LGU9cltvKytdLG5bZV0pO3JldHVybiB0fSxRPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHZvaWQgMD09PW4/Uyh0KTpIKFModCksbil9LFg9ZnVuY3Rpb24odCl7dmFyIG49Ui5jYWxsKHRoaXMsdD1PKHQsITApKTtyZXR1cm4hKHRoaXM9PT1KJiZvKEQsdCkmJiFvKEcsdCkpJiYoIShufHwhbyh0aGlzLHQpfHwhbyhELHQpfHxvKHRoaXMsQykmJnRoaXNbQ11bdF0pfHxuKX0sJD1mdW5jdGlvbih0LG4pe2lmKHQ9eCh0KSxuPU8obiwhMCksdCE9PUp8fCFvKEQsbil8fG8oRyxuKSl7dmFyIGU9ayh0LG4pO3JldHVybiFlfHwhbyhELG4pfHxvKHQsQykmJnRbQ11bbl18fChlLmVudW1lcmFibGU9ITApLGV9fSxaPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbixlPVQoeCh0KSkscj1bXSx1PTA7ZS5sZW5ndGg+dTspbyhELG49ZVt1KytdKXx8bj09Q3x8bj09Y3x8ci5wdXNoKG4pO3JldHVybiByfSx0dD1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT10PT09SixyPVQoZT9HOngodCkpLHU9W10saT0wO3IubGVuZ3RoPmk7KSFvKEQsbj1yW2krK10pfHxlJiYhbyhKLG4pfHx1LnB1c2goRFtuXSk7cmV0dXJuIHV9O1V8fChGPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIEYpdGhyb3cgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIVwiKTt2YXIgdD1wKGFyZ3VtZW50cy5sZW5ndGg+MD9hcmd1bWVudHNbMF06dm9pZCAwKSxuPWZ1bmN0aW9uKGUpe3RoaXM9PT1KJiZuLmNhbGwoRyxlKSxvKHRoaXMsQykmJm8odGhpc1tDXSx0KSYmKHRoaXNbQ11bdF09ITEpLHoodGhpcyx0LHcoMSxlKSl9O3JldHVybiB1JiZxJiZ6KEosdCx7Y29uZmlndXJhYmxlOiEwLHNldDpufSksQih0KX0sZihGW05dLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLl9rfSksai5mPSQsRS5mPVksZSgzNSkuZj1fLmY9WixlKDE0KS5mPVgsZSgyMSkuZj10dCx1JiYhZSgyMCkmJmYoSixcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsWCwhMCkseS5mPWZ1bmN0aW9uKHQpe3JldHVybiBCKHYodCkpfSksaShpLkcraS5XK2kuRiohVSx7U3ltYm9sOkZ9KTtmb3IodmFyIG50PVwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXNcIi5zcGxpdChcIixcIiksZXQ9MDtudC5sZW5ndGg+ZXQ7KXYobnRbZXQrK10pO2Zvcih2YXIgbnQ9UCh2LnN0b3JlKSxldD0wO250Lmxlbmd0aD5ldDspZChudFtldCsrXSk7aShpLlMraS5GKiFVLFwiU3ltYm9sXCIse1wiZm9yXCI6ZnVuY3Rpb24odCl7cmV0dXJuIG8oVyx0Kz1cIlwiKT9XW3RdOldbdF09Rih0KX0sa2V5Rm9yOmZ1bmN0aW9uKHQpe2lmKFYodCkpcmV0dXJuIGgoVyx0KTt0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBzeW1ib2whXCIpfSx1c2VTZXR0ZXI6ZnVuY3Rpb24oKXtxPSEwfSx1c2VTaW1wbGU6ZnVuY3Rpb24oKXtxPSExfX0pLGkoaS5TK2kuRiohVSxcIk9iamVjdFwiLHtjcmVhdGU6USxkZWZpbmVQcm9wZXJ0eTpZLGRlZmluZVByb3BlcnRpZXM6SCxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6JCxnZXRPd25Qcm9wZXJ0eU5hbWVzOlosZ2V0T3duUHJvcGVydHlTeW1ib2xzOnR0fSksQSYmaShpLlMraS5GKighVXx8YShmdW5jdGlvbigpe3ZhciB0PUYoKTtyZXR1cm5cIltudWxsXVwiIT1JKFt0XSl8fFwie31cIiE9SSh7YTp0fSl8fFwie31cIiE9SShPYmplY3QodCkpfSkpLFwiSlNPTlwiLHtzdHJpbmdpZnk6ZnVuY3Rpb24odCl7aWYodm9pZCAwIT09dCYmIVYodCkpe2Zvcih2YXIgbixlLHI9W3RdLG89MTthcmd1bWVudHMubGVuZ3RoPm87KXIucHVzaChhcmd1bWVudHNbbysrXSk7cmV0dXJuIG49clsxXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYoZT1uKSwhZSYmYihuKXx8KG49ZnVuY3Rpb24odCxuKXtpZihlJiYobj1lLmNhbGwodGhpcyx0LG4pKSwhVihuKSlyZXR1cm4gbn0pLHJbMV09bixJLmFwcGx5KEEscil9fX0pLEZbTl1bTF18fGUoNikoRltOXSxMLEZbTl0udmFsdWVPZiksbChGLFwiU3ltYm9sXCIpLGwoTWF0aCxcIk1hdGhcIiwhMCksbChyLkpTT04sXCJKU09OXCIsITApfSxmdW5jdGlvbih0LG4sZSl7ZSgyNykoXCJhc3luY0l0ZXJhdG9yXCIpfSxmdW5jdGlvbih0LG4sZSl7ZSgyNykoXCJvYnNlcnZhYmxlXCIpfSxmdW5jdGlvbih0LG4sZSl7ZSg2OSk7Zm9yKHZhciByPWUoMSksbz1lKDYpLHU9ZSgxOSksaT1lKDcpKFwidG9TdHJpbmdUYWdcIiksZj1bXCJOb2RlTGlzdFwiLFwiRE9NVG9rZW5MaXN0XCIsXCJNZWRpYUxpc3RcIixcIlN0eWxlU2hlZXRMaXN0XCIsXCJDU1NSdWxlTGlzdFwiXSxjPTA7Yzw1O2MrKyl7dmFyIGE9ZltjXSxzPXJbYV0sbD1zJiZzLnByb3RvdHlwZTtsJiYhbFtpXSYmbyhsLGksYSksdVthXT11LkFycmF5fX1dKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbnZhciBfcHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcChcIm5leHRcIik7XG4gICAgfSk7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5czsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07IiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG1ldGEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGFuSW5zdGFuY2UgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBlYWNoICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgaWYoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLGZ1bmN0aW9uKEtFWSl7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59OyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpOyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPVxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXM7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZSgob3V0ZXJGbiB8fCBHZW5lcmF0b3IpLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID0gR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgdmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50YCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC4gU29tZSBtYXkgY29uc2lkZXIgdGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgdG9vXG4gIC8vIGN1dGVzeSwgYnV0IHRoZXkgYXJlIGN1cm11ZGdlb25zLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBBd2FpdEFyZ3VtZW50KGFyZyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gQXdhaXRBcmd1bWVudChhcmcpIHtcbiAgICB0aGlzLmFyZyA9IGFyZztcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuYXJnKS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHxcbiAgICAgICAgICAgICAgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcbiIsIi8qKlxuICogRm9ybSBCdWlsZGVyIGV2ZW50c1xuICogQHJldHVybiB7T2JqZWN0fSB2YXJpb3VzIGV2ZW50cyB0byBiZSB0cmlnZ2VyXG4gKi9cbi8vIGZ1bmN0aW9uIGZiRXZlbnRzKCl7XG4gIGNvbnN0IGV2ZW50cyA9IHt9O1xuXG4gIGV2ZW50cy5sb2FkZWQgPSBuZXcgRXZlbnQoJ2xvYWRlZCcpO1xuICBldmVudHMudmlld0RhdGEgPSBuZXcgRXZlbnQoJ3ZpZXdEYXRhJyk7XG4gIGV2ZW50cy51c2VyRGVjbGluZWQgPSBuZXcgRXZlbnQoJ3VzZXJEZWNsaW5lZCcpO1xuICBldmVudHMubW9kYWxDbG9zZWQgPSBuZXcgRXZlbnQoJ21vZGFsQ2xvc2VkJyk7XG4gIGV2ZW50cy5tb2RhbE9wZW5lZCA9IG5ldyBFdmVudCgnbW9kYWxPcGVuZWQnKTtcbiAgZXZlbnRzLmZvcm1TYXZlZCA9IG5ldyBFdmVudCgnZm9ybVNhdmVkJyk7XG4gIGV2ZW50cy5maWVsZEFkZGVkID0gbmV3IEV2ZW50KCdmaWVsZEFkZGVkJyk7XG4gIGV2ZW50cy5maWVsZFJlbW92ZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkUmVtb3ZlZCcpO1xuICBldmVudHMuZmllbGRSZW5kZXJlZCA9IG5ldyBFdmVudCgnZmllbGRSZW5kZXJlZCcpO1xuXG4vLyAgIHJldHVybiBldmVudHM7XG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZXZlbnRzO1xuIiwicmVxdWlyZSgnLi9rYy10b2dnbGUuanMnKTtcbnJlcXVpcmUoJy4vcG9seWZpbGxzLmpzJyk7XG4vLyBjb25zdCBleHRlbmQgPSByZXF1aXJlKCdkZWVwLWV4dGVuZCcpO1xuXG4oZnVuY3Rpb24oJCkge1xuICBjb25zdCBGb3JtQnVpbGRlciA9IGFzeW5jIGZ1bmN0aW9uKG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBmb3JtQnVpbGRlciA9IHRoaXM7XG4gICAgY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG4gICAgZm9ybUJ1aWxkZXIuZXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMuanMnKTtcbiAgICBmb3JtQnVpbGRlci51dGlscyA9IHV0aWxzO1xuICAgIGZvcm1CdWlsZGVyLm1pMThuID0gcmVxdWlyZSgnbWkxOG4nKS5kZWZhdWx0O1xuXG4gICAgbGV0IGRlZmF1bHRzID0ge1xuICAgICAgY29udHJvbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgY29udHJvbE9yZGVyOiBbXG4gICAgICAgICdhdXRvY29tcGxldGUnLFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnaGlkZGVuJyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICdudW1iZXInLFxuICAgICAgICAncmFkaW8tZ3JvdXAnLFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAndGV4dGFyZWEnXG4gICAgICBdLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIC8vIEFycmF5IG9mIGZpZWxkcyB0byBkaXNhYmxlXG4gICAgICBkaXNhYmxlRmllbGRzOiBbXSxcbiAgICAgIGVkaXRPbkFkZDogZmFsc2UsXG4gICAgICAvLyBVbmVkaXRhYmxlIGZpZWxkcyBvciBvdGhlciBjb250ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGFwcGVhclxuICAgICAgLy8gYmVmb3JlIGFuZCBhZnRlciByZWd1bGFyIGZpZWxkczpcbiAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICBwcmVwZW5kOiBmYWxzZSxcbiAgICAgIC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCBmaWVsZHMgdmFsdWVzXG4gICAgICAvLyBleDpcbiAgICAgIC8vIGRlZmF1bHRGaWVsZHM6IFt7XG4gICAgICAvLyAgIGxhYmVsOiAnRmlyc3QgTmFtZScsXG4gICAgICAvLyAgIG5hbWU6ICdmaXJzdC1uYW1lJyxcbiAgICAgIC8vICAgcmVxdWlyZWQ6ICd0cnVlJyxcbiAgICAgIC8vICAgZGVzY3JpcHRpb246ICdZb3VyIGZpcnN0IG5hbWUnLFxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcbiAgICAgIC8vIH0sIHtcbiAgICAgIC8vICAgbGFiZWw6ICdQaG9uZScsXG4gICAgICAvLyAgIG5hbWU6ICdwaG9uZScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnSG93IGNhbiB3ZSByZWFjaCB5b3U/JyxcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXG4gICAgICAvLyB9XSxcbiAgICAgIGRlZmF1bHRGaWVsZHM6IFtdLFxuICAgICAgaW5wdXRTZXRzOiBbXSxcbiAgICAgIGZpZWxkUmVtb3ZlV2FybjogZmFsc2UsXG4gICAgICByb2xlczoge1xuICAgICAgICAxOiAnQWRtaW5pc3RyYXRvcidcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICBhbGxGaWVsZHNSZW1vdmVkOiAnQWxsIGZpZWxkcyB3ZXJlIHJlbW92ZWQuJyxcbiAgICAgICAgYWxsb3dNdWx0aXBsZUZpbGVzOiAnQWxsb3cgdXNlcnMgdG8gdXBsb2FkIG11bHRpcGxlIGZpbGVzJyxcbiAgICAgICAgYXV0b2NvbXBsZXRlOiAnQXV0b2NvbXBsZXRlJyxcbiAgICAgICAgYnV0dG9uOiAnQnV0dG9uJyxcbiAgICAgICAgY2Fubm90QmVFbXB0eTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5JyxcbiAgICAgICAgY2hlY2tib3hHcm91cDogJ0NoZWNrYm94IEdyb3VwJyxcbiAgICAgICAgY2hlY2tib3g6ICdDaGVja2JveCcsXG4gICAgICAgIGNoZWNrYm94ZXM6ICdDaGVja2JveGVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2xhc3MnLFxuICAgICAgICBjbGVhckFsbE1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xlYXIgYWxsIGZpZWxkcz8nLFxuICAgICAgICBjbGVhckFsbDogJ0NsZWFyJyxcbiAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgIGNvbnRlbnQ6ICdDb250ZW50JyxcbiAgICAgICAgY29weTogJ0NvcHkgVG8gQ2xpcGJvYXJkJyxcbiAgICAgICAgY29weUJ1dHRvbjogJyYjNDM7JyxcbiAgICAgICAgY29weUJ1dHRvblRvb2x0aXA6ICdDb3B5JyxcbiAgICAgICAgZGF0ZUZpZWxkOiAnRGF0ZSBGaWVsZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscCBUZXh0JyxcbiAgICAgICAgZGVzY3JpcHRpb25GaWVsZDogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgZGV2TW9kZTogJ0RldmVsb3BlciBNb2RlJyxcbiAgICAgICAgZWRpdE5hbWVzOiAnRWRpdCBOYW1lcycsXG4gICAgICAgIGVkaXRvclRpdGxlOiAnRm9ybSBFbGVtZW50cycsXG4gICAgICAgIGVkaXRYTUw6ICdFZGl0IFhNTCcsXG4gICAgICAgIGVuYWJsZU90aGVyOiAnRW5hYmxlICZxdW90O090aGVyJnF1b3Q7JyxcbiAgICAgICAgZW5hYmxlT3RoZXJNc2c6ICdMZXQgdXNlcnMgdG8gZW50ZXIgYW4gdW5saXN0ZWQgb3B0aW9uJyxcbiAgICAgICAgZmllbGREZWxldGVXYXJuaW5nOiBmYWxzZSxcbiAgICAgICAgZmllbGRWYXJzOiAnRmllbGQgVmFyaWFibGVzJyxcbiAgICAgICAgZmllbGROb25FZGl0YWJsZTogJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVkaXRlZC4nLFxuICAgICAgICBmaWVsZFJlbW92ZVdhcm5pbmc6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgZmllbGQ/JyxcbiAgICAgICAgZmlsZVVwbG9hZDogJ0ZpbGUgVXBsb2FkJyxcbiAgICAgICAgZm9ybVVwZGF0ZWQ6ICdGb3JtIFVwZGF0ZWQnLFxuICAgICAgICBnZXRTdGFydGVkOiAnRHJhZyBhIGZpZWxkIGZyb20gdGhlIHJpZ2h0IHRvIHRoaXMgYXJlYScsXG4gICAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICAgIGhpZGU6ICdFZGl0JyxcbiAgICAgICAgaGlkZGVuOiAnSGlkZGVuIElucHV0JyxcbiAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgIGxhYmVsRW1wdHk6ICdGaWVsZCBMYWJlbCBjYW5ub3QgYmUgZW1wdHknLFxuICAgICAgICBsaW1pdFJvbGU6ICdMaW1pdCBhY2Nlc3MgdG8gb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyByb2xlczonLFxuICAgICAgICBtYW5kYXRvcnk6ICdNYW5kYXRvcnknLFxuICAgICAgICBtYXhsZW5ndGg6ICdNYXggTGVuZ3RoJyxcbiAgICAgICAgbWluT3B0aW9uTWVzc2FnZTogJ1RoaXMgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mIDIgb3B0aW9ucycsXG4gICAgICAgIG11bHRpcGxlRmlsZXM6ICdNdWx0aXBsZSBGaWxlcycsXG4gICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgbm86ICdObycsXG4gICAgICAgIG5vRmllbGRzVG9DbGVhcjogJ1RoZXJlIGFyZSBubyBmaWVsZHMgdG8gY2xlYXInLFxuICAgICAgICBudW1iZXI6ICdOdW1iZXInLFxuICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICBvbjogJ09uJyxcbiAgICAgICAgb3B0aW9uOiAnT3B0aW9uJyxcbiAgICAgICAgb3B0aW9uYWw6ICdvcHRpb25hbCcsXG4gICAgICAgIG9wdGlvbkxhYmVsUGxhY2Vob2xkZXI6ICdMYWJlbCcsXG4gICAgICAgIG9wdGlvblZhbHVlUGxhY2Vob2xkZXI6ICdWYWx1ZScsXG4gICAgICAgIG9wdGlvbkVtcHR5OiAnT3B0aW9uIHZhbHVlIHJlcXVpcmVkJyxcbiAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgIHBhcmFncmFwaDogJ1BhcmFncmFwaCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnUGxhY2Vob2xkZXInLFxuICAgICAgICBwbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICB0ZXh0YXJlYTogJycsXG4gICAgICAgICAgZW1haWw6ICdFbnRlciB5b3UgZW1haWwnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdzcGFjZSBzZXBhcmF0ZWQgY2xhc3NlcycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICdFbnRlciB5b3VyIHBhc3N3b3JkJ1xuICAgICAgICB9LFxuICAgICAgICBwcmV2aWV3OiAnUHJldmlldycsXG4gICAgICAgIHJhZGlvR3JvdXA6ICdSYWRpbyBHcm91cCcsXG4gICAgICAgIHJhZGlvOiAnUmFkaW8nLFxuICAgICAgICByZW1vdmVNZXNzYWdlOiAnUmVtb3ZlIEVsZW1lbnQnLFxuICAgICAgICByZW1vdmVPcHRpb246ICdSZW1vdmUgT3B0aW9uJyxcbiAgICAgICAgcmVtb3ZlOiAnJiMyMTU7JyxcbiAgICAgICAgcmVxdWlyZWQ6ICdSZXF1aXJlZCcsXG4gICAgICAgIHJpY2hUZXh0OiAnUmljaCBUZXh0IEVkaXRvcicsXG4gICAgICAgIHJvbGVzOiAnQWNjZXNzJyxcbiAgICAgICAgcm93czogJ1Jvd3MnLFxuICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgIHNlbGVjdE9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICAgICAgc2VsZWN0OiAnU2VsZWN0JyxcbiAgICAgICAgc2VsZWN0Q29sb3I6ICdTZWxlY3QgQ29sb3InLFxuICAgICAgICBzZWxlY3Rpb25zTWVzc2FnZTogJ0FsbG93IE11bHRpcGxlIFNlbGVjdGlvbnMnLFxuICAgICAgICBzaXplOiAnU2l6ZScsXG4gICAgICAgIHNpemVzOiB7XG4gICAgICAgICAgeHM6ICdFeHRyYSBTbWFsbCcsXG4gICAgICAgICAgc206ICdTbWFsbCcsXG4gICAgICAgICAgbTogJ0RlZmF1bHQnLFxuICAgICAgICAgIGxnOiAnTGFyZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiAnU3R5bGUnLFxuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICBidG46IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogJ0RlZmF1bHQnLFxuICAgICAgICAgICAgZGFuZ2VyOiAnRGFuZ2VyJyxcbiAgICAgICAgICAgIGluZm86ICdJbmZvJyxcbiAgICAgICAgICAgIHByaW1hcnk6ICdQcmltYXJ5JyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3VidHlwZTogJ1R5cGUnLFxuICAgICAgICB0ZXh0OiAnVGV4dCBGaWVsZCcsXG4gICAgICAgIHRleHRBcmVhOiAnVGV4dCBBcmVhJyxcbiAgICAgICAgdG9nZ2xlOiAnVG9nZ2xlJyxcbiAgICAgICAgd2FybmluZzogJ1dhcm5pbmchJyxcbiAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgIHZpZXdKU09OOiAneyAgfScsXG4gICAgICAgIHZpZXdYTUw6ICcmbHQ7LyZndDsnLFxuICAgICAgICB5ZXM6ICdZZXMnXG4gICAgICB9LFxuICAgICAgbm90aWZ5OiB7XG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm5pbmc6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25TYXZlOiB1dGlscy5ub29wLFxuICAgICAgb25DbGVhckFsbDogdXRpbHMubm9vcCxcbiAgICAgIGFjdGlvbkJ1dHRvbnM6IFt7XG4gICAgICAgIGxhYmVsOiAnQ2xlYXInLFxuICAgICAgICBjbGFzc05hbWU6ICdjbGVhci1hbGwgYnRuIGJ0bi1kYW5nZXInLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgICAgICAgICAgbGV0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHtcbiAgICAgICAgICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIF9oZWxwZXJzLmNvbmZpcm0ob3B0cy5tZXNzYWdlcy5jbGVhckFsbE1lc3NhZ2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcygpO1xuICAgICAgICAgICAgICAgIG9wdHMubm90aWZ5LnN1Y2Nlc3Mob3B0cy5tZXNzYWdlcy5hbGxGaWVsZHNSZW1vdmVkKTtcbiAgICAgICAgICAgICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICAgICAgICAgICAgb3B0cy5vbkNsZWFyQWxsKCk7XG4gICAgICAgICAgICAgIH0sIGNvb3Jkcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfaGVscGVycy5kaWFsb2cob3B0cy5tZXNzYWdlcy5ub0ZpZWxkc1RvQ2xlYXIsIGNvb3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnU2F2ZScsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdidG4gYnRuLXByaW1hcnkgc2F2ZS10ZW1wbGF0ZScsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiBvcHRzLm9uU2F2ZShfaGVscGVycy5zYXZlKCkpXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgc29ydGFibGVDb250cm9sczogZmFsc2UsXG4gICAgICBzdGlja3lDb250cm9sczoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgIH1cblxuICAgICAgfSxcbiAgICAgIHNob3dBY3Rpb25CdXR0b25zOiB0cnVlLFxuICAgICAgdHlwZVVzZXJBdHRyczoge30sXG4gICAgICB0eXBlVXNlckV2ZW50czoge30sXG4gICAgICBwcmVmaXg6ICdmb3JtLWJ1aWxkZXItJ1xuICAgIH07XG5cblxuICAgIGRlZmF1bHRzLmkxOG4gPSB7XG4gICAgICBsYW5nczogW1xuICAgICAgICAnZW4tVVMnXG4gICAgICBdLFxuICAgICAgcHJlbG9hZGVkOiB7XG4gICAgICAgICdlbi1VUyc6IHtcbiAgICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICAgIGFsbEZpZWxkc1JlbW92ZWQ6ICdBbGwgZmllbGRzIHdlcmUgcmVtb3ZlZC4nLFxuICAgICAgICAgIGFsbG93TXVsdGlwbGVGaWxlczogJ0FsbG93IHVzZXJzIHRvIHVwbG9hZCBtdWx0aXBsZSBmaWxlcycsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiAnQXV0b2NvbXBsZXRlJyxcbiAgICAgICAgICBidXR0b246ICdCdXR0b24nLFxuICAgICAgICAgIGNhbm5vdEJlRW1wdHk6ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgY2hlY2tib3hHcm91cDogJ0NoZWNrYm94IEdyb3VwJyxcbiAgICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcbiAgICAgICAgICBjaGVja2JveGVzOiAnQ2hlY2tib3hlcycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2xhc3MnLFxuICAgICAgICAgIGNsZWFyQWxsTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbGVhciBhbGwgZmllbGRzPycsXG4gICAgICAgICAgY2xlYXJBbGw6ICdDbGVhcicsXG4gICAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgICAgY29udGVudDogJ0NvbnRlbnQnLFxuICAgICAgICAgIGNvcHk6ICdDb3B5IFRvIENsaXBib2FyZCcsXG4gICAgICAgICAgY29weUJ1dHRvbjogJyYjNDM7JyxcbiAgICAgICAgICBjb3B5QnV0dG9uVG9vbHRpcDogJ0NvcHknLFxuICAgICAgICAgIGRhdGVGaWVsZDogJ0RhdGUgRmllbGQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscCBUZXh0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbkZpZWxkOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgIGRldk1vZGU6ICdEZXZlbG9wZXIgTW9kZScsXG4gICAgICAgICAgZWRpdE5hbWVzOiAnRWRpdCBOYW1lcycsXG4gICAgICAgICAgZWRpdG9yVGl0bGU6ICdGb3JtIEVsZW1lbnRzJyxcbiAgICAgICAgICBlZGl0WE1MOiAnRWRpdCBYTUwnLFxuICAgICAgICAgIGVuYWJsZU90aGVyOiAnRW5hYmxlICZxdW90O090aGVyJnF1b3Q7JyxcbiAgICAgICAgICBlbmFibGVPdGhlck1zZzogJ0xldCB1c2VycyB0byBlbnRlciBhbiB1bmxpc3RlZCBvcHRpb24nLFxuICAgICAgICAgIGZpZWxkRGVsZXRlV2FybmluZzogZmFsc2UsXG4gICAgICAgICAgZmllbGRWYXJzOiAnRmllbGQgVmFyaWFibGVzJyxcbiAgICAgICAgICBmaWVsZE5vbkVkaXRhYmxlOiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZWRpdGVkLicsXG4gICAgICAgICAgZmllbGRSZW1vdmVXYXJuaW5nOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIGZpZWxkPycsXG4gICAgICAgICAgZmlsZVVwbG9hZDogJ0ZpbGUgVXBsb2FkJyxcbiAgICAgICAgICBmb3JtVXBkYXRlZDogJ0Zvcm0gVXBkYXRlZCcsXG4gICAgICAgICAgZ2V0U3RhcnRlZDogJ0RyYWcgYSBmaWVsZCBmcm9tIHRoZSByaWdodCB0byB0aGlzIGFyZWEnLFxuICAgICAgICAgIGhlYWRlcjogJ0hlYWRlcicsXG4gICAgICAgICAgaGlkZTogJ0VkaXQnLFxuICAgICAgICAgIGhpZGRlbjogJ0hpZGRlbiBJbnB1dCcsXG4gICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgbGFiZWxFbXB0eTogJ0ZpZWxkIExhYmVsIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgICAgbGltaXRSb2xlOiAnTGltaXQgYWNjZXNzIHRvIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgcm9sZXM6JyxcbiAgICAgICAgICBtYW5kYXRvcnk6ICdNYW5kYXRvcnknLFxuICAgICAgICAgIG1heGxlbmd0aDogJ01heCBMZW5ndGgnLFxuICAgICAgICAgIG1pbk9wdGlvbk1lc3NhZ2U6ICdUaGlzIGZpZWxkIHJlcXVpcmVzIGEgbWluaW11bSBvZiAyIG9wdGlvbnMnLFxuICAgICAgICAgIG11bHRpcGxlRmlsZXM6ICdNdWx0aXBsZSBGaWxlcycsXG4gICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgIG5vOiAnTm8nLFxuICAgICAgICAgIG5vRmllbGRzVG9DbGVhcjogJ1RoZXJlIGFyZSBubyBmaWVsZHMgdG8gY2xlYXInLFxuICAgICAgICAgIG51bWJlcjogJ051bWJlcicsXG4gICAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgICBvbjogJ09uJyxcbiAgICAgICAgICBvcHRpb246ICdPcHRpb24nLFxuICAgICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxuICAgICAgICAgIG9wdGlvbkxhYmVsUGxhY2Vob2xkZXI6ICdMYWJlbCcsXG4gICAgICAgICAgb3B0aW9uVmFsdWVQbGFjZWhvbGRlcjogJ1ZhbHVlJyxcbiAgICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXG4gICAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgICAgcGFyYWdyYXBoOiAnUGFyYWdyYXBoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgICAgIHZhbHVlOiAnVmFsdWUnLFxuICAgICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIHRleHRhcmVhOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnRW50ZXIgeW91IGVtYWlsJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NwYWNlIHNlcGFyYXRlZCBjbGFzc2VzJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnRW50ZXIgeW91ciBwYXNzd29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByZXZpZXc6ICdQcmV2aWV3JyxcbiAgICAgICAgICByYWRpb0dyb3VwOiAnUmFkaW8gR3JvdXAnLFxuICAgICAgICAgIHJhZGlvOiAnUmFkaW8nLFxuICAgICAgICAgIHJlbW92ZU1lc3NhZ2U6ICdSZW1vdmUgRWxlbWVudCcsXG4gICAgICAgICAgcmVtb3ZlT3B0aW9uOiAnUmVtb3ZlIE9wdGlvbicsXG4gICAgICAgICAgcmVtb3ZlOiAnJiMyMTU7JyxcbiAgICAgICAgICByZXF1aXJlZDogJ1JlcXVpcmVkJyxcbiAgICAgICAgICByaWNoVGV4dDogJ1JpY2ggVGV4dCBFZGl0b3InLFxuICAgICAgICAgIHJvbGVzOiAnQWNjZXNzJyxcbiAgICAgICAgICByb3dzOiAnUm93cycsXG4gICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgIHNlbGVjdE9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICAgICAgICBzZWxlY3Q6ICdTZWxlY3QnLFxuICAgICAgICAgIHNlbGVjdENvbG9yOiAnU2VsZWN0IENvbG9yJyxcbiAgICAgICAgICBzZWxlY3Rpb25zTWVzc2FnZTogJ0FsbG93IE11bHRpcGxlIFNlbGVjdGlvbnMnLFxuICAgICAgICAgIHNpemU6ICdTaXplJyxcbiAgICAgICAgICBzaXplczoge1xuICAgICAgICAgICAgeHM6ICdFeHRyYSBTbWFsbCcsXG4gICAgICAgICAgICBzbTogJ1NtYWxsJyxcbiAgICAgICAgICAgIG06ICdEZWZhdWx0JyxcbiAgICAgICAgICAgIGxnOiAnTGFyZ2UnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZTogJ1N0eWxlJyxcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIGJ0bjoge1xuICAgICAgICAgICAgICAnZGVmYXVsdCc6ICdEZWZhdWx0JyxcbiAgICAgICAgICAgICAgZGFuZ2VyOiAnRGFuZ2VyJyxcbiAgICAgICAgICAgICAgaW5mbzogJ0luZm8nLFxuICAgICAgICAgICAgICBwcmltYXJ5OiAnUHJpbWFyeScsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgd2FybmluZzogJ1dhcm5pbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWJ0eXBlOiAnVHlwZScsXG4gICAgICAgICAgdGV4dDogJ1RleHQgRmllbGQnLFxuICAgICAgICAgIHRleHRBcmVhOiAnVGV4dCBBcmVhJyxcbiAgICAgICAgICB0b2dnbGU6ICdUb2dnbGUnLFxuICAgICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nIScsXG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgICAgdmlld0pTT046ICd7ICB9JyxcbiAgICAgICAgICB2aWV3WE1MOiAnJmx0Oy8mZ3Q7JyxcbiAgICAgICAgICB5ZXM6ICdZZXMnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGZybWJJRCA9ICdmcm1iLScgKyAkKCd1bFtpZF49ZnJtYi1dJykubGVuZ3RoKys7XG4gICAgZm9ybUJ1aWxkZXIuZm9ybUlEID0gZnJtYklEO1xuICAgIGxldCB7aTE4biwgLi4ub3B0c30gPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucywgdHJ1ZSk7XG5cbiAgICBhd2FpdCBmb3JtQnVpbGRlci5taTE4bi5pbml0KGkxOG4pO1xuICAgIGxldCBfaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycy5qcycpKG9wdHMsIGZvcm1CdWlsZGVyKTtcblxuICAgIGNvbnN0IHN1YnR5cGVzID0gX2hlbHBlcnMucHJvY2Vzc1N1YnR5cGVzKG9wdHMuc3VidHlwZXMpO1xuXG4gICAgbGV0ICRzb3J0YWJsZUZpZWxkcyA9ICQoJzx1bC8+JykuYXR0cignaWQnLCBmcm1iSUQpLmFkZENsYXNzKCdmcm1iJyk7XG5cbiAgICBmb3JtQnVpbGRlci5sYXlvdXQgPSBfaGVscGVycy5lZGl0b3JMYXlvdXQob3B0cy5jb250cm9sUG9zaXRpb24pO1xuICAgIGZvcm1CdWlsZGVyLnN0YWdlID0gJHNvcnRhYmxlRmllbGRzWzBdO1xuXG4gICAgbGV0IGxhc3RJRCA9IGZybWJJRCArICctZmxkLTEnO1xuICAgIGxldCBib3hJRCA9IGZybWJJRCArICctY29udHJvbC1ib3gnO1xuXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIGZpZWxkIG9iamVjdHMgdG8gY3ljbGUgdGhyb3VnaFxuICAgIGxldCBmcm1iRmllbGRzID0gW3tcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmF1dG9jb21wbGV0ZSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdhdXRvY29tcGxldGUnLFxuICAgICAgICBjbGFzc05hbWU6ICdhdXRvY29tcGxldGUnLFxuICAgICAgICBuYW1lOiAnYXV0b2NvbXBsZXRlJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmJ1dHRvbixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdidXR0b24taW5wdXQnLFxuICAgICAgICBuYW1lOiAnYnV0dG9uJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmNoZWNrYm94LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICBuYW1lOiAnY2hlY2tib3gnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuY2hlY2tib3hHcm91cCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94LWdyb3VwJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmRhdGVGaWVsZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2FsZW5kYXInLFxuICAgICAgICBuYW1lOiAnZGF0ZS1pbnB1dCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5maWxlVXBsb2FkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICBjbGFzc05hbWU6ICdmaWxlLWlucHV0JyxcbiAgICAgICAgbmFtZTogJ2ZpbGUtaW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuaGVhZGVyLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2hlYWRlcicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2hlYWRlcidcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5oaWRkZW4sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnaGlkZGVuLWlucHV0JyxcbiAgICAgICAgbmFtZTogJ2hpZGRlbi1pbnB1dCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5udW1iZXIsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgbmFtZTogJ251bWJlcidcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5wYXJhZ3JhcGgsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYWdyYXBoJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLnJhZGlvR3JvdXAsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAncmFkaW8tZ3JvdXAnLFxuICAgICAgICBjbGFzc05hbWU6ICdyYWRpby1ncm91cCcsXG4gICAgICAgIG5hbWU6ICdyYWRpby1ncm91cCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5zZWxlY3QsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgbmFtZTogJ3NlbGVjdCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy50ZXh0LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjbGFzc05hbWU6ICd0ZXh0LWlucHV0JyxcbiAgICAgICAgbmFtZTogJ3RleHQtaW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMudGV4dEFyZWEsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAndGV4dGFyZWEnLFxuICAgICAgICBjbGFzc05hbWU6ICd0ZXh0LWFyZWEnLFxuICAgICAgICBuYW1lOiAndGV4dGFyZWEnXG4gICAgICB9XG4gICAgfV07XG5cbiAgICBmcm1iRmllbGRzID0gX2hlbHBlcnMub3JkZXJGaWVsZHMoZnJtYkZpZWxkcyk7XG5cbiAgICBpZiAob3B0cy5kaXNhYmxlRmllbGRzKSB7XG4gICAgICAvLyByZW1vdmUgZGlzYWJsZWRGaWVsZHNcbiAgICAgIGZybWJGaWVsZHMgPSBmcm1iRmllbGRzLmZpbHRlcihmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkoZmllbGQuYXR0cnMudHlwZSwgb3B0cy5kaXNhYmxlRmllbGRzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBkcmFnZ2FibGUgZmllbGRzIGZvciBmb3JtQnVpbGRlclxuICAgIGxldCBjYlVsID0gdXRpbHMubWFya3VwKCd1bCcsIG51bGwsIHtpZDogYm94SUQsIGNsYXNzTmFtZTogJ2ZybWItY29udHJvbCd9KTtcbiAgICBmb3JtQnVpbGRlci5jb250cm9scyA9IGNiVWw7XG5cbiAgICBpZiAob3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICBjYlVsLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZW5hYmxlZCcpO1xuICAgIH1cblxuICAgIGxldCAkY2JVTCA9ICQoY2JVbCk7XG5cbiAgICAvLyBMb29wIHRocm91Z2hcbiAgICB1dGlscy5mb3JFYWNoKGZybWJGaWVsZHMsIChpKSA9PiB7XG4gICAgICBsZXQgJGZpZWxkID0gJCgnPGxpLz4nLCB7XG4gICAgICAgICdjbGFzcyc6ICdpY29uLScgKyBmcm1iRmllbGRzW2ldLmF0dHJzLmNsYXNzTmFtZSxcbiAgICAgICAgJ3R5cGUnOiBmcm1iRmllbGRzW2ldLnR5cGUsXG4gICAgICAgICduYW1lJzogZnJtYkZpZWxkc1tpXS5jbGFzc05hbWUsXG4gICAgICAgICdsYWJlbCc6IGZybWJGaWVsZHNbaV0ubGFiZWxcbiAgICAgIH0pO1xuXG4gICAgICAkZmllbGQuZGF0YSgnbmV3RmllbGREYXRhJywgZnJtYkZpZWxkc1tpXSk7XG5cbiAgICAgIGxldCB0eXBlTGFiZWwgPSB1dGlscy5tYXJrdXAoJ3NwYW4nLCBmcm1iRmllbGRzW2ldLmxhYmVsKTtcbiAgICAgICRmaWVsZC5odG1sKHR5cGVMYWJlbCkuYXBwZW5kVG8oJGNiVUwpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9wdHMuaW5wdXRTZXRzLmxlbmd0aCkge1xuICAgICAgJCgnPGxpLz4nLCB7J2NsYXNzJzogJ2ZiLXNlcGFyYXRvcid9KS5odG1sKCc8aHI+JykuYXBwZW5kVG8oJGNiVUwpO1xuICAgICAgb3B0cy5pbnB1dFNldHMuZm9yRWFjaCgoc2V0KSA9PiB7XG4gICAgICAgIHNldC5uYW1lID0gc2V0Lm5hbWUgfHwgX2hlbHBlcnMubWFrZUNsYXNzTmFtZShzZXQubGFiZWwpO1xuICAgICAgICBsZXQgJHNldCA9ICQoJzxsaS8+JywgeydjbGFzcyc6ICdpbnB1dC1zZXQtY29udHJvbCcsIHR5cGU6IHNldC5uYW1lfSk7XG4gICAgICAgICRzZXQuaHRtbChzZXQubGFiZWwpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNvcnRhYmxlIGZpZWxkc1xuICAgICRzb3J0YWJsZUZpZWxkcy5zb3J0YWJsZSh7XG4gICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgIHJldmVydDogMTUwLFxuICAgICAgYmVmb3JlU3RvcDogX2hlbHBlcnMuYmVmb3JlU3RvcCxcbiAgICAgIHN0YXJ0OiBfaGVscGVycy5zdGFydE1vdmluZyxcbiAgICAgIHN0b3A6IF9oZWxwZXJzLnN0b3BNb3ZpbmcsXG4gICAgICBjYW5jZWw6ICdpbnB1dCwgc2VsZWN0LCAuZGlzYWJsZWQsIC5mb3JtLWdyb3VwLCAuYnRuJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnZnJtYi1wbGFjZWhvbGRlcidcbiAgICB9KTtcblxuICAgIC8vIENvbnRyb2xCb3ggd2l0aCBkaWZmZXJlbnQgZmllbGRzXG4gICAgJGNiVUwuc29ydGFibGUoe1xuICAgICAgaGVscGVyOiAnY2xvbmUnLFxuICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgY29ubmVjdFdpdGg6ICRzb3J0YWJsZUZpZWxkcyxcbiAgICAgIGNhbmNlbDogJy5mYi1zZXBhcmF0b3InLFxuICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgcGxhY2Vob2xkZXI6ICd1aS1zdGF0ZS1oaWdobGlnaHQnLFxuICAgICAgc3RhcnQ6IF9oZWxwZXJzLnN0YXJ0TW92aW5nLFxuICAgICAgc3RvcDogX2hlbHBlcnMuc3RvcE1vdmluZyxcbiAgICAgIHJldmVydDogMTUwLFxuICAgICAgYmVmb3JlU3RvcDogX2hlbHBlcnMuYmVmb3JlU3RvcCxcbiAgICAgIGRpc3RhbmNlOiAzLFxuICAgICAgdXBkYXRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgaWYgKF9oZWxwZXJzLmRvQ2FuY2VsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS5pdGVtLnBhcmVudCgpWzBdID09PSAkc29ydGFibGVGaWVsZHNbMF0pIHtcbiAgICAgICAgICBwcm9jZXNzQ29udHJvbCh1aS5pdGVtKTtcbiAgICAgICAgICBfaGVscGVycy5kb0NhbmNlbCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2hlbHBlcnMuc2V0RmllbGRPcmRlcigkY2JVTCk7XG4gICAgICAgICAgX2hlbHBlcnMuZG9DYW5jZWwgPSAhb3B0cy5zb3J0YWJsZUNvbnRyb2xzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvY2Vzc0NvbnRyb2wgPSAoY29udHJvbCkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2xbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1zZXQtY29udHJvbCcpKSB7XG4gICAgICAgIGxldCBpbnB1dFNldCA9IG9wdHMuaW5wdXRTZXRzLmZpbHRlcigoc2V0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNldC5uYW1lID09PSBjb250cm9sWzBdLnR5cGU7XG4gICAgICAgIH0pWzBdO1xuICAgICAgICBpZiAoaW5wdXRTZXQuc2hvd0hlYWRlcikge1xuICAgICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICAgICAgICBzdWJ0eXBlOiAnaDInLFxuICAgICAgICAgICAgICBpZDogaW5wdXRTZXQubmFtZSxcbiAgICAgICAgICAgICAgbGFiZWw6IGlucHV0U2V0LmxhYmVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIHByZXBGaWVsZFZhcnMoaGVhZGVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFNldC5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICBwcmVwRmllbGRWYXJzKGZpZWxkLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmVwRmllbGRWYXJzKGNvbnRyb2wsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgJGZvcm1XcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctZm9ybS13cmFwJyxcbiAgICAgICdjbGFzcyc6ICdmb3JtLXdyYXAgZm9ybS1idWlsZGVyJyArIF9oZWxwZXJzLm1vYmlsZUNsYXNzKClcbiAgICB9KTtcblxuICAgIGZvcm1CdWlsZGVyLmVkaXRvciA9ICRmb3JtV3JhcFswXTtcblxuICAgIGxldCAkc3RhZ2VXcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctc3RhZ2Utd3JhcCcsXG4gICAgICAnY2xhc3MnOiAnc3RhZ2Utd3JhcCAnICsgZm9ybUJ1aWxkZXIubGF5b3V0LnN0YWdlXG4gICAgfSk7XG5cbiAgICBsZXQgY2JXcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctY2Itd3JhcCcsXG4gICAgICAnY2xhc3MnOiAnY2Itd3JhcCAnICsgZm9ybUJ1aWxkZXIubGF5b3V0LmNvbnRyb2xzXG4gICAgfSkuYXBwZW5kKCRjYlVMWzBdKTtcblxuICAgIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgICAvLyBCdWlsZCBvdXIgaGVhZGVycyBhbmQgYWN0aW9uIGxpbmtzXG4gICAgICBsZXQgdmlld0RhdGFUZXh0O1xuICAgICAgbGV0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgICBpZihvcHRzLmRhdGFUeXBlID09PSAneG1sJykge1xuICAgICAgICB2aWV3RGF0YVRleHQgPSBvcHRzLm1lc3NhZ2VzLnZpZXdYTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWV3RGF0YVRleHQgPSBvcHRzLm1lc3NhZ2VzLnZpZXdKU09OO1xuICAgICAgfVxuXG4gICAgICBsZXQgYnV0dG9ucyA9IG9wdHMuYWN0aW9uQnV0dG9ucy5tYXAoX2hlbHBlcnMucHJvY2Vzc0FjdGlvbkJ1dHRvbnMpO1xuXG4gICAgICAvLyBjb25zdCB2aWV3RGF0YSA9IG0oJ2J1dHRvbicsIHZpZXdEYXRhVGV4dCwge1xuICAgICAgLy8gICBpZDogZnJtYklEICsgJy12aWV3LWRhdGEnLFxuICAgICAgLy8gICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIC8vICAgY2xhc3NOYW1lOiAndmlldy1kYXRhIGJ0biBidG4tZGVmYXVsdCdcbiAgICAgIC8vIH0pO1xuICAgICAgY29uc3QgY2xlYXJBbGwgPSBtKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLmNsZWFyQWxsLCB7XG4gICAgICAgIGlkOiBmcm1iSUQgKyAnLWNsZWFyLWFsbCcsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdjbGVhci1hbGwgYnRuIGJ0bi1kYW5nZXInXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHNhdmVBbGwgPSBtKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLnNhdmUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgYnRuIGJ0bi1wcmltYXJ5ICR7b3B0cy5wcmVmaXh9c2F2ZWAsXG4gICAgICAgIGlkOiBmcm1iSUQgKyAnLXNhdmUnLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJ1xuICAgICAgfSk7XG4gICAgICBjb25zdCBmb3JtQWN0aW9ucyA9IG0oJ2RpdicsIGJ1dHRvbnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZm9ybS1hY3Rpb25zIGJ0bi1ncm91cCdcbiAgICAgIH0pO1xuXG4gICAgICBjYldyYXAuYXBwZW5kKGZvcm1BY3Rpb25zKTtcbiAgICB9XG5cbiAgICAkc3RhZ2VXcmFwLmFwcGVuZCgkc29ydGFibGVGaWVsZHMsIGNiV3JhcCk7XG4gICAgJHN0YWdlV3JhcC5iZWZvcmUoJGZvcm1XcmFwKTtcbiAgICAkZm9ybVdyYXAuYXBwZW5kKCRzdGFnZVdyYXAsIGNiV3JhcCk7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAkKGVsZW1lbnQpLmFwcGVuZCgkZm9ybVdyYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGVsZW1lbnQpLnJlcGxhY2VXaXRoKCRmb3JtV3JhcCk7XG4gICAgfVxuXG4gICAgbGV0IHNhdmVBbmRVcGRhdGUgPSBfaGVscGVycy5kZWJvdW5jZShldnQgPT4ge1xuICAgICAgaWYgKGV2dCkge1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZ0LnRhcmdldC5uYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCAkZmllbGQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XG4gICAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGZpZWxkKTtcbiAgICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSBmaWVsZCBvbiBjaGFuZ2VcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZSBibHVyIGtleXVwJywgJy5mb3JtLWVsZW1lbnRzIGlucHV0LCAuZm9ybS1lbGVtZW50cyBzZWxlY3QsIC5mb3JtLWVsZW1lbnRzIHRleHRhcmVhJywgc2F2ZUFuZFVwZGF0ZSk7XG5cbiAgICAkKCdsaScsICRjYlVMKS5jbGljayhmdW5jdGlvbihldnQpIHtcbiAgICAgIGxldCAkY29udHJvbCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLnVpLXNvcnRhYmxlLWhhbmRsZScpO1xuICAgICAgX2hlbHBlcnMuc3RvcEluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgcHJvY2Vzc0NvbnRyb2woJGNvbnRyb2wpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGFwcGVuZCBhbmQgcHJlcGVuZCBvcHRpb25zIGlmIG5lY2Vzc2FyeVxuICAgIGxldCBub25FZGl0YWJsZUZpZWxkcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNhbmNlbEFycmF5ID0gW107XG5cbiAgICAgIGlmIChvcHRzLnByZXBlbmQgJiYgISQoJy5kaXNhYmxlZC5wcmVwZW5kJywgJHNvcnRhYmxlRmllbGRzKS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHByZXBlbmRlZEZpZWxkID0gdXRpbHMubWFya3VwKCdsaScsIG9wdHMucHJlcGVuZCwge2NsYXNzTmFtZTogJ2Rpc2FibGVkIHByZXBlbmQnfSk7XG4gICAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICRzb3J0YWJsZUZpZWxkcy5wcmVwZW5kKHByZXBlbmRlZEZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuYXBwZW5kICYmICEkKCcuZGlzYWJsZWQuYXBwZW5kJywgJHNvcnRhYmxlRmllbGRzKS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGFwcGVuZGVkRmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0cy5hcHBlbmQsIHtjbGFzc05hbWU6ICdkaXNhYmxlZCBhcHBlbmQnfSk7XG4gICAgICAgIGNhbmNlbEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICRzb3J0YWJsZUZpZWxkcy5hcHBlbmQoYXBwZW5kZWRGaWVsZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxBcnJheS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHByZXBGaWVsZFZhcnMgPSBmdW5jdGlvbigkZmllbGQsIGlzTmV3ID0gZmFsc2UpIHtcbiAgICAgIGxldCBmaWVsZCA9IHt9O1xuICAgICAgaWYgKCRmaWVsZCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gJGZpZWxkLmRhdGEoJ25ld0ZpZWxkRGF0YScpO1xuICAgICAgICBpZiAoZmllbGREYXRhKSB7XG4gICAgICAgICAgZmllbGQgPSBmaWVsZERhdGEuYXR0cnM7XG4gICAgICAgICAgZmllbGQubGFiZWwgPSBmaWVsZERhdGEubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGF0dHJzID0gJGZpZWxkWzBdLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgaWYgKCFpc05ldykge1xuICAgICAgICAgICAgZmllbGQudmFsdWVzID0gJGZpZWxkLmNoaWxkcmVuKCkubWFwKChpbmRleCwgZWxlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAkKGVsZW0pLnRleHQoKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJChlbGVtKS5hdHRyKCd2YWx1ZScpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBCb29sZWFuKCQoZWxlbSkuYXR0cignc2VsZWN0ZWQnKSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAobGV0IGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgZmllbGRbYXR0cnNbaV0ubmFtZV0gPSBhdHRyc1tpXS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgJGZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgZmllbGQubmFtZSA9IGlzTmV3ID8gbmFtZUF0dHIoZmllbGQpIDogKCBmaWVsZC5uYW1lIHx8IG5hbWVBdHRyKGZpZWxkKSApO1xuXG4gICAgICBpZiAoaXNOZXcgJiYgdXRpbHMuaW5BcnJheShmaWVsZC50eXBlLCBbJ3RleHQnLCAnbnVtYmVyJywgJ2ZpbGUnLCAnc2VsZWN0JywgJ3RleHRhcmVhJ10pKSB7XG4gICAgICAgIGZpZWxkLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnOyAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQuY2xhc3NOYW1lID0gZmllbGQuY2xhc3MgfHwgZmllbGQuY2xhc3NOYW1lOyAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgfVxuXG4gICAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZC5jbGFzc05hbWUpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGZpZWxkLnN0eWxlID0gbWF0Y2hbMV07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmVzY2FwZUF0dHJzKGZpZWxkKTtcblxuICAgICAgYXBwZW5kTmV3RmllbGQoZmllbGQsIGlzTmV3KTtcbiAgICAgIGlmIChpc05ldykge1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZEFkZGVkKTtcbiAgICAgIH1cbiAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlIHNhdmVkIFhNTCB0ZW1wbGF0ZSBkYXRhXG4gICAgbGV0IGxvYWRGaWVsZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IGZvcm1CdWlsZGVyLmZvcm1EYXRhO1xuICAgICAgaWYgKGZvcm1EYXRhICYmIGZvcm1EYXRhLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcHJlcEZpZWxkVmFycyhmb3JtRGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5kZWZhdWx0RmllbGRzICYmIG9wdHMuZGVmYXVsdEZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gTG9hZCBkZWZhdWx0IGZpZWxkcyBpZiBub25lIGFyZSBzZXRcbiAgICAgICAgb3B0cy5kZWZhdWx0RmllbGRzLmZvckVhY2goZmllbGQgPT4gcHJlcEZpZWxkVmFycyhmaWVsZCkpO1xuICAgICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgfSBlbHNlIGlmICghb3B0cy5wcmVwZW5kICYmICFvcHRzLmFwcGVuZCkge1xuICAgICAgICAkc3RhZ2VXcmFwLmFkZENsYXNzKCdlbXB0eScpXG4gICAgICAgIC5hdHRyKCdkYXRhLWNvbnRlbnQnLCBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQpO1xuICAgICAgfVxuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuXG4gICAgICAvLyBsZXQgJGZpZWxkcyA9ICQoJ2xpLmZvcm0tZmllbGQ6bm90KC5kaXNhYmxlZCknLCAkc29ydGFibGVGaWVsZHMpO1xuICAgICAgLy8gJGZpZWxkcy5lYWNoKGkgPT4gX2hlbHBlcnMudXBkYXRlUHJldmlldygkKCRmaWVsZHNbaV0pKSk7XG5cbiAgICAgIG5vbkVkaXRhYmxlRmllbGRzKCk7XG4gICAgfTtcblxuICAgIC8vIGNhbGxiYWNrIHRvIHRyYWNrIGRpc2FibGVkIHRvb2x0aXBzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdtb3VzZW1vdmUnLCAnbGkuZGlzYWJsZWQnLCBlID0+IHtcbiAgICAgICQoJy5mcm1iLXR0JywgdGhpcykuY3NzKHtcbiAgICAgICAgbGVmdDogZS5vZmZzZXRYIC0gMTYsXG4gICAgICAgIHRvcDogZS5vZmZzZXRZIC0gMzRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gY2FsbGJhY2sgdG8gY2FsbCBkaXNhYmxlZCB0b29sdGlwc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignbW91c2VlbnRlcicsICdsaS5kaXNhYmxlZCcsIGUgPT5cbiAgICAgIF9oZWxwZXJzLmRpc2FibGVkVFQuYWRkKCQodGhpcykpKTtcblxuICAgIC8vIGNhbGxiYWNrIHRvIGNhbGwgZGlzYWJsZWQgdG9vbHRpcHNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlbGVhdmUnLCAnbGkuZGlzYWJsZWQnLCBlID0+XG4gICAgICBfaGVscGVycy5kaXNhYmxlZFRULnJlbW92ZSgkKHRoaXMpKSk7XG5cbiAgICBsZXQgbmFtZUF0dHIgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgbGV0IGVwb2NoID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICByZXR1cm4gZmllbGQudHlwZSArICctJyArIGVwb2NoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZGF0YSBmb3IgZmllbGQgd2l0aCBvcHRpb25zIFtzZWxlY3QsIGNoZWNrYm94LWdyb3VwLCByYWRpby1ncm91cF1cbiAgICAgKlxuICAgICAqIEB0b2RvICAgcmVmYWN0b3IgdGhpcyBuYXN0eSB+Y3JhcH4gY29kZSwgaXRzIGFjdHVhbGx5IHBhaW5mdWwgdG8gbG9vayBhdFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBmaWVsZCBvcHRpb25zIG1hcmt1cFxuICAgICAqL1xuICAgIGxldCBmaWVsZE9wdGlvbnMgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBvcHRpb25BY3Rpb25zID0gW1xuICAgICAgICAgIHV0aWxzLm1hcmt1cCgnYScsIG9wdHMubWVzc2FnZXMuYWRkT3B0aW9uLCB7Y2xhc3NOYW1lOiAnYWRkIGFkZC1vcHQnfSlcbiAgICAgICAgXTtcbiAgICAgIGxldCBmaWVsZE9wdGlvbnMgPSBbXG4gICAgICAgIGA8bGFiZWwgY2xhc3M9XCJmYWxzZS1sYWJlbFwiPiR7b3B0cy5tZXNzYWdlcy5zZWxlY3RPcHRpb25zfTwvbGFiZWw+YFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGlzTXVsdGlwbGUgPSB2YWx1ZXMubXVsdGlwbGUgfHwgKHZhbHVlcy50eXBlID09PSAnY2hlY2tib3gtZ3JvdXAnKTtcblxuICAgICAgaWYgKCF2YWx1ZXMudmFsdWVzIHx8ICF2YWx1ZXMudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZXMudmFsdWVzID0gWzEsIDIsIDNdLm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCBsYWJlbCA9IGAke29wdHMubWVzc2FnZXMub3B0aW9ufSAke2luZGV4fWA7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgIHZhbHVlOiB1dGlscy5oeXBoZW5DYXNlKGxhYmVsKVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbHVlcy52YWx1ZXNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZW5zdXJlIG9wdGlvbiBkYXRhIGlzIGhhcyBhbGwgcmVxdWlyZWQga2V5c1xuICAgICAgICB2YWx1ZXMudmFsdWVzLmZvckVhY2gob3B0aW9uID0+IE9iamVjdC5hc3NpZ24oe30sIHtzZWxlY3RlZDogZmFsc2V9LCBvcHRpb24pKTtcbiAgICAgIH1cblxuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzxkaXYgY2xhc3M9XCJzb3J0YWJsZS1vcHRpb25zLXdyYXBcIj4nKTtcblxuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzxvbCBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnNcIj4nKTtcbiAgICAgIHV0aWxzLmZvckVhY2godmFsdWVzLnZhbHVlcywgKGkpID0+IHtcbiAgICAgICAgZmllbGRPcHRpb25zLnB1c2goc2VsZWN0RmllbGRPcHRpb25zKHZhbHVlcy5uYW1lLCB2YWx1ZXMudmFsdWVzW2ldLCBpc011bHRpcGxlKSk7XG4gICAgICB9KTtcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8L29sPicpO1xuICAgICAgZmllbGRPcHRpb25zLnB1c2godXRpbHMubWFya3VwKCdkaXYnLCBvcHRpb25BY3Rpb25zLCB7Y2xhc3NOYW1lOiAnb3B0aW9uLWFjdGlvbnMnfSkub3V0ZXJIVE1MKTtcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8L2Rpdj4nKTtcblxuICAgICAgcmV0dXJuIHV0aWxzLm1hcmt1cCgnZGl2JywgZmllbGRPcHRpb25zLmpvaW4oJycpLCB7Y2xhc3NOYW1lOiAnZm9ybS1ncm91cCBmaWVsZC1vcHRpb25zJ30pLm91dGVySFRNTDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGVkaXRhYmxlIHByb3BlcnRpZXMgZm9yIHRoZSBmaWVsZFxuICAgICAqIEBwYXJhbSAge29iamVjdH0gdmFsdWVzIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBhZHZhbmNlZCBmaWVsZHNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICBtYXJrdXAgZm9yIGFkdmFuY2VkIGZpZWxkc1xuICAgICAqL1xuICAgIGxldCBhZHZGaWVsZHMgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBhZHZGaWVsZHMgPSBbXTtcbiAgICAgIGxldCBrZXk7XG4gICAgICBsZXQgb3B0aW9uRmllbGRzID0gW1xuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgJ3JhZGlvLWdyb3VwJ1xuICAgICAgXTtcbiAgICAgIGxldCBpc09wdGlvbkZpZWxkID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKG9wdGlvbkZpZWxkcy5pbmRleE9mKHZhbHVlcy50eXBlKSAhPT0gLTEpO1xuICAgICAgfSkoKTtcbiAgICAgIGxldCB2YWx1ZUZpZWxkID0gIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsnaGVhZGVyJywgJ3BhcmFncmFwaCcsICdmaWxlJ10uY29uY2F0KG9wdGlvbkZpZWxkcykpO1xuICAgICAgbGV0IHJvbGVzID0gdmFsdWVzLnJvbGUgIT09IHVuZGVmaW5lZCA/IHZhbHVlcy5yb2xlLnNwbGl0KCcsJykgOiBbXTtcblxuICAgICAgYWR2RmllbGRzLnB1c2gocmVxdWlyZWRGaWVsZCh2YWx1ZXMpKTtcblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ3RvZ2dsZScsIHZhbHVlcywge2ZpcnN0OiBvcHRzLm1lc3NhZ2VzLnRvZ2dsZX0pKTtcbiAgICAgIH1cblxuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgnbGFiZWwnLCB2YWx1ZXMpKTtcblxuICAgICAgdmFsdWVzLnNpemUgPSB2YWx1ZXMuc2l6ZSB8fCAnbSc7XG4gICAgICB2YWx1ZXMuc3R5bGUgPSB2YWx1ZXMuc3R5bGUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgICAvLyBIZWxwIFRleHQgLyBEZXNjcmlwdGlvbiBGaWVsZFxuICAgICAgaWYgKCF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnYnV0dG9uJ10pKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJ0eXBlc1t2YWx1ZXMudHlwZV0pIHtcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBzdWJ0eXBlc1t2YWx1ZXMudHlwZV07XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHNlbGVjdEF0dHJpYnV0ZSgnc3VidHlwZScsIHZhbHVlcywgb3B0aW9uRGF0YSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJ0blN0eWxlcyh2YWx1ZXMuc3R5bGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ21pbicsIHZhbHVlcykpO1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ21heCcsIHZhbHVlcykpO1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ3N0ZXAnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gUGxhY2Vob2xkZXJcbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdmFsdWVzKSk7XG5cbiAgICAgIC8vIFRleHRBcmVhIFJvd3MgQXR0cmlidXRlXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdyb3dzJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsYXNzXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdjbGFzc05hbWUnLCB2YWx1ZXMpKTtcblxuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlcykpO1xuXG4gICAgICBpZiAodmFsdWVGaWVsZCkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICBsZXQgbGFiZWxzID0ge1xuICAgICAgICAgIGZpcnN0OiBvcHRzLm1lc3NhZ2VzLm11bHRpcGxlRmlsZXMsXG4gICAgICAgICAgc2Vjb25kOiBvcHRzLm1lc3NhZ2VzLmFsbG93TXVsdGlwbGVGaWxlc1xuICAgICAgICB9O1xuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdtdWx0aXBsZScsIHZhbHVlcywgbGFiZWxzKSk7XG4gICAgICB9XG5cbiAgICAgIGxldCByb2xlc0Rpc3BsYXkgPSB2YWx1ZXMucm9sZSAhPT0gdW5kZWZpbmVkID8gJ3N0eWxlPVwiZGlzcGxheTpibG9ja1wiJyA6ICcnO1xuICAgICAgbGV0IGF2YWlsYWJsZVJvbGVzID0gW1xuICAgICAgICBgPGRpdiBjbGFzcz1cImF2YWlsYWJsZS1yb2xlc1wiICR7cm9sZXNEaXNwbGF5fT5gXG4gICAgICBdO1xuICAgICAgZm9yIChrZXkgaW4gb3B0cy5yb2xlcykge1xuICAgICAgICBpZiAob3B0cy5yb2xlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgbGV0IGNoZWNrZWQgPSB1dGlscy5pbkFycmF5KGtleSwgcm9sZXMpID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICAgICAgbGV0IHJvbGVJZCA9IGBmbGQtJHtsYXN0SUR9LXJvbGVzLSR7a2V5fWA7XG4gICAgICAgICAgYXZhaWxhYmxlUm9sZXMucHVzaChgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyb2xlc1tdXCIgdmFsdWU9XCIke2tleX1cIiBpZD1cIiR7cm9sZUlkfVwiICR7Y2hlY2tlZH0gY2xhc3M9XCJyb2xlcy1maWVsZFwiIC8+IDxsYWJlbCBmb3I9XCIke3JvbGVJZH1cIj4ke29wdHMucm9sZXNba2V5XX08L2xhYmVsPjxici8+YCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXZhaWxhYmxlUm9sZXMucHVzaCgnPC9kaXY+Jyk7XG5cbiAgICAgIGxldCBhY2Nlc3NMYWJlbHMgPSB7Zmlyc3Q6IG9wdHMubWVzc2FnZXMucm9sZXMsIHNlY29uZDogb3B0cy5tZXNzYWdlcy5saW1pdFJvbGUsIGNvbnRlbnQ6IGF2YWlsYWJsZVJvbGVzLmpvaW4oJycpfTtcblxuICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnYWNjZXNzJywgdmFsdWVzLCBhY2Nlc3NMYWJlbHMpKTtcblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnY2hlY2tib3gtZ3JvdXAnIHx8IHZhbHVlcy50eXBlID09PSAncmFkaW8tZ3JvdXAnKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ290aGVyJywgdmFsdWVzLCB7Zmlyc3Q6IG9wdHMubWVzc2FnZXMuZW5hYmxlT3RoZXIsIHNlY29uZDogb3B0cy5tZXNzYWdlcy5lbmFibGVPdGhlck1zZ30pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdtdWx0aXBsZScsIHZhbHVlcywge2ZpcnN0OiAnICcsIHNlY29uZDogb3B0cy5tZXNzYWdlcy5zZWxlY3Rpb25zTWVzc2FnZX0pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzT3B0aW9uRmllbGQpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goZmllbGRPcHRpb25zKHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgWyd0ZXh0JywgJ3RleHRhcmVhJ10pKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGVuZCBjdXN0b20gYXR0cmlidXRlcyBhcyBkZWZpbmVkIGluIHR5cGVVc2VyQXR0cnMgb3B0aW9uXG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChwcm9jZXNzVHlwZVVzZXJBdHRycyhvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFkdkZpZWxkcy5qb2luKCcnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHR5cGVVc2VyQXR0cnNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHR5cGVVc2VyQXR0ciBvcHRpb25cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlcyAgICAgICBmaWVsZCBhdHRyaWJ1dGVzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgbWFya3VwIGZvciBjdXN0b20gdXNlciBhdHRyaWJ1dGVzXG4gICAgICovXG4gICAgZnVuY3Rpb24gcHJvY2Vzc1R5cGVVc2VyQXR0cnModHlwZVVzZXJBdHRyLCB2YWx1ZXMpIHtcbiAgICAgIGxldCBhZHZGaWVsZCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gdHlwZVVzZXJBdHRyKSB7XG4gICAgICAgIGlmICh0eXBlVXNlckF0dHIuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuICAgICAgICAgIGxldCBvcmlnID0gb3B0cy5tZXNzYWdlc1thdHRyaWJ1dGVdO1xuICAgICAgICAgIGxldCBvcmlnVmFsdWUgPSB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZTtcbiAgICAgICAgICB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZSA9IHZhbHVlc1thdHRyaWJ1dGVdIHx8IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlIHx8ICcnO1xuXG4gICAgICAgICAgaWYgKHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLmxhYmVsKSB7XG4gICAgICAgICAgICBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV0gPSB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5sYWJlbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ub3B0aW9ucykge1xuICAgICAgICAgICAgYWR2RmllbGQucHVzaChzZWxlY3RVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZHZGaWVsZC5wdXNoKGlucHV0VXNlckF0dHJzKGF0dHJpYnV0ZSwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV0gPSBvcmlnO1xuICAgICAgICAgIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlID0gb3JpZ1ZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZHZGaWVsZC5qb2luKCcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXh0IGlucHV0IHZhbHVlIGZvciBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIGFsc28ga25vd24gYXMgdmFsdWVzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICBpbnB1dCBtYXJrdXBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbnB1dFVzZXJBdHRycyhuYW1lLCBhdHRycykge1xuICAgICAgbGV0IHRleHRBdHRycyA9IHtcbiAgICAgICAgICBpZDogbmFtZSArICctJyArIGxhc3RJRCxcbiAgICAgICAgICB0aXRsZTogYXR0cnMuZGVzY3JpcHRpb24gfHwgYXR0cnMubGFiZWwgfHwgbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogYXR0cnMudHlwZSB8fCAndGV4dCcsXG4gICAgICAgICAgY2xhc3NOYW1lOiBbYGZsZC0ke25hbWV9YF1cbiAgICAgICAgfTtcbiAgICAgIGxldCBsYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHt0ZXh0QXR0cnMuaWR9XCI+JHtvcHRzLm1lc3NhZ2VzW25hbWVdfTwvbGFiZWw+YDtcblxuICAgICAgaWYgKCF1dGlscy5pbkFycmF5KHRleHRBdHRycy50eXBlLCBbJ2NoZWNrYm94JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICAgIHRleHRBdHRycy5jbGFzc05hbWUucHVzaCgnZm9ybS1jb250cm9sJyk7XG4gICAgICB9XG5cbiAgICAgIHRleHRBdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCB0ZXh0QXR0cnMpO1xuICAgICAgbGV0IHRleHRJbnB1dCA9IGA8aW5wdXQgJHt1dGlscy5hdHRyU3RyaW5nKHRleHRBdHRycyl9PmA7XG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHt0ZXh0SW5wdXR9PC9kaXY+YDtcbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBpbnB1dCBmb3IgbXVsdGlwbGUgY2hvaWNlIHVzZXIgYXR0cmlidXRlc1xuICAgICAqIEB0b2RvICByZXBsYWNlIHdpdGggc2VsZWN0QXR0clxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICBzZWxlY3QgbWFya3VwXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2VsZWN0VXNlckF0dHJzKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgIGxldCBvcHRpcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMub3B0aW9ucykubWFwKHZhbCA9PiB7XG4gICAgICAgIGxldCBhdHRycyA9IHt2YWx1ZTogdmFsfTtcbiAgICAgICAgaWYgKHZhbCA9PT0gb3B0aW9ucy52YWx1ZSkge1xuICAgICAgICAgIGF0dHJzLnNlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxvcHRpb24gJHt1dGlscy5hdHRyU3RyaW5nKGF0dHJzKX0+JHtvcHRpb25zLm9wdGlvbnNbdmFsXX08L29wdGlvbj5gO1xuICAgICAgfSk7XG4gICAgICBsZXQgc2VsZWN0QXR0cnMgPSB7XG4gICAgICAgIGlkOiBuYW1lICsgJy0nICsgbGFzdElELFxuICAgICAgICB0aXRsZTogb3B0aW9ucy5kZXNjcmlwdGlvbiB8fCBvcHRpb25zLmxhYmVsIHx8IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7bmFtZX0gZm9ybS1jb250cm9sYFxuICAgICAgfTtcbiAgICAgIGxldCBsYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtzZWxlY3RBdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXNbbmFtZV19PC9sYWJlbD5gO1xuXG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5maWx0ZXIocHJvcCA9PiB7XG4gICAgICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShwcm9wLCBbJ3ZhbHVlJywgJ29wdGlvbnMnLCAnbGFiZWwnXSk7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgICAgc2VsZWN0QXR0cnNbYXR0cl0gPSBvcHRpb25zW2F0dHJdO1xuICAgICAgfSk7XG5cbiAgICAgIGxldCBzZWxlY3QgPSBgPHNlbGVjdCAke3V0aWxzLmF0dHJTdHJpbmcoc2VsZWN0QXR0cnMpfT4ke29wdGlzLmpvaW4oJycpfTwvc2VsZWN0PmA7XG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtzZWxlY3R9PC9kaXY+YDtcbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICAgIH1cblxuICAgIGxldCBib29sQXR0cmlidXRlID0gZnVuY3Rpb24obmFtZSwgdmFsdWVzLCBsYWJlbHMpIHtcbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGFiZWwgPSAodHh0KSA9PiB7XG4gICAgICAgIHJldHVybiBgPGxhYmVsIGZvcj1cIiR7bmFtZX0tJHtsYXN0SUR9XCI+JHt0eHR9PC9sYWJlbD5gO1xuICAgICAgfTtcbiAgICAgIGxldCBjaGVja2VkID0gKHZhbHVlc1tuYW1lXSAhPT0gdW5kZWZpbmVkID8gJ2NoZWNrZWQnIDogJycpO1xuICAgICAgbGV0IGlucHV0ID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZsZC0ke25hbWV9XCIgbmFtZT1cIiR7bmFtZX1cIiB2YWx1ZT1cInRydWVcIiAke2NoZWNrZWR9IGlkPVwiJHtuYW1lfS0ke2xhc3RJRH1cIi8+IGA7XG4gICAgICBsZXQgbGVmdCA9IFtdO1xuICAgICAgbGV0IHJpZ2h0ID0gW1xuICAgICAgICBpbnB1dFxuICAgICAgXTtcblxuICAgICAgaWYgKGxhYmVscy5maXJzdCkge1xuICAgICAgICBsZWZ0LnVuc2hpZnQobGFiZWwobGFiZWxzLmZpcnN0KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYWJlbHMuc2Vjb25kKSB7XG4gICAgICAgIHJpZ2h0LnB1c2gobGFiZWwobGFiZWxzLnNlY29uZCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGFiZWxzLmNvbnRlbnQpIHtcbiAgICAgICAgcmlnaHQucHVzaChsYWJlbHMuY29udGVudCk7XG4gICAgICB9XG5cbiAgICAgIHJpZ2h0LnVuc2hpZnQoJzxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+Jyk7XG4gICAgICByaWdodC5wdXNoKCc8L2Rpdj4nKTtcblxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xlZnQuY29uY2F0KHJpZ2h0KS5qb2luKCcnKX08L2Rpdj5gO1xuICAgIH07XG5cbiAgICBsZXQgYnRuU3R5bGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgbGV0IHN0eWxlcyA9IG9wdHMubWVzc2FnZXMuc3R5bGVzLmJ0bjtcbiAgICAgICAgbGV0IHN0eWxlRmllbGQgPSAnJztcblxuICAgICAgaWYgKHN0eWxlcykge1xuICAgICAgICBsZXQgc3R5bGVMYWJlbCA9IGA8bGFiZWw+JHtvcHRzLm1lc3NhZ2VzLnN0eWxlfTwvbGFiZWw+YDtcbiAgICAgICAgc3R5bGVGaWVsZCArPSBgPGlucHV0IHZhbHVlPVwiJHtzdHlsZX1cIiBuYW1lPVwic3R5bGVcIiB0eXBlPVwiaGlkZGVuXCIgY2xhc3M9XCJidG4tc3R5bGVcIj5gO1xuICAgICAgICBzdHlsZUZpZWxkICs9ICc8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCI+JztcblxuICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgbGV0IGNsYXNzTGlzdCA9IFsnYnRuLXhzJywgJ2J0bicsIGBidG4tJHtlbGVtZW50fWBdO1xuICAgICAgICAgIGlmIChzdHlsZSA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgY2xhc3NMaXN0LnB1c2goJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3R5bGVGaWVsZCArPSBgPGJ1dHRvbiB2YWx1ZT1cIiR7ZWxlbWVudH1cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke2NsYXNzTGlzdC5qb2luKCcgJyl9XCI+JHtvcHRzLm1lc3NhZ2VzLnN0eWxlcy5idG5bZWxlbWVudF19PC9idXR0b24+YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3R5bGVGaWVsZCArPSAnPC9kaXY+JztcblxuICAgICAgICBzdHlsZUZpZWxkID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHN0eWxlLXdyYXBcIj4ke3N0eWxlTGFiZWx9ICR7c3R5bGVGaWVsZH08L2Rpdj5gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGVGaWVsZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbnVtYmVyIGF0dHJpYnV0ZSB0byBhIGZpZWxkLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IG1hcmt1cCBmb3IgbnVtYmVyIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgIGxldCBudW1iZXJBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGF0dHJWYWwgPSB2YWx1ZXNbYXR0cmlidXRlXTtcbiAgICAgIGxldCBhdHRyTGFiZWwgPSBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV0gfHwgYXR0cmlidXRlO1xuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gb3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnNbYXR0cmlidXRlXTtcbiAgICAgIGxldCBpbnB1dENvbmZpZyA9IHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIHZhbHVlOiBhdHRyVmFsLFxuICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgIG1pbjogJzAnLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcbiAgICAgICAgaWQ6IGAke2F0dHJpYnV0ZX0tJHtsYXN0SUR9YFxuICAgICAgfTtcbiAgICAgIGxldCBudW1iZXJBdHRyaWJ1dGUgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh1dGlscy50cmltT2JqKGlucHV0Q29uZmlnKSl9PmA7XG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtudW1iZXJBdHRyaWJ1dGV9PC9kaXY+YDtcblxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiPjxsYWJlbCBmb3I9XCIke2lucHV0Q29uZmlnLmlkfVwiPiR7YXR0ckxhYmVsfTwvbGFiZWw+ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNlbGVjdEF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlICBhdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzICAgICBha2EgYXR0cnNcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gb3B0aW9uRGF0YSAgc2VsZWN0IGZpZWxkIG9wdGlvbiBkYXRhXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgIHNlbGVjdCBpbnB1dCBtYWtydXBcbiAgICAgKi9cbiAgICBsZXQgc2VsZWN0QXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMsIG9wdGlvbkRhdGEpIHtcbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IG9wdGlvbkRhdGEubWFwKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgbGFiZWw6IGAke29wdHMubWVzc2FnZXMub3B0aW9ufSAke2l9YCxcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgIH0sIG9wdGlvbik7XG4gICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHZhbHVlc1thdHRyaWJ1dGVdKSB7XG4gICAgICAgICAgb3B0aW9uQXR0cnMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcodXRpbHMudHJpbU9iaihvcHRpb25BdHRycykpfT4ke29wdGlvbkF0dHJzLmxhYmVsfTwvb3B0aW9uPmA7XG4gICAgICB9KTtcbiAgICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgICAgICBpZDogYXR0cmlidXRlICsgJy0nICsgbGFzdElELFxuICAgICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGBcbiAgICAgICAgfTtcbiAgICAgIGxldCBsYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtzZWxlY3RBdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXNbYXR0cmlidXRlXSB8fCB1dGlscy5jYXBpdGFsaXplKGF0dHJpYnV0ZSl9PC9sYWJlbD5gO1xuICAgICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7c2VsZWN0T3B0aW9ucy5qb2luKCcnKX08L3NlbGVjdD5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7c2VsZWN0fTwvZGl2PmA7XG5cbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtzZWxlY3RBdHRycy5uYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBzb21lIHRleHQgaW5wdXRzIGZvciBmaWVsZCBhdHRyaWJ1dGVzLCAqKndpbGwgYmUgcmVwbGFjZWQqKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgbGV0IHRleHRBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHBsYWNlaG9sZGVyRmllbGRzID0gW1xuICAgICAgICAndGV4dCcsXG4gICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgICdzZWxlY3QnXG4gICAgICBdO1xuXG4gICAgICBsZXQgbm9OYW1lID0gW1xuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ3BhcmFncmFwaCdcbiAgICAgIF07XG5cbiAgICAgIGxldCB0ZXh0QXJlYSA9IFsncGFyYWdyYXBoJ107XG5cbiAgICAgIGxldCBhdHRyVmFsID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgJyc7XG4gICAgICBsZXQgYXR0ckxhYmVsID0gb3B0cy5tZXNzYWdlc1thdHRyaWJ1dGVdO1xuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xhYmVsJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCB0ZXh0QXJlYSkpIHtcbiAgICAgICAgYXR0ckxhYmVsID0gb3B0cy5tZXNzYWdlcy5jb250ZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoc3VidHlwZXMuaGVhZGVyKSB7XG4gICAgICAgIG5vTmFtZSA9IG5vTmFtZS5jb25jYXQoc3VidHlwZXMuaGVhZGVyKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHBsYWNlaG9sZGVycyA9IG9wdHMubWVzc2FnZXMucGxhY2Vob2xkZXJzO1xuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJzW2F0dHJpYnV0ZV0gfHwgJyc7XG4gICAgICBsZXQgYXR0cmlidXRlZmllbGQgPSAnJztcbiAgICAgIGxldCBub01ha2VBdHRyID0gW107XG5cbiAgICAgIC8vIEZpZWxkIGhhcyBwbGFjZWhvbGRlciBhdHRyaWJ1dGVcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdwbGFjZWhvbGRlcicgJiYgIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHBsYWNlaG9sZGVyRmllbGRzKSkge1xuICAgICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpZWxkIGhhcyBuYW1lIGF0dHJpYnV0ZVxuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ25hbWUnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vTmFtZSkpIHtcbiAgICAgICAgbm9NYWtlQXR0ci5wdXNoKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vTWFrZUF0dHIuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZyA9IHtcbiAgICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcbiAgICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2xhc3RJRH1gXG4gICAgICAgIH07XG4gICAgICAgIGxldCBhdHRyaWJ1dGVMYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtpbnB1dENvbmZpZy5pZH1cIj4ke2F0dHJMYWJlbH08L2xhYmVsPmA7XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xhYmVsJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCB0ZXh0QXJlYSkgfHwgKGF0dHJpYnV0ZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykpIHtcbiAgICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPHRleHRhcmVhICR7dXRpbHMuYXR0clN0cmluZyhpbnB1dENvbmZpZyl9PiR7YXR0clZhbH08L3RleHRhcmVhPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXRDb25maWcudmFsdWUgPSBhdHRyVmFsO1xuICAgICAgICAgIGlucHV0Q29uZmlnLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgYXR0cmlidXRlZmllbGQgKz0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT5gO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7YXR0cmlidXRlZmllbGR9PC9kaXY+YDtcblxuICAgICAgICBhdHRyaWJ1dGVmaWVsZCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiPiR7YXR0cmlidXRlTGFiZWx9ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVmaWVsZDtcbiAgICB9O1xuXG4gICAgbGV0IHJlcXVpcmVkRmllbGQgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBub1JlcXVpcmUgPSBbXG4gICAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICAgJ2J1dHRvbidcbiAgICAgICAgXTtcbiAgICAgIGxldCBub01ha2UgPSBbXTtcbiAgICAgIGxldCByZXF1aXJlRmllbGQgPSAnJztcblxuICAgICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vUmVxdWlyZSkpIHtcbiAgICAgICAgbm9NYWtlLnB1c2godHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5vTWFrZS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmVxdWlyZUZpZWxkID0gYm9vbEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB2YWx1ZXMsIHtmaXJzdDogb3B0cy5tZXNzYWdlcy5yZXF1aXJlZH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVxdWlyZUZpZWxkO1xuICAgIH07XG5cbiAgICAvLyBBcHBlbmQgdGhlIG5ldyBmaWVsZCB0byB0aGUgZWRpdG9yXG4gICAgbGV0IGFwcGVuZE5ld0ZpZWxkID0gZnVuY3Rpb24odmFsdWVzLCBpc05ldyA9IHRydWUpIHtcbiAgICAgIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgICBsZXQgdHlwZSA9IHZhbHVlcy50eXBlIHx8ICd0ZXh0JztcbiAgICAgIGxldCBsYWJlbCA9IHZhbHVlcy5sYWJlbCB8fCBvcHRzLm1lc3NhZ2VzW3R5cGVdIHx8IG9wdHMubWVzc2FnZXMubGFiZWw7XG4gICAgICBsZXQgZGVsQnRuID0gbSgnYScsIG9wdHMubWVzc2FnZXMucmVtb3ZlLCB7XG4gICAgICAgICAgaWQ6ICdkZWxfJyArIGxhc3RJRCxcbiAgICAgICAgICBjbGFzc05hbWU6ICdkZWwtYnV0dG9uIGJ0biBkZWxldGUtY29uZmlybScsXG4gICAgICAgICAgdGl0bGU6IG9wdHMubWVzc2FnZXMucmVtb3ZlTWVzc2FnZVxuICAgICAgICB9KTtcbiAgICAgIGxldCB0b2dnbGVCdG4gPSBtKCdhJywgbnVsbCwge1xuICAgICAgICBpZDogbGFzdElEICsgJy1lZGl0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAndG9nZ2xlLWZvcm0gYnRuIGljb24tcGVuY2lsJyxcbiAgICAgICAgdGl0bGU6IG9wdHMubWVzc2FnZXMuaGlkZVxuICAgICAgfSk7XG4gICAgICBsZXQgY29weUJ0biA9IG0oJ2EnLCBvcHRzLm1lc3NhZ2VzLmNvcHlCdXR0b24sIHtcbiAgICAgICAgaWQ6IGxhc3RJRCArICctY29weScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NvcHktYnV0dG9uIGJ0biBpY29uLWNvcHknLFxuICAgICAgICB0aXRsZTogb3B0cy5tZXNzYWdlcy5jb3B5QnV0dG9uVG9vbHRpcFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBsaUNvbnRlbnRzID0gbShcbiAgICAgICAgJ2RpdicsIFt0b2dnbGVCdG4sIGNvcHlCdG4sIGRlbEJ0bl0sIHtjbGFzc05hbWU6ICdmaWVsZC1hY3Rpb25zJ31cbiAgICAgICkub3V0ZXJIVE1MO1xuXG4gICAgICAvLyBGaWVsZCBwcmV2aWV3IExhYmVsXG4gICAgICBsaUNvbnRlbnRzICs9IGA8bGFiZWwgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPiR7bGFiZWx9PC9sYWJlbD5gO1xuXG4gICAgICBpZiAodmFsdWVzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICAgIHRvb2x0aXA6IHZhbHVlcy5kZXNjcmlwdGlvblxuICAgICAgICB9O1xuICAgICAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4/PC9zcGFuPmA7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXF1aXJlZERpc3BsYXkgPSB2YWx1ZXMucmVxdWlyZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmlubGluZVwiJyA6ICcnO1xuICAgICAgbGlDb250ZW50cyArPSBgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiICR7cmVxdWlyZWREaXNwbGF5fT4gKjwvc3Bhbj5gO1xuXG4gICAgICBsaUNvbnRlbnRzICs9IG0oJ2RpdicsICcnLCB7Y2xhc3NOYW1lOiAncHJldi1ob2xkZXInfSkub3V0ZXJIVE1MO1xuICAgICAgbGlDb250ZW50cyArPSBgPGRpdiBpZD1cIiR7bGFzdElEfS1ob2xkZXJcIiBjbGFzcz1cImZybS1ob2xkZXJcIj5gO1xuICAgICAgbGlDb250ZW50cyArPSAnPGRpdiBjbGFzcz1cImZvcm0tZWxlbWVudHNcIj4nO1xuXG4gICAgICBsaUNvbnRlbnRzICs9IGFkdkZpZWxkcyh2YWx1ZXMpO1xuICAgICAgbGlDb250ZW50cyArPSBtKCdhJywgb3B0cy5tZXNzYWdlcy5jbG9zZSwge2NsYXNzTmFtZTogJ2Nsb3NlLWZpZWxkJ30pLm91dGVySFRNTDtcblxuICAgICAgbGlDb250ZW50cyArPSAnPC9kaXY+JztcbiAgICAgIGxpQ29udGVudHMgKz0gJzwvZGl2Pic7XG5cbiAgICAgIGxldCBmaWVsZCA9IG0oJ2xpJywgbGlDb250ZW50cywge1xuICAgICAgICAgICdjbGFzcyc6IHR5cGUgKyAnLWZpZWxkIGZvcm0tZmllbGQnLFxuICAgICAgICAgICd0eXBlJzogdHlwZSxcbiAgICAgICAgICBpZDogbGFzdElEXG4gICAgICAgIH0pO1xuICAgICAgbGV0ICRsaSA9ICQoZmllbGQpO1xuXG4gICAgICAkbGkuZGF0YSgnZmllbGREYXRhJywge2F0dHJzOiB2YWx1ZXN9KTtcblxuICAgICAgaWYgKHR5cGVvZiBfaGVscGVycy5zdG9wSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQoJz4gbGknLCAkc29ydGFibGVGaWVsZHMpLmVxKF9oZWxwZXJzLnN0b3BJbmRleCkuYmVmb3JlKCRsaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc29ydGFibGVGaWVsZHMuYXBwZW5kKCRsaSk7XG4gICAgICB9XG5cbiAgICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJGxpKVxuICAgICAgLnNvcnRhYmxlKHt1cGRhdGU6ICgpID0+IF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGxpKX0pO1xuXG4gICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRsaSk7XG5cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdICYmIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25hZGQpIHtcbiAgICAgICAgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmFkZChmaWVsZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmVkaXRPbkFkZCAmJiBpc05ldykge1xuICAgICAgICBfaGVscGVycy5jbG9zZUFsbEVkaXQoKTtcbiAgICAgICAgX2hlbHBlcnMudG9nZ2xlRWRpdChsYXN0SUQsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgbGFzdElEID0gX2hlbHBlcnMuaW5jcmVtZW50SWQobGFzdElEKTtcbiAgICB9O1xuXG4gICAgLy8gU2VsZWN0IGZpZWxkIGh0bWwsIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZVxuICAgIGxldCBzZWxlY3RGaWVsZE9wdGlvbnMgPSBmdW5jdGlvbihuYW1lLCBvcHRpb25EYXRhLCBtdWx0aXBsZVNlbGVjdCkge1xuICAgICAgbGV0IG9wdGlvbklucHV0VHlwZSA9IHtcbiAgICAgICAgICBzZWxlY3RlZDogKG11bHRpcGxlU2VsZWN0ID8gJ2NoZWNrYm94JyA6ICdyYWRpbycpXG4gICAgICAgIH07XG4gICAgICBsZXQgb3B0aW9uRGF0YU9yZGVyID0gW1xuICAgICAgICAndmFsdWUnLFxuICAgICAgICAnbGFiZWwnLFxuICAgICAgICAnc2VsZWN0ZWQnXG4gICAgICBdO1xuICAgICAgbGV0IG9wdGlvbklucHV0cyA9IFtdO1xuICAgICAgbGV0IG9wdGlvblRlbXBsYXRlID0ge3NlbGVjdGVkOiBmYWxzZSwgbGFiZWw6ICcnLCB2YWx1ZTogJyd9O1xuXG4gICAgICBvcHRpb25EYXRhID0gT2JqZWN0LmFzc2lnbihvcHRpb25UZW1wbGF0ZSwgb3B0aW9uRGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSBvcHRpb25EYXRhT3JkZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IHByb3AgPSBvcHRpb25EYXRhT3JkZXJbaV07XG4gICAgICAgIGlmIChvcHRpb25EYXRhLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgICAgdHlwZTogb3B0aW9uSW5wdXRUeXBlW3Byb3BdIHx8ICd0ZXh0JyxcbiAgICAgICAgICAgICdjbGFzcyc6ICdvcHRpb24tJyArIHByb3AsXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uRGF0YVtwcm9wXSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUgKyAnLW9wdGlvbidcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKG9wdHMubWVzc2FnZXMucGxhY2Vob2xkZXJzW3Byb3BdKSB7XG4gICAgICAgICAgICBhdHRycy5wbGFjZWhvbGRlciA9IG9wdHMubWVzc2FnZXMucGxhY2Vob2xkZXJzW3Byb3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcm9wID09PSAnc2VsZWN0ZWQnICYmIG9wdGlvbkRhdGEuc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGF0dHJzLmNoZWNrZWQgPSBvcHRpb25EYXRhLnNlbGVjdGVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9wdGlvbklucHV0cy5wdXNoKHV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBhdHRycykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCByZW1vdmVBdHRycyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAncmVtb3ZlIGJ0bicsXG4gICAgICAgIHRpdGxlOiBvcHRzLm1lc3NhZ2VzLnJlbW92ZU1lc3NhZ2VcbiAgICAgIH07XG4gICAgICBvcHRpb25JbnB1dHMucHVzaCh1dGlscy5tYXJrdXAoJ2EnLCBvcHRzLm1lc3NhZ2VzLnJlbW92ZSwgcmVtb3ZlQXR0cnMpKTtcblxuICAgICAgbGV0IGZpZWxkID0gdXRpbHMubWFya3VwKCdsaScsIG9wdGlvbklucHV0cyk7XG5cbiAgICAgIHJldHVybiBmaWVsZC5vdXRlckhUTUw7XG4gICAgfTtcblxuICAgIGxldCBjbG9uZUl0ZW0gPSBmdW5jdGlvbiBjbG9uZUl0ZW0oY3VycmVudEl0ZW0pIHtcbiAgICAgIGxldCBjdXJyZW50SWQgPSBjdXJyZW50SXRlbS5hdHRyKCdpZCcpO1xuICAgICAgbGV0IHR5cGUgPSBjdXJyZW50SXRlbS5hdHRyKCd0eXBlJyk7XG4gICAgICBsZXQgdHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGxldCBjbG9uZU5hbWUgPSB0eXBlICsgJy0nICsgdHM7XG4gICAgICBsZXQgJGNsb25lID0gY3VycmVudEl0ZW0uY2xvbmUoKTtcblxuICAgICAgJGNsb25lLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkLnJlcGxhY2UoY3VycmVudElkLCBsYXN0SUQpO1xuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5maW5kKCdbZm9yXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuZ2V0QXR0cmlidXRlKCdmb3InKS5yZXBsYWNlKGN1cnJlbnRJZCwgbGFzdElEKSk7XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ2U6bm90KC5mb3JtLWVsZW1lbnRzKScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGV0IG5ld05hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICAgIG5ld05hbWUgPSBuZXdOYW1lLnN1YnN0cmluZygwLCAobmV3TmFtZS5sYXN0SW5kZXhPZignLScpICsgMSkpO1xuICAgICAgICAgIG5ld05hbWUgPSBuZXdOYW1lICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5ld05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAkY2xvbmUuZmluZCgnLmZvcm0tZWxlbWVudHMnKS5maW5kKCc6aW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgbGV0IG5ld1ZhbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICAgIG5ld1ZhbCA9IG5ld1ZhbC5zdWJzdHJpbmcoMCwgKG5ld1ZhbC5sYXN0SW5kZXhPZignLScpICsgMSkpO1xuICAgICAgICAgIG5ld1ZhbCA9IG5ld1ZhbCArIHRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3VmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5hdHRyKCdpZCcsIGxhc3RJRCk7XG4gICAgICAkY2xvbmUuYXR0cignbmFtZScsIGNsb25lTmFtZSk7XG4gICAgICAkY2xvbmUuYWRkQ2xhc3MoJ2Nsb25lZCcpO1xuICAgICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkY2xvbmUpLnNvcnRhYmxlKCk7XG5cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdICYmIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSkge1xuICAgICAgICBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uY2xvbmUoJGNsb25lWzBdKTtcbiAgICAgIH1cblxuICAgICAgbGFzdElEID0gX2hlbHBlcnMuaW5jcmVtZW50SWQobGFzdElEKTtcbiAgICAgIHJldHVybiAkY2xvbmU7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVVRJTElUSUVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAgIC8vIGRlbGV0ZSBvcHRpb25zXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5yZW1vdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgJGZpZWxkID0gJCh0aGlzKS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IG9wdGlvbnNDb3VudCA9ICQodGhpcykucGFyZW50cygnLnNvcnRhYmxlLW9wdGlvbnM6ZXEoMCknKS5jaGlsZHJlbignbGknKS5sZW5ndGg7XG4gICAgICBpZiAob3B0aW9uc0NvdW50IDw9IDIpIHtcbiAgICAgICAgb3B0cy5ub3RpZnkuZXJyb3IoJ0Vycm9yOiAnICsgb3B0cy5tZXNzYWdlcy5taW5PcHRpb25NZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCdsaScpLnNsaWRlVXAoJzI1MCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkZmllbGQpO1xuICAgICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0b3VjaCBmb2N1c1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbigndG91Y2hzdGFydCcsICdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgaWYgKGUuaGFuZGxlZCAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAoJGlucHV0LmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICRpbnB1dC50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRpbnB1dC5mb2N1cygpO1xuICAgICAgICAgIGxldCBmaWVsZFZhbCA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAkaW5wdXQudmFsKGZpZWxkVmFsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gdG9nZ2xlIGZpZWxkc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2sgdG91Y2hzdGFydCcsICcudG9nZ2xlLWZvcm0sIC5jbG9zZS1maWVsZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGxldCB0YXJnZXRJRCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJykuYXR0cignaWQnKTtcbiAgICAgICAgX2hlbHBlcnMudG9nZ2xlRWRpdCh0YXJnZXRJRCk7XG4gICAgICAgIGUuaGFuZGxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZScsICcucHJldi1ob2xkZXIgaW5wdXQsIC5wcmV2LWhvbGRlciBzZWxlY3QnLCBlID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ290aGVyLW9wdGlvbicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBmaWVsZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpLmZvcm0tZmllbGQnKVswXTtcbiAgICAgIGlmICh1dGlscy5pbkFycmF5KGZpZWxkLnR5cGUsIFsnc2VsZWN0JywgJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10pKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gZmllbGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3B0aW9uLXZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShlLnRhcmdldC5uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coW3ByZXZpZXddKTtcbiAgICAgICAgdXRpbHMuZm9yRWFjaChvcHRpb25zLCBpID0+IHtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zW2ldLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICBjb25zb2xlLmxvZygpO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uY2hlY2tlZCA9IHV0aWxzLmluQXJyYXkob3B0aW9uc1tpXS52YWx1ZSwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5jaGVja2VkID0gb3B0aW9uc1tpXS52YWx1ZSA9PT0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZS0nICsgZmllbGQuaWQpLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBwcmV2aWV3IHRvIGxhYmVsXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdrZXl1cCBjaGFuZ2UnLCAnW25hbWU9XCJsYWJlbFwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICQoJy5maWVsZC1sYWJlbCcsICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJykpLnRleHQoJChlLnRhcmdldCkudmFsKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGVycm9yIHN0eWxpbmcgd2hlbiB1c2VycyB0cmllcyB0byBjb3JyZWN0IG1pc3Rha2VcbiAgICAkc29ydGFibGVGaWVsZHMuZGVsZWdhdGUoJ2lucHV0LmVycm9yJywgJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgcHJldmlldyBmb3IgZGVzY3JpcHRpb25cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2tleXVwJywgJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkZmllbGQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgICAgbGV0IGNsb3Nlc3RUb29sVGlwID0gJCgnLnRvb2x0aXAtZWxlbWVudCcsICRmaWVsZCk7XG4gICAgICBsZXQgdHRWYWwgPSAkKGUudGFyZ2V0KS52YWwoKTtcbiAgICAgIGlmICh0dFZhbCAhPT0gJycpIHtcbiAgICAgICAgaWYgKCFjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgdHQgPSBgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWVsZW1lbnRcIiB0b29sdGlwPVwiJHt0dFZhbH1cIj4/PC9zcGFuPmA7XG4gICAgICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJGZpZWxkKS5hZnRlcih0dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2VzdFRvb2xUaXAuYXR0cigndG9vbHRpcCcsIHR0VmFsKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgICBjbG9zZXN0VG9vbFRpcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZScsICcuZmxkLW11bHRpcGxlJywgZSA9PiB7XG4gICAgICBsZXQgbmV3VHlwZSA9IGUudGFyZ2V0LmNoZWNrZWQgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcblxuICAgICAgJChlLnRhcmdldClcbiAgICAgIC5wYXJlbnRzKCcuZm9ybS1lbGVtZW50czplcSgwKScpXG4gICAgICAuZmluZCgnLnNvcnRhYmxlLW9wdGlvbnMgaW5wdXQub3B0aW9uLXNlbGVjdGVkJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBlLnRhcmdldC50eXBlID0gbmV3VHlwZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9ybWF0IG5hbWUgYXR0cmlidXRlXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdibHVyJywgJ2lucHV0LmZsZC1uYW1lJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSBfaGVscGVycy5zYWZlbmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICQoZS50YXJnZXQpXG4gICAgICAgIC5hZGRDbGFzcygnZmllbGQtZXJyb3InKVxuICAgICAgICAuYXR0cigncGxhY2Vob2xkZXInLCBvcHRzLm1lc3NhZ2VzLmNhbm5vdEJlRW1wdHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2ZpZWxkLWVycm9yJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2JsdXInLCAnaW5wdXQuZmxkLW1heGxlbmd0aCcsIGUgPT4ge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSBfaGVscGVycy5mb3JjZU51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBDb3B5IGZpZWxkXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5pY29uLWNvcHknLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgY3VycmVudEl0ZW0gPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoJ2xpJyk7XG4gICAgICBsZXQgJGNsb25lID0gY2xvbmVJdGVtKGN1cnJlbnRJdGVtKTtcbiAgICAgICRjbG9uZS5pbnNlcnRBZnRlcihjdXJyZW50SXRlbSk7XG4gICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRjbG9uZSk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBEZWxldGUgZmllbGRcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmRlbGV0ZS1jb25maXJtJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICAgICAgfTtcblxuICAgICAgbGV0IGRlbGV0ZUlEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgICAgY29uc3QgJGZpZWxkID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVJRCkpO1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbENsb3NlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkZmllbGQucmVtb3ZlQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgICB9LCBmYWxzZSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgc3VyZSB0aGV5IHdhbnQgdG8gcmVtb3ZlIHRoZSBmaWVsZFxuICAgICAgaWYgKG9wdHMuZmllbGRSZW1vdmVXYXJuKSB7XG4gICAgICAgIGxldCB3YXJuSDMgPSB1dGlscy5tYXJrdXAoJ2gzJywgb3B0cy5tZXNzYWdlcy53YXJuaW5nKTtcbiAgICAgICAgbGV0IHdhcm5NZXNzYWdlID0gdXRpbHMubWFya3VwKCdwJywgb3B0cy5tZXNzYWdlcy5maWVsZFJlbW92ZVdhcm5pbmcpO1xuICAgICAgICBfaGVscGVycy5jb25maXJtKFt3YXJuSDMsIHdhcm5NZXNzYWdlXSwgKCkgPT5cbiAgICAgICAgICBfaGVscGVycy5yZW1vdmVGaWVsZChkZWxldGVJRCksIGNvb3Jkcyk7XG4gICAgICAgICRmaWVsZC5hZGRDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9oZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBidXR0b24gc3R5bGUgc2VsZWN0aW9uXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuc3R5bGUtd3JhcCBidXR0b24nLCBlID0+IHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcbiAgICAgIGxldCBzdHlsZVZhbCA9ICRidXR0b24udmFsKCk7XG4gICAgICBsZXQgJGJ0blN0eWxlID0gJGJ1dHRvbi5wYXJlbnQoKS5wcmV2KCcuYnRuLXN0eWxlJyk7XG4gICAgICAkYnRuU3R5bGUudmFsKHN0eWxlVmFsKTtcbiAgICAgICRidXR0b24uc2libGluZ3MoJy5idG4nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICRidXR0b24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRidG5TdHlsZS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIHRvZ2dsZSByZXF1aXJlZCBhc3Rlcmlza1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnLmZsZC1yZXF1aXJlZCcsIGUgPT4ge1xuICAgICAgJChlLnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKS5maW5kKCcucmVxdWlyZWQtYXN0ZXJpc2snKS50b2dnbGUoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIHRvZ2dsZSByb2xlcyB2aXNpYmlsaXR5XG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICdpbnB1dC5mbGQtYWNjZXNzJywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IHJvbGVzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKS5maW5kKCcuYXZhaWxhYmxlLXJvbGVzJyk7XG4gICAgICBsZXQgZW5hYmxlUm9sZXNDQiA9ICQoZS50YXJnZXQpO1xuICAgICAgcm9sZXMuc2xpZGVUb2dnbGUoMjUwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFlbmFibGVSb2xlc0NCLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgcm9sZXMpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggYSBjYWxsYmFjayB0byBhZGQgbmV3IG9wdGlvbnNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJy5hZGQtb3B0JywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0ICRvcHRpb25XcmFwID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmZpZWxkLW9wdGlvbnMnKTtcbiAgICAgIGxldCAkbXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgJG9wdGlvbldyYXApO1xuICAgICAgbGV0ICRmaXJzdE9wdGlvbiA9ICQoJy5vcHRpb24tc2VsZWN0ZWQ6ZXEoMCknLCAkb3B0aW9uV3JhcCk7XG4gICAgICBsZXQgaXNNdWx0aXBsZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoJG11bHRpcGxlLmxlbmd0aCkge1xuICAgICAgICBpc011bHRpcGxlID0gJG11bHRpcGxlLnByb3AoJ2NoZWNrZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzTXVsdGlwbGUgPSAoJGZpcnN0T3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBuYW1lID0gJGZpcnN0T3B0aW9uLmF0dHIoJ25hbWUnKTtcblxuICAgICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkb3B0aW9uV3JhcCkuYXBwZW5kKHNlbGVjdEZpZWxkT3B0aW9ucyhuYW1lLCBmYWxzZSwgaXNNdWx0aXBsZSkpO1xuICAgIH0pO1xuXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdtb3VzZW92ZXIgbW91c2VvdXQnLCAnLnJlbW92ZSwgLmRlbC1idXR0b24nLCBlID0+XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpLnRvZ2dsZUNsYXNzKCdkZWxldGUnKSk7XG5cbiAgICBpZiAob3B0cy5zaG93QWN0aW9uQnV0dG9ucykge1xuICAgICAgLy8gVmlldyBYTUxcbiAgICAgIC8vIGxldCB4bWxCdXR0b24gPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZybWJJRCArICctdmlldy1kYXRhJykpO1xuICAgICAgLy8geG1sQnV0dG9uLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gICBfaGVscGVycy5zaG93RGF0YSgpO1xuICAgICAgLy8gfSk7XG5cbiAgICAgIC8vIENsZWFyIGFsbCBmaWVsZHMgaW4gZm9ybSBlZGl0b3JcbiAgICAgIC8vIGxldCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZybWJJRH0tY2xlYXItYWxsYCk7XG4gICAgICAvLyBjbGVhckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgLy8gICBsZXQgZmllbGRzID0gJCgnbGkuZm9ybS1maWVsZCcsIGZvcm1CdWlsZGVyLnN0YWdlKTtcbiAgICAgIC8vICAgbGV0IGJ1dHRvblBvc2l0aW9uID0gY2xlYXJCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAvLyAgIGxldCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAvLyAgIGxldCBjb29yZHMgPSB7XG4gICAgICAvLyAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgIC8vICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgICAgLy8gICB9O1xuXG4gICAgICAvLyAgIGlmIChmaWVsZHMubGVuZ3RoKSB7XG4gICAgICAvLyAgICAgX2hlbHBlcnMuY29uZmlybShvcHRzLm1lc3NhZ2VzLmNsZWFyQWxsTWVzc2FnZSwgZnVuY3Rpb24oKSB7XG4gICAgICAvLyAgICAgICBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMoKTtcbiAgICAgIC8vICAgICAgIG9wdHMubm90aWZ5LnN1Y2Nlc3Mob3B0cy5tZXNzYWdlcy5hbGxGaWVsZHNSZW1vdmVkKTtcbiAgICAgIC8vICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgIC8vICAgICAgIG9wdHMub25DbGVhckFsbCgpO1xuICAgICAgLy8gICAgIH0sIGNvb3Jkcyk7XG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgX2hlbHBlcnMuZGlhbG9nKCdUaGVyZSBhcmUgbm8gZmllbGRzIHRvIGNsZWFyJywgY29vcmRzKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfTtcblxuICAgICAgLy8gU2F2ZSBJZGVhIFRlbXBsYXRlXG4gICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtmcm1iSUR9LXNhdmVgKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgLy8gICBvcHRzLm9uU2F2ZShfaGVscGVycy5zYXZlKCkpO1xuICAgICAgLy8gfTtcbiAgICB9XG5cbiAgICBfaGVscGVycy5nZXREYXRhKCk7XG4gICAgbG9hZEZpZWxkcygpO1xuXG4gICAgJHNvcnRhYmxlRmllbGRzLmNzcygnbWluLWhlaWdodCcsICRjYlVMLmhlaWdodCgpKTtcblxuICAgIC8vIElmIG9wdGlvbiBzZXQsIGNvbnRyb2xzIHdpbGwgcmVtYWluIGluIHZpZXcgaW4gZWRpdG9yXG4gICAgaWYgKG9wdHMuc3RpY2t5Q29udHJvbHMuZW5hYmxlKSB7XG4gICAgICBfaGVscGVycy5zdGlja3lDb250cm9scygkc29ydGFibGVGaWVsZHMpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmxvYWRlZCk7XG5cbiAgICAvLyBNYWtlIGFjdGlvbnMgYWNjZXNzaWJsZVxuICAgIGZvcm1CdWlsZGVyLmFjdGlvbnMgPSB7XG4gICAgICBjbGVhckZpZWxkczogX2hlbHBlcnMucmVtb3ZlQWxsZmllbGRzLFxuICAgICAgc2hvd0RhdGE6IF9oZWxwZXJzLnNob3dEYXRhLFxuICAgICAgc2F2ZTogX2hlbHBlcnMuc2F2ZSxcbiAgICAgIGFkZEZpZWxkOiAoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgIF9oZWxwZXJzLnN0b3BJbmRleCA9IGZvcm1CdWlsZGVyLnN0YWdlLmNoaWxkcmVuLmxlbmd0aCA/IGluZGV4IDogdW5kZWZpbmVkO1xuICAgICAgICBwcmVwRmllbGRWYXJzKGZpZWxkKTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMuZmllbGRBZGRlZCk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlRmllbGQ6IF9oZWxwZXJzLnJlbW92ZUZpZWxkLFxuICAgICAgZ2V0RGF0YTogKHR5cGUgPSAnanMnKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gZm9ybUJ1aWxkZXIuc3RhZ2U7XG4gICAgICAgIGNvbnN0IGggPSBfaGVscGVycztcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBqczogKCkgPT4gaC5wcmVwRGF0YShzdGFnZSksXG4gICAgICAgICAgeG1sOiAoKSA9PiBoLnhtbFNhdmUoc3RhZ2UpLFxuICAgICAgICAgIGpzb246ICgpID0+IHdpbmRvdy5KU09OLnN0cmluZ2lmeShoLnByZXBEYXRhKHN0YWdlKSwgbnVsbCwgJ1xcdCcpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGRhdGFbdHlwZV0oKTtcbiAgICAgIH0sXG4gICAgICBzZXREYXRhOiBmb3JtRGF0YSA9PiB7XG4gICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcygpO1xuICAgICAgICBfaGVscGVycy5nZXREYXRhKGZvcm1EYXRhKTtcbiAgICAgICAgbG9hZEZpZWxkcygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3JtQnVpbGRlci5pMThuID0ge1xuICAgICAgc2V0TGFuZzogYXN5bmMgbG9jYWxlID0+IHtcbiAgICAgICAgbGV0IG5ld0xhbmcgPSBhd2FpdCBmb3JtQnVpbGRlci5taTE4bi5zZXRDdXJyZW50LmNhbGwoZm9ybUJ1aWxkZXIubWkxOG4sIGxvY2FsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0xhbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZm9ybUJ1aWxkZXI7XG4gIH07XG5cbiAgJC5mbi5mb3JtQnVpbGRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgbGV0IGVsZW1zID0gdGhpcztcbiAgICByZXR1cm4gZWxlbXMuZWFjaCgoaSkgPT4ge1xuICAgICAgbGV0IGZvcm1CdWlsZGVyID0gbmV3IEZvcm1CdWlsZGVyKG9wdGlvbnMsIGVsZW1zW2ldKTtcbiAgICAgICQoZWxlbXNbaV0pLmRhdGEoJ2Zvcm1CdWlsZGVyJywgZm9ybUJ1aWxkZXIpO1xuXG4gICAgICByZXR1cm4gZm9ybUJ1aWxkZXI7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zIHNwZWNpZmljIHRvIGZvcm1CdWlsZGVyLlxuICogQ2FsbGVkIGZvcm0gZm9ybUJ1aWxkZXJcbiAqIEBwYXJhbSAge09iamVjdH0gICBvcHRzXG4gKiBAcGFyYW0gIHtJbnN0YW5jZX0gZm9ybUJ1aWxkZXJcbiAqIEByZXR1cm4ge09iamVjdH0gaGVscGVyIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBoZWxwZXJzKG9wdHMsIGZvcm1CdWlsZGVyKSB7XG4gIGNvbnN0IGkxOG4gPSBmb3JtQnVpbGRlci5taTE4bjtcbiAgY29uc3QgdXRpbHMgPSBmb3JtQnVpbGRlci51dGlscztcblxuICBsZXQgX2hlbHBlcnMgPSB7XG4gICAgZG9DYW5jZWw6IGZhbHNlXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgY29udmVydHMgbWVzc3kgYGNsI3NzTmFtZXNgIGludG8gdmFsaWQgYGNsYXNzLW5hbWVzYFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IGh5cGhlbmF0ZWQgc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy5tYWtlQ2xhc3NOYW1lID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICByZXR1cm4gdXRpbHMuaHlwaGVuQ2FzZShzdHIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBtb2JpbGUgY2xhc3NcbiAgICogQHRvZG8gZmluZCBjc3Mgb25seSBzb2x1dGlvblxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IE1vYmlsZSBjbGFzcyBhZGRlZCB0byBmb3JtQnVpbGRlclxuICAgKi9cbiAgX2hlbHBlcnMubW9iaWxlQ2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbW9iaWxlQ2xhc3MgPSAnJztcbiAgICAoZnVuY3Rpb24oYSkge1xuICAgICAgaWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSB7XG4gICAgICAgIG1vYmlsZUNsYXNzID0gJyBmYi1tb2JpbGUnO1xuICAgICAgfVxuICAgIH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xuICAgIHJldHVybiBtb2JpbGVDbGFzcztcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBkcmFnIGJlZ2luc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICovXG4gIF9oZWxwZXJzLnN0YXJ0TW92aW5nID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgdWkuaXRlbS5zaG93KCkuYWRkQ2xhc3MoJ21vdmluZycpO1xuICAgIF9oZWxwZXJzLnN0YXJ0SW5kZXggPSAkKCdsaScsIHRoaXMpLmluZGV4KHVpLml0ZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igd2hlbiBhIGRyYWcgZW5kc1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gdWlcbiAgICovXG4gIF9oZWxwZXJzLnN0b3BNb3ZpbmcgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICB1aS5pdGVtLnJlbW92ZUNsYXNzKCdtb3ZpbmcnKTtcbiAgICBpZiAoX2hlbHBlcnMuZG9DYW5jZWwpIHtcbiAgICAgICQodWkuc2VuZGVyKS5zb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgICAkKHRoaXMpLnNvcnRhYmxlKCdjYW5jZWwnKTtcbiAgICB9XG4gICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIGpRdWVyeSBVSSBzb3J0YWJsZSBiZWZvcmVTdG9wIGNhbGxiYWNrIHVzZWQgZm9yIGJvdGggbGlzdHMuXG4gICAqIExvZ2ljIGZvciBjYW5jZWxpbmcgdGhlIHNvcnQgb3IgZHJvcC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfaGVscGVycy5iZWZvcmVTdG9wID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG4gICAgbGV0IGxhc3RJbmRleCA9IGZvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBsZXQgY2FuY2VsQXJyYXkgPSBbXTtcbiAgICBfaGVscGVycy5zdG9wSW5kZXggPSB1aS5wbGFjZWhvbGRlci5pbmRleCgpIC0gMTtcblxuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzICYmIHVpLml0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoJ2ZybWItY29udHJvbCcpKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goX2hlbHBlcnMuc3RvcEluZGV4ID09PSAwKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5hcHBlbmQpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goKF9oZWxwZXJzLnN0b3BJbmRleCArIDEpID09PSBsYXN0SW5kZXgpO1xuICAgIH1cblxuICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYWtlIHN0cmluZ3Mgc2FmZSB0byBiZSB1c2VkIGFzIGNsYXNzZXNcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgc3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICBjb252ZXJ0ZXIgc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy5zYWZlbmFtZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvW15hLXpBLVowLTlcXC1dL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdHJpcHMgbm9uLW51bWJlcnMgZnJvbSBhIG51bWJlciBvbmx5IGlucHV0XG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc3RyIHN0cmluZyB3aXRoIHBvc3NpYmxlIG51bWJlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBzdHJpbmcgd2l0aG91dCBudW1iZXJzXG4gICAqL1xuICBfaGVscGVycy5mb3JjZU51bWJlciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgfTtcblxuICAvKipcbiAgICogaGlkZSBhbmQgc2hvdyBtb3VzZSB0cmFja2luZyB0b29sdGlwcywgb25seSB1c2VkIGZvciBkaXNhYmxlZFxuICAgKiBmaWVsZHMgaW4gdGhlIGVkaXRvci5cbiAgICpcbiAgICogQHRvZG8gICByZW1vdmUgb3IgcmVmYWN0b3IgdG8gbWFrZSBiZXR0ZXIgdXNlXG4gICAqIEBwYXJhbSAge09iamVjdH0gdHQgalF1ZXJ5IG9wdGlvbiB3aXRoIG5leHRlZCB0b29sdGlwXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfaGVscGVycy5pbml0VG9vbHRpcCA9IGZ1bmN0aW9uKHR0KSB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHR0LmZpbmQoJy50b29sdGlwJyk7XG4gICAgdHQubW91c2VlbnRlcihmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0b29sdGlwLm91dGVyV2lkdGgoKSA+IDIwMCkge1xuICAgICAgICB0b29sdGlwLmFkZENsYXNzKCdtYXgtd2lkdGgnKTtcbiAgICAgIH1cbiAgICAgIHRvb2x0aXAuY3NzKCdsZWZ0JywgdHQud2lkdGgoKSArIDE0KTtcbiAgICAgIHRvb2x0aXAuc3RvcCh0cnVlLCB0cnVlKS5mYWRlSW4oJ2Zhc3QnKTtcbiAgICB9KS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xuICAgICAgdHQuZmluZCgnLnRvb2x0aXAnKS5zdG9wKHRydWUsIHRydWUpLmZhZGVPdXQoJ2Zhc3QnKTtcbiAgICB9KTtcbiAgICB0b29sdGlwLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gZ2V0IGVsZW1lbnQgdHlwZSBhbmQgc3VidHlwZVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICRmaWVsZFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IHt0eXBlOiAnZmllbGRUeXBlJywgc3VidHlwZTogJ2ZpZWxkU3ViVHlwZSd9XG4gICAqL1xuICBfaGVscGVycy5nZXRUeXBlcyA9IGZ1bmN0aW9uKCRmaWVsZCkge1xuICAgIGxldCB0eXBlcyA9IHtcbiAgICAgICAgdHlwZTogJGZpZWxkLmF0dHIoJ3R5cGUnKVxuICAgICAgfTtcbiAgICBsZXQgc3VidHlwZSA9ICQoJy5mbGQtc3VidHlwZScsICRmaWVsZCkudmFsKCk7XG5cbiAgICBpZiAoc3VidHlwZSAhPT0gdHlwZXMudHlwZSkge1xuICAgICAgdHlwZXMuc3VidHlwZSA9IHN1YnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgb3B0aW9uIGRhdGEgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZCBqUXVlcnkgZmllbGQgb2JqZWN0XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgQXJyYXkgb2Ygb3B0aW9uIHZhbHVlc1xuICAgKi9cbiAgX2hlbHBlcnMuZmllbGRPcHRpb25EYXRhID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMgbGknLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGxldCAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gJCgnLm9wdGlvbi1zZWxlY3RlZCcsICRvcHRpb24pLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgbGV0IGF0dHJzID0ge1xuICAgICAgICAgIGxhYmVsOiAkKCcub3B0aW9uLWxhYmVsJywgJG9wdGlvbikudmFsKCksXG4gICAgICAgICAgdmFsdWU6ICQoJy5vcHRpb24tdmFsdWUnLCAkb3B0aW9uKS52YWwoKVxuICAgICAgICB9O1xuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5wdXNoKGF0dHJzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBYTUwgc2F2ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZvcm0gc29ydGFibGVGaWVsZHMgbm9kZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHhtbCBpbiBzdHJpbmdcbiAgICovXG4gIF9oZWxwZXJzLnhtbFNhdmUgPSBmdW5jdGlvbihmb3JtKSB7XG4gICAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQgZm9ybURhdGEgPSBfaGVscGVycy5wcmVwRGF0YShmb3JtKTtcbiAgICBsZXQgeG1sID0gWyc8Zm9ybS10ZW1wbGF0ZT5cXG5cXHQ8ZmllbGRzPiddO1xuXG4gICAgdXRpbHMuZm9yRWFjaChmb3JtRGF0YSwgZnVuY3Rpb24oZmllbGRJbmRleCwgZmllbGQpIHtcbiAgICAgIGxldCBmaWVsZENvbnRlbnQgPSBudWxsO1xuXG4gICAgICAvLyBIYW5kbGUgb3B0aW9uc1xuICAgICAgaWYgKGZpZWxkLnR5cGUubWF0Y2goLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXApLykpIHtcbiAgICAgICAgbGV0IG9wdGlvbkRhdGEgPSBmaWVsZC52YWx1ZXM7XG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IG0oJ29wdGlvbicsIG9wdGlvbkRhdGFbaV0ubGFiZWwsIG9wdGlvbkRhdGFbaV0pLm91dGVySFRNTDtcbiAgICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdFxcdCcgKyBvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMucHVzaCgnXFxuXFx0XFx0Jyk7XG5cbiAgICAgICAgZmllbGRDb250ZW50ID0gb3B0aW9ucy5qb2luKCcnKTtcbiAgICAgICAgZGVsZXRlIGZpZWxkLnZhbHVlcztcbiAgICAgIH1cblxuICAgICAgbGV0IHhtbEZpZWxkID0gbSgnZmllbGQnLCBmaWVsZENvbnRlbnQsIGZpZWxkKTtcbiAgICAgIHhtbC5wdXNoKCdcXG5cXHRcXHQnICsgeG1sRmllbGQub3V0ZXJIVE1MKTtcbiAgICB9KTtcblxuICAgIHhtbC5wdXNoKCdcXG5cXHQ8L2ZpZWxkcz5cXG48L2Zvcm0tdGVtcGxhdGU+Jyk7XG5cbiAgICByZXR1cm4geG1sLmpvaW4oJycpO1xuICB9O1xuXG4gIF9oZWxwZXJzLnByZXBEYXRhID0gZnVuY3Rpb24oZm9ybSkge1xuICAgIGxldCBmb3JtRGF0YSA9IFtdO1xuXG4gICAgaWYgKGZvcm0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIGJ1aWxkIGRhdGEgb2JqZWN0XG4gICAgICB1dGlscy5mb3JFYWNoKGZvcm0uY2hpbGROb2RlcywgZnVuY3Rpb24oaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGxldCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICBpZiAoISgkZmllbGQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgICAgbGV0IGZpZWxkRGF0YSA9IF9oZWxwZXJzLmdldFR5cGVzKCRmaWVsZCk7XG4gICAgICAgICAgbGV0IHJvbGVWYWxzID0gJCgnLnJvbGVzLWZpZWxkOmNoZWNrZWQnLCBmaWVsZCkubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0pLmdldCgpO1xuXG4gICAgICAgICAgJCgnW2NsYXNzKj1cImZsZC1cIl0nLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UoYXR0ci5uYW1lKTtcbiAgICAgICAgICAgIGZpZWxkRGF0YVtuYW1lXSA9IGF0dHIudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGF0dHIuY2hlY2tlZCA6IGF0dHIudmFsdWU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAocm9sZVZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEucm9sZSA9IHJvbGVWYWxzLmpvaW4oJywnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZERhdGEuY2xhc3NOYW1lID0gZmllbGREYXRhLmNsYXNzTmFtZSB8fCBmaWVsZERhdGEuY2xhc3M7XG5cbiAgICAgICAgICBsZXQgbWF0Y2ggPSAvKD86XnxcXHMpYnRuLSguKj8pKD86XFxzfCQpL2cuZXhlYyhmaWVsZERhdGEuY2xhc3NOYW1lKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5zdHlsZSA9IG1hdGNoWzFdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YSA9IHV0aWxzLnRyaW1PYmooZmllbGREYXRhKTtcbiAgICAgICAgICBmaWVsZERhdGEgPSB1dGlscy5lc2NhcGVBdHRycyhmaWVsZERhdGEpO1xuXG4gICAgICAgICAgbGV0IG11bHRpcGxlRmllbGQgPSBmaWVsZERhdGFcbiAgICAgICAgICAudHlwZS5tYXRjaCgvKHNlbGVjdHxjaGVja2JveC1ncm91cHxyYWRpby1ncm91cCkvKTtcblxuICAgICAgICAgIGlmIChtdWx0aXBsZUZpZWxkKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEudmFsdWVzID0gX2hlbHBlcnMuZmllbGRPcHRpb25EYXRhKCRmaWVsZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH07XG5cbiAgX2hlbHBlcnMuanNvblNhdmUgPSBmb3JtID0+XG4gICAgd2luZG93LkpTT04uc3RyaW5naWZ5KF9oZWxwZXJzLnByZXBEYXRhKGZvcm0pLCBudWxsLCAnXFx0Jyk7XG5cbiAgX2hlbHBlcnMuZ2V0RGF0YSA9IGZvcm1EYXRhID0+IHtcbiAgICBsZXQgZGF0YSA9IGZvcm1EYXRhIHx8IG9wdHMuZm9ybURhdGE7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgc2V0RGF0YSA9IHtcbiAgICAgIHhtbDogZm9ybURhdGEgPT4gdXRpbHMucGFyc2VYTUwoZm9ybURhdGEpLFxuICAgICAganNvbjogZm9ybURhdGEgPT4gd2luZG93LkpTT04ucGFyc2UoZm9ybURhdGEpXG4gICAgfTtcblxuICAgIGZvcm1CdWlsZGVyLmZvcm1EYXRhID0gc2V0RGF0YVtvcHRzLmRhdGFUeXBlXShkYXRhKSB8fCBbXTtcblxuICAgIHJldHVybiBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogU2F2ZXMgYW5kIHJldHVybnMgZm9ybURhdGFcbiAgICogQHJldHVybiB7WE1MfEpTT059IGZvcm1EYXRhXG4gICAqL1xuICBfaGVscGVycy5zYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG5cbiAgICBsZXQgZG9TYXZlID0ge1xuICAgICAgeG1sOiBfaGVscGVycy54bWxTYXZlLFxuICAgICAganNvbjogX2hlbHBlcnMuanNvblNhdmVcbiAgICB9O1xuXG4gICAgLy8gc2F2ZSBhY3Rpb24gZm9yIGN1cnJlbnQgYGRhdGFUeXBlYFxuICAgIGZvcm1CdWlsZGVyLmZvcm1EYXRhID0gZG9TYXZlW29wdHMuZGF0YVR5cGVdKGZvcm0pO1xuXG4gICAgLy8gdHJpZ2dlciBmb3JtU2F2ZWQgZXZlbnRcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5mb3JtU2F2ZWQpO1xuICAgIHJldHVybiBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogaW5jcmVtZW50cyB0aGUgZmllbGQgaWRzIHdpdGggc3VwcG9ydCBmb3IgbXVsdGlwbGUgZWRpdG9yc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkIGZpZWxkIElEXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgaW5jcmVtZW50ZWQgZmllbGQgSURcbiAgICovXG4gIF9oZWxwZXJzLmluY3JlbWVudElkID0gZnVuY3Rpb24oaWQpIHtcbiAgICBsZXQgc3BsaXQgPSBpZC5sYXN0SW5kZXhPZignLScpO1xuICAgIGxldCBuZXdGaWVsZE51bWJlciA9IHBhcnNlSW50KGlkLnN1YnN0cmluZyhzcGxpdCArIDEpKSArIDE7XG4gICAgbGV0IGJhc2VTdHJpbmcgPSBpZC5zdWJzdHJpbmcoMCwgc3BsaXQpO1xuXG4gICAgcmV0dXJuIGAke2Jhc2VTdHJpbmd9LSR7bmV3RmllbGROdW1iZXJ9YDtcbiAgfTtcblxuICAvKipcbiAgICogQ29sbGVjdCBmaWVsZCBhdHRyaWJ1dGUgdmFsdWVzIGFuZCBjYWxsIGZpZWxkUHJldmlldyB0byBnZW5lcmF0ZSBwcmV2aWV3XG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgRE9NIGVsZW1lbnRcbiAgICovXG4gIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkQ2xhc3MgPSBmaWVsZC5hdHRyKCdjbGFzcycpO1xuICAgIGlmIChmaWVsZENsYXNzLmluZGV4T2YoJ3VpLXNvcnRhYmxlLWhhbmRsZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmaWVsZFR5cGUgPSAkKGZpZWxkKS5hdHRyKCd0eXBlJyk7XG4gICAgbGV0ICRwcmV2SG9sZGVyID0gJCgnLnByZXYtaG9sZGVyJywgZmllbGQpO1xuICAgIGxldCBwcmV2aWV3RGF0YSA9IHtcbiAgICAgIHR5cGU6IGZpZWxkVHlwZVxuICAgIH07XG4gICAgbGV0IHByZXZpZXc7XG5cbiAgICAkKCdbY2xhc3MqPVwiZmxkLVwiXScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UodGhpcy5uYW1lKTtcbiAgICAgIHByZXZpZXdEYXRhW25hbWVdID0gdGhpcy50eXBlID09PSAnY2hlY2tib3gnID8gdGhpcy5jaGVja2VkIDogdGhpcy52YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCBzdHlsZSA9ICQoJy5idG4tc3R5bGUnLCBmaWVsZCkudmFsKCk7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBwcmV2aWV3RGF0YS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIGlmIChmaWVsZFR5cGUubWF0Y2goLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXApLykpIHtcbiAgICAgIHByZXZpZXdEYXRhLnZhbHVlcyA9IFtdO1xuICAgICAgcHJldmlld0RhdGEubXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgZmllbGQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgb3B0aW9uID0ge307XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCB0aGlzKS5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJCgnLm9wdGlvbi12YWx1ZScsIHRoaXMpLnZhbCgpO1xuICAgICAgICBvcHRpb24ubGFiZWwgPSAkKCcub3B0aW9uLWxhYmVsJywgdGhpcykudmFsKCk7XG4gICAgICAgIHByZXZpZXdEYXRhLnZhbHVlcy5wdXNoKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2aWV3RGF0YSA9IHV0aWxzLnRyaW1PYmoocHJldmlld0RhdGEpO1xuXG4gICAgcHJldmlld0RhdGEuY2xhc3NOYW1lID0gX2hlbHBlcnMuY2xhc3NOYW1lcyhmaWVsZCwgcHJldmlld0RhdGEpO1xuICAgICQoJy5mbGQtY2xhc3NOYW1lJywgZmllbGQpLnZhbChwcmV2aWV3RGF0YS5jbGFzc05hbWUpO1xuXG4gICAgZmllbGQuZGF0YSgnZmllbGREYXRhJywgcHJldmlld0RhdGEpO1xuICAgIHByZXZpZXcgPSB1dGlscy5nZXRUZW1wbGF0ZShwcmV2aWV3RGF0YSwgb3B0cywgdHJ1ZSk7XG5cbiAgICB1dGlscy5lbXB0eSgkcHJldkhvbGRlclswXSk7XG4gICAgJHByZXZIb2xkZXJbMF0uYXBwZW5kQ2hpbGQocHJldmlldyk7XG4gICAgcHJldmlldy5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZFJlbmRlcmVkKTtcblxuICAgICQoJ2lucHV0W3RvZ2dsZV0nLCAkcHJldkhvbGRlcikua2NUb2dnbGUoKTtcbiAgfTtcblxuICBfaGVscGVycy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQgPSAyNTAsIGltbWVkaWF0ZSA9IGZhbHNlKSB7XG4gICAgbGV0IHRpbWVvdXQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBsZXQgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGEgY3VzdG9tIHRvb2x0aXAgZm9yIGRpc2FibGVkIGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxuICAgKi9cbiAgX2hlbHBlcnMuZGlzYWJsZWRUVCA9IHtcbiAgICBjbGFzc05hbWU6ICdmcm1iLXR0JyxcbiAgICBhZGQ6IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBsZXQgdGl0bGUgPSBvcHRzLm1lc3NhZ2VzLmZpZWxkTm9uRWRpdGFibGU7XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICBsZXQgdHQgPSB1dGlscy5tYXJrdXAoJ3AnLCB0aXRsZSwge2NsYXNzTmFtZTogX2hlbHBlcnMuZGlzYWJsZWRUVC5jbGFzc05hbWV9KTtcbiAgICAgICAgZmllbGQuYXBwZW5kKHR0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICQoJy5mcm1iLXR0JywgZmllbGQpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfaGVscGVycy5jbGFzc05hbWVzID0gZnVuY3Rpb24oZmllbGQsIHByZXZpZXdEYXRhKSB7XG4gICAgbGV0IGk7XG4gICAgbGV0IHR5cGUgPSBwcmV2aWV3RGF0YS50eXBlO1xuICAgIGxldCBzdHlsZSA9IHByZXZpZXdEYXRhLnN0eWxlO1xuICAgIGxldCBjbGFzc05hbWUgPSBmaWVsZFswXS5xdWVyeVNlbGVjdG9yKCcuZmxkLWNsYXNzTmFtZScpLnZhbHVlO1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgbGV0IHR5cGVzID0ge1xuICAgICAgYnV0dG9uOiAnYnRuJyxcbiAgICAgIHN1Ym1pdDogJ2J0bidcbiAgICB9O1xuXG4gICAgbGV0IHByaW1hcnlUeXBlID0gdHlwZXNbdHlwZV07XG5cbiAgICBpZiAocHJpbWFyeVR5cGUpIHtcbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoYCg/Ol58XFxzKSR7cHJpbWFyeVR5cGV9LSguKj8pKD86XFxzfCQpK2AsICdnJyk7XG4gICAgICAgICAgbGV0IG1hdGNoID0gY2xhc3Nlc1tpXS5tYXRjaChyZSk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlICsgJy0nICsgc3R5bGUpO1xuICAgICAgfVxuICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlKTtcbiAgICB9XG5cbiAgICAvLyByZXZlcnNlIHRoZSBhcnJheSB0byBwdXQgY3VzdG9tIGNsYXNzZXMgYXQgZW5kLFxuICAgIC8vIHJlbW92ZSBhbnkgZHVwbGljYXRlcywgY29udmVydCB0byBzdHJpbmcsIHJlbW92ZSB3aGl0ZXNwYWNlXG4gICAgcmV0dXJuIHV0aWxzLnVuaXF1ZShjbGFzc2VzKS5qb2luKCcgJykudHJpbSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW5kIG9wZW4gZGlhbG9nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3ZlcmxheSBFeGlzdGluZyBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGRpYWxvZyAgRXhpc3RpbmcgZGlhbG9nXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUNvbmZpcm0gPSBmdW5jdGlvbihvdmVybGF5LCBkaWFsb2cpIHtcbiAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItb3ZlcmxheScpWzBdO1xuICAgIH1cbiAgICBpZiAoIWRpYWxvZykge1xuICAgICAgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1idWlsZGVyLWRpYWxvZycpWzBdO1xuICAgIH1cbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5tb2RhbENsb3NlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxheW91dCBkYXRhIGJhc2VkIG9uIGNvbnRyb2xQb3NpdGlvbiBvcHRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSBjb250cm9sUG9zaXRpb24gJ2xlZnQnIG9yICdyaWdodCdcbiAgICogQHJldHVybiB7T2JqZWN0fSBsYXlvdXQgb2JqZWN0XG4gICAqL1xuICBfaGVscGVycy5lZGl0b3JMYXlvdXQgPSBmdW5jdGlvbihjb250cm9sUG9zaXRpb24pIHtcbiAgICBsZXQgbGF5b3V0TWFwID0ge1xuICAgICAgbGVmdDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtcmlnaHQnLFxuICAgICAgICBjb250cm9sczogJ3B1bGwtbGVmdCdcbiAgICAgIH0sXG4gICAgICByaWdodDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtbGVmdCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1yaWdodCdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGxheW91dE1hcFtjb250cm9sUG9zaXRpb25dID8gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gOiAnJztcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBvdmVybGF5IHRvIHRoZSBwYWdlLiBVc2VkIGZvciBtb2RhbHMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIE9iamVjdFxuICAgKi9cbiAgX2hlbHBlcnMuc2hvd092ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgb3ZlcmxheSA9IHV0aWxzLm1hcmt1cCgnZGl2JywgbnVsbCwge1xuICAgICAgY2xhc3NOYW1lOiAnZm9ybS1idWlsZGVyLW92ZXJsYXknXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgIG92ZXJsYXkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2hlbHBlcnMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfTtcblxuICAvKipcbiAgICogQ3VzdG9tIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbWVzc2FnZSAgIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7RnVuY30gIHllc0FjdGlvbiBjYWxsYmFjayB0byBmaXJlIGlmIHRoZXkgY29uZmlybVxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgbG9jYXRpb24gdG8gcHV0IHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIEN1c3RvbSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICBSZWZlcmVuY2UgdG8gdGhlIG1vZGFsXG4gICAqL1xuICBfaGVscGVycy5jb25maXJtID0gKG1lc3NhZ2UsIHllc0FjdGlvbiwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSA9PiB7XG4gICAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQgb3ZlcmxheSA9IF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG4gICAgbGV0IHllcyA9IG0oJ2J1dHRvbicsIG9wdHMubWVzc2FnZXMueWVzLCB7XG4gICAgICBjbGFzc05hbWU6ICd5ZXMgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSdcbiAgICB9KTtcbiAgICBsZXQgbm8gPSBtKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLm5vLCB7XG4gICAgICBjbGFzc05hbWU6ICdubyBidG4gYnRuLWRhbmdlciBidG4tc20nXG4gICAgfSk7XG5cbiAgICBuby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHllcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB5ZXNBY3Rpb24oKTtcbiAgICAgIF9oZWxwZXJzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgbGV0IGJ0bldyYXAgPSBtKCdkaXYnLCBbbm8sIHllc10sIHtjbGFzc05hbWU6ICdidXR0b24td3JhcCd9KTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICBsZXQgbWluaU1vZGFsID0gbSgnZGl2JywgW21lc3NhZ2UsIGJ0bldyYXBdLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9KTtcbiAgICBpZiAoIWNvb3Jkcykge1xuICAgICAgY29vcmRzID0ge1xuICAgICAgICBwYWdlWDogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSAvIDIsXG4gICAgICAgIHBhZ2VZOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCkgLyAyXG4gICAgICB9O1xuICAgICAgbWluaU1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWluaU1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uZWQnKTtcbiAgICB9XG5cbiAgICBtaW5pTW9kYWwuc3R5bGUubGVmdCA9IGNvb3Jkcy5wYWdlWCArICdweCc7XG4gICAgbWluaU1vZGFsLnN0eWxlLnRvcCA9IGNvb3Jkcy5wYWdlWSArICdweCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1pbmlNb2RhbCk7XG5cbiAgICB5ZXMuZm9jdXMoKTtcbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQb3B1cCBkaWFsb2cgdGhlIGRvZXMgbm90IHJlcXVpcmUgY29uZmlybWF0aW9uLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8RE9NfEFycmF5fSAgY29udGVudFxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgZmFsc2UgaWYgbm8gY29vcmRzIGFyZSBwcm92aWRlZC4gV2l0aG91dCBjb29yZGluYXRlc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGNlbnRlciBzY3JlZW4uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGNsYXNzTmFtZSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8gdGhlIGRpYWxvZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgZG9tXG4gICAqL1xuICBfaGVscGVycy5kaWFsb2cgPSBmdW5jdGlvbihjb250ZW50LCBjb29yZHMgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycpIHtcbiAgICBfaGVscGVycy5zaG93T3ZlcmxheSgpO1xuXG4gICAgY2xhc3NOYW1lID0gJ2Zvcm0tYnVpbGRlci1kaWFsb2cgJyArIGNsYXNzTmFtZTtcblxuICAgIGxldCBtaW5pTW9kYWwgPSB1dGlscy5tYXJrdXAoJ2RpdicsIGNvbnRlbnQsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgIGlmICghY29vcmRzKSB7XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIC8gMixcbiAgICAgICAgcGFnZVk6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcbiAgICAgIH07XG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pTW9kYWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xuICAgIH1cblxuICAgIG1pbmlNb2RhbC5zdHlsZS5sZWZ0ID0gY29vcmRzLnBhZ2VYICsgJ3B4JztcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWluaU1vZGFsKTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLm1vZGFsT3BlbmVkKTtcblxuICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignZGF0YS1kaWFsb2cnKSAhPT0gLTEpIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLnZpZXdEYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBmaWVsZHMgZnJvbSB0aGUgZm9ybVxuICAgKi9cbiAgX2hlbHBlcnMucmVtb3ZlQWxsZmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQnVpbGRlci5mb3JtSUQpO1xuICAgIGxldCBmaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmZvcm0tZmllbGQnKTtcbiAgICBsZXQgJGZpZWxkcyA9ICQoZmllbGRzKTtcbiAgICBsZXQgbWFya0VtcHR5QXJyYXkgPSBbXTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIG1hcmtFbXB0eUFycmF5LnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmICghbWFya0VtcHR5QXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICBmb3JtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgIGZvcm0ucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvbnRlbnQgPSBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQ7XG4gICAgfVxuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdyZW1vdmluZycpO1xuXG4gICAgbGV0IG91dGVySGVpZ2h0ID0gMDtcbiAgICAkZmllbGRzLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgb3V0ZXJIZWlnaHQgKz0gJCgkZmllbGRzW2ldKS5vdXRlckhlaWdodCgpICsgMztcbiAgICB9KTtcblxuICAgIGZpZWxkc1swXS5zdHlsZS5tYXJnaW5Ub3AgPSAoLW91dGVySGVpZ2h0KSArICdweCc7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGZpZWxkcy5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCkuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZpbmcnKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9LCA0MDApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB1c2VyIHJlLW9yZGVycyB0aGUgZWxlbWVudHMgdGhlaXIgb3JkZXIgc2hvdWxkIGJlIHNhdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGNiVUwgb3VyIGxpc3Qgb2YgZWxlbWVudHNcbiAgICovXG4gIF9oZWxwZXJzLnNldEZpZWxkT3JkZXIgPSBmdW5jdGlvbigkY2JVTCkge1xuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmaWVsZE9yZGVyID0ge307XG4gICAgJGNiVUwuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICBmaWVsZE9yZGVyW2luZGV4XSA9ICQoZWxlbWVudCkuZGF0YSgnYXR0cnMnKS50eXBlO1xuICAgIH0pO1xuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmaWVsZE9yZGVyJywgd2luZG93LkpTT04uc3RyaW5naWZ5KGZpZWxkT3JkZXIpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlb3JkZXIgdGhlIGNvbnRyb2xzIGlmIHRoZSB1c2VyIGhhcyBwcmV2aW91c2x5IG9yZGVyZWQgdGhlbS5cbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGZybWJGaWVsZHNcbiAgICogQHJldHVybiB7QXJyYXl9IG9yZGVyZWQgZmllbGRzXG4gICAqL1xuICBfaGVscGVycy5vcmRlckZpZWxkcyA9IGZ1bmN0aW9uKGZybWJGaWVsZHMpIHtcbiAgICBsZXQgZmllbGRPcmRlciA9IGZhbHNlO1xuICAgIGxldCBuZXdPcmRlckZpZWxkcyA9IFtdO1xuXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgICBmaWVsZE9yZGVyID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZpZWxkT3JkZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZE9yZGVyKSB7XG4gICAgICBsZXQgY29udHJvbE9yZGVyID0gb3B0cy5jb250cm9sT3JkZXIuY29uY2F0KGZybWJGaWVsZHMubWFwKGZpZWxkID0+XG4gICAgICAgIGZpZWxkLmF0dHJzLnR5cGUpKTtcbiAgICAgIGZpZWxkT3JkZXIgPSB1dGlscy51bmlxdWUoY29udHJvbE9yZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5KU09OLnBhcnNlKGZpZWxkT3JkZXIpO1xuICAgICAgZmllbGRPcmRlciA9IE9iamVjdC5rZXlzKGZpZWxkT3JkZXIpLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBmaWVsZE9yZGVyW2ldO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmaWVsZE9yZGVyLmZvckVhY2goKGZpZWxkVHlwZSkgPT4ge1xuICAgICAgbGV0IGZpZWxkID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmF0dHJzLnR5cGUgPT09IGZpZWxkVHlwZTtcbiAgICAgIH0pWzBdO1xuICAgICAgbmV3T3JkZXJGaWVsZHMucHVzaChmaWVsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3T3JkZXJGaWVsZHMuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZSBmaWVsZHMgYmVpbmcgZWRpdGluZ1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YWdlXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUFsbEVkaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0gJCgnPiBsaS5lZGl0aW5nJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgIGNvbnN0IHRvZ2dsZUJ0bnMgPSAkKCcudG9nZ2xlLWZvcm0nLCBmb3JtQnVpbGRlci5zdGFnZSk7XG4gICAgY29uc3QgZWRpdFBhbmVscyA9ICQoJy5mcm0taG9sZGVyJywgZmllbGRzKTtcblxuICAgIHRvZ2dsZUJ0bnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICBmaWVsZHMucmVtb3ZlQ2xhc3MoJ2VkaXRpbmcnKTtcbiAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZHMpLnNob3coKTtcbiAgICBlZGl0UGFuZWxzLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZWRpdCBtb2RlIGZvciB0aGUgZ2l2ZW4gZmllbGRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZElkXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGFuaW1hdGVcbiAgICovXG4gIF9oZWxwZXJzLnRvZ2dsZUVkaXQgPSBmdW5jdGlvbihmaWVsZElkLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gJCgnLnRvZ2dsZS1mb3JtJywgZmllbGQpO1xuICAgIGNvbnN0IGVkaXRQYW5lbCA9ICQoJy5mcm0taG9sZGVyJywgZmllbGQpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcbiAgICB0b2dnbGVCdG4udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnNsaWRlVG9nZ2xlKDI1MCk7XG4gICAgICBlZGl0UGFuZWwuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnRvZ2dsZSgpO1xuICAgICAgZWRpdFBhbmVsLnRvZ2dsZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ29udHJvbHMgZm9sbG93IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIF9oZWxwZXJzLnN0aWNreUNvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0ICRjYldyYXAgPSAkKGZvcm1CdWlsZGVyLmNvbnRyb2xzKS5wYXJlbnQoKTtcbiAgICBjb25zdCAkc3RhZ2VXcmFwID0gJChmb3JtQnVpbGRlci5zdGFnZSkucGFyZW50KCk7XG4gICAgY29uc3QgY2JXaWR0aCA9ICRjYldyYXAud2lkdGgoKTtcbiAgICBjb25zdCBjYlBvc2l0aW9uID0gZm9ybUJ1aWxkZXIuY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0IHNjcm9sbFRvcCA9ICQoZXZ0LnRhcmdldCkuc2Nyb2xsVG9wKCk7XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPiAkc3RhZ2VXcmFwLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBsZXQgY2JTdHlsZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB3aWR0aDogY2JXaWR0aCxcbiAgICAgICAgICB0b3A6IG9wdHMuc3RpY2t5Q29udHJvbHMub2Zmc2V0LnRvcCxcbiAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgICAgIGxlZnQ6IGNiUG9zaXRpb24ubGVmdFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjYk9mZnNldCA9ICRjYldyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBzdGFnZU9mZnNldCA9ICRzdGFnZVdyYXAub2Zmc2V0KCk7XG4gICAgICAgIGxldCBjYkJvdHRvbSA9IGNiT2Zmc2V0LnRvcCArICRjYldyYXAuaGVpZ2h0KCk7XG4gICAgICAgIGxldCBzdGFnZUJvdHRvbSA9IHN0YWdlT2Zmc2V0LnRvcCArICRzdGFnZVdyYXAuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGNiQm90dG9tID4gc3RhZ2VCb3R0b20gJiYgKGNiT2Zmc2V0LnRvcCAhPT0gc3RhZ2VPZmZzZXQudG9wKSkge1xuICAgICAgICAgICRjYldyYXAuY3NzKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGxlZnQ6ICdhdXRvJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNiQm90dG9tIDwgc3RhZ2VCb3R0b20gfHwgKGNiQm90dG9tID09PSBzdGFnZUJvdHRvbSAmJiBjYk9mZnNldC50b3AgPiBzY3JvbGxUb3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3MoY2JTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1CdWlsZGVyLmNvbnRyb2xzLnBhcmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBPcGVuIGEgZGlhbG9nIHdpdGggdGhlIGZvcm0ncyBkYXRhXG4gICAqL1xuICBfaGVscGVycy5zaG93RGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuICAgIGNvbnN0IGRhdGEgPSB1dGlscy5lc2NhcGVIdG1sKGZvcm1CdWlsZGVyLmZvcm1EYXRhKTtcbiAgICBjb25zdCBjb2RlID0gbSgnY29kZScsIGRhdGEsIHtjbGFzc05hbWU6IGBmb3JtRGF0YS0ke29wdHMuZGF0YVR5cGV9YH0pO1xuXG4gICAgX2hlbHBlcnMuZGlhbG9nKG0oJ3ByZScsIGNvZGUpLCBudWxsLCAnZGF0YS1kaWFsb2cnKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGEgZmllbGQgZnJvbSB0aGUgc3RhZ2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgZmllbGRJRCBJRCBvZiB0aGUgZmllbGQgdG8gYmUgcmVtb3ZlZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBmaWVsZFJlbW92ZWQgcmV0dXJucyB0cnVlIGlmIGZpZWxkIGlzIHJlbW92ZWRcbiAgICovXG4gIF9oZWxwZXJzLnJlbW92ZUZpZWxkID0gKGZpZWxkSUQpID0+IHtcbiAgICBsZXQgZmllbGRSZW1vdmVkID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCk7XG4gICAgY29uc3QgZmllbGRzID0gZm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWZpZWxkJyk7XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybignTm8gZmllbGRzIHRvIHJlbW92ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghZmllbGRJRCkge1xuICAgICAgbGV0IGF2YWlsYWJsZUlkcyA9IFtdLnNsaWNlLmNhbGwoZmllbGRzKS5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5pZDtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS53YXJuKCdmaWVsZElEIHJlcXVpcmVkIHRvIHVzZSBgcmVtb3ZlRmllbGRgIGFjdGlvbi4nKTtcbiAgICAgIGNvbnNvbGUud2FybignQXZhaWxhYmxlIElEczogJyArIGF2YWlsYWJsZUlkcy5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSUQpO1xuICAgIGNvbnN0ICRmaWVsZCA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJRCkpO1xuICAgIGlmICghZmllbGQpIHtcbiAgICAgIGNvbnNvbGUud2FybignRmllbGQgbm90IGZvdW5kJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJGZpZWxkLnNsaWRlVXAoMjUwLCBmdW5jdGlvbigpIHtcbiAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgICRmaWVsZC5yZW1vdmUoKTtcbiAgICAgIGZpZWxkUmVtb3ZlZCA9IHRydWU7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICBpZiAoIWZvcm0uY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHN0YWdlV3JhcCA9IGZvcm0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgIHN0YWdlV3JhcC5kYXRhc2V0LmNvbnRlbnQgPSBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZFJlbW92ZWQpO1xuICAgIHJldHVybiBmaWVsZFJlbW92ZWQ7XG4gIH07XG5cbiAgX2hlbHBlcnMucHJvY2Vzc0FjdGlvbkJ1dHRvbnMgPSBidXR0b25EYXRhID0+IHtcbiAgICBsZXQgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQge2xhYmVsLCBldmVudHMsIC4uLmF0dHJzfSA9IGJ1dHRvbkRhdGE7XG4gICAgY29uc3QgYnV0dG9uID0gbSgnYnV0dG9uJywgbGFiZWwsIGF0dHJzKTtcblxuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldnQgPT4gZXZlbnRzW2V2ZW50XShldnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgX2hlbHBlcnMucHJvY2Vzc1N1YnR5cGVzID0gc3VidHlwZU9wdHMgPT4ge1xuICAgIGNvbnN0IHN1YnR5cGVGb3JtYXQgPSBzdWJ0eXBlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYWJlbDogaTE4bi5nZXQoc3VidHlwZSksXG4gICAgICAgICAgdmFsdWU6IHN1YnR5cGVcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRTdWJ0eXBlcyA9IHtcbiAgICAgICAgdGV4dDogWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ2NvbG9yJywgJ3RlbCddLFxuICAgICAgICBoZWFkZXI6IFsnaDEnLCAnaDInLCAnaDMnXSxcbiAgICAgICAgYnV0dG9uOiBbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgICAgICAgcGFyYWdyYXBoOiBbJ3AnLCAnYWRkcmVzcycsICdibG9ja3F1b3RlJywgJ2NhbnZhcycsICdvdXRwdXQnXSxcbiAgICAgICAgdGV4dGFyZWE6IFsndGV4dGFyZWEnLCAncXVpbGwnLCAndGlueW1jZSddXG4gICAgICB9O1xuXG4gICAgICBsZXQgc3VidHlwZXMgPSB1dGlscy5tZXJnZShkZWZhdWx0U3VidHlwZXMsIHN1YnR5cGVPcHRzKTtcblxuICAgICAgZm9yIChsZXQgc3VidHlwZSBpbiBzdWJ0eXBlcykge1xuICAgICAgICBpZiAoc3VidHlwZXMuaGFzT3duUHJvcGVydHkoc3VidHlwZSkpIHtcbiAgICAgICAgICBzdWJ0eXBlc1tzdWJ0eXBlXSA9IHN1YnR5cGVzW3N1YnR5cGVdLm1hcChzdWJ0eXBlRm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VidHlwZXM7XG4gIH07XG5cbiAgcmV0dXJuIF9oZWxwZXJzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG4iLCJjb25zdCBrY1RvZ2dsZSA9ICgpID0+IHtcbiAgY29uc3QgVG9nZ2xlID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgdGhlbWU6ICdmcmVzaCcsXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICBvbjogJ09uJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgb3B0cyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBsZXQgJGtjVG9nZ2xlID0gJCgnPGRpdiBjbGFzcz1cImtjLXRvZ2dsZVwiLz4nKVxuICAgICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbWVudClcbiAgICAgICAgLmFwcGVuZChlbGVtZW50KTtcblxuICAgICRrY1RvZ2dsZS50b2dnbGVDbGFzcygnb24nLCBlbGVtZW50LmlzKCc6Y2hlY2tlZCcpKTtcblxuICAgIGxldCBrY3RPbiA9IGA8ZGl2IGNsYXNzPVwia2N0LW9uXCI+JHtvcHRzLm1lc3NhZ2VzLm9ufTwvZGl2PmA7XG4gICAgbGV0IGtjdE9mZiA9IGA8ZGl2IGNsYXNzPVwia2N0LW9mZlwiPiR7b3B0cy5tZXNzYWdlcy5vZmZ9PC9kaXY+YDtcbiAgICBsZXQga2N0SGFuZGxlID0gJzxkaXYgY2xhc3M9XCJrY3QtaGFuZGxlXCI+PC9kaXY+JztcbiAgICBsZXQga2N0SW5uZXIgPSBgPGRpdiBjbGFzcz1cImtjdC1pbm5lclwiPiR7a2N0T259JHtrY3RIYW5kbGV9JHtrY3RPZmZ9PC9kaXY+YDtcblxuICAgICRrY1RvZ2dsZS5hcHBlbmQoa2N0SW5uZXIpO1xuXG4gICAgJGtjVG9nZ2xlLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgZWxlbWVudC5hdHRyKCdjaGVja2VkJywgIWVsZW1lbnQuYXR0cignY2hlY2tlZCcpKTtcbiAgICAgICRrY1RvZ2dsZS50b2dnbGVDbGFzcygnb24nKTtcbiAgICB9KTtcbiAgfTtcblxuICBqUXVlcnkuZm4ua2NUb2dnbGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gdGhpcztcbiAgICByZXR1cm4gdG9nZ2xlLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IGVsZW1lbnQgPSAkKHRvZ2dsZVtpXSk7XG4gICAgICBpZiAoZWxlbWVudC5kYXRhKCdrY1RvZ2dsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBrY1RvZ2dsZSA9IG5ldyBUb2dnbGUoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICBlbGVtZW50LmRhdGEoJ2tjVG9nZ2xlJywga2NUb2dnbGUpO1xuICAgIH0pO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrY1RvZ2dsZSgpO1xuIiwiLyoqXG4gKiBQb2x5ZmlsbHMgZm9yIG9sZGVyIGJyb3dzZXJzIGFuZCBhZGRlZCBmdW5jdGlvbmFsaXR5XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwb2x5ZmlsbHMoKSB7XG4gIC8vIEVsZW1lbnQucmVtb3ZlKCkgcG9seWZpbGxcbiAgaWYgKCEoJ3JlbW92ZScgaW4gRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRXZlbnQgcG9seWZpbGxcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5FdmVudCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KGV2dCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgfVxuXG4gIC8vIE9iamVjdC5hc3NpZ24gcG9seWZpbGxcbiAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldCA9IE9iamVjdCh0YXJnZXQpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbHMoKTtcbiIsIi8qKlxuICogQ3Jvc3MgZmlsZSB1dGlsaXRpZXMgZm9yIHdvcmtpbmcgd2l0aCBhcnJheXMsXG4gKiBzb3J0aW5nIGFuZCBvdGhlciBmdW4gc3R1ZmZcbiAqIEByZXR1cm4ge09iamVjdH0gZmJVdGlsc1xuICovXG4vLyBmdW5jdGlvbiB1dGlscygpIHtcbiAgY29uc3QgZmJVdGlscyA9IHt9O1xuICB3aW5kb3cuZmJMb2FkZWQgPSB7XG4gICAganM6IFtdLFxuICAgIGNzczogW11cbiAgfTtcblxuICAvLyBjbGVhbmVyIHN5bnRheCBmb3IgdGVzdGluZyBpbmRleE9mIGVsZW1lbnRcbiAgZmJVdGlscy5pbkFycmF5ID0gZnVuY3Rpb24obmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgT2JqZWN0IHRyaW1tZWQgb2YgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqL1xuICBmYlV0aWxzLnRyaW1PYmogPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCB4bWxSZW1vdmUgPSBbXG4gICAgICBudWxsLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgJycsXG4gICAgICBmYWxzZSxcbiAgICAgICdmYWxzZSdcbiAgICBdO1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChmYlV0aWxzLmluQXJyYXkoYXR0cnNbYXR0cl0sIHhtbFJlbW92ZSkpIHtcbiAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGF0dHJzW2F0dHJdKSkge1xuICAgICAgICBpZiAoIWF0dHJzW2F0dHJdLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvKipcbiAgICogVGVzdCBpZiBhdHRyaWJ1dGUgaXMgYSB2YWxpZCBIVE1MIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGZiVXRpbHMudmFsaWRBdHRyID0gZnVuY3Rpb24oYXR0cikge1xuICAgIGxldCBpbnZhbGlkID0gW1xuICAgICAgJ3ZhbHVlcycsXG4gICAgICAnZW5hYmxlT3RoZXInLFxuICAgICAgJ290aGVyJyxcbiAgICAgICdsYWJlbCcsXG4gICAgICAvLyAnc3R5bGUnLFxuICAgICAgJ3N1YnR5cGUnXG4gICAgXTtcbiAgICByZXR1cm4gIWZiVXRpbHMuaW5BcnJheShhdHRyLCBpbnZhbGlkKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBhdHRycyBvYmplY3QgaW50byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIG9iamVjdCBvZiBhdHRyaWJ1dGVzIGZvciBtYXJrdXBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5hdHRyU3RyaW5nID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpICYmIGZiVXRpbHMudmFsaWRBdHRyKGF0dHIpKSB7XG4gICAgICAgIGF0dHIgPSBmYlV0aWxzLnNhZmVBdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIubmFtZSArIGF0dHIudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0cmlidXRlcy5qb2luKCcgJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXR0cmlidXRlcyB0byBtYXJrdXAgc2FmZSBzdHJpbmdzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIGZiVXRpbHMuc2FmZUF0dHIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBmYlV0aWxzLnNhZmVBdHRyTmFtZShuYW1lKTtcbiAgICBsZXQgdmFsU3RyaW5nO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsU3RyaW5nID0gZmJVdGlscy5lc2NhcGVBdHRyKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5yZXBsYWNlKCcsJywgJyAnKS50cmltKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUgPyBgPVwiJHt2YWxTdHJpbmd9XCJgIDogJyc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgZmJVdGlscy5zYWZlQXR0ck5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbGV0IHNhZmVBdHRyID0ge1xuICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnXG4gICAgfTtcblxuICAgIHJldHVybiBzYWZlQXR0cltuYW1lXSB8fCBmYlV0aWxzLmh5cGhlbkNhc2UobmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5ncyBpbnRvIGxvd2VyY2FzZS1oeXBoZW5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5oeXBoZW5DYXNlID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbigkMSkge1xuICAgICAgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL14tKy9nLCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGNvbnZlcnQgYSBoeXBoZW5hdGVkIHN0cmluZyB0byBjYW1lbENhc2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5jYW1lbENhc2UgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbihtLCB3KSB7XG4gICAgICByZXR1cm4gdy50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgY29udGVudCB0eXBlXG4gICAqIEBwYXJhbSAge05vZGUgfCBTdHJpbmcgfCBBcnJheSB8IE9iamVjdH0gY29udGVudFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlIGZvciBtYXBwaW5nXG4gICAqL1xuICBmYlV0aWxzLmNvbnRlbnRUeXBlID0gY29udGVudCA9PiB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgY29udGVudDtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIE5vZGUgfHwgY29udGVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0eXBlID0gJ25vZGUnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgdHlwZSA9ICdhcnJheSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnRzIHRvIGFuIGVsZW1lbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRzICBvYmplY3QgZnVsbCBvZiBldmVudHMgZWcuIHtjbGljazogZXZ0ID0+IGNhbGxiYWNrfVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmJVdGlscy5iaW5kRXZlbnRzID0gKGVsZW1lbnQsIGV2ZW50cykgPT4ge1xuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZ0ID0+IGV2ZW50c1tldmVudF0oZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1hcmt1cCB3cmFwcGVyIHdoZXJlIG5lZWRlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICB0YWdcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fE9iamVjdH0gY29udGVudCB3ZSB3cmFwIHRoaXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgYXR0cnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gRWxlbWVudFxuICAgKi9cbiAgZmJVdGlscy5tYXJrdXAgPSBmdW5jdGlvbih0YWcsIGNvbnRlbnQgPSAnJywgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgbGV0IGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50KTtcbiAgICBsZXQge2V2ZW50cywgLi4uYXR0cnN9ID0gYXR0cmlidXRlcztcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIGNvbnN0IGFwcGVuZENvbnRlbnQgPSB7XG4gICAgICBzdHJpbmc6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZpZWxkLmlubmVySFRNTCArPSBjb250ZW50O1xuICAgICAgfSxcbiAgICAgIG9iamVjdDogKGNvbmZpZykgPT4ge1xuICAgICAgICBsZXQge3RhZywgY29udGVudCwgLi4uZGF0YX0gPSBjb25maWc7XG4gICAgICAgIHJldHVybiBmaWVsZC5hcHBlbmRDaGlsZChmYlV0aWxzLm1hcmt1cCh0YWcsIGNvbnRlbnQsIGRhdGEpKTtcbiAgICAgIH0sXG4gICAgICBub2RlOiAoY29udGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICB9LFxuICAgICAgYXJyYXk6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50W2ldKTtcbiAgICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50W2ldKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uOiBjb250ZW50ID0+IHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICAgICAgY29udGVudFR5cGUgPSBmYlV0aWxzLmNvbnRlbnRUeXBlKGNvbnRlbnQpO1xuICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50KTtcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQ6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcih0YWcsIGNvbnRlbnQsIGF0dHJpYnV0ZXMpO1xuICAgICAgfSxcbiAgICB9O1xuXG5cbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBmYlV0aWxzLnNhZmVBdHRyTmFtZShhdHRyKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0uY2FsbCh0aGlzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICBmYlV0aWxzLmJpbmRFdmVudHMoZmllbGQsIGV2ZW50cyk7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH07XG4gIGNvbnN0IG0gPSBmYlV0aWxzLm1hcmt1cDtcblxuICAvKipcbiAgICogQ29udmVydCBodG1sIGVsZW1lbnQgYXR0cmlidXRlcyB0byBrZXkvdmFsdWUgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbSBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGV4OiB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIGZiVXRpbHMucGFyc2VBdHRycyA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICBsZXQgYXR0cnMgPSBlbGVtLmF0dHJpYnV0ZXM7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBmYlV0aWxzLmZvckVhY2goYXR0cnMsIGF0dHIgPT4ge1xuICAgICAgbGV0IGF0dHJWYWwgPSBhdHRyc1thdHRyXS52YWx1ZTtcbiAgICAgIGlmIChhdHRyVmFsLm1hdGNoKC9mYWxzZXx0cnVlL2cpKSB7XG4gICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCA9PT0gJ3RydWUnKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0clZhbC5tYXRjaCgvdW5kZWZpbmVkL2cpKSB7XG4gICAgICAgIGF0dHJWYWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRyVmFsKSB7XG4gICAgICAgIGRhdGFbYXR0cnNbYXR0cl0ubmFtZV0gPSBhdHRyVmFsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgZmllbGQgb3B0aW9ucyB0byBvcHRpb25EYXRhXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgIERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgIG9wdGlvbkRhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VPcHRpb25zID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZmllbGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29wdGlvbicpO1xuICAgIGxldCBvcHRpb25EYXRhID0ge307XG4gICAgbGV0IGRhdGEgPSBbXTtcblxuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wdGlvbkRhdGEgPSBmYlV0aWxzLnBhcnNlQXR0cnMob3B0aW9uc1tpXSk7XG4gICAgICAgIG9wdGlvbkRhdGEubGFiZWwgPSBvcHRpb25zW2ldLnRleHRDb250ZW50O1xuICAgICAgICBkYXRhLnB1c2gob3B0aW9uRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlIFhNTCBmb3JtRGF0YVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHhtbFN0cmluZ1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICBmb3JtRGF0YSBhcnJheVxuICAgKi9cbiAgZmJVdGlscy5wYXJzZVhNTCA9IGZ1bmN0aW9uKHhtbFN0cmluZykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgbGV0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCAndGV4dC94bWwnKTtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcblxuICAgIGlmICh4bWwpIHtcbiAgICAgIGxldCBmaWVsZHMgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpZWxkJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gZmJVdGlscy5wYXJzZUF0dHJzKGZpZWxkc1tpXSk7XG5cbiAgICAgICAgaWYgKGZpZWxkc1tpXS5jaGlsZHJlbiAmJiBmaWVsZHNbaV0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgZmllbGREYXRhLnZhbHVlcyA9IGZiVXRpbHMucGFyc2VPcHRpb25zKGZpZWxkc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFc2NhcGUgbWFya3VwIHNvIGl0IGNhbiBiZSBkaXNwbGF5ZWQgcmF0aGVyIHRoYW4gcmVuZGVyZWRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBodG1sIG1hcmt1cFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgZXNjYXBlZCBodG1sXG4gICAqL1xuICBmYlV0aWxzLmVzY2FwZUh0bWwgPSBmdW5jdGlvbihodG1sKSB7XG4gICAgbGV0IGVzY2FwZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVzY2FwZUVsZW1lbnQudGV4dENvbnRlbnQgPSBodG1sO1xuICAgIHJldHVybiBlc2NhcGVFbGVtZW50LmlubmVySFRNTDtcbiAgfTtcblxuICAvLyBFc2NhcGUgYW4gYXR0cmlidXRlXG4gIGZiVXRpbHMuZXNjYXBlQXR0ciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGxldCBtYXRjaCA9IHtcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7J1xuICAgIH07XG5cbiAgICBjb25zdCByZXBsYWNlVGFnID0gdGFnID0+IG1hdGNoW3RhZ10gfHwgdGFnO1xuXG4gICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykgPyBzdHIucmVwbGFjZSgvW1wiJjw+XS9nLCByZXBsYWNlVGFnKSA6IHN0cjtcbiAgfTtcblxuICAvLyBFc2NhcGUgYXR0cmlidXRlc1xuICBmYlV0aWxzLmVzY2FwZUF0dHJzID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgYXR0cnNbYXR0cl0gPSBmYlV0aWxzLmVzY2FwZUF0dHIoYXR0cnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvLyBmb3JFYWNoIHRoYXQgY2FuIGJlIHVzZWQgb24gbm9kZUxpc3RcbiAgZmJVdGlscy5mb3JFYWNoID0gZnVuY3Rpb24oYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTsgLy8gcGFzc2VzIGJhY2sgc3R1ZmYgd2UgbmVlZFxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheSBvZiBlbGVtZW50c1xuICAgKiBAcGFyYW0gIHtBcnJheX0gYXJyYXkgIGFycmF5IHdpdGggcG9zc2libGUgZHVwbGljYXRlc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIGFycmF5IHdpdGggb25seSB1bmlxdWUgdmFsdWVzXG4gICAqL1xuICBmYlV0aWxzLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigoZWxlbSwgcG9zLCBhcnIpID0+IHtcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihlbGVtKSA9PT0gcG9zO1xuICAgIH0pO1xuICB9O1xuXG4gIGZiVXRpbHMubWFrZUxhYmVsID0gKGRhdGEsIGxhYmVsID0gJycsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgICBsZXQgbGFiZWxDb250ZW50cyA9IFtkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCldO1xuXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3JlcXVpcmVkJykpIHtcbiAgICAgIGxhYmVsQ29udGVudHMucHVzaChtKCdzcGFuJywgJyonLCB7Y2xhc3NOYW1lOiAncmVxdWlyZWQnfSkpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGFiZWxDb250ZW50cy5wdXNoKG0oJ3NwYW4nLCAnPycsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0b29sdGlwLWVsZW1lbnQnLFxuICAgICAgICAgIHRvb2x0aXA6IGRlc2NyaXB0aW9uXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbSgnbGFiZWwnLCBsYWJlbENvbnRlbnRzLCB7XG4gICAgICBmb3I6IGRhdGEuaWQsXG4gICAgICBjbGFzc05hbWU6IGBmYi0ke2RhdGEudHlwZX0tbGFiZWxgXG4gICAgfSk7XG4gIH07XG5cbiAgZmJVdGlscy50ZW1wbGF0ZU1hcCA9ICh0ZW1wbGF0ZXMsIHR5cGUsIGZhbGxiYWNrKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCB0ZW1wbGF0ZU1hcCA9IG5ldyBNYXAodGVtcGxhdGVzKTtcblxuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiB0ZW1wbGF0ZU1hcCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBpZihmYlV0aWxzLmluQXJyYXkodHlwZSwga2V5KSkge1xuICAgICAgICAgIHRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0ga2V5KSB7XG4gICAgICAgIHRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRlbXBsYXRlID0gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIERPTSBlbGVtZW50cyBmb3Igc2VsZWN0LCBjaGVja2JveC1ncm91cCBhbmQgcmFkaW8tZ3JvdXAuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGREYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgIERPTSBlbGVtZW50c1xuICAgKi9cbiAgZmJVdGlscy5zZWxlY3RUZW1wbGF0ZSA9IChmaWVsZERhdGEpID0+IHtcbiAgICBsZXQgdGVtcGxhdGU7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICBsZXQge3ZhbHVlcywgcGxhY2Vob2xkZXIsIHR5cGUsIGlubGluZSwgb3RoZXIsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGxldCBvcHRpb25UeXBlID0gdHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG4gICAgbGV0IGlzU2VsZWN0ID0gdHlwZSA9PT0gJ3NlbGVjdCc7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICBpZiAocGxhY2Vob2xkZXIgJiYgaXNTZWxlY3QpIHtcbiAgICAgICAgb3B0aW9ucy5wdXNoKG0oJ29wdGlvbicsIHBsYWNlaG9sZGVyLCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWQ6IG51bGxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQge2xhYmVsID0gJycsIC4uLm9wdGlvbkF0dHJzfSA9IHZhbHVlc1tpXTtcblxuICAgICAgICBvcHRpb25BdHRycy5pZCA9IGAke2RhdGEuaWR9LSR7aX1gO1xuXG4gICAgICAgIGlmICghb3B0aW9uQXR0cnMuc2VsZWN0ZWQgfHwgcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICBkZWxldGUgb3B0aW9uQXR0cnMuc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICAgICAgbGV0IG8gPSBtKCdvcHRpb24nLCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbCksIG9wdGlvbkF0dHJzKTtcbiAgICAgICAgICBvcHRpb25zLnB1c2gobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHdyYXBwZXJDbGFzcyA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG4gICAgICAgICAgbGV0IGlucHV0ID0gbSgnaW5wdXQnLCBudWxsLCBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBvcHRpb25BdHRycykpO1xuICAgICAgICAgIGxldCBpbnB1dExhYmVsID0gbSgnbGFiZWwnLCBbaW5wdXQsIGxhYmVsXSwge2Zvcjogb3B0aW9uQXR0cnMuaWR9KTtcbiAgICAgICAgICBsZXQgd3JhcHBlciA9IG0oJ2RpdicsIGlucHV0TGFiZWwsIHtjbGFzc05hbWU6IHdyYXBwZXJDbGFzc30pO1xuICAgICAgICAgIG9wdGlvbnMucHVzaCh3cmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU2VsZWN0ICYmIG90aGVyKSB7XG4gICAgICAgIGxldCBvdGhlck9wdGlvbkF0dHJzID0ge1xuICAgICAgICAgIGlkOiBgJHtkYXRhLmlkfS1vdGhlcmAsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgJHtkYXRhLmNsYXNzTmFtZX0gb3RoZXItb3B0aW9uYCxcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBmYlV0aWxzLm90aGVyT3B0aW9uQ0Iob3RoZXJPcHRpb25BdHRycy5pZClcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGxldCBsYWJlbCA9IG1pMThuLmN1cnJlbnQub3RoZXI7XG4gICAgICAgIGxldCB3cmFwcGVyQ2xhc3MgPSBvcHRpb25UeXBlO1xuICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgd3JhcHBlckNsYXNzICs9ICctaW5saW5lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIG90aGVyT3B0aW9uQXR0cnMpO1xuICAgICAgICBvcHRpb25BdHRycy50eXBlID0gb3B0aW9uVHlwZTtcblxuICAgICAgICBsZXQgb3RoZXJWYWxBdHRycyA9IHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgIGlkOiBgJHtvdGhlck9wdGlvbkF0dHJzLmlkfS12YWx1ZWAsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnb3RoZXItdmFsJ1xuICAgICAgICB9O1xuICAgICAgICBsZXQgb3RoZXJJbnB1dHMgPSBbXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvcHRpb25BdHRycyksXG4gICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ090aGVyJyksXG4gICAgICAgICAgbSgnaW5wdXQnLCBudWxsLCBvdGhlclZhbEF0dHJzKVxuICAgICAgICBdO1xuICAgICAgICBsZXQgaW5wdXRMYWJlbCA9IG0oJ2xhYmVsJywgb3RoZXJJbnB1dHMsIHtmb3I6IG9wdGlvbkF0dHJzLmlkfSk7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbSgnZGl2JywgaW5wdXRMYWJlbCwge2NsYXNzTmFtZTogd3JhcHBlckNsYXNzfSk7XG4gICAgICAgIG9wdGlvbnMucHVzaCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBbXG4gICAgICBbJ3NlbGVjdCcsXG4gICAgICAgICgpID0+IG0ob3B0aW9uVHlwZSwgb3B0aW9ucywgZGF0YSldLFxuICAgICAgW1snY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSxcbiAgICAgICAgKCkgPT4gbSgnZGl2Jywgb3B0aW9ucywge2NsYXNzTmFtZTogdHlwZX0pXVxuICAgIF07XG5cbiAgICByZXR1cm4gZmJVdGlscy50ZW1wbGF0ZU1hcCh0ZW1wbGF0ZXMsIHR5cGUpO1xuICB9O1xuXG4gIGZiVXRpbHMuZGVmYXVsdEZpZWxkID0gZmllbGREYXRhID0+IHtcbiAgICBsZXQge2xhYmVsLCBkZXNjcmlwdGlvbiwgc3VidHlwZSwgdHlwZSwgaWQsIGlzUHJldmlldywgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgaWYgKGlkKSB7XG4gICAgICBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgICB9XG4gICAgICBkYXRhLmlkID0gZGF0YS5uYW1lO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgIGRhdGEudGl0bGUgPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKHN1YnR5cGUpIHtcbiAgICAgIHR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBtKHR5cGUsIGxhYmVsLCBkYXRhKTtcbiAgfTtcblxuICAvKipcbiAgICogTG9hZHMgYW4gYXJyYXkgb2Ygc2NyaXB0cyB1c2luZyBqUXVlcnkncyBgZ2V0U2NyaXB0YFxuICAgKiBAcGFyYW0gIHtBcnJheXxTdHJpbmd9ICBzY3JpcHRTY3IgICAgc2NyaXB0c1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGggICBvcHRpb25hbCB0byBsb2FkIGZvcm1cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgYSBwcm9taXNlXG4gICAqL1xuICBmYlV0aWxzLmdldFNjcmlwdHMgPSAoc2NyaXB0U2NyLCBwYXRoKSA9PiB7XG4gICAgY29uc3QgJCA9IGpRdWVyeTtcbiAgICBsZXQgX2FyciA9IFtdO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjcmlwdFNjcikpIHtcbiAgICAgIHNjcmlwdFNjciA9IFtzY3JpcHRTY3JdO1xuICAgIH1cblxuICAgIGlmICghZmJVdGlscy5pc0NhY2hlZChzY3JpcHRTY3IpKSB7XG4gICAgICBfYXJyID0gJC5tYXAoc2NyaXB0U2NyLCBzcmMgPT4ge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkYXRhVHlwZTogJ3NjcmlwdCcsXG4gICAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgICAgdXJsOiAocGF0aCB8fCAnJykgKyBzcmNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICQuYWpheChvcHRpb25zKS5kb25lKCgpID0+IHdpbmRvdy5mYkxvYWRlZC5qcy5wdXNoKHNyYykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2Fyci5wdXNoKCQuRGVmZXJyZWQoIGRlZmVycmVkID0+ICQoIGRlZmVycmVkLnJlc29sdmUgKSkpO1xuXG4gICAgcmV0dXJuICQud2hlbiguLi5fYXJyKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJlbW90ZSByZXNvdXJjZSBpcyBhbHJlYWR5IGxvYWRlZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IHNyYyAgdXJsIG9mIHJlbW90ZSBzY3JpcHQgb3IgY3NzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgdHlwZSAgICAgICAnanMnIG9yICdjc3MnXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgaXNDYWNoZWRcbiAgICovXG4gIGZiVXRpbHMuaXNDYWNoZWQgPSAoc3JjLCB0eXBlID0gJ2pzJykgPT4ge1xuICAgIGxldCBpc0NhY2hlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGNhY2hlID0gd2luZG93LmZiTG9hZGVkW3R5cGVdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpIHtcbiAgICAgIGlzQ2FjaGVkID0gc3JjLmV2ZXJ5KHMgPT4gZmJVdGlscy5pbkFycmF5KHMsIGNhY2hlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQ2FjaGVkID0gZmJVdGlscy5pbkFycmF5KHNyYywgY2FjaGUpO1xuICAgIH1cbiAgICByZXR1cm4gaXNDYWNoZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgc3R5bGVzaGVldHMgdG8gdGhlIGhlYWRcbiAgICogQHBhcmFtICB7QXJyYXl9IHNjcmlwdFNjclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGhcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZiVXRpbHMuZ2V0U3R5bGVzID0gKHNjcmlwdFNjciwgcGF0aCkgPT4ge1xuICAgIGlmIChmYlV0aWxzLmlzQ2FjaGVkKHNjcmlwdFNjciwgJ2NzcycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFwcGVuZFN0eWxlID0gKGhyZWYpID0+IHtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIHdpbmRvdy5mYkxvYWRlZC5jc3MucHVzaChocmVmKTtcbiAgICB9O1xuICAgIHNjcmlwdFNjci5mb3JFYWNoKHNyYyA9PiBhcHBlbmRTdHlsZSgocGF0aCB8fCAnJykgKyBzcmMpKTtcbiAgfTtcblxuICBmYlV0aWxzLmxvbmdUZXh0VGVtcGxhdGUgPSBkYXRhID0+IHtcbiAgICBsZXQge3ZhbHVlLCAuLi5hdHRyc30gPSBkYXRhO1xuICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgIGZpZWxkOiBtKCd0ZXh0YXJlYScsIHZhbHVlLCBhdHRycylcbiAgICB9O1xuICAgIGxldCBlZGl0b3JzID0ge1xuICAgICAgdGlueW1jZToge1xuICAgICAgICBqczogWycvL2Nkbi50aW55bWNlLmNvbS80L3RpbnltY2UubWluLmpzJ10sXG4gICAgICAgIG9uUmVuZGVyOiAoZXZ0KSA9PiB7XG4gICAgICAgICAgZm9yICh0ZW1wbGF0ZS5maWVsZC5pZCBpbiB3aW5kb3cudGlueW1jZS5lZGl0b3JzKSB7XG4gICAgICAgICAgICB3aW5kb3cudGlueW1jZS5lZGl0b3JzW3RlbXBsYXRlLmZpZWxkLmlkXS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LnRpbnltY2UuaW5pdCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRlbXBsYXRlLmZpZWxkLFxuICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgY2hhcm1hcCBwcmludCBwcmV2aWV3IGFuY2hvcicsXG4gICAgICAgICAgICAgICdzZWFyY2hyZXBsYWNlIHZpc3VhbGJsb2NrcyBjb2RlIGZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAnaW5zZXJ0ZGF0ZXRpbWUgbWVkaWEgdGFibGUgY29udGV4dG1lbnUgcGFzdGUgY29kZSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0b29sYmFyOiAnaW5zZXJ0ZmlsZSB1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgbGluayBpbWFnZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHF1aWxsOiB7XG4gICAgICAgIGpzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLmpzJ10sXG4gICAgICAgIGNzczogWycvL2Nkbi5xdWlsbGpzLmNvbS8xLjEuMy9xdWlsbC5zbm93LmNzcyddLFxuICAgICAgICBvblJlbmRlcjogZXZ0ID0+IHtcbiAgICAgICAgICBuZXcgd2luZG93LlF1aWxsKHRlbXBsYXRlLmZpZWxkLCB7XG4gICAgICAgICAgICBtb2R1bGVzOiB7XG4gICAgICAgICAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAgICAgICAgICBbeydoZWFkZXInOiBbMSwgMiwgZmFsc2VdfV0sXG4gICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcbiAgICAgICAgICAgICAgICBbJ2ltYWdlJywgJ2NvZGUtYmxvY2snXVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGF0dHJzLnBsYWNlaG9sZGVyIHx8ICcnLFxuICAgICAgICAgICAgdGhlbWU6ICdzbm93J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRlbXBsYXRlLm9uUmVuZGVyID0gZWRpdG9yc1tkYXRhLnR5cGVdLm9uUmVuZGVyO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAncXVpbGwnKSB7XG4gICAgICB0ZW1wbGF0ZS5maWVsZCA9IG0oJ2RpdicsIG51bGwsIGF0dHJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblJlbmRlciA9ICgpID0+IHtcbiAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0pIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIG9uUmVuZGVyKTtcblxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcykge1xuICAgICAgICAgIGZiVXRpbHMuZ2V0U3R5bGVzKGVkaXRvcnNbZGF0YS50eXBlXS5jc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0uanMgJiYgIWZiVXRpbHMuaXNDYWNoZWQoZWRpdG9yc1tkYXRhLnR5cGVdLmpzKSkge1xuICAgICAgICAgIGZiVXRpbHMuZ2V0U2NyaXB0cyhlZGl0b3JzW2RhdGEudHlwZV0uanMpLmRvbmUodGVtcGxhdGUub25SZW5kZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlLm9uUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtmaWVsZDogdGVtcGxhdGUuZmllbGQsIG9uUmVuZGVyfTtcbiAgfTtcblxuICBmYlV0aWxzLmdldFRlbXBsYXRlID0gKGZpZWxkRGF0YSwgb3B0cykgPT4ge1xuICAgIGxldCB7bGFiZWwsIGRlc2NyaXB0aW9uLCBzdWJ0eXBlLCBpc1ByZXZpZXcsIG9uUmVuZGVyLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBsZXQgdGVtcGxhdGU7XG4gICAgbGV0IGZpZWxkO1xuXG4gICAgaWYgKGlzUHJldmlldykge1xuICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJy1wcmV2aWV3JztcbiAgICB9XG4gICAgZGF0YS5pZCA9IGRhdGEubmFtZTtcblxuICAgIGlmIChzdWJ0eXBlKSB7XG4gICAgICBkYXRhLnR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIGlmIChkYXRhLm11bHRpcGxlIHx8IGRhdGEudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJykge1xuICAgICAgZGF0YS5uYW1lID0gZGF0YS5uYW1lICsgJ1tdJztcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5yZXF1aXJlZCkge1xuICAgICAgZGF0YS5yZXF1aXJlZCA9IG51bGw7XG4gICAgICBkYXRhWydhcmlhLXJlcXVpcmVkJ10gPSAndHJ1ZSc7XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkTGFiZWwgPSBmYlV0aWxzLm1ha2VMYWJlbChkYXRhLCBsYWJlbCwgZGVzY3JpcHRpb24pO1xuXG4gICAgbGV0IHRlbXBsYXRlcyA9IFtcbiAgICAgIFtbJ3RleHQnLCAncGFzc3dvcmQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ2ZpbGUnLCAnY29sb3InLCAnZGF0ZScsICd0ZWwnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgbSgnaW5wdXQnLCBudWxsLCBkYXRhKV0sXG4gICAgICAgICAgICBvblJlbmRlcjogZmJVdGlscy5ub29wXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1snYnV0dG9uJywgJ3N1Ym1pdCcsICdyZXNldCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IG0oJ2J1dHRvbicsIGxhYmVsLCBkYXRhKSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbWydzZWxlY3QnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IGZiVXRpbHMuc2VsZWN0VGVtcGxhdGUoZGF0YSk7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBmaWVsZF0sXG4gICAgICAgICAgICBvblJlbmRlcjogZmJVdGlscy5ub29wXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dLFxuICAgICAgW1sndGV4dGFyZWEnLCAndGlueW1jZScsICdxdWlsbCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gZmJVdGlscy5sb25nVGV4dFRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgZmllbGQuZmllbGRdLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZpZWxkLm9uUmVuZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICAgIH1dXG4gICAgICBdO1xuXG4gICAgICB0ZW1wbGF0ZSA9IGZiVXRpbHMudGVtcGxhdGVNYXAoXG4gICAgICAgIHRlbXBsYXRlcyxcbiAgICAgICAgZGF0YS50eXBlLFxuICAgICAgICBmYlV0aWxzLmRlZmF1bHRGaWVsZChmaWVsZERhdGEpIC8vIGZhbGxiYWNrXG4gICAgICApO1xuXG4gICAgICBpZiAoZGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICBsZXQgd3JhcHBlckF0dHJzID0ge307XG4gICAgICAgIGlmIChkYXRhLmlkKSB7XG4gICAgICAgICAgd3JhcHBlckF0dHJzLmNsYXNzTmFtZSA9XG4gICAgICAgICAgYGZiLSR7ZGF0YS50eXBlfSBmb3JtLWdyb3VwIGZpZWxkLSR7ZGF0YS5pZH1gO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkID0gZmJVdGlscy5tYXJrdXAoJ2RpdicsIHRlbXBsYXRlLmZpZWxkLCB3cmFwcGVyQXR0cnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQgPSBmYlV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIHRlbXBsYXRlLm9uUmVuZGVyKTtcblxuICAgICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBwcmV2aWV3IG1hcmt1cFxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBmaWVsZERhdGFcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb3B0c1xuICAgKiBAcGFyYW0gIHtCb29sZWFufSBwcmV2aWV3XG4gICAqIEByZXR1cm4ge1N0cmluZ30gIHByZXZpZXcgbWFya3VwIGZvciBmaWVsZFxuICAgKi9cbiAgZmJVdGlscy5maWVsZFJlbmRlciA9IGZ1bmN0aW9uKGZpZWxkRGF0YSwgb3B0cywgcHJldmlldyA9IGZhbHNlKSB7XG4gICAgICBsZXQgZmllbGRNYXJrdXAgPSAnJztcbiAgICAgIGxldCBmaWVsZExhYmVsID0gJyc7XG4gICAgICBsZXQgb3B0aW9uc01hcmt1cCA9ICcnO1xuICAgICAgbGV0IGZpZWxkTGFiZWxUZXh0ID0gZmllbGREYXRhLmxhYmVsIHx8ICcnO1xuICAgICAgbGV0IGZpZWxkRGVzYyA9IGZpZWxkRGF0YS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICAgIGxldCBmaWVsZFJlcXVpcmVkID0gJyc7XG4gICAgICBsZXQgZmllbGRPcHRpb25zID0gZmllbGREYXRhLnZhbHVlcztcbiAgICAgIGZpZWxkRGF0YS5pc1ByZXZpZXcgPSBwcmV2aWV3O1xuICAgICAgbGV0IHRlbXBsYXRlID0gZmJVdGlscy5nZXRUZW1wbGF0ZShmaWVsZERhdGEsIG9wdHMpO1xuXG4gICAgICBmaWVsZERhdGEubmFtZSA9IHByZXZpZXcgPyBmaWVsZERhdGEubmFtZSArICctcHJldmlldycgOiBmaWVsZERhdGEubmFtZTtcbiAgICAgIGZpZWxkRGF0YS5pZCA9IGZpZWxkRGF0YS5uYW1lO1xuICAgICAgaWYgKGZpZWxkRGF0YS5tdWx0aXBsZSkge1xuICAgICAgICBmaWVsZERhdGEubmFtZSA9IGZpZWxkRGF0YS5uYW1lICsgJ1tdJztcbiAgICAgIH1cblxuICAgICAgZmllbGREYXRhLnR5cGUgPSBmaWVsZERhdGEuc3VidHlwZSB8fCBmaWVsZERhdGEudHlwZTtcblxuICAgICAgaWYgKGZpZWxkRGF0YS5yZXF1aXJlZCkge1xuICAgICAgICBmaWVsZERhdGEucmVxdWlyZWQgPSBudWxsO1xuICAgICAgICBmaWVsZERhdGFbJ2FyaWEtcmVxdWlyZWQnXSA9ICd0cnVlJztcbiAgICAgICAgZmllbGRSZXF1aXJlZCA9ICc8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj4nO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGREYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgIGlmIChmaWVsZERlc2MpIHtcbiAgICAgICAgICBmaWVsZERlc2MgPSBgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWVsZW1lbnRcIiB0b29sdGlwPVwiJHtmaWVsZERlc2N9XCI+Pzwvc3Bhbj5gO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkTGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7ZmllbGREYXRhLmlkfVwiIGNsYXNzPVwiZmItJHtmaWVsZERhdGEudHlwZX0tbGFiZWxcIj4ke2ZpZWxkTGFiZWxUZXh0fSAke2ZpZWxkUmVxdWlyZWR9ICR7ZmllbGREZXNjfTwvbGFiZWw+YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpZWxkTGFiZWxWYWwgPSBmaWVsZERhdGEubGFiZWw7XG5cbiAgICAgIGRlbGV0ZSBmaWVsZERhdGEubGFiZWw7XG4gICAgICBkZWxldGUgZmllbGREYXRhLmRlc2NyaXB0aW9uO1xuXG4gICAgICBsZXQgZmllbGREYXRhU3RyaW5nID0gZmJVdGlscy5hdHRyU3RyaW5nKGZpZWxkRGF0YSk7XG5cbiAgICAgIHN3aXRjaCAoZmllbGREYXRhLnR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICBjYXNlICdyaWNoLXRleHQnOlxuICAgICAgICAgIGRlbGV0ZSBmaWVsZERhdGEudHlwZTtcbiAgICAgICAgICBsZXQgZmllbGRWYWwgPSBmaWVsZERhdGEudmFsdWUgfHwgJyc7XG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfTx0ZXh0YXJlYSAke2ZpZWxkRGF0YVN0cmluZ30+JHtmaWVsZFZhbH08L3RleHRhcmVhPmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIC8vICAgbGV0IG9wdGlvbkF0dHJzU3RyaW5nO1xuICAgICAgICAvLyAgIGZpZWxkRGF0YS50eXBlID0gZmllbGREYXRhLnR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpO1xuXG4gICAgICAgIC8vICAgaWYgKGZpZWxkT3B0aW9ucykge1xuICAgICAgICAvLyAgICAgaWYgKGZpZWxkRGF0YS5wbGFjZWhvbGRlcikge1xuICAgICAgICAvLyAgICAgICBvcHRpb25zTWFya3VwICs9IGA8b3B0aW9uIGRpc2FibGVkIHNlbGVjdGVkPiR7ZmllbGREYXRhLnBsYWNlaG9sZGVyfTwvb3B0aW9uPmA7XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgIGlmICghZmllbGRPcHRpb25zW2ldLnNlbGVjdGVkIHx8IGZpZWxkRGF0YS5wbGFjZWhvbGRlcikge1xuICAgICAgICAvLyAgICAgICAgIGRlbGV0ZSBmaWVsZE9wdGlvbnNbaV0uc2VsZWN0ZWQ7XG4gICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgaWYgKCFmaWVsZE9wdGlvbnNbaV0ubGFiZWwpIHtcbiAgICAgICAgLy8gICAgICAgICBmaWVsZE9wdGlvbnNbaV0ubGFiZWwgPSAnJztcbiAgICAgICAgLy8gICAgICAgfVxuICAgICAgICAvLyAgICAgICBvcHRpb25BdHRyc1N0cmluZyA9IGZiVXRpbHMuYXR0clN0cmluZyhmaWVsZE9wdGlvbnNbaV0pO1xuICAgICAgICAvLyAgICAgICBvcHRpb25zTWFya3VwICs9IGA8b3B0aW9uICR7b3B0aW9uQXR0cnNTdHJpbmd9PiR7ZmllbGRPcHRpb25zW2ldLmxhYmVsfTwvb3B0aW9uPmA7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgfVxuXG4gICAgICAgIC8vICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfTxzZWxlY3QgJHtmaWVsZERhdGFTdHJpbmd9PiR7b3B0aW9uc01hcmt1cH08L3NlbGVjdD5gO1xuICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlICdjaGVja2JveC1ncm91cCc6XG4gICAgICAgIC8vIGNhc2UgJ3JhZGlvLWdyb3VwJzpcbiAgICAgICAgLy8gICBsZXQgb3B0aW9uQXR0cnM7XG4gICAgICAgIC8vICAgZmllbGREYXRhLnR5cGUgPSBmaWVsZERhdGEudHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG5cbiAgICAgICAgLy8gICBpZiAoZmllbGREYXRhLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgLy8gICAgIGZpZWxkRGF0YS5uYW1lID0gZmllbGREYXRhLm5hbWUgKyAnW10nO1xuICAgICAgICAvLyAgIH1cblxuICAgICAgICAvLyAgIGlmIChmaWVsZE9wdGlvbnMpIHtcbiAgICAgICAgLy8gICAgIGxldCBvcHRpb25BdHRyc1N0cmluZztcblxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZE9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgICAgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHt2YWx1ZTogJycsIGxhYmVsOiAnJ30sIGZpZWxkRGF0YSwgZmllbGRPcHRpb25zW2ldKTtcblxuICAgICAgICAvLyAgICAgICBpZiAob3B0aW9uQXR0cnMuc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gICAgICAgICBkZWxldGUgb3B0aW9uQXR0cnMuc2VsZWN0ZWQ7XG4gICAgICAgIC8vICAgICAgICAgb3B0aW9uQXR0cnMuY2hlY2tlZCA9IG51bGw7XG4gICAgICAgIC8vICAgICAgIH1cblxuICAgICAgICAvLyAgICAgICBvcHRpb25BdHRycy5pZCA9IGZpZWxkRGF0YS5pZCArICctJyArIGk7XG4gICAgICAgIC8vICAgICAgIG9wdGlvbkF0dHJzU3RyaW5nID0gZmJVdGlscy5hdHRyU3RyaW5nKG9wdGlvbkF0dHJzKTtcbiAgICAgICAgLy8gICAgICAgb3B0aW9uc01hcmt1cCArPSBgPGlucHV0ICR7b3B0aW9uQXR0cnNTdHJpbmd9IC8+IDxsYWJlbCBmb3I9XCIke29wdGlvbkF0dHJzLmlkfVwiPiR7b3B0aW9uQXR0cnMubGFiZWx9PC9sYWJlbD48YnI+YDtcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyAgICAgaWYgKGZpZWxkRGF0YS5vdGhlcikge1xuICAgICAgICAvLyAgICAgICBsZXQgb3RoZXJPcHRpb25BdHRycyA9IHtcbiAgICAgICAgLy8gICAgICAgICBpZDogZmllbGREYXRhLmlkICsgJy0nICsgJ290aGVyJyxcbiAgICAgICAgLy8gICAgICAgICBjbGFzc05hbWU6IGZpZWxkRGF0YS5jbGFzc05hbWUgKyAnIG90aGVyLW9wdGlvbicsXG4gICAgICAgIC8vICAgICAgICAgb25jbGljazogYGZiVXRpbHMub3RoZXJPcHRpb25DQignJHtmaWVsZERhdGEuaWR9LW90aGVyJylgXG4gICAgICAgIC8vICAgICAgIH07XG5cbiAgICAgICAgLy8gICAgICAgb3B0aW9uQXR0cnNTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcoT2JqZWN0LmFzc2lnbih7fSwgZmllbGREYXRhLCBvdGhlck9wdGlvbkF0dHJzKSk7XG5cbiAgICAgICAgLy8gICAgICAgb3B0aW9uc01hcmt1cCArPSBgPGlucHV0ICR7b3B0aW9uQXR0cnNTdHJpbmd9IC8+IDxsYWJlbCBmb3I9XCIke290aGVyT3B0aW9uQXR0cnMuaWR9XCI+JHtvcHRzLm1lc3NhZ2VzLm90aGVyfTwvbGFiZWw+IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCIke2ZpZWxkRGF0YS5uYW1lfVwiIGlkPVwiJHtvdGhlck9wdGlvbkF0dHJzLmlkfS12YWx1ZVwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIC8+YDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfTxkaXYgY2xhc3M9XCIke2ZpZWxkRGF0YS50eXBlfS1ncm91cFwiPiR7b3B0aW9uc01hcmt1cH08L2Rpdj5gO1xuICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlICd0ZXh0JzpcbiAgICAgICAgLy8gY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICAvLyBjYXNlICdlbWFpbCc6XG4gICAgICAgIC8vIGNhc2UgJ251bWJlcic6XG4gICAgICAgIC8vIGNhc2UgJ2ZpbGUnOlxuICAgICAgICAvLyBjYXNlICdoaWRkZW4nOlxuICAgICAgICAvLyBjYXNlICdkYXRlJzpcbiAgICAgICAgLy8gY2FzZSAndGVsJzpcbiAgICAgICAgLy8gY2FzZSAnYXV0b2NvbXBsZXRlJzpcbiAgICAgICAgLy8gICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9IDxpbnB1dCAke2ZpZWxkRGF0YVN0cmluZ30+YDtcbiAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgLy8gY2FzZSAnY29sb3InOlxuICAgICAgICAvLyAgIGZpZWxkTWFya3VwID0gYCR7ZmllbGRMYWJlbH0gPGlucHV0ICR7ZmllbGREYXRhU3RyaW5nfT4gJHtvcHRzLm1lc3NhZ2VzLnNlbGVjdENvbG9yfWA7XG4gICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgIGNhc2UgJ3N1Ym1pdCc6XG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgPGJ1dHRvbiAke2ZpZWxkRGF0YVN0cmluZ30+JHtmaWVsZExhYmVsVmFsfTwvYnV0dG9uPmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGA8aW5wdXQgJHtmaWVsZERhdGFTdHJpbmd9PiAke2ZpZWxkTGFiZWx9YDtcblxuICAgICAgICAgIGlmIChmaWVsZERhdGEudG9nZ2xlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkRGF0YS5pZCkpLmtjVG9nZ2xlKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGA8JHtmaWVsZERhdGEudHlwZX0gJHtmaWVsZERhdGFTdHJpbmd9PiR7ZmllbGRMYWJlbFZhbH08LyR7ZmllbGREYXRhLnR5cGV9PmA7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZERhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGZpZWxkRGF0YS5pZCA/IGBmYi0ke2ZpZWxkRGF0YS50eXBlfSBmb3JtLWdyb3VwIGZpZWxkLSR7ZmllbGREYXRhLmlkfWAgOiAnJztcbiAgICAgICAgZmllbGRNYXJrdXAgPSBmYlV0aWxzLm1hcmt1cCgnZGl2JywgdGVtcGxhdGUsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkTWFya3VwID0gZmJVdGlscy5tYXJrdXAoJ2lucHV0JywgbnVsbCwgZmllbGREYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpZWxkTWFya3VwO1xuICAgIH07XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciBvdGhlciBvcHRpb24uXG4gICAqIFRvZ2dsZXMgdGhlIGhpZGRlbiB0ZXh0IGFyZWEgZm9yIFwib3RoZXJcIiBvcHRpb24uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gb3RoZXJJZCBpZCBvZiB0aGUgXCJvdGhlclwiIG9wdGlvbiBpbnB1dFxuICAgKi9cbiAgZmJVdGlscy5vdGhlck9wdGlvbkNCID0gKG90aGVySWQpID0+IHtcbiAgICBjb25zdCBvdGhlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3RoZXJJZCk7XG4gICAgY29uc3Qgb3RoZXJJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b3RoZXJJZH0tdmFsdWVgKTtcblxuICAgIGlmIChvdGhlcklucHV0LmNoZWNrZWQpIHtcbiAgICAgIG90aGVySW5wdXRWYWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG90aGVySW5wdXRWYWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2FwaXRhbGl6ZXMgYSBzdHJpbmdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgdW5jYXBpdGFsaXplZCBzdHJpbmdcbiAgICogQHJldHVybiB7U3RyaW5nfSBzdHIgY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAqL1xuICBmYlV0aWxzLmNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGJcXHcvZywgZnVuY3Rpb24obSkge1xuICAgICAgICByZXR1cm4gbS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG4gIH07XG5cblxuZmJVdGlscy5tZXJnZSA9IChvYmoxLCBvYmoyKSA9PiB7XG4gIGxldCBtZXJnZWRPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmoxLCBvYmoyKTtcbiAgZm9yIChsZXQgcHJvcCBpbiBvYmoyKSB7XG4gICAgaWYgKG1lcmdlZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqMltwcm9wXSkpIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gQXJyYXkuaXNBcnJheShvYmoxW3Byb3BdKSA/IGZiVXRpbHMudW5pcXVlKG9iajFbcHJvcF0uY29uY2F0KG9iajJbcHJvcF0pKSA6IG9iajJbcHJvcF07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmoyW3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBmYlV0aWxzLm1lcmdlKG9iajFbcHJvcF0sIG9iajJbcHJvcF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gb2JqMltwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lcmdlZE9iajtcbn07XG5cbi8qKlxuICogVXRpbCB0byByZW1vdmUgY29udGVudHMgb2YgRE9NIE9iamVjdFxuICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgZWxlbWVudCB3aXRoIGl0cyBjaGlsZHJlbiByZW1vdmVkXG4gKi9cbmZiVXRpbHMuZW1wdHkgPSBlbGVtZW50ID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmZiVXRpbHMubm9vcCA9ICgpID0+IG51bGw7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmYlV0aWxzO1xuIl19
