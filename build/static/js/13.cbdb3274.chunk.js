/*! For license information please see 13.cbdb3274.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[13],{101:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},102:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return a}))},103:function(e,t,n){"use strict";function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return a}))},104:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return c}));var r=n(101);function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(r.a)(e):t}},119:function(e,t,n){"use strict";var a=n(5),r=n(10),c=n(34),s=n(91),o=n.n(s),i=n(2),l=n(0),d=["as","disabled"];function u(e){var t=e.tagName,n=e.disabled,a=e.href,r=e.target,c=e.rel,s=e.onClick,o=e.tabIndex,i=void 0===o?0:o,l=e.type;t||(t=null!=a||null!=r||null!=c?"a":"button");var d={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},d];var u=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(a||(a="#"),n&&(a=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:i,href:a,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?c:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},d]}var b=i.forwardRef((function(e,t){var n=e.as,a=e.disabled,c=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,d),s=u(Object.assign({tagName:n,disabled:a},c)),o=Object(r.a)(s,2),i=o[0],b=o[1].tagName;return Object(l.jsx)(b,Object.assign({},c,i,{ref:t}))}));b.displayName="Button";var f=n(94),j=i.forwardRef((function(e,t){var n=e.as,s=e.bsPrefix,i=e.variant,d=e.size,b=e.active,j=e.className,h=Object(c.a)(e,["as","bsPrefix","variant","size","active","className"]),p=Object(f.a)(s,"btn"),m=u(Object(a.a)({tagName:n},h)),O=Object(r.a)(m,2),v=O[0],x=O[1].tagName;return Object(l.jsx)(x,Object(a.a)(Object(a.a)(Object(a.a)({},v),h),{},{ref:t,className:o()(j,p,b&&"active",i&&"".concat(p,"-").concat(i),d&&"".concat(p,"-").concat(d),h.href&&h.disabled&&"disabled")}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=j},1222:function(e,t,n){},130:function(e,t,n){"use strict";var a=n(2),r=(n(133),n(0));function c(e){var t=e.placeholder,n=e.type,a=e.onChange,c=e.onBlur,s=e.value,o=e.className,i=e.message,l=e.name,d=e.min,u=e.disabled,b=e.isError;return"textarea"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("textarea",{name:l,id:l,className:o,placeholder:t,onChange:a,onBlur:c,value:s,disabled:u}),b&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:i})})]}):"date"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:o,type:n,placeholder:t,onChange:a,onBlur:c,value:s,min:d,max:"9999-12-31",disabled:u}),b&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:i})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:o,type:n,placeholder:t,onChange:a,onBlur:c,value:s,disabled:u}),b&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:i})})]})}t.a=Object(a.memo)(c)},133:function(e,t,n){},1392:function(e,t,n){"use strict";n.r(t);var a=n(95),r=n(96),c=n(98),s=n(99),o=(n(1222),n(18)),i=n.n(o),l=n(119),d=n(148),u=n(2),b=n.n(u),f=n(7),j=n(3),h=n(6),p=(n(337),n(130),n(0)),m=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).daftarMessage=function(){i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneFilter"}).then((function(e){console.log(e.data.Data),r.setState({message:e.data.Data})})).catch((function(e){console.log(e+"ini eror LIST redzone")}))},r.onSave=function(e){localStorage.setItem("idUser",r.state.message[e]._id);var t=localStorage.getItem("idUser");console.log(t),console.log(r.state.message[e].cobrandEmail);var n={whereValues:{_id:t},newKeyValues:{cobrandEmail:r.refs.status.value?r.refs.status.value:r.state.message[e].cobrandEmail,address:r.refs.tempat.value?r.refs.tempat.value:r.state.message[e].address,location:r.refs.alamat.value?r.refs.alamat.value:r.state.message[e].location,redZoneStatus:r.refs.email.value?r.refs.email.value:r.state.message[e].redZoneStatus}};i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneUpdate",data:n}).then((function(e){console.log(e.data),i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneFilter"}).then((function(e){console.log(e.data.Data),r.setState({message:e.data.Data}),r.setState({new:null})})).catch((function(e){console.log(e+"ini eror LIST redzone")}))})).catch((function(e){console.log(e+"ini eror edit redzone")}))},r.showTableBody=function(){r.state.qty;return Object(p.jsx)("tbody",{children:r.state.message.map((function(e,t){return t==r.state.new?Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",placeholder:e.cobrandEmail,ref:"status"})}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{placeholder:e.location,ref:"alamat"})}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{placeholder:e.redZoneStatus,ref:"email"})}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{placeholder:e.address,ref:"tempat"})}),Object(p.jsx)("td",{children:Object(p.jsx)(l.a,{variant:"info",className:"btn2",onClick:function(){return r.onSave(t)},children:"Save"})}),Object(p.jsx)("td",{children:Object(p.jsx)(l.a,{variant:"danger",className:"btn",onClick:function(){return r.setState({new:null})},children:"Cancel"})})]},t):Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{children:e.cobrandEmail}),Object(p.jsx)("td",{children:e.location}),Object(p.jsx)("td",{children:e.redZoneStatus}),Object(p.jsx)("td",{children:e.address}),Object(p.jsx)("td",{children:Object(p.jsx)(l.a,{variant:"warning",className:"btn2",onClick:function(){return r.onEdit(t)},children:"Edit"})}),Object(p.jsx)("td",{children:Object(p.jsx)(l.a,{variant:"danger",className:"btn",onClick:function(){return r.onDelete(t)},children:"Delete"})})]},t)}))})},r.onDelete=function(e){localStorage.setItem("idUser",r.state.message[e]._id);var t=localStorage.getItem("idUser");console.log(r.state.message[e]._id),console.log(t);var n={whereValues:{_id:t}};i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneRemove",data:n,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(n),console.log(e.data),i()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneFilter"}).then((function(e){console.log(e.data.Data),r.setState({message:e.data.Data}),r.setState({new:null})})).catch((function(e){console.log(e+"ini eror LIST redzone")}))})).catch((function(e){console.log(e+"ini delete broadcast")}))},r.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:(!1).valueOf,mapSeacrh:""},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.daftarMessage()}},{key:"onEdit",value:function(e){this.setState({new:e}),console.log(e),console.log(this.state.new)}},{key:"render",value:function(){if(1==this.state.edit)return Object(p.jsx)(h.a,{to:"/cms/messaging-edit"});this.state.indexEdit;return Object(p.jsxs)("div",{className:"div",children:[Object(p.jsxs)(f.b,{to:"/cms/redzone/add",id:"add_content",children:[Object(p.jsx)(j.t,{className:"IconAdd"}),Object(p.jsx)("span",{children:"Create New Redzone"})]}),Object(p.jsx)("h1",{children:"List Redzone"}),Object(p.jsx)("div",{className:"komentar",children:Object(p.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"No"}),Object(p.jsx)("th",{children:"Cobrand Email"}),Object(p.jsx)("th",{className:"h-email",children:"Location"}),Object(p.jsx)("th",{children:"Status"}),Object(p.jsx)("th",{children:"Address"}),Object(p.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),n}(b.a.Component);t.default=m},148:function(e,t,n){"use strict";var a=n(5),r=n(34),c=n(91),s=n.n(c),o=n(2),i=n(94),l=n(0),d=o.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,o=e.striped,d=e.bordered,u=e.borderless,b=e.hover,f=e.size,j=e.variant,h=e.responsive,p=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(i.a)(n,"table"),O=s()(c,m,j&&"".concat(m,"-").concat(j),f&&"".concat(m,"-").concat(f),o&&"".concat(m,"-striped"),d&&"".concat(m,"-bordered"),u&&"".concat(m,"-borderless"),b&&"".concat(m,"-hover")),v=Object(l.jsx)("table",Object(a.a)(Object(a.a)({},p),{},{className:O,ref:t}));if(h){var x="".concat(m,"-responsive");return"string"===typeof h&&(x="".concat(x,"-").concat(h)),Object(l.jsx)("div",{className:x,children:v})}return v}));t.a=d},337:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(2);var a=n(610),r=(n(18),n(485),n(0)),c=Object(a.c)({accessToken:"pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg"}),s="pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg";t.b=function(e){var t=e.search;return console.log(t),Object(r.jsx)(c,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"50vh"},center:t?t.center:[10,10],zoom:[11],children:Object(r.jsx)(a.b,{type:"symbol",id:"marker",layout:{"icon-image":"marker-15"},children:Object(r.jsx)(a.a,{coordinates:t?t.center:[5,5]})})})}},91:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&e.push(s)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var o in a)n.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));n(5);var a=n(2),r=(n(0),["xxl","xl","lg","md","sm","xs"]),c=a.createContext({prefixes:{},breakpoints:r});c.Consumer,c.Provider;function s(e,t){var n=Object(a.useContext)(c).prefixes;return e||n[t]||t}function o(){return"rtl"===Object(a.useContext)(c).dir}},97:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(102);function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(a.a)(e,t)}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(97),r=n(103),c=n(104);function s(e){var t=Object(r.a)();return function(){var n,r=Object(a.a)(e);if(t){var s=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}}}]);
//# sourceMappingURL=13.cbdb3274.chunk.js.map