/*! For license information please see 17.c5f823c2.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[17],{100:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},101:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return a}))},102:function(e,t,n){"use strict";function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return a}))},103:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return s}));var r=n(100);function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(r.a)(e):t}},121:function(e,t,n){"use strict";var a=n(5),r=n(10),s=n(34),o=n(90),c=n.n(o),i=n(2),l=n(0),u=["as","disabled"];function d(e){var t=e.tagName,n=e.disabled,a=e.href,r=e.target,s=e.rel,o=e.onClick,c=e.tabIndex,i=void 0===c?0:c,l=e.type;t||(t=null!=a||null!=r||null!=s?"a":"button");var u={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},u];var d=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),n?e.stopPropagation():null==o||o(e)};return"a"===t&&(a||(a="#"),n&&(a=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:i,href:a,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?s:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},u]}var f=i.forwardRef((function(e,t){var n=e.as,a=e.disabled,s=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,u),o=d(Object.assign({tagName:n,disabled:a},s)),c=Object(r.a)(o,2),i=c[0],f=c[1].tagName;return Object(l.jsx)(f,Object.assign({},s,i,{ref:t}))}));f.displayName="Button";var b=n(93),j=i.forwardRef((function(e,t){var n=e.as,o=e.bsPrefix,i=e.variant,u=e.size,f=e.active,j=e.className,p=Object(s.a)(e,["as","bsPrefix","variant","size","active","className"]),h=Object(b.a)(o,"btn"),m=d(Object(a.a)({tagName:n},p)),g=Object(r.a)(m,2),v=g[0],O=g[1].tagName;return Object(l.jsx)(O,Object(a.a)(Object(a.a)(Object(a.a)({},v),p),{},{ref:t,className:c()(j,h,f&&"active",i&&"".concat(h,"-").concat(i),u&&"".concat(h,"-").concat(u),p.href&&p.disabled&&"disabled")}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=j},1212:function(e,t,n){},1382:function(e,t,n){"use strict";n.r(t);var a=n(94),r=n(95),s=n(97),o=n(98),c=(n(1212),n(18)),i=n.n(c),l=n(121),u=n(147),d=n(2),f=n.n(d),b=n(7),j=n(3),p=n(6),h=n(0),m=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).daftarMessage=function(){i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter"}).then((function(e){console.log(e.data.resultData),console.log(e.data),r.setState({message:e.data.resultData})})).catch((function(e){console.log(e+"ini eror LIST DISKUSI")}))},r.onSave=function(e){localStorage.setItem("idUser",r.state.message[e]._id);var t=localStorage.getItem("idUser");console.log(t),console.log(r.state.message[e].destination);var n={whereValues:{_id:t},newKeyValues:{destination:r.refs.email.value?r.refs.email.value:r.state.message[e].destination,messageSubject:r.refs.tempat.value?r.refs.tempat.value:r.state.message[e].messageSubject,messageContent:r.refs.deskripsi.value?r.refs.deskripsi.value:r.state.message[e].messageContent,scheduleTime:r.refs.alamat.value?r.refs.alamat.value:r.state.message[e].scheduleTime,mediaType:r.refs.status.value?r.refs.status.value:r.state.message[e].mediaType,category:r.refs.category.value?r.refs.category.value:r.state.message[e].category}};i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastUpdate",data:n}).then((function(e){console.log(e.data),console.log(e.data),i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter"}).then((function(e){console.log(e.data.resultData),console.log(e.data),r.setState({message:e.data.resultData}),r.setState({new:null})})).catch((function(e){console.log(e+"ini eror LIST DISKUSI")}))})).catch((function(e){console.log(e+"ini eror edit BC")}))},r.showTableBody=function(){r.state.qty;return Object(h.jsx)("tbody",{children:r.state.message.map((function(e,t){return t==r.state.new?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsxs)("select",{className:"select",ref:"status",children:[Object(h.jsx)("option",{value:"Email",children:"Email"}),Object(h.jsx)("option",{value:"Device",children:"Device"})]})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.scheduleTime,type:"datetime-local",ref:"alamat"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.destination,ref:"email"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.messageSubject,ref:"tempat"})}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{ref:"category",children:[Object(h.jsx)("option",{value:"Pembayaran",children:"Pembayaran"}),Object(h.jsx)("option",{value:"Pemberitahuan",children:"Pemberitahuan"}),Object(h.jsx)("option",{value:"Promosi",children:"Promosi"}),Object(h.jsx)("option",{value:"Informasi & Teknologi",children:"Informasi & Teknologi"}),Object(h.jsx)("option",{value:"Laporan",children:"Laporan"})]})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.messageContent,ref:"deskripsi"})}),Object(h.jsx)("td",{children:Object(h.jsx)(l.a,{variant:"info",className:"btn2",onClick:function(){return r.onSave(t)},children:"Save"})}),Object(h.jsx)("td",{children:Object(h.jsx)(l.a,{variant:"danger",className:"btn",onClick:function(){return r.setState({new:null})},children:"Cancel"})})]},t):Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.mediaType}),Object(h.jsx)("td",{children:e.scheduleTime}),Object(h.jsx)("td",{children:e.destination}),Object(h.jsx)("td",{children:e.messageSubject}),Object(h.jsx)("td",{children:e.category}),Object(h.jsx)("td",{children:e.messageContent}),Object(h.jsx)("td",{children:Object(h.jsx)(l.a,{variant:"warning",className:"btn2",onClick:function(){return r.onEdit(t)},children:"Edit"})}),Object(h.jsx)("td",{children:Object(h.jsx)(l.a,{variant:"danger",className:"btn",onClick:function(){return r.onDelete(t)},children:"Delete"})})]},t)}))})},r.onDelete=function(e){localStorage.setItem("idUser",r.state.message[e]._id);var t=localStorage.getItem("idUser");console.log(r.state.message[e]._id),console.log(t);var n={whereValues:{_id:t}};i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastRemove",data:n,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(n),console.log(e.data),i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/broadcastFilter"}).then((function(e){console.log(e.data.resultData),r.setState({message:e.data.resultData})})).catch((function(e){console.log(e+"ini eror LIST BC")}))})).catch((function(e){console.log(e+"ini delete broadcast")}))},r.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.daftarMessage()}},{key:"onEdit",value:function(e){this.setState({indexEdit:e}),this.setState({new:e}),console.log(this.state.indexEdit),console.log(e),console.log(this.state.new)}},{key:"render",value:function(){if(1==this.state.edit)return Object(h.jsx)(p.a,{to:"/cms/messaging-edit"});this.state.indexEdit;return Object(h.jsxs)("div",{className:"div",children:[Object(h.jsxs)(b.b,{to:"/cms/messaging-add",id:"add_content",children:[Object(h.jsx)(j.t,{className:"IconAdd"}),Object(h.jsx)("span",{children:"Create New Notification"})]}),Object(h.jsx)("h1",{children:"List Notification"}),Object(h.jsx)("div",{className:"komentar",children:Object(h.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Media"}),Object(h.jsx)("th",{children:"Time"}),Object(h.jsx)("th",{className:"h-email",children:"Destination"}),Object(h.jsx)("th",{children:"Subject"}),Object(h.jsx)("th",{children:"Category"}),Object(h.jsx)("th",{children:"Message"}),Object(h.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),n}(f.a.Component);t.default=m},147:function(e,t,n){"use strict";var a=n(5),r=n(34),s=n(90),o=n.n(s),c=n(2),i=n(93),l=n(0),u=c.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,c=e.striped,u=e.bordered,d=e.borderless,f=e.hover,b=e.size,j=e.variant,p=e.responsive,h=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(i.a)(n,"table"),g=o()(s,m,j&&"".concat(m,"-").concat(j),b&&"".concat(m,"-").concat(b),c&&"".concat(m,"-striped"),u&&"".concat(m,"-bordered"),d&&"".concat(m,"-borderless"),f&&"".concat(m,"-hover")),v=Object(l.jsx)("table",Object(a.a)(Object(a.a)({},h),{},{className:g,ref:t}));if(p){var O="".concat(m,"-responsive");return"string"===typeof p&&(O="".concat(O,"-").concat(p)),Object(l.jsx)("div",{className:O,children:v})}return v}));t.a=u},90:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var c in a)n.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));n(5);var a=n(2),r=(n(0),["xxl","xl","lg","md","sm","xs"]),s=a.createContext({prefixes:{},breakpoints:r});s.Consumer,s.Provider;function o(e,t){var n=Object(a.useContext)(s).prefixes;return e||n[t]||t}function c(){return"rtl"===Object(a.useContext)(s).dir}},94:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},95:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},96:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(101);function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(a.a)(e,t)}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(96),r=n(102),s=n(103);function o(e){var t=Object(r.a)();return function(){var n,r=Object(a.a)(e);if(t){var o=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}}}]);
//# sourceMappingURL=17.c5f823c2.chunk.js.map