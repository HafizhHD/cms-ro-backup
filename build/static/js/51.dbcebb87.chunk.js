/*! For license information please see 51.dbcebb87.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[51],{109:function(e,t,n){"use strict";n(2);var c=n(7),a=(n(111),n(0));t.a=function(e){var t=e.headingName,n=e.routes,s=void 0===n?[]:n;return Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,t){return e.path?Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(a.jsx)(c.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(a.jsx)("span",{children:e.name})," "]},t)}))})]})}},111:function(e,t,n){},118:function(e,t,n){"use strict";var c=n(5),a=n(10),s=n(34),i=n(90),o=n.n(i),r=n(2),l=n(0),d=["as","disabled"];function j(e){var t=e.tagName,n=e.disabled,c=e.href,a=e.target,s=e.rel,i=e.onClick,o=e.tabIndex,r=void 0===o?0:o,l=e.type;t||(t=null!=c||null!=a||null!=s?"a":"button");var d={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},d];var j=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(c))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(c||(c="#"),n&&(c=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:r,href:c,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?s:void 0,onClick:j,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),j(e))}},d]}var b=r.forwardRef((function(e,t){var n=e.as,c=e.disabled,s=function(e,t){if(null==e)return{};var n,c,a={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,d),i=j(Object.assign({tagName:n,disabled:c},s)),o=Object(a.a)(i,2),r=o[0],b=o[1].tagName;return Object(l.jsx)(b,Object.assign({},s,r,{ref:t}))}));b.displayName="Button";var h=n(93),u=r.forwardRef((function(e,t){var n=e.as,i=e.bsPrefix,r=e.variant,d=e.size,b=e.active,u=e.className,m=Object(s.a)(e,["as","bsPrefix","variant","size","active","className"]),p=Object(h.a)(i,"btn"),O=j(Object(c.a)({tagName:n},m)),x=Object(a.a)(O,2),v=x[0],_=x[1].tagName;return Object(l.jsx)(_,Object(c.a)(Object(c.a)(Object(c.a)({},v),m),{},{ref:t,className:o()(u,p,b&&"active",r&&"".concat(p,"-").concat(r),d&&"".concat(p,"-").concat(d),m.href&&m.disabled&&"disabled")}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=u},1356:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(2),s=n(7),i=n(109),o=n(3),r=n(18),l=n.n(r),d=(n(852),n(118)),j=n(147),b=n(36),h=n(6),u=n(0);t.default=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],m=Object(a.useState)(!0),p=Object(c.a)(m,2),O=p[0],x=p[1],v=Object(a.useState)(),_=Object(c.a)(v,2),g=_[0],f=_[1],N=Object(a.useState)(!0),y=Object(c.a)(N,2),w=y[0],S=y[1],C=Object(a.useState)(),D=Object(c.a)(C,2),k=D[0],I=D[1],T=Object(a.useState)(!1),K=Object(c.a)(T,2),E=(K[0],K[1],Object(a.useState)(null)),P=Object(c.a)(E,2),H=(P[0],P[1]),A=Object(a.useState)(null),L=Object(c.a)(A,2),M=L[0],R=(L[1],Object(a.useState)(!1)),U=Object(c.a)(R,2),V=U[0],z=U[1],B={weekday:"long",year:"numeric",month:"long",day:"numeric"};return Object(a.useEffect)((function(){x(!0);var e=localStorage.getItem("contentSelected");if(console.log(e),e){var t={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).email,_id:e,status:{$in:["active","inactive"]}}};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),r(e.data.contents[0]),"active"===e.data.contents[0].status?S(!0):S(!1),console.log("This is ",n),x(!1);var t=new Date(e.data.contents[0].startDate).toLocaleDateString("en-UK",B);f(t)})).catch((function(e){console.log(e),x(!1)}))}}),[]),Object(a.useEffect)((function(){var e=localStorage.getItem("contentSelected");console.log(e);var t={whereKeyValues:{contentId:e}};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter",data:t}).then((function(e){console.log(e.data.resultData),I(e.data.resultData),console.log(e.data.resultData[0]._id)})).catch((function(e){console.log(e+"ini eror komentar")}))}),[]),O?Object(u.jsx)(b.a,{}):1==V?Object(u.jsx)(h.a,{to:"/cms/content/view-komen"}):Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(i.a,{headingName:"Content",routes:[{path:"/cms/content",name:"On Going Content"},{path:"/cms/content/view",name:"View Content Detail"}]}),Object(u.jsxs)("div",{className:"action_btn",children:[Object(u.jsx)(s.b,{to:"/cms/content",className:"action_btn_nav",children:Object(u.jsxs)("h3",{children:[Object(u.jsx)(o.b,{})," Back to Content List"]})}),Object(u.jsx)(s.b,{to:"/cms/content/edit",className:"action_btn_nav",children:Object(u.jsxs)("h3",{children:[Object(u.jsx)(o.g,{})," Edit This Content"]})}),Object(u.jsx)("span",{onClick:function(){localStorage.setItem("contentDeleting",n._id)},children:Object(u.jsx)(s.b,{to:"/cms/content",className:"action_btn_nav",children:Object(u.jsxs)("h3",{children:[Object(u.jsx)(o.x,{})," Delete This Content"]})})}),Object(u.jsxs)("div",{className:"action_btn_switch",children:[Object(u.jsx)("p",{className:"action_btn_switch_status",children:"Status:"}),Object(u.jsx)("p",{className:"action_btn_switch_inactive",children:"Inactive"}),Object(u.jsxs)("label",{className:"action_btn_switch_switch",children:[Object(u.jsx)("input",{type:"checkbox",className:"action_btn_switch_switch_checkbox",defaultChecked:w,onChange:function(){var e=w?"inactive":"active",t={whereValues:{_id:n._id},newValues:{status:e}};console.log(t),l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentUpdate",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data)})).catch((function(e){console.log(e),x(!1)})),S(!w)}}),Object(u.jsx)("span",{className:"action_btn_switch_switch_slider"})]}),Object(u.jsx)("p",{className:"action_btn_switch_active",children:"Active"})]})]}),Object(u.jsxs)("div",{className:"section_title",children:[Object(u.jsx)("h2",{children:"Content Detail"}),Object(u.jsx)("h2",{children:"Content Preview pada Aplikasi Smartphone"})]}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"content_detail",children:[Object(u.jsxs)("div",{className:"content_detail_top",children:[Object(u.jsx)("div",{className:"content_detail_top_img",children:Object(u.jsx)("img",{src:n.contentThumbnail,className:"content_detail_top_img_image"})}),Object(u.jsx)("div",{className:"content_detail_top_title",children:Object(u.jsx)("h2",{children:n.contentName})})]}),Object(u.jsxs)("div",{className:"content_detail_bottom",children:[Object(u.jsxs)("div",{className:"content_detail_bottom_detail",children:[Object(u.jsxs)("p",{className:"content_detail_group",children:[Object(u.jsx)(o.c,{})," Start Date: ",Object(u.jsx)("span",{children:g})]}),Object(u.jsxs)("p",{className:"content_detail_group",children:[Object(u.jsx)(o.j,{})," Type: ",Object(u.jsx)("span",{children:n.contentType})," "]}),Object(u.jsxs)("p",{className:"content_detail_group",children:[Object(u.jsx)(o.p,{})," Source: ",Object(u.jsx)("span",{children:n.contentSource})," "]})]}),Object(u.jsxs)("div",{className:"content_detail_bottom_description",children:[Object(u.jsx)("p",{className:"content_detail_group",children:"Description:"}),Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:n.contentDescription}})]}),Object(u.jsxs)("div",{className:"content_detail_bottom_contents",children:[Object(u.jsx)("p",{className:"content_detail_group",children:"Contents:"}),"string"===typeof n.contents?Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:n.contents}}):Object(u.jsx)("div",{className:"pdf-style",dangerouslySetInnerHTML:{__html:n.contents}})]})]})]}),Object(u.jsx)("div",{className:"content_preview",children:Object(u.jsx)("div",{className:"content_preview_smartphone",children:Object(u.jsxs)("div",{className:"content_preview_smartphone_display",children:[Object(u.jsxs)("div",{className:"content_preview_smartphone_display_top",children:[Object(u.jsx)("img",{src:n.contentThumbnail,className:"content_preview_smartphone_display_top_img"}),Object(u.jsxs)("div",{className:"content_preview_smartphone_display_top_title",children:[Object(u.jsx)("h2",{children:n.contentName}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:g}),Object(u.jsxs)("p",{children:["Sumber: ",n.contentSource]})]})]}),Object(u.jsx)("div",{className:"content_preview_smartphone_display_html",dangerouslySetInnerHTML:{__html:n.contents}})]})})})]}),Object(u.jsxs)("div",{className:"komentar",children:[Object(u.jsx)(d.a,{className:"btn2",onClick:function(){return z(!0)},children:" Edit Komentar"}),Object(u.jsx)("h1",{children:"Komentar"}),Object(u.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"h-email",children:"Email User"}),Object(u.jsx)("th",{children:"Status"}),Object(u.jsx)("th",{children:"Komentar"}),Object(u.jsx)("th",{children:"Date Create"}),Object(u.jsx)("th",{colSpan:2,children:"Action"})]})}),Object(u.jsxs)("tbody",{children:[console.log(k),k?k.map((function(e,t){return console.log(e._id),t==M?Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.emailUser}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{placeholder:e.status})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{placeholder:e.comment})}),Object(u.jsx)("td",{children:e.dateCreated}),Object(u.jsx)("td",{children:Object(u.jsx)(d.a,{variant:"danger",className:"btn2",children:"Save"})}),Object(u.jsx)("td",{children:Object(u.jsx)(d.a,{variant:"danger",className:"btn",onClick:H(null),children:"Cancel"})})]}):Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.emailUser}),Object(u.jsx)("td",{children:e.status}),Object(u.jsx)("td",{children:e.comment}),Object(u.jsx)("td",{children:e.dateCreated}),Object(u.jsx)("td",{children:Object(u.jsx)(d.a,{variant:"danger",className:"btn",type:"submit",onClick:function(){return function(e){H({indexEdit:e}),localStorage.setItem("idUser",k[e]._id);var t=localStorage.getItem("idUser");console.log(t);var n={whereValues:{_id:t}};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentRemove",data:n,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data);var t=localStorage.getItem("contentSelected");console.log(t);var n={whereKeyValues:{contentId:t}};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter",data:n}).then((function(e){console.log(e.data.resultData),I(e.data.resultData),console.log(e.data.resultData[0]._id)})).catch((function(e){console.log(e+"ini eror komentar")}))})).catch((function(e){console.log(e+"ini delete komentar")}))}(t)},children:"Delete"})})]})})):Object(u.jsx)("div",{children:"CONTENT INI TIDAK MEMILIKI KOMENTAR"})]})]})]})]})}},147:function(e,t,n){"use strict";var c=n(5),a=n(34),s=n(90),i=n.n(s),o=n(2),r=n(93),l=n(0),d=o.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,o=e.striped,d=e.bordered,j=e.borderless,b=e.hover,h=e.size,u=e.variant,m=e.responsive,p=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(r.a)(n,"table"),x=i()(s,O,u&&"".concat(O,"-").concat(u),h&&"".concat(O,"-").concat(h),o&&"".concat(O,"-striped"),d&&"".concat(O,"-bordered"),j&&"".concat(O,"-borderless"),b&&"".concat(O,"-hover")),v=Object(l.jsx)("table",Object(c.a)(Object(c.a)({},p),{},{className:x,ref:t}));if(m){var _="".concat(O,"-responsive");return"string"===typeof m&&(_="".concat(_,"-").concat(m)),Object(l.jsx)("div",{className:_,children:v})}return v}));t.a=d},852:function(e,t,n){},90:function(e,t,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var s=typeof c;if("string"===s||"number"===s)e.push(c);else if(Array.isArray(c)){if(c.length){var i=a.apply(null,c);i&&e.push(i)}}else if("object"===s)if(c.toString===Object.prototype.toString)for(var o in c)n.call(c,o)&&c[o]&&e.push(o);else e.push(c.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(c=function(){return a}.apply(t,[]))||(e.exports=c)}()},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));n(5);var c=n(2),a=(n(0),["xxl","xl","lg","md","sm","xs"]),s=c.createContext({prefixes:{},breakpoints:a});s.Consumer,s.Provider;function i(e,t){var n=Object(c.useContext)(s).prefixes;return e||n[t]||t}function o(){return"rtl"===Object(c.useContext)(s).dir}}}]);
//# sourceMappingURL=51.dbcebb87.chunk.js.map