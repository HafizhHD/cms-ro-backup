(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[69],{107:function(e,t,n){},127:function(e,t,n){"use strict";function a(e,t,n,a,s,c,r){try{var i=e[c](r),l=i.value}catch(o){return void n(o)}i.done?t(l):Promise.resolve(l).then(a,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,c){var r=e.apply(t,n);function i(e){a(r,s,c,i,l,"next",e)}function l(e){a(r,s,c,i,l,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return s}))},1282:function(e,t,n){},136:function(e,t,n){"use strict";var a=n(5),s=n(2),c=n(116),r=n(133),i=(n(107),n(0));t.a=function(e){var t=e.DATA,n=e.COLUMNS,l=e.renderRowSubComponent,o=Object(s.useMemo)((function(){return t}),[t]),d=Object(c.useTable)({columns:n,data:o,initialState:{hiddenColumns:["_id"],pageSize:20}},c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination),b=d.getTableProps,u=d.getTableBodyProps,j=d.headerGroups,g=d.prepareRow,O=d.page,h=d.rows,m=d.canPreviousPage,p=d.canNextPage,x=d.pageOptions,f=d.pageCount,v=d.gotoPage,y=d.nextPage,N=d.previousPage,S=d.setPageSize,w=d.visibleColumns,P=d.state,C=P.pageIndex,D=P.pageSize,H=(P.expanded,d.state),A=d.setGlobalFilter,_=H.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"utils",children:[Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{onClick:function(){return v(0)},disabled:!m,children:"<<"}),Object(i.jsx)("button",{onClick:function(){return N()},disabled:!m,children:"<"}),Object(i.jsx)("button",{onClick:function(){return y()},disabled:!p,children:">"}),Object(i.jsx)("button",{onClick:function(){return v(f-1)},disabled:!p,children:">>"}),Object(i.jsxs)("span",{children:["Page "," ",Object(i.jsxs)("strong",{children:[C+1," of ",x.length]})]}),Object(i.jsxs)("span",{children:["| Go to page:",Object(i.jsx)("input",{type:"number",defaultValue:C+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(i.jsx)("select",{value:D,onChange:function(e){S(Number(e.target.value))},children:[20,50,100].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(i.jsxs)("div",{className:"table_props",children:[Object(i.jsxs)("span",{children:["Total: ",h.length," Data"]}),Object(i.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:_||"",onChange:function(e){A(e.currentTarget.value)}})]})]}),Object(i.jsx)("div",{className:"table_container",children:Object(i.jsxs)("table",Object(a.a)(Object(a.a)({},b()),{},{children:[Object(i.jsx)("thead",{children:j.map((function(e){return Object(i.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(r.a,{}):Object(i.jsx)(r.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(a.a)(Object(a.a)({},u()),{},{children:O.map((function(e,t){return g(e),Object(i.jsxs)(s.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(i.jsx)("tr",{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+C*D:e.render("Cell")," "]}))}))}),e.isExpanded?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:w.length,children:l({row:e})})}):null]}))}))}))]}))})]})}},142:function(e,t,n){"use strict";n(2),n(143);var a=n(3),s=n(0);t.a=function(e){var t=e.setDeleting,n=void 0===t?null:t,c=e.setConfirmDeleting,r=e.setWarning,i=e.message;return Object(s.jsx)("div",{className:"warning",children:Object(s.jsxs)("div",{className:"warning-content",children:[Object(s.jsx)("div",{className:"warning-content-header",children:Object(s.jsx)("h2",{children:"Konfirmasi Penghapusan"})}),Object(s.jsxs)("div",{className:"warning-content-body",children:[Object(s.jsx)(a.b,{className:"warning-content-body-icon"}),Object(s.jsxs)("div",{className:"warning-content-body-message",children:[Object(s.jsxs)("p",{children:["Apakah Anda yakin ingin menghapus ",i," ini?"]}),Object(s.jsxs)("div",{className:"warning-content-body-message-button",children:[Object(s.jsx)("div",{className:"warning-content-body-message-button-delete",children:Object(s.jsx)("button",{onClick:function(){c(!0),r(!1),document.body.style.overflow="unset"},children:"Hapus"})}),Object(s.jsx)("div",{className:"warning-content-body-message-button-cancel",children:Object(s.jsx)("button",{onClick:function(){n&&n(null),r(!1),document.body.style.overflow="unset"},children:"Jangan Hapus"})})]})]})]})]})},i)}},143:function(e,t,n){},1491:function(e,t,n){"use strict";n.r(t);var a=n(7),s=n(2),c=(n(1282),n(136)),r=n(3),i=n(9),l=n(0),o={year:"numeric",month:"long",day:"numeric"},d=function(e,t){return[{Header:"ID",accessor:"_id"},{Header:"Tanggal",accessor:"prayDate",Cell:function(e){var t=e.value;return Object(l.jsx)(l.Fragment,{children:void 0!==t?new Date(t).toLocaleDateString("id-ID",o):""})}},{Header:"Shubuh",accessor:"shubuh",disableFilters:!0},{Header:"Dzuhur",accessor:"dzuhur",disableFilters:!0},{Header:"Ashr",accessor:"ashr",disableFilters:!0},{Header:"Maghrib",accessor:"maghrib",disableFilters:!0},{Header:"Isya",accessor:"isya",disableFilters:!0},{Header:"Action",disableSortBy:!0,disableGlobalFilter:!0,Cell:function(n){var a=n.cell;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.b,{to:"/cms/praytime-message/edit",className:"nav_btn",title:"Edit Hadits/Pesan",onClick:function(){localStorage.setItem("praytimeSelected",a.row.values._id)},children:Object(l.jsx)("button",{className:"btn_action",children:Object(l.jsx)("div",{children:Object(l.jsx)(r.j,{className:"btn_action-icon"})})})}),Object(l.jsx)(i.b,{to:"/cms/praytime-message",className:"nav_btn",title:"Delete Hadits/Pesan",onClick:function(){e([a.row.values.groupMitraAsuhId,a.row.values.groupMitraAsuhName]),t(!0),document.body.style.overflow="hidden"},replace:!0,children:Object(l.jsx)("button",{className:"btn_action",children:Object(l.jsx)("div",{children:Object(l.jsx)(r.A,{className:"btn_action-icon"})})})})]})}}]},b=n(124),u=(n(18),n(35)),j=n(17),g=n(97),O=n(142);t.default=Object(j.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeletePraytimeMessage:function(t,n,a){return e(Object(b.p)(t,n,a))}}}))((function(e){var t=e.isCurrentlyLoading,n=e.onDeletePraytimeMessage,o=Object(s.useState)(!1),b=Object(a.a)(o,2),j=(b[0],b[1],Object(s.useState)(!0)),h=Object(a.a)(j,2),m=h[0],p=h[1],x=Object(s.useState)([]),f=Object(a.a)(x,2),v=f[0],y=f[1],N=Object(s.useState)(null),S=Object(a.a)(N,2),w=S[0],P=S[1],C=Object(s.useState)(!1),D=Object(a.a)(C,2),H=D[0],A=D[1],_=Object(s.useState)(!1),T=Object(a.a)(_,2),F=T[0],M=T[1],k=JSON.parse(localStorage.getItem("userData")),I={orderKeyValues:{prayDate:-1}};function E(){Object(g.p)(I).then((function(e){y(e.data.Data),p(!1)})).catch((function(e){p(!1)}))}return Object(s.useEffect)((function(){p(!0),localStorage.getItem("praytimeMessageDeleting")&&(P(JSON.parse(localStorage.getItem("praytimeMessageDeleting"))),M(!0),localStorage.removeItem("praytimeMessageDeleting")),E()}),[]),Object(s.useEffect)((function(){w&&F&&(p(!0),n(k.cobrandEmail,w,E),M(!1),P(null))}),[w,F]),m||t?Object(l.jsx)(u.a,{}):Object(l.jsxs)("div",{className:"PraytimeMessage",children:[H?Object(l.jsx)(O.a,{setDeleting:P,setConfirmDeleting:M,setWarning:A,message:"Hadits/Pesan"}):null,Object(l.jsx)("h1",{children:"HADITS/PESAN UNTUK WAKTU SHOLAT"}),Object(l.jsxs)(i.b,{to:"/cms/praytime-message/add",id:"add_praytimemessage",children:[Object(l.jsx)(r.w,{className:"IconAdd"}),Object(l.jsx)("span",{children:"Tambah Hadits/Pesan Baru"})]}),Object(l.jsx)("div",{className:"PraytimeMessage__table",children:Object(l.jsx)(c.a,{COLUMNS:d(P,A),DATA:v})})]})}))}}]);
//# sourceMappingURL=69.55d0698a.chunk.js.map