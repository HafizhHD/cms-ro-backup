(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[63],{100:function(e,t,n){"use strict";n.d(t,"v",(function(){return o})),n.d(t,"l",(function(){return i})),n.d(t,"k",(function(){return l})),n.d(t,"B",(function(){return s})),n.d(t,"w",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"p",(function(){return b})),n.d(t,"e",(function(){return j})),n.d(t,"q",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"s",(function(){return p})),n.d(t,"r",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"n",(function(){return O})),n.d(t,"m",(function(){return v})),n.d(t,"o",(function(){return x})),n.d(t,"u",(function(){return S})),n.d(t,"a",(function(){return y})),n.d(t,"i",(function(){return F})),n.d(t,"j",(function(){return N})),n.d(t,"y",(function(){return w})),n.d(t,"z",(function(){return C})),n.d(t,"x",(function(){return _})),n.d(t,"t",(function(){return T})),n.d(t,"A",(function(){return D})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return R})),n.d(t,"h",(function(){return P}));n(18),n(20);var r,a=n(101),c=null!==(r=localStorage.getItem("accessToken"))&&void 0!==r?r:"",o=function(e){return Object(a.a)(c,e,"/cobrand/programFilter")},i=function(e){return Object(a.a)(c,e,"/cobrand/contentFilter")},l=function(e){return Object(a.a)(c,e,"/cobrand/commentContentFilter")},s=function(e){return Object(a.a)(c,e,"/user/userFilter")},u=function(e){return Object(a.a)(c,e,"/cobrand/redZoneFilter")},d=function(e){return Object(a.a)(c,e,"/user/appUsageFilter")},b=function(e){return Object(a.a)(c,e,"/user/deviceUsageScheduleFilter")},j=function(e){return Object(a.a)(c,e,"/user/appUsageLimitFilter")},f=function(e){return Object(a.a)(c,e,"/user/childModeAsuhFilter")},h=function(e){return Object(a.a)(c,e,"/user/appIconFilter")},p=function(e){return Object(a.a)(c,e,"/user/broadcastFilter")},m=function(e){return Object(a.a)(c,e,"/cms/notificationCategoryFilter")},g=function(e){return Object(a.a)(c,e,"/cms/audianceTargetFilter")},O=function(e){return Object(a.a)(c,e,"/cms/contentTopicFilter")},v=function(e){return Object(a.a)(c,e,"/user/userContentResponFilter")},x=function(e){return Object(a.a)(c,e,"/user/userContentViewFilter")},S=function(e){return Object(a.a)(c,e,"/cms/programCategoryFilter")},y=function(e){return Object(a.a)(c,e,"/cms/userFilter")},F=function(e){return Object(a.a)(c,e,"/cobrand/cobrandComunityFilter")},N=function(e){return Object(a.a)(c,e,"/cobrand/cobrandComunityMemberFilter")},w=function(e){return Object(a.a)(c,e,"/cobrand/rekapDataSekolahFilter")},C=function(e){return Object(a.a)(c,e,"/cobrand/AlAzharSchoolFilter")},_=function(e){return Object(a.a)(c,e,"/cobrand/cobrandGroupMitraAsuhFilter")},T=function(e){return Object(a.a)(c,e,"/cobrand/prayAlertMessageFilter")},D=function(e){return Object(a.a)(c,e,"/user/appDeviceFilter")},I=function(e){return Object(a.a)(c,e,"/user/appAlwaysOnBySekolahFilter")},R=function(e){return Object(a.a)(c,e,"/user/logVisitPageFilter")},P=function(e){return Object(a.a)(c,e,"/cms/logCMSFilter")}},101:function(e,t,n){"use strict";var r=n(20),a=n(18),c=n.n(a);t.a=function(e,t,n){return c()({method:"post",url:r.a+n,data:t,headers:{"Content-Type":"application/json","x-token":e}})}},106:function(e,t,n){},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return j})),n.d(t,"g",(function(){return f})),n.d(t,"f",(function(){return h}));var r=n(107),a=n(7),c=n(2),o=n.n(c),i=(n(118),n(215)),l=n(0);function s(e){var t=e.column,n=t.filterValue,r=t.preFilteredRows,a=t.setFilter;r.length;return Object(l.jsx)("input",{value:n||"",onChange:function(e){a(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,n=t.filterValue,a=t.setFilter,c=t.preFilteredRows,i=t.id,s=o.a.useMemo((function(){var e=new Set;return c.forEach((function(t){void 0===t.values[i]||e.has(t.values[i])||e.add(t.values[i])})),Object(r.a)(e.values())}),[i,c]);return Object(l.jsxs)("select",{value:n,onChange:function(e){a(e.target.value||void 0)},children:[Object(l.jsx)("option",{value:"",children:"All"}),s.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,n=t.filterValue,a=t.setFilter,c=t.preFilteredRows,i=t.id,s=o.a.useMemo((function(){var e=new Set;return c.forEach((function(t){if(console.log("ini row",t.values[i]),console.log("ini tipe row",t.values[i]instanceof Array),console.log("ini length row",t.values[i].length),t.values[i]instanceof Array&&t.values[i].length>0)for(var n=0;n<t.values[i].length;n++){var r=t.values[i][n];void 0===r||e.has(r)||e.add(r)}})),Object(r.a)(e.values())}),[i,c]);return Object(l.jsxs)("select",{value:n,onChange:function(e){a(e.target.value||void 0)},children:[Object(l.jsx)("option",{value:"",children:"All"}),s.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}))]})}function b(e){var t=e.column,n=t.filterValue,r=void 0===n?[]:n,c=t.preFilteredRows,i=t.setFilter,s=t.id,u=o.a.useMemo((function(){var e=c.length?c[0].values[s]:0,t=c.length?c[0].values[s]:0;return c.forEach((function(n){e=Math.min(n.values[s],e),t=Math.max(n.values[s],t)})),[e,t]}),[s,c]),d=Object(a.a)(u,2),b=d[0],j=d[1];return Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("input",{value:r[0]||"",type:"number",onChange:function(e){var t=e.target.value;i((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},min:b,placeholder:"Min (".concat(b,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(l.jsx)("input",{value:r[1]||"",type:"number",onChange:function(e){var t=e.target.value;i((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},min:b,placeholder:"Max (".concat(j,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function j(e){var t=e.column,n=t.filterValue,r=void 0===n?[]:n,c=t.preFilteredRows,i=t.setFilter,s=t.id,u=o.a.useMemo((function(){var e=new Date("2022-08-13"),t=new Date;return t.setFullYear(t.getFullYear()+1),c.forEach((function(n){e=n.values[s]&&new Date(n.values[s])<=e?new Date(n.values[s]):e,t=n.values[s]&&new Date(n.values[s])>=t?new Date(n.values[s]):t})),[e,t]}),[s,c]),d=Object(a.a)(u,2),b=d[0],j=d[1];return Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("input",{value:r[0]||b.toISOString().slice(0,10),type:"date",min:b.toISOString().slice(0,10),max:r[1]||j.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;i((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(l.jsx)("input",{value:r[1]||j.toISOString().slice(0,10),type:"date",min:r[0]||b.toISOString().slice(0,10),max:j.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;i((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function f(e,t,n){return Object(i.a)(e,n,{keys:[function(e){return e.values[t]}]})}function h(e,t,n){var r=new Date(n[0]),a=new Date(n[1]);return e.filter((function(c){var o=new Date(c.values[t]);return 0===n.length?e:o>=r&&o<=a}))}f.autoRemove=function(e){return!e},h.autoRemove=function(e){return!e}},1293:function(e,t,n){},148:function(e,t,n){"use strict";var r=n(107),a=n(5),c=n(34),o=n(2),i=n.n(o),l=n(8),s=n(118),u=n(143),d=(n(106),n(121)),b=n(216),j=n(200),f=(n(217),n(90)),h=n(0);t.a=function(e){var t=e.DATA,n=e.COLUMNS,p=e.renderRowSubComponent,m=e.showCheckbox,g=void 0!==m&&m,O=(e.showTools,e.notifContext),v=void 0===O?"":O,x=i.a.useMemo((function(){return{fuzzyText:d.g,dateBetween:d.f,text:function(e,t,n){return e.filter((function(e){var r=e.values[t];return void 0===r||String(r).toLowerCase().startsWith(String(n).toLowerCase())}))}}}),[]),S=i.a.useMemo((function(){return{Filter:d.b}}),[]),y=i.a.forwardRef((function(e,t){var n=e.indeterminate,r=Object(c.a)(e,["indeterminate"]),o=i.a.useRef(),l=t||o;return i.a.useEffect((function(){l.current.indeterminate=n}),[l,n]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",Object(a.a)({type:"checkbox",ref:l},r))})})),F=Object(o.useMemo)((function(){return t}),[t]),N=Object(s.useTable)({columns:n,data:F,defaultColumn:S,filterTypes:x,initialState:{hiddenColumns:["emailUser","parentEmail","_id"],pageSize:20}},s.useFilters,s.useGlobalFilter,s.useSortBy,s.useExpanded,s.usePagination,s.useRowSelect,(function(e){g&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(h.jsx)("div",{children:Object(h.jsx)(y,Object(a.a)({},t()))})},Cell:function(e){var t=e.row;return Object(h.jsx)("div",{children:Object(h.jsx)(y,Object(a.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(r.a)(e))}))})),w=N.getTableProps,C=N.getTableBodyProps,_=N.headerGroups,T=N.prepareRow,D=N.page,I=N.rows,R=N.canPreviousPage,P=N.canNextPage,A=N.pageOptions,k=N.pageCount,E=N.gotoPage,M=N.nextPage,U=N.previousPage,H=N.setPageSize,V=N.visibleColumns,z=N.selectedFlatRows,L=(N.state.selectedRowIds,N.state),G=L.pageIndex,B=L.pageSize,J=(L.expanded,N.state),Y=N.setGlobalFilter,K=J.globalFilter,q=function(){for(var e=I,t=[],n=0;n<e.length;n++){var r={};T(e[n]);for(var a=0;a<e[n].cells.length;a++)"rowNumber"!==e[n].cells[a].column.id&&"selection"!==e[n].cells[a].column.id&&"buttonStatus"!==e[n].cells[a].column.id&&(e[n].cells[a].value&&"[object Date]"===Object.prototype.toString.call(e[n].cells[a].value)&&!isNaN(e[n].cells[a].value)?r[e[n].cells[a].column.Header]=e[n].cells[a].value.toISOString().split("T")[0]:r[e[n].cells[a].column.Header]=e[n].cells[a].value);t.push(r)}return t};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"tools",children:[Object(h.jsxs)("div",{className:"table_props",children:[Object(h.jsxs)("span",{children:["Total: ",I.length," Data"]}),Object(h.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:K||"",onChange:function(e){Y(e.currentTarget.value)}})]}),Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(f.d,{})," ",Object(h.jsx)(b.CSVLink,{data:q(),children:"Download as CSV"})]}),Object(h.jsxs)("button",{className:"btn_tools",onClick:function(){var e=q();if(e.length>0){var t=new j.default("landscape","pt","A4");t.setFontSize(15);var n={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(n),t.save("report.pdf")}},children:[Object(h.jsx)(f.b,{})," Download as PDF"]}),g?z.length>0?Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(f.a,{}),Object(h.jsx)(l.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v);for(var e=[],t=[],n=0;n<z.length;n++)e.push(z[n].original.emailUser),"child"===z[n].original.userType&&(e.includes(z[n].original.emailUser)||e.push(z[n].original.emailUser)),t.push(z[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(h.jsxs)("button",{className:"btn_tools_disabled",children:[Object(h.jsx)(f.a,{}),Object(h.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,g?z.length>0?Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(f.a,{}),Object(h.jsx)(l.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v);for(var e=[],t=[],n=0;n<z.length;n++)void 0!==z[n].original.parentEmail&&(e.some((function(e){return z[n].original.parentEmail.includes(e)}))||("child"===z[n].original.userType?e.push.apply(e,Object(r.a)(z[n].original.parentEmail)):e.push(z[n].original.emailUser))),t.push(z[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(h.jsxs)("button",{className:"btn_tools_disabled",children:[Object(h.jsx)(f.a,{}),Object(h.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,g?z.length>0?Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(f.a,{}),Object(h.jsx)(l.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v);for(var e=[],t=[],n=0;n<z.length;n++)e.includes(z[n].original.emailUser)||e.push(z[n].original.emailUser),void 0!==z[n].original.parentEmail&&(e.some((function(e){return z[n].original.parentEmail.includes(e)}))||e.push(z[n].original.parentEmail)),t.push(z[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(h.jsxs)("button",{className:"btn_tools_disabled",children:[Object(h.jsx)(f.a,{}),Object(h.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(h.jsx)("div",{className:"utils",children:Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsx)("button",{onClick:function(){return E(0)},disabled:!R,children:"<<"}),Object(h.jsx)("button",{onClick:function(){return U()},disabled:!R,children:"<"}),Object(h.jsx)("button",{onClick:function(){return M()},disabled:!P,children:">"}),Object(h.jsx)("button",{onClick:function(){return E(k-1)},disabled:!P,children:">>"}),Object(h.jsxs)("span",{children:["Page "," ",Object(h.jsxs)("strong",{children:[G+1," of ",A.length]})]}),Object(h.jsxs)("span",{children:["| Go to page:",Object(h.jsx)("input",{type:"number",defaultValue:G+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;E(t)}})]}),Object(h.jsx)("select",{value:B,onChange:function(e){H(Number(e.target.value))},children:[20,50,100].map((function(e){return Object(h.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(h.jsx)("div",{className:"table_container",children:Object(h.jsxs)("table",Object(a.a)(Object(a.a)({},w()),{},{children:[Object(h.jsx)("thead",{children:_.map((function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(h.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(h.jsx)(u.a,{}):Object(h.jsx)(u.b,{}):""})]}))}))})),Object(h.jsx)("tr",{children:e.headers.map((function(e){return Object(h.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(h.jsx)("tbody",Object(a.a)(Object(a.a)({},C()),{},{children:D.map((function(e,t){return T(e),Object(h.jsxs)(o.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(h.jsx)("tr",{children:e.cells.map((function(e){return Object(h.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{className:(e.value&&!Array.isArray(e.value)||Array.isArray(e.value)&&e.value.length>0||"selection"===e.column.id||e.column.id,"cell"),children:[" ","rowNumber"!==e.column.id?e.render("Cell"):t+1+G*B," "]}))}))}),e.isExpanded?Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:V.length,children:p({row:e})})}):null]}))}))}))]}))})]})}},1529:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(2),c=n(148),o=(n(121),[{Header:"No. Urut Tahap",accessor:"nomerUrutTahapan",disableFilters:!0},{Header:"Nama Tahap",accessor:"contentName",disableFilters:!0},{Header:"Respon",accessor:"Object.keys(respons)"}]),i=n(97),l=n(35),s=(n(1293),n(100)),u=(n(237),n(0));t.default=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],d=t[1],b=Object(a.useState)(),j=Object(r.a)(b,2),f=j[0],h=j[1],p=Object(a.useState)("real"),m=Object(r.a)(p,2),g=m[0],O=m[1],v=JSON.parse(localStorage.getItem("userData")),x=localStorage.getItem("stepReportSelected");return Object(a.useEffect)((function(){if("dummy"===g)d(!1);else{var e={whereKeyValues:{cobrandEmail:v.cobrandEmail,programId:x},orderKeyValues:{nomerUrutTahapan:1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER};Object(s.l)(e).then((function(e){h(e.data.contents),d(!1)})).catch((function(e){d(!1)}))}}),[,g]),n?Object(u.jsx)(l.a,{}):Object(u.jsxs)("div",{className:"Program",children:[Object(u.jsx)(i.a,{headingName:"Report Tahap",routes:[{name:"Report"},{name:"Program Report",path:"/report/program"},{name:"Report Tahap",path:"/report/program/step"}]}),Object(u.jsxs)("div",{className:"Dashboard_period",children:[Object(u.jsx)("button",{className:"real"===g?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==g&&(d(!0),O("real"))},children:"Prod"}),Object(u.jsx)("button",{className:"dummy"===g?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==g&&(d(!0),O("dummy"))},children:"Dummy"})]}),Object(u.jsx)("div",{className:"Program_table",children:Object(u.jsx)(c.a,{COLUMNS:o,DATA:f})})]})}},97:function(e,t,n){"use strict";n(2);var r=n(8),a=(n(98),n(0));t.a=function(e){var t=e.headingName,n=e.routes,c=void 0===n?[]:n;return Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("ul",{className:"Heading__breadcumb",children:c.length>0&&c.map((function(e,t){return e.path?Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(a.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(a.jsx)("span",{children:e.name})," "]},t)}))})]})}},98:function(e,t,n){}}]);
//# sourceMappingURL=63.eda0e5b6.chunk.js.map