import{s as h,c as p,u as g,g as v,d as w,o as y}from"../chunks/scheduler.e108d1fd.js";import{S,i as $,g as b,h as j,j as D,f as d,k as R,a as T,d as q,t as A}from"../chunks/index.726d90aa.js";import{a as C,g as f,d as _,b as M,m as O}from"../chunks/firebase.b3629aa1.js";import{a as P}from"../chunks/store.d46a1a36.js";const k=!0,F=Object.freeze(Object.defineProperty({__proto__:null,prerender:k},Symbol.toStringTag,{value:"Module"}));function z(n){let o,s;const i=n[1].default,a=p(i,n,n[0],null);return{c(){o=b("div"),a&&a.c(),this.h()},l(e){o=j(e,"DIV",{class:!0});var t=D(o);a&&a.l(t),t.forEach(d),this.h()},h(){R(o,"class","main-container svelte-1wcfmqj")},m(e,t){T(e,o,t),a&&a.m(o,null),s=!0},p(e,[t]){a&&a.p&&(!s||t&1)&&g(a,i,e,e[0],s?w(i,e[0],t,null):v(e[0]),null)},i(e){s||(q(a,e),s=!0)},o(e){A(a,e),s=!1},d(e){e&&d(o),a&&a.d(e)}}}function E(n,o,s){let{$$slots:i={},$$scope:a}=o;const e=["/","product"];return y(()=>{console.log("mounting"),C.onAuthStateChanged(async t=>{const u=window.location.pathname;if(!t&&!e.includes(u)){window.location.href="/";return}if(t&&u==="/"){window.location.href="/dashboard";return}if(!t)return;let l;const m=f(_,"users",t.uid),c=await M(m);if(c.exists())l=c.data();else{const r=f(_,"user",t.uid);l={email:t.email,uid:t.uid},await O(r,l,{merge:!0})}P.update(r=>({...r,user:t,data:l,loading:!1}))})}),n.$$set=t=>{"$$scope"in t&&s(0,a=t.$$scope)},[a,i]}class G extends S{constructor(o){super(),$(this,o,E,z,h,{})}}export{G as component,F as universal};