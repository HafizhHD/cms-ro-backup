/*! For license information please see 14.fa74fc1a.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[14],{100:function(t,e,n){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return a}))},101:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return a}))},102:function(t,e,n){"use strict";function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return a}))},103:function(t,e,n){"use strict";function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var r=n(100);function o(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?Object(r.a)(t):e}},122:function(t,e,n){"use strict";var a=n(5),r=n(10),o=n(34),c=n(90),s=n.n(c),i=n(2),l=n(0),u=["as","disabled"];function d(t){var e=t.tagName,n=t.disabled,a=t.href,r=t.target,o=t.rel,c=t.onClick,s=t.tabIndex,i=void 0===s?0:s,l=t.type;e||(e=null!=a||null!=r||null!=o?"a":"button");var u={tagName:e};if("button"===e)return[{type:l||"button",disabled:n},u];var d=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(a))&&t.preventDefault(),n?t.stopPropagation():null==c||c(t)};return"a"===e&&(a||(a="#"),n&&(a=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:i,href:a,target:"a"===e?r:void 0,"aria-disabled":n||void 0,rel:"a"===e?o:void 0,onClick:d,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),d(t))}},u]}var f=i.forwardRef((function(t,e){var n=t.as,a=t.disabled,o=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,u),c=d(Object.assign({tagName:n,disabled:a},o)),s=Object(r.a)(c,2),i=s[0],f=s[1].tagName;return Object(l.jsx)(f,Object.assign({},o,i,{ref:e}))}));f.displayName="Button";var b=n(93),j=i.forwardRef((function(t,e){var n=t.as,c=t.bsPrefix,i=t.variant,u=t.size,f=t.active,j=t.className,p=Object(o.a)(t,["as","bsPrefix","variant","size","active","className"]),m=Object(b.a)(c,"btn"),h=d(Object(a.a)({tagName:n},p)),v=Object(r.a)(h,2),g=v[0],O=v[1].tagName;return Object(l.jsx)(O,Object(a.a)(Object(a.a)(Object(a.a)({},g),p),{},{ref:e,className:s()(j,m,f&&"active",i&&"".concat(m,"-").concat(i),u&&"".concat(m,"-").concat(u),p.href&&p.disabled&&"disabled")}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=j},1229:function(t,e,n){},1399:function(t,e,n){"use strict";n.r(e);var a=n(94),r=n(95),o=n(97),c=n(98),s=(n(1229),n(18)),i=n.n(s),l=n(122),u=n(147),d=n(2),f=n.n(d),b=n(6),j=n(0),p=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).daftarMessage=function(){var t=localStorage.getItem("contentSelected");console.log(t);i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter"}).then((function(t){console.log(t.data.resultData),console.log(t.data),r.setState({message:t.data.resultData})})).catch((function(t){console.log(t+"ini eror LIST koment")}))},r.onSave=function(t){localStorage.setItem("idUser",r.state.message[t]._id);var e=localStorage.getItem("idUser");console.log(e),console.log(r.state.message[t].emailUser);var n={whereValues:{_id:e},newValues:{emailUser:r.refs.status.value?r.refs.status.value:r.state.message[t].emailUser,status:r.refs.alamat.value?r.refs.alamat.value:r.state.message[t].status,comment:r.refs.email.value?r.refs.email.value:r.state.message[t].comment,dateCreated:r.refs.tempat.value?r.refs.tempat.value:r.state.message[t].dateCreated,contentId:r.state.message[t].contentId}};i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentUpdate",data:n}).then((function(t){console.log(t.data),i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter"}).then((function(t){console.log(t.data.resultData),console.log(t.data),r.setState({message:t.data.resultData}),r.setState({new:null})})).catch((function(t){console.log(t+"ini eror LIST koment")}))})).catch((function(t){console.log(t+"ini eror edit koment")}))},r.showTableBody=function(){r.state.qty;return Object(j.jsx)("tbody",{children:r.state.message?r.state.message.map((function(t,e){return e==r.state.new?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",placeholder:t.emailUser,ref:"status"})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{placeholder:t.status,ref:"alamat"})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{placeholder:t.comment,ref:"email"})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{placeholder:t.dateCreated,ref:"tempat",type:"datetime-local"})}),Object(j.jsx)("td",{children:t.contentId}),Object(j.jsx)("td",{children:Object(j.jsx)(l.a,{variant:"info",className:"btn2",onClick:function(){return r.onSave(e)},children:"Save"})}),Object(j.jsx)("td",{children:Object(j.jsx)(l.a,{variant:"danger",className:"btn",onClick:function(){return r.setState({new:null})},children:"Cancel"})})]},e):Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.emailUser}),Object(j.jsx)("td",{children:t.status}),Object(j.jsx)("td",{children:t.comment}),Object(j.jsx)("td",{children:t.dateCreated}),Object(j.jsx)("td",{children:t.contentId}),Object(j.jsx)("td",{children:Object(j.jsx)(l.a,{variant:"warning",className:"btn2",onClick:function(){return r.onEdit(e)},children:"Edit"})}),Object(j.jsx)("td",{children:Object(j.jsx)(l.a,{variant:"danger",className:"btn",onClick:function(){return r.onDelete(e)},children:"Delete"})})]},e)})):"TIDAQK A"})},r.onDelete=function(t){localStorage.setItem("idUser",r.state.message[t]._id);var e=localStorage.getItem("idUser");console.log(r.state.message[t]._id),console.log(e);var n={whereValues:{_id:e}};i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentRemove",data:n,headers:{"Content-Type":"application/json"}}).then((function(t){console.log(n),console.log(t.data),i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter"}).then((function(t){console.log(t.data.resultData),r.setState({message:t.data.resultData})})).catch((function(t){console.log(t+"ini eror LIST koment")}))})).catch((function(t){console.log(t+"ini delete komen")}))},r.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.daftarMessage()}},{key:"onEdit",value:function(t){this.setState({indexEdit:t}),this.setState({new:t}),console.log(this.state.indexEdit),console.log(t),console.log(this.state.new)}},{key:"render",value:function(){if(1==this.state.edit)return Object(j.jsx)(b.a,{to:"/cms/messaging-edit"});this.state.indexEdit;return Object(j.jsxs)("div",{className:"div",children:[Object(j.jsx)("h1",{children:"List Komentar"}),Object(j.jsx)("div",{className:"komentar",children:Object(j.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Email User"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{className:"h-email",children:"Komentar"}),Object(j.jsx)("th",{children:"Date Create"}),Object(j.jsx)("th",{children:"content Id"}),Object(j.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),n}(f.a.Component);e.default=p},147:function(t,e,n){"use strict";var a=n(5),r=n(34),o=n(90),c=n.n(o),s=n(2),i=n(93),l=n(0),u=s.forwardRef((function(t,e){var n=t.bsPrefix,o=t.className,s=t.striped,u=t.bordered,d=t.borderless,f=t.hover,b=t.size,j=t.variant,p=t.responsive,m=Object(r.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(i.a)(n,"table"),v=c()(o,h,j&&"".concat(h,"-").concat(j),b&&"".concat(h,"-").concat(b),s&&"".concat(h,"-striped"),u&&"".concat(h,"-bordered"),d&&"".concat(h,"-borderless"),f&&"".concat(h,"-hover")),g=Object(l.jsx)("table",Object(a.a)(Object(a.a)({},m),{},{className:v,ref:e}));if(p){var O="".concat(h,"-responsive");return"string"===typeof p&&(O="".concat(O,"-").concat(p)),Object(l.jsx)("div",{className:O,children:g})}return g}));e.a=u},90:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)){if(a.length){var c=r.apply(null,a);c&&t.push(c)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&t.push(s);else t.push(a.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));n(5);var a=n(2),r=(n(0),["xxl","xl","lg","md","sm","xs"]),o=a.createContext({prefixes:{},breakpoints:r});o.Consumer,o.Provider;function c(t,e){var n=Object(a.useContext)(o).prefixes;return t||n[e]||e}function s(){return"rtl"===Object(a.useContext)(o).dir}},94:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},95:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return r}))},96:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}))},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(101);function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(a.a)(t,e)}},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(96),r=n(102),o=n(103);function c(t){var e=Object(r.a)();return function(){var n,r=Object(a.a)(t);if(e){var c=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}}}]);
//# sourceMappingURL=14.fa74fc1a.chunk.js.map