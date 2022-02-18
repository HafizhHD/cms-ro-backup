(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[7],{287:function(e,t,n){},327:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(2),o=n(85),i=(n(287),n(98)),s=n(5),c=n(92),l=n(83),u=n(16),d=n(91),m=n(87),p=n(18),g=n.n(p),h=n(159),b=n.n(h),f=(n(33),n(1));t.default=Object(u.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddContent:function(t,n,a,r,o,i,s,l,u,d,m){return e(Object(c.a)(t,n,a,r,o,i,s,l,u,d,m))}}}))((function(e){var t=e.onAddContent,n=e.isLoading,c=Object(r.useState)(!0),u=Object(a.a)(c,2),p=u[0],h=u[1],j=Object(r.useState)(),O=Object(a.a)(j,2),y=O[0],x=O[1],v=Object(r.useState)(""),N=Object(a.a)(v,2),w=N[0],_=N[1],C=Object(r.useState)(b.a.createEmptyValue()),T=Object(a.a)(C,2),E=T[0],S=T[1],q={display:["INLINE_STYLE_BUTTONS","BLOCK_TYPE_BUTTONS","BLOCK_TYPE_DROPDOWN","HISTORY_BUTTONS"],INLINE_STYLE_BUTTONS:[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Strikethrough",style:"STRIKETHROUGH"}],BLOCK_TYPE_DROPDOWN:[{label:"Normal",style:"unstyled"},{label:"Heading Large",style:"header-one"},{label:"Heading Medium",style:"header-two"},{label:"Heading Small",style:"header-three"}],BLOCK_TYPE_BUTTONS:[{label:"Unordered List",style:"unordered-list-item"},{label:"Ordered List",style:"ordered-list-item"},{label:"Blockquote",style:"blockquote"}]},I=Object(s.g)(),D=JSON.parse(localStorage.getItem("userData")).email,P={whereKeyValues:{cobrandEmail:D}};return Object(r.useEffect)((function(){g()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:P,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),x(e.data.programs),h(!1)})).catch((function(e){console.log(e),h(!1)}))}),[]),p?Object(f.jsx)(l.a,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{headingName:"Content",routes:[{path:"/content",name:"Content"},{path:"/content/add",name:"Create new content"}]}),Object(f.jsx)(i.a,{initialValues:{programId:"-1",contentName:"",contentDescription:"",contentType:"",contentSource:"",contentThumbnail:"",contents:"",startDate:(new Date).toISOString().split("T")[0],isActive:!0},validationSchema:d.a,validateOnChange:!0,onSubmit:function(e){window.scrollTo(0,0),t(D,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,e.isActive,I)},children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.handleBlur,r=e.setFieldValue,o=e.values,i=e.errors,s=e.touched;return Object(f.jsx)("form",{onSubmit:n,children:Object(f.jsxs)("div",{className:"AddContent",children:[Object(f.jsx)("h1",{className:"AddContent_title",children:"Create New Content"}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Content Type"}),Object(f.jsxs)("select",{name:"contentType",value:o.contentType,onChange:function(e){r("contentType",e.currentTarget.value),r("contents","")},children:[Object(f.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(f.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(f.jsx)("option",{value:"Image",children:"Image"}),Object(f.jsx)("option",{value:"Video",children:"Video"}),Object(f.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Program Name"}),Object(f.jsxs)("select",{name:"programId",value:o.programId,onChange:t,children:[Object(f.jsx)("option",{value:"-1",disabled:!0,children:"Select Program"}),y.map((function(e){return Object(f.jsx)("option",{value:e._id,children:e.programName})}))]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Title"}),Object(f.jsx)(m.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentName,onChange:t,onBlur:a}),s.contentName&&Object(f.jsx)("span",{className:"message__error",children:i.contentName})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Description"}),Object(f.jsx)(m.a,{type:"textarea",name:"contentDescription",placeholder:"Type Something...",value:o.contentDescription,onChange:t,onBlur:a}),s.contentDescription&&Object(f.jsx)("span",{className:"message__error",children:i.contentDescription})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Source"}),Object(f.jsx)(m.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentSource,onChange:t,onBlur:a}),s.contentSource&&Object(f.jsx)("span",{className:"message__error",children:i.contentSource})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Photo"}),Object(f.jsx)(m.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contentThumbnail",t))}}),s.contentThumbnail&&Object(f.jsx)("span",{className:"message__error",children:i.contentThumbnail})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Contents"}),"Artikel"===o.contentType?Object(f.jsx)(b.a,{name:"contents",placeholder:"Type your contents here...",className:"form-group_rte",value:E,toolbarConfig:q,onBlur:a,onChange:function(e){S(e),r("contents",e.toString("html")),console.log(o.contents)}}):null,"Image"===o.contentType?Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){_("internal")}}),Object(f.jsx)("label",{for:"internal",children:"Media Internal Komputer"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return _("url")}}),Object(f.jsx)("label",{for:"url",children:"Alamat URL"}),Object(f.jsx)("br",{})]}),"internal"===w?Object(f.jsx)(m.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contents",t))}}):Object(f.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Image URL... (https://example.com/something/something.jpg)",value:o.contents,onChange:t,onBlur:a})]}):null,"Video"===o.contentType?Object(f.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:o.contents,onChange:t,onBlur:a}):null,"Pdf"===o.contentType?Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"Pilih media yang ingin di upload :"}),Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"internal",onClick:function(){_("internal")}}),Object(f.jsx)("label",{for:"internal",children:"Media Internal - Maks 300kb"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"radio",id:"html",name:"fav_language",value:"url",onClick:function(){return _("url")}}),Object(f.jsx)("label",{for:"url",children:"Alamat URL"}),Object(f.jsx)("br",{})]}),"internal"===w?Object(f.jsx)(m.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contents",t))}}):Object(f.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (Pdf file)",value:o.contents,onChange:t,onBlur:a})]}):null,s.contents&&Object(f.jsx)("span",{className:"message__error",children:i.contents})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Set Schedule"}),Object(f.jsx)(m.a,{type:"date",className:"form-group__input",name:"startDate",value:o.startDate,min:(new Date).toISOString().split("T")[0],onChange:t,onBlur:a}),s.startDate&&Object(f.jsx)("span",{className:"message__error",children:i.startDate})]}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("div",{className:"form-group_switch",children:[Object(f.jsx)("p",{className:"form-group_switch_status",children:"Status:"}),Object(f.jsx)("p",{className:"form-group_switch_inactive",children:"Inactive"}),Object(f.jsxs)("label",{className:"form-group_switch_switch",children:[Object(f.jsx)("input",{type:"checkbox",className:"form-group_switch_switch_checkbox",name:"isActive",defaultChecked:o.isActive,onChange:function(){o.isActive=!o.isActive,console.log(o.isActive)}}),Object(f.jsx)("span",{className:"form-group_switch_switch_slider"})]}),Object(f.jsx)("p",{className:"form-group_switch_active",children:"Active"})]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Post Content"})})]})})}}),console.log(n),n?Object(f.jsx)(l.a,{}):null]})}))},83:function(e,t,n){"use strict";n(2);var a=n(32),r=(n(84),n(1));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(r.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(r.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(r.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(r.jsx)(a.a,{}),Object(r.jsx)("p",{children:n})]})}},84:function(e,t,n){},85:function(e,t,n){"use strict";n(2);var a=n(12),r=(n(86),n(1));t.a=function(e){var t=e.headingName,n=e.routes,o=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},86:function(e,t,n){},87:function(e,t,n){"use strict";var a=n(2),r=(n(88),n(1));function o(e){var t=e.placeholder,n=e.type,a=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,u=e.min,d=e.disabled,m=e.isError;return"textarea"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:a,onBlur:o,value:i,disabled:d}),m&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]}):"date"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:s,type:n,placeholder:t,onChange:a,onBlur:o,value:i,min:u,max:"9999-12-31",disabled:d}),m&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:s,type:n,placeholder:t,onChange:a,onBlur:o,value:i,disabled:d}),m&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(a.memo)(o)},88:function(e,t,n){},91:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(99),r=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=a.d({email:a.e("Enter your email").required("Email is required").email("Email not valid"),password:a.e("Enter your password").required("Password is required")}),i=a.d({email:a.e("Enter your email").required("Email is required").email("Email not valid"),accountName:a.e("Enter your name").required("Name is required"),cobrandName:a.e("Enter your brand name").required("Brand name is required"),thumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.e("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),address:a.e("Enter your address").required("Address is required"),password:a.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:a.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=a.d({email:a.e("Enter your email").required("Email is required").email("Email not valid"),cobrandName:a.e("Enter your brand name").required("Brand name is required"),thumbnail:a.c("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.e("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),address:a.e("Enter your address").required("Address is required"),password:a.e("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:a.e("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=a.d({programName:a.e("Enter your program title").required("Program title is required"),programDescription:a.e("Enter the program description").required("Program description is required"),programThumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.b("Insert start date").required("Date is required")}),l=a.d({programName:a.e("Enter your program title").required("Program title is required"),programDescription:a.e("Enter the program description").required("Program description is required"),startDate:a.b("Insert start date").required("Date is required")}),u=a.d({contentName:a.e("Enter your content title").required("Content title is required"),contentDescription:a.e("Enter the content description").required("Content description is required"),contents:a.e("Enter the content description").required("Content description is required"),contentSource:a.e("Enter the content source").required("Content source is required"),contentThumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.b("Insert start date").required("Date is required"),isActive:a.a()}),d=a.d({contentName:a.e("Enter your content title").required("Content title is required"),contentDescription:a.e("Enter the content description").required("Content description is required"),contents:a.e("Enter the content description").required("Content description is required"),contentSource:a.e("Enter the content source").required("Content source is required"),startDate:a.b("Insert start date").required("Date is required")})},92:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return O})),n.d(t,"e",(function(){return y})),n.d(t,"c",(function(){return x})),n.d(t,"f",(function(){return v}));var a=n(7),r=n(18),o=n.n(r),i=n(33),s=n(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},d=n(24),m=function(){return{type:a.f}},p=function(){return{type:a.d}},g=function(e,t){return{type:a.b,message:e,idMessage:t}},h=function(e,t){return{type:a.c,message:e,idMessage:t}},b=function(e,t,n,r,c,l){return function(u){u(m()),u({type:a.a}),Object(i.b)(r).then((function(a){console.log(typeof a);var r,i={cobrandEmail:e,programName:t,ProgramDescription:n,programthumnail:a,startDate:c};console.log(i),(r=i,o()({method:"post",url:s.a+"/cobrand/programAdd",data:r,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/program"),u(h('Program "'+t+'" berhasil ditambahkan.')),u(p())})).catch((function(e){console.error("Error:",e),u(g('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),u(p())})),console.log(i)}))}},f=function(e,t,n,r,o,s,l){return function(u){if(u(m()),u({type:a.a}),console.log("Photo is empty:",""===o),""===o){var d={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:r,startDate:s}};console.log(d),c(d).then((function(e){console.log("Success:",e.data),l.push("/program"),u(h('Program "'+n+'" berhasil diubah.')),u(p())})).catch((function(e){console.error("Error:",e),u(g('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),u(p())}))}else{Object(i.b)(o).then((function(a){console.log(typeof a);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:r,programthumnail:a,startDate:s}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),l.push("/program"),u(h('Program "'+n+'" berhasil diubah.')),u(p())})).catch((function(e){console.error("Error:",e),u(g('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),u(p())}))}))}}},j=function(e,t,n){return function(r){r(m()),r({type:a.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),r(h('Program "'+t[1]+'" berhasil dihapus.')),r(p()),n()})).catch((function(e){console.log(e),r(g('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(p()),n()}))}},O=function(e,t,n,r,o,s,c,u,d,b,f){return function(j){j(m()),j({type:a.a}),Object(i.b)(c).then((function(a){console.log(typeof a);var c=a,m=b?"active":"inactive";if("Video"===o)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(u).then((function(a){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(a)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var b={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:c,contents:u,status:m,startDate:d};console.log(b),l(b).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+n+'" berhasil ditambahkan.')),j(p())})).catch((function(e){console.error("Error:",e),j(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(p())})),console.log(b)}));else if("Image"===o){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(i.b)(u).then((function(a){u='<img src="'+a+'" style="width:100%;"/>',console.log(u);var i={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:c,contents:u,status:m,startDate:d};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+n+'" berhasil ditambahkan.')),j(p())})).catch((function(e){console.error("Error:",e),j(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(p())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(a){var i={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:c,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:m,startDate:d};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+n+'" berhasil ditambahkan.')),j(p())})).catch((function(e){console.error("Error:",e),j(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(p())})),console.log(i)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var O={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:c,contents:u,status:m,startDate:d};console.log(O),l(O).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+n+'" berhasil ditambahkan.')),j(p())})).catch((function(e){console.error("Error:",e),j(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(p())})),console.log(O)}))}},y=function(e,t,n,r,o,s,c,l,d,b,f){return function(j){if(j(m()),j({type:a.a}),console.log("Photo is empty:",""===l),""===l){"Video"===s?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===s?d='<img src="'+d+'" style="width:100%;"/>':"Pdf"===s?(d='<div style="width:100%;height:100vh"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+' " frameborder="0" width="100%" height="100%"></iframe></div>',console.log(d)):d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>",console.log(d);var O={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:n,contentName:r,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(O),u(O).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+r+'" berhasil diubah.')),j(p())})).catch((function(e){console.error("Error:",e),j(g('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),j(p())})),console.log(O)}else{Object(i.b)(l).then((function(a){console.log(typeof a);var i={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:n,contentName:r,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(i),u(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+r+'" berhasil diubah.')),j(p())})).catch((function(e){console.error("Error:",e),j(g('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),j(p())})),console.log(i)}))}}},x=function(e,t,n){return function(r){r(m()),r({type:a.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),r(h('Content "'+t[1]+'" berhasil dihapus.')),r(p()),n()})).catch((function(e){console.log(e),r(g('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(p()),n()}))}},v=function(e,t,n,r,o,s,c){return function(l){l(m()),l({type:a.a});var u={email:e,password:t},b={};(n&&(b=Object.assign(b,{cobrandName:n})),o&&(b=Object.assign(b,{phoneNumber:o})),s&&(b=Object.assign(b,{address:s})),c&&(b=Object.assign(b,{password:c})),r)?Object(i.b)(r).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",u),console.log("newValues: ",b),Object(d.a)(u,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),u.password=c),Object(d.b)(u).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(p())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(p())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(p())}))})):(console.log("whereValues: ",u),console.log("newValues: ",b),Object(d.a)(u,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),u.password=c),Object(d.b)(u).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(p())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(p())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(p())})))}}}}]);
//# sourceMappingURL=7.d7cfc124.chunk.js.map