(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[21],{371:function(e,t,a){},520:function(e,t,a){"use strict";a.r(t);var c=a(38),s=a(14);var n=a(2),r=a(3),l=(a(371),a(210),a(18)),i=a.n(l),o=a(88),j=a(113),d=a(121),b=a(211),u=(a(212),a(99),a(16),a(1));t.default=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(n.useState)(!0),a=Object(s.a)(t,2),l=a[0],O=a[1],h=Object(n.useState)(!1),m=Object(s.a)(h,2),p=m[0],g=m[1],f=Object(n.useState)(!1),v=Object(s.a)(f,2),x=v[0],_=v[1],N=Object(n.useState)(!1),R=Object(s.a)(N,2),E=R[0],S=R[1],k=Object(n.useState)(!1),T=Object(s.a)(k,2),A=T[0],y=T[1],I=Object(n.useState)("all"),H=Object(s.a)(I,2),w=H[0],U=H[1],F=Object(n.useState)("all"),K=Object(s.a)(F,2),M=K[0],P=K[1],V=Object(n.useState)(""),G=Object(s.a)(V,2),C=G[0],D=(G[1],Object(n.useState)("")),X=Object(s.a)(D,2),J=X[0],z=(X[1],Object(n.useState)(0)),B=Object(s.a)(z,2),L=B[0],W=B[1],q=Object(n.useState)(0),Q=Object(s.a)(q,2),Y=Q[0],Z=Q[1],$=Object(n.useState)(0),ee=Object(s.a)($,2),te=ee[0],ae=ee[1],ce=Object(n.useState)([]),se=Object(s.a)(ce,2),ne=(se[0],se[1]),re=Object(n.useState)([]),le=Object(s.a)(re,2),ie=(le[0],le[1]),oe=Object(n.useState)([]),je=Object(s.a)(oe,2),de=(je[0],je[1]),be=Object(n.useState)(),ue=Object(s.a)(be,2),Oe=ue[0],he=ue[1],me=Object(n.useState)(),pe=Object(s.a)(me,2),ge=pe[0],fe=pe[1],ve=Object(n.useState)(!1),xe=Object(s.a)(ve,2),_e=(xe[0],xe[1],Object(n.useState)()),Ne=Object(s.a)(_e,2),Re=Ne[0],Ee=Ne[1],Se=Object(n.useState)(null),ke=Object(s.a)(Se,2),Te=ke[0],Ae=ke[1],ye={whereKeyValues:{cobrandEmail:JSON.parse(localStorage.getItem("userData")).email},limit:Number.MAX_SAFE_INTEGER};return Object(n.useEffect)((function(){O(!0),localStorage.getItem("programDeleting")&&(Ae(localStorage.getItem("programDeleting")),localStorage.removeItem("programDeleting")),Object(j.c)(ye).then((function(e){Ee(e.data),console.log(e.data),O(!1)})).catch((function(e){console.log(e),O(!1)}))}),[]),Object(n.useEffect)((function(){Te&&O(!0)}),[Te]),Object(n.useEffect)((function(){var e=[],t={},a=Object(j.d)({limit:Number.MAX_SAFE_INTEGER}),s=Object(j.b)({limit:Number.MAX_SAFE_INTEGER});Promise.all([a,s]).then((function(a){console.log(a[1].data),a[1].data.HKBPData.forEach((function(e){e.distrik in t||(t=Object.assign(t,Object(c.a)({},e.distrik,{}))),"Ressort "+e.ressort in t[e.distrik]||(t[e.distrik]=Object.assign(t[e.distrik],Object(c.a)({},"Ressort "+e.ressort,[]))),t[e.distrik]["Ressort "+e.ressort].includes("Huria "+e.nama)||t[e.distrik]["Ressort "+e.ressort].push("Huria "+e.nama)})),console.log(t),he(t),Object.keys(t).forEach((function(t){var c=0;a[0].data.users.forEach((function(e){e.namaHkbp&&e.namaHkbp.includes(t)&&""!==e.namaHkbp&&(c+=1)})),e.push(c)})),fe(a[0].data.users),ne(e),O(!1)}))}),[]),Object(n.useEffect)((function(){var e={whereKeyValues:{packageId:"com.asia.ruangortu"},limit:Number.MAX_SAFE_INTEGER};"all"!==w&&(e.whereKeyValues={userType:w,packageId:"com.asia.ruangortu"}),console.log(e),Object(j.d)(e).then((function(e){W(e.data.users.length),g(!1)})).catch((function(e){console.log(e),g(!1)}))}),[p]),Object(n.useEffect)((function(){var e={whereKeyValues:{status:"active",packageId:"com.asia.ruangortu"},limit:Number.MAX_SAFE_INTEGER};"all"!==M&&(e.whereKeyValues={userType:M,status:"active",packageId:"com.asia.ruangortu"}),console.log(e),Object(j.d)(e).then((function(e){Z(e.data.users.length);var t={whereKeyValues:{packageId:"com.asia.ruangortu"},limit:Number.MAX_SAFE_INTEGER};"all"!==M&&(t.whereKeyValues={userType:M,packageId:"com.asia.ruangortu"}),Object(j.d)(t).then((function(t){ae(t.data.users.length-e.data.users.length),_(!1)})).catch((function(e){console.log(e),_(!1)}))})).catch((function(e){console.log(e),_(!1)}))}),[x]),Object(n.useEffect)((function(){if(E){var e=[];Object.keys(Oe[C]).forEach((function(t){var a=0;ge.forEach((function(e){e.namaHkbp&&e.namaHkbp.includes(t)&&e.namaHkbp.includes(C)&&""!==e.namaHkbp&&(a+=1)})),e.push(a)})),console.log(Object.keys(Oe[C])),ie(e),S(!1)}}),[E]),Object(n.useEffect)((function(){if(A){var e=[];Oe[C][J].forEach((function(t){var a=0;ge.forEach((function(e){e.namaHkbp&&e.namaHkbp.includes(t)&&e.namaHkbp.includes(J)&&e.namaHkbp.includes(C)&&""!==e.namaHkbp&&(a+=1)})),e.push(a)})),console.log(Oe[C][J]),de(e),y(!1)}}),[A]),Object(n.useEffect)((function(){i()({method:"get",url:"https://rk.defghi.biz.id:8080/api/user/getAllUser",data:{whereKeyValues:{packageId:"com.asia.ruangortu"}}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),l?Object(u.jsx)(o.a,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"Report",children:[Object(u.jsx)("div",{className:"Report_heading",children:Object(u.jsx)("h1",{children:"USER REPORT"})}),Object(u.jsxs)("section",{className:"UserReport",children:[Object(u.jsx)("div",{className:"UserReport_totaluser",children:Object(u.jsxs)("div",{className:"Report_card",children:[Object(u.jsxs)("div",{className:"Report_card_heading",children:[Object(u.jsx)("h3",{children:"Total Registered User (Email)"}),Object(u.jsx)(r.b,{className:"Report_card_icon"})]}),Object(u.jsxs)("div",{className:"Report_card_content",children:[Object(u.jsx)("div",{className:"Report_card_content_type",children:Object(u.jsxs)("select",{name:"userType",value:w,onChange:function(e){console.log("bruh"),console.log(e.currentTarget.value),U(e.currentTarget.value),g(!0)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"parent",children:"Parent"}),Object(u.jsx)("option",{value:"child",children:"Child"})]})}),Object(u.jsxs)("div",{className:"Report_card_content-data",children:[Object(u.jsx)("div",{className:"Report_card_content-data-left",children:Object(u.jsx)("h1",{children:L})}),Object(u.jsx)("div",{className:"Report_card_content-data-right",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"labelTitle"}),Object(u.jsx)("h5",{children:"Total Registered User"})]})})]})]})]})}),Object(u.jsx)("div",{className:"UserReport_totalactive",children:Object(u.jsxs)("div",{className:"Report_card",children:[Object(u.jsxs)("div",{className:"Report_card_heading",children:[Object(u.jsx)("h3",{children:"Total Active User"}),Object(u.jsx)(r.b,{className:"Report_card_icon"})]}),Object(u.jsxs)("div",{className:"Report_card_content",children:[Object(u.jsx)("div",{className:"Report_card_content_type",children:Object(u.jsxs)("select",{name:"userTypeActive",value:M,onChange:function(e){console.log("bruh"),console.log(e.currentTarget.value),P(e.currentTarget.value),_(!0)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"parent",children:"Parent"}),Object(u.jsx)("option",{value:"child",children:"Child"})]})}),Object(u.jsxs)("div",{className:"Report_card_content-data",children:[Object(u.jsxs)("div",{className:"Report_card_content-data-left",children:[Object(u.jsx)("h1",{children:Y}),Object(u.jsx)("div",{children:Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("h5",{className:"text-normal",children:[te," (",(te/(Y+te)*100).toFixed(1),"%)"]})})})]}),Object(u.jsxs)("div",{className:"Report_card_content-data-right",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"labelTitle"}),Object(u.jsx)("h5",{children:"Total Active User"})]}),Object(u.jsxs)("div",{className:"mt-small",children:[Object(u.jsx)("div",{className:"labelWarning"}),Object(u.jsx)("h5",{children:"Total Inactive/Invited User"})]})]})]})]})]})})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"Report_heading",children:Object(u.jsx)("h1",{children:"PROGRAM REPORT"})}),Object(u.jsx)("div",{className:"Program__table",children:Object(u.jsx)(d.a,{COLUMNS:Object(b.a)(Ae),DATA:Re.programs})})]})]})}}}]);
//# sourceMappingURL=21.0c77b999.chunk.js.map