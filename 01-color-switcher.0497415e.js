!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),d=document.body,o=null;n.disabled=!0,e.addEventListener("click",(function(){n.disabled=!1,e.disabled=!0,d.style.backgroundColor=t(),o=setInterval((function(){d.style.backgroundColor=t()}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.0497415e.js.map