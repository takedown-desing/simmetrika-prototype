
; /* Start:"a:4:{s:4:"full";s:65:"/local/templates/divanchik/js/jquery-3.0.0.min.js?175396189193428";s:6:"source";s:49:"/local/templates/divanchik/js/jquery-3.0.0.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.0.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return a&&"[object Object]"===k.call(a)?(b=e(a))?(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n):!0:!1},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;d>f;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a)?(d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e):void 0},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"===c||r.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[0>c?c+b:c]}),even:pa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,e>i&&ya(a.slice(i,e)),f>e&&ya(a=a.slice(e)),f>e&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;d>b;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;d>b;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(f>b)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(1>=b&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){
return j.call(r(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;g>f;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;g>f;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;d>c;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;o>n;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){return this.originalEvent?b(this.originalEvent):void 0}:function(){return this.originalEvent?this.originalEvent[a]:void 0},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==va()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===va()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&r.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;m>l;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;i>l;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;e>d;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;e>d;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),0>=d||null==d){if(d=Ma(a,b,f),(0>d||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){return c?!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)}):void 0},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){return b?(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;e>g;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);g>f;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;e>d;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c);
}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){return r.isArray(b)?a.checked=r.inArray(r(a).val(),b)>-1:void 0}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?r.event.trigger(a,b,c,!0):void 0}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",0>b&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;return o.cors||Pb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){return c?(c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c):void 0})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/*! jQuery Migrate v3.0.0 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b){"use strict";function c(c){var d=b.console;e[c]||(e[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function d(a,b,d,e){Object.defineProperty(a,b,{configurable:!0,enumerable:!0,get:function(){return c(e),d}})}a.migrateVersion="3.0.0",function(){var c=b.console&&b.console.log&&function(){b.console.log.apply(b.console,arguments)},d=/^[12]\./;c&&(a&&!d.test(a.fn.jquery)||c("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),a.migrateWarnings&&c("JQMIGRATE: Migrate plugin loaded multiple times"),c("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion))}();var e={};a.migrateWarnings=[],void 0===a.migrateTrace&&(a.migrateTrace=!0),a.migrateReset=function(){e={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&c("jQuery is not compatible with Quirks Mode");var f=a.fn.init,g=a.isNumeric,h=a.find,i=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,j=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;a.fn.init=function(a){var b=Array.prototype.slice.call(arguments);return"string"==typeof a&&"#"===a&&(c("jQuery( '#' ) is not a valid selector"),b[0]=[]),f.apply(this,b)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&i.test(a))try{document.querySelector(a)}catch(d){a=a.replace(j,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),c("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){c("Attribute selector with '#' was not fixed: "+b[0])}}return h.apply(this,b)};var k;for(k in h)Object.prototype.hasOwnProperty.call(h,k)&&(a.find[k]=h[k]);a.fn.size=function(){return c("jQuery.fn.size() is deprecated; use the .length property"),this.length},a.parseJSON=function(){return c("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},a.isNumeric=function(b){function d(b){var c=b&&b.toString();return!a.isArray(b)&&c-parseFloat(c)+1>=0}var e=g(b),f=d(b);return e!==f&&c("jQuery.isNumeric() should not be called on constructed objects"),f},d(a,"unique",a.uniqueSort,"jQuery.unique is deprecated, use jQuery.uniqueSort"),d(a.expr,"filters",a.expr.pseudos,"jQuery.expr.filters is now jQuery.expr.pseudos"),d(a.expr,":",a.expr.pseudos,'jQuery.expr[":"] is now jQuery.expr.pseudos');var l=a.ajax;a.ajax=function(){var a=l.apply(this,arguments);return a.promise&&(d(a,"success",a.done,"jQXHR.success is deprecated and removed"),d(a,"error",a.fail,"jQXHR.error is deprecated and removed"),d(a,"complete",a.always,"jQXHR.complete is deprecated and removed")),a};var m=a.fn.removeAttr,n=a.fn.toggleClass,o=/\S+/g;a.fn.removeAttr=function(b){var d=this;return a.each(b.match(o),function(b,e){a.expr.match.bool.test(e)&&(c("jQuery.fn.removeAttr no longer sets boolean properties: "+e),d.prop(e,!1))}),m.apply(this,arguments)},a.fn.toggleClass=function(b){return void 0!==b&&"boolean"!=typeof b?n.apply(this,arguments):(c("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var c=this.getAttribute&&this.getAttribute("class")||"";c&&a.data(this,"__className__",c),this.setAttribute&&this.setAttribute("class",c||b===!1?"":a.data(this,"__className__")||"")}))};var p=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return p=!0,a=d.apply(this,arguments),p=!1,a})}),a.swap=function(a,b,d,e){var f,g,h={};p||c("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=d.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f};var q=a.data;a.data=function(b,d,e){var f;return d&&d!==a.camelCase(d)&&(f=a.hasData(b)&&q.call(this,b),f&&d in f)?(c("jQuery.data() always sets/gets camelCased names: "+d),arguments.length>2&&(f[d]=e),f[d]):q.apply(this,arguments)};var r=a.Tween.prototype.run;a.Tween.prototype.run=function(b){a.easing[this.easing].length>1&&(c('easing function "jQuery.easing.'+this.easing.toString()+'" should use only first argument'),a.easing[this.easing]=a.easing[this.easing].bind(a.easing,b,this.options.duration*b,0,1,this.options.duration)),r.apply(this,arguments)};var s=a.fn.load,t=a.event.fix;a.event.props=[],a.event.fixHooks={},a.event.fix=function(b){var d,e=b.type,f=this.fixHooks[e],g=a.event.props;if(g.length)for(c("jQuery.event.props are deprecated and removed: "+g.join());g.length;)a.event.addProp(g.pop());if(f&&!f._migrated_&&(f._migrated_=!0,c("jQuery.event.fixHooks are deprecated and removed: "+e),(g=f.props)&&g.length))for(;g.length;)a.event.addProp(g.pop());return d=t.call(this,b),f&&f.filter?f.filter(d,b):d},a.each(["load","unload","error"],function(b,d){a.fn[d]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===d&&"string"==typeof a[0]?s.apply(this,a):(c("jQuery.fn."+d+"() is deprecated"),a.splice(0,0,d),arguments.length?this.on.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a(function(){a(document).triggerHandler("ready")}),a.event.special.ready={setup:function(){this===document&&c("'ready' event is deprecated")}},a.fn.extend({bind:function(a,b,d){return c("jQuery.fn.bind() is deprecated"),this.on(a,null,b,d)},unbind:function(a,b){return c("jQuery.fn.unbind() is deprecated"),this.off(a,null,b)},delegate:function(a,b,d,e){return c("jQuery.fn.delegate() is deprecated"),this.on(b,a,d,e)},undelegate:function(a,b,d){return c("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(a,"**"):this.off(b,a||"**",d)}});var u=a.fn.offset;a.fn.offset=function(){var b,d=this[0],e={top:0,left:0};return d&&d.nodeType?(b=(d.ownerDocument||document).documentElement,a.contains(b,d)?u.apply(this,arguments):(c("jQuery.fn.offset() requires an element connected to a document"),e)):(c("jQuery.fn.offset() requires a valid DOM element"),e)};var v=a.param;a.param=function(b,d){var e=a.ajaxSettings&&a.ajaxSettings.traditional;return void 0===d&&e&&(c("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),d=e),v.call(this,b,d)};var w=a.fn.andSelf||a.fn.addBack;a.fn.andSelf=function(){return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)};var x=a.Deferred,y=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var d=x(),e=d.promise();return d.pipe=e.pipe=function(){var b=arguments;return c("deferred.pipe() is deprecated"),a.Deferred(function(c){a.each(y,function(f,g){var h=a.isFunction(b[f])&&b[f];d[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[g[0]+"With"](this===e?c.promise():this,h?[b]:arguments)})}),b=null}).promise()},b&&b.call(d,d),d}}(jQuery,window);



/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/local/templates/divanchik/js/progress.js?17539618916934";s:6:"source";s:41:"/local/templates/divanchik/js/progress.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($) {

  $.extend($, {
    cacheImage: function (src, options) {
      if (typeof src === 'object') {
        $.each(src, function () {
          $.cacheImage(String(this), options);
        });

        return;
      }

      var image = new Image();

      options = options || {};

      $.each(['load', 'error', 'abort'], function () { // Callbacks
        var e = String(this);
        if (typeof options[e] === 'function') { $(image).bind(e, options[e]); }

        if (typeof options.complete === 'function') {
          $(image).bind(e, options.complete);
        }
      });

      image.src = src;

      return image;
    }
  });

  $.extend($.fn, {
    cacheImage: function (options) {
      return this.each(function () {
        $.cacheImage(this.src, options);
      });
    }
  });
})(jQuery);

$(document).ready(function() {



	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());

	    }
	};


 //Preload images

    var imgs = [];
    $(".preload__image").each(function() {
      if($(this).css("background-image") !== "none") {
        imgs.push($(this).css("background-image").replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, ''));
        //console.log($(this).css("background-image").replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, ''));

      } else if ($(this).is('img')){


	      if( isMobile.any() && $(this).hasClass('preload-rotator')) {

		      if ($(this).attr('id')=='rotImg1') {
			      imgs.push($(this).attr("src"));
			      //console.log($(this).attr("src"));
		      }

	      } else {

		 	 imgs.push($(this).attr("src"));
		 	 //console.log($(this).attr("src"));
		  }

      }
    });

    // if here is some filler preloade it

    if ($('.filler__item1').length ) {
    	var v_images = $(".filler__item1 img").data("src").split(',');
    }

    //imgs = imgs.concat(v_images);


	//imgs = []; //fake no images



    window.images = imgs.length;
    window.loaded = 0;

    //console.log(imgs.length);

    window.loadingProgress = 0;
    $.cacheImage(imgs, { complete: function () { window.loadingProgress++; }});


    //Страница товара загрузка картинок
    var productImages = [];

    if ($('.section-tovar__image img').length) {
      productImages.push($('.section-tovar__image img').attr("src"));
    } else {
      window.loaded = 1;
    }

    if ($('.section-tovar.new-section .product__colors__item a').length) {
      $('.section-tovar.new-section .product__colors__item a').each(function() {
        if($(this).css("background-image") !== "none") {
          productImages.push($(this).css("background-image").replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, ''));
        } else if ($(this).is('img')){
         productImages.push($(this).attr("src"));
        }
      });
    }
    window.productImages = productImages.length;

    window.loadingProgressPrImages = 0;
    $.cacheImage(productImages, { complete: function () { window.loadingProgressPrImages++; }});
    // End Страница товара загрузка картинок


    // if there is a loader

    function tgBanner() {
	    var tgBanner = document.getElementById("telegram_banner");

      $('.telegram-banner').addClass('_is-show');

      $('.telegram-banner__link').on('click', function() {
        if (typeof yaCounter48396509 !== "undefined") {
          yaCounter48396509.reachGoal('promo-banner');
        }
      });

      $('.js-telegram-banner-close').on('click', function() {
        $(this).closest('.telegram-banner').removeClass('_is-show');
        sessionStorage.setItem('tgBannerClose', 'close');
      });
      if (sessionStorage.getItem("tgBannerClose")) {
        tgBanner.value = sessionStorage.getItem("tgBannerClose");
        $('.telegram-banner').hide();
      }
    }

    var loadingInterval = setInterval(function(){
    // var progress = 100*(window.loadingProgress/window.images);

	  //console.log(progress);
      // $("#bar1").animate({width: progress + "%"}, 100);

		  if (window.loadingProgressPrImages>=window.productImages || window.loaded==1){
        	// $("#bar1").animate({width: "100%"}, 100);
        	clearInterval(loadingInterval);
        	// window.loaded = 1;
        	// $('#progress_div').fadeOut(300, function(){
              // $('html').removeClass('preloading');

              tgBanner();
              let locationParams = (new URL(document.location)).searchParams;
              if ($('.compound-navigation').length && locationParams.get("compound") == 'on') {
                $('.compound-navigation').trigger('click');
              }

          // });


          if ( $(window).width()<1024 ) {

              $('.desktop-only').css('-webkit-transform', 'translate(0,0)');
              $('.desktop-only').css('-o-transform', 'translate(0,0)');
              $('.desktop-only').css('-ms-transform', 'translate(0,0)');
              $('.desktop-only').css('transform', 'translate(0,0)');
              $('.desktop-only').css('opacity', '1');
          }

          $('.animated').appear(function() {
              var element = $(this);
    			    delay = element.data('delay');

              element.css('-webkit-transition-delay', delay+'ms');
              element.css('-o-transition-delay', delay+'ms');
    		      element.css('transition-delay', delay+'ms');
      			  element.addClass('fadeInUp');

          },{accY: 100});


          if (!$('body').hasClass('homepage')) {
	          $('.animatedLeft').removeClass('animatedLeft');
  	      } else {
  		      tgBanner();

  		      $('.animatedNav').appear(function() {
    			     $(this).addClass('fadeIn');
    			  },{accY: 100});

            $('.animatedLeft').appear(function() {
              var element = $(this);
    			    delay = element.data('delay');

              element.css('-webkit-transition-delay', delay+'ms');
              element.css('-o-transition-delay', delay+'ms');
  			      element.css('transition-delay', delay+'ms');
  				    element.addClass('fadeInUp');

  			      setTimeout(function(){
  			         element.css('-webkit-transition-delay', '0ms');
      					 element.css('-o-transition-delay', '0ms');
      					 element.css('transition-delay', '0ms');
  	          }, delay);
            },{accY: 100});
	        }
      	}

    },400);


});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:72:"/local/templates/divanchik/js/jQuery_mousewheel_plugin.js?17539618911443";s:6:"source";s:57:"/local/templates/divanchik/js/jQuery_mousewheel_plugin.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
if (navigator.userAgent.indexOf("Firefox") > 0) {
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/divanchik/js/smooth-scrollbar.min.js?175396189148469";s:6:"source";s:53:"/local/templates/divanchik/js/smooth-scrollbar.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Scrollbar=n():t.Scrollbar=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=58)}([function(t,n,e){var r=e(25)("wks"),o=e(16),i=e(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(13)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(2),o=e(3),i=e(11),u=e(6),c=e(10),s=function(t,n,e){var a,f,l,p,h=t&s.F,d=t&s.G,v=t&s.S,y=t&s.P,m=t&s.B,g=d?r:v?r[n]||(r[n]={}):(r[n]||{}).prototype,b=d?o:o[n]||(o[n]={}),x=b.prototype||(b.prototype={});for(a in d&&(e=n),e)l=((f=!h&&g&&void 0!==g[a])?g:e)[a],p=m&&f?c(l,r):y&&"function"==typeof l?c(Function.call,l):l,g&&u(g,a,l,t&s.U),b[a]!=l&&i(b,a,p),y&&x[a]!=l&&(x[a]=l)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n,e){var r=e(2),o=e(11),i=e(9),u=e(16)("src"),c=e(60),s=(""+c).split("toString");e(3).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:s.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,n,e){var r=e(8),o=e(41),i=e(43),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(44);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(7),o=e(17);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports={}},function(t,n,e){var r=e(10),o=e(49),i=e(50),u=e(8),c=e(19),s=e(51),a={},f={};(n=t.exports=function(t,n,e,l,p){var h,d,v,y,m=p?function(){return t}:s(t),g=r(e,l,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=c(t.length);h>b;b++)if((y=n?g(u(d=t[b])[0],d[1]):g(t[b]))===a||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if((y=o(v,g,d.value,n))===a||y===f)return y}).BREAK=a,n.RETURN=f},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(31),o=e(28);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(27),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(28);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(16)("meta"),o=e(1),i=e(9),u=e(7).f,c=0,s=Object.isExtensible||function(){return!0},a=!e(13)((function(){return s(Object.preventExtensions({}))})),f=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!n)return"E";f(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!s(t))return!0;if(!n)return!1;f(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&s(t)&&!i(t,r)&&f(t),t}}},function(t,n,e){"use strict";var r=e(23),o={};o[e(0)("toStringTag")]="z",o+""!="[object z]"&&e(6)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,n,e){var r=e(24),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(3),o=e(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(40)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){"use strict";var r=e(61)(!0);e(29)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";var r=e(40),o=e(5),i=e(6),u=e(11),c=e(14),s=e(62),a=e(33),f=e(68),l=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,d,v,y,m){s(e,n,d);var g,b,x,_=function(t){if(!p&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",E="values"==v,S=!1,O=t.prototype,T=O[l]||O["@@iterator"]||v&&O[v],A=T||_(v),M=v?E?_("entries"):A:void 0,P="Array"==n&&O.entries||T;if(P&&(x=f(P.call(new t)))!==Object.prototype&&x.next&&(a(x,w,!0),r||"function"==typeof x[l]||u(x,l,h)),E&&T&&"values"!==T.name&&(S=!0,A=function(){return T.call(this)}),r&&!m||!p&&!S&&O[l]||u(O,l,A),c[n]=A,c[w]=h,v)if(g={values:E?A:_("values"),keys:y?A:_("keys"),entries:M},m)for(b in g)b in O||i(O,b,g[b]);else o(o.P+o.F*(p||S),n,g);return g}},function(t,n,e){var r=e(64),o=e(46);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(25)("keys"),o=e(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(7).f,o=e(9),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){for(var r=e(69),o=e(30),i=e(6),u=e(2),c=e(11),s=e(14),a=e(0),f=a("iterator"),l=a("toStringTag"),p=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(h),v=0;v<d.length;v++){var y,m=d[v],g=h[m],b=u[m],x=b&&b.prototype;if(x&&(x[f]||c(x,f,p),x[l]||c(x,l,m),s[m]=p,g))for(y in r)x[y]||i(x,y,r[y],!0)}},function(t,n,e){var r=e(6);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){"use strict";var r=e(2),o=e(5),i=e(6),u=e(35),c=e(21),s=e(15),a=e(36),f=e(1),l=e(13),p=e(52),h=e(33),d=e(73);t.exports=function(t,n,e,v,y,m){var g=r[t],b=g,x=y?"set":"add",_=b&&b.prototype,w={},E=function(t){var n=_[t];i(_,t,"delete"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!f(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof b&&(m||_.forEach&&!l((function(){(new b).entries().next()})))){var S=new b,O=S[x](m?{}:-0,1)!=S,T=l((function(){S.has(1)})),A=p((function(t){new b(t)})),M=!m&&l((function(){for(var t=new b,n=5;n--;)t[x](n,n);return!t.has(-0)}));A||((b=n((function(n,e){a(n,b,t);var r=d(new g,n,b);return null!=e&&s(e,y,r[x],r),r}))).prototype=_,_.constructor=b),(T||M)&&(E("delete"),E("has"),y&&E("get")),(M||O)&&E(x),m&&_.clear&&delete _.clear}else b=v.getConstructor(n,t,y,x),u(b.prototype,e),c.NEED=!0;return h(b,t),w[t]=b,o(o.G+o.W+o.F*(b!=g),w),m||v.setStrong(b,t,y),b}},function(t,n,e){"use strict";var r=e(5);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,e){"use strict";var r=e(5),o=e(44),i=e(10),u=e(15);t.exports=function(t){r(r.S,t,{from:function(t){var n,e,r,c,s=arguments[1];return o(this),(n=void 0!==s)&&o(s),null==t?new this:(e=[],n?(r=0,c=i(s,arguments[2],2),u(t,!1,(function(t){e.push(c(t,r++))}))):u(t,!1,e.push,e),new this(e))}})}},function(t,n){t.exports=!1},function(t,n,e){t.exports=!e(4)&&!e(13)((function(){return 7!=Object.defineProperty(e(42)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(1),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(8),o=e(63),i=e(46),u=e(32)("IE_PROTO"),c=function(){},s=function(){var t,n=e(42)("iframe"),r=i.length;for(n.style.display="none",e(67).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r=e(7).f,o=e(45),i=e(35),u=e(10),c=e(36),s=e(15),a=e(29),f=e(47),l=e(72),p=e(4),h=e(21).fastKey,d=e(12),v=p?"_s":"size",y=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,a){var f=t((function(t,r){c(t,f,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[v]=0,null!=r&&s(r,e,t[a],t)}));return i(f.prototype,{clear:function(){for(var t=d(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var e=d(this,n),r=y(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[v]--}return!!r},forEach:function(t){d(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(d(this,n),t)}}),p&&r(f.prototype,"size",{get:function(){return d(this,n)[v]}}),f},def:function(t,n,e){var r,o,i=y(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[v]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,n,e){a(t,n,(function(t,e){this._t=d(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))}),e?"entries":"values",!e,!0),l(n)}}},function(t,n,e){var r=e(8);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(14),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(23),o=e(0)("iterator"),i=e(14);t.exports=e(3).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(23),o=e(77);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},function(t,n,e){var r=e(10),o=e(31),i=e(20),u=e(19),c=e(87);t.exports=function(t,n){var e=1==t,s=2==t,a=3==t,f=4==t,l=6==t,p=5==t||l,h=n||c;return function(n,c,d){for(var v,y,m=i(n),g=o(m),b=r(c,d,3),x=u(g.length),_=0,w=e?h(n,x):s?h(n,0):void 0;x>_;_++)if((p||_ in g)&&(y=b(v=g[_],_,m),t))if(e)w[_]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return _;case 2:w.push(v)}else if(f)return!1;return l?-1:a||f?f:w}}},function(t,n,e){"use strict";var r=e(4),o=e(30),i=e(90),u=e(53),c=e(20),s=e(31),a=Object.assign;t.exports=!a||e(13)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=r}))?function(t,n){for(var e=c(t),a=arguments.length,f=1,l=i.f,p=u.f;a>f;)for(var h,d=s(arguments[f++]),v=l?o(d).concat(l(d)):o(d),y=v.length,m=0;y>m;)h=v[m++],r&&!p.call(d,h)||(e[h]=d[h]);return e}:a},function(t,n,e){"use strict";(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;n.a=e}).call(this,e(99))},function(t,n,e){t.exports=e(100)},function(t,n,e){e(22),e(26),e(34),e(71),e(76),e(78),e(79),t.exports=e(3).Map},function(t,n,e){t.exports=e(25)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(27),o=e(28);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),s=r(e),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(45),o=e(17),i=e(33),u={};e(11)(u,e(0)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(7),o=e(8),i=e(30);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,s=0;c>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n,e){var r=e(9),o=e(18),i=e(65)(!1),u=e(32)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(18),o=e(19),i=e(66);t.exports=function(t){return function(n,e,u){var c,s=r(n),a=o(s.length),f=i(u,a);if(t&&e!=e){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(27),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(2).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(9),o=e(20),i=e(32)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(70),o=e(47),i=e(14),u=e(18);t.exports=e(29)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(0)("unscopables"),o=Array.prototype;null==o[r]&&e(11)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n,e){"use strict";var r=e(48),o=e(12);t.exports=e(37)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},function(t,n,e){"use strict";var r=e(2),o=e(7),i=e(4),u=e(0)("species");t.exports=function(t){var n=r[t];i&&n&&!n[u]&&o.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1),o=e(74).set;t.exports=function(t,n,e){var i,u=n.constructor;return u!==e&&"function"==typeof u&&(i=u.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},function(t,n,e){var r=e(1),o=e(8),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(10)(Function.call,e(75).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n,e){var r=e(53),o=e(17),i=e(18),u=e(43),c=e(9),s=e(41),a=Object.getOwnPropertyDescriptor;n.f=e(4)?a:function(t,n){if(t=i(t),n=u(n,!0),s)try{return a(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(5);r(r.P+r.R,"Map",{toJSON:e(54)("Map")})},function(t,n,e){var r=e(15);t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},function(t,n,e){e(38)("Map")},function(t,n,e){e(39)("Map")},function(t,n,e){e(22),e(26),e(34),e(81),e(82),e(83),e(84),t.exports=e(3).Set},function(t,n,e){"use strict";var r=e(48),o=e(12);t.exports=e(37)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},function(t,n,e){var r=e(5);r(r.P+r.R,"Set",{toJSON:e(54)("Set")})},function(t,n,e){e(38)("Set")},function(t,n,e){e(39)("Set")},function(t,n,e){e(22),e(34),e(86),e(92),e(93),t.exports=e(3).WeakMap},function(t,n,e){"use strict";var r,o=e(2),i=e(55)(0),u=e(6),c=e(21),s=e(56),a=e(91),f=e(1),l=e(12),p=e(12),h=!o.ActiveXObject&&"ActiveXObject"in o,d=c.getWeak,v=Object.isExtensible,y=a.ufstore,m=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(f(t)){var n=d(t);return!0===n?y(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return a.def(l(this,"WeakMap"),t,n)}},b=t.exports=e(37)("WeakMap",m,g,a,!0,!0);p&&h&&(s((r=a.getConstructor(m,"WeakMap")).prototype,g),c.NEED=!0,i(["delete","has","get","set"],(function(t){var n=b.prototype,e=n[t];u(n,t,(function(n,o){if(f(n)&&!v(n)){this._f||(this._f=new r);var i=this._f[t](n,o);return"set"==t?this:i}return e.call(this,n,o)}))})))},function(t,n,e){var r=e(88);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(1),o=e(89),i=e(0)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){var r=e(24);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){"use strict";var r=e(35),o=e(21).getWeak,i=e(8),u=e(1),c=e(36),s=e(15),a=e(55),f=e(9),l=e(12),p=a(5),h=a(6),d=0,v=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},m=function(t,n){return p(t.a,(function(t){return t[0]===n}))};y.prototype={get:function(t){var n=m(this,t);if(n)return n[1]},has:function(t){return!!m(this,t)},set:function(t,n){var e=m(this,t);e?e[1]=n:this.a.push([t,n])},delete:function(t){var n=h(this.a,(function(n){return n[0]===t}));return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,i){var a=t((function(t,r){c(t,a,n,"_i"),t._t=n,t._i=d++,t._l=void 0,null!=r&&s(r,e,t[i],t)}));return r(a.prototype,{delete:function(t){if(!u(t))return!1;var e=o(t);return!0===e?v(l(this,n)).delete(t):e&&f(e,this._i)&&delete e[this._i]},has:function(t){if(!u(t))return!1;var e=o(t);return!0===e?v(l(this,n)).has(t):e&&f(e,this._i)}}),a},def:function(t,n,e){var r=o(i(n),!0);return!0===r?v(t).set(n,e):r[t._i]=e,t},ufstore:v}},function(t,n,e){e(38)("WeakMap")},function(t,n,e){e(39)("WeakMap")},function(t,n,e){e(26),e(95),t.exports=e(3).Array.from},function(t,n,e){"use strict";var r=e(10),o=e(5),i=e(20),u=e(49),c=e(50),s=e(19),a=e(96),f=e(51);o(o.S+o.F*!e(52)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=i(t),h="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,y=void 0!==v,m=0,g=f(p);if(y&&(v=r(v,d>2?arguments[2]:void 0,2)),null==g||h==Array&&c(g))for(e=new h(n=s(p.length));n>m;m++)a(e,m,y?v(p[m],m):p[m]);else for(l=g.call(p),e=new h;!(o=l.next()).done;m++)a(e,m,y?u(l,v,[o.value,m],!0):o.value);return e.length=m,e}})},function(t,n,e){"use strict";var r=e(7),o=e(17);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},function(t,n,e){e(98),t.exports=e(3).Object.assign},function(t,n,e){var r=e(5);r(r.S+r.F,"Object",{assign:e(56)})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"keyboardHandler",(function(){return et})),e.d(r,"mouseHandler",(function(){return rt})),e.d(r,"resizeHandler",(function(){return ot})),e.d(r,"selectHandler",(function(){return it})),e.d(r,"touchHandler",(function(){return ut})),e.d(r,"wheelHandler",(function(){return ct}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},i=function(){return(i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function u(t,n,e,r){var o,i=arguments.length,u=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,n,e,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(n,e,u):o(n,e))||u);return i>3&&u&&Object.defineProperty(n,e,u),u}e(59),e(80),e(85),e(94),e(97);var c=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},s=e(57),a="object"==typeof self&&self&&self.Object===Object&&self,f=s.a||a||Function("return this")(),l=f.Symbol,p=Object.prototype,h=p.hasOwnProperty,d=p.toString,v=l?l.toStringTag:void 0,y=Object.prototype.toString,m=l?l.toStringTag:void 0,g=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?function(t){var n=h.call(t,v),e=t[v];try{t[v]=void 0;var r=!0}catch(t){}var o=d.call(t);return r&&(n?t[v]=e:delete t[v]),o}(t):function(t){return y.call(t)}(t)},b=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,w=/^0o[0-7]+$/i,E=parseInt,S=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==g(t)}(t))return NaN;if(c(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=c(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(b,"");var e=_.test(t);return e||w.test(t)?E(t.slice(2),e?2:8):x.test(t)?NaN:+t},O=function(t,n,e){return void 0===e&&(e=n,n=void 0),void 0!==e&&(e=(e=S(e))==e?e:0),void 0!==n&&(n=(n=S(n))==n?n:0),function(t,n,e){return t==t&&(void 0!==e&&(t=t<=e?t:e),void 0!==n&&(t=t>=n?t:n)),t}(S(t),n,e)};function T(t,n){return void 0===t&&(t=-1/0),void 0===n&&(n=1/0),function(e,r){var o="_"+r;Object.defineProperty(e,r,{get:function(){return this[o]},set:function(e){Object.defineProperty(this,o,{value:O(e,t,n),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function A(t,n){var e="_"+n;Object.defineProperty(t,n,{get:function(){return this[e]},set:function(t){Object.defineProperty(this,e,{value:!!t,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}var M=function(){return f.Date.now()},P=Math.max,j=Math.min,k=function(t,n,e){var r,o,i,u,s,a,f=0,l=!1,p=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(n){var e=r,i=o;return r=o=void 0,f=n,u=t.apply(i,e)}function v(t){var e=t-a;return void 0===a||e>=n||e<0||p&&t-f>=i}function y(){var t=M();if(v(t))return m(t);s=setTimeout(y,function(t){var e=n-(t-a);return p?j(e,i-(t-f)):e}(t))}function m(t){return s=void 0,h&&r?d(t):(r=o=void 0,u)}function g(){var t=M(),e=v(t);if(r=arguments,o=this,a=t,e){if(void 0===s)return function(t){return f=t,s=setTimeout(y,n),l?d(t):u}(a);if(p)return clearTimeout(s),s=setTimeout(y,n),d(a)}return void 0===s&&(s=setTimeout(y,n)),u}return n=S(n)||0,c(e)&&(l=!!e.leading,i=(p="maxWait"in e)?P(S(e.maxWait)||0,n):i,h="trailing"in e?!!e.trailing:h),g.cancel=function(){void 0!==s&&clearTimeout(s),f=0,r=a=o=s=void 0},g.flush=function(){return void 0===s?u:m(M())},g};function D(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n,e,r){var o=r.value;return{get:function(){return this.hasOwnProperty(e)||Object.defineProperty(this,e,{value:k.apply(void 0,function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var i=arguments[n],u=0,c=i.length;u<c;u++,o++)r[o]=i[u];return r}([o],t))}),this[e]}}}}var L,N=function(){function t(t){var n=this;void 0===t&&(t={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(t).forEach((function(e){n[e]=t[e]}))}return Object.defineProperty(t.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(t){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=t},enumerable:!0,configurable:!0}),u([T(0,1)],t.prototype,"damping",void 0),u([T(0,1/0)],t.prototype,"thumbMinSize",void 0),u([A],t.prototype,"renderByPixels",void 0),u([A],t.prototype,"alwaysShowTracks",void 0),u([A],t.prototype,"continuousScrolling",void 0),t}(),z=new WeakMap;function C(){if(void 0!==L)return L;var t=!1;try{var n=function(){},e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",n,e),window.removeEventListener("testPassive",n,e)}catch(t){}return L=!!t&&{passive:!1}}function R(t){var n=z.get(t)||[];return z.set(t,n),function(t,e,r){function o(t){t.defaultPrevented||r(t)}e.split(/\s+/g).forEach((function(e){n.push({elem:t,eventName:e,handler:o}),t.addEventListener(e,o,C())}))}}function F(t){var n=function(t){return t.touches?t.touches[t.touches.length-1]:t}(t);return{x:n.clientX,y:n.clientY}}function I(t,n){return void 0===n&&(n=[]),n.some((function(n){return t===n}))}var W=["webkit","moz","ms","o"],H=new RegExp("^-(?!(?:"+W.join("|")+")-)");function B(t,n){n=function(t){var n={};return Object.keys(t).forEach((function(e){if(H.test(e)){var r=t[e];e=e.replace(/^-/,""),n[e]=r,W.forEach((function(t){n["-"+t+"-"+e]=r}))}else n[e]=t[e]})),n}(n),Object.keys(n).forEach((function(e){var r=e.replace(/^-/,"").replace(/-([a-z])/g,(function(t,n){return n.toUpperCase()}));t.style[r]=n[e]}))}var G,X=function(){function t(t){this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=F(t)}return t.prototype.update=function(t){var n=this.velocity,e=this.updateTime,r=this.lastPosition,o=Date.now(),i=F(t),u={x:-(i.x-r.x),y:-(i.y-r.y)},c=o-e||16,s=u.x/c*16,a=u.y/c*16;n.x=.9*s+.1*n.x,n.y=.9*a+.1*n.y,this.delta=u,this.updateTime=o,this.lastPosition=i},t}(),V=function(){function t(){this._touchList={}}return Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){return void 0!==this._activeTouchID},t.prototype.getDelta=function(){var t=this._getActiveTracker();return t?i({},t.delta):this._primitiveValue},t.prototype.getVelocity=function(){var t=this._getActiveTracker();return t?i({},t.velocity):this._primitiveValue},t.prototype.track=function(t){var n=this,e=t.targetTouches;return Array.from(e).forEach((function(t){n._add(t)})),this._touchList},t.prototype.update=function(t){var n=this,e=t.touches,r=t.changedTouches;return Array.from(e).forEach((function(t){n._renew(t)})),this._setActiveID(r),this._touchList},t.prototype.release=function(t){var n=this;delete this._activeTouchID,Array.from(t.changedTouches).forEach((function(t){n._delete(t)}))},t.prototype._add=function(t){if(!this._has(t)){var n=new X(t);this._touchList[t.identifier]=n}},t.prototype._renew=function(t){this._has(t)&&this._touchList[t.identifier].update(t)},t.prototype._delete=function(t){delete this._touchList[t.identifier]},t.prototype._has=function(t){return this._touchList.hasOwnProperty(t.identifier)},t.prototype._setActiveID=function(t){this._activeTouchID=t[t.length-1].identifier},t.prototype._getActiveTracker=function(){return this._touchList[this._activeTouchID]},t}();!function(t){t.X="x",t.Y="y"}(G||(G={}));var U=function(){function t(t,n){void 0===n&&(n=0),this._direction=t,this._minSize=n,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+t}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.update=function(t,n,e){this.realSize=Math.min(n/e,1)*n,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=t/e*(n+(this.realSize-this.displaySize)),B(this.element,this._getStyle())},t.prototype._getStyle=function(){switch(this._direction){case G.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case G.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},t}(),Y=function(){function t(t,n){void 0===n&&(n=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+t,this.thumb=new U(t,n),this.thumb.attachTo(this.element)}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},t.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},t.prototype.update=function(t,n,e){B(this.element,{display:e<=n?"none":"block"}),this.thumb.update(t,n,e)},t}(),q=function(){function t(t){this._scrollbar=t;var n=t.options.thumbMinSize;this.xAxis=new Y(G.X,n),this.yAxis=new Y(G.Y,n),this.xAxis.attachTo(t.containerEl),this.yAxis.attachTo(t.containerEl),t.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return t.prototype.update=function(){var t=this._scrollbar,n=t.size,e=t.offset;this.xAxis.update(e.x,n.container.width,n.content.width),this.yAxis.update(e.y,n.container.height,n.content.height)},t.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},u([D(300)],t.prototype,"autoHideOnIdle",null),t}(),K=new WeakMap;function $(t){return Math.pow(t-1,3)+1}var J,Q,Z,tt=function(){function t(t,n){var e=this.constructor;this.scrollbar=t,this.name=e.pluginName,this.options=i(i({},e.defaultOptions),n)}return t.prototype.onInit=function(){},t.prototype.onDestroy=function(){},t.prototype.onUpdate=function(){},t.prototype.onRender=function(t){},t.prototype.transformDelta=function(t,n){return i({},t)},t.pluginName="",t.defaultOptions={},t}(),nt={order:new Set,constructors:{}};function et(t){var n=R(t),e=t.containerEl;n(e,"keydown",(function(n){var r=document.activeElement;if((r===e||e.contains(r))&&!function(t){return!("INPUT"!==t.tagName&&"SELECT"!==t.tagName&&"TEXTAREA"!==t.tagName&&!t.isContentEditable)&&!t.disabled}(r)){var o=function(t,n){var e=t.size,r=t.limit,o=t.offset;switch(n){case J.TAB:return function(t){requestAnimationFrame((function(){t.scrollIntoView(document.activeElement,{offsetTop:t.size.container.height/2,onlyScrollIfNeeded:!0})}))}(t);case J.SPACE:return[0,200];case J.PAGE_UP:return[0,40-e.container.height];case J.PAGE_DOWN:return[0,e.container.height-40];case J.END:return[0,r.y-o.y];case J.HOME:return[0,-o.y];case J.LEFT:return[-40,0];case J.UP:return[0,-40];case J.RIGHT:return[40,0];case J.DOWN:return[0,40];default:return null}}(t,n.keyCode||n.which);if(o){var i=o[0],u=o[1];t.addTransformableMomentum(i,u,n,(function(e){e?n.preventDefault():(t.containerEl.blur(),t.parent&&t.parent.containerEl.focus())}))}}}))}function rt(t){var n,e,r,o,i,u=R(t),c=t.containerEl,s=t.track,a=s.xAxis,f=s.yAxis;function l(n,e){var r=t.size;return n===Q.X?e/(r.container.width+(a.thumb.realSize-a.thumb.displaySize))*r.content.width:n===Q.Y?e/(r.container.height+(f.thumb.realSize-f.thumb.displaySize))*r.content.height:0}function p(t){return I(t,[a.element,a.thumb.element])?Q.X:I(t,[f.element,f.thumb.element])?Q.Y:void 0}u(c,"click",(function(n){if(!e&&I(n.target,[a.element,f.element])){var r=n.target,o=p(r),i=r.getBoundingClientRect(),u=F(n),c=t.offset,s=t.limit;if(o===Q.X){var h=u.x-i.left-a.thumb.displaySize/2;t.setMomentum(O(l(o,h)-c.x,-c.x,s.x-c.x),0)}o===Q.Y&&(h=u.y-i.top-f.thumb.displaySize/2,t.setMomentum(0,O(l(o,h)-c.y,-c.y,s.y-c.y)))}})),u(c,"mousedown",(function(e){if(I(e.target,[a.thumb.element,f.thumb.element])){n=!0;var u=e.target,s=F(e),l=u.getBoundingClientRect();o=p(u),r={x:s.x-l.left,y:s.y-l.top},i=c.getBoundingClientRect(),B(t.containerEl,{"-user-select":"none"})}})),u(window,"mousemove",(function(u){if(n){e=!0;var c=t.offset,s=F(u);if(o===Q.X){var a=s.x-r.x-i.left;t.setPosition(l(o,a),c.y)}o===Q.Y&&(a=s.y-r.y-i.top,t.setPosition(c.x,l(o,a)))}})),u(window,"mouseup blur",(function(){n=e=!1,B(t.containerEl,{"-user-select":""})}))}function ot(t){R(t)(window,"resize",k(t.update.bind(t),300))}function it(t){var n,e=R(t),r=t.containerEl,o=t.contentEl,i=t.offset,u=t.limit,c=!1;e(window,"mousemove",(function(e){c&&(cancelAnimationFrame(n),function e(r){var o=r.x,c=r.y;(o||c)&&(t.setMomentum(O(i.x+o,0,u.x)-i.x,O(i.y+c,0,u.y)-i.y),n=requestAnimationFrame((function(){e({x:o,y:c})})))}(function(t,n){var e=t.bounding,r=e.top,o=e.right,i=e.bottom,u=e.left,c=F(n),s=c.x,a=c.y,f={x:0,y:0};return 0===s&&0===a?f:(s>o-20?f.x=s-o+20:s<u+20&&(f.x=s-u-20),a>i-20?f.y=a-i+20:a<r+20&&(f.y=a-r-20),f.x*=2,f.y*=2,f)}(t,e)))})),e(o,"selectstart",(function(t){t.stopPropagation(),cancelAnimationFrame(n),c=!0})),e(window,"mouseup blur",(function(){cancelAnimationFrame(n),c=!1})),e(r,"scroll",(function(t){t.preventDefault(),r.scrollTop=r.scrollLeft=0}))}function ut(t){var n,e=/Android/.test(navigator.userAgent)?3:2,r=t.options.delegateTo||t.containerEl,o=new V,i=R(t),u=0;i(r,"touchstart",(function(e){o.track(e),t.setMomentum(0,0),0===u&&(n=t.options.damping,t.options.damping=Math.max(n,.5)),u++})),i(r,"touchmove",(function(n){if(!Z||Z===t){o.update(n);var e=o.getDelta(),r=e.x,i=e.y;t.addTransformableMomentum(r,i,n,(function(e){e&&(n.preventDefault(),Z=t)}))}})),i(r,"touchcancel touchend",(function(r){var i=o.getVelocity(),c={x:0,y:0};Object.keys(i).forEach((function(t){var r=i[t]/n;c[t]=Math.abs(r)<50?0:r*e})),t.addTransformableMomentum(c.x,c.y,r),0==--u&&(t.options.damping=n),o.release(r),Z=null}))}function ct(t){R(t)(t.options.delegateTo||t.containerEl,"onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel",(function(n){var e=function(t){if("deltaX"in t){var n=ft(t.deltaMode);return{x:t.deltaX/st.STANDARD*n,y:t.deltaY/st.STANDARD*n}}return"wheelDeltaX"in t?{x:t.wheelDeltaX/st.OTHERS,y:t.wheelDeltaY/st.OTHERS}:{x:0,y:t.wheelDelta/st.OTHERS}}(n),r=e.x,o=e.y;t.addTransformableMomentum(r,o,n,(function(t){t&&n.preventDefault()}))}))}!function(t){t[t.TAB=9]="TAB",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN"}(J||(J={})),function(t){t[t.X=0]="X",t[t.Y=1]="Y"}(Q||(Q={}));var st={STANDARD:1,OTHERS:-3},at=[1,28,500],ft=function(t){return at[t]||at[0]},lt=new Map,pt=function(){function t(t,n){var e=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=t;var r=this.contentEl=document.createElement("div");this.options=new N(n),t.setAttribute("data-scrollbar","true"),t.setAttribute("tabindex","-1"),B(t,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(t.style.msTouchAction="none"),r.className="scroll-content",Array.from(t.childNodes).forEach((function(t){r.appendChild(t)})),t.appendChild(r),this.track=new q(this),this.size=this.getSize(),this._plugins=function(t,n){return Array.from(nt.order).filter((function(t){return!1!==n[t]})).map((function(e){var r=new(0,nt.constructors[e])(t,n[e]);return n[e]=r.options,r}))}(this,this.options.plugins);var o=t.scrollLeft,i=t.scrollTop;t.scrollLeft=t.scrollTop=0,this.setPosition(o,i,{withoutCallbacks:!0});var u=window,c=u.MutationObserver||u.WebKitMutationObserver||u.MozMutationObserver;"function"==typeof c&&(this._observer=new c((function(){e.update()})),this._observer.observe(r,{subtree:!0,childList:!0})),lt.set(t,this),requestAnimationFrame((function(){e._init()}))}return Object.defineProperty(t.prototype,"parent",{get:function(){for(var t=this.containerEl.parentElement;t;){var n=lt.get(t);if(n)return n;t=t.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(t){this.setPosition(this.scrollLeft,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(t){this.setPosition(t,this.scrollTop)},enumerable:!0,configurable:!0}),t.prototype.getSize=function(){return function(t){var n=t.containerEl,e=t.contentEl;return{container:{width:n.clientWidth,height:n.clientHeight},content:{width:e.offsetWidth-e.clientWidth+e.scrollWidth,height:e.offsetHeight-e.clientHeight+e.scrollHeight}}}(this)},t.prototype.update=function(){!function(t){var n=t.getSize(),e={x:Math.max(n.content.width-n.container.width,0),y:Math.max(n.content.height-n.container.height,0)},r=t.containerEl.getBoundingClientRect(),o={top:Math.max(r.top,0),right:Math.min(r.right,window.innerWidth),bottom:Math.min(r.bottom,window.innerHeight),left:Math.max(r.left,0)};t.size=n,t.limit=e,t.bounding=o,t.track.update(),t.setPosition()}(this),this._plugins.forEach((function(t){t.onUpdate()}))},t.prototype.isVisible=function(t){return function(t,n){var e=t.bounding,r=n.getBoundingClientRect(),o=Math.max(e.top,r.top),i=Math.max(e.left,r.left),u=Math.min(e.right,r.right);return o<Math.min(e.bottom,r.bottom)&&i<u}(this,t)},t.prototype.setPosition=function(t,n,e){var r=this;void 0===t&&(t=this.offset.x),void 0===n&&(n=this.offset.y),void 0===e&&(e={});var o=function(t,n,e){var r=t.options,o=t.offset,u=t.limit,c=t.track,s=t.contentEl;return r.renderByPixels&&(n=Math.round(n),e=Math.round(e)),n=O(n,0,u.x),e=O(e,0,u.y),n!==o.x&&c.xAxis.show(),e!==o.y&&c.yAxis.show(),r.alwaysShowTracks||c.autoHideOnIdle(),n===o.x&&e===o.y?null:(o.x=n,o.y=e,B(s,{"-transform":"translate3d("+-n+"px, "+-e+"px, 0)"}),c.update(),{offset:i({},o),limit:i({},u)})}(this,t,n);o&&!e.withoutCallbacks&&this._listeners.forEach((function(t){t.call(r,o)}))},t.prototype.scrollTo=function(t,n,e,r){void 0===t&&(t=this.offset.x),void 0===n&&(n=this.offset.y),void 0===e&&(e=0),void 0===r&&(r={}),function(t,n,e,r,o){void 0===r&&(r=0);var i=void 0===o?{}:o,u=i.easing,c=void 0===u?$:u,s=i.callback,a=t.options,f=t.offset,l=t.limit;a.renderByPixels&&(n=Math.round(n),e=Math.round(e));var p=f.x,h=f.y,d=O(n,0,l.x)-p,v=O(e,0,l.y)-h,y=Date.now();cancelAnimationFrame(K.get(t)),function n(){var e=Date.now()-y,o=r?c(Math.min(e/r,1)):1;if(t.setPosition(p+d*o,h+v*o),e>=r)"function"==typeof s&&s.call(t);else{var i=requestAnimationFrame(n);K.set(t,i)}}()}(this,t,n,e,r)},t.prototype.scrollIntoView=function(t,n){void 0===n&&(n={}),function(t,n,e){var r=void 0===e?{}:e,o=r.alignToTop,i=void 0===o||o,u=r.onlyScrollIfNeeded,c=void 0!==u&&u,s=r.offsetTop,a=void 0===s?0:s,f=r.offsetLeft,l=void 0===f?0:f,p=r.offsetBottom,h=void 0===p?0:p,d=t.containerEl,v=t.bounding,y=t.offset,m=t.limit;if(n&&d.contains(n)){var g=n.getBoundingClientRect();if(!c||!t.isVisible(n)){var b=i?g.top-v.top-a:g.bottom-v.bottom+h;t.setMomentum(g.left-v.left-l,O(b,-y.y,m.y-y.y))}}}(this,t,n)},t.prototype.addListener=function(t){if("function"!=typeof t)throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(t)},t.prototype.removeListener=function(t){this._listeners.delete(t)},t.prototype.addTransformableMomentum=function(t,n,e,r){this._updateDebounced();var o=this._plugins.reduce((function(t,n){return n.transformDelta(t,e)||t}),{x:t,y:n}),i=!this._shouldPropagateMomentum(o.x,o.y);i&&this.addMomentum(o.x,o.y),r&&r.call(this,i)},t.prototype.addMomentum=function(t,n){this.setMomentum(this._momentum.x+t,this._momentum.y+n)},t.prototype.setMomentum=function(t,n){0===this.limit.x&&(t=0),0===this.limit.y&&(n=0),this.options.renderByPixels&&(t=Math.round(t),n=Math.round(n)),this._momentum.x=t,this._momentum.y=n},t.prototype.updatePluginOptions=function(t,n){this._plugins.forEach((function(e){e.name===t&&Object.assign(e.options,n)}))},t.prototype.destroy=function(){var t=this.containerEl,n=this.contentEl;!function(t){var n=z.get(t);n&&(n.forEach((function(t){var n=t.elem,e=t.eventName,r=t.handler;n.removeEventListener(e,r,C())})),z.delete(t))}(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),lt.delete(this.containerEl);for(var e=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);e.forEach((function(n){t.appendChild(n)})),B(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach((function(t){t.onDestroy()})),this._plugins.length=0},t.prototype._init=function(){var t=this;this.update(),Object.keys(r).forEach((function(n){r[n](t)})),this._plugins.forEach((function(t){t.onInit()})),this._render()},t.prototype._updateDebounced=function(){this.update()},t.prototype._shouldPropagateMomentum=function(t,n){void 0===t&&(t=0),void 0===n&&(n=0);var e=this.options,r=this.offset,o=this.limit;if(!e.continuousScrolling)return!1;0===o.x&&0===o.y&&this._updateDebounced();var i=O(t+r.x,0,o.x),u=O(n+r.y,0,o.y),c=!0;return(c=(c=c&&i===r.x)&&u===r.y)&&(r.x===o.x||0===r.x||r.y===o.y||0===r.y)},t.prototype._render=function(){var t=this._momentum;if(t.x||t.y){var n=this._nextTick("x"),e=this._nextTick("y");t.x=n.momentum,t.y=e.momentum,this.setPosition(n.position,e.position)}var r=i({},this._momentum);this._plugins.forEach((function(t){t.onRender(r)})),this._renderID=requestAnimationFrame(this._render.bind(this))},t.prototype._nextTick=function(t){var n=this.options,e=this.offset,r=this._momentum,o=e[t],i=r[t];if(Math.abs(i)<=.1)return{momentum:0,position:o+i};var u=i*(1-n.damping);return n.renderByPixels&&(u|=0),{momentum:u,position:o+i-u}},u([D(100,{leading:!0})],t.prototype,"_updateDebounced",null),t}(),ht="\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",dt="smooth-scrollbar-style",vt=!1;function yt(){if(!vt&&"undefined"!=typeof window){var t=document.createElement("style");t.id=dt,t.textContent=ht,document.head&&document.head.appendChild(t),vt=!0}}e.d(n,"ScrollbarPlugin",(function(){return tt}));
/*!
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */
var mt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}(n,t),n.init=function(t,n){if(!t||1!==t.nodeType)throw new TypeError("expect element to be DOM Element, but got "+t);return yt(),lt.has(t)?lt.get(t):new pt(t,n)},n.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),(function(e){return n.init(e,t)}))},n.has=function(t){return lt.has(t)},n.get=function(t){return lt.get(t)},n.getAll=function(){return Array.from(lt.values())},n.destroy=function(t){var n=lt.get(t);n&&n.destroy()},n.destroyAll=function(){lt.forEach((function(t){t.destroy()}))},n.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];t.forEach((function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");nt.order.add(n),nt.constructors[n]=t}))}.apply(void 0,t)},n.attachStyle=function(){return yt()},n.detachStyle=function(){return function(){if(vt&&"undefined"!=typeof window){var t=document.getElementById(dt);t&&t.parentNode&&(t.parentNode.removeChild(t),vt=!1)}}()},n.version="8.5.1",n.ScrollbarPlugin=tt,n}(pt);n.default=mt}]).default}));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/templates/divanchik/js/slick.js?175396189142863";s:6:"source";s:38:"/local/templates/divanchik/js/slick.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/local/templates/divanchik/js/jquery.fancybox.js?175396189123215";s:6:"source";s:48:"/local/templates/divanchik/js/jquery.fancybox.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! fancyBox v2.1.7 fancyapps.com | fancyapps.com/fancybox/#license */
(function(t,J,f,x){var L=f("html"),q=f(t),p=f(J),b=f.fancybox=function(){b.open.apply(this,arguments)},K=navigator.userAgent.match(/msie/i),D=null,u=J.createTouch!==x,v=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},G=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,c){var d=parseInt(a,10)||0;c&&G(a)&&(d*=b.getViewport()[c]/100);return Math.ceil(d)},y=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.7",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!u,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(K?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},openEffect:"fade",
openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},
previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,c){if(a&&(f.isPlainObject(c)||(c={}),!1!==b.close(!0)))return f.isArray(a)||(a=v(a)?f(a).get():[a]),f.each(a,function(d,e){var k={},g,l,h,n,m;"object"===f.type(e)&&(e.nodeType&&(e=f(e)),v(e)?(k={href:e.data("fancybox-href")||e.attr("href"),title:f("<div/>").text(e.data("fancybox-title")||
e.attr("title")||"").html(),isDom:!0,element:e},f.metadata&&f.extend(!0,k,e.metadata())):k=e);g=c.href||k.href||(r(e)?e:null);l=c.title!==x?c.title:k.title||"";n=(h=c.content||k.content)?"html":c.type||k.type;!n&&k.isDom&&(n=e.data("fancybox-type"),n||(n=(n=e.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(e)&&(n="html",h=e)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));h||("inline"===n?g?h=f(r(g)?
g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(h=e):"html"===n?h=g:n||g||!k.isDom||(n="inline",h=e));f.extend(k,{href:g,type:n,content:h,title:l,selector:m});a[d]=k}),b.opts=f.extend(!0,{},b.defaults,c),c.keys!==x&&(b.opts.keys=c.keys?f.extend({},b.defaults.keys,c.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&
a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var c=function(){clearTimeout(b.player.timer)},
d=function(){c();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,b.current.playSpeed))},e=function(){c();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":e,"onUpdate.player":d,"beforeLoad.player":c}),d(),b.trigger("onPlayStart")):e()},next:function(a){var c=b.current;c&&(r(a)||(a=c.direction.next),b.jumpto(c.index+
1,a,"next"))},prev:function(a){var c=b.current;c&&(r(a)||(a=c.direction.prev),b.jumpto(c.index-1,a,"prev"))},jumpto:function(a,c,d){var e=b.current;e&&(a=m(a),b.direction=c||e.direction[a>=e.index?"next":"prev"],b.router=d||"jumpto",e.loop&&(0>a&&(a=e.group.length+a%e.group.length),a%=e.group.length),e.group[a]!==x&&(b.cancel(),b._start(a)))},reposition:function(a,c){var d=b.current,e=d?d.wrap:null,k;e&&(k=b._getPosition(c),a&&"scroll"===a.type?(delete k.position,e.stop(!0,!0).animate(k,200)):(e.css(k),
d.pos=f.extend({},d.dim,k)))},update:function(a){var c=a&&a.originalEvent&&a.originalEvent.type,d=!c||"orientationchange"===c;d&&(clearTimeout(D),D=null);b.isOpen&&!D&&(D=setTimeout(function(){var e=b.current;e&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(d||"load"===c||"resize"===c&&e.autoResize)&&b._setDimension(),"scroll"===c&&e.canShrink||b.reposition(a),b.trigger("onUpdate"),D=null)},d&&!u?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,
u&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,c;b.hideLoading();a=f(b.opts.tpl.loading).click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(c=b.getViewport(),a.css({position:"absolute",top:.5*c.h+c.y,left:.5*c.w+c.x}));b.trigger("onLoading")},getViewport:function(){var a=
b.current&&b.current.locked||!1,c={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(c.w=a[0].clientWidth,c.h=a[0].clientHeight):(c.w=u&&t.innerWidth?t.innerWidth:q.width(),c.h=u&&t.innerHeight?t.innerHeight:q.height());return c},unbindEvents:function(){b.wrap&&v(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,c;a&&(q.bind("orientationchange.fb"+(u?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(c=a.keys)&&p.bind("keydown.fb",
function(d){var e=d.which||d.keyCode,k=d.target||d.srcElement;if(27===e&&b.coming)return!1;d.ctrlKey||d.altKey||d.shiftKey||d.metaKey||k&&(k.type||f(k).is("[contenteditable]"))||f.each(c,function(c,k){if(1<a.group.length&&k[e]!==x)return b[c](k[e]),d.preventDefault(),!1;if(-1<f.inArray(e,k))return b[c](),d.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(c,e,k,g){for(var d=f(c.target||null),h=!1;d.length&&!(h||d.is(".fancybox-skin")||d.is(".fancybox-wrap"));)h=
(h=d[0])&&!(h.style.overflow&&"hidden"===h.style.overflow)&&(h.clientWidth&&h.scrollWidth>h.clientWidth||h.clientHeight&&h.scrollHeight>h.clientHeight),d=f(d).parent();0!==e&&!h&&1<b.group.length&&!a.canShrink&&(0<g||0<k?b.prev(0<g?"down":"left"):(0>g||0>k)&&b.next(0>g?"up":"right"),c.preventDefault())}))},trigger:function(a,c){var d,e=c||b.coming||b.current;if(e){f.isFunction(e[a])&&(d=e[a].apply(e,Array.prototype.slice.call(arguments,1)));if(!1===d)return!1;e.helpers&&f.each(e.helpers,function(c,
d){if(d&&b.helpers[c]&&f.isFunction(b.helpers[c][a]))b.helpers[c][a](f.extend(!0,{},b.helpers[c].defaults,d),e)})}p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var c={},d,e;a=m(a);d=b.group[a]||null;if(!d)return!1;c=f.extend(!0,{},b.opts,d);d=c.margin;e=c.padding;"number"===f.type(d)&&(c.margin=[d,d,d,d]);"number"===f.type(e)&&(c.padding=
[e,e,e,e]);c.modal&&f.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});c.autoSize&&(c.autoWidth=c.autoHeight=!0);"auto"===c.width&&(c.autoWidth=!0);"auto"===c.height&&(c.autoHeight=!0);c.group=b.group;c.index=a;b.coming=c;if(!1===b.trigger("beforeLoad"))b.coming=null;else{e=c.type;d=c.href;if(!e)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===
e||"swf"===e)c.autoHeight=c.autoWidth=!1,c.scrolling="visible";"image"===e&&(c.aspectRatio=!0);"iframe"===e&&u&&(c.scrolling="scroll");c.wrap=f(c.tpl.wrap).addClass("fancybox-"+(u?"mobile":"desktop")+" fancybox-type-"+e+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent||"body");f.extend(c,{skin:f(".fancybox-skin",c.wrap),outer:f(".fancybox-outer",c.wrap),inner:f(".fancybox-inner",c.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){c.skin.css("padding"+b,y(c.padding[a]))});b.trigger("onReady");
if("inline"===e||"html"===e){if(!c.content||!c.content.length)return b._error("content")}else if(!d)return b._error("href");"image"===e?b._loadImage():"ajax"===e?b._loadAjax():"iframe"===e?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,d){b.coming&&"abort"!==d?b._error("ajax",a):b.hideLoading()},success:function(c,d){"success"===d&&(a.content=c,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,
c=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",u?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(d){}});a.iframe.preload&&(b.showLoading(),c.one("load",function(){f(this).data("ready",1);u||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=c.appendTo(a.inner);a.iframe.preload||
b._afterLoad()},_preloadImages:function(){var a=b.group,c=b.current,d=a.length,e=c.preload?Math.min(c.preload,d-1):0,f,g;for(g=1;g<=e;g+=1)f=a[(c.index+g)%d],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,c=b.current,d,e,k,g,l;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,c))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{c&&(b.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
b.unbindEvents();d=a.content;e=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:c});g=a.href;switch(e){case "inline":case "ajax":case "html":a.selector?d=f("<div>").html(d).find(a.selector):v(d)&&(d.data("fancybox-placeholder")||d.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()),d=d.show().detach(),a.wrap.bind("onReset",function(){f(this).find(d).length&&d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":d=a.tpl.image.replace(/\{href\}/g,g);break;case "swf":d='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',l="",f.each(a.swf,function(a,b){d+='<param name="'+a+'" value="'+b+'"></param>';l+=" "+a+'="'+b+'"'}),d+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+l+"></embed></object>"}v(d)&&d.parent().is(a.inner)||a.inner.append(d);b.trigger("beforeShow");
a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(c.prevMethod)b.transitions[c.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),c=0,d,e=b.wrap,k=b.skin,g=b.inner,l=b.current;d=l.width;var h=l.height,n=l.minWidth,w=l.minHeight,p=l.maxWidth,
q=l.maxHeight,u=l.scrolling,r=l.scrollOutside?l.scrollbarWidth:0,z=l.margin,A=m(z[1]+z[3]),t=m(z[0]+z[2]),x,B,v,E,C,H,D,F,I;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");z=m(k.outerWidth(!0)-k.width());x=m(k.outerHeight(!0)-k.height());B=A+z;v=t+x;E=G(d)?(a.w-B)*m(d)/100:d;C=G(h)?(a.h-v)*m(h)/100:h;if("iframe"===l.type){if(I=l.content,l.autoHeight&&I&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(E).height(9999),H=I.contents().find("body"),r&&H.css("overflow-x",
"hidden"),C=H.outerHeight(!0))}catch(M){}}else if(l.autoWidth||l.autoHeight)g.addClass("fancybox-tmp"),l.autoWidth||g.width(E),l.autoHeight||g.height(C),l.autoWidth&&(E=g.width()),l.autoHeight&&(C=g.height()),g.removeClass("fancybox-tmp");d=m(E);h=m(C);F=E/C;n=m(G(n)?m(n,"w")-B:n);p=m(G(p)?m(p,"w")-B:p);w=m(G(w)?m(w,"h")-v:w);q=m(G(q)?m(q,"h")-v:q);H=p;D=q;l.fitToView&&(p=Math.min(a.w-B,p),q=Math.min(a.h-v,q));B=a.w-A;t=a.h-t;l.aspectRatio?(d>p&&(d=p,h=m(d/F)),h>q&&(h=q,d=m(h*F)),d<n&&(d=n,h=m(d/
F)),h<w&&(h=w,d=m(h*F))):(d=Math.max(n,Math.min(d,p)),l.autoHeight&&"iframe"!==l.type&&(g.width(d),h=g.height()),h=Math.max(w,Math.min(h,q)));if(l.fitToView)if(g.width(d).height(h),e.width(d+z),a=e.width(),A=e.height(),l.aspectRatio)for(;(a>B||A>t)&&d>n&&h>w&&!(19<c++);)h=Math.max(w,Math.min(q,h-10)),d=m(h*F),d<n&&(d=n,h=m(d/F)),d>p&&(d=p,h=m(d/F)),g.width(d).height(h),e.width(d+z),a=e.width(),A=e.height();else d=Math.max(n,Math.min(d,d-(a-B))),h=Math.max(w,Math.min(h,h-(A-t)));r&&"auto"===u&&h<C&&
d+z+r<B&&(d+=r);g.width(d).height(h);e.width(d+z);a=e.width();A=e.height();c=(a>B||A>t)&&d>n&&h>w;d=l.aspectRatio?d<H&&h<D&&d<E&&h<C:(d<H||h<D)&&(d<E||h<C);f.extend(l,{dim:{width:y(a),height:y(A)},origWidth:E,origHeight:C,canShrink:c,canExpand:d,wPadding:z,hPadding:x,wrapSpace:A-k.outerHeight(!0),skinSpace:k.height()-h});!I&&l.autoHeight&&h>w&&h<q&&!d&&g.height("auto")},_getPosition:function(a){var c=b.current,d=b.getViewport(),e=c.margin,f=b.wrap.width()+e[1]+e[3],g=b.wrap.height()+e[0]+e[2],e={position:"absolute",
top:e[0],left:e[3]};c.autoCenter&&c.fixed&&!a&&g<=d.h&&f<=d.w?e.position="fixed":c.locked||(e.top+=d.y,e.left+=d.x);e.top=y(Math.max(e.top,e.top+(d.h-g)*c.topRatio));e.left=y(Math.max(e.left,e.left+(d.w-f)*c.leftRatio));return e},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened").hide().show(0),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(c){f(c.target).is("a")||
f(c.target).parent().is("a")||(c.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=
!1,b.play(!0)):b.play(!1))},_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,c=a.element,d=a.orig,e={},f=50,g=50,l=a.hPadding,h=a.wPadding,n=b.getViewport();!d&&a.isDom&&c.is(":visible")&&(d=c.find("img:first"),d.length||(d=c));v(d)?
(e=d.offset(),d.is("img")&&(f=d.outerWidth(),g=d.outerHeight())):(e.top=n.y+(n.h-g)*a.topRatio,e.left=n.x+(n.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)e.top-=n.y,e.left-=n.x;return e={top:y(e.top-l*a.topRatio),left:y(e.left-h*a.leftRatio),width:y(f+h),height:y(g+l)}},step:function(a,c){var d,e,f=c.prop;e=b.current;var g=e.wrapSpace,l=e.skinSpace;if("width"===f||"height"===f)d=c.end===c.start?1:(a-c.start)/(c.end-c.start),b.isClosing&&(d=1-d),e="width"===f?e.wPadding:e.hPadding,
e=a-e,b.skin[f](m("width"===f?e:e-g*d)),b.inner[f](m("width"===f?e:e-g*d-l*d))},zoomIn:function(){var a=b.current,c=a.pos,d=a.openEffect,e="elastic"===d,k=f.extend({opacity:1},c);delete k.position;e?(c=this.getOrigPosition(),a.openOpacity&&(c.opacity=.1)):"fade"===d&&(c.opacity=.1);b.wrap.css(c).animate(k,{duration:"none"===d?0:a.openSpeed,easing:a.openEasing,step:e?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,c=a.closeEffect,d="elastic"===c,e={opacity:.1};d&&(e=this.getOrigPosition(),
a.closeOpacity&&(e.opacity=.1));b.wrap.animate(e,{duration:"none"===c?0:a.closeSpeed,easing:a.closeEasing,step:d?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,c=a.nextEffect,d=a.pos,e={opacity:1},f=b.direction,g;d.opacity=.1;"elastic"===c&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(d[g]=y(m(d[g])-200),e[g]="+=200px"):(d[g]=y(m(d[g])+200),e[g]="-=200px"));"none"===c?b._afterZoomIn():b.wrap.css(d).animate(e,{duration:a.nextSpeed,easing:a.nextEasing,
complete:b._afterZoomIn})},changeOut:function(){var a=b.previous,c=a.prevEffect,d={opacity:.1},e=b.direction;"elastic"===c&&(d["down"===e||"up"===e?"top":"left"]=("up"===e||"left"===e?"-":"+")+"=200px");a.wrap.animate(d,{duration:"none"===c?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!u,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var c;a=f.extend({},
this.defaults,a);this.overlay&&this.close();c=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(c&&c.length?c:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var c=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&
this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():c.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");
K?(b=Math.max(J.documentElement.offsetWidth,J.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var d=this.overlay;f(".fancybox-overlay").stop(!0,!0);d||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*:not(object)").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",
position:"bottom"},beforeShow:function(a){var c=b.current,d=c.title,e=a.type;f.isFunction(d)&&(d=d.call(c.element,c));if(r(d)&&""!==f.trim(d)){c=f('<div class="fancybox-title fancybox-title-'+e+'-wrap">'+d+"</div>");switch(e){case "inside":e=b.skin;break;case "outside":e=b.wrap;break;case "over":e=b.inner;break;default:e=b.skin,c.appendTo("body"),K&&c.width(c.width()),c.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(c.css("margin-bottom")))}c["top"===a.position?"prependTo":
"appendTo"](e)}}};f.fn.fancybox=function(a){var c,d=f(this),e=this.selector||"",k=function(g){var l=f(this).blur(),h=c,k,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||l.is(".fancybox-wrap")||(k=a.groupAttr||"data-fancybox-group",m=l.attr(k),m||(k="rel",m=l.get(0)[k]),m&&""!==m&&"nofollow"!==m&&(l=e.length?f(e):d,l=l.filter("["+k+'="'+m+'"]'),h=l.index(this)),a.index=h,!1!==b.open(l,a)&&g.preventDefault())};a=a||{};c=a.index||0;e&&!1!==a.live?p.undelegate(e,"click.fb-start").delegate(e+":not('.fancybox-item, .fancybox-nav')",
"click.fb-start",k):d.unbind("click.fb-start").bind("click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,c;f.scrollbarWidth===x&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===x&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(t).width();L.addClass("fancybox-lock-test");c=f(t).width();L.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(c-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:59:"/local/templates/divanchik/js/jquery.mask.js?17539618918400";s:6:"source";s:44:"/local/templates/divanchik/js/jquery.mask.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/


// jQuery Mask Plugin v1.14.15
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp={scope:{},findInternal:function(a,l,d){a instanceof String&&(a=String(a));for(var p=a.length,h=0;h<p;h++){var b=a[h];if(l.call(d,b,h,a))return{i:h,v:b}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,l,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[l]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,l,d,p){if(l){d=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var h=a[p];h in d||(d[h]={});d=d[h]}a=a[a.length-1];p=d[a];l=l(p);l!=p&&null!=l&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:l})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6-impl","es3");
(function(a,l,d){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(l||d)})(function(a){var l=function(b,e,f){var c={invalid:[],getCaret:function(){try{var a,r=0,g=b.get(0),e=document.selection,f=g.selectionStart;if(e&&-1===navigator.appVersion.indexOf("MSIE 10"))a=e.createRange(),a.moveStart("character",-c.val().length),r=a.text.length;else if(f||"0"===f)r=f;return r}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c,
g=b.get(0);g.setSelectionRange?g.setSelectionRange(a,a):(c=g.createTextRange(),c.collapse(!0),c.moveEnd("character",a),c.moveStart("character",a),c.select())}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){d===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){d=c.val()}).on("focus.mask",function(b){!0===f.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){f.clearIfNotMatch&&!h.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,f,n,d=0;d<e.length;d++)(b=m.translation[e.charAt(d)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=b.optional,
(b=b.recursive)?(a.push(e.charAt(d)),n={digit:e.charAt(d),pattern:c}):a.push(f||b?c+"?":c)):a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");n&&(a=a.replace(new RegExp("("+n.digit+"(.*"+n.digit+")?)"),"($1)?").replace(new RegExp(n.digit,"g"),n.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(){var a=b.data("mask-previus-value")||"",e=c.getMasked(),g=c.getCaret();if(a!==e){var f=b.data("mask-previus-caret-pos")||0,e=e.length,d=a.length,m=a=0,h=0,l=0,k;for(k=g;k<e&&c.maskDigitPosMap[k];k++)m++;for(k=g-1;0<=k&&c.maskDigitPosMap[k];k--)a++;for(k=g-1;0<=k;k--)c.maskDigitPosMap[k]&&h++;for(k=f-1;0<=k;k--)c.maskDigitPosMapOld[k]&&l++;g>d?g=10*e:f>=g&&f!==d?c.maskDigitPosMapOld[g]||(f=g,g=g-(l-h)-a,c.maskDigitPosMap[g]&&(g=f)):g>f&&
(g=g+(h-l)+m)}return g},behaviour:function(f){f=f||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,m.byPassKeys)){var e=c.getMasked(),g=c.getCaret();setTimeout(function(){c.setCaret(c.calculateCaretPosition())},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(g);return c.callbacks(f)}},getMasked:function(a,b){var g=[],d=void 0===b?c.val():b+"",n=0,h=e.length,q=0,l=d.length,k=1,r="push",p=-1,t=0,y=[],v,z;f.reverse?(r="unshift",k=-1,v=0,n=h-1,q=l-1,z=function(){return-1<
n&&-1<q}):(v=h-1,z=function(){return n<h&&q<l});for(var A;z();){var x=e.charAt(n),w=d.charAt(q),u=m.translation[x];if(u)w.match(u.pattern)?(g[r](w),u.recursive&&(-1===p?p=n:n===v&&n!==p&&(n=p-k),v===p&&(n-=k)),n+=k):w===A?(t--,A=void 0):u.optional?(n+=k,q-=k):u.fallback?(g[r](u.fallback),n+=k,q-=k):c.invalid.push({p:q,v:w,e:u.pattern}),q+=k;else{if(!a)g[r](x);w===x?(y.push(q),q+=k):(A=x,y.push(q+t),t++);n+=k}}d=e.charAt(v);h!==l+1||m.translation[d]||g.push(d);g=g.join("");c.mapMaskdigitPositions(g,
y,l);return g},mapMaskdigitPositions:function(a,b,e){a=f.reverse?a.length-e:0;c.maskDigitPosMap={};for(e=0;e<b.length;e++)c.maskDigitPosMap[b[e]+a]=1},callbacks:function(a){var h=c.val(),g=h!==d,m=[h,a,b,f],q=function(a,b,c){"function"===typeof f[a]&&b&&f[a].apply(this,c)};q("onChange",!0===g,m);q("onKeyPress",!0===g,m);q("onComplete",h.length===e.length,m);q("onInvalid",0<c.invalid.length,[h,a,b,c.invalid,f])}};b=a(b);var m=this,d=c.val(),h;e="function"===typeof e?e(c.val(),void 0,b,f):e;m.mask=
e;m.options=f;m.remove=function(){var a=c.getCaret();m.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(m.getCleanVal());c.setCaret(a);return b};m.getCleanVal=function(){return c.getMasked(!0)};m.getMaskedVal=function(a){return c.getMasked(!1,a)};m.init=function(d){d=d||!1;f=f||{};m.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;m.byPassKeys=a.jMaskGlobals.byPassKeys;m.translation=a.extend({},a.jMaskGlobals.translation,f.translation);
m=a.extend(!0,{},m,f);h=c.getRegexMask();if(d)c.events(),c.val(c.getMasked());else{f.placeholder&&b.attr("placeholder",f.placeholder);b.data("mask")&&b.attr("autocomplete","off");d=0;for(var l=!0;d<e.length;d++){var g=m.translation[e.charAt(d)];if(g&&g.recursive){l=!1;break}}l&&b.attr("maxlength",e.length).data("mask-maxlength",!0);c.destroyEvents();c.events();d=c.getCaret();c.val(c.getMasked());c.setCaret(d)}};m.init(!b.is("input"))};a.maskWatchers={};var d=function(){var b=a(this),e={},f=b.attr("data-mask");
b.attr("data-mask-reverse")&&(e.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0);if(p(b,f,e))return b.data("mask",new l(this,f,e))},p=function(b,e,f){f=f||{};var c=a(b).data("mask"),d=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof e&&(e=e(b)),"object"!==typeof c||d(c.options)!==d(f)||c.mask!==e}catch(t){}},h=function(a){var b=document.createElement("div"),d;a="on"+a;d=a in b;d||(b.setAttribute(a,
"return;"),d="function"===typeof b[a]);return d};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,h=c.watchInterval,c=d.watchInputs||c.watchInputs,t=function(){if(p(this,b,d))return a(this).data("mask",new l(this,b,d))};a(this).each(t);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(t)},h));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d)};h={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
h("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};h=a.jMaskGlobals=a.extend(!0,{},h,a.jMaskGlobals);h.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},h.watchInterval)},window.jQuery,window.Zepto);


/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/divanchik/js/jquery.appear.js?17539618911569";s:6:"source";s:46:"/local/templates/divanchik/js/jquery.appear.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
!function(e){e.fn.appear=function(a,r){var p=e.extend({data:void 0,one:!0,accX:0,accY:0},r);return this.each(function(){var r=e(this);if(r.appeared=!1,a){var n=e(window),t=function(){if(r.is(":visible")){var e=n.scrollLeft(),a=n.scrollTop(),t=r.offset(),c=t.left,i=t.top,o=p.accX,f=p.accY,s=r.height(),l=n.height(),h=r.width(),d=n.width();i+s+f>=a&&i<=a+l+f&&c+h+o>=e&&c<=e+d+o?r.appeared||r.trigger("appear",p.data):r.appeared=!1}else r.appeared=!1},c=function(){if(r.appeared=!0,p.one){n.unbind("scroll",t);var c=e.inArray(t,e.fn.appear.checks);c>=0&&e.fn.appear.checks.splice(c,1)}a.apply(this,arguments)};p.one?r.one("appear",p.data,c):r.bind("appear",p.data,c),n.scroll(t),e.fn.appear.checks.push(t),t()}else r.trigger("appear",p.data)})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var a=e.fn.appear.checks.length;if(a>0)for(;a--;)e.fn.appear.checks[a]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(a,r){var p=e.fn[r];p&&(e.fn[r]=function(){var a=p.apply(this,arguments);return e.fn.appear.run(),a})})}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/local/templates/divanchik/js/jquery.formstyler.js?175396189140251";s:6:"source";s:50:"/local/templates/divanchik/js/jquery.formstyler.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery Form Styler v1.7.8
 * https://github.com/Dimox/jQueryFormStyler
 *
 * Copyright 2012-2017 Dimox (http://dimox.name/)
 * Released under the MIT license.
 *
 * Date: 2017.02.17
 *
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a($||require("jquery")):a(jQuery)}(function(a){"use strict";function d(b,d){this.element=b,this.options=a.extend({},c,d);var e=this.options.locale;void 0!==this.options.locales[e]&&a.extend(this.options,this.options.locales[e]),this.init()}function e(c){if(!a(c.target).parents().hasClass("jq-selectbox")&&"OPTION"!=c.target.nodeName&&a("div.jq-selectbox.opened").length){var d=a("div.jq-selectbox.opened"),e=a("div.jq-selectbox__search input",d),f=a("div.jq-selectbox__dropdown",d);d.find("select").data("_"+b).options.onSelectClosed.call(d),e.length&&e.val("").keyup(),f.hide().find("li.sel").addClass("selected"),d.removeClass("focused opened dropup dropdown")}}var b="styler",c={idSuffix:"-styler",filePlaceholder:"Файл не выбран",fileBrowse:"Обзор...",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,singleSelectzIndex:"100",selectSmartPositioning:!1,locale:"ru",locales:{en:{filePlaceholder:"No file selected",fileBrowse:"Browse...",fileNumber:"Selected files: %s",selectPlaceholder:"Select...",selectSearchNotFound:"No matches found",selectSearchPlaceholder:"Search..."}},onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};d.prototype={init:function(){function g(){void 0!==b.attr("id")&&""!==b.attr("id")&&(this.id=b.attr("id")+c.idSuffix),this.title=b.attr("title"),this.classes=b.attr("class"),this.data=b.data()}var b=a(this.element),c=this.options,d=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),f=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));if(b.is(":checkbox")){var h=function(){var c=new g,d=a('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:c.id,title:c.title}).addClass(c.classes).data(c.data);b.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(d).prependTo(d),d.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative",overflow:"hidden"}),b.is(":checked")&&d.addClass("checked"),b.is(":disabled")&&d.addClass("disabled"),d.click(function(a){a.preventDefault(),d.is(".disabled")||(b.is(":checked")?(b.prop("checked",!1),d.removeClass("checked")):(b.prop("checked",!0),d.addClass("checked")),b.focus().change())}),b.closest("label").add('label[for="'+b.attr("id")+'"]').on("click.styler",function(b){a(b.target).is("a")||a(b.target).closest(d).length||(d.triggerHandler("click"),b.preventDefault())}),b.on("change.styler",function(){b.is(":checked")?d.addClass("checked"):d.removeClass("checked")}).on("keydown.styler",function(a){32==a.which&&d.click()}).on("focus.styler",function(){d.is(".disabled")||d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")})};h(),b.on("refresh",function(){b.closest("label").add('label[for="'+b.attr("id")+'"]').off(".styler"),b.off(".styler").parent().before(b).remove(),h()})}else if(b.is(":radio")){var i=function(){var c=new g,d=a('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:c.id,title:c.title}).addClass(c.classes).data(c.data);b.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(d).prependTo(d),d.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative"}),b.is(":checked")&&d.addClass("checked"),b.is(":disabled")&&d.addClass("disabled"),a.fn.commonParents=function(){var b=this;return b.first().parents().filter(function(){return a(this).find(b).length===b.length})},a.fn.commonParent=function(){return a(this).commonParents().first()},d.click(function(c){if(c.preventDefault(),!d.is(".disabled")){var e=a('input[name="'+b.attr("name")+'"]');e.commonParent().find(e).prop("checked",!1).parent().removeClass("checked"),b.prop("checked",!0).parent().addClass("checked"),b.focus().change()}}),b.closest("label").add('label[for="'+b.attr("id")+'"]').on("click.styler",function(b){a(b.target).is("a")||a(b.target).closest(d).length||(d.triggerHandler("click"),b.preventDefault())}),b.on("change.styler",function(){b.parent().addClass("checked")}).on("focus.styler",function(){d.is(".disabled")||d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")})};i(),b.on("refresh",function(){b.closest("label").add('label[for="'+b.attr("id")+'"]').off(".styler"),b.off(".styler").parent().before(b).remove(),i()})}else if(b.is(":file")){b.css({position:"absolute",top:0,right:0,margin:0,padding:0,opacity:0,fontSize:"100px"});var j=function(){var d=new g,e=b.data("placeholder");void 0===e&&(e=c.filePlaceholder);var f=b.data("browse");void 0!==f&&""!==f||(f=c.fileBrowse);var h=a('<div class="jq-file"><div class="jq-file__name">'+e+'</div><div class="jq-file__browse">'+f+"</div></div>").css({display:"inline-block",position:"relative",overflow:"hidden"}).attr({id:d.id,title:d.title}).addClass(d.classes).data(d.data);b.after(h).appendTo(h),b.is(":disabled")&&h.addClass("disabled"),b.on("change.styler",function(){var d=b.val(),f=a("div.jq-file__name",h);if(b.is("[multiple]")){d="";var g=b[0].files.length;if(g>0){var i=b.data("number");void 0===i&&(i=c.fileNumber),i=i.replace("%s",g),d=i}}f.text(d.replace(/.+[\\\/]/,"")),""===d?(f.text(e),h.removeClass("changed")):h.addClass("changed")}).on("focus.styler",function(){h.addClass("focused")}).on("blur.styler",function(){h.removeClass("focused")}).on("click.styler",function(){h.removeClass("focused")})};j(),b.on("refresh",function(){b.off(".styler").parent().before(b).remove(),j()})}else if(b.is('input[type="number"]')){var k=function(){var c=new g,d=a('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({id:c.id,title:c.title}).addClass(c.classes).data(c.data);b.after(d).prependTo(d).wrap('<div class="jq-number__field"></div>'),b.is(":disabled")&&d.addClass("disabled");var e,f,h,i=null,j=null;void 0!==b.attr("min")&&(e=b.attr("min")),void 0!==b.attr("max")&&(f=b.attr("max")),h=void 0!==b.attr("step")&&a.isNumeric(b.attr("step"))?Number(b.attr("step")):Number(1);var k=function(c){var g,d=b.val();a.isNumeric(d)||(d=0,b.val("0")),c.is(".minus")?g=Number(d)-h:c.is(".plus")&&(g=Number(d)+h);var i=(h.toString().split(".")[1]||[]).length;if(i>0){for(var j="1";j.length<=i;)j+="0";g=Math.round(g*j)/j}a.isNumeric(e)&&a.isNumeric(f)?g>=e&&g<=f&&b.val(g):a.isNumeric(e)&&!a.isNumeric(f)?g>=e&&b.val(g):!a.isNumeric(e)&&a.isNumeric(f)?g<=f&&b.val(g):b.val(g)};d.is(".disabled")||(d.on("mousedown","div.jq-number__spin",function(){var b=a(this);k(b),i=setTimeout(function(){j=setInterval(function(){k(b)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(i),clearInterval(j)}).on("mouseup","div.jq-number__spin",function(){b.change()}),b.on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")}))};k(),b.on("refresh",function(){b.off(".styler").closest(".jq-number").before(b).remove(),k()})}else if(b.is("select")){var l=function(){function h(b){b.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(b){var c=null;"mousewheel"==b.type?c=-1*b.originalEvent.wheelDelta:"DOMMouseScroll"==b.type&&(c=40*b.originalEvent.detail),c&&(b.stopPropagation(),b.preventDefault(),a(this).scrollTop(c+a(this).scrollTop()))})}function k(){for(var a=0;a<i.length;a++){var b=i.eq(a),d="",e="",f="",g="",h="",k="",l="",m="",n="";b.prop("selected")&&(e="selected sel"),b.is(":disabled")&&(e="disabled"),b.is(":selected:disabled")&&(e="selected sel disabled"),void 0!==b.attr("id")&&""!==b.attr("id")&&(g=' id="'+b.attr("id")+c.idSuffix+'"'),void 0!==b.attr("title")&&""!==i.attr("title")&&(h=' title="'+b.attr("title")+'"'),void 0!==b.attr("class")&&(l=" "+b.attr("class"),n=' data-jqfs-class="'+b.attr("class")+'"');var q=b.data();for(var r in q)""!==q[r]&&(k+=" data-"+r+'="'+q[r]+'"');e+l!==""&&(f=' class="'+e+l+'"'),d="<li"+n+k+f+h+g+">"+b.html()+"</li>",b.parent().is("optgroup")&&(void 0!==b.parent().attr("class")&&(m=" "+b.parent().attr("class")),d="<li"+n+k+' class="'+e+l+" option"+m+'"'+h+g+">"+b.html()+"</li>",b.is(":first-child")&&(d='<li class="optgroup'+m+'">'+b.parent().attr("label")+"</li>"+d)),j+=d}}function l(){var d=new g,f="",l=b.data("placeholder"),m=b.data("search"),n=b.data("search-limit"),o=b.data("search-not-found"),p=b.data("search-placeholder"),q=b.data("z-index"),r=b.data("smart-positioning");void 0===l&&(l=c.selectPlaceholder),void 0!==m&&""!==m||(m=c.selectSearch),void 0!==n&&""!==n||(n=c.selectSearchLimit),void 0!==o&&""!==o||(o=c.selectSearchNotFound),void 0===p&&(p=c.selectSearchPlaceholder),void 0!==q&&""!==q||(q=c.singleSelectzIndex),void 0!==r&&""!==r||(r=c.selectSmartPositioning);var s=a('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').css({display:"inline-block",position:"relative",zIndex:q}).attr({id:d.id,title:d.title}).addClass(d.classes).data(d.data);b.css({margin:0,padding:0}).after(s).prependTo(s);var t=a("div.jq-selectbox__select",s),u=a("div.jq-selectbox__select-text",s),v=i.filter(":selected");k(),m&&(f='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+p+'"></div><div class="jq-selectbox__not-found">'+o+"</div>");var w=a('<div class="jq-selectbox__dropdown" style="position: absolute">'+f+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+j+"</ul></div>");s.append(w);var x=a("ul",w),y=a("li",w),z=a("input",w),A=a("div.jq-selectbox__not-found",w).hide();y.length<n&&z.parent().hide(),""===i.first().text()&&i.first().is(":selected")&&!1!==l?u.text(l).addClass("placeholder"):u.text(v.text());var B=0,C=0;if(y.css({display:"inline-block"}),y.each(function(){var b=a(this);b.innerWidth()>B&&(B=b.innerWidth(),C=b.width())}),y.css({display:""}),u.is(".placeholder")&&u.width()>B)u.width(u.width());else{var D=s.clone().appendTo("body").width("auto"),E=D.outerWidth();D.remove(),E==s.outerWidth()&&u.width(C)}B>s.width()&&w.width(B),""===i.first().text()&&""!==b.data("placeholder")&&y.first().hide(),b.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var F=s.outerHeight(!0),G=z.parent().outerHeight(!0)||0,H=x.css("max-height"),I=y.filter(".selected");if(I.length<1&&y.first().addClass("selected sel"),void 0===y.data("li-height")){var J=y.outerHeight();!1!==l&&(J=y.eq(1).outerHeight()),y.data("li-height",J)}var K=w.css("top");if("auto"==w.css("left")&&w.css({left:0}),"auto"==w.css("top")&&(w.css({top:F}),K=F),w.hide(),I.length&&(i.first().text()!=v.text()&&s.addClass("changed"),s.data("jqfs-class",I.data("jqfs-class")),s.addClass(I.data("jqfs-class"))),b.is(":disabled"))return s.addClass("disabled"),!1;t.click(function(){a("div.jq-selectbox").filter(".opened").length&&c.onSelectClosed.call(a("div.jq-selectbox").filter(".opened")),b.focus();var d=a(window),e=y.data("li-height"),f=s.offset().top,g=d.height()-F-(f-d.scrollTop()),j=b.data("visible-options");void 0!==j&&""!==j||(j=c.selectVisibleOptions);var k=5*e,l=e*j;j>0&&j<6&&(k=l),0===j&&(l="auto");var m=function(){w.height("auto").css({bottom:"auto",top:K});var a=function(){x.css("max-height",Math.floor((g-20-G)/e)*e)};a(),x.css("max-height",l),"none"!=H&&x.css("max-height",H),g<w.outerHeight()+20&&a()},n=function(){w.height("auto").css({top:"auto",bottom:K});var a=function(){x.css("max-height",Math.floor((f-d.scrollTop()-20-G)/e)*e)};a(),x.css("max-height",l),"none"!=H&&x.css("max-height",H),f-d.scrollTop()-20<w.outerHeight()+20&&a()};!0===r||1===r?g>k+G+20?(m(),s.removeClass("dropup").addClass("dropdown")):(n(),s.removeClass("dropdown").addClass("dropup")):!1===r||0===r?g>k+G+20&&(m(),s.removeClass("dropup").addClass("dropdown")):(w.height("auto").css({bottom:"auto",top:K}),x.css("max-height",l),"none"!=H&&x.css("max-height",H)),s.offset().left+w.outerWidth()>d.width()&&w.css({left:"auto",right:0}),a("div.jqselect").css({zIndex:q-1}).removeClass("opened"),s.css({zIndex:q}),w.is(":hidden")?(a("div.jq-selectbox__dropdown:visible").hide(),w.show(),s.addClass("opened focused"),c.onSelectOpened.call(s)):(w.hide(),s.removeClass("opened dropup dropdown"),a("div.jq-selectbox").filter(".opened").length&&c.onSelectClosed.call(s)),z.length&&(z.val("").keyup(),A.hide(),z.keyup(function(){var c=a(this).val();y.each(function(){a(this).html().match(new RegExp(".*?"+c+".*?","i"))?a(this).show():a(this).hide()}),""===i.first().text()&&""!==b.data("placeholder")&&y.first().hide(),y.filter(":visible").length<1?A.show():A.hide()})),y.filter(".selected").length&&(""===b.val()?x.scrollTop(0):(x.innerHeight()/e%2!=0&&(e/=2),x.scrollTop(x.scrollTop()+y.filter(".selected").position().top-x.innerHeight()/2+e))),h(x)}),y.hover(function(){a(this).siblings().removeClass("selected")});var L=y.filter(".selected").text();y.filter(":not(.disabled):not(.optgroup)").click(function(){b.focus();var d=a(this),e=d.text();if(!d.is(".selected")){var f=d.index();f-=d.prevAll(".optgroup").length,d.addClass("selected sel").siblings().removeClass("selected sel"),i.prop("selected",!1).eq(f).prop("selected",!0),L=e,u.text(e),s.data("jqfs-class")&&s.removeClass(s.data("jqfs-class")),s.data("jqfs-class",d.data("jqfs-class")),s.addClass(d.data("jqfs-class")),b.change()}w.hide(),s.removeClass("opened dropup dropdown"),c.onSelectClosed.call(s)}),w.mouseout(function(){a("li.sel",w).addClass("selected")}),b.on("change.styler",function(){u.text(i.filter(":selected").text()).removeClass("placeholder"),y.removeClass("selected sel").not(".optgroup").eq(b[0].selectedIndex).addClass("selected sel"),i.first().text()!=y.filter(".selected").text()?s.addClass("changed"):s.removeClass("changed")}).on("focus.styler",function(){s.addClass("focused"),a("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){s.removeClass("focused")}).on("keydown.styler keyup.styler",function(a){var d=y.data("li-height");""===b.val()?u.text(l).addClass("placeholder"):u.text(i.filter(":selected").text()),y.removeClass("selected sel").not(".optgroup").eq(b[0].selectedIndex).addClass("selected sel"),38!=a.which&&37!=a.which&&33!=a.which&&36!=a.which||(""===b.val()?x.scrollTop(0):x.scrollTop(x.scrollTop()+y.filter(".selected").position().top)),40!=a.which&&39!=a.which&&34!=a.which&&35!=a.which||x.scrollTop(x.scrollTop()+y.filter(".selected").position().top-x.innerHeight()+d),13==a.which&&(a.preventDefault(),w.hide(),s.removeClass("opened dropup dropdown"),c.onSelectClosed.call(s))}).on("keydown.styler",function(a){32==a.which&&(a.preventDefault(),t.click())}),e.registered||(a(document).on("click",e),e.registered=!0)}function m(){var c=new g,d=a('<div class="jq-select-multiple jqselect"></div>').css({display:"inline-block",position:"relative"}).attr({id:c.id,title:c.title}).addClass(c.classes).data(c.data);b.css({margin:0,padding:0}).after(d),k(),d.append("<ul>"+j+"</ul>");var e=a("ul",d).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),f=a("li",d).attr("unselectable","on"),l=b.attr("size"),m=e.outerHeight(),n=f.outerHeight();void 0!==l&&l>0?e.css({height:n*l}):e.css({height:4*n}),m>d.height()&&(e.css("overflowY","scroll"),h(e),f.filter(".selected").length&&e.scrollTop(e.scrollTop()+f.filter(".selected").position().top)),b.prependTo(d).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0}),b.is(":disabled")?(d.addClass("disabled"),i.each(function(){a(this).is(":selected")&&f.eq(a(this).index()).addClass("selected")})):(f.filter(":not(.disabled):not(.optgroup)").click(function(c){b.focus();var d=a(this);if(c.ctrlKey||c.metaKey||d.addClass("selected"),c.shiftKey||d.addClass("first"),c.ctrlKey||c.metaKey||c.shiftKey||d.siblings().removeClass("selected first"),(c.ctrlKey||c.metaKey)&&(d.is(".selected")?d.removeClass("selected first"):d.addClass("selected first"),d.siblings().removeClass("first")),c.shiftKey){var e=!1,g=!1;d.siblings().removeClass("selected").siblings(".first").addClass("selected"),d.prevAll().each(function(){a(this).is(".first")&&(e=!0)}),d.nextAll().each(function(){a(this).is(".first")&&(g=!0)}),e&&d.prevAll().each(function(){if(a(this).is(".selected"))return!1;a(this).not(".disabled, .optgroup").addClass("selected")}),g&&d.nextAll().each(function(){if(a(this).is(".selected"))return!1;a(this).not(".disabled, .optgroup").addClass("selected")}),1==f.filter(".selected").length&&d.addClass("first")}i.prop("selected",!1),f.filter(".selected").each(function(){var b=a(this),c=b.index();b.is(".option")&&(c-=b.prevAll(".optgroup").length),i.eq(c).prop("selected",!0)}),b.change()}),i.each(function(b){a(this).data("optionIndex",b)}),b.on("change.styler",function(){f.removeClass("selected");var b=[];i.filter(":selected").each(function(){b.push(a(this).data("optionIndex"))}),f.not(".optgroup").filter(function(c){return a.inArray(c,b)>-1}).addClass("selected")}).on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")}),m>d.height()&&b.on("keydown.styler",function(a){38!=a.which&&37!=a.which&&33!=a.which||e.scrollTop(e.scrollTop()+f.filter(".selected").position().top-n),40!=a.which&&39!=a.which&&34!=a.which||e.scrollTop(e.scrollTop()+f.filter(".selected:last").position().top-e.innerHeight()+2*n)}))}var i=a("option",b),j="";if(b.is("[multiple]")){if(f||d)return;m()}else l()};l(),b.on("refresh",function(){b.off(".styler").parent().before(b).remove(),l()})}else b.is(":reset")&&b.on("click",function(){setTimeout(function(){b.closest("form").find("input, select").trigger("refresh")},1)})},destroy:function(){var c=a(this.element);c.is(":checkbox")||c.is(":radio")?(c.removeData("_"+b).off(".styler refresh").removeAttr("style").parent().before(c).remove(),c.closest("label").add('label[for="'+c.attr("id")+'"]').off(".styler")):c.is('input[type="number"]')?c.removeData("_"+b).off(".styler refresh").closest(".jq-number").before(c).remove():(c.is(":file")||c.is("select"))&&c.removeData("_"+b).off(".styler refresh").removeAttr("style").parent().before(c).remove()}},a.fn[b]=function(c){var e=arguments;if(void 0===c||"object"==typeof c)return this.each(function(){a.data(this,"_"+b)||a.data(this,"_"+b,new d(this,c))}).promise().done(function(){var c=a(this[0]).data("_"+b);c&&c.options.onFormStyled.call()}),this;if("string"==typeof c&&"_"!==c[0]&&"init"!==c){var f;return this.each(function(){var g=a.data(this,"_"+b);g instanceof d&&"function"==typeof g[c]&&(f=g[c].apply(g,Array.prototype.slice.call(e,1)))}),void 0!==f?f:this}},e.registered=!1});


