(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[35],{106:function(e,a,t){"use strict";var n=t(2),c=(t(107),t(0));function s(e){var a=e.placeholder,t=e.type,n=e.onChange,s=e.onBlur,r=e.value,i=e.className,d=e.message,l=e.name,o=e.min,j=e.max,b=e.disabled,u=e.isError;return"textarea"===t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("textarea",{name:l,id:l,className:i,placeholder:a,onChange:n,onBlur:s,value:r,disabled:b}),u&&Object(c.jsx)("div",{className:"message",children:Object(c.jsx)("span",{className:"message__error",children:d})})]}):"date"===t||"datetime-local"===t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{name:l,className:i,type:t,placeholder:a,onChange:n,onBlur:s,value:r,min:o,max:"9999-12-31",disabled:b}),u&&Object(c.jsx)("div",{className:"message",children:Object(c.jsx)("span",{className:"message__error",children:d})})]}):"number"===t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{name:l,className:i,type:t,onChange:n,onBlur:s,value:r,min:o,max:j,disabled:b}),u&&Object(c.jsx)("div",{className:"message",children:Object(c.jsx)("span",{className:"message__error",children:d})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{name:l,className:i,type:t,placeholder:a,onChange:n,onBlur:s,value:r,disabled:b}),u&&Object(c.jsx)("div",{className:"message",children:Object(c.jsx)("span",{className:"message__error",children:d})})]})}a.a=Object(n.memo)(s)},107:function(e,a,t){},112:function(e,a,t){},145:function(e,a,t){"use strict";var n=t(5),c=t(2),s=t(122),r=t(135),i=(t(112),t(0));a.a=function(e){var a=e.DATA,t=e.COLUMNS,d=e.renderRowSubComponent,l=Object(c.useMemo)((function(){return a}),[a]),o=Object(s.useTable)({columns:t,data:l,initialState:{hiddenColumns:["_id"]}},s.useGlobalFilter,s.useSortBy,s.useExpanded,s.usePagination),j=o.getTableProps,b=o.getTableBodyProps,u=o.headerGroups,h=o.prepareRow,m=o.page,O=o.rows,x=o.canPreviousPage,p=o.canNextPage,g=o.pageOptions,v=o.pageCount,N=o.gotoPage,f=o.nextPage,_=o.previousPage,S=o.setPageSize,y=o.visibleColumns,C=o.state,w=C.pageIndex,R=C.pageSize,P=(C.expanded,o.state),I=o.setGlobalFilter,z=P.globalFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"utils",children:[Object(i.jsxs)("div",{className:"pagination",children:[Object(i.jsx)("button",{onClick:function(){return N(0)},disabled:!x,children:"<<"}),Object(i.jsx)("button",{onClick:function(){return _()},disabled:!x,children:"<"}),Object(i.jsx)("button",{onClick:function(){return f()},disabled:!p,children:">"}),Object(i.jsx)("button",{onClick:function(){return N(v-1)},disabled:!p,children:">>"}),Object(i.jsxs)("span",{children:["Page "," ",Object(i.jsxs)("strong",{children:[w+1," of ",g.length]})]}),Object(i.jsxs)("span",{children:["| Go to page:",Object(i.jsx)("input",{type:"number",defaultValue:w+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;N(a)}})]}),Object(i.jsx)("select",{value:R,onChange:function(e){S(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(i.jsxs)("div",{className:"table_props",children:[Object(i.jsxs)("span",{children:["Total: ",O.length," Data"]}),Object(i.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:z||"",onChange:function(e){I(e.currentTarget.value)}})]})]}),Object(i.jsx)("div",{className:"table_container",children:Object(i.jsxs)("table",Object(n.a)(Object(n.a)({},j()),{},{children:[Object(i.jsx)("thead",{children:u.map((function(e){return Object(i.jsx)("tr",Object(n.a)(Object(n.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsxs)("th",Object(n.a)(Object(n.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(i.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(i.jsx)(r.a,{}):Object(i.jsx)(r.b,{}):""})]}))}))}))}))}),Object(i.jsx)("tbody",Object(n.a)(Object(n.a)({},b()),{},{children:m.map((function(e,a){return h(e),Object(i.jsxs)(c.Fragment,Object(n.a)(Object(n.a)({},e.getRowProps()),{},{children:[Object(i.jsx)("tr",{children:e.cells.map((function(e){return Object(i.jsxs)("td",Object(n.a)(Object(n.a)({},e.getCellProps()),{},{children:[" ","rowNumber"===e.column.id?a+1+w*R:e.render("Cell")," "]}))}))}),e.isExpanded?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{colSpan:y.length,children:d({row:e})})}):null]}))}))}))]}))})]})}},1462:function(e,a,t){"use strict";t.r(a);var n=t(7),c=t(2),s=(t(895),t(94)),r=t(106),i=t(383),d=t(145),l=[{Header:"No",accessor:"cobrandEmail"},{Header:"Name",accessor:"placeName"},{Header:"Location",accessor:"location"},{Header:"Status",accessor:"redZoneStatus"},{Header:"Adress",accessor:"address"}],o=(t(901),t(18)),j=t.n(o),b=t(3),u=t(8),h=t(0);a.default=function(){var e=Object(c.useState)(""),a=Object(n.a)(e,2),t=a[0],o=a[1],m=Object(c.useState)([]),O=Object(n.a)(m,2),x=O[0],p=O[1];return Object(c.useEffect)((function(){JSON.parse(localStorage.getItem("userData"));j()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneFilter",data:{whereKeyValues:{cobrandEmail:"admin@roi.ruangortu.id"}}}).then((function(e){p(e.data.Data)})).catch((function(e){}))}),[]),Object(h.jsxs)("div",{className:"RedZone",children:[Object(h.jsx)(s.a,{headingName:"Redzone",routes:[{name:"Data Redzone"},{path:"/redzone",name:"List Redzone"}]}),Object(h.jsxs)("div",{className:"RedZone__map",children:[Object(h.jsxs)("div",{className:"RedZone__heading",children:[Object(h.jsx)("h3",{children:"Map View"}),Object(h.jsx)(r.a,{className:"Input-control",type:"text",placeholder:"Search",name:"search",onChange:function(e){var a="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURI(e.currentTarget.value)+".json?access_token="+i.a;j()({method:"get",url:a}).then((function(e){o(e.data.features[0])})).catch((function(e){}))}})]}),Object(h.jsx)("div",{className:"RedZone__data",children:Object(h.jsx)(i.b,{search:t})})]}),Object(h.jsxs)("div",{className:"RedZone__list",children:[Object(h.jsxs)("div",{className:"divlink",children:[Object(h.jsxs)(u.b,{to:"/cms/redzone/add",id:"add",children:[Object(h.jsx)(b.w,{className:"IconAdd"}),Object(h.jsx)("span",{children:"Create New Redzone"})]}),Object(h.jsx)(u.b,{to:"/cms/redzone/edit",id:"add2",children:Object(h.jsx)("span",{children:"Edit Redzone"})})]}),Object(h.jsx)("div",{className:"RedZone__heading",children:Object(h.jsx)("h3",{children:"Redzone List"})}),Object(h.jsx)("div",{className:"RedZone__data",children:Object(h.jsx)(d.a,{className:"table-col",COLUMNS:l,DATA:x})})]})]})}},383:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t(2);var n=t(647),c=(t(18),t(520),t(0)),s=Object(n.c)({accessToken:"pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg"}),r="pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg";a.b=function(e){var a=e.search;return Object(c.jsx)(s,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"50vh"},center:a?a.center:[10,10],zoom:[11],children:Object(c.jsx)(n.b,{type:"symbol",id:"marker",layout:{"icon-image":"marker-15"},children:Object(c.jsx)(n.a,{coordinates:a?a.center:[5,5]})})})}},895:function(e,a,t){},901:function(e){e.exports=JSON.parse("{}")},94:function(e,a,t){"use strict";t(2);var n=t(8),c=(t(95),t(0));a.a=function(e){var a=e.headingName,t=e.routes,s=void 0===t?[]:t;return Object(c.jsxs)("div",{className:"Heading",children:[Object(c.jsx)("h1",{children:a}),Object(c.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,a){return e.path?Object(c.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(c.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},a):Object(c.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(c.jsx)("span",{children:e.name})," "]},a)}))})]})}},95:function(e,a,t){}}]);
//# sourceMappingURL=35.40cdd458.chunk.js.map