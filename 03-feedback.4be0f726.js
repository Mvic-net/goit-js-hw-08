!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var o,i,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function j(e){return l=e,a=setTimeout(E,t),d?y(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function E(){var e=p();if(h(e))return O(e);a=setTimeout(E,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function O(e){return a=void 0,v&&o?y(e):(o=i=void 0,f)}function w(){var e=p(),n=h(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return j(c);if(s)return a=setTimeout(E,t),y(c)}return void 0===a&&(a=setTimeout(E,t)),f}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},w.flush=function(){return void 0===a?f:O(p())},w}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j={getForm:document.querySelector(".feedback-form"),getEmail:document.querySelector("input"),getMess:document.querySelector("textarea"),getBth:document.querySelector("button")};j.getForm.addEventListener("input",e(t)((function(e){localStorage.setItem("KEY",JSON.stringify({email:j.getEmail.value,mess:j.getMess.value}))}),500)),j.getForm.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("KEY"));console.log(t),localStorage.removeItem("KEY"),j.getForm.reset()}))}();
//# sourceMappingURL=03-feedback.4be0f726.js.map
