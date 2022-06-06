(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[54],{115:function(e,t,n){},118:function(e,t,n){"use strict";n.d(t,"h",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"j",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"a",(function(){return p})),n.d(t,"g",(function(){return g}));var a=n(18),o=n.n(a),r=n(20),c=function(e){return o()({method:"post",url:r.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return o()({method:"post",url:r.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return o()({method:"post",url:r.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:r.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return o()({method:"post",url:r.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:r.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return o()({method:"post",url:r.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return o()({method:"post",url:r.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return o()({method:"post",url:r.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return o()({method:"post",url:r.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})}},1410:function(e,t,n){"use strict";n.r(t);var a=n(10),o=n(2),r=(n(641),n(155)),c=n(3),i=n(7),s=n(0),l={year:"numeric",month:"long",day:"numeric"},d=function(e){return[{Header:"Title",accessor:"programName"},{Header:"Start Date",accessor:function(e){return new Date(e.startDate).toLocaleDateString("en-UK",l)},Cell:function(e){var t=e.value;return Object(s.jsx)(s.Fragment,{children:new Date(t).toLocaleDateString("en-UK",l)})}},{Header:"Status",accessor:"status",Cell:function(e){var t=e.value;return Object(s.jsx)("p",{style:{color:"green",fontWeight:"bold"},children:t})}},{Header:"Action",accessor:"_id",disableSortBy:!0,disableGlobalFilter:!0,Cell:function(t){var n=t.cell;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.b,{to:"/cms/program/view",className:"nav_btn",title:"View Detail",onClick:function(){localStorage.setItem("programSelected",n.row.values._id)},children:Object(s.jsx)("button",{className:"btn_action",children:Object(s.jsx)("div",{children:Object(s.jsx)(c.j,{className:"btn_action-icon"})})})}),Object(s.jsx)(i.b,{to:"/cms/program/edit",className:"nav_btn",title:"Edit Program",onClick:function(){localStorage.setItem("programSelected",n.row.values._id)},children:Object(s.jsx)("button",{className:"btn_action",children:Object(s.jsx)("div",{children:Object(s.jsx)(c.i,{className:"btn_action-icon"})})})}),Object(s.jsx)(i.b,{to:"/cms/program",className:"nav_btn",title:"Delete Program",onClick:function(){e([n.row.values._id,n.row.values.programName])},replace:!0,children:Object(s.jsx)("button",{className:"btn_action",children:Object(s.jsx)("div",{children:Object(s.jsx)(c.y,{className:"btn_action-icon"})})})})]})}}]},u=(n(644),n(151)),b=(n(18),n(36)),h=n(17),p=n(118);t.default=Object(h.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeleteProgram:function(t,n,a){return e(Object(u.d)(t,n,a))}}}))((function(e){var t=e.isCurrentlyLoading,n=e.onDeleteProgram,l=Object(o.useState)(!1),u=Object(a.a)(l,2),h=(u[0],u[1],Object(o.useState)(!0)),g=Object(a.a)(h,2),m=g[0],f=g[1],j=Object(o.useState)(),O=Object(a.a)(j,2),v=O[0],y=O[1],C=Object(o.useState)(null),w=Object(a.a)(C,2),x=w[0],S=w[1],D=JSON.parse(localStorage.getItem("userData")),N={whereKeyValues:{cobrandEmail:D.email},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER};function P(){Object(p.h)(N).then((function(e){y(e.data),console.log(e.data),f(!1)})).catch((function(e){console.log(e),f(!1)}))}return Object(o.useEffect)((function(){f(!0),localStorage.getItem("programDeleting")&&(S(localStorage.getItem("programDeleting")),localStorage.removeItem("programDeleting")),P()}),[]),Object(o.useEffect)((function(){x&&(f(!0),n(D.email,x,P))}),[x]),m||t?Object(s.jsx)(b.a,{}):Object(s.jsxs)("div",{className:"Program",children:[Object(s.jsx)("h1",{children:"PROGRAM"}),Object(s.jsxs)(i.b,{to:"/cms/program/revisilist",id:"add_program",children:[Object(s.jsx)(c.u,{className:"IconAdd"}),Object(s.jsx)("span",{children:"revisilist"})]}),Object(s.jsxs)(i.b,{to:"/cms/program/add",id:"add_program",children:[Object(s.jsx)(c.u,{className:"IconAdd"}),Object(s.jsx)("span",{children:"Create New Program"})]}),Object(s.jsx)("div",{className:"Program__table",children:Object(s.jsx)(r.a,{COLUMNS:d(S),DATA:v.programs})})]})}))},151:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return O})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return y})),n.d(t,"f",(function(){return C}));var a=n(8),o=n(18),r=n.n(o),c=n(37),i=n(20),s=function(e){return r()({method:"post",url:i.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:i.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:i.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},u=n(26),b=function(){return{type:a.f}},h=function(){return{type:a.d}},p=function(e,t){return{type:a.b,message:e,idMessage:t}},g=function(e,t){return{type:a.c,message:e,idMessage:t}},m=function(e,t,n,o,s,l){return function(d){d(b()),d({type:a.a}),Object(c.b)(o).then((function(a){console.log(typeof a);var o,c={cobrandEmail:e,programName:t,ProgramDescription:n,programthumnail:a,startDate:s};console.log(c),(o=c,r()({method:"post",url:i.a+"/cobrand/programAdd",data:o,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(g('Program "'+t+'" berhasil ditambahkan.')),d(h())})).catch((function(e){console.error("Error:",e),d(p('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(h())})),console.log(c)}))}},f=function(e,t,n,o,r,i,l){return function(d){if(d(b()),d({type:a.a}),console.log("Photo is empty:",""===r),""===r){var u={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:o,startDate:i}};console.log(u),s(u).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(g('Program "'+n+'" berhasil diubah.')),d(h())})).catch((function(e){console.error("Error:",e),d(p('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),d(h())}))}else{Object(c.b)(r).then((function(a){console.log(typeof a);var r={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:o,programthumnail:a,startDate:i}};console.log(r),s(r).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(g('Program "'+n+'" berhasil diubah.')),d(h())})).catch((function(e){console.error("Error:",e),d(p('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),d(h())}))}))}}},j=function(e,t,n){return function(o){o(b()),o({type:a.a});var c,s={whereValues:{cobrandEmail:e,_id:t[0]}};(c=s,r()({method:"post",url:i.a+"/cobrand/programRemove",data:c,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),o(g('Program "'+t[1]+'" berhasil dihapus.')),o(h()),n()})).catch((function(e){console.log(e),o(p('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),o(h()),n()}))}},O=function(e,t,n,o,r,i,s,d,u,m,f){return function(j){j(b()),j({type:a.a}),Object(c.b)(s).then((function(a){console.log(typeof a);var s=a,b=m?"active":"inactive";if("Video"===r)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(c.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(c.b)(d).then((function(a){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(c.a)(a)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var m={cobrandEmail:e,programId:t,contentName:n,contentDescription:o,contentType:r,contentSource:i,contentThumbnail:s,contents:d,status:b,startDate:u};console.log(m),l(m).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),j(g('Content "'+n+'" berhasil ditambahkan.')),j(h())})).catch((function(e){console.error("Error:",e),j(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(h())})),console.log(m)}));else if("Image"===r){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(c.b)(d).then((function(a){d='<img src="'+a+'" style="width:100%;"/>',console.log(d);var c={cobrandEmail:e,programId:t,contentName:n,contentDescription:o,contentType:r,contentSource:i,contentThumbnail:s,contents:d,status:b,startDate:u};console.log(c),l(c).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),j(g('Content "'+n+'" berhasil ditambahkan.')),j(h())})).catch((function(e){console.error("Error:",e),j(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(h())})),console.log(c)}))}else if("Pdf"===r){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(c.b)(d).then((function(a){var c={cobrandEmail:e,programId:t,contentName:n,contentDescription:o,contentType:r,contentSource:i,contentThumbnail:s,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:b,startDate:u};console.log(c),l(c).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),j(g('Content "'+n+'" berhasil ditambahkan.')),j(h())})).catch((function(e){console.error("Error:",e),j(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(h())})),console.log(c)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var O={cobrandEmail:e,programId:t,contentName:n,contentDescription:o,contentType:r,contentSource:i,contentThumbnail:s,contents:d,status:b,startDate:u};console.log(O),l(O).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),j(g('Content "'+n+'" berhasil ditambahkan.')),j(h())})).catch((function(e){console.error("Error:",e),j(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(h())})),console.log(O)}))}},v=function(e,t,n,o,r,i,s,l,u,m,f){return function(e){e(b()),e({type:a.a});if("Video"===i)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(c.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(c.b)(u).then((function(a){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(c.a)(a)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var l={cobrandEmail:t,programId:n,contentName:o,contentDescription:r,contentType:i,contentSource:s,contents:u,startDate:m};console.log(l),d(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(g('Content "'+o+'" berhasil ditambahkan.')),e(h())})).catch((function(t){console.error("Error:",t),e(p('Content "'+o+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(h())})),console.log(l)}));else if("Image"===i){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(c.b)(u).then((function(a){u='<img src="'+a+'" style="width:100%;"/>',console.log(u);var c={cobrandEmail:t,programId:n,contentName:o,contentDescription:r,contentType:i,contentSource:s,contents:u,startDate:m};console.log(c),d(c).then((function(t){console.log("Success:",t.data),f.push("/content"),e(g('Content "'+o+'" berhasil ditambahkan.')),e(h())})).catch((function(t){console.error("Error:",t),e(p('Content "'+o+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(h())})),console.log(c)}))}else if("Pdf"===i){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(c.b)(u).then((function(a){var c={cobrandEmail:t,programId:n,contentName:o,contentDescription:r,contentType:i,contentSource:s,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:m};console.log(c),d(c).then((function(t){console.log("Success:",t.data),f.push("/content"),e(g('Content "'+o+'" berhasil ditambahkan.')),e(h())})).catch((function(t){console.error("Error:",t),e(p('Content "'+o+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(h())})),console.log(c)}))}else if("Artikel"===i){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(c.b)(u).then((function(a){var c={cobrandEmail:t,programId:n,contentName:o,contentDescription:r,contentType:i,contentSource:s,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:m};console.log(c),d(c).then((function(t){console.log("Success:",t.data),f.push("/content"),e(g('Content "'+o+'" berhasil ditambahkan.')),e(h())})).catch((function(t){console.error("Error:",t),e(p('Content "'+o+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(h())})),console.log(c)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var l={cobrandEmail:t,programId:n,contentName:o,contentDescription:r,contentType:i,contentSource:s,contents:u,startDate:m};console.log(l),d(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(g('Content "'+o+'" berhasil ditambahkan.')),e(h())})).catch((function(t){console.error("Error:",t),e(p('Content "'+o+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(h())})),console.log(l)}},y=function(e,t,n){return function(o){o(b()),o({type:a.a});var c,s={whereValues:{cobrandEmail:e,_id:t[0]}};(c=s,r()({method:"post",url:i.a+"/cobrand/contentRemove",data:c,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),o(g('Content "'+t[1]+'" berhasil dihapus.')),o(h()),n()})).catch((function(e){console.log(e),o(p('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),o(h()),n()}))}},C=function(e,t,n,o,r,i,s){return function(l){l(b()),l({type:a.a});var d={email:e,password:t},m={};(n&&(m=Object.assign(m,{cobrandName:n})),r&&(m=Object.assign(m,{phoneNumber:r})),i&&(m=Object.assign(m,{address:i})),s&&(m=Object.assign(m,{password:s})),o)?Object(c.b)(o).then((function(e){m=Object.assign(m,{thumbnail:e}),console.log("whereValues: ",d),console.log("newValues: ",m),Object(u.a)(d,m).then((function(e){console.log("Success:",e.data),s&&(console.log("YOI BRUH"),d.password=s),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(g("Profil berhasil diubah.")),l(h())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(h())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(h())}))})):(console.log("whereValues: ",d),console.log("newValues: ",m),Object(u.a)(d,m).then((function(e){console.log("Success:",e.data),s&&(console.log("YOI BRUH"),d.password=s),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(g("Profil berhasil diubah.")),l(h())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(h())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(h())})))}}},155:function(e,t,n){"use strict";var a=n(5),o=n(2),r=n(121),c=n(135),i=(n(115),n(0));t.a=function(e){var t=e.DATA,n=e.COLUMNS,s=e.renderRowSubComponent,l=Object(o.useMemo)((function(){return t}),[t]),d=Object(r.useTable)({columns:n,data:l},r.useGlobalFilter,r.useSortBy,r.useExpanded,r.usePagination),u=d.getTableProps,b=d.getTableBodyProps,h=d.headerGroups,p=d.prepareRow,g=d.page,m=d.rows,f=d.canPreviousPage,j=d.canNextPage,O=d.pageOptions,v=d.pageCount,y=d.gotoPage,C=d.nextPage,w=d.previousPage,x=d.setPageSize,S=d.visibleColumns,D=d.state,N=D.pageIndex,P=D.pageSize,T=(D.expanded,d.state),E=d.setGlobalFilter,k=T.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"utils",children:[Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{onClick:function(){return y(0)},disabled:!f,children:"<<"}),Object(i.jsx)("button",{onClick:function(){return w()},disabled:!f,children:"<"}),Object(i.jsx)("button",{onClick:function(){return C()},disabled:!j,children:">"}),Object(i.jsx)("button",{onClick:function(){return y(v-1)},disabled:!j,children:">>"}),Object(i.jsxs)("span",{children:["Page "," ",Object(i.jsxs)("strong",{children:[N+1," of ",O.length]})]}),Object(i.jsxs)("span",{children:["| Go to page:",Object(i.jsx)("input",{type:"number",defaultValue:N+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;y(t)}})]}),Object(i.jsx)("select",{value:P,onChange:function(e){x(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(i.jsxs)("div",{className:"table_props",children:[Object(i.jsxs)("span",{children:["Total: ",m.length," Data"]}),Object(i.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:k||"",onChange:function(e){E(e.currentTarget.value)}})]})]}),Object(i.jsx)("div",{className:"table_container",children:Object(i.jsxs)("table",Object(a.a)(Object(a.a)({},u()),{},{children:[Object(i.jsx)("thead",{children:h.map((function(e){return Object(i.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(c.a,{}):Object(i.jsx)(c.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(a.a)(Object(a.a)({},b()),{},{children:g.map((function(e,t){return p(e),Object(i.jsxs)(o.Fragment,Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:[Object(i.jsx)("tr",{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}),e.isExpanded?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:S.length,children:s({row:e})})}):null]}))}))}))]}))})]})}},641:function(e,t,n){},644:function(e){e.exports=JSON.parse("{}")}}]);
//# sourceMappingURL=54.6fc33b6b.chunk.js.map