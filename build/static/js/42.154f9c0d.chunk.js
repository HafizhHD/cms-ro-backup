(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[42],{108:function(e,t,a){"use strict";a(2);var n=a(7),o=(a(110),a(0));t.a=function(e){var t=e.headingName,a=e.routes,l=void 0===a?[]:a;return Object(o.jsxs)("div",{className:"Heading",children:[Object(o.jsx)("h1",{children:t}),Object(o.jsx)("ul",{className:"Heading__breadcumb",children:l.length>0&&l.map((function(e,t){return e.path?Object(o.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(o.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(o.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(o.jsx)("span",{children:e.name})," "]},t)}))})]})}},110:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return m})),a.d(t,"f",(function(){return p})),a.d(t,"e",(function(){return h}));var n=a(105),o=a(10),l=a(2),r=a.n(l),i=(a(121),a(166)),s=a(0);function c(e){var t=e.column,a=t.filterValue,n=t.preFilteredRows,o=t.setFilter;n.length;return Object(s.jsx)("input",{value:a||"",onChange:function(e){o(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,a=t.filterValue,o=t.setFilter,l=t.preFilteredRows,i=t.id,c=r.a.useMemo((function(){var e=new Set;return l.forEach((function(t){void 0!==t.values[i]&&e.add(t.values[i])})),Object(n.a)(e.values())}),[i,l]);return Object(s.jsxs)("select",{value:a,onChange:function(e){o(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),c.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,l=t.preFilteredRows,i=t.setFilter,c=t.id,u=r.a.useMemo((function(){var e=l.length?l[0].values[c]:0,t=l.length?l[0].values[c]:0;return l.forEach((function(a){e=Math.min(a.values[c],e),t=Math.max(a.values[c],t)})),[e,t]}),[c,l]),d=Object(o.a)(u,2),m=d[0],p=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:n[0]||"",type:"number",onChange:function(e){var t=e.target.value;i((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},placeholder:"Min (".concat(m,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(s.jsx)("input",{value:n[1]||"",type:"number",onChange:function(e){var t=e.target.value;i((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},placeholder:"Max (".concat(p,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function m(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,l=t.preFilteredRows,i=t.setFilter,c=t.id,u=r.a.useMemo((function(){var e=new Date("2020-01-01"),t=new Date("2099-12-31");return l.forEach((function(a){e=a.values[c]&&new Date(a.values[c])<=e?new Date(a.values[c]):e,t=a.values[c]&&new Date(a.values[c])>=t?new Date(a.values[c]):t})),[e,t]}),[c,l]),d=Object(o.a)(u,2),m=d[0],p=d[1];return console.log(m,p),Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:n[0]||m.toISOString().slice(0,10),type:"date",min:m.toISOString().slice(0,10),max:n[1]||p.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;console.log(e.target.value),i((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(s.jsx)("input",{value:n[1]||p.toISOString().slice(0,10),type:"date",min:n[0]||m.toISOString().slice(0,10),max:p.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;i((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function p(e,t,a){return Object(i.a)(e,a,{keys:[function(e){return e.values[t]}]})}function h(e,t,a){var n=new Date(a[0]),o=new Date(a[1]);return console.log(e,t,a),e.filter((function(l){var r=new Date(l.values[t]);return console.log(r,o,n),0===a.length?e:r>=n&&r<=o}))}p.autoRemove=function(e){return!e},h.autoRemove=function(e){return!e}},118:function(e,t,a){"use strict";a.d(t,"h",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"j",(function(){return s})),a.d(t,"i",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"f",(function(){return p})),a.d(t,"a",(function(){return h})),a.d(t,"g",(function(){return g}));var n=a(18),o=a.n(n),l=a(20),r=function(e){return o()({method:"post",url:l.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return o()({method:"post",url:l.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return o()({method:"post",url:l.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return o()({method:"post",url:l.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:l.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return o()({method:"post",url:l.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return o()({method:"post",url:l.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return o()({method:"post",url:l.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return o()({method:"post",url:l.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return o()({method:"post",url:l.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})}},1211:function(e,t,a){},1212:function(e){e.exports=JSON.parse('[{"Nomor":"6","userType":"Child","nameUser":"Hafiz","emailUser":"hdcuber96@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 8 Kota Bekasi","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"7","userType":"Child","nameUser":"Nafies","emailUser":"gowesjersey@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 9 Bekasi","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"8","userType":"Child","nameUser":"Santa","emailUser":"siregarsanta@defghi.id","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 8 Kembangan","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"9","userType":"Child","nameUser":"Jane","emailUser":"siregarjane20@gmail.com","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 9 Kembangan","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"10","userType":"Child","nameUser":"Nera","emailUser":"nera.rane1010@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 2 Pejaten","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"11","userType":"Child","nameUser":"Gita","emailUser":"gitaayufachrianda@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 4 Kebayoran Lama","StudyLevel":"SD"},"lockScreenStatus":"On","modeAsuh":"ON","blockedApps":["facebook,  mobile legends, sudoku, tiktok"],"limitedApps":["Youtube, tiktok"],"usageScheduleStatus":"On"},{"Nomor":"12","userType":"Child","nameUser":"Angga","emailUser":"singgih.zuliangga@defghi.id","parentName":["Rafik Ahmad"],"parentEmail":["rafik.ahmad@defghi.global"],"childInfo":{"schoolName":"SDI Al Azhar 61 Serpong","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Instagram,  Clash royale, sudoku,Tiktok, Youtube"],"limitedApps":["PUBG, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"13","userType":"Child","nameUser":"Singgih","emailUser":"zuliangga.leo@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Instagram,  Clash royale, sudoku,Tiktok, Youtube, twitter"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"14","userType":"Child","nameUser":"Rio","emailUser":"ricko@ide2sen.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 19 Pamulang","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["facebook,  mobile legends"],"limitedApps":["youtube, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"15","userType":"Child","nameUser":"Christiani","emailUser":"christiani.silaen@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMA Islam Al Azhar 1 Keb. Baru","StudyLevel":"SMA"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Youtube, Clash of Clans, sudoku, Free fire, kaskus"],"limitedApps":["youtube, kaskus"],"usageScheduleStatus":"Off"},{"Nomor":"16","userType":"Child","nameUser":"Nova","emailUser":"ndaritonang@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 4 Kemandoran","StudyLevel":"SMP"},"lockScreenStatus":"On","modeAsuh":"ON","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"17","userType":"Child","nameUser":"Amir","emailUser":"mirza.dzaky.azizi@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Youtube, Pubg, sudoku, Free fire, Chess"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"18","userType":"Child","nameUser":"Enrile","emailUser":"ricko@ide2sen.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 6 Jakapermai","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"19","userType":"Child","nameUser":"Rajagukguk","emailUser":"rickoenrile23@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 8 Kemang Pratama","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"On"},{"Nomor":"20","userType":"Child","nameUser":"Muhammad","emailUser":"muhammsyihab.dev@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"TKI Al Azhar 2 Pasar Minggu","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"}]')},129:function(e,t,a){"use strict";var n=a(105),o=a(5),l=a(34),r=a(2),i=a.n(r),s=a(7),c=a(121),u=a(135),d=(a(115),a(117)),m=a(167),p=a(158),h=(a(168),a(88)),g=a(0);t.a=function(e){var t=e.DATA,a=e.COLUMNS,b=e.renderRowSubComponent,f=e.showCheckbox,j=void 0!==f&&f,S=e.notifContext,O=void 0===S?"":S,v=i.a.useMemo((function(){return{fuzzyText:d.f,dateBetween:d.e,text:function(e,t,a){return e.filter((function(e){var n=e.values[t];return void 0===n||String(n).toLowerCase().startsWith(String(a).toLowerCase())}))}}}),[]),k=i.a.useMemo((function(){return{Filter:d.b}}),[]),N=i.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(l.a)(e,["indeterminate"]),r=i.a.useRef(),s=t||r;return i.a.useEffect((function(){s.current.indeterminate=a}),[s,a]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("input",Object(o.a)({type:"checkbox",ref:s},n))})})),x=Object(r.useMemo)((function(){return t}),[t]),A=Object(c.useTable)({columns:a,data:x,defaultColumn:k,filterTypes:v,initialState:{hiddenColumns:["emailUser","parentEmail"]}},c.useFilters,c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination,c.useRowSelect,(function(e){j&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(g.jsx)("div",{children:Object(g.jsx)(N,Object(o.a)({},t()))})},Cell:function(e){var t=e.row;return Object(g.jsx)("div",{children:Object(g.jsx)(N,Object(o.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(n.a)(e))}))})),y=A.getTableProps,C=A.getTableBodyProps,I=A.headerGroups,T=A.prepareRow,U=A.page,F=A.rows,w=A.canPreviousPage,E=A.canNextPage,P=A.pageOptions,_=A.pageCount,D=A.gotoPage,R=A.nextPage,L=A.previousPage,M=A.setPageSize,z=A.visibleColumns,H=A.selectedFlatRows,K=(A.state.selectedRowIds,A.state),B=K.pageIndex,G=K.pageSize,J=(K.expanded,A.state),V=A.setGlobalFilter,Y=J.globalFilter,q=function(){var e=F;console.log(e);for(var t=[],a=0;a<e.length;a++){var n={};T(e[a]),console.log(e[a].cells);for(var o=0;o<e[a].cells.length;o++)"rowNumber"!==e[a].cells[o].column.id&&"selection"!==e[a].cells[o].column.id&&"buttonStatus"!==e[a].cells[o].column.id&&(e[a].cells[o].value&&"[object Date]"===Object.prototype.toString.call(e[a].cells[o].value)&&!isNaN(e[a].cells[o].value)?n[e[a].cells[o].column.Header]=e[a].cells[o].value.toISOString().split("T")[0]:n[e[a].cells[o].column.Header]=e[a].cells[o].value);t.push(n)}return t};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"tools",children:[Object(g.jsxs)("div",{className:"table_props",children:[Object(g.jsxs)("span",{children:["Total: ",F.length," Data"]}),Object(g.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:Y||"",onChange:function(e){V(e.currentTarget.value)}})]}),Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.c,{})," ",Object(g.jsx)(m.CSVLink,{data:q(),children:"Download as CSV"})]}),Object(g.jsxs)("button",{className:"btn_tools",onClick:function(){var e=q();if(e.length>0){var t=new p.default("landscape","pt","A4");t.setFontSize(15);var a={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(a),t.save("report.pdf")}},children:[Object(g.jsx)(h.b,{})," Download as PDF"]}),j?H.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(s.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O),console.log(localStorage.getItem("notifContext"));var e=[];console.log(H);for(var t=[],a=0;a<H.length;a++)e.push(H[a].original.emailUser),"child"===H[a].original.userType&&(e.includes(H[a].original.emailUser)||e.push(H[a].original.emailUser)),console.log(e),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,j?H.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(s.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O),console.log(localStorage.getItem("notifContext"));var e=[];console.log(H);for(var t=[],a=0;a<H.length;a++)void 0!==H[a].original.parentEmail&&(e.some((function(e){return H[a].original.parentEmail.includes(e)}))||("child"===H[a].original.userType?e.push.apply(e,Object(n.a)(H[a].original.parentEmail)):e.push(H[a].original.emailUser))),console.log(e),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,j?H.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(s.b,{to:"/cms/messaging-add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",O),console.log(localStorage.getItem("notifContext"));var e=[];console.log(H);for(var t=[],a=0;a<H.length;a++)e.includes(H[a].original.emailUser)||e.push(H[a].original.emailUser),void 0!==H[a].original.parentEmail&&(e.some((function(e){return H[a].original.parentEmail.includes(e)}))||e.push(H[a].original.parentEmail)),console.log(e),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),console.log(localStorage.getItem("jsonData")),localStorage.setItem("emailTo",e.toString()),console.log(localStorage.getItem("emailTo")),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(g.jsx)("div",{className:"utils",children:Object(g.jsxs)("div",{className:"pagination",children:[Object(g.jsx)("button",{onClick:function(){return D(0)},disabled:!w,children:"<<"}),Object(g.jsx)("button",{onClick:function(){return L()},disabled:!w,children:"<"}),Object(g.jsx)("button",{onClick:function(){return R()},disabled:!E,children:">"}),Object(g.jsx)("button",{onClick:function(){return D(_-1)},disabled:!E,children:">>"}),Object(g.jsxs)("span",{children:["Page "," ",Object(g.jsxs)("strong",{children:[B+1," of ",P.length]})]}),Object(g.jsxs)("span",{children:["| Go to page:",Object(g.jsx)("input",{type:"number",defaultValue:B+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;D(t)}})]}),Object(g.jsx)("select",{value:G,onChange:function(e){M(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(g.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(g.jsx)("div",{className:"table_container",children:Object(g.jsxs)("table",Object(o.a)(Object(o.a)({},y()),{},{children:[Object(g.jsx)("thead",{children:I.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(g.jsxs)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(g.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(g.jsx)(u.a,{}):Object(g.jsx)(u.b,{}):""})]}))}))})),Object(g.jsx)("tr",{children:e.headers.map((function(e){return Object(g.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(g.jsx)("tbody",Object(o.a)(Object(o.a)({},C()),{},{children:U.map((function(e,t){return T(e),Object(g.jsxs)(r.Fragment,Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:[Object(g.jsx)("tr",{children:e.cells.map((function(e){return Object(g.jsxs)("td",Object(o.a)(Object(o.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+B*G:e.render("Cell")," "]}))}))}),e.isExpanded?Object(g.jsx)("tr",{children:Object(g.jsx)("td",{colSpan:z.length,children:b({row:e})})}):null]}))}))}))]}))})]})}},1422:function(e,t,a){"use strict";a.r(t);var n=a(105),o=a(10),l=a(2),r=a(129),i=a(117),s=[{Header:"No.",id:"rowNumber",accessor:"emailUser",disableFilters:!0},{Header:"Email User",accessor:"emailUser",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama",accessor:"nameUser",disableFilters:!0},{Header:"Email Orang tua",accessor:"parentEmail",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama Orang tua",accessor:"parentName",disableFilters:!0,Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Sekolah",accessor:"childInfo.schoolName",Filter:i.d,filter:"equals"},{Header:"Pendidikan",accessor:"childInfo.StudyLevel",Filter:i.d,filter:"equals"},{Header:"Status Lock Screen",accessor:"lockScreenStatus",Filter:i.d,filter:"equals"},{Header:"Status Mode Asuh",accessor:"modeAsuh",Filter:i.d,filter:"equals"},{Header:"Aplikasi yang Diblokir",accessor:"blockedApps",Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Aplikasi yang Dibatasi",accessor:"limitedApps",Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Status Jadwal Penggunaan",accessor:"usageScheduleStatus",Filter:i.d,filter:"equals"}],c=a(108),u=a(36),d=(a(1211),a(1212)),m=a(118),p=(a(169),a(0));t.default=function(){var e=Object(l.useState)(!0),t=Object(o.a)(e,2),a=t[0],i=t[1],h=Object(l.useState)(),g=Object(o.a)(h,2),b=g[0],f=g[1],j=Object(l.useState)(),S=Object(o.a)(j,2),O=(S[0],S[1],Object(l.useState)("real")),v=Object(o.a)(O,2),k=v[0],N=v[1];return Object(l.useEffect)((function(){if("dummy"===k)f(d),i(!1);else{var e={whereKeyValues:{packageId:"com.byasia.ruangortu"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};console.log(e),Object(m.j)(e).then((function(e){console.log(e.data);for(var t=e.data.users,a=[],o=0;o<t.length;o++){var l=t[o];if("child"===l.userType){console.log("Anjay");for(var r=[],s=[l.parentEmail].concat(Object(n.a)(l.otherParentEmail)),c=0;c<t.length;c++){var u=t[c];(l.parentEmail===u.emailUser||l.otherParentEmail.includes(u.emailUser))&&r.push(u.nameUser)}l.parentName=r,l.parentEmail=s,a.push(l)}}var d=a.length,p={limit:Number.MAX_SAFE_INTEGER},h=Object(m.f)(p),g=Object(m.e)(p),b=Object(m.b)(p),j=Object(m.a)(p);Promise.all([h,g,b,j]).then((function(e){console.log(e[0]),console.log(e[1]),console.log(e[2]),console.log(e[3]);for(var t=e[0].data.childModeAsuhs,n=e[1].data.deviceUsageSchedules,o=e[2].data.appUsageLimit,l=e[3].data.appIcons,r=0;r<d;r++){for(var s=a[r],c=!1,u=0;u<t.length&&!c;u++)s.emailUser===t[u].emailUser&&(s.modeAsuh="On",c=!0);c||(s.modeAsuh="Off")}for(r=0;r<d;r++){var m=a[r],p=[],h=[];for(u=0;u<o.length;u++)if(m.emailUser===o[u].emailUser)if(o[u].limit>0){console.log("Mantap2");for(var g=0;g<l.length;g++)if(o[u].appId===l[g].appId){console.log("Mantap2-1"),h.push(l[g].appName);break}}else if(0===o[u].limit){console.log("Mantap21");for(g=0;g<l.length;g++)if(o[u].appId===l[g].appId){console.log("Mantap21-1"),p.push(l[g].appName);break}}p.length>0&&(m.blockedApps=p),h.length>0&&(m.limitedApps=h)}for(r=0;r<d;r++){var b=a[r],j=!1,S=!1;for(u=0;u<n.length&&(!j||!S);u++)b.emailUser===n[u].emailUser&&("terjadwal"===n[u].scheduleType&&n[u].deviceUsageEndTime===n[u].deviceUsageStartTime?(b.lockScreenStatus="On",j=!0):(b.usageScheduleStatus="On",S=!0));S||(b.usageScheduleStatus="Off"),j||(b.lockScreenStatus="Off")}f(a),i(!1)}))})).catch((function(e){console.log(e),i(!1)}))}}),[,k]),a?Object(p.jsx)(u.a,{}):Object(p.jsxs)("div",{className:"Controlling",children:[Object(p.jsx)(c.a,{headingName:"Controlling Status",routes:[{name:"Report",path:"/report/controlling-status"},{name:"Controlling Status"}]}),Object(p.jsxs)("div",{className:"Dashboard_period",children:[Object(p.jsx)("button",{className:"real"===k?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==k&&(i(!0),N("real"))},children:"Prod"}),Object(p.jsx)("button",{className:"dummy"===k?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==k&&(i(!0),N("dummy"))},children:"Dummy"})]}),Object(p.jsx)("div",{className:"Controlling_table",children:Object(p.jsx)(r.a,{COLUMNS:s,DATA:b,showCheckbox:!0,notifContext:"Status Pembatasan Gadget Anak"})})]})}}}]);
//# sourceMappingURL=42.154f9c0d.chunk.js.map