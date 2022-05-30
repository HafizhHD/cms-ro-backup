(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[37],{109:function(e,a,t){"use strict";t(2);var n=t(7),c=(t(112),t(0));a.a=function(e){var a=e.headingName,t=e.routes,s=void 0===t?[]:t;return Object(c.jsxs)("div",{className:"Heading",children:[Object(c.jsx)("h1",{children:a}),Object(c.jsx)("ul",{className:"Heading__breadcumb",children:s.length>0&&s.map((function(e,a){return e.path?Object(c.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(c.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},a):Object(c.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(c.jsx)("span",{children:e.name})," "]},a)}))})]})}},112:function(e,a,t){},117:function(e,a,t){},130:function(e,a,t){"use strict";var n=t(2),c=(t(133),t(0));function s(e){var a=e.placeholder,t=e.type,n=e.onChange,s=e.onBlur,r=e.value,o=e.className,i=e.message,d=e.name,l=e.min,j=e.disabled,b=e.isError;return"textarea"===t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("textarea",{name:d,id:d,className:o,placeholder:a,onChange:n,onBlur:s,value:r,disabled:j}),b&&Object(c.jsx)("div",{className:"message",children:Object(c.jsx)("span",{className:"message__error",children:i})})]}):"date"===t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{name:d,className:o,type:t,placeholder:a,onChange:n,onBlur:s,value:r,min:l,max:"9999-12-31",disabled:j}),b&&Object(c.jsx)("div",{className:"message",children:Object(c.jsx)("span",{className:"message__error",children:i})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{name:d,className:o,type:t,placeholder:a,onChange:n,onBlur:s,value:r,disabled:j}),b&&Object(c.jsx)("div",{className:"message",children:Object(c.jsx)("span",{className:"message__error",children:i})})]})}a.a=Object(n.memo)(s)},133:function(e,a,t){},1405:function(e,a,t){"use strict";t.r(a);var n=t(10),c=t(2),s=(t(854),t(109)),r=t(130),o=t(337),i=t(156),d=[{Header:"No",accessor:"cobrandEmail"},{Header:"Name",accessor:"placeName"},{Header:"Location",accessor:"location"},{Header:"Status",accessor:"redZoneStatus"},{Header:"Adress",accessor:"address"}],l=(t(869),t(18)),j=t.n(l),b=t(3),u=t(7),h=t(0);a.default=function(){var e=Object(c.useState)(""),a=Object(n.a)(e,2),t=a[0],l=a[1],m=Object(c.useState)([]),p=Object(n.a)(m,2),O=p[0],x=p[1];return Object(c.useEffect)((function(){j()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneFilter"}).then((function(e){console.log(e.data),x(e.data.Data),console.log(O)})).catch((function(e){console.log(e+"ini eror get list redzone")}))}),[]),Object(c.useEffect)((function(){j()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneAdd",data:{cobrandEmail:"muhammadsyihab.te@gmail.com",placeName:"Tempat Sabung ayam",description:"Tempat Sabung ayam A",address:"kaliideres",redZoneStatus:"active",location:[-6.212694432483453,106.85043740452949]}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e+"ini eror add redzone")}))}),[]),Object(c.useEffect)((function(){j()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneUpdate",data:{whereValues:{_id:"628b4f8ac040ad69e5f317e9"},newKeyValues:{placeName:"Tempat Sabung ayam yang baru dibuat iniii"}}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e+"ini eror edit redzone")}))}),[]),Object(h.jsxs)("div",{className:"RedZone",children:[Object(h.jsx)(s.a,{headingName:"Redzone",routes:[{name:"Data Redzone"},{path:"/redzone",name:"List Redzone"}]}),Object(h.jsxs)("div",{className:"RedZone__map",children:[Object(h.jsxs)("div",{className:"RedZone__heading",children:[Object(h.jsx)("h3",{children:"Map View"}),Object(h.jsx)(r.a,{className:"Input-control",type:"text",placeholder:"Search",name:"search",onChange:function(e){console.log(e.currentTarget.value);var a="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURI(e.currentTarget.value)+".json?access_token="+o.a;j()({method:"get",url:a}).then((function(e){l(e.data.features[0])})).catch((function(e){console.log(e)}))}})]}),Object(h.jsx)("div",{className:"RedZone__data",children:Object(h.jsx)(o.b,{search:t})})]}),Object(h.jsxs)("div",{className:"RedZone__list",children:[Object(h.jsxs)("div",{className:"divlink",children:[Object(h.jsxs)(u.b,{to:"/cms/redzone/add",id:"add",children:[Object(h.jsx)(b.t,{className:"IconAdd"}),Object(h.jsx)("span",{children:"Create New Redzone"})]}),Object(h.jsx)(u.b,{to:"/cms/redzone/edit",id:"add2",children:Object(h.jsx)("span",{children:"Edit Redzone"})})]}),Object(h.jsx)("div",{className:"RedZone__heading",children:Object(h.jsx)("h3",{children:"Redzone List"})}),Object(h.jsx)("div",{className:"RedZone__data",children:Object(h.jsx)(i.a,{className:"table-col",COLUMNS:d,DATA:O})})]})]})}},156:function(e,a,t){"use strict";var n=t(5),c=t(2),s=t(123),r=t(141),o=(t(117),t(0));a.a=function(e){var a=e.DATA,t=e.COLUMNS,i=e.renderRowSubComponent,d=Object(c.useMemo)((function(){return a}),[a]),l=Object(s.useTable)({columns:t,data:d},s.useGlobalFilter,s.useSortBy,s.useExpanded,s.usePagination),j=l.getTableProps,b=l.getTableBodyProps,u=l.headerGroups,h=l.prepareRow,m=l.page,p=l.rows,O=l.canPreviousPage,x=l.canNextPage,g=l.pageOptions,f=l.pageCount,v=l.gotoPage,N=l.nextPage,_=l.previousPage,y=l.setPageSize,S=l.visibleColumns,w=l.state,C=w.pageIndex,z=w.pageSize,R=(w.expanded,l.state),P=l.setGlobalFilter,Z=R.globalFilter;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"utils",children:[Object(o.jsxs)("div",{className:"pagination",children:[Object(o.jsx)("button",{onClick:function(){return v(0)},disabled:!O,children:"<<"}),Object(o.jsx)("button",{onClick:function(){return _()},disabled:!O,children:"<"}),Object(o.jsx)("button",{onClick:function(){return N()},disabled:!x,children:">"}),Object(o.jsx)("button",{onClick:function(){return v(f-1)},disabled:!x,children:">>"}),Object(o.jsxs)("span",{children:["Page "," ",Object(o.jsxs)("strong",{children:[C+1," of ",g.length]})]}),Object(o.jsxs)("span",{children:["| Go to page:",Object(o.jsx)("input",{type:"number",defaultValue:C+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;v(a)}})]}),Object(o.jsx)("select",{value:z,onChange:function(e){y(Number(e.target.value))},children:[10,15,20].map((function(e){return Object(o.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(o.jsxs)("div",{className:"table_props",children:[Object(o.jsxs)("span",{children:["Total: ",p.length," Data"]}),Object(o.jsx)("input",{type:"text",className:"table_props_input",placeholder:"Search",value:Z||"",onChange:function(e){P(e.currentTarget.value)}})]})]}),Object(o.jsx)("div",{className:"table_container",children:Object(o.jsxs)("table",Object(n.a)(Object(n.a)({},j()),{},{children:[Object(o.jsx)("thead",{children:u.map((function(e){return Object(o.jsx)("tr",Object(n.a)(Object(n.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(o.jsxs)("th",Object(n.a)(Object(n.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(o.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(o.jsx)(r.a,{}):Object(o.jsx)(r.b,{}):""})]}))}))}))}))}),Object(o.jsx)("tbody",Object(n.a)(Object(n.a)({},b()),{},{children:m.map((function(e,a){return h(e),Object(o.jsxs)(c.Fragment,Object(n.a)(Object(n.a)({},e.getRowProps()),{},{children:[Object(o.jsx)("tr",{children:e.cells.map((function(e){return Object(o.jsxs)("td",Object(n.a)(Object(n.a)({},e.getCellProps()),{},{children:[" ",e.render("Cell")," "]}))}))}),e.isExpanded?Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:S.length,children:i({row:e})})}):null]}))}))}))]}))})]})}},337:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t(2);var n=t(610),c=(t(18),t(485),t(0)),s=Object(n.c)({accessToken:"pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg"}),r="pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg";a.b=function(e){var a=e.search;return console.log(a),Object(c.jsx)(s,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"50vh"},center:a?a.center:[10,10],zoom:[11],children:Object(c.jsx)(n.b,{type:"symbol",id:"marker",layout:{"icon-image":"marker-15"},children:Object(c.jsx)(n.a,{coordinates:a?a.center:[5,5]})})})}},854:function(e,a,t){},869:function(e){e.exports=JSON.parse("{}")}}]);
//# sourceMappingURL=37.877ea767.chunk.js.map