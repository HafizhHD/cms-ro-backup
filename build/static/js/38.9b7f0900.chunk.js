(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[38],{100:function(e,a,t){"use strict";t(2);var c=t(7),r=(t(102),t(0));a.a=function(e){var a=e.headingName,t=e.routes,s=void 0===t?[]:t;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:a}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,a){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(c.b,{exact:!0,to:e.path,children:e.name})," "]},a):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},a)}))})]})}},102:function(e,a,t){},103:function(e,a,t){"use strict";t(2);var c=t(35),r=(t(104),t(0));a.a=function(e){var a=e.text,t=void 0===a?"Mohon Tunggu":a;return Object(r.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(r.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(r.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(r.jsx)(c.a,{}),Object(r.jsx)("p",{children:t})]})}},104:function(e,a,t){},1100:function(e,a,t){"use strict";t.r(a);var c=t(10),r=t(2),s=t(7),n=t(100),i=t(3),o=t(18),l=t.n(o),d=(t(640),t(103)),j=t(0);a.default=function(){var e=Object(r.useState)(),a=Object(c.a)(e,2),t=a[0],o=a[1],m=Object(r.useState)(!0),b=Object(c.a)(m,2),g=b[0],p=b[1],h=Object(r.useState)(),O=Object(c.a)(h,2),u=O[0],_=O[1],x=Object(r.useState)(null),v=Object(c.a)(x,2),N=(v[0],v[1],{weekday:"long",year:"numeric",month:"long",day:"numeric"});return Object(r.useEffect)((function(){p(!0);var e=localStorage.getItem("programSelected");if(console.log(e),e){var a={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).email,_id:e}};l()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:a,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),o(e.data.programs[0]),console.log("This is ",t),p(!1);var a=new Date(e.data.programs[0].startDate).toLocaleDateString("en-UK",N);_(a)})).catch((function(e){console.log(e),p(!1)}))}}),[]),g?Object(j.jsx)(d.a,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(n.a,{headingName:"Program",routes:[{path:"/cms/program",name:"On Going Program"},{path:"/cms/program/view",name:"View Program Detail"}]}),Object(j.jsxs)("div",{className:"program_action_btn",children:[Object(j.jsx)(s.b,{to:"/cms/program",className:"program_action_btn_nav",children:Object(j.jsxs)("h3",{children:[Object(j.jsx)(i.b,{})," Back to Program List"]})}),Object(j.jsx)(s.b,{to:"/cms/program/edit",className:"program_action_btn_nav",children:Object(j.jsxs)("h3",{children:[Object(j.jsx)(i.h,{})," Edit This Program"]})}),Object(j.jsx)("span",{onClick:function(){localStorage.setItem("programDeleting",t._id)},children:Object(j.jsx)(s.b,{to:"/cms/program",className:"program_action_btn_nav",children:Object(j.jsxs)("h3",{children:[Object(j.jsx)(i.y,{})," Delete This Program"]})})})]}),Object(j.jsxs)("div",{className:"program_detail",children:[Object(j.jsxs)("div",{className:"program_detail_top",children:[Object(j.jsx)("div",{className:"program_detail_top_img",children:Object(j.jsx)("img",{src:t.programthumnail,className:"program_detail_top_img_image"})}),Object(j.jsx)("div",{className:"program_detail_top_title",children:Object(j.jsx)("h2",{children:t.programName})})]}),Object(j.jsxs)("div",{className:"program_detail_bottom",children:[Object(j.jsx)("div",{className:"program_detail_bottom_date",children:Object(j.jsxs)("p",{className:"program_detail_group",children:[Object(j.jsx)(i.d,{})," Start Date: ",Object(j.jsx)("span",{children:u})]})}),Object(j.jsx)("div",{className:"program_detail_bottom_description",children:Object(j.jsx)("p",{children:t.ProgramDescription})})]})]})]})}},640:function(e,a,t){}}]);
//# sourceMappingURL=38.9b7f0900.chunk.js.map