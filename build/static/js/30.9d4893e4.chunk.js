/*! For license information please see 30.9d4893e4.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[30],{100:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},103:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(107);function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},104:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(100),a=n(109),o=n(110);function i(t){var e=Object(a.a)();return function(){var n,a=Object(r.a)(t);if(e){var i=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}},106:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},107:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},109:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return r}))},110:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var a=n(106);function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a.a)(t):e}},134:function(t,e,n){"use strict";var r=n(5),a=n(9),o=n(34),i=n(94),c=n.n(i),u=n(2),s=n(0),l=["as","disabled"];function f(t){var e=t.tagName,n=t.disabled,r=t.href,a=t.target,o=t.rel,i=t.onClick,c=t.tabIndex,u=void 0===c?0:c,s=t.type;e||(e=null!=r||null!=a||null!=o?"a":"button");var l={tagName:e};if("button"===e)return[{type:s||"button",disabled:n},l];var f=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==i||i(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:u,href:r,target:"a"===e?a:void 0,"aria-disabled":n||void 0,rel:"a"===e?o:void 0,onClick:f,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),f(t))}},l]}var b=u.forwardRef((function(t,e){var n=t.as,r=t.disabled,o=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,l),i=f(Object.assign({tagName:n,disabled:r},o)),c=Object(a.a)(i,2),u=c[0],b=c[1].tagName;return Object(s.jsx)(b,Object.assign({},o,u,{ref:e}))}));b.displayName="Button";var d=n(95),p=u.forwardRef((function(t,e){var n=t.as,i=t.bsPrefix,u=t.variant,l=t.size,b=t.active,p=t.className,j=Object(o.a)(t,["as","bsPrefix","variant","size","active","className"]),v=Object(d.a)(i,"btn"),O=f(Object(r.a)({tagName:n},j)),m=Object(a.a)(O,2),h=m[0],y=m[1].tagName;return Object(s.jsx)(y,Object(r.a)(Object(r.a)(Object(r.a)({},h),j),{},{ref:e,className:c()(p,v,b&&"active",u&&"".concat(v,"-").concat(u),l&&"".concat(v,"-").concat(l),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=p},1379:function(t,e,n){"use strict";n.r(e);var r=n(96),a=n(97),o=n(103),i=n(104),c=(n(894),n(18)),u=n.n(c),s=n(6),l=n(2),f=n.n(l),b=n(134),d=n(0),p=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).addRedzone=function(){var t={cobrandEmail:a.refs.email.value,placeName:a.refs.tempat.value,description:a.refs.deskripsi.value,address:a.refs.alamat.value,redZoneStatus:a.refs.status.value,location:[a.refs.lokasi.value]};u()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneAdd",data:t}).then((function(t){console.log(t.data),a.setState({kirim:!0})})).catch((function(t){console.log(t+"ini eror add redzone")}))},a.state={userData:[],kirim:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return 1==this.state.kirim?Object(d.jsx)(s.a,{to:"/cms/redzone"}):Object(d.jsxs)("div",{className:"div",children:[Object(d.jsx)("h1",{children:"Add Redzone"}),Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("label",{children:"Email"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"email"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Nama Tempat"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"tempat"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Deskripsi"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"deskripsi"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Alamat"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"alamat"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Redzone Status"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"status"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Kordinat"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"lokasi"})]}),Object(d.jsx)(b.a,{className:"btn",onClick:this.addRedzone,children:"Kirim Redzone"})]})}}]),n}(f.a.Component);e.default=p},894:function(t,e,n){},94:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&t.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},95:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));n(5);var r=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:a});o.Consumer,o.Provider;function i(t,e){var n=Object(r.useContext)(o).prefixes;return t||n[e]||e}function c(){return"rtl"===Object(r.useContext)(o).dir}},96:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},97:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=30.9d4893e4.chunk.js.map