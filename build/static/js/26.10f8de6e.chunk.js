/*! For license information please see 26.10f8de6e.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[26],{100:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return r}))},103:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}))},105:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(111);function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(a.a)(t,e)}},106:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(103),r=n(112),o=n(113);function c(t){var e=Object(r.a)();return function(){var n,r=Object(a.a)(t);if(e){var c=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}},108:function(t,e,n){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return a}))},111:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return a}))},112:function(t,e,n){"use strict";function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return a}))},113:function(t,e,n){"use strict";function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var r=n(108);function o(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?Object(r.a)(t):e}},1227:function(t,e,n){},1395:function(t,e,n){"use strict";n.r(e);var a=n(99),r=n(100),o=n(105),c=n(106),i=(n(1227),n(18)),s=n.n(i),l=n(142),u=n(157),d=n(2),f=n.n(d),b=n(7),p=n(3),j=n(6),h=n(0),m=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).daftarMessage=function(){s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/contentTopicFilter"}).then((function(t){console.log(t.data.Data),r.setState({message:t.data.Data})})).catch((function(t){console.log(t+"ini eror LIST Topic")}))},r.onSave=function(t){localStorage.setItem("idUser",r.state.message[t]._id);var e=localStorage.getItem("idUser");console.log(e),console.log(r.state.message[t].topicName);var n={whereValues:{_id:e},newKeyValues:{topicName:r.refs.alamat.value?r.refs.alamat.value:r.state.message[t].topicName,dateCreated:r.refs.email.value?r.refs.email.value:r.state.message[t].dateCreated}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/contentTopicUpdate",data:n}).then((function(t){console.log(t.data),console.log(t.data),s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/contentTopicFilter"}).then((function(t){console.log(t.data.Data),r.setState({message:t.data.Data}),r.setState({new:null})})).catch((function(t){console.log(t+"ini eror LIST Topic")}))})).catch((function(t){console.log(t+"ini eror edit topic")}))},r.showTableBody=function(){r.state.qty;return Object(h.jsx)("tbody",{children:r.state.message.map((function(t,e){return e==r.state.new?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e+1}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:t.topicName,ref:"alamat"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:t.dateCreated,type:"datetime-local",ref:"email"})}),Object(h.jsx)("td",{children:Object(h.jsx)(l.a,{variant:"info",className:"btn998",onClick:function(){return r.onSave(e)},children:"Save"})}),Object(h.jsx)("td",{children:Object(h.jsx)(l.a,{variant:"danger",className:"btn998",onClick:function(){return r.setState({new:null})},children:"Cancel"})})]},e):Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e+1}),Object(h.jsx)("td",{children:t.topicName}),Object(h.jsx)("td",{children:t.dateCreated}),Object(h.jsx)("td",{children:Object(h.jsx)(l.a,{variant:"warning",className:"btn998",onClick:function(){return r.onEdit(e)},children:"Edit"})}),Object(h.jsx)("td",{children:Object(h.jsx)(l.a,{variant:"danger",className:"btn998",onClick:function(){return r.onDelete(e)},children:"Delete"})})]},e)}))})},r.onDelete=function(t){localStorage.setItem("idUser",r.state.message[t]._id);var e=localStorage.getItem("idUser");console.log(r.state.message[t]._id),console.log(e);var n={whereValues:{_id:e}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/contentTopicRemove",data:n,headers:{"Content-Type":"application/json"}}).then((function(t){console.log(n),console.log(t.data),s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cms/contentTopicFilter"}).then((function(t){console.log(t.data.Data),r.setState({message:t.data.Data})})).catch((function(t){console.log(t+"ini eror LIST Topic")}))})).catch((function(t){console.log(t+"ini delete topic")}))},r.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.daftarMessage()}},{key:"onEdit",value:function(t){this.setState({new:t}),console.log(t),console.log(this.state.new)}},{key:"render",value:function(){if(1==this.state.edit)return Object(h.jsx)(j.a,{to:"/cms/notifications-edit"});this.state.indexEdit;return Object(h.jsxs)("div",{className:"div",children:[Object(h.jsxs)(b.b,{to:"/tools/setting/topic/add",id:"add_content",children:[Object(h.jsx)(p.v,{className:"IconAdd"}),Object(h.jsx)("span",{children:"Buat Topik Baru"})]}),Object(h.jsx)("h1",{children:"List Topik Artikel"}),Object(h.jsx)("div",{className:"komentar",children:Object(h.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"No"}),Object(h.jsx)("th",{children:"Topic Name"}),Object(h.jsx)("th",{className:"h-email",children:"Date Create"}),Object(h.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),n}(f.a.Component);e.default=m},142:function(t,e,n){"use strict";var a=n(5),r=n(9),o=n(34),c=n(94),i=n.n(c),s=n(2),l=n(0),u=["as","disabled"];function d(t){var e=t.tagName,n=t.disabled,a=t.href,r=t.target,o=t.rel,c=t.onClick,i=t.tabIndex,s=void 0===i?0:i,l=t.type;e||(e=null!=a||null!=r||null!=o?"a":"button");var u={tagName:e};if("button"===e)return[{type:l||"button",disabled:n},u];var d=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(a))&&t.preventDefault(),n?t.stopPropagation():null==c||c(t)};return"a"===e&&(a||(a="#"),n&&(a=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:s,href:a,target:"a"===e?r:void 0,"aria-disabled":n||void 0,rel:"a"===e?o:void 0,onClick:d,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),d(t))}},u]}var f=s.forwardRef((function(t,e){var n=t.as,a=t.disabled,o=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,u),c=d(Object.assign({tagName:n,disabled:a},o)),i=Object(r.a)(c,2),s=i[0],f=i[1].tagName;return Object(l.jsx)(f,Object.assign({},o,s,{ref:e}))}));f.displayName="Button";var b=n(98),p=s.forwardRef((function(t,e){var n=t.as,c=t.bsPrefix,s=t.variant,u=t.size,f=t.active,p=t.className,j=Object(o.a)(t,["as","bsPrefix","variant","size","active","className"]),h=Object(b.a)(c,"btn"),m=d(Object(a.a)({tagName:n},j)),v=Object(r.a)(m,2),O=v[0],g=v[1].tagName;return Object(l.jsx)(g,Object(a.a)(Object(a.a)(Object(a.a)({},O),j),{},{ref:e,className:i()(p,h,f&&"active",s&&"".concat(h,"-").concat(s),u&&"".concat(h,"-").concat(u),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=p},157:function(t,e,n){"use strict";var a=n(5),r=n(34),o=n(94),c=n.n(o),i=n(2),s=n(98),l=n(0),u=i.forwardRef((function(t,e){var n=t.bsPrefix,o=t.className,i=t.striped,u=t.bordered,d=t.borderless,f=t.hover,b=t.size,p=t.variant,j=t.responsive,h=Object(r.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(s.a)(n,"table"),v=c()(o,m,p&&"".concat(m,"-").concat(p),b&&"".concat(m,"-").concat(b),i&&"".concat(m,"-striped"),u&&"".concat(m,"-bordered"),d&&"".concat(m,"-borderless"),f&&"".concat(m,"-hover")),O=Object(l.jsx)("table",Object(a.a)(Object(a.a)({},h),{},{className:v,ref:e}));if(j){var g="".concat(m,"-responsive");return"string"===typeof j&&(g="".concat(g,"-").concat(j)),Object(l.jsx)("div",{className:g,children:O})}return O}));e.a=u},94:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)){if(a.length){var c=r.apply(null,a);c&&t.push(c)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&t.push(i);else t.push(a.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));n(5);var a=n(2),r=(n(0),["xxl","xl","lg","md","sm","xs"]),o=a.createContext({prefixes:{},breakpoints:r});o.Consumer,o.Provider;function c(t,e){var n=Object(a.useContext)(o).prefixes;return t||n[e]||e}function i(){return"rtl"===Object(a.useContext)(o).dir}},99:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=26.10f8de6e.chunk.js.map