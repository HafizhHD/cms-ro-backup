(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[37],{103:function(e,t,a){"use strict";a.d(t,"m",(function(){return o})),a.d(t,"f",(function(){return l})),a.d(t,"o",(function(){return s})),a.d(t,"n",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"h",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"i",(function(){return p})),a.d(t,"b",(function(){return h})),a.d(t,"k",(function(){return g})),a.d(t,"j",(function(){return b})),a.d(t,"e",(function(){return f})),a.d(t,"g",(function(){return j})),a.d(t,"l",(function(){return O})),a.d(t,"a",(function(){return S}));var n=a(18),i=a.n(n),r=a(20),o=function(e){return i()({method:"post",url:r.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return i()({method:"post",url:r.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return i()({method:"post",url:r.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return i()({method:"post",url:r.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return i()({method:"post",url:r.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return i()({method:"post",url:r.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return i()({method:"post",url:r.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return i()({method:"post",url:r.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return i()({method:"post",url:r.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return i()({method:"post",url:r.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return i()({method:"post",url:r.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return i()({method:"post",url:r.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return i()({method:"post",url:r.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return i()({method:"post",url:r.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},S=function(e){return i()({method:"post",url:r.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},112:function(e,t,a){},121:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return p})),a.d(t,"g",(function(){return h})),a.d(t,"f",(function(){return g}));var n=a(101),i=a(7),r=a(2),o=a.n(r),l=(a(122),a(165)),s=a(0);function c(e){var t=e.column,a=t.filterValue,n=t.preFilteredRows,i=t.setFilter;n.length;return Object(s.jsx)("input",{value:a||"",onChange:function(e){i(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,a=t.filterValue,i=t.setFilter,r=t.preFilteredRows,l=t.id,c=o.a.useMemo((function(){var e=new Set;return r.forEach((function(t){void 0===t.values[l]||e.has(t.values[l])||e.add(t.values[l])})),Object(n.a)(e.values())}),[l,r]);return Object(s.jsxs)("select",{value:a,onChange:function(e){i(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),c.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,a=t.filterValue,i=t.setFilter,r=t.preFilteredRows,l=t.id,c=o.a.useMemo((function(){var e=new Set;return r.forEach((function(t){if(console.log("ini row",t.values[l]),console.log("ini tipe row",t.values[l]instanceof Array),console.log("ini length row",t.values[l].length),t.values[l]instanceof Array&&t.values[l].length>0)for(var a=0;a<t.values[l].length;a++){var n=t.values[l][a];void 0===n||e.has(n)||e.add(n)}})),Object(n.a)(e.values())}),[l,r]);return Object(s.jsxs)("select",{value:a,onChange:function(e){i(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),c.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function m(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,r=t.preFilteredRows,l=t.setFilter,c=t.id,u=o.a.useMemo((function(){var e=r.length?r[0].values[c]:0,t=r.length?r[0].values[c]:0;return r.forEach((function(a){e=Math.min(a.values[c],e),t=Math.max(a.values[c],t)})),[e,t]}),[c,r]),d=Object(i.a)(u,2),m=d[0],p=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:n[0]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},min:m,placeholder:"Min (".concat(m,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(s.jsx)("input",{value:n[1]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},min:m,placeholder:"Max (".concat(p,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function p(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,r=t.preFilteredRows,l=t.setFilter,c=t.id,u=o.a.useMemo((function(){var e=new Date("2022-08-13"),t=new Date;return t.setFullYear(t.getFullYear()+1),r.forEach((function(a){e=a.values[c]&&new Date(a.values[c])<=e?new Date(a.values[c]):e,t=a.values[c]&&new Date(a.values[c])>=t?new Date(a.values[c]):t})),[e,t]}),[c,r]),d=Object(i.a)(u,2),m=d[0],p=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:n[0]||m.toISOString().slice(0,10),type:"date",min:m.toISOString().slice(0,10),max:n[1]||p.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(s.jsx)("input",{value:n[1]||p.toISOString().slice(0,10),type:"date",min:n[0]||m.toISOString().slice(0,10),max:p.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function h(e,t,a){return Object(l.a)(e,a,{keys:[function(e){return e.values[t]}]})}function g(e,t,a){var n=new Date(a[0]),i=new Date(a[1]);return e.filter((function(r){var o=new Date(r.values[t]);return 0===a.length?e:o>=n&&o<=i}))}h.autoRemove=function(e){return!e},g.autoRemove=function(e){return!e}},1253:function(e,t,a){},1254:function(e){e.exports=JSON.parse('[{"Nomor":"6","userType":"Child","nameUser":"Hafiz","emailUser":"hdcuber96@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 8 Kota Bekasi","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"7","userType":"Child","nameUser":"Nafies","emailUser":"gowesjersey@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 9 Bekasi","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"8","userType":"Child","nameUser":"Santa","emailUser":"siregarsanta@defghi.id","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 8 Kembangan","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"9","userType":"Child","nameUser":"Jane","emailUser":"siregarjane20@gmail.com","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 9 Kembangan","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"10","userType":"Child","nameUser":"Nera","emailUser":"nera.rane1010@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 2 Pejaten","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"11","userType":"Child","nameUser":"Gita","emailUser":"gitaayufachrianda@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 4 Kebayoran Lama","StudyLevel":"SD"},"lockScreenStatus":"On","modeAsuh":"ON","blockedApps":["facebook,  mobile legends, sudoku, tiktok"],"limitedApps":["Youtube, tiktok"],"usageScheduleStatus":"On"},{"Nomor":"12","userType":"Child","nameUser":"Angga","emailUser":"singgih.zuliangga@defghi.id","parentName":["Rafik Ahmad"],"parentEmail":["rafik.ahmad@defghi.global"],"childInfo":{"schoolName":"SDI Al Azhar 61 Serpong","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Instagram,  Clash royale, sudoku,Tiktok, Youtube"],"limitedApps":["PUBG, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"13","userType":"Child","nameUser":"Singgih","emailUser":"zuliangga.leo@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Instagram,  Clash royale, sudoku,Tiktok, Youtube, twitter"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"14","userType":"Child","nameUser":"Rio","emailUser":"ricko@ide2sen.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 19 Pamulang","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["facebook,  mobile legends"],"limitedApps":["youtube, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"15","userType":"Child","nameUser":"Christiani","emailUser":"christiani.silaen@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMA Islam Al Azhar 1 Keb. Baru","StudyLevel":"SMA"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Youtube, Clash of Clans, sudoku, Free fire, kaskus"],"limitedApps":["youtube, kaskus"],"usageScheduleStatus":"Off"},{"Nomor":"16","userType":"Child","nameUser":"Nova","emailUser":"ndaritonang@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 4 Kemandoran","StudyLevel":"SMP"},"lockScreenStatus":"On","modeAsuh":"ON","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"17","userType":"Child","nameUser":"Amir","emailUser":"mirza.dzaky.azizi@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Youtube, Pubg, sudoku, Free fire, Chess"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"18","userType":"Child","nameUser":"Enrile","emailUser":"ricko@ide2sen.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 6 Jakapermai","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"19","userType":"Child","nameUser":"Rajagukguk","emailUser":"rickoenrile23@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 8 Kemang Pratama","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"On"},{"Nomor":"20","userType":"Child","nameUser":"Muhammad","emailUser":"muhammsyihab.dev@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"TKI Al Azhar 2 Pasar Minggu","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"}]')},129:function(e,t,a){"use strict";var n=a(101),i=a(5),r=a(34),o=a(2),l=a.n(o),s=a(9),c=a(122),u=a(135),d=(a(112),a(121)),m=a(166),p=a(158),h=(a(167),a(90)),g=a(0);t.a=function(e){var t=e.DATA,a=e.COLUMNS,b=e.renderRowSubComponent,f=e.showCheckbox,j=void 0!==f&&f,O=e.notifContext,S=void 0===O?"":O,v=l.a.useMemo((function(){return{fuzzyText:d.g,dateBetween:d.f,text:function(e,t,a){return e.filter((function(e){var n=e.values[t];return void 0===n||String(n).toLowerCase().startsWith(String(a).toLowerCase())}))}}}),[]),k=l.a.useMemo((function(){return{Filter:d.b}}),[]),N=l.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(r.a)(e,["indeterminate"]),o=l.a.useRef(),s=t||o;return l.a.useEffect((function(){s.current.indeterminate=a}),[s,a]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("input",Object(i.a)({type:"checkbox",ref:s},n))})})),y=Object(o.useMemo)((function(){return t}),[t]),x=Object(c.useTable)({columns:a,data:y,defaultColumn:k,filterTypes:v,initialState:{hiddenColumns:["emailUser","parentEmail","_id"],pageSize:20}},c.useFilters,c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination,c.useRowSelect,(function(e){j&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(g.jsx)("div",{children:Object(g.jsx)(N,Object(i.a)({},t()))})},Cell:function(e){var t=e.row;return Object(g.jsx)("div",{children:Object(g.jsx)(N,Object(i.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(n.a)(e))}))})),A=x.getTableProps,C=x.getTableBodyProps,T=x.headerGroups,w=x.prepareRow,F=x.page,I=x.rows,U=x.canPreviousPage,E=x.canNextPage,_=x.pageOptions,P=x.pageCount,D=x.gotoPage,R=x.nextPage,L=x.previousPage,z=x.setPageSize,M=x.visibleColumns,H=x.selectedFlatRows,K=(x.state.selectedRowIds,x.state),B=K.pageIndex,G=K.pageSize,V=(K.expanded,x.state),J=x.setGlobalFilter,Y=V.globalFilter,q=function(){for(var e=I,t=[],a=0;a<e.length;a++){var n={};w(e[a]);for(var i=0;i<e[a].cells.length;i++)"rowNumber"!==e[a].cells[i].column.id&&"selection"!==e[a].cells[i].column.id&&"buttonStatus"!==e[a].cells[i].column.id&&(e[a].cells[i].value&&"[object Date]"===Object.prototype.toString.call(e[a].cells[i].value)&&!isNaN(e[a].cells[i].value)?n[e[a].cells[i].column.Header]=e[a].cells[i].value.toISOString().split("T")[0]:n[e[a].cells[i].column.Header]=e[a].cells[i].value);t.push(n)}return t};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"tools",children:[Object(g.jsxs)("div",{className:"table_props",children:[Object(g.jsxs)("span",{children:["Total: ",I.length," Data"]}),Object(g.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:Y||"",onChange:function(e){J(e.currentTarget.value)}})]}),Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.c,{})," ",Object(g.jsx)(m.CSVLink,{data:q(),children:"Download as CSV"})]}),Object(g.jsxs)("button",{className:"btn_tools",onClick:function(){var e=q();if(e.length>0){var t=new p.default("landscape","pt","A4");t.setFontSize(15);var a={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(a),t.save("report.pdf")}},children:[Object(g.jsx)(h.b,{})," Download as PDF"]}),j?H.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",S);for(var e=[],t=[],a=0;a<H.length;a++)e.push(H[a].original.emailUser),"child"===H[a].original.userType&&(e.includes(H[a].original.emailUser)||e.push(H[a].original.emailUser)),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,j?H.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",S);for(var e=[],t=[],a=0;a<H.length;a++)void 0!==H[a].original.parentEmail&&(e.some((function(e){return H[a].original.parentEmail.includes(e)}))||("child"===H[a].original.userType?e.push.apply(e,Object(n.a)(H[a].original.parentEmail)):e.push(H[a].original.emailUser))),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,j?H.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",S);for(var e=[],t=[],a=0;a<H.length;a++)e.includes(H[a].original.emailUser)||e.push(H[a].original.emailUser),void 0!==H[a].original.parentEmail&&(e.some((function(e){return H[a].original.parentEmail.includes(e)}))||e.push(H[a].original.parentEmail)),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(g.jsx)("div",{className:"utils",children:Object(g.jsxs)("div",{className:"pagination",children:[Object(g.jsx)("button",{onClick:function(){return D(0)},disabled:!U,children:"<<"}),Object(g.jsx)("button",{onClick:function(){return L()},disabled:!U,children:"<"}),Object(g.jsx)("button",{onClick:function(){return R()},disabled:!E,children:">"}),Object(g.jsx)("button",{onClick:function(){return D(P-1)},disabled:!E,children:">>"}),Object(g.jsxs)("span",{children:["Page "," ",Object(g.jsxs)("strong",{children:[B+1," of ",_.length]})]}),Object(g.jsxs)("span",{children:["| Go to page:",Object(g.jsx)("input",{type:"number",defaultValue:B+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;D(t)}})]}),Object(g.jsx)("select",{value:G,onChange:function(e){z(Number(e.target.value))},children:[20,50,100].map((function(e){return Object(g.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(g.jsx)("div",{className:"table_container",children:Object(g.jsxs)("table",Object(i.a)(Object(i.a)({},A()),{},{children:[Object(g.jsx)("thead",{children:T.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("tr",Object(i.a)(Object(i.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(g.jsxs)("th",Object(i.a)(Object(i.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(g.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(g.jsx)(u.a,{}):Object(g.jsx)(u.b,{}):""})]}))}))})),Object(g.jsx)("tr",{children:e.headers.map((function(e){return Object(g.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(g.jsx)("tbody",Object(i.a)(Object(i.a)({},C()),{},{children:F.map((function(e,t){return w(e),Object(g.jsxs)(o.Fragment,Object(i.a)(Object(i.a)({},e.getRowProps()),{},{children:[Object(g.jsx)("tr",{children:e.cells.map((function(e){return Object(g.jsxs)("td",Object(i.a)(Object(i.a)({},e.getCellProps()),{},{className:(e.value&&!Array.isArray(e.value)||Array.isArray(e.value)&&e.value.length>0||"selection"===e.column.id||e.column.id,"cell"),children:[" ","rowNumber"!==e.column.id?e.render("Cell"):t+1+B*G," "]}))}))}),e.isExpanded?Object(g.jsx)("tr",{children:Object(g.jsx)("td",{colSpan:M.length,children:b({row:e})})}):null]}))}))}))]}))})]})}},141:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var n=["singgih.zuliangga@defghi.id","ortuasiaparent01@gmail.com","ortuasiaparent02@gmail.com","ortuasiachild01@gmail.com","ortuasiachild02@gmail.com","yaswin.rw@gnail.com","yaswin.retdy@gmail.com","rickotesting@gmail.com","kartono@defghi.id","kartono.cc@gmail.com","mirza.dzaky.azizi@gmail.com","helwaanyapanjang@gmail.com ","uwawwaunch@gmail.com","ilhamanwar@gmail.com","ricky.rachadi@gmail.com","ruangortuchild@gmail.com","gowesjersey02@gmail.com","hafizh.dary@defghi.id","hafizhd.jp@gmail.com","abcwirayudaha56@gmail.com","hervyguitar@gmai.com","rickorajagukguk23@gmail.com","ortuasiatestchild@gmail.com","ortuasiatestparent@gmail.com","roichildtest01@gmail.com","roiparenttest01@gmail.com","ruangortutesting02@gmail.com","ruangortutesting01@gmail.com","ruangortuchild2@gmail.com","ruangortuparent@gmail.com","ruangortutesting01@gmail.com"],i=new Date("2022-08-13")},1476:function(e,t,a){"use strict";a.r(t);var n=a(101),i=a(7),r=a(2),o=a(129),l=a(121),s=[{Header:"No.",id:"rowNumber",accessor:"emailUser",disableFilters:!0},{Header:"Email User",accessor:"emailUser",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama",accessor:"nameUser",disableFilters:!0},{Header:"Email Orang tua",accessor:"parentEmail",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama Orang tua",accessor:"parentName",disableFilters:!0,Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Sekolah",accessor:"childInfo.schoolName",Filter:l.e,filter:"equals"},{Header:"Pendidikan",accessor:"childInfo.StudyLevel",Filter:l.e,filter:"equals"},{Header:"Status Lock Screen",accessor:"lockScreenStatus",Filter:l.e,filter:"equals"},{Header:"Status Mode Asuh",accessor:"modeAsuh",Filter:l.e,filter:"equals"},{Header:"Aplikasi yang Diblokir",accessor:"blockedApps",Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Aplikasi yang Dibatasi",accessor:"limitedApps",Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Status Jadwal Penggunaan",accessor:"usageScheduleStatus",Filter:l.e,filter:"equals"}],c=a(94),u=a(36),d=(a(1253),a(1254)),m=a(141),p=a(103),h=(a(174),a(0));t.default=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),a=t[0],l=t[1],g=Object(r.useState)(),b=Object(i.a)(g,2),f=b[0],j=b[1],O=Object(r.useState)(),S=Object(i.a)(O,2),v=(S[0],S[1],Object(r.useState)("real")),k=Object(i.a)(v,2),N=k[0],y=k[1];return Object(r.useEffect)((function(){if("dummy"===N)j(d),l(!1);else{var e={whereKeyValues:{packageId:"com.byasia.ruangortu",dateCreated:{$gte:m.a.toISOString().split("T")[0]},emailUser:{$nin:m.b}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};Object(p.o)(e).then((function(e){for(var t=e.data.users,a=[],i=0;i<t.length;i++){var r=t[i];if("child"===r.userType){for(var o=[],s=[r.parentEmail].concat(Object(n.a)(r.otherParentEmail)),c=0;c<t.length;c++){var u=t[c];(r.parentEmail===u.emailUser||r.otherParentEmail.includes(u.emailUser))&&o.push(u.nameUser)}r.parentName=o,r.parentEmail=s,a.push(r)}}var d=a.length,m={limit:Number.MAX_SAFE_INTEGER},h=Object(p.i)(m),g=Object(p.h)(m),b=Object(p.c)(m),f=Object(p.b)(m);Promise.all([h,g,b,f]).then((function(e){for(var t=e[0].data.childModeAsuhs,n=e[1].data.deviceUsageSchedules,i=e[2].data.appUsageLimit,r=e[3].data.appIcons,o=0;o<d;o++){for(var s=a[o],c=!1,u=0;u<t.length&&!c;u++)s.emailUser===t[u].emailUser&&(s.modeAsuh="On",c=!0);c||(s.modeAsuh="Off")}for(o=0;o<d;o++){var m=a[o],p=[],h=[];for(u=0;u<i.length;u++)if(m.emailUser===i[u].emailUser)if(i[u].limit>0){for(var g=0;g<r.length;g++)if(i[u].appId===r[g].appId){h.push(r[g].appName);break}}else if(0===i[u].limit)for(g=0;g<r.length;g++)if(i[u].appId===r[g].appId){p.push(r[g].appName);break}p.length>0&&(m.blockedApps=p),h.length>0&&(m.limitedApps=h)}for(o=0;o<d;o++){var b=a[o],f=!1,O=!1;for(u=0;u<n.length&&(!f||!O);u++)b.emailUser===n[u].emailUser&&("terjadwal"===n[u].scheduleType&&n[u].deviceUsageEndTime===n[u].deviceUsageStartTime?(b.lockScreenStatus="On",f=!0):(b.usageScheduleStatus="On",O=!0));O||(b.usageScheduleStatus="Off"),f||(b.lockScreenStatus="Off")}j(a),l(!1)}))})).catch((function(e){l(!1)}))}}),[,N]),a?Object(h.jsx)(u.a,{}):Object(h.jsxs)("div",{className:"Controlling",children:[Object(h.jsx)(c.a,{headingName:"Controlling Status",routes:[{name:"Report"},{name:"Controlling Status",path:"/report/controlling-status"}]}),Object(h.jsxs)("div",{className:"Dashboard_period",children:[Object(h.jsx)("button",{className:"real"===N?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==N&&(l(!0),y("real"))},children:"Prod"}),Object(h.jsx)("button",{className:"dummy"===N?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==N&&(l(!0),y("dummy"))},children:"Dummy"})]}),Object(h.jsx)("div",{className:"Controlling_table",children:Object(h.jsx)(o.a,{COLUMNS:s,DATA:f,showCheckbox:!0,notifContext:"Status Pembatasan Gadget Anak"})})]})}},94:function(e,t,a){"use strict";a(2);var n=a(9),i=(a(95),a(0));t.a=function(e){var t=e.headingName,a=e.routes,r=void 0===a?[]:a;return Object(i.jsxs)("div",{className:"Heading",children:[Object(i.jsx)("h1",{children:t}),Object(i.jsx)("ul",{className:"Heading__breadcumb",children:r.length>0&&r.map((function(e,t){return e.path?Object(i.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(i.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(i.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(i.jsx)("span",{children:e.name})," "]},t)}))})]})}},95:function(e,t,a){}}]);
//# sourceMappingURL=37.977a1e21.chunk.js.map