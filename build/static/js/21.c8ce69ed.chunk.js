(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[21],{377:function(e,t,n){},520:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(2),o=n.n(c),r=n(92),s=(n(377),n(119)),l=n(5),i=n(102),u=n(88),j=n(16),m=n(99),d=n(94),p=n(18),b=n.n(p),h=n(207),g=n.n(h),O=(n(34),n(90)),f=n(91),x=n(163),v=n(108),_=n(111),C=n(140),N=n(246),y=n(248),w=n.n(y),S=n(1);c.Component,n(472),n(504);t.default=Object(j.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddContent:function(t,n,a,c,o,r,s,l,u,j,m){return e(Object(i.a)(t,n,a,c,o,r,s,l,u,j,m))}}}))((function(e){var t=e.onAddContent,n=e.isLoading,o=C.EditorState.createEmpty(),i=Object(c.useState)(o),j=Object(a.a)(i,2),p=j[0],h=j[1],O=function(e){h(e)},f=Object(c.useState)(o),x=Object(a.a)(f,2),v=x[0],_=x[1],y=function(e){_(e)},T=Object(c.useState)(!0),D=Object(a.a)(T,2),A=D[0],k=D[1],I=Object(c.useState)(),E=Object(a.a)(I,2),P=E[0],B=E[1],V=Object(c.useState)(""),L=Object(a.a)(V,2),R=L[0],F=L[1],U=Object(c.useState)(g.a.createEmptyValue()),J=Object(a.a)(U,2),M=J[0],K=J[1],z=Object(c.useState)(g.a.createEmptyValue()),Y=Object(a.a)(z,2),q=(Y[0],Y[1]),G=Object(l.g)(),H=JSON.parse(localStorage.getItem("userData")).email,Q={whereKeyValues:{cobrandEmail:H}};return Object(c.useEffect)((function(){b()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:Q,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),B(e.data.programs),k(!1)})).catch((function(e){console.log(e),k(!1)}))}),[]),A?Object(S.jsx)(u.a,{}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(r.a,{headingName:"Content",routes:[{path:"/content",name:"Content"},{path:"/content/add",name:"Create new content"}]}),Object(S.jsx)(s.a,{initialValues:{programId:"-1",contentName:"",contentDescription:"",contentType:"",contentSource:"",contentThumbnail:"",contents:"",startDate:(new Date).toISOString().split("T")[0],isActive:!0},validationSchema:m.a,validateOnChange:!0,onSubmit:function(e){window.scrollTo(0,0),t(H,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,e.isActive,G)},children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.handleBlur,c=e.setFieldValue,o=e.values,r=e.errors,s=e.touched;return Object(S.jsx)("form",{onSubmit:n,children:Object(S.jsxs)("div",{className:"AddContent",children:[Object(S.jsx)("h1",{className:"AddContent_title",children:"Create New Content"}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Content Type"}),Object(S.jsxs)("select",{name:"contentType",value:o.contentType,onChange:function(e){c("contentType",e.currentTarget.value),c("contents","")},children:[Object(S.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(S.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(S.jsx)("option",{value:"Image",children:"Image"}),Object(S.jsx)("option",{value:"Video",children:"Video"}),Object(S.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Program Name"}),Object(S.jsxs)("select",{name:"programId",value:o.programId,onChange:t,children:[Object(S.jsx)("option",{value:"-1",disabled:!0,children:"Select Program"}),P.map((function(e){return Object(S.jsx)("option",{value:e._id,children:e.programName})}))]})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Title"}),Object(S.jsx)(d.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentName,onChange:t,onBlur:a}),s.contentName&&Object(S.jsx)("span",{className:"message__error",children:r.contentName})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Description"}),Object(S.jsx)(N.Editor,{editorState:p,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:O,value:w()(Object(C.convertToRaw)(p.getCurrentContent())),name:"contentDescription",onChange:function(e){K(e),c("contentDescription",w()(Object(C.convertToRaw)(p.getCurrentContent()))),console.log(M),console.log(o.contentDescription)}}),s.contentDescription&&Object(S.jsx)("span",{className:"message__error",children:r.contentDescription})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Source"}),Object(S.jsx)(d.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentSource,onChange:t,onBlur:a}),s.contentSource&&Object(S.jsx)("span",{className:"message__error",children:r.contentSource})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Photo"}),Object(S.jsx)(d.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),c("contentThumbnail",t))}}),s.contentThumbnail&&Object(S.jsx)("span",{className:"message__error",children:r.contentThumbnail})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Contents"}),"Artikel"===o.contentType?Object(S.jsx)(N.Editor,{editorState:v,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:y,value:w()(Object(C.convertToRaw)(v.getCurrentContent())),name:"contents",onChange:function(e){q(e),c("contents",w()(Object(C.convertToRaw)(v.getCurrentContent())))}}):null,"Image"===o.contentType?Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(S.jsxs)("form",{children:[Object(S.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){F("internal")}}),Object(S.jsx)("label",{for:"internal",children:"Media Internal Komputer"}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return F("url")}}),Object(S.jsx)("label",{for:"url",children:"Alamat URL"}),Object(S.jsx)("br",{})]}),"internal"===R?Object(S.jsx)(d.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),c("contents",t))}}):Object(S.jsx)(d.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Image URL... (https://example.com/something/something.jpg)",value:o.contents,onChange:t,onBlur:a})]}):null,"Video"===o.contentType?Object(S.jsx)(d.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:o.contents,onChange:t,onBlur:a}):null,"Pdf"===o.contentType?Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(S.jsxs)("form",{children:[Object(S.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){F("internal")}}),Object(S.jsx)("label",{for:"internal",children:"Media Internal - Maks 300kb"}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return F("url")}}),Object(S.jsx)("label",{for:"url",children:"Alamat URL"}),Object(S.jsx)("br",{})]}),"internal"===R?Object(S.jsx)(d.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),c("contents",t))}}):Object(S.jsx)(d.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (Pdf file)",value:o.contents,onChange:t,onBlur:a})]}):null,s.contents&&Object(S.jsx)("span",{className:"message__error",children:r.contents})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Set Schedule"}),Object(S.jsx)(d.a,{type:"date",className:"form-group__input",name:"startDate",value:o.startDate,min:(new Date).toISOString().split("T")[0],onChange:t,onBlur:a}),s.startDate&&Object(S.jsx)("span",{className:"message__error",children:r.startDate})]}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsxs)("div",{className:"form-group_switch",children:[Object(S.jsx)("p",{className:"form-group_switch_status",children:"Status:"}),Object(S.jsx)("p",{className:"form-group_switch_inactive",children:"Inactive"}),Object(S.jsxs)("label",{className:"form-group_switch_switch",children:[Object(S.jsx)("input",{type:"checkbox",className:"form-group_switch_switch_checkbox",name:"isActive",defaultChecked:o.isActive,onChange:function(){o.isActive=!o.isActive,console.log(o.isActive)}}),Object(S.jsx)("span",{className:"form-group_switch_switch_slider"})]}),Object(S.jsx)("p",{className:"form-group_switch_active",children:"Active"})]})}),Object(S.jsx)("div",{children:Object(S.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Post Content"})})]})})}}),console.log(n),n?Object(S.jsx)(u.a,{}):null]})}))}}]);
//# sourceMappingURL=21.c8ce69ed.chunk.js.map