(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[20],{100:function(e,t,n){},101:function(e,t,n){"use strict";n(2);var a=n(35),r=(n(102),n(1));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(r.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(r.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(r.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(r.jsx)(a.a,{}),Object(r.jsx)("p",{children:n})]})}},102:function(e,t,n){},1047:function(e,t,n){},111:function(e,t,n){"use strict";var a=n(5),r=n(2),s=n(143),o=n(144),c=(n(114),n(1));t.a=function(e){var t=e.DATA,n=e.COLUMNS,i=e.renderRowSubComponent,l=Object(r.useMemo)((function(){return t}),[t]),u=Object(s.useTable)({columns:n,data:l},s.useGlobalFilter,s.useSortBy,s.useExpanded,s.usePagination),d=u.getTableProps,b=u.getTableBodyProps,j=u.headerGroups,p=u.prepareRow,h=u.page,m=u.rows,g=u.canPreviousPage,O=u.canNextPage,x=u.pageOptions,f=u.pageCount,v=u.gotoPage,S=u.nextPage,y=u.previousPage,N=u.setPageSize,C=u.visibleColumns,P=u.state,T=P.pageIndex,w=P.pageSize,k=(P.expanded,u.state),F=u.setGlobalFilter,_=k.globalFilter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"utils",children:[Object(c.jsxs)("div",{className:"pagination",children:[Object(c.jsx)("button",{onClick:function(){return v(0)},disabled:!g,children:"<<"}),Object(c.jsx)("button",{onClick:function(){return y()},disabled:!g,children:"<"}),Object(c.jsx)("button",{onClick:function(){return S()},disabled:!O,children:">"}),Object(c.jsx)("button",{onClick:function(){return v(f-1)},disabled:!O,children:">>"}),Object(c.jsxs)("span",{children:["Page "," ",Object(c.jsxs)("strong",{children:[T+1," of ",x.length]})]}),Object(c.jsxs)("span",{children:["| Go to page:",Object(c.jsx)("input",{type:"number",defaultValue:T+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(c.jsx)("select",{value:w,onChange:function(e){N(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(c.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(c.jsxs)("div",{className:"table_props",children:[Object(c.jsxs)("span",{children:["Total: ",m.length," Data"]}),Object(c.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:_||"",onChange:function(e){F(e.currentTarget.value)}})]})]}),Object(c.jsx)("div",{className:"table_container",children:Object(c.jsxs)("table",Object(a.a)(Object(a.a)({},d()),{},{children:[Object(c.jsx)("thead",{children:j.map((function(e){return Object(c.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(c.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(c.jsx)(o.a,{}):Object(c.jsx)(o.b,{}):""})]}))}))}))}))}),Object(c.jsx)("tbody",Object(a.a)(Object(a.a)({},b()),{},{children:h.map((function(e,t){return p(e),Object(c.jsxs)(r.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(c.jsx)("tr",{children:e.cells.map((function(e){return Object(c.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}),e.isExpanded?Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:C.length,children:i({row:e})})}):null]}))}))}))]}))})]})}},114:function(e,t,n){},115:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(18),r=n.n(a),s=n(20),o=function(e){return r()({method:"post",url:s.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return r()({method:"post",url:s.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return r()({method:"post",url:s.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:s.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})}},1152:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(2),s=(n(111),[{name:"No.",options:{filter:!1,customBodyRender:function(e,t){return t.rowIndex+1},setCellProps:function(){return{style:{minWidth:"10px",maxWidth:"10px"}}},setCellHeaderProps:function(){return{style:{minWidth:"10px",maxWidth:"10px"}}}}},{label:"Nama",name:"nameUser",options:{filter:!1,sort:!0}},{label:"Nama Orangtua",name:"parentName",options:{filter:!1,sort:!0}},{label:"Sekolah",name:"childInfo.schoolName",options:{filter:!0,sort:!0}},{label:"Pendidikan",name:"childInfo",options:{filter:!0,sort:!0,customBodyRender:function(e,t,n){return console.log(e),null!=e?e.StudyLevel:" "},setCellProps:function(){return{style:{minWidth:"100px",maxWidth:"100px"}}},setCellHeaderProps:function(){return{style:{minWidth:"100px",maxWidth:"100px"}}}}},{label:"Screen Time Status",name:"screenTimeStatus",options:{filter:!0,sort:!0}},{label:"Status Mode Asuh",name:"modeAsuh",options:{filter:!1,sort:!0}},{label:"Aplikasi yang Diblokir",name:"blockedApps",options:{filter:!1,sort:!0}},{label:"Aplikasi yang Dibatasi",name:"limitedApps",options:{filter:!1,sort:!0}},{label:"Status Jadwal Penggunaan",name:"usageScheduleStatus",options:{filter:!0,sort:!0}}]),o=n(97),c=n(101),i=(n(1047),n(115)),l=n(176),u=n.n(l),d=n(1);t.default=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],l=t[1],b=Object(r.useState)(),j=Object(a.a)(b,2),p=j[0],h=j[1],m=Object(r.useState)(),g=Object(a.a)(m,2);g[0],g[1];return Object(r.useEffect)((function(){var e={whereKeyValues:{packageId:"com.byasia.ruangortu",userType:"child"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};console.log(localStorage.getItem("userFilter")),localStorage.getItem("userFilter")&&(e.whereKeyValues=JSON.parse(localStorage.getItem("userFilter"))),console.log(e),Object(i.d)(e).then((function(e){console.log(e.data),h(e.data.users),l(!1)})).catch((function(e){console.log(e),l(!1)}))}),[]),n?Object(d.jsx)(c.a,{}):Object(d.jsxs)("div",{className:"Controlling",children:[Object(d.jsx)(o.a,{headingName:"Controlling Status",routes:[{name:"Report",path:"/report/controlling-status"},{name:"Controlling Status"}]}),Object(d.jsx)(u.a,{data:p,columns:s,options:{filterType:"dropdown",selectableRows:!1,responsive:"scroll"}})]})}},97:function(e,t,n){"use strict";n(2);var a=n(7),r=(n(100),n(1));t.a=function(e){var t=e.headingName,n=e.routes,s=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}}}]);
//# sourceMappingURL=20.23ef0a36.chunk.js.map