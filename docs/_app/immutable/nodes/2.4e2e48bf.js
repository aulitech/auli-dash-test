import{S as se,f as ne,h as ae,j as d,I as z,k as L,l as h,m as C,J as F,p,o as P,q as u,r as A,t as o,K as O,u as T,L as re,v as D,M as J,n as S,N as ie,O as oe,Q as ue,B as ce,C as fe,R as de}from"../chunks/vendor.3d0d1b4f.js";import{b as ee}from"../chunks/store.47ecd161.js";function te(n){let e,t="Email or password is incorrect.";return{c(){e=d("p"),e.textContent=t,this.h()},l(l){e=h(l,"P",{class:!0,["data-svelte-h"]:!0}),S(e)!=="svelte-vtrn6m"&&(e.textContent=t),this.h()},h(){u(e,"class","error svelte-b1iwd4")},m(l,a){A(l,e,a)},d(l){l&&p(e)}}}function le(n){let e,t,l,a;return{c(){e=d("label"),t=d("input"),this.h()},l(s){e=h(s,"LABEL",{class:!0});var c=C(e);t=h(c,"INPUT",{type:!0,placeholder:!0,class:!0}),c.forEach(p),this.h()},h(){u(t,"type","password"),u(t,"placeholder","Confirm Password"),u(t,"class","svelte-b1iwd4"),u(e,"class","svelte-b1iwd4")},m(s,c){A(s,e,c),o(e,t),O(t,n[2]),l||(a=T(t,"input",n[10]),l=!0)},p(s,c){c&4&&t.value!==s[2]&&O(t,s[2])},d(s){s&&p(e),l=!1,a()}}}function he(n){let e;return{c(){e=z("Submit")},l(t){e=F(t,"Submit")},m(t,l){A(t,e,l)},d(t){t&&p(e)}}}function _e(n){let e;return{c(){e=z("-loading-")},l(t){e=F(t,"-loading-")},m(t,l){A(t,e,l)},d(t){t&&p(e)}}}function pe(n){let e,t,l="Don't have an account?",a,s,c="REGISTER",_,m;return{c(){e=d("div"),t=d("p"),t.textContent=l,a=L(),s=d("button"),s.textContent=c,this.h()},l(r){e=h(r,"DIV",{class:!0});var f=C(e);t=h(f,"P",{["data-svelte-h"]:!0}),S(t)!=="svelte-qd51yb"&&(t.textContent=l),a=P(f),s=h(f,"BUTTON",{class:!0,["data-svelte-h"]:!0}),S(s)!=="svelte-k1z9sg"&&(s.textContent=c),f.forEach(p),this.h()},h(){u(s,"class","logReg svelte-b1iwd4"),u(e,"class","whichAuth svelte-b1iwd4")},m(r,f){A(r,e,f),o(e,t),o(e,a),o(e,s),_||(m=[T(s,"click",n[7]),T(s,"keydown",we)],_=!0)},p:D,d(r){r&&p(e),_=!1,J(m)}}}function me(n){let e,t,l="Already have an account?",a,s,c="LOGIN",_,m;return{c(){e=d("div"),t=d("p"),t.textContent=l,a=L(),s=d("button"),s.textContent=c,this.h()},l(r){e=h(r,"DIV",{class:!0});var f=C(e);t=h(f,"P",{["data-svelte-h"]:!0}),S(t)!=="svelte-1l9vmhp"&&(t.textContent=l),a=P(f),s=h(f,"BUTTON",{class:!0,["data-svelte-h"]:!0}),S(s)!=="svelte-u9emlu"&&(s.textContent=c),f.forEach(p),this.h()},h(){u(s,"class","logReg svelte-b1iwd4"),u(e,"class","whichAuth svelte-b1iwd4")},m(r,f){A(r,e,f),o(e,t),o(e,a),o(e,s),_||(m=[T(s,"click",n[7]),T(s,"keydown",be)],_=!0)},p:D,d(r){r&&p(e),_=!1,J(m)}}}function ve(n){let e,t,l,a=n[4]?"Register":"Login",s,c,_,m,r,f,R,g,U,B,E,G,H,M,N,j,K,w=n[3]&&te(),v=n[4]&&le(n);function Q(i,b){return i[5]?_e:he}let V=Q(n),I=V(n);function $(i,b){return i[4]?me:pe}let q=$(n),y=q(n);return{c(){e=d("div"),t=d("form"),l=d("h1"),s=z(a),c=L(),w&&w.c(),_=L(),m=d("label"),r=d("input"),f=L(),R=d("label"),g=d("input"),U=L(),v&&v.c(),B=L(),E=d("button"),I.c(),G=L(),H=d("br"),M=L(),N=d("div"),y.c(),this.h()},l(i){e=h(i,"DIV",{class:!0});var b=C(e);t=h(b,"FORM",{class:!0});var k=C(t);l=h(k,"H1",{class:!0});var W=C(l);s=F(W,a),W.forEach(p),c=P(k),w&&w.l(k),_=P(k),m=h(k,"LABEL",{class:!0});var X=C(m);r=h(X,"INPUT",{type:!0,placeholder:!0,class:!0}),X.forEach(p),f=P(k),R=h(k,"LABEL",{class:!0});var Y=C(R);g=h(Y,"INPUT",{type:!0,placeholder:!0,class:!0}),Y.forEach(p),U=P(k),v&&v.l(k),B=P(k),E=h(k,"BUTTON",{type:!0,class:!0});var Z=C(E);I.l(Z),Z.forEach(p),k.forEach(p),G=P(b),H=h(b,"BR",{}),M=P(b),N=h(b,"DIV",{});var x=C(N);y.l(x),x.forEach(p),b.forEach(p),this.h()},h(){u(l,"class","svelte-b1iwd4"),u(r,"type","email"),u(r,"placeholder","Email"),u(r,"class","svelte-b1iwd4"),u(m,"class","svelte-b1iwd4"),u(g,"type","password"),u(g,"placeholder","Password"),u(g,"class","svelte-b1iwd4"),u(R,"class","svelte-b1iwd4"),u(E,"type","button"),u(E,"class","svelte-b1iwd4"),u(t,"class","svelte-b1iwd4"),u(e,"class","auth-container svelte-b1iwd4")},m(i,b){A(i,e,b),o(e,t),o(t,l),o(l,s),o(t,c),w&&w.m(t,null),o(t,_),o(t,m),o(m,r),O(r,n[0]),o(t,f),o(t,R),o(R,g),O(g,n[1]),o(t,U),v&&v.m(t,null),o(t,B),o(t,E),I.m(E,null),o(e,G),o(e,H),o(e,M),o(e,N),y.m(N,null),j||(K=[T(r,"input",n[8]),T(g,"input",n[9]),T(E,"click",n[6])],j=!0)},p(i,[b]){b&16&&a!==(a=i[4]?"Register":"Login")&&re(s,a),i[3]?w||(w=te(),w.c(),w.m(t,_)):w&&(w.d(1),w=null),b&1&&r.value!==i[0]&&O(r,i[0]),b&2&&g.value!==i[1]&&O(g,i[1]),i[4]?v?v.p(i,b):(v=le(i),v.c(),v.m(t,B)):v&&(v.d(1),v=null),V!==(V=Q(i))&&(I.d(1),I=V(i),I&&(I.c(),I.m(E,null))),q===(q=$(i))&&y?y.p(i,b):(y.d(1),y=q(i),y&&(y.c(),y.m(N,null)))},i:D,o:D,d(i){i&&p(e),w&&w.d(),v&&v.d(),I.d(),y.d(),j=!1,J(K)}}}const be=()=>{},we=()=>{};function ge(n,e,t){let l="",a="",s="",c=!1,_=!1,m=!1;async function r(){if(!m){if(!l||!a||_&&!s){t(3,c=!0);return}t(5,m=!0);try{_?await ee.signup(l,a):await ee.login(l,a)}catch(B){console.log("auth error occured",B),t(3,c=!0)}}}function f(){t(4,_=!_)}function R(){l=this.value,t(0,l)}function g(){a=this.value,t(1,a)}function U(){s=this.value,t(2,s)}return[l,a,s,c,_,m,r,f,R,g,U]}class ke extends se{constructor(e){super(),ne(this,e,ge,ve,ae,{})}}function ye(n){let e,t;return e=new ke({}),{c(){ie(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,a){ue(e,l,a),t=!0},p:D,i(l){t||(ce(e.$$.fragment,l),t=!0)},o(l){fe(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}class Ie extends se{constructor(e){super(),ne(this,e,null,ye,ae,{})}}export{Ie as component};
