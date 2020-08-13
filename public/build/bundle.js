!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function d(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let $;function v(t){$=t}function x(){if(!$)throw new Error("Function called outside component initialization");return $}function b(t){x().$$.on_mount.push(t)}function y(){const t=x();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);i.slice().forEach(e=>{e.call(t,o)})}}}const w=[],k=[],C=[],E=[],T=Promise.resolve();let _=!1;function A(t){C.push(t)}let P=!1;const j=new Set;function F(){if(!P){P=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];v(e),H(e.$$)}for(w.length=0;k.length;)k.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];j.has(e)||(j.add(e),e())}C.length=0}while(w.length);for(;E.length;)E.pop()();_=!1,P=!1,j.clear()}}function H(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const q=new Set;function I(t,e){t&&t.i&&(q.delete(t),t.i(e))}function L(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),(void 0).c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function G(t){t&&t.c()}function O(t,n,s){const{fragment:r,on_mount:l,on_destroy:a,after_update:c}=t.$$;r&&r.m(n,s),A(()=>{const n=l.map(e).filter(o);a?a.push(...n):i(n),t.$$.on_mount=[]}),c.forEach(A)}function D(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(w.push(t),_||(_=!0,T.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,o,s,r,l,c,f=[-1]){const u=$;v(e);const p=o.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:f,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,p,(t,n,...i)=>{const o=i.length?i[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&M(e,t)),n}):[],d.update(),h=!0,i(d.before_update),d.fragment=!!r&&r(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();o.intro&&I(e.$$.fragment),O(e,o.target,o.anchor),F()}v(u)}class X{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function N(e){let n,i,o;return{c(){n=f("span"),n.textContent="+",h(n,"class","add svelte-lb79ou")},m(t,s){l(t,n,s),i||(o=d(n,"click",e[6]),i=!0)},p:t,d(t){t&&a(n),i=!1,o()}}}function S(t){let e,n,o,s,r;return{c(){e=f("input"),n=p(),o=f("span"),o.textContent="+",h(o,"class","add svelte-lb79ou")},m(i,a){l(i,e,a),m(e,t[1]),l(i,n,a),l(i,o,a),s||(r=[d(e,"input",t[3]),d(e,"keyup",t[4]),d(o,"click",t[5])],s=!0)},p(t,n){2&n&&e.value!==t[1]&&m(e,t[1])},d(t){t&&a(e),t&&a(n),t&&a(o),s=!1,i(r)}}}function W(e){let n;function i(t,e){return t[0]?S:N}let o=i(e),s=o(e);return{c(){n=f("div"),s.c(),h(n,"id","addPathPart"),h(n,"class","svelte-lb79ou")},m(t,e){l(t,n,e),s.m(n,null)},p(t,[e]){o===(o=i(t))&&s?s.p(t,e):(s.d(1),s=o(t),s&&(s.c(),s.m(n,null)))},i:t,o:t,d(t){t&&a(n),s.d()}}}function z(t,e,n){const i=y();let o=!1,s="";return[o,s,i,function(){s=this.value,n(1,s)},t=>{"Enter"===t.key&&(t.preventDefault(),n(0,o=!1),i("newPath",s))},()=>{i("newPath",s),n(0,o=!1)},()=>{n(0,o=!0),n(1,s="")}]}class B extends X{constructor(t){super(),R(this,t,z,W,s,{})}}function J(t,e,n){const i=t.slice();return i[9]=e[n],i}function K(t){let e,n,i,o,s,c,m,$,v=t[9]+"";function x(...e){return t[4](t[9],...e)}return{c(){e=f("div"),n=f("span"),i=u(v),o=p(),s=f("span"),s.textContent="X",c=p(),h(n,"class","path svelte-jbq9g2"),h(s,"class","delete svelte-jbq9g2"),h(e,"class","pathLine svelte-jbq9g2")},m(t,a){l(t,e,a),r(e,n),r(n,i),r(e,o),r(e,s),r(e,c),m||($=d(s,"click",x),m=!0)},p(e,n){t=e,1&n&&v!==(v=t[9]+"")&&g(i,v)},d(t){t&&a(e),m=!1,$()}}}function Q(t){let e,n,i,o,s=t[0],r=[];for(let e=0;e<s.length;e+=1)r[e]=K(J(t,s,e));return i=new B({}),i.$on("newPath",t[5]),{c(){e=f("div");for(let t=0;t<r.length;t+=1)r[t].c();n=p(),G(i.$$.fragment),h(e,"id","paths"),h(e,"class","svelte-jbq9g2")},m(t,s){l(t,e,s);for(let t=0;t<r.length;t+=1)r[t].m(e,null);l(t,n,s),O(i,t,s),o=!0},p(t,[n]){if(5&n){let i;for(s=t[0],i=0;i<s.length;i+=1){const o=J(t,s,i);r[i]?r[i].p(o,n):(r[i]=K(o),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=s.length}},i(t){o||(I(i.$$.fragment,t),o=!0)},o(t){L(i.$$.fragment,t),o=!1},d(t){t&&a(e),c(r,t),t&&a(n),D(i,t)}}}function U(t,e,n){let{fig:i}=e,o="",s=[],r="";function l(t){"string"==typeof t&&""!==t&&(s.push(t),a(),n(0,s))}function a(){var t=o.map(t=>(t.includes("FIGPATH")&&(t=`set -xg FIGPATH "${s.join(":")}"`),t));i.fwrite("~/.fig/exports/env.fish",t.join("\n"),t=>{console.log("Error: "+t)})}function c(t){n(0,s=s.filter(e=>!(e===t))),a()}b(()=>{i.fread("~/.fig/exports/env.fish",(t,e)=>{e?i.fread("~/.fig/exports/env.sh",(t,e)=>{e?(n(0,s=["~/.fig/bin","~/run"]),o='set -xg FIGPATH "~/.fig/bin:~/run"\n\nsource "~/.fig/exports/aliases.fish"\n',i.fwrite("~/.fig/exports/env.fish",o,t=>{})):null!==t&&"string"==typeof t&&""!==t&&(o=t.split("\n"),r=o.filter(t=>t.includes("FIGPATH"))[0],n(0,s=r.split("=")[1].replace(new RegExp('"',"g"),"").split(":")),o='set -xg FIGPATH "~/.fig/bin:~/run"\n\nsource "~/.fig/exports/aliases.fish"\n',i.fwrite("~/.fig/exports/env.fish",o,t=>{}))}):null!==t&&"string"==typeof t&&""!==t&&(o=t.split("\n"),r=o.filter(t=>t.includes("FIGPATH"))[0],n(0,s=r.split(" ")[3].replace(new RegExp('"',"g"),"").split(":")))})});return t.$$set=t=>{"fig"in t&&n(3,i=t.fig)},[s,l,c,i,t=>{c(t)},t=>{l(t.detail)}]}class V extends X{constructor(t){super(),R(this,t,U,Q,s,{fig:3})}}function Y(e){let n,i,o;return{c(){n=f("span"),n.textContent="+",h(n,"class","add svelte-13adrnr")},m(t,s){l(t,n,s),i||(o=d(n,"click",e[8]),i=!0)},p:t,d(t){t&&a(n),i=!1,o()}}}function Z(t){let e,n,o,s,r,c,u,g,$;return{c(){e=f("input"),n=p(),o=f("span"),o.textContent="=",s=p(),r=f("input"),c=p(),u=f("span"),u.textContent="+",h(e,"class","svelte-13adrnr"),h(o,"class","equal svelte-13adrnr"),h(r,"class","svelte-13adrnr")},m(i,a){l(i,e,a),m(e,t[1]),l(i,n,a),l(i,o,a),l(i,s,a),l(i,r,a),m(r,t[2]),l(i,c,a),l(i,u,a),g||($=[d(e,"input",t[4]),d(r,"input",t[5]),d(r,"keyup",t[6]),d(u,"click",t[7])],g=!0)},p(t,n){2&n&&e.value!==t[1]&&m(e,t[1]),4&n&&r.value!==t[2]&&m(r,t[2])},d(t){t&&a(e),t&&a(n),t&&a(o),t&&a(s),t&&a(r),t&&a(c),t&&a(u),g=!1,i($)}}}function tt(e){let n;function i(t,e){return t[0]?Z:Y}let o=i(e),s=o(e);return{c(){n=f("div"),s.c(),h(n,"id","addAliasPart"),h(n,"class","svelte-13adrnr")},m(t,e){l(t,n,e),s.m(n,null)},p(t,[e]){o===(o=i(t))&&s?s.p(t,e):(s.d(1),s=o(t),s&&(s.c(),s.m(n,null)))},i:t,o:t,d(t){t&&a(n),s.d()}}}function et(t,e,n){const i=y();let o=!1,s="",r="";return[o,s,r,i,function(){s=this.value,n(1,s)},function(){r=this.value,n(2,r)},t=>{"Enter"===t.key&&(t.preventDefault(),n(0,o=!1),i("newAlias",{key:s,def:r}))},()=>{i("newAlias",{key:s,def:r}),n(0,o=!1)},()=>{n(0,o=!0),n(1,s=""),n(2,r="")}]}class nt extends X{constructor(t){super(),R(this,t,et,tt,s,{})}}function it(t,e,n){const i=t.slice();return i[8]=e[n][0],i[9]=e[n][1],i}function ot(t){let e,n,i,o,s,c,m,$,v,x,b,y,w,k=t[8]+"",C=t[9]+"";function E(...e){return t[4](t[8],t[9],...e)}return{c(){e=f("div"),n=f("span"),i=u(k),o=p(),s=f("span"),s.textContent="=",c=p(),m=f("span"),$=u(C),v=p(),x=f("span"),x.textContent="X",b=p(),h(n,"class","alias svelte-16m6ro7"),h(s,"class","equals svelte-16m6ro7"),h(m,"class","alias svelte-16m6ro7"),h(x,"class","delete svelte-16m6ro7"),h(e,"class","aliasLine svelte-16m6ro7")},m(t,a){l(t,e,a),r(e,n),r(n,i),r(e,o),r(e,s),r(e,c),r(e,m),r(m,$),r(e,v),r(e,x),r(e,b),y||(w=d(x,"click",E),y=!0)},p(e,n){t=e,1&n&&k!==(k=t[8]+"")&&g(i,k),1&n&&C!==(C=t[9]+"")&&g($,C)},d(t){t&&a(e),y=!1,w()}}}function st(t){let e,n,i,o,s=Object.entries(t[0]),r=[];for(let e=0;e<s.length;e+=1)r[e]=ot(it(t,s,e));return i=new nt({}),i.$on("newAlias",t[5]),{c(){e=f("div");for(let t=0;t<r.length;t+=1)r[t].c();n=p(),G(i.$$.fragment),h(e,"id","aliases"),h(e,"class","svelte-16m6ro7")},m(t,s){l(t,e,s);for(let t=0;t<r.length;t+=1)r[t].m(e,null);l(t,n,s),O(i,t,s),o=!0},p(t,[n]){if(5&n){let i;for(s=Object.entries(t[0]),i=0;i<s.length;i+=1){const o=it(t,s,i);r[i]?r[i].p(o,n):(r[i]=ot(o),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=s.length}},i(t){o||(I(i.$$.fragment,t),o=!0)},o(t){L(i.$$.fragment,t),o=!1},d(t){t&&a(e),c(r,t),t&&a(n),D(i,t)}}}function rt(t,e,n){let{fig:i}=e,o="",s=[];function r(t,e){"string"==typeof t&&"string"==typeof e&&""!==t&&""!==e&&(n(0,s[t]=e,s),l(),n(0,s))}function l(){var t="";for(var e in s)t+=`alias ${e}="${s[e]}"\n`;i.fwrite("~/.fig/exports/aliases.fish",t,t=>{console.log("Error: "+t)})}function a(t,e){delete s[t],l(),n(0,s)}b(()=>{i.fread("~/.fig/exports/aliases.fish",(t,e)=>{e?(n(0,s=[]),l()):null!==t&&"string"==typeof t&&""!==t&&(o=t.split("\n"),n(0,s=[]),o.forEach(t=>{if(t.includes("alias")){var e=t.split("=");n(0,s[e[0].split(" ")[1]]=e[1].replace(new RegExp('"',"g"),""),s)}})),n(0,s)})});return t.$$set=t=>{"fig"in t&&n(3,i=t.fig)},[s,r,a,i,(t,e)=>{a(t)},t=>{r(t.detail.key,t.detail.def)}]}class lt extends X{constructor(t){super(),R(this,t,rt,st,s,{fig:3})}}function at(t){let e,n,i,o,s,r,c,u,h,g,m,$,v,x,b,y,w,k,C,E,T,_,A,P,j,F,H,q,M,R;return m=new V({props:{fig:t[0]}}),T=new lt({props:{fig:t[0]}}),{c(){e=f("h2"),e.textContent="Fishy Settings",n=p(),i=f("p"),i.innerHTML='This application for fig is for setting up search paths and aliases to\nuse with the <a href="https://docs.withfig.com/" rel="nofollow">fig</a> terminal assistant. The paths\nare the different locations on your system to search for fig Rundown documents\nand applications.',o=p(),s=f("h3"),s.textContent="Fig Paths",r=p(),c=f("p"),c.textContent="To add a path, simply click the red plus at the bottom of the list of paths.\nThen, add the new path to the input box given and press the enter key or\nthe red plus sign at the end of the input box.",u=p(),h=f("p"),h.innerHTML="To remove an alias, just click on the red <code>X</code> at the end of the line.",g=p(),G(m.$$.fragment),$=p(),v=f("h3"),v.textContent="Fig Aliases",x=p(),b=f("p"),b.textContent="Aliases are ways to set a smaller command line command to a larger string\nthat is harder for you to remember. If you are typing something a\nwhole lot that can be made into an alias, then make an alias!",y=p(),w=f("p"),w.textContent="To add an alias, press the red plus after the list of aliases. The input\nto the left is for the alias name (what you will type to activate the alias),\nand the command line to execute in the input box after the equal sign.",k=p(),C=f("p"),C.innerHTML="To remove an alias, just click on the red <code>X</code> at the end of the line.",E=p(),G(T.$$.fragment),_=p(),A=f("h2"),A.textContent="Close the Application",P=p(),j=f("p"),j.textContent="This button will close the application, but the changes have already been\nsaved. Come back soon!",F=p(),H=f("button"),H.textContent="Close"},m(a,f){l(a,e,f),l(a,n,f),l(a,i,f),l(a,o,f),l(a,s,f),l(a,r,f),l(a,c,f),l(a,u,f),l(a,h,f),l(a,g,f),O(m,a,f),l(a,$,f),l(a,v,f),l(a,x,f),l(a,b,f),l(a,y,f),l(a,w,f),l(a,k,f),l(a,C,f),l(a,E,f),O(T,a,f),l(a,_,f),l(a,A,f),l(a,P,f),l(a,j,f),l(a,F,f),l(a,H,f),q=!0,M||(R=d(H,"click",t[2]),M=!0)},p(t,[e]){const n={};1&e&&(n.fig=t[0]),m.$set(n);const i={};1&e&&(i.fig=t[0]),T.$set(i)},i(t){q||(I(m.$$.fragment,t),I(T.$$.fragment,t),q=!0)},o(t){L(m.$$.fragment,t),L(T.$$.fragment,t),q=!1},d(t){t&&a(e),t&&a(n),t&&a(i),t&&a(o),t&&a(s),t&&a(r),t&&a(c),t&&a(u),t&&a(h),t&&a(g),D(m,t),t&&a($),t&&a(v),t&&a(x),t&&a(b),t&&a(y),t&&a(w),t&&a(k),t&&a(C),t&&a(E),D(T,t),t&&a(_),t&&a(A),t&&a(P),t&&a(j),t&&a(F),t&&a(H),M=!1,R()}}}function ct(t,e,n){let{fig:i}=e;function o(){i.reposition("7")}return t.$$set=t=>{"fig"in t&&n(0,i=t.fig)},[i,o,()=>{o()}]}class ft extends X{constructor(t){super(),R(this,t,ct,at,s,{fig:0})}}fig.init=(t,e)=>{fig.title=fig.env.PWD,fig.icon="fig://${fig.env.PWD}";new ft({target:document.body,props:{fig:fig}})}}();
//# sourceMappingURL=bundle.js.map
