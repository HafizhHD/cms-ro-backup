/*! For license information please see 21.7b845069.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[21],{100:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},105:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(115);function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(a.a)(e,t)}},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(105),r=n(116),c=n(119);function s(e){var t=Object(r.a)();return function(){var n,r=Object(a.a)(e);if(t){var s=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}},114:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},115:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return a}))},116:function(e,t,n){"use strict";function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return a}))},119:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return c}));var r=n(114);function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(r.a)(e):t}},1258:function(e,t,n){},1430:function(e,t,n){"use strict";n.r(t);var a=n(99),r=n(100),c=n(109),s=n(110),i=(n(1258),n(18)),o=n.n(i),u=n(151),l=n(172),d=n(2),f=n.n(d),b=n(9),j=n(3),p=n(6),h=n(0),m=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).daftarMessage=function(){o()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter",data:{limit:Number.MAX_SAFE_INTEGER}}).then((function(e){r.setState({message:e.data.resultData})})).catch((function(e){}))},r.onSave=function(e){localStorage.setItem("idUser",r.state.message[e]._id);var t={whereValues:{_id:localStorage.getItem("idUser")},newKeyValues:{destination:r.refs.email.value?r.refs.email.value:r.state.message[e].destination,messageSubject:r.refs.tempat.value?r.refs.tempat.value:r.state.message[e].messageSubject,messageContent:r.refs.deskripsi.value?r.refs.deskripsi.value:r.state.message[e].messageContent,scheduleTime:r.refs.alamat.value?r.refs.alamat.value:r.state.message[e].scheduleTime,mediaType:r.refs.status.value?r.refs.status.value:r.state.message[e].mediaType,category:r.refs.category.value?r.refs.category.value:r.state.message[e].category}};o()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastUpdate",data:t}).then((function(e){o()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter",data:{limit:Number.MAX_SAFE_INTEGER}}).then((function(e){r.setState({message:e.data.resultData}),r.setState({new:null})})).catch((function(e){}))})).catch((function(e){}))},r.showTableBody=function(){r.state.qty;return Object(h.jsx)("tbody",{children:r.state.message.map((function(e,t){return t==r.state.new?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsxs)("select",{className:"select",ref:"status",children:[Object(h.jsx)("option",{value:"Email",children:"Email"}),Object(h.jsx)("option",{value:"Device",children:"Device"}),Object(h.jsx)("option",{value:"Semua",children:"Semua"})]})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.scheduleTime,type:"datetime-local",ref:"alamat"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.destination,ref:"email"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.messageSubject,ref:"tempat"})}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{ref:"category",children:[Object(h.jsx)("option",{value:"Pembayaran",children:"Pembayaran"}),Object(h.jsx)("option",{value:"Pemberitahuan",children:"Pemberitahuan"}),Object(h.jsx)("option",{value:"Promosi",children:"Promosi"}),Object(h.jsx)("option",{value:"Informasi & Teknologi",children:"Informasi & Teknologi"}),Object(h.jsx)("option",{value:"Laporan",children:"Laporan"})]})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.messageContent,ref:"deskripsi"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"info",className:"btn998",onClick:function(){return r.onSave(t)},children:"Save"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"danger",className:"btn998",onClick:function(){return r.setState({new:null})},children:"Cancel"})})]},t):Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.mediaType}),Object(h.jsx)("td",{children:e.scheduleTime}),Object(h.jsx)("td",{children:e.destination}),Object(h.jsx)("td",{children:e.messageSubject}),Object(h.jsx)("td",{children:e.category}),Object(h.jsx)("td",{children:e.messageContent}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"warning",className:"btn998",onClick:function(){return r.onEdit(t)},children:"Edit"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"danger",className:"btn998",onClick:function(){return r.onDelete(t)},children:"Delete"})})]},t)}))})},r.onDelete=function(e){localStorage.setItem("idUser",r.state.message[e]._id);var t={whereValues:{_id:localStorage.getItem("idUser")}};o()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastRemove",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){o()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter",data:{limit:Number.MAX_SAFE_INTEGER}}).then((function(e){r.setState({message:e.data.resultData})})).catch((function(e){}))})).catch((function(e){}))},r.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.daftarMessage()}},{key:"onEdit",value:function(e){this.setState({indexEdit:e}),this.setState({new:e})}},{key:"render",value:function(){if(1==this.state.edit)return Object(h.jsx)(p.a,{to:"/cms/notifications/add"});this.state.indexEdit;return Object(h.jsxs)("div",{className:"div",children:[Object(h.jsxs)(b.b,{to:"/cms/notifications/add",id:"add_content",children:[Object(h.jsx)(j.w,{className:"IconAdd"}),Object(h.jsx)("span",{children:"Create New Notification"})]}),Object(h.jsx)("h1",{children:"List Notification"}),Object(h.jsx)("div",{className:"komentar",children:Object(h.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Media"}),Object(h.jsx)("th",{children:"Time"}),Object(h.jsx)("th",{className:"h-email",children:"Destination"}),Object(h.jsx)("th",{children:"Subject"}),Object(h.jsx)("th",{children:"Category"}),Object(h.jsx)("th",{children:"Message"}),Object(h.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),n}(f.a.Component);t.default=m},151:function(e,t,n){"use strict";var a=n(5),r=n(7),c=n(34),s=n(96),i=n.n(s),o=n(2),u=n(0),l=["as","disabled"];function d(e){var t=e.tagName,n=e.disabled,a=e.href,r=e.target,c=e.rel,s=e.onClick,i=e.tabIndex,o=void 0===i?0:i,u=e.type;t||(t=null!=a||null!=r||null!=c?"a":"button");var l={tagName:t};if("button"===t)return[{type:u||"button",disabled:n},l];var d=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(a||(a="#"),n&&(a=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:o,href:a,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?c:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},l]}var f=o.forwardRef((function(e,t){var n=e.as,a=e.disabled,c=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l),s=d(Object.assign({tagName:n,disabled:a},c)),i=Object(r.a)(s,2),o=i[0],f=i[1].tagName;return Object(u.jsx)(f,Object.assign({},c,o,{ref:t}))}));f.displayName="Button";var b=n(98),j=o.forwardRef((function(e,t){var n=e.as,s=e.bsPrefix,o=e.variant,l=e.size,f=e.active,j=e.className,p=Object(c.a)(e,["as","bsPrefix","variant","size","active","className"]),h=Object(b.a)(s,"btn"),m=d(Object(a.a)({tagName:n},p)),v=Object(r.a)(m,2),O=v[0],x=v[1].tagName;return Object(u.jsx)(x,Object(a.a)(Object(a.a)(Object(a.a)({},O),p),{},{ref:t,className:i()(j,h,f&&"active",o&&"".concat(h,"-").concat(o),l&&"".concat(h,"-").concat(l),p.href&&p.disabled&&"disabled")}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=j},172:function(e,t,n){"use strict";var a=n(5),r=n(34),c=n(96),s=n.n(c),i=n(2),o=n(98),u=n(0),l=i.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.striped,l=e.bordered,d=e.borderless,f=e.hover,b=e.size,j=e.variant,p=e.responsive,h=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(o.a)(n,"table"),v=s()(c,m,j&&"".concat(m,"-").concat(j),b&&"".concat(m,"-").concat(b),i&&"".concat(m,"-striped"),l&&"".concat(m,"-bordered"),d&&"".concat(m,"-borderless"),f&&"".concat(m,"-hover")),O=Object(u.jsx)("table",Object(a.a)(Object(a.a)({},h),{},{className:v,ref:t}));if(p){var x="".concat(m,"-responsive");return"string"===typeof p&&(x="".concat(x,"-").concat(p)),Object(u.jsx)("div",{className:x,children:O})}return O}));t.a=l},96:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&e.push(s)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));n(5);var a=n(2),r=(n(0),["xxl","xl","lg","md","sm","xs"]),c=a.createContext({prefixes:{},breakpoints:r});c.Consumer,c.Provider;function s(e,t){var n=Object(a.useContext)(c).prefixes;return e||n[t]||t}function i(){return"rtl"===Object(a.useContext)(c).dir}},99:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=21.7b845069.chunk.js.map