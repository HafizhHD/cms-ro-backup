(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[46],{103:function(e,t,n){"use strict";n.d(t,"m",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"o",(function(){return s})),n.d(t,"n",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"i",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return h})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return f})),n.d(t,"l",(function(){return v})),n.d(t,"a",(function(){return O}));var a=n(18),r=n.n(a),i=n(20),o=function(e){return r()({method:"post",url:i.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return r()({method:"post",url:i.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return r()({method:"post",url:i.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:i.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:i.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:i.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:i.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:i.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:i.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:i.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:i.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:i.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return r()({method:"post",url:i.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},v=function(e){return r()({method:"post",url:i.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return r()({method:"post",url:i.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},112:function(e,t,n){},1197:function(e,t,n){},1198:function(e){e.exports=JSON.parse('[{"Nomor":"1","_id":"10","contentName":"7 Alasan Anak Harus Main di Luar Bukan Main Gadget!        ","contentType":"Artikel","topics":["Keluarga"],"targetAudiance":["Orang Tua"],"status":"Active"},{"Nomor":"2","_id":"9","contentName":"Solusi Ampuh Mendidik Anak Di Era Digital        ","contentType":"PDF","topics":["Pendidikan"],"targetAudiance":["Orang Tua"],"status":"Active"},{"Nomor":"3","_id":"8","contentName":"Parenting Dalam Islam        ","contentType":"PDF","topics":["Agama"],"targetAudiance":["Orang Tua"],"status":"Active"},{"Nomor":"4","_id":"7","contentName":"Parenting di era digital","contentType":"PDF","topics":["Informasi Teknologi"],"targetAudiance":["Orang Tua"],"status":"Active"},{"Nomor":"5","_id":"6","contentName":"Digital Parenting - Mendidik Anak di Era Digital        ","contentType":"PDF","topics":["Berita Internal"],"targetAudiance":["Orang Tua"],"status":"Active"},{"Nomor":"6","_id":"5","contentName":"DIGITAL PARENTING SEBAGAI WAHANA TERAPI UNTUK MENYEIMBANGKAN DUNIA DIGITAL DENGAN DUNIA NYATA BAGI ANAK","contentType":"PDF","topics":["Berita Nasional"],"targetAudiance":["Orang Tua"],"status":"Active"},{"Nomor":"7","_id":"4","contentName":"Psikologi Anak Usia Dini        ","contentType":"PDF","topics":["Kesehatan"],"targetAudiance":["Orang Tua"],"status":"Active"},{"Nomor":"8","_id":"3","contentName":"Tata cara sholat 5 waktu        ","contentType":"Image","topics":["Umum"],"targetAudiance":["Anak"],"status":"Inactive"},{"Nomor":"9","_id":"2","contentName":"Bacaan Doa, Niat, dan Tata Cara Sholat 5 Waktu yang Benar        ","contentType":"Artikel","topics":["Olah Raga"],"targetAudiance":["Anak"],"status":"Active"},{"Nomor":"10","_id":"1","contentName":"Introduction Aplikasi Ruang Ortu        ","contentType":"Video","topics":["Berita Dunia"],"targetAudiance":["Orang Tua"],"status":"Inactive"}]')},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return j})),n.d(t,"g",(function(){return b})),n.d(t,"f",(function(){return m}));var a=n(101),r=n(7),i=n(2),o=n.n(i),c=(n(122),n(164)),s=n(0);function l(e){var t=e.column,n=t.filterValue,a=t.preFilteredRows,r=t.setFilter;a.length;return Object(s.jsx)("input",{value:n||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,n=t.filterValue,r=t.setFilter,i=t.preFilteredRows,c=t.id,l=o.a.useMemo((function(){var e=new Set;return i.forEach((function(t){void 0===t.values[c]||e.has(t.values[c])||e.add(t.values[c])})),Object(a.a)(e.values())}),[c,i]);return Object(s.jsxs)("select",{value:n,onChange:function(e){r(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),l.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,n=t.filterValue,r=t.setFilter,i=t.preFilteredRows,c=t.id,l=o.a.useMemo((function(){var e=new Set;return i.forEach((function(t){if(console.log("ini row",t.values[c]),console.log("ini tipe row",t.values[c]instanceof Array),console.log("ini length row",t.values[c].length),t.values[c]instanceof Array&&t.values[c].length>0)for(var n=0;n<t.values[c].length;n++){var a=t.values[c][n];void 0===a||e.has(a)||e.add(a)}})),Object(a.a)(e.values())}),[c,i]);return Object(s.jsxs)("select",{value:n,onChange:function(e){r(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),l.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function p(e){var t=e.column,n=t.filterValue,a=void 0===n?[]:n,i=t.preFilteredRows,c=t.setFilter,l=t.id,u=o.a.useMemo((function(){var e=i.length?i[0].values[l]:0,t=i.length?i[0].values[l]:0;return i.forEach((function(n){e=Math.min(n.values[l],e),t=Math.max(n.values[l],t)})),[e,t]}),[l,i]),d=Object(r.a)(u,2),p=d[0],j=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:a[0]||"",type:"number",onChange:function(e){var t=e.target.value;c((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},min:p,placeholder:"Min (".concat(p,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(s.jsx)("input",{value:a[1]||"",type:"number",onChange:function(e){var t=e.target.value;c((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},min:p,placeholder:"Max (".concat(j,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function j(e){var t=e.column,n=t.filterValue,a=void 0===n?[]:n,i=t.preFilteredRows,c=t.setFilter,l=t.id,u=o.a.useMemo((function(){var e=new Date("2020-01-01"),t=new Date("2099-12-31");return i.forEach((function(n){e=n.values[l]&&new Date(n.values[l])<=e?new Date(n.values[l]):e,t=n.values[l]&&new Date(n.values[l])>=t?new Date(n.values[l]):t})),[e,t]}),[l,i]),d=Object(r.a)(u,2),p=d[0],j=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:a[0]||p.toISOString().slice(0,10),type:"date",min:p.toISOString().slice(0,10),max:a[1]||j.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;c((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(s.jsx)("input",{value:a[1]||j.toISOString().slice(0,10),type:"date",min:a[0]||p.toISOString().slice(0,10),max:j.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;c((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function b(e,t,n){return Object(c.a)(e,n,{keys:[function(e){return e.values[t]}]})}function m(e,t,n){var a=new Date(n[0]),r=new Date(n[1]);return e.filter((function(i){var o=new Date(i.values[t]);return 0===n.length?e:o>=a&&o<=r}))}b.autoRemove=function(e){return!e},m.autoRemove=function(e){return!e}},129:function(e,t,n){"use strict";var a=n(101),r=n(5),i=n(34),o=n(2),c=n.n(o),s=n(9),l=n(122),u=n(135),d=(n(112),n(121)),p=n(165),j=n(157),b=(n(166),n(90)),m=n(0);t.a=function(e){var t=e.DATA,n=e.COLUMNS,h=e.renderRowSubComponent,g=e.showCheckbox,f=void 0!==g&&g,v=e.notifContext,O=void 0===v?"":v,x=c.a.useMemo((function(){return{fuzzyText:d.g,dateBetween:d.f,text:function(e,t,n){return e.filter((function(e){var a=e.values[t];return void 0===a||String(a).toLowerCase().startsWith(String(n).toLowerCase())}))}}}),[]),N=c.a.useMemo((function(){return{Filter:d.b}}),[]),A=c.a.forwardRef((function(e,t){var n=e.indeterminate,a=Object(i.a)(e,["indeterminate"]),o=c.a.useRef(),s=t||o;return c.a.useEffect((function(){s.current.indeterminate=n}),[s,n]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("input",Object(r.a)({type:"checkbox",ref:s},a))})})),S=Object(o.useMemo)((function(){return t}),[t]),y=Object(l.useTable)({columns:n,data:S,defaultColumn:N,filterTypes:x,initialState:{hiddenColumns:["emailUser","parentEmail","_id"]}},l.useFilters,l.useGlobalFilter,l.useSortBy,l.useExpanded,l.usePagination,l.useRowSelect,(function(e){f&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(m.jsx)("div",{children:Object(m.jsx)(A,Object(r.a)({},t()))})},Cell:function(e){var t=e.row;return Object(m.jsx)("div",{children:Object(m.jsx)(A,Object(r.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(a.a)(e))}))})),T=y.getTableProps,C=y.getTableBodyProps,w=y.headerGroups,_=y.prepareRow,F=y.page,D=y.rows,I=y.canPreviousPage,k=y.canNextPage,P=y.pageOptions,E=y.pageCount,R=y.gotoPage,M=y.nextPage,U=y.previousPage,H=y.setPageSize,G=y.visibleColumns,B=y.selectedFlatRows,V=(y.state.selectedRowIds,y.state),L=V.pageIndex,J=V.pageSize,K=(V.expanded,y.state),z=y.setGlobalFilter,W=K.globalFilter,Y=function(){for(var e=D,t=[],n=0;n<e.length;n++){var a={};_(e[n]);for(var r=0;r<e[n].cells.length;r++)"rowNumber"!==e[n].cells[r].column.id&&"selection"!==e[n].cells[r].column.id&&"buttonStatus"!==e[n].cells[r].column.id&&(e[n].cells[r].value&&"[object Date]"===Object.prototype.toString.call(e[n].cells[r].value)&&!isNaN(e[n].cells[r].value)?a[e[n].cells[r].column.Header]=e[n].cells[r].value.toISOString().split("T")[0]:a[e[n].cells[r].column.Header]=e[n].cells[r].value);t.push(a)}return t};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"tools",children:[Object(m.jsxs)("div",{className:"table_props",children:[Object(m.jsxs)("span",{children:["Total: ",D.length," Data"]}),Object(m.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:W||"",onChange:function(e){z(e.currentTarget.value)}})]}),Object(m.jsxs)("button",{className:"btn_tools",children:[Object(m.jsx)(b.c,{})," ",Object(m.jsx)(p.CSVLink,{data:Y(),children:"Download as CSV"})]}),Object(m.jsxs)("button",{className:"btn_tools",onClick:function(){var e=Y();if(e.length>0){var t=new j.default("landscape","pt","A4");t.setFontSize(15);var n={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(n),t.save("report.pdf")}},children:[Object(m.jsx)(b.b,{})," Download as PDF"]}),f?B.length>0?Object(m.jsxs)("button",{className:"btn_tools",children:[Object(m.jsx)(b.a,{}),Object(m.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O);for(var e=[],t=[],n=0;n<B.length;n++)e.push(B[n].original.emailUser),"child"===B[n].original.userType&&(e.includes(B[n].original.emailUser)||e.push(B[n].original.emailUser)),t.push(B[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(m.jsxs)("button",{className:"btn_tools_disabled",children:[Object(m.jsx)(b.a,{}),Object(m.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,f?B.length>0?Object(m.jsxs)("button",{className:"btn_tools",children:[Object(m.jsx)(b.a,{}),Object(m.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O);for(var e=[],t=[],n=0;n<B.length;n++)void 0!==B[n].original.parentEmail&&(e.some((function(e){return B[n].original.parentEmail.includes(e)}))||("child"===B[n].original.userType?e.push.apply(e,Object(a.a)(B[n].original.parentEmail)):e.push(B[n].original.emailUser))),t.push(B[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(m.jsxs)("button",{className:"btn_tools_disabled",children:[Object(m.jsx)(b.a,{}),Object(m.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,f?B.length>0?Object(m.jsxs)("button",{className:"btn_tools",children:[Object(m.jsx)(b.a,{}),Object(m.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O);for(var e=[],t=[],n=0;n<B.length;n++)e.includes(B[n].original.emailUser)||e.push(B[n].original.emailUser),void 0!==B[n].original.parentEmail&&(e.some((function(e){return B[n].original.parentEmail.includes(e)}))||e.push(B[n].original.parentEmail)),t.push(B[n].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(m.jsxs)("button",{className:"btn_tools_disabled",children:[Object(m.jsx)(b.a,{}),Object(m.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(m.jsx)("div",{className:"utils",children:Object(m.jsxs)("div",{className:"pagination",children:[Object(m.jsx)("button",{onClick:function(){return R(0)},disabled:!I,children:"<<"}),Object(m.jsx)("button",{onClick:function(){return U()},disabled:!I,children:"<"}),Object(m.jsx)("button",{onClick:function(){return M()},disabled:!k,children:">"}),Object(m.jsx)("button",{onClick:function(){return R(E-1)},disabled:!k,children:">>"}),Object(m.jsxs)("span",{children:["Page "," ",Object(m.jsxs)("strong",{children:[L+1," of ",P.length]})]}),Object(m.jsxs)("span",{children:["| Go to page:",Object(m.jsx)("input",{type:"number",defaultValue:L+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;R(t)}})]}),Object(m.jsx)("select",{value:J,onChange:function(e){H(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(m.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(m.jsx)("div",{className:"table_container",children:Object(m.jsxs)("table",Object(r.a)(Object(r.a)({},T()),{},{children:[Object(m.jsx)("thead",{children:w.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(m.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(m.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(m.jsx)(u.a,{}):Object(m.jsx)(u.b,{}):""})]}))}))})),Object(m.jsx)("tr",{children:e.headers.map((function(e){return Object(m.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(m.jsx)("tbody",Object(r.a)(Object(r.a)({},C()),{},{children:F.map((function(e,t){return _(e),Object(m.jsxs)(o.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(m.jsx)("tr",{children:e.cells.map((function(e){return Object(m.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{className:(e.value&&!Array.isArray(e.value)||Array.isArray(e.value)&&e.value.length>0||"selection"===e.column.id||e.column.id,"cell"),children:[" ","rowNumber"!==e.column.id?e.render("Cell"):t+1+L*J," "]}))}))}),e.isExpanded?Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:G.length,children:h({row:e})})}):null]}))}))}))]}))})]})}},1467:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(2),i=n(129),o=n(121),c=n(0),s=[{Header:"No.",id:"rowNumber",disableFilters:!0},{Header:"Nama Artikel",accessor:"contentName",disableFilters:!0},{Header:"Jenis Artikel",accessor:"contentType",Filter:o.e,filter:"equals"},{Header:"Topik Artikel",accessor:"topics",Filter:o.d,filter:"arrIncludes",Cell:function(e){var t=e.value,n=e.row;return void 0!==t?Object(c.jsx)("p",{children:t.join(", ")}):n.index%3===1?Object(c.jsx)("p",{children:"Pendidikan"}):Object(c.jsx)("p",{children:"Agama"})}},{Header:"Target Pembaca",accessor:"targetAudiance",Filter:o.d,filter:"arrIncludes",Cell:function(e){var t=e.value;e.row;return void 0!==t?Object(c.jsx)("p",{children:t.join(", ")}):Object(c.jsx)("p",{children:"Semua"})}},{Header:"Jumlah View",accessor:"totalView"},{Header:"Jumlah Like",accessor:"respons.like"},{Header:"Status",accessor:"status",Filter:o.e,filter:"equals"}],l=n(94),u=n(36),d=(n(1197),n(1198)),p=n(103);n(173),t.default=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=t[1],j=Object(r.useState)(),b=Object(a.a)(j,2),m=b[0],h=b[1],g=Object(r.useState)("real"),f=Object(a.a)(g,2),v=f[0],O=f[1],x=JSON.parse(localStorage.getItem("userData"));return Object(r.useEffect)((function(){if("dummy"===v)h(d),o(!1);else{var e={whereKeyValues:{cobrandEmail:x.cobrandEmail,programId:"",status:{$in:["active","inactive"]}},orderKeyValues:{dateCreated:-1},includeContentData:!1,limit:Number.MAX_SAFE_INTEGER};Object(p.f)(e).then((function(e){h(e.data.contents),o(!1)})).catch((function(e){o(!1)}))}}),[,v]),n?Object(c.jsx)(u.a,{}):Object(c.jsxs)("div",{className:"Artikel",children:[Object(c.jsx)(l.a,{headingName:"Report Artikel",routes:[{name:"Report"},{name:"Report Artikel",path:"/report/content"}]}),Object(c.jsxs)("div",{className:"Dashboard_period",children:[Object(c.jsx)("button",{className:"real"===v?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==v&&(o(!0),O("real"))},children:"Prod"}),Object(c.jsx)("button",{className:"dummy"===v?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==v&&(o(!0),O("dummy"))},children:"Dummy"})]}),Object(c.jsx)("div",{className:"Artikel_table",children:Object(c.jsx)(i.a,{COLUMNS:s,DATA:m})})]})}},94:function(e,t,n){"use strict";n(2);var a=n(9),r=(n(95),n(0));t.a=function(e){var t=e.headingName,n=e.routes,i=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:i.length>0&&i.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},95:function(e,t,n){}}]);
//# sourceMappingURL=46.cd0af37b.chunk.js.map