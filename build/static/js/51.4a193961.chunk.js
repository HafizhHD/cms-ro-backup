(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[51],{103:function(e,t,n){"use strict";n.d(t,"m",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"o",(function(){return i})),n.d(t,"n",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"i",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"g",(function(){return O})),n.d(t,"l",(function(){return f})),n.d(t,"a",(function(){return x}));var a=n(18),r=n.n(a),c=n(20),o=function(e){return r()({method:"post",url:c.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return r()({method:"post",url:c.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return r()({method:"post",url:c.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:c.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:c.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:c.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:c.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:c.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:c.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:c.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:c.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:c.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return r()({method:"post",url:c.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return r()({method:"post",url:c.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},x=function(e){return r()({method:"post",url:c.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},112:function(e,t,n){},142:function(e,t,n){"use strict";var a=n(5),r=n(2),c=n(122),o=n(134),s=(n(112),n(0));t.a=function(e){var t=e.DATA,n=e.COLUMNS,i=e.renderRowSubComponent,l=Object(r.useMemo)((function(){return t}),[t]),u=Object(c.useTable)({columns:n,data:l,initialState:{hiddenColumns:["_id"]}},c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination),d=u.getTableProps,j=u.getTableBodyProps,b=u.headerGroups,p=u.prepareRow,m=u.page,g=u.rows,h=u.canPreviousPage,O=u.canNextPage,f=u.pageOptions,x=u.pageCount,v=u.gotoPage,C=u.nextPage,y=u.previousPage,N=u.setPageSize,S=u.visibleColumns,w=u.state,P=w.pageIndex,T=w.pageSize,F=(w.expanded,u.state),_=u.setGlobalFilter,D=F.globalFilter;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"utils",children:[Object(s.jsxs)("div",{className:"pagination",children:[Object(s.jsx)("button",{onClick:function(){return v(0)},disabled:!h,children:"<<"}),Object(s.jsx)("button",{onClick:function(){return y()},disabled:!h,children:"<"}),Object(s.jsx)("button",{onClick:function(){return C()},disabled:!O,children:">"}),Object(s.jsx)("button",{onClick:function(){return v(x-1)},disabled:!O,children:">>"}),Object(s.jsxs)("span",{children:["Page "," ",Object(s.jsxs)("strong",{children:[P+1," of ",f.length]})]}),Object(s.jsxs)("span",{children:["| Go to page:",Object(s.jsx)("input",{type:"number",defaultValue:P+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(s.jsx)("select",{value:T,onChange:function(e){N(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(s.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(s.jsxs)("div",{className:"table_props",children:[Object(s.jsxs)("span",{children:["Total: ",g.length," Data"]}),Object(s.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:D||"",onChange:function(e){_(e.currentTarget.value)}})]})]}),Object(s.jsx)("div",{className:"table_container",children:Object(s.jsxs)("table",Object(a.a)(Object(a.a)({},d()),{},{children:[Object(s.jsx)("thead",{children:b.map((function(e){return Object(s.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(s.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(s.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(s.jsx)(o.a,{}):Object(s.jsx)(o.b,{}):""})]}))}))}))}))}),Object(s.jsx)("tbody",Object(a.a)(Object(a.a)({},j()),{},{children:m.map((function(e,t){return p(e),Object(s.jsxs)(r.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(s.jsx)("tr",{children:e.cells.map((function(e){return Object(s.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+P*T:e.render("Cell")," "]}))}))}),e.isExpanded?Object(s.jsx)("tr",{children:Object(s.jsx)("td",{colSpan:S.length,children:i({row:e})})}):null]}))}))}))]}))})]})}},1422:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(2),c=(n(649),n(142)),o=n(3),s=n(7),i=n(0),l=function(e,t){return[{Header:"ID",accessor:"_id"},{Header:"Nama Program",accessor:"programName",disableFilters:!0},{Header:"Kategori Program",accessor:"category",Cell:function(e){var t=e.value,n=e.row;return void 0!==t?t:n.index%3===1?Object(i.jsx)("p",{children:"Pendidikan Agama"}):Object(i.jsx)("p",{children:"Pengetahuan Siswa Umum"})}},{Header:"Target Pembaca",accessor:"targetAudiance",Cell:function(e){var t=e.value;e.row;return void 0!==t?t.join(", "):Object(i.jsx)("p",{children:"Semua"})}},{Header:"Status",accessor:"status"},{Header:"Action",disableSortBy:!0,disableGlobalFilter:!0,Cell:function(n){var a=n.cell;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s.b,{to:"/cms/program/view",className:"nav_btn",title:"View Detail",onClick:function(){localStorage.setItem("programSelected",a.row.values._id)},children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(o.k,{className:"btn_action-icon"})})})}),Object(i.jsx)(s.b,{to:"/cms/program/edit",className:"nav_btn",title:"Edit Program",onClick:function(){localStorage.setItem("programSelected",a.row.values._id)},children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(o.j,{className:"btn_action-icon"})})})}),Object(i.jsx)(s.b,{to:"/cms/program",className:"nav_btn",title:"Delete Program",onClick:function(){e([a.row.values._id,a.row.values.programName]),t(!0),document.body.style.overflow="hidden"},replace:!0,children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(o.A,{className:"btn_action-icon"})})})})]})}}]},u=(n(652),n(127)),d=(n(18),n(36)),j=n(17),b=n(103),p=n(158);t.default=Object(j.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeleteProgram:function(t,n,a){return e(Object(u.l)(t,n,a))}}}))((function(e){var t=e.isCurrentlyLoading,n=e.onDeleteProgram,u=Object(r.useState)(!1),j=Object(a.a)(u,2),m=(j[0],j[1],Object(r.useState)(!0)),g=Object(a.a)(m,2),h=g[0],O=g[1],f=Object(r.useState)(),x=Object(a.a)(f,2),v=x[0],C=x[1],y=Object(r.useState)(null),N=Object(a.a)(y,2),S=N[0],w=N[1],P=Object(r.useState)(!1),T=Object(a.a)(P,2),F=T[0],_=T[1],D=Object(r.useState)(!1),k=Object(a.a)(D,2),A=k[0],E=k[1],H=JSON.parse(localStorage.getItem("userData")),I={whereKeyValues:{cobrandEmail:H.cobrandEmail},orderKeyValues:{dateCreated:-1},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER};function G(){Object(b.m)(I).then((function(e){C(e.data),console.log(e.data),O(!1)})).catch((function(e){console.log(e),O(!1)}))}return Object(r.useEffect)((function(){O(!0),localStorage.getItem("programDeleting")&&(w(JSON.parse(localStorage.getItem("programDeleting"))),E(!0),localStorage.removeItem("programDeleting")),G()}),[]),Object(r.useEffect)((function(){S&&A&&(O(!0),n(H.cobrandEmail,S,G),E(!1),w(null))}),[S,A]),h||t?Object(i.jsx)(d.a,{}):Object(i.jsxs)("div",{className:"Program",children:[F?Object(i.jsx)(p.a,{setDeleting:w,setConfirmDeleting:E,setWarning:_,message:"Program"}):null,Object(i.jsx)("h1",{children:"PROGRAM"}),Object(i.jsxs)(s.b,{to:"/cms/program/add",id:"add_program",children:[Object(i.jsx)(o.w,{className:"IconAdd"}),Object(i.jsx)("span",{children:"Buat Program Baru"})]}),Object(i.jsx)("div",{className:"Program__table",children:Object(i.jsx)(c.a,{COLUMNS:l(w,_),DATA:v.programs})})]})}))},158:function(e,t,n){"use strict";n(2),n(159);var a=n(3),r=n(0);t.a=function(e){var t=e.setDeleting,n=void 0===t?null:t,c=e.setConfirmDeleting,o=e.setWarning,s=e.message;return Object(r.jsx)("div",{className:"warning",children:Object(r.jsxs)("div",{className:"warning-content",children:[Object(r.jsx)("div",{className:"warning-content-header",children:Object(r.jsx)("h2",{children:"Konfirmasi Penghapusan"})}),Object(r.jsxs)("div",{className:"warning-content-body",children:[Object(r.jsx)(a.b,{className:"warning-content-body-icon"}),Object(r.jsxs)("div",{className:"warning-content-body-message",children:[Object(r.jsxs)("p",{children:["Apakah Anda yakin ingin menghapus ",s," ini?"]}),Object(r.jsxs)("div",{className:"warning-content-body-message-button",children:[Object(r.jsx)("div",{className:"warning-content-body-message-button-delete",children:Object(r.jsx)("button",{onClick:function(){c(!0),o(!1),document.body.style.overflow="unset"},children:"Hapus"})}),Object(r.jsx)("div",{className:"warning-content-body-message-button-cancel",children:Object(r.jsx)("button",{onClick:function(){n&&n(null),o(!1),document.body.style.overflow="unset"},children:"Jangan Hapus"})})]})]})]})]})},s)}},159:function(e,t,n){},649:function(e,t,n){},652:function(e){e.exports=JSON.parse("{}")}}]);
//# sourceMappingURL=51.4a193961.chunk.js.map