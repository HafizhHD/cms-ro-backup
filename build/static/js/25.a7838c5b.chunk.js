/*! For license information please see 25.a7838c5b.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[25],{100:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},101:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},102:function(e,t,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return r}))},103:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return s}));var a=n(100);function s(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}},118:function(e,t,n){"use strict";var r=n(5),a=n(10),s=n(34),o=n(90),c=n.n(o),i=n(2),u=n(0),l=["as","disabled"];function d(e){var t=e.tagName,n=e.disabled,r=e.href,a=e.target,s=e.rel,o=e.onClick,c=e.tabIndex,i=void 0===c?0:c,u=e.type;t||(t=null!=r||null!=a||null!=s?"a":"button");var l={tagName:t};if("button"===t)return[{type:u||"button",disabled:n},l];var d=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==o||o(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:i,href:r,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?s:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},l]}var f=i.forwardRef((function(e,t){var n=e.as,r=e.disabled,s=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l),o=d(Object.assign({tagName:n,disabled:r},s)),c=Object(a.a)(o,2),i=c[0],f=c[1].tagName;return Object(u.jsx)(f,Object.assign({},s,i,{ref:t}))}));f.displayName="Button";var b=n(93),p=i.forwardRef((function(e,t){var n=e.as,o=e.bsPrefix,i=e.variant,l=e.size,f=e.active,p=e.className,j=Object(s.a)(e,["as","bsPrefix","variant","size","active","className"]),h=Object(b.a)(o,"btn"),m=d(Object(r.a)({tagName:n},j)),v=Object(a.a)(m,2),O=v[0],g=v[1].tagName;return Object(u.jsx)(g,Object(r.a)(Object(r.a)(Object(r.a)({},O),j),{},{ref:t,className:c()(p,h,f&&"active",i&&"".concat(h,"-").concat(i),l&&"".concat(h,"-").concat(l),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=p},1229:function(e,t,n){},1399:function(e,t,n){"use strict";n.r(t);var r=n(94),a=n(95),s=n(97),o=n(98),c=(n(1229),n(18)),i=n.n(c),u=n(118),l=n(147),d=n(2),f=n.n(d),b=n(0),p=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).daftarMessage=function(){i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/userFilter",data:{whereKeyValues:{packageId:"com.byasia.ruangortu"}}}).then((function(e){console.log(e.data.users),a.setState({message:e.data.users})})).catch((function(e){console.log(e+"ini eror LIST Users")}))},a.onSave=function(e){localStorage.setItem("idUser",a.state.message[e]._id);var t=localStorage.getItem("idUser");console.log(t),console.log(a.state.message[e].nameUser);var n={whereValues:{_id:t},newValues:{phoneNumber:a.refs.email.value?a.refs.email.value:a.state.message[e].phoneNumber,dateCreated:a.state.message[e].dateCreated.split("T")[0],userType:a.refs.deskripsi.value?a.refs.deskripsi.value:a.state.message[e].userType,nameUser:a.refs.alamat.value?a.refs.alamat.value:a.state.message[e].nameUser,emailUser:a.refs.status.value?a.refs.status.value:a.state.message[e].emailUser,status:a.refs.new.value?a.refs.new.value:a.state.message[e].status}};i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/edit",data:n}).then((function(e){console.log(e.data.users);i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/userFilter",data:{whereKeyValues:{packageId:"com.byasia.ruangortu"}}}).then((function(e){console.log(e.data.users),a.setState({message:e.data.users}),a.setState({new:null})})).catch((function(e){console.log(e+"ini eror LIST Users")}))})).catch((function(e){console.log(e+"ini eror edit BC")}))},a.showTableBody=function(){a.state.qty;return Object(b.jsx)("tbody",{children:a.state.message.map((function(e,t){return t==a.state.new?Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",placeholder:e.emailUser,ref:"status"})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{placeholder:e.nameUser,ref:"alamat"})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{placeholder:e.phoneNumber,ref:"email"})}),Object(b.jsx)("td",{children:e.dateCreated.split("T")[0]}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{placeholder:e.userType,ref:"deskripsi"})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{placeholder:e.status,ref:"new"})}),Object(b.jsx)("td",{children:Object(b.jsx)(u.a,{variant:"info",className:"btn2",onClick:function(){return a.onSave(t)},children:"Save"})}),Object(b.jsx)("td",{children:Object(b.jsx)(u.a,{variant:"danger",className:"btn",onClick:function(){return a.setState({new:null})},children:"Cancel"})})]},t):Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.emailUser}),Object(b.jsx)("td",{children:e.nameUser}),Object(b.jsx)("td",{children:e.phoneNumber}),Object(b.jsx)("td",{children:e.dateCreated.split("T")[0]}),Object(b.jsx)("td",{children:e.userType}),Object(b.jsx)("td",{children:e.status}),Object(b.jsx)("td",{children:Object(b.jsx)(u.a,{variant:"warning",className:"btn2",onClick:function(){return a.onEdit(t)},children:"Edit"})}),Object(b.jsx)("td",{children:Object(b.jsx)(u.a,{variant:"danger",className:"btn",onClick:function(){return a.onDelete(t)},children:"Delete"})})]},t)}))})},a.onDelete=function(e){localStorage.setItem("idUser",a.state.message[e]._id);var t=localStorage.getItem("idUser");console.log(a.state.message[e]._id),console.log(t);var n={userId:t};i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/remove",data:n,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("suces delete"),console.log(e.data);i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/user/userFilter",data:{whereKeyValues:{packageId:"com.byasia.ruangortu"}}}).then((function(e){console.log(e.data.users),a.setState({message:e.data.users})})).catch((function(e){console.log(e+"ini eror LIST Users")}))})).catch((function(e){console.log(e+"ini delete user")}))},a.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.daftarMessage()}},{key:"onEdit",value:function(e){this.setState({new:e}),console.log(e),console.log(this.state.new)}},{key:"render",value:function(){this.state.indexEdit;return Object(b.jsxs)("div",{className:"div",children:[Object(b.jsx)("h1",{children:"Edit User"}),Object(b.jsx)("div",{className:"komentar",children:Object(b.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Nama"}),Object(b.jsx)("th",{className:"h-email",children:"No Telp"}),Object(b.jsx)("th",{children:"Tgl Register"}),Object(b.jsx)("th",{children:"Tipe User"}),Object(b.jsx)("th",{children:"Status User"}),Object(b.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),n}(f.a.Component);t.default=p},147:function(e,t,n){"use strict";var r=n(5),a=n(34),s=n(90),o=n.n(s),c=n(2),i=n(93),u=n(0),l=c.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,c=e.striped,l=e.bordered,d=e.borderless,f=e.hover,b=e.size,p=e.variant,j=e.responsive,h=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(i.a)(n,"table"),v=o()(s,m,p&&"".concat(m,"-").concat(p),b&&"".concat(m,"-").concat(b),c&&"".concat(m,"-striped"),l&&"".concat(m,"-bordered"),d&&"".concat(m,"-borderless"),f&&"".concat(m,"-hover")),O=Object(u.jsx)("table",Object(r.a)(Object(r.a)({},h),{},{className:v,ref:t}));if(j){var g="".concat(m,"-responsive");return"string"===typeof j&&(g="".concat(g,"-").concat(j)),Object(u.jsx)("div",{className:g,children:O})}return O}));t.a=l},90:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));n(5);var r=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),s=r.createContext({prefixes:{},breakpoints:a});s.Consumer,s.Provider;function o(e,t){var n=Object(r.useContext)(s).prefixes;return e||n[t]||t}function c(){return"rtl"===Object(r.useContext)(s).dir}},94:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},95:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},96:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(101);function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(96),a=n(102),s=n(103);function o(e){var t=Object(a.a)();return function(){var n,a=Object(r.a)(e);if(t){var o=Object(r.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}}}]);
//# sourceMappingURL=25.a7838c5b.chunk.js.map