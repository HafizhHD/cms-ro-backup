(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[17],{280:function(e,t,n){},319:function(e,t,n){"use strict";n.r(t);var c=n(15),s=n(2),a=n(7),i=n(78),o=n(6),l=n(22),d=n.n(l),j=(n(280),n(23)),r=n(1);t.default=function(){var e=Object(s.useState)(),t=Object(c.a)(e,2),n=t[0],l=t[1],b=Object(s.useState)(!0),h=Object(c.a)(b,2),_=h[0],p=h[1],m=Object(s.useState)(),O=Object(c.a)(m,2),x=O[0],u=O[1],v=Object(s.useState)(!0),g=Object(c.a)(v,2),N=g[0],w=g[1],y={weekday:"long",year:"numeric",month:"long",day:"numeric"};return Object(s.useEffect)((function(){p(!0);var e=localStorage.getItem("contentSelected");if(console.log(e),e){var t={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).email,_id:e}};d()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentFilter",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),l(e.data.contents[0]),"active"===e.data.contents[0].status?w(!0):w(!1),console.log("This is ",n),p(!1);var t=new Date(e.data.contents[0].startDate).toLocaleDateString("en-UK",y);u(t)})).catch((function(e){console.log(e),p(!1)}))}}),[]),_?Object(r.jsx)(j.a,{}):Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(i.a,{headingName:"Content",routes:[{path:"/content",name:"On Going Content"},{path:"/content/view",name:"View Content Detail"}]}),Object(r.jsxs)("div",{className:"action_btn",children:[Object(r.jsx)(a.b,{to:"/content",className:"action_btn_nav",children:Object(r.jsxs)("h3",{children:[Object(r.jsx)(o.c,{})," Back to Content List"]})}),Object(r.jsx)(a.b,{to:"/content/edit",className:"action_btn_nav",children:Object(r.jsxs)("h3",{children:[Object(r.jsx)(o.i,{})," Edit This Content"]})}),Object(r.jsx)("span",{onClick:function(){localStorage.setItem("contentDeleting",n._id)},children:Object(r.jsx)(a.b,{to:"/content",className:"action_btn_nav",children:Object(r.jsxs)("h3",{children:[Object(r.jsx)(o.s,{})," Delete This Content"]})})}),Object(r.jsxs)("div",{className:"action_btn_switch",children:[Object(r.jsx)("p",{className:"action_btn_switch_status",children:"Status:"}),Object(r.jsx)("p",{className:"action_btn_switch_inactive",children:"Inactive"}),Object(r.jsxs)("label",{className:"action_btn_switch_switch",children:[Object(r.jsx)("input",{type:"checkbox",className:"action_btn_switch_switch_checkbox",defaultChecked:N,onChange:function(){var e=N?"inactive":"active",t={whereValues:{_id:n._id},newValues:{status:e}};console.log(t),d()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data)})).catch((function(e){console.log(e),p(!1)})),w(!N)}}),Object(r.jsx)("span",{className:"action_btn_switch_switch_slider"})]}),Object(r.jsx)("p",{className:"action_btn_switch_active",children:"Active"})]})]}),Object(r.jsxs)("div",{className:"section_title",children:[Object(r.jsx)("h2",{children:"Content Detail"}),Object(r.jsx)("h2",{children:"Content Preview pada Aplikasi Smartphone"})]}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("div",{className:"content_detail",children:[Object(r.jsxs)("div",{className:"content_detail_top",children:[Object(r.jsx)("div",{className:"content_detail_top_img",children:Object(r.jsx)("img",{src:n.contentThumbnail,className:"content_detail_top_img_image"})}),Object(r.jsx)("div",{className:"content_detail_top_title",children:Object(r.jsx)("h2",{children:n.contentName})})]}),Object(r.jsxs)("div",{className:"content_detail_bottom",children:[Object(r.jsxs)("div",{className:"content_detail_bottom_detail",children:[Object(r.jsxs)("p",{className:"content_detail_group",children:[Object(r.jsx)(o.f,{})," Start Date: ",Object(r.jsx)("span",{children:x})]}),Object(r.jsxs)("p",{className:"content_detail_group",children:[Object(r.jsx)(o.l,{})," Type: ",Object(r.jsx)("span",{children:n.contentType})," "]}),Object(r.jsxs)("p",{className:"content_detail_group",children:[Object(r.jsx)(o.p,{})," Source: ",Object(r.jsx)("span",{children:n.contentSource})," "]})]}),Object(r.jsxs)("div",{className:"content_detail_bottom_description",children:[Object(r.jsx)("p",{className:"content_detail_group",children:"Description:"}),Object(r.jsx)("p",{children:n.contentDescription})]}),Object(r.jsxs)("div",{className:"content_detail_bottom_contents",children:[Object(r.jsx)("p",{className:"content_detail_group",children:"Contents:"}),"Video"===n.contentType||"Image"===n.contentType||"Artikel"===n.contentType?Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:n.contents}}):Object(r.jsx)("p",{children:n.contents})]})]})]}),Object(r.jsx)("div",{className:"content_preview",children:Object(r.jsx)("div",{className:"content_preview_smartphone",children:Object(r.jsxs)("div",{className:"content_preview_smartphone_display",children:[Object(r.jsxs)("div",{className:"content_preview_smartphone_display_top",children:[Object(r.jsx)("div",{className:"content_preview_smartphone_display_top_img",children:Object(r.jsx)("img",{src:n.contentThumbnail,className:"content_preview_smartphone_display_top_img_image"})}),Object(r.jsxs)("div",{className:"content_preview_smartphone_display_top_title",children:[Object(r.jsx)("h2",{children:n.contentName}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:x}),Object(r.jsxs)("p",{children:["Sumber: ",n.contentSource]})]})]}),"Video"===n.contentType||"Image"===n.contentType||"Artikel"===n.contentType?Object(r.jsx)("div",{className:"content_preview_smartphone_display_html",dangerouslySetInnerHTML:{__html:n.contents}}):Object(r.jsx)("p",{children:n.contents})]})})})]})]})}},78:function(e,t,n){"use strict";n(2);var c=n(7),s=(n(79),n(1));t.a=function(e){var t=e.headingName,n=e.routes,a=void 0===n?[]:n;return Object(s.jsxs)("div",{className:"Heading",children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("ul",{className:"Heading__breadcumb",children:a.length>0&&a.map((function(e,t){return e.path?Object(s.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(s.jsx)(c.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(s.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(s.jsx)("span",{children:e.name})," "]},t)}))})]})}},79:function(e,t,n){}}]);
//# sourceMappingURL=17.e49cf59f.chunk.js.map