(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[39],{107:function(e,t,n){"use strict";n(2);var a=n(7),r=(n(109),n(0));t.a=function(e){var t=e.headingName,n=e.routes,c=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:c.length>0&&c.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},109:function(e,t,n){},115:function(e,t,n){},118:function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"h",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return p}));var a=n(18),r=n.n(a),c=n(20),o=function(e){return r()({method:"post",url:c.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return r()({method:"post",url:c.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:c.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return r()({method:"post",url:c.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:c.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:c.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:c.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:c.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:c.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})}},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return j}));var a=n(108),r=n(10),c=n(2),o=n.n(c),s=(n(120),n(170)),l=n(0);function i(e){var t=e.column,n=t.filterValue,a=t.preFilteredRows,r=t.setFilter;a.length;return Object(l.jsx)("input",{value:n||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,n=t.filterValue,r=t.setFilter,c=t.preFilteredRows,s=t.id,i=o.a.useMemo((function(){var e=new Set;return c.forEach((function(t){e.add(t.values[s])})),Object(a.a)(e.values())}),[s,c]);return Object(l.jsxs)("select",{value:n,onChange:function(e){r(e.target.value||void 0)},children:[Object(l.jsx)("option",{value:"",children:"All"}),i.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,n=t.filterValue,a=void 0===n?[]:n,c=t.preFilteredRows,s=t.setFilter,i=t.id,u=o.a.useMemo((function(){var e=c.length?c[0].values[i]:0,t=c.length?c[0].values[i]:0;return c.forEach((function(n){e=Math.min(n.values[i],e),t=Math.max(n.values[i],t)})),[e,t]}),[i,c]),d=Object(r.a)(u,2),j=d[0],b=d[1];return Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("input",{value:a[0]||"",type:"number",onChange:function(e){var t=e.target.value;s((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},placeholder:"Min (".concat(j,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(l.jsx)("input",{value:a[1]||"",type:"number",onChange:function(e){var t=e.target.value;s((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},placeholder:"Max (".concat(b,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function j(e,t,n){return Object(s.a)(e,n,{keys:[function(e){return e.values[t]}]})}j.autoRemove=function(e){return!e}},130:function(e,t,n){"use strict";var a=n(108),r=n(5),c=n(34),o=n(2),s=n.n(o),l=n(7),i=n(120),u=n(138),d=(n(115),n(119)),j=n(171),b=n(163),p=(n(172),n(87)),h=n(0);t.a=function(e){var t=e.DATA,n=e.COLUMNS,f=e.renderRowSubComponent,g=e.showCheckbox,m=void 0!==g&&g,O=e.notifContext,v=void 0===O?"":O,x=s.a.useMemo((function(){return{fuzzyText:d.d,text:function(e,t,n){return e.filter((function(e){var a=e.values[t];return void 0===a||String(a).toLowerCase().startsWith(String(n).toLowerCase())}))}}}),[]),C=s.a.useMemo((function(){return{Filter:d.a}}),[]),F=s.a.forwardRef((function(e,t){var n=e.indeterminate,a=Object(c.a)(e,["indeterminate"]),o=s.a.useRef(),l=t||o;return s.a.useEffect((function(){l.current.indeterminate=n}),[l,n]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",Object(r.a)({type:"checkbox",ref:l},a))})})),S=Object(o.useMemo)((function(){return t}),[t]),N=Object(i.useTable)({columns:n,data:S,defaultColumn:C,filterTypes:x},i.useFilters,i.useGlobalFilter,i.useSortBy,i.useExpanded,i.usePagination,i.useRowSelect,(function(e){m&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(h.jsx)("div",{children:Object(h.jsx)(F,Object(r.a)({},t()))})},Cell:function(e){var t=e.row;return Object(h.jsx)("div",{children:Object(h.jsx)(F,Object(r.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(a.a)(e))}))})),w=N.getTableProps,y=N.getTableBodyProps,T=N.headerGroups,P=N.prepareRow,R=N.page,H=N.rows,k=N.canPreviousPage,_=N.canNextPage,M=N.pageOptions,U=N.pageCount,I=N.gotoPage,A=N.nextPage,E=N.previousPage,L=N.setPageSize,V=N.visibleColumns,D=N.selectedFlatRows,B=(N.state.selectedRowIds,N.state),G=B.pageIndex,z=B.pageSize,q=(B.expanded,N.state),J=N.setGlobalFilter,K=q.globalFilter,W=function(){var e=H;console.log(e);for(var t=[],n=0;n<e.length;n++){var a={};P(e[n]),console.log(e[n].cells);for(var r=0;r<e[n].cells.length;r++)"rowNumber"!==e[n].cells[r].column.id&&"selection"!==e[n].cells[r].column.id&&"buttonStatus"!==e[n].cells[r].column.id&&(a[e[n].cells[r].column.Header]=e[n].cells[r].value);t.push(a)}return t};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"tools",children:[Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(p.c,{})," ",Object(h.jsx)(j.CSVLink,{data:W(),children:"Download as CSV"})]}),Object(h.jsxs)("button",{className:"btn_tools",onClick:function(){var e=W();if(e.length>0){var t=new b.default("landscape","pt","A4");t.setFontSize(15);var n={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(n),t.save("report.pdf")}},children:[Object(h.jsx)(p.b,{})," Download as PDF"]}),D.length>0?Object(h.jsxs)("button",{className:"btn_tools",children:[Object(h.jsx)(p.a,{}),Object(h.jsx)(l.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v),console.log(localStorage.getItem("notifContext"));for(var e="",t=0;t<D.length;t++)e+=D[t].original.emailUser,t<D.length-1&&(e+=", "),console.log(e);localStorage.setItem("emailTo",e),console.log(localStorage.getItem("emailTo"))},children:"Send Notifications"})]}):null]}),Object(h.jsxs)("div",{className:"utils",children:[Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsx)("button",{onClick:function(){return I(0)},disabled:!k,children:"<<"}),Object(h.jsx)("button",{onClick:function(){return E()},disabled:!k,children:"<"}),Object(h.jsx)("button",{onClick:function(){return A()},disabled:!_,children:">"}),Object(h.jsx)("button",{onClick:function(){return I(U-1)},disabled:!_,children:">>"}),Object(h.jsxs)("span",{children:["Page "," ",Object(h.jsxs)("strong",{children:[G+1," of ",M.length]})]}),Object(h.jsxs)("span",{children:["| Go to page:",Object(h.jsx)("input",{type:"number",defaultValue:G+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;I(t)}})]}),Object(h.jsx)("select",{value:z,onChange:function(e){L(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(h.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(h.jsxs)("div",{className:"table_props",children:[Object(h.jsxs)("span",{children:["Total: ",H.length," Data"]}),Object(h.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:K||"",onChange:function(e){J(e.currentTarget.value)}})]})]}),Object(h.jsx)("div",{className:"table_container",children:Object(h.jsxs)("table",Object(r.a)(Object(r.a)({},w()),{},{children:[Object(h.jsx)("thead",{children:T.map((function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(h.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(h.jsx)(u.a,{}):Object(h.jsx)(u.b,{}):""})]}))}))})),Object(h.jsx)("tr",{children:e.headers.map((function(e){return Object(h.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(h.jsx)("tbody",Object(r.a)(Object(r.a)({},y()),{},{children:R.map((function(e,t){return P(e),Object(h.jsxs)(o.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(h.jsx)("tr",{children:e.cells.map((function(e){return Object(h.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+G*z:e.render("Cell")," "]}))}))}),e.isExpanded?Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:V.length,children:f({row:e})})}):null]}))}))}))]}))})]})}},1387:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(2),c=n(130),o=n(119),s=[{Header:"No.",id:"rowNumber",accessor:"emailUser",disableFilters:!0},{Header:"Nama",accessor:"nameUser",disableFilters:!0},{Header:"Jenis User",accessor:"userType",Filter:o.c,filter:"equals"},{Header:"Nama Orangtua",accessor:"parentName",disableFilters:!0},{Header:"Sekolah",accessor:"childInfo.schoolName",Filter:o.c,filter:"equals"},{Header:"Pendidikan",accessor:"childInfo.StudyLevel",Filter:o.c,filter:"equals"},{Header:"Jenis Kelamin",accessor:"gender",Filter:o.c,filter:"equals"},{Header:"Alamat",accessor:"address",disableFilters:!0},{Header:"Mulai Berlanggan",accessor:"startSubscription"},{Header:"Berlanggan Sampai",accessor:"endSubscription"}],l=n(107),i=n(36),u=(n(883),n(118)),d=(n(173),n(0));t.default=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=t[1],j=Object(r.useState)(),b=Object(a.a)(j,2),p=b[0],h=b[1];return Object(r.useEffect)((function(){var e={whereKeyValues:{packageId:"com.byasia.ruangortu"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};console.log(e),Object(u.i)(e).then((function(e){console.log(e.data);for(var t=e.data.users,n=0;n<t.length;n++){var a=t[n];if("child"===a.userType){console.log("Anjay");for(var r=0;r<t.length;r++){var c=t[r];if(a.parentEmail===c.emailUser){a.parentName=c.nameUser;break}}}}h(t),o(!1)})).catch((function(e){console.log(e),o(!1)}))}),[]),n?Object(d.jsx)(i.a,{}):Object(d.jsxs)("div",{className:"Pengguna",children:[Object(d.jsx)(l.a,{headingName:"User Report",routes:[{name:"Report",path:"/report/user"},{name:"User Report"}]}),Object(d.jsx)("div",{className:"Pengguna_table",children:Object(d.jsx)(c.a,{COLUMNS:s,DATA:p,showCheckbox:!0,notifContext:"Status Berlanggan"})})]})}},883:function(e,t,n){}}]);
//# sourceMappingURL=39.e6239931.chunk.js.map