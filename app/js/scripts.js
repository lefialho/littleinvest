!function(t){"function"==typeof define&&define.amd?define("main",t):t()}((function(){"use strict";!function(){const t=document.querySelector('[data-bind="navigation"]'),e=document.querySelector('[data-bind="btnMenu"]');e.addEventListener("click",()=>{t.classList.toggle("active"),e.classList.toggle("active")}),e.addEventListener("click",(function(){!function(t,e,n){const i=document.documentElement;function c(a){t.contains(a.target)||(t.removeAttribute("data-outside"),i.removeEventListener(e,c),n())}t.hasAttribute("data-outside")||(setTimeout(()=>i.addEventListener(e,c)),t.setAttribute("data-outside",""))}(t,"click",()=>{t.classList.remove("active"),e.classList.remove("active")})}))}()}));