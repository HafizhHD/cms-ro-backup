(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[23],{511:function(e,t,a){"use strict";a.r(t);var c=a(14),r=a(2),n=(a(210),a(121)),o=a(211),s=(a(212),a(99)),i=a(7),l=a(5),b=(a(18),a(88)),j=a(16),u=a(113),g=a(1);t.default=Object(j.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeleteProgram:function(t,a,c){return e(Object(s.d)(t,a,c))}}}))((function(e){var t=e.isCurrentlyLoading,a=e.onDeleteProgram,s=Object(r.useState)(!1),j=Object(c.a)(s,2),O=(j[0],j[1],Object(r.useState)(!0)),d=Object(c.a)(O,2),m=d[0],p=d[1],f=Object(r.useState)(),h=Object(c.a)(f,2),S=h[0],x=h[1],N=Object(r.useState)(null),D=Object(c.a)(N,2),w=D[0],A=D[1],E=JSON.parse(localStorage.getItem("userData")),I={whereKeyValues:{cobrandEmail:E.email},limit:Number.MAX_SAFE_INTEGER};function P(){Object(u.c)(I).then((function(e){x(e.data),console.log(e.data),p(!1)})).catch((function(e){console.log(e),p(!1)}))}return Object(r.useEffect)((function(){p(!0),localStorage.getItem("programDeleting")&&(A(localStorage.getItem("programDeleting")),localStorage.removeItem("programDeleting")),P()}),[]),Object(r.useEffect)((function(){w&&(p(!0),a(E.email,w,P))}),[w]),m||t?Object(g.jsx)(b.a,{}):Object(g.jsxs)("div",{className:"Program",children:[Object(g.jsx)("h1",{children:"PROGRAM"}),Object(g.jsxs)(i.b,{to:"/program/add",id:"add_program",children:[Object(g.jsx)(l.s,{className:"IconAdd"}),Object(g.jsx)("span",{children:"Create New Program"})]}),Object(g.jsx)("div",{className:"Program__table",children:Object(g.jsx)(n.a,{COLUMNS:Object(o.a)(A),DATA:S.programs})})]})}))}}]);
//# sourceMappingURL=23.e38eaa36.chunk.js.map