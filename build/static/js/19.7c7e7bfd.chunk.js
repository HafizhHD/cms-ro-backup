/*! For license information please see 19.7c7e7bfd.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[19],{101:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));n(5);var r=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),c=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"});c.Consumer,c.Provider;function i(e,t){var n=Object(r.useContext)(c).prefixes;return e||n[t]||t}function o(){return"rtl"===Object(r.useContext)(c).dir}},107:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},108:function(e,t,n){"use strict";var r=n(2),a=(n(109),n(0));function c(e){var t=e.placeholder,n=e.type,r=e.onChange,c=e.onBlur,i=e.value,o=e.className,s=e.message,u=e.name,l=e.min,f=e.max,b=e.disabled,d=e.isError;return"textarea"===n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("textarea",{name:u,id:u,className:o,placeholder:t,onChange:r,onBlur:c,value:i,disabled:b}),d&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:s})})]}):"date"===n||"datetime-local"===n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:u,className:o,type:n,placeholder:t,onChange:r,onBlur:c,value:i,min:l,max:"9999-12-31",disabled:b}),d&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:s})})]}):"number"===n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:u,className:o,type:n,onChange:r,onBlur:c,value:i,min:l,max:f,disabled:b}),d&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:s})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:u,className:o,type:n,placeholder:t,onChange:r,onBlur:c,value:i,disabled:b}),d&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:s})})]})}t.a=Object(r.memo)(c)},109:function(e,t,n){},112:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},113:function(e,t,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return r}))},115:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return c}));var a=n(98);function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}},1286:function(e,t,n){},145:function(e,t,n){"use strict";var r=n(5),a=n(7),c=n(34),i=n(101),o=n.n(i),s=n(2),u=n(0),l=["as","disabled"];function f(e){var t=e.tagName,n=e.disabled,r=e.href,a=e.target,c=e.rel,i=e.role,o=e.onClick,s=e.tabIndex,u=void 0===s?0:s,l=e.type;t||(t=null!=r||null!=a||null!=c?"a":"button");var f={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},f];var b=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==o||o(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:n?void 0:u,href:r,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?c:void 0,onClick:b,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),b(e))}},f]}var b=s.forwardRef((function(e,t){var n=e.as,r=e.disabled,c=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l),i=f(Object.assign({tagName:n,disabled:r},c)),o=Object(a.a)(i,2),s=o[0],b=o[1].tagName;return Object(u.jsx)(b,Object.assign({},c,s,{ref:t}))}));b.displayName="Button";var d=n(103),p=s.forwardRef((function(e,t){var n=e.as,i=e.bsPrefix,s=e.variant,l=e.size,b=e.active,p=e.className,j=Object(c.a)(e,["as","bsPrefix","variant","size","active","className"]),m=Object(d.a)(i,"btn"),h=f(Object(r.a)({tagName:n},j)),v=Object(a.a)(h,2),O=v[0],g=v[1].tagName;return Object(u.jsx)(g,Object(r.a)(Object(r.a)(Object(r.a)({},O),j),{},{ref:t,className:o()(p,m,b&&"active",s&&"".concat(m,"-").concat(s),l&&"".concat(m,"-").concat(l),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=p},1478:function(e,t,n){"use strict";n.r(t);var r=n(91),a=n(92),c=n(95),i=n(96),o=n(18),s=n.n(o),u=n(2),l=n.n(u),f=n(145),b=(n(108),n(1286),n.p+"static/media/contoh.e2819d42.png"),d=n(0),p=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onChange=function(e){e.target.files},a.submit=function(e){var t=e.target.files;s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/uploadUserBatchPayment",data:t}).then((function(e){console.log(e.data),alert("upload berhasil")})).catch((function(e){}))},a.state={uP:!1},a}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:" Upload Bukti Pembayaran"}),Object(d.jsx)("div",{className:"div",children:Object(d.jsxs)("div",{className:"AddContent",children:[Object(d.jsxs)("p",{children:[" Petunjuk File yang di Upload :",Object(d.jsx)("br",{}),"1.  File Yang diupload adalah file excel/CSV",Object(d.jsx)("br",{}),"2. File excel/ CSV berisikan : email anak, Package  Id, Price, Date Start, Date End, Batch Number",Object(d.jsx)("br",{}),"3. Seperti contoh dibawah ini :"]}),Object(d.jsx)("img",{src:b,alt:"contoh"}),Object(d.jsx)("h2",{children:"Upload File Anda Disini :"}),Object(d.jsx)("input",{type:"file",name:"file",onChange:function(t){return e.onChange(t)}}),Object(d.jsx)(f.a,{className:"btn-submit",onClick:this.submit,children:" Submit "})]})})]})}}]),n}(l.a.Component);t.default=p},91:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},92:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(112);function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(107),a=n(113),c=n(115);function i(e){var t=Object(a.a)();return function(){var n,a=Object(r.a)(e);if(t){var i=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}},98:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=19.7c7e7bfd.chunk.js.map