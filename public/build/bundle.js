!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function g(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let $;function v(t){$=t}function x(){if(!$)throw new Error("Function called outside component initialization");return $}function y(t){x().$$.on_mount.push(t)}function w(){const t=x();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);i.slice().forEach(e=>{e.call(t,s)})}}}const b=[],k=[],E=[],C=[],_=Promise.resolve();let A=!1;function P(t){E.push(t)}let j=!1;const T=new Set;function q(){if(!j){j=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];v(e),F(e.$$)}for(b.length=0;k.length;)k.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];T.has(e)||(T.add(e),e())}E.length=0}while(b.length);for(;C.length;)C.pop()();A=!1,j=!1,T.clear()}}function F(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const z=new Set;function H(t,e){t&&t.i&&(z.delete(t),t.i(e))}function I(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),(void 0).c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function G(t){t&&t.c()}function L(t,n,o){const{fragment:l,on_mount:r,on_destroy:c,after_update:a}=t.$$;l&&l.m(n,o),P(()=>{const n=r.map(e).filter(s);c?c.push(...n):i(n),t.$$.on_mount=[]}),a.forEach(P)}function O(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(b.push(t),A||(A=!0,_.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,s,o,l,r,a,f=[-1]){const u=$;v(e);const p=s.props||{},g=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:f,skip_bound:!1};let d=!1;if(g.ctx=o?o(e,p,(t,n,...i)=>{const s=i.length?i[0]:n;return g.ctx&&r(g.ctx[t],g.ctx[t]=s)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](s),d&&D(e,t)),n}):[],g.update(),d=!0,i(g.before_update),g.fragment=!!l&&l(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(c)}else g.fragment&&g.fragment.c();s.intro&&H(e.$$.fragment),L(e,s.target,s.anchor),q()}v(u)}class N{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(e){let n,i,s;return{c(){n=f("span"),n.textContent="+",d(n,"class","svelte-1kfxcpr")},m(t,o){r(t,n,o),i||(s=g(n,"click",e[6]),i=!0)},p:t,d(t){t&&c(n),i=!1,s()}}}function M(t){let e,n,s,o,l;return{c(){e=f("input"),n=p(),s=f("span"),s.textContent="+",d(s,"class","svelte-1kfxcpr")},m(i,c){r(i,e,c),m(e,t[1]),r(i,n,c),r(i,s,c),o||(l=[g(e,"input",t[3]),g(e,"keyup",t[4]),g(s,"click",t[5])],o=!0)},p(t,n){2&n&&e.value!==t[1]&&m(e,t[1])},d(t){t&&c(e),t&&c(n),t&&c(s),o=!1,i(l)}}}function W(e){let n;function i(t,e){return t[0]?M:S}let s=i(e),o=s(e);return{c(){n=f("div"),o.c(),d(n,"id","addPathPart"),d(n,"class","svelte-1kfxcpr")},m(t,e){r(t,n,e),o.m(n,null)},p(t,[e]){s===(s=i(t))&&o?o.p(t,e):(o.d(1),o=s(t),o&&(o.c(),o.m(n,null)))},i:t,o:t,d(t){t&&c(n),o.d()}}}function X(t,e,n){const i=w();let s=!1,o="";return[s,o,i,function(){o=this.value,n(1,o)},t=>{"Enter"===t.key&&(t.preventDefault(),n(0,s=!1),i("newPath",o))},()=>{i("newPath",o),n(0,s=!1)},()=>{n(0,s=!0),n(1,o="")}]}class B extends N{constructor(t){super(),R(this,t,X,W,o,{})}}function J(t,e,n){const i=t.slice();return i[9]=e[n],i}function K(t){let e,n,i,s,o,a,m,$,v=t[9]+"";function x(...e){return t[4](t[9],...e)}return{c(){e=f("div"),n=f("span"),i=u(v),s=p(),o=f("span"),o.textContent="X",a=p(),d(n,"class","path svelte-l2fat0"),d(o,"class","delete svelte-l2fat0"),d(e,"class","pathLine svelte-l2fat0")},m(t,c){r(t,e,c),l(e,n),l(n,i),l(e,s),l(e,o),l(e,a),m||($=g(o,"click",x),m=!0)},p(e,n){t=e,1&n&&v!==(v=t[9]+"")&&h(i,v)},d(t){t&&c(e),m=!1,$()}}}function Q(t){let e,n,i,s,o,u,g,h=t[0],m=[];for(let e=0;e<h.length;e+=1)m[e]=K(J(t,h,e));return u=new B({}),u.$on("newPath",t[5]),{c(){e=f("div"),n=f("h3"),n.textContent="Fig Paths",i=p(),s=f("div");for(let t=0;t<m.length;t+=1)m[t].c();o=p(),G(u.$$.fragment),d(s,"id","paths"),d(s,"class","svelte-l2fat0"),d(e,"id","figpath")},m(t,c){r(t,e,c),l(e,n),l(e,i),l(e,s);for(let t=0;t<m.length;t+=1)m[t].m(s,null);l(e,o),L(u,e,null),g=!0},p(t,[e]){if(5&e){let n;for(h=t[0],n=0;n<h.length;n+=1){const i=J(t,h,n);m[n]?m[n].p(i,e):(m[n]=K(i),m[n].c(),m[n].m(s,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=h.length}},i(t){g||(H(u.$$.fragment,t),g=!0)},o(t){I(u.$$.fragment,t),g=!1},d(t){t&&c(e),a(m,t),O(u)}}}function U(t,e,n){let{fig:i}=e,s="",o=[],l="";function r(t){"string"==typeof t&&""!==t&&(o.push(t),c(),n(0,o))}function c(){var t=s.map(t=>(t.includes("FIGPATH")&&(t=`set -xg FIGPATH "${o.join(":")}"`),t));i.fwrite("~/.fig/exports/env.fish",t.join("\n"),t=>{console.log("Error: "+t)})}function a(t){n(0,o=o.filter(e=>!(e===t))),c()}y(()=>{i.fread("~/.fig/exports/env.fish",(t,e)=>{e?i.fread("~/.fig/exports/env.sh",(t,e)=>{e?(n(0,o=["~/.fig/bin","~/run"]),s='set -xg FIGPATH "~/.fig/bin:~/run"\n\nsource "~/.fig/exports/aliases.fish"\n',i.fwrite("~/.fig/exports/env.fish",s,t=>{})):null!==t&&"string"==typeof t&&""!==t&&(s=t.split("\n"),l=s.filter(t=>t.includes("FIGPATH"))[0],n(0,o=l.split("=")[1].replace(new RegExp('"',"g"),"").split(":")),s='set -xg FIGPATH "~/.fig/bin:~/run"\n\nsource "~/.fig/exports/aliases.fish"\n',i.fwrite("~/.fig/exports/env.fish",s,t=>{}))}):null!==t&&"string"==typeof t&&""!==t&&(s=t.split("\n"),l=s.filter(t=>t.includes("FIGPATH"))[0],n(0,o=l.split(" ")[3].replace(new RegExp('"',"g"),"").split(":")))})});return t.$$set=t=>{"fig"in t&&n(3,i=t.fig)},[o,r,a,i,t=>{a(t)},t=>{r(t.detail)}]}class V extends N{constructor(t){super(),R(this,t,U,Q,o,{fig:3})}}function Y(e){let n,i,s;return{c(){n=f("span"),n.textContent="+",d(n,"class","svelte-ggqxt2")},m(t,o){r(t,n,o),i||(s=g(n,"click",e[8]),i=!0)},p:t,d(t){t&&c(n),i=!1,s()}}}function Z(t){let e,n,s,o,l,a,u,h,$;return{c(){e=f("input"),n=p(),s=f("span"),s.textContent="=",o=p(),l=f("input"),a=p(),u=f("span"),u.textContent="+",d(e,"class","svelte-ggqxt2"),d(s,"class","equal svelte-ggqxt2"),d(l,"class","svelte-ggqxt2"),d(u,"class","svelte-ggqxt2")},m(i,c){r(i,e,c),m(e,t[1]),r(i,n,c),r(i,s,c),r(i,o,c),r(i,l,c),m(l,t[2]),r(i,a,c),r(i,u,c),h||($=[g(e,"input",t[4]),g(l,"input",t[5]),g(l,"keyup",t[6]),g(u,"click",t[7])],h=!0)},p(t,n){2&n&&e.value!==t[1]&&m(e,t[1]),4&n&&l.value!==t[2]&&m(l,t[2])},d(t){t&&c(e),t&&c(n),t&&c(s),t&&c(o),t&&c(l),t&&c(a),t&&c(u),h=!1,i($)}}}function tt(e){let n;function i(t,e){return t[0]?Z:Y}let s=i(e),o=s(e);return{c(){n=f("div"),o.c(),d(n,"id","addAliasPart"),d(n,"class","svelte-ggqxt2")},m(t,e){r(t,n,e),o.m(n,null)},p(t,[e]){s===(s=i(t))&&o?o.p(t,e):(o.d(1),o=s(t),o&&(o.c(),o.m(n,null)))},i:t,o:t,d(t){t&&c(n),o.d()}}}function et(t,e,n){const i=w();let s=!1,o="",l="";return[s,o,l,i,function(){o=this.value,n(1,o)},function(){l=this.value,n(2,l)},t=>{"Enter"===t.key&&(t.preventDefault(),n(0,s=!1),i("newAlias",{key:o,def:l}))},()=>{i("newAlias",{key:o,def:l}),n(0,s=!1)},()=>{n(0,s=!0),n(1,o=""),n(2,l="")}]}class nt extends N{constructor(t){super(),R(this,t,et,tt,o,{})}}function it(t,e,n){const i=t.slice();return i[8]=e[n][0],i[9]=e[n][1],i}function st(t){let e,n,i,s,o,a,m,$,v,x,y,w,b,k=t[8]+"",E=t[9]+"";function C(...e){return t[4](t[8],t[9],...e)}return{c(){e=f("div"),n=f("span"),i=u(k),s=p(),o=f("span"),o.textContent="=",a=p(),m=f("span"),$=u(E),v=p(),x=f("span"),x.textContent="X",y=p(),d(n,"class","alias svelte-1oz0j2v"),d(o,"class","equals svelte-1oz0j2v"),d(m,"class","alias svelte-1oz0j2v"),d(x,"class","delete svelte-1oz0j2v"),d(e,"class","aliasLine svelte-1oz0j2v")},m(t,c){r(t,e,c),l(e,n),l(n,i),l(e,s),l(e,o),l(e,a),l(e,m),l(m,$),l(e,v),l(e,x),l(e,y),w||(b=g(x,"click",C),w=!0)},p(e,n){t=e,1&n&&k!==(k=t[8]+"")&&h(i,k),1&n&&E!==(E=t[9]+"")&&h($,E)},d(t){t&&c(e),w=!1,b()}}}function ot(t){let e,n,i,s,o,u,g,h=Object.entries(t[0]),m=[];for(let e=0;e<h.length;e+=1)m[e]=st(it(t,h,e));return u=new nt({}),u.$on("newAlias",t[5]),{c(){e=f("div"),n=f("h3"),n.textContent="Fig Aliases",i=p(),s=f("div");for(let t=0;t<m.length;t+=1)m[t].c();o=p(),G(u.$$.fragment),d(s,"id","aliases"),d(s,"class","svelte-1oz0j2v"),d(e,"id","figAlias"),d(e,"class","svelte-1oz0j2v")},m(t,c){r(t,e,c),l(e,n),l(e,i),l(e,s);for(let t=0;t<m.length;t+=1)m[t].m(s,null);l(e,o),L(u,e,null),g=!0},p(t,[e]){if(5&e){let n;for(h=Object.entries(t[0]),n=0;n<h.length;n+=1){const i=it(t,h,n);m[n]?m[n].p(i,e):(m[n]=st(i),m[n].c(),m[n].m(s,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=h.length}},i(t){g||(H(u.$$.fragment,t),g=!0)},o(t){I(u.$$.fragment,t),g=!1},d(t){t&&c(e),a(m,t),O(u)}}}function lt(t,e,n){let{fig:i}=e,s="",o=[];function l(t,e){"string"==typeof t&&"string"==typeof e&&""!==t&&""!==e&&(n(0,o[t]=e,o),r(),n(0,o))}function r(){var t="";for(var e in o)t+=`alias ${e}="${o[e]}"\n`;i.fwrite("~/.fig/exports/aliases.fish",t,t=>{console.log("Error: "+t)})}function c(t,e){delete o[t],r(),n(0,o)}y(()=>{i.fread("~/.fig/exports/aliases.fish",(t,e)=>{e?(n(0,o=[]),r()):null!==t&&"string"==typeof t&&""!==t&&(s=t.split("\n"),n(0,o=[]),s.forEach(t=>{if(t.includes("alias")){var e=t.split("=");n(0,o[e[0].split(" ")[1]]=e[1].replace(new RegExp('"',"g"),""),o)}})),n(0,o)})});return t.$$set=t=>{"fig"in t&&n(3,i=t.fig)},[o,l,c,i,(t,e)=>{c(t)},t=>{l(t.detail.key,t.detail.def)}]}class rt extends N{constructor(t){super(),R(this,t,lt,ot,o,{fig:3})}}function ct(t){let e,n,i,s,o,l,a,u,h,m,$,v,x,y,w,b,k,E;return l=new V({props:{fig:t[0]}}),$=new rt({props:{fig:t[0]}}),{c(){e=f("h2"),e.textContent="Fishy Settings",n=p(),i=f("p"),i.innerHTML='This application for fig is for setting up search paths and aliases to\nuse with the <a href="https://docs.withfig.com/" rel="nofollow">fig</a> terminal assistant. The paths\nare the different locations on your system to search for fig Rundown documents\nand applications.',s=p(),o=f("div"),G(l.$$.fragment),a=p(),u=f("p"),u.textContent="Aliases are ways to set a smaller command line command to a larger string\nthat might be harder for you to remember. If you are typing something a\nwhole lot that can be made into an alias, then make an alias!",h=p(),m=f("div"),G($.$$.fragment),v=p(),x=f("p"),x.textContent="This button will close the application.",y=p(),w=f("button"),w.textContent="Close",d(o,"class","closure svelte-1d3vqr3"),d(m,"class","closure svelte-1d3vqr3")},m(c,f){r(c,e,f),r(c,n,f),r(c,i,f),r(c,s,f),r(c,o,f),L(l,o,null),r(c,a,f),r(c,u,f),r(c,h,f),r(c,m,f),L($,m,null),r(c,v,f),r(c,x,f),r(c,y,f),r(c,w,f),b=!0,k||(E=g(w,"click",t[2]),k=!0)},p(t,[e]){const n={};1&e&&(n.fig=t[0]),l.$set(n);const i={};1&e&&(i.fig=t[0]),$.$set(i)},i(t){b||(H(l.$$.fragment,t),H($.$$.fragment,t),b=!0)},o(t){I(l.$$.fragment,t),I($.$$.fragment,t),b=!1},d(t){t&&c(e),t&&c(n),t&&c(i),t&&c(s),t&&c(o),O(l),t&&c(a),t&&c(u),t&&c(h),t&&c(m),O($),t&&c(v),t&&c(x),t&&c(y),t&&c(w),k=!1,E()}}}function at(t,e,n){let{fig:i}=e;function s(){i.reposition("7")}return t.$$set=t=>{"fig"in t&&n(0,i=t.fig)},[i,s,()=>{s()}]}class ft extends N{constructor(t){super(),R(this,t,at,ct,o,{fig:0})}}fig.init=(t,e)=>{fig.title=fig.env.PWD,fig.icon="fig://${fig.env.PWD}";new ft({target:document.body,props:{fig:fig}})}}();
//# sourceMappingURL=bundle.js.map
