(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[65],{111:function(e,t,n){},1278:function(e,t,n){},131:function(e,t,n){"use strict";function a(e,t,n,a,c,s,i){try{var r=e[s](i),o=r.value}catch(l){return void n(l)}r.done?t(o):Promise.resolve(o).then(a,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,s){var i=e.apply(t,n);function r(e){a(i,c,s,r,o,"next",e)}function o(e){a(i,c,s,r,o,"throw",e)}r(void 0)}))}}n.d(t,"a",(function(){return c}))},142:function(e,t,n){"use strict";var a=n(5),c=n(2),s=n(122),i=n(134),r=(n(111),n(0));t.a=function(e){var t=e.DATA,n=e.COLUMNS,o=e.renderRowSubComponent,l=Object(c.useMemo)((function(){return t}),[t]),u=Object(s.useTable)({columns:n,data:l,initialState:{hiddenColumns:["_id"],pageSize:20}},s.useGlobalFilter,s.useSortBy,s.useExpanded,s.usePagination),b=u.getTableProps,d=u.getTableBodyProps,j=u.headerGroups,m=u.prepareRow,O=u.page,g=u.rows,h=u.canPreviousPage,p=u.canNextPage,x=u.pageOptions,f=u.pageCount,v=u.gotoPage,y=u.nextPage,N=u.previousPage,C=u.setPageSize,S=u.visibleColumns,w=u.state,P=w.pageIndex,D=w.pageSize,k=(w.expanded,u.state),_=u.setGlobalFilter,A=k.globalFilter;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"utils",children:[Object(r.jsxs)("div",{className:"pagination",children:[Object(r.jsx)("button",{onClick:function(){return v(0)},disabled:!h,children:"<<"}),Object(r.jsx)("button",{onClick:function(){return N()},disabled:!h,children:"<"}),Object(r.jsx)("button",{onClick:function(){return y()},disabled:!p,children:">"}),Object(r.jsx)("button",{onClick:function(){return v(f-1)},disabled:!p,children:">>"}),Object(r.jsxs)("span",{children:["Page "," ",Object(r.jsxs)("strong",{children:[P+1," of ",x.length]})]}),Object(r.jsxs)("span",{children:["| Go to page:",Object(r.jsx)("input",{type:"number",defaultValue:P+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(r.jsx)("select",{value:D,onChange:function(e){C(Number(e.target.value))},children:[20,50,100].map((function(e){return Object(r.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(r.jsxs)("div",{className:"table_props",children:[Object(r.jsxs)("span",{children:["Total: ",g.length," Data"]}),Object(r.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:A||"",onChange:function(e){_(e.currentTarget.value)}})]})]}),Object(r.jsx)("div",{className:"table_container",children:Object(r.jsxs)("table",Object(a.a)(Object(a.a)({},b()),{},{children:[Object(r.jsx)("thead",{children:j.map((function(e){return Object(r.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(r.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(r.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(r.jsx)(i.a,{}):Object(r.jsx)(i.b,{}):""})]}))}))}))}))}),Object(r.jsx)("tbody",Object(a.a)(Object(a.a)({},d()),{},{children:O.map((function(e,t){return m(e),Object(r.jsxs)(c.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(r.jsx)("tr",{children:e.cells.map((function(e){return Object(r.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+P*D:e.render("Cell")," "]}))}))}),e.isExpanded?Object(r.jsx)("tr",{children:Object(r.jsx)("td",{colSpan:S.length,children:o({row:e})})}):null]}))}))}))]}))})]})}},1481:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(2),s=(n(1278),n(142)),i=n(3),r=n(9),o=n(0),l=function(e,t){return[{Header:"ID Komunitas",accessor:"cobrandComunityId"},{Header:"Nama Komunitas",accessor:"cobrandComunityName",disableFilters:!0},{Header:"Sub-Komunitas dari",accessor:"partComunityId",disableFilters:!0},{Header:"Action",disableSortBy:!0,disableGlobalFilter:!0,Cell:function(n){var a=n.cell;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(r.b,{to:"/tools/setting/komunitas",className:"nav_btn",title:"Delete Komunitas",onClick:function(){e([a.row.values.cobrandComunityId,a.row.values.cobrandComunityName]),t(!0),document.body.style.overflow="hidden"},replace:!0,children:Object(o.jsx)("button",{className:"btn_action",children:Object(o.jsx)("div",{children:Object(o.jsx)(i.z,{className:"btn_action-icon"})})})})})}}]},u=n(126),b=(n(18),n(36)),d=n(17),j=n(99),m=n(153);t.default=Object(d.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeleteCommunity:function(t,n,a){return e(Object(u.l)(t,n,a))}}}))((function(e){var t=e.isCurrentlyLoading,n=e.onDeleteCommunity,u=Object(c.useState)(!1),d=Object(a.a)(u,2),O=(d[0],d[1],Object(c.useState)(!0)),g=Object(a.a)(O,2),h=g[0],p=g[1],x=Object(c.useState)(),f=Object(a.a)(x,2),v=f[0],y=f[1],N=Object(c.useState)(null),C=Object(a.a)(N,2),S=C[0],w=C[1],P=Object(c.useState)(!1),D=Object(a.a)(P,2),k=D[0],_=D[1],A=Object(c.useState)(!1),I=Object(a.a)(A,2),E=I[0],T=I[1],F=JSON.parse(localStorage.getItem("userData")),K={whereKeyValues:{cobrandEmail:F.cobrandEmail},orderKeyValues:{dateCreated:-1},limit:Number.MAX_SAFE_INTEGER};function G(){Object(j.f)(K).then((function(e){y(e.data.Data),p(!1)})).catch((function(e){p(!1)}))}return Object(c.useEffect)((function(){p(!0),localStorage.getItem("communityDeleting")&&(w(JSON.parse(localStorage.getItem("communityDeleting"))),T(!0),localStorage.removeItem("communityDeleting")),G()}),[]),Object(c.useEffect)((function(){S&&E&&(p(!0),n(F.cobrandEmail,S,G),T(!1),w(null))}),[S,E]),h||t?Object(o.jsx)(b.a,{}):Object(o.jsxs)("div",{className:"Community",children:[k?Object(o.jsx)(m.a,{setDeleting:w,setConfirmDeleting:T,setWarning:_,message:"Komunitas"}):null,Object(o.jsx)("h1",{children:"KOMUNITAS PENGGUNA"}),Object(o.jsxs)(r.b,{to:"/tools/setting/komunitas/add",id:"add_community",children:[Object(o.jsx)(i.w,{className:"IconAdd"}),Object(o.jsx)("span",{children:"Tambah Komunitas Baru"})]}),Object(o.jsx)("div",{className:"Community__table",children:Object(o.jsx)(s.a,{COLUMNS:l(w,_),DATA:v})})]})}))},153:function(e,t,n){"use strict";n(2),n(154);var a=n(3),c=n(0);t.a=function(e){var t=e.setDeleting,n=void 0===t?null:t,s=e.setConfirmDeleting,i=e.setWarning,r=e.message;return Object(c.jsx)("div",{className:"warning",children:Object(c.jsxs)("div",{className:"warning-content",children:[Object(c.jsx)("div",{className:"warning-content-header",children:Object(c.jsx)("h2",{children:"Konfirmasi Penghapusan"})}),Object(c.jsxs)("div",{className:"warning-content-body",children:[Object(c.jsx)(a.b,{className:"warning-content-body-icon"}),Object(c.jsxs)("div",{className:"warning-content-body-message",children:[Object(c.jsxs)("p",{children:["Apakah Anda yakin ingin menghapus ",r," ini?"]}),Object(c.jsxs)("div",{className:"warning-content-body-message-button",children:[Object(c.jsx)("div",{className:"warning-content-body-message-button-delete",children:Object(c.jsx)("button",{onClick:function(){s(!0),i(!1),document.body.style.overflow="unset"},children:"Hapus"})}),Object(c.jsx)("div",{className:"warning-content-body-message-button-cancel",children:Object(c.jsx)("button",{onClick:function(){n&&n(null),i(!1),document.body.style.overflow="unset"},children:"Jangan Hapus"})})]})]})]})]})},r)}},154:function(e,t,n){}}]);
//# sourceMappingURL=65.7c800f9e.chunk.js.map