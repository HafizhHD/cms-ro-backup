/*! For license information please see 28.61dd18f1.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[28],{100:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},101:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},102:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return r}))},103:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var a=n(100);function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a.a)(t):e}},1214:function(t,e,n){},122:function(t,e,n){"use strict";var r=n(5),a=n(10),o=n(34),i=n(91),c=n.n(i),u=n(2),s=n(0),f=["as","disabled"];function l(t){var e=t.tagName,n=t.disabled,r=t.href,a=t.target,o=t.rel,i=t.onClick,c=t.tabIndex,u=void 0===c?0:c,s=t.type;e||(e=null!=r||null!=a||null!=o?"a":"button");var f={tagName:e};if("button"===e)return[{type:s||"button",disabled:n},f];var l=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==i||i(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:u,href:r,target:"a"===e?a:void 0,"aria-disabled":n||void 0,rel:"a"===e?o:void 0,onClick:l,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),l(t))}},f]}var b=u.forwardRef((function(t,e){var n=t.as,r=t.disabled,o=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,f),i=l(Object.assign({tagName:n,disabled:r},o)),c=Object(a.a)(i,2),u=c[0],b=c[1].tagName;return Object(s.jsx)(b,Object.assign({},o,u,{ref:e}))}));b.displayName="Button";var d=n(92),p=u.forwardRef((function(t,e){var n=t.as,i=t.bsPrefix,u=t.variant,f=t.size,b=t.active,p=t.className,j=Object(o.a)(t,["as","bsPrefix","variant","size","active","className"]),v=Object(d.a)(i,"btn"),O=l(Object(r.a)({tagName:n},j)),y=Object(a.a)(O,2),h=y[0],m=y[1].tagName;return Object(s.jsx)(m,Object(r.a)(Object(r.a)(Object(r.a)({},h),j),{},{ref:e,className:c()(p,v,b&&"active",u&&"".concat(v,"-").concat(u),f&&"".concat(v,"-").concat(f),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=p},1380:function(t,e,n){"use strict";n.r(e);var r=n(93),a=n(94),o=n(97),i=n(98),c=(n(1214),n(18)),u=n.n(c),s=n(6),f=n(2),l=n.n(f),b=n(122),d=n(0),p=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).addMessage=function(){var t={category:a.refs.category.value,dateCreated:a.refs.tempat.value,description:a.refs.description.value};u()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/notificationCategoryAdd",data:t}).then((function(t){console.log(t.data),a.setState({send:!0})})).catch((function(t){console.log(t+"ini eror add KATEGORI notif")}))},a.state={userData:[],send:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return 1==this.state.send?Object(d.jsx)(s.a,{to:"/tools/setting-list-kateNotif"}):Object(d.jsxs)("div",{className:"div",children:[Object(d.jsx)("h1",{children:"ADD Kategory Notification"}),Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("label",{children:"Category Notification"})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("select",{ref:"category",children:[Object(d.jsx)("option",{value:"Pembayaran",children:"Pembayaran"}),Object(d.jsx)("option",{value:"Pemberitahuan",children:"Pemberitahuan"}),Object(d.jsx)("option",{value:"Promosi",children:"Promosi"}),Object(d.jsx)("option",{value:"Informasi & Teknologi",children:"Informasi & Teknologi"}),Object(d.jsx)("option",{value:"Laporan",children:"Laporan"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("textarea",{className:"input",placeholder:"",ref:"description"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Date Create"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"tempat",type:"datetime-local"})]}),Object(d.jsx)(b.a,{className:"btn",onClick:this.addMessage,children:"Send Data"})]})}}]),n}(l.a.Component);e.default=p},91:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&t.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));n(5);var r=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:a});o.Consumer,o.Provider;function i(t,e){var n=Object(r.useContext)(o).prefixes;return t||n[e]||e}function c(){return"rtl"===Object(r.useContext)(o).dir}},93:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},94:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},96:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(101);function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(96),a=n(102),o=n(103);function i(t){var e=Object(a.a)();return function(){var n,a=Object(r.a)(t);if(e){var i=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}}}]);
//# sourceMappingURL=28.61dd18f1.chunk.js.map