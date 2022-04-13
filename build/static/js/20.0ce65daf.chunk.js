(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[20],{287:function(e,t,n){},327:function(e,t,n){"use strict";n.r(t);var a=n(14),o=n(2),c=n(85),l=(n(287),n(98)),r=n(5),s=n(92),i=n(83),u=n(16),d=n(91),j=n(89),m=n(18),p=n.n(m),b=n(159),h=n.n(b),g=(n(33),n(1));t.default=Object(u.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddContent:function(t,n,a,o,c,l,r,i,u,d,j){return e(Object(s.a)(t,n,a,o,c,l,r,i,u,d,j))}}}))((function(e){var t=e.onAddContent,n=e.isLoading,s=Object(o.useState)(!0),u=Object(a.a)(s,2),m=u[0],b=u[1],O=Object(o.useState)(),f=Object(a.a)(O,2),x=f[0],_=f[1],N=Object(o.useState)(""),v=Object(a.a)(N,2),y=v[0],T=v[1],C=Object(o.useState)(h.a.createEmptyValue()),S=Object(a.a)(C,2),w=S[0],B=S[1],D={display:["INLINE_STYLE_BUTTONS","BLOCK_TYPE_BUTTONS","BLOCK_TYPE_DROPDOWN","HISTORY_BUTTONS"],INLINE_STYLE_BUTTONS:[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Strikethrough",style:"STRIKETHROUGH"}],BLOCK_TYPE_DROPDOWN:[{label:"Normal",style:"unstyled"},{label:"Heading Large",style:"header-one"},{label:"Heading Medium",style:"header-two"},{label:"Heading Small",style:"header-three"}],BLOCK_TYPE_BUTTONS:[{label:"Unordered List",style:"unordered-list-item"},{label:"Ordered List",style:"ordered-list-item"},{label:"Blockquote",style:"blockquote"}]},I=Object(r.g)(),L=JSON.parse(localStorage.getItem("userData")).email,k={whereKeyValues:{cobrandEmail:L}};return Object(o.useEffect)((function(){p()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:k,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),_(e.data.programs),b(!1)})).catch((function(e){console.log(e),b(!1)}))}),[]),m?Object(g.jsx)(i.a,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(c.a,{headingName:"Content",routes:[{path:"/content",name:"Content"},{path:"/content/add",name:"Create new content"}]}),Object(g.jsx)(l.a,{initialValues:{programId:"-1",contentName:"",contentDescription:"",contentType:"",contentSource:"",contentThumbnail:"",contents:"",startDate:(new Date).toISOString().split("T")[0],isActive:!0},validationSchema:d.a,validateOnChange:!0,onSubmit:function(e){window.scrollTo(0,0),t(L,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,e.isActive,I)},children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.handleBlur,o=e.setFieldValue,c=e.values,l=e.errors,r=e.touched;return Object(g.jsx)("form",{onSubmit:n,children:Object(g.jsxs)("div",{className:"AddContent",children:[Object(g.jsx)("h1",{className:"AddContent_title",children:"Create New Content"}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Content Type"}),Object(g.jsxs)("select",{name:"contentType",value:c.contentType,onChange:function(e){o("contentType",e.currentTarget.value),o("contents","")},children:[Object(g.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(g.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(g.jsx)("option",{value:"Image",children:"Image"}),Object(g.jsx)("option",{value:"Video",children:"Video"}),Object(g.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Program Name"}),Object(g.jsxs)("select",{name:"programId",value:c.programId,onChange:t,children:[Object(g.jsx)("option",{value:"-1",disabled:!0,children:"Select Program"}),x.map((function(e){return Object(g.jsx)("option",{value:e._id,children:e.programName})}))]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Title"}),Object(g.jsx)(j.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:c.contentName,onChange:t,onBlur:a}),r.contentName&&Object(g.jsx)("span",{className:"message__error",children:l.contentName})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Description"}),Object(g.jsx)(h.a,{name:"contentDescription",placeholder:"Type your description here...",className:"form-group_rte",value:w,toolbarConfig:D,onBlur:a,onChange:function(e){B(e),o("contentDescription",e.toString("html")),console.log(c.contentDescription)}}),r.contentDescription&&Object(g.jsx)("span",{className:"message__error",children:l.contentDescription})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Source"}),Object(g.jsx)(j.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:c.contentSource,onChange:t,onBlur:a}),r.contentSource&&Object(g.jsx)("span",{className:"message__error",children:l.contentSource})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Photo"}),Object(g.jsx)(j.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),o("contentThumbnail",t))}}),r.contentThumbnail&&Object(g.jsx)("span",{className:"message__error",children:l.contentThumbnail})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Contents"}),"Artikel"===c.contentType?Object(g.jsx)(h.a,{name:"contents",placeholder:"Type your contents here...",className:"form-group_rte",value:w,toolbarConfig:D,onBlur:a,onChange:function(e){B(e),o("contents",e.toString("html")),console.log(c.contents)}}):null,"Image"===c.contentType?Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){T("internal")}}),Object(g.jsx)("label",{for:"internal",children:"Media Internal Komputer"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return T("url")}}),Object(g.jsx)("label",{for:"url",children:"Alamat URL"}),Object(g.jsx)("br",{})]}),"internal"===y?Object(g.jsx)(j.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),o("contents",t))}}):Object(g.jsx)(j.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Image URL... (https://example.com/something/something.jpg)",value:c.contents,onChange:t,onBlur:a})]}):null,"Video"===c.contentType?Object(g.jsx)(j.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:c.contents,onChange:t,onBlur:a}):null,"Pdf"===c.contentType?Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){T("internal")}}),Object(g.jsx)("label",{for:"internal",children:"Media Internal - Maks 300kb"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return T("url")}}),Object(g.jsx)("label",{for:"url",children:"Alamat URL"}),Object(g.jsx)("br",{})]}),"internal"===y?Object(g.jsx)(j.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),o("contents",t))}}):Object(g.jsx)(j.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (Pdf file)",value:c.contents,onChange:t,onBlur:a})]}):null,r.contents&&Object(g.jsx)("span",{className:"message__error",children:l.contents})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Set Schedule"}),Object(g.jsx)(j.a,{type:"date",className:"form-group__input",name:"startDate",value:c.startDate,min:(new Date).toISOString().split("T")[0],onChange:t,onBlur:a}),r.startDate&&Object(g.jsx)("span",{className:"message__error",children:l.startDate})]}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsxs)("div",{className:"form-group_switch",children:[Object(g.jsx)("p",{className:"form-group_switch_status",children:"Status:"}),Object(g.jsx)("p",{className:"form-group_switch_inactive",children:"Inactive"}),Object(g.jsxs)("label",{className:"form-group_switch_switch",children:[Object(g.jsx)("input",{type:"checkbox",className:"form-group_switch_switch_checkbox",name:"isActive",defaultChecked:c.isActive,onChange:function(){c.isActive=!c.isActive,console.log(c.isActive)}}),Object(g.jsx)("span",{className:"form-group_switch_switch_slider"})]}),Object(g.jsx)("p",{className:"form-group_switch_active",children:"Active"})]})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Post Content"})})]})})}}),console.log(n),n?Object(g.jsx)(i.a,{}):null]})}))}}]);
//# sourceMappingURL=20.0ce65daf.chunk.js.map