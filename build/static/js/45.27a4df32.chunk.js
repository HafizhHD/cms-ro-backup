(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[45],{110:function(e,t,a){"use strict";a(2);var n=a(7),c=(a(111),a(0));t.a=function(e){var t=e.headingName,a=e.routes,s=void 0===a?[]:a;return Object(c.jsxs)("div",{className:"Heading",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,t){return e.path?Object(c.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(c.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(c.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(c.jsx)("span",{children:e.name})," "]},t)}))})]})}},111:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){"use strict";a.d(t,"j",(function(){return r})),a.d(t,"e",(function(){return i})),a.d(t,"l",(function(){return l})),a.d(t,"k",(function(){return o})),a.d(t,"c",(function(){return d})),a.d(t,"g",(function(){return u})),a.d(t,"b",(function(){return j})),a.d(t,"h",(function(){return b})),a.d(t,"a",(function(){return p})),a.d(t,"i",(function(){return h})),a.d(t,"d",(function(){return O})),a.d(t,"f",(function(){return m}));var n=a(18),c=a.n(n),s=a(20),r=function(e){return c()({method:"post",url:s.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return c()({method:"post",url:s.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return c()({method:"post",url:s.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return c()({method:"post",url:s.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return c()({method:"post",url:s.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return c()({method:"post",url:s.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return c()({method:"post",url:s.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return c()({method:"post",url:s.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return c()({method:"post",url:s.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return c()({method:"post",url:s.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return c()({method:"post",url:s.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return c()({method:"post",url:s.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})}},1424:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(2),s=a(160),r=[{Header:"No Telepon",accessor:"phoneNumber"},{Header:"Tipe User",accessor:"userType"},{Header:"Email",accessor:"emailUser"},{Header:"Nama",accessor:"nameUser"},{Header:"Email Orang tua",accessor:"parentEmail"},{Header:"Nama Orang tua",accessor:"parentName",Cell:function(e){var t=e.value;return void 0!==t?t.join(", "):""}},{Header:"Sekolah",accessor:"childInfo.schoolName"},{Header:"Pendidikan",accessor:"childInfo.StudyLevel"},{Header:"Jenis Kelamin",accessor:"gender"},{Header:"Alamat",accessor:"address"},{Header:"Mulai Berlanggan",accessor:"startSubscription"},{Header:"Berlanggan Sampai",accessor:"endSubscription"}],i=a(110),l=a(28),o=(a(887),a(118)),d=a(0),u=[{Header:"Email",accessor:"emailUser"},{Header:"Nama",accessor:"nameUser"},{Header:"No Telepon",accessor:"phoneNumber"},{Header:"Tgl. Registrasi",accessor:"dateCreated",Cell:function(e){var t=e.value;return Object(d.jsx)("p",{children:t.split("T")[0]})}},{Header:"Tipe User",accessor:"userType"},{Header:"User status",accessor:"status",Cell:function(e){var t=e.value,a={color:"green"};return"active"!==t&&(a={color:"red"}),Object(d.jsx)("p",{style:a,children:t})}}],j=a(18),b=a.n(j),p=(a(888),a(1420)),h=a(124),O="https://as01.prod.ruangortu.id:8080",m=function(e){var t=e.userSelected,a=Object(c.useState)(!0),r=Object(n.a)(a,2),i=r[0],l=r[1],o=Object(c.useState)(),j=Object(n.a)(o,2),m=j[0],g=j[1],x=Object(c.useState)(),f=Object(n.a)(x,2),_=f[0],v=f[1],N=Object(c.useState)(!1),T=Object(n.a)(N,2),y=T[0],C=T[1],S=Object(c.useState)(!1),k=Object(n.a)(S,2),H=k[0],D=k[1],P=Object(c.useState)(!1),w=Object(n.a)(P,2),F=w[0],U=w[1],A=function(){return U(!1)},E=Object(c.useState)(!1),B=Object(n.a)(E,2),L=B[0],R=B[1],V=function(){return R(!1)};return Object(c.useEffect)((function(){console.log(t);var e={whereKeyValues:{emailUser:t}};console.log(e),b()({method:"post",url:"".concat(O,"/api/user/userFilter"),data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),g(e.data.users[0]);var a={whereKeyValues:{}};"parent"===e.data.users[0].userType?a={whereKeyValues:{parentEmail:t}}:"child"===e.data.users[0].userType&&(a={whereKeyValues:{emailUser:e.data.users[0].parentEmail}}),console.log(a),b()({method:"post",url:"".concat(O,"/api/user/userFilter"),data:a,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),v(e.data.users),l(!1)})).catch((function(e){console.log(e),l(!1)}))})).catch((function(e){console.log(e),l(!1)}))}),[]),Object(c.useEffect)((function(){if(y){l(!0);var e="active"===m.status?"inactive":"active",t={whereValues:{emailUser:m.emailUser},newValues:{status:e}};console.log(t),b()({method:"post",url:"".concat(O,"/api/user/edit"),data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),C(!1),window.location.reload()})).catch((function(e){console.log(e),C(!1)})),l(!1)}}),[y]),Object(c.useEffect)((function(){if(H){l(!0);var e={userId:m._id};console.log(e),b()({method:"post",url:"".concat(O,"/api/user/remove"),data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),D(!1),window.location.reload()})).catch((function(e){console.log(e),D(!1)})),l(!1)}}),[H]),i?Object(d.jsx)("p",{children:"Loading..."}):Object(d.jsxs)("div",{className:"Detail",children:[Object(d.jsxs)("div",{className:"Detail_detail",children:[Object(d.jsx)("div",{className:"Detail_detail_photo",children:Object(d.jsx)("img",{src:m.imagePhoto})}),Object(d.jsxs)("div",{className:"Detail_detail_detail",children:[Object(d.jsxs)("div",{className:"Detail_detail_detail_group",children:[Object(d.jsx)("div",{className:"Detail_detail_detail_group_field",children:Object(d.jsx)("h5",{children:"Nama"})}),Object(d.jsx)("div",{className:"Detail_detail_detail_group_colon",children:Object(d.jsx)("h5",{children:": "})}),Object(d.jsx)("div",{className:"Detail_detail_detail_group_value",children:Object(d.jsx)("h5",{children:m.nameUser})})]}),Object(d.jsxs)("div",{className:"Detail_detail_detail_group",children:[Object(d.jsx)("div",{className:"Detail_detail_detail_group_field",children:Object(d.jsx)("h5",{children:"Tgl. Lahir"})}),Object(d.jsx)("div",{className:"Detail_detail_detail_group_colon",children:Object(d.jsx)("h5",{children:": "})}),Object(d.jsx)("div",{className:"Detail_detail_detail_group_value",children:Object(d.jsx)("h5",{children:m.birdDate?m.birdDate.split("T")[0]:""})})]}),Object(d.jsxs)("div",{className:"Detail_detail_detail_group",children:[Object(d.jsx)("div",{className:"Detail_detail_detail_group_field",children:Object(d.jsx)("h5",{children:"Email"})}),Object(d.jsx)("div",{className:"Detail_detail_detail_group_colon",children:Object(d.jsx)("h5",{children:": "})}),Object(d.jsx)("div",{className:"Detail_detail_detail_group_value",children:Object(d.jsx)("h5",{children:m.emailUser})})]}),Object(d.jsxs)("div",{className:"Detail_detail_detail_group",children:[Object(d.jsx)("div",{className:"Detail_detail_detail_group_field",children:Object(d.jsx)("h5",{children:"Peran"})}),Object(d.jsx)("div",{className:"Detail_detail_detail_group_colon",children:Object(d.jsx)("h5",{children:": "})}),Object(d.jsx)("div",{className:"Detail_detail_detail_group_value",children:Object(d.jsx)("h5",{children:"parent"===m.userType?m.parentStatus:"Anak"})})]}),Object(d.jsx)("div",{className:"Detail_detail_detail_group",children:Object(d.jsx)("br",{})})]})]}),Object(d.jsxs)("div",{className:"Detail_table",children:[Object(d.jsx)("div",{className:"Detail_table_title",children:Object(d.jsx)("h2",{children:"parent"===m.userType?"List Anak":"List Orang Tua"})}),Object(d.jsx)(s.a,{COLUMNS:u,DATA:_})]}),Object(d.jsxs)(p.a,{show:F,onHide:A,className:"modal",children:[Object(d.jsx)(p.a.Header,{closeButton:!0,children:Object(d.jsx)(p.a.Title,{children:"Non Aktifkan Pengguna"})}),Object(d.jsx)(p.a.Body,{children:"Apakah anda yakin untuk Non-Aktifkan Pengguna ini?"}),Object(d.jsx)(h.a,{variant:"secondary",onClick:A,className:"prev",children:"Cancel"}),Object(d.jsx)(h.a,{variant:"primary",onClick:function(){return C(!0)},className:"submit",children:"Submit"})]}),Object(d.jsxs)(p.a,{show:L,onHide:V,className:"modal",children:[Object(d.jsx)(p.a.Header,{closeButton:!0,children:Object(d.jsx)(p.a.Title,{children:"Aktifkan Pengguna"})}),Object(d.jsx)(p.a.Body,{children:"Apakah anda yakin untuk Aktifkan Pengguna ini?"}),Object(d.jsx)(h.a,{variant:"secondary",onClick:V,className:"prev",children:"Cancel"}),Object(d.jsx)(h.a,{variant:"primary",onClick:function(){return C(!0)},className:"submit",children:"Submit"})]})]})},g=a(6);t.default=function(){var e=Object(c.useState)(!0),t=Object(n.a)(e,2),a=t[0],u=t[1],j=Object(c.useState)(),b=Object(n.a)(j,2),p=b[0],h=b[1],O=Object(c.useState)(!1),x=Object(n.a)(O,2),f=x[0];x[1];Object(c.useEffect)((function(){var e={whereKeyValues:{packageId:"com.byasia.ruangortu"},limit:Number.MAX_SAFE_INTEGER};console.log(e),Object(o.l)(e).then((function(e){console.log(e.data),h(e.data.users),u(!1)})).catch((function(e){console.log(e),u(!1)}))}),[]);var _=Object(c.useCallback)((function(e){var t=e.row;return Object(d.jsx)(m,{userSelected:t.values.emailUser})}),[]);return a?Object(d.jsx)(l.a,{}):1==f?Object(d.jsx)(g.a,{to:"/cms/user-edit"}):Object(d.jsxs)("div",{className:"Pengguna",children:[Object(d.jsx)(i.a,{headingName:"Helpdesk",routes:[{name:"Helpdesk",path:"/helpdesk"},{name:"Pengguna"}]}),Object(d.jsx)("div",{className:"Pengguna_table",children:Object(d.jsx)(s.a,{COLUMNS:r,DATA:p,renderRowSubComponent:_})})]})}},160:function(e,t,a){"use strict";var n=a(5),c=a(2),s=a(123),r=a(138),i=(a(117),a(0));t.a=function(e){var t=e.DATA,a=e.COLUMNS,l=e.renderRowSubComponent,o=Object(c.useMemo)((function(){return t}),[t]),d=Object(s.useTable)({columns:a,data:o,initialState:{hiddenColumns:["_id"]}},s.useGlobalFilter,s.useSortBy,s.useExpanded,s.usePagination),u=d.getTableProps,j=d.getTableBodyProps,b=d.headerGroups,p=d.prepareRow,h=d.page,O=d.rows,m=d.canPreviousPage,g=d.canNextPage,x=d.pageOptions,f=d.pageCount,_=d.gotoPage,v=d.nextPage,N=d.previousPage,T=d.setPageSize,y=d.visibleColumns,C=d.state,S=C.pageIndex,k=C.pageSize,H=(C.expanded,d.state),D=d.setGlobalFilter,P=H.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"utils",children:[Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{onClick:function(){return _(0)},disabled:!m,children:"<<"}),Object(i.jsx)("button",{onClick:function(){return N()},disabled:!m,children:"<"}),Object(i.jsx)("button",{onClick:function(){return v()},disabled:!g,children:">"}),Object(i.jsx)("button",{onClick:function(){return _(f-1)},disabled:!g,children:">>"}),Object(i.jsxs)("span",{children:["Page "," ",Object(i.jsxs)("strong",{children:[S+1," of ",x.length]})]}),Object(i.jsxs)("span",{children:["| Go to page:",Object(i.jsx)("input",{type:"number",defaultValue:S+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;_(t)}})]}),Object(i.jsx)("select",{value:k,onChange:function(e){T(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(i.jsxs)("div",{className:"table_props",children:[Object(i.jsxs)("span",{children:["Total: ",O.length," Data"]}),Object(i.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:P||"",onChange:function(e){D(e.currentTarget.value)}})]})]}),Object(i.jsx)("div",{className:"table_container",children:Object(i.jsxs)("table",Object(n.a)(Object(n.a)({},u()),{},{children:[Object(i.jsx)("thead",{children:b.map((function(e){return Object(i.jsx)("tr",Object(n.a)(Object(n.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(n.a)(Object(n.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(r.a,{}):Object(i.jsx)(r.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(n.a)(Object(n.a)({},j()),{},{children:h.map((function(e,t){return p(e),Object(i.jsxs)(c.Fragment,Object(n.a)(Object(n.a)({},e.getRowProps()),{},{children:[Object(i.jsx)("tr",{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(n.a)(Object(n.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}),e.isExpanded?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:y.length,children:l({row:e})})}):null]}))}))}))]}))})]})}},887:function(e,t,a){},888:function(e,t,a){}}]);
//# sourceMappingURL=45.27a4df32.chunk.js.map