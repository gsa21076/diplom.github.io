(()=>{"use strict";sessionStorage.myOrder=JSON.stringify({useCalc:!1,numberBox:1,diam1:1.4,number1:1,diam2:1.4,number2:1,bottom:!1,distanse:0,sum:1e4,question:""}),(()=>{const e=document.querySelector(".popup-call"),t=document.querySelector(".popup-consultation"),o=document.querySelector(".popup-check"),n=document.querySelector(".popup-discount"),l=document.querySelectorAll(".popup"),s=document.querySelectorAll(".btn");document.querySelectorAll(".popup-close"),document.querySelectorAll("input[name=user_name]"),document.querySelector("input[name=user_quest]"),document.querySelectorAll(".phone-user"),s.forEach((l=>{l.addEventListener("click",(l=>{l.preventDefault();let s=l.target;s.classList.contains("call-btn")&&(e.style.display="block"),s.classList.contains("discount-btn")&&(n.style.display="block"),s.classList.contains("check-btn")&&(o.style.display="block"),s.classList.contains("director-btn")&&(t.style.display="block")}))})),l.forEach((e=>{e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))}))})(),(()=>{const e=document.getElementById("accordion-two"),t=e.querySelectorAll(".panel-heading"),o=e.querySelectorAll(".panel-collapse");e.addEventListener("click",(e=>{e.preventDefault();let n=e.target;n=n.closest(".panel-heading"),n.classList.contains("panel-heading")&&t.forEach(((e,t)=>{e===n&&(e=>{for(let t=0;t<o.length;t++)e===t?o[t].classList.add("in"):o[t].classList.remove("in")})(t)}))}))})(),(()=>{let e=JSON.parse(sessionStorage.myOrder);const t=document.getElementById("accordion"),o=t.querySelectorAll(".panel-default"),n=t.querySelectorAll(".panel-collapse"),l=document.getElementById("myonoffswitch"),s=document.getElementById("myonoffswitch-two"),c=document.getElementById("calc-result"),r=t.querySelector(".box-two"),a=t.querySelector(".distanse"),u=t.querySelector(".first-diam"),i=t.querySelector(".first-number"),d=t.querySelector(".second-diam"),m=t.querySelector(".second-number"),p=document.querySelector(".popup-discount");let y=0,b=0,v=0,S=0;const f=1e4,h=5e3;r.style.display="none";const q=e=>{for(let t=0;t<n.length;t++)e===t?n[t].classList.add("in"):n[t].classList.remove("in")};t.addEventListener("click",(t=>{t.preventDefault();let n=t.target;n.closest(".panel-one")&&n.closest(".onoffswitch")&&(l.checked?(l.checked=!1,e.numberBox=2,r.style.display="block"):(l.checked=!0,e.numberBox=1,r.style.display="none")),n.closest(".panel-two")&&n.closest(".form-control")&&("1.4 метра"===u.value&&(y=0),"2 метра"===u.value&&(e.diam1=2,y=.2),"1 штука"===i.value&&(b=0),"2 штуки"===i.value&&(e.number1=2,b=.3),"3 штуки"===i.value&&(e.number1=3,b=.5),"1.4 метра"===d.value&&(v=0),"2 метра"===d.value&&(e.diam2=2,v=.2),"1 штука"===m.value&&(S=0),"2 штуки"===m.value&&(e.number2=2,S=.2),"3 штуки"===m.value&&(e.number2=3,S=.4)),n.closest(".panel-three")&&n.closest(".onoffswitch-two")&&(s.checked?(s.checked=!1,e.bottom=!1):(s.checked=!0,e.bottom=!0)),n.closest(".panel-four")&&n.closest(".distanse")&&a.addEventListener("input",(()=>{e.distanse=a.value})),n.closest(".construct-btn")?(n.closest(".call-btn")&&(p.style.display="block"),o.forEach(((e,t)=>{e===n.closest(".panel-default")&&(t++,q(t))}))):(n=n.closest(".panel-default"),n.classList.contains("panel-default")&&o.forEach(((e,t)=>{e===n&&q(t)}))),(()=>{let t=0;1===e.numberBox&&(t=f+f*y+f*b),2===e.numberBox&&(t=f+f*y+f*b+h+h*v+h*S),e.bottom&&(1===e.numberBox?(t+=.1*t,e.bottom=!0):(t+=.2*t,e.bottom=!0)),e.sum=t,e.useCalc=!0,sessionStorage.myOrder=JSON.stringify(e);let o=+c.textContent,n=setInterval((function(){o<t&&(o+=50,c.textContent=o,o>=t&&(c.textContent=t,clearInterval(n))),o>t&&(o-=50,c.textContent=o,o<=t&&(c.textContent=t,clearInterval(n)))}),1)})()}))})(),(()=>{let e=JSON.parse(sessionStorage.myOrder);e.useCalc?(e=JSON.parse(sessionStorage.myOrder),sessionStorage.clear()):e={useCalc:!1,numberBox:1,diam1:1.4,number1:1,diam2:1.4,number2:1,bottom:!1,distanse:0,sum:1e4,question:""};const t=document.querySelectorAll("form"),o=document.querySelectorAll("input[name=user_name]"),n=document.querySelectorAll(".phone-user"),l=document.querySelector("input[name=user_quest]"),s=document.createElement("div");s.style.cssText="font-size: 1,5rem;\n    color: black;",n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\+\-\d(10)-]/g,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-яЁё\ \,\.]/g,"")}))})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-яЁё\ \, \.]*$/gi,"")})),t.forEach((t=>{t.addEventListener("submit",(c=>{c.preventDefault(),e.question=l.value;const r=new FormData(t);let a={};var u;r.forEach(((e,t)=>{a[t]=e})),(u=Object.assign(a,e),o.forEach((e=>e.value="")),n.forEach((e=>e.value="")),l.value="",fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).then((e=>{if(200!==e.status)throw new Error("status network not 200");s.textContent="Спасибо! Мы скоро с Вами свяжемся."})).catch((e=>{s.textContent="Что-то пошло не так...",console.error(e)})),l.required=!1}))}))})(),(()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelector(".sentence"),o=(t.querySelectorAll(".shadow-block"),t.querySelectorAll(".hidden")),n=t.querySelector(".visible-sm-block");e.addEventListener("click",(()=>{o.forEach((t=>{n.classList.remove("visible-sm-block"),t.classList.remove("hidden"),e.style.display="none"}))}))})()})();