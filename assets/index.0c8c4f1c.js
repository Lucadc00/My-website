import{o as i,c as l,a,b as u}from"./vendor.8712b10b.js";const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};f();var d=(o,r)=>{const n=o.__vccOpts||o;for(const[s,e]of r)n[s]=e;return n};const p={},_=a("h1",null,"hello world ",-1),m=[_];function h(o,r){return i(),l("header",null,m)}var y=d(p,[["render",h]]);u(y).mount("#app");
