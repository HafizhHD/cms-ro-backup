/*! For license information please see 22.92a69507.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[22],{100:function(t,e,n){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return a}))},101:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return a}))},102:function(t,e,n){"use strict";function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return a}))},103:function(t,e,n){"use strict";function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var r=n(100);function o(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?Object(r.a)(t):e}},1208:function(t,e,n){},122:function(t,e,n){"use strict";var a=n(5),r=n(10),o=n(34),c=n(91),i=n.n(c),s=n(2),u=n(0),l=["as","disabled"];function d(t){var e=t.tagName,n=t.disabled,a=t.href,r=t.target,o=t.rel,c=t.onClick,i=t.tabIndex,s=void 0===i?0:i,u=t.type;e||(e=null!=a||null!=r||null!=o?"a":"button");var l={tagName:e};if("button"===e)return[{type:u||"button",disabled:n},l];var d=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(a))&&t.preventDefault(),n?t.stopPropagation():null==c||c(t)};return"a"===e&&(a||(a="#"),n&&(a=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:s,href:a,target:"a"===e?r:void 0,"aria-disabled":n||void 0,rel:"a"===e?o:void 0,onClick:d,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),d(t))}},l]}var f=s.forwardRef((function(t,e){var n=t.as,a=t.disabled,o=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,l),c=d(Object.assign({tagName:n,disabled:a},o)),i=Object(r.a)(c,2),s=i[0],f=i[1].tagName;return Object(u.jsx)(f,Object.assign({},o,s,{ref:e}))}));f.displayName="Button";var b=n(92),p=s.forwardRef((function(t,e){var n=t.as,c=t.bsPrefix,s=t.variant,l=t.size,f=t.active,p=t.className,j=Object(o.a)(t,["as","bsPrefix","variant","size","active","className"]),h=Object(b.a)(c,"btn"),m=d(Object(a.a)({tagName:n},j)),v=Object(r.a)(m,2),g=v[0],O=v[1].tagName;return Object(u.jsx)(O,Object(a.a)(Object(a.a)(Object(a.a)({},g),j),{},{ref:e,className:i()(p,h,f&&"active",s&&"".concat(h,"-").concat(s),l&&"".concat(h,"-").concat(l),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=p},1374:function(t,e,n){"use strict";n.r(e);var a=n(93),r=n(94),o=n(97),c=n(98),i=(n(1208),n(18)),s=n.n(i),u=n(122),l=n(156),d=n(2),f=n.n(d),b=n(7),p=n(3),j=n(6),h=n(0),m=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).daftarMessage=function(){s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/audianceTargetFilter"}).then((function(t){console.log(t.data.Data),r.setState({message:t.data.Data})})).catch((function(t){console.log(t+"ini eror LIST AUDIENCE")}))},r.onSave=function(t){localStorage.setItem("idUser",r.state.message[t]._id);var e=localStorage.getItem("idUser");console.log(e),console.log(r.state.message[t].audianceName);var n={whereValues:{_id:e},newKeyValues:{audianceName:r.refs.alamat.value?r.refs.alamat.value:r.state.message[t].audianceName,dateCreated:r.refs.email.value?r.refs.email.value:r.state.message[t].dateCreated}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/audianceTargetUpdate",data:n}).then((function(t){console.log(t.data),console.log(t.data),s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/audianceTargetFilter"}).then((function(t){console.log(t.data.Data),r.setState({message:t.data.Data}),r.setState({new:null})})).catch((function(t){console.log(t+"ini eror LIST AUDIENCE")}))})).catch((function(t){console.log(t+"ini eror edit BC")}))},r.showTableBody=function(){r.state.qty;return Object(h.jsx)("tbody",{children:r.state.message.map((function(t,e){return e==r.state.new?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e+1}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:t.audianceName,ref:"alamat"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:t.dateCreated,type:"datetime-local",ref:"email"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"info",className:"btn2",onClick:function(){return r.onSave(e)},children:"Save"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"danger",className:"btn",onClick:function(){return r.setState({new:null})},children:"Cancel"})})]},e):Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e+1}),Object(h.jsx)("td",{children:t.audianceName}),Object(h.jsx)("td",{children:t.dateCreated}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"warning",className:"btn2",onClick:function(){return r.onEdit(e)},children:"Edit"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"danger",className:"btn",onClick:function(){return r.onDelete(e)},children:"Delete"})})]},e)}))})},r.onDelete=function(t){localStorage.setItem("idUser",r.state.message[t]._id);var e=localStorage.getItem("idUser");console.log(r.state.message[t]._id),console.log(e);var n={whereValues:{_id:e}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/audianceTargetRemove",data:n,headers:{"Content-Type":"application/json"}}).then((function(t){console.log(n),console.log(t.data),s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/audianceTargetFilter"}).then((function(t){console.log(t.data.Data),r.setState({message:t.data.Data})})).catch((function(t){console.log(t+"ini eror LIST AUDIENCE")}))})).catch((function(t){console.log(t+"ini delete broadcast")}))},r.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.daftarMessage()}},{key:"onEdit",value:function(t){this.setState({indexEdit:t}),this.setState({new:t}),console.log(this.state.indexEdit),console.log(t),console.log(this.state.new)}},{key:"render",value:function(){if(1==this.state.edit)return Object(h.jsx)(j.a,{to:"/cms/messaging-edit"});this.state.indexEdit;return Object(h.jsxs)("div",{className:"div",children:[Object(h.jsxs)(b.b,{to:"/tools/setting-addtopik",id:"add_content",children:[Object(h.jsx)(p.t,{className:"IconAdd"}),Object(h.jsx)("span",{children:"Create New Audience"})]}),Object(h.jsx)("h1",{children:"List Audience"}),Object(h.jsx)("div",{className:"komentar",children:Object(h.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"No"}),Object(h.jsx)("th",{children:"Audience Name"}),Object(h.jsx)("th",{className:"h-email",children:"Date Create"}),Object(h.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),n}(f.a.Component);e.default=m},156:function(t,e,n){"use strict";var a=n(5),r=n(34),o=n(91),c=n.n(o),i=n(2),s=n(92),u=n(0),l=i.forwardRef((function(t,e){var n=t.bsPrefix,o=t.className,i=t.striped,l=t.bordered,d=t.borderless,f=t.hover,b=t.size,p=t.variant,j=t.responsive,h=Object(r.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(s.a)(n,"table"),v=c()(o,m,p&&"".concat(m,"-").concat(p),b&&"".concat(m,"-").concat(b),i&&"".concat(m,"-striped"),l&&"".concat(m,"-bordered"),d&&"".concat(m,"-borderless"),f&&"".concat(m,"-hover")),g=Object(u.jsx)("table",Object(a.a)(Object(a.a)({},h),{},{className:v,ref:e}));if(j){var O="".concat(m,"-responsive");return"string"===typeof j&&(O="".concat(O,"-").concat(j)),Object(u.jsx)("div",{className:O,children:g})}return g}));e.a=l},91:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)){if(a.length){var c=r.apply(null,a);c&&t.push(c)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&t.push(i);else t.push(a.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));n(5);var a=n(2),r=(n(0),["xxl","xl","lg","md","sm","xs"]),o=a.createContext({prefixes:{},breakpoints:r});o.Consumer,o.Provider;function c(t,e){var n=Object(a.useContext)(o).prefixes;return t||n[e]||e}function i(){return"rtl"===Object(a.useContext)(o).dir}},93:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},94:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return r}))},96:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}))},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(101);function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(a.a)(t,e)}},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(96),r=n(102),o=n(103);function c(t){var e=Object(r.a)();return function(){var n,r=Object(a.a)(t);if(e){var c=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}}}]);
//# sourceMappingURL=22.92a69507.chunk.js.map