//validate
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){t.extend(t.fn,{validate:function(e){if(this.length){var i=t.data(this[0],"validator");return i||(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.on("click.validate",":submit",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(this).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(this).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.on("submit.validate",function(e){function s(){var s,r;return!i.settings.submitHandler||(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),r=i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),void 0!==r&&r)}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)}e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.")},valid:function(){var e,i,s;return t(this[0]).is("form")?e=this.validate().form():(s=[],e=!0,i=t(this[0].form).validate(),this.each(function(){e=i.element(this)&&e,s=s.concat(i.errorList)}),i.errorList=s),e},rules:function(e,i){var s,r,n,a,o,l,h=this[0];if(e)switch(s=t.data(h.form,"validator").settings,r=s.rules,n=t.validator.staticRules(h),e){case"add":t.extend(n,t.validator.normalizeRule(i)),delete n.messages,r[h.name]=n,i.messages&&(s.messages[h.name]=t.extend(s.messages[h.name],i.messages));break;case"remove":return i?(l={},t.each(i.split(/\s/),function(e,i){l[i]=n[i],delete n[i],"required"===i&&t(h).removeAttr("aria-required")}),l):(delete r[h.name],n)}return(a=t.validator.normalizeRules(t.extend({},t.validator.classRules(h),t.validator.attributeRules(h),t.validator.dataRules(h),t.validator.staticRules(h)),h)).required&&(o=a.required,delete a.required,a=t.extend({required:o},a),t(h).attr("aria-required","true")),a.remote&&(o=a.remote,delete a.remote,a=t.extend(a,{remote:o})),a}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(new RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(t)))},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(e,i){var s=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===i.which&&""===this.elementValue(e)||-1!==t.inArray(i.keyCode,s)||(e.name in this.submitted||e===this.lastElement)&&this.element(e)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this.form,"validator"),s="on"+e.type.replace(/^validate/,""),r=i.settings;r[s]&&!t(this).is(r.ignore)&&r[s].call(i,this,e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i,s=this.groups={};t.each(this.settings.groups,function(e,i){"string"==typeof i&&(i=i.split(/\s/)),t.each(i,function(t,i){s[i]=e})}),i=this.settings.rules,t.each(i,function(e,s){i[e]=t.validator.normalizeRule(s)}),t(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",e).on("click.validate","select, option, [type='radio'], [type='checkbox']",e),this.settings.invalidHandler&&t(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){var i=this.clean(e),s=this.validationTargetFor(i),r=!0;return this.lastElement=s,void 0===s?delete this.invalid[i.name]:(this.prepareElement(s),this.currentElements=t(s),(r=!1!==this.check(s))?delete this.invalid[s.name]:this.invalid[s.name]=!0),t(e).attr("aria-invalid",!r),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),r},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors();var e,i=this.elements().removeData("previousValue").removeAttr("aria-invalid");if(this.settings.unhighlight)for(e=0;i[e];e++)this.settings.unhighlight.call(this,i[e],this.settings.errorClass,"");else i.removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e,i=0;for(e in t)i++;return i},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(t){t.not(this.containers).text(""),this.addWrapper(t).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(t){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),!(this.name in i||!e.objectLength(t(this).rules()))&&(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.split(" ").join(".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i,s=t(e),r=e.type;return"radio"===r||"checkbox"===r?this.findByName(e.name).filter(":checked").val():"number"===r&&void 0!==e.validity?!e.validity.badInput&&s.val():"string"==typeof(i=s.val())?i.replace(/\r/g,""):i},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s,r,n=t(e).rules(),a=t.map(n,function(t,e){return e}).length,o=!1,l=this.elementValue(e);for(s in n){r={method:s,parameters:n[s]};try{if("dependency-mismatch"===(i=t.validator.methods[s].call(this,l,e,r.parameters))&&1===a){o=!0;continue}if(o=!1,"pending"===i)return void(this.toHide=this.toHide.not(this.errorsFor(e)));if(!i)return this.formatAndAdd(e,r),!1}catch(t){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+r.method+"' method.",t),t instanceof TypeError&&(t.message+=".  Exception occurred when checking element "+e.id+", check the '"+r.method+"' method."),t}}if(!o)return this.objectLength(n)&&this.successList.push(e),!0},customDataMessage:function(e,i){return t(e).data("msg"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase())||t(e).data("msg")},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e,method:i.method}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e,i;for(t=0;this.errorList[t];t++)i=this.errorList[t],this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s,r,n,a=this.errorsFor(e),o=this.idOrName(e),l=t(e).attr("aria-describedby");a.length?(a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),a.html(i)):(s=a=t("<"+this.settings.errorElement+">").attr("id",o+"-error").addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(s):this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e),a.is("label")?a.attr("for",o):0===a.parents("label[for='"+o+"']").length&&(n=a.attr("id").replace(/(:|\.|\[|\]|\$)/g,"\\$1"),l?l.match(new RegExp("\\b"+n+"\\b"))||(l+=" "+n):l=n,t(e).attr("aria-describedby",l),(r=this.groups[e.name])&&t.each(this.groups,function(e,i){i===r&&t("[name='"+e+"']",this.currentForm).attr("aria-describedby",a.attr("id"))}))),!i&&this.settings.success&&(a.text(""),"string"==typeof this.settings.success?a.addClass(this.settings.success):this.settings.success(a,e)),this.toShow=this.toShow.add(a)},errorsFor:function(e){var i=this.idOrName(e),s=t(e).attr("aria-describedby"),r="label[for='"+i+"'], label[for='"+i+"'] *";return s&&(r=r+", #"+s.replace(/\s+/g,", #")),this.errors().filter(r)},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name)),t(e).not(this.settings.ignore)[0]},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return!this.dependTypes[typeof t]||this.dependTypes[typeof t](t,e)},dependTypes:{boolean:function(t){return t},string:function(e,i){return!!t(e,i.form).length},function:function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){--this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})},destroy:function(){this.resetForm(),t(this.currentForm).off(".validate").removeData("validator")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},normalizeAttributeRule:function(t,e,i,s){/min|max/.test(i)&&(null===e||/number|range|text/.test(e))&&(s=Number(s),isNaN(s)&&(s=void 0)),s||0===s?t[i]=s:e===i&&"range"!==e&&(t[i]=!0)},attributeRules:function(e){var i,s,r={},n=t(e),a=e.getAttribute("type");for(i in t.validator.methods)"required"===i?(""===(s=e.getAttribute(i))&&(s=!0),s=!!s):s=n.attr(i),this.normalizeAttributeRule(r,a,i,s);return r.maxlength&&/-1|2147483647|524288/.test(r.maxlength)&&delete r.maxlength,r},dataRules:function(e){var i,s,r={},n=t(e),a=e.getAttribute("type");for(i in t.validator.methods)s=n.data("rule"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase()),this.normalizeAttributeRule(r,a,i,s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(!1!==r){if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0===r.param||r.param:delete e[s]}}else delete e[s]}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].replace(/[\[\]]/g,"").split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(null!=e.min&&null!=e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),null!=e.minlength&&null!=e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],i.length<3&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:e.length>0},email:function(t,e){return this.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)},url:function(t,e){return this.optional(e)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString())},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},number:function(t,e){return this.optional(e)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i,s,r=0,n=0,a=!1;if((t=t.replace(/\D/g,"")).length<13||t.length>19)return!1;for(i=t.length-1;i>=0;i--)s=t.charAt(i),n=parseInt(s,10),a&&(n*=2)>9&&(n-=9),r+=n,a=!a;return r%10==0},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||r<=s},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||r>=s[0]&&r<=s[1]},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||t<=i},range:function(t,e,i){return this.optional(e)||t>=i[0]&&t<=i[1]},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.off(".validate-equalTo").on("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r,n,a=this.previousValue(i);return this.settings.messages[i.name]||(this.settings.messages[i.name]={}),a.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=a.message,s="string"==typeof s&&{url:s}||s,a.old===e?a.valid:(a.old=e,r=this,this.startRequest(i),n={},n[i.name]=e,t.ajax(t.extend(!0,{mode:"abort",port:"validate"+i.name,dataType:"json",data:n,context:r.currentForm,success:function(s){var n,o,l,h=!0===s||"true"===s;r.settings.messages[i.name].remote=a.originalMessage,h?(l=r.formSubmitted,r.prepareElement(i),r.formSubmitted=l,r.successList.push(i),delete r.invalid[i.name],r.showErrors()):(n={},o=s||r.defaultMessage(i,"remote"),n[i.name]=a.message=t.isFunction(o)?o(e):o,r.invalid[i.name]=!0,r.showErrors(n)),a.valid=h,r.stopRequest(i,h)}},s)),"pending")}}});var e,i={};t.ajaxPrefilter?t.ajaxPrefilter(function(t,e,s){var r=t.port;"abort"===t.mode&&(i[r]&&i[r].abort(),i[r]=s)}):(e=t.ajax,t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(i[n]&&i[n].abort(),i[n]=e.apply(this,arguments),i[n]):e.apply(this,arguments)})});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:54:"/local/templates/divanchik/js/main.js?1765875680209635";s:6:"source";s:37:"/local/templates/divanchik/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*Catalog Scripts1*/
"use strict";

var IsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);

(function(fn) {
    if (typeof define === 'function' && define.amd) {
        define([], fn);
    } else if ((typeof module !== "undefined" && module !== null) && module.exports) {
        module.exports = fn;
    } else {
        fn();
    }
})(function(){
    var assign = Object.assign || window.jQuery && jQuery.extend;

    // Number of pixels a pressed pointer travels before movestart
    // event is fired.
    var threshold = 8;

    // Shim for requestAnimationFrame, falling back to timer. See:
    // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    var requestFrame = (function(){
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(fn, element){
                return window.setTimeout(function(){
                    fn();
                }, 25);
            }
        );
    })();

    var ignoreTags = {
            textarea: true,
            input: true,
            select: true,
            button: true
        };

    var mouseevents = {
        move:   'mousemove',
        cancel: 'mouseup dragstart',
        end:    'mouseup'
    };

    var touchevents = {
        move:   'touchmove',
        cancel: 'touchend',
        end:    'touchend'
    };

    var rspaces = /\s+/;


    // DOM Events

    var eventOptions = { bubbles: true, cancelable: true };

    var eventsSymbol = Symbol('events');

    function createEvent(type) {
        return new CustomEvent(type, eventOptions);
    }

    function getEvents(node) {
        return node[eventsSymbol] || (node[eventsSymbol] = {});
    }

    function on(node, types, fn, data, selector) {
        types = types.split(rspaces);

        var events = getEvents(node);
        var i = types.length;
        var handlers, type;

        function handler(e) { fn(e, data); }

        while (i--) {
            type = types[i];
            handlers = events[type] || (events[type] = []);
            handlers.push([fn, handler]);
            node.addEventListener(type, handler);
        }
    }

    function off(node, types, fn, selector) {
        types = types.split(rspaces);

        var events = getEvents(node);
        var i = types.length;
        var type, handlers, k;

        if (!events) { return; }

        while (i--) {
            type = types[i];
            handlers = events[type];
            if (!handlers) { continue; }
            k = handlers.length;
            while (k--) {
                if (handlers[k][0] === fn) {
                    node.removeEventListener(type, handlers[k][1]);
                    handlers.splice(k, 1);
                }
            }
        }
    }

    function trigger(node, type, properties) {
        // Don't cache events. It prevents you from triggering an event of a
        // given type from inside the handler of another event of that type.
        var event = createEvent(type);
        if (properties) { assign(event, properties); }
        node.dispatchEvent(event);
    }


    // Constructors

    function Timer(fn){
        var callback = fn,
            active = false,
            running = false;

        function trigger(time) {
            if (active){
                callback();
                requestFrame(trigger);
                running = true;
                active = false;
            }
            else {
                running = false;
            }
        }

        this.kick = function(fn) {
            active = true;
            if (!running) { trigger(); }
        };

        this.end = function(fn) {
            var cb = callback;

            if (!fn) { return; }

            // If the timer is not running, simply call the end callback.
            if (!running) {
                fn();
            }
            // If the timer is running, and has been kicked lately, then
            // queue up the current callback and the end callback, otherwise
            // just the end callback.
            else {
                callback = active ?
                    function(){ cb(); fn(); } :
                    fn ;

                active = true;
            }
        };
    }


    //  Functions

    function noop() {}

    function preventDefault(e) {
        e.preventDefault();
    }

    function isIgnoreTag(e) {
        return !!ignoreTags[e.target.tagName.toLowerCase()];
    }

    function isPrimaryButton(e) {
        // Ignore mousedowns on any button other than the left (or primary)
        // mouse button, or when a modifier key is pressed.
        return (e.which === 1 && !e.ctrlKey && !e.altKey);
    }

    function identifiedTouch(touchList, id) {
        var i, l;

        if (touchList.identifiedTouch) {
            return touchList.identifiedTouch(id);
        }

        // touchList.identifiedTouch() does not exist in
        // webkit yet… we must do the search ourselves...

        i = -1;
        l = touchList.length;

        while (++i < l) {
            if (touchList[i].identifier === id) {
                return touchList[i];
            }
        }
    }

    function changedTouch(e, data) {
        var touch = identifiedTouch(e.changedTouches, data.identifier);

        // This isn't the touch you're looking for.
        if (!touch) { return; }

        // Chrome Android (at least) includes touches that have not
        // changed in e.changedTouches. That's a bit annoying. Check
        // that this touch has changed.
        if (touch.pageX === data.pageX && touch.pageY === data.pageY) { return; }

        return touch;
    }


    // Handlers that decide when the first movestart is triggered

    function mousedown(e){
        // Ignore non-primary buttons
        if (!isPrimaryButton(e)) { return; }

        // Ignore form and interactive elements
        if (isIgnoreTag(e)) { return; }

        on(document, mouseevents.move, mousemove, e);
        on(document, mouseevents.cancel, mouseend, e);
    }

    function mousemove(e, data){
        checkThreshold(e, data, e, removeMouse);
    }

    function mouseend(e, data) {
        removeMouse();
    }

    function removeMouse() {
        off(document, mouseevents.move, mousemove);
        off(document, mouseevents.cancel, mouseend);
    }

    function touchstart(e) {
        // Don't get in the way of interaction with form elements
        if (ignoreTags[e.target.tagName.toLowerCase()]) { return; }

        var touch = e.changedTouches[0];

        // iOS live updates the touch objects whereas Android gives us copies.
        // That means we can't trust the touchstart object to stay the same,
        // so we must copy the data. This object acts as a template for
        // movestart, move and moveend event objects.
        var data = {
            target:     touch.target,
            pageX:      touch.pageX,
            pageY:      touch.pageY,
            identifier: touch.identifier,

            // The only way to make handlers individually unbindable is by
            // making them unique.
            touchmove:  function(e, data) { touchmove(e, data); },
            touchend:   function(e, data) { touchend(e, data); }
        };

        on(document, touchevents.move, data.touchmove, data);
        on(document, touchevents.cancel, data.touchend, data);
    }

    function touchmove(e, data) {
        var touch = changedTouch(e, data);
        if (!touch) { return; }
        checkThreshold(e, data, touch, removeTouch);
    }

    function touchend(e, data) {
        var touch = identifiedTouch(e.changedTouches, data.identifier);
        if (!touch) { return; }
        removeTouch(data);
    }

    function removeTouch(data) {
        off(document, touchevents.move, data.touchmove);
        off(document, touchevents.cancel, data.touchend);
    }

    function checkThreshold(e, data, touch, fn) {
        var distX = touch.pageX - data.pageX;
        var distY = touch.pageY - data.pageY;

        // Do nothing if the threshold has not been crossed.
        if ((distX * distX) + (distY * distY) < (threshold * threshold)) { return; }

        triggerStart(e, data, touch, distX, distY, fn);
    }

    function triggerStart(e, data, touch, distX, distY, fn) {
        var touches = e.targetTouches;
        var time = e.timeStamp - data.timeStamp;

        // Create a movestart object with some special properties that
        // are passed only to the movestart handlers.
        var template = {
            altKey:     e.altKey,
            ctrlKey:    e.ctrlKey,
            shiftKey:   e.shiftKey,
            startX:     data.pageX,
            startY:     data.pageY,
            distX:      distX,
            distY:      distY,
            deltaX:     distX,
            deltaY:     distY,
            pageX:      touch.pageX,
            pageY:      touch.pageY,
            velocityX:  distX / time,
            velocityY:  distY / time,
            identifier: data.identifier,
            targetTouches: touches,
            finger: touches ? touches.length : 1,
            enableMove: function() {
                this.moveEnabled = true;
                this.enableMove = noop;
                e.preventDefault();
            }
        };

        // Trigger the movestart event.
        trigger(data.target, 'movestart', template);

        // Unbind handlers that tracked the touch or mouse up till now.
        fn(data);
    }


    // Handlers that control what happens following a movestart

    function activeMousemove(e, data) {
        var timer  = data.timer;

        data.touch = e;
        data.timeStamp = e.timeStamp;
        timer.kick();
    }

    function activeMouseend(e, data) {
        var target = data.target;
        var event  = data.event;
        var timer  = data.timer;

        removeActiveMouse();

        endEvent(target, event, timer, function() {
            // Unbind the click suppressor, waiting until after mouseup
            // has been handled.
            setTimeout(function(){
                off(target, 'click', preventDefault);
            }, 0);
        });
    }

    function removeActiveMouse() {
        off(document, mouseevents.move, activeMousemove);
        off(document, mouseevents.end, activeMouseend);
    }

    function activeTouchmove(e, data) {
        var event = data.event;
        var timer = data.timer;
        var touch = changedTouch(e, event);

        if (!touch) { return; }

        // Stop the interface from gesturing
        e.preventDefault();

        event.targetTouches = e.targetTouches;
        data.touch = touch;
        data.timeStamp = e.timeStamp;

        timer.kick();
    }

    function activeTouchend(e, data) {
        var target = data.target;
        var event  = data.event;
        var timer  = data.timer;
        var touch  = identifiedTouch(e.changedTouches, event.identifier);

        // This isn't the touch you're looking for.
        if (!touch) { return; }

        removeActiveTouch(data);
        endEvent(target, event, timer);
    }

    function removeActiveTouch(data) {
        off(document, touchevents.move, data.activeTouchmove);
        off(document, touchevents.end, data.activeTouchend);
    }


    // Logic for triggering move and moveend events

    function updateEvent(event, touch, timeStamp) {
        var time = timeStamp - event.timeStamp;

        event.distX =  touch.pageX - event.startX;
        event.distY =  touch.pageY - event.startY;
        event.deltaX = touch.pageX - event.pageX;
        event.deltaY = touch.pageY - event.pageY;

        // Average the velocity of the last few events using a decay
        // curve to even out spurious jumps in values.
        event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
        event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
        event.pageX =  touch.pageX;
        event.pageY =  touch.pageY;
    }

    function endEvent(target, event, timer, fn) {
        timer.end(function(){
            trigger(target, 'moveend', event);
            return fn && fn();
        });
    }


    // Set up the DOM

    function movestart(e) {
        if (e.defaultPrevented) { return; }
        if (!e.moveEnabled) { return; }

        var event = {
            startX:        e.startX,
            startY:        e.startY,
            pageX:         e.pageX,
            pageY:         e.pageY,
            distX:         e.distX,
            distY:         e.distY,
            deltaX:        e.deltaX,
            deltaY:        e.deltaY,
            velocityX:     e.velocityX,
            velocityY:     e.velocityY,
            identifier:    e.identifier,
            targetTouches: e.targetTouches,
            finger:        e.finger
        };

        var data = {
            target:    e.target,
            event:     event,
            timer:     new Timer(update),
            touch:     undefined,
            timeStamp: e.timeStamp
        };

        function update(time) {
            updateEvent(event, data.touch, data.timeStamp);
            trigger(data.target, 'move', event);
        }

        if (e.identifier === undefined) {
            // We're dealing with a mouse event.
            // Stop clicks from propagating during a move
            on(e.target, 'click', preventDefault);
            on(document, mouseevents.move, activeMousemove, data);
            on(document, mouseevents.end, activeMouseend, data);
        }
        else {
            // In order to unbind correct handlers they have to be unique
            data.activeTouchmove = function(e, data) { activeTouchmove(e, data); };
            data.activeTouchend = function(e, data) { activeTouchend(e, data); };

            // We're dealing with a touch.
            on(document, touchevents.move, data.activeTouchmove, data);
            on(document, touchevents.end, data.activeTouchend, data);
        }
    }

    on(document, 'mousedown', mousedown);
    on(document, 'touchstart', touchstart);
    on(document, 'movestart', movestart);


    // jQuery special events
    //
    // jQuery event objects are copies of DOM event objects. They need
    // a little help copying the move properties across.

    if (!window.jQuery) { return; }

    var properties = ("startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY").split(' ');

    function enableMove1(e) { e.enableMove(); }
    function enableMove2(e) { e.enableMove(); }
    function enableMove3(e) { e.enableMove(); }

    function add(handleObj) {
        var handler = handleObj.handler;

        handleObj.handler = function(e) {
            // Copy move properties across from originalEvent
            var i = properties.length;
            var property;

            while(i--) {
                property = properties[i];
                e[property] = e.originalEvent[property];
            }

            handler.apply(this, arguments);
        };
    }

    jQuery.event.special.movestart = {
        setup: function() {
            // Movestart must be enabled to allow other move events
            on(this, 'movestart', enableMove1);

            // Do listen to DOM events
            return false;
        },

        teardown: function() {
            off(this, 'movestart', enableMove1);
            return false;
        },

        add: add
    };

    jQuery.event.special.move = {
        setup: function() {
            on(this, 'movestart', enableMove2);
            return false;
        },

        teardown: function() {
            off(this, 'movestart', enableMove2);
            return false;
        },

        add: add
    };

    jQuery.event.special.moveend = {
        setup: function() {
            on(this, 'movestart', enableMove3);
            return false;
        },

        teardown: function() {
            off(this, 'movestart', enableMove3);
            return false;
        },

        add: add
    };
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var OBJ = {
    kakadu: true
};

_extends(OBJ, {
    es6: true
});

// Ion.RangeSlider | version 2.2.0 | https://github.com/IonDen/ion.rangeSlider
;(function (f) {
    "function" === typeof define && define.amd ? define(["jquery"], function (n) {
        return f(n, document, window, navigator);
    }) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? f(require("jquery"), document, window, navigator) : f(jQuery, document, window, navigator);
})(function (f, n, k, r, p) {
    var t = 0,
        m = function () {
        var a = r.userAgent,
            b = /msie\s\d+/i;return 0 < a.search(b) && (a = b.exec(a).toString(), a = a.split(" ")[1], 9 > a) ? (f("html").addClass("lt-ie9"), !0) : !1;
    }();Function.prototype.bind || (Function.prototype.bind = function (a) {
        var b = this,
            d = [].slice;if ("function" != typeof b) throw new TypeError();var c = d.call(arguments, 1),
            e = function e() {
            if (this instanceof e) {
                var g = function g() {};g.prototype = b.prototype;var g = new g(),
                    l = b.apply(g, c.concat(d.call(arguments)));return Object(l) === l ? l : g;
            }return b.apply(a, c.concat(d.call(arguments)));
        };return e;
    });Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
        if (null == this) throw new TypeError('"this" is null or not defined');var d = Object(this),
            c = d.length >>> 0;if (0 === c) return -1;var e = +b || 0;Infinity === Math.abs(e) && (e = 0);if (e >= c) return -1;
        for (e = Math.max(0 <= e ? e : c - Math.abs(e), 0); e < c;) {
            if (e in d && d[e] === a) return e;e++;
        }return -1;
    });var q = function q(a, b, d) {
        this.VERSION = "2.2.0";this.input = a;this.plugin_count = d;this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0;this.raf_id = this.old_min_interval = null;this.no_diapason = this.force_redraw = this.dragging = !1;this.has_tab_index = !0;this.is_update = this.is_key = !1;this.is_start = !0;this.is_click = this.is_resize = this.is_active = this.is_finish = !1;b = b || {};this.$cache = { win: f(k), body: f(n.body),
            input: f(a), cont: null, rs: null, min: null, max: null, from: null, to: null, single: null, bar: null, line: null, s_single: null, s_from: null, s_to: null, shad_single: null, shad_from: null, shad_to: null, edge: null, grid: null, grid_labels: [] };this.coords = { x_gap: 0, x_pointer: 0, w_rs: 0, w_rs_old: 0, w_handle: 0, p_gap: 0, p_gap_left: 0, p_gap_right: 0, p_step: 0, p_pointer: 0, p_handle: 0, p_single_fake: 0, p_single_real: 0, p_from_fake: 0, p_from_real: 0, p_to_fake: 0, p_to_real: 0, p_bar_x: 0, p_bar_w: 0, grid_gap: 0, big_num: 0, big: [], big_w: [], big_p: [], big_x: [] };
        this.labels = { w_min: 0, w_max: 0, w_from: 0, w_to: 0, w_single: 0, p_min: 0, p_max: 0, p_from_fake: 0, p_from_left: 0, p_to_fake: 0, p_to_left: 0, p_single_fake: 0, p_single_left: 0 };var c = this.$cache.input;a = c.prop("value");var e;d = { type: "single", min: 10, max: 100, from: null, to: null, step: 1, min_interval: 0, max_interval: 0, drag_interval: !1, values: [], p_values: [], from_fixed: !1, from_min: null, from_max: null, from_shadow: !1, to_fixed: !1, to_min: null, to_max: null, to_shadow: !1, prettify_enabled: !0, prettify_separator: " ", prettify: null, force_edges: !1,
            keyboard: !0, grid: !1, grid_margin: !0, grid_num: 4, grid_snap: !1, hide_min_max: !1, hide_from_to: !1, prefix: "", postfix: "", max_postfix: "", decorate_both: !0, values_separator: " \u2014 ", input_values_separator: ";", disable: !1, block: !1, extra_classes: "", scope: null, onStart: null, onChange: null, onFinish: null, onUpdate: null };"INPUT" !== c[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", c[0]);c = { type: c.data("type"), min: c.data("min"), max: c.data("max"), from: c.data("from"), to: c.data("to"), step: c.data("step"),
            min_interval: c.data("minInterval"), max_interval: c.data("maxInterval"), drag_interval: c.data("dragInterval"), values: c.data("values"), from_fixed: c.data("fromFixed"), from_min: c.data("fromMin"), from_max: c.data("fromMax"), from_shadow: c.data("fromShadow"), to_fixed: c.data("toFixed"), to_min: c.data("toMin"), to_max: c.data("toMax"), to_shadow: c.data("toShadow"), prettify_enabled: c.data("prettifyEnabled"), prettify_separator: c.data("prettifySeparator"), force_edges: c.data("forceEdges"), keyboard: c.data("keyboard"),
            grid: c.data("grid"), grid_margin: c.data("gridMargin"), grid_num: c.data("gridNum"), grid_snap: c.data("gridSnap"), hide_min_max: c.data("hideMinMax"), hide_from_to: c.data("hideFromTo"), prefix: c.data("prefix"), postfix: c.data("postfix"), max_postfix: c.data("maxPostfix"), decorate_both: c.data("decorateBoth"), values_separator: c.data("valuesSeparator"), input_values_separator: c.data("inputValuesSeparator"), disable: c.data("disable"), block: c.data("block"), extra_classes: c.data("extraClasses") };c.values = c.values && c.values.split(",");
        for (e in c) {
            c.hasOwnProperty(e) && (c[e] !== p && "" !== c[e] || delete c[e]);
        }a !== p && "" !== a && (a = a.split(c.input_values_separator || b.input_values_separator || ";"), a[0] && a[0] == +a[0] && (a[0] = +a[0]), a[1] && a[1] == +a[1] && (a[1] = +a[1]), b && b.values && b.values.length ? (d.from = a[0] && b.values.indexOf(a[0]), d.to = a[1] && b.values.indexOf(a[1])) : (d.from = a[0] && +a[0], d.to = a[1] && +a[1]));f.extend(d, b);f.extend(d, c);this.options = d;this.update_check = {};this.validate();this.result = { input: this.$cache.input, slider: null, min: this.options.min,
            max: this.options.max, from: this.options.from, from_percent: 0, from_value: null, to: this.options.to, to_percent: 0, to_value: null };this.init();
    };q.prototype = { init: function init(a) {
            this.no_diapason = !1;this.coords.p_step = this.convertToPercent(this.options.step, !0);this.target = "base";this.toggleInput();this.append();this.setMinMax();a ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart());this.updateScene();
        }, append: function append() {
            this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>');this.$cache.input.prop("readonly", !0);this.$cache.cont = this.$cache.input.prev();this.result.slider = this.$cache.cont;this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>');
            this.$cache.rs = this.$cache.cont.find(".irs");this.$cache.min = this.$cache.cont.find(".irs-min");this.$cache.max = this.$cache.cont.find(".irs-max");this.$cache.from = this.$cache.cont.find(".irs-from");this.$cache.to = this.$cache.cont.find(".irs-to");this.$cache.single = this.$cache.cont.find(".irs-single");this.$cache.bar = this.$cache.cont.find(".irs-bar");this.$cache.line = this.$cache.cont.find(".irs-line");this.$cache.grid = this.$cache.cont.find(".irs-grid");"single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler());this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none");this.appendGrid();this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents());
            this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask());this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize");
        }, setTopHandler: function setTopHandler() {
            var a = this.options.max,
                b = this.options.to;this.options.from > this.options.min && b === a ? this.$cache.s_from.addClass("type_last") : b < a && this.$cache.s_to.addClass("type_last");
        }, changeLevel: function changeLevel(a) {
            switch (a) {case "single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);this.$cache.s_single.addClass("state_hover");
                    break;case "from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);this.$cache.s_from.addClass("state_hover");this.$cache.s_from.addClass("type_last");this.$cache.s_to.removeClass("type_last");break;case "to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);this.$cache.s_to.addClass("state_hover");this.$cache.s_to.addClass("type_last");this.$cache.s_from.removeClass("type_last");break;case "both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last");}
        }, appendDisableMask: function appendDisableMask() {
            this.$cache.cont.append('<span class="irs-disable-mask"></span>');this.$cache.cont.addClass("irs-disabled");
        }, removeDisableMask: function removeDisableMask() {
            this.$cache.cont.remove(".irs-disable-mask");this.$cache.cont.removeClass("irs-disabled");
        }, remove: function remove() {
            this.$cache.cont.remove();this.$cache.cont = null;this.$cache.line.off("keydown.irs_" + this.plugin_count);this.$cache.body.off("touchmove.irs_" + this.plugin_count);this.$cache.body.off("mousemove.irs_" + this.plugin_count);this.$cache.win.off("touchend.irs_" + this.plugin_count);this.$cache.win.off("mouseup.irs_" + this.plugin_count);m && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count));this.$cache.grid_labels = [];this.coords.big = [];this.coords.big_w = [];this.coords.big_p = [];this.coords.big_x = [];cancelAnimationFrame(this.raf_id);
        }, bindEvents: function bindEvents() {
            if (!this.no_diapason) {
                this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this));this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")));"single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")));if (this.options.keyboard) this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));m && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this)));
            }
        }, pointerFocus: function pointerFocus(a) {
            if (!this.target) {
                var b = "single" === this.options.type ? this.$cache.single : this.$cache.from;a = b.offset().left;a += b.width() / 2 - 1;this.pointerClick("single", { preventDefault: function preventDefault() {}, pageX: a });
            }
        }, pointerMove: function pointerMove(a) {
            this.dragging && (this.coords.x_pointer = (a.pageX || a.originalEvent.touches && a.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc());
        }, pointerUp: function pointerUp(a) {
            this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, m && f("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (f.contains(this.$cache.cont[0], a.target) || this.dragging) && this.callOnFinish(), this.dragging = !1);
        }, pointerDown: function pointerDown(a, b) {
            b.preventDefault();var d = b.pageX || b.originalEvent.touches && b.originalEvent.touches[0].pageX;2 !== b.button && ("both" === a && this.setTempMinInterval(), a || (a = this.target || "from"), this.current_plugin = this.plugin_count, this.target = a, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = d - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(a), m && f("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene());
        }, pointerClick: function pointerClick(a, b) {
            b.preventDefault();var d = b.pageX || b.originalEvent.touches && b.originalEvent.touches[0].pageX;2 !== b.button && (this.current_plugin = this.plugin_count, this.target = a, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(d - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"));
        }, key: function key(a, b) {
            if (!(this.current_plugin !== this.plugin_count || b.altKey || b.ctrlKey || b.shiftKey || b.metaKey)) {
                switch (b.which) {case 83:case 65:case 40:case 37:
                        b.preventDefault();this.moveByKey(!1);break;case 87:case 68:case 38:case 39:
                        b.preventDefault(), this.moveByKey(!0);}return !0;
            }
        }, moveByKey: function moveByKey(a) {
            var b = this.coords.p_pointer,
                d = (this.options.max - this.options.min) / 100,
                d = this.options.step / d;this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * (a ? b + d : b - d));this.is_key = !0;this.calc();
        }, setMinMax: function setMinMax() {
            if (this.options) if (this.options.hide_min_max) this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none";else {
                if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));else {
                    var a = this._prettify(this.options.min),
                        b = this._prettify(this.options.max);this.result.min_pretty = a;this.result.max_pretty = b;this.$cache.min.html(this.decorate(a, this.options.min));this.$cache.max.html(this.decorate(b, this.options.max));
                }this.labels.w_min = this.$cache.min.outerWidth(!1);
                this.labels.w_max = this.$cache.max.outerWidth(!1);
            }
        }, setTempMinInterval: function setTempMinInterval() {
            var a = this.result.to - this.result.from;null === this.old_min_interval && (this.old_min_interval = this.options.min_interval);this.options.min_interval = a;
        }, restoreOriginalMinInterval: function restoreOriginalMinInterval() {
            null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null);
        }, calc: function calc(a) {
            if (this.options) {
                this.calc_count++;if (10 === this.calc_count || a) this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent();if (this.coords.w_rs) {
                    this.calcPointerPercent();a = this.getHandleX();"both" === this.target && (this.coords.p_gap = 0, a = this.getHandleX());"click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, a = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(a));switch (this.target) {case "base":
                            var b = (this.options.max - this.options.min) / 100;a = (this.result.from - this.options.min) / b;b = (this.result.to - this.options.min) / b;this.coords.p_single_real = this.toFixed(a);
                            this.coords.p_from_real = this.toFixed(a);this.coords.p_to_real = this.toFixed(b);this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);this.target = null;break;case "single":
                            if (this.options.from_fixed) break;this.coords.p_single_real = this.convertToRealPercent(a);this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            break;case "from":
                            if (this.options.from_fixed) break;this.coords.p_from_real = this.convertToRealPercent(a);this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real);this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);break;case "to":
                            if (this.options.to_fixed) break;this.coords.p_to_real = this.convertToRealPercent(a);this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real);this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                            this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);break;case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;a = this.toFixed(a + .001 * this.coords.p_handle);this.coords.p_from_real = this.convertToRealPercent(a) - this.coords.p_gap_left;this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
                            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_real = this.convertToRealPercent(a) + this.coords.p_gap_right;this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);break;case "both_one":
                            if (!this.options.from_fixed && !this.options.to_fixed) {
                                var d = this.convertToRealPercent(a);a = this.result.to_percent - this.result.from_percent;var c = a / 2,
                                    b = d - c,
                                    d = d + c;0 > b && (b = 0, d = b + a);100 < d && (d = 100, b = d - a);this.coords.p_from_real = this.calcWithStep(b);this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_real = this.calcWithStep(d);this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            }}"single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to]));this.calcMinMax();this.calcLabels();
                }
            }
        }, calcPointerPercent: function calcPointerPercent() {
            this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0;
        }, convertToRealPercent: function convertToRealPercent(a) {
            return a / (100 - this.coords.p_handle) * 100;
        }, convertToFakePercent: function convertToFakePercent(a) {
            return a / 100 * (100 - this.coords.p_handle);
        }, getHandleX: function getHandleX() {
            var a = 100 - this.coords.p_handle,
                b = this.toFixed(this.coords.p_pointer - this.coords.p_gap);0 > b ? b = 0 : b > a && (b = a);return b;
        }, calcHandlePercent: function calcHandlePercent() {
            this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1);this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
        }, chooseHandle: function chooseHandle(a) {
            return "single" === this.options.type ? "single" : a >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from";
        }, calcMinMax: function calcMinMax() {
            this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100);
        }, calcLabels: function calcLabels() {
            this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake));
        }, updateScene: function updateScene() {
            this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null);clearTimeout(this.update_tm);this.update_tm = null;this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300));
        }, drawHandles: function drawHandles() {
            this.coords.w_rs = this.$cache.rs.outerWidth(!1);if (this.coords.w_rs) {
                this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0);if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow();if (this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key)) {
                    if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {
                        this.drawLabels();this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";if ("single" === this.options.type) this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%";else {
                            this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";if (this.old_from !== this.result.from || this.force_redraw) this.$cache.from[0].style.left = this.labels.p_from_left + "%";if (this.old_to !== this.result.to || this.force_redraw) this.$cache.to[0].style.left = this.labels.p_to_left + "%";
                        }this.$cache.single[0].style.left = this.labels.p_single_left + "%";this.writeToInput();this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input"));this.old_from = this.result.from;this.old_to = this.result.to;this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange();if (this.is_key || this.is_click) this.is_click = this.is_key = !1, this.callOnFinish();this.is_finish = this.is_resize = this.is_update = !1;
                    }this.force_redraw = this.is_click = this.is_key = this.is_start = !1;
                }
            }
        }, drawLabels: function drawLabels() {
            if (this.options) {
                var a = this.options.values.length,
                    b = this.options.p_values;if (!this.options.hide_from_to) if ("single" === this.options.type) {
                    if (a) a = this.decorate(b[this.result.from]);else {
                        var d = this._prettify(this.result.from);a = this.decorate(d, this.result.from);
                    }this.$cache.single.html(a);this.calcLabels();this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible";this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
                } else {
                    a ? (this.options.decorate_both ? (a = this.decorate(b[this.result.from]), a += this.options.values_separator, a += this.decorate(b[this.result.to])) : a = this.decorate(b[this.result.from] + this.options.values_separator + b[this.result.to]), d = this.decorate(b[this.result.from]), b = this.decorate(b[this.result.to])) : (d = this._prettify(this.result.from), b = this._prettify(this.result.to), this.options.decorate_both ? (a = this.decorate(d, this.result.from), a += this.options.values_separator, a += this.decorate(b, this.result.to)) : a = this.decorate(d + this.options.values_separator + b, this.result.to), d = this.decorate(d, this.result.from), b = this.decorate(b, this.result.to));this.$cache.single.html(a);this.$cache.from.html(d);this.$cache.to.html(b);this.calcLabels();a = Math.min(this.labels.p_single_left, this.labels.p_from_left);d = this.labels.p_single_left + this.labels.p_single_fake;var b = this.labels.p_to_left + this.labels.p_to_fake,
                        c = Math.max(d, b);this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", c = b) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", c = Math.max(d, b))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden");this.$cache.min[0].style.visibility = a < this.labels.p_min + 1 ? "hidden" : "visible";this.$cache.max[0].style.visibility = c > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
                }
            }
        }, drawShadow: function drawShadow() {
            var a = this.options,
                b = this.$cache,
                d = "number" === typeof a.from_min && !isNaN(a.from_min),
                c = "number" === typeof a.from_max && !isNaN(a.from_max),
                e = "number" === typeof a.to_min && !isNaN(a.to_min),
                g = "number" === typeof a.to_max && !isNaN(a.to_max);
            "single" === a.type ? a.from_shadow && (d || c) ? (d = this.convertToPercent(d ? a.from_min : a.min), c = this.convertToPercent(c ? a.from_max : a.max) - d, d = this.toFixed(d - this.coords.p_handle / 100 * d), c = this.toFixed(c - this.coords.p_handle / 100 * c), d += this.coords.p_handle / 2, b.shad_single[0].style.display = "block", b.shad_single[0].style.left = d + "%", b.shad_single[0].style.width = c + "%") : b.shad_single[0].style.display = "none" : (a.from_shadow && (d || c) ? (d = this.convertToPercent(d ? a.from_min : a.min), c = this.convertToPercent(c ? a.from_max : a.max) - d, d = this.toFixed(d - this.coords.p_handle / 100 * d), c = this.toFixed(c - this.coords.p_handle / 100 * c), d += this.coords.p_handle / 2, b.shad_from[0].style.display = "block", b.shad_from[0].style.left = d + "%", b.shad_from[0].style.width = c + "%") : b.shad_from[0].style.display = "none", a.to_shadow && (e || g) ? (e = this.convertToPercent(e ? a.to_min : a.min), a = this.convertToPercent(g ? a.to_max : a.max) - e, e = this.toFixed(e - this.coords.p_handle / 100 * e), a = this.toFixed(a - this.coords.p_handle / 100 * a), e += this.coords.p_handle / 2, b.shad_to[0].style.display = "block", b.shad_to[0].style.left = e + "%", b.shad_to[0].style.width = a + "%") : b.shad_to[0].style.display = "none");
        }, writeToInput: function writeToInput() {
            "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to));
        }, callOnStart: function callOnStart() {
            this.writeToInput();if (this.options.onStart && "function" === typeof this.options.onStart) if (this.options.scope) this.options.onStart.call(this.options.scope, this.result);else this.options.onStart(this.result);
        }, callOnChange: function callOnChange() {
            this.writeToInput();if (this.options.onChange && "function" === typeof this.options.onChange) if (this.options.scope) this.options.onChange.call(this.options.scope, this.result);else this.options.onChange(this.result);
        }, callOnFinish: function callOnFinish() {
            this.writeToInput();if (this.options.onFinish && "function" === typeof this.options.onFinish) if (this.options.scope) this.options.onFinish.call(this.options.scope, this.result);else this.options.onFinish(this.result);
        }, callOnUpdate: function callOnUpdate() {
            this.writeToInput();if (this.options.onUpdate && "function" === typeof this.options.onUpdate) if (this.options.scope) this.options.onUpdate.call(this.options.scope, this.result);else this.options.onUpdate(this.result);
        },
        toggleInput: function toggleInput() {
            this.$cache.input.toggleClass("irs-hidden-input");this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex");this.has_tab_index = !this.has_tab_index;
        }, convertToPercent: function convertToPercent(a, b) {
            var d = this.options.max - this.options.min;return d ? this.toFixed((b ? a : a - this.options.min) / (d / 100)) : (this.no_diapason = !0, 0);
        }, convertToValue: function convertToValue(a) {
            var b = this.options.min,
                d = this.options.max,
                c = b.toString().split(".")[1],
                e = d.toString().split(".")[1],
                g,
                l,
                f = 0,
                h = 0;
            if (0 === a) return this.options.min;if (100 === a) return this.options.max;c && (f = g = c.length);e && (f = l = e.length);g && l && (f = g >= l ? g : l);0 > b && (h = Math.abs(b), b = +(b + h).toFixed(f), d = +(d + h).toFixed(f));a = (d - b) / 100 * a + b;(b = this.options.step.toString().split(".")[1]) ? a = +a.toFixed(b.length) : (a /= this.options.step, a *= this.options.step, a = +a.toFixed(0));h && (a -= h);h = b ? +a.toFixed(b.length) : this.toFixed(a);h < this.options.min ? h = this.options.min : h > this.options.max && (h = this.options.max);return h;
        }, calcWithStep: function calcWithStep(a) {
            var b = Math.round(a / this.coords.p_step) * this.coords.p_step;100 < b && (b = 100);100 === a && (b = 100);return this.toFixed(b);
        }, checkMinInterval: function checkMinInterval(a, b, d) {
            var c = this.options;if (!c.min_interval) return a;a = this.convertToValue(a);b = this.convertToValue(b);"from" === d ? b - a < c.min_interval && (a = b - c.min_interval) : a - b < c.min_interval && (a = b + c.min_interval);return this.convertToPercent(a);
        }, checkMaxInterval: function checkMaxInterval(a, b, d) {
            var c = this.options;if (!c.max_interval) return a;a = this.convertToValue(a);b = this.convertToValue(b);"from" === d ? b - a > c.max_interval && (a = b - c.max_interval) : a - b > c.max_interval && (a = b + c.max_interval);return this.convertToPercent(a);
        }, checkDiapason: function checkDiapason(a, b, d) {
            a = this.convertToValue(a);var c = this.options;"number" !== typeof b && (b = c.min);"number" !== typeof d && (d = c.max);a < b && (a = b);a > d && (a = d);return this.convertToPercent(a);
        }, toFixed: function toFixed(a) {
            a = a.toFixed(20);return +a;
        }, _prettify: function _prettify(a) {
            return this.options.prettify_enabled ? this.options.prettify && "function" === typeof this.options.prettify ? this.options.prettify(a) : this.prettify(a) : a;
        }, prettify: function prettify(a) {
            return a.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
        }, checkEdges: function checkEdges(a, b) {
            if (!this.options.force_edges) return this.toFixed(a);0 > a ? a = 0 : a > 100 - b && (a = 100 - b);return this.toFixed(a);
        }, validate: function validate() {
            var a = this.options,
                b = this.result,
                d = a.values,
                c = d.length,
                e;"string" === typeof a.min && (a.min = +a.min);"string" === typeof a.max && (a.max = +a.max);"string" === typeof a.from && (a.from = +a.from);"string" === typeof a.to && (a.to = +a.to);
            "string" === typeof a.step && (a.step = +a.step);"string" === typeof a.from_min && (a.from_min = +a.from_min);"string" === typeof a.from_max && (a.from_max = +a.from_max);"string" === typeof a.to_min && (a.to_min = +a.to_min);"string" === typeof a.to_max && (a.to_max = +a.to_max);"string" === typeof a.grid_num && (a.grid_num = +a.grid_num);a.max < a.min && (a.max = a.min);if (c) for (a.p_values = [], a.min = 0, a.max = c - 1, a.step = 1, a.grid_num = a.max, a.grid_snap = !0, e = 0; e < c; e++) {
                var g = +d[e];isNaN(g) ? g = d[e] : (d[e] = g, g = this._prettify(g));a.p_values.push(g);
            }if ("number" !== typeof a.from || isNaN(a.from)) a.from = a.min;if ("number" !== typeof a.to || isNaN(a.to)) a.to = a.max;"single" === a.type ? (a.from < a.min && (a.from = a.min), a.from > a.max && (a.from = a.max)) : (a.from < a.min && (a.from = a.min), a.from > a.max && (a.from = a.max), a.to < a.min && (a.to = a.min), a.to > a.max && (a.to = a.max), this.update_check.from && (this.update_check.from !== a.from && a.from > a.to && (a.from = a.to), this.update_check.to !== a.to && a.to < a.from && (a.to = a.from)), a.from > a.to && (a.from = a.to), a.to < a.from && (a.to = a.from));if ("number" !== typeof a.step || isNaN(a.step) || !a.step || 0 > a.step) a.step = 1;"number" === typeof a.from_min && a.from < a.from_min && (a.from = a.from_min);"number" === typeof a.from_max && a.from > a.from_max && (a.from = a.from_max);"number" === typeof a.to_min && a.to < a.to_min && (a.to = a.to_min);"number" === typeof a.to_max && a.from > a.to_max && (a.to = a.to_max);if (b) {
                b.min !== a.min && (b.min = a.min);b.max !== a.max && (b.max = a.max);if (b.from < b.min || b.from > b.max) b.from = a.from;if (b.to < b.min || b.to > b.max) b.to = a.to;
            }if ("number" !== typeof a.min_interval || isNaN(a.min_interval) || !a.min_interval || 0 > a.min_interval) a.min_interval = 0;if ("number" !== typeof a.max_interval || isNaN(a.max_interval) || !a.max_interval || 0 > a.max_interval) a.max_interval = 0;a.min_interval && a.min_interval > a.max - a.min && (a.min_interval = a.max - a.min);a.max_interval && a.max_interval > a.max - a.min && (a.max_interval = a.max - a.min);
        }, decorate: function decorate(a, b) {
            var d = "",
                c = this.options;c.prefix && (d += c.prefix);d += a;c.max_postfix && (c.values.length && a === c.p_values[c.max] ? (d += c.max_postfix, c.postfix && (d += " ")) : b === c.max && (d += c.max_postfix, c.postfix && (d += " ")));c.postfix && (d += c.postfix);return d;
        }, updateFrom: function updateFrom() {
            this.result.from = this.options.from;this.result.from_percent = this.convertToPercent(this.result.from);this.result.from_pretty = this._prettify(this.result.from);this.options.values && (this.result.from_value = this.options.values[this.result.from]);
        }, updateTo: function updateTo() {
            this.result.to = this.options.to;this.result.to_percent = this.convertToPercent(this.result.to);this.result.to_pretty = this._prettify(this.result.to);this.options.values && (this.result.to_value = this.options.values[this.result.to]);
        }, updateResult: function updateResult() {
            this.result.min = this.options.min;this.result.max = this.options.max;this.updateFrom();this.updateTo();
        }, appendGrid: function appendGrid() {
            if (this.options.grid) {
                var a = this.options,
                    b;var d = a.max - a.min;var c = a.grid_num,
                    e = 4,
                    g = "";this.calcGridMargin();if (a.grid_snap) {
                    if (50 < d) {
                        c = 50 / a.step;var f = this.toFixed(a.step / .5);
                    } else c = d / a.step, f = this.toFixed(a.step / (d / 100));
                } else f = this.toFixed(100 / c);4 < c && (e = 3);7 < c && (e = 2);14 < c && (e = 1);28 < c && (e = 0);
                for (d = 0; d < c + 1; d++) {
                    var k = e;var h = this.toFixed(f * d);100 < h && (h = 100);this.coords.big[d] = h;var m = (h - f * (d - 1)) / (k + 1);for (b = 1; b <= k && 0 !== h; b++) {
                        var n = this.toFixed(h - m * b);g += '<span class="irs-grid-pol small" style="left: ' + n + '%"></span>';
                    }g += '<span class="irs-grid-pol" style="left: ' + h + '%"></span>';b = this.convertToValue(h);b = a.values.length ? a.p_values[b] : this._prettify(b);g += '<span class="irs-grid-text js-grid-text-' + d + '" style="left: ' + h + '%">' + b + "</span>";
                }this.coords.big_num = Math.ceil(c + 1);this.$cache.cont.addClass("irs-with-grid");
                this.$cache.grid.html(g);this.cacheGridLabels();
            }
        }, cacheGridLabels: function cacheGridLabels() {
            var a,
                b = this.coords.big_num;for (a = 0; a < b; a++) {
                var d = this.$cache.grid.find(".js-grid-text-" + a);this.$cache.grid_labels.push(d);
            }this.calcGridLabels();
        }, calcGridLabels: function calcGridLabels() {
            var a;var b = [];var d = [],
                c = this.coords.big_num;for (a = 0; a < c; a++) {
                this.coords.big_w[a] = this.$cache.grid_labels[a].outerWidth(!1), this.coords.big_p[a] = this.toFixed(this.coords.big_w[a] / this.coords.w_rs * 100), this.coords.big_x[a] = this.toFixed(this.coords.big_p[a] / 2), b[a] = this.toFixed(this.coords.big[a] - this.coords.big_x[a]), d[a] = this.toFixed(b[a] + this.coords.big_p[a]);
            }this.options.force_edges && (b[0] < -this.coords.grid_gap && (b[0] = -this.coords.grid_gap, d[0] = this.toFixed(b[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), d[c - 1] > 100 + this.coords.grid_gap && (d[c - 1] = 100 + this.coords.grid_gap, b[c - 1] = this.toFixed(d[c - 1] - this.coords.big_p[c - 1]), this.coords.big_x[c - 1] = this.toFixed(this.coords.big_p[c - 1] - this.coords.grid_gap)));this.calcGridCollision(2, b, d);this.calcGridCollision(4, b, d);for (a = 0; a < c; a++) {
                b = this.$cache.grid_labels[a][0], this.coords.big_x[a] !== Number.POSITIVE_INFINITY && (b.style.marginLeft = -this.coords.big_x[a] + "%");
            }
        }, calcGridCollision: function calcGridCollision(a, b, d) {
            var c,
                e = this.coords.big_num;for (c = 0; c < e; c += a) {
                var g = c + a / 2;if (g >= e) break;var f = this.$cache.grid_labels[g][0];f.style.visibility = d[c] <= b[g] ? "visible" : "hidden";
            }
        }, calcGridMargin: function calcGridMargin() {
            this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"));
        }, update: function update(a) {
            this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = f.extend(this.options, a), this.validate(), this.updateResult(a), this.toggleInput(), this.remove(), this.init(!0));
        }, reset: function reset() {
            this.input && (this.updateResult(), this.update());
        }, destroy: function destroy() {
            this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), f.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null);
        } };f.fn.ionRangeSlider = function (a) {
        return this.each(function () {
            f.data(this, "ionRangeSlider") || f.data(this, "ionRangeSlider", new q(this, a, t++));
        });
    };(function () {
        for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !k.requestAnimationFrame; ++d) {
            k.requestAnimationFrame = k[b[d] + "RequestAnimationFrame"], k.cancelAnimationFrame = k[b[d] + "CancelAnimationFrame"] || k[b[d] + "CancelRequestAnimationFrame"];
        }k.requestAnimationFrame || (k.requestAnimationFrame = function (b, d) {
            var c = new Date().getTime(),
                e = Math.max(0, 16 - (c - a)),
                f = k.setTimeout(function () {
                b(c + e);
            }, e);a = c + e;return f;
        });k.cancelAnimationFrame || (k.cancelAnimationFrame = function (a) {
            clearTimeout(a);
        });
    })();
});

