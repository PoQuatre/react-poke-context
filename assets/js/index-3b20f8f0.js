import{j as e,F as u,a as l,C as p,R as h,b as f,c as o,d as c,B as g,e as y,f as i,r as b,g as x,h as w}from"./vendor-18b7ca04.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function m(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=m(t);fetch(t.href,r)}};L();const N=()=>e("h1",{children:"Home"}),C=()=>e(u,{children:l(p,{children:[e("h1",{className:"text-center my-5",children:"Login"}),e(h,{children:e(f,{lg:8,xl:6,className:"mx-auto",children:l(o,{className:"text-black",children:[e(c,{label:"Email Address",controlId:"email",children:e(o.Control,{type:"email",placeholder:"example@example.org"})}),e(c,{label:"Password",className:"mt-4",controlId:"password",children:e(o.Control,{type:"password",placeholder:"password"})}),e(o.Group,{className:"mt-4 text-white",controlId:"stay-connected",children:e(o.Check,{type:"checkbox",label:"Stay connected"})}),e(g,{variant:"primary",size:"lg",type:"submit",className:"mt-5 w-100",children:"Login"})]})})})]})}),F=()=>l(y,{children:[e(i,{path:"/",element:e(N,{})}),e(i,{path:"/login",element:e(C,{})})]});const d=document.getElementById("root");d?b.exports.render(e(x.exports.StrictMode,{children:e(w,{basename:"/react-poke-context/",children:e(F,{})})}),d):console.error("There is no #root element in the dom");
//# sourceMappingURL=index-3b20f8f0.js.map
