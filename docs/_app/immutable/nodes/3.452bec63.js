import{s as J,n as R,r as K,h as Q}from"../chunks/scheduler.095dc040.js";import{S as W,i as X,g as T,s as L,h as z,j as I,x as V,c as E,f as x,k as m,a as k,y as d,A as q,z as H,B as Z,m as j,n as A,o as ee}from"../chunks/index.cf2b5a39.js";import{t as N}from"../chunks/store.33c7b926.js";function $(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function F(l,e,t){const c=l.slice();return c[9]=e[t],c[11]=t,c}function Y(l){let e,t,c;return{c(){e=T("a"),t=j("Download text file"),this.h()},l(r){e=z(r,"A",{download:!0,href:!0});var n=I(e);t=A(n,"Download text file"),n.forEach(x),this.h()},h(){m(e,"download","test.txt"),m(e,"href",c=`${l[3]}`)},m(r,n){k(r,e,n),d(e,t)},p(r,n){n&8&&c!==(c=`${r[3]}`)&&m(e,"href",c)},d(r){r&&x(e)}}}function G(l){let e,t,c=l[11]+1+"",r,n,u=l[9]+"",C,D,_,g="<button>--trash--</button> <button>--edit--</button>",f;return{c(){e=T("div"),t=T("p"),r=j(c),n=j(". "),C=j(u),D=L(),_=T("div"),_.innerHTML=g,f=L(),this.h()},l(i){e=z(i,"DIV",{});var a=I(e);t=z(a,"P",{});var b=I(t);r=A(b,c),n=A(b,". "),C=A(b,u),b.forEach(x),D=E(a),_=z(a,"DIV",{class:!0,["data-svelte-h"]:!0}),V(_)!=="svelte-1hjx7tw"&&(_.innerHTML=g),f=E(a),a.forEach(x),this.h()},h(){m(_,"class","actions")},m(i,a){k(i,e,a),d(e,t),d(t,r),d(t,n),d(t,C),d(e,D),d(e,_),d(e,f)},p(i,a){a&1&&u!==(u=i[9]+"")&&ee(C,u)},d(i){i&&x(e)}}}function te(l){let e,t,c="<h1>You have been logged in.</h1>",r,n,u,C="Save",D,_,g,f,i,a,b,w,O="Add",B,P,v=l[2]&&Y(l),S=$(l[0]),h=[];for(let s=0;s<S.length;s+=1)h[s]=G(F(l,S,s));return{c(){e=T("div"),t=T("div"),t.innerHTML=c,r=L(),n=T("div"),u=T("button"),u.textContent=C,D=L(),v&&v.c(),_=L(),g=T("main");for(let s=0;s<h.length;s+=1)h[s].c();f=L(),i=T("div"),a=T("input"),b=L(),w=T("button"),w.textContent=O,this.h()},l(s){e=z(s,"DIV",{class:!0});var p=I(e);t=z(p,"DIV",{class:!0,["data-svelte-h"]:!0}),V(t)!=="svelte-96hy8z"&&(t.innerHTML=c),r=E(p),n=z(p,"DIV",{class:!0});var o=I(n);u=z(o,"BUTTON",{class:!0,["data-svelte-h"]:!0}),V(u)!=="svelte-1v8jjwa"&&(u.textContent=C),D=E(o),v&&v.l(o),o.forEach(x),_=E(p),g=z(p,"MAIN",{class:!0});var M=I(g);for(let y=0;y<h.length;y+=1)h[y].l(M);M.forEach(x),f=E(p),i=z(p,"DIV",{class:!0});var U=I(i);a=z(U,"INPUT",{type:!0,placeholder:!0,class:!0}),b=E(U),w=z(U,"BUTTON",{class:!0,["data-svelte-h"]:!0}),V(w)!=="svelte-15sgq9c"&&(w.textContent=O),U.forEach(x),p.forEach(x),this.h()},h(){m(t,"class","header-container svelte-100dazd"),m(u,"class","saveBtn svelte-100dazd"),m(n,"class","header-container svelte-100dazd"),m(g,"class","svelte-100dazd"),m(a,"type","text"),m(a,"placeholder","Enter todo"),m(a,"class","svelte-100dazd"),m(w,"class","svelte-100dazd"),m(i,"class",Q("enterTodo")+" svelte-100dazd"),m(e,"class","main-container svelte-100dazd")},m(s,p){k(s,e,p),d(e,t),d(e,r),d(e,n),d(n,u),d(n,D),v&&v.m(n,null),d(e,_),d(e,g);for(let o=0;o<h.length;o+=1)h[o]&&h[o].m(g,null);d(e,f),d(e,i),d(i,a),q(a,l[1]),d(i,b),d(i,w),B||(P=[H(u,"click",l[5]),H(a,"input",l[6]),H(w,"click",l[4])],B=!0)},p(s,[p]){if(s[2]?v?v.p(s,p):(v=Y(s),v.c(),v.m(n,null)):v&&(v.d(1),v=null),p&1){S=$(s[0]);let o;for(o=0;o<S.length;o+=1){const M=F(s,S,o);h[o]?h[o].p(M,p):(h[o]=G(M),h[o].c(),h[o].m(g,null))}for(;o<h.length;o+=1)h[o].d(1);h.length=S.length}p&2&&a.value!==s[1]&&q(a,s[1])},i:R,o:R,d(s){s&&x(e),v&&v.d(),Z(h,s),B=!1,K(P)}}}function le(l,e,t){let c=["Something to do"],r="",n=!1,u="";function C(){{let f=c.shift();t(0,c=f);return}}function D(){let f=[],i={};N.subscribe(b=>{i=b});const a=(b,w)=>f=[...f,`${w+1}. ${b}`];if(N.set({data:[]}),console.log("Reset todoStore"),i.data.length===0)return c.map(a),N.set({data:f}),console.log("Successful set todoStore"),t(2,n=!0),_(f)}function _(f){const i=new Blob([f],{type:"text/plain"});t(3,u=URL.createObjectURL(i))}function g(){r=this.value,t(1,r)}return[c,r,n,u,C,D,g]}class oe extends W{constructor(e){super(),X(this,e,le,te,J,{})}}export{oe as component};
