(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[71],{1284:function(t,e,a){},142:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}));var n=["singgih.zuliangga@defghi.id","ortuasiaparent01@gmail.com","ortuasiaparent02@gmail.com","ortuasiachild01@gmail.com","ortuasiachild02@gmail.com","yaswin.rw@gnail.com","yaswin.retdy@gmail.com","rickotesting@gmail.com","kartono@defghi.id","kartono.cc@gmail.com","mirza.dzaky.azizi@gmail.com","helwaanyapanjang@gmail.com ","uwawwaunch@gmail.com","ilhamanwar@gmail.com","ricky.rachadi@gmail.com","ruangortuchild@gmail.com","gowesjersey02@gmail.com","hafizh.dary@defghi.id","hafizhd.jp@gmail.com","abcwirayudaha56@gmail.com","hervyguitar@gmai.com","rickorajagukguk23@gmail.com","ortuasiatestchild@gmail.com","ortuasiatestparent@gmail.com","roichildtest01@gmail.com","roiparenttest01@gmail.com","ruangortutesting02@gmail.com","ruangortutesting01@gmail.com","ruangortuchild2@gmail.com","ruangortuparent@gmail.com","ruangortutesting01@gmail.com"],r=new Date("2022-08-13")},1458:function(t,e,a){"use strict";a.r(e);var n=a(7),r=a(2),o=(a(1284),a(22)),i=a(39),c=a(142),s=a(98),u=a(0);e.default=function(){var t=Object(r.useState)(!0),e=Object(n.a)(t,2),a=e[0],d=e[1],l=Object(r.useState)(!1),m=Object(n.a)(l,2),p=m[0],h=m[1],j=(JSON.parse(localStorage.getItem("userData")),new Date),g=new Date;j.setDate(j.getDate()+1);var f=Object(r.useState)("today"),b=Object(n.a)(f,2),y=(b[0],b[1],Object(r.useState)(j)),O=Object(n.a)(y,2),T=O[0],C=(O[1],Object(r.useState)([])),S=Object(n.a)(C,2),v=(S[0],S[1]),x=Object(r.useState)([0,0,0,0]),w=Object(n.a)(x,2),F=w[0],k=w[1];return Object(r.useEffect)((function(){!function(){var t=[0,0],e=[0,0],n=[0,0],r=[0,0],o=[0,0],i=[0,0],u=[0,0,0,0,0],l={whereKeyValues:{packageId:"com.byasia.ruangortu",dateCreated:{$gte:c.a.toISOString().split("T")[0],$lte:T.toISOString().split("T")[0]},emailUser:{$nin:c.b}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};Object(s.t)(l).then((function(c){var s=c.data.users;u[0]=s.length;for(var l=0;l<s.length;l++){var m=s[l];if("parent"===m.userType)u[1]++;else if("child"===m.userType){"active"===m.status?u[2]++:u[3]++;for(var j=0;j<m.subscriptions.length;j++){var g=m.subscriptions[j];if(g.price>0&&new Date(g.dateStart)>=new Date("2022-08-13")){u[4]++;break}}"TK"===m.childInfo.StudyLevel?t[1]++:"SD"===m.childInfo.StudyLevel?e[1]++:"SMP"===m.childInfo.StudyLevel?n[1]++:"SMA"===m.childInfo.StudyLevel&&r[1]++}}var f=[{name:"TK",data:t},{name:"SD",data:e},{name:"SMP",data:n},{name:"SMA",data:r},{name:"Parent",data:o},{name:"Co-Parent",data:i}];k(u),v(f),a?d(!1):p&&(h(!1),d(!0),d(!1))}))}()}),[,T]),a?Object(u.jsx)(o.a,{}):Object(u.jsxs)("div",{className:"status",children:[Object(u.jsxs)("div",{className:"status-top",children:[Object(u.jsx)("img",{src:i.a,className:"status-top-img",alt:"logo top"}),Object(u.jsxs)("h4",{children:["Diakses pada ",g.toLocaleString("id-ID",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})]})]}),Object(u.jsxs)("div",{className:"status-1",children:[Object(u.jsx)("h3",{children:"Jumlah Download di Play Store:"}),Object(u.jsx)("h3",{children:"UNDER CONSTRUCTION"})]}),Object(u.jsxs)("div",{className:"status-1",children:[Object(u.jsx)("h3",{children:"Total User:"}),Object(u.jsx)("h1",{children:F[0]})]}),Object(u.jsxs)("div",{className:"status-1",children:[Object(u.jsx)("h3",{children:"Jumlah User Orang Tua:"}),Object(u.jsx)("h1",{children:F[1]})]}),Object(u.jsxs)("div",{className:"status-1",children:[Object(u.jsx)("h3",{children:"Jumlah User Anak Diundang:"}),Object(u.jsx)("h1",{children:F[3]})]}),Object(u.jsxs)("div",{className:"status-1",children:[Object(u.jsx)("h3",{children:"Jumlah User Anak Aktif:"}),Object(u.jsx)("h1",{children:F[2]})]}),Object(u.jsxs)("div",{className:"status-1",children:[Object(u.jsx)("h3",{children:"Jumlah User Anak Berbayar:"}),Object(u.jsx)("h1",{children:F[4]})]})]})}},98:function(t,e,a){"use strict";a.d(e,"p",(function(){return i})),a.d(e,"h",(function(){return c})),a.d(e,"t",(function(){return s})),a.d(e,"q",(function(){return u})),a.d(e,"d",(function(){return d})),a.d(e,"k",(function(){return l})),a.d(e,"c",(function(){return m})),a.d(e,"l",(function(){return p})),a.d(e,"b",(function(){return h})),a.d(e,"n",(function(){return j})),a.d(e,"m",(function(){return g})),a.d(e,"e",(function(){return f})),a.d(e,"j",(function(){return b})),a.d(e,"i",(function(){return y})),a.d(e,"o",(function(){return O})),a.d(e,"a",(function(){return T})),a.d(e,"f",(function(){return C})),a.d(e,"g",(function(){return S})),a.d(e,"s",(function(){return v})),a.d(e,"r",(function(){return x}));var n=a(18),r=a.n(n),o=a(20),i=function(t){return r()({method:"post",url:o.a+"/cobrand/programFilter",data:t,headers:{"Content-Type":"application/json"}})},c=function(t){return r()({method:"post",url:o.a+"/cobrand/contentFilter",data:t,headers:{"Content-Type":"application/json"}})},s=function(t){return r()({method:"post",url:o.a+"/user/userFilter",data:t,headers:{"Content-Type":"application/json"}})},u=function(t){return r()({method:"post",url:o.a+"/cobrand/redZoneFilter",data:t,headers:{"Content-Type":"application/json"}})},d=function(t){return r()({method:"post",url:o.a+"/user/appUsageFilter",data:t,headers:{"Content-Type":"application/json"}})},l=function(t){return r()({method:"post",url:o.a+"/user/deviceUsageScheduleFilter",data:t,headers:{"Content-Type":"application/json"}})},m=function(t){return r()({method:"post",url:o.a+"/user/appUsageLimitFilter",data:t,headers:{"Content-Type":"application/json"}})},p=function(t){return r()({method:"post",url:o.a+"/user/childModeAsuhFilter",data:t,headers:{"Content-Type":"application/json"}})},h=function(t){return r()({method:"post",url:o.a+"/user/appIconFilter",data:t,headers:{"Content-Type":"application/json"}})},j=function(t){return r()({method:"post",url:o.a+"/user/broadcastFilter",data:t,headers:{"Content-Type":"application/json"}})},g=function(t){return r()({method:"post",url:o.a+"/cms/notificationCategoryFilter",data:t,headers:{"Content-Type":"application/json"}})},f=function(t){return r()({method:"post",url:o.a+"/cms/audianceTargetFilter",data:t,headers:{"Content-Type":"application/json"}})},b=function(t){return r()({method:"post",url:o.a+"/cms/contentTopicFilter",data:t,headers:{"Content-Type":"application/json"}})},y=function(t){return r()({method:"post",url:o.a+"/user/userContentResponFilter",data:t,headers:{"Content-Type":"application/json"}})},O=function(t){return r()({method:"post",url:o.a+"/cms/programCategoryFilter",data:t,headers:{"Content-Type":"application/json"}})},T=function(t){return r()({method:"post",url:o.a+"/cms/userFilter",data:t,headers:{"Content-Type":"application/json"}})},C=function(t){return r()({method:"post",url:o.a+"/cobrand/cobrandComunityFilter",data:t,headers:{"Content-Type":"application/json"}})},S=function(t){return r()({method:"post",url:o.a+"/cobrand/cobrandComunityMemberFilter",data:t,headers:{"Content-Type":"application/json"}})},v=function(t){return r()({method:"post",url:o.a+"/cobrand/AlAzharSchoolFilter",data:t,headers:{"Content-Type":"application/json"}})},x=function(t){return r()({method:"post",url:o.a+"/cobrand/groupMitraAsuhList",data:t,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=71.39225f64.chunk.js.map