import{j as l,R as d,a as i,r as a,b as f,B as m}from"./vendor-3f7feea0.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}};p();const r=l.exports.jsx,h=l.exports.jsxs,g=()=>r("h1",{children:"Home"}),y=()=>r("h1",{children:"Login"}),x=()=>h(d,{children:[r(i,{path:"/",element:r(g,{})}),r(i,{path:"/login",element:r(y,{})})]}),c=document.getElementById("root");c?a.exports.render(r(f.exports.StrictMode,{children:r(m,{basename:"/react-template/",children:r(x,{})})}),c):console.error("There is no #root element in the dom");
//# sourceMappingURL=index-8ea15630.js.map