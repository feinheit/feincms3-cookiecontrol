(()=>{(function(){var l=document.createElement("style");l.textContent=":root{--f3cc-background-color:#e9e9e9;--f3cc-foreground-color:#000000;--f3cc-button-background:#cbcbcb;--f3cc-accept-background:#90f690;}#f3cc{font-size:16px;line-height:1.3;}#f3cc .f3cc-banner{position:fixed;bottom:0;width:100%;background:var(--f3cc-background-color);z-index:2000;padding:1rem 1rem 1.25rem;}#f3cc .f3cc-container{display:flex;gap:2rem;max-width:70em;margin:0 auto;width:80%;}@media screen and (max-width:60rem){#f3cc .f3cc-container{width:100%;flex-direction:column;}}#f3cc .f3cc-title{font-size:1.5em;font-weight:bold;margin-bottom:0.25em;}#f3cc .f3cc-description a{color:inherit;text-decoration:underline;}#f3cc .f3cc-description a:hover{opacity:0.7;}#f3cc .f3cc-buttons{display:flex;flex-direction:column;gap:1rem;justify-content:center;align-items:stretch;}#f3cc .f3cc-button{display:inline-block;background:var(--f3cc-button-background);color:var(--f3cc-foreground-color);padding:0.8rem 1.2rem;white-space:nowrap;text-decoration:none;text-align:center;cursor:pointer;}#f3cc .f3cc-button:hover{opacity:0.7;}#f3cc .f3cc-button.accept{background:var(--f3cc-accept-background);}#f3cc .f3cc-button.modify{position:fixed;z-index:2000;bottom:1rem;right:1rem;}",document.head.appendChild(l)})();(function(){let l="f3cc",f,n=JSON.parse(document.getElementById("f3cc-data").textContent),a,d,m={};function c(e,t=null){let i=document.createElement(e);if(t)for(let[o,r]of Object.entries(t))o.startsWith("data-")?i.setAttribute(o,r):o==="children"?i.append(...r):i[o]=r;return i}function p(){if(a!=null){a.style.display="";return}let e=[c("div",{className:"f3cc-title",textContent:n.heading}),c("div",{className:"f3cc-description",textContent:n.description})];n.privacyPolicyURL&&e[1].append(c("br"),c("a",{textContent:n.privacyPolicyTitle,href:n.privacyPolicyURL}));let t=[c("a",{className:"f3cc-button accept",textContent:n.buttonAccept,onclick:k}),c("a",{className:"f3cc-button reject",textContent:n.buttonReject,onclick:C})];a=c("div",{className:"f3cc f3cc-banner",children:[c("div",{className:"f3cc-container",children:[c("div",{className:"f3cc-content",children:e}),c("div",{className:"f3cc-buttons",children:t})]})]}),f.append(a)}function s(){if(d!=null){d.style.display="";return}n.buttonModify&&(d=c("div",{className:"f3cc-modify",children:[c("div",{className:"outer",children:[c("div",{className:"f3cc-buttons",children:[c("a",{className:"f3cc-button modify",textContent:n.buttonModify,onclick:e=>{e.preventDefault(),u(d),p()}})]})]})]}),f.append(d))}function b(e){let t=`${l}=${e};max-age=31536000;path=/;sameSite=Strict`;n.domain&&(t+=`;domain=${n.domain}`),document.cookie=t}function v(){let e=new RegExp(`\\b${l}=(.+?)\\b`),t=document.cookie.match(e);if(t&&t.length)return t[1]}function x(){return["all","essential"].includes(h())}function h(){return v()==="all"}function u(e){e!=null&&(e.style.display="none")}function k(e){e.preventDefault(),b("all"),u(a),s(),g()}function C(e){e.preventDefault(),b("essential"),u(a),s()}function g(){for(let e of n.cookies){let t=m[e.name];t||(m[e.name]=t=document.createElement("div"),t.dataset.f3cc=e.name,f.append(t)),t.innerHTML=e.script,y(t)}}function N(){f=c("div",{id:"f3cc"}),document.body.append(f),h()&&g(),x()?s():p()}N();function y(e){if(S(e)===!0)e.parentNode.replaceChild(w(e),e);else{let t=-1,i=e.childNodes;for(;++t<i.length;)y(i[t])}return e}function w(e){let t=document.createElement("script");t.text=e.innerHTML;let i=-1,o=e.attributes,r;for(;++i<o.length;)t.setAttribute((r=o[i]).name,r.value);return t}function S(e){return e.tagName==="SCRIPT"}})();})();
