(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[21],{288:function(e,t,n){},328:function(e,t,n){"use strict";n.r(t);var o=n(14),a=n(2),c=n(85),l=(n(288),n(98)),r=n(5),s=n(92),i=n(83),d=n(16),u=n(91),m=n(89),p=n(18),j=n.n(p),b=n(159),g=n.n(b),h=n(1);t.default=Object(d.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onEditContent:function(t,n,o,a,c,l,r,i,d,u,m){return e(Object(s.e)(t,n,o,a,c,l,r,i,d,u,m))}}}))((function(e){var t=e.onEditContent,n=e.isLoading,s=Object(a.useState)(!0),d=Object(o.a)(s,2),p=d[0],b=d[1],O=Object(a.useState)(),f=Object(o.a)(O,2),x=f[0],T=f[1],N=Object(a.useState)(),y=Object(o.a)(N,2),_=y[0],S=y[1],v=Object(a.useState)(),C=Object(o.a)(v,2),B=C[0],D=C[1],E=Object(a.useState)(""),I=Object(o.a)(E,2),L=I[0],P=I[1],w=Object(a.useState)(g.a.createEmptyValue()),U=Object(o.a)(w,2),V=U[0],k=U[1],R={display:["INLINE_STYLE_BUTTONS","BLOCK_TYPE_BUTTONS","BLOCK_TYPE_DROPDOWN","HISTORY_BUTTONS"],INLINE_STYLE_BUTTONS:[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Strikethrough",style:"STRIKETHROUGH"}],BLOCK_TYPE_DROPDOWN:[{label:"Normal",style:"unstyled"},{label:"Heading Large",style:"header-one"},{label:"Heading Medium",style:"header-two"},{label:"Heading Small",style:"header-three"}],BLOCK_TYPE_BUTTONS:[{label:"Unordered List",style:"unordered-list-item"},{label:"Ordered List",style:"ordered-list-item"},{label:"Blockquote",style:"blockquote"}]},F=Object(r.g)(),H=JSON.parse(localStorage.getItem("userData")).email,Y=localStorage.getItem("contentSelected"),K={whereKeyValues:{cobrandEmail:H}};return Object(a.useEffect)((function(){if(b(!0),console.log(Y),Y){var e={whereKeyValues:{cobrandEmail:H,_id:Y}};j()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),S(e.data.contents[0]);var t=(new DOMParser).parseFromString(e.data.contents[0].contents,"text/html");if(console.log(t),"Artikel"===e.data.contents[0].contentType){var n=t.getElementById("contents");k(g.a.createValueFromString(n.outerHTML,"html")),P(n.outerHTML)}else if("Image"===e.data.contents[0].contentType){var o=t.getElementsByTagName("img")[0].toString();P(o.src)}else if("Video"===e.data.contents[0].contentType){var a=t.getElementsByTagName("iframe")[0];P(a.src)}else if("Pdf"===e.data.contents[0].contentType){var c=t.getElementsByTagName("iframe")[0].src;c.includes("&embedded=true")&&(c=c.replace("&embedded=true","")),c.includes("http://docs.google.com/gview?url=")&&(c=c.replace("http://docs.google.com/gview?url=","")),P(c)}var l=e.data.contents[0].startDate.split("T")[0];console.log(l),D(l),j()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:K,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),T(e.data.programs),b(!1)})).catch((function(e){console.log(e),b(!1)}))})).catch((function(e){console.log(e),b(!1)}))}}),[]),p?Object(h.jsx)(i.a,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(c.a,{headingName:"Content",routes:[{path:"/content",name:"Content"},{path:"/content/edit",name:"Edit Selected content"}]}),Object(h.jsx)(l.a,{initialValues:{programId:_.programId,contentName:_.contentName,contentDescription:_.contentDescription,contentType:_.contentType,contentSource:_.contentSource,contents:L,startDate:B},validationSchema:u.b,validateOnChange:!0,onSubmit:function(e){t(Y,H,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,"",e.contents,e.startDate,F)},children:function(e){var t=e.handleChange,n=e.handleSubmit,o=e.handleBlur,a=e.setFieldValue,c=e.values,l=e.errors,r=e.touched;return Object(h.jsx)("form",{onSubmit:n,children:Object(h.jsxs)("div",{className:"EditContent",children:[Object(h.jsxs)("h1",{children:["Edit Selected Content: ",_.contentName]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Content Type"}),Object(h.jsxs)("select",{name:"contentType",value:c.contentType,onChange:function(e){a("contentType",e.currentTarget.value),a("contents","")},children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(h.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(h.jsx)("option",{value:"Image",children:"Image"}),Object(h.jsx)("option",{value:"Video",children:"Video"}),Object(h.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Program Name"}),Object(h.jsxs)("select",{name:"programId",value:c.programId,onChange:t,children:[Object(h.jsx)("option",{value:"-1",disabled:!0,children:"Select Program"}),x?x.map((function(e){return Object(h.jsx)("option",{value:e._id,children:e.programName})})):null]})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Title"}),Object(h.jsx)(m.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:c.contentName,onChange:t,onBlur:o}),r.contentName&&Object(h.jsx)("span",{className:"message__error",children:l.contentName})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Description"}),Object(h.jsx)(g.a,{name:"contentDescription",placeholder:"Type your contents here...",className:"form-group_rte",value:V,toolbarConfig:R,onBlur:o,onChange:function(e){k(e),a("contentDescription",e.toString("html")),console.log(c.contentDescription)}}),r.contentDescription&&Object(h.jsx)("span",{className:"message__error",children:l.contentDescription})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Source"}),Object(h.jsx)(m.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:c.contentSource,onChange:t,onBlur:o}),r.contentSource&&Object(h.jsx)("span",{className:"message__error",children:l.contentSource})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Photo"}),Object(h.jsx)("img",{className:"photo",src:_.contentThumbnail}),Object(h.jsx)("br",{}),Object(h.jsx)(m.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:o,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),a("contentThumbnail",t))}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Contents"}),"Artikel"===c.contentType?Object(h.jsx)(g.a,{name:"contents",placeholder:"Type your contents here...",className:"form-group_rte",value:V,toolbarConfig:R,onBlur:o,onChange:function(e){k(e),a("contents",e.toString("html")),console.log(c.contents)}}):null,"Image"===c.contentType?Object(h.jsx)(m.a,{type:"file",className:"form-group__input",name:"contents",onBlur:o,value:c.contents,onChange:t}):null,"Video"===c.contentType?Object(h.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:c.contents,onChange:t,onBlur:o}):null,"Pdf"===c.contentType?Object(h.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (just for pdf file)",value:c.contents,onChange:t,onBlur:o}):null,r.contents&&Object(h.jsx)("span",{className:"message__error",children:l.contents})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Set Schedule"}),Object(h.jsx)(m.a,{type:"date",className:"form-group__input",name:"startDate",value:c.startDate,min:(new Date).toISOString().split("T")[0],onChange:t,onBlur:o}),r.startDate&&Object(h.jsx)("span",{className:"message__error",children:l.startDate})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Content"})})]})})}}),n?Object(h.jsx)(i.a,{}):null]})}))}}]);
//# sourceMappingURL=21.650741ed.chunk.js.map