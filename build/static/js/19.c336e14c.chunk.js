/*! For license information please see 19.c336e14c.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[19],{100:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));n(5);var r=n(2),a=(n(1),r.createContext({prefixes:{}}));a.Consumer,a.Provider;function o(t,e){var n=Object(r.useContext)(a).prefixes;return t||n[e]||e}function i(){return"rtl"===Object(r.useContext)(a).dir}},105:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(117);function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},106:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},108:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(106),a=n(120);function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=n(116);function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(i.a)(t):e}function u(t){var e=Object(a.a)();return function(){var n,a=Object(r.a)(t);if(e){var o=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return c(this,n)}}},1109:function(t,e,n){"use strict";n.r(e);var r=n(94),a=n(95),o=n(105),i=n(108),c=(n(773),n(18)),u=n.n(c),s=n(6),l=n(2),f=n.n(l),b=n(160),d=n(1),p=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).addRedzone=function(){var t={cobrandEmail:a.refs.email.value,placeName:a.refs.tempat.value,description:a.refs.deskripsi.value,address:a.refs.alamat.value,redZoneStatus:a.refs.status.value,location:[a.refs.lokasi.value]};u()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneAdd",data:t}).then((function(t){console.log(t.data),a.setState({kirim:!0})})).catch((function(t){console.log(t+"ini eror add redzone")}))},a.state={userData:[],kirim:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return 1==this.state.kirim?Object(d.jsx)(s.a,{to:"/cms/redzone"}):Object(d.jsxs)("div",{className:"div",children:[Object(d.jsx)("h1",{children:"Add Redzone"}),Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("label",{children:"Email"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"email"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Nama Tempat"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"tempat"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Deskripsi"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"deskripsi"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Alamat"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"alamat"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Redzone Status"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"status"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Kordinat"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"lokasi"})]}),Object(d.jsx)(b.a,{className:"btn",onClick:this.addRedzone,children:"Kirim Redzone"})]})}}]),n}(f.a.Component);e.default=p},116:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},117:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},120:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return r}))},160:function(t,e,n){"use strict";var r=n(5),a=n(10),o=n(34),i=n(96),c=n.n(i),u=n(2),s=n(1),l=["as","disabled"];function f(t){var e=t.tagName,n=t.disabled,r=t.href,a=t.target,o=t.rel,i=t.onClick,c=t.tabIndex,u=void 0===c?0:c,s=t.type;e||(e=null!=r||null!=a||null!=o?"a":"button");var l={tagName:e};if("button"===e)return[{type:s||"button",disabled:n},l];var f=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==i||i(t)};return[{role:"button",disabled:void 0,tabIndex:n?void 0:u,href:"a"===e&&n?void 0:r,target:"a"===e?a:void 0,"aria-disabled":n||void 0,rel:"a"===e?o:void 0,onClick:f,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),f(t))}},l]}var b=u.forwardRef((function(t,e){var n=t.as,r=t.disabled,o=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,l),i=f(Object.assign({tagName:n,disabled:r},o)),c=Object(a.a)(i,2),u=c[0],b=c[1].tagName;return Object(s.jsx)(b,Object.assign({},o,u,{ref:e}))}));b.displayName="Button";var d=n(100),p=u.forwardRef((function(t,e){var n=t.as,i=t.bsPrefix,u=t.variant,l=t.size,b=t.active,p=t.className,j=Object(o.a)(t,["as","bsPrefix","variant","size","active","className"]),v=Object(d.a)(i,"btn"),O=f(Object(r.a)({tagName:n},j)),m=Object(a.a)(O,2),h=m[0],y=m[1].tagName;return Object(s.jsx)(y,Object(r.a)(Object(r.a)(Object(r.a)({},j),h),{},{ref:e,className:c()(p,v,b&&"active",u&&"".concat(v,"-").concat(u),l&&"".concat(v,"-").concat(l),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=p},773:function(t,e,n){},94:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},95:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},96:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&t.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()}}]);
//# sourceMappingURL=19.c336e14c.chunk.js.map