(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[17],{275:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var c=a(14),s=a(2),n=(a(275),a(6)),r=a(12),i=a(85),o=(a(18),a(83)),d=a(5),l=a(97),j=a(82),b=a(1);t.default=function(){var e=Object(s.useState)(!0),t=Object(c.a)(e,2),a=t[0],h=t[1],m=Object(s.useState)(),u=Object(c.a)(m,2),_=u[0],O=u[1],x=Object(s.useState)(),p=Object(c.a)(x,2),g=p[0],N=p[1],v=Object(s.useState)(),f=Object(c.a)(v,2),D=f[0],w=f[1],C=Object(d.g)(),S=JSON.parse(localStorage.getItem("userData")),T={whereKeyValues:{cobrandEmail:S.email,status:"active"},orderKeyValues:{startDate:-1},limit:4},A={whereKeyValues:{cobrandEmail:S.email,status:"active"},orderKeyValues:{startDate:-1},limit:6};return Object(s.useEffect)((function(){h(!0),Object(l.c)(T).then((function(e){var t=e.data.programs.map((function(e){return Object(b.jsxs)("div",{className:"Dashboard__programs__list",children:[Object(b.jsx)("h3",{onClick:function(){localStorage.setItem("programSelected",e._id),C.push("/program/view")},children:e.programName}),Object(b.jsx)("p",{children:e.ProgramDescription})]})}));O(t),console.log(t),Object(l.a)(A).then((function(e){var t=e.data.contents.map((function(e){return Object(b.jsxs)("div",{className:"Dashboard__contents__item",children:[Object(b.jsxs)("div",{className:"Dashboard__contents__cover",children:[Object(b.jsx)("img",{src:e.contentThumbnail,className:"Dashboard__contents__cover-img"}),Object(b.jsx)("div",{className:"Dashboard__contents__shadow"})]}),Object(b.jsxs)("div",{className:"Dashboard__contents__description",children:[Object(b.jsx)("h3",{children:e.contentName}),Object(b.jsx)("p",{children:e.contentDescription}),Object(b.jsxs)(r.b,{to:"/content/view",onClick:function(){localStorage.setItem("contentSelected",e._id)},children:["Lihat Detail",Object(b.jsx)(n.d,{className:"Dashboard__cards_item-icon"})]})]})]})}));N(t),console.log(t);var a={countProgram:0,countContent:0},c={whereKeyValues:{cobrandEmail:S.email},limit:Number.MAX_SAFE_INTEGER},s=Object(l.c)(c),i=Object(l.a)(c);Promise.all([s,i]).then((function(e){a.countProgram=e[0].data.programs.length,a.countContent=e[1].data.contents.length,w(a),h(!1)}))})).catch((function(e){console.log(e),h(!1)}))})).catch((function(e){console.log(e)}))}),[]),a?Object(b.jsx)(o.a,{}):Object(b.jsxs)("div",{className:"Dashboard",children:[Object(b.jsxs)("div",{className:"div1",children:[Object(b.jsx)(i.a,{headingName:"YOUR CO-BRAND DATA"}),Object(b.jsxs)("a",{className:"wa2",href:"http://wa.me/628119004410",target:"_blank",children:[Object(b.jsx)(j.a,{className:"whatshap"})," Need Help? Click Here!"]})]}),Object(b.jsxs)("div",{className:"Dashboard__cards",children:[Object(b.jsxs)("div",{className:"Dashboard__cards_item",children:[Object(b.jsxs)("div",{className:"Dashboard__cards_item-heading",children:[Object(b.jsx)("h3",{children:"Programs Added"}),Object(b.jsx)(n.b,{className:"Dashboard__cards_item-icon"})]}),Object(b.jsx)("h1",{children:D.countProgram}),Object(b.jsx)("div",{className:"Dashboard__cards_item-details",children:Object(b.jsxs)(r.b,{to:"/program",children:["Lihat Detail",Object(b.jsx)(n.d,{className:"Dashboard__cards_item-icon"})]})})]}),Object(b.jsxs)("div",{className:"Dashboard__cards_item",children:[Object(b.jsxs)("div",{className:"Dashboard__cards_item-heading",children:[Object(b.jsx)("h3",{children:"Contents Added"}),Object(b.jsx)(n.b,{className:"Dashboard__cards_item-icon"})]}),Object(b.jsx)("h1",{children:D.countContent}),Object(b.jsx)("div",{className:"Dashboard__cards_item-details",children:Object(b.jsxs)(r.b,{to:"/content",children:["Lihat Detail",Object(b.jsx)(n.d,{className:"Dashboard__cards_item-icon"})]})})]})]}),Object(b.jsx)("h1",{children:"ONGOING PROGRAM"}),Object(b.jsx)("div",{className:"Dashboard__programs",children:0===_.length?Object(b.jsx)("h3",{children:"Tidak Ada Program"}):_}),Object(b.jsx)("h1",{children:"CONTENT LIST"}),Object(b.jsx)("div",{className:"Dashboard__contents",children:0===g.length?Object(b.jsx)("h3",{children:"Tidak Ada Konten"}):g})]})}},83:function(e,t,a){"use strict";a(2);var c=a(32),s=(a(84),a(1));t.a=function(e){var t=e.text,a=void 0===t?"Mohon Tunggu":t;return Object(s.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(s.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(s.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(s.jsx)(c.a,{}),Object(s.jsx)("p",{children:a})]})}},84:function(e,t,a){},85:function(e,t,a){"use strict";a(2);var c=a(12),s=(a(86),a(1));t.a=function(e){var t=e.headingName,a=e.routes,n=void 0===a?[]:a;return Object(s.jsxs)("div",{className:"Heading",children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("ul",{className:"Heading__breadcumb",children:n.length>0&&n.map((function(e,t){return e.path?Object(s.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(s.jsx)(c.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(s.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(s.jsx)("span",{children:e.name})," "]},t)}))})]})}},86:function(e,t,a){},97:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return d}));var c=a(18),s=a.n(c),n=a(20),r=function(e){return s()({method:"post",url:n.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return s()({method:"post",url:n.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return s()({method:"post",url:n.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return s()({method:"post",url:n.a+"/cobrand/HKBPDataFilter",data:e,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=17.ad7ff182.chunk.js.map