(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[47],{103:function(e,t,a){"use strict";a.d(t,"m",(function(){return o})),a.d(t,"f",(function(){return l})),a.d(t,"o",(function(){return s})),a.d(t,"n",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"h",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"i",(function(){return p})),a.d(t,"b",(function(){return h})),a.d(t,"k",(function(){return b})),a.d(t,"j",(function(){return f})),a.d(t,"e",(function(){return g})),a.d(t,"g",(function(){return j})),a.d(t,"l",(function(){return O})),a.d(t,"a",(function(){return S}));var n=a(18),r=a.n(n),i=a(20),o=function(e){return r()({method:"post",url:i.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:i.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return r()({method:"post",url:i.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return r()({method:"post",url:i.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:i.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:i.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:i.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:i.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:i.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:i.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return r()({method:"post",url:i.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:i.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:i.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return r()({method:"post",url:i.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},S=function(e){return r()({method:"post",url:i.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},112:function(e,t,a){},121:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return p})),a.d(t,"g",(function(){return h})),a.d(t,"f",(function(){return b}));var n=a(101),r=a(7),i=a(2),o=a.n(i),l=(a(122),a(164)),s=a(0);function c(e){var t=e.column,a=t.filterValue,n=t.preFilteredRows,r=t.setFilter;n.length;return Object(s.jsx)("input",{value:a||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,a=t.filterValue,r=t.setFilter,i=t.preFilteredRows,l=t.id,c=o.a.useMemo((function(){var e=new Set;return i.forEach((function(t){void 0===t.values[l]||e.has(t.values[l])||e.add(t.values[l])})),Object(n.a)(e.values())}),[l,i]);return Object(s.jsxs)("select",{value:a,onChange:function(e){r(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),c.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,a=t.filterValue,r=t.setFilter,i=t.preFilteredRows,l=t.id,c=o.a.useMemo((function(){var e=new Set;return i.forEach((function(t){if(console.log("ini row",t.values[l]),console.log("ini tipe row",t.values[l]instanceof Array),console.log("ini length row",t.values[l].length),t.values[l]instanceof Array&&t.values[l].length>0)for(var a=0;a<t.values[l].length;a++){var n=t.values[l][a];void 0===n||e.has(n)||e.add(n)}})),Object(n.a)(e.values())}),[l,i]);return Object(s.jsxs)("select",{value:a,onChange:function(e){r(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),c.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function m(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,i=t.preFilteredRows,l=t.setFilter,c=t.id,u=o.a.useMemo((function(){var e=i.length?i[0].values[c]:0,t=i.length?i[0].values[c]:0;return i.forEach((function(a){e=Math.min(a.values[c],e),t=Math.max(a.values[c],t)})),[e,t]}),[c,i]),d=Object(r.a)(u,2),m=d[0],p=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:n[0]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},min:m,placeholder:"Min (".concat(m,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(s.jsx)("input",{value:n[1]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},min:m,placeholder:"Max (".concat(p,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function p(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,i=t.preFilteredRows,l=t.setFilter,c=t.id,u=o.a.useMemo((function(){var e=new Date("2020-01-01"),t=new Date("2099-12-31");return i.forEach((function(a){e=a.values[c]&&new Date(a.values[c])<=e?new Date(a.values[c]):e,t=a.values[c]&&new Date(a.values[c])>=t?new Date(a.values[c]):t})),[e,t]}),[c,i]),d=Object(r.a)(u,2),m=d[0],p=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:n[0]||m.toISOString().slice(0,10),type:"date",min:m.toISOString().slice(0,10),max:n[1]||p.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(s.jsx)("input",{value:n[1]||p.toISOString().slice(0,10),type:"date",min:n[0]||m.toISOString().slice(0,10),max:p.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function h(e,t,a){return Object(l.a)(e,a,{keys:[function(e){return e.values[t]}]})}function b(e,t,a){var n=new Date(a[0]),r=new Date(a[1]);return e.filter((function(i){var o=new Date(i.values[t]);return 0===a.length?e:o>=n&&o<=r}))}h.autoRemove=function(e){return!e},b.autoRemove=function(e){return!e}},1252:function(e,t,a){},1253:function(e){e.exports=JSON.parse('[{"Nomor":"6","userType":"Child","nameUser":"Hafiz","emailUser":"hdcuber96@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 8 Kota Bekasi","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"7","userType":"Child","nameUser":"Nafies","emailUser":"gowesjersey@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 9 Bekasi","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"8","userType":"Child","nameUser":"Santa","emailUser":"siregarsanta@defghi.id","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 8 Kembangan","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"9","userType":"Child","nameUser":"Jane","emailUser":"siregarjane20@gmail.com","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 9 Kembangan","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"10","userType":"Child","nameUser":"Nera","emailUser":"nera.rane1010@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 2 Pejaten","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"11","userType":"Child","nameUser":"Gita","emailUser":"gitaayufachrianda@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 4 Kebayoran Lama","StudyLevel":"SD"},"lockScreenStatus":"On","modeAsuh":"ON","blockedApps":["facebook,  mobile legends, sudoku, tiktok"],"limitedApps":["Youtube, tiktok"],"usageScheduleStatus":"On"},{"Nomor":"12","userType":"Child","nameUser":"Angga","emailUser":"singgih.zuliangga@defghi.id","parentName":["Rafik Ahmad"],"parentEmail":["rafik.ahmad@defghi.global"],"childInfo":{"schoolName":"SDI Al Azhar 61 Serpong","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Instagram,  Clash royale, sudoku,Tiktok, Youtube"],"limitedApps":["PUBG, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"13","userType":"Child","nameUser":"Singgih","emailUser":"zuliangga.leo@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Instagram,  Clash royale, sudoku,Tiktok, Youtube, twitter"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"14","userType":"Child","nameUser":"Rio","emailUser":"ricko@ide2sen.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 19 Pamulang","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["facebook,  mobile legends"],"limitedApps":["youtube, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"15","userType":"Child","nameUser":"Christiani","emailUser":"christiani.silaen@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMA Islam Al Azhar 1 Keb. Baru","StudyLevel":"SMA"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Youtube, Clash of Clans, sudoku, Free fire, kaskus"],"limitedApps":["youtube, kaskus"],"usageScheduleStatus":"Off"},{"Nomor":"16","userType":"Child","nameUser":"Nova","emailUser":"ndaritonang@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 4 Kemandoran","StudyLevel":"SMP"},"lockScreenStatus":"On","modeAsuh":"ON","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"17","userType":"Child","nameUser":"Amir","emailUser":"mirza.dzaky.azizi@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Youtube, Pubg, sudoku, Free fire, Chess"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"18","userType":"Child","nameUser":"Enrile","emailUser":"ricko@ide2sen.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 6 Jakapermai","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"19","userType":"Child","nameUser":"Rajagukguk","emailUser":"rickoenrile23@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 8 Kemang Pratama","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"On"},{"Nomor":"20","userType":"Child","nameUser":"Muhammad","emailUser":"muhammsyihab.dev@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"TKI Al Azhar 2 Pasar Minggu","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"}]')},129:function(e,t,a){"use strict";var n=a(101),r=a(5),i=a(34),o=a(2),l=a.n(o),s=a(8),c=a(122),u=a(135),d=(a(112),a(121)),m=a(165),p=a(157),h=(a(166),a(90)),b=a(0);t.a=function(e){var t=e.DATA,a=e.COLUMNS,f=e.renderRowSubComponent,g=e.showCheckbox,j=void 0!==g&&g,O=e.notifContext,S=void 0===O?"":O,v=l.a.useMemo((function(){return{fuzzyText:d.g,dateBetween:d.f,text:function(e,t,a){return e.filter((function(e){var n=e.values[t];return void 0===n||String(n).toLowerCase().startsWith(String(a).toLowerCase())}))}}}),[]),k=l.a.useMemo((function(){return{Filter:d.b}}),[]),N=l.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(i.a)(e,["indeterminate"]),o=l.a.useRef(),s=t||o;return l.a.useEffect((function(){s.current.indeterminate=a}),[s,a]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(r.a)({type:"checkbox",ref:s},n))})})),x=Object(o.useMemo)((function(){return t}),[t]),A=Object(c.useTable)({columns:a,data:x,defaultColumn:k,filterTypes:v,initialState:{hiddenColumns:["emailUser","parentEmail","_id"]}},c.useFilters,c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination,c.useRowSelect,(function(e){j&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(b.jsx)("div",{children:Object(b.jsx)(N,Object(r.a)({},t()))})},Cell:function(e){var t=e.row;return Object(b.jsx)("div",{children:Object(b.jsx)(N,Object(r.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(n.a)(e))}))})),y=A.getTableProps,C=A.getTableBodyProps,T=A.headerGroups,I=A.prepareRow,F=A.page,U=A.rows,w=A.canPreviousPage,E=A.canNextPage,_=A.pageOptions,P=A.pageCount,D=A.gotoPage,R=A.nextPage,L=A.previousPage,M=A.setPageSize,z=A.visibleColumns,H=A.selectedFlatRows,K=(A.state.selectedRowIds,A.state),B=K.pageIndex,G=K.pageSize,V=(K.expanded,A.state),J=A.setGlobalFilter,Y=V.globalFilter,q=function(){for(var e=U,t=[],a=0;a<e.length;a++){var n={};I(e[a]);for(var r=0;r<e[a].cells.length;r++)"rowNumber"!==e[a].cells[r].column.id&&"selection"!==e[a].cells[r].column.id&&"buttonStatus"!==e[a].cells[r].column.id&&(e[a].cells[r].value&&"[object Date]"===Object.prototype.toString.call(e[a].cells[r].value)&&!isNaN(e[a].cells[r].value)?n[e[a].cells[r].column.Header]=e[a].cells[r].value.toISOString().split("T")[0]:n[e[a].cells[r].column.Header]=e[a].cells[r].value);t.push(n)}return t};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"tools",children:[Object(b.jsxs)("div",{className:"table_props",children:[Object(b.jsxs)("span",{children:["Total: ",U.length," Data"]}),Object(b.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:Y||"",onChange:function(e){J(e.currentTarget.value)}})]}),Object(b.jsxs)("button",{className:"btn_tools",children:[Object(b.jsx)(h.c,{})," ",Object(b.jsx)(m.CSVLink,{data:q(),children:"Download as CSV"})]}),Object(b.jsxs)("button",{className:"btn_tools",onClick:function(){var e=q();if(e.length>0){var t=new p.default("landscape","pt","A4");t.setFontSize(15);var a={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(a),t.save("report.pdf")}},children:[Object(b.jsx)(h.b,{})," Download as PDF"]}),j?H.length>0?Object(b.jsxs)("button",{className:"btn_tools",children:[Object(b.jsx)(h.a,{}),Object(b.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",S);for(var e=[],t=[],a=0;a<H.length;a++)e.push(H[a].original.emailUser),"child"===H[a].original.userType&&(e.includes(H[a].original.emailUser)||e.push(H[a].original.emailUser)),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(b.jsxs)("button",{className:"btn_tools_disabled",children:[Object(b.jsx)(h.a,{}),Object(b.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,j?H.length>0?Object(b.jsxs)("button",{className:"btn_tools",children:[Object(b.jsx)(h.a,{}),Object(b.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",S);for(var e=[],t=[],a=0;a<H.length;a++)void 0!==H[a].original.parentEmail&&(e.some((function(e){return H[a].original.parentEmail.includes(e)}))||("child"===H[a].original.userType?e.push.apply(e,Object(n.a)(H[a].original.parentEmail)):e.push(H[a].original.emailUser))),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(b.jsxs)("button",{className:"btn_tools_disabled",children:[Object(b.jsx)(h.a,{}),Object(b.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,j?H.length>0?Object(b.jsxs)("button",{className:"btn_tools",children:[Object(b.jsx)(h.a,{}),Object(b.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",S);for(var e=[],t=[],a=0;a<H.length;a++)e.includes(H[a].original.emailUser)||e.push(H[a].original.emailUser),void 0!==H[a].original.parentEmail&&(e.some((function(e){return H[a].original.parentEmail.includes(e)}))||e.push(H[a].original.parentEmail)),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(b.jsxs)("button",{className:"btn_tools_disabled",children:[Object(b.jsx)(h.a,{}),Object(b.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(b.jsx)("div",{className:"utils",children:Object(b.jsxs)("div",{className:"pagination",children:[Object(b.jsx)("button",{onClick:function(){return D(0)},disabled:!w,children:"<<"}),Object(b.jsx)("button",{onClick:function(){return L()},disabled:!w,children:"<"}),Object(b.jsx)("button",{onClick:function(){return R()},disabled:!E,children:">"}),Object(b.jsx)("button",{onClick:function(){return D(P-1)},disabled:!E,children:">>"}),Object(b.jsxs)("span",{children:["Page "," ",Object(b.jsxs)("strong",{children:[B+1," of ",_.length]})]}),Object(b.jsxs)("span",{children:["| Go to page:",Object(b.jsx)("input",{type:"number",defaultValue:B+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;D(t)}})]}),Object(b.jsx)("select",{value:G,onChange:function(e){M(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(b.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(b.jsx)("div",{className:"table_container",children:Object(b.jsxs)("table",Object(r.a)(Object(r.a)({},y()),{},{children:[Object(b.jsx)("thead",{children:T.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(b.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(b.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(b.jsx)(u.a,{}):Object(b.jsx)(u.b,{}):""})]}))}))})),Object(b.jsx)("tr",{children:e.headers.map((function(e){return Object(b.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(b.jsx)("tbody",Object(r.a)(Object(r.a)({},C()),{},{children:F.map((function(e,t){return I(e),Object(b.jsxs)(o.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(b.jsx)("tr",{children:e.cells.map((function(e){return Object(b.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{className:(e.value&&!Array.isArray(e.value)||Array.isArray(e.value)&&e.value.length>0||"selection"===e.column.id||e.column.id,"cell"),children:[" ","rowNumber"!==e.column.id?e.render("Cell"):t+1+B*G," "]}))}))}),e.isExpanded?Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:z.length,children:f({row:e})})}):null]}))}))}))]}))})]})}},1473:function(e,t,a){"use strict";a.r(t);var n=a(101),r=a(7),i=a(2),o=a(129),l=a(121),s=[{Header:"No.",id:"rowNumber",accessor:"emailUser",disableFilters:!0},{Header:"Email User",accessor:"emailUser",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama",accessor:"nameUser",disableFilters:!0},{Header:"Email Orang tua",accessor:"parentEmail",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama Orang tua",accessor:"parentName",disableFilters:!0,Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Sekolah",accessor:"childInfo.schoolName",Filter:l.e,filter:"equals"},{Header:"Pendidikan",accessor:"childInfo.StudyLevel",Filter:l.e,filter:"equals"},{Header:"Status Lock Screen",accessor:"lockScreenStatus",Filter:l.e,filter:"equals"},{Header:"Status Mode Asuh",accessor:"modeAsuh",Filter:l.e,filter:"equals"},{Header:"Aplikasi yang Diblokir",accessor:"blockedApps",Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Aplikasi yang Dibatasi",accessor:"limitedApps",Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Status Jadwal Penggunaan",accessor:"usageScheduleStatus",Filter:l.e,filter:"equals"}],c=a(94),u=a(36),d=(a(1252),a(1253)),m=a(103),p=(a(173),a(0));t.default=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),a=t[0],l=t[1],h=Object(i.useState)(),b=Object(r.a)(h,2),f=b[0],g=b[1],j=Object(i.useState)(),O=Object(r.a)(j,2),S=(O[0],O[1],Object(i.useState)("real")),v=Object(r.a)(S,2),k=v[0],N=v[1];return Object(i.useEffect)((function(){if("dummy"===k)g(d),l(!1);else{var e={whereKeyValues:{packageId:"com.byasia.ruangortu"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};Object(m.o)(e).then((function(e){for(var t=e.data.users,a=[],r=0;r<t.length;r++){var i=t[r];if("child"===i.userType){for(var o=[],s=[i.parentEmail].concat(Object(n.a)(i.otherParentEmail)),c=0;c<t.length;c++){var u=t[c];(i.parentEmail===u.emailUser||i.otherParentEmail.includes(u.emailUser))&&o.push(u.nameUser)}i.parentName=o,i.parentEmail=s,a.push(i)}}var d=a.length,p={limit:Number.MAX_SAFE_INTEGER},h=Object(m.i)(p),b=Object(m.h)(p),f=Object(m.c)(p),j=Object(m.b)(p);Promise.all([h,b,f,j]).then((function(e){for(var t=e[0].data.childModeAsuhs,n=e[1].data.deviceUsageSchedules,r=e[2].data.appUsageLimit,i=e[3].data.appIcons,o=0;o<d;o++){for(var s=a[o],c=!1,u=0;u<t.length&&!c;u++)s.emailUser===t[u].emailUser&&(s.modeAsuh="On",c=!0);c||(s.modeAsuh="Off")}for(o=0;o<d;o++){var m=a[o],p=[],h=[];for(u=0;u<r.length;u++)if(m.emailUser===r[u].emailUser)if(r[u].limit>0){for(var b=0;b<i.length;b++)if(r[u].appId===i[b].appId){h.push(i[b].appName);break}}else if(0===r[u].limit)for(b=0;b<i.length;b++)if(r[u].appId===i[b].appId){p.push(i[b].appName);break}p.length>0&&(m.blockedApps=p),h.length>0&&(m.limitedApps=h)}for(o=0;o<d;o++){var f=a[o],j=!1,O=!1;for(u=0;u<n.length&&(!j||!O);u++)f.emailUser===n[u].emailUser&&("terjadwal"===n[u].scheduleType&&n[u].deviceUsageEndTime===n[u].deviceUsageStartTime?(f.lockScreenStatus="On",j=!0):(f.usageScheduleStatus="On",O=!0));O||(f.usageScheduleStatus="Off"),j||(f.lockScreenStatus="Off")}g(a),l(!1)}))})).catch((function(e){l(!1)}))}}),[,k]),a?Object(p.jsx)(u.a,{}):Object(p.jsxs)("div",{className:"Controlling",children:[Object(p.jsx)(c.a,{headingName:"Controlling Status",routes:[{name:"Report"},{name:"Controlling Status",path:"/report/controlling-status"}]}),Object(p.jsxs)("div",{className:"Dashboard_period",children:[Object(p.jsx)("button",{className:"real"===k?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==k&&(l(!0),N("real"))},children:"Prod"}),Object(p.jsx)("button",{className:"dummy"===k?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==k&&(l(!0),N("dummy"))},children:"Dummy"})]}),Object(p.jsx)("div",{className:"Controlling_table",children:Object(p.jsx)(o.a,{COLUMNS:s,DATA:f,showCheckbox:!0,notifContext:"Status Pembatasan Gadget Anak"})})]})}},94:function(e,t,a){"use strict";a(2);var n=a(8),r=(a(95),a(0));t.a=function(e){var t=e.headingName,a=e.routes,i=void 0===a?[]:a;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:i.length>0&&i.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},95:function(e,t,a){}}]);
//# sourceMappingURL=47.35500143.chunk.js.map