(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68404],{15660:function(e,t,a){/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n,r,s=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,n={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function encode(e){return e instanceof Token?new Token(e.type,encode(e.content),e.alias):Array.isArray(e)?e.map(encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function deepClone(e,t){var a,n;switch(t=t||{},r.util.type(e)){case"Object":if(t[n=r.util.objId(e)])return t[n];for(var s in a={},t[n]=a,e)e.hasOwnProperty(s)&&(a[s]=deepClone(e[s],t));return a;case"Array":if(t[n=r.util.objId(e)])return t[n];return a=[],t[n]=a,e.forEach(function(e,n){a[n]=deepClone(e,t)}),a;default:return e}},getLanguage:function(e){for(;e;){var a=t.exec(e.className);if(a)return a[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,a){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+a)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw Error()}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}},isActive:function(e,t,a){for(var n="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(n))return!1;e=e.parentElement}return!!a}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var a=r.util.clone(r.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(e,t,a,n){var s=(n=n||r.languages)[e],i={};for(var o in s)if(s.hasOwnProperty(o)){if(o==t)for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);a.hasOwnProperty(o)||(i[o]=s[o])}var u=n[e];return n[e]=i,r.languages.DFS(r.languages,function(t,a){a===u&&t!=e&&(this[t]=i)}),i},DFS:function DFS(e,t,a,n){n=n||{};var s=r.util.objId;for(var i in e)if(e.hasOwnProperty(i)){t.call(e,i,e[i],a||i);var o=e[i],l=r.util.type(o);"Object"!==l||n[s(o)]?"Array"!==l||n[s(o)]||(n[s(o)]=!0,DFS(o,t,i,n)):(n[s(o)]=!0,DFS(o,t,null,n))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),r.hooks.run("before-all-elements-highlight",n);for(var s,i=0;s=n.elements[i++];)r.highlightElement(s,!0===t,n.callback)},highlightElement:function(t,a,n){var s=r.util.getLanguage(t),i=r.languages[s];r.util.setLanguage(t,s);var o=t.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&r.util.setLanguage(o,s);var l=t.textContent,u={element:t,language:s,grammar:i,code:l};function insertHighlightedCode(e){u.highlightedCode=e,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r.hooks.run("after-highlight",u),r.hooks.run("complete",u),n&&n.call(u.element)}if(r.hooks.run("before-sanity-check",u),(o=u.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!u.code){r.hooks.run("complete",u),n&&n.call(u.element);return}if(r.hooks.run("before-highlight",u),!u.grammar){insertHighlightedCode(r.util.encode(u.code));return}if(a&&e.Worker){var g=new Worker(r.filename);g.onmessage=function(e){insertHighlightedCode(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else insertHighlightedCode(r.highlight(u.code,u.grammar,u.language))},highlight:function(e,t,a){var n={code:e,grammar:t,language:a};if(r.hooks.run("before-tokenize",n),!n.grammar)throw Error('The language "'+n.language+'" has no grammar.');return n.tokens=r.tokenize(n.code,n.grammar),r.hooks.run("after-tokenize",n),Token.stringify(r.util.encode(n.tokens),n.language)},tokenize:function(e,t){var a=t.rest;if(a){for(var n in a)t[n]=a[n];delete t.rest}var r=new LinkedList;return addAfter(r,r.head,e),matchGrammar(e,r,t,r.head,0),toArray(r)},hooks:{all:{},add:function(e,t){var a=r.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=r.hooks.all[e];if(a&&a.length)for(var n,s=0;n=a[s++];)n(t)}},Token:Token};function Token(e,t,a,n){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length}function matchPattern(e,t,a,n){e.lastIndex=t;var r=e.exec(a);if(r&&n&&r[1]){var s=r[1].length;r.index+=s,r[0]=r[0].slice(s)}return r}function matchGrammar(e,t,a,n,s,i){for(var o in a)if(a.hasOwnProperty(o)&&a[o]){var l=a[o];l=Array.isArray(l)?l:[l];for(var u=0;u<l.length;++u){if(i&&i.cause==o+","+u)return;var g=l[u],c=g.inside,d=!!g.lookbehind,p=!!g.greedy,h=g.alias;if(p&&!g.pattern.global){var f=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,f+"g")}for(var m=g.pattern||g,v=n.next,b=s;v!==t.tail&&(!i||!(b>=i.reach));b+=v.value.length,v=v.next){var y,k=v.value;if(t.length>e.length)return;if(!(k instanceof Token)){var F=1;if(p){if(!(y=matchPattern(m,b,e,d))||y.index>=e.length)break;var x=y.index,A=y.index+y[0].length,w=b;for(w+=v.value.length;x>=w;)w+=(v=v.next).value.length;if(w-=v.value.length,b=w,v.value instanceof Token)continue;for(var $=v;$!==t.tail&&(w<A||"string"==typeof $.value);$=$.next)F++,w+=$.value.length;F--,k=e.slice(b,w),y.index-=b}else if(!(y=matchPattern(m,0,k,d)))continue;var x=y.index,S=y[0],_=k.slice(0,x),E=k.slice(x+S.length),C=b+k.length;i&&C>i.reach&&(i.reach=C);var j=v.prev;if(_&&(j=addAfter(t,j,_),b+=_.length),removeRange(t,j,F),v=addAfter(t,j,new Token(o,c?r.tokenize(S,c):S,h,S)),E&&addAfter(t,v,E),F>1){var T={cause:o+","+u,reach:C};matchGrammar(e,t,a,v.prev,b,T),i&&T.reach>i.reach&&(i.reach=T.reach)}}}}}}function LinkedList(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function addAfter(e,t,a){var n=t.next,r={value:a,prev:t,next:n};return t.next=r,n.prev=r,e.length++,r}function removeRange(e,t,a){for(var n=t.next,r=0;r<a&&n!==e.tail;r++)n=n.next;t.next=n,n.prev=t,e.length-=r}function toArray(e){for(var t=[],a=e.head.next;a!==e.tail;)t.push(a.value),a=a.next;return t}if(e.Prism=r,Token.stringify=function stringify(e,t){if("string"==typeof e)return e;if(Array.isArray(e)){var a="";return e.forEach(function(e){a+=stringify(e,t)}),a}var n={type:e.type,content:stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},s=e.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(n.classes,s):n.classes.push(s)),r.hooks.run("wrap",n);var i="";for(var o in n.attributes)i+=" "+o+'="'+(n.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+i+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener&&(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),n=a.language,s=a.code,i=a.immediateClose;e.postMessage(r.highlight(s,r.languages[n],n)),i&&e.close()},!1)),r;var s=r.util.currentScript();function highlightAutomaticallyCallback(){r.manual||r.highlightAll()}if(s&&(r.filename=s.src,s.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var i=document.readyState;"loading"===i||"interactive"===i&&s&&s.defer?document.addEventListener("DOMContentLoaded",highlightAutomaticallyCallback):window.requestAnimationFrame?window.requestAnimationFrame(highlightAutomaticallyCallback):window.setTimeout(highlightAutomaticallyCallback,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=s),void 0!==a.g&&(a.g.Prism=s),s.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.languages.markup.doctype.inside["internal-subset"].inside=s.languages.markup,s.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(s.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+t]={pattern:/[\s\S]+/,inside:s.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},s.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(s.languages.markup.tag,"addAttribute",{value:function(e,t){s.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:s.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.xml=s.languages.extend("markup",{}),s.languages.ssml=s.languages.xml,s.languages.atom=s.languages.xml,s.languages.rss=s.languages.xml,n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css,(r=s.languages.markup)&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css")),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{"class-name":[s.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|")+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),s.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,s.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:s.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:s.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:s.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:s.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:s.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),s.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),s.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),s.languages.markup&&(s.languages.markup.tag.addInlined("script","javascript"),s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),s.languages.js=s.languages.javascript,function(){if(void 0!==s&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",a="loading",n="loaded",r="pre[data-src]:not(["+t+'="'+n+'"]):not(['+t+'="'+a+'"])';s.hooks.add("before-highlightall",function(e){e.selector+=", "+r}),s.hooks.add("before-sanity-check",function(i){var o=i.element;if(o.matches(r)){i.code="",o.setAttribute(t,a);var l=o.appendChild(document.createElement("CODE"));l.textContent="Loading…";var u=o.getAttribute("data-src"),g=i.language;if("none"===g){var c=(/\.(\w+)$/.exec(u)||[,"none"])[1];g=e[c]||c}s.util.setLanguage(l,g),s.util.setLanguage(o,g);var d=s.plugins.autoloader;d&&d.loadLanguages(g),loadFile(u,function(e){o.setAttribute(t,n);var a=parseRange(o.getAttribute("data-range"));if(a){var r=e.split(/\r\n?|\n/g),i=a[0],u=null==a[1]?r.length:a[1];i<0&&(i+=r.length),i=Math.max(0,Math.min(i-1,r.length)),u<0&&(u+=r.length),u=Math.max(0,Math.min(u,r.length)),e=r.slice(i,u).join("\n"),o.hasAttribute("data-start")||o.setAttribute("data-start",String(i+1))}l.textContent=e,s.highlightElement(l)},function(e){o.setAttribute(t,"failed"),l.textContent=e})}}),s.plugins.fileHighlight={highlight:function(e){for(var t,a=(e||document).querySelectorAll(r),n=0;t=a[n++];)s.highlightElement(t)}};var i=!1;s.fileHighlight=function(){i||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),i=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)}}function loadFile(e,t,a){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){4==n.readyState&&(n.status<400&&n.responseText?t(n.responseText):n.status>=400?a("✖ Error "+n.status+" while fetching file: "+n.statusText):a("✖ Error: File does not exist or is empty"))},n.send(null)}function parseRange(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var a=Number(t[1]),n=t[2],r=t[3];return n?r?[a,Number(r)]:[a,void 0]:[a,a]}}}()},68404:function(e,t,a){"use strict";var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(15660)).default.languages.core;t.default=r},64836:function(e){function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}e.exports=_interopRequireDefault,e.exports.__esModule=!0,e.exports.default=e.exports}}]);