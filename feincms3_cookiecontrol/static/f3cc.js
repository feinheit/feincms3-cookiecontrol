(()=>{(function(){var e=document.createElement("style");e.textContent=".f3cc{font-size:16px;line-height:1.3;--_b:var(--f3cc-background,#e9e9e9);--_f:var(--f3cc-foreground,#000000);--_B:var(--f3cc-button-background,#cbcbcb);--_A:var(--f3cc-accept-background,#90f690);--_F:var(--f3cc-button-foreground,var(--_f));--_E:var(--f3cc-accept-foreground,var(--_F))}.f3cc .f3cc-banner{position:fixed;bottom:0;width:100%;background:var(--_b);color:var(--_f);z-index:2000;padding:1rem 1rem 1.25rem}.f3cc .f3cc-embed{background:var(--_b);color:var(--_f);padding:4rem}.f3cc .f3cc-container{display:flex;gap:2rem;max-width:70em;margin:0 auto;width:80%}@media (max-width:60rem){.f3cc .f3cc-container{width:100%;flex-direction:column}}.f3cc .f3cc-title{font-size:1.5em;font-weight:700;margin-bottom:.25em}.f3cc .f3cc-description a{color:inherit;text-decoration:underline}.f3cc .f3cc-description a:hover{opacity:.7}.f3cc .f3cc-buttons{display:flex;flex-direction:column;gap:1rem;justify-content:center;align-items:stretch}.f3cc .f3cc-button{display:inline-block;background:var(--_B);color:var(--_F);padding:.8rem 1.2rem;white-space:nowrap;text-decoration:none;text-align:center;cursor:pointer;border:none}.f3cc .f3cc-button:hover{opacity:.7}.f3cc .f3cc-button.accept{background:var(--_A);color:var(--_E)}.f3cc .f3cc-button.modify{position:fixed;z-index:2000;bottom:1rem;right:1rem}.f3cc-embed .f3cc-description{margin-bottom:1em}",document.head.appendChild(e)})();var b=(e,t=document)=>t.querySelector(e),k=document.body,r="className",f="textContent",j="innerHTML",x="f3cc",i=window.f3ccData||JSON.parse(b("#f3cc-data")[f]),w={},u="f3cc-embed-providers",p,d,s,o=(e,t=null,c=[])=>{let n=document.createElement(e);if(t)for(let[a,l]of Object.entries(t))a.startsWith("data-")?n.setAttribute(a,l):n[a]=l;return n.append(...c),n},m=()=>{if(d){A(d);return}let e=[o("div",{[r]:"f3cc-title",[f]:i.heading}),o("div",{[r]:"f3cc-description",[j]:i.description})],t=[o("a",{[r]:"f3cc-button accept",[f]:i.buttonAccept,onclick:_(!0)}),o("a",{[r]:"f3cc-button reject",[f]:i.buttonReject,onclick:_(!1)})];d=o("div",{[r]:"f3cc f3cc-banner"},[o("div",{[r]:"f3cc-container"},[o("div",{[r]:"f3cc-content"},e),o("div",{[r]:"f3cc-buttons"},t)])]),h().append(d)},S=()=>{if(s){A(s);return}let e;if(e=b(".f3cc-modify")){e.addEventListener("click",n=>{n.preventDefault(),m()});return}let t=i.ppu,c=window.location;i.buttonModify&&(!t||t==`${c.protocol}//${c.host}${c.pathname}`)&&(s=o("a",{[r]:"f3cc-button modify",[f]:i.buttonModify,onclick:n=>{n.preventDefault(),N(s),m()}}),h().append(s))},D=e=>{let t=`${x}=${e};max-age=31536000;path=/;sameSite=Strict`;i.domain&&(t+=`;domain=${i.domain}`),document.cookie=t},C=()=>{let e=`${x}=`;for(let t of document.cookie.split("; "))if(t.startsWith(e))return decodeURIComponent(t.substring(e.length))},g="all",E="essential",I=()=>{let e=C();return g==e||E==e},v=()=>C()===g,A=e=>{e.style.display=""},N=e=>{e&&(e.style.display="none")},_=e=>t=>{t.preventDefault(),D(e?g:E),N(d),S(),y(),L(),R()},L=()=>{if(v())for(let e of i.cookies){let t=w[e.name];t||(w[e.name]=t=o("div"),t.dataset.name=e.name,h().append(t)),t.innerHTML=e.script,$(t)}},R=()=>{let e=window.dataLayer=window.dataLayer||[],t=v()?"granted":"denied";e.push(["consent","update",{ad_user_data:t,ad_personalization:t,ad_storage:t,analytics_storage:t}])},h=()=>(p||(p=o("div",{[r]:"f3cc"}),k.append(p)),p),M={},z=(e,t)=>{try{window.localStorage.setItem(e,JSON.stringify(t))}catch{M[e]=t}},T=e=>{try{return JSON.parse(window.localStorage.getItem(e))}catch{return M[e]}},y=window.f3ccRenderEmbeds=()=>{let e=T(u)||[];document.querySelectorAll(".f3cc-embed").forEach(c=>{let n=b("template",c),a=c.dataset.provider;if(n&&a&&(v()||e.includes(a))){let l=n.content.cloneNode(!0);c.closest(".f3cc").replaceWith(l)}})},F=()=>{k.addEventListener("click",e=>{let t=e.target.closest(".f3cc-button"),c=t&&t.closest(".f3cc-embed");if(t&&c){e.preventDefault();let n=T(u)||[];n.push(c.dataset.provider),z(u,n),y()}})},$=e=>{if(O(e)===!0)e.parentNode.replaceChild(H(e),e);else{let t=-1,c=e.childNodes;for(;++t<c.length;)$(c[t])}return e},H=e=>{let t=o("script");t.text=e.innerHTML;let c=-1,n=e.attributes,a;for(;++c<n.length;)t.setAttribute((a=n[c]).name,a.value);return t},O=e=>e.tagName==="SCRIPT";L();y();F();I()?S():m();})();