// polyfill
function polyfill() {
  // aliases
  var w = window;
  var d = document;

  // return if scroll behavior is supported and polyfill is not forced
  if (
    'scrollBehavior' in d.documentElement.style &&
    w.__forceSmoothScrollPolyfill__ !== true
  ) {
    return;
  }

  // globals
  var Element = w.HTMLElement || w.Element;
  var SCROLL_TIME = 468;

  // object gathering original scroll methods
  var original = {
    scroll: w.scroll || w.scrollTo,
    scrollBy: w.scrollBy,
    elementScroll: Element.prototype.scroll || scrollElement,
    scrollIntoView: Element.prototype.scrollIntoView
  };

  // define timing method
  var now =
    w.performance && w.performance.now
      ? w.performance.now.bind(w.performance)
      : Date.now;

  /**
   * indicates if a the current browser is made by Microsoft
   * @method isMicrosoftBrowser
   * @param {String} userAgent
   * @returns {Boolean}
   */
  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }

  /*
   * IE has rounding bug rounding down clientHeight and clientWidth and
   * rounding up scrollHeight and scrollWidth causing false positives
   * on hasScrollableSpace
   */
  var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

  /**
   * changes scroll position inside an element
   * @method scrollElement
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */
  function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
  }

  /**
   * returns result of applying ease math function to a number
   * @method ease
   * @param {Number} k
   * @returns {Number}
   */
  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }

  /**
   * indicates if a smooth behavior should be applied
   * @method shouldBailOut
   * @param {Number|Object} firstArg
   * @returns {Boolean}
   */
  function shouldBailOut(firstArg) {
    if (
      firstArg === null ||
      typeof firstArg !== 'object' ||
      firstArg.behavior === undefined ||
      firstArg.behavior === 'auto' ||
      firstArg.behavior === 'instant'
    ) {
      // first argument is not an object/null
      // or behavior is auto, instant or undefined
      return true;
    }

    if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
      // first argument is an object and behavior is smooth
      return false;
    }

    // throw error when behavior is not supported
    throw new TypeError(
      'behavior member of ScrollOptions ' +
        firstArg.behavior +
        ' is not a valid value for enumeration ScrollBehavior.'
    );
  }

  /**
   * indicates if an element has scrollable space in the provided axis
   * @method hasScrollableSpace
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function hasScrollableSpace(el, axis) {
    if (axis === 'Y') {
      return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
    }

    if (axis === 'X') {
      return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
    }
  }

  /**
   * indicates if an element has a scrollable overflow property in the axis
   * @method canOverflow
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function canOverflow(el, axis) {
    var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

    return overflowValue === 'auto' || overflowValue === 'scroll';
  }

  /**
   * indicates if an element can be scrolled in either axis
   * @method isScrollable
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function isScrollable(el) {
    var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
    var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

    return isScrollableY || isScrollableX;
  }

  /**
   * finds scrollable parent of an element
   * @method findScrollableParent
   * @param {Node} el
   * @returns {Node} el
   */
  function findScrollableParent(el) {
    var isBody;

    do {
      el = el.parentNode;

      isBody = el === d.body;
    } while (isBody === false && isScrollable(el) === false);

    isBody = null;

    return el;
  }

  /**
   * self invoked function that, given a context, steps through scrolling
   * @method step
   * @param {Object} context
   * @returns {undefined}
   */
  function step(context) {
    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME;

    // avoid elapsed times higher than one
    elapsed = elapsed > 1 ? 1 : elapsed;

    // apply easing to elapsed time
    value = ease(elapsed);

    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;

    context.method.call(context.scrollable, currentX, currentY);

    // scroll more if we have not reached our destination
    if (currentX !== context.x || currentY !== context.y) {
      w.requestAnimationFrame(step.bind(w, context));
    }
  }

  /**
   * scrolls window or element with a smooth behavior
   * @method smoothScroll
   * @param {Object|Node} el
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */
  function smoothScroll(el, x, y) {
    var scrollable;
    var startX;
    var startY;
    var method;
    var startTime = now();

    // define scroll context
    if (el === d.body) {
      scrollable = w;
      startX = w.scrollX || w.pageXOffset;
      startY = w.scrollY || w.pageYOffset;
      method = original.scroll;
    } else {
      scrollable = el;
      startX = el.scrollLeft;
      startY = el.scrollTop;
      method = scrollElement;
    }

    // scroll looping over a frame
    step({
      scrollable: scrollable,
      method: method,
      startTime: startTime,
      startX: startX,
      startY: startY,
      x: x,
      y: y
    });
  }

  // ORIGINAL METHODS OVERRIDES
  // w.scroll and w.scrollTo
  w.scroll = w.scrollTo = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scroll.call(
        w,
        arguments[0].left !== undefined
          ? arguments[0].left
          : typeof arguments[0] !== 'object'
            ? arguments[0]
            : w.scrollX || w.pageXOffset,
        // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined
          ? arguments[0].top
          : arguments[1] !== undefined
            ? arguments[1]
            : w.scrollY || w.pageYOffset
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      w,
      d.body,
      arguments[0].left !== undefined
        ? ~~arguments[0].left
        : w.scrollX || w.pageXOffset,
      arguments[0].top !== undefined
        ? ~~arguments[0].top
        : w.scrollY || w.pageYOffset
    );
  };

  // w.scrollBy
  w.scrollBy = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0])) {
      original.scrollBy.call(
        w,
        arguments[0].left !== undefined
          ? arguments[0].left
          : typeof arguments[0] !== 'object' ? arguments[0] : 0,
        arguments[0].top !== undefined
          ? arguments[0].top
          : arguments[1] !== undefined ? arguments[1] : 0
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      w,
      d.body,
      ~~arguments[0].left + (w.scrollX || w.pageXOffset),
      ~~arguments[0].top + (w.scrollY || w.pageYOffset)
    );
  };

  // Element.prototype.scroll and Element.prototype.scrollTo
  Element.prototype.scroll = Element.prototype.scrollTo = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      // if one number is passed, throw error to match Firefox implementation
      if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
        throw new SyntaxError('Value could not be converted');
      }

      original.elementScroll.call(
        this,
        // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
        // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
      );

      return;
    }

    var left = arguments[0].left;
    var top = arguments[0].top;

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      this,
      this,
      typeof left === 'undefined' ? this.scrollLeft : ~~left,
      typeof top === 'undefined' ? this.scrollTop : ~~top
    );
  };

  // Element.prototype.scrollBy
  Element.prototype.scrollBy = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.elementScroll.call(
        this,
        arguments[0].left !== undefined
          ? ~~arguments[0].left + this.scrollLeft
          : ~~arguments[0] + this.scrollLeft,
        arguments[0].top !== undefined
          ? ~~arguments[0].top + this.scrollTop
          : ~~arguments[1] + this.scrollTop
      );

      return;
    }

    this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    });
  };

  // Element.prototype.scrollIntoView
  Element.prototype.scrollIntoView = function() {
    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scrollIntoView.call(
        this,
        arguments[0] === undefined ? true : arguments[0]
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    var scrollableParent = findScrollableParent(this);
    var parentRects = scrollableParent.getBoundingClientRect();
    var clientRects = this.getBoundingClientRect();

    if (scrollableParent !== d.body) {
      // reveal element inside parent
      smoothScroll.call(
        this,
        scrollableParent,
        scrollableParent.scrollLeft + clientRects.left - parentRects.left,
        scrollableParent.scrollTop + clientRects.top - parentRects.top
      );

      // reveal parent in viewport unless is fixed
      if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top,
          behavior: 'smooth'
        });
      }
    } else {
      // reveal element in viewport
      w.scrollBy({
        left: clientRects.left,
        top: clientRects.top,
        behavior: 'smooth'
      });
    }
  };
}

