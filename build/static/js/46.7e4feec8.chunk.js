(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[46],{108:function(e,t,a){"use strict";a(2);var n=a(7),r=(a(110),a(0));t.a=function(e){var t=e.headingName,a=e.routes,i=void 0===a?[]:a;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:i.length>0&&i.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},110:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return m})),a.d(t,"f",(function(){return b})),a.d(t,"e",(function(){return g}));var n=a(105),r=a(10),i=a(2),s=a.n(i),o=(a(121),a(166)),l=a(0);function c(e){var t=e.column,a=t.filterValue,n=t.preFilteredRows,r=t.setFilter;n.length;return Object(l.jsx)("input",{value:a||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,a=t.filterValue,r=t.setFilter,i=t.preFilteredRows,o=t.id,c=s.a.useMemo((function(){var e=new Set;return i.forEach((function(t){void 0!==t.values[o]&&e.add(t.values[o])})),Object(n.a)(e.values())}),[o,i]);return Object(l.jsxs)("select",{value:a,onChange:function(e){r(e.target.value||void 0)},children:[Object(l.jsx)("option",{value:"",children:"All"}),c.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,i=t.preFilteredRows,o=t.setFilter,c=t.id,u=s.a.useMemo((function(){var e=i.length?i[0].values[c]:0,t=i.length?i[0].values[c]:0;return i.forEach((function(a){e=Math.min(a.values[c],e),t=Math.max(a.values[c],t)})),[e,t]}),[c,i]),d=Object(r.a)(u,2),m=d[0],b=d[1];return Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("input",{value:n[0]||"",type:"number",onChange:function(e){var t=e.target.value;o((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},placeholder:"Min (".concat(m,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(l.jsx)("input",{value:n[1]||"",type:"number",onChange:function(e){var t=e.target.value;o((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},placeholder:"Max (".concat(b,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function m(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,i=t.preFilteredRows,o=t.setFilter,c=t.id,u=s.a.useMemo((function(){var e=new Date("2020-01-01"),t=new Date("2099-12-31");return i.forEach((function(a){e=a.values[c]&&new Date(a.values[c])<=e?new Date(a.values[c]):e,t=a.values[c]&&new Date(a.values[c])>=t?new Date(a.values[c]):t})),[e,t]}),[c,i]),d=Object(r.a)(u,2),m=d[0],b=d[1];return console.log(m,b),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("input",{value:n[0]||m.toISOString().slice(0,10),type:"date",min:m.toISOString().slice(0,10),max:n[1]||b.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;console.log(e.target.value),o((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(l.jsx)("input",{value:n[1]||b.toISOString().slice(0,10),type:"date",min:n[0]||m.toISOString().slice(0,10),max:b.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;o((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function b(e,t,a){return Object(o.a)(e,a,{keys:[function(e){return e.values[t]}]})}function g(e,t,a){var n=new Date(a[0]),r=new Date(a[1]);return console.log(e,t,a),e.filter((function(i){var s=new Date(i.values[t]);return console.log(s,r,n),0===a.length?e:s>=n&&s<=r}))}b.autoRemove=function(e){return!e},g.autoRemove=function(e){return!e}},118:function(e,t,a){"use strict";a.d(t,"h",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"j",(function(){return l})),a.d(t,"i",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"f",(function(){return b})),a.d(t,"a",(function(){return g})),a.d(t,"g",(function(){return p}));var n=a(18),r=a.n(n),i=a(20),s=function(e){return r()({method:"post",url:i.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return r()({method:"post",url:i.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:i.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return r()({method:"post",url:i.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:i.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:i.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:i.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:i.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:i.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:i.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})}},129:function(e,t,a){"use strict";var n=a(105),r=a(5),i=a(34),s=a(2),o=a.n(s),l=a(7),c=a(121),u=a(135),d=(a(115),a(117)),m=a(167),b=a(158),g=(a(168),a(88)),p=a(0);t.a=function(e){var t=e.DATA,a=e.COLUMNS,h=e.renderRowSubComponent,j=e.showCheckbox,f=void 0!==j&&j,S=e.notifContext,v=void 0===S?"":S,O=o.a.useMemo((function(){return{fuzzyText:d.f,dateBetween:d.e,text:function(e,t,a){return e.filter((function(e){var n=e.values[t];return void 0===n||String(n).toLowerCase().startsWith(String(a).toLowerCase())}))}}}),[]),x=o.a.useMemo((function(){return{Filter:d.b}}),[]),N=o.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(i.a)(e,["indeterminate"]),s=o.a.useRef(),l=t||s;return o.a.useEffect((function(){l.current.indeterminate=a}),[l,a]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("input",Object(r.a)({type:"checkbox",ref:l},n))})})),y=Object(s.useMemo)((function(){return t}),[t]),T=Object(c.useTable)({columns:a,data:y,defaultColumn:x,filterTypes:O,initialState:{hiddenColumns:["emailUser","parentEmail"]}},c.useFilters,c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination,c.useRowSelect,(function(e){f&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(p.jsx)("div",{children:Object(p.jsx)(N,Object(r.a)({},t()))})},Cell:function(e){var t=e.row;return Object(p.jsx)("div",{children:Object(p.jsx)(N,Object(r.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(n.a)(e))}))})),k=T.getTableProps,P=T.getTableBodyProps,C=T.headerGroups,A=T.prepareRow,I=T.page,U=T.rows,w=T.canPreviousPage,F=T.canNextPage,D=T.pageOptions,E=T.pageCount,L=T.gotoPage,_=T.nextPage,R=T.previousPage,M=T.setPageSize,K=T.visibleColumns,H=T.selectedFlatRows,z=(T.state.selectedRowIds,T.state),B=z.pageIndex,J=z.pageSize,G=(z.expanded,T.state),V=T.setGlobalFilter,q=G.globalFilter,W=function(){var e=U;console.log(e);for(var t=[],a=0;a<e.length;a++){var n={};A(e[a]),console.log(e[a].cells);for(var r=0;r<e[a].cells.length;r++)"rowNumber"!==e[a].cells[r].column.id&&"selection"!==e[a].cells[r].column.id&&"buttonStatus"!==e[a].cells[r].column.id&&(e[a].cells[r].value&&"[object Date]"===Object.prototype.toString.call(e[a].cells[r].value)&&!isNaN(e[a].cells[r].value)?n[e[a].cells[r].column.Header]=e[a].cells[r].value.toISOString().split("T")[0]:n[e[a].cells[r].column.Header]=e[a].cells[r].value);t.push(n)}return t};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"tools",children:[Object(p.jsxs)("div",{className:"table_props",children:[Object(p.jsxs)("span",{children:["Total: ",U.length," Data"]}),Object(p.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:q||"",onChange:function(e){V(e.currentTarget.value)}})]}),Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(g.c,{})," ",Object(p.jsx)(m.CSVLink,{data:W(),children:"Download as CSV"})]}),Object(p.jsxs)("button",{className:"btn_tools",onClick:function(){var e=W();if(e.length>0){var t=new b.default("landscape","pt","A4");t.setFontSize(15);var a={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(a),t.save("report.pdf")}},children:[Object(p.jsx)(g.b,{})," Download as PDF"]}),f?H.length>0?Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(g.a,{}),Object(p.jsx)(l.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v),console.log(localStorage.getItem("notifContext"));var e=[];console.log(H);for(var t=[],a=0;a<H.length;a++)e.push(H[a].original.emailUser),"child"===H[a].original.userType&&(e.includes(H[a].original.emailUser)||e.push(H[a].original.emailUser)),console.log(e),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(p.jsxs)("button",{className:"btn_tools_disabled",children:[Object(p.jsx)(g.a,{}),Object(p.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,f?H.length>0?Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(g.a,{}),Object(p.jsx)(l.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v),console.log(localStorage.getItem("notifContext"));var e=[];console.log(H);for(var t=[],a=0;a<H.length;a++)void 0!==H[a].original.parentEmail&&(e.some((function(e){return H[a].original.parentEmail.includes(e)}))||("child"===H[a].original.userType?e.push.apply(e,Object(n.a)(H[a].original.parentEmail)):e.push(H[a].original.emailUser))),console.log(e),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(p.jsxs)("button",{className:"btn_tools_disabled",children:[Object(p.jsx)(g.a,{}),Object(p.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,f?H.length>0?Object(p.jsxs)("button",{className:"btn_tools",children:[Object(p.jsx)(g.a,{}),Object(p.jsx)(l.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",v),console.log(localStorage.getItem("notifContext"));var e=[];console.log(H);for(var t=[],a=0;a<H.length;a++)e.includes(H[a].original.emailUser)||e.push(H[a].original.emailUser),void 0!==H[a].original.parentEmail&&(e.some((function(e){return H[a].original.parentEmail.includes(e)}))||e.push(H[a].original.parentEmail)),console.log(e),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(p.jsxs)("button",{className:"btn_tools_disabled",children:[Object(p.jsx)(g.a,{}),Object(p.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(p.jsx)("div",{className:"utils",children:Object(p.jsxs)("div",{className:"pagination",children:[Object(p.jsx)("button",{onClick:function(){return L(0)},disabled:!w,children:"<<"}),Object(p.jsx)("button",{onClick:function(){return R()},disabled:!w,children:"<"}),Object(p.jsx)("button",{onClick:function(){return _()},disabled:!F,children:">"}),Object(p.jsx)("button",{onClick:function(){return L(E-1)},disabled:!F,children:">>"}),Object(p.jsxs)("span",{children:["Page "," ",Object(p.jsxs)("strong",{children:[B+1," of ",D.length]})]}),Object(p.jsxs)("span",{children:["| Go to page:",Object(p.jsx)("input",{type:"number",defaultValue:B+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;L(t)}})]}),Object(p.jsx)("select",{value:J,onChange:function(e){M(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(p.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(p.jsx)("div",{className:"table_container",children:Object(p.jsxs)("table",Object(r.a)(Object(r.a)({},k()),{},{children:[Object(p.jsx)("thead",{children:C.map((function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(p.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(p.jsx)(u.a,{}):Object(p.jsx)(u.b,{}):""})]}))}))})),Object(p.jsx)("tr",{children:e.headers.map((function(e){return Object(p.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(p.jsx)("tbody",Object(r.a)(Object(r.a)({},P()),{},{children:I.map((function(e,t){return A(e),Object(p.jsxs)(s.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(p.jsx)("tr",{children:e.cells.map((function(e){return Object(p.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+B*J:e.render("Cell")," "]}))}))}),e.isExpanded?Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:K.length,children:h({row:e})})}):null]}))}))}))]}))})]})}},1414:function(e,t,a){"use strict";a.r(t);var n=a(105),r=a(10),i=a(2),s=a(129),o=a(117),l={year:"numeric",month:"long",day:"numeric"},c=[{Header:"No.",id:"rowNumber",disableFilters:!0},{Header:"Email User",accessor:"emailUser",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama",accessor:"nameUser",disableFilters:!0},{Header:"Jenis User",accessor:"userType",Filter:o.d,filter:"equals"},{Header:"Status",accessor:"status",Filter:o.d,filter:"equals"},{Header:"Status Berlanggan",accessor:"subscriptionStatus",Filter:o.d,filter:"equals"},{Header:"Paket Berlangganan",accessor:"subscriptionPlan",Filter:o.d,filter:"equals"},{Header:"Email Orang tua",accessor:"parentEmail",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama Orang tua",accessor:"parentName",disableFilters:!0,Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Sekolah",accessor:"childInfo.schoolName",Filter:o.d,filter:"equals"},{Header:"Pendidikan",accessor:"childInfo.StudyLevel",Filter:o.d,filter:"equals"},{Header:"Jenis Kelamin",accessor:"gender",Filter:o.d,filter:"equals"},{Header:"Alamat",accessor:"address",disableFilters:!0},{Header:"Mulai Berlanggan",accessor:"startSubscription",Filter:o.a,filter:"dateBetween",Cell:function(e){var t=e.value;return void 0!==t?t.toLocaleDateString("en-UK",l):""}},{Header:"Berlanggan Sampai",accessor:"endSubscription",Filter:o.a,filter:"dateBetween",Cell:function(e){var t=e.value;return void 0!==t?t.toLocaleDateString("en-UK",l):""}}],u=a(108),d=a(36),m=(a(887),a(118)),b=a(888),g=(a(169),a(0));t.default=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(i.useState)(),p=Object(r.a)(l,2),h=p[0],j=p[1],f=Object(i.useState)("real"),S=Object(r.a)(f,2),v=S[0],O=S[1];return Object(i.useEffect)((function(){if("dummy"===v){for(var e=b,t=0;t<e.length;t++){var a=e[t];void 0!==a.startSub&&(a.startSubscription=new Date(Date.parse(a.startSub))),void 0!==a.endSub&&(a.endSubscription=new Date(Date.parse(a.endSub)))}console.log(e),j(e),o(!1)}else{var r={whereKeyValues:{packageId:"com.byasia.ruangortu"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};console.log(r),Object(m.j)(r).then((function(e){console.log(e.data);for(var t=e.data.users,a=0;a<t.length;a++){var r=t[a];if("child"===r.userType){void 0!==r.startSub&&(r.startSubscription=new Date(r.startSub)),void 0!==r.endSub&&(r.endSubscription=new Date(r.endSub)),console.log("Anjay");for(var i=[],s=[r.parentEmail].concat(Object(n.a)(r.otherParentEmail)),l=0;l<t.length;l++){var c=t[l];(r.parentEmail===c.emailUser||r.otherParentEmail.includes(c.emailUser))&&i.push(c.nameUser)}r.parentName=i,r.parentEmail=s,console.log(r.parentEmail)}}j(t),o(!1)})).catch((function(e){console.log(e),o(!1)}))}}),[,v]),a?Object(g.jsx)(d.a,{}):Object(g.jsxs)("div",{className:"Pengguna",children:[Object(g.jsx)(u.a,{headingName:"User Report",routes:[{name:"Report",path:"/report/user"},{name:"User Report"}]}),Object(g.jsxs)("div",{className:"Dashboard_period",children:[Object(g.jsx)("button",{className:"real"===v?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==v&&(o(!0),O("real"))},children:"Prod"}),Object(g.jsx)("button",{className:"dummy"===v?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==v&&(o(!0),O("dummy"))},children:"Dummy"})]}),Object(g.jsx)("div",{className:"Pengguna_table",children:Object(g.jsx)(s.a,{COLUMNS:c,DATA:h,showCheckbox:!0,notifContext:"Status Berlanggan"})})]})}},887:function(e,t,a){},888:function(e){e.exports=JSON.parse('[{"Nomor":"1","userType":"Parent","nameUser":"Ricko Enrile","emailUser":"rickotesting@gmail.com","status":"Activated"},{"Nomor":"2","userType":"Parent","nameUser":"Syihab Rabbani","emailUser":"syihab.rabbani@defghi.id","status":"Activated"},{"Nomor":"3","userType":"Parent","nameUser":"Kartono","emailUser":"kartono.cc@gmail.com","status":"Activated"},{"Nomor":"4","userType":"Parent","nameUser":"Tombak","emailUser":"tomsiman.id@gmail.com","status":"Activated"},{"Nomor":"5","userType":"Parent","nameUser":"Rafik Ahmad","emailUser":"rafik.ahmad@defghi.global","status":"Activated"},{"Nomor":"6","userType":"Child","nameUser":"Hafiz","emailUser":"hdcuber96@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 8 Kota Bekasi","StudyLevel":"TK"},"gender":"Laki-Laki","address":"Bekasi Barat","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 1","startSub":"2021-12-10T00:00:00","endSub":"2022-06-10T00:00:00"},{"Nomor":"7","userType":"Child","nameUser":"Nafies","emailUser":"gowesjersey@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 9 Bekasi","StudyLevel":"SD"},"gender":"Perempuan","address":"Bekasi Barat","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 1","startSub":"2021-12-29T00:00:00","endSub":"2022-06-29T00:00:00"},{"Nomor":"8","userType":"Child","nameUser":"Santa","emailUser":"siregarsanta@defghi.id","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 8 Kembangan","StudyLevel":"SD"},"gender":"Perempuan","address":"Taman Alfa","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 1","startSub":"2021-12-10T00:00:00","endSub":"2022-06-10T00:00:00"},{"Nomor":"9","userType":"Child","nameUser":"Jane","emailUser":"siregarjane20@gmail.com","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 9 Kembangan","StudyLevel":"TK"},"gender":"Perempuan","address":"Taman Alfa","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-10T00:00:00","endSub":"2022-12-10T00:00:00"},{"Nomor":"10","userType":"Child","nameUser":"Nera","emailUser":"nera.rane1010@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 2 Pejaten","StudyLevel":"SMP"},"gender":"Perempuan","address":"Kuningan","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-25T00:00:00","endSub":"2022-12-25T00:00:00"},{"Nomor":"11","userType":"Child","nameUser":"Gita","emailUser":"gitaayufachrianda@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 4 Kebayoran Lama","StudyLevel":"SD"},"gender":"Perempuan","address":"Kuningan","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-10T00:00:00","endSub":"2022-12-10T00:00:00"},{"Nomor":"12","userType":"Child","nameUser":"Angga","emailUser":"singgih.zuliangga@defghi.id","parentName":["Rafik Ahmad"],"parentEmail":["rafik.ahmad@defghi.global"],"childInfo":{"schoolName":"SDI Al Azhar 61 Serpong","StudyLevel":"SD"},"gender":"Laki-Laki","address":"Serpong","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2022-01-10T00:00:00","endSub":"2023-01-10T00:00:00"},{"Nomor":"13","userType":"Child","nameUser":"Singgih","emailUser":"zuliangga.leo@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"gender":"Laki-Laki","address":"Pamulang Raya","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-10T00:00:00","endSub":"2022-12-10T00:00:00"},{"Nomor":"14","userType":"Child","nameUser":"Rio","emailUser":"ricko@ide2sen.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 19 Pamulang","StudyLevel":"TK"},"gender":"Laki-Laki","address":"Pamulang Raya","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-10T00:00:00","endSub":"2022-12-10T00:00:00"},{"Nomor":"15","userType":"Child","nameUser":"Christiani","emailUser":"christiani.silaen@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMA Islam Al Azhar 1 Keb. Baru","StudyLevel":"SMA"},"gender":"Perempuan","address":"Kebayoran Baru","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-10T00:00:00","endSub":"2022-12-10T00:00:00"},{"Nomor":"16","userType":"Child","nameUser":"Nova","emailUser":"ndaritonang@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 4 Kemandoran","StudyLevel":"SMP"},"gender":"Perempuan","address":"Kebayoran Baru","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-10T00:00:00","endSub":"2022-12-10T00:00:00"},{"Nomor":"17","userType":"Child","nameUser":"Amir","emailUser":"mirza.dzaky.azizi@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"gender":"Laki-Laki","address":"Pamulang Raya","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-10T00:00:00","endSub":"2022-12-10T00:00:00"},{"Nomor":"18","userType":"Child","nameUser":"Enrile","emailUser":"ricko@ide2sen.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 6 Jakapermai","StudyLevel":"SMP"},"gender":"Laki-Laki","address":"Matraman","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-10T00:00:00","endSub":"2022-12-10T00:00:00"},{"Nomor":"19","userType":"Child","nameUser":"Rajagukguk","emailUser":"rickoenrile23@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 8 Kemang Pratama","StudyLevel":"SMP"},"gender":"Laki-Laki","address":"Matraman","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-10T00:00:00","endSub":"2022-12-10T00:00:00"},{"Nomor":"20","userType":"Child","nameUser":"Muhammad","emailUser":"muhammsyihab.dev@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"TKI Al Azhar 2 Pasar Minggu","StudyLevel":"TK"},"gender":"Laki-Laki","address":"Matraman","status":"Activated","subscriptionStatus":"Subscribed","subscriptionPlan":"Paket 2","startSub":"2021-12-10T00:00:00","endSub":"2022-12-10T00:00:00"}]')}}]);
//# sourceMappingURL=46.7e4feec8.chunk.js.map