/*! For license information please see 23.543dc092.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[23],{100:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return r}))},104:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}))},106:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(115);function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(a.a)(t,e)}},107:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(104),r=n(116),c=n(117);function i(t){var e=Object(r.a)();return function(){var n,r=Object(a.a)(t);if(e){var i=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}},111:function(t,e,n){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return a}))},115:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return a}))},116:function(t,e,n){"use strict";function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return a}))},117:function(t,e,n){"use strict";function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return c}));var r=n(111);function c(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?Object(r.a)(t):e}},1264:function(t,e,n){},1436:function(t,e,n){"use strict";n.r(e);var a=n(99),r=n(100),c=n(106),i=n(107),o=(n(1264),n(18)),s=n.n(o),u=n(145),d=n(172),l=n(2),f=n.n(l),b=n(8),p=n(3),j=n(6),h=n(0),m=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).daftarMessage=function(){s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/audianceTargetFilter"}).then((function(t){r.setState({message:t.data.Data})})).catch((function(t){}))},r.onSave=function(t){localStorage.setItem("idUser",r.state.message[t]._id);var e={whereValues:{_id:localStorage.getItem("idUser")},newKeyValues:{audianceName:r.refs.alamat.value?r.refs.alamat.value:r.state.message[t].audianceName,dateCreated:r.refs.email.value?r.refs.email.value:r.state.message[t].dateCreated}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/audianceTargetUpdate",data:e}).then((function(t){s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/audianceTargetFilter"}).then((function(t){r.setState({message:t.data.Data}),r.setState({new:null})})).catch((function(t){}))})).catch((function(t){}))},r.showTableBody=function(){r.state.qty;return Object(h.jsx)("tbody",{children:r.state.message.map((function(t,e){return e==r.state.new?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e+1}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:t.audianceName,ref:"alamat"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:t.dateCreated,type:"datetime-local",ref:"email"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"info",className:"btn998",onClick:function(){return r.onSave(e)},children:"Save"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"danger",className:"btn998",onClick:function(){return r.setState({new:null})},children:"Cancel"})})]},e):Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e+1}),Object(h.jsx)("td",{children:t.audianceName}),Object(h.jsx)("td",{children:t.dateCreated}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"warning",className:"btn998",onClick:function(){return r.onEdit(e)},children:"Edit"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"danger",className:"btn998",onClick:function(){return r.onDelete(e)},children:"Delete"})})]},e)}))})},r.onDelete=function(t){localStorage.setItem("idUser",r.state.message[t]._id);var e={whereValues:{_id:localStorage.getItem("idUser")}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/audianceTargetRemove",data:e,headers:{"Content-Type":"application/json"}}).then((function(t){s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/audianceTargetFilter"}).then((function(t){r.setState({message:t.data.Data})})).catch((function(t){}))})).catch((function(t){}))},r.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.daftarMessage()}},{key:"onEdit",value:function(t){this.setState({indexEdit:t}),this.setState({new:t})}},{key:"render",value:function(){if(1==this.state.edit)return Object(h.jsx)(j.a,{to:"/cms/notifications/edit"});this.state.indexEdit;return Object(h.jsxs)("div",{className:"div",children:[Object(h.jsxs)(b.b,{to:"/tools/setting/target-audience/add",id:"add_content",children:[Object(h.jsx)(p.w,{className:"IconAdd"}),Object(h.jsx)("span",{children:"Tambah Target Pembaca"})]}),Object(h.jsx)("h1",{children:"Target Pembaca"}),Object(h.jsx)("div",{className:"komentar",children:Object(h.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"No"}),Object(h.jsx)("th",{children:"Audience Name"}),Object(h.jsx)("th",{className:"h-email",children:"Date Create"}),Object(h.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),n}(f.a.Component);e.default=m},145:function(t,e,n){"use strict";var a=n(5),r=n(7),c=n(34),i=n(96),o=n.n(i),s=n(2),u=n(0),d=["as","disabled"];function l(t){var e=t.tagName,n=t.disabled,a=t.href,r=t.target,c=t.rel,i=t.onClick,o=t.tabIndex,s=void 0===o?0:o,u=t.type;e||(e=null!=a||null!=r||null!=c?"a":"button");var d={tagName:e};if("button"===e)return[{type:u||"button",disabled:n},d];var l=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(a))&&t.preventDefault(),n?t.stopPropagation():null==i||i(t)};return"a"===e&&(a||(a="#"),n&&(a=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:s,href:a,target:"a"===e?r:void 0,"aria-disabled":n||void 0,rel:"a"===e?c:void 0,onClick:l,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),l(t))}},d]}var f=s.forwardRef((function(t,e){var n=t.as,a=t.disabled,c=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,d),i=l(Object.assign({tagName:n,disabled:a},c)),o=Object(r.a)(i,2),s=o[0],f=o[1].tagName;return Object(u.jsx)(f,Object.assign({},c,s,{ref:e}))}));f.displayName="Button";var b=n(98),p=s.forwardRef((function(t,e){var n=t.as,i=t.bsPrefix,s=t.variant,d=t.size,f=t.active,p=t.className,j=Object(c.a)(t,["as","bsPrefix","variant","size","active","className"]),h=Object(b.a)(i,"btn"),m=l(Object(a.a)({tagName:n},j)),v=Object(r.a)(m,2),O=v[0],g=v[1].tagName;return Object(u.jsx)(g,Object(a.a)(Object(a.a)(Object(a.a)({},O),j),{},{ref:e,className:o()(p,h,f&&"active",s&&"".concat(h,"-").concat(s),d&&"".concat(h,"-").concat(d),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=p},172:function(t,e,n){"use strict";var a=n(5),r=n(34),c=n(96),i=n.n(c),o=n(2),s=n(98),u=n(0),d=o.forwardRef((function(t,e){var n=t.bsPrefix,c=t.className,o=t.striped,d=t.bordered,l=t.borderless,f=t.hover,b=t.size,p=t.variant,j=t.responsive,h=Object(r.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(s.a)(n,"table"),v=i()(c,m,p&&"".concat(m,"-").concat(p),b&&"".concat(m,"-").concat(b),o&&"".concat(m,"-striped"),d&&"".concat(m,"-bordered"),l&&"".concat(m,"-borderless"),f&&"".concat(m,"-hover")),O=Object(u.jsx)("table",Object(a.a)(Object(a.a)({},h),{},{className:v,ref:e}));if(j){var g="".concat(m,"-responsive");return"string"===typeof j&&(g="".concat(g,"-").concat(j)),Object(u.jsx)("div",{className:g,children:O})}return O}));e.a=d},96:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var c=typeof a;if("string"===c||"number"===c)t.push(a);else if(Array.isArray(a)){if(a.length){var i=r.apply(null,a);i&&t.push(i)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var o in a)n.call(a,o)&&a[o]&&t.push(o);else t.push(a.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));n(5);var a=n(2),r=(n(0),["xxl","xl","lg","md","sm","xs"]),c=a.createContext({prefixes:{},breakpoints:r});c.Consumer,c.Provider;function i(t,e){var n=Object(a.useContext)(c).prefixes;return t||n[e]||e}function o(){return"rtl"===Object(a.useContext)(c).dir}},99:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=23.543dc092.chunk.js.map