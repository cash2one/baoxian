var define=null,atmjs;!function(e,n,a){function r(e){if(f[e])return f[e].exports;var s={exports:{}};f[e]=s;var t=l[e].factory||function(){},i=t.apply(n,[r,s.exports,s]);return i!==a&&(s.exports=i),s.exports}function s(e){if(t(e)){var a=u[e],s=a.ids,i=[];for(var o in s)i.push(r(s[o]));var d=a.callbacks;for(var l in d)d[l].apply(n,i);delete u[e]}}function t(e){var n=u[e].has,a=!0;for(var r in n)if(n[r]<20){a=!1;break}return a}function i(n,a){var r=u[a],s=r.has;if(l[n])if(f[n])s[n]=40;else{s[n]=20;var t=l[n].deps;for(var o in t){var c=t[o];s[c]||i(c,a)}}else s[n]=10,e.loadModule(n,1,d)}var o,d={},l={},f={},u={};atmjs={loadCss:e.loadCss,loadJs:e.loadJs,addCss:e.addCss,_loadJs:e._loadJs,_loadCss:e._loadCss,init:function(n){return o?atmjs:(o=!0,void(d=e.transformArgs(n)))},use:function(n,a){n=e.getIds(n),n=function(){var a=[];for(var r in n)a.push(e.completeId(n[r],d));return a}(),r.async(n,a)}},define=function(e,n,a){l[e]={id:e,deps:n,factory:a};for(var r in u)u[r].has[e]&&(i(e,r),s(r))},r.async=function(n,a){"function"!=typeof a&&(a=function(){}),n=e.getIds(n);var r=n.join(",");u[r]?u[r].callbacks.push(a):u[r]={ids:n,has:{},callbacks:[a]};for(var t in n)i(n[t],r);s(r)},define.atm={}}(function(){var e,n={style:{},js:{},css:{}},a=/\W/g,r=document,s=document.getElementsByTagName("head")[0]||document.documentElement,t={loadCss:function(e){var n=document.createElement("link");return n.href=e,n.rel="stylesheet",n.type="text/css",s.appendChild(n),this},loadJs:function(e){var n=document.createElement("script");return n.type="text/javascript",n.src=e,s.appendChild(n),this},addCss:function(n,t){if(!t||(t=t.replace(a,"-"),!r.getElementById(t))){var i;if(!e||t?(i=r.createElement("style"),t&&(i.id=t),s.appendChild(i)):i=e,i.styleSheet){if(r.getElementsByTagName("style").length>31)throw new Error("Exceed the maximal count of style tags in IE");i.styleSheet.cssText+=n}else i.appendChild(r.createTextNode(n));t||(e=i)}},transformArgs:function(e){e=e||{};var n=e.async||{},a=n.id||[],r=n.uri||[],s=n.type||[],t=n.uris||{},i=n.deps||{},o={},d={},l=e.debugDomain;if(void 0===l){var f=e.domain;for(var u in t){var c=r[t[u]];o[a[u]]=0===c.indexOf(f)?c:f+c}}else{var f=e.domain;for(var u in t){var c=r[t[u]];0===c.indexOf(f)?(c=c.replace(f,l),o[a[u]]=c):o[a[u]]=l+c}}for(var v in i){var p=[],m=i[v];for(var y in m){var h=m[y],u=a[h],g=s[h],C=o[u];p.push({id:u,type:g,uri:C})}d[a[v]]=p}var x=e;return x.async={uris:o,deps:d},x},getIds:function(e){return"string"==typeof e?[e]:e},isEmpty:function(e){var n=!0;for(var a in e)e[a]&&(n=!1);return n},completeId:function(e,n){if(e.indexOf(":")>-1){var a=e.split(":"),r=a[0],s=a[1];return a=r.split("/"),2===a.length?[a[0],a[1],n.version||""].join("/")+":"+s:e}var t=n.alias||{},i=t[e];return i?i:e},_loadJs:function(e,a){e&&!n.js[e]&&(n.js[e]=!0,void 0!==a&&(e=e+"?debugDomain="+a),t.loadJs(e))},_loadCss:function(e,a){e&&!n.css[e]&&(n.css[e]=!0,void 0!==a&&(e=e+"?debugDomain="+a),t.loadCss(e))},loadCssDeps:function(e,n){var a=n.async.css,r=a[e];if(r)for(var s in r){var i=r[s];t._loadCss(i,n.debugDomain)}},loadModule:function(e,a,r){var s=n.style;if(!s[e]){s[e]=!0;var i=r.async,o=i.deps[e],d=i.uris[e];if(o)for(var l in o){var f=o[l],u=f.id;f.uri&&t.loadModule(u,f.type,r)}d&&(a?t._loadJs(d,r.debugDomain):t._loadCss(d,r.debugDomain))}}};return t}(),window);