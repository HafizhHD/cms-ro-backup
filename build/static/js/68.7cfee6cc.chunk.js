(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[68],{107:function(e,t,n){},1264:function(e,t,n){},127:function(e,t,n){"use strict";function a(e,t,n,a,c,s,r){try{var i=e[s](r),o=i.value}catch(l){return void n(l)}i.done?t(o):Promise.resolve(o).then(a,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,s){var r=e.apply(t,n);function i(e){a(r,c,s,i,o,"next",e)}function o(e){a(r,c,s,i,o,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return c}))},136:function(e,t,n){"use strict";var a=n(5),c=n(2),s=n(116),r=n(133),i=(n(107),n(0));t.a=function(e){var t=e.DATA,n=e.COLUMNS,o=e.renderRowSubComponent,l=Object(c.useMemo)((function(){return t}),[t]),d=Object(s.useTable)({columns:n,data:l,initialState:{hiddenColumns:["_id"],pageSize:20}},s.useGlobalFilter,s.useSortBy,s.useExpanded,s.usePagination),b=d.getTableProps,u=d.getTableBodyProps,j=d.headerGroups,O=d.prepareRow,f=d.page,g=d.rows,h=d.canPreviousPage,m=d.canNextPage,p=d.pageOptions,x=d.pageCount,v=d.gotoPage,S=d.nextPage,N=d.previousPage,w=d.setPageSize,y=d.visibleColumns,C=d.state,P=C.pageIndex,_=C.pageSize,D=(C.expanded,d.state),A=d.setGlobalFilter,T=D.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"utils",children:[Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{onClick:function(){return v(0)},disabled:!h,children:"<<"}),Object(i.jsx)("button",{onClick:function(){return N()},disabled:!h,children:"<"}),Object(i.jsx)("button",{onClick:function(){return S()},disabled:!m,children:">"}),Object(i.jsx)("button",{onClick:function(){return v(x-1)},disabled:!m,children:">>"}),Object(i.jsxs)("span",{children:["Page "," ",Object(i.jsxs)("strong",{children:[P+1," of ",p.length]})]}),Object(i.jsxs)("span",{children:["| Go to page:",Object(i.jsx)("input",{type:"number",defaultValue:P+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(i.jsx)("select",{value:_,onChange:function(e){w(Number(e.target.value))},children:[20,50,100].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(i.jsxs)("div",{className:"table_props",children:[Object(i.jsxs)("span",{children:["Total: ",g.length," Data"]}),Object(i.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:T||"",onChange:function(e){A(e.currentTarget.value)}})]})]}),Object(i.jsx)("div",{className:"table_container",children:Object(i.jsxs)("table",Object(a.a)(Object(a.a)({},b()),{},{children:[Object(i.jsx)("thead",{children:j.map((function(e){return Object(i.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(r.a,{}):Object(i.jsx)(r.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(a.a)(Object(a.a)({},u()),{},{children:f.map((function(e,t){return O(e),Object(i.jsxs)(c.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(i.jsx)("tr",{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+P*_:e.render("Cell")," "]}))}))}),e.isExpanded?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:y.length,children:o({row:e})})}):null]}))}))}))]}))})]})}},142:function(e,t,n){"use strict";n(2),n(143);var a=n(3),c=n(0);t.a=function(e){var t=e.setDeleting,n=void 0===t?null:t,s=e.setConfirmDeleting,r=e.setWarning,i=e.message;return Object(c.jsx)("div",{className:"warning",children:Object(c.jsxs)("div",{className:"warning-content",children:[Object(c.jsx)("div",{className:"warning-content-header",children:Object(c.jsx)("h2",{children:"Konfirmasi Penghapusan"})}),Object(c.jsxs)("div",{className:"warning-content-body",children:[Object(c.jsx)(a.b,{className:"warning-content-body-icon"}),Object(c.jsxs)("div",{className:"warning-content-body-message",children:[Object(c.jsxs)("p",{children:["Apakah Anda yakin ingin menghapus ",i," ini?"]}),Object(c.jsxs)("div",{className:"warning-content-body-message-button",children:[Object(c.jsx)("div",{className:"warning-content-body-message-button-delete",children:Object(c.jsx)("button",{onClick:function(){s(!0),r(!1),document.body.style.overflow="unset"},children:"Hapus"})}),Object(c.jsx)("div",{className:"warning-content-body-message-button-cancel",children:Object(c.jsx)("button",{onClick:function(){n&&n(null),r(!1),document.body.style.overflow="unset"},children:"Jangan Hapus"})})]})]})]})]})},i)}},143:function(e,t,n){},1490:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(2),s=(n(1264),n(136)),r=n(3),i=n(9),o=n(0),l=function(e,t){return[{Header:"ID",accessor:"_id"},{Header:"User Name",accessor:"userName",disableFilters:!0},{Header:"Email User",accessor:"emailUser",disableFilters:!0},{Header:"Tipe User",accessor:"userType"},{Header:"Level User",accessor:"userLevel"},{Header:"Komunitas",accessor:"cobrandComunityId"},{Header:"No. Telepon",accessor:"phone"},{Header:"Action",disableSortBy:!0,disableGlobalFilter:!0,Cell:function(n){var a=n.cell;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.b,{to:"/tools/admin-staff/edit",className:"nav_btn",title:"Edit Staff",onClick:function(){localStorage.setItem("staffSelected",a.row.values._id)},children:Object(o.jsx)("button",{className:"btn_action",children:Object(o.jsx)("div",{children:Object(o.jsx)(r.j,{className:"btn_action-icon"})})})}),"admin@asia.ruangortu.id"!==a.row.values.emailUser?Object(o.jsx)(i.b,{to:"/tools/admin-staff",className:"nav_btn",title:"Delete Staff",onClick:function(){e([a.row.values._id,a.row.values.userName]),t(!0),document.body.style.overflow="hidden"},replace:!0,children:Object(o.jsx)("button",{className:"btn_action",children:Object(o.jsx)("div",{children:Object(o.jsx)(r.A,{className:"btn_action-icon"})})})}):null]})}}]},d=n(124),b=(n(18),n(35)),u=n(17),j=n(96),O=n(142);t.default=Object(u.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeleteStaff:function(t,n,a){return e(Object(d.t)(t,n,a))}}}))((function(e){var t=e.isCurrentlyLoading,n=e.onDeleteStaff,d=Object(c.useState)(!1),u=Object(a.a)(d,2),f=(u[0],u[1],Object(c.useState)(!0)),g=Object(a.a)(f,2),h=g[0],m=g[1],p=Object(c.useState)([]),x=Object(a.a)(p,2),v=x[0],S=x[1],N=Object(c.useState)(null),w=Object(a.a)(N,2),y=w[0],C=w[1],P=Object(c.useState)(!1),_=Object(a.a)(P,2),D=_[0],A=_[1],T=Object(c.useState)(!1),H=Object(a.a)(T,2),k=H[0],E=H[1],F=JSON.parse(localStorage.getItem("userData")),I={whereKeyValues:{cobrandEmail:F.cobrandEmail},orderKeyValues:{dateCreated:-1},limit:Number.MAX_SAFE_INTEGER};function U(){Object(j.a)(I).then((function(e){S(e.data.Data),console.log(e.data),m(!1)})).catch((function(e){m(!1)}))}return Object(c.useEffect)((function(){m(!0),localStorage.getItem("staffDeleting")&&(C(JSON.parse(localStorage.getItem("staffDeleting"))),E(!0),localStorage.removeItem("staffDeleting")),U()}),[]),Object(c.useEffect)((function(){y&&k&&(m(!0),n(F.cobrandEmail,y,U),E(!1),C(null))}),[y,k]),h||t?Object(o.jsx)(b.a,{}):Object(o.jsxs)("div",{className:"Staff",children:[D?Object(o.jsx)(O.a,{setDeleting:C,setConfirmDeleting:E,setWarning:A,message:"Admin/Staff"}):null,Object(o.jsx)("h1",{children:"ADMIN & STAFF"}),Object(o.jsxs)(i.b,{to:"/tools/admin-staff/add",id:"add_staff",children:[Object(o.jsx)(r.w,{className:"IconAdd"}),Object(o.jsx)("span",{children:"Tambah Admin/Staff Baru"})]}),Object(o.jsx)("div",{className:"Staff__table",children:Object(o.jsx)(s.a,{COLUMNS:l(C,A),DATA:v})})]})}))}}]);
//# sourceMappingURL=68.7cfee6cc.chunk.js.map