(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[45],{100:function(e,t,a){},106:function(e,t,a){"use strict";a.d(t,"m",(function(){return s})),a.d(t,"f",(function(){return i})),a.d(t,"o",(function(){return l})),a.d(t,"n",(function(){return o})),a.d(t,"d",(function(){return d})),a.d(t,"h",(function(){return u})),a.d(t,"c",(function(){return j})),a.d(t,"i",(function(){return b})),a.d(t,"b",(function(){return p})),a.d(t,"k",(function(){return h})),a.d(t,"j",(function(){return m})),a.d(t,"e",(function(){return O})),a.d(t,"g",(function(){return g})),a.d(t,"l",(function(){return x})),a.d(t,"a",(function(){return f}));var n=a(18),r=a.n(n),c=a(20),s=function(e){return r()({method:"post",url:c.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return r()({method:"post",url:c.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:c.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return r()({method:"post",url:c.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:c.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:c.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:c.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:c.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:c.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:c.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:c.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return r()({method:"post",url:c.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:c.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},x=function(e){return r()({method:"post",url:c.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return r()({method:"post",url:c.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})}},116:function(e,t,a){},1455:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(2),c=a(146),s=a(3),i=a(8),l=a(0),o={year:"numeric",month:"long",day:"numeric"},d=[{Header:"ID",accessor:"_id"},{Header:"Nama",accessor:"nameUser"},{Header:"Email",accessor:"emailUser"},{Header:"Tipe User",accessor:"userType"},{Header:"No Telepon",accessor:"phoneNumber"},{Header:"Email Orang tua",accessor:"parentEmail"},{Header:"Nama Orang tua",accessor:"parentName",Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Sekolah",accessor:"childInfo.schoolName"},{Header:"Pendidikan",accessor:"childInfo.StudyLevel"},{Header:"Jenis Kelamin",accessor:"gender"},{Header:"Alamat",accessor:"address"},{Header:"Tanggal Registrasi",accessor:"dateCreated",sortType:function(e,t){return new Date(t.values.dateCreated)-new Date(e.values.dateCreated)},Cell:function(e){var t=e.value;return void 0!==t?new Date(t).toLocaleDateString("id-ID",o):""}},{Header:"Mulai Berlanggan",accessor:"startSubscription"},{Header:"Berlanggan Sampai",accessor:"endSubscription"},{Header:"Edit",disableSortBy:!0,disableGlobalFilter:!0,Cell:function(e){var t=e.cell;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(i.b,{to:"/cms/user/edit",className:"nav_btn",title:"Edit User",onClick:function(){localStorage.setItem("userSelected",t.row.values.emailUser)},children:Object(l.jsx)("button",{className:"btn_action",children:Object(l.jsx)("div",{children:Object(l.jsx)(s.j,{className:"btn_action-icon"})})})})})}}],u=a(99),j=a(36),b=(a(906),a(106)),p=[{Header:"Email",accessor:"emailUser"},{Header:"Nama",accessor:"nameUser"},{Header:"No Telepon",accessor:"phoneNumber"},{Header:"Tgl. Registrasi",accessor:"dateCreated",Cell:function(e){var t=e.value;return Object(l.jsx)("p",{children:t.split("T")[0]})}},{Header:"Tipe User",accessor:"userType"},{Header:"User status",accessor:"status",Cell:function(e){var t=e.value,a={color:"green"};return"active"!==t&&(a={color:"red"}),Object(l.jsx)("p",{style:a,children:t})}}],h=a(18),m=a.n(h),O=(a(907),a(1452)),g=a(145),x="https://as01.prod.ruangortu.id:8080",f=function(e){var t=e.userSelected,a=Object(r.useState)(!0),s=Object(n.a)(a,2),i=s[0],o=s[1],d=Object(r.useState)(),u=Object(n.a)(d,2),j=u[0],b=u[1],h=Object(r.useState)(),f=Object(n.a)(h,2),v=f[0],_=f[1],N=Object(r.useState)(!1),C=Object(n.a)(N,2),y=C[0],T=C[1],S=Object(r.useState)(!1),D=Object(n.a)(S,2),k=D[0],H=D[1],w=Object(r.useState)(!1),P=Object(n.a)(w,2),F=P[0],U=P[1],E=function(){return U(!1)},A=Object(r.useState)(!1),B=Object(n.a)(A,2),I=B[0],L=B[1],M=function(){return L(!1)};return Object(r.useEffect)((function(){var e={whereKeyValues:{emailUser:t}};m()({method:"post",url:"".concat(x,"/api/user/userFilter"),data:e,headers:{"Content-Type":"application/json"}}).then((function(e){b(e.data.users[0]);var a={whereKeyValues:{}};"parent"===e.data.users[0].userType?a={whereKeyValues:{parentEmail:t}}:"child"===e.data.users[0].userType&&(a={whereKeyValues:{emailUser:e.data.users[0].parentEmail}}),m()({method:"post",url:"".concat(x,"/api/user/userFilter"),data:a,headers:{"Content-Type":"application/json"}}).then((function(e){_(e.data.users),o(!1)})).catch((function(e){o(!1)}))})).catch((function(e){o(!1)}))}),[]),Object(r.useEffect)((function(){if(y){o(!0);var e="active"===j.status?"inactive":"active",t={whereValues:{emailUser:j.cobrandEmailUser},newValues:{status:e}};m()({method:"post",url:"".concat(x,"/api/user/edit"),data:t,headers:{"Content-Type":"application/json"}}).then((function(e){T(!1),window.location.reload()})).catch((function(e){T(!1)})),o(!1)}}),[y]),Object(r.useEffect)((function(){if(k){o(!0);var e={userId:j._id};m()({method:"post",url:"".concat(x,"/api/user/remove"),data:e,headers:{"Content-Type":"application/json"}}).then((function(e){H(!1),window.location.reload()})).catch((function(e){H(!1)})),o(!1)}}),[k]),i?Object(l.jsx)("p",{children:"Loading..."}):Object(l.jsxs)("div",{className:"Detail",children:[Object(l.jsxs)("div",{className:"Detail_detail",children:[Object(l.jsx)("div",{className:"Detail_detail_photo",children:Object(l.jsx)("img",{src:j.imagePhoto})}),Object(l.jsxs)("div",{className:"Detail_detail_detail",children:[Object(l.jsxs)("div",{className:"Detail_detail_detail_group",children:[Object(l.jsx)("div",{className:"Detail_detail_detail_group_field",children:Object(l.jsx)("h5",{children:"Nama"})}),Object(l.jsx)("div",{className:"Detail_detail_detail_group_colon",children:Object(l.jsx)("h5",{children:": "})}),Object(l.jsx)("div",{className:"Detail_detail_detail_group_value",children:Object(l.jsx)("h5",{children:j.nameUser})})]}),Object(l.jsxs)("div",{className:"Detail_detail_detail_group",children:[Object(l.jsx)("div",{className:"Detail_detail_detail_group_field",children:Object(l.jsx)("h5",{children:"Tgl. Lahir"})}),Object(l.jsx)("div",{className:"Detail_detail_detail_group_colon",children:Object(l.jsx)("h5",{children:": "})}),Object(l.jsx)("div",{className:"Detail_detail_detail_group_value",children:Object(l.jsx)("h5",{children:j.birdDate?j.birdDate.split("T")[0]:""})})]}),Object(l.jsxs)("div",{className:"Detail_detail_detail_group",children:[Object(l.jsx)("div",{className:"Detail_detail_detail_group_field",children:Object(l.jsx)("h5",{children:"Email"})}),Object(l.jsx)("div",{className:"Detail_detail_detail_group_colon",children:Object(l.jsx)("h5",{children:": "})}),Object(l.jsx)("div",{className:"Detail_detail_detail_group_value",children:Object(l.jsx)("h5",{children:j.cobrandEmailUser})})]}),Object(l.jsxs)("div",{className:"Detail_detail_detail_group",children:[Object(l.jsx)("div",{className:"Detail_detail_detail_group_field",children:Object(l.jsx)("h5",{children:"Peran"})}),Object(l.jsx)("div",{className:"Detail_detail_detail_group_colon",children:Object(l.jsx)("h5",{children:": "})}),Object(l.jsx)("div",{className:"Detail_detail_detail_group_value",children:Object(l.jsx)("h5",{children:"parent"===j.userType?j.parentStatus:"Anak"})})]}),Object(l.jsx)("div",{className:"Detail_detail_detail_group",children:Object(l.jsx)("br",{})})]})]}),Object(l.jsxs)("div",{className:"Detail_table",children:[Object(l.jsx)("div",{className:"Detail_table_title",children:Object(l.jsx)("h2",{children:"parent"===j.userType?"List Anak":"List Orang Tua"})}),Object(l.jsx)(c.a,{COLUMNS:p,DATA:v})]}),Object(l.jsxs)(O.a,{show:F,onHide:E,className:"modal",children:[Object(l.jsx)(O.a.Header,{closeButton:!0,children:Object(l.jsx)(O.a.Title,{children:"Non Aktifkan Pengguna"})}),Object(l.jsx)(O.a.Body,{children:"Apakah anda yakin untuk Non-Aktifkan Pengguna ini?"}),Object(l.jsx)(g.a,{variant:"secondary",onClick:E,className:"prev",children:"Cancel"}),Object(l.jsx)(g.a,{variant:"primary",onClick:function(){return T(!0)},className:"submit",children:"Submit"})]}),Object(l.jsxs)(O.a,{show:I,onHide:M,className:"modal",children:[Object(l.jsx)(O.a.Header,{closeButton:!0,children:Object(l.jsx)(O.a.Title,{children:"Aktifkan Pengguna"})}),Object(l.jsx)(O.a.Body,{children:"Apakah anda yakin untuk Aktifkan Pengguna ini?"}),Object(l.jsx)(g.a,{variant:"secondary",onClick:M,className:"prev",children:"Cancel"}),Object(l.jsx)(g.a,{variant:"primary",onClick:function(){return T(!0)},className:"submit",children:"Submit"})]})]})};t.default=function(){var e=Object(r.useState)(!0),t=Object(n.a)(e,2),a=t[0],s=t[1],i=Object(r.useState)(),o=Object(n.a)(i,2),p=o[0],h=o[1],m=Object(r.useState)(!1),O=Object(n.a)(m,2);O[0],O[1];Object(r.useEffect)((function(){var e={whereKeyValues:{packageId:"com.roi.ruangortu"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};Object(b.o)(e).then((function(e){h(e.data.users),s(!1)})).catch((function(e){s(!1)}))}),[]);var g=Object(r.useCallback)((function(e){var t=e.row;return Object(l.jsx)(f,{userSelected:t.values.emailUser})}),[]);return a?Object(l.jsx)(j.a,{}):Object(l.jsxs)("div",{className:"Pengguna",children:[Object(l.jsx)(u.a,{headingName:"Manajemen Pengguna",routes:[{name:"Manajemen Data"},{name:"Pengguna",path:"/cms/user"}]}),Object(l.jsx)("div",{className:"Pengguna_table",children:Object(l.jsx)(c.a,{COLUMNS:d,DATA:p,renderRowSubComponent:g})})]})}},146:function(e,t,a){"use strict";var n=a(5),r=a(2),c=a(122),s=a(135),i=(a(116),a(0));t.a=function(e){var t=e.DATA,a=e.COLUMNS,l=e.renderRowSubComponent,o=Object(r.useMemo)((function(){return t}),[t]),d=Object(c.useTable)({columns:a,data:o,initialState:{hiddenColumns:["_id"]}},c.useGlobalFilter,c.useSortBy,c.useExpanded,c.usePagination),u=d.getTableProps,j=d.getTableBodyProps,b=d.headerGroups,p=d.prepareRow,h=d.page,m=d.rows,O=d.canPreviousPage,g=d.canNextPage,x=d.pageOptions,f=d.pageCount,v=d.gotoPage,_=d.nextPage,N=d.previousPage,C=d.setPageSize,y=d.visibleColumns,T=d.state,S=T.pageIndex,D=T.pageSize,k=(T.expanded,d.state),H=d.setGlobalFilter,w=k.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"utils",children:[Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{onClick:function(){return v(0)},disabled:!O,children:"<<"}),Object(i.jsx)("button",{onClick:function(){return N()},disabled:!O,children:"<"}),Object(i.jsx)("button",{onClick:function(){return _()},disabled:!g,children:">"}),Object(i.jsx)("button",{onClick:function(){return v(f-1)},disabled:!g,children:">>"}),Object(i.jsxs)("span",{children:["Page "," ",Object(i.jsxs)("strong",{children:[S+1," of ",x.length]})]}),Object(i.jsxs)("span",{children:["| Go to page:",Object(i.jsx)("input",{type:"number",defaultValue:S+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;v(t)}})]}),Object(i.jsx)("select",{value:D,onChange:function(e){C(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(i.jsxs)("div",{className:"table_props",children:[Object(i.jsxs)("span",{children:["Total: ",m.length," Data"]}),Object(i.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:w||"",onChange:function(e){H(e.currentTarget.value)}})]})]}),Object(i.jsx)("div",{className:"table_container",children:Object(i.jsxs)("table",Object(n.a)(Object(n.a)({},u()),{},{children:[Object(i.jsx)("thead",{children:b.map((function(e){return Object(i.jsx)("tr",Object(n.a)(Object(n.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(n.a)(Object(n.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(s.a,{}):Object(i.jsx)(s.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(n.a)(Object(n.a)({},j()),{},{children:h.map((function(e,t){return p(e),Object(i.jsxs)(r.Fragment,Object(n.a)(Object(n.a)({},e.getRowProps()),{},{children:[Object(i.jsx)("tr",{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(n.a)(Object(n.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?t+1+S*D:e.render("Cell")," "]}))}))}),e.isExpanded?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:y.length,children:l({row:e})})}):null]}))}))}))]}))})]})}},906:function(e,t,a){},907:function(e,t,a){},99:function(e,t,a){"use strict";a(2);var n=a(8),r=(a(100),a(0));t.a=function(e){var t=e.headingName,a=e.routes,c=void 0===a?[]:a;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:c.length>0&&c.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}}}]);
//# sourceMappingURL=45.c7d8a56b.chunk.js.map