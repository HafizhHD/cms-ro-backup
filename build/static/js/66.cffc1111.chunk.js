(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[66],{103:function(e,t,n){"use strict";n.d(t,"m",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"o",(function(){return o})),n.d(t,"n",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return u})),n.d(t,"i",(function(){return j})),n.d(t,"b",(function(){return h})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return b})),n.d(t,"e",(function(){return O})),n.d(t,"g",(function(){return _})),n.d(t,"l",(function(){return f})),n.d(t,"a",(function(){return g}));var a=n(18),c=n.n(a),s=n(20),i=function(e){return c()({method:"post",url:s.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},r=function(e){return c()({method:"post",url:s.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return c()({method:"post",url:s.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return c()({method:"post",url:s.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return c()({method:"post",url:s.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return c()({method:"post",url:s.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return c()({method:"post",url:s.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return c()({method:"post",url:s.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return c()({method:"post",url:s.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return c()({method:"post",url:s.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return c()({method:"post",url:s.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return c()({method:"post",url:s.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},_=function(e){return c()({method:"post",url:s.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return c()({method:"post",url:s.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return c()({method:"post",url:s.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},1403:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(2),s=n(9),i=n(94),r=n(3),o=(n(18),n(889),n(36)),l=n(103),d=n(0);t.default=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],p=t[1],u=Object(c.useState)([]),j=Object(a.a)(u,2),h=j[0],m=j[1],b=Object(c.useState)(!0),O=Object(a.a)(b,2),_=O[0],f=O[1],g=Object(c.useState)(),x=Object(a.a)(g,2),v=(x[0],x[1]),N=Object(c.useState)(!0),y=Object(a.a)(N,2),T=(y[0],y[1]),S=Object(c.useState)(),w=Object(a.a)(S,2),C=(w[0],w[1],Object(c.useState)(!1)),F=Object(a.a)(C,2),I=(F[0],F[1],Object(c.useState)(null)),D=Object(a.a)(I,2),k=(D[0],D[1],Object(c.useState)(null)),H=Object(a.a)(k,2),L=(H[0],H[1],Object(c.useState)(!1)),P=Object(a.a)(L,2),U=(P[0],P[1],{weekday:"long",year:"numeric",month:"long",day:"numeric"});return Object(c.useEffect)((function(){f(!0);var e=localStorage.getItem("stepSelected");if(e){JSON.parse(localStorage.getItem("userData"));var t={whereKeyValues:{_id:e,status:{$in:["active","inactive"]}}};Object(l.f)(t).then((function(e){p(e.data.contents[0]),"active"===e.data.contents[0].status?T(!0):T(!1),m(Object.keys(e.data.contents[0].respons)),f(!1);var t=new Date(e.data.contents[0].startDate).toLocaleDateString("en-UK",U);v(t)})).catch((function(e){f(!1)}))}}),[]),_?Object(d.jsx)(o.a,{}):Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(i.a,{headingName:"Tahap",routes:[{path:"/cms/program",name:"Program"},{path:"/cms/program/view",name:"Lihat Detail Program"},{path:"/cms/program/view/step",name:"Lihat Detail Tahap"}]}),Object(d.jsxs)("div",{className:"action_btn",children:[Object(d.jsx)(s.b,{to:"/cms/program/view",className:"action_btn_nav",children:Object(d.jsxs)("h3",{children:[Object(d.jsx)(r.c,{})," Kembali ke Lihat Program"]})}),Object(d.jsx)(s.b,{to:"/cms/program/edit/step",className:"action_btn_nav",children:Object(d.jsxs)("h3",{children:[Object(d.jsx)(r.i,{})," Ubah Tahap Ini"]})}),Object(d.jsx)("span",{onClick:function(){localStorage.setItem("stepDeleting",n._id),localStorage.setItem("stepDeletingName",n.contentName)},children:Object(d.jsx)(s.b,{to:"/cms/program/view",className:"action_btn_nav",children:Object(d.jsxs)("h3",{children:[Object(d.jsx)(r.z,{})," Hapus Tahap Ini"]})})})]}),Object(d.jsxs)("div",{className:"section_title",children:[Object(d.jsx)("h2",{children:"Detail Tahap"}),Object(d.jsx)("h2",{children:"Content Preview pada Aplikasi Smartphone"})]}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"content_detail",children:[Object(d.jsxs)("div",{className:"content_detail_top",children:[Object(d.jsx)("div",{className:"content_detail_top_img",children:Object(d.jsx)("img",{src:n.contentThumbnail,className:"content_detail_top_img_image"})}),Object(d.jsx)("div",{className:"content_detail_top_title",children:Object(d.jsx)("h2",{children:n.contentName})})]}),Object(d.jsx)("div",{className:"content_detail_bottom",children:Object(d.jsxs)("div",{className:"content_detail_bottom_contents",children:[Object(d.jsx)("p",{className:"content_detail_group",children:"Isi Tahap:"}),"string"===typeof n.contents?Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:n.contents}}):Object(d.jsx)("div",{className:"pdf-style",dangerouslySetInnerHTML:{__html:n.contents}}),Object(d.jsx)("p",{className:"content_detail_group",children:"Pilihan Respon/Jawaban:"}),Object(d.jsx)("div",{className:"content_detail_bottom_contents_choice",children:h.map((function(e){return Object(d.jsxs)("p",{children:["\u2022 ",e]})}))})]})})]}),Object(d.jsx)("div",{className:"content_preview",children:Object(d.jsx)("div",{className:"content_preview_smartphone",children:Object(d.jsxs)("div",{className:"content_preview_smartphone_display",children:[Object(d.jsxs)("div",{className:"content_preview_smartphone_display_top",children:[Object(d.jsx)("img",{src:n.contentThumbnail,className:"content_preview_smartphone_display_top_img"}),Object(d.jsxs)("div",{className:"content_preview_smartphone_display_top_title",children:[Object(d.jsx)("h2",{children:n.contentName}),Object(d.jsx)("br",{})]})]}),Object(d.jsx)("div",{className:"content_preview_smartphone_display_html",dangerouslySetInnerHTML:{__html:n.contents}})]})})})]})]})}},889:function(e,t,n){},94:function(e,t,n){"use strict";n(2);var a=n(9),c=(n(95),n(0));t.a=function(e){var t=e.headingName,n=e.routes,s=void 0===n?[]:n;return Object(c.jsxs)("div",{className:"Heading",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,t){return e.path?Object(c.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(c.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(c.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(c.jsx)("span",{children:e.name})," "]},t)}))})]})}},95:function(e,t,n){}}]);
//# sourceMappingURL=66.cffc1111.chunk.js.map