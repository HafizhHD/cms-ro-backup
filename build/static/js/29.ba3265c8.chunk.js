/*! For license information please see 29.ba3265c8.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[29],{100:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},101:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},102:function(e,t,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return r}))},103:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}));var a=n(100);function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}},118:function(e,t,n){"use strict";var r=n(5),a=n(10),o=n(34),c=n(90),i=n.n(c),s=n(2),u=n(0),l=["as","disabled"];function f(e){var t=e.tagName,n=e.disabled,r=e.href,a=e.target,o=e.rel,c=e.onClick,i=e.tabIndex,s=void 0===i?0:i,u=e.type;t||(t=null!=r||null!=a||null!=o?"a":"button");var l={tagName:t};if("button"===t)return[{type:u||"button",disabled:n},l];var f=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==c||c(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:s,href:r,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},l]}var b=s.forwardRef((function(e,t){var n=e.as,r=e.disabled,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l),c=f(Object.assign({tagName:n,disabled:r},o)),i=Object(a.a)(c,2),s=i[0],b=i[1].tagName;return Object(u.jsx)(b,Object.assign({},o,s,{ref:t}))}));b.displayName="Button";var d=n(93),j=s.forwardRef((function(e,t){var n=e.as,c=e.bsPrefix,s=e.variant,l=e.size,b=e.active,j=e.className,p=Object(o.a)(e,["as","bsPrefix","variant","size","active","className"]),m=Object(d.a)(c,"btn"),O=f(Object(r.a)({tagName:n},p)),h=Object(a.a)(O,2),v=h[0],x=h[1].tagName;return Object(u.jsx)(x,Object(r.a)(Object(r.a)(Object(r.a)({},v),p),{},{ref:t,className:i()(j,m,b&&"active",s&&"".concat(m,"-").concat(s),l&&"".concat(m,"-").concat(l),p.href&&p.disabled&&"disabled")}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=j},1211:function(e,t,n){},1381:function(e,t,n){"use strict";n.r(t);var r=n(94),a=n(95),o=n(97),c=n(98),i=(n(1211),n(18)),s=n.n(i),u=n(6),l=n(2),f=n.n(l),b=n(118),d=n(0),j=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).addMessage=function(){var e=localStorage.getItem("emailTo"),t=localStorage.getItem("notifContext"),n={destination:e||a.refs.destinaation.value,messageSubject:t||a.refs.tempat.value,messageContent:a.refs.deskripsi.value,scheduleTime:a.refs.alamat.value?a.refs.alamat.value:"",mediaType:a.refs.status.value,category:a.refs.category.value};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastAdd",data:n}).then((function(e){console.log(e.data),a.setState({send:!0})})).catch((function(e){console.log(e+"ini eror add BC")}))},a.state={userData:[],send:!1,schedule:""},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){console.log(localStorage.getItem("emailTo")),console.log(localStorage.getItem("notifContext"))}},{key:"render",value:function(){var e=this;if(1==this.state.send)return Object(d.jsx)(u.a,{to:"/cms/messaging"});var t=localStorage.getItem("emailTo"),n=localStorage.getItem("notifContext");return Object(d.jsxs)("div",{className:"div",children:[Object(d.jsx)("h1",{children:"Notification"}),Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("label",{children:"Destination"})," ",Object(d.jsx)("br",{}),t?Object(d.jsx)("input",{className:"input",placeholder:"",ref:"destinaation",value:t,type:"email"}):Object(d.jsx)("input",{className:"input",placeholder:"",ref:"destinaation",type:"email"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Subject"}),n?Object(d.jsx)("input",{className:"input",placeholder:"",ref:"tempat",value:n}):Object(d.jsx)("input",{className:"input",placeholder:"",ref:"tempat"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Message"}),Object(d.jsx)("textarea",{className:"text",placeholder:"Type here ...",ref:"deskripsi"}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{className:"formset",children:[Object(d.jsxs)("label",{children:["Set schedule  ",Object(d.jsx)("input",{type:"radio",value:"setting",onClick:function(){return e.setState({schedule:"set"})}})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["No set schedule  ",Object(d.jsx)("input",{type:"radio",ref:"alamat",value:"no-schedule",onClick:function(){return e.setState({schedule:"notset"})}})]})]}),"set"===this.state.schedule?Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Schedule Time"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"alamat",type:"datetime-local"}),Object(d.jsx)("br",{})]}):"",Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Media Type "}),Object(d.jsxs)("select",{className:"select",ref:"status",children:[Object(d.jsx)("option",{value:"email",children:"Email"}),Object(d.jsx)("option",{value:"device",children:"Device"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{className:"label",children:"Category Notification"})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("select",{ref:"category",children:[Object(d.jsx)("option",{value:"Pembayaran",children:"Pembayaran"}),Object(d.jsx)("option",{value:"Pemberitahuan",children:"Pemberitahuan"}),Object(d.jsx)("option",{value:"Promosi",children:"Promosi"}),Object(d.jsx)("option",{value:"Informasi & Teknologi",children:"Informasi & Teknologi"}),Object(d.jsx)("option",{value:"Laporan",children:"Laporan"})]})]}),Object(d.jsx)(b.a,{className:"btn",onClick:this.addMessage,children:"Send Message"})]})}}]),n}(f.a.Component);t.default=j},90:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&e.push(c)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));n(5);var r=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:a});o.Consumer,o.Provider;function c(e,t){var n=Object(r.useContext)(o).prefixes;return e||n[t]||t}function i(){return"rtl"===Object(r.useContext)(o).dir}},94:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},95:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},96:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(101);function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(96),a=n(102),o=n(103);function c(e){var t=Object(a.a)();return function(){var n,a=Object(r.a)(e);if(t){var c=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}}}]);
//# sourceMappingURL=29.ba3265c8.chunk.js.map