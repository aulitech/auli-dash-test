import{S as H,f as L,h as M,j as i,k as D,l as r,m as p,n as x,o as E,p as h,q as u,r as V,t as n,u as k,v as g}from"../chunks/vendor.18daf83d.js";import"../chunks/firebase.6a7fb8f2.js";function q(C){let e,t,l,y="You have been logged in!",_,c,s,I="Log Out",f,a,T="",m,b;return{c(){e=i("div"),t=i("div"),l=i("h1"),l.textContent=y,_=D(),c=i("div"),s=i("button"),s.textContent=I,f=D(),a=i("main"),a.innerHTML=T,this.h()},l(d){e=r(d,"DIV",{class:!0});var o=p(e);t=r(o,"DIV",{class:!0});var v=p(t);l=r(v,"H1",{["data-svelte-h"]:!0}),x(l)!=="svelte-1of7j9"&&(l.textContent=y),_=E(v),c=r(v,"DIV",{});var j=p(c);s=r(j,"BUTTON",{class:!0,["data-svelte-h"]:!0}),x(s)!=="svelte-1nsejyf"&&(s.textContent=I),j.forEach(h),v.forEach(h),f=E(o),a=r(o,"MAIN",{class:!0,["data-svelte-h"]:!0}),x(a)!=="svelte-oghr3g"&&(a.innerHTML=T),o.forEach(h),this.h()},h(){u(s,"class","svelte-88e90x"),u(t,"class","header-container svelte-88e90x"),u(a,"class","svelte-88e90x"),u(e,"class","main-container svelte-88e90x")},m(d,o){V(d,e,o),n(e,t),n(t,l),n(t,_),n(t,c),n(c,s),n(e,f),n(e,a),m||(b=k(s,"click",authhandlers.logout),m=!0)},p:g,i:g,o:g,d(d){d&&h(e),m=!1,b()}}}function N(C){return[]}class $ extends H{constructor(e){super(),L(this,e,N,q,M,{})}}export{$ as component};