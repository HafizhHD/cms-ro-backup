(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[38],{108:function(e,a,t){"use strict";t(2);var r=t(7),s=(t(110),t(0));a.a=function(e){var a=e.headingName,t=e.routes,n=void 0===t?[]:t;return Object(s.jsxs)("div",{className:"Heading",children:[Object(s.jsx)("h1",{children:a}),Object(s.jsx)("ul",{className:"Heading__breadcumb",children:n.length>0&&n.map((function(e,a){return e.path?Object(s.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(s.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},a):Object(s.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(s.jsx)("span",{children:e.name})," "]},a)}))})]})}},110:function(e,a,t){},115:function(e,a,t){},118:function(e,a,t){"use strict";t.d(a,"h",(function(){return c})),t.d(a,"d",(function(){return i})),t.d(a,"j",(function(){return o})),t.d(a,"i",(function(){return d})),t.d(a,"c",(function(){return l})),t.d(a,"e",(function(){return b})),t.d(a,"b",(function(){return h})),t.d(a,"f",(function(){return j})),t.d(a,"a",(function(){return u})),t.d(a,"g",(function(){return p}));var r=t(18),s=t.n(r),n=t(20),c=function(e){return s()({method:"post",url:n.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return s()({method:"post",url:n.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return s()({method:"post",url:n.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return s()({method:"post",url:n.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return s()({method:"post",url:n.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return s()({method:"post",url:n.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return s()({method:"post",url:n.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return s()({method:"post",url:n.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return s()({method:"post",url:n.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return s()({method:"post",url:n.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})}},1407:function(e,a,t){"use strict";t.r(a);var r=t(10),s=t(2),n=(t(879),t(155)),c=t(108),i=(t(18),t(0)),o=[{Header:"Pendidikan",accessor:"studyLevel",disableFilters:!0},{Header:"Jumlah Anak",accessor:"totalChild",disableFilters:!0},{Header:"Jumlah Anak Pemakaian Anak Tak Wajar",accessor:"totalChildOver",disableFilters:!0,Cell:function(e){var a=e.value;return Object(i.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:a})}},{Header:"Rata-Rata Waktu Pemakaian",accessor:"avgChildOver",disableFilters:!0,Cell:function(e){var a=e.value;return Object(i.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:a})}},{Header:"Standar Waktu Pemakaian Wajar",accessor:"standardUsage",disableFilters:!0},{Header:"Jumlah Anak Pemakaian Anak Wajar",accessor:"totalChildUnder",disableFilters:!0,Cell:function(e){var a=e.value;return Object(i.jsx)("p",{style:{color:"blue",fontWeight:"bold"},children:a})}},{Header:"Rata-Rata Waktu Pemakaian",accessor:"avgChildUnder",disableFilters:!0,Cell:function(e){var a=e.value;return Object(i.jsx)("p",{style:{color:"blue",fontWeight:"bold"},children:a})}}],d=t(36),l=t(350),b=t(118),h=t(88),j=t(352),u=t.n(j),p=function(e){var a=Object(s.useState)({series:e.data,options:{colors:e.colors,chart:{type:"bar",height:e.height,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"category",categories:e.label},legend:{position:"bottom",offsetX:-10},fill:{opacity:1}}}),t=Object(r.a)(a,1)[0];return 0===e.data.length?Object(i.jsx)("h2",{children:"No Data"}):Object(i.jsx)(u.a,{options:t.options,series:t.series,type:t.options.chart.type,height:t.options.chart.height})},O=function(e){var a=Object(s.useState)({series:e.data,options:{chart:{type:"bar",height:e.height,toolbar:{show:!0},zoom:{enabled:!0}},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{style:{colors:["#DDDDDD"]}},xaxis:{categories:e.label}}}),t=Object(r.a)(a,1)[0];return 0===e.data.length?Object(i.jsx)("h2",{children:"No Data"}):Object(i.jsx)(u.a,{options:t.options,series:t.series,type:t.options.chart.type,height:t.options.chart.height})},m=function(e){var a=Object(s.useState)({series:e.data,options:{colors:e.colors,chart:{width:e.width,type:"donut",toolbar:{show:!0}},plotOptions:{pie:{donut:{labels:{show:!0,total:{showAlways:!0,show:!0}}}}},labels:e.label,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}),t=Object(r.a)(a,1)[0];return 0===e.data.length?Object(i.jsx)("h2",{children:"No Data"}):Object(i.jsx)(u.a,{options:t.options,series:t.series,type:t.options.chart.type})};a.default=function(){var e=Object(s.useState)(!0),a=Object(r.a)(e,2),t=a[0],j=a[1],u=Object(s.useState)(!1),g=Object(r.a)(u,2),_=g[0],x=g[1],v=JSON.parse(localStorage.getItem("userData")),f=new Date("2021-01-01"),D=new Date,y=Object(s.useState)("today"),N=Object(r.a)(y,2),S=N[0],C=N[1],k=Object(s.useState)(new Date),T=Object(r.a)(k,2),w=T[0],P=T[1],A=Object(s.useState)(new Date),F=Object(r.a)(A,2),E=F[0],I=F[1],U=Object(s.useState)([]),H=Object(r.a)(U,2),M=H[0],R=H[1],L=Object(s.useState)([0,0,0]),K=Object(r.a)(L,2),G=K[0],W=K[1],B=Object(s.useState)([]),J=Object(r.a)(B,2),$=J[0],V=J[1],X=Object(s.useState)(["Orang tua: 0","Anak: 0"]),z=Object(r.a)(X,2),Y=z[0],Z=z[1],q=Object(s.useState)([]),Q=Object(r.a)(q,2),ee=Q[0],ae=Q[1],te=Object(s.useState)([]),re=Object(r.a)(te,2),se=re[0],ne=re[1],ce=Object(s.useState)([]),ie=Object(r.a)(ce,2),oe=ie[0],de=ie[1],le=Object(s.useState)([]),be=Object(r.a)(le,2),he=be[0],je=be[1],ue=Object(s.useState)([]),pe=Object(r.a)(ue,2),Oe=pe[0],me=pe[1],ge=Object(s.useState)([]),_e=Object(r.a)(ge,2),xe=_e[0],ve=_e[1],fe=Object(s.useState)([]),De=Object(r.a)(fe,2),ye=De[0],Ne=De[1],Se=Object(s.useState)([]),Ce=Object(r.a)(Se,2),ke=Ce[0],Te=Ce[1],we=Object(s.useState)([]),Pe=Object(r.a)(we,2),Ae=Pe[0],Fe=Pe[1],Ee=Object(s.useState)([]),Ie=Object(r.a)(Ee,2),Ue=Ie[0],He=Ie[1],Me=["Youtube","Google","Facebook","Twitter","Chrome","Telegram","TikTok","Mobile Legends","Chess","Minecraft"],Re=["Pembayaran","Pemberitahuan","Promosi","Laporan"],Le=["Agama","Pendidikan","Kesehatan","Keluarga","Berita Internal","Berita Nasional","Berita Dunia","Informasi Teknologi","Olah Raga","Umum"],Ke=[{name:"TK",data:[0,12]},{name:"SD",data:[0,50]},{name:"SMP",data:[0,121]},{name:"SMA",data:[0,68]},{name:"Parent",data:[250,0]},{name:"Co-Parent",data:[99,0]}],Ge=[{data:[200,50]}],We=[5e5,153258,67384,53321,39212,19030,4239,3990,3218,1089],Be=[{data:[100,231,8,300]}],Je=[{data:[20,230,87,121,66,34,22,312,97,38]}],$e=[{data:[23e3,18e3,1e4,9500,8700,6e3,4e3,21500,4200,1200]}],Ve=[{studyLevel:"SD",totalChild:50,totalChildOver:35,avgChildOver:14,standardUsage:10,totalChildUnder:15,avgChildUnder:8},{studyLevel:"SMP",totalChild:121,totalChildOver:108,avgChildOver:16,standardUsage:12,totalChildUnder:13,avgChildUnder:11},{studyLevel:"SMA",totalChild:68,totalChildOver:54,avgChildOver:15,standardUsage:14,totalChildUnder:14,avgChildUnder:10}];return Object(s.useEffect)((function(){!function(){var e=[0,0],a=[0,0],r=[0,0],s=[0,0],n=[0,0],c=[0,0],i=[0,0,0],o={whereKeyValues:{packageId:"com.byasia.ruangortu",dateCreated:{$gte:w.toISOString().split("T")[0],$lte:E.toISOString().split("T")[0]}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER},d={whereKeyValues:{cobrandEmail:v.email,status:{$in:["active","inactive"]},dateCreated:{$gte:w.toISOString().split("T")[0],$lte:E.toISOString().split("T")[0]}},orderKeyValues:{contentName:1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER},l={whereKeyValues:{cobrandEmail:v.email,dateCreated:{$gte:w.toISOString().split("T")[0],$lte:E.toISOString().split("T")[0]}},orderKeyValues:{programName:1},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER},h={whereKeyValues:{dateCreate:{$gte:w.toISOString().split("T")[0],$lte:E.toISOString().split("T")[0]}},limit:Number.MAX_SAFE_INTEGER},u={limit:Number.MAX_SAFE_INTEGER},p=Object(b.j)(o),O=Object(b.d)(d),m=Object(b.h)(l),g=Object(b.c)(h),f=Object(b.g)(u);Promise.all([p,O,m,g,f]).then((function(o){console.log(o[0]);var d=o[0].data.users;i[0]=d.length;for(var l=0;l<d.length;l++){var b=d[l];"parent"===b.userType?(i[1]++,void 0===b.parentEmail?n[0]++:c[0]++):"child"===b.userType&&(i[2]++,"TK"===b.childInfo.StudyLevel?e[1]++:"SD"===b.childInfo.StudyLevel?a[1]++:"SMP"===b.childInfo.StudyLevel?r[1]++:"SMA"===b.childInfo.StudyLevel&&s[1]++)}var h=[{name:"TK",data:e},{name:"SD",data:a},{name:"SMP",data:r},{name:"SMA",data:s},{name:"Parent",data:n},{name:"Co-Parent",data:c}];console.log("Colors length: "+Ue.length),W(i),R(h),Z(["Orang tua: "+i[1],"Anak: "+i[2]]);var u=o[1].data.contents.length,p=o[2].data.programs.length;V([{data:[u,p]}]);var O=o[3].data.appUsages,m=[],g=[];for(l=0;l<O.length;l++)for(var v=O[l].appUsages,f=0;f<v.length;f++){var D=v[f];void 0!==D.usageHour&&D.usageHour.length>0&&(m.includes(D.appName)||(m.push(D.appName),g.push(0)),g[m.indexOf(D.appName)]+=D.usageHour.length)}var y=[];for(f=0;f<m.length;f++)y.push({name:m[f],age:g[f]});y.sort((function(e,a){return e.age<a.age?1:e.age==a.age?0:-1}));for(var N=0;N<y.length;N++)m[N]=y[N].name,g[N]=y[N].age;ae(g.slice(0,10)),ne(m.slice(0,10)),console.log(o[4].data),de([]),je([]),me([]),ve([]),Ne([]),Te([]),Fe([]),t?j(!1):_&&(x(!1),j(!0),j(!1))}))}()}),[,E]),Object(s.useEffect)((function(){for(var e=[],a=0;a<10;a++){var t="#"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-3);e.push(t)}He(e)}),[]),Object(s.useEffect)((function(){var e=new Date,a=new Date;switch(S){case"today":P(e),I(a);break;case"yesterday":e.setDate(D.getDate()-1),a.setDate(D.getDate()-1),P(e),I(a);break;case"week":e.setDate(D.getDate()-7),I(D),P(e);break;case"month":e.setDate(D.getDate()-30),I(D),P(e);break;case"year":e.setDate(D.getDate()-365),I(D),P(e);break;case"all":I(D),P(f);break;case"dummy":W([500,349,151]),Z(["Orang tua: 349","Anak: 151"]),R(Ke),V(Ge),ne(Me),ae(We),je(Re),de(Be),me(Le),ve(Je),Ne(Le),Te($e),Fe(Ve),x(!1),setTimeout((function(){j(!0)}),50),setTimeout((function(){j(!1)}),80)}}),[S]),t?Object(i.jsx)(d.a,{}):Object(i.jsxs)(i.Fragment,{children:[_?Object(i.jsx)(l.a,{}):null,Object(i.jsxs)("div",{className:"Dashboard",children:[Object(i.jsxs)("div",{className:"div1",children:[Object(i.jsx)(c.a,{headingName:"DASHBOARD"}),Object(i.jsxs)("a",{className:"wa2",href:"http://wa.me/628119004410",target:"_blank",children:[Object(i.jsx)(h.d,{className:"whatshap"})," Need Help? Click Here!"]})]}),Object(i.jsxs)("div",{className:"Dashboard_real_period",children:[Object(i.jsx)("button",{className:"today"===S?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"today"!==S&&(x(!0),C("today"))},children:"Today"}),Object(i.jsx)("button",{className:"yesterday"===S?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"yesterday"!==S&&(x(!0),C("yesterday"))},children:"Yesterday"}),Object(i.jsx)("button",{className:"week"===S?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"week"!==S&&(x(!0),C("week"))},children:"7 Days"}),Object(i.jsx)("button",{className:"month"===S?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"month"!==S&&(x(!0),C("month"))},children:"30 Days"}),Object(i.jsx)("button",{className:"year"===S?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"year"!==S&&(x(!0),C("year"))},children:"365 Days"}),Object(i.jsx)("button",{className:"all"===S?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"all"!==S&&(x(!0),C("all"))},children:"All Time"}),Object(i.jsx)("button",{className:"dummy"===S?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"dummy"!==S&&(x(!0),C("dummy"))},children:"Dummy"})]}),Object(i.jsxs)("div",{className:"Dashboard_1",children:[Object(i.jsxs)("div",{className:"Dashboard_1_cards",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Populasi User (Total: "+G[0]+")"})}),Object(i.jsx)(p,{data:M,label:Y,height:400,colors:Ue}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{})})]})}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Top 10 Apps by Usage"})}),Object(i.jsx)(m,{data:ee,label:se,width:380,colors:Ue}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Jumlah Pageview Content & Program Berdasarkan Topik"})}),Object(i.jsx)(O,{data:xe,label:Oe,height:400}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})})]}),Object(i.jsxs)("div",{className:"Dashboard_1_cards",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Total Content & Program"})}),Object(i.jsx)(O,{data:$,label:["Content","Program"],height:200}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Jumlah Kirim Notifikasi"})}),Object(i.jsx)(O,{data:oe,label:he,height:350}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Jumlah Pageview Content & Program Berdasarkan Topik"})}),Object(i.jsx)(O,{data:ke,label:ye,height:600}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})})]})]}),Object(i.jsx)("div",{className:"Dashboard_table",children:Object(i.jsx)(n.a,{COLUMNS:o,DATA:Ae})})]})]})}},155:function(e,a,t){"use strict";var r=t(5),s=t(2),n=t(121),c=t(135),i=(t(115),t(0));a.a=function(e){var a=e.DATA,t=e.COLUMNS,o=e.renderRowSubComponent,d=Object(s.useMemo)((function(){return a}),[a]),l=Object(n.useTable)({columns:t,data:d},n.useGlobalFilter,n.useSortBy,n.useExpanded,n.usePagination),b=l.getTableProps,h=l.getTableBodyProps,j=l.headerGroups,u=l.prepareRow,p=l.page,O=l.rows,m=l.canPreviousPage,g=l.canNextPage,_=l.pageOptions,x=l.pageCount,v=l.gotoPage,f=l.nextPage,D=l.previousPage,y=l.setPageSize,N=l.visibleColumns,S=l.state,C=S.pageIndex,k=S.pageSize,T=(S.expanded,l.state),w=l.setGlobalFilter,P=T.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"utils",children:[Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{onClick:function(){return v(0)},disabled:!m,children:"<<"}),Object(i.jsx)("button",{onClick:function(){return D()},disabled:!m,children:"<"}),Object(i.jsx)("button",{onClick:function(){return f()},disabled:!g,children:">"}),Object(i.jsx)("button",{onClick:function(){return v(x-1)},disabled:!g,children:">>"}),Object(i.jsxs)("span",{children:["Page "," ",Object(i.jsxs)("strong",{children:[C+1," of ",_.length]})]}),Object(i.jsxs)("span",{children:["| Go to page:",Object(i.jsx)("input",{type:"number",defaultValue:C+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;v(a)}})]}),Object(i.jsx)("select",{value:k,onChange:function(e){y(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(i.jsxs)("div",{className:"table_props",children:[Object(i.jsxs)("span",{children:["Total: ",O.length," Data"]}),Object(i.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:P||"",onChange:function(e){w(e.currentTarget.value)}})]})]}),Object(i.jsx)("div",{className:"table_container",children:Object(i.jsxs)("table",Object(r.a)(Object(r.a)({},b()),{},{children:[Object(i.jsx)("thead",{children:j.map((function(e){return Object(i.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(c.a,{}):Object(i.jsx)(c.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(r.a)(Object(r.a)({},h()),{},{children:p.map((function(e,a){return u(e),Object(i.jsxs)(s.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(i.jsx)("tr",{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}),e.isExpanded?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:N.length,children:o({row:e})})}):null]}))}))}))]}))})]})}},350:function(e,a,t){"use strict";t(2);var r=t(22),s=(t(351),t(0));a.a=function(e){return e.text,Object(s.jsx)("div",{className:"LoadingFullRkSpinner",children:Object(s.jsx)(r.a,{})})}},351:function(e,a,t){},879:function(e,a,t){}}]);
//# sourceMappingURL=38.57d45c2a.chunk.js.map