if (typeof exports === 'object' && typeof module !== 'undefined') {
  // commonjs
  module.exports = { polyfill: polyfill };
} else {
  // global
  polyfill();
}



;
function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // in case params look like: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function (v) {
                paramNum = v.slice(1, -1);
                return '';
            });

            // set parameter value (use 'true' if empty)
            var paramValue = typeof a[1] === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            // if parameter name already exists
            if (obj[paramName]) {
                // convert value to array (if still string)
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                // if no array index number specified...
                if (typeof paramNum === 'undefined') {
                    // put the value on the end of the array
                    obj[paramName].push(paramValue);
                }
                // if array index number specified...
                else {
                        // put the value at that index number
                        obj[paramName][paramNum] = paramValue;
                    }
            }
            // if param name doesn't exist yet, set it
            else {
                    obj[paramName] = paramValue;
                }
        }
    }

    return obj;
};

$(function(){
    var activeLink       = $('.filter-wrap__block .filter li a.active');
    var activeLi         = activeLink.closest('li');
    var activeLiPosition = activeLi.position().left;
    document.querySelector('.filter-scroll').scrollBy({top: 0, left: activeLiPosition, behavior: 'auto' });
});



;$(function () {
    // [+] пока нужно только это
    let filterDelay = false;
    $("#size_l,#size_w,#size_d,#sleeper_l,#sleeper_w,#seat_height,#leg_height,#depth,#discount_price").ionRangeSlider({
        onFinish: function (data) {
            //getFilterCount();

        }
    });

    //$('.filter-wrap__option-checkboxs').find('input[type="radio"], input[type="checkbox"]').not('.fake-checkbox').on('change', function(){getFilterCount()});

    $('.filter-wrap__option-checkboxs .fake-checkbox').on('change', function(){
        var $this = $(this),
            parrent = $this.closest('.filter-wrap__option-checkboxs'),
            color = $this.data('colorvalue');

        if ($this.is(':checked')) {
            parrent.find('input[data-color="'+ color +'"]').prop('checked', true);
        } else {
            parrent.find('input[data-color="'+ color +'"]').prop('checked', false);
        }
    });


    $(document).on('click', '.filter-wrap__button', function (event) {
        event.preventDefault();

        if(window.matchMedia('(max-width: 767px)').matches) {
        	var $this = $(this);
            $(this).toggleClass('active');
            $(this).find('.filter-wrap__button-icon-active').toggle();
            $(this).find('.filter-wrap__button-icon-normal').toggle();
            $('.filter-wrap__options').stop().slideToggle(function(){
            	if ($this.hasClass('active')) {
	            	var height = $('.filter-wrap__options').outerHeight() + $('.filter-wrap').offset().top + 80;
	            	$('body').css('minHeight', height);
            	} else {
	            	$('body').css('minHeight', '');
            	}
            });
        } else {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').find('.filter-wrap__button-icon-active').hide().end().find('.filter-wrap__button-icon-normal').stop().fadeIn().closest('.filter-wrap').find('.filter-wrap__options').stop().slideUp(function(){
		            	$('body').css('minHeight', '');
		            });
            } else {
                $(this).addClass('active').find('.filter-wrap__button-icon-normal').hide().end().find('.filter-wrap__button-icon-active').stop().fadeIn().closest('.filter-wrap').find('.filter-wrap__options').stop().slideDown(function(){
		            	var height = $('.filter-wrap__options').outerHeight() + $('.filter-wrap').offset().top + 80;
		            	$('body').css('minHeight', height);
		            });
            }
        }
    });
    $(document).on('click', function (event) {
        if ($(event.target).closest('.filter-wrap').length) {
            return;
        }
        if(window.matchMedia('(max-width: 767px)').matches) {
            if ($(event.target).closest('.tovs-links__header-text').length) {
                return;
            }
        }
        $('.filter-wrap__button').removeClass('active').find('.filter-wrap__button-icon-active').hide().end().find('.filter-wrap__button-icon-normal').stop().fadeIn();
        $('.filter-wrap__options').slideUp(function(){
        	$('body').css('minHeight', '');
        });
    });

    $('.filter-wrap__reset-button').on('click', function(){
        if(window.matchMedia('(max-width: 767px)').matches) {
            $('.filter-wrap__button').removeClass('active');
            $('.filter-wrap__button').find('.filter-wrap__button-icon-active').hide();
            $('.filter-wrap__button').find('.filter-wrap__button-icon-normal').show();
        }
    });

 

    // + Новый код фильтра
    // Пример обработчика фильтра

	/*$('#d-filter-form input[name=number_seats]').each(function () {
		var input = $(this),
		testPath = new URL('',location).pathname.split('/'),
		testUrl = '/'+testPath[1]+'/'+testPath[2]+'/filter/number_seats-is-'+input.val()+'/';

        $.ajax({
            url: testUrl,
            type: "POST",
            dataType: 'json',
            data: {action:'catalogFilter'},
            success: function (result) {
                if(result.items == null){
                	input.parents('.filter-wrap__option-item').hide();
                }
            }
        });
	});*/


    $('.filter-wrap__reset-button--reset').on('click', function(event) {
      //window.history.pushState({}, '', url);
          $('#d-filter-form').find(':checkbox').removeAttr('checked').end().find('input[data-type=double]').each(function () {
              $(this).data("ionRangeSlider").update({
                  from: $(this).data('min'),
                  to  : $(this).data('max')
              });
          });
          $('input[type=checkbox]').trigger('refresh');
      $(".filter-wrap__options form").submit();
    });

    /*$('#sort-dropdown select').on('change', function(e){
        var sort = $(this).val();

        var $this = $('.filter-wrap__options form');
        $('.filter-wrap__reset-button--submit button').addClass('active');

        let filterString = '';
        filterString = filterDataToString($($this));

        if(filterString.length) filterString = 'filter'+filterString;

        let path = new URL('',location).pathname.split('/');
        url = '/' + path[1] + '/';
        if(path[2] != ''){
            url += path[2] + '/';
        }
        url += filterString;
        $.ajax({
            url: url + (document.location.href.indexOf('clear_cache=Y') !== -1 ? '?clear_cache=Y' : ''),
            type: "POST",
            dataType: 'json',
            data: {
                action:'catalogFilter',
                sort: sort
            },
            success: function (result) {

                processItems(result.items);
                processShowMore(result.showmore)
                processPagination(result.pagination);
                processButtons($($this));
                initSlicks();
                $('.lazzy-loading').each(function(){
                    $(this).attr('srcset', $(this).data('srcset'));
                    if ( $(this).is( "img" ) ) {
                        $(this).attr('src', $(this).data('src'));
                    }
                    $(this).removeClass('lazzy-loading');
                });

                $('body').css('minHeight', '');

                $('.tovs__item-icon-item').each(function(index, el) {
			        var title = $(el).data('title');

			        $(el).append('<span>'+title+'</span>')
			    });

                if ($(window).width() < 601) {

                    $('.product-model').each(function(index, obj) {

                        if ($(obj).find('.product__item').length < 15) {

                            $('.product-model').each(function(index, el) {
                                $(el).find('.product__tovs').on('init', function(slick){
                                    if ( $(el).find('.product__tovs .product__item').length < 2 ) {
                                        setTimeout(function() {
                                            $(el).find('.product__tovs .slick-dots').hide();
                                        }, 100);
                                    }

                                    if ( $(el).find('.product__tovs .product__item').length == 1 ) {
                                        $(el).addClass('no-dots');
                                    }
                                });
                            });

                            if (!$(obj).find('.product__tovs').hasClass('slick-initialized')) {

                                $(obj).find('.product__tovs').slick({
                                    slidesToShow: 1,
                                    dots: true,
                                    swipe: true,
                                    draggable: true,
                                    arrows: false,
                                    infinite: false,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                    autoplaySpeed: 2000,
                                    variableWidth: true,

                                });
                            }

                            productsliderInitied = true;
                        }

                    });
                }

                setTimeout(function(){
                    $('html, body').animate({ scrollTop: ($('.filter-wrap').offset().top - 100)}, 500)
                },800);
            }
        });
    });*/

    $(".filter-wrap__options form").on("submit", function (event) {
        //TODO filter form submit event need to add link to data attr later get it with showMore btn
        event.preventDefault();
        var $this = $(this);
        $('.filter-wrap__reset-button--submit button').addClass('active');

        let filterString = '';
        filterString = filterDataToString($this);

        if(filterString.length) filterString = 'filter'+filterString;

        let path = new URL('',location).pathname.split('/');
        url = '/' + path[1] + '/';
        if(path[2] != ''){
            url += path[2] + '/';
        }
        url += filterString;
        $('#d-filter-form').data('url', url);

        let sort = $('#sort-dropdown select').val();
        $('#sort-dropdown select').data('url', url);
        console.log(url, 'submit');
        $.ajax({
            url: url + (document.location.href.indexOf('clear_cache=Y') !== -1 ? '?clear_cache=Y' : ''),
            type: "POST",
            data: {
                action:'catalogFilter',
                sort: sort,
                cleanSection: true
            },
            success: function (result) {
                $('#nav-container').remove();
                $('.i-showMore').remove();
                let content = $('<div>').html(result);

                let tovsContent = content.find('.products').contents();
                let btn = content.find('.i-showMore');
                let nav = content.find('#nav-container');

                $('.products').empty();
                $('.products').append(tovsContent);
                $('.products').after(btn);
                $('.products').after(nav);
                processButtons($this);
                initSlicks();
                /*processItems(result.items);
                processShowMore(result.showmore)
                processPagination(result.pagination);
                processButtons($this);
                initSlicks();
                $('.lazzy-loading').each(function(){
      				$(this).attr('srcset', $(this).data('srcset'));
      				if ( $(this).is( "img" ) ) {
          				$(this).attr('src', $(this).data('src'));
          			}
          			$(this).removeClass('lazzy-loading');
		        });

                $('body').css('minHeight', '');

                $('.tovs__item-icon-item').each(function(index, el) {
			        var title = $(el).data('title');

			        $(el).append('<span>'+title+'</span>')
			    });

			  	

				if ($(window).width() < 601) {

				    $('.product-model').each(function(index, obj) {

				        if ($(obj).find('.product__item').length < 15) {

				            $('.product-model').each(function(index, el) {
				                $(el).find('.product__tovs').on('init', function(slick){
				                     if ( $(el).find('.product__tovs .product__item').length < 2 ) {
				                        setTimeout(function() {
				                            $(el).find('.product__tovs .slick-dots').hide();
				                        }, 100);
				                    }

				                    if ( $(el).find('.product__tovs .product__item').length == 1 ) {
				                        $(el).addClass('no-dots');
				                    }
				                });
				            });

				            if (!$(obj).find('.product__tovs').hasClass('slick-initialized')) {

				                $(obj).find('.product__tovs').slick({
				                    slidesToShow: 1,
				                    // centerMode: true,
				                    dots: true,
				                    swipe: true,
				                    draggable: true,
				                    arrows: false,
				                    // centerPadding: '0px',
				                    infinite: false,
				                    slidesToScroll: 1,
				                    autoplay: false,
				                    autoplaySpeed: 2000,
				                    variableWidth: true,
				                    // responsive: [{
				                    //     breakpoint: 400,
				                    //     settings: {
				                    //         centerPadding: '0px',
				                    //     }
				                    // }]
				                });
				            }

				            productsliderInitied = true;
				        }

				    });
				}*/

                $('.select-size').not('.is-inited').each(function(){
			        var $this = $(this);
			        var $selectSizeBody = $this.find('.js-select-size-body');
			        var $selectSizeDropdown = $this.find('.js-select-size-dropdown');

			        $this.addClass('is-inited');

			        $selectSizeBody.on('click', function(event){
			            event.stopPropagation();



			            if($this.hasClass('is-opened')) {
			                $selectSizeBody.removeClass('is-active');
			                $selectSizeDropdown.stop().fadeOut();
			                $this.removeClass('is-opened');
			            } else {
			                $selectSizeBody.addClass('is-active');
			                $selectSizeDropdown.stop().fadeIn();
			                $this.addClass('is-opened');
			            }

			            $('.select-size').not($this).removeClass('is-opened');
			            $('.js-select-size-body').not($selectSizeBody).removeClass('is-active');
			            $('.js-select-size-dropdown').not($selectSizeDropdown).stop().fadeOut();

			        });

					$this.find('select').on('change', function(){
						document.location.href = $(this).val();
					});

			    });

                setTimeout(function(){
                    $('html, body').animate({ scrollTop: $('.tovs-popular').offset().top}, 500)
                }, 800);
            },
            error: function (result) {
                if (result.status == 404) {
                    $('.i-smart-filter-submit-btn').prop('disabled', true);
                    $('.i-smart-filter-submit-btn').addClass('disabled');
                    $('.i-smart-filter-submit-btn').removeClass('active');
                    //$('.i-smart-filter-submit-btn').find('.tooltiptext').removeClass('hidden');
                }
            }
        });

/*
        }else{
            processButtons($this);
        }
*/

    });

    $('#d-filter-form').click(function(e){
        console.log('click');
        $('.i-smart-filter-submit-btn').prop('disabled', false);
        $('.i-smart-filter-submit-btn').removeClass('disabled');
        //$('.i-smart-filter-submit-btn').find('.tooltiptext').addClass('hidden');
    })
    /*function getFilterCount(){
        let filterString = '';
        let url ='';
        filterString = filterDataToString($(".filter-wrap__options form"));

        if(filterString.length) filterString = 'filter'+filterString;

        let path = new URL('',location).pathname.split('/');

        url = '/' + path[1] + '/';
        if(path[2] != ''){
            url += path[2] + '/';
        }
        url += filterString;

        $.ajax({
            url: url,
            type: "POST",
            dataType: 'json',
            data: {action:'catalogFilter'},
            success: function (result) {
                if(result.items !== null){
                    $('.filter-wrap__reset-button--submit button').prop('disabled', false).removeClass('disabled');
                }else{
                    $('.filter-wrap__reset-button--submit button').prop('disabled', true).addClass('disabled');
                }
            }
        });

    }*/


    let filterSelectedParams = new Set();
    function filterDataToString($this){
        let filterString = '';
        let filterSizeString = '';
        let filterMechanizmString = '';
        let filterStyleString = '';
        let filterBoxString = '';
        let filterNoArmrestsString = '';
        let filterNoMechanismString = '';
        let filterMetalFrameString = '';
        let filterNumberSeatsString = '';
        let filterPillowsString = '';
        let filterFabricString = '';
        let filterCleaningString = '';
        let filterCoverString = '';
        let filterClawString = '';
        let filterOrtopedString = '';
        let filterColorString = '';
        let filterGencolorString = '';
        let fields = $this.serializeArray();
        let filterSelectedParamsElement= $('#filterSelectedPropsCount');


        $.each(fields, function(i, field) {
            //console.log(field.name + ": "+field.value+", ");
            let mechanismTmpString = '';
            switch (field.name) {
            case 'size_l':
            case 'size_d':
            case 'size_w':
            case 'sleeper_l':
            case 'sleeper_w':
            case 'seat_height':
            case 'leg_height':
            case 'depth':
            case 'discount_price':
                let from = field.value.split(';')[0];
                let to = field.value.split(';')[1];
                let min = $('#'+field.name).data('min');
                let max = $('#'+field.name).data('max');


                if(from > min || to < max ) {
                    filterSelectedParams.add(field.name);

                    if(!filterSizeString.length) filterSizeString += '/';

                    filterSizeString += field.name;

                    if(from > min) filterSizeString += '-from-'+from;
                    if(to < max) filterSizeString +='-to-'+to;

                    filterSizeString +='/';
                }else{
                    filterSelectedParams.delete(field.name);
                }


            break;
            case 'mechanism':
                let value = field.value;

                if(!filterMechanizmString.length){
                    /* filterMechanizmString += '/'; */
                    filterMechanizmString += field.name+'-is-';
                }else{
                    filterMechanizmString += '-or-';
                }

                filterMechanizmString += value;
            break;
            case 'style':
                let styleValue = field.value;

                if(!filterStyleString.length){
                    filterStyleString += field.name+'-is-';
                }else{
                    filterStyleString += '-or-';
                }

                filterStyleString += styleValue;
            break;
            case 'linen_box':
                let boxValue = field.value;

                if(!filterBoxString.length){
                    filterBoxString += field.name+'-is-';
                }else{
                    filterBoxString += '-or-';
                }

                filterBoxString += boxValue;
            break;
            case 'no_armrests':
                let noArmrestsValue = field.value;

                if(!filterNoArmrestsString.length){
                    filterNoArmrestsString += field.name+'-is-';
                }else{
                    filterNoArmrestsString += '-or-';
                }

                filterNoArmrestsString += noArmrestsValue;
            break;
            case 'no_mechanism':
                let noMechanismValue = field.value;

                if(!filterNoMechanismString.length){
                    filterNoMechanismString += field.name+'-is-';
                }else{
                    filterNoMechanismString += '-or-';
                }

                filterNoMechanismString += noMechanismValue;
            break;
            case 'metal_frame':
                let metalFrameValue = field.value;

                if(!filterMetalFrameString.length){
                    filterMetalFrameString += field.name+'-is-';
                }else{
                    filterMetalFrameString += '-or-';
                }

                filterMetalFrameString += metalFrameValue;
            break;
            case 'number_seats':
                let numberSeatsValue = field.value;

                if(!filterNumberSeatsString.length){
                    filterNumberSeatsString += field.name+'-is-';
                }else{
                    filterNumberSeatsString += '-or-';
                }

                filterNumberSeatsString += numberSeatsValue;
            break;
            case 'decorative_pillows':
                let pillowsValue = field.value;

                if(!filterPillowsString.length){
                    filterPillowsString += field.name+'-is-';
                }else{
                    filterPillowsString += '-or-';
                }

                filterPillowsString += pillowsValue;
            break;
            case 'fabric_type':
                let fabricValue = field.value;

                if(!filterFabricString.length){
                    filterFabricString += field.name+'-is-';
                }else{
                    filterFabricString += '-or-';
                }

                filterFabricString += fabricValue;
            break;
            case 'light_cleaning':
                let cleaningValue = field.value;

                if(!filterCleaningString.length){
                    filterCleaningString += field.name+'-is-';
                }else{
                    filterCleaningString += '-or-';
                }

                filterCleaningString += cleaningValue;
            break;
            case 'cover':
                let coverValue = field.value;

                if(!filterCoverString.length){
                    filterCoverString += field.name+'-is-';
                }else{
                    filterCoverString += '-or-';
                }

                filterCoverString += coverValue;
            break;
            case 'anti_claw':
                let clawValue = field.value;

                if(!filterClawString.length){
                    filterClawString += field.name+'-is-';
                }else{
                    filterClawString += '-or-';
                }

                filterClawString += clawValue;
            break;
            case 'ortoped':
                let ortopedValue = field.value;

                if(!filterOrtopedString.length){
                    filterOrtopedString += field.name+'-is-';
                }else{
                    filterOrtopedString += '-or-';
                }

                filterOrtopedString += ortopedValue;
            break;
            case 'material_color':
                let colorValue = field.value;

                if(!filterColorString.length){
                    filterColorString += field.name+'-is-';
                }else{
                    filterColorString += '-or-';
                }

                filterColorString += colorValue;
            break;
            case 'gencolor':
                let gencolorValue = field.value;

                if(!filterGencolorString.length){
                    filterGencolorString += field.name+'-is-';
                }else{
                    filterGencolorString += '-or-';
                }

                filterGencolorString += gencolorValue;
            break;
            default:

            }
        });

        if(filterSizeString.length) filterString = filterSizeString;

        if(filterMechanizmString.length){
            filterSelectedParams.add('mechanism');

            if(!filterString.length) filterString += '/';
            filterString += filterMechanizmString+'/';
        }else{
            filterSelectedParams.delete('mechanism');
        }

        if(filterStyleString.length){
            filterSelectedParams.add('style');
            if(!filterString.length) filterString += '/';
            filterString += filterStyleString+'/';
        }else{
            filterSelectedParams.delete('style');
        }

        if(filterBoxString.length){
            filterSelectedParams.add('linen_box');
            if(!filterString.length) filterString += '/';
            filterString += filterBoxString+'/';
        }else{
            filterSelectedParams.delete('linen_box');
        }

        if(filterNoArmrestsString.length){
            filterSelectedParams.add('no_armrests');
            if(!filterString.length) filterString += '/';
            filterString += filterNoArmrestsString+'/';
        }else{
            filterSelectedParams.delete('no_armrests');
        }

        if(filterNoMechanismString.length){
            filterSelectedParams.add('no_mechanism');
            if(!filterString.length) filterString += '/';
            filterString += filterNoMechanismString+'/';
        }else{
            filterSelectedParams.delete('no_mechanism');
        }

        if(filterMetalFrameString.length){
            filterSelectedParams.add('metal_frame');
            if(!filterString.length) filterString += '/';
            filterString += filterMetalFrameString+'/';
        }else{
            filterSelectedParams.delete('metal_frame');
        }

        if(filterNumberSeatsString.length){
            filterSelectedParams.add('number_seats');
            if(!filterString.length) filterString += '/';
            filterString += filterNumberSeatsString+'/';
        }else{
            filterSelectedParams.delete('number_seats');
        }

        if(filterPillowsString.length){
            filterSelectedParams.add('decorative_pillows');
            if(!filterString.length) filterString += '/';
            filterString += filterPillowsString+'/';
        }else{
            filterSelectedParams.delete('decorative_pillows');
        }

        if(filterFabricString.length){
            filterSelectedParams.add('fabric_type');
            if(!filterString.length) filterString += '/';
            filterString += filterFabricString+'/';
        }else{
            filterSelectedParams.delete('fabric_type');
        }

        if(filterCleaningString.length){
            filterSelectedParams.add('light_cleaning');
            if(!filterString.length) filterString += '/';
            filterString += filterCleaningString+'/';
        }else{
            filterSelectedParams.delete('light_cleaning');
        }

        if(filterCoverString.length){
            filterSelectedParams.add('cover');
            if(!filterString.length) filterString += '/';
            filterString += filterCoverString+'/';
        }else{
            filterSelectedParams.delete('cover');
        }

        if(filterClawString.length){
            filterSelectedParams.add('anti_claw');
            if(!filterString.length) filterString += '/';
            filterString += filterClawString+'/';
        }else{
            filterSelectedParams.delete('anti_claw');
        }

        if(filterOrtopedString.length){
            filterSelectedParams.add('ortoped');
            if(!filterString.length) filterString += '/';
            filterString += filterOrtopedString+'/';
        }else{
            filterSelectedParams.delete('ortoped');
        }

        if(filterColorString.length){
            filterSelectedParams.add('material_color');
            if(!filterString.length) filterString += '/';
            filterString += filterColorString+'/';
        }else{
            filterSelectedParams.delete('material_color');
        }

        if(filterGencolorString.length){
            filterSelectedParams.add('gencolor');
            if(!filterString.length) filterString += '/';
            filterString += filterGencolorString+'/';
        }else{
            filterSelectedParams.delete('gencolor');
        }


        filterSelectedParamsElement.text(filterSelectedParams.size);
        if(filterSelectedParams.size > 0)
            filterSelectedParamsElement.removeClass('disabled');
        else
            filterSelectedParamsElement.addClass('disabled');

        return filterString;
    }

    function processButtons($this){
        $('.filter-wrap__reset-button--submit button').removeClass('active');
        $this.closest('.filter-wrap').find('.filter-wrap__button').removeClass('active').find('.filter-wrap__button-icon-active').hide().siblings('.filter-wrap__button-icon-normal').fadeIn();
        $this.closest('.filter-wrap').find('.filter-wrap__options').slideUp();


    }
    function processPagination(paginationHtml) {
        var container = document.querySelector('[data-pagination-num]');

        if (!paginationHtml && container){
            container.innerHTML = '';
            return;
        }

        var pagination = document.querySelectorAll('[data-pagination-num]');

        for (var k in pagination)
        {
            if (pagination.hasOwnProperty(k))
            {
                pagination[k].innerHTML = paginationHtml;
            }
        }
    }

    function processShowMore(html) {
        container = document.querySelector('[data-entity="container-1"]');
        var NavNum = parseInt(container.getAttribute('data-NavNum'));

        if (!html) return;

        container.innerHTML = container.innerHTML+html;

        window["obbx_3966226736_"+NavNum].bindShowMoreAction();
    }


    function processItems(itemsHtml) {
        container = document.querySelector('[data-entity="container-1"]');

        if (!itemsHtml){
            container.innerHTML = '';
            return;
        }




        var processed = BX.processHTML(itemsHtml, false),
            temporaryNode = BX.create('DIV');

        var items, k, origRows;

        temporaryNode.innerHTML = processed.HTML;
        items = temporaryNode.querySelectorAll('[data-entity="items-row"]');
        container.innerHTML = '';
        if (items.length)
        {
            for (k in items)
            {
                if (items.hasOwnProperty(k))
                {
                    container.appendChild(items[k]);
                }
            }
        }
    }
    // \Пример


    var $tovsButton = $('.js-tovs-popular-button').not('.tovs-links__header');
    var $tovsBody = $('.js-tovs-popular-body');
    var $tovsItems = $('.js-tovs-popular-items');
    $tovsButton.on('click', function (event) {
        event.stopPropagation();

        $tovsButton.toggleClass('is-active');
        $('.dropdown__popup').toggleClass('dropdown__popup_active');
        $('.tovs-links__wrapper').stop().slideToggle();

    });
    $(document).on('click', function(event){
        if($(event.target).closest('.dropdown').length) {
            return;
        }
        if(window.matchMedia('(max-width: 767px)').matches) {
            return;
        }
        $tovsButton.removeClass('is-active');
        $('.dropdown__popup').removeClass('dropdown__popup_active');
        $('.tovs-links__wrapper').stop().slideUp();
    });


    $('.filter-wrap__button').on('click', function(){
	    $tovsButton.removeClass('is-active');
	    $('.dropdown__popup').removeClass('dropdown__popup_active');
	    $('.tovs-links__wrapper').stop().slideUp();
    })


    // - Новый код фильтра


    if ($('#rotator img').length == 1) {
        $('#rotator').addClass('one-img');
    }
});
/*Catalog Scripts*/








