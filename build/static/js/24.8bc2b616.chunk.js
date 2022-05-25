/*! For license information please see 24.8bc2b616.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[24],{111:function(e,t,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var s=typeof c;if("string"===s||"number"===s)e.push(c);else if(Array.isArray(c)){if(c.length){var o=a.apply(null,c);o&&e.push(o)}}else if("object"===s)if(c.toString===Object.prototype.toString)for(var i in c)n.call(c,i)&&c[i]&&e.push(i);else e.push(c.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(c=function(){return a}.apply(t,[]))||(e.exports=c)}()},1135:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(2),s=n(7),o=n(95),i=n(3),r=n(18),l=n.n(r),d=(n(747),n(5)),j=n(34),b=n(111),h=n.n(b),u=n(116),m=n(1),p=a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,a=e.striped,s=e.bordered,o=e.borderless,i=e.hover,r=e.size,l=e.variant,b=e.responsive,p=Object(j.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(u.a)(n,"table"),x=h()(c,O,l&&"".concat(O,"-").concat(l),r&&"".concat(O,"-").concat(r),a&&"".concat(O,"-striped"),s&&"".concat(O,"-bordered"),o&&"".concat(O,"-borderless"),i&&"".concat(O,"-hover")),v=Object(m.jsx)("table",Object(d.a)(Object(d.a)({},p),{},{className:x,ref:t}));if(b){var _="".concat(O,"-responsive");return"string"===typeof b&&(_="".concat(_,"-").concat(b)),Object(m.jsx)("div",{className:_,children:v})}return v})),O=n(517),x=n(98);t.default=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],d=Object(a.useState)(!0),j=Object(c.a)(d,2),b=j[0],h=j[1],u=Object(a.useState)(),v=Object(c.a)(u,2),_=v[0],g=v[1],f=Object(a.useState)(!0),N=Object(c.a)(f,2),y=N[0],S=N[1],w=Object(a.useState)(),C=Object(c.a)(w,2),k=C[0],D=C[1],I=Object(a.useState)(!1),T=Object(c.a)(I,2),P=(T[0],T[1]),R=Object(a.useState)(null),A=Object(c.a)(R,2),H=A[0],K=(A[1],{weekday:"long",year:"numeric",month:"long",day:"numeric"});return Object(a.useEffect)((function(){h(!0);var e=localStorage.getItem("contentSelected");if(console.log(e),e){var t={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).email,_id:e,status:{$in:["active","inactive"]}}};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),r(e.data.contents[0]),"active"===e.data.contents[0].status?S(!0):S(!1),console.log("This is ",n),h(!1);var t=new Date(e.data.contents[0].startDate).toLocaleDateString("en-UK",K);g(t)})).catch((function(e){console.log(e),h(!1)}))}}),[]),Object(a.useEffect)((function(){var e=localStorage.getItem("contentSelected");console.log(e);var t={whereKeyValues:{contentId:e}};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter",data:t}).then((function(e){console.log(e.data.resultData),D(e.data.resultData),console.log(e.data.resultData[0]._id)})).catch((function(e){console.log(e+"ini eror komentar")}))}),[]),Object(a.useEffect)((function(){var e=localStorage.getItem("contentSelected");console.log(e);var t={contentId:e,emailUser:"nina@gmail.com",comment:"komentar post pertama",replies:{},status:"active"};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/commentContentAdd",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e+"ini eror post komentar baru")}))}),[]),Object(a.useEffect)((function(){P(!0);var e=localStorage.getItem("contentSelected");console.log(e);var t={whereKeyValues:{contentId:e}};l()({method:"delete",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentRemove",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data);var t=localStorage.getItem("contentSelected");console.log(t);var n={whereKeyValues:{contentId:t}};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter",data:n}).then((function(e){console.log(e.data.resultData),D(e.data.resultData),console.log(e.data.resultData[0]._id)})).catch((function(e){console.log(e+"ini eror komentar")}))})).catch((function(e){console.log(e+"ini delete komentar")}))}),[]),b?Object(m.jsx)(x.a,{}):Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(o.a,{headingName:"Content",routes:[{path:"/cms/content",name:"On Going Content"},{path:"/cms/content/view",name:"View Content Detail"}]}),Object(m.jsxs)("div",{className:"action_btn",children:[Object(m.jsx)(s.b,{to:"/cms/content",className:"action_btn_nav",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)(i.b,{})," Back to Content List"]})}),Object(m.jsx)(s.b,{to:"/cms/content/edit",className:"action_btn_nav",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)(i.h,{})," Edit This Content"]})}),Object(m.jsx)("span",{onClick:function(){localStorage.setItem("contentDeleting",n._id)},children:Object(m.jsx)(s.b,{to:"/cms/content",className:"action_btn_nav",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)(i.y,{})," Delete This Content"]})})}),Object(m.jsxs)("div",{className:"action_btn_switch",children:[Object(m.jsx)("p",{className:"action_btn_switch_status",children:"Status:"}),Object(m.jsx)("p",{className:"action_btn_switch_inactive",children:"Inactive"}),Object(m.jsxs)("label",{className:"action_btn_switch_switch",children:[Object(m.jsx)("input",{type:"checkbox",className:"action_btn_switch_switch_checkbox",defaultChecked:y,onChange:function(){var e=y?"inactive":"active",t={whereValues:{_id:n._id},newValues:{status:e}};console.log(t),l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentUpdate",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data)})).catch((function(e){console.log(e),h(!1)})),S(!y)}}),Object(m.jsx)("span",{className:"action_btn_switch_switch_slider"})]}),Object(m.jsx)("p",{className:"action_btn_switch_active",children:"Active"})]})]}),Object(m.jsxs)("div",{className:"section_title",children:[Object(m.jsx)("h2",{children:"Content Detail"}),Object(m.jsx)("h2",{children:"Content Preview pada Aplikasi Smartphone"})]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"content_detail",children:[Object(m.jsxs)("div",{className:"content_detail_top",children:[Object(m.jsx)("div",{className:"content_detail_top_img",children:Object(m.jsx)("img",{src:n.contentThumbnail,className:"content_detail_top_img_image"})}),Object(m.jsx)("div",{className:"content_detail_top_title",children:Object(m.jsx)("h2",{children:n.contentName})})]}),Object(m.jsxs)("div",{className:"content_detail_bottom",children:[Object(m.jsxs)("div",{className:"content_detail_bottom_detail",children:[Object(m.jsxs)("p",{className:"content_detail_group",children:[Object(m.jsx)(i.d,{})," Start Date: ",Object(m.jsx)("span",{children:_})]}),Object(m.jsxs)("p",{className:"content_detail_group",children:[Object(m.jsx)(i.k,{})," Type: ",Object(m.jsx)("span",{children:n.contentType})," "]}),Object(m.jsxs)("p",{className:"content_detail_group",children:[Object(m.jsx)(i.q,{})," Source: ",Object(m.jsx)("span",{children:n.contentSource})," "]})]}),Object(m.jsxs)("div",{className:"content_detail_bottom_description",children:[Object(m.jsx)("p",{className:"content_detail_group",children:"Description:"}),Object(m.jsx)("p",{dangerouslySetInnerHTML:{__html:n.contentDescription}})]}),Object(m.jsxs)("div",{className:"content_detail_bottom_contents",children:[Object(m.jsx)("p",{className:"content_detail_group",children:"Contents:"}),"string"===typeof n.contents?Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:n.contents}}):Object(m.jsx)("div",{className:"pdf-style",dangerouslySetInnerHTML:{__html:n.contents}})]})]})]}),Object(m.jsx)("div",{className:"content_preview",children:Object(m.jsx)("div",{className:"content_preview_smartphone",children:Object(m.jsxs)("div",{className:"content_preview_smartphone_display",children:[Object(m.jsxs)("div",{className:"content_preview_smartphone_display_top",children:[Object(m.jsx)("img",{src:n.contentThumbnail,className:"content_preview_smartphone_display_top_img"}),Object(m.jsxs)("div",{className:"content_preview_smartphone_display_top_title",children:[Object(m.jsx)("h2",{children:n.contentName}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:_}),Object(m.jsxs)("p",{children:["Sumber: ",n.contentSource]})]})]}),Object(m.jsx)("div",{className:"content_preview_smartphone_display_html",dangerouslySetInnerHTML:{__html:n.contents}})]})})})]}),Object(m.jsxs)("div",{className:"komentar",children:[Object(m.jsx)("h1",{children:"Komentar"}),Object(m.jsxs)(p,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"h-email",children:"Email User"}),Object(m.jsx)("th",{children:"Status"}),Object(m.jsx)("th",{children:"Komentar"}),Object(m.jsx)("th",{children:"Date Create"}),Object(m.jsx)("th",{colSpan:2,children:"Action"})]})}),Object(m.jsxs)("tbody",{children:[console.log(k),k?k.map((function(e,t){return H==t?Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.emailUser}),Object(m.jsx)("td",{children:e.status}),Object(m.jsx)("td",{children:e.comment}),Object(m.jsx)("td",{children:e.dateCreated})]}):Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.emailUser}),Object(m.jsx)("td",{children:e.status}),Object(m.jsx)("td",{children:e.comment}),Object(m.jsx)("td",{children:e.dateCreated}),Object(m.jsx)("td",{children:Object(m.jsx)(O.a,{variant:"danger",className:"btn",onClick:function(){localStorage.setItem("komenDeleting",n._id)},children:"Delete"})})]})})):""]})]})]})]})}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));n(5);var c=n(2),a=(n(1),c.createContext({prefixes:{}}));a.Consumer,a.Provider;function s(e,t){var n=Object(c.useContext)(a).prefixes;return e||n[t]||t}function o(){return"rtl"===Object(c.useContext)(a).dir}},517:function(e,t,n){"use strict";var c=n(5),a=n(10),s=n(34),o=n(111),i=n.n(o),r=n(2),l=n(1),d=["as","disabled"];function j(e){var t=e.tagName,n=e.disabled,c=e.href,a=e.target,s=e.rel,o=e.onClick,i=e.tabIndex,r=void 0===i?0:i,l=e.type;t||(t=null!=c||null!=a||null!=s?"a":"button");var d={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},d];var j=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(c))&&e.preventDefault(),n?e.stopPropagation():null==o||o(e)};return[{role:"button",disabled:void 0,tabIndex:n?void 0:r,href:"a"===t&&n?void 0:c,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?s:void 0,onClick:j,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),j(e))}},d]}var b=r.forwardRef((function(e,t){var n=e.as,c=e.disabled,s=function(e,t){if(null==e)return{};var n,c,a={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,d),o=j(Object.assign({tagName:n,disabled:c},s)),i=Object(a.a)(o,2),r=i[0],b=i[1].tagName;return Object(l.jsx)(b,Object.assign({},s,r,{ref:t}))}));b.displayName="Button";var h=n(116),u=r.forwardRef((function(e,t){var n=e.as,o=e.bsPrefix,r=e.variant,d=e.size,b=e.active,u=e.className,m=Object(s.a)(e,["as","bsPrefix","variant","size","active","className"]),p=Object(h.a)(o,"btn"),O=j(Object(c.a)({tagName:n},m)),x=Object(a.a)(O,2),v=x[0],_=x[1].tagName;return Object(l.jsx)(_,Object(c.a)(Object(c.a)(Object(c.a)({},m),v),{},{ref:t,className:i()(u,p,b&&"active",r&&"".concat(p,"-").concat(r),d&&"".concat(p,"-").concat(d),m.href&&m.disabled&&"disabled")}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=u},747:function(e,t,n){},95:function(e,t,n){"use strict";n(2);var c=n(7),a=(n(97),n(1));t.a=function(e){var t=e.headingName,n=e.routes,s=void 0===n?[]:n;return Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,t){return e.path?Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(a.jsx)(c.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(a.jsx)("span",{children:e.name})," "]},t)}))})]})}},97:function(e,t,n){},98:function(e,t,n){"use strict";n(2);var c=n(35),a=(n(99),n(1));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(a.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(a.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(a.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(a.jsx)(c.a,{}),Object(a.jsx)("p",{children:n})]})}},99:function(e,t,n){}}]);
//# sourceMappingURL=24.8bc2b616.chunk.js.map