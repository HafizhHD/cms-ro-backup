(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[36],{1148:function(e,t,n){"use strict";n.r(t);var a=n(10),o=n(2),c=n.n(o),r=n(98),s=(n(651),n(174)),l=n(6),i=n(139),u=n(102),j=n(16),m=n(133),d=n(125),p=n(18),b=n.n(p),h=n(380),g=n.n(h),O=(n(36),n(94)),x=n(95),f=n(116),v=n(105),_=n(108),C=n(175),N=n(299),y=n(301),w=n.n(y),S=n(1);o.Component,n(419),n(512);t.default=Object(j.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddContent:function(t,n,a,o,c,r,s,l,u,j,m){return e(Object(i.a)(t,n,a,o,c,r,s,l,u,j,m))}}}))((function(e){var t=e.onAddContent,n=e.isLoading,c=C.EditorState.createEmpty(),i=Object(o.useState)(c),j=Object(a.a)(i,2),p=j[0],h=j[1],O=function(e){h(e)},x=Object(o.useState)(c),f=Object(a.a)(x,2),v=f[0],_=f[1],y=function(e){_(e)},T=Object(o.useState)(!0),D=Object(a.a)(T,2),A=D[0],k=D[1],I=Object(o.useState)(),E=Object(a.a)(I,2),P=E[0],B=E[1],V=Object(o.useState)(""),L=Object(a.a)(V,2),R=L[0],F=L[1],U=Object(o.useState)(g.a.createEmptyValue()),J=Object(a.a)(U,2),M=J[0],K=J[1],Y=Object(o.useState)(g.a.createEmptyValue()),q=Object(a.a)(Y,2),z=(q[0],q[1]),G=Object(l.g)(),H=JSON.parse(localStorage.getItem("userData")).email,Q={whereKeyValues:{cobrandEmail:H}};return Object(o.useEffect)((function(){b()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:Q,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),B(e.data.programs),k(!1)})).catch((function(e){console.log(e),k(!1)}))}),[]),A?Object(S.jsx)(u.a,{}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(r.a,{headingName:"Content",routes:[{path:"/content",name:"Content"},{path:"/content/add",name:"Create new content"}]}),Object(S.jsx)(s.a,{initialValues:{programId:"-1",contentName:"",contentDescription:"",contentType:"",contentSource:"",contentThumbnail:"",contents:"",startDate:(new Date).toISOString().split("T")[0],isActive:!0},validationSchema:m.a,validateOnChange:!0,onSubmit:function(e){window.scrollTo(0,0),t(H,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,e.isActive,G)},children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.handleBlur,o=e.setFieldValue,c=e.values,r=e.errors,s=e.touched;return Object(S.jsx)("form",{onSubmit:n,children:Object(S.jsxs)("div",{className:"AddContent",children:[Object(S.jsx)("h1",{className:"AddContent_title",children:"Create New Content"}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Content Type"}),Object(S.jsxs)("select",{name:"contentType",value:c.contentType,onChange:function(e){o("contentType",e.currentTarget.value),o("contents","")},children:[Object(S.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(S.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(S.jsx)("option",{value:"Image",children:"Image"}),Object(S.jsx)("option",{value:"Video",children:"Video"}),Object(S.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Program Name"}),Object(S.jsxs)("select",{name:"programId",value:c.programId,onChange:t,children:[Object(S.jsx)("option",{value:"-1",disabled:!0,children:"Select Program"}),P.map((function(e){return Object(S.jsx)("option",{value:e._id,children:e.programName})}))]})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Title"}),Object(S.jsx)(d.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:c.contentName,onChange:t,onBlur:a}),s.contentName&&Object(S.jsx)("span",{className:"message__error",children:r.contentName})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Description"}),Object(S.jsx)(N.Editor,{editorState:p,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:O,value:w()(Object(C.convertToRaw)(p.getCurrentContent())),name:"contentDescription",onChange:function(e){K(e),o("contentDescription",w()(Object(C.convertToRaw)(p.getCurrentContent()))),console.log(M),console.log(c.contentDescription)}}),s.contentDescription&&Object(S.jsx)("span",{className:"message__error",children:r.contentDescription})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Source"}),Object(S.jsx)(d.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:c.contentSource,onChange:t,onBlur:a}),s.contentSource&&Object(S.jsx)("span",{className:"message__error",children:r.contentSource})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Photo"}),Object(S.jsx)(d.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),o("contentThumbnail",t))}}),s.contentThumbnail&&Object(S.jsx)("span",{className:"message__error",children:r.contentThumbnail})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Contents"}),"Artikel"===c.contentType?Object(S.jsx)(N.Editor,{editorState:v,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:y,value:w()(Object(C.convertToRaw)(v.getCurrentContent())),name:"contents",onChange:function(e){z(e),o("contents",w()(Object(C.convertToRaw)(v.getCurrentContent())))}}):null,"Image"===c.contentType?Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(S.jsxs)("form",{children:[Object(S.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){F("internal")}}),Object(S.jsx)("label",{for:"internal",children:"Media Internal Komputer"}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return F("url")}}),Object(S.jsx)("label",{for:"url",children:"Alamat URL"}),Object(S.jsx)("br",{})]}),"internal"===R?Object(S.jsx)(d.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),o("contents",t))}}):Object(S.jsx)(d.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Image URL... (https://example.com/something/something.jpg)",value:c.contents,onChange:t,onBlur:a})]}):null,"Video"===c.contentType?Object(S.jsx)(d.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:c.contents,onChange:t,onBlur:a}):null,"Pdf"===c.contentType?Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(S.jsxs)("form",{children:[Object(S.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){F("internal")}}),Object(S.jsx)("label",{for:"internal",children:"Media Internal - Maks 300kb"}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return F("url")}}),Object(S.jsx)("label",{for:"url",children:"Alamat URL"}),Object(S.jsx)("br",{})]}),"internal"===R?Object(S.jsx)(d.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),o("contents",t))}}):Object(S.jsx)(d.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (Pdf file)",value:c.contents,onChange:t,onBlur:a})]}):null,s.contents&&Object(S.jsx)("span",{className:"message__error",children:r.contents})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Set Schedule"}),Object(S.jsx)(d.a,{type:"date",className:"form-group__input",name:"startDate",value:c.startDate,min:(new Date).toISOString().split("T")[0],onChange:t,onBlur:a}),s.startDate&&Object(S.jsx)("span",{className:"message__error",children:r.startDate})]}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsxs)("div",{className:"form-group_switch",children:[Object(S.jsx)("p",{className:"form-group_switch_status",children:"Status:"}),Object(S.jsx)("p",{className:"form-group_switch_inactive",children:"Inactive"}),Object(S.jsxs)("label",{className:"form-group_switch_switch",children:[Object(S.jsx)("input",{type:"checkbox",className:"form-group_switch_switch_checkbox",name:"isActive",defaultChecked:c.isActive,onChange:function(){c.isActive=!c.isActive,console.log(c.isActive)}}),Object(S.jsx)("span",{className:"form-group_switch_switch_slider"})]}),Object(S.jsx)("p",{className:"form-group_switch_active",children:"Active"})]})}),Object(S.jsx)("div",{children:Object(S.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Post Content"})})]})})}}),console.log(n),n?Object(S.jsx)(u.a,{}):null]})}))},651:function(e,t,n){}}]);
//# sourceMappingURL=36.5bde09fe.chunk.js.map