(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[40],{103:function(e,t,n){"use strict";n.d(t,"m",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"o",(function(){return c})),n.d(t,"n",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"i",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"k",(function(){return g})),n.d(t,"j",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"g",(function(){return f})),n.d(t,"l",(function(){return v})),n.d(t,"a",(function(){return O}));var a=n(18),o=n.n(a),r=n(20),i=function(e){return o()({method:"post",url:r.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:r.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return o()({method:"post",url:r.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return o()({method:"post",url:r.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:r.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return o()({method:"post",url:r.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return o()({method:"post",url:r.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return o()({method:"post",url:r.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return o()({method:"post",url:r.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return o()({method:"post",url:r.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return o()({method:"post",url:r.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return o()({method:"post",url:r.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return o()({method:"post",url:r.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},v=function(e){return o()({method:"post",url:r.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return o()({method:"post",url:r.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},112:function(e,t,n){},1165:function(e,t,n){},1166:function(e){e.exports=JSON.parse('[{"Nomor":"1","_id":"10","contentName":"7 Alasan Anak Harus Main di Luar Bukan Main Gadget!        ","contentType":"Artikel","topics":"Keluarga","targetAudiance":"Orang Tua","status":"Active"},{"Nomor":"2","_id":"9","contentName":"Solusi Ampuh Mendidik Anak Di Era Digital        ","contentType":"PDF","topics":"Pendidikan","targetAudiance":"Orang Tua","status":"Active"},{"Nomor":"3","_id":"8","contentName":"Parenting Dalam Islam        ","contentType":"PDF","topics":"Agama","targetAudiance":"Orang Tua","status":"Active"},{"Nomor":"4","_id":"7","contentName":"Parenting di era digital","contentType":"PDF","topics":"Informasi Teknologi","targetAudiance":"Orang Tua","status":"Active"},{"Nomor":"5","_id":"6","contentName":"Digital Parenting - Mendidik Anak di Era Digital        ","contentType":"PDF","topics":"Berita Internal","targetAudiance":"Orang Tua","status":"Active"},{"Nomor":"6","_id":"5","contentName":"DIGITAL PARENTING SEBAGAI WAHANA TERAPI UNTUK MENYEIMBANGKAN DUNIA DIGITAL DENGAN DUNIA NYATA BAGI ANAK","contentType":"PDF","topics":"Berita Nasional","targetAudiance":"Orang Tua","status":"Active"},{"Nomor":"7","_id":"4","contentName":"Psikologi Anak Usia Dini        ","contentType":"PDF","topics":"Kesehatan","targetAudiance":"Orang Tua","status":"Active"},{"Nomor":"8","_id":"3","contentName":"Tata cara sholat 5 waktu        ","contentType":"Image","topics":"Umum","targetAudiance":"Anak","status":"Inactive"},{"Nomor":"9","_id":"2","contentName":"Bacaan Doa, Niat, dan Tata Cara Sholat 5 Waktu yang Benar        ","contentType":"Artikel","topics":"Olah Raga","targetAudiance":"Anak","status":"Active"},{"Nomor":"10","_id":"1","contentName":"Introduction Aplikasi Ruang Ortu        ","contentType":"Video","topics":"Berita Dunia","targetAudiance":"Orang Tua","status":"Inactive"}]')},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return b}));var a=n(101),o=n(9),r=n(2),i=n.n(r),l=(n(122),n(161)),c=n(0);function s(e){var t=e.column,n=t.filterValue,a=t.preFilteredRows,o=t.setFilter;a.length;return Object(c.jsx)("input",{value:n||"",onChange:function(e){o(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,n=t.filterValue,o=t.setFilter,r=t.preFilteredRows,l=t.id,s=i.a.useMemo((function(){var e=new Set;return r.forEach((function(t){void 0===t.values[l]||e.has(t.values[l])||e.add(t.values[l])})),Object(a.a)(e.values())}),[l,r]);return Object(c.jsxs)("select",{value:n,onChange:function(e){o(e.target.value||void 0)},children:[Object(c.jsx)("option",{value:"",children:"All"}),s.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,n=t.filterValue,a=void 0===n?[]:n,r=t.preFilteredRows,l=t.setFilter,s=t.id,u=i.a.useMemo((function(){var e=r.length?r[0].values[s]:0,t=r.length?r[0].values[s]:0;return r.forEach((function(n){e=Math.min(n.values[s],e),t=Math.max(n.values[s],t)})),[e,t]}),[s,r]),d=Object(o.a)(u,2),p=d[0],j=d[1];return Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("input",{value:a[0]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},min:p,placeholder:"Min (".concat(p,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(c.jsx)("input",{value:a[1]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},min:p,placeholder:"Max (".concat(j,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function p(e){var t=e.column,n=t.filterValue,a=void 0===n?[]:n,r=t.preFilteredRows,l=t.setFilter,s=t.id,u=i.a.useMemo((function(){var e=new Date("2020-01-01"),t=new Date("2099-12-31");return r.forEach((function(n){e=n.values[s]&&new Date(n.values[s])<=e?new Date(n.values[s]):e,t=n.values[s]&&new Date(n.values[s])>=t?new Date(n.values[s]):t})),[e,t]}),[s,r]),d=Object(o.a)(u,2),p=d[0],j=d[1];return console.log(p,j),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("input",{value:a[0]||p.toISOString().slice(0,10),type:"date",min:p.toISOString().slice(0,10),max:a[1]||j.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;console.log(e.target.value),l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(c.jsx)("input",{value:a[1]||j.toISOString().slice(0,10),type:"date",min:a[0]||p.toISOString().slice(0,10),max:j.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function j(e,t,n){return Object(l.a)(e,n,{keys:[function(e){return e.values[t]}]})}function b(e,t,n){var a=new Date(n[0]),o=new Date(n[1]);return console.log(e,t,n),e.filter((function(r){var i=new Date(r.values[t]);return console.log(i,o,a),0===n.length?e:i>=a&&i<=o}))}j.autoRemove=function(e){return!e},b.autoRemove=function(e){return!e}},128:function(e,t,n){"use strict";var a=n(101),o=n(5),r=n(34),i=n(2),l=n.n(i),c=n(7),s=n(122),u=n(134),d=(n(112),n(121)),p=n(162),j=n(154),b=(n(163),n(90)),g=n(0);t.a=function(e){var t=e.DATA,n=e.COLUMNS,m=e.renderRowSubComponent,h=e.showCheckbox,f=void 0!==h&&h,v=e.notifContext,O=void 0===v?"":v,x=l.a.useMemo((function(){return{fuzzyText:d.f,dateBetween:d.e,text:function(e,t,n){return e.filter((function(e){var a=e.values[t];return void 0===a||String(a).toLowerCase().startsWith(String(n).toLowerCase())}))}}}),[]),N=l.a.useMemo((function(){return{Filter:d.b}}),[]),S=l.a.forwardRef((function(e,t){var n=e.indeterminate,a=Object(r.a)(e,["indeterminate"]),i=l.a.useRef(),c=t||i;return l.a.useEffect((function(){c.current.indeterminate=n}),[c,n]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("input",Object(o.a)({type:"checkbox",ref:c},a))})})),y=Object(i.useMemo)((function(){return t}),[t]),A=Object(s.useTable)({columns:n,data:y,defaultColumn:N,filterTypes:x,initialState:{hiddenColumns:["emailUser","parentEmail","_id"]}},s.useFilters,s.useGlobalFilter,s.useSortBy,s.useExpanded,s.usePagination,s.useRowSelect,(function(e){f&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(g.jsx)("div",{children:Object(g.jsx)(S,Object(o.a)({},t()))})},Cell:function(e){var t=e.row;return Object(g.jsx)("div",{children:Object(g.jsx)(S,Object(o.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(a.a)(e))}))})),T=A.getTableProps,C=A.getTableBodyProps,I=A.headerGroups,_=A.prepareRow,w=A.page,D=A.rows,F=A.canPreviousPage,k=A.canNextPage,P=A.pageOptions,E=A.pageCount,R=A.gotoPage,U=A.nextPage,H=A.previousPage,M=A.setPageSize,G=A.visibleColumns,B=A.selectedFlatRows,L=(A.state.selectedRowIds,A.state),V=L.pageIndex,J=L.pageSize,K=(L.expanded,A.state),z=A.setGlobalFilter,q=K.globalFilter,W=function(){var e=D;console.log(e);for(var t=[],n=0;n<e.length;n++){var a={};_(e[n]),console.log(e[n].cells);for(var o=0;o<e[n].cells.length;o++)"rowNumber"!==e[n].cells[o].column.id&&"selection"!==e[n].cells[o].column.id&&"buttonStatus"!==e[n].cells[o].column.id&&(e[n].cells[o].value&&"[object Date]"===Object.prototype.toString.call(e[n].cells[o].value)&&!isNaN(e[n].cells[o].value)?a[e[n].cells[o].column.Header]=e[n].cells[o].value.toISOString().split("T")[0]:a[e[n].cells[o].column.Header]=e[n].cells[o].value);t.push(a)}return t};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"tools",children:[Object(g.jsxs)("div",{className:"table_props",children:[Object(g.jsxs)("span",{children:["Total: ",D.length," Data"]}),Object(g.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:q||"",onChange:function(e){z(e.currentTarget.value)}})]}),Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(b.c,{})," ",Object(g.jsx)(p.CSVLink,{data:W(),children:"Download as CSV"})]}),Object(g.jsxs)("button",{className:"btn_tools",onClick:function(){var e=W();if(e.length>0){var t=new j.default("landscape","pt","A4");t.setFontSize(15);var n={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(n),t.save("report.pdf")}},children:[Object(g.jsx)(b.b,{})," Download as PDF"]}),f?B.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(b.a,{}),Object(g.jsx)(c.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O),console.log(localStorage.getItem("notifContext"));var e=[];console.log(B);for(var t=[],n=0;n<B.length;n++)e.push(B[n].original.emailUser),"child"===B[n].original.userType&&(e.includes(B[n].original.emailUser)||e.push(B[n].original.emailUser)),console.log(e),t.push(B[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(b.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,f?B.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(b.a,{}),Object(g.jsx)(c.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O),console.log(localStorage.getItem("notifContext"));var e=[];console.log(B);for(var t=[],n=0;n<B.length;n++)void 0!==B[n].original.parentEmail&&(e.some((function(e){return B[n].original.parentEmail.includes(e)}))||("child"===B[n].original.userType?e.push.apply(e,Object(a.a)(B[n].original.parentEmail)):e.push(B[n].original.emailUser))),console.log(e),t.push(B[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(b.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,f?B.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(b.a,{}),Object(g.jsx)(c.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O),console.log(localStorage.getItem("notifContext"));var e=[];console.log(B);for(var t=[],n=0;n<B.length;n++)e.includes(B[n].original.emailUser)||e.push(B[n].original.emailUser),void 0!==B[n].original.parentEmail&&(e.some((function(e){return B[n].original.parentEmail.includes(e)}))||e.push(B[n].original.parentEmail)),console.log(e),t.push(B[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(b.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(g.jsx)("div",{className:"utils",children:Object(g.jsxs)("div",{className:"pagination",children:[Object(g.jsx)("button",{onClick:function(){return R(0)},disabled:!F,children:"<<"}),Object(g.jsx)("button",{onClick:function(){return H()},disabled:!F,children:"<"}),Object(g.jsx)("button",{onClick:function(){return U()},disabled:!k,children:">"}),Object(g.jsx)("button",{onClick:function(){return R(E-1)},disabled:!k,children:">>"}),Object(g.jsxs)("span",{children:["Page "," ",Object(g.jsxs)("strong",{children:[V+1," of ",P.length]})]}),Object(g.jsxs)("span",{children:["| Go to page:",Object(g.jsx)("input",{type:"number",defaultValue:V+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;R(t)}})]}),Object(g.jsx)("select",{value:J,onChange:function(e){M(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(g.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(g.jsx)("div",{className:"table_container",children:Object(g.jsxs)("table",Object(o.a)(Object(o.a)({},T()),{},{children:[Object(g.jsx)("thead",{children:I.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(g.jsxs)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(g.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(g.jsx)(u.a,{}):Object(g.jsx)(u.b,{}):""})]}))}))})),Object(g.jsx)("tr",{children:e.headers.map((function(e){return Object(g.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(g.jsx)("tbody",Object(o.a)(Object(o.a)({},C()),{},{children:w.map((function(e,t){return _(e),Object(g.jsxs)(i.Fragment,Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:[Object(g.jsx)("tr",{children:e.cells.map((function(e){return console.log(e),Object(g.jsxs)("td",Object(o.a)(Object(o.a)({},e.getCellProps()),{},{className:(e.value&&!Array.isArray(e.value)||Array.isArray(e.value)&&e.value.length>0||"selection"===e.column.id||e.column.id,"cell"),children:[" ","rowNumber"!==e.column.id?e.render("Cell"):t+1+V*J," "]}))}))}),e.isExpanded?Object(g.jsx)("tr",{children:Object(g.jsx)("td",{colSpan:G.length,children:m({row:e})})}):null]}))}))}))]}))})]})}},1432:function(e,t,n){"use strict";n.r(t);var a=n(9),o=n(2),r=n(128),i=n(121),l=n(0),c=[{Header:"No.",id:"rowNumber",disableFilters:!0},{Header:"Nama Artikel",accessor:"contentName",disableFilters:!0},{Header:"Jenis Artikel",accessor:"contentType",Filter:i.d,filter:"equals"},{Header:"Topik Artikel",accessor:"topics",Filter:i.d,filter:"equals",Cell:function(e){var t=e.value,n=e.row;return void 0!==t?Object(l.jsx)("p",{children:t}):n.index%3===1?Object(l.jsx)("p",{children:"Pendidikan"}):Object(l.jsx)("p",{children:"Agama"})}},{Header:"Target Pembaca",accessor:"targetAudiance",Filter:i.d,filter:"equals",Cell:function(e){var t=e.value;e.row;return void 0!==t?Object(l.jsx)("p",{children:t}):Object(l.jsx)("p",{children:"Semua"})}},{Header:"Jumlah View",accessor:"totalView"},{Header:"Jumlah Like",accessor:"respons.like"},{Header:"Status",accessor:"status",Filter:i.d,filter:"equals"}],s=n(94),u=n(36),d=(n(1165),n(1166)),p=n(103);n(170),t.default=function(){var e=Object(o.useState)(!0),t=Object(a.a)(e,2),n=t[0],i=t[1],j=Object(o.useState)(),b=Object(a.a)(j,2),g=b[0],m=b[1],h=Object(o.useState)("real"),f=Object(a.a)(h,2),v=f[0],O=f[1],x=JSON.parse(localStorage.getItem("userData"));return Object(o.useEffect)((function(){if("dummy"===v)m(d),i(!1);else{var e={whereKeyValues:{cobrandEmail:x.cobrandEmail,programId:{$in:["-1"]},status:{$in:["active","inactive"]}},orderKeyValues:{contentName:1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER};console.log(e),Object(p.f)(e).then((function(e){console.log(e.data),m(e.data.contents),i(!1)})).catch((function(e){console.log(e),i(!1)}))}}),[,v]),n?Object(l.jsx)(u.a,{}):Object(l.jsxs)("div",{className:"Artikel",children:[Object(l.jsx)(s.a,{headingName:"Report Artikel",routes:[{name:"Report"},{name:"Report Artikel",path:"/report/content"}]}),Object(l.jsxs)("div",{className:"Dashboard_period",children:[Object(l.jsx)("button",{className:"real"===v?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==v&&(i(!0),O("real"))},children:"Prod"}),Object(l.jsx)("button",{className:"dummy"===v?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==v&&(i(!0),O("dummy"))},children:"Dummy"})]}),Object(l.jsx)("div",{className:"Artikel_table",children:Object(l.jsx)(r.a,{COLUMNS:c,DATA:g})})]})}},94:function(e,t,n){"use strict";n(2);var a=n(7),o=(n(95),n(0));t.a=function(e){var t=e.headingName,n=e.routes,r=void 0===n?[]:n;return Object(o.jsxs)("div",{className:"Heading",children:[Object(o.jsx)("h1",{children:t}),Object(o.jsx)("ul",{className:"Heading__breadcumb",children:r.length>0&&r.map((function(e,t){return e.path?Object(o.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(o.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(o.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(o.jsx)("span",{children:e.name})," "]},t)}))})]})}},95:function(e,t,n){}}]);
//# sourceMappingURL=40.3b3d5e4c.chunk.js.map