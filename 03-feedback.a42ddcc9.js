!function(){function e(e){return e&&e.__esModule?e.default:e}var t,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof o&&o&&o.Object===Object&&o,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,g=Math.max,v=Math.min,b=function(){return m.Date.now()};function h(e,t,o){var n,i,l,a,f,u,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function h(t){var o=n,r=i;return n=i=void 0,s=t,a=e.apply(r,o)}function S(e){return s=e,f=setTimeout(j,t),c?h(e):a}function F(e){var o=e-u;return void 0===u||o>=t||o<0||m&&e-s>=l}function j(){var e=b();if(F(e))return H(e);f=setTimeout(j,function(e){var o=t-(e-u);return m?v(o,l-(e-s)):o}(e))}function H(e){return f=void 0,d&&n?h(e):(n=i=void 0,a)}function O(){var e=b(),o=F(e);if(n=arguments,i=this,u=e,o){if(void 0===f)return S(u);if(m)return f=setTimeout(j,t),h(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=y(t)||0,p(o)&&(c=!!o.leading,l=(m="maxWait"in o)?g(y(o.maxWait)||0,t):l,d="trailing"in o?!!o.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),s=0,n=u=i=f=void 0},O.flush=function(){return void 0===f?a:H(b())},O}function p(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(p(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=p(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?u(t.slice(2),r?2:8):l.test(t)?NaN:+t}t=function(e,t,o){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return p(o)&&(n="leading"in o?!!o.leading:n,i="trailing"in o?!!o.trailing:i),h(e,t,{leading:n,maxWait:t,trailing:i})},{formBind:document.querySelector(".feedback-form"),localStorageFormHolder:{email:"",message:""},init:function(){try{var o=localStorage.getItem("feedback-form-state");null!==o&&(this.localStorageFormHolder=JSON.parse(o),this.formBind.elements.email.value=this.localStorageFormHolder.email,this.formBind.elements.message.value=this.localStorageFormHolder.message)}catch(e){console.log(e.name),console.log(e.message)}this.formBind.addEventListener("submit",function(e){this.formSubmit(e)}.bind(this)),this.formBind.addEventListener("input",e(t)(this.formInput,500).bind(this))},formInput:function(){this.localStorageFormHolder.email=this.formBind.elements.email.value,this.localStorageFormHolder.message=this.formBind.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(this.localStorageFormHolder))},formSubmit:function(e){if(e.preventDefault(),""===this.localStorageFormHolder.email)return console.log("Please fill email field!");for(key in localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),console.log(this.localStorageFormHolder),this.localStorageFormHolder)this.localStorageFormHolder[key]=""}}.init()}();
//# sourceMappingURL=03-feedback.a42ddcc9.js.map
