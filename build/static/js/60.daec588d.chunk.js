(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[60],{107:function(e,t,n){"use strict";n.d(t,"l",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"n",(function(){return s})),n.d(t,"m",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"i",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"f",(function(){return O})),n.d(t,"k",(function(){return f}));var a=n(18),r=n.n(a),c=n(20),o=function(e){return r()({method:"post",url:c.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return r()({method:"post",url:c.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return r()({method:"post",url:c.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:c.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:c.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:c.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:c.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:c.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:c.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:c.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:c.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:c.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return r()({method:"post",url:c.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return r()({method:"post",url:c.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})}},118:function(e,t,n){},1417:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(2),c=(n(647),n(143)),o=n(3),i=n(7),s=n(0),l=function(e){return[{Header:"ID",accessor:"_id"},{Header:"Nama Program",accessor:"programName",disableFilters:!0},{Header:"Kategori Program",accessor:"category",Cell:function(e){var t=e.value,n=e.row;return void 0!==t?t:n.index%3===1?Object(s.jsx)("p",{children:"Pendidikan Agama"}):Object(s.jsx)("p",{children:"Pengetahuan Siswa Umum"})}},{Header:"Target Pembaca",accessor:"targetAudiance",Cell:function(e){var t=e.value;e.row;return void 0!==t?t.join(", "):Object(s.jsx)("p",{children:"Semua"})}},{Header:"Status",accessor:"status"},{Header:"Action",disableSortBy:!0,disableGlobalFilter:!0,Cell:function(t){var n=t.cell;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.b,{to:"/cms/program/view",className:"nav_btn",title:"View Detail",onClick:function(){localStorage.setItem("programSelected",n.row.values._id)},children:Object(s.jsx)("button",{className:"btn_action",children:Object(s.jsx)("div",{children:Object(s.jsx)(o.j,{className:"btn_action-icon"})})})}),Object(s.jsx)(i.b,{to:"/cms/program/edit",className:"nav_btn",title:"Edit Program",onClick:function(){localStorage.setItem("programSelected",n.row.values._id)},children:Object(s.jsx)("button",{className:"btn_action",children:Object(s.jsx)("div",{children:Object(s.jsx)(o.i,{className:"btn_action-icon"})})})}),Object(s.jsx)(i.b,{to:"/cms/program",className:"nav_btn",title:"Delete Program",onClick:function(){e([n.row.values._id,n.row.values.programName])},replace:!0,children:Object(s.jsx)("button",{className:"btn_action",children:Object(s.jsx)("div",{children:Object(s.jsx)(o.z,{className:"btn_action-icon"})})})})]})}}]},u=(n(650),n(132)),d=(n(18),n(36)),j=n(17),b=n(107);t.default=Object(j.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeleteProgram:function(t,n,a){return e(Object(u.k)(t,n,a))}}}))((function(e){var t=e.isCurrentlyLoading,n=e.onDeleteProgram,u=Object(r.useState)(!1),j=Object(a.a)(u,2),p=(j[0],j[1],Object(r.useState)(!0)),m=Object(a.a)(p,2),h=m[0],g=m[1],O=Object(r.useState)(),f=Object(a.a)(O,2),x=f[0],v=f[1],C=Object(r.useState)(null),S=Object(a.a)(C,2),N=S[0],P=S[1],y=JSON.parse(localStorage.getItem("userData")),T={whereKeyValues:{cobrandEmail:y.email},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER};function F(){Object(b.l)(T).then((function(e){v(e.data),console.log(e.data),g(!1)})).catch((function(e){console.log(e),g(!1)}))}return Object(r.useEffect)((function(){g(!0),localStorage.getItem("programDeleting")&&(P(JSON.parse(localStorage.getItem("programDeleting"))),localStorage.removeItem("programDeleting")),F()}),[]),Object(r.useEffect)((function(){N&&(g(!0),n(y.email,N,F))}),[N]),h||t?Object(s.jsx)(d.a,{}):Object(s.jsxs)("div",{className:"Program",children:[Object(s.jsx)("h1",{children:"PROGRAM"}),Object(s.jsxs)(i.b,{to:"/cms/program/add",id:"add_program",children:[Object(s.jsx)(o.v,{className:"IconAdd"}),Object(s.jsx)("span",{children:"Buat Program Baru"})]}),Object(s.jsx)("div",{className:"Program__table",children:Object(s.jsx)(c.a,{COLUMNS:l(P),DATA:x.programs})})]})}))},143:function(e,t,n){"use strict";var a=n(5),r=n(2),c=n(124),o=n(135),i=(n(118),n(0));t.a=function(e){var t=e.DATA,n=e.COLUMNS,s=e.renderRowSubComponent,l=Object(r.useMemo)((function(){return t}),[t]),u=Object(c.useTable)({columns:n,data:l,initialState:{hiddenColumns:["_id"]}},c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination),d=u.getTableProps,j=u.getTableBodyProps,b=u.headerGroups,p=u.prepareRow,m=u.page,h=u.rows,g=u.canPreviousPage,O=u.canNextPage,f=u.pageOptions,x=u.pageCount,v=u.gotoPage,C=u.nextPage,S=u.previousPage,N=u.setPageSize,P=u.visibleColumns,y=u.state,T=y.pageIndex,F=y.pageSize,_=(y.expanded,u.state),w=u.setGlobalFilter,D=_.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"utils",children:[Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{onClick:function(){return v(0)},disabled:!g,children:"<<"}),Object(i.jsx)("button",{onClick:function(){return S()},disabled:!g,children:"<"}),Object(i.jsx)("button",{onClick:function(){return C()},disabled:!O,children:">"}),Object(i.jsx)("button",{onClick:function(){return v(x-1)},disabled:!O,children:">>"}),Object(i.jsxs)("span",{children:["Page "," ",Object(i.jsxs)("strong",{children:[T+1," of ",f.length]})]}),Object(i.jsxs)("span",{children:["| Go to page:",Object(i.jsx)("input",{type:"number",defaultValue:T+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(i.jsx)("select",{value:F,onChange:function(e){N(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(i.jsxs)("div",{className:"table_props",children:[Object(i.jsxs)("span",{children:["Total: ",h.length," Data"]}),Object(i.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:D||"",onChange:function(e){w(e.currentTarget.value)}})]})]}),Object(i.jsx)("div",{className:"table_container",children:Object(i.jsxs)("table",Object(a.a)(Object(a.a)({},d()),{},{children:[Object(i.jsx)("thead",{children:b.map((function(e){return Object(i.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(o.a,{}):Object(i.jsx)(o.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(a.a)(Object(a.a)({},j()),{},{children:m.map((function(e,t){return p(e),Object(i.jsxs)(r.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(i.jsx)("tr",{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+T*F:e.render("Cell")," "]}))}))}),e.isExpanded?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:P.length,children:s({row:e})})}):null]}))}))}))]}))})]})}},647:function(e,t,n){},650:function(e){e.exports=JSON.parse("{}")}}]);
//# sourceMappingURL=60.daec588d.chunk.js.map