;
var bannersliderInitied = false;
var productsliderInitied = false;
var slideNumber;
var dataColorSlideAttr;
var dataActiveSlideAttr = 0;
var slickItems = 0;

$(document).ready(function() {

    /*---------------
            # JUSTIFIER
    ---------------*/
    // var ww = $('.main-wrapper').width();
    var ww = $(window).width();
    var wh = window.innerHeight;
    var flagAc = 0;

    var productModelSlick = function(){
    	if (ww < 601) {

            $('.product-model').each(function(index, obj) {

                if ($(obj).find('.product__item').length < 15) {

                    $('.product-model').each(function(index, el) {
                        $(el).find('.product__tovs').on('init', function(slick){
                             if ( $(el).find('.product__tovs .product__item').length < 2 ) {
                                setTimeout(function() {
                                    $(el).find('.product__tovs .slick-dots').hide();
                                }, 100);
                            }

                            if ( $(el).find('.product__tovs .product__item').length == 1 ) {
                                $(el).addClass('no-dots');
                            }
                        });
                    });

                    if (!$(obj).find('.product__tovs').hasClass('slick-initialized')) {

                        $(obj).find('.product__tovs').slick({
                            slidesToShow: 1,
                            dots: true,
                            swipe: true,
                            draggable: true,
                            arrows: false,
                            infinite: false,
                            slidesToScroll: 1,
                            autoplay: false,
                            autoplaySpeed: 2000,
		                    variableWidth: true,
                        });
                    }

                    productsliderInitied = true;
                }

            });
        } else {

            if (productsliderInitied) {
                setTimeout(function() {
                    $('.product__tovs').slick('unslick');
                }, 100);

                productsliderInitied = false;
            }
        }
    };

    var adjustMenu = function() {
        wh = window.innerHeight;

        /*---------------
                # HOME BANNERS
        ---------------*/
        var bel = $('.banner-in');
        if (bel.height() >= bel.width() * 0.7) {
            // console.log('30');
            bel.css('background-position-x', '40%');
        } else {
            //console.log('100');
            bel.css('background-position-x', '100%');
        }

        if (bannersliderInitied) {
            banner_slider.slick('refresh');
        }


        /* product catalogue slick */

        if($('.product-model').length) {
            productModelSlick();
        }


        /*---------------
          # PRODUCT MAIN SCREEN
      ---------------*/

        if (!$('.new-section').length) {
            var adaptiveRotator = ($('#tovar').hasClass('rotator-test')) ? true : false;

            if (ww < 1024 && !adaptiveRotator) {

                $('.sec').css({ 'height': 'auto' });

            } else if (ww >= 1024) {
                if (wh >= 640) {
                    $('.sec').css({ 'height': wh - 40 });
                } else {
                    $('.sec').css({ 'height': 600 });
                }
            }
        }


        /*---------------
          # OTHER STUFF
      ---------------*/
        if (ww < 1025) {
            $('.section-piqs').css({ 'height': 'auto' });
            $('.piqs__item').removeAttr('style');


        } else if (ww >= 1025) {
            $('.piqs__item').css({ 'height': wh - 40 });
            $('.beousp').css({ 'height': wh - 40 });
        }

        /*if (flagAc == 0) {
            $('.color__item:first-child').addClass('active');
            flagAc = 1;
        }*/
    }

    function adjustSectionPiqs() {
        const wh = window.innerHeight;
        const ww = $(window).width();
        if (ww < 1025) {
            $('.section-piqs').css({ 'height': 'auto' });
            $('.piqs__item').removeAttr('style');
        } else if (ww >= 1025) {
            $('.piqs__item').css({ 'height': wh - 40 });
            $('.beousp').css({ 'height': wh - 40 });
        }
    }
    adjustSectionPiqs();
    $(window).on('resize', adjustSectionPiqs);

    function clickColorToSlide(e, obj) {
        e.preventDefault();

        var slideno = $(obj).data('slide');
        var slideID = $(obj).closest('.tovs__item').attr('data-productid');
        var slides = $(obj).closest('.tovs').find('.tovs__item[data-productid="' + slideID + '"]');
        var tovPercent = $(obj).closest('.tovs__item').find('.price__percent');

        var infos = $(obj).closest('.tovs__item').find('.d-product-information');
        //var infoCount = 1;
        if (infos.length > 1) {
            infos.each(function () {
                //console.log($(obj));
                //if (slideno == infoCount) {
                    $(obj).closest('.tovs__item').find('.d-product-information').css('display', "none");
                    $(obj).closest('.tovs__item').find('.d-product-information[data-slide="' + slideno + '"]').css('display', "inline-flex");
                    //$(obj).addClass('is-active');
                    //$(obj).css('display', "inline-flex");
                //} else {
                    
                    //$(obj).removeClass('is-active');
                    //$(obj).css('display', "none");
                //}
                //infoCount++;
            });
        }
        slides.find('.tovs__item__img').slick('slickGoTo', slideno - 1);
        slides.find('.color__item').removeClass('active');
        slides.find('.color__item[data-slide="' + slideno + '"]').addClass('active');

        if(tovPercent.length) {
            tovPercent
                .removeClass('is-active')
                .filter('[data-index="' + slideno + '"]')
                    .addClass('is-active');
        }
    }

    $(document).on('click', '.color__item[data-slide]', function (e) {
        clickColorToSlide(e, this);
    });
    //window.clickColorToSlide = clickColorToSlide;

    $.each($('.tovs__item__img'), function(){
        var tovPercent = $(this).closest('.tovs__item').find('.price__percent');

        $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            if(tovPercent.length) {
                tovPercent
                    .removeClass('is-active')
                    .filter('[data-index="' + (nextSlide+1) + '"]')
                        .addClass('is-active');
            }
        });
    });

    /*setTimeout(function(){
        $('.tovs__item[data-defaultcolor]').each(function(index, el) {
            var defC = $(el).attr('data-defaultcolor');
            var defCn = parseInt($(el).find('.img-slide[data-offerid="'+defC+'"]').attr('data-slick-index')) + 1;

            // console.log(defC)

            $(el).find('.color__item[data-slide="'+defCn+'"]').addClass('active').siblings().removeClass('active');
            $(el).find('.tovs__item__img.slick-slider').slick('slickGoTo', defCn-1);
        });
    }, 50)*/

    /*---------------
          # WINDOW RISIZE
      ---------------*/
    /*function adjMenuInit() {
        // ww = $('.main-wrapper').width();
        ww = $(window).width();
        wh = window.innerHeight;

       //console.log(ww);

        adjustMenu();

        if ($(window).width() < 1023) {
            $('.color__item').click(function(event) {
                event.preventDefault();
            });
        }
    }
    adjMenuInit();
    $(window).on('resize', adjMenuInit);*/




    /*---------------
          # MAIN BANNER SLIDER
      ---------------*/
    var banner_slider = $('.banner-slider');
    banner_slider.on('init', function() {
        bannersliderInitied = true;
    });

    banner_slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true,
        dots: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700
    });

    /*---------------
          # PREVIEW ITEM
      ---------------*/
    // $('.preview__item:not(".preview__item360") a, .gallery__item a, .gallery-tov__item a').each(function(e) {
    //     $(this).css('background-image', 'url(' + $(this).find("img").attr("src") + ')');
    // });

    $('.preview__item-slider').slick({
        slidesToShow: 1,
        pauseOnHover:false,
        pauseOnFocus:false,
        centerMode: true,
        dots: false,
        swipe: false,
        draggable: false,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 44,
        speed: 0,
        fade:true
    });


    /*---------------
          # FANCYBOX
      ---------------*/

   $.fn.bindImageLoad = function (callback) {
      function isImageLoaded(img) {
          if (!img.complete) {
              return false;
          }
          if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
              return false;
          }
          return true;
      }

      return this.each(function () {
          var ele = $(this);
          if (ele.is("img") && $.isFunction(callback)) {
              ele.one("load", callback);
              if (isImageLoaded(this)) {
                  ele.trigger("load");
              }
          }
      });
    };

    /*text preloader*/

    /*text preloader*/

    var IsIos = /iPhone|iPad|iPod/i.test(window.navigator.userAgent);

    if (IsIos) {
        $('html').addClass('ios');
    }


    $('.gallery').on('init', function(event, slick, direction) {

        var dataSlick = 0;

        var $this = $(this);
        setTimeout(function(){
            $this.find('.slick-cloned .fancy-gallery')
                .removeAttr('rel')
                .off('click')
                .on('click', function(event){
                    event.preventDefault();
                });
        }, 400);

        if (IsIos) {

            $('.fancy, .fancy-gallery, .fancy360').on('click', function() {
                localStorage.setItem('pageP', $(window).scrollTop());
                setTimeout(function () {
	                // $('html').addClass('ios');
	                $('html').addClass('fancybox-lock-my');
	                $('.fancybox-type-iframe').addClass('fancybox-lock-scroll');
                }, 10)
            });
        }

        $('.gallery__item').on('click', function(){
            dataSlick = $(this).data('slick-index');
        });


        ;(function(){
            // var IsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
            var touchStart = 0;
            var touchEnd = 0;

            function startHandler(event) {
                touchStart = event.touches[0].pageX;
                touchEnd = touchStart;
            }

            function moveHandler(event) {
                touchEnd = event.touches[0].pageX;
            }

            function endHandler() {
                setTimeout(function(){
                    if(screen.width == window.innerWidth) {
                        if(touchEnd > touchStart) {
                            $.fancybox.prev();
                        }
                        if(touchEnd < touchStart) {
                            $.fancybox.next();
                        }
                    }
                }, 150);
            }

            $('.fancy-gallery').fancybox({
                openSpeed: 250,
                closeSpeed: 250,
                padding: 0,
                margin: 0,
                fitToView: true,
                autoScale: true,

                helpers: {
                    overlay: {
                        closeClick: false,
                        locked: true,
                        title: false
                    },
                },

                tpl: {
                    next: '<a class="fancybox-nav fancybox-next" href="javascript:;"><span style="background-color: rgb(255, 255, 255);"></span></a>',
                    prev: '<a class="fancybox-nav fancybox-prev" href="javascript:;"><span style="background-color: rgb(255, 255, 255);"></span></a>',
                    close:'<a class="fancybox-item fancybox-close" href="javascript:;" style="background-color: rgb(255, 255, 255);"></a>'
                },

                beforeClose: function() {
                    if (IsIos) {
                        $('html').removeClass('fancybox-lock-my');
                        $('.fancybox-type-iframe').removeClass('fancybox-lock-scroll');
                        localStorage.setItem('pageP', 0);
	                	localStorage.setItem('pageP', $(window).scrollTop());
                    }
                    if(IsMobile) {
                        $(document).off("touchstart", startHandler);
                        $(document).off("touchend", endHandler);
                        $(document).off("touchmove", moveHandler);
                    }
                },
                afterShow: function() {
                    var $overlay = $('.fancybox-lock .fancybox-overlay');

                    if(!$overlay.hasClass('has-custom-controls')) {

                        $overlay.css('overflow', 'hidden').addClass('has-custom-controls');
                        $overlay.find('.fancybox-wrap .fancybox-nav').appendTo($overlay);
                        $overlay.find('.fancybox-wrap .fancybox-close').css('background-color', '#fff').appendTo($overlay);
                        $overlay.find('.fancybox-nav span').css('background-color', '#fff');

                    }

                    if(IsMobile) {
                        $(document).on("touchstart", startHandler);
                        $(document).on("touchstart", function(event){
                            $(document).on('touchmove', moveHandler);
                        });
                        $(document).on("touchend", endHandler);
                        $(document).on("touchend", function(event){
                            $(document).off('touchmove', moveHandler);
                        });
                    }

                    $(window).on('orientationchange', function(){
                        $overlay.find('.fancybox-wrap, >a').css({
                            opacity: 0,
                            transition: 'none'
                        });
                        setTimeout($.fancybox.showLoading, 150);
                        setTimeout(function() {
                            $.fancybox.hideLoading();
                            $overlay.find('.fancybox-wrap, >a').css({
                                opacity: 1,
                                transition: 'all 0.2s ease-in'
                            });
                        }, 1800);
                    });
                }
            });
        })();

        $('.fancy[href="#gallery"]').fancybox({
            openSpeed: 250,
            closeSpeed: 250,
            'padding': 0,
            fitToView: true,
            'autoScale': true,
            helpers: {
                overlay: {
                    locked: true
                }
            },
            beforeClose: function() {
                if (IsIos) {
                    $('html').removeClass('fancybox-lock-my');
                    $('.fancybox-type-iframe').removeClass('fancybox-lock-scroll');
                    $(window).scrollTop(localStorage.getItem('pageP'));
                    localStorage.setItem('pageP', 0);
                }
            },
            beforeShow: function() {

                $.fancybox.showLoading();

            },
            afterShow: function() {

                $('#gallery.slick-slider').slick('unslick');

                $('#gallery:not(.slick-slider)').slick({
                    lazyLoad: 'ondemand',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: false,
                    swipe: false,
                    infinite: false,
                    variableWidth: false,
                    arrows: false,
                    fade: true,
                    dots: false,
                    speed: 500,
                    responsive: [{
                            breakpoint: 1024,
                            settings: {
                                draggable: true,
                                swipe: true,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                swipe: true,
                                draggable: true
                            }
                        }
                    ]
                });



                $('#gallery').slick('slickGoTo', dataSlick, true);

                $.fancybox.hideLoading();

                $('#gallery').on('init', function(event, slick, image, imageSource){
                    $('.fancybox-wrap #gallery').slick('refresh');
                    $.fancybox.update();
                });



                $(window).on('resize orientationchange', function(){

                    $.fancybox.showLoading();

                    setTimeout(function() {
                        $('.fancybox-wrap #gallery').slick('refresh');

                        $.fancybox.update();
                    }, 1000);

                    setTimeout(function() {
                        $.fancybox.hideLoading();
                    }, 1800);
                });

                $('.sprev').on('click' , function(){
                    $('#gallery').slick('slickPrev');
                    return false;
                });
                $('.fancybox-wrap #gallery').slick('refresh');
                $('.snext').on('click' , function(){
                    $('#gallery').slick('slickNext');
                    return false;
                })
            }
        });


    });

	if (!$('.gallery').length) {

        if (IsIos) {

            $('.fancy, .fancy360').on('click', function() {
                localStorage.setItem('pageP', $(window).scrollTop());
                setTimeout(function () {
	                // $('html').addClass('ios');
	                $('html').addClass('fancybox-lock-my');
	                $('.fancybox-type-iframe').addClass('fancybox-lock-scroll');
                }, 10)
            });
        }
	}


    $('.fancy:not([href="#mechanism"])').fancybox({
        openSpeed: 250,
        closeSpeed: 250,
        'padding': 0,
        fitToView: true,
        width: '100%',
        'autoScale': true,
        helpers: {
            overlay: {
                locked: true
            }
        },
        beforeShow: function() {

          $('.fancybox-desktop').addClass('fancybox-full-width');

        },
        beforeClose: function() {
            if (IsIos) {
                $('html').removeClass('fancybox-lock-my');
                $('.fancybox-type-iframe').removeClass('fancybox-lock-scroll');
                $(window).scrollTop(localStorage.getItem('pageP'));
                localStorage.setItem('pageP', 0);
            }
        }
    });


    $('.fancy[href="#mechanism"]').fancybox({
        openSpeed: 250,
        closeSpeed: 250,
        'padding': 0,
        fitToView: false,
        autoScale: false,
        autoWidth:1,
        width:"100%",
        wrapCSS:'mech-custom',
        helpers: {
            overlay: {
                locked: true
            }
        },
        beforeShow: function(event) {

            var images = $('.mech__animation img');
            var counter = 1;

            $.fancybox.showLoading();

            $.each(images, function(){
                $(this).bindImageLoad(function(){
                    counter++;

                    if(counter === images.length) {
                        $.fancybox.hideLoading();
                        $('.mech-popup').addClass('full-loaded')
                    }
                });
            });

            $('.mech__animation').slick({
                slidesToShow: 1,
                pauseOnHover:false,
                pauseOnFocus:false,
                centerMode: true,
                dots: false,
                swipe: false,
                draggable: false,
                arrows: false,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                speed: 500,
                fade:true
            });
        },
        beforeClose: function() {
            if (IsIos) {
                $('html').removeClass('fancybox-lock-my');
                $('.fancybox-type-iframe').removeClass('fancybox-lock-scroll');
                $(window).scrollTop(localStorage.getItem('pageP'));
                localStorage.setItem('pageP', 0);
            }
        },
        afterClose:function() {
            $('.mech__animation').slick('unslick');
        }
    });

    $('.fancy360').fancybox({
        openSpeed: 250,
        closeSpeed: 250,
        'padding': 0,
        fitToView: true,
        'autoScale': true,
        'width': '100%',
        'height': '100%',
        type:'iframe',
        helpers: {
            overlay: {
                locked: true
            }
        },
        beforeClose: function() {
            if (IsIos) {
                $('html').removeClass('fancybox-lock-my');
                $('.fancybox-type-iframe').removeClass('fancybox-lock-scroll');
                $(window).scrollTop(localStorage.getItem('pageP'));
                localStorage.setItem('pageP', 0);
            }
        },
        afterShow: function() {

            var iframe = document.querySelector('.fancybox-iframe');

            var iframeDoc = iframe.contentWindow.document;

            if (iframeDoc.readyState == 'complete') {
                $(iframeDoc.body).addClass('asd');



              }
        }
    });
    var href = $('.fancyVideo').data('href');
    if ($('.video-popup video').attr('src') == '') {
        $('.video-popup video').attr('src', href);
    }
    $('.fancyVideo').fancybox({
        openSpeed: 250,
        closeSpeed: 250,
        'padding': 0,
        fitToView: false,
        autoScale: false,
        autoWidth:1,
        width:"100%",
        wrapCSS:'video-popup',
        helpers: {
            overlay: {
                locked: true
            }
        },
        beforeShow: function(event) {
            var href = $('.fancyVideo').data('href');
            if ($('.video-popup video').attr('src') == '') {
                $('.video-popup video').attr('src', href);
                $('.video-popup').css('display', 'block');
            }
            setTimeout(function(e){
                $.fancybox.hideLoading();
            }, 300)
        },
        beforeClose: function() {
            if (IsIos) {
                $('html').removeClass('fancybox-lock-my');
                $('.fancybox-type-iframe').removeClass('fancybox-lock-scroll');
                $(window).scrollTop(localStorage.getItem('pageP'));
                localStorage.setItem('pageP', 0);
            }
        },
        afterClose:function() {
        }
    });


    /*---------------
              # JS TOVS COLORS CHANGE
          ---------------*/

    // смена цвета по клику

    //$('.color__item').click(ItemsColorsChange);

    // определение активного по ховеру
    $('.tovs').on("mousemove", function(e) {
        let t = e.target,
            item = t?.closest(".tovs__item");
        if (!item || $(item).hasClass("tovs__item--active")) return;
        $(this).find('.tovs__item').each(function(indx) {
            $(this).removeClass('tovs__item--active');
        });
        $(item).addClass('tovs__item--active');
    });


    $('.js-tovs').on('swipe', findSlideAndChangeColor);
    $('.tovs__krovati').on('swipe', findSlideAndChangeColor);
    
    function findSlideAndChangeColor() {
        $('.tovs__item--active').find('.slick-slide').each(function(indx) {
            if ($(this).hasClass('slick-active')) {
                dataActiveSlideAttr = $(this).attr("data-slick-index");
                dataActiveSlideAttr = parseInt(dataActiveSlideAttr) + 1;

                // перебираем все цветовые элементы и делаем активным тот, у которого номер совпадает с главным активным слайдом
                $(this).parents('.tovs__item').find('.color__item').each(function(indx) {

                    $(this).removeClass('active');

                    // получаем номер цветового элемента
                    dataColorSlideAttr = $(this).attr("data-slide");
                    dataColorSlideAttr = dataColorSlideAttr;

                    // сравниваем номер элемента с главным слайдом
                    if (dataColorSlideAttr == dataActiveSlideAttr) {
                        $(this).addClass('active');
                    }

                });
            }
        });
    }


    /*function ItemsColorsChange() {
        
        dataActiveSlideAttr = $(this).parents('.tovs__item').find('.slick-active').attr("data-slick-index"); // номер главного активного слайда
        // console.log('dataActiveSlideAttr: ' + dataActiveSlideAttr);

        var debug = $(this).parents('.tovs__item').attr('data-productid');

        // перебираем все цветовые элементы и делаем активным тот, у которого номер совпадает с главным активным слайдом
        $(this).parent().find('.color__item').each(function(indx) {

            $(this).removeClass('active');

            // получаем номер цветового элемента
            dataColorSlideAttr = $(this).attr("data-slide") - 1;
            
            // сравниваем номер элемента с главным слайдом
            if (dataColorSlideAttr == dataActiveSlideAttr) {
                // console.log(dataActiveSlideAttr)
                var thisSlideC = $(this).attr("data-slide");
                $(this).addClass('active');
                $('.tovs__item.slick-cloned[data-productid="'+debug+'"]')
                .find('.color__item.active').removeClass('active').end()
                .find('.color__item[data-slide="'+thisSlideC+'"]').addClass('active')
            }

        });
    };*/

    /*---------------
          # JS TOVS
      ---------------*/

    if ($('body').hasClass('homepage') && !$('.section-tovar').length) {
	    
	    function tovsSlickSlider() {
	      $('.homepage .js-tovs').each(function (i, el) {

	        var $this = $(this);
	        var parentTovsNav = $this.closest('.section-tovs--recommend').find('.slick-slider-nav');
	        var parentTovsDots = $this.closest('.section-tovs--recommend').find('.slick-slider-dots');
	        var className = '.js-tovs-id' + i;
	        $(el).addClass(className.replace('.', ''));
	        $(className).slick({
	          slidesToShow: 3,
	          slidesToScroll: 1,
	          draggable: true,
	          swipe: false,
	          infinite: false,
	          arrows: true,
	          fade: false,
	          dots: true,
	          speed: 500,
	          appendArrows: parentTovsNav,
	          appendDots: parentTovsDots,
	          prevArrow: "<button class='slick-prev'></button>",
	          nextArrow: "<button class='slick-next'></button>",
	          responsive: [{
	                  breakpoint: 1024,
	                  settings: {
	                      slidesToShow: 2,
	                      draggable: true,
	                      swipe: true,
	                      infinite: false,
	                      arrows: true,
	                      dots: true,
	                  }
	              },
	              {
	                  breakpoint: 640,
	                  settings: {
	                      slidesToShow: 1,
	                      swipe: true,
	                      draggable: true,
	                      infinite: true,
	                      arrows: false,
	                      dots: false,
	                  }
	              }
	          ]
	        });

	        /*var tovsSliderDots = $this.find('.slick-dots');
	        var tovsSliderPrev = $this.find('.slick-prev');
	        var tovsSliderNext = $this.find('.slick-next');
	        var addNavContainerTovs = $('<div class="nav-container-tovs"></div>')

	        tovsSliderDots.wrap($(addNavContainerTovs))

	        tovsSliderPrev.insertBefore($(tovsSliderDots));
	        tovsSliderNext.insertAfter($(tovsSliderDots));
	*/


	      })

	    }

	    tovsSlickSlider();
	} else if (!$('.section-tovar').length) {
		
	    $('.section-tovs--recommend .js-tovs').slick({
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        draggable: false,
	        swipe: false,
	        infinite: false,
	        arrows: false,
	        fade: false,
	        dots: false,
	        speed: 500,
	        responsive: [{
	                breakpoint: 1024,
	                settings: {
	                    slidesToShow: 2,
	                    draggable: true,
	                    swipe: true,
	                    infinite: false,
	                    arrows: false,
	                    dots: false,
	                }
	            },
	            {
	                breakpoint: 640,
	                settings: {
	                    slidesToShow: 1,
	                    swipe: true,
	                    draggable: true,
	                    infinite: true,
	                    arrows: false,
	                    dots: false,
	                }
	            }
	        ]
	    });


	}

	if ($('.section-tovar').length) {
		$('.js-tovs').each(function(e){
			var $this = $(this);

			$this.addClass('noSliderTovs');

			if ($this.find('.tovs__item').length > 4) {
				var $moreButton = $('<p class="js-tovs-more-wrapper"><a href="#" class="js-tovs-more hero__link">Показать еще</a></p>');

				$moreButton.appendTo($this);
				// var galleryMoreClick = 1;
				$('.js-tovs-more').on('click', function(e){
				    e.preventDefault();
				    var parrent = $(this).closest('.noSliderTovs');

			        parrent.find('.tovs__item').addClass('view');
			        parrent.find('.js-tovs-more-wrapper').addClass('hidden');

				});

			}
		});
	}


	// Автоматичская подгрузка товаров при скроле на мобайл
    var paramScroll = new URLSearchParams(window.location.search).get('scroll') === "false" ? true : false;
	if ($('.wrapper [data-use]').length && !paramScroll) {
		$(document).on('scroll', function(e){
            var datauseBtn = $('.wrapper [data-use]');
            var products = $(datauseBtn[0]?.parentElement) || null;
			if (datauseBtn.hasClass('disable') || !products.length || products.hasClass('products_process')) {
				return false;
			}
			var viewMoreTop = datauseBtn.offset().top - ($(window).height() * 5);
			// var viewMoreTop = 200;
			if ($(document).scrollTop() > viewMoreTop) {
				datauseBtn.addClass('trClick');
				datauseBtn.trigger('click');
				products.addClass('products_process');
			} else {
				// datauseBtn.removeClass('trClick');
			}
		});
	}


    /*---------------
          # GALLERY
      ---------------*/
    $(document).on('mousedown.galleryMove', function(event){
        if($(event.target).closest('.gallery').length) {
            $(document).on('mousemove.galleryMove', function(event){
                $('.section-gallery .gallery__item').css('pointer-events', 'none')
            });
        }
    });

    $(document).on('mouseup.galleryMove', function(event){
        $(document).off('mousemove.galleryMove');
        setTimeout(function(){
            $('.section-gallery .gallery__item').css('pointer-events', 'auto');
        });
    });


    function gallerySlider(start) {
	    if((window.matchMedia('(max-width: 767px)').matches && $('.gallery:not(#gallery)').hasClass('slick-slider')) || (window.matchMedia('(max-width: 767px)').matches && start)) {
	    	if (start) {
	    		$('.gallery:not(#gallery)').slick();
				setTimeout(function(){
			    	$('.gallery:not(#gallery) .gallery__more-wrapper').remove();
					$('.gallery:not(#gallery)').slick('unslick');
					if ($('.gallery:not(#gallery) .gallery__item').length > 6) {

						var galleryMoreButton = $('<div class="gallery__more-wrapper"><button class="gallery__more">все фото</button></div>');
						galleryMoreButton.appendTo($('.gallery:not(#gallery)'));
					}
				},400);
			} else {
				$('.gallery:not(#gallery)').slick('unslick');
				if ($('.dopslidevideo').length) {
					$('.dopslidevideo').find('> div').prependTo('.gallery-blocks .preview');
					$('.dopslidevideo').remove();
				}
				if ($('.gallery:not(#gallery) .gallery__item').length > 6) {
					$('.gallery__item').css('display', '');
			    	$('.gallery:not(#gallery) .gallery__more-wrapper').remove();
					var galleryMoreButton = $('<div class="gallery__more-wrapper"><button class="gallery__more">все фото</button></div>');
					galleryMoreButton.appendTo($('.gallery:not(#gallery)'));
				}
			}

	    } else if(window.matchMedia('(min-width: 768px)').matches && !$('.gallery:not(#gallery)').hasClass('slick-slider')) {
	    	$('.gallery:not(#gallery) .gallery__more-wrapper').remove();

	        if ($('.preview__item.preview__item360').length > 1) {
	            var videoItem = $('.preview__item.preview__item360.preview__item-video'),
	                dopSlide = $('<div class="gallery__item gallery__item--360 dopslidevideo"></div>');

	            dopSlide.prependTo('.gallery');
	            videoItem.appendTo('.gallery__item.gallery__item--360');
	        }
		    $('.gallery:not(#gallery)').slick({
		        slidesToShow: 4,
		        slidesToScroll: 3,
		        draggable: true,
		        swipe: true,
		        infinite: false,
		        variableWidth: false,
		        arrows: true,
		        fade: false,
		        speed: 500,
		        responsive: [{
		                breakpoint: 1024,
		                settings: {
		                    slidesToShow: 2,
		                    draggable: true,
		                    variableWidth: false,
		                    swipe: true,
		                    arrows: false,
		                    infinite: false,
		                }
		            },
		            {
		                breakpoint: 768,
		                settings: {
		                    slidesToShow: 1,
		                    slidesToScroll: 1,
		                    swipe: true,
		                    draggable: true,
		                    variableWidth: false,
		                    arrows: false,
		                    infinite: true,
		                }
		            }
		        ]
		    });
	    }
    }
	$(document).on('click', '.gallery__more', function(e){
		e.preventDefault();
		$('.gallery:not(#gallery) .gallery__item').slideDown();
		$('.gallery__more-wrapper').remove();
	});

    $(window).on('resize', function(){
    	setTimeout(function(){
    		gallerySlider(false);
    	},300)
    });
    gallerySlider(true);

    var waitPreloading = function() {
        if($('html.preloading').length) {
            setTimeout(waitPreloading, 150);
        } else {
        	if ($('.gallery:not(#gallery)').hasClass('slick-slider')) {
	            $('.gallery:not(#gallery)').slick("refresh");
            }
        }
    };
    waitPreloading();

 
    /*---------------
          # VARIOUS
      ---------------*/
    $(".various").click(function() {
        $.fancybox({
            'padding': 0,
            'fullScreen :': false,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'wrapCSS': 'vidwrap',
            'width': '100%',
            //'maxWidth'      : 1180,
            'maxHeight': '100%',
            'height': '100%',
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type': 'swf',
            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }
        });

        return false;
    });

    /*---------------
          # F-IFRAME
      ---------------*/
    $('.f-iframe').fancybox({
        type: 'iframe',
        'fullScreen :': false,
        width: '100%',
        maxWidth: 660,
        maxHeight: '100%',
        height: '100%',
        helpers: {
            overlay: {
                locked: true
            }
        }
    });

    /*---------------
          # SELECT INPUT
      ---------------*/
    $('select, input[type="radio"], input[type="checkbox"], input[type="file"]').not('.not-styler').not('.style-select select').styler();
    $(document).on('change', '.style-select select', function (e) {
		var val = $(this).find('option:selected').text();
		$(this).closest('.style-select').attr('data-active', val);
	});
    /*---------------
          # MOBILE BUTTON
      ---------------*/
    // var allV = $("html,body").scrollTop();
    var allV = $(window).scrollTop();
    $('.mobile-button').on('click', function(e) {

        e.preventDefault();

        allBody = $('html,body');


        if (allBody.hasClass('hid')) {
            $(this).removeClass('open');
            $('.mob-nav').removeClass('open');
            allBody.removeClass('hid');

            if($('.filter-wrap__block').length) {
                var activeLink       = $('.filter-wrap__block .filter li a.active');
                var activeLi         = activeLink.closest('li');
                var activeLiPosition = activeLi.position().left;
                document.querySelector('.filter-scroll').scrollBy({top: 0, left: activeLiPosition, behavior: 'auto' });
            }

            // allBody.scrollTop(allV);
            $(window).scrollTop(allV);

        } else {

            allV = $(window).scrollTop();
            $(this).addClass('open');
            $('.mob-nav').addClass('open');
            setTimeout(function() {
                allBody.addClass('hid');
                $(window).scrollTop(0);
                // allBody.scrollTop( allV );
            }, 200);

        }
    });

    /*---------------
          # FIX HEADER
      ---------------*/
    //var keys = {37: 1, 38: 1, 39: 1, 40: 1};
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    /*function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                    preventDefault(e);
                    return false;
            }
    }*/

    if ( document.location.pathname == "/order/" ) {
        $('.header').addClass('order-page');
    }

    function showDiv() {
        if (($(window).scrollTop() > window.innerHeight * 0.03 && $('.header').data('positioned') == 'false') || window.openedFlag == 1) {
            $(".header").data('positioned', 'true');
            $(".header").addClass('fix');
            //$(".header-menu").css('transitionDelay', '0.25s');

        } else if ($(window).scrollTop() <= window.innerHeight * 0.03 && $('.header').data('positioned') == 'true') {
            $(".header").fadeIn(0, function() {
                $(".header").removeClass('fix');
                //$(".header-menu").css('transitionDelay', '0');
            }).data('positioned', 'false');
        }

        if (window.removeEventListener)
            window.removeEventListener('mousewheel DOMMouseScroll MozMousePixelScroll wheel', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;

    }

    function showDivNew() {
        let header = $('.huge-header');
        /*if (!header.hasClass('fix') || window.openedFlag == 1) {
            header.addClass('fix');
            console.log('show');
        }*/
        if (($(window).scrollTop() > 50 && !header.hasClass('fix')) || window.openedFlag == 1) {
            header.addClass('fix');
            console.log('show');
        }
        if ($(window).scrollTop() < 50 && header.hasClass('fix') && window.openedFlag == 0) {
            header.removeClass('fix');
            console.log('hide');
        }
    }

    $(window).on('scroll', showDivNew);
    $(window).load(showDivNew);
    $(window).load(colorHeader);

    function colorHeader() {
        if ($('.section-tovs').length) {
            //$('.section-cover').css({ 'margin-top': '120px' });
        }

        if ($('#color-header-white').length == 1) {
            $('.huge-header').css({ 'background-color': '#fff', color: '#fff', height: '122px' });
        }
    }
    $('.header').data('positioned', 'false');
    $(window).on('scroll', showDivNew);
    $('.js-app-nav').on('scroll', showDivNew);

    var $btns = $('.filter----- a').click(function(e) {
        $('.filter-wrap').find('.filter-wrap__button').removeClass('active').find('.filter-wrap__button-icon-active').hide().siblings('.filter-wrap__button-icon-normal').fadeIn();
        $('.filter-wrap').find('.filter-wrap__options').slideUp();
        e.preventDefault();
        //window.location = filterUrl;
        var txt = $(this).text();
        var thisId = this.id;
        if(window.matchMedia('(max-width: 900px)').matches) {
            var offsetLeft = $(this).closest('li').offset().left;
            document.querySelector('.filter-scroll').scrollBy({ top: 0, left: offsetLeft, behavior: 'smooth' });
        }
        filterUrl = $(this).attr('href');
        if (thisId == 'all') {
            /*if (/\?filter/.test(filterPageUrl)) {
                sofaFilter($('.product-model'), $('#d-filter-form'), true);
            } else {*/
                $('.js-filt > div').fadeIn(450);
            //}
        } else {
            var $el = $('.' + thisId).fadeIn(450);
            $('.js-filt > div').not($el).fadeOut(150);

            /*var $el = $('.' + thisId).show();
            $('.js-filt > div').not($el).hide();
            if (/\?filter/.test(filterPageUrl)) {
                sofaFilter($('.' + thisId), $('#d-filter-form'), true);
            }*/
        }


        $('#d-filter-form').find(':checkbox').removeAttr('checked').end().find('input[data-type=double]').each(function () {
        $(this).data("ionRangeSlider").update({
                from: $(this).data('min'),
                to  : $(this).data('max')
            });
        });
        $('input[type=checkbox]').trigger('refresh');
        sofaFilterValues();


        history.pushState({}, null, filterUrl);
        $btns.removeClass('active');
        $(this).addClass('active');
        $('.filter').removeClass('open');
        $(window).resize();
        $('.filt-opener').text(txt);

        setTimeout(function(){
            productCount($('.product-model:visible'),$children,true);
        },450);

        if ($('.main-wrapper').width() < 601) {
            $('.product-model').each(function(index, el) {
                 if ( $(el).find('.product__tovs .product__item').length < 2 ) {
                    setTimeout(function() {
                        $(el).find('.product__tovs .slick-dots').hide();
                    }, 100);
                }
            });
        }
        if ($('.main-wrapper').width() < 601) {
            $('.product__tovs').slick('refresh');
        }
    });

    /*if ($('.filt-opener').text()) {
        $('.filter a.active').trigger('click');
    }*/

    if (!/\?filter/.test(window.location.search)) {
        $('.filter a.active').trigger('click');
    }

    /*---------------
          # FILT OPENER
      ---------------*/
    $('.filt-opener').click(function(e) {
        $('.filter').toggleClass('open');
    });

    /*---------------
          # BASKET ITEM
      ---------------*/
    $('.basket__item .close').click(function(e) {

        if ( $(this).hasClass('ordering') ) {
            return false;
        }

        $(this).parent().hide(300).delay(300, function() {
            $(this).remove();
        });
        $('.header .head-basket i').html(function(i, val) { return +val - 1 });
        if ($('.header .head-basket i').html() < 1) {
            $('.header .head-basket').removeClass('full');
        }
        if ($('.basket__item').length > 1) {
            $('.basket__cols').removeClass('empty');
        } else {
            $('.basket__cols').addClass('empty');
            $(window).resize();
        }
        //return false;
    });


    $('.tovar__meh__pane:first-child').addClass('active');
    $('.courses-tabs li:first-child').addClass('active');
    $('.tovar__meh__tab').click(function() {
        var idx = $(this).index();
        $('.tovar__meh__pane').not($('.tovar__meh__pane').eq(idx)).removeClass('active');
        $('.tovar__meh__pane').eq(idx).addClass('active');
        $('.tovar__meh__tab').removeClass('active');
        $(this).addClass('active');
        return false;
    });


    $('.img-block-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        adaptiveHeight: true,
        fade: true,
        dots: false,
        autoplaySpeed: 1200,
        autoplay: true,
        pauseOnHover: false,
        speed: 0
    });



    /*---------------
          # VALIDATE
      ---------------*/
    jQuery.validator.addMethod("usPhoneFormat", function(value, element) {
        //return this.optional(element) || /^\(\d{3}\) \d{3}\-\d{2} ( x\d{4})?$/.test(value);
        return this.optional(element) || /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
    }, "");

    $("#form").validate({
        rules: {
            name: {
                required: true
            },
            tel: {
                usPhoneFormat: true,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            city: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "",
            tel: "",
            email: "",
            city: ""
        }
    });



    // Уадлить строчку ниже если нужна валидация телефона на странице заказа
    //$('#ORDER [type="tel"]').attr('type', 'text').val(' ');


    ;(function(){

        // $('input[type="tel"]').val('').attr('placeholder', '');

        var masks = ['+7 000 000-00-00', '8 000 000-00-00'];

        var maskOptions =  {

            translation: {
                'Z': {
                    pattern: /[+\d]/
                }
            },

            onKeyPress: function(cep, e, field, maskOptions) {

                if(field.val().length == 0) {
                    field.unmask().mask('Z', maskOptions);
                }


                var mask = (e.originalEvent.data == 8) ? masks[1] : masks[0];

                if(field.val().length == 1) {
                    field.mask(mask, maskOptions);
                }

            },

            onChange: function(cep, e, field){
                if(cep.length > 1) {
                    var clearVal = cep.replace(/\D+/g, '');
                    clearVal = clearVal.replace(/^8/, '7');
                    $(field).closest('form').find('[name="cleanPhone"]').val(clearVal);
                }
            }
        };

        $('input[type="tel"]').mask('Z', maskOptions);

        $('input[type="tel"]').on('paste', function(event){
            event.preventDefault();
            // var $this = $(this);
            // $this.unmask();
            // var mask = ($(this).val()[0] == 8) ? masks[1] : masks[0];
            // $this.mask(mask);
        });

    })();



    /*---------------
          # PIQS ITEM
      ---------------*/
    $('.section-piqs').each(function(){
        var bg = $(this).data('src');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    $('.piqs__item').on('click', function(event) {
        event.preventDefault();
        var bgc = $(this).data('bg');
        var bgi = $(this).data('bgimg');
        var idx = $(this).index();

        $(this).addClass('open');
        $(this).siblings().removeClass('open');
        $('.beousp').addClass('open').css('background-color', bgc);
        $('.bgImg').eq(idx).css('background-image', 'url(' + bgi + ')').addClass('active');
        $('.bgImg').not($('.bgImg').eq(idx)).removeClass('active');

        if ($(event.target).closest('.icon-plus-close .icon-plus').length) {
            event.preventDefault();
            $('.piqs__item').removeClass('open');
            $('.beousp').removeClass('open');
        } else {

        }

    });
    $('.piq-close').on('click', function(event) {
        event.preventDefault();
        $('.piqs__item').removeClass('open');
        $('.beousp').removeClass('open');
    });

    // Добавляем видео тег
    $('._js-video-box').each(function(e){
        var $this = $(this),
            $poster = $this.data('poster'),
            $videoLink  = $this.data('video'),
            $video = $('<video autoplay="" muted="" poster="'+ $poster +'" loop="" playsinline="" preload="auto"><source src="'+ $videoLink +'" type="video/mp4"></video>');

        $video.appendTo($this);

    });

});


/*---------------
# INITIALIZE SLICKS
---------------*/
function initSlicks(unslick) {
	if (unslick == true) {
		$('.tovs__item.is-inited').each(function(key, item) {
			$(this).removeClass('is-inited');

			var tovsItemIdImg = $(this).find('.tovs__item__img');
			var tovsItemIdPrice = $(this).find('.tovs__item__price');

			if (tovsItemIdImg.find('.img-slide').length > 1) {

				// INITIALIZE IMAGES
				tovsItemIdImg.slick('unslick');

				// INITIALIZE PRICES
				//tovsItemIdPrice.slick('unslick');
			}
		});
	} else {
		$('.tovs__item').not('.is-inited').each(function(key, item) {
			$(this).addClass('is-inited');
			var tovsItemIdImg = $(this).find('.tovs__item__img');
			var tovsItemIdPrice = $(this).find('.tovs__item__price, .d-product-information__price-slick');
			// var width = tovsItemIdPrice.width() + 3;

			if (tovsItemIdImg.find('.img-slide').length > 1) {
				// tovsItemIdPrice.css('width', width);

				if (window.matchMedia('(max-width: 767px)').matches) {
					var fontSize = tovsItemIdPrice.css('font-size');
					tovsItemIdPrice.css('font-size', fontSize);
				}
				tovsItemIdImg.on('init', function (event, slick) {
					var $this = $(event.target);
					setTimeout(function(){
						var width = $this.width();
						$(event.target).find('.img-slide').css('width', width);
					}, 1000);
				});
				// INITIALIZE IMAGES
				//				  asNavFor: tovsItemIdPrice, - removed
				tovsItemIdImg.slick({
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  draggable: true,
				  infinite: false,
				  arrows: false,
				  fade: false,
				  dots: false,
				  speed: 500,

				  responsive: [{
				      breakpoint: 1024,
				      settings: {
				          draggable: false,
				          swipe: false
				      }
				  }]
				}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
				  if(currentSlide !=nextSlide){
				      // смена выранного размера и текста обивки на превьюшке товара
				      let selectedSizeOption = document.querySelector('.'+event.currentTarget.id+'__size-selector option[data-slide="'+nextSlide+'"]');
				      let selectedColorText = document.querySelector('.'+event.currentTarget.id+'__color-text[data-slide="'+nextSlide+'"]');

				      if(selectedSizeOption && selectedColorText){

				          document.querySelectorAll('.'+event.currentTarget.id+'__size-selector option').forEach(function(sizeItem) {
				              sizeItem.selected = false;
				          });
				          document.querySelectorAll('.'+event.currentTarget.id+'__color-text').forEach(function(colorTextItem) {
				              colorTextItem.className = 'color-text__item '+event.currentTarget.id+'__color-text';
				          });
				          selectedSizeOption.selected = true;
				          selectedColorText.className = 'color-text__item '+event.currentTarget.id+'__color-text active';
				          document.querySelector('.'+event.currentTarget.id+'__size-body .select-size__body-title').innerHTML = selectedSizeOption.text;
				      }
				      //\
				  }


				});


			}
		});
	}
}
window.initSlicks = initSlicks;


