/*! For license information please see 30.10133caf.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[30],{100:function(e,t,a){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return r}))},101:function(e,t,a){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,"a",(function(){return r}))},102:function(e,t,a){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}a.d(t,"a",(function(){return r}))},103:function(e,t,a){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.d(t,"a",(function(){return c}));var n=a(100);function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(n.a)(e):t}},122:function(e,t,a){"use strict";var r=a(5),n=a(10),c=a(34),i=a(90),s=a.n(i),o=a(2),l=a(0),u=["as","disabled"];function j(e){var t=e.tagName,a=e.disabled,r=e.href,n=e.target,c=e.rel,i=e.onClick,s=e.tabIndex,o=void 0===s?0:s,l=e.type;t||(t=null!=r||null!=n||null!=c?"a":"button");var u={tagName:t};if("button"===t)return[{type:l||"button",disabled:a},u];var j=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),a?e.stopPropagation():null==i||i(e)};return"a"===t&&(r||(r="#"),a&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:a?void 0:o,href:r,target:"a"===t?n:void 0,"aria-disabled":a||void 0,rel:"a"===t?c:void 0,onClick:j,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),j(e))}},u]}var b=o.forwardRef((function(e,t){var a=e.as,r=e.disabled,c=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,u),i=j(Object.assign({tagName:a,disabled:r},c)),s=Object(n.a)(i,2),o=s[0],b=s[1].tagName;return Object(l.jsx)(b,Object.assign({},c,o,{ref:t}))}));b.displayName="Button";var d=a(93),f=o.forwardRef((function(e,t){var a=e.as,i=e.bsPrefix,o=e.variant,u=e.size,b=e.active,f=e.className,p=Object(c.a)(e,["as","bsPrefix","variant","size","active","className"]),O=Object(d.a)(i,"btn"),h=j(Object(r.a)({tagName:a},p)),x=Object(n.a)(h,2),m=x[0],v=x[1].tagName;return Object(l.jsx)(v,Object(r.a)(Object(r.a)(Object(r.a)({},m),p),{},{ref:t,className:s()(f,O,b&&"active",o&&"".concat(O,"-").concat(o),u&&"".concat(O,"-").concat(u),p.href&&p.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=f},1233:function(e,t,a){},1403:function(e,t,a){"use strict";a.r(t);var r=a(94),n=a(95),c=a(97),i=a(98),s=(a(1233),a(18)),o=a.n(s),l=a(6),u=a(2),j=a.n(u),b=a(122),d=a(0),f=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).addMessage=function(){var e={cobrandEmail:n.refs.email.value,programName:n.refs.name.value,ProgramDescription:n.refs.deskripsi.value,programthumnail:"",startDate:n.refs.start.value,endDate:n.refs.end.value,category:[n.refs.category.value],targetAudiance:[n.refs.target1.value,n.refs.target2.value,n.refs.target3.value]};console.log(e.targetAudience),o()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programAdd",data:e}).then((function(e){console.log(e.data),n.setState({send:!0})})).catch((function(e){console.log(e+"ini eror add BC")}))},n.state={userData:[],send:!1},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){console.log(localStorage.getItem("emailTo")),console.log(localStorage.getItem("notifContext"))}},{key:"handleChange",value:function(e){e.target.checked}},{key:"render",value:function(){return 1==this.state.send?Object(d.jsx)(l.a,{to:"/cms/program"}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"div",children:[Object(d.jsx)("h1",{children:"Add Program"}),Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("label",{children:"Cobrand email"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{className:"input",placeholder:"admin@asia.ruangortu.id",ref:"email",type:"email"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Title"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"name"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Program Description"}),Object(d.jsx)("textarea",{className:"text",placeholder:"Type here ...",ref:"deskripsi"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Start date"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"start",type:"datetime-local"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"End date"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"end",type:"datetime-local"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"kategory "}),Object(d.jsxs)("select",{ref:"category",children:[Object(d.jsx)("option",{value:"Pendidikan Agama",children:"Pendidikan Agama"}),Object(d.jsx)("option",{value:"Pengetahuan Siswa Formal",children:"Pengetahuan Siswa Formal"}),Object(d.jsx)("option",{value:"Pengetahuan Siswa Umum",children:"Pengetahuan Siswa Umum"}),Object(d.jsx)("option",{value:"Informasi & Teknologi",children:"Informasi & Teknologi"}),Object(d.jsx)("option",{value:"Program Pilihan",children:"Program Pilihan"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Target Audience"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Target 1"})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("select",{ref:"target1",children:[Object(d.jsx)("option",{value:"Semua",children:"Semua"}),Object(d.jsx)("option",{value:"Orangtua",children:"Orangtua"}),Object(d.jsx)("option",{value:"Semua Anak",children:"Semua Anak"}),Object(d.jsx)("option",{value:"Siswa SD",children:"Siswa SD"}),Object(d.jsx)("option",{value:"Siswa SMP",children:"Siswa SMP"}),Object(d.jsx)("option",{value:"Siswa SMA",children:"Siswa SMA"}),Object(d.jsx)("option",{value:"Siswa Pria",children:"Siswa Pria"}),Object(d.jsx)("option",{value:"Siswa Wanita",children:"Siswa Wanita"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Target 2"})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("select",{ref:"target2",children:[Object(d.jsx)("option",{value:"",children:"Tidak ada Tambahan"}),Object(d.jsx)("option",{value:"Semua",children:"Semua"}),Object(d.jsx)("option",{value:"Orangtua",children:"Orangtua"}),Object(d.jsx)("option",{value:"Semua Anak",children:"Semua Anak"}),Object(d.jsx)("option",{value:"Siswa SD",children:"Siswa SD"}),Object(d.jsx)("option",{value:"Siswa SMP",children:"Siswa SMP"}),Object(d.jsx)("option",{value:"Siswa SMA",children:"Siswa SMA"}),Object(d.jsx)("option",{value:"Siswa Pria",children:"Siswa Pria"}),Object(d.jsx)("option",{value:"Siswa Wanita",children:"Siswa Wanita"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Target 3"})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("select",{ref:"target3",children:[Object(d.jsx)("option",{value:"",children:"Tidak ada Tambahan"}),Object(d.jsx)("option",{value:"Semua",children:"Semua"}),Object(d.jsx)("option",{value:"Orangtua",children:"Orangtua"}),Object(d.jsx)("option",{value:"Semua Anak",children:"Semua Anak"}),Object(d.jsx)("option",{value:"Siswa SD",children:"Siswa SD"}),Object(d.jsx)("option",{value:"Siswa SMP",children:"Siswa SMP"}),Object(d.jsx)("option",{value:"Siswa SMA",children:"Siswa SMA"}),Object(d.jsx)("option",{value:"Siswa Pria",children:"Siswa Pria"}),Object(d.jsx)("option",{value:"Siswa Wanita",children:"Siswa Wanita"})]})]}),Object(d.jsx)(b.a,{className:"btn",onClick:this.addMessage,children:"Add Program"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"div",children:[Object(d.jsx)("h1",{children:"Tahap 1"}),Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("label",{children:"Tahap"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{className:"input",placeholder:"Tahap 1",ref:"tahap",type:"email"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Nama Program"}),Object(d.jsx)("input",{className:"input",placeholder:"Misal : Menghafal Al-Fatihah",ref:"nameprogram"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Jadwal Mulai"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"starttgl",type:"datetime-local"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Jadwal Selesei"}),Object(d.jsx)("input",{className:"input",placeholder:"",ref:"endtgl",type:"datetime-local"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Multimedia File"}),Object(d.jsx)("textarea",{className:"text",placeholder:"Type here ...",ref:"deskripsi"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Isi Program"}),Object(d.jsx)("textarea",{className:"text",placeholder:"Type here ... (ayat Al-Fatihah - Arabic & Latin)",ref:"isiprogram"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Respon 1"}),Object(d.jsx)("textarea",{className:"text",placeholder:"Type here ... (saya sudah hafal)",ref:"respon1"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Respon 2"}),Object(d.jsx)("textarea",{className:"text",placeholder:"Type here ... (saya kesulitan)",ref:"respon2"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(b.a,{className:"btn",children:"Add Tahap"})]})]})]})}}]),a}(j.a.Component);t.default=f},90:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var s in r)a.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));a(5);var r=a(2),n=(a(0),["xxl","xl","lg","md","sm","xs"]),c=r.createContext({prefixes:{},breakpoints:n});c.Consumer,c.Provider;function i(e,t){var a=Object(r.useContext)(c).prefixes;return e||a[t]||t}function s(){return"rtl"===Object(r.useContext)(c).dir}},94:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return r}))},95:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}a.d(t,"a",(function(){return n}))},96:function(e,t,a){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return r}))},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(101);function n(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(96),n=a(102),c=a(103);function i(e){var t=Object(n.a)();return function(){var a,n=Object(r.a)(e);if(t){var i=Object(r.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}}}]);
//# sourceMappingURL=30.10133caf.chunk.js.map