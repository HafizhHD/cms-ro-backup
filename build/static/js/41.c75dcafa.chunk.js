(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[41],{107:function(e,t,n){"use strict";n(2);var r=n(7),a=(n(109),n(0));t.a=function(e){var t=e.headingName,n=e.routes,c=void 0===n?[]:n;return Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("ul",{className:"Heading__breadcumb",children:c.length>0&&c.map((function(e,t){return e.path?Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(a.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(a.jsx)("span",{children:e.name})," "]},t)}))})]})}},109:function(e,t,n){},115:function(e,t,n){},1151:function(e,t,n){},118:function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"h",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return p}));var r=n(18),a=n.n(r),c=n(20),o=function(e){return a()({method:"post",url:c.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return a()({method:"post",url:c.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return a()({method:"post",url:c.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return a()({method:"post",url:c.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return a()({method:"post",url:c.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return a()({method:"post",url:c.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return a()({method:"post",url:c.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return a()({method:"post",url:c.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return a()({method:"post",url:c.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})}},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return j}));var r=n(108),a=n(10),c=n(2),o=n.n(c),s=(n(120),n(171)),l=n(0);function i(e){var t=e.column,n=t.filterValue,r=t.preFilteredRows,a=t.setFilter;r.length;return Object(l.jsx)("input",{value:n||"",onChange:function(e){a(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,n=t.filterValue,a=t.setFilter,c=t.preFilteredRows,s=t.id,i=o.a.useMemo((function(){var e=new Set;return c.forEach((function(t){e.add(t.values[s])})),Object(r.a)(e.values())}),[s,c]);return Object(l.jsxs)("select",{value:n,onChange:function(e){a(e.target.value||void 0)},children:[Object(l.jsx)("option",{value:"",children:"All"}),i.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,n=t.filterValue,r=void 0===n?[]:n,c=t.preFilteredRows,s=t.setFilter,i=t.id,u=o.a.useMemo((function(){var e=c.length?c[0].values[i]:0,t=c.length?c[0].values[i]:0;return c.forEach((function(n){e=Math.min(n.values[i],e),t=Math.max(n.values[i],t)})),[e,t]}),[i,c]),d=Object(a.a)(u,2),j=d[0],b=d[1];return Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("input",{value:r[0]||"",type:"number",onChange:function(e){var t=e.target.value;s((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},placeholder:"Min (".concat(j,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(l.jsx)("input",{value:r[1]||"",type:"number",onChange:function(e){var t=e.target.value;s((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},placeholder:"Max (".concat(b,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function j(e,t,n){return Object(s.a)(e,n,{keys:[function(e){return e.values[t]}]})}j.autoRemove=function(e){return!e}},132:function(e,t,n){"use strict";var r=n(108),a=n(5),c=n(34),o=n(2),s=n.n(o),l=n(7),i=n(120),u=n(139),d=(n(115),n(119)),j=n(172),b=n(164),p=(n(173),n(87)),h=n(0);t.a=function(e){var t=e.DATA,n=e.COLUMNS,g=e.renderRowSubComponent,m=e.showCheckbox,f=void 0!==m&&m,O=e.notifContext,x=void 0===O?"":O,v=s.a.useMemo((function(){return{fuzzyText:d.d,text:function(e,t,n){return e.filter((function(e){var r=e.values[t];return void 0===r||String(r).toLowerCase().startsWith(String(n).toLowerCase())}))}}}),[]),C=s.a.useMemo((function(){return{Filter:d.a}}),[]),S=s.a.forwardRef((function(e,t){var n=e.indeterminate,r=Object(c.a)(e,["indeterminate"]),o=s.a.useRef(),l=t||o;return s.a.useEffect((function(){l.current.indeterminate=n}),[l,n]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",Object(a.a)({type:"checkbox",ref:l},r))})})),w=Object(o.useMemo)((function(){return t}),[t]),F=Object(i.useTable)({columns:n,data:w,defaultColumn:C,filterTypes:v},i.useFilters,i.useGlobalFilter,i.useSortBy,i.useExpanded,i.usePagination,i.useRowSelect,(function(e){f&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(h.jsx)("div",{children:Object(h.jsx)(S,Object(a.a)({},t()))})},Cell:function(e){var t=e.row;return Object(h.jsx)("div",{children:Object(h.jsx)(S,Object(a.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(r.a)(e))}))})),N=F.getTableProps,y=F.getTableBodyProps,P=F.headerGroups,T=F.prepareRow,R=F.page,_=F.rows,k=F.canPreviousPage,H=F.canNextPage,M=F.pageOptions,A=F.pageCount,I=F.gotoPage,E=F.nextPage,D=F.previousPage,V=F.setPageSize,L=F.visibleColumns,U=F.selectedFlatRows,G=(F.state.selectedRowIds,F.state),z=G.pageIndex,q=G.pageSize,B=(G.expanded,F.state),J=F.setGlobalFilter,K=B.globalFilter,W=function(){var e=_;console.log(e);for(var t=[],n=0;n<e.length;n++){var r={};T(e[n]),console.log(e[n].cells);for(var a=0;a<e[n].cells.length;a++)"rowNumber"!==e[n].cells[a].column.id&&"selection"!==e[n].cells[a].column.id&&"buttonStatus"!==e[n].cells[a].column.id&&(r[e[n].cells[a].column.Header]=e[n].cells[a].value);t.push(r)}return t};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"tools",children:[Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(p.c,{})," ",Object(h.jsx)(j.CSVLink,{data:W(),children:"Download as CSV"})]}),Object(h.jsxs)("button",{className:"btn_tools",onClick:function(){var e=W();if(e.length>0){var t=new b.default("landscape","pt","A4");t.setFontSize(15);var n={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(n),t.save("report.pdf")}},children:[Object(h.jsx)(p.b,{})," Download as PDF"]}),U.length>0?Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(p.a,{}),Object(h.jsx)(l.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",x),console.log(localStorage.getItem("notifContext"));for(var e="",t=0;t<U.length;t++)e+=U[t].original.emailUser,t<U.length-1&&(e+=", "),console.log(e);localStorage.setItem("emailTo",e),console.log(localStorage.getItem("emailTo"))},children:"Send Notifications"})]}):null]}),Object(h.jsxs)("div",{className:"utils",children:[Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsx)("button",{onClick:function(){return I(0)},disabled:!k,children:"<<"}),Object(h.jsx)("button",{onClick:function(){return D()},disabled:!k,children:"<"}),Object(h.jsx)("button",{onClick:function(){return E()},disabled:!H,children:">"}),Object(h.jsx)("button",{onClick:function(){return I(A-1)},disabled:!H,children:">>"}),Object(h.jsxs)("span",{children:["Page "," ",Object(h.jsxs)("strong",{children:[z+1," of ",M.length]})]}),Object(h.jsxs)("span",{children:["| Go to page:",Object(h.jsx)("input",{type:"number",defaultValue:z+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;I(t)}})]}),Object(h.jsx)("select",{value:q,onChange:function(e){V(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(h.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(h.jsxs)("div",{className:"table_props",children:[Object(h.jsxs)("span",{children:["Total: ",_.length," Data"]}),Object(h.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:K||"",onChange:function(e){J(e.currentTarget.value)}})]})]}),Object(h.jsx)("div",{className:"table_container",children:Object(h.jsxs)("table",Object(a.a)(Object(a.a)({},N()),{},{children:[Object(h.jsx)("thead",{children:P.map((function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(h.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(h.jsx)(u.a,{}):Object(h.jsx)(u.b,{}):""})]}))}))})),Object(h.jsx)("tr",{children:e.headers.map((function(e){return Object(h.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(h.jsx)("tbody",Object(a.a)(Object(a.a)({},y()),{},{children:R.map((function(e,t){return T(e),Object(h.jsxs)(o.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(h.jsx)("tr",{children:e.cells.map((function(e){return Object(h.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+z*q:e.render("Cell")," "]}))}))}),e.isExpanded?Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:L.length,children:g({row:e})})}):null]}))}))}))]}))})]})}},1397:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(2),c=n(132),o=n(119),s=n(0),l=[{Header:"No.",id:"rowNumber",disableFilters:!0},{Header:"Nama Program",accessor:"programName",disableFilters:!0},{Header:"Kategori Program",accessor:"programPurpose",Filter:o.c,filter:"equals",Cell:function(e){return e.row.index%3===1?Object(s.jsx)("p",{children:"Pendidikan Agama"}):Object(s.jsx)("p",{children:"Pengetahuan Siswa Umum"})}},{Header:"Target Pembaca",accessor:"programTarget",Filter:o.c,filter:"equals",Cell:function(e){e.row;return Object(s.jsx)("p",{children:"Semua"})}},{Header:"Status",accessor:"status",Filter:o.c,filter:"equals"}],i=n(107),u=n(36),d=(n(1151),n(118));n(174),t.default=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],o=t[1],j=Object(a.useState)(),b=Object(r.a)(j,2),p=b[0],h=b[1],g=JSON.parse(localStorage.getItem("userData"));return Object(a.useEffect)((function(){var e={whereKeyValues:{cobrandEmail:g.email},orderKeyValues:{programName:1},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER};console.log(e),Object(d.g)(e).then((function(e){console.log(e.data),h(e.data.programs),o(!1)})).catch((function(e){console.log(e),o(!1)}))}),[]),n?Object(s.jsx)(u.a,{}):Object(s.jsxs)("div",{className:"Program",children:[Object(s.jsx)(i.a,{headingName:"Program Report",routes:[{name:"Report",path:"/report/program"},{name:"Program Report"}]}),Object(s.jsx)("div",{className:"Program_table",children:Object(s.jsx)(c.a,{COLUMNS:l,DATA:p})})]})}}}]);
//# sourceMappingURL=41.c75dcafa.chunk.js.map