$(document).ready(function() {

    var $animation_elements = $('.section-casing');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');

            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    //$window.on('scroll', check_if_in_view);
    $window.trigger('scroll');

    $(window).on('orientationchange', function() {
		initSlicks(true);

		setTimeout(function(){
			initSlicks();
		},1200)
    });
	initSlicks();

    function onAjaxSuccess(e) {
        if ($(window).width() < 601) {

		    $('.product-model').each(function(index, obj) {

		        if ($(obj).find('.product__item').length < 15) {

		            $('.product-model').each(function(index, el) {
		                $(el).find('.product__tovs').on('init', function(slick){
		                     if ( $(el).find('.product__tovs .product__item').length < 2 ) {
		                        setTimeout(function() {
		                            $(el).find('.product__tovs .slick-dots').hide();
		                        }, 100);
		                    }

		                    if ( $(el).find('.product__tovs .product__item').length == 1 ) {
		                        $(el).addClass('no-dots');
		                    }
		                });
		            });

		            if (!$(obj).find('.product__tovs').hasClass('slick-initialized')) {

		                $(obj).find('.product__tovs').slick({
		                    slidesToShow: 1,
		                    dots: true,
		                    swipe: true,
		                    draggable: true,
		                    arrows: false,
		                    infinite: false,
		                    slidesToScroll: 1,
		                    autoplay: false,
		                    autoplaySpeed: 2000,
		                    variableWidth: true,
	
		                });
		            }

		            productsliderInitied = true;
		        }

		    });
		}
    	initSlicks();
    	$('.lazzy-loading').each(function(){
			$(this).attr('srcset', $(this).data('srcset'));
			if ( $(this).is( "img" ) ) {
          				$(this).attr('src', $(this).data('src'));
          	}
			$(this).removeClass('lazzy-loading');
		});
    }
    BX.addCustomEvent('onAjaxSuccess', onAjaxSuccess);


});

