/*! For license information please see 25.8a56a856.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[25],{100:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},101:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},102:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return r}))},103:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return c}));var a=n(100);function c(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a.a)(t):e}},1206:function(t,e,n){},122:function(t,e,n){"use strict";var r=n(5),a=n(10),c=n(34),o=n(91),i=n.n(o),s=n(2),u=n(0),l=["as","disabled"];function f(t){var e=t.tagName,n=t.disabled,r=t.href,a=t.target,c=t.rel,o=t.onClick,i=t.tabIndex,s=void 0===i?0:i,u=t.type;e||(e=null!=r||null!=a||null!=c?"a":"button");var l={tagName:e};if("button"===e)return[{type:u||"button",disabled:n},l];var f=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==o||o(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:s,href:r,target:"a"===e?a:void 0,"aria-disabled":n||void 0,rel:"a"===e?c:void 0,onClick:f,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),f(t))}},l]}var b=s.forwardRef((function(t,e){var n=t.as,r=t.disabled,c=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,l),o=f(Object.assign({tagName:n,disabled:r},c)),i=Object(a.a)(o,2),s=i[0],b=i[1].tagName;return Object(u.jsx)(b,Object.assign({},c,s,{ref:e}))}));b.displayName="Button";var p=n(92),d=s.forwardRef((function(t,e){var n=t.as,o=t.bsPrefix,s=t.variant,l=t.size,b=t.active,d=t.className,j=Object(c.a)(t,["as","bsPrefix","variant","size","active","className"]),m=Object(p.a)(o,"btn"),v=f(Object(r.a)({tagName:n},j)),O=Object(a.a)(v,2),h=O[0],y=O[1].tagName;return Object(u.jsx)(y,Object(r.a)(Object(r.a)(Object(r.a)({},h),j),{},{ref:e,className:i()(d,m,b&&"active",s&&"".concat(m,"-").concat(s),l&&"".concat(m,"-").concat(l),j.href&&j.disabled&&"disabled")}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=d},1372:function(t,e,n){"use strict";n.r(e);var r=n(93),a=n(94),c=n(97),o=n(98),i=(n(1206),n(18)),s=n.n(i),u=n(6),l=n(2),f=n.n(l),b=n(122),p=n(0),d=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).addStaff=function(){var t={userName:a.refs.email.value,password:a.refs.tempat.value,userType:a.refs.deskripsi.value,cobrandEmail:a.refs.alamat.value,userLevel:a.refs.status.value,emailUser:a.refs.lokasi.value,phone:a.refs.phone.value};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/userAdd",data:t}).then((function(t){console.log(t.data),a.setState({send:!0})})).catch((function(t){console.log(t+"ini eror add cms")}))},a.state={userData:[],send:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return 1==this.state.send?Object(p.jsx)(u.a,{to:"/tools/admin-staff-management"}):Object(p.jsxs)("div",{className:"div",children:[Object(p.jsx)("h1",{children:"Daftar Admin"}),Object(p.jsxs)("form",{className:"form",children:[Object(p.jsx)("label",{children:"Username"}),Object(p.jsx)("input",{className:"input",placeholder:"",ref:"email"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Password"}),Object(p.jsx)("input",{className:"input",placeholder:"",ref:"tempat"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"User Type"}),Object(p.jsx)("input",{className:"input",placeholder:"CS / Cobrand",ref:"deskripsi"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Cobrand Email"}),Object(p.jsx)("input",{className:"input",placeholder:"",type:"email",ref:"alamat"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"User Level"}),Object(p.jsx)("input",{className:"input",placeholder:"",ref:"status"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Email User"}),Object(p.jsx)("input",{className:"input",placeholder:"",type:"email",ref:"lokasi"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Phone"}),Object(p.jsx)("input",{className:"input",placeholder:"",type:"number",ref:"phone"})]}),Object(p.jsx)(b.a,{className:"btn",onClick:this.addStaff,children:"Daftar"})]})}}]),n}(f.a.Component);e.default=d},91:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var c=typeof r;if("string"===c||"number"===c)t.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&t.push(o)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&t.push(i);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));n(5);var r=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),c=r.createContext({prefixes:{},breakpoints:a});c.Consumer,c.Provider;function o(t,e){var n=Object(r.useContext)(c).prefixes;return t||n[e]||e}function i(){return"rtl"===Object(r.useContext)(c).dir}},93:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},94:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},96:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(101);function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(96),a=n(102),c=n(103);function o(t){var e=Object(a.a)();return function(){var n,a=Object(r.a)(t);if(e){var o=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}}}]);
//# sourceMappingURL=25.8a56a856.chunk.js.map