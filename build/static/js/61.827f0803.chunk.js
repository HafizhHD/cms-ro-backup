(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[61],{103:function(e,t,n){"use strict";n.d(t,"m",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"o",(function(){return i})),n.d(t,"n",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"i",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"k",(function(){return f})),n.d(t,"j",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"g",(function(){return O})),n.d(t,"l",(function(){return g})),n.d(t,"a",(function(){return x}));var a=n(18),r=n.n(a),c=n(20),s=function(e){return r()({method:"post",url:c.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return r()({method:"post",url:c.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return r()({method:"post",url:c.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:c.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:c.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:c.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:c.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:c.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:c.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return r()({method:"post",url:c.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:c.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:c.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return r()({method:"post",url:c.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:c.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},x=function(e){return r()({method:"post",url:c.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},113:function(e,t,n){},1263:function(e,t,n){},136:function(e,t,n){"use strict";function a(e,t,n,a,r,c,s){try{var o=e[c](s),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var s=e.apply(t,n);function o(e){a(s,r,c,o,i,"next",e)}function i(e){a(s,r,c,o,i,"throw",e)}o(void 0)}))}}n.d(t,"a",(function(){return r}))},146:function(e,t,n){"use strict";var a=n(5),r=n(2),c=n(122),s=n(135),o=(n(113),n(0));t.a=function(e){var t=e.DATA,n=e.COLUMNS,i=e.renderRowSubComponent,l=Object(r.useMemo)((function(){return t}),[t]),u=Object(c.useTable)({columns:n,data:l,initialState:{hiddenColumns:["_id"]}},c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination),d=u.getTableProps,j=u.getTableBodyProps,b=u.headerGroups,p=u.prepareRow,f=u.page,h=u.rows,m=u.canPreviousPage,O=u.canNextPage,g=u.pageOptions,x=u.pageCount,v=u.gotoPage,y=u.nextPage,C=u.previousPage,S=u.setPageSize,N=u.visibleColumns,w=u.state,T=w.pageIndex,F=w.pageSize,P=(w.expanded,u.state),_=u.setGlobalFilter,D=P.globalFilter;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"utils",children:[Object(o.jsxs)("div",{className:"pagination",children:[Object(o.jsx)("button",{onClick:function(){return v(0)},disabled:!m,children:"<<"}),Object(o.jsx)("button",{onClick:function(){return C()},disabled:!m,children:"<"}),Object(o.jsx)("button",{onClick:function(){return y()},disabled:!O,children:">"}),Object(o.jsx)("button",{onClick:function(){return v(x-1)},disabled:!O,children:">>"}),Object(o.jsxs)("span",{children:["Page "," ",Object(o.jsxs)("strong",{children:[T+1," of ",g.length]})]}),Object(o.jsxs)("span",{children:["| Go to page:",Object(o.jsx)("input",{type:"number",defaultValue:T+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(o.jsx)("select",{value:F,onChange:function(e){S(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(o.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(o.jsxs)("div",{className:"table_props",children:[Object(o.jsxs)("span",{children:["Total: ",h.length," Data"]}),Object(o.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:D||"",onChange:function(e){_(e.currentTarget.value)}})]})]}),Object(o.jsx)("div",{className:"table_container",children:Object(o.jsxs)("table",Object(a.a)(Object(a.a)({},d()),{},{children:[Object(o.jsx)("thead",{children:b.map((function(e){return Object(o.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(o.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(o.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(o.jsx)(s.a,{}):Object(o.jsx)(s.b,{}):""})]}))}))}))}))}),Object(o.jsx)("tbody",Object(a.a)(Object(a.a)({},j()),{},{children:f.map((function(e,t){return p(e),Object(o.jsxs)(r.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(o.jsx)("tr",{children:e.cells.map((function(e){return Object(o.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+T*F:e.render("Cell")," "]}))}))}),e.isExpanded?Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:N.length,children:i({row:e})})}):null]}))}))}))]}))})]})}},1475:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(2),c=(n(1263),n(146)),s=n(3),o=n(8),i=n(0),l=function(e,t){return[{Header:"ID",accessor:"_id"},{Header:"User Name",accessor:"userName",disableFilters:!0},{Header:"Email User",accessor:"emailUser",disableFilters:!0},{Header:"Tipe User",accessor:"userType"},{Header:"Level User",accessor:"userLevel"},{Header:"No. Telepon",accessor:"phone"},{Header:"Action",disableSortBy:!0,disableGlobalFilter:!0,Cell:function(n){var a=n.cell;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.b,{to:"/tools/admin-staff/edit",className:"nav_btn",title:"Edit Staff",onClick:function(){localStorage.setItem("staffSelected",a.row.values._id)},children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(s.j,{className:"btn_action-icon"})})})}),"admin@roi.ruangortu.id"!==a.row.values.emailUser?Object(i.jsx)(o.b,{to:"/tools/admin-staff",className:"nav_btn",title:"Delete Staff",onClick:function(){e([a.row.values._id,a.row.values.userName]),t(!0),document.body.style.overflow="hidden"},replace:!0,children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(s.z,{className:"btn_action-icon"})})})}):null]})}}]},u=n(128),d=(n(18),n(36)),j=n(17),b=n(103),p=n(161);t.default=Object(j.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeleteStaff:function(t,n,a){return e(Object(u.m)(t,n,a))}}}))((function(e){var t=e.isCurrentlyLoading,n=e.onDeleteStaff,u=Object(r.useState)(!1),j=Object(a.a)(u,2),f=(j[0],j[1],Object(r.useState)(!0)),h=Object(a.a)(f,2),m=h[0],O=h[1],g=Object(r.useState)(),x=Object(a.a)(g,2),v=x[0],y=x[1],C=Object(r.useState)(null),S=Object(a.a)(C,2),N=S[0],w=S[1],T=Object(r.useState)(!1),F=Object(a.a)(T,2),P=F[0],_=F[1],D=Object(r.useState)(!1),A=Object(a.a)(D,2),k=A[0],E=A[1],H=JSON.parse(localStorage.getItem("userData")),I={whereKeyValues:{cobrandEmail:H.cobrandEmail},orderKeyValues:{dateCreated:-1},limit:Number.MAX_SAFE_INTEGER};function U(){Object(b.a)(I).then((function(e){y(e.data.Data),O(!1)})).catch((function(e){O(!1)}))}return Object(r.useEffect)((function(){O(!0),localStorage.getItem("staffDeleting")&&(w(JSON.parse(localStorage.getItem("staffDeleting"))),E(!0),localStorage.removeItem("staffDeleting")),U()}),[]),Object(r.useEffect)((function(){N&&k&&(O(!0),n(H.cobrandEmail,N,U),E(!1),w(null))}),[N,k]),m||t?Object(i.jsx)(d.a,{}):Object(i.jsxs)("div",{className:"Staff",children:[P?Object(i.jsx)(p.a,{setDeleting:w,setConfirmDeleting:E,setWarning:_,message:"Admin/Staff"}):null,Object(i.jsx)("h1",{children:"ADMIN & STAFF"}),Object(i.jsxs)(o.b,{to:"/tools/admin-staff/add",id:"add_staff",children:[Object(i.jsx)(s.w,{className:"IconAdd"}),Object(i.jsx)("span",{children:"Tambah Admin/Staff Baru"})]}),Object(i.jsx)("div",{className:"Staff__table",children:Object(i.jsx)(c.a,{COLUMNS:l(w,_),DATA:v})})]})}))},161:function(e,t,n){"use strict";n(2),n(162);var a=n(3),r=n(0);t.a=function(e){var t=e.setDeleting,n=void 0===t?null:t,c=e.setConfirmDeleting,s=e.setWarning,o=e.message;return Object(r.jsx)("div",{className:"warning",children:Object(r.jsxs)("div",{className:"warning-content",children:[Object(r.jsx)("div",{className:"warning-content-header",children:Object(r.jsx)("h2",{children:"Konfirmasi Penghapusan"})}),Object(r.jsxs)("div",{className:"warning-content-body",children:[Object(r.jsx)(a.b,{className:"warning-content-body-icon"}),Object(r.jsxs)("div",{className:"warning-content-body-message",children:[Object(r.jsxs)("p",{children:["Apakah Anda yakin ingin menghapus ",o," ini?"]}),Object(r.jsxs)("div",{className:"warning-content-body-message-button",children:[Object(r.jsx)("div",{className:"warning-content-body-message-button-delete",children:Object(r.jsx)("button",{onClick:function(){c(!0),s(!1),document.body.style.overflow="unset"},children:"Hapus"})}),Object(r.jsx)("div",{className:"warning-content-body-message-button-cancel",children:Object(r.jsx)("button",{onClick:function(){n&&n(null),s(!1),document.body.style.overflow="unset"},children:"Jangan Hapus"})})]})]})]})]})},o)}},162:function(e,t,n){}}]);
//# sourceMappingURL=61.827f0803.chunk.js.map