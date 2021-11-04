(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[15],{101:function(e,t,a){"use strict";var c=a(4),r=a(2),n=a(125),o=a(111),s=(a(102),a(1));t.a=function(e){var t=e.DATA,a=e.COLUMNS,l=Object(r.useMemo)((function(){return t}),[t]),i=Object(n.useTable)({columns:a,data:l},n.useGlobalFilter,n.useSortBy),b=i.getTableProps,j=i.getTableBodyProps,d=i.headerGroups,u=i.rows,O=i.prepareRow,g=i.state,p=i.setGlobalFilter,m=g.globalFilter;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",placeholder:"Search",className:"tableInput",value:m||"",onChange:function(e){p(e.currentTarget.value)}}),Object(s.jsxs)("table",Object(c.a)(Object(c.a)({},b()),{},{children:[Object(s.jsx)("thead",{children:d.map((function(e){return Object(s.jsx)("tr",Object(c.a)(Object(c.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(s.jsxs)("th",Object(c.a)(Object(c.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(s.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(s.jsx)(o.a,{}):Object(s.jsx)(o.b,{}):""})]}))}))}))}))}),Object(s.jsx)("tbody",Object(c.a)(Object(c.a)({},j()),{},{children:u.map((function(e,t){return O(e),Object(s.jsx)("tr",Object(c.a)(Object(c.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(s.jsxs)("td",Object(c.a)(Object(c.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}))}))}))]}))]})}},102:function(e,t,a){},272:function(e,t,a){},276:function(e){e.exports=JSON.parse("{}")},328:function(e,t,a){"use strict";a.r(t);var c=a(15),r=a(2),n=(a(272),a(101)),o=a(6),s=a(7),l=a(1),i={year:"numeric",month:"long",day:"numeric"},b=function(e){return[{Header:"Title",accessor:"programName"},{Header:"Start Date",accessor:"startDate",Cell:function(e){var t=e.cell;return Object(l.jsx)(l.Fragment,{children:new Date(t.row.values.startDate).toLocaleDateString("en-UK",i)})}},{Header:"Status",accessor:"status",Cell:function(e){var t=e.value;return Object(l.jsx)("p",{style:{color:"green",fontWeight:"bold"},children:t})}},{Header:"Action",accessor:"_id",disableSortBy:!0,disableFilters:!0,Cell:function(t){var a=t.cell;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.b,{to:"/program/view",className:"nav_btn",title:"View Detail",onClick:function(){localStorage.setItem("programSelected",a.row.values._id)},children:Object(l.jsx)("button",{className:"btn_action",children:Object(l.jsx)("div",{children:Object(l.jsx)(o.l,{className:"btn_action-icon"})})})}),Object(l.jsx)(s.b,{to:"/program/edit",className:"nav_btn",title:"Edit Program",onClick:function(){localStorage.setItem("programSelected",a.row.values._id)},children:Object(l.jsx)("button",{className:"btn_action",children:Object(l.jsx)("div",{children:Object(l.jsx)(o.k,{className:"btn_action-icon"})})})}),Object(l.jsx)(s.b,{to:"/program",className:"nav_btn",title:"Delete Program",onClick:function(){e(a.row.values._id)},replace:!0,children:Object(l.jsx)("button",{className:"btn_action",children:Object(l.jsx)("div",{children:Object(l.jsx)(o.t,{className:"btn_action-icon"})})})})]})}}]},j=(a(276),a(22)),d=a.n(j),u=a(80);t.default=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),a=(t[0],t[1],Object(r.useState)(!0)),i=Object(c.a)(a,2),j=i[0],O=i[1],g=Object(r.useState)(),p=Object(c.a)(g,2),m=p[0],h=p[1],x=Object(r.useState)(null),f=Object(c.a)(x,2),v=f[0],S=f[1],N=JSON.parse(localStorage.getItem("userData")),_={whereKeyValues:{cobrandEmail:N.email}};function w(){d()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:_,headers:{"Content-Type":"application/json"}}).then((function(e){h(e.data),console.log(e.data),O(!1)})).catch((function(e){console.log(e),O(!1)}))}return Object(r.useEffect)((function(){O(!0),localStorage.getItem("programDeleting")&&(S(localStorage.getItem("programDeleting")),localStorage.removeItem("programDeleting")),w()}),[]),Object(r.useEffect)((function(){if(v){O(!0);var e={whereValues:{cobrandEmail:N.email,_id:v}};d()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programRemove",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),S(null),w()})).catch((function(e){console.log(e),S(null),w()}))}}),[v]),j?Object(l.jsx)(u.a,{}):Object(l.jsxs)("div",{className:"Program",children:[Object(l.jsx)("h1",{children:"PROGRAM"}),Object(l.jsxs)(s.b,{to:"/program/add",id:"add_program",children:[Object(l.jsx)(o.r,{className:"IconAdd"}),Object(l.jsx)("span",{children:"Create New Program"})]}),Object(l.jsx)("div",{className:"Program__table",children:Object(l.jsx)(n.a,{COLUMNS:b(S),DATA:m.programs})})]})}},80:function(e,t,a){"use strict";a(2);var c=a(30),r=(a(81),a(1));t.a=function(e){var t=e.text,a=void 0===t?"Mohon Tunggu":t;return Object(r.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(r.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(r.jsx)("span",{children:"Keluarga HKBP"})," "]}),Object(r.jsx)(c.a,{}),Object(r.jsx)("p",{children:a})]})}},81:function(e,t,a){}}]);
//# sourceMappingURL=15.e48f09b2.chunk.js.map