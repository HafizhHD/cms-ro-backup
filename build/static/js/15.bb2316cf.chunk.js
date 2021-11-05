(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[15],{101:function(e,t,o){"use strict";var a=o(4),n=o(2),r=o(125),c=o(111),i=(o(102),o(1));t.a=function(e){var t=e.DATA,o=e.COLUMNS,s=Object(n.useMemo)((function(){return t}),[t]),l=Object(r.useTable)({columns:o,data:s},r.useGlobalFilter,r.useSortBy),d=l.getTableProps,u=l.getTableBodyProps,p=l.headerGroups,b=l.rows,h=l.prepareRow,g=l.state,m=l.setGlobalFilter,f=g.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{type:"text",placeholder:"Search",className:"tableInput",value:f||"",onChange:function(e){m(e.currentTarget.value)}}),Object(i.jsxs)("table",Object(a.a)(Object(a.a)({},d()),{},{children:[Object(i.jsx)("thead",{children:p.map((function(e){return Object(i.jsx)("tr",Object(a.a)(Object(a.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(a.a)(Object(a.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(c.a,{}):Object(i.jsx)(c.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(a.a)(Object(a.a)({},u()),{},{children:b.map((function(e,t){return h(e),Object(i.jsx)("tr",Object(a.a)(Object(a.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(a.a)(Object(a.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}))}))}))]}))]})}},102:function(e,t,o){},272:function(e,t,o){},276:function(e){e.exports=JSON.parse("{}")},328:function(e,t,o){"use strict";o.r(t);var a=o(15),n=o(2),r=(o(272),o(101)),c=o(6),i=o(7),s=o(1),l={year:"numeric",month:"long",day:"numeric"},d=function(e){return[{Header:"Title",accessor:"programName"},{Header:"Start Date",accessor:"startDate",Cell:function(e){var t=e.cell;return Object(s.jsx)(s.Fragment,{children:new Date(t.row.values.startDate).toLocaleDateString("en-UK",l)})}},{Header:"Status",accessor:"status",Cell:function(e){var t=e.value;return Object(s.jsx)("p",{style:{color:"green",fontWeight:"bold"},children:t})}},{Header:"Action",accessor:"_id",disableSortBy:!0,disableFilters:!0,Cell:function(t){var o=t.cell;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.b,{to:"/program/view",className:"nav_btn",title:"View Detail",onClick:function(){localStorage.setItem("programSelected",o.row.values._id)},children:Object(s.jsx)("button",{className:"btn_action",children:Object(s.jsx)("div",{children:Object(s.jsx)(c.l,{className:"btn_action-icon"})})})}),Object(s.jsx)(i.b,{to:"/program/edit",className:"nav_btn",title:"Edit Program",onClick:function(){localStorage.setItem("programSelected",o.row.values._id)},children:Object(s.jsx)("button",{className:"btn_action",children:Object(s.jsx)("div",{children:Object(s.jsx)(c.k,{className:"btn_action-icon"})})})}),Object(s.jsx)(i.b,{to:"/program",className:"nav_btn",title:"Delete Program",onClick:function(){e(o.row.values._id)},replace:!0,children:Object(s.jsx)("button",{className:"btn_action",children:Object(s.jsx)("div",{children:Object(s.jsx)(c.t,{className:"btn_action-icon"})})})})]})}}]},u=(o(276),o(91)),p=o(22),b=o.n(p),h=o(80),g=o(16);t.default=Object(g.b)((function(e){return{isCurrentlyLoading:e.auth.isLoading}}),(function(e){return{onDeleteProgram:function(t,o,a){return e(Object(u.c)(t,o,a))}}}))((function(e){var t=e.isCurrentlyLoading,o=e.onDeleteProgram,l=Object(n.useState)(!1),u=Object(a.a)(l,2),p=(u[0],u[1],Object(n.useState)(!0)),g=Object(a.a)(p,2),m=g[0],f=g[1],j=Object(n.useState)(),O=Object(a.a)(j,2),y=O[0],v=O[1],w=Object(n.useState)(null),x=Object(a.a)(w,2),C=x[0],S=x[1],P=JSON.parse(localStorage.getItem("userData")),D={whereKeyValues:{cobrandEmail:P.email}};function N(){b()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:D,headers:{"Content-Type":"application/json"}}).then((function(e){v(e.data),console.log(e.data),f(!1)})).catch((function(e){console.log(e),f(!1)}))}return Object(n.useEffect)((function(){f(!0),localStorage.getItem("programDeleting")&&(S(localStorage.getItem("programDeleting")),localStorage.removeItem("programDeleting")),N()}),[]),Object(n.useEffect)((function(){C&&(f(!0),o(P.email,C,N))}),[C]),m||t?Object(s.jsx)(h.a,{}):Object(s.jsxs)("div",{className:"Program",children:[Object(s.jsx)("h1",{children:"PROGRAM"}),Object(s.jsxs)(i.b,{to:"/program/add",id:"add_program",children:[Object(s.jsx)(c.r,{className:"IconAdd"}),Object(s.jsx)("span",{children:"Create New Program"})]}),Object(s.jsx)("div",{className:"Program__table",children:Object(s.jsx)(r.a,{COLUMNS:d(S),DATA:y.programs})})]})}))},80:function(e,t,o){"use strict";o(2);var a=o(30),n=(o(81),o(1));t.a=function(e){var t=e.text,o=void 0===t?"Mohon Tunggu":t;return Object(n.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(n.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(n.jsx)("span",{children:"Keluarga HKBP"})," "]}),Object(n.jsx)(a.a,{}),Object(n.jsx)("p",{children:o})]})}},81:function(e,t,o){},91:function(e,t,o){"use strict";o.d(t,"b",(function(){return p})),o.d(t,"e",(function(){return b})),o.d(t,"c",(function(){return h})),o.d(t,"a",(function(){return g})),o.d(t,"d",(function(){return m}));var a=o(8),n=o(22),r=o.n(n),c=o(31);function i(e){var t="",o="";return e.includes("facebook.com/")?t="https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(e)+"&show_text=1&width=200":e.includes("vimeo.com/")?((o=void 0!==typeof e.split("vimeo.com/")[1]?e.split("vimeo.com/")[1]:null).includes("&")&&(o=o.split("&")[0]),t="https://player.vimeo.com/video/"+o):e.includes("youtube.com/")?((o=void 0!==typeof e.split("v=")[1]?e.split("v=")[1]:null).includes("&")&&(o=o.split("&")[0]),t="https://www.youtube.com/embed/"+o):e.includes("youtu.be/")?((o=void 0!==typeof e.split("youtu.be/")[1]?e.split("youtu.be/")[1]:null).includes("&")&&(o=o.split("&")[0]),t="https://www.youtube.com/embed/"+o):e.includes("dailymotion.com/")?((o=void 0!==typeof e.split("dailymotion.com/")[1]?e.split("dailymotion.com/")[1]:null).includes("&")&&(o=o.split("&")[0]),t="https://www.dailymotion.com/embed/"+o):t=e,t}var s=function(){return{type:a.f}},l=function(){return{type:a.d}},d=function(e,t){return{type:a.b,message:e,idMessage:t}},u=function(e,t){return{type:a.c,message:e,idMessage:t}},p=function(e,t,o,a,n,i){return function(p){p(s()),Object(c.a)(a).then((function(a){console.log(typeof a);var c={cobrandEmail:e,programName:t,ProgramDescription:o,programthumnail:a,startDate:n};console.log(c),r()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programAdd",data:c,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),i.push("/program"),p(u('Program "'+t+'" berhasil ditambahkan.')),p(l())})).catch((function(e){console.error("Error:",e),p(d('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),p(l())})),console.log(c)}))}},b=function(e,t,o,a,n,i,p){return function(b){if(b(s()),console.log("Photo is empty:",""===n),""===n){var h={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:o,ProgramDescription:a,startDate:i}};console.log(h),r()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programUpdate",data:h,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),p.push("/program"),b(u('Program "'+o+'" berhasil diubah.')),b(l())})).catch((function(e){console.error("Error:",e),b(d('Program "'+o+'" gagal diubah. Coba beberapa saat lagi.')),b(l())})),console.log(h)}else{Object(c.a)(n).then((function(n){console.log(typeof n);var c={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:o,ProgramDescription:a,programthumnail:n,startDate:i}};console.log(c),r()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programUpdate",data:c,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),p.push("/program"),b(u('Program "'+o+'" berhasil diubah.')),b(l())})).catch((function(e){console.error("Error:",e),b(d('Program "'+o+'" gagal diubah. Coba beberapa saat lagi.')),b(l())})),console.log(c)}))}}},h=function(e,t,o){return function(a){a(s());var n={whereValues:{cobrandEmail:e,_id:t}};r()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programRemove",data:n,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),a(u("Program berhasil dihapus. (Kode: "+t+")")),a(l()),o()})).catch((function(e){console.log(e),a(d("Program gagal dihapus. Coba beberapa saat lagi. (Kode: "+t+")")),a(l()),o()}))}},g=function(e,t,o,a,n,p,b,h,g,m,f){return function(j){j(s()),Object(c.a)(b).then((function(c){console.log(typeof c);var s=c,b=m?"active":"inactive";h="Video"===n?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+i(h)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===n?'<img src="'+h+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h+"</div></body></html>",console.log(h);var O={cobrandEmail:e,programId:t,contentName:o,contentDescription:a,contentType:n,contentSource:p,contentThumbnail:s,contents:h,status:b,startDate:g};console.log(O),r()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentAdd",data:O,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),f.push("/content"),j(u('Content "'+o+'" berhasil ditambahkan.')),j(l())})).catch((function(e){console.error("Error:",e),j(d('Content "'+o+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(l())})),console.log(O)}))}},m=function(e,t,o,a,n,p,b,h,g,m,f){return function(j){if(j(s()),console.log("Photo is empty:",""===h),""===h){g="Video"===p?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+i(g)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===p?'<img src="'+g+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+g+"</div></body></html>",console.log(g);var O={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:o,contentName:a,contentDescription:n,contentType:p,contentSource:b,contents:g,startDate:m}};console.log(O),r()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:O,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),f.push("/content"),j(u('Content "'+a+'" berhasil diubah.')),j(l())})).catch((function(e){console.error("Error:",e),j(d('Content "'+a+'" gagal diubah. Coba beberapa saat lagi.')),j(l())})),console.log(O)}else{Object(c.a)(h).then((function(c){console.log(typeof c);var i={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:o,contentName:a,contentDescription:n,contentType:p,contentSource:b,contents:g,startDate:m}};console.log(i),r()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),f.push("/content"),j(u('Content "'+a+'" berhasil diubah.')),j(l())})).catch((function(e){console.error("Error:",e),j(d('Content "'+a+'" gagal diubah. Coba beberapa saat lagi.')),j(l())})),console.log(i)}))}}}}}]);
//# sourceMappingURL=15.bb2316cf.chunk.js.map