(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[27],{110:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return o}));var c=a(18),s=a.n(c),n=a(20),r=function(e){return s()({method:"post",url:n.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return s()({method:"post",url:n.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return s()({method:"post",url:n.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return s()({method:"post",url:n.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})}},1104:function(e,t,a){"use strict";a.r(t);var c=a(10),s=a(2),n=(a(775),a(3)),r=a(7),i=a(95),l=(a(18),a(98)),o=a(6),d=a(110),j=a(84),b=a(1);t.default=function(){var e=Object(s.useState)(!0),t=Object(c.a)(e,2),a=t[0],h=t[1],u=Object(s.useState)(),O=Object(c.a)(u,2),m=(O[0],O[1]),x=Object(s.useState)(),_=Object(c.a)(x,2),v=(_[0],_[1]),p=Object(s.useState)(),g=Object(c.a)(p,2),D=g[0],N=g[1],f=Object(s.useState)("5"),T=Object(c.a)(f,2),y=T[0],L=T[1],C=Object(s.useState)("5"),S=Object(c.a)(C,2),A=S[0],P=S[1],w=Object(s.useState)(18),E=Object(c.a)(w,2),R=E[0],F=E[1],k=Object(s.useState)("5"),H=Object(c.a)(k,2),I=H[0],V=H[1],J=Object(s.useState)(123),M=Object(c.a)(J,2),G=M[0],K=M[1],U=Object(s.useState)("5"),X=Object(c.a)(U,2),B=X[0],Y=X[1],Z=Object(s.useState)(250),q=Object(c.a)(Z,2),z=q[0],Q=q[1],W=Object(s.useState)(!1),$=Object(c.a)(W,2),ee=$[0],te=$[1],ae=(Object(o.g)(),JSON.parse(localStorage.getItem("userData"))),ce=[250,209,125,23,9];return ae.email,ae.email,Object(s.useEffect)((function(){h(!0);var e={countProgram:0,countContent:0},t={whereKeyValues:{cobrandEmail:ae.email},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER},a={whereKeyValues:{cobrandEmail:ae.email},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER},c=Object(d.b)(t),s=Object(d.a)(a);Promise.all([c,s]).then((function(t){m(t[0].data.programs),v(t[1].data.contents),e.countProgram=t[0].data.programs.length,e.countContent=t[1].data.contents.length,N(e),h(!1)}))}),[]),Object(s.useEffect)((function(){if("1"===y){N({countProgram:1,countContent:0})}else if("2"===y){N({countProgram:1,countContent:1})}else if("3"===y){N({countProgram:1,countContent:5})}else if("4"===y){N({countProgram:1,countContent:9})}else if("5"===y){N({countProgram:1,countContent:14})}"1"===A?F(1):"2"===A?F(5):"3"===A?F(6):"4"===A?F(17):"5"===A&&F(24),"1"===I?K(12):"2"===I?K(23):"3"===I?K(48):("4"===I||"5"===I)&&K(123),"1"===B?Q(7*ce[4]):"2"===B?Q(7*ce[3]):"3"===B?Q(7*ce[2]):"4"===B?Q(7*ce[1]):"5"===B&&Q(7*ce[0]),te(!1)}),[ee]),a?Object(b.jsx)(l.a,{}):Object(b.jsxs)("div",{className:"Dashboard",children:[Object(b.jsxs)("div",{className:"div1",children:[Object(b.jsx)(i.a,{headingName:"YOUR CO-BRAND DATA"}),Object(b.jsxs)("a",{className:"wa2",href:"http://wa.me/628119004410",target:"_blank",children:[Object(b.jsx)(j.a,{className:"whatshap"})," Need Help? Click Here!"]})]}),Object(b.jsxs)("div",{className:"Dashboard__cards",children:[Object(b.jsxs)("div",{className:"Dashboard__cards_item",children:[Object(b.jsxs)("div",{className:"Dashboard__cards_item-heading",children:[Object(b.jsx)("h3",{children:"Programs Added"}),Object(b.jsxs)("select",{name:"userTypeProgram",children:[Object(b.jsx)("option",{value:"1",children:"Today"}),Object(b.jsx)("option",{value:"2",children:"Last 7 Days"}),Object(b.jsx)("option",{value:"3",children:"Last 30 Days"}),Object(b.jsx)("option",{value:"4",children:"Last 365 Days"}),Object(b.jsx)("option",{value:"5",children:"All Time"})]})]}),Object(b.jsx)("h1",{children:D.countProgram}),Object(b.jsx)("div",{className:"Dashboard__cards_item-details",children:Object(b.jsxs)(r.b,{to:"/program",children:["Lihat Detail",Object(b.jsx)(n.c,{className:"Dashboard__cards_item-icon"})]})})]}),Object(b.jsxs)("div",{className:"Dashboard__cards_item",children:[Object(b.jsxs)("div",{className:"Dashboard__cards_item-heading",children:[Object(b.jsx)("h3",{children:"Contents Added"}),Object(b.jsxs)("select",{name:"userType",value:y,onChange:function(e){console.log("bruh"),console.log(e.currentTarget.value),L(e.currentTarget.value),te(!0)},children:[Object(b.jsx)("option",{value:"1",children:"Today"}),Object(b.jsx)("option",{value:"2",children:"Last 7 Days"}),Object(b.jsx)("option",{value:"3",children:"Last 30 Days"}),Object(b.jsx)("option",{value:"4",children:"Last 365 Days"}),Object(b.jsx)("option",{value:"5",children:"All Time"})]})]}),Object(b.jsx)("h1",{children:D.countContent}),Object(b.jsx)("div",{className:"Dashboard__cards_item-details",children:Object(b.jsxs)(r.b,{to:"/content",children:["Lihat Detail",Object(b.jsx)(n.c,{className:"Dashboard__cards_item-icon"})]})})]}),Object(b.jsxs)("div",{className:"Dashboard__cards_item",children:[Object(b.jsxs)("div",{className:"Dashboard__cards_item-heading",children:[Object(b.jsx)("h3",{children:"Total Users Registered"}),Object(b.jsxs)("select",{name:"userRegSelect",value:A,onChange:function(e){console.log("bruh"),console.log(e.currentTarget.value),P(e.currentTarget.value),te(!0)},children:[Object(b.jsx)("option",{value:"1",children:"Today"}),Object(b.jsx)("option",{value:"2",children:"Last 7 Days"}),Object(b.jsx)("option",{value:"3",children:"Last 30 Days"}),Object(b.jsx)("option",{value:"4",children:"Last 365 Days"}),Object(b.jsx)("option",{value:"5",children:"All Time"})]})]}),Object(b.jsx)("h1",{children:R}),Object(b.jsx)("div",{className:"Dashboard__cards_item-details",children:Object(b.jsxs)(r.b,{to:"/",children:["Lihat Detail ",Object(b.jsx)(n.c,{className:"Dashboard__cards_item-icon"})]})})]})]}),Object(b.jsxs)("div",{className:"Dashboard__cards",children:[Object(b.jsxs)("div",{className:"Dashboard__cards_item",children:[Object(b.jsxs)("div",{className:"Dashboard__cards_item-heading",children:[Object(b.jsx)("h3",{children:"Total Program Views"}),Object(b.jsxs)("select",{name:"programTotalSelect",value:I,onChange:function(e){console.log("bruh"),console.log(e.currentTarget.value),V(e.currentTarget.value),te(!0)},children:[Object(b.jsx)("option",{value:"1",children:"Today"}),Object(b.jsx)("option",{value:"2",children:"Last 7 Days"}),Object(b.jsx)("option",{value:"3",children:"Last 30 Days"}),Object(b.jsx)("option",{value:"4",children:"Last 365 Days"}),Object(b.jsx)("option",{value:"5",children:"All Time"})]})]}),Object(b.jsx)("h1",{children:G}),Object(b.jsx)("div",{className:"Dashboard__cards_item-details",children:Object(b.jsxs)(r.b,{to:"/program",children:["Lihat Detail",Object(b.jsx)(n.c,{className:"Dashboard__cards_item-icon"})]})})]}),Object(b.jsxs)("div",{className:"Dashboard__cards_item",children:[Object(b.jsxs)("div",{className:"Dashboard__cards_item-heading",children:[Object(b.jsx)("h3",{children:"Total Content Views"}),Object(b.jsxs)("select",{name:"contentTotalSelect",value:B,onChange:function(e){console.log("bruh"),console.log(e.currentTarget.value),Y(e.currentTarget.value),te(!0)},children:[Object(b.jsx)("option",{value:"1",children:"Today"}),Object(b.jsx)("option",{value:"2",children:"Last 7 Days"}),Object(b.jsx)("option",{value:"3",children:"Last 30 Days"}),Object(b.jsx)("option",{value:"4",children:"Last 365 Days"}),Object(b.jsx)("option",{value:"5",children:"All Time"})]})]}),Object(b.jsx)("h1",{children:z}),Object(b.jsx)("div",{className:"Dashboard__cards_item-details",children:Object(b.jsxs)(r.b,{to:"/content",children:["Lihat Detail",Object(b.jsx)(n.c,{className:"Dashboard__cards_item-icon"})]})})]})]})]})}},775:function(e,t,a){},95:function(e,t,a){"use strict";a(2);var c=a(7),s=(a(97),a(1));t.a=function(e){var t=e.headingName,a=e.routes,n=void 0===a?[]:a;return Object(s.jsxs)("div",{className:"Heading",children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("ul",{className:"Heading__breadcumb",children:n.length>0&&n.map((function(e,t){return e.path?Object(s.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(s.jsx)(c.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(s.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(s.jsx)("span",{children:e.name})," "]},t)}))})]})}},97:function(e,t,a){},98:function(e,t,a){"use strict";a(2);var c=a(35),s=(a(99),a(1));t.a=function(e){var t=e.text,a=void 0===t?"Mohon Tunggu":t;return Object(s.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(s.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(s.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(s.jsx)(c.a,{}),Object(s.jsx)("p",{children:a})]})}},99:function(e,t,a){}}]);
//# sourceMappingURL=27.5d8fc06c.chunk.js.map