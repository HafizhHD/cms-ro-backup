(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[19],{275:function(e,a,t){},316:function(e,a,t){"use strict";t.r(a);var c=t(15),r=t(2),s=t(7),i=t(78),n=t(6),o=t(22),l=t.n(o),d=(t(275),t(23)),j=t(1);a.default=function(){var e=Object(r.useState)(),a=Object(c.a)(e,2),t=a[0],o=a[1],m=Object(r.useState)(!0),b=Object(c.a)(m,2),g=b[0],p=b[1],h=Object(r.useState)(),O=Object(c.a)(h,2),_=O[0],u=O[1],x={weekday:"long",year:"numeric",month:"long",day:"numeric"};return Object(r.useEffect)((function(){p(!0);var e=localStorage.getItem("programSelected");if(console.log(e),e){var a={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).email,_id:e}};l()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:a,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),o(e.data.programs[0]),console.log("This is ",t),p(!1);var a=new Date(e.data.programs[0].startDate).toLocaleDateString("en-UK",x);u(a)})).catch((function(e){console.log(e),p(!1)}))}}),[]),g?Object(j.jsx)(d.a,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.a,{headingName:"Program",routes:[{path:"/program",name:"On Going Program"},{path:"/program/view",name:"View Program Detail"}]}),Object(j.jsxs)("div",{className:"action_btn",children:[Object(j.jsx)(s.b,{to:"/program",className:"action_btn_nav",children:Object(j.jsxs)("h3",{children:[Object(j.jsx)(n.c,{})," Back to Program List"]})}),Object(j.jsx)(s.b,{to:"/program/edit",className:"action_btn_nav",children:Object(j.jsxs)("h3",{children:[Object(j.jsx)(n.i,{})," Edit This Program"]})}),Object(j.jsx)("span",{onClick:function(){localStorage.setItem("programDeleting",t._id)},children:Object(j.jsx)(s.b,{to:"/program",className:"action_btn_nav",children:Object(j.jsxs)("h3",{children:[Object(j.jsx)(n.s,{})," Delete This Program"]})})})]}),Object(j.jsxs)("div",{className:"program_detail",children:[Object(j.jsxs)("div",{className:"program_detail_top",children:[Object(j.jsx)("div",{className:"program_detail_top_img",children:Object(j.jsx)("img",{src:t.programthumnail,className:"program_detail_top_img_image"})}),Object(j.jsx)("div",{className:"program_detail_top_title",children:Object(j.jsx)("h2",{children:t.programName})})]}),Object(j.jsxs)("div",{className:"program_detail_bottom",children:[Object(j.jsx)("div",{className:"program_detail_bottom_date",children:Object(j.jsxs)("p",{className:"program_detail_group",children:[Object(j.jsx)(n.f,{})," Start Date: ",Object(j.jsx)("span",{children:_})]})}),Object(j.jsx)("div",{className:"program_detail_bottom_description",children:Object(j.jsx)("p",{children:t.ProgramDescription})})]})]})]})}},78:function(e,a,t){"use strict";t(2);var c=t(7),r=(t(79),t(1));a.a=function(e){var a=e.headingName,t=e.routes,s=void 0===t?[]:t;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:a}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,a){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(c.b,{exact:!0,to:e.path,children:e.name})," "]},a):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},a)}))})]})}},79:function(e,a,t){}}]);
//# sourceMappingURL=19.4329820c.chunk.js.map