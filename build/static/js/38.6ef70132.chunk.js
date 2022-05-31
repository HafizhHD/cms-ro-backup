(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[38],{109:function(e,a,t){"use strict";t(2);var s=t(7),r=(t(111),t(0));a.a=function(e){var a=e.headingName,t=e.routes,n=void 0===t?[]:t;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:a}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:n.length>0&&n.map((function(e,a){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(s.b,{exact:!0,to:e.path,children:e.name})," "]},a):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},a)}))})]})}},111:function(e,a,t){},116:function(e,a,t){},120:function(e,a,t){"use strict";t.d(a,"h",(function(){return c})),t.d(a,"d",(function(){return i})),t.d(a,"j",(function(){return o})),t.d(a,"i",(function(){return d})),t.d(a,"c",(function(){return l})),t.d(a,"e",(function(){return b})),t.d(a,"b",(function(){return h})),t.d(a,"f",(function(){return j})),t.d(a,"a",(function(){return u})),t.d(a,"g",(function(){return p}));var s=t(18),r=t.n(s),n=t(20),c=function(e){return r()({method:"post",url:n.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return r()({method:"post",url:n.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return r()({method:"post",url:n.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:n.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:n.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:n.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:n.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:n.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:n.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:n.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})}},1405:function(e,a,t){"use strict";t.r(a);var s=t(10),r=t(2),n=(t(879),t(155)),c=t(109),i=(t(18),t(0)),o=[{Header:"Pendidikan",accessor:"studyLevel",disableFilters:!0},{Header:"Jumlah Anak",accessor:"totalChild",disableFilters:!0},{Header:"Jumlah Anak Pemakaian Anak Tak Wajar",accessor:"totalChildOver",disableFilters:!0,Cell:function(e){var a=e.value;return Object(i.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:a})}},{Header:"Rata-Rata Waktu Pemakaian",accessor:"avgChildOver",disableFilters:!0,Cell:function(e){var a=e.value;return Object(i.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:a})}},{Header:"Standar Waktu Pemakaian Wajar",accessor:"standardUsage",disableFilters:!0},{Header:"Jumlah Anak Pemakaian Anak Wajar",accessor:"totalChildUnder",disableFilters:!0,Cell:function(e){var a=e.value;return Object(i.jsx)("p",{style:{color:"blue",fontWeight:"bold"},children:a})}},{Header:"Rata-Rata Waktu Pemakaian",accessor:"avgChildUnder",disableFilters:!0,Cell:function(e){var a=e.value;return Object(i.jsx)("p",{style:{color:"blue",fontWeight:"bold"},children:a})}}],d=t(36),l=t(350),b=t(120),h=t(88),j=t(352),u=t.n(j),p=function(e){var a=Object(r.useState)({series:e.data,options:{colors:e.colors,chart:{type:"bar",height:e.height,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"category",categories:e.label},legend:{position:"bottom",offsetX:-10},fill:{opacity:1}}}),t=Object(s.a)(a,1)[0];return 0===e.data.length?Object(i.jsx)("h2",{children:"No Data"}):Object(i.jsx)(u.a,{options:t.options,series:t.series,type:t.options.chart.type,height:t.options.chart.height})},O=function(e){var a=Object(r.useState)({series:e.data,options:{chart:{type:"bar",height:e.height},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:e.label}}}),t=Object(s.a)(a,1)[0];return 0===e.data.length?Object(i.jsx)("h2",{children:"No Data"}):Object(i.jsx)(u.a,{options:t.options,series:t.series,type:t.options.chart.type,height:t.options.chart.height})},m=function(e){var a=Object(r.useState)({series:e.data,options:{colors:e.colors,chart:{width:e.width,type:"donut"},plotOptions:{pie:{donut:{labels:{show:!0,total:{showAlways:!0,show:!0}}}}},labels:e.label,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}),t=Object(s.a)(a,1)[0];return 0===e.data.length?Object(i.jsx)("h2",{children:"No Data"}):Object(i.jsx)(u.a,{options:t.options,series:t.series,type:t.options.chart.type})};a.default=function(){var e=Object(r.useState)(!0),a=Object(s.a)(e,2),t=a[0],j=a[1],u=Object(r.useState)(!1),g=Object(s.a)(u,2),_=g[0],x=g[1],v=JSON.parse(localStorage.getItem("userData")),f=new Date("2021-01-01"),D=new Date,y=Object(r.useState)("today"),N=Object(s.a)(y,2),S=N[0],C=N[1],k=Object(r.useState)(new Date),T=Object(s.a)(k,2),P=T[0],w=T[1],A=Object(r.useState)(new Date),F=Object(s.a)(A,2),E=F[0],I=F[1],U=Object(r.useState)([]),H=Object(s.a)(U,2),M=H[0],R=H[1],L=Object(r.useState)([]),K=Object(s.a)(L,2),G=K[0],W=K[1],B=Object(r.useState)([]),J=Object(s.a)(B,2),V=J[0],$=J[1],X=Object(r.useState)([]),z=Object(s.a)(X,2),Y=z[0],Z=z[1],q=Object(r.useState)([]),Q=Object(s.a)(q,2),ee=Q[0],ae=Q[1],te=Object(r.useState)([]),se=Object(s.a)(te,2),re=se[0],ne=se[1],ce=Object(r.useState)([]),ie=Object(s.a)(ce,2),oe=ie[0],de=ie[1],le=Object(r.useState)([]),be=Object(s.a)(le,2),he=be[0],je=be[1],ue=Object(r.useState)([]),pe=Object(s.a)(ue,2),Oe=pe[0],me=pe[1],ge=Object(r.useState)([]),_e=Object(s.a)(ge,2),xe=_e[0],ve=_e[1],fe=Object(r.useState)([]),De=Object(s.a)(fe,2),ye=De[0],Ne=De[1],Se=Object(r.useState)([]),Ce=Object(s.a)(Se,2),ke=Ce[0],Te=Ce[1],Pe=["Youtube","Google","Facebook","Twitter","Chrome","Telegram","TikTok","Mobile Legends","Chess","Minecraft"],we=["Pembayaran","Pemberitahuan","Promosi","Laporan"],Ae=["Agama","Pendidikan","Kesehatan","Keluarga","Berita Internal","Berita Nasional","Berita Dunia","Informasi Teknologi","Olah Raga","Umum"],Fe=[{name:"TK",data:[0,12]},{name:"SD",data:[0,50]},{name:"SMP",data:[0,121]},{name:"SMA",data:[0,68]},{name:"Parent",data:[250,0]},{name:"Co-Parent",data:[99,0]}],Ee=[{data:[200,50]}],Ie=[5e5,153258,67384,53321,39212,19030,4239,3990,3218,1089],Ue=[{data:[100,231,8,300]}],He=[{data:[20,230,87,121,66,34,22,312,97,38]}],Me=[{data:[23e3,18e3,1e4,9500,8700,6e3,4e3,21500,4200,1200]}],Re=[{studyLevel:"SD",totalChild:50,totalChildOver:35,avgChildOver:14,standardUsage:10,totalChildUnder:15,avgChildUnder:8},{studyLevel:"SMP",totalChild:121,totalChildOver:108,avgChildOver:16,standardUsage:12,totalChildUnder:13,avgChildUnder:11},{studyLevel:"SMA",totalChild:68,totalChildOver:54,avgChildOver:15,standardUsage:14,totalChildUnder:14,avgChildUnder:10}];return Object(r.useEffect)((function(){!function(){var e=[0,0],a=[0,0],s=[0,0],r=[0,0],n=[0,0],c=[0,0],i={whereKeyValues:{packageId:"com.byasia.ruangortu",dateCreated:{$gte:P.toISOString().split("T")[0],$lte:E.toISOString().split("T")[0]}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER},o={whereKeyValues:{cobrandEmail:v.email,dateCreated:{$gte:P.toISOString().split("T")[0],$lte:E.toISOString().split("T")[0]}},orderKeyValues:{contentName:1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER},d={whereKeyValues:{cobrandEmail:v.email,dateCreated:{$gte:P.toISOString().split("T")[0],$lte:E.toISOString().split("T")[0]}},orderKeyValues:{programName:1},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER},l={whereKeyValues:{dateCreate:{$gte:P.toISOString().split("T")[0],$lte:E.toISOString().split("T")[0]}},limit:Number.MAX_SAFE_INTEGER},h={limit:Number.MAX_SAFE_INTEGER},u=Object(b.j)(i),p=Object(b.d)(o),O=Object(b.h)(d),m=Object(b.c)(l),g=Object(b.g)(h);Promise.all([u,p,O,m,g]).then((function(i){console.log(i[0]);for(var o=i[0].data.users,d=0;d<o.length;d++){var l=o[d];"parent"===l.userType?void 0===l.parentEmail?n[0]++:c[0]++:"child"===l.userType&&("TK"===l.childInfo.StudyLevel?e[1]++:"SD"===l.childInfo.StudyLevel?a[1]++:"SMP"===l.childInfo.StudyLevel?s[1]++:"SMA"===l.childInfo.StudyLevel&&r[1]++)}var b=[{name:"TK",data:e},{name:"SD",data:a},{name:"SMP",data:s},{name:"SMA",data:r},{name:"Parent",data:n},{name:"Co-Parent",data:c}];console.log("Colors length: "+ke.length),R(b);var h=i[1].data.contents.length,u=i[2].data.programs.length;W([{data:[h,u]}]);var p=i[3].data.appUsages,O=[],m=[];for(d=0;d<p.length;d++)for(var g=p[d].appUsages,v=0;v<g.length;v++){var f=g[v];void 0!==f.usageHour&&f.usageHour.length>0&&(O.includes(f.appName)||(O.push(f.appName),m.push(0)),m[O.indexOf(f.appName)]+=f.usageHour.length)}var D=[];for(v=0;v<O.length;v++)D.push({name:O[v],age:m[v]});D.sort((function(e,a){return e.age<a.age?1:e.age==a.age?0:-1}));for(var y=0;y<D.length;y++)O[y]=D[y].name,m[y]=D[y].age;$(m.slice(0,10)),Z(O.slice(0,10)),console.log(i[4].data),ae([]),ne([]),de([]),je([]),me([]),ve([]),Ne([]),t?j(!1):_&&(x(!1),j(!0),j(!1))}))}()}),[,E]),Object(r.useEffect)((function(){for(var e=[],a=0;a<10;a++){var t="#"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-3);e.push(t)}Te(e)}),[]),Object(r.useEffect)((function(){var e=new Date,a=new Date;switch(S){case"today":w(e),I(a);break;case"yesterday":e.setDate(D.getDate()-1),a.setDate(D.getDate()-1),w(e),I(a);break;case"week":e.setDate(D.getDate()-7),I(D),w(e);break;case"month":e.setDate(D.getDate()-30),I(D),w(e);break;case"year":e.setDate(D.getDate()-365),I(D),w(e);break;case"all":I(D),w(f);break;case"dummy":R(Fe),W(Ee),Z(Pe),$(Ie),ne(we),ae(Ue),de(Ae),je(He),me(Ae),ve(Me),Ne(Re),x(!1),setTimeout((function(){j(!0)}),50),setTimeout((function(){j(!1)}),80)}}),[S]),t?Object(i.jsx)(d.a,{}):Object(i.jsxs)(i.Fragment,{children:[_?Object(i.jsx)(l.a,{}):null,Object(i.jsxs)("div",{className:"Dashboard",children:[Object(i.jsxs)("div",{className:"div1",children:[Object(i.jsx)(c.a,{headingName:"DASHBOARD"}),Object(i.jsxs)("a",{className:"wa2",href:"http://wa.me/628119004410",target:"_blank",children:[Object(i.jsx)(h.d,{className:"whatshap"})," Need Help? Click Here!"]})]}),Object(i.jsxs)("div",{className:"Dashboard_period",children:[Object(i.jsx)("button",{className:"today"===S?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"today"!==S&&(x(!0),C("today"))},children:"Today"}),Object(i.jsx)("button",{className:"yesterday"===S?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"yesterday"!==S&&(x(!0),C("yesterday"))},children:"Yesterday"}),Object(i.jsx)("button",{className:"week"===S?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"week"!==S&&(x(!0),C("week"))},children:"7 Days"}),Object(i.jsx)("button",{className:"month"===S?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"month"!==S&&(x(!0),C("month"))},children:"30 Days"}),Object(i.jsx)("button",{className:"year"===S?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"year"!==S&&(x(!0),C("year"))},children:"365 Days"}),Object(i.jsx)("button",{className:"all"===S?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"all"!==S&&(x(!0),C("all"))},children:"All Time"}),Object(i.jsx)("button",{className:"dummy"===S?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==S&&(x(!0),C("dummy"))},children:"Dummy"})]}),Object(i.jsxs)("div",{className:"Dashboard_1",children:[Object(i.jsxs)("div",{className:"Dashboard_1_cards",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Populasi User"})}),Object(i.jsx)(p,{data:M,label:["Orangtua","Anak"],height:400,colors:ke}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Top 10 Apps by Usage"})}),Object(i.jsx)(m,{data:V,label:Y,width:380,colors:ke}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Jumlah Pageview Content & Program Berdasarkan Topik"})}),Object(i.jsx)(O,{data:he,label:oe,height:400}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})})]}),Object(i.jsxs)("div",{className:"Dashboard_1_cards",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Total Content & Program"})}),Object(i.jsx)(O,{data:G,label:["Content","Program"],height:200}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Jumlah Kirim Notifikasi"})}),Object(i.jsx)(O,{data:ee,label:re,height:350}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(i.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(i.jsx)("h3",{children:"Jumlah Pageview Content & Program Berdasarkan Topik"})}),Object(i.jsx)(O,{data:xe,label:Oe,height:600}),Object(i.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(i.jsx)("p",{children:" "})})]})})]})]}),Object(i.jsx)("div",{className:"Dashboard_table",children:Object(i.jsx)(n.a,{COLUMNS:o,DATA:ye})})]})]})}},155:function(e,a,t){"use strict";var s=t(5),r=t(2),n=t(122),c=t(140),i=(t(116),t(0));a.a=function(e){var a=e.DATA,t=e.COLUMNS,o=e.renderRowSubComponent,d=Object(r.useMemo)((function(){return a}),[a]),l=Object(n.useTable)({columns:t,data:d},n.useGlobalFilter,n.useSortBy,n.useExpanded,n.usePagination),b=l.getTableProps,h=l.getTableBodyProps,j=l.headerGroups,u=l.prepareRow,p=l.page,O=l.rows,m=l.canPreviousPage,g=l.canNextPage,_=l.pageOptions,x=l.pageCount,v=l.gotoPage,f=l.nextPage,D=l.previousPage,y=l.setPageSize,N=l.visibleColumns,S=l.state,C=S.pageIndex,k=S.pageSize,T=(S.expanded,l.state),P=l.setGlobalFilter,w=T.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"utils",children:[Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{onClick:function(){return v(0)},disabled:!m,children:"<<"}),Object(i.jsx)("button",{onClick:function(){return D()},disabled:!m,children:"<"}),Object(i.jsx)("button",{onClick:function(){return f()},disabled:!g,children:">"}),Object(i.jsx)("button",{onClick:function(){return v(x-1)},disabled:!g,children:">>"}),Object(i.jsxs)("span",{children:["Page "," ",Object(i.jsxs)("strong",{children:[C+1," of ",_.length]})]}),Object(i.jsxs)("span",{children:["| Go to page:",Object(i.jsx)("input",{type:"number",defaultValue:C+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;v(a)}})]}),Object(i.jsx)("select",{value:k,onChange:function(e){y(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(i.jsxs)("div",{className:"table_props",children:[Object(i.jsxs)("span",{children:["Total: ",O.length," Data"]}),Object(i.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:w||"",onChange:function(e){P(e.currentTarget.value)}})]})]}),Object(i.jsx)("div",{className:"table_container",children:Object(i.jsxs)("table",Object(s.a)(Object(s.a)({},b()),{},{children:[Object(i.jsx)("thead",{children:j.map((function(e){return Object(i.jsx)("tr",Object(s.a)(Object(s.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(s.a)(Object(s.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(c.a,{}):Object(i.jsx)(c.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(s.a)(Object(s.a)({},h()),{},{children:p.map((function(e,a){return u(e),Object(i.jsxs)(r.Fragment,Object(s.a)(Object(s.a)({},e.getRowProps()),{},{children:[Object(i.jsx)("tr",{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(s.a)(Object(s.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}),e.isExpanded?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:N.length,children:o({row:e})})}):null]}))}))}))]}))})]})}},350:function(e,a,t){"use strict";t(2);var s=t(22),r=(t(351),t(0));a.a=function(e){return e.text,Object(r.jsx)("div",{className:"LoadingFullRkSpinner",children:Object(r.jsx)(s.a,{})})}},351:function(e,a,t){},879:function(e,a,t){}}]);
//# sourceMappingURL=38.6ef70132.chunk.js.map