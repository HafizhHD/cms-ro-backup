(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[13],{102:function(e,t,a){"use strict";var n=a(4),o=a(2),r=a(128),c=a(112),s=(a(103),a(1));t.a=function(e){var t=e.DATA,a=e.COLUMNS,i=e.renderRowSubComponent,l=Object(o.useMemo)((function(){return t}),[t]),u=Object(r.useTable)({columns:a,data:l},r.useGlobalFilter,r.useSortBy,r.useExpanded,r.usePagination),d=u.getTableProps,b=u.getTableBodyProps,g=u.headerGroups,p=u.prepareRow,h=u.page,m=u.rows,j=u.canPreviousPage,f=u.canNextPage,O=u.pageOptions,v=u.pageCount,x=u.gotoPage,y=u.nextPage,C=u.previousPage,w=u.setPageSize,S=u.visibleColumns,P=u.state,N=P.pageIndex,D=P.pageSize,T=(P.expanded,u.state),_=u.setGlobalFilter,E=T.globalFilter;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"utils",children:[Object(s.jsxs)("div",{className:"pagination",children:[Object(s.jsx)("button",{onClick:function(){return x(0)},disabled:!j,children:"<<"}),Object(s.jsx)("button",{onClick:function(){return C()},disabled:!j,children:"<"}),Object(s.jsx)("button",{onClick:function(){return y()},disabled:!f,children:">"}),Object(s.jsx)("button",{onClick:function(){return x(v-1)},disabled:!f,children:">>"}),Object(s.jsxs)("span",{children:["Page "," ",Object(s.jsxs)("strong",{children:[N+1," of ",O.length]})]}),Object(s.jsxs)("span",{children:["| Go to page:",Object(s.jsx)("input",{type:"number",defaultValue:N+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;x(t)}})]}),Object(s.jsx)("select",{value:D,onChange:function(e){w(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(s.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(s.jsxs)("div",{className:"table_props",children:[Object(s.jsxs)("span",{children:["Total: ",m.length," Data"]}),Object(s.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:E||"",onChange:function(e){_(e.currentTarget.value)}})]})]}),Object(s.jsx)("div",{className:"table_container",children:Object(s.jsxs)("table",Object(n.a)(Object(n.a)({},d()),{},{children:[Object(s.jsx)("thead",{children:g.map((function(e){return Object(s.jsx)("tr",Object(n.a)(Object(n.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(s.jsxs)("th",Object(n.a)(Object(n.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(s.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(s.jsx)(c.a,{}):Object(s.jsx)(c.b,{}):""})]}))}))}))}))}),Object(s.jsx)("tbody",Object(n.a)(Object(n.a)({},b()),{},{children:h.map((function(e,t){return p(e),Object(s.jsxs)(o.Fragment,Object(n.a)(Object(n.a)({},e.getRowProps()),{},{children:[Object(s.jsx)("tr",{children:e.cells.map((function(e){return Object(s.jsxs)("td",Object(n.a)(Object(n.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}),e.isExpanded?Object(s.jsx)("tr",{children:Object(s.jsx)("td",{colSpan:S.length,children:i({row:e})})}):null]}))}))}))]}))})]})}},103:function(e,t,a){},275:function(e,t,a){},279:function(e){e.exports=JSON.parse("{}")},331:function(e,t,a){"use strict";a.r(t);var n=a(14),o=a(2),r=(a(275),a(102)),c=a(6),s=a(12),i=a(1),l={year:"numeric",month:"long",day:"numeric"},u=function(e){return[{Header:"Title",accessor:"programName"},{Header:"Start Date",accessor:function(e){return new Date(e.startDate).toLocaleDateString("en-UK",l)},Cell:function(e){var t=e.value;return Object(i.jsx)(i.Fragment,{children:new Date(t).toLocaleDateString("en-UK",l)})}},{Header:"Status",accessor:"status",Cell:function(e){var t=e.value;return Object(i.jsx)("p",{style:{color:"green",fontWeight:"bold"},children:t})}},{Header:"Action",accessor:"_id",disableSortBy:!0,disableGlobalFilter:!0,Cell:function(t){var a=t.cell;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s.b,{to:"/program/view",className:"nav_btn",title:"View Detail",onClick:function(){localStorage.setItem("programSelected",a.row.values._id)},children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(c.k,{className:"btn_action-icon"})})})}),Object(i.jsx)(s.b,{to:"/program/edit",className:"nav_btn",title:"Edit Program",onClick:function(){localStorage.setItem("programSelected",a.row.values._id)},children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(c.j,{className:"btn_action-icon"})})})}),Object(i.jsx)(s.b,{to:"/program",className:"nav_btn",title:"Delete Program",onClick:function(){e([a.row.values._id,a.row.values.programName])},replace:!0,children:Object(i.jsx)("button",{className:"btn_action",children:Object(i.jsx)("div",{children:Object(i.jsx)(c.t,{className:"btn_action-icon"})})})})]})}}]},d=(a(279),a(91)),b=(a(18),a(82)),g=a(16),p=a(96);t.default=Object(g.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeleteProgram:function(t,a,n){return e(Object(d.d)(t,a,n))}}}))((function(e){var t=e.isCurrentlyLoading,a=e.onDeleteProgram,l=Object(o.useState)(!1),d=Object(n.a)(l,2),g=(d[0],d[1],Object(o.useState)(!0)),h=Object(n.a)(g,2),m=h[0],j=h[1],f=Object(o.useState)(),O=Object(n.a)(f,2),v=O[0],x=O[1],y=Object(o.useState)(null),C=Object(n.a)(y,2),w=C[0],S=C[1],P=JSON.parse(localStorage.getItem("userData")),N={whereKeyValues:{cobrandEmail:P.email},limit:Number.MAX_SAFE_INTEGER};function D(){Object(p.c)(N).then((function(e){x(e.data),console.log(e.data),j(!1)})).catch((function(e){console.log(e),j(!1)}))}return Object(o.useEffect)((function(){j(!0),localStorage.getItem("programDeleting")&&(S(localStorage.getItem("programDeleting")),localStorage.removeItem("programDeleting")),D()}),[]),Object(o.useEffect)((function(){w&&(j(!0),a(P.email,w,D))}),[w]),m||t?Object(i.jsx)(b.a,{}):Object(i.jsxs)("div",{className:"Program",children:[Object(i.jsx)("h1",{children:"PROGRAM"}),Object(i.jsxs)(s.b,{to:"/program/add",id:"add_program",children:[Object(i.jsx)(c.r,{className:"IconAdd"}),Object(i.jsx)("span",{children:"Create New Program"})]}),Object(i.jsx)("div",{className:"Program__table",children:Object(i.jsx)(r.a,{COLUMNS:u(S),DATA:v.programs})})]})}))},82:function(e,t,a){"use strict";a(2);var n=a(32),o=(a(83),a(1));t.a=function(e){var t=e.text,a=void 0===t?"Mohon Tunggu":t;return Object(o.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(o.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(o.jsx)("span",{children:"Keluarga HKBP"})," "]}),Object(o.jsx)(n.a,{}),Object(o.jsx)("p",{children:a})]})}},83:function(e,t,a){},91:function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"g",(function(){return m})),a.d(t,"d",(function(){return j})),a.d(t,"a",(function(){return f})),a.d(t,"e",(function(){return O})),a.d(t,"c",(function(){return v})),a.d(t,"f",(function(){return x}));var n=a(7),o=a(18),r=a.n(o),c=a(33),s=a(20),i=function(e){return r()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},u=a(24),d=function(){return{type:n.f}},b=function(){return{type:n.d}},g=function(e,t){return{type:n.b,message:e,idMessage:t}},p=function(e,t){return{type:n.c,message:e,idMessage:t}},h=function(e,t,a,o,i,l){return function(u){u(d()),u({type:n.a}),Object(c.b)(o).then((function(n){console.log(typeof n);var o,c={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:n,startDate:i};console.log(c),(o=c,r()({method:"post",url:s.a+"/cobrand/programAdd",data:o,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/program"),u(p('Program "'+t+'" berhasil ditambahkan.')),u(b())})).catch((function(e){console.error("Error:",e),u(g('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),u(b())})),console.log(c)}))}},m=function(e,t,a,o,r,s,l){return function(u){if(u(d()),u({type:n.a}),console.log("Photo is empty:",""===r),""===r){var h={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:o,startDate:s}};console.log(h),i(h).then((function(e){console.log("Success:",e.data),l.push("/program"),u(p('Program "'+a+'" berhasil diubah.')),u(b())})).catch((function(e){console.error("Error:",e),u(g('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),u(b())}))}else{Object(c.b)(r).then((function(n){console.log(typeof n);var r={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:o,programthumnail:n,startDate:s}};console.log(r),i(r).then((function(e){console.log("Success:",e.data),l.push("/program"),u(p('Program "'+a+'" berhasil diubah.')),u(b())})).catch((function(e){console.error("Error:",e),u(g('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),u(b())}))}))}}},j=function(e,t,a){return function(o){o(d()),o({type:n.a});var c,i={whereValues:{cobrandEmail:e,_id:t[0]}};(c=i,r()({method:"post",url:s.a+"/cobrand/programRemove",data:c,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),o(p('Program "'+t[1]+'" berhasil dihapus.')),o(b()),a()})).catch((function(e){console.log(e),o(g('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),o(b()),a()}))}},f=function(e,t,a,o,i,l,u,h,m,j,f){return function(O){O(d()),O({type:n.a}),Object(c.b)(u).then((function(n){console.log(typeof n);var u=n,d=j?"active":"inactive";h="Video"===i?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(c.a)(h)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===i?'<img src="'+h+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h+"</div></body></html>",console.log(h);var v,x={cobrandEmail:e,programId:t,contentName:a,contentDescription:o,contentType:i,contentSource:l,contentThumbnail:u,contents:h,status:d,startDate:m};console.log(x),(v=x,r()({method:"post",url:s.a+"/cobrand/contentAdd",data:v,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),f.push("/content"),O(p('Content "'+a+'" berhasil ditambahkan.')),O(b())})).catch((function(e){console.error("Error:",e),O(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),O(b())})),console.log(x)}))}},O=function(e,t,a,o,r,s,i,u,h,m,j){return function(f){if(f(d()),f({type:n.a}),console.log("Photo is empty:",""===u),""===u){h="Video"===s?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(c.a)(h)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===s?'<img src="'+h+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h+"</div></body></html>",console.log(h);var O={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:a,contentName:o,contentDescription:r,contentType:s,contentSource:i,contents:h,startDate:m}};console.log(O),l(O).then((function(e){console.log("Success:",e.data),j.push("/content"),f(p('Content "'+o+'" berhasil diubah.')),f(b())})).catch((function(e){console.error("Error:",e),f(g('Content "'+o+'" gagal diubah. Coba beberapa saat lagi.')),f(b())})),console.log(O)}else{Object(c.b)(u).then((function(n){console.log(typeof n);var c={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:a,contentName:o,contentDescription:r,contentType:s,contentSource:i,contents:h,startDate:m}};console.log(c),l(c).then((function(e){console.log("Success:",e.data),j.push("/content"),f(p('Content "'+o+'" berhasil diubah.')),f(b())})).catch((function(e){console.error("Error:",e),f(g('Content "'+o+'" gagal diubah. Coba beberapa saat lagi.')),f(b())})),console.log(c)}))}}},v=function(e,t,a){return function(o){o(d()),o({type:n.a});var c,i={whereValues:{cobrandEmail:e,_id:t[0]}};(c=i,r()({method:"post",url:s.a+"/cobrand/contentRemove",data:c,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),o(p('Content "'+t[1]+'" berhasil dihapus.')),o(b()),a()})).catch((function(e){console.log(e),o(g('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),o(b()),a()}))}},x=function(e,t,a,o,r,s,i){return function(l){l(d()),l({type:n.a});var h={email:e,password:t},m={};(a&&(m=Object.assign(m,{cobrandName:a})),r&&(m=Object.assign(m,{phoneNumber:r})),s&&(m=Object.assign(m,{address:s})),i&&(m=Object.assign(m,{password:i})),o)?Object(c.b)(o).then((function(e){m=Object.assign(m,{thumbnail:e}),console.log("whereValues: ",h),console.log("newValues: ",m),Object(u.a)(h,m).then((function(e){console.log("Success:",e.data),i&&(console.log("YOI BRUH"),h.password=i),Object(u.b)(h).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(p("Profil berhasil diubah.")),l(b())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})):(console.log("whereValues: ",h),console.log("newValues: ",m),Object(u.a)(h,m).then((function(e){console.log("Success:",e.data),i&&(console.log("YOI BRUH"),h.password=i),Object(u.b)(h).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(p("Profil berhasil diubah.")),l(b())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(b())})))}}},96:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(18),o=a.n(n),r=a(20),c=function(e){return o()({method:"post",url:r.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return o()({method:"post",url:r.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return o()({method:"post",url:r.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:r.a+"/cobrand/HKBPDataFilter",data:e,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=13.62aae16a.chunk.js.map