$(document).ready(function() { // worktime ticker

    function worktime() {
        let workdate = new Date();
	    let thisTimeZone = workdate.getTimezoneOffset() / -60;

        workdate = new Date(workdate.setHours(workdate.getHours() - thisTimeZone + 3)); // Время по москве

        let h = workdate.getHours();
        let day = workdate.getDay();

        let worktimeStart = $('.worktime').data('start') || 0;
        let worktimeEnd = $('.worktime').data('end') || 0;

        // if ((h >= worktimeEnd || h < worktimeStart) || (day < 1 || day > 7)) {
        if (h >= worktimeEnd || h < worktimeStart) {
            $('.worktime').addClass('worktime__disabled');
        } else {
            $('.worktime').removeClass('worktime__disabled');
        }
    }
    worktime();
    setInterval(worktime, 60000);


});

$(document).ready(function() {   // product color


    var o = $('#productColor');
    var currentColor = o.html();

    $('.product__colors__item:not(.active)').mouseover(function() {
        n = $(this).data('title');

        o.addClass('hide');
        setTimeout(function() {
            o.html(n);
            o.removeClass('hide');
        }, 200);

    });

    $('.product__colors__item.active').mouseover(function() {
        n = $(this).data('title');

        if (n != o.html()) {
            o.addClass('hide');
            setTimeout(function() {
                o.html(n);
                o.removeClass('hide');
            }, 200);
        }

    });

    $('.product__colors').mouseleave(function() {
        if (currentColor != o.html()) {
            o.addClass('hide');
            setTimeout(function() {
                o.html(currentColor);
                o.removeClass('hide');
            }, 200);

        }

    });

    // var IsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    $('.tovs__item-icon-item').each(function(index, el) {
        var title = $(el).data('title');

        $(el).append('<span>'+title+'</span>')
    });

    if (IsMobile) {

        $(document).on('click', '.tovs__item-icon-item', function(event) {
            if ( $(this).hasClass('active') ) {

                $(this).removeClass('active');

            } else {
                $(this).addClass('active').siblings('.active').removeClass('active')
            }
        });

    } else {

        $(document).on('mouseover', '.tovs__item-icon-item', function() {
            $(this).addClass('active');
        })
        $(document).on('mouseout', '.tovs__item-icon-item', function() {
            $(this).removeClass('active');
        });
    }


});

