(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[33],{100:function(e,t,a){"use strict";a.d(t,"v",(function(){return s})),a.d(t,"l",(function(){return c})),a.d(t,"k",(function(){return o})),a.d(t,"B",(function(){return l})),a.d(t,"w",(function(){return d})),a.d(t,"f",(function(){return u})),a.d(t,"p",(function(){return b})),a.d(t,"e",(function(){return h})),a.d(t,"q",(function(){return j})),a.d(t,"d",(function(){return m})),a.d(t,"s",(function(){return g})),a.d(t,"r",(function(){return p})),a.d(t,"g",(function(){return O})),a.d(t,"n",(function(){return f})),a.d(t,"m",(function(){return v})),a.d(t,"o",(function(){return x})),a.d(t,"u",(function(){return _})),a.d(t,"a",(function(){return S})),a.d(t,"i",(function(){return y})),a.d(t,"j",(function(){return N})),a.d(t,"y",(function(){return D})),a.d(t,"z",(function(){return T})),a.d(t,"x",(function(){return w})),a.d(t,"t",(function(){return k})),a.d(t,"A",(function(){return C})),a.d(t,"b",(function(){return I})),a.d(t,"c",(function(){return F})),a.d(t,"h",(function(){return A}));a(18),a(20);var n,r=a(101),i=null!==(n=localStorage.getItem("accessToken"))&&void 0!==n?n:"",s=function(e){return Object(r.a)(i,e,"/cobrand/programFilter")},c=function(e){return Object(r.a)(i,e,"/cobrand/contentFilter")},o=function(e){return Object(r.a)(i,e,"/cobrand/commentContentFilter")},l=function(e){return Object(r.a)(i,e,"/user/userFilter")},d=function(e){return Object(r.a)(i,e,"/cobrand/redZoneFilter")},u=function(e){return Object(r.a)(i,e,"/user/appUsageFilter")},b=function(e){return Object(r.a)(i,e,"/user/deviceUsageScheduleFilter")},h=function(e){return Object(r.a)(i,e,"/user/appUsageLimitFilter")},j=function(e){return Object(r.a)(i,e,"/user/childModeAsuhFilter")},m=function(e){return Object(r.a)(i,e,"/user/appIconFilter")},g=function(e){return Object(r.a)(i,e,"/user/broadcastFilter")},p=function(e){return Object(r.a)(i,e,"/cms/notificationCategoryFilter")},O=function(e){return Object(r.a)(i,e,"/cms/audianceTargetFilter")},f=function(e){return Object(r.a)(i,e,"/cms/contentTopicFilter")},v=function(e){return Object(r.a)(i,e,"/user/userContentResponFilter")},x=function(e){return Object(r.a)(i,e,"/user/userContentViewFilter")},_=function(e){return Object(r.a)(i,e,"/cms/programCategoryFilter")},S=function(e){return Object(r.a)(i,e,"/cms/userFilter")},y=function(e){return Object(r.a)(i,e,"/cobrand/cobrandComunityFilter")},N=function(e){return Object(r.a)(i,e,"/cobrand/cobrandComunityMemberFilter")},D=function(e){return Object(r.a)(i,e,"/cobrand/rekapDataSekolahFilter")},T=function(e){return Object(r.a)(i,e,"/cobrand/AlAzharSchoolFilter")},w=function(e){return Object(r.a)(i,e,"/cobrand/cobrandGroupMitraAsuhFilter")},k=function(e){return Object(r.a)(i,e,"/cobrand/prayAlertMessageFilter")},C=function(e){return Object(r.a)(i,e,"/user/appDeviceFilter")},I=function(e){return Object(r.a)(i,e,"/user/appAlwaysOnBySekolahFilter")},F=function(e){return Object(r.a)(i,e,"/user/logVisitPageFilter")},A=function(e){return Object(r.a)(i,e,"/cms/logCMSFilter")}},101:function(e,t,a){"use strict";var n=a(20),r=a(18),i=a.n(r);t.a=function(e,t,a){return i()({method:"post",url:n.a+a,data:t,headers:{"Content-Type":"application/json","x-token":e}})}},1014:function(e,t,a){},106:function(e,t,a){},121:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return b})),a.d(t,"a",(function(){return h})),a.d(t,"g",(function(){return j})),a.d(t,"f",(function(){return m}));var n=a(107),r=a(7),i=a(2),s=a.n(i),c=(a(118),a(215)),o=a(0);function l(e){var t=e.column,a=t.filterValue,n=t.preFilteredRows,r=t.setFilter;n.length;return Object(o.jsx)("input",{value:a||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search..."})}function d(e){var t=e.column,a=t.filterValue,r=t.setFilter,i=t.preFilteredRows,c=t.id,l=s.a.useMemo((function(){var e=new Set;return i.forEach((function(t){void 0===t.values[c]||e.has(t.values[c])||e.add(t.values[c])})),Object(n.a)(e.values())}),[c,i]);return Object(o.jsxs)("select",{value:a,onChange:function(e){r(e.target.value||void 0)},children:[Object(o.jsx)("option",{value:"",children:"All"}),l.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))]})}function u(e){var t=e.column,a=t.filterValue,r=t.setFilter,i=t.preFilteredRows,c=t.id,l=s.a.useMemo((function(){var e=new Set;return i.forEach((function(t){if(console.log("ini row",t.values[c]),console.log("ini tipe row",t.values[c]instanceof Array),console.log("ini length row",t.values[c].length),t.values[c]instanceof Array&&t.values[c].length>0)for(var a=0;a<t.values[c].length;a++){var n=t.values[c][a];void 0===n||e.has(n)||e.add(n)}})),Object(n.a)(e.values())}),[c,i]);return Object(o.jsxs)("select",{value:a,onChange:function(e){r(e.target.value||void 0)},children:[Object(o.jsx)("option",{value:"",children:"All"}),l.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))]})}function b(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,i=t.preFilteredRows,c=t.setFilter,l=t.id,d=s.a.useMemo((function(){var e=i.length?i[0].values[l]:0,t=i.length?i[0].values[l]:0;return i.forEach((function(a){e=Math.min(a.values[l],e),t=Math.max(a.values[l],t)})),[e,t]}),[l,i]),u=Object(r.a)(d,2),b=u[0],h=u[1];return Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsx)("input",{value:n[0]||"",type:"number",onChange:function(e){var t=e.target.value;c((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},min:b,placeholder:"Min (".concat(b,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(o.jsx)("input",{value:n[1]||"",type:"number",onChange:function(e){var t=e.target.value;c((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},min:b,placeholder:"Max (".concat(h,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function h(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,i=t.preFilteredRows,c=t.setFilter,l=t.id,d=s.a.useMemo((function(){var e=new Date("2022-08-13"),t=new Date;return t.setFullYear(t.getFullYear()+1),i.forEach((function(a){e=a.values[l]&&new Date(a.values[l])<=e?new Date(a.values[l]):e,t=a.values[l]&&new Date(a.values[l])>=t?new Date(a.values[l]):t})),[e,t]}),[l,i]),u=Object(r.a)(d,2),b=u[0],h=u[1];return Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsx)("input",{value:n[0]||b.toISOString().slice(0,10),type:"date",min:b.toISOString().slice(0,10),max:n[1]||h.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;c((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(o.jsx)("input",{value:n[1]||h.toISOString().slice(0,10),type:"date",min:n[0]||b.toISOString().slice(0,10),max:h.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;c((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function j(e,t,a){return Object(c.a)(e,a,{keys:[function(e){return e.values[t]}]})}function m(e,t,a){var n=new Date(a[0]),r=new Date(a[1]);return e.filter((function(i){var s=new Date(i.values[t]);return 0===a.length?e:s>=n&&s<=r}))}j.autoRemove=function(e){return!e},m.autoRemove=function(e){return!e}},147:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=["singgih.zuliangga@defghi.id","ortuasiaparent01@gmail.com","ortuasiaparent02@gmail.com","ortuasiachild01@gmail.com","ortuasiachild02@gmail.com","yaswin.rw@gnail.com","yaswin.retdy@gmail.com","rickotesting@gmail.com","kartono@defghi.id","kartono.cc@gmail.com","mirza.dzaky.azizi@gmail.com","helwaanyapanjang@gmail.com ","uwawwaunch@gmail.com","ilhamanwar@gmail.com","ricky.rachadi@gmail.com","ruangortuchild@gmail.com","gowesjersey02@gmail.com","hafizh.dary@defghi.id","hafizhd.jp@gmail.com","abcwirayudaha56@gmail.com","hervyguitar@gmai.com","rickorajagukguk23@gmail.com","ortuasiatestchild@gmail.com","ortuasiatestparent@gmail.com","roichildtest01@gmail.com","roiparenttest01@gmail.com","ruangortutesting02@gmail.com","ruangortutesting01@gmail.com","ruangortuchild2@gmail.com","ruangortuparent@gmail.com","ruangortutesting01@gmail.com"],r=new Date("2022-08-13")},148:function(e,t,a){"use strict";var n=a(107),r=a(5),i=a(34),s=a(2),c=a.n(s),o=a(8),l=a(118),d=a(143),u=(a(106),a(121)),b=a(216),h=a(200),j=(a(217),a(90)),m=a(0);t.a=function(e){var t=e.DATA,a=e.COLUMNS,g=e.renderRowSubComponent,p=e.showCheckbox,O=void 0!==p&&p,f=(e.showTools,e.notifContext),v=void 0===f?"":f,x=c.a.useMemo((function(){return{fuzzyText:u.g,dateBetween:u.f,text:function(e,t,a){return e.filter((function(e){var n=e.values[t];return void 0===n||String(n).toLowerCase().startsWith(String(a).toLowerCase())}))}}}),[]),_=c.a.useMemo((function(){return{Filter:u.b}}),[]),S=c.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(i.a)(e,["indeterminate"]),s=c.a.useRef(),o=t||s;return c.a.useEffect((function(){o.current.indeterminate=a}),[o,a]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("input",Object(r.a)({type:"checkbox",ref:o},n))})})),y=Object(s.useMemo)((function(){return t}),[t]),N=Object(l.useTable)({columns:a,data:y,defaultColumn:_,filterTypes:x,initialState:{hiddenColumns:["emailUser","parentEmail","_id"],pageSize:20}},l.useFilters,l.useGlobalFilter,l.useSortBy,l.useExpanded,l.usePagination,l.useRowSelect,(function(e){O&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(m.jsx)("div",{children:Object(m.jsx)(S,Object(r.a)({},t()))})},Cell:function(e){var t=e.row;return Object(m.jsx)("div",{children:Object(m.jsx)(S,Object(r.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(n.a)(e))}))})),D=N.getTableProps,T=N.getTableBodyProps,w=N.headerGroups,k=N.prepareRow,C=N.page,I=N.rows,F=N.canPreviousPage,A=N.canNextPage,E=N.pageOptions,P=N.pageCount,M=N.gotoPage,R=N.nextPage,U=N.previousPage,$=N.setPageSize,V=N.visibleColumns,K=N.selectedFlatRows,H=(N.state.selectedRowIds,N.state),G=H.pageIndex,L=H.pageSize,z=(H.expanded,N.state),J=N.setGlobalFilter,X=z.globalFilter,B=function(){for(var e=I,t=[],a=0;a<e.length;a++){var n={};k(e[a]);for(var r=0;r<e[a].cells.length;r++)"rowNumber"!==e[a].cells[r].column.id&&"selection"!==e[a].cells[r].column.id&&"buttonStatus"!==e[a].cells[r].column.id&&(e[a].cells[r].value&&"[object Date]"===Object.prototype.toString.call(e[a].cells[r].value)&&!isNaN(e[a].cells[r].value)?n[e[a].cells[r].column.Header]=e[a].cells[r].value.toISOString().split("T")[0]:n[e[a].cells[r].column.Header]=e[a].cells[r].value);t.push(n)}return t};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"tools",children:[Object(m.jsxs)("div",{className:"table_props",children:[Object(m.jsxs)("span",{children:["Total: ",I.length," Data"]}),Object(m.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:X||"",onChange:function(e){J(e.currentTarget.value)}})]}),Object(m.jsxs)("button",{className:"btn_tools",children:[Object(m.jsx)(j.d,{})," ",Object(m.jsx)(b.CSVLink,{data:B(),children:"Download as CSV"})]}),Object(m.jsxs)("button",{className:"btn_tools",onClick:function(){var e=B();if(e.length>0){var t=new h.default("landscape","pt","A4");t.setFontSize(15);var a={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(a),t.save("report.pdf")}},children:[Object(m.jsx)(j.b,{})," Download as PDF"]}),O?K.length>0?Object(m.jsxs)("button",{className:"btn_tools",children:[Object(m.jsx)(j.a,{}),Object(m.jsx)(o.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v);for(var e=[],t=[],a=0;a<K.length;a++)e.push(K[a].original.emailUser),"child"===K[a].original.userType&&(e.includes(K[a].original.emailUser)||e.push(K[a].original.emailUser)),t.push(K[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(m.jsxs)("button",{className:"btn_tools_disabled",children:[Object(m.jsx)(j.a,{}),Object(m.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,O?K.length>0?Object(m.jsxs)("button",{className:"btn_tools",children:[Object(m.jsx)(j.a,{}),Object(m.jsx)(o.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v);for(var e=[],t=[],a=0;a<K.length;a++)void 0!==K[a].original.parentEmail&&(e.some((function(e){return K[a].original.parentEmail.includes(e)}))||("child"===K[a].original.userType?e.push.apply(e,Object(n.a)(K[a].original.parentEmail)):e.push(K[a].original.emailUser))),t.push(K[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(m.jsxs)("button",{className:"btn_tools_disabled",children:[Object(m.jsx)(j.a,{}),Object(m.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,O?K.length>0?Object(m.jsxs)("button",{className:"btn_tools",children:[Object(m.jsx)(j.a,{}),Object(m.jsx)(o.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v);for(var e=[],t=[],a=0;a<K.length;a++)e.includes(K[a].original.emailUser)||e.push(K[a].original.emailUser),void 0!==K[a].original.parentEmail&&(e.some((function(e){return K[a].original.parentEmail.includes(e)}))||e.push(K[a].original.parentEmail)),t.push(K[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(m.jsxs)("button",{className:"btn_tools_disabled",children:[Object(m.jsx)(j.a,{}),Object(m.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(m.jsx)("div",{className:"utils",children:Object(m.jsxs)("div",{className:"pagination",children:[Object(m.jsx)("button",{onClick:function(){return M(0)},disabled:!F,children:"<<"}),Object(m.jsx)("button",{onClick:function(){return U()},disabled:!F,children:"<"}),Object(m.jsx)("button",{onClick:function(){return R()},disabled:!A,children:">"}),Object(m.jsx)("button",{onClick:function(){return M(P-1)},disabled:!A,children:">>"}),Object(m.jsxs)("span",{children:["Page "," ",Object(m.jsxs)("strong",{children:[G+1," of ",E.length]})]}),Object(m.jsxs)("span",{children:["| Go to page:",Object(m.jsx)("input",{type:"number",defaultValue:G+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;M(t)}})]}),Object(m.jsx)("select",{value:L,onChange:function(e){$(Number(e.target.value))},children:[20,50,100].map((function(e){return Object(m.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(m.jsx)("div",{className:"table_container",children:Object(m.jsxs)("table",Object(r.a)(Object(r.a)({},D()),{},{children:[Object(m.jsx)("thead",{children:w.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(m.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(m.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(m.jsx)(d.a,{}):Object(m.jsx)(d.b,{}):""})]}))}))})),Object(m.jsx)("tr",{children:e.headers.map((function(e){return Object(m.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(m.jsx)("tbody",Object(r.a)(Object(r.a)({},T()),{},{children:C.map((function(e,t){return k(e),Object(m.jsxs)(s.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(m.jsx)("tr",{children:e.cells.map((function(e){return Object(m.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{className:(e.value&&!Array.isArray(e.value)||Array.isArray(e.value)&&e.value.length>0||"selection"===e.column.id||e.column.id,"cell"),children:[" ","rowNumber"!==e.column.id?e.render("Cell"):t+1+G*L," "]}))}))}),e.isExpanded?Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:V.length,children:g({row:e})})}):null]}))}))}))]}))})]})}},1514:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(2),i=(a(1014),a(148)),s=a(97),c=(a(18),a(0)),o=[{Header:"Pendidikan",accessor:"studyLevel",disableFilters:!0},{Header:"Jumlah Anak",accessor:"totalChild",disableFilters:!0},{Header:"Jumlah Anak Pemakaian Anak Tak Wajar",accessor:"totalChildOver",disableFilters:!0,Cell:function(e){var t=e.value;return Object(c.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:t})}},{Header:"Rata-Rata Waktu Pemakaian",accessor:"avgChildOver",disableFilters:!0,Cell:function(e){var t=e.value;return Object(c.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:t})}},{Header:"Standar Waktu Pemakaian Wajar",accessor:"standardUsage",disableFilters:!0},{Header:"Jumlah Anak Pemakaian Anak Wajar",accessor:"totalChildUnder",disableFilters:!0,Cell:function(e){var t=e.value;return Object(c.jsx)("p",{style:{color:"blue",fontWeight:"bold"},children:t})}},{Header:"Rata-Rata Waktu Pemakaian",accessor:"avgChildUnder",disableFilters:!0,Cell:function(e){var t=e.value;return Object(c.jsx)("p",{style:{color:"blue",fontWeight:"bold"},children:t})}}],l=a(35),d=a(309),u=a(100),b=a(90),h=a(147),j=a(627),m=a.n(j),g=function(e){var t=Object(r.useState)({series:e.data,options:{colors:e.colors,chart:{type:"bar",height:e.height,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"category",categories:e.label,decimalsInFloat:0},yaxis:[{labels:{formatter:function(e){return e.toFixed(0)}}}],legend:{position:"bottom",offsetX:-10},fill:{opacity:1}}}),a=Object(n.a)(t,1)[0];return 0===e.data.length?Object(c.jsx)("h2",{children:"No Data"}):Object(c.jsx)(m.a,{options:a.options,series:a.series,type:a.options.chart.type,height:a.options.chart.height})},p=function(e){var t=Object(r.useState)({series:e.data,options:{chart:{type:"bar",height:e.height,toolbar:{show:!0},zoom:{enabled:!0}},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{style:{colors:["#DDDDDD"]}},xaxis:{categories:e.label}}}),a=Object(n.a)(t,1)[0];return 0===e.data.length?Object(c.jsx)("h2",{children:"No Data"}):Object(c.jsx)(m.a,{options:a.options,series:a.series,type:a.options.chart.type,height:a.options.chart.height})},O=a(316),f=function(e){var t=Object(r.useState)({series:e.data,options:{colors:e.colors,chart:{width:e.width,type:"donut",toolbar:{show:!0}},plotOptions:{pie:{donut:{labels:{show:!0,total:{showAlways:!0,show:!0}}}}},labels:e.label,tooltip:{enabled:!0,custom:function(t){var a,n=t.series,r=t.seriesIndex,i=(t.dataPointIndex,t.w),s=0,c=Object(O.a)(n);try{for(c.s();!(a=c.n()).done;){s+=a.value}}catch(l){c.e(l)}finally{c.f()}var o=n[r];return'<div style="color:white;padding:5px;background-color:'+e.colors[r]+';font-weight:bold" >'+i.config.labels[r]+": "+o+" ("+(o/s*100).toFixed(1)+"%)</div>"}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}),a=Object(n.a)(t,1)[0];return 0===e.data.length?Object(c.jsx)("h2",{children:"No Data"}):Object(c.jsx)(m.a,{options:a.options,series:a.series,type:a.options.chart.type})};t.default=function(){var e,t,a,j=Object(r.useState)(!0),m=Object(n.a)(j,2),O=m[0],v=m[1],x=Object(r.useState)(!1),_=Object(n.a)(x,2),S=_[0],y=_[1],N=JSON.parse(localStorage.getItem("userData")),D=null!==(e=JSON.parse(localStorage.getItem("userData")).cobrandComunityId)&&void 0!==e?e:"",T=null!==(t=JSON.parse(localStorage.getItem("userData")).groupMitraAsuhId)&&void 0!==t?t:"",w=null!==(a=JSON.parse(localStorage.getItem("userData")).sekolah)&&void 0!==a?a:"",k=new Date;k.setDate(k.getDate()+1);var C=Object(r.useState)("today"),I=Object(n.a)(C,2),F=I[0],A=I[1],E=Object(r.useState)(new Date),P=Object(n.a)(E,2),M=P[0],R=P[1],U=Object(r.useState)(new Date),$=Object(n.a)(U,2),V=$[0],K=$[1],H=Object(r.useState)(k),G=Object(n.a)(H,2),L=G[0],z=G[1],J=Object(r.useState)([]),X=Object(n.a)(J,2),B=X[0],W=X[1],Y=Object(r.useState)([0,0,0]),q=Object(n.a)(Y,2),Z=q[0],Q=q[1],ee=Object(r.useState)([]),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],re=Object(r.useState)(["Orang tua: 0","Anak: 0"]),ie=Object(n.a)(re,2),se=ie[0],ce=ie[1],oe=Object(r.useState)([]),le=Object(n.a)(oe,2),de=le[0],ue=le[1],be=Object(r.useState)([]),he=Object(n.a)(be,2),je=he[0],me=he[1],ge=Object(r.useState)([]),pe=Object(n.a)(ge,2),Oe=pe[0],fe=pe[1],ve=Object(r.useState)([]),xe=Object(n.a)(ve,2),_e=xe[0],Se=xe[1],ye=Object(r.useState)([]),Ne=Object(n.a)(ye,2),De=Ne[0],Te=Ne[1],we=Object(r.useState)([]),ke=Object(n.a)(we,2),Ce=ke[0],Ie=ke[1],Fe=Object(r.useState)([]),Ae=Object(n.a)(Fe,2),Ee=Ae[0],Pe=Ae[1],Me=Object(r.useState)([]),Re=Object(n.a)(Me,2),Ue=Re[0],$e=Re[1],Ve=Object(r.useState)([]),Ke=Object(n.a)(Ve,2),He=Ke[0],Ge=Ke[1],Le=Object(r.useState)([]),ze=Object(n.a)(Le,2),Je=ze[0],Xe=ze[1],Be=["Youtube","Google","Facebook","Twitter","Chrome","Telegram","TikTok","Mobile Legends","Chess","Minecraft"],We=["Pembayaran","Pemberitahuan","Promosi","Laporan"],Ye=["Agama","Pendidikan","Kesehatan","Keluarga","Berita Internal","Berita Nasional","Berita Dunia","Informasi Teknologi","Olah Raga","Umum"],qe=[{name:"TK",data:[0,12]},{name:"SD",data:[0,50]},{name:"SMP",data:[0,121]},{name:"SMA",data:[0,68]},{name:"Parent",data:[250,0]},{name:"Co-Parent",data:[99,0]}],Ze=[{data:[200,50]}],Qe=[5e5,153258,67384,53321,39212,19030,4239,3990,3218,1089],et=[{data:[100,231,8,300]}],tt=[{data:[20,230,87,121,66,34,22,312,97,38]}],at=[{data:[23e3,18e3,1e4,9500,8700,6e3,4e3,21500,4200,1200]}],nt=[{studyLevel:"SD",totalChild:50,totalChildOver:35,avgChildOver:14,standardUsage:10,totalChildUnder:15,avgChildUnder:8},{studyLevel:"SMP",totalChild:121,totalChildOver:108,avgChildOver:16,standardUsage:12,totalChildUnder:13,avgChildUnder:11},{studyLevel:"SMA",totalChild:68,totalChildOver:54,avgChildOver:15,standardUsage:14,totalChildUnder:14,avgChildUnder:10}];return Object(r.useEffect)((function(){!function(){var e=[0,0],t=[0,0],a=[0,0],n=[0,0],r=[0,0],i=[0,0],s=[0,0],c=[0,0,0],o={whereKeyValues:{groupMitraAsuhId:""===T?"00000000":T}};Object(u.x)(o).then((function(o){console.log(o);var l=o.data.Data[0]?o.data.Data[0].memberSekolah:[];console.log(l);var d=""!==w?{whereKeyValues:{packageId:"com.byasia.ruangortu","childInfo.schoolName":w,dateCreated:{$gte:M.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]},emailUser:{$nin:h.b}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:""!==T?{whereKeyValues:{packageId:"com.byasia.ruangortu","childInfo.schoolName":{$in:l},dateCreated:{$gte:M.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]},emailUser:{$nin:h.b}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:""!==D?{whereKeyValues:{packageId:"com.byasia.ruangortu",cobrandComunityId:D,dateCreated:{$gte:M.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]},emailUser:{$nin:h.b}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:{whereKeyValues:{packageId:"com.byasia.ruangortu",dateCreated:{$gte:M.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]},emailUser:{$nin:h.b}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER},b=""!==w?{whereKeyValues:{cobrandEmail:N.cobrandEmail,sekolah:w,programId:"",status:{$in:["active","inactive"]},dateCreated:{$gte:V.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]}},orderKeyValues:{contentName:1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER}:""!==T?{whereKeyValues:{cobrandEmail:N.cobrandEmail,sekolah:{$in:l},programId:"",status:{$in:["active","inactive"]},dateCreated:{$gte:V.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]}},orderKeyValues:{contentName:1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER}:""!==D?{whereKeyValues:{cobrandEmail:N.cobrandEmail,cobrandComunityId:D,programId:"",status:{$in:["active","inactive"]},dateCreated:{$gte:V.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]}},orderKeyValues:{contentName:1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER}:{whereKeyValues:{cobrandEmail:N.cobrandEmail,programId:"",status:{$in:["active","inactive"]},dateCreated:{$gte:V.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]}},orderKeyValues:{contentName:1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER},j={whereKeyValues:{cobrandEmail:N.cobrandEmail,dateCreated:{$gte:V.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]}},orderKeyValues:{programName:1},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER},m={whereKeyValues:{dateCreate:{$gte:M.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]},emailUser:{$nin:h.b}},limit:Number.MAX_SAFE_INTEGER},g=""!==w?{whereKeyValues:{sekolah:w,scheduleTime:{$gte:M.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]}},limit:Number.MAX_SAFE_INTEGER}:""!==T?{whereKeyValues:{sekolah:{$in:l},scheduleTime:{$gte:M.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]}},limit:Number.MAX_SAFE_INTEGER}:""!==D?{whereKeyValues:{cobrandComunityId:D,scheduleTime:{$gte:M.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]}},limit:Number.MAX_SAFE_INTEGER}:{whereKeyValues:{scheduleTime:{$gte:M.toISOString().split("T")[0],$lte:L.toISOString().split("T")[0]}},limit:Number.MAX_SAFE_INTEGER},p={limit:Number.MAX_SAFE_INTEGER},f=Object(u.B)(d),x=Object(u.l)(b),_=Object(u.v)(j),k=Object(u.f)(m),C=Object(u.s)(g),I=Object(u.r)(p);Promise.all([f,x,_,k,C,I]).then((function(o){var l=o[0].data.users;c[0]=l.length;for(var d=0;d<l.length;d++){var u=l[d];"parent"===u.userType?(c[1]++,void 0===u.parentEmail?i[0]++:s[0]++):"child"===u.userType&&(c[2]++,u.childInfo.StudyLevel.includes("TK")?e[1]++:u.childInfo.StudyLevel.includes("SD")?t[1]++:u.childInfo.StudyLevel.includes("SMP")?a[1]++:u.childInfo.StudyLevel.includes("SMA")?n[1]++:r[1]++)}var b=[{name:"Parent",data:i},{name:"Co-Parent",data:s},{name:"TK",data:e},{name:"SD",data:t},{name:"SMP",data:a},{name:"SMA",data:n},{name:"Lainnya",data:r}];Q(c),W(b),ce(["Orang tua: "+c[1],"Anak: "+c[2]]);var h=o[1].data.contents.length,j=o[2].data.programs.length;ne([{name:"Jumlah",data:[h,j]}]);var m=o[3].data.appUsages,g=[],p=[];for(d=0;d<m.length;d++)for(var f=m[d].appUsages,x=0;x<f.length;x++){var _=f[x];void 0!==_.usageHour&&_.usageHour.length>0&&(g.includes(_.appName)||(g.push(_.appName),p.push(0)),p[g.indexOf(_.appName)]+=_.usageHour.length)}var N=[];for(x=0;x<g.length;x++)N.push({name:g[x],age:p[x]});N.sort((function(e,t){return e.age<t.age?1:e.age==t.age?0:-1}));for(var D=0;D<N.length;D++)g[D]=N[D].name,p[D]=N[D].age;ue(p.slice(0,10)),me(g.slice(0,10));var T=[],w=[];o[5].data.Data.map((function(e){T.push(e.category),w.push(0)})),o[4].data.resultData.map((function(e){for(var t=0;t<w.length;t++)if(e.category===T[t]){w[t]++;break}})),fe([{name:"Jumlah",data:w}]),Se(T);var k=[],C=[],I=[],F=[];o[1].data.contents.map((function(e){if(e.topics.length<=0)k.includes("Tanpa Topik")?C[k.indexOf("Tanpa Topik")]++:(k.push("Tanpa Topik"),C.push(1)),I.includes("Tanpa Topik")?F[k.indexOf("Tanpa Topik")]+=e.totalView:(I.push("Tanpa Topik"),F.push(e.totalView));else for(var t=0;t<e.topics.length;t++)k.includes(e.topics[t])?C[k.indexOf(e.topics[t])]++:(k.push(e.topics[t]),C.push(1)),I.includes(e.topics[t])?F[k.indexOf(e.topics[t])]+=e.totalView:(I.push(e.topics[t]),F.push(e.totalView))})),o[2].data.programs.map((function(e){if(e.category.length<=0)k.includes("Tanpa Topik")?C[k.indexOf("Tanpa Topik")]++:(k.push("Tanpa Topik"),C.push(1));else for(var t=0;t<e.category.length;t++)k.includes(e.category[t])?C[k.indexOf(e.category[t])]++:(k.push(e.category[t]),C.push(1))})),Te(k),C.length>0?Ie([{name:"Jumlah",data:C}]):Ie([]),Pe(I),F.length>0?$e([{name:"Jumlah",data:F}]):$e([]),Ge([]),O?v(!1):S&&(y(!1),v(!0),v(!1))}))}))}()}),[,L]),Object(r.useEffect)((function(){Xe(["#44a6cc","#cc44a6","#a6cc44","#44cca6","#cca644","#a644cc","#117399","#991173","#739911","#119973"])}),[]),Object(r.useEffect)((function(){var e=new Date,t=k;switch(F){case"today":R(e),K(e),z(t);break;case"yesterday":e.setDate(e.getDate()-1),t.setDate(k.getDate()-1),R(e),K(e),z(t);break;case"week":e.setDate(e.getDate()-7),z(k),R(e),K(e);break;case"month":e.setDate(e.getDate()-30),z(k),R(e),K(e);break;case"year":e.setDate(e.getDate()-365),z(k),R(e),K(e);break;case"all":z(k),R(h.a),K(new Date("2020-01-01"));break;case"dummy":Q([500,349,151]),ce(["Orang tua: 349","Anak: 151"]),W(qe),ne(Ze),me(Be),ue(Qe),Se(We),fe(et),Te(Ye),Ie(tt),Pe(Ye),$e(at),Ge(nt),y(!1),setTimeout((function(){v(!0)}),50),setTimeout((function(){v(!1)}),80)}}),[F]),O?Object(c.jsx)(l.a,{}):Object(c.jsxs)(c.Fragment,{children:[S?Object(c.jsx)(d.a,{}):null,Object(c.jsxs)("div",{className:"Dashboard",children:[Object(c.jsxs)("div",{className:"div1",children:[Object(c.jsx)(s.a,{headingName:"DASHBOARD"}),Object(c.jsxs)("a",{className:"wa2",href:"http://wa.me/628119004410",target:"_blank",children:[Object(c.jsx)(b.e,{className:"whatshap"})," Need Help? Click Here!"]})]}),Object(c.jsxs)("div",{className:"Dashboard_real_period",children:[Object(c.jsx)("button",{className:"today"===F?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"today"!==F&&(y(!0),A("today"))},children:"Today"}),Object(c.jsx)("button",{className:"yesterday"===F?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"yesterday"!==F&&(y(!0),A("yesterday"))},children:"Yesterday"}),Object(c.jsx)("button",{className:"week"===F?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"week"!==F&&(y(!0),A("week"))},children:"7 Days"}),Object(c.jsx)("button",{className:"month"===F?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"month"!==F&&(y(!0),A("month"))},children:"30 Days"}),Object(c.jsx)("button",{className:"year"===F?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"year"!==F&&(y(!0),A("year"))},children:"365 Days"}),Object(c.jsx)("button",{className:"all"===F?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"all"!==F&&(y(!0),A("all"))},children:"All Time"}),Object(c.jsx)("button",{className:"dummy"===F?"Dashboard_real_period_option-active":"Dashboard_real_period_option",onClick:function(){"dummy"!==F&&(y(!0),A("dummy"))},children:"Dummy"})]}),Object(c.jsxs)("div",{className:"Dashboard_1",children:[Object(c.jsxs)("div",{className:"Dashboard_1_cards",children:[Object(c.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(c.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(c.jsx)("h3",{children:"Populasi User (Total: "+Z[0]+")"})}),Object(c.jsx)(g,{data:B,label:se,height:400,colors:Je}),Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(c.jsx)("p",{})})]})}),Object(c.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(c.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(c.jsx)("h3",{children:"Top 10 Apps by Usage"})}),Object(c.jsx)(f,{data:de,label:je,width:380,colors:Je}),Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(c.jsx)("p",{children:" "})})]})}),Object(c.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(c.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(c.jsx)("h3",{children:"Jumlah Postingan Artikel & Program Berdasarkan Topik"})}),Object(c.jsx)(p,{data:Ce,label:De,height:400}),Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(c.jsx)("p",{children:" "})})]})})]}),Object(c.jsxs)("div",{className:"Dashboard_1_cards",children:[Object(c.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(c.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(c.jsx)("h3",{children:"Total Artikel & Program"})}),Object(c.jsx)(p,{data:ae,label:["Artikel","Program"],height:200}),Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(c.jsx)("p",{children:" "})})]})}),Object(c.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(c.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(c.jsx)("h3",{children:"Jumlah Kirim Notifikasi"})}),Object(c.jsx)(p,{data:Oe,label:_e,height:350}),Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(c.jsx)("p",{children:" "})})]})}),Object(c.jsx)("div",{className:"Dashboard_1_cards_card",children:Object(c.jsxs)("div",{className:"Dashboard_1_cards_card_item",children:[Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-heading",children:Object(c.jsx)("h3",{children:"Jumlah Pageview Artikel & Program Berdasarkan Topik"})}),Object(c.jsx)(p,{data:Ue,label:Ee,height:600}),Object(c.jsx)("div",{className:"Dashboard_1_cards_card_item-details",children:Object(c.jsx)("p",{children:" "})})]})})]})]}),Object(c.jsx)("div",{className:"Dashboard_table",children:Object(c.jsx)(i.a,{COLUMNS:o,DATA:He})})]})]})}},309:function(e,t,a){"use strict";a(2);var n=a(22),r=(a(310),a(0));t.a=function(e){return e.text,Object(r.jsx)("div",{className:"LoadingFullRkSpinner",children:Object(r.jsx)(n.a,{})})}},310:function(e,t,a){},97:function(e,t,a){"use strict";a(2);var n=a(8),r=(a(98),a(0));t.a=function(e){var t=e.headingName,a=e.routes,i=void 0===a?[]:a;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:i.length>0&&i.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},98:function(e,t,a){}}]);
//# sourceMappingURL=33.59b8cf83.chunk.js.map