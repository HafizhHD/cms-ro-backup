(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[44],{109:function(e,a,t){"use strict";t(2);var n=t(7),r=(t(111),t(0));a.a=function(e){var a=e.headingName,t=e.routes,o=void 0===t?[]:t;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:a}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,a){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},a):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},a)}))})]})}},111:function(e,a,t){},1154:function(e,a,t){},1155:function(e){e.exports=JSON.parse('[{"Nomor":"1","_id":"JSOFHOSOE","programName":"Membaca Jilid 1 - 3","programType":"Agama","category":"Pendidikan Agama","target":"SD"},{"Nomor":"2","_id":"SHAISJFKCH","programName":"Membaca Jilid 4-6","programType":"Agama","category":"Pendidikan Agama","target":"SD"},{"Nomor":"3","_id":"ISOWPEORLD","programName":"Membaca Ghorib","programType":"Agama","category":"Pendidikan Agama","target":"SMP"},{"Nomor":"4","_id":"JSKDJCNVBY","programName":"Membaca Tajwid","programType":"Agama","category":"Pendidikan Agama","target":"SMP"},{"Nomor":"5","_id":"UEIEKKLNMY","programName":"Membaca Juz 30","programType":"Agama","category":"Pendidikan Agama","target":"SD, SMP, SMA"},{"Nomor":"6","_id":"SHDJFUCHCB","programName":"Menghafal Ghorib","programType":"Agama","category":"Pendidikan Agama","target":"SMP"},{"Nomor":"7","_id":"QPWOKMJSSB","programName":"Menghadal Tajwid","programType":"Agama","category":"Pendidikan Agama","target":"SMP, SMA"},{"Nomor":"8","_id":"AZHYUJISDH","programName":"Menghafal Juz 30","programType":"Agama","category":"Pendidikan Agama","target":"SMP, SMA"},{"Nomor":"9","_id":"AKIJUDOLKP","programName":"Menghafal Al-Baqarah","programType":"Agama","category":"Pendidikan Agama","target":"SMA"},{"Nomor":"10","_id":"SJEHUYHJBN","programName":"Membaca juz 27","programType":"Agama","category":"Pendidikan Agama","target":"SD, SMP, SMA"},{"Nomor":"11","_id":"JSMDJKNLKJ","programName":"Menghafal Surat Al Waqiah","programType":"Agama","category":"Pendidikan Agama","target":"SMA"},{"Nomor":"12","_id":"OIOLKJMYHU","programName":"Menghafal Arti Al Fatihah dan Juz 30 ","programType":"Agama","category":"Pendidikan Agama","target":"SMA"},{"Nomor":"13","_id":"WEYSHDGFJR","programName":"Menghafal arti Al- Baqarah Juz 1","programType":"Agama","category":"Pendidikan Agama","target":"SMA"},{"Nomor":"14","_id":"ASHDBCGFNY","programName":"Hidup Sehat ala Rasulullah","programType":"Kesehatan, Agama","category":"Pendidikan Agama","target":"Semua"},{"Nomor":"15","_id":"IELZMSJDHH","programName":"Spesial Ramadhan","programType":"Agama","category":"Pendidikan Agama","target":"Semua Anak"},{"Nomor":"16","_id":"YAYAHSHSJK","programName":"HUT Indonesia Raya ","programType":"Pendidikan, Berita Nasional","category":"Pendidikan Siswa Umum","target":"Semua Anak"},{"Nomor":"17","_id":"USJKMNHJJJ","programName":"Ajak anak berolahraga pagi bersama ASIA","programType":"Kesehatan, Keluarga, Olahraga","category":"Program Pilihan","target":"Orangtua"},{"Nomor":"18","_id":"YEHUDYFHRG","programName":"Belajar Bahasa Inggris mulai dari 0 bersama pakarnya","programType":"Pendidikan","category":"Program Pilihan","target":"SMA"},{"Nomor":"19","_id":"BVBGGVDJSH","programName":"Belajar Coding dari 0 bersama pakarnya","programType":"Pendidikan, Informasi Teknologi","category":"Informasi & Teknologi","target":"SMP, SMA"},{"Nomor":"20","_id":"YYYYSSHDJN","programName":"Cara mendidik anak ala dra. Riansyah Ponzi","programType":"Pendidikan, Keluarga","category":"Program Pilihan","target":"Orang Tua"}]')},116:function(e,a,t){},119:function(e,a,t){"use strict";t.d(a,"h",(function(){return i})),t.d(a,"d",(function(){return l})),t.d(a,"j",(function(){return c})),t.d(a,"i",(function(){return s})),t.d(a,"c",(function(){return u})),t.d(a,"e",(function(){return d})),t.d(a,"b",(function(){return g})),t.d(a,"f",(function(){return m})),t.d(a,"a",(function(){return p})),t.d(a,"g",(function(){return j}));var n=t(18),r=t.n(n),o=t(20),i=function(e){return r()({method:"post",url:o.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:o.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return r()({method:"post",url:o.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return r()({method:"post",url:o.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:o.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:o.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:o.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:o.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:o.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:o.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})}},120:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"d",(function(){return u})),t.d(a,"c",(function(){return d})),t.d(a,"a",(function(){return g})),t.d(a,"f",(function(){return m})),t.d(a,"e",(function(){return p}));var n=t(106),r=t(10),o=t(2),i=t.n(o),l=(t(122),t(172)),c=t(0);function s(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter;n.length;return Object(c.jsx)("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var a=e.column,t=a.filterValue,r=a.setFilter,o=a.preFilteredRows,l=a.id,s=i.a.useMemo((function(){var e=new Set;return o.forEach((function(a){void 0!==a.values[l]&&e.add(a.values[l])})),Object(n.a)(e.values())}),[l,o]);return Object(c.jsxs)("select",{value:t,onChange:function(e){r(e.target.value||void 0)},children:[Object(c.jsx)("option",{value:"",children:"All"}),s.map((function(e,a){return Object(c.jsx)("option",{value:e,children:e},a)}))]})}function d(e){var a=e.column,t=a.filterValue,n=void 0===t?[]:t,o=a.preFilteredRows,l=a.setFilter,s=a.id,u=i.a.useMemo((function(){var e=o.length?o[0].values[s]:0,a=o.length?o[0].values[s]:0;return o.forEach((function(t){e=Math.min(t.values[s],e),a=Math.max(t.values[s],a)})),[e,a]}),[s,o]),d=Object(r.a)(u,2),g=d[0],m=d[1];return Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("input",{value:n[0]||"",type:"number",onChange:function(e){var a=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[a?parseInt(a,10):void 0,e[1]]}))},placeholder:"Min (".concat(g,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(c.jsx)("input",{value:n[1]||"",type:"number",onChange:function(e){var a=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],a?parseInt(a,10):void 0]}))},placeholder:"Max (".concat(m,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function g(e){var a=e.column,t=a.filterValue,n=void 0===t?[]:t,o=a.preFilteredRows,l=a.setFilter,s=a.id,u=i.a.useMemo((function(){var e=new Date("2021-01-01"),a=new Date;return o.forEach((function(t){e=new Date(t.values[s])<=e?new Date(t.values[s]):e,a=new Date(t.values[s])>=a?new Date(t.values[s]):a})),[e,a]}),[s,o]),d=Object(r.a)(u,2),g=d[0],m=d[1];return console.log(g,m),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("input",{value:n[0]||"",type:"date",min:g.toISOString().slice(0,10),onChange:function(e){var a=e.target.value;console.log(e.target.value),l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[a||void 0,e[1]]}))},style:{width:"100px",marginRight:"0.2rem"}}),"to",Object(c.jsx)("input",{value:n[1]||"",type:"date",max:m.toISOString().slice(0,10),onChange:function(e){var a=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],a||void 0]}))},style:{width:"100px",marginLeft:"0.2rem"}})]})}function m(e,a,t){return Object(l.a)(e,t,{keys:[function(e){return e.values[a]}]})}function p(e,a,t){var n=new Date(t[0]),r=new Date(t[1]);return console.log(e,a,t),e.filter((function(o){var i=new Date(o.values[a]);return console.log(i,r,n),0===t.length?e:i>=n&&i<=r}))}m.autoRemove=function(e){return!e},p.autoRemove=function(e){return!e}},133:function(e,a,t){"use strict";var n=t(106),r=t(5),o=t(34),i=t(2),l=t.n(i),c=t(7),s=t(122),u=t(140),d=(t(116),t(120)),g=t(173),m=t(165),p=(t(174),t(88)),j=t(0);a.a=function(e){var a=e.DATA,t=e.COLUMNS,b=e.renderRowSubComponent,h=e.showCheckbox,f=void 0!==h&&h,O=e.notifContext,v=void 0===O?"":O,S=l.a.useMemo((function(){return{fuzzyText:d.f,dateBetween:d.e,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),x=l.a.useMemo((function(){return{Filter:d.b}}),[]),y=l.a.forwardRef((function(e,a){var t=e.indeterminate,n=Object(o.a)(e,["indeterminate"]),i=l.a.useRef(),c=a||i;return l.a.useEffect((function(){c.current.indeterminate=t}),[c,t]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("input",Object(r.a)({type:"checkbox",ref:c},n))})})),N=Object(i.useMemo)((function(){return a}),[a]),A=Object(s.useTable)({columns:t,data:N,defaultColumn:x,filterTypes:S,initialState:{hiddenColumns:["emailUser","parentEmail","status"]}},s.useFilters,s.useGlobalFilter,s.useSortBy,s.useExpanded,s.usePagination,s.useRowSelect,(function(e){f&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var a=e.getToggleAllRowsSelectedProps;return Object(j.jsx)("div",{children:Object(j.jsx)(y,Object(r.a)({},a()))})},Cell:function(e){var a=e.row;return Object(j.jsx)("div",{children:Object(j.jsx)(y,Object(r.a)({},a.getToggleRowSelectedProps()))})}}].concat(Object(n.a)(e))}))})),P=A.getTableProps,T=A.getTableBodyProps,C=A.headerGroups,w=A.prepareRow,M=A.page,_=A.rows,k=A.canPreviousPage,D=A.canNextPage,F=A.pageOptions,I=A.pageCount,H=A.gotoPage,J=A.nextPage,R=A.previousPage,E=A.setPageSize,U=A.visibleColumns,K=A.selectedFlatRows,B=(A.state.selectedRowIds,A.state),Y=B.pageIndex,L=B.pageSize,G=(B.expanded,A.state),V=A.setGlobalFilter,z=G.globalFilter,q=function(){var e=_;console.log(e);for(var a=[],t=0;t<e.length;t++){var n={};w(e[t]),console.log(e[t].cells);for(var r=0;r<e[t].cells.length;r++)"rowNumber"!==e[t].cells[r].column.id&&"selection"!==e[t].cells[r].column.id&&"buttonStatus"!==e[t].cells[r].column.id&&(n[e[t].cells[r].column.Header]=e[t].cells[r].value);a.push(n)}return a};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"tools",children:[Object(j.jsxs)("div",{className:"table_props",children:[Object(j.jsxs)("span",{children:["Total: ",_.length," Data"]}),Object(j.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:z||"",onChange:function(e){V(e.currentTarget.value)}})]}),Object(j.jsxs)("button",{className:"btn_tools",children:[Object(j.jsx)(p.c,{})," ",Object(j.jsx)(g.CSVLink,{data:q(),children:"Download as CSV"})]}),Object(j.jsxs)("button",{className:"btn_tools",onClick:function(){var e=q();if(e.length>0){var a=new m.default("landscape","pt","A4");a.setFontSize(15);var t={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};a.text("Report",40,40),a.autoTable(t),a.save("report.pdf")}},children:[Object(j.jsx)(p.b,{})," Download as PDF"]}),K.length>0?Object(j.jsxs)("button",{className:"btn_tools",children:[Object(j.jsx)(p.a,{}),Object(j.jsx)(c.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v),console.log(localStorage.getItem("notifContext"));var e=[];console.log(K);for(var a=[],t=0;t<K.length;t++)e.push(K[t].original.emailUser),"child"===K[t].original.userType&&(e.includes(K[t].original.emailUser)||e.push(K[t].original.emailUser)),console.log(e),a.push(K[t].original);localStorage.setItem("jsonData",JSON.stringify(a)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):null,K.length>0?Object(j.jsxs)("button",{className:"btn_tools",children:[Object(j.jsx)(p.a,{}),Object(j.jsx)(c.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v),console.log(localStorage.getItem("notifContext"));var e=[];console.log(K);for(var a=[],t=0;t<K.length;t++)void 0!==K[t].original.parentEmail&&(e.some((function(e){return K[t].original.parentEmail.includes(e)}))||("child"===K[t].original.userType?e.push.apply(e,Object(n.a)(K[t].original.parentEmail)):e.push(K[t].original.emailUser))),console.log(e),a.push(K[t].original);localStorage.setItem("jsonData",JSON.stringify(a)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):null,K.length>0?Object(j.jsxs)("button",{className:"btn_tools",children:[Object(j.jsx)(p.a,{}),Object(j.jsx)(c.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v),console.log(localStorage.getItem("notifContext"));var e=[];console.log(K);for(var a=[],t=0;t<K.length;t++)e.includes(K[t].original.emailUser)||e.push(K[t].original.emailUser),void 0!==K[t].original.parentEmail&&(e.some((function(e){return K[t].original.parentEmail.includes(e)}))||e.push(K[t].original.parentEmail)),console.log(e),a.push(K[t].original);localStorage.setItem("jsonData",JSON.stringify(a)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):null]}),Object(j.jsx)("div",{className:"utils",children:Object(j.jsxs)("div",{className:"pagination",children:[Object(j.jsx)("button",{onClick:function(){return H(0)},disabled:!k,children:"<<"}),Object(j.jsx)("button",{onClick:function(){return R()},disabled:!k,children:"<"}),Object(j.jsx)("button",{onClick:function(){return J()},disabled:!D,children:">"}),Object(j.jsx)("button",{onClick:function(){return H(I-1)},disabled:!D,children:">>"}),Object(j.jsxs)("span",{children:["Page "," ",Object(j.jsxs)("strong",{children:[Y+1," of ",F.length]})]}),Object(j.jsxs)("span",{children:["| Go to page:",Object(j.jsx)("input",{type:"number",defaultValue:Y+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;H(a)}})]}),Object(j.jsx)("select",{value:L,onChange:function(e){E(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(j.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(j.jsx)("div",{className:"table_container",children:Object(j.jsxs)("table",Object(r.a)(Object(r.a)({},P()),{},{children:[Object(j.jsx)("thead",{children:C.map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(j.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(j.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(j.jsx)(u.a,{}):Object(j.jsx)(u.b,{}):""})]}))}))})),Object(j.jsx)("tr",{children:e.headers.map((function(e){return Object(j.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(j.jsx)("tbody",Object(r.a)(Object(r.a)({},T()),{},{children:M.map((function(e,a){return w(e),Object(j.jsxs)(i.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(j.jsx)("tr",{children:e.cells.map((function(e){return Object(j.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?a+1+Y*L:e.render("Cell")," "]}))}))}),e.isExpanded?Object(j.jsx)("tr",{children:Object(j.jsx)("td",{colSpan:U.length,children:b({row:e})})}):null]}))}))}))]}))})]})}},1413:function(e,a,t){"use strict";t.r(a);var n=t(10),r=t(2),o=t(133),i=t(120),l=t(0),c=[{Header:"No.",id:"rowNumber",disableFilters:!0},{Header:"Nama Program",accessor:"programName",disableFilters:!0},{Header:"Kategori Program",accessor:"category",Filter:i.d,filter:"equals",Cell:function(e){return e.row.index%3===1?Object(l.jsx)("p",{children:"Pendidikan Agama"}):Object(l.jsx)("p",{children:"Pengetahuan Siswa Umum"})}},{Header:"Target Pembaca",accessor:"target",Filter:i.d,filter:"equals",Cell:function(e){e.row;return Object(l.jsx)("p",{children:"Semua"})}},{Header:"Status",accessor:"status",Filter:i.d,filter:"equals"}],s=t(109),u=t(36),d=(t(1154),t(1155)),g=t(119);t(175),a.default=function(){var e=Object(r.useState)(!0),a=Object(n.a)(e,2),t=a[0],i=a[1],m=Object(r.useState)(),p=Object(n.a)(m,2),j=p[0],b=p[1],h=Object(r.useState)("real"),f=Object(n.a)(h,2),O=f[0],v=f[1],S=JSON.parse(localStorage.getItem("userData"));return Object(r.useEffect)((function(){if("dummy"===O)b(d),i(!1);else{var e={whereKeyValues:{cobrandEmail:S.email},orderKeyValues:{programName:1},includeThumbnailData:!1,limit:Number.MAX_SAFE_INTEGER};console.log(e),Object(g.h)(e).then((function(e){console.log(e.data),b(e.data.programs),i(!1)})).catch((function(e){console.log(e),i(!1)}))}}),[,O]),t?Object(l.jsx)(u.a,{}):Object(l.jsxs)("div",{className:"Program",children:[Object(l.jsx)(s.a,{headingName:"Program Report",routes:[{name:"Report",path:"/report/program"},{name:"Program Report"}]}),Object(l.jsxs)("div",{className:"Dashboard_period",children:[Object(l.jsx)("button",{className:"real"===O?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==O&&(i(!0),v("real"))},children:"Real"}),Object(l.jsx)("button",{className:"dummy"===O?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==O&&(i(!0),v("dummy"))},children:"Dummy"})]}),Object(l.jsx)("div",{className:"Program_table",children:Object(l.jsx)(o.a,{COLUMNS:c,DATA:j})})]})}}}]);
//# sourceMappingURL=44.a4b4a69a.chunk.js.map