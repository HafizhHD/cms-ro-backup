/*! For license information please see 24.6d86ffa0.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[24],{100:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},103:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},105:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(111);function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},106:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(103),a=n(112),o=n(113);function c(t){var e=Object(a.a)();return function(){var n,a=Object(r.a)(t);if(e){var c=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}},108:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},111:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},112:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return r}))},113:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var a=n(108);function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a.a)(t):e}},1230:function(t,e,n){},1398:function(t,e,n){"use strict";n.r(e);var r=n(99),a=n(100),o=n(105),c=n(106),i=(n(1230),n(18)),s=n.n(i),l=n(142),u=n(157),d=n(2),f=n.n(d),b=n(7),p=n(3),j=n(0),h=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).daftarMessage=function(){s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/programCategoryFilter"}).then((function(t){console.log(t.data.Data),a.setState({message:t.data.Data})})).catch((function(t){console.log(t+"ini eror LIST kate program")}))},a.onSave=function(t){localStorage.setItem("idUser",a.state.message[t]._id);var e=localStorage.getItem("idUser");console.log(e),console.log(a.state.message[t].category);var n={whereValues:{_id:e},newKeyValues:{category:a.refs.category.value?a.refs.category.value:a.state.message[t].category,dateCreated:a.refs.email.value?a.refs.email.value:a.state.message[t].dateCreated,description:a.refs.description.value?a.refs.description.value:a.state.message[t].description}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/programCategoryUpdate",data:n}).then((function(t){console.log(t.data),console.log(t.data),s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/programCategoryFilter"}).then((function(t){console.log(t.data.Data),a.setState({message:t.data.Data}),a.setState({new:null})})).catch((function(t){console.log(t+"ini eror LIST kate program")}))})).catch((function(t){console.log(t+"ini eror edit kate program")}))},a.showTableBody=function(){a.state.qty;return Object(j.jsx)("tbody",{children:a.state.message.map((function(t,e){return e==a.state.new?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e+1}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{placeholder:t.category,ref:"category"})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{placeholder:t.dateCreated,type:"datetime-local",ref:"email"})}),Object(j.jsx)("td",{children:Object(j.jsx)("textarea",{placeholder:t.description,ref:"description"})}),Object(j.jsx)("td",{children:Object(j.jsx)(l.a,{variant:"info",className:"btn998",onClick:function(){return a.onSave(e)},children:"Save"})}),Object(j.jsx)("td",{children:Object(j.jsx)(l.a,{variant:"danger",className:"btn998",onClick:function(){return a.setState({new:null})},children:"Cancel"})})]},e):Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e+1}),Object(j.jsx)("td",{children:t.category}),Object(j.jsx)("td",{children:t.dateCreated}),Object(j.jsx)("td",{children:t.description}),Object(j.jsx)("td",{children:Object(j.jsx)(l.a,{variant:"warning",className:"btn998",onClick:function(){return a.onEdit(e)},children:"Edit"})}),Object(j.jsx)("td",{children:Object(j.jsx)(l.a,{variant:"danger",className:"btn998",onClick:function(){return a.onDelete(e)},children:"Delete"})})]},e)}))})},a.onDelete=function(t){localStorage.setItem("idUser",a.state.message[t]._id);var e=localStorage.getItem("idUser");console.log(a.state.message[t]._id),console.log(e);var n={whereValues:{_id:e}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/programCategoryRemove",data:n,headers:{"Content-Type":"application/json"}}).then((function(t){console.log(n),console.log(t.data),s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/programCategoryFilter"}).then((function(t){console.log(t.data.Data),a.setState({message:t.data.Data})})).catch((function(t){console.log(t+"ini eror LIST kate program")}))})).catch((function(t){console.log(t+"ini delete kate program")}))},a.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.daftarMessage()}},{key:"onEdit",value:function(t){this.setState({new:t}),console.log(t),console.log(this.state.new)}},{key:"render",value:function(){this.state.indexEdit;return Object(j.jsxs)("div",{className:"div",children:[Object(j.jsxs)(b.b,{to:"/tools/setting/program-category/add",id:"add_content",children:[Object(j.jsx)(p.v,{className:"IconAdd"}),Object(j.jsx)("span",{children:"Tambah Kategori Program"})]}),Object(j.jsx)("h1",{children:"Kategori Program"}),Object(j.jsx)("div",{className:"komentar",children:Object(j.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"No"}),Object(j.jsx)("th",{children:"Category"}),Object(j.jsx)("th",{className:"h-email",children:"Date Create"}),Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),n}(f.a.Component);e.default=h},142:function(t,e,n){"use strict";var r=n(5),a=n(9),o=n(34),c=n(94),i=n.n(c),s=n(2),l=n(0),u=["as","disabled"];function d(t){var e=t.tagName,n=t.disabled,r=t.href,a=t.target,o=t.rel,c=t.onClick,i=t.tabIndex,s=void 0===i?0:i,l=t.type;e||(e=null!=r||null!=a||null!=o?"a":"button");var u={tagName:e};if("button"===e)return[{type:l||"button",disabled:n},u];var d=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==c||c(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:s,href:r,target:"a"===e?a:void 0,"aria-disabled":n||void 0,rel:"a"===e?o:void 0,onClick:d,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),d(t))}},u]}var f=s.forwardRef((function(t,e){var n=t.as,r=t.disabled,o=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,u),c=d(Object.assign({tagName:n,disabled:r},o)),i=Object(a.a)(c,2),s=i[0],f=i[1].tagName;return Object(l.jsx)(f,Object.assign({},o,s,{ref:e}))}));f.displayName="Button";var b=n(98),p=s.forwardRef((function(t,e){var n=t.as,c=t.bsPrefix,s=t.variant,u=t.size,f=t.active,p=t.className,j=Object(o.a)(t,["as","bsPrefix","variant","size","active","className"]),h=Object(b.a)(c,"btn"),g=d(Object(r.a)({tagName:n},j)),m=Object(a.a)(g,2),v=m[0],O=m[1].tagName;return Object(l.jsx)(O,Object(r.a)(Object(r.a)(Object(r.a)({},v),j),{},{ref:e,className:i()(p,h,f&&"active",s&&"".concat(h,"-").concat(s),u&&"".concat(h,"-").concat(u),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=p},157:function(t,e,n){"use strict";var r=n(5),a=n(34),o=n(94),c=n.n(o),i=n(2),s=n(98),l=n(0),u=i.forwardRef((function(t,e){var n=t.bsPrefix,o=t.className,i=t.striped,u=t.bordered,d=t.borderless,f=t.hover,b=t.size,p=t.variant,j=t.responsive,h=Object(a.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),g=Object(s.a)(n,"table"),m=c()(o,g,p&&"".concat(g,"-").concat(p),b&&"".concat(g,"-").concat(b),i&&"".concat(g,"-striped"),u&&"".concat(g,"-bordered"),d&&"".concat(g,"-borderless"),f&&"".concat(g,"-hover")),v=Object(l.jsx)("table",Object(r.a)(Object(r.a)({},h),{},{className:m,ref:e}));if(j){var O="".concat(g,"-responsive");return"string"===typeof j&&(O="".concat(O,"-").concat(j)),Object(l.jsx)("div",{className:O,children:v})}return v}));e.a=u},94:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&t.push(c)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&t.push(i);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));n(5);var r=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:a});o.Consumer,o.Provider;function c(t,e){var n=Object(r.useContext)(o).prefixes;return t||n[e]||e}function i(){return"rtl"===Object(r.useContext)(o).dir}},99:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=24.6d86ffa0.chunk.js.map