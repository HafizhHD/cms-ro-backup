(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[34],{103:function(e,t,a){"use strict";a.d(t,"m",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"o",(function(){return c})),a.d(t,"n",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"h",(function(){return u})),a.d(t,"c",(function(){return b})),a.d(t,"i",(function(){return h})),a.d(t,"b",(function(){return j})),a.d(t,"k",(function(){return p})),a.d(t,"j",(function(){return m})),a.d(t,"e",(function(){return O})),a.d(t,"g",(function(){return g})),a.d(t,"l",(function(){return v})),a.d(t,"a",(function(){return f}));var n=a(18),r=a.n(n),s=a(20),i=function(e){return r()({method:"post",url:s.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return r()({method:"post",url:s.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return r()({method:"post",url:s.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:s.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:s.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:s.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:s.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:s.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:s.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:s.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:s.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return r()({method:"post",url:s.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:s.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},v=function(e){return r()({method:"post",url:s.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return r()({method:"post",url:s.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},112:function(e,t,a){},121:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return b})),a.d(t,"a",(function(){return h})),a.d(t,"g",(function(){return j})),a.d(t,"f",(function(){return p}));var n=a(101),r=a(7),s=a(2),i=a.n(s),o=(a(122),a(164)),c=a(0);function l(e){var t=e.column,a=t.filterValue,n=t.preFilteredRows,r=t.setFilter;n.length;return Object(c.jsx)("input",{value:a||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search..."})}function d(e){var t=e.column,a=t.filterValue,r=t.setFilter,s=t.preFilteredRows,o=t.id,l=i.a.useMemo((function(){var e=new Set;return s.forEach((function(t){void 0===t.values[o]||e.has(t.values[o])||e.add(t.values[o])})),Object(n.a)(e.values())}),[o,s]);return Object(c.jsxs)("select",{value:a,onChange:function(e){r(e.target.value||void 0)},children:[Object(c.jsx)("option",{value:"",children:"All"}),l.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})}function u(e){var t=e.column,a=t.filterValue,r=t.setFilter,s=t.preFilteredRows,o=t.id,l=i.a.useMemo((function(){var e=new Set;return s.forEach((function(t){if(console.log("ini row",t.values[o]),console.log("ini tipe row",t.values[o]instanceof Array),console.log("ini length row",t.values[o].length),t.values[o]instanceof Array&&t.values[o].length>0)for(var a=0;a<t.values[o].length;a++){var n=t.values[o][a];void 0===n||e.has(n)||e.add(n)}})),Object(n.a)(e.values())}),[o,s]);return Object(c.jsxs)("select",{value:a,onChange:function(e){r(e.target.value||void 0)},children:[Object(c.jsx)("option",{value:"",children:"All"}),l.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})}function b(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,s=t.preFilteredRows,o=t.setFilter,l=t.id,d=i.a.useMemo((function(){var e=s.length?s[0].values[l]:0,t=s.length?s[0].values[l]:0;return s.forEach((function(a){e=Math.min(a.values[l],e),t=Math.max(a.values[l],t)})),[e,t]}),[l,s]),u=Object(r.a)(d,2),b=u[0],h=u[1];return Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("input",{value:n[0]||"",type:"number",onChange:function(e){var t=e.target.value;o((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},min:b,placeholder:"Min (".concat(b,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(c.jsx)("input",{value:n[1]||"",type:"number",onChange:function(e){var t=e.target.value;o((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},min:b,placeholder:"Max (".concat(h,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function h(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,s=t.preFilteredRows,o=t.setFilter,l=t.id,d=i.a.useMemo((function(){var e=new Date("2020-01-01"),t=new Date("2099-12-31");return s.forEach((function(a){e=a.values[l]&&new Date(a.values[l])<=e?new Date(a.values[l]):e,t=a.values[l]&&new Date(a.values[l])>=t?new Date(a.values[l]):t})),[e,t]}),[l,s]),u=Object(r.a)(d,2),b=u[0],h=u[1];return Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("input",{value:n[0]||b.toISOString().slice(0,10),type:"date",min:b.toISOString().slice(0,10),max:n[1]||h.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;o((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(c.jsx)("input",{value:n[1]||h.toISOString().slice(0,10),type:"date",min:n[0]||b.toISOString().slice(0,10),max:h.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;o((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function j(e,t,a){return Object(o.a)(e,a,{keys:[function(e){return e.values[t]}]})}function p(e,t,a){var n=new Date(a[0]),r=new Date(a[1]);return e.filter((function(s){var i=new Date(s.values[t]);return 0===a.length?e:i>=n&&i<=r}))}j.autoRemove=function(e){return!e},p.autoRemove=function(e){return!e}},129:function(e,t,a){"use strict";var n=a(101),r=a(5),s=a(34),i=a(2),o=a.n(i),c=a(9),l=a(122),d=a(135),u=(a(112),a(121)),b=a(165),h=a(157),j=(a(166),a(90)),p=a(0);t.a=function(e){var t=e.DATA,a=e.COLUMNS,m=e.renderRowSubComponent,O=e.showCheckbox,g=void 0!==O&&O,v=e.notifContext,f=void 0===v?"":v,x=o.a.useMemo((function(){return{fuzzyText:u.g,dateBetween:u.f,text:function(e,t,a){return e.filter((function(e){var n=e.values[t];return void 0===n||String(n).toLowerCase().startsWith(String(a).toLowerCase())}))}}}),[]),_=o.a.useMemo((function(){return{Filter:u.b}}),[]),S=o.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(s.a)(e,["indeterminate"]),i=o.a.useRef(),c=t||i;return o.a.useEffect((function(){c.current.indeterminate=a}),[c,a]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("input",Object(r.a)({type:"checkbox",ref:c},n))})})),y=Object(i.useMemo)((function(){return t}),[t]),N=Object(l.useTable)({columns:a,data:y,defaultColumn:_,filterTypes:x,initialState:{hiddenColumns:["emailUser","parentEmail","_id"]}},l.useFilters,l.useGlobalFilter,l.useSortBy,l.useExpanded,l.usePagination,l.useRowSelect,(function(e){g&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(p.jsx)("div",{children:Object(p.jsx)(S,Object(r.a)({},t()))})},Cell:function(e){var t=e.row;return Object(p.jsx)("div",{children:Object(p.jsx)(S,Object(r.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(n.a)(e))}))})),D=N.getTableProps,C=N.getTableBodyProps,w=N.headerGroups,T=N.prepareRow,k=N.page,F=N.rows,I=N.canPreviousPage,A=N.canNextPage,P=N.pageOptions,E=N.pageCount,R=N.gotoPage,U=N.nextPage,M=N.previousPage,H=N.setPageSize,L=N.visibleColumns,V=N.selectedFlatRows,K=(N.state.selectedRowIds,N.state),G=K.pageIndex,J=K.pageSize,W=(K.expanded,N.state),$=N.setGlobalFilter,B=W.globalFilter,z=function(){for(var e=F,t=[],a=0;a<e.length;a++){var n={};T(e[a]);for(var r=0;r<e[a].cells.length;r++)"rowNumber"!==e[a].cells[r].column.id&&"selection"!==e[a].cells[r].column.id&&"buttonStatus"!==e[a].cells[r].column.id&&(e[a].cells[r].value&&"[object Date]"===Object.prototype.toString.call(e[a].cells[r].value)&&!isNaN(e[a].cells[r].value)?n[e[a].cells[r].column.Header]=e[a].cells[r].value.toISOString().split("T")[0]:n[e[a].cells[r].column.Header]=e[a].cells[r].value);t.push(n)}return t};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"tools",children:[Object(p.jsxs)("div",{className:"table_props",children:[Object(p.jsxs)("span",{children:["Total: ",F.length," Data"]}),Object(p.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:B||"",onChange:function(e){$(e.currentTarget.value)}})]}),Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(j.c,{})," ",Object(p.jsx)(b.CSVLink,{data:z(),children:"Download as CSV"})]}),Object(p.jsxs)("button",{className:"btn_tools",onClick:function(){var e=z();if(e.length>0){var t=new h.default("landscape","pt","A4");t.setFontSize(15);var a={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(a),t.save("report.pdf")}},children:[Object(p.jsx)(j.b,{})," Download as PDF"]}),g?V.length>0?Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(j.a,{}),Object(p.jsx)(c.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",f);for(var e=[],t=[],a=0;a<V.length;a++)e.push(V[a].original.emailUser),"child"===V[a].original.userType&&(e.includes(V[a].original.emailUser)||e.push(V[a].original.emailUser)),t.push(V[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(p.jsxs)("button",{className:"btn_tools_disabled",children:[Object(p.jsx)(j.a,{}),Object(p.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,g?V.length>0?Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(j.a,{}),Object(p.jsx)(c.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",f);for(var e=[],t=[],a=0;a<V.length;a++)void 0!==V[a].original.parentEmail&&(e.some((function(e){return V[a].original.parentEmail.includes(e)}))||("child"===V[a].original.userType?e.push.apply(e,Object(n.a)(V[a].original.parentEmail)):e.push(V[a].original.emailUser))),t.push(V[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(p.jsxs)("button",{className:"btn_tools_disabled",children:[Object(p.jsx)(j.a,{}),Object(p.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,g?V.length>0?Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(j.a,{}),Object(p.jsx)(c.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",f);for(var e=[],t=[],a=0;a<V.length;a++)e.includes(V[a].original.emailUser)||e.push(V[a].original.emailUser),void 0!==V[a].original.parentEmail&&(e.some((function(e){return V[a].original.parentEmail.includes(e)}))||e.push(V[a].original.parentEmail)),t.push(V[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(p.jsxs)("button",{className:"btn_tools_disabled",children:[Object(p.jsx)(j.a,{}),Object(p.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(p.jsx)("div",{className:"utils",children:Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("button",{onClick:function(){return R(0)},disabled:!I,children:"<<"}),Object(p.jsx)("button",{onClick:function(){return M()},disabled:!I,children:"<"}),Object(p.jsx)("button",{onClick:function(){return U()},disabled:!A,children:">"}),Object(p.jsx)("button",{onClick:function(){return R(E-1)},disabled:!A,children:">>"}),Object(p.jsxs)("span",{children:["Page "," ",Object(p.jsxs)("strong",{children:[G+1," of ",P.length]})]}),Object(p.jsxs)("span",{children:["| Go to page:",Object(p.jsx)("input",{type:"number",defaultValue:G+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;R(t)}})]}),Object(p.jsx)("select",{value:J,onChange:function(e){H(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(p.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(p.jsx)("div",{className:"table_container",children:Object(p.jsxs)("table",Object(r.a)(Object(r.a)({},D()),{},{children:[Object(p.jsx)("thead",{children:w.map((function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(p.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(p.jsx)(d.a,{}):Object(p.jsx)(d.b,{}):""})]}))}))})),Object(p.jsx)("tr",{children:e.headers.map((function(e){return Object(p.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(p.jsx)("tbody",Object(r.a)(Object(r.a)({},C()),{},{children:k.map((function(e,t){return T(e),Object(p.jsxs)(i.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(p.jsx)("tr",{children:e.cells.map((function(e){return Object(p.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{className:(e.value&&!Array.isArray(e.value)||Array.isArray(e.value)&&e.value.length>0||"selection"===e.column.id||e.column.id,"cell"),children:[" ","rowNumber"!==e.column.id?e.render("Cell"):t+1+G*J," "]}))}))}),e.isExpanded?Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:L.length,children:m({row:e})})}):null]}))}))}))]}))})]})}},1452:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(2),s=(a(912),a(129)),i=a(94),o=(a(18),a(0)),c=[{Header:"Pendidikan",accessor:"studyLevel",disableFilters:!0},{Header:"Jumlah Anak",accessor:"totalChild",disableFilters:!0},{Header:"Jumlah Anak Pemakaian Anak Tak Wajar",accessor:"totalChildOver",disableFilters:!0,Cell:function(e){var t=e.value;return Object(o.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:t})}},{Header:"Rata-Rata Waktu Pemakaian",accessor:"avgChildOver",disableFilters:!0,Cell:function(e){var t=e.value;return Object(o.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:t})}},{Header:"Standar Waktu Pemakaian Wajar",accessor:"standardUsage",disableFilters:!0},{Header:"Jumlah Anak Pemakaian Anak Wajar",accessor:"totalChildUnder",disableFilters:!0,Cell:function(e){var t=e.value;return Object(o.jsx)("p",{style:{color:"blue",fontWeight:"bold"},children:t})}},{Header:"Rata-Rata Waktu Pemakaian",accessor:"avgChildUnder",disableFilters:!0,Cell:function(e){var t=e.value;return Object(o.jsx)("p",{style:{color:"blue",fontWeight:"bold"},children:t})}}],l=a(36),d=a(390),u=a(103),b=a(90),h=a(392),j=a.n(h),p=function(e){var t=Object(r.useState)({series:e.data,options:{colors:e.colors,chart:{type:"bar",height:e.height,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"category",categories:e.label,decimalsInFloat:0},yaxis:[{labels:{formatter:function(e){return e.toFixed(0)}}}],legend:{position:"bottom",offsetX:-10},fill:{opacity:1}}}),a=Object(n.a)(t,1)[0];return 0===e.data.length?Object(o.jsx)("h2",{children:"No Data"}):Object(o.jsx)(j.a,{options:a.options,series:a.series,type:a.options.chart.type,height:a.options.chart.height})},m=function(e){var t=Object(r.useState)({series:e.data,options:{chart:{type:"bar",height:e.height,toolbar:{show:!0},zoom:{enabled:!0}},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{style:{colors:["#DDDDDD"]}},xaxis:{categories:e.label}}}),a=Object(n.a)(t,1)[0];return 0===e.data.length?Object(o.jsx)("h2",{children:"No Data"}):Object(o.jsx)(j.a,{options:a.options,series:a.series,type:a.options.chart.type,height:a.options.chart.height})},O=a(186),g=function(e){var t=Object(r.useState)({series:e.data,options:{colors:e.colors,chart:{width:e.width,type:"donut",toolbar:{show:!0}},plotOptions:{pie:{donut:{labels:{show:!0,total:{showAlways:!0,show:!0}}}}},labels:e.label,tooltip:{enabled:!0,custom:function(t){var a,n=t.series,r=t.seriesIndex,s=(t.dataPointIndex,t.w),i=0,o=Object(O.a)(n);try{for(o.s();!(a=o.n()).done;){i+=a.value}}catch(l){o.e(l)}finally{o.f()}var c=n[r];return'<div style="color:white;padding:5px;background-color:'+e.colors[r]+';font-weight:bold" >'+s.config.labels[r]+": "+c+" ("+(c/i*100).toFixed(1)+"%)</div>"}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}),a=Object(n.a)(t,1)[0];return 0===e.data.length?Object(o.jsx)("h2",{children:"No Data"}):Object(o.jsx)(j.a,{options:a.options,series:a.series,type:a.options.chart.type})};t.default=function(){var e=Object(r.useState)(!0),t=Object(n.a)(e,2),a=t[0],h=t[1],j=Object(r.useState)(!1),O=Object(n.a)(j,2),v=O[0],f=O[1],x=JSON.parse(localStorage.getItem("userData")),_=new Date("2021-01-01"),S=new Date,y=Object(r.useState)("today"),N=Object(n.a)(y,2),D=N[0],C=N[1],w=Object(r.useState)(new Date),T=Object(n.a)(w,2),k=T[0],F=T[1],I=Object(r.useState)(new Date),A=Object(n.a)(I,2),P=A[0],E=A[1],R=Object(r.useState)([]),U=Object(n.a)(R,2),M=U[0],H=U[1],L=Object(r.useState)([0,0,0]),V=Object(n.a)(L,2),K=V[0],G=V[1],J=Object(r.useState)([]),W=Object(n.a)(J,2),$=W[0],B=W[1],z=Object(r.useState)(["Orang tua: 0","Anak: 0"]),X=Object(n.a)(z,2),Y=X[0],Z=X[1],q=Object(r.useState)([]),Q=Object(n.a)(q,2),ee=Q[0],te=Q[1],ae=Object(r.useState)([]),ne=Object(n.a)(ae,2),re=ne[0],se=ne[1],ie=Object(r.useState)([]),oe=Object(n.a)(ie,2),ce=oe[0],le=oe[1],de=Object(r.useState)([]),ue=Object(n.a)(de,2),be=ue[0],he=ue[1],je=Object(r.useState)([]),pe=Object(n.a)(je,2),me=pe[0],Oe=pe[1],ge=Object(r.useState)([]),ve=Object(n.a)(ge,2),fe=ve[0],xe=ve[1],_e=Object(r.useState)([]),Se=Object(n.a)(_e,2),ye=Se[0],Ne=Se[1],De=Object(r.useState)([]),Ce=Object(n.a)(De,2),we=Ce[0],Te=Ce[1],ke=Object(r.useState)([]),Fe=Object(n.a)(ke,2),Ie=Fe[0],Ae=Fe[1],Pe=Object(r.useState)([]),Ee=Object(n.a)(Pe,2),Re=Ee[0],Ue=Ee[1],Me=["Youtube","Google","Facebook","Twitter","Chrome","Telegram","TikTok","Mobile Legends","Chess","Minecraft"],He=["Pembayaran","Pemberitahuan","Promosi","Laporan"],Le=["Agama","Pendidikan","Kesehatan","Keluarga","Berita Internal","Berita Nasional","Berita Dunia","Informasi Teknologi","Olah Raga","Umum"],Ve=[{name:"TK",data:[0,12]},{name:"SD",data:[0,50]},{name:"SMP",data:[0,121]},{name:"SMA",data:[0,68]},{name:"Parent",data:[250,0]},{name:"Co-Parent",data:[99,0]}],Ke=[{data:[200,50]}],Ge=[5e5,153258,67384,53321,39212,19030,4239,3990,3218,1089],Je=[{data:[100,231,8,300]}],We=[{data:[20,230,87,121,66,34,22,312,97,38]}],$e=[{data:[23e3,18e3,1e4,9500,8700,6e3,4e3,21500,4200,1200]}],Be=[{studyLevel:"SD",totalChild:50,totalChildOver:35,avgChildOver:14,standardUsage:10,totalChildUnder:15,avgChildUnder:8},{studyLevel:"SMP",totalChild:121,totalChildOver:108,avgChildOver:16,standardUsage:12,totalChildUnder:13,avgChildUnder:11},{studyLevel:"SMA",totalChild:68,totalChildOver:54,avgChildOver:15,standardUsage:14,totalChildUnder:14,avgChildUnder:10}];return Object(r.useEffect)((function(){!function(){var e=[0,0],t=[0,0],n=[0,0],r=[0,0],s=[0,0],i=[0,0],o=[0,0,0],c={whereKeyValues:{packageId:"com.roi.ruangortu",dateCreated:{$gte:k.toISOString().split("T")[0],$lte:P.toISOString().split("T")[0]}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER},l={whereKeyValues:{cobrandEmail:x.cobrandEmail,programId:"",status:{$in:["active","inactive"]},dateCreated:{$gte:k.toISOString().split("T")[0],$lte:P.toISOString().split("T")[0]}},orderKeyValues:{contentName:1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER},d={whereKeyValues:{cobrandEmail:x.cobrandEmail,dateCreated:{$gte:k.toISOString().split("T")[0],$lte:P.toISOString().split("T")[0]}},orderKeyValues:{programName:1},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER},b={whereKeyValues:{dateCreate:{$gte:k.toISOString().split("T")[0],$lte:P.toISOString().split("T")[0]}},limit:Number.MAX_SAFE_INTEGER},j={whereKeyValues:{scheduleTime:{$gte:k.toISOString().split("T")[0],$lte:P.toISOString().split("T")[0]}},limit:Number.MAX_SAFE_INTEGER},p={limit:Number.MAX_SAFE_INTEGER},m=Object(u.o)(c),O=Object(u.f)(l),g=Object(u.m)(d),_=Object(u.d)(b),S=Object(u.k)(j),y=Object(u.j)(p);Promise.all([m,O,g,_,S,y]).then((function(c){var l=c[0].data.users;o[0]=l.length;for(var d=0;d<l.length;d++){var u=l[d];"parent"===u.userType?(o[1]++,void 0===u.parentEmail?s[0]++:i[0]++):"child"===u.userType&&(o[2]++,"TK"===u.childInfo.StudyLevel?e[1]++:"SD"===u.childInfo.StudyLevel?t[1]++:"SMP"===u.childInfo.StudyLevel?n[1]++:"SMA"===u.childInfo.StudyLevel&&r[1]++)}var b=[{name:"TK",data:e},{name:"SD",data:t},{name:"SMP",data:n},{name:"SMA",data:r},{name:"Parent",data:s},{name:"Co-Parent",data:i}];G(o),H(b),Z(["Orang tua: "+o[1],"Anak: "+o[2]]);var j=c[1].data.contents.length;console.log("Contents",c[1].data.contents),console.log("Program",c[2].data.programs);var p=c[2].data.programs.length;B([{data:[j,p]}]);var m=c[3].data.appUsages,O=[],g=[];for(d=0;d<m.length;d++)for(var x=m[d].appUsages,_=0;_<x.length;_++){var S=x[_];void 0!==S.usageHour&&S.usageHour.length>0&&(O.includes(S.appName)||(O.push(S.appName),g.push(0)),g[O.indexOf(S.appName)]+=S.usageHour.length)}var y=[];for(_=0;_<O.length;_++)y.push({name:O[_],age:g[_]});y.sort((function(e,t){return e.age<t.age?1:e.age==t.age?0:-1}));for(var N=0;N<y.length;N++)O[N]=y[N].name,g[N]=y[N].age;te(g.slice(0,10)),se(O.slice(0,10));var D=[],C=[];c[5].data.Data.map((function(e){D.push(e.category),C.push(0)})),c[4].data.resultData.map((function(e){for(var t=0;t<C.length;t++)if(e.category===D[t]){C[t]++;break}})),le([{data:C}]),he(D),Oe([]),xe([]),Ne([]),Te([]),Ae([]),a?h(!1):v&&(f(!1),h(!0),h(!1))}))}()}),[,P]),Object(r.useEffect)((function(){Ue(["#44a6cc","#cc44a6","#a6cc44","#44cca6","#cca644","#a644cc","#117399","#991173","#739911","#119973"])}),[]),Object(r.useEffect)((function(){var e=new Date,t=new Date;switch(D){case"today":F(e),E(t);break;case"yesterday":e.setDate(S.getDate()-1),t.setDate(S.getDate()-1),F(e),E(t);break;case"week":e.setDate(S.getDate()-7),E(S),F(e);break;case"month":e.setDate(S.getDate()-30),E(S),F(e);break;case"year":e.setDate(S.getDate()-365),E(S),F(e);break;case"all":E(S),F(_);break;case"dummy":G([500,349,151]),Z(["Orang tua: 349","Anak: 151"]),H(Ve),B(Ke),se(Me),te(Ge),he(He),le(Je),Oe(Le),xe(We),Ne(Le),Te($e),Ae(Be),f(!1),setTimeout((function(){h(!0)}),50),setTimeout((function(){h(!1)}),80)}}),[D]),a?Object(o.jsx)(l.a,{}):Object(o.jsxs)(o.Fragment,{children:[v?Object(o.jsx)(d.a,{}):null,Object(o.jsxs)("div",{className:"Dashboard",children:[Object(o.jsxs)("div",{className:"div1",children:[Object(o.jsx)(i.a,{headingName:"DASHBOARD"}),Object(o.jsxs)("a",{className:"wa2",href:"http://wa.me/628119004410",target:"_blank",children:[Object(o.jsx)(b.d,{className:"whatshap"})," Need Help? Click Here!"]})]}),Object(o.jsxs)("div",{className:"Dashboard_real_period",children:[Object(o.jsx)("button",{className:"today"===D?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"today"!==D&&(f(!0),C("today"))},children:"Today"}),Object(o.jsx)("button",{className:"yesterday"===D?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"yesterday"!==D&&(f(!0),C("yesterday"))},children:"Yesterday"}),Object(o.jsx)("button",{className:"week"===D?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"week"!==D&&(f(!0),C("week"))},children:"7 Days"}),Object(o.jsx)("button",{className:"month"===D?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"month"!==D&&(f(!0),C("month"))},children:"30 Days"}),Object(o.jsx)("button",{className:"year"===D?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"year"!==D&&(f(!0),C("year"))},children:"365 Days"}),Object(o.jsx)("button",{className:"all"===D?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"all"!==D&&(f(!0),C("all"))},children:"All Time"}),Object(o.jsx)("button",{className:"dummy"===D?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"dummy"!==D&&(f(!0),C("dummy"))},children:"Dummy"})]}),Object(o.jsxs)("div",{className:"Dashboard_1",children:[Object(o.jsxs)("div",{className:"Dashboard_1_cards",children:[Object(o.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(o.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(o.jsx)("h3",{children:"Populasi User (Total: "+K[0]+")"})}),Object(o.jsx)(p,{data:M,label:Y,height:400,colors:Re}),Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(o.jsx)("p",{})})]})}),Object(o.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(o.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(o.jsx)("h3",{children:"Top 10 Apps by Usage"})}),Object(o.jsx)(g,{data:ee,label:re,width:380,colors:Re}),Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(o.jsx)("p",{children:" "})})]})}),Object(o.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(o.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(o.jsx)("h3",{children:"Jumlah Postingan Artikel & Program Berdasarkan Topik"})}),Object(o.jsx)(m,{data:fe,label:me,height:400}),Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(o.jsx)("p",{children:" "})})]})})]}),Object(o.jsxs)("div",{className:"Dashboard_1_cards",children:[Object(o.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(o.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(o.jsx)("h3",{children:"Total Artikel & Program"})}),Object(o.jsx)(m,{data:$,label:["Artikel","Program"],height:200}),Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(o.jsx)("p",{children:" "})})]})}),Object(o.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(o.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(o.jsx)("h3",{children:"Jumlah Kirim Notifikasi"})}),Object(o.jsx)(m,{data:ce,label:be,height:350}),Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(o.jsx)("p",{children:" "})})]})}),Object(o.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(o.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(o.jsx)("h3",{children:"Jumlah Pageview Artikel & Program Berdasarkan Topik"})}),Object(o.jsx)(m,{data:we,label:ye,height:600}),Object(o.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(o.jsx)("p",{children:" "})})]})})]})]}),Object(o.jsx)("div",{className:"Dashboard_table",children:Object(o.jsx)(s.a,{COLUMNS:c,DATA:Ie})})]})]})}},390:function(e,t,a){"use strict";a(2);var n=a(22),r=(a(391),a(0));t.a=function(e){return e.text,Object(r.jsx)("div",{className:"LoadingFullRkSpinner",children:Object(r.jsx)(n.a,{})})}},391:function(e,t,a){},912:function(e,t,a){},94:function(e,t,a){"use strict";a(2);var n=a(9),r=(a(95),a(0));t.a=function(e){var t=e.headingName,a=e.routes,s=void 0===a?[]:a;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},95:function(e,t,a){}}]);
//# sourceMappingURL=34.8d8790d5.chunk.js.map