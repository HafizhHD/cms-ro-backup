/*! For license information please see 18.599c5e1a.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[18],{1042:function(t,e,n){},105:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},106:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},107:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return r}))},1130:function(t,e,n){"use strict";n.r(e);var r=n(90),a=n(91),o=n(96),c=n(99),i=(n(1042),n(18)),u=n.n(i),s=n(2),f=n.n(s),l=n(131),b=n(6),d=n(0),p=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).addForum=function(){var t={userEmail:a.refs.email.value,cobrandEmail:a.refs.emailco.value,subject:a.refs.subject.value,comment:a.refs.comment.value};u()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/forumAdd",data:t}).then((function(t){console.log(t.data),a.setState({kirimforum:!0})})).catch((function(t){console.log(t+"ini eror addForum DISKUSI")}))},a.state={userData:[],kirimforum:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return 1==this.state.kirimforum?Object(d.jsx)(b.a,{to:"/cms/forum-moderator"}):Object(d.jsxs)("div",{className:"div",children:[Object(d.jsx)("h1",{children:"Add Forum Diskusi"}),Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("label",{children:"Email User"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"email"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Email Cobrand"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"emailco"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Subject"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"subject"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Comment"}),Object(d.jsx)("textarea",{className:"text",placeholder:"Type here ...",ref:"comment"})]}),Object(d.jsx)(l.a,{className:"btn",onClick:this.addForum,children:"Kirim Pesan Forum"})]})}}]),n}(f.a.Component);e.default=p},131:function(t,e,n){"use strict";var r=n(5),a=n(10),o=n(34),c=n(89),i=n.n(c),u=n(2),s=n(0),f=["as","disabled"];function l(t){var e=t.tagName,n=t.disabled,r=t.href,a=t.target,o=t.rel,c=t.onClick,i=t.tabIndex,u=void 0===i?0:i,s=t.type;e||(e=null!=r||null!=a||null!=o?"a":"button");var f={tagName:e};if("button"===e)return[{type:s||"button",disabled:n},f];var l=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==c||c(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:u,href:r,target:"a"===e?a:void 0,"aria-disabled":n||void 0,rel:"a"===e?o:void 0,onClick:l,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),l(t))}},f]}var b=u.forwardRef((function(t,e){var n=t.as,r=t.disabled,o=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,f),c=l(Object.assign({tagName:n,disabled:r},o)),i=Object(a.a)(c,2),u=i[0],b=i[1].tagName;return Object(s.jsx)(b,Object.assign({},o,u,{ref:e}))}));b.displayName="Button";var d=n(92),p=u.forwardRef((function(t,e){var n=t.as,c=t.bsPrefix,u=t.variant,f=t.size,b=t.active,p=t.className,j=Object(o.a)(t,["as","bsPrefix","variant","size","active","className"]),m=Object(d.a)(c,"btn"),v=l(Object(r.a)({tagName:n},j)),O=Object(a.a)(v,2),y=O[0],h=O[1].tagName;return Object(s.jsx)(h,Object(r.a)(Object(r.a)(Object(r.a)({},y),j),{},{ref:e,className:i()(p,m,b&&"active",u&&"".concat(m,"-").concat(u),f&&"".concat(m,"-").concat(f),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=p},89:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&t.push(c)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&t.push(i);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},90:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},91:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));n(5);var r=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:a});o.Consumer,o.Provider;function c(t,e){var n=Object(r.useContext)(o).prefixes;return t||n[e]||e}function i(){return"rtl"===Object(r.useContext)(o).dir}},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(106);function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},97:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},99:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(97),a=n(107);function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c=n(105);function i(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(c.a)(t):e}function u(t){var e=Object(a.a)();return function(){var n,a=Object(r.a)(t);if(e){var o=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i(this,n)}}}}]);
//# sourceMappingURL=18.599c5e1a.chunk.js.map