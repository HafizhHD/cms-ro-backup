(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[26],{108:function(e,t,n){"use strict";var a=n(5),r=n(2),c=n(134),s=n(135),o=(n(109),n(1));t.a=function(e){var t=e.DATA,n=e.COLUMNS,i=e.renderRowSubComponent,l=Object(r.useMemo)((function(){return t}),[t]),d=Object(c.useTable)({columns:n,data:l},c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination),u=d.getTableProps,j=d.getTableBodyProps,b=d.headerGroups,p=d.prepareRow,h=d.page,O=d.rows,g=d.canPreviousPage,x=d.canNextPage,m=d.pageOptions,f=d.pageCount,v=d.gotoPage,N=d.nextPage,C=d.previousPage,P=d.setPageSize,T=d.visibleColumns,H=d.state,S=H.pageIndex,w=H.pageSize,y=(H.expanded,d.state),_=d.setGlobalFilter,k=y.globalFilter;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"utils",children:[Object(o.jsxs)("div",{className:"pagination",children:[Object(o.jsx)("button",{onClick:function(){return v(0)},disabled:!g,children:"<<"}),Object(o.jsx)("button",{onClick:function(){return C()},disabled:!g,children:"<"}),Object(o.jsx)("button",{onClick:function(){return N()},disabled:!x,children:">"}),Object(o.jsx)("button",{onClick:function(){return v(f-1)},disabled:!x,children:">>"}),Object(o.jsxs)("span",{children:["Page "," ",Object(o.jsxs)("strong",{children:[S+1," of ",m.length]})]}),Object(o.jsxs)("span",{children:["| Go to page:",Object(o.jsx)("input",{type:"number",defaultValue:S+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(o.jsx)("select",{value:w,onChange:function(e){P(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(o.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(o.jsxs)("div",{className:"table_props",children:[Object(o.jsxs)("span",{children:["Total: ",O.length," Data"]}),Object(o.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:k||"",onChange:function(e){_(e.currentTarget.value)}})]})]}),Object(o.jsx)("div",{className:"table_container",children:Object(o.jsxs)("table",Object(a.a)(Object(a.a)({},u()),{},{children:[Object(o.jsx)("thead",{children:b.map((function(e){return Object(o.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(o.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(o.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(o.jsx)(s.a,{}):Object(o.jsx)(s.b,{}):""})]}))}))}))}))}),Object(o.jsx)("tbody",Object(a.a)(Object(a.a)({},j()),{},{children:h.map((function(e,t){return p(e),Object(o.jsxs)(r.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(o.jsx)("tr",{children:e.cells.map((function(e){return Object(o.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}),e.isExpanded?Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:T.length,children:i({row:e})})}):null]}))}))}))]}))})]})}},109:function(e,t,n){},110:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(18),r=n.n(a),c=n(20),s=function(e){return r()({method:"post",url:c.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return r()({method:"post",url:c.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return r()({method:"post",url:c.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:c.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})}},1124:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(2),c=n(108),s=n(5),o=n(1),i=[{Header:"Email",accessor:"emailUser"},{Header:"Nama",accessor:"nameUser"},{Header:"No Telepon",accessor:"phoneNumber"},{Header:"Tgl. Registrasi",accessor:"dateCreated",Cell:function(e){var t=e.value;return Object(o.jsx)("p",{children:t.split("T")[0]})}},{Header:"Tipe User",accessor:"userType"},{Header:"User status",accessor:"status",Cell:function(e){var t=e.value,n={color:"green"};return"active"!==t&&(n={color:"red"}),Object(o.jsx)("p",{style:n,children:t})}},{Header:"User Details",id:"expander",Cell:function(e){var t=e.row;return Object(o.jsx)("span",Object(s.a)(Object(s.a)({},t.getToggleRowExpandedProps()),{},{children:t.isExpanded?"- Hide":"+ Show"}))}}],l=n(96),d=n(26),u=(n(760),n(110));t.default=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],s=t[1],j=Object(r.useState)(),b=Object(a.a)(j,2),p=b[0],h=b[1];return Object(r.useEffect)((function(){var e={whereKeyValues:{},packageId:"com.byasia.ruangortu",limit:Number.MAX_SAFE_INTEGER};console.log(e),Object(u.d)(e).then((function(e){console.log(e.data),h(e.data.users),s(!1)})).catch((function(e){console.log(e),s(!1)}))}),[]),n?Object(o.jsx)(d.a,{}):Object(o.jsxs)("div",{className:"Pengguna",children:[Object(o.jsx)(l.a,{headingName:"Helpdesk",routes:[{name:"Helpdesk",path:"/helpdesk"},{name:"Pengguna"}]}),Object(o.jsx)("div",{className:"Pengguna_table",children:Object(o.jsx)(c.a,{COLUMNS:i,DATA:p})})]})}},760:function(e,t,n){},96:function(e,t,n){"use strict";n(2);var a=n(7),r=(n(97),n(1));t.a=function(e){var t=e.headingName,n=e.routes,c=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:c.length>0&&c.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},97:function(e,t,n){}}]);
//# sourceMappingURL=26.850fead9.chunk.js.map