/*! For license information please see 37.4fe8ed19.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[37],{1371:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n(2),s=n(6),i=n(8),r=n(94),o=n(3),l=n(18),d=n.n(l),j=(n(862),n(148)),b=n(169),u=n(36),h=n(158),m=n(0);t.default=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],O=Object(a.useState)(!0),p=Object(c.a)(O,2),x=p[0],v=p[1],_=Object(a.useState)(),f=Object(c.a)(_,2),g=f[0],N=f[1],y=Object(a.useState)(),w=Object(c.a)(y,2),S=(w[0],w[1]),k=Object(a.useState)(!0),D=Object(c.a)(k,2),I=D[0],C=D[1],A=Object(a.useState)(),T=Object(c.a)(A,2),K=T[0],E=T[1],H=Object(a.useState)(!1),P=Object(c.a)(H,2),U=(P[0],P[1],Object(a.useState)(null)),L=Object(c.a)(U,2),M=(L[0],L[1]),V=Object(a.useState)(null),z=Object(c.a)(V,2),R=z[0],J=(z[1],Object(a.useState)(!1)),F=Object(c.a)(J,2),B=F[0],W=F[1],$=Object(a.useState)(!1),q=Object(c.a)($,2),G=q[0],Q=q[1],X=Object(a.useState)(!1),Y=Object(c.a)(X,2),Z=Y[0],ee=Y[1],te={weekday:"long",year:"numeric",month:"long",day:"numeric"},ne=Object(s.g)();return Object(a.useEffect)((function(){v(!0);var e=localStorage.getItem("contentSelected");if(e){var t={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).cobrandEmail,_id:e,status:{$in:["active","inactive"]}}};d()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){l(e.data.contents[0]),"active"===e.data.contents[0].status?C(!0):C(!1),v(!1);var t=new Date(e.data.contents[0].startDate).toLocaleDateString("en-UK",te);N(t),t=new Date(e.data.contents[0].endDate).toLocaleDateString("en-UK",te),S(t)})).catch((function(e){v(!1)}))}}),[]),Object(a.useEffect)((function(){Z&&ne.push("/cms/content")}),[Z]),Object(a.useEffect)((function(){G||Z||(localStorage.removeItem("contentDeleting"),localStorage.removeItem("contentDeletingName"))}),[G,Z]),Object(a.useEffect)((function(){var e={whereKeyValues:{contentId:localStorage.getItem("contentSelected")}};d()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter",data:e}).then((function(e){E(e.data.resultData)})).catch((function(e){}))}),[]),x?Object(m.jsx)(u.a,{}):1==B?Object(m.jsx)(s.a,{to:"/cms/content/view-komen"}):Object(m.jsxs)("div",{className:"container",children:[G?Object(m.jsx)(h.a,{setConfirmDeleting:ee,setWarning:Q,message:"Artikel"}):null,Object(m.jsx)(r.a,{headingName:"Artikel",routes:[{path:"/cms/content",name:"Daftar Artikel"},{path:"/cms/content/view",name:"Lihat Detail Artikel"}]}),Object(m.jsxs)("div",{className:"action_btn",children:[Object(m.jsx)(i.b,{to:"/cms/content",className:"action_btn_nav",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)(o.c,{})," Kembali ke Daftar Artikel"]})}),Object(m.jsx)(i.b,{to:"/cms/content/edit",className:"action_btn_nav",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)(o.i,{})," Ubah Artikel Ini"]})}),Object(m.jsx)("span",{onClick:function(){localStorage.setItem("contentDeleting",n._id),localStorage.setItem("contentDeletingName",n.contentName),Q(!0),document.body.style.overflow="hidden"},children:Object(m.jsx)(i.b,{to:"/cms/content/view",className:"action_btn_nav",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)(o.z,{})," Hapus Artikel Ini"]})})}),Object(m.jsxs)("div",{className:"action_btn_switch",children:[Object(m.jsx)("p",{className:"action_btn_switch_status",children:"Status:"}),Object(m.jsx)("p",{className:"action_btn_switch_inactive",children:"Inactive"}),Object(m.jsxs)("label",{className:"action_btn_switch_switch",children:[Object(m.jsx)("input",{type:"checkbox",className:"action_btn_switch_switch_checkbox",defaultChecked:I,onChange:function(){var e=I?"inactive":"active",t={whereValues:{_id:n._id},newValues:{status:e}};d()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentUpdate",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){})).catch((function(e){v(!1)})),C(!I)}}),Object(m.jsx)("span",{className:"action_btn_switch_switch_slider"})]}),Object(m.jsx)("p",{className:"action_btn_switch_active",children:"Active"})]})]}),Object(m.jsxs)("div",{className:"section_title",children:[Object(m.jsx)("h2",{children:"Detail Artikel"}),Object(m.jsx)("h2",{children:"Preview Artikel pada Aplikasi Smartphone"})]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"content_detail",children:[Object(m.jsxs)("div",{className:"content_detail_top",children:[Object(m.jsx)("div",{className:"content_detail_top_img",children:Object(m.jsx)("img",{src:n.contentThumbnail,className:"content_detail_top_img_image"})}),Object(m.jsx)("div",{className:"content_detail_top_title",children:Object(m.jsx)("h2",{children:n.contentName})})]}),Object(m.jsxs)("div",{className:"content_detail_bottom",children:[Object(m.jsxs)("div",{className:"content_detail_bottom_detail",children:[Object(m.jsxs)("p",{className:"content_detail_group",children:[Object(m.jsx)(o.d,{})," Tanggal Posting: ",Object(m.jsx)("span",{children:g})]}),Object(m.jsxs)("p",{className:"content_detail_group",children:[Object(m.jsx)(o.l,{})," Tipe: ",Object(m.jsx)("span",{children:n.contentType})," "]})]}),Object(m.jsxs)("div",{className:"content_detail_bottom_description",children:[Object(m.jsx)("p",{className:"content_detail_group",children:"Deskripsi:"}),Object(m.jsx)("p",{dangerouslySetInnerHTML:{__html:n.contentDescription}})]}),Object(m.jsxs)("div",{className:"content_detail_bottom_contents",children:[Object(m.jsx)("p",{className:"content_detail_group",children:"Isi:"}),"string"===typeof n.contents?Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:n.contents}}):Object(m.jsx)("div",{className:"pdf-style",dangerouslySetInnerHTML:{__html:n.contents}})]}),Object(m.jsx)("div",{className:"content_detail_bottom_detail",children:Object(m.jsxs)("p",{className:"content_detail_group",children:[Object(m.jsx)(o.r,{})," Sumber: ",Object(m.jsx)("span",{children:n.contentSource})," "]})})]})]}),Object(m.jsx)("div",{className:"content_preview",children:Object(m.jsx)("div",{className:"content_preview_smartphone",children:Object(m.jsxs)("div",{className:"content_preview_smartphone_display",children:[Object(m.jsxs)("div",{className:"content_preview_smartphone_display_top",children:[Object(m.jsx)("img",{src:n.contentThumbnail,className:"content_preview_smartphone_display_top_img"}),Object(m.jsxs)("div",{className:"content_preview_smartphone_display_top_title",children:[Object(m.jsx)("h2",{children:n.contentName}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:g}),Object(m.jsxs)("p",{children:["Sumber: ",n.contentSource]})]})]}),Object(m.jsx)("div",{className:"content_preview_smartphone_display_html",dangerouslySetInnerHTML:{__html:n.contents}})]})})})]}),Object(m.jsxs)("div",{className:"komentar",children:[Object(m.jsx)(j.a,{className:"btn2",onClick:function(){return W(!0)},children:" Edit Komentar"}),Object(m.jsx)("h1",{children:"Komentar"}),Object(m.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"h-email",children:"Email User"}),Object(m.jsx)("th",{children:"Status"}),Object(m.jsx)("th",{children:"Komentar"}),Object(m.jsx)("th",{children:"Date Create"}),Object(m.jsx)("th",{colSpan:2,children:"Action"})]})}),Object(m.jsx)("tbody",{children:K?K.map((function(e,t){return t==R?Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.emailUser}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{placeholder:e.status})}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{placeholder:e.comment})}),Object(m.jsx)("td",{children:e.dateCreated}),Object(m.jsx)("td",{children:Object(m.jsx)(j.a,{variant:"danger",className:"btn2",children:"Save"})}),Object(m.jsx)("td",{children:Object(m.jsx)(j.a,{variant:"danger",className:"btn",onClick:M(null),children:"Cancel"})})]}):Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.emailUser}),Object(m.jsx)("td",{children:e.status}),Object(m.jsx)("td",{children:e.comment}),Object(m.jsx)("td",{children:e.dateCreated}),Object(m.jsx)("td",{children:Object(m.jsx)(j.a,{variant:"danger",className:"btn",type:"submit",onClick:function(){return function(e){M({indexEdit:e}),localStorage.setItem("idUser",K[e]._id);var t={whereValues:{_id:localStorage.getItem("idUser")}};d()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentRemove",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){var t={whereKeyValues:{contentId:localStorage.getItem("contentSelected")}};d()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter",data:t}).then((function(e){E(e.data.resultData)})).catch((function(e){}))})).catch((function(e){}))}(t)},children:"Delete"})})]})})):Object(m.jsx)("div",{children:"CONTENT INI TIDAK MEMILIKI KOMENTAR"})})]})]})]})}},148:function(e,t,n){"use strict";var c=n(5),a=n(7),s=n(34),i=n(96),r=n.n(i),o=n(2),l=n(0),d=["as","disabled"];function j(e){var t=e.tagName,n=e.disabled,c=e.href,a=e.target,s=e.rel,i=e.onClick,r=e.tabIndex,o=void 0===r?0:r,l=e.type;t||(t=null!=c||null!=a||null!=s?"a":"button");var d={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},d];var j=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(c))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(c||(c="#"),n&&(c=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:o,href:c,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?s:void 0,onClick:j,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),j(e))}},d]}var b=o.forwardRef((function(e,t){var n=e.as,c=e.disabled,s=function(e,t){if(null==e)return{};var n,c,a={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,d),i=j(Object.assign({tagName:n,disabled:c},s)),r=Object(a.a)(i,2),o=r[0],b=r[1].tagName;return Object(l.jsx)(b,Object.assign({},s,o,{ref:t}))}));b.displayName="Button";var u=n(98),h=o.forwardRef((function(e,t){var n=e.as,i=e.bsPrefix,o=e.variant,d=e.size,b=e.active,h=e.className,m=Object(s.a)(e,["as","bsPrefix","variant","size","active","className"]),O=Object(u.a)(i,"btn"),p=j(Object(c.a)({tagName:n},m)),x=Object(a.a)(p,2),v=x[0],_=x[1].tagName;return Object(l.jsx)(_,Object(c.a)(Object(c.a)(Object(c.a)({},v),m),{},{ref:t,className:r()(h,O,b&&"active",o&&"".concat(O,"-").concat(o),d&&"".concat(O,"-").concat(d),m.href&&m.disabled&&"disabled")}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=h},158:function(e,t,n){"use strict";n(2),n(159);var c=n(3),a=n(0);t.a=function(e){var t=e.setDeleting,n=void 0===t?null:t,s=e.setConfirmDeleting,i=e.setWarning,r=e.message;return Object(a.jsx)("div",{className:"warning",children:Object(a.jsxs)("div",{className:"warning-content",children:[Object(a.jsx)("div",{className:"warning-content-header",children:Object(a.jsx)("h2",{children:"Konfirmasi Penghapusan"})}),Object(a.jsxs)("div",{className:"warning-content-body",children:[Object(a.jsx)(c.b,{className:"warning-content-body-icon"}),Object(a.jsxs)("div",{className:"warning-content-body-message",children:[Object(a.jsxs)("p",{children:["Apakah Anda yakin ingin menghapus ",r," ini?"]}),Object(a.jsxs)("div",{className:"warning-content-body-message-button",children:[Object(a.jsx)("div",{className:"warning-content-body-message-button-delete",children:Object(a.jsx)("button",{onClick:function(){s(!0),i(!1),document.body.style.overflow="unset"},children:"Hapus"})}),Object(a.jsx)("div",{className:"warning-content-body-message-button-cancel",children:Object(a.jsx)("button",{onClick:function(){n&&n(null),i(!1),document.body.style.overflow="unset"},children:"Jangan Hapus"})})]})]})]})]})},r)}},159:function(e,t,n){},169:function(e,t,n){"use strict";var c=n(5),a=n(34),s=n(96),i=n.n(s),r=n(2),o=n(98),l=n(0),d=r.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,r=e.striped,d=e.bordered,j=e.borderless,b=e.hover,u=e.size,h=e.variant,m=e.responsive,O=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(o.a)(n,"table"),x=i()(s,p,h&&"".concat(p,"-").concat(h),u&&"".concat(p,"-").concat(u),r&&"".concat(p,"-striped"),d&&"".concat(p,"-bordered"),j&&"".concat(p,"-borderless"),b&&"".concat(p,"-hover")),v=Object(l.jsx)("table",Object(c.a)(Object(c.a)({},O),{},{className:x,ref:t}));if(m){var _="".concat(p,"-responsive");return"string"===typeof m&&(_="".concat(_,"-").concat(m)),Object(l.jsx)("div",{className:_,children:v})}return v}));t.a=d},862:function(e,t,n){},94:function(e,t,n){"use strict";n(2);var c=n(8),a=(n(95),n(0));t.a=function(e){var t=e.headingName,n=e.routes,s=void 0===n?[]:n;return Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,t){return e.path?Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(a.jsx)(c.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(a.jsx)("span",{children:e.name})," "]},t)}))})]})}},95:function(e,t,n){},96:function(e,t,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var s=typeof c;if("string"===s||"number"===s)e.push(c);else if(Array.isArray(c)){if(c.length){var i=a.apply(null,c);i&&e.push(i)}}else if("object"===s)if(c.toString===Object.prototype.toString)for(var r in c)n.call(c,r)&&c[r]&&e.push(r);else e.push(c.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(c=function(){return a}.apply(t,[]))||(e.exports=c)}()},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));n(5);var c=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),s=c.createContext({prefixes:{},breakpoints:a});s.Consumer,s.Provider;function i(e,t){var n=Object(c.useContext)(s).prefixes;return e||n[t]||t}function r(){return"rtl"===Object(c.useContext)(s).dir}}}]);
//# sourceMappingURL=37.4fe8ed19.chunk.js.map