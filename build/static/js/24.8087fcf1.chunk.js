/*! For license information please see 24.8087fcf1.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[24],{101:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));n(5);var r=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),c=r.createContext({prefixes:{},breakpoints:a});c.Consumer,c.Provider;function o(t,e){var n=Object(r.useContext)(c).prefixes;return t||n[e]||e}function i(){return"rtl"===Object(r.useContext)(c).dir}},102:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},103:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},109:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},111:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(115);function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},112:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(109),a=n(117),c=n(120);function o(t){var e=Object(a.a)();return function(){var n,a=Object(r.a)(t);if(e){var o=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}},114:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},115:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},117:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return r}))},120:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return c}));var a=n(114);function c(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a.a)(t):e}},1270:function(t,e,n){},1450:function(t,e,n){"use strict";n.r(e);var r=n(102),a=n(103),c=n(111),o=n(112),i=(n(1270),n(18)),s=n.n(i),u=n(153),d=n(173),l=n(2),f=n.n(l),b=n(9),p=n(3),j=n(0),h=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).daftarMessage=function(){s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/programCategoryFilter"}).then((function(t){a.setState({message:t.data.Data})})).catch((function(t){}))},a.onSave=function(t){localStorage.setItem("idUser",a.state.message[t]._id);var e={whereValues:{_id:localStorage.getItem("idUser")},newKeyValues:{category:a.refs.category.value?a.refs.category.value:a.state.message[t].category,dateCreated:a.refs.email.value?a.refs.email.value:a.state.message[t].dateCreated,description:a.refs.description.value?a.refs.description.value:a.state.message[t].description}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/programCategoryUpdate",data:e}).then((function(t){s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/programCategoryFilter"}).then((function(t){a.setState({message:t.data.Data}),a.setState({new:null})})).catch((function(t){}))})).catch((function(t){}))},a.showTableBody=function(){a.state.qty;return Object(j.jsx)("tbody",{children:a.state.message.map((function(t,e){return e==a.state.new?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e+1}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{placeholder:t.category,ref:"category"})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{placeholder:t.dateCreated,type:"datetime-local",ref:"email"})}),Object(j.jsx)("td",{children:Object(j.jsx)("textarea",{placeholder:t.description,ref:"description"})}),Object(j.jsx)("td",{children:Object(j.jsx)(u.a,{variant:"info",className:"btn998",onClick:function(){return a.onSave(e)},children:"Save"})}),Object(j.jsx)("td",{children:Object(j.jsx)(u.a,{variant:"danger",className:"btn998",onClick:function(){return a.setState({new:null})},children:"Cancel"})})]},e):Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e+1}),Object(j.jsx)("td",{children:t.category}),Object(j.jsx)("td",{children:t.dateCreated}),Object(j.jsx)("td",{children:t.description}),Object(j.jsx)("td",{children:Object(j.jsx)(u.a,{variant:"warning",className:"btn998",onClick:function(){return a.onEdit(e)},children:"Edit"})}),Object(j.jsx)("td",{children:Object(j.jsx)(u.a,{variant:"danger",className:"btn998",onClick:function(){return a.onDelete(e)},children:"Delete"})})]},e)}))})},a.onDelete=function(t){localStorage.setItem("idUser",a.state.message[t]._id);var e={whereValues:{_id:localStorage.getItem("idUser")}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/programCategoryRemove",data:e,headers:{"Content-Type":"application/json"}}).then((function(t){s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/programCategoryFilter"}).then((function(t){a.setState({message:t.data.Data})})).catch((function(t){}))})).catch((function(t){}))},a.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.daftarMessage()}},{key:"onEdit",value:function(t){this.setState({new:t})}},{key:"render",value:function(){this.state.indexEdit;return Object(j.jsxs)("div",{className:"div",children:[Object(j.jsxs)(b.b,{to:"/tools/setting/program-category/add",id:"add_content",children:[Object(j.jsx)(p.w,{className:"IconAdd"}),Object(j.jsx)("span",{children:"Tambah Kategori Program"})]}),Object(j.jsx)("h1",{children:"Kategori Program"}),Object(j.jsx)("div",{className:"komentar",children:Object(j.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"No"}),Object(j.jsx)("th",{children:"Category"}),Object(j.jsx)("th",{className:"h-email",children:"Date Create"}),Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),n}(f.a.Component);e.default=h},153:function(t,e,n){"use strict";var r=n(5),a=n(7),c=n(34),o=n(97),i=n.n(o),s=n(2),u=n(0),d=["as","disabled"];function l(t){var e=t.tagName,n=t.disabled,r=t.href,a=t.target,c=t.rel,o=t.onClick,i=t.tabIndex,s=void 0===i?0:i,u=t.type;e||(e=null!=r||null!=a||null!=c?"a":"button");var d={tagName:e};if("button"===e)return[{type:u||"button",disabled:n},d];var l=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==o||o(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:s,href:r,target:"a"===e?a:void 0,"aria-disabled":n||void 0,rel:"a"===e?c:void 0,onClick:l,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),l(t))}},d]}var f=s.forwardRef((function(t,e){var n=t.as,r=t.disabled,c=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,d),o=l(Object.assign({tagName:n,disabled:r},c)),i=Object(a.a)(o,2),s=i[0],f=i[1].tagName;return Object(u.jsx)(f,Object.assign({},c,s,{ref:e}))}));f.displayName="Button";var b=n(101),p=s.forwardRef((function(t,e){var n=t.as,o=t.bsPrefix,s=t.variant,d=t.size,f=t.active,p=t.className,j=Object(c.a)(t,["as","bsPrefix","variant","size","active","className"]),h=Object(b.a)(o,"btn"),m=l(Object(r.a)({tagName:n},j)),v=Object(a.a)(m,2),O=v[0],g=v[1].tagName;return Object(u.jsx)(g,Object(r.a)(Object(r.a)(Object(r.a)({},O),j),{},{ref:e,className:i()(p,h,f&&"active",s&&"".concat(h,"-").concat(s),d&&"".concat(h,"-").concat(d),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=p},173:function(t,e,n){"use strict";var r=n(5),a=n(34),c=n(97),o=n.n(c),i=n(2),s=n(101),u=n(0),d=i.forwardRef((function(t,e){var n=t.bsPrefix,c=t.className,i=t.striped,d=t.bordered,l=t.borderless,f=t.hover,b=t.size,p=t.variant,j=t.responsive,h=Object(a.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(s.a)(n,"table"),v=o()(c,m,p&&"".concat(m,"-").concat(p),b&&"".concat(m,"-").concat(b),i&&"".concat(m,"-striped"),d&&"".concat(m,"-bordered"),l&&"".concat(m,"-borderless"),f&&"".concat(m,"-hover")),O=Object(u.jsx)("table",Object(r.a)(Object(r.a)({},h),{},{className:v,ref:e}));if(j){var g="".concat(m,"-responsive");return"string"===typeof j&&(g="".concat(g,"-").concat(j)),Object(u.jsx)("div",{className:g,children:O})}return O}));e.a=d},97:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var c=typeof r;if("string"===c||"number"===c)t.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&t.push(o)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&t.push(i);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()}}]);
//# sourceMappingURL=24.8087fcf1.chunk.js.map