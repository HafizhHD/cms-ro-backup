(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[22],{100:function(e,t,n){},101:function(e,t,n){"use strict";n(2);var a=n(35),r=(n(102),n(1));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(r.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(r.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(r.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(r.jsx)(a.a,{}),Object(r.jsx)("p",{children:n})]})}},102:function(e,t,n){},1043:function(e,t,n){},111:function(e,t,n){"use strict";var a=n(5),r=n(2),c=n(143),s=n(144),o=(n(114),n(1));t.a=function(e){var t=e.DATA,n=e.COLUMNS,i=e.renderRowSubComponent,l=Object(r.useMemo)((function(){return t}),[t]),u=Object(c.useTable)({columns:n,data:l},c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination),d=u.getTableProps,b=u.getTableBodyProps,j=u.headerGroups,p=u.prepareRow,g=u.page,h=u.rows,m=u.canPreviousPage,O=u.canNextPage,x=u.pageOptions,f=u.pageCount,v=u.gotoPage,N=u.nextPage,P=u.previousPage,C=u.setPageSize,S=u.visibleColumns,y=u.state,T=y.pageIndex,w=y.pageSize,_=(y.expanded,u.state),F=u.setGlobalFilter,R=_.globalFilter;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"utils",children:[Object(o.jsxs)("div",{className:"pagination",children:[Object(o.jsx)("button",{onClick:function(){return v(0)},disabled:!m,children:"<<"}),Object(o.jsx)("button",{onClick:function(){return P()},disabled:!m,children:"<"}),Object(o.jsx)("button",{onClick:function(){return N()},disabled:!O,children:">"}),Object(o.jsx)("button",{onClick:function(){return v(f-1)},disabled:!O,children:">>"}),Object(o.jsxs)("span",{children:["Page "," ",Object(o.jsxs)("strong",{children:[T+1," of ",x.length]})]}),Object(o.jsxs)("span",{children:["| Go to page:",Object(o.jsx)("input",{type:"number",defaultValue:T+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(o.jsx)("select",{value:w,onChange:function(e){C(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(o.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(o.jsxs)("div",{className:"table_props",children:[Object(o.jsxs)("span",{children:["Total: ",h.length," Data"]}),Object(o.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:R||"",onChange:function(e){F(e.currentTarget.value)}})]})]}),Object(o.jsx)("div",{className:"table_container",children:Object(o.jsxs)("table",Object(a.a)(Object(a.a)({},d()),{},{children:[Object(o.jsx)("thead",{children:j.map((function(e){return Object(o.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(o.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(o.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(o.jsx)(s.a,{}):Object(o.jsx)(s.b,{}):""})]}))}))}))}))}),Object(o.jsx)("tbody",Object(a.a)(Object(a.a)({},b()),{},{children:g.map((function(e,t){return p(e),Object(o.jsxs)(r.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(o.jsx)("tr",{children:e.cells.map((function(e){return Object(o.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}),e.isExpanded?Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:S.length,children:i({row:e})})}):null]}))}))}))]}))})]})}},114:function(e,t,n){},1148:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(2),c=(n(111),[{name:"No.",options:{filter:!1,customBodyRender:function(e,t){return t.rowIndex+1}}},{label:"Nama Program",name:"programName",options:{filter:!1,sort:!0}},{label:"Kategori Program",name:"programCategory",options:{filter:!0,sort:!0}},{label:"Target Pembaca",name:"programTarget",options:{filter:!0,sort:!0}},{label:"Status",name:"status",options:{filter:!0,sort:!0}}]),s=n(97),o=n(101),i=(n(1043),n(115)),l=n(176),u=n.n(l),d=n(1);t.default=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],l=t[1],b=Object(r.useState)(),j=Object(a.a)(b,2),p=j[0],g=j[1],h=JSON.parse(localStorage.getItem("userData"));return Object(r.useEffect)((function(){var e={whereKeyValues:{cobrandEmail:h.email},orderKeyValues:{programName:1},limit:Number.MAX_SAFE_INTEGER};console.log(e),Object(i.b)(e).then((function(e){console.log(e.data),g(e.data.programs),l(!1)})).catch((function(e){console.log(e),l(!1)}))}),[]),n?Object(d.jsx)(o.a,{}):Object(d.jsxs)("div",{className:"Program",children:[Object(d.jsx)(s.a,{headingName:"Program Report",routes:[{name:"Report",path:"/report/program"},{name:"Program Report"}]}),Object(d.jsx)(u.a,{data:p,columns:c,options:{filterType:"dropdown",selectableRows:!1,responsive:"scroll"}})]})}},115:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(18),r=n.n(a),c=n(20),s=function(e){return r()({method:"post",url:c.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return r()({method:"post",url:c.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return r()({method:"post",url:c.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:c.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})}},97:function(e,t,n){"use strict";n(2);var a=n(7),r=(n(100),n(1));t.a=function(e){var t=e.headingName,n=e.routes,c=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:c.length>0&&c.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}}}]);
//# sourceMappingURL=22.261c95f4.chunk.js.map