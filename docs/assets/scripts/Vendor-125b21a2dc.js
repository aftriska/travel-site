!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([,,,,,,function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function i(e,t){return(void 0===e?"undefined":r(e))===t}function s(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(){var e=t.body;return e||(e=a(C?"svg":"body"),e.fake=!0),e}function c(e,n,r,i){var s,c,u,l,f="modernizr",d=a("div"),p=o();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=i?i[r]:f+(r+1),d.appendChild(u);return s=a("style"),s.type="text/css",s.id="s"+f,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",l=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),c=n(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=l,w.offsetHeight):d.parentNode.removeChild(d),!!c}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(s){var a=s.error?"error":"log";s[a].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function f(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(u(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+u(t[i])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==l(e,null,"position")})}return n}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,r,o){function c(){l&&(delete T.style,delete T.modElem)}if(o=!i(o,"undefined")&&o,!i(r,"undefined")){var u=f(e,r);if(!i(u,"undefined"))return u}for(var l,p,m,h,g,v=["modernizr","tspan","samp"];!T.style&&v.length;)l=!0,T.modElem=a(v.shift()),T.style=T.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],g=T.style[h],s(h,"-")&&(h=d(h)),T.style[h]!==n){if(o||i(r,"undefined"))return c(),"pfx"!=t||h;try{T.style[h]=r}catch(e){}if(T.style[h]!=g)return c(),"pfx"!=t||h}return c(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:(r=t[e[s]],i(r,"function")?m(r,n||t):r);return!1}function g(e,t,n,r,s){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+E.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?p(o,t,r,s):(o=(e+" "+M.join(a+" ")+a).split(" "),h(o,t,n))}function v(e,t,r){return g(e,n,n,t,r)}var A=[],y={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){A.push({name:e,fn:t,options:n})},addAsyncTest:function(e){A.push({name:null,fn:e})}},b=function(){};b.prototype=y,b=new b;var z=[],w=t.documentElement,C="svg"===w.nodeName.toLowerCase(),S="Moz O ms Webkit",E=y._config.usePrefixes?S.split(" "):[];y._cssomPrefixes=E;var x={elem:a("modernizr")};b._q.push(function(){delete x.elem});var T={style:x.elem.style};b._q.unshift(function(){delete T.style});var M=y._config.usePrefixes?S.toLowerCase().split(" "):[];y._domPrefixes=M,y.testAllProps=g,y.testAllProps=v,b.addTest("flexbox",v("flexBasis","1px",!0)),b.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,s,a,o;for(var c in A)if(A.hasOwnProperty(c)){if(e=[],t=A[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)a=e[s],o=a.split("."),1===o.length?b[o[0]]=r:(!b[o[0]]||b[o[0]]instanceof Boolean||(b[o[0]]=new Boolean(b[o[0]])),b[o[0]][o[1]]=r),z.push((r?"":"no-")+o.join("-"))}}(),function(e){var t=w.className,n=b._config.classPrefix||"";if(C&&(t=t.baseVal),b._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}b._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?w.className.baseVal=t:w.className=t)}(z),delete y.addTest,delete y.addAsyncTest;for(var L=0;L<b._q.length;L++)b._q[L]();e.Modernizr=b}(window,document)},function(e,t){!function(t,n){var r=function(e,t){"use strict";if(t.getElementsByClassName){var n,r,i=t.documentElement,s=e.Date,a=e.HTMLPictureElement,o=e.addEventListener,c=e.setTimeout,u=e.requestAnimationFrame||c,l=e.requestIdleCallback,f=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},g=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},v=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},A=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&A(e,t),d.forEach(function(n){e[r](n,t)})},y=function(e,r,i,s,a){var o=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,o.initCustomEvent(r,!s,!a,i),e.dispatchEvent(o),o},b=function(t,n){var i;!a&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},C=function(){var e,n,r=[],i=[],s=r,a=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?c:u)(a)))};return o._lsFlush=a,o}(),S=function(e,t){return t?function(){C(e)}:function(){var t=this,n=arguments;C(function(){e.apply(t,n)})}},E=function(e){var t,n=0,r=666,i=function(){t=!1,n=s.now(),e()},a=l?function(){l(i,{timeout:r}),666!==r&&(r=666)}:S(function(){c(i)},!0);return function(e){var i;(e=!0===e)&&(r=44),t||(t=!0,i=125-(s.now()-n),i<0&&(i=0),e||i<9&&l?a():c(a,i))}},x=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?c(i,99-e):(l||r)(r)};return function(){n=s.now(),t||(t=c(i,99))}},T=function(){var n,a,u,l,d,p,w,T,L,P,R,_,N,B,k,W=/^img$/i,$=/^iframe$/i,D="onscroll"in e&&!/glebot/.test(navigator.userAgent),I=0,O=0,U=-1,F=function(e){O--,e&&e.target&&A(e.target,F),(!e||O<0||!e.target)&&(O=0)},H=function(e,n){var r,s=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(L-=n,_+=n,P-=n,R+=n;a&&(s=s.offsetParent)&&s!=t.body&&s!=i;)(a=(z(s,"opacity")||1)>0)&&"visible"!=z(s,"overflow")&&(r=s.getBoundingClientRect(),a=R>r.left&&P<r.right&&_>r.top-1&&L<r.bottom+1);return a},j=function(){var e,s,o,c,l,f,p,m,h;if((d=r.loadMode)&&O<8&&(e=n.length)){s=0,U++,null==B&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),N=r.expand,B=N*r.expFactor),I<B&&O<1&&U>2&&d>2&&!t.hidden?(I=B,U=0):I=d>1&&U>1&&O<6?N:0;for(;s<e;s++)if(n[s]&&!n[s]._lazyRace)if(D)if((m=n[s].getAttribute("data-expand"))&&(f=1*m)||(f=I),h!==f&&(w=innerWidth+f*k,T=innerHeight+f,p=-1*f,h=f),o=n[s].getBoundingClientRect(),(_=o.bottom)>=p&&(L=o.top)<=T&&(R=o.right)>=p*k&&(P=o.left)<=w&&(_||R||P||L)&&(r.loadHidden||"hidden"!=z(n[s],"visibility"))&&(u&&O<3&&!m&&(d<3||U<4)||H(n[s],f))){if(Z(n[s]),l=!0,O>9)break}else!l&&u&&!c&&O<4&&U<4&&d>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(_||R||P||L||"auto"!=n[s].getAttribute(r.sizesAttr)))&&(c=a[0]||n[s]);else Z(n[s]);c&&!l&&Z(c)}},q=E(j),Q=function(e){g(e.target,r.loadedClass),v(e.target,r.loadingClass),A(e.target,V)},G=S(Q),V=function(e){G({target:e.target})},J=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},K=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},X=S(function(e,t,n,i,s){var a,o,u,d,p,h;(p=y(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?g(e,r.autosizesClass):e.setAttribute("sizes",i)),o=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),s&&(u=e.parentNode,d=u&&f.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(o||a||d),p={target:e},h&&(A(e,F,!0),clearTimeout(l),l=c(F,2500),g(e,r.loadingClass),A(e,V,!0)),d&&m.call(u.getElementsByTagName("source"),K),o?e.setAttribute("srcset",o):a&&!d&&($.test(e.nodeName)?J(e,a):e.src=a),s&&(o||d)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,v(e,r.lazyClass),C(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?F(p):O--,Q(p))},!0)}),Z=function(e){var t,n=W.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&u||!n||!e.src&&!e.srcset||e.complete||h(e,r.errorClass))&&(t=y(e,"lazyunveilread").detail,s&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,O++,X(e,t,s,i,n))},Y=function(){if(!u){if(s.now()-p<999)return void c(Y,999);var e=x(function(){r.loadMode=3,q()});u=!0,r.loadMode=3,q(),o("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){p=s.now(),n=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),k=r.hFac,o("scroll",q,!0),o("resize",q,!0),e.MutationObserver?new MutationObserver(q).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",q,!0),i.addEventListener("DOMAttrModified",q,!0),setInterval(q,999)),o("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,q,!0)}),/d$|^c/.test(t.readyState)?Y():(o("load",Y),t.addEventListener("DOMContentLoaded",q),c(Y,2e4)),n.length?(j(),C._lsFlush()):q()},checkElems:q,unveil:Z}}(),M=function(){var e,n=S(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),f.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,a=i.length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||b(e,n.detail)}),i=function(e,t,r){var i,s=e.parentNode;s&&(r=w(e,s,r),i=y(e,"lazybeforesizes",{width:r,dataAttr:!!t}),i.defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,s,i,r))},s=function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])},a=x(s);return{_:function(){e=t.getElementsByClassName(r.autosizesClass),o("resize",a)},checkElems:a,updateElem:i}}(),L=function(){L.i||(L.i=!0,M._(),T._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,c(function(){r.init&&L()})}(),n={cfg:r,autoSizer:M,loader:T,init:L,uP:b,aC:g,rC:v,hC:h,fire:y,gW:w,rAF:C}}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),s}())}(window),function(i,s,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(){W=!1,I=i.devicePixelRatio,$={},D={},b.DPR=I||1,O.width=Math.max(i.innerWidth||0,T.clientWidth),O.height=Math.max(i.innerHeight||0,T.clientHeight),O.vw=O.width/100,O.vh=O.height/100,y=[O.height,O.width,I].join("-"),O.em=b.getEmValue(),O.rem=O.em}function u(e,t,n,r){var i,s,a,o;return"saveData"===L.algorithm?e>2.7?o=n+1:(s=t-n,i=Math.pow(e-.6,1.5),a=s*i,r&&(a+=.1*i),o=e+a):o=n>1?Math.sqrt(e*t):e,o>n}function l(e){var t,n=b.getSet(e),r=!1;"pending"!==n&&(r=y,n&&(t=b.setRes(n),b.applySetCandidate(t,e))),e[b.ns].evaled=r}function f(e,t){return e.res-t.res}function d(e,t,n){var r;return!n&&t&&(n=e[b.ns].sets,n=n&&n[n.length-1]),r=p(t,n),r&&(t=b.makeUrl(t),e[b.ns].curSrc=t,e[b.ns].curCan=r,r.res||Z(r,r.set.sizes)),r}function p(e,t){var n,r,i;if(e&&t)for(i=b.parseSet(t),e=b.makeUrl(e),n=0;n<i.length;n++)if(e===b.makeUrl(i[n].url)){r=i[n];break}return r}function m(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)i=a[n],i[b.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function h(e,t){function n(t){var n,r=t.exec(e.substring(f));if(r)return n=r[0],f+=n.length,n}function r(){var e,n,r,a,o,c,u,l,f,p=!1,m={};for(a=0;a<s.length;a++)o=s[a],c=o[o.length-1],u=o.substring(0,o.length-1),l=parseInt(u,10),f=parseFloat(u),G.test(u)&&"w"===c?((e||n)&&(p=!0),0===l?p=!0:e=l):V.test(u)&&"x"===c?((e||n||r)&&(p=!0),f<0?p=!0:n=f):G.test(u)&&"h"===c?((r||n)&&(p=!0),0===l?p=!0:r=l):p=!0;p||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,d.push(m))}for(var i,s,a,c,u,l=e.length,f=0,d=[];;){if(n(j),f>=l)return d;i=n(q),s=[],","===i.slice(-1)?(i=i.replace(Q,""),r()):function(){for(n(H),a="",c="in descriptor";;){if(u=e.charAt(f),"in descriptor"===c)if(o(u))a&&(s.push(a),a="",c="after descriptor");else{if(","===u)return f+=1,a&&s.push(a),void r();if("("===u)a+=u,c="in parens";else{if(""===u)return a&&s.push(a),void r();a+=u}}else if("in parens"===c)if(")"===u)a+=u,c="in descriptor";else{if(""===u)return s.push(a),void r();a+=u}else if("after descriptor"===c)if(o(u));else{if(""===u)return void r();c="in descriptor",f-=1}f+=1}}()}}function g(e){var t,n,r,i,s,a,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=function(e){function t(){i&&(s.push(i),i="")}function n(){s[0]&&(a.push(s),s=[])}for(var r,i="",s=[],a=[],c=0,u=0,l=!1;;){if(""===(r=e.charAt(u)))return t(),n(),a;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(o(r)){if(e.charAt(u-1)&&o(e.charAt(u-1))||!i){u+=1;continue}if(0===c){t(),u+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}i+=r,u+=1}}}(e),r=n.length,t=0;t<r;t++)if(i=n[t],s=i[i.length-1],function(e){return!!(c.test(e)&&parseFloat(e)>=0)||(!!u.test(e)||("0"===e||"-0"===e||"+0"===e))}(s)){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),b.matchesMedia(i))return a}return"100vw"}s.createElement("picture");var v,A,y,b={},z=!1,w=function(){},C=s.createElement("img"),S=C.getAttribute,E=C.setAttribute,x=C.removeAttribute,T=s.documentElement,M={},L={algorithm:""},P=navigator.userAgent,R=/rident/.test(P)||/ecko/.test(P)&&P.match(/rv\:(\d+)/)&&RegExp.$1>35,_="currentSrc",N=/\s+\+?\d+(e\d+)?w/,B=i.picturefillCFG,k="font-size:100%!important;",W=!0,$={},D={},I=i.devicePixelRatio,O={px:1,in:96},U=s.createElement("a"),F=!1,H=/^[ \t\n\r\u000c]+/,j=/^[, \t\n\r\u000c]+/,q=/^[^ \t\n\r\u000c]+/,Q=/[,]+$/,G=/^\d+$/,V=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,J=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},K=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},X=function(){var e=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},t=K(function(t){return"return "+e((t||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(e,n){var r;if(!(e in $))if($[e]=!1,n&&(r=e.match(/^([\d\.]+)(em|vw|px)$/)))$[e]=r[1]*O[r[2]];else try{$[e]=new Function("e",t(e))(O)}catch(e){}return $[e]}}(),Z=function(e,t){return e.w?(e.cWidth=b.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},Y=function(e){if(z){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),t=i.elements||b.qsa(i.context||s,i.reevaluate||i.reselect?b.sel:b.selShort),r=t.length){for(b.setupRun(i),F=!0,n=0;n<r;n++)b.fillImg(t[n],i);b.teardownRun(i)}}};i.console&&console.warn,_ in C||(_="src"),M["image/jpeg"]=!0,M["image/gif"]=!0,M["image/png"]=!0,M["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),b.ns=("pf"+(new Date).getTime()).substr(0,9),b.supSrcset="srcset"in C,b.supSizes="sizes"in C,b.supPicture=!!i.HTMLPictureElement,b.supSrcset&&b.supPicture&&!b.supSizes&&function(e){C.srcset="data:,a",e.src="data:,a",b.supSrcset=C.complete===e.complete,b.supPicture=b.supSrcset&&b.supPicture}(s.createElement("img")),b.supSrcset&&!b.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=s.createElement("img"),n=function(){2===t.width&&(b.supSizes=!0),A=b.supSrcset&&!b.supSizes,z=!0,setTimeout(Y)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():z=!0,b.selShort="picture>img,img[srcset]",b.sel=b.selShort,b.cfg=L,b.DPR=I||1,b.u=O,b.types=M,b.setSize=w,b.makeUrl=K(function(e){return U.href=e,U.href}),b.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},b.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?b.matchesMedia=function(e){return!e||matchMedia(e).matches}:b.matchesMedia=b.mMQ,b.matchesMedia.apply(this,arguments)},b.mMQ=function(e){return!e||X(e)},b.calcLength=function(e){var t=X(e,!0)||!1;return t<0&&(t=!1),t},b.supportsType=function(e){return!e||M[e]},b.parseSize=K(function(e){var t=(e||"").match(/(\([^)]+\))?\s*(.+)/);return{media:t&&t[1],length:t&&t[2]}}),b.parseSet=function(e){return e.cands||(e.cands=h(e.srcset,e)),e.cands},b.getEmValue=function(){var e;if(!v&&(e=s.body)){var t=s.createElement("div"),n=T.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",T.style.cssText=k,e.style.cssText=k,e.appendChild(t),v=t.offsetWidth,e.removeChild(t),v=parseFloat(v,10),T.style.cssText=n,e.style.cssText=r}return v||16},b.calcListLength=function(e){if(!(e in D)||L.uT){var t=b.calcLength(g(e));D[e]=t||O.width}return D[e]},b.setRes=function(e){var t;if(e){t=b.parseSet(e);for(var n=0,r=t.length;n<r;n++)Z(t[n],e.sizes)}return t},b.setRes.res=Z,b.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,o,c,l,p,m=t[b.ns],h=b.DPR;if(o=m.curSrc||t[_],c=m.curCan||d(t,o,e[0].set),c&&c.set===e[0].set&&((p=R&&!t.complete&&c.res-.1>h)||(c.cached=!0,c.res>=h&&(a=c))),!a)for(e.sort(f),s=e.length,a=e[s-1],r=0;r<s;r++)if(n=e[r],n.res>=h){i=r-1,a=e[i]&&(p||o!==b.makeUrl(n.url))&&u(e[i].res,n.res,h,e[i].cached)?e[i]:n;break}a&&(l=b.makeUrl(a.url),m.curSrc=l,m.curCan=a,l!==o&&b.setSrc(t,a),b.setSize(t))}},b.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},b.getSet=function(e){var t,n,r,i=!1,s=e[b.ns].sets;for(t=0;t<s.length&&!i;t++)if(n=s[t],n.srcset&&b.matchesMedia(n.media)&&(r=b.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},b.parseSets=function(e,t,n){var r,i,s,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[b.ns];(void 0===c.src||n.src)&&(c.src=S.call(e,"src"),c.src?E.call(e,"data-pfsrc",c.src):x.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!b.supSrcset||e.srcset)&&(r=S.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,m(t,c.sets)),c.srcset?(i={srcset:c.srcset,sizes:S.call(e,"sizes")},c.sets.push(i),(s=(A||c.src)&&N.test(c.srcset||""))||!c.src||p(c.src,i)||i.has1x||(i.srcset+=", "+c.src,i.cands.push({url:c.src,d:1,set:i}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||i&&!b.supSrcset||s&&!b.supSizes),a&&b.supSrcset&&!c.supported&&(r?(E.call(e,"data-pfsrcset",r),e.srcset=""):x.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==b.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},b.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[b.ns]||(e[b.ns]={}),n=e[b.ns],(r||n.evaled!==y)&&(n.parsed&&!t.reevaluate||b.parseSets(e,e.parentNode,t),n.supported?n.evaled=y:l(e))},b.setupRun=function(){F&&!W&&I===i.devicePixelRatio||c()},b.supPicture?(Y=w,b.fillImg=w):function(){var e,t=i.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var i=s.readyState||"";r=setTimeout(n,"loading"===i?200:999),s.body&&(b.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,s.body?9:99),a=T.clientHeight,o=function(){W=Math.max(i.innerWidth||0,T.clientWidth)!==O.width||T.clientHeight!==a,a=T.clientHeight,W&&b.fillImgs()};J(i,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(o,99)),J(s,"readystatechange",n)}(),b.picturefill=Y,b.fillImgs=Y,b.teardownRun=w,Y._=b,i.picturefillCFG={pf:b,push:function(e){var t=e.shift();"function"==typeof b[t]?b[t].apply(b,e):(L[t]=e[0],F&&b.fillImgs({reselect:!0}))}};for(;B&&B.length;)i.picturefillCFG.push(B.shift());i.picturefill=Y,"object"==typeof e&&"object"==typeof e.exports?e.exports=Y:void 0!==(r=function(){return Y}.call(t,n,t,e))&&(e.exports=r),b.supPicture||(M["image/webp"]=function(e,t){var n=new i.Image;return n.onerror=function(){M[e]=!1,Y()},n.onload=function(){M[e]=1===n.width,Y()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},,function(e,t,n){"use strict";n(6),n(8),n(7)}]);