(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[50],{103:function(e,t,n){"use strict";n.d(t,"m",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"o",(function(){return s})),n.d(t,"n",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"i",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"k",(function(){return h})),n.d(t,"j",(function(){return g})),n.d(t,"e",(function(){return m})),n.d(t,"g",(function(){return O})),n.d(t,"l",(function(){return f})),n.d(t,"a",(function(){return x}));var a=n(18),c=n.n(a),r=n(20),o=function(e){return c()({method:"post",url:r.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return c()({method:"post",url:r.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return c()({method:"post",url:r.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return c()({method:"post",url:r.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return c()({method:"post",url:r.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return c()({method:"post",url:r.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return c()({method:"post",url:r.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return c()({method:"post",url:r.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return c()({method:"post",url:r.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return c()({method:"post",url:r.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return c()({method:"post",url:r.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return c()({method:"post",url:r.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return c()({method:"post",url:r.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return c()({method:"post",url:r.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},x=function(e){return c()({method:"post",url:r.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},112:function(e,t,n){},142:function(e,t,n){"use strict";var a=n(5),c=n(2),r=n(122),o=n(134),i=(n(112),n(0));t.a=function(e){var t=e.DATA,n=e.COLUMNS,s=e.renderRowSubComponent,l=Object(c.useMemo)((function(){return t}),[t]),u=Object(r.useTable)({columns:n,data:l,initialState:{hiddenColumns:["_id"]}},r.useGlobalFilter,r.useSortBy,r.useExpanded,r.usePagination),d=u.getTableProps,j=u.getTableBodyProps,b=u.headerGroups,p=u.prepareRow,h=u.page,g=u.rows,m=u.canPreviousPage,O=u.canNextPage,f=u.pageOptions,x=u.pageCount,v=u.gotoPage,C=u.nextPage,y=u.previousPage,N=u.setPageSize,S=u.visibleColumns,w=u.state,T=w.pageIndex,D=w.pageSize,F=(w.expanded,u.state),k=u.setGlobalFilter,_=F.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"utils",children:[Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{onClick:function(){return v(0)},disabled:!m,children:"<<"}),Object(i.jsx)("button",{onClick:function(){return y()},disabled:!m,children:"<"}),Object(i.jsx)("button",{onClick:function(){return C()},disabled:!O,children:">"}),Object(i.jsx)("button",{onClick:function(){return v(x-1)},disabled:!O,children:">>"}),Object(i.jsxs)("span",{children:["Page "," ",Object(i.jsxs)("strong",{children:[T+1," of ",f.length]})]}),Object(i.jsxs)("span",{children:["| Go to page:",Object(i.jsx)("input",{type:"number",defaultValue:T+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(i.jsx)("select",{value:D,onChange:function(e){N(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(i.jsxs)("div",{className:"table_props",children:[Object(i.jsxs)("span",{children:["Total: ",g.length," Data"]}),Object(i.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:_||"",onChange:function(e){k(e.currentTarget.value)}})]})]}),Object(i.jsx)("div",{className:"table_container",children:Object(i.jsxs)("table",Object(a.a)(Object(a.a)({},d()),{},{children:[Object(i.jsx)("thead",{children:b.map((function(e){return Object(i.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(o.a,{}):Object(i.jsx)(o.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(a.a)(Object(a.a)({},j()),{},{children:h.map((function(e,t){return p(e),Object(i.jsxs)(c.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(i.jsx)("tr",{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+T*D:e.render("Cell")," "]}))}))}),e.isExpanded?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:S.length,children:s({row:e})})}):null]}))}))}))]}))})]})}},1425:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(2),r=n(3),o=n(7),i=n(0),s={year:"numeric",month:"long",day:"numeric"},l=function(e,t){return[{Header:"ID Content",accessor:"_id"},{Header:"Nama Artikel",accessor:"contentName"},{Header:"Jenis Artikel",accessor:"contentType"},{Header:"Topik Artikel",accessor:"topics",Cell:function(e){return e.value.join(", ")}},{Header:"Target Pembaca",accessor:"targetAudiance",Cell:function(e){return e.value.join(", ")}},{Header:"Tanggal Mulai",accessor:"startDate",Cell:function(e){var t=e.value;return Object(i.jsx)(i.Fragment,{children:void 0!==t?new Date(t).toLocaleDateString("id-ID",s):""})}},{Header:"Tanggal Berakhir",accessor:"endDate",Cell:function(e){var t=e.value;return Object(i.jsx)(i.Fragment,{children:void 0!==t?new Date(t).toLocaleDateString("id-ID",s):""})}},{Header:"Status",accessor:"status",Cell:function(e){var t=e.value;return"active"===t?Object(i.jsx)("p",{style:{color:"green",fontWeight:"bold"},children:t}):Object(i.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:t})}},{Header:"Action",disableSortBy:!0,disableGlobalFilter:!0,Cell:function(n){var a=n.cell;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.b,{to:"/cms/content/view/",className:"nav_btn",title:"View Detail",onClick:function(){localStorage.setItem("contentSelected",a.row.values._id)},children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(r.k,{className:"btn_action-icon"})})})}),Object(i.jsx)(o.b,{to:"/cms/content/edit",className:"nav_btn",title:"Edit Content",onClick:function(){localStorage.setItem("contentSelected",a.row.values._id)},children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(r.j,{className:"btn_action-icon"})})})}),Object(i.jsx)(o.b,{to:"/cms/content",className:"nav_btn",title:"Delete Content",onClick:function(){e([a.row.values._id,a.row.values.contentName]),t(!0),document.body.style.overflow="hidden"},children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(r.A,{className:"btn_action-icon"})})})})]})}}]},u=(n(858),n(127)),d=n(142),j=(n(859),n(36)),b=(n(18),n(17)),p=n(103),h=n(158);t.default=Object(b.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeleteContent:function(t,n,a){return e(Object(u.k)(t,n,a))}}}))((function(e){var t=e.isCurrentlyLoading,n=e.onDeleteContent,s=Object(c.useState)(!0),u=Object(a.a)(s,2),b=u[0],g=u[1],m=Object(c.useState)(),O=Object(a.a)(m,2),f=O[0],x=O[1],v=Object(c.useState)(null),C=Object(a.a)(v,2),y=C[0],N=C[1],S=Object(c.useState)(!1),w=Object(a.a)(S,2),T=w[0],D=w[1],F=Object(c.useState)(!1),k=Object(a.a)(F,2),_=k[0],A=k[1],P=JSON.parse(localStorage.getItem("userData")),I={whereKeyValues:{cobrandEmail:P.cobrandEmail,status:{$in:["active","inactive"]},programId:"-1"},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER};function H(){Object(p.f)(I).then((function(e){console.log("Content list: ",e.data),x(e.data.contents),g(!1),console.log(b)})).catch((function(e){console.log(e),g(!1)}))}return Object(c.useEffect)((function(){g(!0),localStorage.getItem("contentDeleting")&&(console.log("masyuk syini"),N([localStorage.getItem("contentDeleting"),localStorage.getItem("contentDeletingName")]),A(!0),localStorage.removeItem("contentDeleting"),localStorage.removeItem("contentDeletingName")),H()}),[]),Object(c.useEffect)((function(){y&&_&&(g(!0),n(P.cobrandEmail,y,H),A(!1),N(null))}),[y,_]),b||t?Object(i.jsx)(j.a,{}):Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"Content",children:[Object(i.jsx)("h1",{children:"ARTIKEL"}),Object(i.jsxs)(o.b,{to:"/cms/content/add",id:"add_content",children:[Object(i.jsx)(r.w,{className:"IconAdd"}),Object(i.jsx)("span",{children:"Buat Artikel Baru"})]}),Object(i.jsx)("div",{className:"Content__table",children:Object(i.jsx)(d.a,{COLUMNS:l(N,D),DATA:f})}),T?Object(i.jsx)(h.a,{setDeleting:N,setConfirmDeleting:A,setWarning:D,message:"Artikel"}):null]})})}))},158:function(e,t,n){"use strict";n(2),n(159);var a=n(3),c=n(0);t.a=function(e){var t=e.setDeleting,n=void 0===t?null:t,r=e.setConfirmDeleting,o=e.setWarning,i=e.message;return Object(c.jsx)("div",{className:"warning",children:Object(c.jsxs)("div",{className:"warning-content",children:[Object(c.jsx)("div",{className:"warning-content-header",children:Object(c.jsx)("h2",{children:"Konfirmasi Penghapusan"})}),Object(c.jsxs)("div",{className:"warning-content-body",children:[Object(c.jsx)(a.b,{className:"warning-content-body-icon"}),Object(c.jsxs)("div",{className:"warning-content-body-message",children:[Object(c.jsxs)("p",{children:["Apakah Anda yakin ingin menghapus ",i," ini?"]}),Object(c.jsxs)("div",{className:"warning-content-body-message-button",children:[Object(c.jsx)("div",{className:"warning-content-body-message-button-delete",children:Object(c.jsx)("button",{onClick:function(){r(!0),o(!1),document.body.style.overflow="unset"},children:"Hapus"})}),Object(c.jsx)("div",{className:"warning-content-body-message-button-cancel",children:Object(c.jsx)("button",{onClick:function(){n&&n(null),o(!1),document.body.style.overflow="unset"},children:"Jangan Hapus"})})]})]})]})]})},i)}},159:function(e,t,n){},858:function(e){e.exports=JSON.parse("{}")},859:function(e,t,n){}}]);
//# sourceMappingURL=50.deb89aeb.chunk.js.map