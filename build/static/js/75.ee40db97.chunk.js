(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[75],{1454:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n(2),c=n(9),o=n(96),s=n(3),i=(n(18),n(915),n(35)),d=n(99),l=n(0);e.default=function(){var t=Object(r.useState)(""),e=Object(a.a)(t,2),n=e[0],u=e[1],p=Object(r.useState)([]),j=Object(a.a)(p,2),h=j[0],m=j[1],b=Object(r.useState)(!0),O=Object(a.a)(b,2),_=O[0],f=O[1],g=Object(r.useState)(),v=Object(a.a)(g,2),x=(v[0],v[1]),y=Object(r.useState)(!0),N=Object(a.a)(y,2),T=(N[0],N[1]),C=Object(r.useState)(),F=Object(a.a)(C,2),S=(F[0],F[1],Object(r.useState)(!1)),w=Object(a.a)(S,2),I=(w[0],w[1],Object(r.useState)(null)),D=Object(a.a)(I,2),k=(D[0],D[1],Object(r.useState)(null)),H=Object(a.a)(k,2),L=(H[0],H[1],Object(r.useState)(!1)),A=Object(a.a)(L,2),M=(A[0],A[1],{weekday:"long",year:"numeric",month:"long",day:"numeric"});return Object(r.useEffect)((function(){f(!0);var t=localStorage.getItem("stepSelected");if(t){JSON.parse(localStorage.getItem("userData"));var e={whereKeyValues:{_id:t,status:{$in:["active","inactive"]}}};Object(d.h)(e).then((function(t){u(t.data.contents[0]),"active"===t.data.contents[0].status?T(!0):T(!1),m(Object.keys(t.data.contents[0].respons)),f(!1);var e=new Date(t.data.contents[0].startDate).toLocaleDateString("en-UK",M);x(e)})).catch((function(t){f(!1)}))}}),[]),_?Object(l.jsx)(i.a,{}):Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(o.a,{headingName:"Tahap",routes:[{path:"/cms/program",name:"Program"},{path:"/cms/program/view",name:"Lihat Detail Program"},{path:"/cms/program/view/step",name:"Lihat Detail Tahap"}]}),Object(l.jsxs)("div",{className:"action_btn",children:[Object(l.jsx)(c.b,{to:"/cms/program/view",className:"action_btn_nav",children:Object(l.jsxs)("h3",{children:[Object(l.jsx)(s.c,{})," Kembali ke Lihat Program"]})}),Object(l.jsx)(c.b,{to:"/cms/program/edit/step",className:"action_btn_nav",children:Object(l.jsxs)("h3",{children:[Object(l.jsx)(s.i,{})," Ubah Tahap Ini"]})}),Object(l.jsx)("span",{onClick:function(){localStorage.setItem("stepDeleting",n._id),localStorage.setItem("stepDeletingName",n.contentName)},children:Object(l.jsx)(c.b,{to:"/cms/program/view",className:"action_btn_nav",children:Object(l.jsxs)("h3",{children:[Object(l.jsx)(s.A,{})," Hapus Tahap Ini"]})})})]}),Object(l.jsxs)("div",{className:"section_title",children:[Object(l.jsx)("h2",{children:"Detail Tahap"}),Object(l.jsx)("h2",{children:"Content Preview pada Aplikasi Smartphone"})]}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("div",{className:"content_detail",children:[Object(l.jsxs)("div",{className:"content_detail_top",children:[Object(l.jsx)("div",{className:"content_detail_top_img",children:Object(l.jsx)("img",{src:n.contentThumbnail,className:"content_detail_top_img_image"})}),Object(l.jsx)("div",{className:"content_detail_top_title",children:Object(l.jsx)("h2",{children:n.contentName})})]}),Object(l.jsx)("div",{className:"content_detail_bottom",children:Object(l.jsxs)("div",{className:"content_detail_bottom_contents",children:[Object(l.jsx)("p",{className:"content_detail_group",children:"Isi Tahap:"}),"string"===typeof n.contents?Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:n.contents}}):Object(l.jsx)("div",{className:"pdf-style",dangerouslySetInnerHTML:{__html:n.contents}}),Object(l.jsx)("p",{className:"content_detail_group",children:"Pilihan Respon/Jawaban:"}),Object(l.jsx)("div",{className:"content_detail_bottom_contents_choice",children:h.map((function(t){return Object(l.jsxs)("p",{children:["\u2022 ",t]})}))})]})})]}),Object(l.jsx)("div",{className:"content_preview",children:Object(l.jsx)("div",{className:"content_preview_smartphone",children:Object(l.jsxs)("div",{className:"content_preview_smartphone_display",children:[Object(l.jsxs)("div",{className:"content_preview_smartphone_display_top",children:[Object(l.jsx)("img",{src:n.contentThumbnail,className:"content_preview_smartphone_display_top_img"}),Object(l.jsxs)("div",{className:"content_preview_smartphone_display_top_title",children:[Object(l.jsx)("h2",{children:n.contentName}),Object(l.jsx)("br",{})]})]}),Object(l.jsx)("div",{className:"content_preview_smartphone_display_html",dangerouslySetInnerHTML:{__html:n.contents}})]})})})]})]})}},915:function(t,e,n){},96:function(t,e,n){"use strict";n(2);var a=n(9),r=(n(97),n(0));e.a=function(t){var e=t.headingName,n=t.routes,c=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:e}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:c.length>0&&c.map((function(t,e){return t.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:t.path,children:t.name})," "]},e):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:t.name})," "]},e)}))})]})}},97:function(t,e,n){},99:function(t,e,n){"use strict";n.d(e,"r",(function(){return o})),n.d(e,"h",(function(){return s})),n.d(e,"w",(function(){return i})),n.d(e,"s",(function(){return d})),n.d(e,"d",(function(){return l})),n.d(e,"l",(function(){return u})),n.d(e,"c",(function(){return p})),n.d(e,"m",(function(){return j})),n.d(e,"b",(function(){return h})),n.d(e,"o",(function(){return m})),n.d(e,"n",(function(){return b})),n.d(e,"e",(function(){return O})),n.d(e,"j",(function(){return _})),n.d(e,"i",(function(){return f})),n.d(e,"k",(function(){return g})),n.d(e,"q",(function(){return v})),n.d(e,"a",(function(){return x})),n.d(e,"f",(function(){return y})),n.d(e,"g",(function(){return N})),n.d(e,"u",(function(){return T})),n.d(e,"t",(function(){return C})),n.d(e,"p",(function(){return F})),n.d(e,"v",(function(){return S}));var a=n(18),r=n.n(a),c=n(20),o=function(t){return r()({method:"post",url:c.a+"/cobrand/programFilter",data:t,headers:{"Content-Type":"application/json"}})},s=function(t){return r()({method:"post",url:c.a+"/cobrand/contentFilter",data:t,headers:{"Content-Type":"application/json"}})},i=function(t){return r()({method:"post",url:c.a+"/user/userFilter",data:t,headers:{"Content-Type":"application/json"}})},d=function(t){return r()({method:"post",url:c.a+"/cobrand/redZoneFilter",data:t,headers:{"Content-Type":"application/json"}})},l=function(t){return r()({method:"post",url:c.a+"/user/appUsageFilter",data:t,headers:{"Content-Type":"application/json"}})},u=function(t){return r()({method:"post",url:c.a+"/user/deviceUsageScheduleFilter",data:t,headers:{"Content-Type":"application/json"}})},p=function(t){return r()({method:"post",url:c.a+"/user/appUsageLimitFilter",data:t,headers:{"Content-Type":"application/json"}})},j=function(t){return r()({method:"post",url:c.a+"/user/childModeAsuhFilter",data:t,headers:{"Content-Type":"application/json"}})},h=function(t){return r()({method:"post",url:c.a+"/user/appIconFilter",data:t,headers:{"Content-Type":"application/json"}})},m=function(t){return r()({method:"post",url:c.a+"/user/broadcastFilter",data:t,headers:{"Content-Type":"application/json"}})},b=function(t){return r()({method:"post",url:c.a+"/cms/notificationCategoryFilter",data:t,headers:{"Content-Type":"application/json"}})},O=function(t){return r()({method:"post",url:c.a+"/cms/audianceTargetFilter",data:t,headers:{"Content-Type":"application/json"}})},_=function(t){return r()({method:"post",url:c.a+"/cms/contentTopicFilter",data:t,headers:{"Content-Type":"application/json"}})},f=function(t){return r()({method:"post",url:c.a+"/user/userContentResponFilter",data:t,headers:{"Content-Type":"application/json"}})},g=function(t){return r()({method:"post",url:c.a+"/user/userContentViewFilter",data:t,headers:{"Content-Type":"application/json"}})},v=function(t){return r()({method:"post",url:c.a+"/cms/programCategoryFilter",data:t,headers:{"Content-Type":"application/json"}})},x=function(t){return r()({method:"post",url:c.a+"/cms/userFilter",data:t,headers:{"Content-Type":"application/json"}})},y=function(t){return r()({method:"post",url:c.a+"/cobrand/cobrandComunityFilter",data:t,headers:{"Content-Type":"application/json"}})},N=function(t){return r()({method:"post",url:c.a+"/cobrand/cobrandComunityMemberFilter",data:t,headers:{"Content-Type":"application/json"}})},T=function(t){return r()({method:"post",url:c.a+"/cobrand/AlAzharSchoolFilter",data:t,headers:{"Content-Type":"application/json"}})},C=function(t){return r()({method:"post",url:c.a+"/cobrand/cobrandGroupMitraAsuhFilter",data:t,headers:{"Content-Type":"application/json"}})},F=function(t){return r()({method:"post",url:c.a+"/cobrand/prayAlertMessageFilter",data:t,headers:{"Content-Type":"application/json"}})},S=function(t){return r()({method:"post",url:c.a+"/user/appDeviceFilter",data:t,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=75.ee40db97.chunk.js.map