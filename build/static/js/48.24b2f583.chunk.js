(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[48],{100:function(e,t,a){"use strict";a.d(t,"v",(function(){return o})),a.d(t,"l",(function(){return l})),a.d(t,"k",(function(){return s})),a.d(t,"B",(function(){return c})),a.d(t,"w",(function(){return u})),a.d(t,"f",(function(){return d})),a.d(t,"p",(function(){return m})),a.d(t,"e",(function(){return b})),a.d(t,"q",(function(){return h})),a.d(t,"d",(function(){return g})),a.d(t,"s",(function(){return p})),a.d(t,"r",(function(){return f})),a.d(t,"g",(function(){return j})),a.d(t,"n",(function(){return O})),a.d(t,"m",(function(){return S})),a.d(t,"o",(function(){return v})),a.d(t,"u",(function(){return k})),a.d(t,"a",(function(){return N})),a.d(t,"i",(function(){return A})),a.d(t,"j",(function(){return x})),a.d(t,"y",(function(){return y})),a.d(t,"z",(function(){return C})),a.d(t,"x",(function(){return F})),a.d(t,"t",(function(){return I})),a.d(t,"A",(function(){return w})),a.d(t,"b",(function(){return U})),a.d(t,"c",(function(){return T})),a.d(t,"h",(function(){return E}));a(18),a(20);var n,r=a(101),i=null!==(n=localStorage.getItem("accessToken"))&&void 0!==n?n:"",o=function(e){return Object(r.a)(i,e,"/cobrand/programFilter")},l=function(e){return Object(r.a)(i,e,"/cobrand/contentFilter")},s=function(e){return Object(r.a)(i,e,"/cobrand/commentContentFilter")},c=function(e){return Object(r.a)(i,e,"/user/userFilter")},u=function(e){return Object(r.a)(i,e,"/cobrand/redZoneFilter")},d=function(e){return Object(r.a)(i,e,"/user/appUsageFilter")},m=function(e){return Object(r.a)(i,e,"/user/deviceUsageScheduleFilter")},b=function(e){return Object(r.a)(i,e,"/user/appUsageLimitFilter")},h=function(e){return Object(r.a)(i,e,"/user/childModeAsuhFilter")},g=function(e){return Object(r.a)(i,e,"/user/appIconFilter")},p=function(e){return Object(r.a)(i,e,"/user/broadcastFilter")},f=function(e){return Object(r.a)(i,e,"/cms/notificationCategoryFilter")},j=function(e){return Object(r.a)(i,e,"/cms/audianceTargetFilter")},O=function(e){return Object(r.a)(i,e,"/cms/contentTopicFilter")},S=function(e){return Object(r.a)(i,e,"/user/userContentResponFilter")},v=function(e){return Object(r.a)(i,e,"/user/userContentViewFilter")},k=function(e){return Object(r.a)(i,e,"/cms/programCategoryFilter")},N=function(e){return Object(r.a)(i,e,"/cms/userFilter")},A=function(e){return Object(r.a)(i,e,"/cobrand/cobrandComunityFilter")},x=function(e){return Object(r.a)(i,e,"/cobrand/cobrandComunityMemberFilter")},y=function(e){return Object(r.a)(i,e,"/cobrand/rekapDataSekolahFilter")},C=function(e){return Object(r.a)(i,e,"/cobrand/AlAzharSchoolFilter")},F=function(e){return Object(r.a)(i,e,"/cobrand/cobrandGroupMitraAsuhFilter")},I=function(e){return Object(r.a)(i,e,"/cobrand/prayAlertMessageFilter")},w=function(e){return Object(r.a)(i,e,"/user/appDeviceFilter")},U=function(e){return Object(r.a)(i,e,"/user/appAlwaysOnBySekolahFilter")},T=function(e){return Object(r.a)(i,e,"/user/logVisitPageFilter")},E=function(e){return Object(r.a)(i,e,"/cms/logCMSFilter")}},101:function(e,t,a){"use strict";var n=a(20),r=a(18),i=a.n(r);t.a=function(e,t,a){return i()({method:"post",url:n.a+a,data:t,headers:{"Content-Type":"application/json","x-token":e}})}},106:function(e,t,a){},121:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return b})),a.d(t,"g",(function(){return h})),a.d(t,"f",(function(){return g}));var n=a(107),r=a(7),i=a(2),o=a.n(i),l=(a(118),a(215)),s=a(0);function c(e){var t=e.column,a=t.filterValue,n=t.preFilteredRows,r=t.setFilter;n.length;return Object(s.jsx)("input",{value:a||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Search..."})}function u(e){var t=e.column,a=t.filterValue,r=t.setFilter,i=t.preFilteredRows,l=t.id,c=o.a.useMemo((function(){var e=new Set;return i.forEach((function(t){void 0===t.values[l]||e.has(t.values[l])||e.add(t.values[l])})),Object(n.a)(e.values())}),[l,i]);return Object(s.jsxs)("select",{value:a,onChange:function(e){r(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),c.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function d(e){var t=e.column,a=t.filterValue,r=t.setFilter,i=t.preFilteredRows,l=t.id,c=o.a.useMemo((function(){var e=new Set;return i.forEach((function(t){if(console.log("ini row",t.values[l]),console.log("ini tipe row",t.values[l]instanceof Array),console.log("ini length row",t.values[l].length),t.values[l]instanceof Array&&t.values[l].length>0)for(var a=0;a<t.values[l].length;a++){var n=t.values[l][a];void 0===n||e.has(n)||e.add(n)}})),Object(n.a)(e.values())}),[l,i]);return Object(s.jsxs)("select",{value:a,onChange:function(e){r(e.target.value||void 0)},children:[Object(s.jsx)("option",{value:"",children:"All"}),c.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]})}function m(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,i=t.preFilteredRows,l=t.setFilter,c=t.id,u=o.a.useMemo((function(){var e=i.length?i[0].values[c]:0,t=i.length?i[0].values[c]:0;return i.forEach((function(a){e=Math.min(a.values[c],e),t=Math.max(a.values[c],t)})),[e,t]}),[c,i]),d=Object(r.a)(u,2),m=d[0],b=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:n[0]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},min:m,placeholder:"Min (".concat(m,")"),style:{width:"70px",marginRight:"0.5rem"}}),"to",Object(s.jsx)("input",{value:n[1]||"",type:"number",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},min:m,placeholder:"Max (".concat(b,")"),style:{width:"70px",marginLeft:"0.5rem"}})]})}function b(e){var t=e.column,a=t.filterValue,n=void 0===a?[]:a,i=t.preFilteredRows,l=t.setFilter,c=t.id,u=o.a.useMemo((function(){var e=new Date("2022-08-13"),t=new Date;return t.setFullYear(t.getFullYear()+1),i.forEach((function(a){e=a.values[c]&&new Date(a.values[c])<=e?new Date(a.values[c]):e,t=a.values[c]&&new Date(a.values[c])>=t?new Date(a.values[c]):t})),[e,t]}),[c,i]),d=Object(r.a)(u,2),m=d[0],b=d[1];return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("input",{value:n[0]||m.toISOString().slice(0,10),type:"date",min:m.toISOString().slice(0,10),max:n[1]||b.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t||void 0,e[1]]}))},style:{width:"130px",marginRight:"0.2rem"}}),"to",Object(s.jsx)("input",{value:n[1]||b.toISOString().slice(0,10),type:"date",min:n[0]||m.toISOString().slice(0,10),max:b.toISOString().slice(0,10),onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t||void 0]}))},style:{width:"130px",marginLeft:"0.2rem"}})]})}function h(e,t,a){return Object(l.a)(e,a,{keys:[function(e){return e.values[t]}]})}function g(e,t,a){var n=new Date(a[0]),r=new Date(a[1]);return e.filter((function(i){var o=new Date(i.values[t]);return 0===a.length?e:o>=n&&o<=r}))}h.autoRemove=function(e){return!e},g.autoRemove=function(e){return!e}},1307:function(e,t,a){},1308:function(e){e.exports=JSON.parse('[{"Nomor":"6","userType":"Child","nameUser":"Hafiz","emailUser":"hdcuber96@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 8 Kota Bekasi","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"7","userType":"Child","nameUser":"Nafies","emailUser":"gowesjersey@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 9 Bekasi","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"8","userType":"Child","nameUser":"Santa","emailUser":"siregarsanta@defghi.id","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 8 Kembangan","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"9","userType":"Child","nameUser":"Jane","emailUser":"siregarjane20@gmail.com","parentName":["Tombak"],"parentEmail":["tomsiman.id@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 9 Kembangan","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"10","userType":"Child","nameUser":"Nera","emailUser":"nera.rane1010@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 2 Pejaten","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"11","userType":"Child","nameUser":"Gita","emailUser":"gitaayufachrianda@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SDI Al Azhar 4 Kebayoran Lama","StudyLevel":"SD"},"lockScreenStatus":"On","modeAsuh":"ON","blockedApps":["facebook,  mobile legends, sudoku, tiktok"],"limitedApps":["Youtube, tiktok"],"usageScheduleStatus":"On"},{"Nomor":"12","userType":"Child","nameUser":"Angga","emailUser":"singgih.zuliangga@defghi.id","parentName":["Rafik Ahmad"],"parentEmail":["rafik.ahmad@defghi.global"],"childInfo":{"schoolName":"SDI Al Azhar 61 Serpong","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Instagram,  Clash royale, sudoku,Tiktok, Youtube"],"limitedApps":["PUBG, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"13","userType":"Child","nameUser":"Singgih","emailUser":"zuliangga.leo@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Instagram,  Clash royale, sudoku,Tiktok, Youtube, twitter"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"14","userType":"Child","nameUser":"Rio","emailUser":"ricko@ide2sen.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"TKI Al Azhar 19 Pamulang","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["facebook,  mobile legends"],"limitedApps":["youtube, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"15","userType":"Child","nameUser":"Christiani","emailUser":"christiani.silaen@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMA Islam Al Azhar 1 Keb. Baru","StudyLevel":"SMA"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Youtube, Clash of Clans, sudoku, Free fire, kaskus"],"limitedApps":["youtube, kaskus"],"usageScheduleStatus":"Off"},{"Nomor":"16","userType":"Child","nameUser":"Nova","emailUser":"ndaritonang@gmail.com","parentName":["Ricko Enrile"],"parentEmail":["rickotesting@gmail.com"],"childInfo":{"schoolName":"SMPIA 4 Kemandoran","StudyLevel":"SMP"},"lockScreenStatus":"On","modeAsuh":"ON","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"17","userType":"Child","nameUser":"Amir","emailUser":"mirza.dzaky.azizi@gmail.com","parentName":["Kartono"],"parentEmail":["kartono.cc@gmail.com"],"childInfo":{"schoolName":"SDI AL Azhar 15 Pamulang","StudyLevel":"SD"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["Youtube, Pubg, sudoku, Free fire, Chess"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"},{"Nomor":"18","userType":"Child","nameUser":"Enrile","emailUser":"ricko@ide2sen.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 6 Jakapermai","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"OFF","blockedApps":["No App Blocked"],"limitedApps":["No App Limited"],"usageScheduleStatus":"Off"},{"Nomor":"19","userType":"Child","nameUser":"Rajagukguk","emailUser":"rickoenrile23@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"SMPIA 8 Kemang Pratama","StudyLevel":"SMP"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"On"},{"Nomor":"20","userType":"Child","nameUser":"Muhammad","emailUser":"muhammsyihab.dev@gmail.com","parentName":["Syihab Rabbani"],"parentEmail":["syihab.rabbani@defghi.id"],"childInfo":{"schoolName":"TKI Al Azhar 2 Pasar Minggu","StudyLevel":"TK"},"lockScreenStatus":"Off","modeAsuh":"ON","blockedApps":["facebook, mobile legends, sudoku"],"limitedApps":["tiktok, instagram"],"usageScheduleStatus":"Off"}]')},147:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=["singgih.zuliangga@defghi.id","ortuasiaparent01@gmail.com","ortuasiaparent02@gmail.com","ortuasiachild01@gmail.com","ortuasiachild02@gmail.com","yaswin.rw@gnail.com","yaswin.retdy@gmail.com","rickotesting@gmail.com","kartono@defghi.id","kartono.cc@gmail.com","mirza.dzaky.azizi@gmail.com","helwaanyapanjang@gmail.com ","uwawwaunch@gmail.com","ilhamanwar@gmail.com","ricky.rachadi@gmail.com","ruangortuchild@gmail.com","gowesjersey02@gmail.com","hafizh.dary@defghi.id","hafizhd.jp@gmail.com","abcwirayudaha56@gmail.com","hervyguitar@gmai.com","rickorajagukguk23@gmail.com","ortuasiatestchild@gmail.com","ortuasiatestparent@gmail.com","roichildtest01@gmail.com","roiparenttest01@gmail.com","ruangortutesting02@gmail.com","ruangortutesting01@gmail.com","ruangortuchild2@gmail.com","ruangortuparent@gmail.com","ruangortutesting01@gmail.com"],r=new Date("2022-08-13")},148:function(e,t,a){"use strict";var n=a(107),r=a(5),i=a(34),o=a(2),l=a.n(o),s=a(8),c=a(118),u=a(143),d=(a(106),a(121)),m=a(216),b=a(200),h=(a(217),a(90)),g=a(0);t.a=function(e){var t=e.DATA,a=e.COLUMNS,p=e.renderRowSubComponent,f=e.showCheckbox,j=void 0!==f&&f,O=(e.showTools,e.notifContext),S=void 0===O?"":O,v=l.a.useMemo((function(){return{fuzzyText:d.g,dateBetween:d.f,text:function(e,t,a){return e.filter((function(e){var n=e.values[t];return void 0===n||String(n).toLowerCase().startsWith(String(a).toLowerCase())}))}}}),[]),k=l.a.useMemo((function(){return{Filter:d.b}}),[]),N=l.a.forwardRef((function(e,t){var a=e.indeterminate,n=Object(i.a)(e,["indeterminate"]),o=l.a.useRef(),s=t||o;return l.a.useEffect((function(){s.current.indeterminate=a}),[s,a]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("input",Object(r.a)({type:"checkbox",ref:s},n))})})),A=Object(o.useMemo)((function(){return t}),[t]),x=Object(c.useTable)({columns:a,data:A,defaultColumn:k,filterTypes:v,initialState:{hiddenColumns:["emailUser","parentEmail","_id"],pageSize:20}},c.useFilters,c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination,c.useRowSelect,(function(e){j&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(g.jsx)("div",{children:Object(g.jsx)(N,Object(r.a)({},t()))})},Cell:function(e){var t=e.row;return Object(g.jsx)("div",{children:Object(g.jsx)(N,Object(r.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(n.a)(e))}))})),y=x.getTableProps,C=x.getTableBodyProps,F=x.headerGroups,I=x.prepareRow,w=x.page,U=x.rows,T=x.canPreviousPage,E=x.canNextPage,_=x.pageOptions,P=x.pageCount,D=x.gotoPage,R=x.nextPage,M=x.previousPage,z=x.setPageSize,L=x.visibleColumns,H=x.selectedFlatRows,K=(x.state.selectedRowIds,x.state),B=K.pageIndex,G=K.pageSize,V=(K.expanded,x.state),J=x.setGlobalFilter,Y=V.globalFilter,q=function(){for(var e=U,t=[],a=0;a<e.length;a++){var n={};I(e[a]);for(var r=0;r<e[a].cells.length;r++)"rowNumber"!==e[a].cells[r].column.id&&"selection"!==e[a].cells[r].column.id&&"buttonStatus"!==e[a].cells[r].column.id&&(e[a].cells[r].value&&"[object Date]"===Object.prototype.toString.call(e[a].cells[r].value)&&!isNaN(e[a].cells[r].value)?n[e[a].cells[r].column.Header]=e[a].cells[r].value.toISOString().split("T")[0]:n[e[a].cells[r].column.Header]=e[a].cells[r].value);t.push(n)}return t};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"tools",children:[Object(g.jsxs)("div",{className:"table_props",children:[Object(g.jsxs)("span",{children:["Total: ",U.length," Data"]}),Object(g.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:Y||"",onChange:function(e){J(e.currentTarget.value)}})]}),Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.d,{})," ",Object(g.jsx)(m.CSVLink,{data:q(),children:"Download as CSV"})]}),Object(g.jsxs)("button",{className:"btn_tools",onClick:function(){var e=q();if(e.length>0){var t=new b.default("landscape","pt","A4");t.setFontSize(15);var a={startY:50,head:[Object.keys(e[0])],body:e.map((function(e){return Object.values(e)}))};t.text("Report",40,40),t.autoTable(a),t.save("report.pdf")}},children:[Object(g.jsx)(h.b,{})," Download as PDF"]}),j?H.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",S);for(var e=[],t=[],a=0;a<H.length;a++)e.push(H[a].original.emailUser),"child"===H[a].original.userType&&(e.includes(H[a].original.emailUser)||e.push(H[a].original.emailUser)),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","child")},children:"Send Notifications to Child"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Child"})]}):null,j?H.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",S);for(var e=[],t=[],a=0;a<H.length;a++)void 0!==H[a].original.parentEmail&&(e.some((function(e){return H[a].original.parentEmail.includes(e)}))||("child"===H[a].original.userType?e.push.apply(e,Object(n.a)(H[a].original.parentEmail)):e.push(H[a].original.emailUser))),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","parent")},children:"Send Notifications to Parent"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to Parent"})]}):null,j?H.length>0?Object(g.jsxs)("button",{className:"btn_tools",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(s.b,{to:"/cms/notifications/add",className:"btn_tools",onClick:function(){localStorage.setItem("notifContext",S);for(var e=[],t=[],a=0;a<H.length;a++)e.includes(H[a].original.emailUser)||e.push(H[a].original.emailUser),void 0!==H[a].original.parentEmail&&(e.some((function(e){return H[a].original.parentEmail.includes(e)}))||e.push(H[a].original.parentEmail)),t.push(H[a].original);localStorage.setItem("jsonData",JSON.stringify(t)),localStorage.setItem("emailTo",e.toString()),localStorage.setItem("selectedUserType","all")},children:"Send Notifications to All"})]}):Object(g.jsxs)("button",{className:"btn_tools_disabled",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)("span",{className:"btn_tools_disabled",children:"Send Notifications to All"})]}):null]}),Object(g.jsx)("div",{className:"utils",children:Object(g.jsxs)("div",{className:"pagination",children:[Object(g.jsx)("button",{onClick:function(){return D(0)},disabled:!T,children:"<<"}),Object(g.jsx)("button",{onClick:function(){return M()},disabled:!T,children:"<"}),Object(g.jsx)("button",{onClick:function(){return R()},disabled:!E,children:">"}),Object(g.jsx)("button",{onClick:function(){return D(P-1)},disabled:!E,children:">>"}),Object(g.jsxs)("span",{children:["Page "," ",Object(g.jsxs)("strong",{children:[B+1," of ",_.length]})]}),Object(g.jsxs)("span",{children:["| Go to page:",Object(g.jsx)("input",{type:"number",defaultValue:B+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;D(t)}})]}),Object(g.jsx)("select",{value:G,onChange:function(e){z(Number(e.target.value))},children:[20,50,100].map((function(e){return Object(g.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})}),Object(g.jsx)("div",{className:"table_container",children:Object(g.jsxs)("table",Object(r.a)(Object(r.a)({},y()),{},{children:[Object(g.jsx)("thead",{children:F.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(g.jsxs)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(g.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(g.jsx)(u.a,{}):Object(g.jsx)(u.b,{}):""})]}))}))})),Object(g.jsx)("tr",{children:e.headers.map((function(e){return Object(g.jsx)("th",{children:e.canFilter?e.render("Filter"):null})}))})]})}))}),Object(g.jsx)("tbody",Object(r.a)(Object(r.a)({},C()),{},{children:w.map((function(e,t){return I(e),Object(g.jsxs)(o.Fragment,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:[Object(g.jsx)("tr",{children:e.cells.map((function(e){return Object(g.jsxs)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{className:(e.value&&!Array.isArray(e.value)||Array.isArray(e.value)&&e.value.length>0||"selection"===e.column.id||e.column.id,"cell"),children:[" ","rowNumber"!==e.column.id?e.render("Cell"):t+1+B*G," "]}))}))}),e.isExpanded?Object(g.jsx)("tr",{children:Object(g.jsx)("td",{colSpan:L.length,children:p({row:e})})}):null]}))}))}))]}))})]})}},1538:function(e,t,a){"use strict";a.r(t);var n=a(107),r=a(7),i=a(2),o=a(148),l=a(121),s=[{Header:"No.",id:"rowNumber",accessor:"emailUser",disableFilters:!0},{Header:"Email User",accessor:"emailUser",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama",accessor:"nameUser",disableFilters:!0},{Header:"Email Orang tua",accessor:"parentEmail",disableFilters:!0,disableGlobalFilter:!0},{Header:"Nama Orang tua",accessor:"parentName",disableFilters:!0,Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Sekolah",accessor:"childInfo.schoolName",Filter:l.e,filter:"equals"},{Header:"Pendidikan",accessor:"childInfo.StudyLevel",Filter:l.e,filter:"equals"},{Header:"Status Lock Screen",accessor:"lockScreenStatus",Filter:l.e,filter:"equals"},{Header:"Status Mode Asuh",accessor:"modeAsuh",Filter:l.e,filter:"equals"},{Header:"Aplikasi yang Diblokir",accessor:"blockedApps",Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Aplikasi yang Dibatasi",accessor:"limitedApps",Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Status Jadwal Penggunaan",accessor:"usageScheduleStatus",Filter:l.e,filter:"equals"}],c=a(97),u=a(35),d=(a(1307),a(1308)),m=a(147),b=a(100),h=(a(237),a(0));t.default=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),a=t[0],l=t[1],g=Object(i.useState)(),p=Object(r.a)(g,2),f=p[0],j=p[1],O=Object(i.useState)(),S=Object(r.a)(O,2),v=(S[0],S[1],Object(i.useState)("real")),k=Object(r.a)(v,2),N=k[0],A=k[1],x=JSON.parse(localStorage.getItem("userData")).cobrandComunityId;return Object(i.useEffect)((function(){if("dummy"===N)j(d),l(!1);else{var e=""!==x?{whereKeyValues:{packageId:"com.byasia.ruangortu",cobrandComunityId:x,dateCreated:{$gte:m.a.toISOString().split("T")[0]}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:{whereKeyValues:{packageId:"com.byasia.ruangortu",dateCreated:{$gte:m.a.toISOString().split("T")[0]}},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};Object(b.B)(e).then((function(e){for(var t=e.data.users,a=[],r=0;r<t.length;r++){var i=t[r];if("child"===i.userType){for(var o=[],s=[i.parentEmail].concat(Object(n.a)(i.otherParentEmail)),c=0;c<t.length;c++){var u=t[c];(i.parentEmail===u.emailUser||i.otherParentEmail.includes(u.emailUser))&&o.push(u.nameUser)}i.parentName=o,i.parentEmail=s,a.push(i)}}var d=a.length,m={limit:Number.MAX_SAFE_INTEGER},h=Object(b.q)(m),g=Object(b.p)(m),p=Object(b.e)(m),f=Object(b.d)(m);Promise.all([h,g,p,f]).then((function(e){for(var t=e[0].data.childModeAsuhs,n=e[1].data.deviceUsageSchedules,r=e[2].data.appUsageLimit,i=e[3].data.appIcons,o=0;o<d;o++){for(var s=a[o],c=!1,u=0;u<t.length&&!c;u++)s.emailUser===t[u].emailUser&&(s.modeAsuh="On",c=!0);c||(s.modeAsuh="Off")}for(o=0;o<d;o++){var m=a[o],b=[],h=[];for(u=0;u<r.length;u++)if(m.emailUser===r[u].emailUser)if(r[u].limit>0){for(var g=0;g<i.length;g++)if(r[u].appId===i[g].appId){h.push(i[g].appName);break}}else if(0===r[u].limit)for(g=0;g<i.length;g++)if(r[u].appId===i[g].appId){b.push(i[g].appName);break}b.length>0&&(m.blockedApps=b),h.length>0&&(m.limitedApps=h)}for(o=0;o<d;o++){var p=a[o],f=!1,O=!1;for(u=0;u<n.length&&(!f||!O);u++)p.emailUser===n[u].emailUser&&("terjadwal"===n[u].scheduleType&&n[u].deviceUsageEndTime===n[u].deviceUsageStartTime?(p.lockScreenStatus="On",f=!0):(p.usageScheduleStatus="On",O=!0));O||(p.usageScheduleStatus="Off"),f||(p.lockScreenStatus="Off")}j(a),l(!1)}))})).catch((function(e){l(!1)}))}}),[,N]),a?Object(h.jsx)(u.a,{}):Object(h.jsxs)("div",{className:"Controlling",children:[Object(h.jsx)(c.a,{headingName:"Controlling Status",routes:[{name:"Report"},{name:"Controlling Status",path:"/report/controlling-status"}]}),Object(h.jsxs)("div",{className:"Dashboard_period",children:[Object(h.jsx)("button",{className:"real"===N?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"real"!==N&&(l(!0),A("real"))},children:"Prod"}),Object(h.jsx)("button",{className:"dummy"===N?"Dashboard_period_option-active":"Dashboard_period_option",onClick:function(){"dummy"!==N&&(l(!0),A("dummy"))},children:"Dummy"})]}),Object(h.jsx)("div",{className:"Controlling_table",children:Object(h.jsx)(o.a,{COLUMNS:s,DATA:f,showCheckbox:!0,notifContext:"Status Pembatasan Gadget Anak"})})]})}},97:function(e,t,a){"use strict";a(2);var n=a(8),r=(a(98),a(0));t.a=function(e){var t=e.headingName,a=e.routes,i=void 0===a?[]:a;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:i.length>0&&i.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},98:function(e,t,a){}}]);
//# sourceMappingURL=48.24b2f583.chunk.js.map