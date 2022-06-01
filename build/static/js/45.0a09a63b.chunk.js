(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[45],{109:function(e,a,t){"use strict";t(2);var n=t(7),r=(t(111),t(0));a.a=function(e){var a=e.headingName,t=e.routes,o=void 0===t?[]:t;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:a}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,a){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},a):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},a)}))})]})}},111:function(e,a,t){},116:function(e,a,t){},119:function(e,a,t){"use strict";t.d(a,"h",(function(){return i})),t.d(a,"d",(function(){return l})),t.d(a,"j",(function(){return s})),t.d(a,"i",(function(){return c})),t.d(a,"c",(function(){return u})),t.d(a,"e",(function(){return d})),t.d(a,"b",(function(){return m})),t.d(a,"f",(function(){return g})),t.d(a,"a",(function(){return h})),t.d(a,"g",(function(){return p}));var n=t(18),r=t.n(n),o=t(20),i=function(e){return r()({method:"post",url:o.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:o.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return r()({method:"post",url:o.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return r()({method:"post",url:o.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:o.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:o.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:o.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:o.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:o.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:o.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})}},120:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"d",(function(){return u})),t.d(a,"c",(function(){return d})),t.d(a,"a",(function(){return m})),t.d(a,"f",(function(){return g})),t.d(a,"e",(function(){return h}));var n=t(106),r=t(10),o=t(2),i=t.n(o),l=(t(122),t(172)),s=t(0);function c(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter;n.length;return Object(s.jsx)("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var a=e.column,t=a.filterValue,r=a.setFilter,o=a.preFilteredRows,l=a.id,c=i.a.useMemo((function(){var e=new Set;return o.forEach((function(a){void 0!==a.values[l]&&e.add(a.values[l])})),Object(n.a)(e.values())}),[l,o]);return Object(s.jsxs)("select",{value:t,onChange:function(e){r(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),c.map((function(e,a){return Object(s.jsx)("option",{value:e,children:e},a)}))]})}function d(e){var a=e.column,t=a.filterValue,n=void 0===t?[]:t,o=a.preFilteredRows,l=a.setFilter,c=a.id,u=i.a.useMemo((function(){var e=o.length?o[0].values[c]:0,a=o.length?o[0].values[c]:0;return o.forEach((function(t){e=Math.min(t.values[c],e),a=Math.max(t.values[c],a)})),[e,a]}),[c,o]),d=Object(r.a)(u,2),m=d[0],g=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:n[0]||"",type:"number",onChange:function(e){var a=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[a?parseInt(a,10):void 0,e[1]]}))},placeholder:"Min (".concat(m,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(s.jsx)("input",{value:n[1]||"",type:"number",onChange:function(e){var a=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],a?parseInt(a,10):void 0]}))},placeholder:"Max (".concat(g,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function m(e){var a=e.column,t=a.filterValue,n=void 0===t?[]:t,o=a.preFilteredRows,l=a.setFilter,c=a.id,u=i.a.useMemo((function(){var e=new Date("2021-01-01"),a=new Date;return o.forEach((function(t){e=new Date(t.values[c])<=e?new Date(t.values[c]):e,a=new Date(t.values[c])>=a?new Date(t.values[c]):a})),[e,a]}),[c,o]),d=Object(r.a)(u,2),m=d[0],g=d[1];return console.log(m,g),Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:n[0]||"",type:"date",min:m.toISOString().slice(0,10),onChange:function(e){var a=e.target.value;console.log(e.target.value),l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[a||void 0,e[1]]}))},style:{width:"100px",marginRight:"0.2rem"}}),"to",Object(s.jsx)("input",{value:n[1]||"",type:"date",max:g.toISOString().slice(0,10),onChange:function(e){var a=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],a||void 0]}))},style:{width:"100px",marginLeft:"0.2rem"}})]})}function g(e,a,t){return Object(l.a)(e,t,{keys:[function(e){return e.values[a]}]})}function h(e,a,t){var n=new Date(t[0]),r=new Date(t[1]);return console.log(e,a,t),e.filter((function(o){var i=new Date(o.values[a]);return console.log(i,r,n),0===t.length?e:i>=n&&i<=r}))}g.autoRemove=function(e){return!e},h.autoRemove=function(e){return!e}},133:function(e,a,t){"use strict";var n=t(106),r=t(5),o=t(34),i=t(2),l=t.n(i),s=t(7),c=t(122),u=t(140),d=(t(116),t(120)),m=t(173),g=t(165),h=(t(174),t(88)),p=t(0);a.a=function(e){var a=e.DATA,t=e.COLUMNS,b=e.renderRowSubComponent,j=e.showCheckbox,f=void 0!==j&&j,v=e.notifContext,O=void 0===v?"":v,S=l.a.useMemo((function(){return{fuzzyText:d.f,dateBetween:d.e,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),x=l.a.useMemo((function(){return{Filter:d.b}}),[]),y=l.a.forwardRef((function(e,a){var t=e.indeterminate,n=Object(o.a)(e,["indeterminate"]),i=l.a.useRef(),s=a||i;return l.a.useEffect((function(){s.current.indeterminate=t}),[s,t]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("input",Object(r.a)({type:"checkbox",ref:s},n))})})),N=Object(i.useMemo)((function(){return a}),[a]),k=Object(c.useTable)({columns:t,data:N,defaultColumn:x,filterTypes:S,initialState:{hiddenColumns:["emailUser","parentEmail","status"]}},c.useFilters,c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination,c.useRowSelect,(function(e){f&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var a=e.getToggleAllRowsSelectedProps;return Object(p.jsx)("div",{children:Object(p.jsx)(y,Object(r.a)({},a()))})},Cell:function(e){var a=e.row;return Object(p.jsx)("div",{children:Object(p.jsx)(y,Object(r.a)({},a.getToggleRowSelectedProps()))})}}].concat(Object(n.a)(e))}))})),C=k.getTableProps,T=k.getTableBodyProps,U=k.headerGroups,I=k.prepareRow,P=k.page,w=k.rows,E=k.canPreviousPage,A=k.canNextPage,F=k.pageOptions,L=k.pageCount,R=k.gotoPage,D=k.nextPage,M=k.previousPage,_=k.setPageSize,K=k.visibleColumns,z=k.selectedFlatRows,H=(k.state.selectedRowIds,k.state),B=H.pageIndex,J=H.pageSize,G=(H.expanded,k.state),V=k.setGlobalFilter,q=G.globalFilter,W=function(){var e=w;console.log(e);for(var a=[],t=0;t<e.length;t++){var n={};I(e[t]),console.log(e[t].cells);for(var r=0;r<e[t].cells.length;r++)"rowNumber"!==e[t].cells[r].column.id&&"selection"!==e[t].cells[r].column.id&&"buttonStatus"!==e[t].cells[r].column.id&&(n[e[t].cells[r].column.Header]=e[t].cells[r].value);a.push(n)}return a};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"tools",children:[Object(p.jsxs)("div",{className:"table_props",children:[Object(p.jsxs)("span",{children:["Total: ",w.length," Data"]}),Object(p.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:q||"",onChange:function(e){V(e.currentTarget.value)}})]}),Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(h.c,{})," ",Object(p.jsx)(m.CSVLink,{data:W(),children:"Download as CSV"})]}),Object(p.jsxs)("button",{className:"btn_tools",onClick:function(){var e=W();if(e.length>0){var a=new g.default("landscape","pt","A4");a.setFontSize(15);var t={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};a.text("Report",40,40),a.autoTable(t),a.save("report.pdf")}},children:[Object(p.jsx)(h.b,{})," Download as PDF"]}),z.length>0?Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(h.a,{}),Object(p.jsx)(s.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O),console.log(localStorage.getItem("notifContext"));var e=[];console.log(z);for(var a=[],t=0;t<z.length;t++)e.push(z[t].original.emailUser),"child"===z[t].original.userType&&(e.includes(z[t].original.emailUser)||e.push(z[t].original.emailUser)),console.log(e),a.push(z[t].original);localStorage.setItem("jsonData",JSON.stringify(a)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):null,z.length>0?Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(h.a,{}),Object(p.jsx)(s.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O),console.log(localStorage.getItem("notifContext"));var e=[];console.log(z);for(var a=[],t=0;t<z.length;t++)void 0!==z[t].original.parentEmail&&(e.some((function(e){return z[t].original.parentEmail.includes(e)}))||("child"===z[t].original.userType?e.push.apply(e,Object(n.a)(z[t].original.parentEmail)):e.push(z[t].original.emailUser))),console.log(e),a.push(z[t].original);localStorage.setItem("jsonData",JSON.stringify(a)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):null,z.length>0?Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(h.a,{}),Object(p.jsx)(s.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O),console.log(localStorage.getItem("notifContext"));var e=[];console.log(z);for(var a=[],t=0;t<z.length;t++)e.includes(z[t].original.emailUser)||e.push(z[t].original.emailUser),void 0!==z[t].original.parentEmail&&(e.some((function(e){return z[t].original.parentEmail.includes(e)}))||e.push(z[t].original.parentEmail)),console.log(e),a.push(z[t].original);localStorage.setItem("jsonData",JSON.stringify(a)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):null]}),Object(p.jsx)("div",{className:"utils",children:Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("button",{onClick:function(){return R(0)},disabled:!E,children:"<<"}),Object(p.jsx)("button",{onClick:function(){return M()},disabled:!E,children:"<"}),Object(p.jsx)("button",{onClick:function(){return D()},disabled:!A,children:">"}),Object(p.jsx)("button",{onClick:function(){return R(L-1)},disabled:!A,children:">>"}),Object(p.jsxs)("span",{children:["Page "," ",Object(p.jsxs)("strong",{children:[B+1," of ",F.length]})]}),Object(p.jsxs)("span",{children:["| Go to page:",Object(p.jsx)("input",{type:"number",defaultValue:B+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;R(a)}})]}),Object(p.jsx)("select",{value:J,onChange:function(e){_(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(p.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(p.jsx)("div",{className:"table_container",children:Object(p.jsxs)("table",Object(r.a)(Object(r.a)({},C()),{},{children:[Object(p.jsx)("thead",{children:U.map((function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(p.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(p.jsx)(u.a,{}):Object(p.jsx)(u.b,{}):""})]}))}))})),Object(p.jsx)("tr",{children:e.headers.map((function(e){return Object(p.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(p.jsx)("tbody",Object(r.a)(Object(r.a)({},T()),{},{children:P.map((function(e,a){return I(e),Object(p.jsxs)(i.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(p.jsx)("tr",{children:e.cells.map((function(e){return Object(p.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?a+1+B*J:e.render("Cell")," "]}))}))}),e.isExpanded?Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:K.length,children:b({row:e})})}):null]}))}))}))]}))})]})}},1412:function(e,a,t){"use strict";t.r(a);var n=t(106),r=t(10),o=t(2),i=t(133),l=t(120),s=[{Header:"No.",id:"rowNumber",disableFilters:!0},{Header:"Email User",accessor:"emailUser",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama",accessor:"nameUser",disableFilters:!0},{Header:"Jenis User",accessor:"userType",Filter:l.d,filter:"equals"},{Header:"Email Orangtua",accessor:"parentEmail",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama Orangtua",accessor:"parentName",disableFilters:!0,Cell:function(e){var a=e.value;return void 0!==a?a.join(", "):""}},{Header:"Sekolah",accessor:"childInfo.schoolName",Filter:l.d,filter:"equals"},{Header:"Pendidikan",accessor:"childInfo.StudyLevel",Filter:l.d,filter:"equals"},{Header:"Jenis Kelamin",accessor:"gender",Filter:l.d,filter:"equals"},{Header:"Alamat",accessor:"address",disableFilters:!0},{Header:"Mulai Berlanggan",accessor:"startSubscription",Filter:l.a,filter:"dateBetween"},{Header:"Berlanggan Sampai",accessor:"endSubscription",Filter:l.a,filter:"dateBetween"}],c=t(109),u=t(36),d=(t(887),t(119)),m=t(888),g=(t(175),t(0));a.default=function(){var e=Object(o.useState)(!0),a=Object(r.a)(e,2),t=a[0],l=a[1],h=Object(o.useState)(),p=Object(r.a)(h,2),b=p[0],j=p[1],f=Object(o.useState)("real"),v=Object(r.a)(f,2),O=v[0],S=v[1];return Object(o.useEffect)((function(){if("dummy"===O)j(m),l(!1);else{var e={whereKeyValues:{packageId:"com.byasia.ruangortu"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};console.log(e),Object(d.j)(e).then((function(e){console.log(e.data);for(var a=e.data.users,t=0;t<a.length;t++){var r=a[t];if("child"===r.userType){console.log("Anjay");for(var o=[],i=[r.parentEmail].concat(Object(n.a)(r.otherParentEmail)),s=0;s<a.length;s++){var c=a[s];(r.parentEmail===c.emailUser||r.otherParentEmail.includes(c.emailUser))&&o.push(c.nameUser)}r.parentName=o,r.parentEmail=i,console.log(r.parentEmail)}}j(a),l(!1)})).catch((function(e){console.log(e),l(!1)}))}}),[,O]),t?Object(g.jsx)(u.a,{}):Object(g.jsxs)("div",{className:"Pengguna",children:[Object(g.jsx)(c.a,{headingName:"User Report",routes:[{name:"Report",path:"/report/user"},{name:"User Report"}]}),Object(g.jsxs)("div",{className:"Dashboard_period",children:[Object(g.jsx)("button",{className:"real"===O?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==O&&(l(!0),S("real"))},children:"Real"}),Object(g.jsx)("button",{className:"dummy"===O?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==O&&(l(!0),S("dummy"))},children:"Dummy"})]}),Object(g.jsx)("div",{className:"Pengguna_table",children:Object(g.jsx)(i.a,{COLUMNS:s,DATA:b,showCheckbox:!0,notifContext:"Status Berlanggan"})})]})}},887:function(e,a,t){},888:function(e){e.exports=JSON.parse('[{"Nomor":"1","userType":"Parent","nameUser":"Ricko Enrile","emailUser":"rickotesting@gmail.com"},{"Nomor":"2","userType":"Parent","nameUser":"Syihab Rabbani","emailUser":"syihab.rabbani@defghi.id"},{"Nomor":"3","userType":"Parent","nameUser":"Kartono","emailUser":"kartono.cc@gmail.com"},{"Nomor":"4","userType":"Parent","nameUser":"Tombak","emailUser":"tomsiman.id@gmail.com"},{"Nomor":"5","userType":"Parent","nameUser":"Rafik Ahmad","emailUser":"rafik.ahmad@defghi.global"},{"Nomor":"6","userType":"Child","nameUser":"Hafiz","emailUser":"hdcuber96@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 8 Kota Bekasi","StudyLevel":"TK"},"gender":"Laki-Laki","address":"Bekasi Barat"},{"Nomor":"7","userType":"Child","nameUser":"Nafies","emailUser":"gowesjersey@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 9 Bekasi","StudyLevel":"SD"},"gender":"Perempuan","address":"Bekasi Barat"},{"Nomor":"8","userType":"Child","nameUser":"Santa","emailUser":"siregarsanta@defghi.id","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 8 Kembangan","StudyLevel":"SD"},"gender":"Perempuan","address":"Taman Alfa"},{"Nomor":"9","userType":"Child","nameUser":"Jane","emailUser":"siregarjane20@gmail.com","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 9 Kembangan","StudyLevel":"TK"},"gender":"Perempuan","address":"Taman Alfa"},{"Nomor":"10","userType":"Child","nameUser":"Nera","emailUser":"nera.rane1010@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 2 Pejaten","StudyLevel":"SMP"},"gender":"Perempuan","address":"Kuningan"},{"Nomor":"11","userType":"Child","nameUser":"Gita","emailUser":"gitaayufachrianda@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 4 Kebayoran Lama","StudyLevel":"SD"},"gender":"Perempuan","address":"Kuningan"},{"Nomor":"12","userType":"Child","nameUser":"Angga","emailUser":"singgih.zuliangga@defghi.id","parentName":["Rafik Ahmad"],"parentEmail":["rafik.ahmad@defghi.global"],"childInfo":{"schoolName":"SDI Al Azhar 61 Serpong","StudyLevel":"SD"},"gender":"Laki-Laki","address":"Serpong"},{"Nomor":"13","userType":"Child","nameUser":"Singgih","emailUser":"zuliangga.leo@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"gender":"Laki-Laki","address":"Pamulang Raya"},{"Nomor":"14","userType":"Child","nameUser":"Rio","emailUser":"ricko@ide2sen.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 19 Pamulang","StudyLevel":"TK"},"gender":"Laki-Laki","address":"Pamulang Raya"},{"Nomor":"15","userType":"Child","nameUser":"Christiani","emailUser":"christiani.silaen@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMA Islam Al Azhar 1 Keb. Baru","StudyLevel":"SMA"},"gender":"Perempuan","address":"Kebayoran Baru"},{"Nomor":"16","userType":"Child","nameUser":"Nova","emailUser":"ndaritonang@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 4 Kemandoran","StudyLevel":"SMP"},"gender":"Perempuan","address":"Kebayoran Baru"},{"Nomor":"17","userType":"Child","nameUser":"Amir","emailUser":"mirza.dzaky.azizi@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"gender":"Laki-Laki","address":"Pamulang Raya"},{"Nomor":"18","userType":"Child","nameUser":"Enrile","emailUser":"ricko@ide2sen.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 6 Jakapermai","StudyLevel":"SMP"},"gender":"Laki-Laki","address":"Matraman"},{"Nomor":"19","userType":"Child","nameUser":"Rajagukguk","emailUser":"rickoenrile23@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 8 Kemang Pratama","StudyLevel":"SMP"},"gender":"Laki-Laki","address":"Matraman"},{"Nomor":"20","userType":"Child","nameUser":"Muhammad","emailUser":"muhammsyihab.dev@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"TKI Al Azhar 2 Pasar Minggu","childInfo.StudyLevel":"TK"},"gender":"Laki-Laki","address":"Matraman"}]')}}]);
//# sourceMappingURL=45.0a09a63b.chunk.js.map