(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[11],{284:function(e,a,t){},308:function(e){e.exports=JSON.parse('[{"id":1,"name":"Beer Garden","location":"Jl. Jend Sudirman No. 5 RT.5 / RW.3 Senayan City","lat":106859585958,"lon":-9484940494,"created_at":"02-06-2021 12:00"},{"id":1,"name":"Beer Garden","location":"Jl. SCBD No. 5 RT.5 / RW.3 Senayan City","lat":506859585958,"lon":-1484940494,"created_at":"12-06-2021 12:00"}]')},325:function(e,a,t){"use strict";t.r(a);var c=t(15),n=t(2),s=(t(284),t(81)),r=t(83),o=t(312),l=t(22),i=t.n(l),j=(t(307),t(1)),d=Object(o.c)({accessToken:"pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg"}),b=function(e){var a=e.search;return console.log(a),Object(j.jsx)(d,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"50vh"},center:a?a.center:[10,10],zoom:[11],children:Object(j.jsx)(o.b,{type:"symbol",id:"marker",layout:{"icon-image":"marker-15"},children:Object(j.jsx)(o.a,{coordinates:a?a.center:[5,5]})})})},h=t(98),m=t(6),u=[{Header:"No",accessor:"id"},{Header:"Name",accessor:"name"},{Header:"Location",accessor:"location"},{Header:"Geo Tag",Cell:function(e){var a=e.row;return a.original.lat+" "+a.original.lon}},{Header:"Created At",accessor:"created_at"},{Header:"Action",Cell:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"btn_action",onClick:function(){return console.log(e)},children:Object(j.jsx)("div",{children:Object(j.jsx)(m.k,{className:"btn_action-icon"})})}),Object(j.jsx)("button",{className:"btn_action",children:Object(j.jsx)("div",{children:Object(j.jsx)(m.j,{className:"btn_action-icon"})})}),Object(j.jsx)("button",{className:"btn_action",children:Object(j.jsx)("div",{children:Object(j.jsx)(m.s,{className:"btn_action-icon"})})})]})}}],O=t(308);a.default=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],o=a[1];return Object(j.jsxs)("div",{className:"RedZone",children:[Object(j.jsx)(s.a,{headingName:"Redzone",routes:[{name:"Data Redzone"},{path:"/redzone",name:"List Redzone"}]}),Object(j.jsxs)("div",{className:"RedZone__map",children:[Object(j.jsxs)("div",{className:"RedZone__heading",children:[Object(j.jsx)("h3",{children:"Map View"}),Object(j.jsx)(r.a,{className:"Input-control",type:"text",placeholder:"Search",name:"search",onChange:function(e){console.log(e.currentTarget.value);var a="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURI(e.currentTarget.value)+".json?access_token=pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg";i()({method:"get",url:a}).then((function(e){o(e.data.features[0])})).catch((function(e){console.log(e)}))}})]}),Object(j.jsx)("div",{className:"RedZone__data",children:Object(j.jsx)(b,{search:t})})]}),Object(j.jsxs)("div",{className:"RedZone__list",children:[Object(j.jsxs)("div",{className:"RedZone__heading",children:[Object(j.jsx)("h3",{children:"Redzone List"}),Object(j.jsx)(r.a,{className:"Input-control",type:"text",placeholder:"Search",name:"search"})]}),Object(j.jsx)("div",{className:"RedZone__data",children:Object(j.jsx)(h.a,{COLUMNS:u,DATA:O})})]})]})}},81:function(e,a,t){"use strict";t(2);var c=t(7),n=(t(82),t(1));a.a=function(e){var a=e.headingName,t=e.routes,s=void 0===t?[]:t;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:a}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,a){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(c.b,{exact:!0,to:e.path,children:e.name})," "]},a):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},a)}))})]})}},82:function(e,a,t){},83:function(e,a,t){"use strict";var c=t(2),n=(t(84),t(1));function s(e){var a=e.placeholder,t=e.type,c=e.onChange,s=e.onBlur,r=e.value,o=e.className,l=e.message,i=e.name,j=e.min,d=e.isError;return"textarea"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:i,id:i,className:o,placeholder:a,onChange:c,onBlur:s,value:r}),d&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:l})})]}):"date"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:i,className:o,type:t,placeholder:a,onChange:c,onBlur:s,value:r,min:j}),d&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:l})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:i,className:o,type:t,placeholder:a,onChange:c,onBlur:s,value:r}),d&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:l})})]})}a.a=Object(c.memo)(s)},84:function(e,a,t){},98:function(e,a,t){"use strict";var c=t(5),n=t(2),s=t(124),r=t(108),o=(t(99),t(1));a.a=function(e){var a=e.DATA,t=e.COLUMNS,l=Object(n.useMemo)((function(){return a}),[a]),i=Object(s.useTable)({columns:t,data:l},s.useGlobalFilter,s.useSortBy),j=i.getTableProps,d=i.getTableBodyProps,b=i.headerGroups,h=i.rows,m=i.prepareRow,u=i.state,O=i.setGlobalFilter,x=u.globalFilter;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"text",placeholder:"Search",className:"tableInput",value:x||"",onChange:function(e){O(e.currentTarget.value)}}),Object(o.jsxs)("table",Object(c.a)(Object(c.a)({},j()),{},{children:[Object(o.jsx)("thead",{children:b.map((function(e){return Object(o.jsx)("tr",Object(c.a)(Object(c.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(o.jsxs)("th",Object(c.a)(Object(c.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(o.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(o.jsx)(r.a,{}):Object(o.jsx)(r.b,{}):""})]}))}))}))}))}),Object(o.jsx)("tbody",Object(c.a)(Object(c.a)({},d()),{},{children:h.map((function(e,a){return m(e),Object(o.jsx)("tr",Object(c.a)(Object(c.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(o.jsxs)("td",Object(c.a)(Object(c.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}))}))}))]}))]})}},99:function(e,a,t){}}]);
//# sourceMappingURL=11.6718e54b.chunk.js.map