(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[55],{103:function(e,t,n){"use strict";n.d(t,"m",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"o",(function(){return s})),n.d(t,"n",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"i",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"k",(function(){return h})),n.d(t,"j",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"g",(function(){return g})),n.d(t,"l",(function(){return v})),n.d(t,"a",(function(){return O}));var a=n(18),r=n.n(a),o=n(20),i=function(e){return r()({method:"post",url:o.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:o.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return r()({method:"post",url:o.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return r()({method:"post",url:o.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:o.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:o.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:o.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:o.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:o.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:o.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:o.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return r()({method:"post",url:o.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:o.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},v=function(e){return r()({method:"post",url:o.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return r()({method:"post",url:o.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},112:function(e,t,n){},1197:function(e,t,n){},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"a",(function(){return p})),n.d(t,"g",(function(){return b})),n.d(t,"f",(function(){return h}));var a=n(101),r=n(7),o=n(2),i=n.n(o),l=(n(122),n(165)),s=n(0);function c(e){var t=e.column,n=t.filterValue,a=t.preFilteredRows,r=t.setFilter;a.length;return Object(s.jsx)("input",{value:n||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,n=t.filterValue,r=t.setFilter,o=t.preFilteredRows,l=t.id,c=i.a.useMemo((function(){var e=new Set;return o.forEach((function(t){void 0===t.values[l]||e.has(t.values[l])||e.add(t.values[l])})),Object(a.a)(e.values())}),[l,o]);return Object(s.jsxs)("select",{value:n,onChange:function(e){r(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),c.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,n=t.filterValue,r=t.setFilter,o=t.preFilteredRows,l=t.id,c=i.a.useMemo((function(){var e=new Set;return o.forEach((function(t){if(console.log("ini row",t.values[l]),console.log("ini tipe row",t.values[l]instanceof Array),console.log("ini length row",t.values[l].length),t.values[l]instanceof Array&&t.values[l].length>0)for(var n=0;n<t.values[l].length;n++){var a=t.values[l][n];void 0===a||e.has(a)||e.add(a)}})),Object(a.a)(e.values())}),[l,o]);return Object(s.jsxs)("select",{value:n,onChange:function(e){r(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),c.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function j(e){var t=e.column,n=t.filterValue,a=void 0===n?[]:n,o=t.preFilteredRows,l=t.setFilter,c=t.id,u=i.a.useMemo((function(){var e=o.length?o[0].values[c]:0,t=o.length?o[0].values[c]:0;return o.forEach((function(n){e=Math.min(n.values[c],e),t=Math.max(n.values[c],t)})),[e,t]}),[c,o]),d=Object(r.a)(u,2),j=d[0],p=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:a[0]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},min:j,placeholder:"Min (".concat(j,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(s.jsx)("input",{value:a[1]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},min:j,placeholder:"Max (".concat(p,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function p(e){var t=e.column,n=t.filterValue,a=void 0===n?[]:n,o=t.preFilteredRows,l=t.setFilter,c=t.id,u=i.a.useMemo((function(){var e=new Date("2022-08-13"),t=new Date;return t.setFullYear(t.getFullYear()+1),o.forEach((function(n){e=n.values[c]&&new Date(n.values[c])<=e?new Date(n.values[c]):e,t=n.values[c]&&new Date(n.values[c])>=t?new Date(n.values[c]):t})),[e,t]}),[c,o]),d=Object(r.a)(u,2),j=d[0],p=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:a[0]||j.toISOString().slice(0,10),type:"date",min:j.toISOString().slice(0,10),max:a[1]||p.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(s.jsx)("input",{value:a[1]||p.toISOString().slice(0,10),type:"date",min:a[0]||j.toISOString().slice(0,10),max:p.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function b(e,t,n){return Object(l.a)(e,n,{keys:[function(e){return e.values[t]}]})}function h(e,t,n){var a=new Date(n[0]),r=new Date(n[1]);return e.filter((function(o){var i=new Date(o.values[t]);return 0===n.length?e:i>=a&&i<=r}))}b.autoRemove=function(e){return!e},h.autoRemove=function(e){return!e}},129:function(e,t,n){"use strict";var a=n(101),r=n(5),o=n(34),i=n(2),l=n.n(i),s=n(9),c=n(122),u=n(135),d=(n(112),n(121)),j=n(166),p=n(158),b=(n(167),n(90)),h=n(0);t.a=function(e){var t=e.DATA,n=e.COLUMNS,m=e.renderRowSubComponent,f=e.showCheckbox,g=void 0!==f&&f,v=e.notifContext,O=void 0===v?"":v,x=l.a.useMemo((function(){return{fuzzyText:d.g,dateBetween:d.f,text:function(e,t,n){return e.filter((function(e){var a=e.values[t];return void 0===a||String(a).toLowerCase().startsWith(String(n).toLowerCase())}))}}}),[]),S=l.a.useMemo((function(){return{Filter:d.b}}),[]),y=l.a.forwardRef((function(e,t){var n=e.indeterminate,a=Object(o.a)(e,["indeterminate"]),i=l.a.useRef(),s=t||i;return l.a.useEffect((function(){s.current.indeterminate=n}),[s,n]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",Object(r.a)({type:"checkbox",ref:s},a))})})),C=Object(i.useMemo)((function(){return t}),[t]),N=Object(c.useTable)({columns:n,data:C,defaultColumn:S,filterTypes:x,initialState:{hiddenColumns:["emailUser","parentEmail","_id"],pageSize:20}},c.useFilters,c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination,c.useRowSelect,(function(e){g&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(h.jsx)("div",{children:Object(h.jsx)(y,Object(r.a)({},t()))})},Cell:function(e){var t=e.row;return Object(h.jsx)("div",{children:Object(h.jsx)(y,Object(r.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(a.a)(e))}))})),w=N.getTableProps,T=N.getTableBodyProps,F=N.headerGroups,_=N.prepareRow,D=N.page,I=N.rows,R=N.canPreviousPage,P=N.canNextPage,E=N.pageOptions,k=N.pageCount,A=N.gotoPage,U=N.nextPage,M=N.previousPage,H=N.setPageSize,V=N.visibleColumns,L=N.selectedFlatRows,z=(N.state.selectedRowIds,N.state),G=z.pageIndex,J=z.pageSize,B=(z.expanded,N.state),Y=N.setGlobalFilter,K=B.globalFilter,W=function(){for(var e=I,t=[],n=0;n<e.length;n++){var a={};_(e[n]);for(var r=0;r<e[n].cells.length;r++)"rowNumber"!==e[n].cells[r].column.id&&"selection"!==e[n].cells[r].column.id&&"buttonStatus"!==e[n].cells[r].column.id&&(e[n].cells[r].value&&"[object Date]"===Object.prototype.toString.call(e[n].cells[r].value)&&!isNaN(e[n].cells[r].value)?a[e[n].cells[r].column.Header]=e[n].cells[r].value.toISOString().split("T")[0]:a[e[n].cells[r].column.Header]=e[n].cells[r].value);t.push(a)}return t};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"tools",children:[Object(h.jsxs)("div",{className:"table_props",children:[Object(h.jsxs)("span",{children:["Total: ",I.length," Data"]}),Object(h.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:K||"",onChange:function(e){Y(e.currentTarget.value)}})]}),Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(b.c,{})," ",Object(h.jsx)(j.CSVLink,{data:W(),children:"Download as CSV"})]}),Object(h.jsxs)("button",{className:"btn_tools",onClick:function(){var e=W();if(e.length>0){var t=new p.default("landscape","pt","A4");t.setFontSize(15);var n={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(n),t.save("report.pdf")}},children:[Object(h.jsx)(b.b,{})," Download as PDF"]}),g?L.length>0?Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(b.a,{}),Object(h.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O);for(var e=[],t=[],n=0;n<L.length;n++)e.push(L[n].original.emailUser),"child"===L[n].original.userType&&(e.includes(L[n].original.emailUser)||e.push(L[n].original.emailUser)),t.push(L[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(h.jsxs)("button",{className:"btn_tools_disabled",children:[Object(h.jsx)(b.a,{}),Object(h.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,g?L.length>0?Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(b.a,{}),Object(h.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O);for(var e=[],t=[],n=0;n<L.length;n++)void 0!==L[n].original.parentEmail&&(e.some((function(e){return L[n].original.parentEmail.includes(e)}))||("child"===L[n].original.userType?e.push.apply(e,Object(a.a)(L[n].original.parentEmail)):e.push(L[n].original.emailUser))),t.push(L[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(h.jsxs)("button",{className:"btn_tools_disabled",children:[Object(h.jsx)(b.a,{}),Object(h.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,g?L.length>0?Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(b.a,{}),Object(h.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O);for(var e=[],t=[],n=0;n<L.length;n++)e.includes(L[n].original.emailUser)||e.push(L[n].original.emailUser),void 0!==L[n].original.parentEmail&&(e.some((function(e){return L[n].original.parentEmail.includes(e)}))||e.push(L[n].original.parentEmail)),t.push(L[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(h.jsxs)("button",{className:"btn_tools_disabled",children:[Object(h.jsx)(b.a,{}),Object(h.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(h.jsx)("div",{className:"utils",children:Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsx)("button",{onClick:function(){return A(0)},disabled:!R,children:"<<"}),Object(h.jsx)("button",{onClick:function(){return M()},disabled:!R,children:"<"}),Object(h.jsx)("button",{onClick:function(){return U()},disabled:!P,children:">"}),Object(h.jsx)("button",{onClick:function(){return A(k-1)},disabled:!P,children:">>"}),Object(h.jsxs)("span",{children:["Page "," ",Object(h.jsxs)("strong",{children:[G+1," of ",E.length]})]}),Object(h.jsxs)("span",{children:["| Go to page:",Object(h.jsx)("input",{type:"number",defaultValue:G+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;A(t)}})]}),Object(h.jsx)("select",{value:J,onChange:function(e){H(Number(e.target.value))},children:[20,50,100].map((function(e){return Object(h.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(h.jsx)("div",{className:"table_container",children:Object(h.jsxs)("table",Object(r.a)(Object(r.a)({},w()),{},{children:[Object(h.jsx)("thead",{children:F.map((function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(h.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(h.jsx)(u.a,{}):Object(h.jsx)(u.b,{}):""})]}))}))})),Object(h.jsx)("tr",{children:e.headers.map((function(e){return Object(h.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(h.jsx)("tbody",Object(r.a)(Object(r.a)({},T()),{},{children:D.map((function(e,t){return _(e),Object(h.jsxs)(i.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(h.jsx)("tr",{children:e.cells.map((function(e){return Object(h.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{className:(e.value&&!Array.isArray(e.value)||Array.isArray(e.value)&&e.value.length>0||"selection"===e.column.id||e.column.id,"cell"),children:[" ","rowNumber"!==e.column.id?e.render("Cell"):t+1+G*J," "]}))}))}),e.isExpanded?Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:V.length,children:m({row:e})})}):null]}))}))}))]}))})]})}},1469:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(2),o=n(129),i=(n(121),[{Header:"No. Urut Tahap",accessor:"nomerUrutTahapan",disableFilters:!0},{Header:"Nama Tahap",accessor:"contentName",disableFilters:!0},{Header:"Respon",accessor:"Object.keys(respons)"}]),l=n(94),s=n(36),c=(n(1197),n(103)),u=(n(174),n(0));t.default=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],d=t[1],j=Object(r.useState)(),p=Object(a.a)(j,2),b=p[0],h=p[1],m=Object(r.useState)("real"),f=Object(a.a)(m,2),g=f[0],v=f[1],O=JSON.parse(localStorage.getItem("userData")),x=localStorage.getItem("stepReportSelected");return Object(r.useEffect)((function(){if("dummy"===g)d(!1);else{var e={whereKeyValues:{cobrandEmail:O.cobrandEmail,programId:x},orderKeyValues:{nomerUrutTahapan:1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER};Object(c.f)(e).then((function(e){h(e.data.contents),d(!1)})).catch((function(e){d(!1)}))}}),[,g]),n?Object(u.jsx)(s.a,{}):Object(u.jsxs)("div",{className:"Program",children:[Object(u.jsx)(l.a,{headingName:"Report Tahap",routes:[{name:"Report"},{name:"Program Report",path:"/report/program"},{name:"Report Tahap",path:"/report/program/step"}]}),Object(u.jsxs)("div",{className:"Dashboard_period",children:[Object(u.jsx)("button",{className:"real"===g?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==g&&(d(!0),v("real"))},children:"Prod"}),Object(u.jsx)("button",{className:"dummy"===g?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==g&&(d(!0),v("dummy"))},children:"Dummy"})]}),Object(u.jsx)("div",{className:"Program_table",children:Object(u.jsx)(o.a,{COLUMNS:i,DATA:b})})]})}},94:function(e,t,n){"use strict";n(2);var a=n(9),r=(n(95),n(0));t.a=function(e){var t=e.headingName,n=e.routes,o=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},95:function(e,t,n){}}]);
//# sourceMappingURL=55.42494932.chunk.js.map