!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]'),c=document.querySelector(".form"),l=document.querySelector('button[type="submit"]');function d(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}c.addEventListener("submit",(function(e){e.preventDefault(),l.disabled=!0;var n=Number(i.value),t=Number(u.value),o=Number(a.value),f=n+t*o;if(n<=0||t<=0||o<=0)return void r.Notify.warning("???");for(var s=1;s<=o;s+=1)d(s,n).then((function(e){var n=e.position,t=e.delay;return r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;return r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=t;c.reset(),m=f,setTimeout((function(){l.disabled=!1}),m);var m})),console.log("12r12")}();
//# sourceMappingURL=03-promises.8ee80d80.js.map
