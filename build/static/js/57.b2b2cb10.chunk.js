(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[57],{1412:function(e,t,n){"use strict";n.r(t);var a=n(10),o=n(2),c=n.n(o),i=n(108),s=(n(755),n(194)),l=n(6),r=n(151),j=n(36),u=n(17),p=n(144),d=n(130),m=n(18),b=n.n(m),h=n(440),O=n.n(h),g=(n(37),n(94)),x=n(95),f=n(100),v=n(97),N=n(98),_=n(197),C=n(333),T=n(335),S=n.n(T),w=n(0);o.Component,n(479),n(611);t.default=Object(u.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddContent:function(t,n,a,o,c,i,s,l,j,u,p){return e(Object(r.a)(t,n,a,o,c,i,s,l,j,u,p))}}}))((function(e){var t=e.onAddContent,n=e.isLoading,c=_.EditorState.createEmpty(),r=Object(o.useState)(c),u=Object(a.a)(r,2),m=u[0],h=u[1],g=function(e){h(e)},x=Object(o.useState)(c),f=Object(a.a)(x,2),v=f[0],N=f[1],T=function(e){N(e)},k=Object(o.useState)(!0),y=Object(a.a)(k,2),A=y[0],D=y[1],I=Object(o.useState)(),P=Object(a.a)(I,2),B=P[0],E=P[1],R=Object(o.useState)(""),V=Object(a.a)(R,2),L=V[0],F=V[1],M=Object(o.useState)(O.a.createEmptyValue()),U=Object(a.a)(M,2),K=U[0],J=U[1],W=Object(o.useState)(O.a.createEmptyValue()),Y=Object(a.a)(W,2),q=(Y[0],Y[1]),z=Object(l.g)(),G=JSON.parse(localStorage.getItem("userData")).email,H={whereKeyValues:{cobrandEmail:G}};return Object(o.useEffect)((function(){b()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:H,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),E(e.data.programs),D(!1)})).catch((function(e){console.log(e),D(!1)}))}),[]),A?Object(w.jsx)(j.a,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(i.a,{headingName:"Content",routes:[{path:"/cms/content",name:"Content"},{path:"/content/add",name:"Create new content"}]}),Object(w.jsx)(s.a,{initialValues:{programId:"-1",contentName:"",contentDescription:"",contentType:"",contentSource:"",contentThumbnail:"",contents:"",startDate:(new Date).toISOString().split("T")[0],isActive:!0},validationSchema:p.a,validateOnChange:!0,onSubmit:function(e){window.scrollTo(0,0),t(G,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,e.isActive,z)},children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.handleBlur,o=e.setFieldValue,c=e.values,i=e.errors,s=e.touched;return Object(w.jsx)("form",{onSubmit:n,children:Object(w.jsxs)("div",{className:"AddContent",children:[Object(w.jsx)("h1",{className:"AddContent_title",children:"Create New Content"}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Content Type"}),Object(w.jsxs)("select",{name:"contentType",value:c.contentType,onChange:function(e){o("contentType",e.currentTarget.value),o("contents","")},children:[Object(w.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(w.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(w.jsx)("option",{value:"Image",children:"Image"}),Object(w.jsx)("option",{value:"Video",children:"Video"}),Object(w.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Topic Category "}),Object(w.jsxs)("select",{children:[Object(w.jsx)("option",{value:"Topik Agama",children:"Topik Agama"}),Object(w.jsx)("option",{value:"Topik Pendidikan",children:"Topik Pendidikan"}),Object(w.jsx)("option",{value:"Topik Kesehatan",children:"Topik Kesehatan"}),Object(w.jsx)("option",{value:"Topik Keluarga",children:"Topik Keluarga"}),Object(w.jsx)("option",{value:"Topik Berita Internal",children:"Topik Berita Internal"}),Object(w.jsx)("option",{value:"Topik Berita Nasional",children:"Topik Berita Nasional"}),Object(w.jsx)("option",{value:"Topik Berita Dunia",children:"Topik Berita Dunia"}),Object(w.jsx)("option",{value:"Topik Informasi Teknologi",children:"Topik Informasi Teknologi"}),Object(w.jsx)("option",{value:"Topik Olah Raga",children:"Topik Olah Raga"}),Object(w.jsx)("option",{value:"Topik Umum",children:"Topik Umum"})]}),Object(w.jsx)("br",{})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Target Audience"})," ",Object(w.jsx)("br",{}),Object(w.jsxs)("select",{children:[" ",Object(w.jsx)("option",{value:"Semua",children:"Semua"}),Object(w.jsx)("option",{value:"Orangtua",children:"Orangtua"}),Object(w.jsx)("option",{value:"Semua Anak",children:"Semua Anak"}),Object(w.jsx)("option",{value:"Siswa SD",children:"Siswa SD"}),Object(w.jsx)("option",{value:"Siswa SMP",children:"Siswa SMP"}),Object(w.jsx)("option",{value:"Siswa SMA",children:"Siswa SMA"}),Object(w.jsx)("option",{value:"Siswa Pria",children:"Siswa Pria"}),Object(w.jsx)("option",{value:"Siswa Wanita",children:"Siswa Wanita"})]})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Program Name"}),Object(w.jsxs)("select",{name:"programId",value:c.programId,onChange:t,children:[Object(w.jsx)("option",{value:"-1",disabled:!0,children:"Select Program"}),B.map((function(e){return Object(w.jsx)("option",{value:e._id,children:e.programName})}))]})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Title"}),Object(w.jsx)(d.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:c.contentName,onChange:t,onBlur:a}),s.contentName&&Object(w.jsx)("span",{className:"message__error",children:i.contentName})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Description"}),Object(w.jsx)(C.Editor,{editorState:m,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:g,value:S()(Object(_.convertToRaw)(m.getCurrentContent())),name:"contentDescription",onChange:function(e){J(e),o("contentDescription",S()(Object(_.convertToRaw)(m.getCurrentContent()))),console.log(K),console.log(c.contentDescription)}}),s.contentDescription&&Object(w.jsx)("span",{className:"message__error",children:i.contentDescription})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Source"}),Object(w.jsx)(d.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:c.contentSource,onChange:t,onBlur:a}),s.contentSource&&Object(w.jsx)("span",{className:"message__error",children:i.contentSource})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Photo"}),Object(w.jsx)(d.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),o("contentThumbnail",t))}}),s.contentThumbnail&&Object(w.jsx)("span",{className:"message__error",children:i.contentThumbnail})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Contents"}),"Artikel"===c.contentType?Object(w.jsx)(C.Editor,{editorState:v,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:T,value:S()(Object(_.convertToRaw)(v.getCurrentContent())),name:"contents",onChange:function(e){q(e),o("contents",S()(Object(_.convertToRaw)(v.getCurrentContent())))}}):null,"Image"===c.contentType?Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){F("internal")}}),Object(w.jsx)("label",{for:"internal",children:"Media Internal Komputer"}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return F("url")}}),Object(w.jsx)("label",{for:"url",children:"Alamat URL"}),Object(w.jsx)("br",{})]}),"internal"===L?Object(w.jsx)(d.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),o("contents",t))}}):Object(w.jsx)(d.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Image URL... (https://example.com/something/something.jpg)",value:c.contents,onChange:t,onBlur:a})]}):null,"Video"===c.contentType?Object(w.jsx)(d.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:c.contents,onChange:t,onBlur:a}):null,"Pdf"===c.contentType?Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){F("internal")}}),Object(w.jsx)("label",{for:"internal",children:"Media Internal - Maks 300kb"}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return F("url")}}),Object(w.jsx)("label",{for:"url",children:"Alamat URL"}),Object(w.jsx)("br",{})]}),"internal"===L?Object(w.jsx)(d.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),o("contents",t))}}):Object(w.jsx)(d.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (Pdf file)",value:c.contents,onChange:t,onBlur:a})]}):null,s.contents&&Object(w.jsx)("span",{className:"message__error",children:i.contents})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Set Schedule"}),Object(w.jsx)(d.a,{type:"date",className:"form-group__input",name:"startDate",value:c.startDate,min:(new Date).toISOString().split("T")[0],onChange:t,onBlur:a}),s.startDate&&Object(w.jsx)("span",{className:"message__error",children:i.startDate})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"End Date"}),Object(w.jsx)(d.a,{type:"date",className:"form-group__input"})]}),Object(w.jsx)("div",{className:"form-group",children:Object(w.jsxs)("div",{className:"form-group_switch",children:[Object(w.jsx)("p",{className:"form-group_switch_status",children:"Status:"}),Object(w.jsx)("p",{className:"form-group_switch_inactive",children:"Inactive"}),Object(w.jsxs)("label",{className:"form-group_switch_switch",children:[Object(w.jsx)("input",{type:"checkbox",className:"form-group_switch_switch_checkbox",name:"isActive",defaultChecked:c.isActive,onChange:function(){c.isActive=!c.isActive,console.log(c.isActive)}}),Object(w.jsx)("span",{className:"form-group_switch_switch_slider"})]}),Object(w.jsx)("p",{className:"form-group_switch_active",children:"Active"})]})}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Post Content"})})]})})}}),console.log(n),n?Object(w.jsx)(j.a,{}):null]})}))},755:function(e,t,n){}}]);
//# sourceMappingURL=57.b2b2cb10.chunk.js.map