/*! For license information please see 22.31f15e88.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[22],{100:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}a.d(t,"a",(function(){return n}))},105:function(e,t,a){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return r}))},109:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(115);function n(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(105),n=a(116),c=a(119);function i(e){var t=Object(n.a)();return function(){var a,n=Object(r.a)(e);if(t){var i=Object(r.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}},114:function(e,t,a){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return r}))},115:function(e,t,a){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,"a",(function(){return r}))},116:function(e,t,a){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}a.d(t,"a",(function(){return r}))},119:function(e,t,a){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.d(t,"a",(function(){return c}));var n=a(114);function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(n.a)(e):t}},1277:function(e,t,a){},1448:function(e,t,a){"use strict";a.r(t);var r=a(99),n=a(100),c=a(109),i=a(110),o=(a(1277),a(18)),s=a.n(o),u=a(151),l=a(172),d=a(2),f=a.n(d),b=a(8),p=a(3),j=a(6),h=a(0),m=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).daftarMessage=function(){var e={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).cobrandEmail},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:e}).then((function(e){n.setState({message:e.data.programs})})).catch((function(e){}))},n.onSave=function(e){localStorage.setItem("idUser",n.state.message[e]._id);var t={whereValues:{_id:localStorage.getItem("idUser")},newValues:{programName:n.refs.programName.value?n.refs.programName.value:n.state.message[e].programName,ProgramDescription:n.refs.ProgramDescription.value?n.refs.ProgramDescription.value:n.state.message[e].ProgramDescription,startDate:n.refs.startDate.value?n.refs.startDate.value:n.state.message[e].startDate,endDate:n.refs.endDate.value?n.refs.endDate.value:n.state.message[e].endDate,category:n.refs.category.value?n.refs.category.value:n.state.message[e].category,targetAudiance:n.refs.targetAudiance.value?[n.refs.targetAudiance.value]:[n.state.message[e].targetAudiance]}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programUpdate",data:t}).then((function(e){var t={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).cobrandEmail},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:t}).then((function(e){n.setState({message:e.data.programs}),n.setState({new:null})})).catch((function(e){}))})).catch((function(e){}))},n.showTableBody=function(){n.state.qty;return Object(h.jsx)("tbody",{children:n.state.message.map((function(e,t){return t==n.state.new?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",placeholder:e.ProgramDescription,ref:"ProgramDescription"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.programName,ref:"programName"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.startDate,type:"datetime-local",ref:"startDate"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.endDate,type:"datetime-local",ref:"endDate"})}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{ref:"category",placeholder:e.category,children:[Object(h.jsx)("option",{value:"Pendidikan Agama",children:"Pendidikan Agama"}),Object(h.jsx)("option",{value:"Pengetahuan Siswa Formal",children:"Pengetahuan Siswa Formal"}),Object(h.jsx)("option",{value:"Pengetahuan Siswa Umum",children:"Pengetahuan Siswa Umum"}),Object(h.jsx)("option",{value:"Informasi & Teknologi",children:"Informasi & Teknologi"}),Object(h.jsx)("option",{value:"Program Pilihan",children:"Program Pilihan"})]})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{placeholder:e.targetAudiance,ref:"targetAudiance"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"info",className:"btn2",onClick:function(){return n.onSave(t)},children:"Save"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"danger",className:"btn",onClick:function(){return n.setState({new:null})},children:"Cancel"})})]},t):Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.ProgramDescription}),Object(h.jsx)("td",{children:e.programName}),Object(h.jsx)("td",{children:e.startDate.split("T")[0]}),Object(h.jsx)("td",{children:e.endDate?e.endDate.split("T")[0]:e.endDate}),Object(h.jsx)("td",{children:e.category}),Object(h.jsx)("td",{children:e.targetAudiance}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"warning",className:"btn2",onClick:function(){return n.onEdit(t)},children:"Edit"})}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"danger",className:"btn",onClick:function(){return n.onDelete(t)},children:"Delete"})})]},t)}))})},n.onDelete=function(e){localStorage.setItem("idUser",n.state.message[e]._id);var t={whereValues:{_id:localStorage.getItem("idUser")}};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programRemove",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){var t={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).cobrandEmail},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER};s()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:t}).then((function(e){n.setState({message:e.data.programs})})).catch((function(e){}))})).catch((function(e){}))},n.state={userData:[],kirimforum:[],message:[],indexEdit:null,edit:!1,new:null,dataUpdate:[],send:!1,destiemail:"",kategori:""},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.daftarMessage(),document.querySelectorAll(".shapes3").forEach((function(t){t.addEventListener("click",(function(t){t.target.checked&&e.setState({kategori:t.target.value})}))})),document.querySelectorAll(".shapes2").forEach((function(t){t.addEventListener("click",(function(t){t.target.checked&&e.setState({destiemail:t.target.value})}))}))}},{key:"onEdit",value:function(e){this.setState({indexEdit:e}),this.setState({new:e})}},{key:"render",value:function(){if(1==this.state.edit)return Object(h.jsx)(j.a,{to:"/cms/notifications-edit"});this.state.indexEdit;return Object(h.jsxs)("div",{className:"div",children:[Object(h.jsxs)(b.b,{to:"/cms/program/revisilist-add",id:"add_content",children:[Object(h.jsx)(p.w,{className:"IconAdd"}),Object(h.jsx)("span",{children:"Create New Program"})]}),Object(h.jsx)("h1",{children:"List Program"}),Object(h.jsx)("div",{className:"komentar",children:Object(h.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Program Description"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{className:"h-email",children:"Start Date"}),Object(h.jsx)("th",{children:"End Date"}),Object(h.jsx)("th",{children:"Category Program"}),Object(h.jsx)("th",{children:"Target Audience"}),Object(h.jsx)("th",{colSpan:2,children:"Action"})]})}),this.showTableBody()]})})]})}}]),a}(f.a.Component);t.default=m},151:function(e,t,a){"use strict";var r=a(5),n=a(7),c=a(34),i=a(96),o=a.n(i),s=a(2),u=a(0),l=["as","disabled"];function d(e){var t=e.tagName,a=e.disabled,r=e.href,n=e.target,c=e.rel,i=e.onClick,o=e.tabIndex,s=void 0===o?0:o,u=e.type;t||(t=null!=r||null!=n||null!=c?"a":"button");var l={tagName:t};if("button"===t)return[{type:u||"button",disabled:a},l];var d=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),a?e.stopPropagation():null==i||i(e)};return"a"===t&&(r||(r="#"),a&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:a?void 0:s,href:r,target:"a"===t?n:void 0,"aria-disabled":a||void 0,rel:"a"===t?c:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},l]}var f=s.forwardRef((function(e,t){var a=e.as,r=e.disabled,c=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l),i=d(Object.assign({tagName:a,disabled:r},c)),o=Object(n.a)(i,2),s=o[0],f=o[1].tagName;return Object(u.jsx)(f,Object.assign({},c,s,{ref:t}))}));f.displayName="Button";var b=a(98),p=s.forwardRef((function(e,t){var a=e.as,i=e.bsPrefix,s=e.variant,l=e.size,f=e.active,p=e.className,j=Object(c.a)(e,["as","bsPrefix","variant","size","active","className"]),h=Object(b.a)(i,"btn"),m=d(Object(r.a)({tagName:a},j)),g=Object(n.a)(m,2),v=g[0],O=g[1].tagName;return Object(u.jsx)(O,Object(r.a)(Object(r.a)(Object(r.a)({},v),j),{},{ref:t,className:o()(p,h,f&&"active",s&&"".concat(h,"-").concat(s),l&&"".concat(h,"-").concat(l),j.href&&j.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=p},172:function(e,t,a){"use strict";var r=a(5),n=a(34),c=a(96),i=a.n(c),o=a(2),s=a(98),u=a(0),l=o.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.striped,l=e.bordered,d=e.borderless,f=e.hover,b=e.size,p=e.variant,j=e.responsive,h=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(s.a)(a,"table"),g=i()(c,m,p&&"".concat(m,"-").concat(p),b&&"".concat(m,"-").concat(b),o&&"".concat(m,"-striped"),l&&"".concat(m,"-bordered"),d&&"".concat(m,"-borderless"),f&&"".concat(m,"-hover")),v=Object(u.jsx)("table",Object(r.a)(Object(r.a)({},h),{},{className:g,ref:t}));if(j){var O="".concat(m,"-responsive");return"string"===typeof j&&(O="".concat(O,"-").concat(j)),Object(u.jsx)("div",{className:O,children:v})}return v}));t.a=l},96:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var o in r)a.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));a(5);var r=a(2),n=(a(0),["xxl","xl","lg","md","sm","xs"]),c=r.createContext({prefixes:{},breakpoints:n});c.Consumer,c.Provider;function i(e,t){var a=Object(r.useContext)(c).prefixes;return e||a[t]||t}function o(){return"rtl"===Object(r.useContext)(c).dir}},99:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=22.31f15e88.chunk.js.map