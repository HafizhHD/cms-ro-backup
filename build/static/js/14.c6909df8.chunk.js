/*! For license information please see 14.c6909df8.chunk.js.LICENSE.txt */
(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[14],{110:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var i=c.apply(null,a);i&&e.push(i)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var o in a)n.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(a=function(){return c}.apply(t,[]))||(e.exports=a)}()},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(4);var a=n(2),c=(n(1),a.createContext({prefixes:{}}));c.Consumer,c.Provider;function s(e,t){var n=Object(a.useContext)(c).prefixes;return e||n[t]||t}},476:function(e,t,n){},516:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(2),s=n(12),i=n(92),o=n(6),r=n(18),l=n.n(r),d=(n(476),n(4)),j=n(35),b=n(110),h=n.n(b),u=n(118),p=n(1),m=c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,c=e.striped,s=e.bordered,i=e.borderless,o=e.hover,r=e.size,l=e.variant,b=e.responsive,m=Object(j.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(u.a)(n,"table"),x=h()(a,O,l&&"".concat(O,"-").concat(l),r&&"".concat(O,"-").concat(r),c&&"".concat(O,"-striped"),s&&"".concat(O,"-bordered"),i&&"".concat(O,"-borderless"),o&&"".concat(O,"-hover")),v=Object(p.jsx)("table",Object(d.a)(Object(d.a)({},m),{},{className:x,ref:t}));if(b){var _="".concat(O,"-responsive");return"string"===typeof b&&(_="".concat(_,"-").concat(b)),Object(p.jsx)("div",{className:_,children:v})}return v})),O=["as","disabled"];function x(e){var t=e.tagName,n=e.disabled,a=e.href,c=e.target,s=e.rel,i=e.onClick,o=e.tabIndex,r=void 0===o?0:o,l=e.type;t||(t=null!=a||null!=c||null!=s?"a":"button");var d={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},d];var j=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return[{role:"button",disabled:void 0,tabIndex:n?void 0:r,href:"a"===t&&n?void 0:a,target:"a"===t?c:void 0,"aria-disabled":n||void 0,rel:"a"===t?s:void 0,onClick:j,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),j(e))}},d]}var v=c.forwardRef((function(e,t){var n=e.as,c=e.disabled,s=function(e,t){if(null==e)return{};var n,a,c={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,O),i=x(Object.assign({tagName:n,disabled:c},s)),o=Object(a.a)(i,2),r=o[0],l=o[1].tagName;return Object(p.jsx)(l,Object.assign({},s,r,{ref:t}))}));v.displayName="Button";var _=c.forwardRef((function(e,t){var n=e.as,c=e.bsPrefix,s=e.variant,i=e.size,o=e.active,r=e.className,l=Object(j.a)(e,["as","bsPrefix","variant","size","active","className"]),b=Object(u.a)(c,"btn"),m=x(Object(d.a)({tagName:n},l)),O=Object(a.a)(m,2),v=O[0],_=O[1].tagName;return Object(p.jsx)(_,Object(d.a)(Object(d.a)(Object(d.a)({},l),v),{},{ref:t,className:h()(r,b,o&&"active",s&&"".concat(b,"-").concat(s),i&&"".concat(b,"-").concat(i),l.href&&l.disabled&&"disabled")}))}));_.displayName="Button",_.defaultProps={variant:"primary",active:!1,disabled:!1};var f=_,g=n(88);t.default=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],d=Object(c.useState)(!0),j=Object(a.a)(d,2),b=j[0],h=j[1],u=Object(c.useState)(),O=Object(a.a)(u,2),x=O[0],v=O[1],_=Object(c.useState)(!0),N=Object(a.a)(_,2),y=N[0],w=N[1],S=Object(c.useState)(),C=Object(a.a)(S,2),k=C[0],D=C[1],I={weekday:"long",year:"numeric",month:"long",day:"numeric"};return Object(c.useEffect)((function(){h(!0);var e=localStorage.getItem("contentSelected");if(console.log(e),e){var t={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).email,_id:e,status:{$in:["active","inactive"]}}};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),r(e.data.contents[0]),"active"===e.data.contents[0].status?w(!0):w(!1),console.log("This is ",n),h(!1);var t=new Date(e.data.contents[0].startDate).toLocaleDateString("en-UK",I);v(t)})).catch((function(e){console.log(e),h(!1)}))}}),[]),Object(c.useEffect)((function(){var e=localStorage.getItem("contentSelected");console.log(e);var t={whereKeyValues:{contentId:e}};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/commentContentFilter",data:t}).then((function(e){console.log(e.data.resultData),D(e.data.resultData),console.log(e.data.resultData[0]._id)})).catch((function(e){console.log(e+"ini eror komentar")}))}),[]),Object(c.useEffect)((function(){var e=localStorage.getItem("contentSelected");console.log(e);var t={contentId:e,emailUser:"nina@gmail.com",comment:"komentar post pertama",replies:{},status:"active"};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/commentContentAdd",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e+"ini eror post komentar baru")}))}),[]),b?Object(p.jsx)(g.a,{}):Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(i.a,{headingName:"Content",routes:[{path:"/content",name:"On Going Content"},{path:"/content/view",name:"View Content Detail"}]}),Object(p.jsxs)("div",{className:"action_btn",children:[Object(p.jsx)(s.b,{to:"/content",className:"action_btn_nav",children:Object(p.jsxs)("h3",{children:[Object(p.jsx)(o.c,{})," Back to Content List"]})}),Object(p.jsx)(s.b,{to:"/content/edit",className:"action_btn_nav",children:Object(p.jsxs)("h3",{children:[Object(p.jsx)(o.i,{})," Edit This Content"]})}),Object(p.jsx)("span",{onClick:function(){localStorage.setItem("contentDeleting",n._id)},children:Object(p.jsx)(s.b,{to:"/content",className:"action_btn_nav",children:Object(p.jsxs)("h3",{children:[Object(p.jsx)(o.u,{})," Delete This Content"]})})}),Object(p.jsxs)("div",{className:"action_btn_switch",children:[Object(p.jsx)("p",{className:"action_btn_switch_status",children:"Status:"}),Object(p.jsx)("p",{className:"action_btn_switch_inactive",children:"Inactive"}),Object(p.jsxs)("label",{className:"action_btn_switch_switch",children:[Object(p.jsx)("input",{type:"checkbox",className:"action_btn_switch_switch_checkbox",defaultChecked:y,onChange:function(){var e=y?"inactive":"active",t={whereValues:{_id:n._id},newValues:{status:e}};console.log(t),l()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data)})).catch((function(e){console.log(e),h(!1)})),w(!y)}}),Object(p.jsx)("span",{className:"action_btn_switch_switch_slider"})]}),Object(p.jsx)("p",{className:"action_btn_switch_active",children:"Active"})]})]}),Object(p.jsxs)("div",{className:"section_title",children:[Object(p.jsx)("h2",{children:"Content Detail"}),Object(p.jsx)("h2",{children:"Content Preview pada Aplikasi Smartphone"})]}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsxs)("div",{className:"content_detail",children:[Object(p.jsxs)("div",{className:"content_detail_top",children:[Object(p.jsx)("div",{className:"content_detail_top_img",children:Object(p.jsx)("img",{src:n.contentThumbnail,className:"content_detail_top_img_image"})}),Object(p.jsx)("div",{className:"content_detail_top_title",children:Object(p.jsx)("h2",{children:n.contentName})})]}),Object(p.jsxs)("div",{className:"content_detail_bottom",children:[Object(p.jsxs)("div",{className:"content_detail_bottom_detail",children:[Object(p.jsxs)("p",{className:"content_detail_group",children:[Object(p.jsx)(o.e,{})," Start Date: ",Object(p.jsx)("span",{children:x})]}),Object(p.jsxs)("p",{className:"content_detail_group",children:[Object(p.jsx)(o.l,{})," Type: ",Object(p.jsx)("span",{children:n.contentType})," "]}),Object(p.jsxs)("p",{className:"content_detail_group",children:[Object(p.jsx)(o.p,{})," Source: ",Object(p.jsx)("span",{children:n.contentSource})," "]})]}),Object(p.jsxs)("div",{className:"content_detail_bottom_description",children:[Object(p.jsx)("p",{className:"content_detail_group",children:"Description:"}),Object(p.jsx)("p",{dangerouslySetInnerHTML:{__html:n.contentDescription}})]}),Object(p.jsxs)("div",{className:"content_detail_bottom_contents",children:[Object(p.jsx)("p",{className:"content_detail_group",children:"Contents:"}),"string"===typeof n.contents?Object(p.jsx)("div",{dangerouslySetInnerHTML:{__html:n.contents}}):Object(p.jsx)("div",{className:"pdf-style",dangerouslySetInnerHTML:{__html:n.contents}})]})]})]}),Object(p.jsx)("div",{className:"content_preview",children:Object(p.jsx)("div",{className:"content_preview_smartphone",children:Object(p.jsxs)("div",{className:"content_preview_smartphone_display",children:[Object(p.jsxs)("div",{className:"content_preview_smartphone_display_top",children:[Object(p.jsx)("img",{src:n.contentThumbnail,className:"content_preview_smartphone_display_top_img"}),Object(p.jsxs)("div",{className:"content_preview_smartphone_display_top_title",children:[Object(p.jsx)("h2",{children:n.contentName}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:x}),Object(p.jsxs)("p",{children:["Sumber: ",n.contentSource]})]})]}),Object(p.jsx)("div",{className:"content_preview_smartphone_display_html",dangerouslySetInnerHTML:{__html:n.contents}})]})})})]}),Object(p.jsxs)("div",{className:"komentar",children:[Object(p.jsx)("h1",{children:"Komentar"}),Object(p.jsxs)(m,{striped:!0,bordered:!0,hover:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"h-email",children:"Email User"}),Object(p.jsx)("th",{children:"Status"}),Object(p.jsx)("th",{children:"Komentar"}),Object(p.jsx)("th",{children:"Date Create"}),Object(p.jsx)("th",{colSpan:2,children:"Action"})]})}),Object(p.jsxs)("tbody",{children:[console.log(k),k?k.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.emailUser}),Object(p.jsx)("td",{children:e.status}),Object(p.jsx)("td",{children:e.comment}),Object(p.jsx)("td",{children:e.dateCreated}),Object(p.jsx)("td",{children:Object(p.jsx)(f,{variant:"danger",className:"btn2",children:"Edit"})}),Object(p.jsx)("td",{children:Object(p.jsx)(f,{variant:"danger",className:"btn",children:"Delete"})})]})})):""]})]})]})]})}},88:function(e,t,n){"use strict";n(2);var a=n(33),c=(n(89),n(1));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(c.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(c.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(c.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(c.jsx)(a.a,{}),Object(c.jsx)("p",{children:n})]})}},89:function(e,t,n){},92:function(e,t,n){"use strict";n(2);var a=n(12),c=(n(93),n(1));t.a=function(e){var t=e.headingName,n=e.routes,s=void 0===n?[]:n;return Object(c.jsxs)("div",{className:"Heading",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,t){return e.path?Object(c.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(c.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(c.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(c.jsx)("span",{children:e.name})," "]},t)}))})]})}},93:function(e,t,n){}}]);
//# sourceMappingURL=14.c6909df8.chunk.js.map