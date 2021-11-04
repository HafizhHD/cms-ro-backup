(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[7],{282:function(e,t,n){},321:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n(2),o=n(82),i=(n(282),n(94)),s=n(5),c=n(93),l=n(80),d=n(16),u=n(88),m=n(84),p=n(22),h=n.n(p),g=n(154),b=n.n(g),j=n(1);t.default=Object(d.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddContent:function(t,n,r,a,o,i,s,l,d,u,m){return e(Object(c.a)(t,n,r,a,o,i,s,l,d,u,m))}}}))((function(e){var t=e.onAddContent,n=e.isLoading,c=Object(a.useState)(!0),d=Object(r.a)(c,2),p=d[0],g=d[1],f=Object(a.useState)(),y=Object(r.a)(f,2),O=y[0],x=y[1],v=Object(a.useState)(b.a.createEmptyValue()),N=Object(r.a)(v,2),_=N[0],w=N[1],C={display:["INLINE_STYLE_BUTTONS","BLOCK_TYPE_BUTTONS","BLOCK_TYPE_DROPDOWN","HISTORY_BUTTONS"],INLINE_STYLE_BUTTONS:[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Strikethrough",style:"STRIKETHROUGH"}],BLOCK_TYPE_DROPDOWN:[{label:"Normal",style:"unstyled"},{label:"Heading Large",style:"header-one"},{label:"Heading Medium",style:"header-two"},{label:"Heading Small",style:"header-three"}],BLOCK_TYPE_BUTTONS:[{label:"Unordered List",style:"unordered-list-item"},{label:"Ordered List",style:"ordered-list-item"},{label:"Blockquote",style:"blockquote"}]},T=Object(s.g)(),q=JSON.parse(localStorage.getItem("userData")).email,E={whereKeyValues:{cobrandEmail:q}};return Object(a.useEffect)((function(){h()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:E,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),x(e.data.programs),g(!1)})).catch((function(e){console.log(e),g(!1)}))}),[]),p?Object(j.jsx)(l.a,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.a,{headingName:"Content",routes:[{path:"/content",name:"Content"},{path:"/content/add",name:"Create new content"}]}),Object(j.jsx)(i.a,{initialValues:{programId:"",contentName:"",contentDescription:"",contentType:"",contentSource:"",contentThumbnail:"",contents:"",startDate:(new Date).toISOString().split("T")[0],isActive:!1},validationSchema:u.a,validateOnChange:!0,onSubmit:function(e){window.scrollTo(0,0),t(q,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,e.isActive,T)},children:function(e){var t=e.handleChange,n=e.handleSubmit,r=e.setFieldValue,a=e.values,o=e.errors;return Object(j.jsx)("form",{onSubmit:n,children:Object(j.jsxs)("div",{className:"AddContent",children:[Object(j.jsx)("h1",{className:"AddContent_title",children:"Create New Content"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Content Type"}),Object(j.jsxs)("select",{name:"contentType",value:a.contentType,onChange:function(e){r("contentType",e.currentTarget.value),r("contents","")},children:[Object(j.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(j.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(j.jsx)("option",{value:"Image",children:"Image"}),Object(j.jsx)("option",{value:"Video",children:"Video"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Program Name"}),Object(j.jsxs)("select",{name:"programId",value:a.programId,onChange:t,children:[Object(j.jsx)("option",{value:"",children:"(Tanpa Program)"}),O.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.programName})}))]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)(m.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:a.contentName,onChange:t}),Object(j.jsx)("span",{className:"message__error",children:o.contentName})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)(m.a,{type:"textarea",name:"contentDescription",placeholder:"Type Something...",value:a.contentDescription,onChange:t})]}),Object(j.jsx)("span",{className:"message__error",children:o.contentDescription}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Source"}),Object(j.jsx)(m.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:a.contentSource,onChange:t}),Object(j.jsx)("span",{className:"message__error",children:o.contentSource})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Photo"}),Object(j.jsx)(m.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contentThumbnail",t))}}),Object(j.jsx)("span",{className:"message__error",children:o.contentThumbnail})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Contents"}),"Artikel"===a.contentType?Object(j.jsx)(b.a,{name:"contents",placeholder:"Type your contents here...",className:"form-group__input form-group__input_rte",value:_,toolbarConfig:C,onChange:function(e){w(e),r("contents",e.toString("html")),console.log(a.contents)}}):null,"Image"===a.contentType?Object(j.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Image URL... (https://example.com/something/something.jpg)",value:a.contents,onChange:t}):null,"Video"===a.contentType?Object(j.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:a.contents,onChange:t}):null,Object(j.jsx)("span",{className:"message__error",children:o.contents})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Set Schedule"}),Object(j.jsx)(m.a,{type:"date",className:"form-group__input",name:"startDate",value:a.startDate,min:(new Date).toISOString().split("T")[0],onChange:t}),Object(j.jsx)("span",{className:"message__error",children:o.startDate})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("div",{className:"form-group_switch",children:[Object(j.jsx)("p",{className:"form-group_switch_status",children:"Status:"}),Object(j.jsx)("p",{className:"form-group_switch_inactive",children:"Inactive"}),Object(j.jsxs)("label",{className:"form-group_switch_switch",children:[Object(j.jsx)("input",{type:"checkbox",className:"form-group_switch_switch_checkbox",name:"isActive",defaultChecked:a.isActive,onChange:function(){a.isActive=!a.isActive,console.log(a.isActive)}}),Object(j.jsx)("span",{className:"form-group_switch_switch_slider"})]}),Object(j.jsx)("p",{className:"form-group_switch_active",children:"Active"})]})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Post Content"})})]})})}}),console.log(n),n?Object(j.jsx)(l.a,{}):null]})}))},80:function(e,t,n){"use strict";n(2);var r=n(30),a=(n(81),n(1));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(a.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(a.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(a.jsx)("span",{children:"Keluarga HKBP"})," "]}),Object(a.jsx)(r.a,{}),Object(a.jsx)("p",{children:n})]})}},81:function(e,t,n){},82:function(e,t,n){"use strict";n(2);var r=n(7),a=(n(83),n(1));t.a=function(e){var t=e.headingName,n=e.routes,o=void 0===n?[]:n;return Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(a.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(a.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(a.jsx)("span",{children:e.name})," "]},t)}))})]})}},83:function(e,t,n){},84:function(e,t,n){"use strict";var r=n(2),a=(n(85),n(1));function o(e){var t=e.placeholder,n=e.type,r=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,d=e.min,u=e.isError;return"textarea"===n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:r,onBlur:o,value:i}),u&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:c})})]}):"date"===n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:l,className:s,type:n,placeholder:t,onChange:r,onBlur:o,value:i,min:d}),u&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:c})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:l,className:s,type:n,placeholder:t,onChange:r,onBlur:o,value:i}),u&&Object(a.jsx)("div",{className:"message",children:Object(a.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(o)},85:function(e,t,n){},88:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(95),a=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),password:r.e("Enter your password").required("Password is required")}),o=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),accountName:r.e("Enter your name").required("Name is required"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),i=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),programThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required")}),s=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),startDate:r.b("Insert start date").required("Date is required")}),c=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),contentThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required"),isActive:r.a()}),l=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),startDate:r.b("Insert start date").required("Date is required")})},93:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return h}));var r=n(8),a=n(22),o=n.n(a),i=n(31);function s(e){var t="",n="";return e.includes("facebook.com/")?t="https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(e)+"&show_text=1&width=200":e.includes("vimeo.com/")?((n=void 0!==typeof e.split("vimeo.com/")[1]?e.split("vimeo.com/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://player.vimeo.com/video/"+n):e.includes("youtube.com/")?((n=void 0!==typeof e.split("v=")[1]?e.split("v=")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.youtube.com/embed/"+n):e.includes("youtu.be/")?((n=void 0!==typeof e.split("youtu.be/")[1]?e.split("youtu.be/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.youtube.com/embed/"+n):e.includes("dailymotion.com/")?((n=void 0!==typeof e.split("dailymotion.com/")[1]?e.split("dailymotion.com/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.dailymotion.com/embed/"+n):t=e,t}var c=function(){return{type:r.f}},l=function(){return{type:r.d}},d=function(e){return{type:r.c,message:e}},u=function(e,t,n,r,a,s){return function(u){u(c()),Object(i.a)(r).then((function(r){console.log(typeof r);var i={cobrandEmail:e,programName:t,ProgramDescription:n,programthumnail:r,startDate:a};console.log(i),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programAdd",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),s.push("/program"),u(d('Program "'+t+'" berhasil ditambahkan.')),u(l())})).catch((function(e){console.error("Error:",e),u(d('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),u(l())})),console.log(i)}))}},m=function(e,t,n,r,a,s,u){return function(m){if(m(c()),console.log("Photo is empty:",""===a),""===a){var p={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:r,startDate:s}};console.log(p),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programUpdate",data:p,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),u.push("/program"),m(d('Program "'+n+'" berhasil diubah.')),m(l())})).catch((function(e){console.error("Error:",e),m(d('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),m(l())})),console.log(p)}else{Object(i.a)(a).then((function(a){console.log(typeof a);var i={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:r,programthumnail:a,startDate:s}};console.log(i),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programUpdate",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),u.push("/program"),m(d('Program "'+n+'" berhasil diubah.')),m(l())})).catch((function(e){console.error("Error:",e),m(d('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),m(l())})),console.log(i)}))}}},p=function(e,t,n,r,a,u,m,p,h,g,b){return function(j){j(c()),Object(i.a)(m).then((function(i){console.log(typeof i);var c=i,m=g?"active":"inactive";p="Video"===a?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+s(p)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===a?'<img src="'+p+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+p+"</div></body></html>",console.log(p);var f={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:a,contentSource:u,contentThumbnail:c,contents:p,status:m,startDate:h};console.log(f),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentAdd",data:f,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),b.push("/content"),j(d('Content "'+n+'" berhasil ditambahkan.')),j(l())})).catch((function(e){console.error("Error:",e),j(d('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(l())})),console.log(f)}))}},h=function(e,t,n,r,a,u,m,p,h,g,b){return function(j){if(j(c()),console.log("Photo is empty:",""===p),""===p){h="Video"===u?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+s(h)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===u?'<img src="'+h+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h+"</div></body></html>",console.log(h);var f={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:n,contentName:r,contentDescription:a,contentType:u,contentSource:m,contents:h,startDate:g}};console.log(f),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:f,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),b.push("/content"),j(d('Content "'+r+'" berhasil diubah.')),j(l())})).catch((function(e){console.error("Error:",e),j(d('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),j(l())})),console.log(f)}else{Object(i.a)(p).then((function(i){console.log(typeof i);var s={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:n,contentName:r,contentDescription:a,contentType:u,contentSource:m,contents:h,startDate:g}};console.log(s),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:s,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),b.push("/content"),j(d('Content "'+r+'" berhasil diubah.')),j(l())})).catch((function(e){console.error("Error:",e),j(d('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),j(l())})),console.log(s)}))}}}}}]);
//# sourceMappingURL=7.e166bdc7.chunk.js.map