$(document).ready(function() { // basket page resize
    if ($('.section-basket').length) {

        $(window).on('resize orientationchange', function() {
            footerH = $('.footer').outerHeight();
            basketWH = $(window).height();
            basketH = basketWH - footerH;

            sectionH = $('.section-basket').height();

            if (basketH > sectionH) {

                $('.section-basket').css('height', basketH + 30);
            }

        }).resize();
    }

});
$(document).ready(function() {  // video covers
    $('.js-btn-scroll').on("click", function(){
                scrollTarget = '.'+$(this).data('target');
                $( "body,html" ).animate({
                    scrollTop: Math.round( $(scrollTarget).offset().top )
                }, 200 );

    });

    if (window.location.href.indexOf("#CatalogStart") !== -1) {
	   setTimeout(function(){
		   $( "body,html" ).animate({
                    scrollTop: Math.round( $(".section-tovs").offset().top )
        }, 10 );
	   }, 700);

    }

});
$(document).ready(function() {  // video covers
    $('.js-video-container').each(function(){

            videoContainer = $(this);
            videoSrc = '/video/'+videoContainer.data('source');
            videoHtml = '<video autoplay="" muted="" loop="" playsinline="" preload="auto" poster="'+videoSrc+'.jpg">';
            videoHtml += '<source src="'+videoSrc+'.mp4" type="video/mp4">';
            videoHtml += '<source src="'+videoSrc+'.jpg" type="video/jpg"></video>';

            videoContainer.append(videoHtml);


        });

    $('.js-product-video').on('click', function(event){
        event.preventDefault();

        var iframeBox = $(this).find('.product-video__irame > div');

        if (!iframeBox.find('iframe').length) {
            var iframeType = iframeBox.data('type'),
                iframeId   = iframeBox.data('frame'),
                iframeTag  = (iframeType == 'vk') ? $('<iframe src="https://vk.com/video_ext.php?'+ iframeId +'&hd=2" width="100%" height="100%" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>') : $('<iframe src="//www.youtube.com/embed/'+ iframeId +'" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            iframeTag.appendTo(iframeBox);
        }

        $(this).addClass('is-active');

        var $iframe = $(this).find('iframe');
        var src = $iframe.attr('src');
        var newSrc = src.replace(/(.$)/, '$1&autoplay=1');

        $iframe.attr('src', newSrc);
    });

});

$(document).ready(function() { // basket page corner controller
    if ($('.section-basket').length) {

        $('.js-corner-button').on('click touchstart', function() {
            button = $(this);
            buttonParent = button.parent();
            cornerValue = button.data('value');
            cornerId = button.data('target');

            buttonParent.find('.js-corner-button').removeClass('active');
            button.addClass('active');
            $(cornerId).val(cornerValue);

        });
    }

});

$(document).ready(function() { // events for yandex
    if ( $('.js-image-load').length ) {
        $.each($('.js-image-load'), function(){
            var src = $(this).data('src');
            var srcKey = $('html').hasClass('bx-retina') ? 'retina': 'noretina';
            $(this).css({'background-image': 'url("' + src[srcKey] + '")'});
        });
    }

    $('.js-corner-button').on('click touchstart', function() {
      if (typeof yaCounter48396509 !== "undefined") {
        yaCounter48396509.reachGoal('order-from-icon');
      }
    });

    $('.product__colors__item:not(.active) a').on('click touchstart', function() {
        yaCounter48396509.reachGoal('other-colors');
    });

    $('.js-order-top').on('click', function(e) {

        if ($(this).data('ajax') == 'Y') {
            e.preventDefault();

            var urlAjax = $(this).attr('data-url');
            var href = $(this).attr('href');
            var dataProdComplect = {};


            $('.product__item.checked').each(function(e){
                var id    = $(this).data('productid');
                var count = $(this).data('count');

                dataProdComplect[id] = count;
            });

            var dataProd = {};
            dataProd['products'] = dataProdComplect;

            $.ajax({
                type: "POST",
                url: urlAjax,
                data: dataProd,
                success: function(response){
                  if (response.status !== 'success') {
                    $('.js-order-top, .js-order-bottom').addClass('shake');

                    setTimeout(function(){
                      $('.js-order-top, .js-order-bottom').removeClass('shake');
                    }, 500);
                  } else {
                    document.location.href = href;
                  }
                },
            });
            return false;
        }
	    if (typeof yaCounter48396509 !== "undefined")
        	yaCounter48396509.reachGoal('order-from-top');

		p = $('.js-order-top').data("price");

        if(typeof VK !== 'undefined' && p>0)
            VK.Goal('add_to_cart', {value: p});


        productId = $('.js-order-top').data("id");

		// var _tmr = _tmr || [];
		if (typeof _tmr !== 'undefined') {
    		if (productId && p>0) {


    			_tmr.push({
    		     	type: 'itemView',
    		     	productid: productId,
    		     	pagetype: 'cart',
    		     	list: '1',
    		     	totalvalue: p
    		   	});
    		}
        }
        


	    

    });

	/* target events */

	if ($('.js-order-top').length) {

		productId = $('.js-order-top').data("id");
		productPrice = $('.js-order-top').data("price");

        if (typeof _tmr !== 'undefined') {
    		if (productId && productPrice>0) {


    			_tmr.push({
    		     	type: 'itemView',
    		     	productid: productId,
    		     	pagetype: 'product',
    		     	list: '1',
    		     	totalvalue: productPrice
    		   	});
    		}
        }

	}
    $('.js-order-bottom').on('click touchstart', function(e) {
      if ($('.js-order-top').data('ajax') == 'Y') {
        e.preventDefault();

        $('.js-order-top').trigger('click');
        return false;
      }
      if (typeof yaCounter48396509 !== "undefined") {
        yaCounter48396509.reachGoal('order-from-bottom');
      }
      	p = $('.js-order-top').data("price");

        if(typeof VK !== 'undefined' && p>0) {
            VK.Goal('add_to_cart', {value: p});
            VK.Retargeting.ProductEvent(1, "add_to_cart", { "products": ecProduct });

        }




        productId = $('.js-order-top').data("id");


        if (typeof _tmr !== 'undefined') {
    		if (productId && p>0) {


    			_tmr.push({
    		     	type: 'itemView',
    		     	productid: productId,
    		     	pagetype: 'cart',
    		     	list: '1',
    		     	totalvalue: p
    		   	});
    		}
        }


    });

    $('.tovs__item__img .img-slide a').on('click touchstart', function() {
        if (typeof yaCounter48396509 !== "undefined") {
            yaCounter48396509.reachGoal('recommended');
        }
    });

    $('.js-open360').on('click touchstart', function() {
        yaCounter48396509.reachGoal('open360');
    });

    $('.js-catalogue-click a').on('click touchstart', function() {
        yaCounter48396509.reachGoal('catalogue-click');
    });




});

/* Сброс фильтра Кресел */
$(document).ready(function(){
    $('#tovs_chairs').on('click', function () {
        $('.product__tovs').find('.product__item').show();
    });
})


/*Credit and Delivery popups*/

/*$(document).ready(function(){
    if($('.d-credit-popup').length) {
        var creditPrice         = Math.round($('.d-credit__link').data('price').replace(/[^-0-9,]/gim, ''));
        var creditMonth         = Number($('.d-credit-popup__list-month').text());
        var creditOneMonthPrice = Math.round(parseInt(creditPrice / creditMonth )/10)*10;

        $('.d-credit-popup__button ._js-credit-price').text(creditOneMonthPrice);
        $('.d-credit-popup__list-price, .d-credit__list-price').text(creditOneMonthPrice);
    }

	$('#d-delivery-popup').load('/include/pay-and-delivery.html');
});*/


$(document).ready(function(){

    if(!$('.huge-header').length) {
        return;
    }




  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  if (document.location.pathname == "/order/") {
    $('.huge-header').addClass('order-page');
  }

  /*function newShowDiv() {
    if ($(window).scrollTop() > window.innerHeight * 0.03 && $('.huge-header').data('positioned') == 'false') {
      $(".huge-header").data('positioned', 'true');
      $(".huge-header").addClass('fix'); //$(".huge-header-menu").css('transitionDelay', '0.25s');
    } else if ($(window).scrollTop() <= window.innerHeight * 0.03 && $('.huge-header').data('positioned') == 'true') {
      $(".huge-header").fadeIn(0, function () {
        $(".huge-header").addClass('fix'); 

      }).data('positioned', 'false');
    }
  }*/

  //$(document).scroll(newShowDiv);
  //$(window).load(newShowDiv);
  $('.huge-header').data('positioned', 'false');
  var $appNav = $('.js-app-nav');

  /*$appNav.on('scroll', function () {
    if ($appNav.scrollTop() > window.innerHeight * 0.03 && $('.huge-header').data('positioned') == 'false') {
      $(".huge-header").data('positioned', 'true');
      $(".huge-header").addClass('fix'); 

    } else if ($appNav.scrollTop() <= window.innerHeight * 0.03 && $('.huge-header').data('positioned') == 'true') {
      $(".huge-header").fadeIn(0, function () {
        $(".huge-header").removeClass('fix'); 
      }).data('positioned', 'false');
    }
  });*/
  
  var $menuTrigger = $('.js-huge-header-trigger');
  var $menuItems = $('.app-nav__menu > ul');
  var $menuLi = $('.app-nav__menu > ul > li');
  var $menuGoods = $('.app-nav__aside');
  var $menuSearch = $('.app-nav__search');

  function openNavItems() {
    var desktopTimeout = 200;
    var mobileTimeout = 100;
    var timeout = window.matchMedia('(max-width: 767px)').matches ? mobileTimeout : desktopTimeout;

    var animateItems = function animateItems(i, elem) {
      var $elem = $(elem);
      setTimeout(function () {
        $elem.addClass('_show-menu');
      }, timeout * i);
    };

    var animateLi = function animateLi(i, elem) {
      var $elem = $(elem);
      setTimeout(function () {
        $elem.addClass('_show-menu-li');
      }, timeout * i);
    };

    $.each($menuItems, animateItems);
    $.each($menuLi, animateLi);
    $menuSearch.addClass('_show-search');
    $menuGoods.addClass('_show-aside');
  }

  function closeNavItems() {
    $menuItems.removeClass('_show-menu');
    $menuLi.removeClass('_show-menu-li');
    $menuGoods.removeClass('_show-aside');
    $menuSearch.removeClass('_show-search');
  }

  var allV = $(window).scrollTop();
  window.openedFlag = 0;
  var addHideBodyTime;
  $menuTrigger.on('click', function () {
    if ($menuTrigger.hasClass('is-active')) {
	  window.openedFlag = 0;
      $appNav.removeClass('_show-nav');
      $menuTrigger.removeClass('is-active');
      $('.huge-header__burger-text').addClass('fadeInUp');


      closeNavItems();
    } else {
	  window.openedFlag = 1;
	  $('.huge-header__burger-text').removeClass('fadeInUp');

      $appNav.scrollTop(0);
      $appNav.addClass('_show-nav');
      $menuTrigger.addClass('is-active');
      setTimeout(openNavItems, 200);
      var scrollbar = Scrollbar.get(document.querySelector('.js-app-nav-goods'));

      if (scrollbar) {
        scrollbar.scrollTo(0, 0, 1);
      }
    }

    var allBody = $('html,body');

    if (allBody.hasClass('hid') || window.openedFlag == 0) {
	  clearTimeout(addHideBodyTime);
      allBody.removeClass('hid');
      allBody.removeClass('ios-lock-position');

      if ($('.filter-wrap__block').length) {
        var activeLink = $('.filter-wrap__block .filter li a.active');
        var activeLi = activeLink.closest('li');
        var activeLiPosition = activeLi.position().left;
        document.querySelector('.filter-scroll').scrollBy({
          top: 0,
          left: activeLiPosition,
          behavior: 'auto'
        });
      }

      $(window).scrollTop(allV);

      if ($appNavGoods.hasClass('slick-slider')) {
        $appNavGoods.slick('slickGoTo', 0, true);
      }
    } else if(window.openedFlag != 0 && !allBody.hasClass('hid')) {
      allV = $(window).scrollTop();
      addHideBodyTime = setTimeout(function () {
        allBody.addClass('hid');
        $(window).scrollTop(0);
      }, 200);

      addHideBodyTime = setTimeout(function () {
	        $('html').addClass('ios-lock-position');
	    }, 10)

    }
  });
  var $appNavGoods = $('.js-app-nav-goods');

  function toggleNavGoodsSlider() {
    var slider = function slider() {
      if ($appNavGoods.hasClass('slick-slider')) {
        return;
      }

      Scrollbar.destroy(document.querySelector('.js-app-nav-goods'));
      $appNavGoods.removeClass('is-loaded');
      $appNavGoods.addClass('before-loaded');
      $appNavGoods.on('init', function () {
        $appNavGoods.removeClass('before-loaded');
        $appNavGoods.addClass('is-loaded');
      });
      $appNavGoods.slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        centerPadding: 0,
        padding: 0,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
      });
    };

    var scroller = function scroller() {
      if ($appNavGoods.hasClass('slick-slider')) {
        $appNavGoods.slick('unslick');
      }

      $appNavGoods.removeClass('is-loaded');
      $appNavGoods.removeClass('before-loaded');
      Scrollbar.init(document.querySelector('.js-app-nav-goods'));
    };

    var toggle = window.matchMedia('(max-width: 767px)').matches ? slider : scroller;
    toggle();
  }

  iniSizeSelect();

  function iniSizeSelect(){
  	$('.select-size').not('.is-inited').each(function(){
        var $this = $(this);
        var $selectSizeBody = $this.find('.js-select-size-body');
        var $selectSizeDropdown = $this.find('.js-select-size-dropdown');

        $this.addClass('is-inited');

        $selectSizeBody.on('click', function(event){
            event.stopPropagation();



            if($this.hasClass('is-opened')) {
                $selectSizeBody.removeClass('is-active');
                $selectSizeDropdown.stop().fadeOut();
                $this.removeClass('is-opened');
            } else {
                $selectSizeBody.addClass('is-active');
                $selectSizeDropdown.stop().fadeIn();
                $this.addClass('is-opened');
            }

            $('.select-size').not($this).removeClass('is-opened');
            $('.js-select-size-body').not($selectSizeBody).removeClass('is-active');
            $('.js-select-size-dropdown').not($selectSizeDropdown).stop().fadeOut();

        });

		$this.find('select').on('change', function(){
			document.location.href = $(this).val();
		});

    });
  }

  $(window).on('resize', toggleNavGoodsSlider).trigger('resize');

    iniSizeSelect();

    $(document).on('click', function(){
        $('.select-size').removeClass('is-opened');
        $('.js-select-size-body').removeClass('is-active');
        $('.js-select-size-dropdown').stop().fadeOut();
    });



    $(window).on('resize', function(){
        if(window.matchMedia('(max-width: 767px)').matches) {
            if(!$('.tovs-links__header-text .filter-wrap__button').length) {
                $('.filter-wrap__button').prependTo('.tovs-links__header-text');
            }
        }

        if(window.matchMedia('(min-width: 768px)').matches) {
            if($('.tovs-links__header-text .filter-wrap__button').length) {
                $('.filter-wrap__button').prependTo('.filter-wrap__button-wrap');
            }
        }

    }).trigger('resize');

    BX.addCustomEvent('onAjaxSuccess', iniSizeSelect);

});


$(function(){
  var lazyImages = [].slice.call(document.querySelectorAll(".lazzy-loading"));
  var active = false;

  var lazyLoad = function(noScroll) {
    if (active === false) {
      active = true;

      // setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
        	if (noScroll == true) {

		        if ( lazyImage.nodeName=="img" ) {
	          			lazyImage.src = lazyImage.dataset.src;
			  			lazyImage.srcset = lazyImage.dataset.src;
	          	} else {
		          	lazyImage.srcset = lazyImage.dataset.src;
	          	}

	            $.cacheImage(lazyImage.src, {
				    load    : function (e) {
	            		lazyImage.classList.remove("lazzy-loading");
				    },
				    complete: function (e) {
				    	lazyImage.classList.remove("lazzy-loading");
				    },
				    // error   : function (e) { console.log('Error',     this, e); },
				    // abort   : function (e) { console.log('Aborted',   this, e); },
				  });

	            lazyImages = lazyImages.filter(function(image) {
	              return image !== lazyImage;
	            });

        	} else {
	          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
		        if ( lazyImage.nodeName=="img" ) {
	          			lazyImage.src = lazyImage.dataset.src;
			  			lazyImage.srcset = lazyImage.dataset.src;
	          	} else {
		          	lazyImage.srcset = lazyImage.dataset.src;
	          	}

	            $.cacheImage(lazyImage.src, {
				    load    : function (e) {
	            		lazyImage.classList.remove("lazzy-loading");
				    },
				    complete: function (e) {
				    	lazyImage.classList.remove("lazzy-loading");
				    },
				    // error   : function (e) { console.log('Error',     this, e); },
				    // abort   : function (e) { console.log('Aborted',   this, e); },
				  });

	            lazyImages = lazyImages.filter(function(image) {
	              return image !== lazyImage;
	            });

	            if (lazyImages.length === 0) {
	              document.removeEventListener("scroll", lazyLoad);
	              window.removeEventListener("resize", lazyLoad);
	              window.removeEventListener("orientationchange", lazyLoad);
	            }
	          }
      	  }
        });

        active = false;
      // }, 200);
    }
  };

  lazyLoad();
  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);



  function videoBlock() {
  	var videoContainer = $('.js-tovar-video');
    var videoMp4Src = videoContainer.data('mp4-src');
    var videoCoverSrc = videoContainer.data('cover-src');

    var videoHtml = '<video autoplay="true" muted="" loop="" playsinline="" preload="auto" poster="'+videoCoverSrc+'">';
	videoHtml += '<source src="'+videoMp4Src+'" type="video/mp4">';
	videoHtml += '<source src="'+videoCoverSrc+'" type="video/jpg"></video>';

    videoContainer.append(videoHtml);
  }

  videoBlock();

  	var vid = document.querySelector(".video-banner video");

  	if (vid) {
		vid.autoplay = true;

		vid.onloadeddata = function() {
			var poster = document.querySelector(".video-banner img").style;

			poster.opacity = 1;
			(function fade(){(poster.opacity-=.1)<0?poster.display="none":setTimeout(fade,40)})();
		};
	}

	window.onload=function(){
	  lazyLoad(true);
	}
});

$(function(){
    var inputPreffiks = ' шт.';
    var infoRemoveInterval;

    function infoSystemAdd(parent) {
      if (!parent.length) {
        return;
      }

      var text = $('<div class="system-add-popup">Конфигурация товара изменилась <a href="#">посмотреть стоимость</div>');
      clearInterval(infoRemoveInterval);
      $('.system-add-popup').remove();
      text.appendTo(parent);
      infoRemoveInterval = setInterval(function () {
        $('.system-add-popup').remove();
        clearInterval(infoRemoveInterval);
      }, 3000);
    }

    $(document).on('click', '._js-quantity-plus, ._js-quantity-minus', function (e) {
      e.preventDefault();
      if ($(this).attr('disabled')) {
        return;
      }
      var $this = $(this),
          input = $this.closest('div').find('input'),
          inpuMin = (input.attr('min')) ? input.attr('min') : 1,
          value = parseInt(input.val());

      if (value == 1 && $this.hasClass('_js-quantity-minus')) {
        $this.closest('.product__item-compound').removeClass('checked');
        $this.closest('.product__item').removeClass('checked');
        value = 0;
        input.val(value +inputPreffiks).trigger('change');
        $this.closest('.product__item').attr('data-count', value);
      } else {
        value = $this.hasClass('_js-quantity-plus') ? value + 1 : value == 1 ? value : value - 1;
        input.val(value +inputPreffiks).trigger('change');
        $this.closest('.product__item').attr('data-count', value);
      }
      updatePriceCompund();
    });

    $(document).on('keyup', '.quantity__value', function (e) {
      var value = parseInt($(this).val());

      value = (isNaN(value)) ? 1 : value;
      $(this).val(value +inputPreffiks).trigger('change');

      $(this).closest('.product__item').attr('data-count', value);
      infoSystemAdd($(this).closest('.product__item-compound'))
      updatePriceCompund();
    });

    $(document).on('change', '.quantity__value', function (e) {
      var value = parseInt($(this).val());

      if (value >= 99) {
        $(this).closest('.quantity').find('._js-quantity-plus').prop('disabled', true);
        $(this).val('99 шт.');
        $(this).closest('.product__item').attr('data-count', '99');
      } else if (value <= 0){
        $(this).closest('.product__item-compound').removeClass('checked');
        $(this).closest('.product__item').removeClass('checked');
        if (!$(this).closest('.product__item-compound').length) {
          $(this).val('1 шт.');
        } else {
          $(this).val('0 шт.');
          $(this).closest('.product__item').attr('data-count', '0');
        }
      } else {
        $(this).closest('.quantity').find('._js-quantity-plus').prop('disabled', false);
      }
      infoSystemAdd($(this).closest('.product__item-compound'));
    });

    $(document).on('click', '.product__item-compound-add', function (e) {
      e.preventDefault();
      $(this).closest('.product__item-compound').find('._js-quantity-plus').trigger('click');
      $(this).closest('.product__item').addClass('checked');
      $(this).closest('.product__item-compound').addClass('checked');
      infoSystemAdd($(this).closest('.product__item-compound'));
      updatePriceCompund();
    });
    $(document).on('click', '.system-add-popup a', function (e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 800);
    });


    function updatePriceCompund() {

      var defaultPrice = 0;
      var defaultOldPrice = 0;
      var creditPrice = 0;

      if ($('.product__item.checked').length > 0) {
        $('.js-order-top').data('ajax', 'Y')
      } else {
        $('.js-order-top').data('ajax', 'N')
      }
      $('.product__item.checked').each(function(e){
        var count = $(this).attr('data-count'),
            $thisPrice = $(this).data('price')*count,
            $thisOldPrice = $(this).data('oldprice')*count;

        if ($thisOldPrice > 0) {
            defaultOldPrice = defaultOldPrice + $thisOldPrice;
        } else {
            defaultOldPrice = defaultOldPrice + $thisPrice;
        }

        defaultPrice = defaultPrice + $thisPrice;
      });
      if (defaultPrice <= 0) {
        $('.js-order-top, .js-order-bottom').addClass('disabled')
      } else {
        $('.js-order-top, .js-order-bottom').removeClass('disabled')
      }

      creditPrice = Math.ceil(defaultPrice/3);
      $('.d-credit-popup__list-price, ._js-credit-price, .d-credit__list-price').text(creditPrice);

      defaultPrice = defaultPrice.toLocaleString('ru-RU') + ' ₽';
      $('._js-update-price').text(defaultPrice);

      defaultOldPrice = defaultOldPrice.toLocaleString('ru-RU') + ' ₽';
      $('._js-update-oldprice').text(defaultOldPrice);

    }


	$('.tovs__item__size select.not-styler').each(function() {
		var getTovsItemSizeOption = $(this).find('option');

		getTovsItemSizeOption.eq(0).remove();
	});

	$('.js-count-products-ext-btn').on('click', function (event) {
	    event.preventDefault();
	    var amountBlock = $(this).closest('.count-products-ext__controls'),
	        amountValue = parseInt(amountBlock.find('input').val());

	    if ($(this).hasClass('js-count-products-ext-btn-amount--minus') && amountValue != 1) {
	      amountValue = amountValue - 1;
	    } else if ($(this).hasClass('js-count-products-ext-btn-amount--plus')) {
	      amountValue = amountValue + 1;
	    }

	    if (amountValue > 99) {
	    	amountValue = 99;
	    }
	    amountBlock.find('input').val(amountValue);
  	});

  	$('.count-products-ext__controls input').keyup(function (e) {
	    if (this.value == "0" || this.value == "-" || this.value == "") {
	      this.value = "1";
	    } else {
	      this.value = this.value.replace(/[^0-9-\.]/g, '');
	    }

	    if (this.value > 99) {
	    	this.value = 99;
	    }
	});

  function heroSliderInit() {

	 $('.js-hero-slider').on('init', function(){
	    $('.js-hero-slider .slick-arrow, .js-hero-slider .slick-dots').click(function() {
		  $('.js-hero-slider').slick('slickPause');
		});
	});

    $('.js-hero-slider').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 15000,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 500,
      fade: false,
      cssEase: 'linear',
      lazyLoad: 'progressive',
    });



    var heroSliderDots = $('.js-hero-slider').find('.slick-dots');
    var heroSliderPrev = $('.js-hero-slider').find('.slick-prev');
    var heroSliderNext = $('.js-hero-slider').find('.slick-next');
    var addNavContainer = $('<div class="nav-container animatedNav"></div>')

    heroSliderDots.wrap($(addNavContainer));

    heroSliderPrev.insertBefore($(heroSliderDots));
    heroSliderNext.insertAfter($(heroSliderDots));


    $('.js-hero-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.hero__poster video').not('.js-hero-slider .slick-current .hero__poster video').each(function() {
        $(this).get(0).pause();
        $(this).get(0).currentTime = 0;
      });
      if( $('.hero__item.slick-current .hero__poster').find('video').length !== 0) {
        $(".js-hero-slider .slick-current .hero__poster video")[0].play();
      }
    });
  }

  if ($('.js-hero-slider').length) {
    heroSliderInit();
  }

    $('.js-go-to-reviews-block').on('click', function (event) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $('#reviews_block').offset().top
      }, 1000);
      setTimeout(function(){
          $('html, body').stop().animate({
            scrollTop: $('#reviews_block').offset().top
          }, 1000);
      }, 1000)
    });
    $(document).on('click', '.compound-navigation', function(e) {
        e.preventDefault();
        var posTop = $('.compound-block').offset().top - 80;
        $('html, body').stop().animate({
            scrollTop: posTop
        }, 1000);
    });
    // if ($('.js-order-top').data('ajax') == 'Y') {
    //   $('.compound-navigation').trigger('click');
    // }
    let locationParams = (new URL(document.location)).searchParams;
    if ($('.compound-navigation').length && locationParams.get("compound") == 'on') {
        $('.compound-navigation').trigger('click');
    }

  if ($('#order-limimted-offer').length) {
    const timerOrderMinute = ($('#order-limimted-offer').data('timerminut')) ? parseInt($('#order-limimted-offer').data('timerminut')) : 10;
      function deactivateOrderTimer() {
        $('#order-limimted-offer').slideUp(400);
        $('.limited-offer-time').remove();
        $('input[name="basket-offer"]').val('нет');
      }
      function actionOrderTimer(timeMinut, startFirst) {
        let timerBox = $('.limited-offer-time'),
            timerMinute = timeMinut;

        if (startFirst) {
          let endTime         = new Date(),
              endMinutTime    = endTime.getMinutes(),
              nextStart       = new Date(),
              nextStartHours = nextStart.getHours();

          endTime.setMinutes(endMinutTime+timerOrderMinute);
          nextStart.setHours(nextStartHours+24);

          endTime = endTime.getTime();
          nextStart = nextStart.getTime();
          localStorage.setItem('endTime', endTime);
          localStorage.setItem('nextStart', nextStart);
        }

        $('#order-limimted-offer').slideDown(400);

        let timer = setInterval(function () {
            let seconds = (timerMinute%60 < 10) ? '0' + timerMinute%60 : timerMinute%60; // Получаем секунды
            let minutes = timerMinute/60%60; // Получаем минуты

            // Условие если время закончилось то...
            // console.log(timerMinute)
            if (timerMinute <= 0) {
                // Таймер удаляется
                clearInterval(timer);
                deactivateOrderTimer();
            } else { // Иначе
                // Создаём строку с выводом времени
                let strTimer = `${Math.trunc(minutes)}:${seconds}`;
                // Выводим строку в блок для показа таймера
                timerBox.each(function(e){
                  $(this).html(strTimer);
                })
            }
            --timerMinute; // Уменьшаем таймер
        }, 1000);
      }

      function getDifferenceInSeconds(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / 1000;
      }
      if (localStorage.getItem('endTime')) { // проверяем был ли уже старт таймера
        let date = new Date(),
            localEnd = parseInt(localStorage.getItem('endTime')),
            localNextStart = parseInt(localStorage.getItem('nextStart')),
            currentTime = date.setMinutes(date.getMinutes());


        if (localEnd > currentTime) { //сравниваем время и время окончания
          let dateEnd     = new Date(localEnd),
              dateCurrent = new Date(currentTime),
              timeMinut   = Math.round(getDifferenceInSeconds(dateCurrent, dateEnd));

          actionOrderTimer(timeMinut, false);
        } else if (currentTime > localNextStart ) { //сравниваем когда следующий запуск
          let timeMinut = timerOrderMinute*60;
          actionOrderTimer(timeMinut, true);
        } else {
          deactivateOrderTimer();
        }
      } else {
        let timeMinut = timerOrderMinute*60;
        actionOrderTimer(timeMinut, true);
      }
    }
    var scrollOfTop = 0;

    $(document).on('click', '.reviews-preview-box__item > a', function(e){
	  e.preventDefault();
	  let modalUrl = $(this).attr('href');
	  $(this).addClass('loading');

	  scrollOfTop = $(window).scrollTop();

	  $.ajax({
	    url: modalUrl,
	    success: function success(response) {
	      let $content = $(response).find('.reviews-more-box').clone(true);
	      let popupModal = $('<div class="reviews-preview-popup"><div class="reviews-preview-popup__inner"><button class="reviews-preview-popup__close"></button><div class="reviews-preview-popup__content"></div></div></div>');

	      popupModal.appendTo('body');
	      $content.appendTo('.reviews-preview-popup__content');

	      $('.reviews-preview-popup').addClass('opened');
	      $('html').addClass('ios-lock-position hid');
	      $('body').addClass('hid');
	      $('.reviews-preview-box__item > a.loading').removeClass('loading');
	    }
	  });
	});

	$(document).on('click', '.reviews-preview-popup__close, .reviews-preview-popup', function(e){
	  if ($(e.target).closest('.reviews-preview-popup__inner').length && !$(e.target).closest('.reviews-preview-popup__close').length) {
	    return;
	  }

	  $('.reviews-preview-popup').removeClass('opened ios-lock-position hid');

      $('html, body').removeClass('ios-lock-position hid').scrollTop(scrollOfTop);

	  setTimeout(function(){
	    $('.reviews-preview-popup').remove();
	  },300);
	});


	  //получаем элемент внутри которого есть текст
	  const el = document.querySelector('.product-model__description-inner');
	  //убираем по краям пустоту. Создаем массив по переносу строки и смотрим длину массива
	  const count = el.textContent.trim().split("\n").length;
      console.log($(el).find('p').length);
      if (count > 2 || $(el).find('p').length > 2) {
	      $('.product-model__description').addClass('moreText');
	  } else {
	      $('.product-model__description').addClass('noMaxHeight');
	  }
	  $(document).on('click', '.js-product-model-description-more-button', function(e){
	    e.preventDefault();
	    $('.product-model__description').addClass('noMaxHeight');
	    $('.product-model__description').removeClass('moreText');
	  });

});

/* home reviews */
     function customerReviewsSlider() {
        $('.js-customer-reviews-slider').each(function (i, el) {


          var $this = $(this);
          var parentCustomerReviewsNav = $this.closest('.customer-reviews').find('.slick-slider-nav');
          var parentCustomerReviewsDots = $this.closest('.customer-reviews').find('.slick-slider-dots');
          var className = '.js-customer-reviews-slider-id' + i;
          $(el).addClass(className.replace('.', ''));
          $(className).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: true,
            swipe: false,
            infinite: false,
            arrows: true,
            fade: false,
            dots: true,
            speed: 500,
            appendArrows: parentCustomerReviewsNav,
            appendDots: parentCustomerReviewsDots,
            prevArrow: "<button class='slick-prev'></button>",
            nextArrow: "<button class='slick-next'></button>",
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        draggable: true,
                        swipe: true,
                        infinite: false,
                        arrows: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        swipe: true,
                        draggable: true,
                        infinite: true,
                        arrows: false,
                        dots: false,
                    }
                }
            ]
          });

        })

        $('.customer-reviews__item').each(function () {
          var thisElem = $(this);
          var thisTextElem= thisElem.find('.customer-reviews__text');
          var thisGetTextFull = thisElem.find('.customer-reviews__text').text();
          var size = 85;
          var setText = thisGetTextFull;

          if(setText.replace(/\s/g, '').length > size){
            thisTextElem.text(setText.slice(0, size) + '... ');
            thisElem.find('.js-button-more-text').show();
            thisElem.find('.js-button-more-text').appendTo(thisTextElem);
          }

          thisElem.find('.js-button-more-text').on('click', function () {
            var thisBtn = $(this);
            thisElem.find('.customer-reviews__text').text(thisGetTextFull);
          })

        })
      }

      customerReviewsSlider();


    if ($('.section-tovar__information-right-top').length) {
	  var panelHeight = $('.section-tovar__information-right-top').outerHeight(true),
	      prHeroHeigth = ($('.section-tovar.new-section').outerHeight(true) - $(window).height()) + panelHeight + 20;

	  $(window).on('scroll', function () {
	    if (window.matchMedia('(min-width:1101px)').matches) {
	      return;
	    }

	    if (!$('.section-tovar__information-right-top').hasClass('fixed')) {
          prHeroHeigth = ($('.section-tovar.new-section').outerHeight(true) - $(window).height()) + panelHeight + 20;
        }
	    var wScrollHeight = $(window).scrollTop();

	    if (wScrollHeight >= prHeroHeigth) {
	      $('.section-tovar__information-right-top').addClass('fixed');
	    } else {
	      $('.section-tovar__information-right-top').removeClass('fixed');
	    }
	  });
	}

	if ($('.video-container video').length) {
		Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
		    get: function(){
		        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
		    }
		})

		var videoPlayTime = setInterval(function(){

			if ($('.video-container video')[0].playing) {
				clearInterval(videoPlayTime);

				$('.video-container').addClass('play');
			}
		}, 500);
	}

    /* city popup */
/*$(function(){
    $.ajax({
        url: '/local/templates/divanchik/ajax/geo.php',
        type: 'POST',
        success: function(response) {
            if ($.trim(response) === 'Краснодарский') {
                let closedAt = localStorage.getItem('city_popup_closed');
                let now = Date.now();
                let days = 7; // срок действия
                let ms = days * 24 * 60 * 60 * 1000;

                // проверяем срок
                if (!closedAt || (now - closedAt > ms)) {
                  var $popupCity = $('<div class="popup-city-check lk-cabinet-wrapper"><div class="sign-in__form-box"><div class="sign-in__title">Ваш город Краснодар?</div><div class="popup-city-check__body"><a class="site-btn site-btn--1" href="https://krasnodar.divanchik.ru/">ДА</a><a class="site-btn site-btn--1 popup-city-check__close" href="#">Нет</a></div></div>');

                  $popupCity.appendTo('body');

                  // Клик вне окна
                  $('.popup-city-check').on('click', function(e){
                    if ($(e.target).closest('.sign-in__form-box').length) {
                      return;
                    }
                    $('.popup-city-check').remove();
                  });

                  // Клик по "Нет"
                  $('.popup-city-check__close').on('click', function(e){
                    e.preventDefault();
                    localStorage.setItem('city_popup_closed', Date.now()); // сохраняем время закрытия
                    $('.popup-city-check').remove();
                  });
                }
            }
        },
        error: function() {
            console.error('Ошибка при запросе geo.php');
        }
    });
});*/



/* End */
;; /* /local/templates/divanchik/js/jquery-3.0.0.min.js?175396189193428*/
; /* /local/templates/divanchik/js/progress.js?17539618916934*/
; /* /local/templates/divanchik/js/jQuery_mousewheel_plugin.js?17539618911443*/
; /* /local/templates/divanchik/js/smooth-scrollbar.min.js?175396189148469*/
; /* /local/templates/divanchik/js/slick.js?175396189142863*/
; /* /local/templates/divanchik/js/jquery.fancybox.js?175396189123215*/
; /* /local/templates/divanchik/js/jquery.mask.js?17539618918400*/
; /* /local/templates/divanchik/js/jquery.appear.js?17539618911569*/
; /* /local/templates/divanchik/js/jquery.formstyler.js?175396189140251*/
; /* /local/templates/divanchik/js/main.js?1765875680209635*/
