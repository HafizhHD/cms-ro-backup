(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[8],{283:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(2),o=n(82),i=(n(283),n(94)),s=n(5),c=n(89),l=n(80),d=n(16),u=n(88),m=n(84),p=n(22),g=n.n(p),h=n(154),b=n.n(h),j=n(1);t.default=Object(d.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onEditContent:function(t,n,a,r,o,i,s,l,d,u,m){return e(Object(c.e)(t,n,a,r,o,i,s,l,d,u,m))}}}))((function(e){var t=e.onEditContent,n=e.isLoading,c=Object(r.useState)(!0),d=Object(a.a)(c,2),p=d[0],h=d[1],f=Object(r.useState)(),y=Object(a.a)(f,2),O=y[0],v=y[1],x=Object(r.useState)(),N=Object(a.a)(x,2),C=N[0],T=N[1],w=Object(r.useState)(),E=Object(a.a)(w,2),_=E[0],q=E[1],S=Object(r.useState)(""),D=Object(a.a)(S,2),I=D[0],P=D[1],k=Object(r.useState)(b.a.createEmptyValue()),B=Object(a.a)(k,2),V=B[0],L=B[1],z={display:["INLINE_STYLE_BUTTONS","BLOCK_TYPE_BUTTONS","BLOCK_TYPE_DROPDOWN","HISTORY_BUTTONS"],INLINE_STYLE_BUTTONS:[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Strikethrough",style:"STRIKETHROUGH"}],BLOCK_TYPE_DROPDOWN:[{label:"Normal",style:"unstyled"},{label:"Heading Large",style:"header-one"},{label:"Heading Medium",style:"header-two"},{label:"Heading Small",style:"header-three"}],BLOCK_TYPE_BUTTONS:[{label:"Unordered List",style:"unordered-list-item"},{label:"Ordered List",style:"ordered-list-item"},{label:"Blockquote",style:"blockquote"}]},U=Object(s.g)(),H=JSON.parse(localStorage.getItem("userData")).email,R=localStorage.getItem("contentSelected"),A={whereKeyValues:{cobrandEmail:H}};return Object(r.useEffect)((function(){if(h(!0),console.log(R),R){var e={whereKeyValues:{cobrandEmail:H,_id:R}};g()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),T(e.data.contents[0]);var t=(new DOMParser).parseFromString(e.data.contents[0].contents,"text/html");if(console.log(t),"Artikel"===e.data.contents[0].contentType){var n=t.getElementById("contents");L(b.a.createValueFromString(n.outerHTML,"html"))}else if("Image"===e.data.contents[0].contentType){var a=t.getElementsByTagName("img")[0];P(a.src)}else if("Video"===e.data.contents[0].contentType){var r=t.getElementsByTagName("iframe")[0];P(r.src)}var o=e.data.contents[0].startDate.split("T")[0];console.log(o),q(o),g()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:A,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),v(e.data.programs),h(!1)})).catch((function(e){console.log(e),h(!1)}))})).catch((function(e){console.log(e),h(!1)}))}}),[]),p?Object(j.jsx)(l.a,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.a,{headingName:"Content",routes:[{path:"/content",name:"Content"},{path:"/content/edit",name:"Edit Selected content"}]}),Object(j.jsx)(i.a,{initialValues:{programId:C.programId,contentName:C.contentName,contentDescription:C.contentDescription,contentType:C.contentType,contentSource:C.contentSource,contents:"Artikel"!==C.contentType?I:"",startDate:_},validationSchema:u.b,validateOnChange:!0,onSubmit:function(e){t(R,H,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,"",e.contents,e.startDate,U)},children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.setFieldValue,r=e.values,o=e.errors;return Object(j.jsx)("form",{onSubmit:n,children:Object(j.jsxs)("div",{className:"EditContent",children:[Object(j.jsxs)("h1",{children:["Edit Selected Content: ",C.contentName]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Content Type"}),Object(j.jsxs)("select",{name:"contentType",value:r.contentType,onChange:function(e){a("contentType",e.currentTarget.value),a("contents","")},children:[Object(j.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(j.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(j.jsx)("option",{value:"Image",children:"Image"}),Object(j.jsx)("option",{value:"Video",children:"Video"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Program Name"}),Object(j.jsxs)("select",{name:"programId",value:r.programId,onChange:t,children:[Object(j.jsx)("option",{value:"-1",disabled:!0,children:"Select Program"}),Object(j.jsx)("option",{value:"",children:"(Tanpa Program)"}),O.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.programName})}))]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)(m.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:r.contentName,onChange:t}),Object(j.jsx)("span",{className:"message__error",children:o.contentName})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)(m.a,{type:"textarea",name:"contentDescription",placeholder:"Type Something...",value:r.contentDescription,onChange:t})]}),Object(j.jsx)("span",{className:"message__error",children:o.contentDescription}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Source"}),Object(j.jsx)(m.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:r.contentSource,onChange:t}),Object(j.jsx)("span",{className:"message__error",children:o.contentSource})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Contents"}),"Artikel"===r.contentType?Object(j.jsx)(b.a,{name:"contents",placeholder:"Type your contents here...",className:"form-group_rte",value:V,toolbarConfig:z,onChange:function(e){L(e),a("contents",e.toString("html")),console.log(r.contents)}}):null,"Image"===r.contentType?Object(j.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Image URL... (https://example.com/something/something.jpg)",value:r.contents,onChange:t}):null,"Video"===r.contentType?Object(j.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:r.contents,onChange:t}):null,Object(j.jsx)("span",{className:"message__error",children:o.contents})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Set Schedule"}),Object(j.jsx)(m.a,{type:"date",className:"form-group__input",name:"startDate",value:r.startDate,min:(new Date).toISOString().split("T")[0],onChange:t}),Object(j.jsx)("span",{className:"message__error",children:o.startDate})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Upload Content"})})]})})}}),console.log(n),n?Object(j.jsx)(l.a,{}):null]})}))},80:function(e,t,n){"use strict";n(2);var a=n(30),r=(n(81),n(1));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(r.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(r.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(r.jsx)("span",{children:"Keluarga HKBP"})," "]}),Object(r.jsx)(a.a,{}),Object(r.jsx)("p",{children:n})]})}},81:function(e,t,n){},82:function(e,t,n){"use strict";n(2);var a=n(12),r=(n(83),n(1));t.a=function(e){var t=e.headingName,n=e.routes,o=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},83:function(e,t,n){},84:function(e,t,n){"use strict";var a=n(2),r=(n(85),n(1));function o(e){var t=e.placeholder,n=e.type,a=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,d=e.min,u=e.isError;return"textarea"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:a,onBlur:o,value:i}),u&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]}):"date"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:s,type:n,placeholder:t,onChange:a,onBlur:o,value:i,min:d}),u&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:s,type:n,placeholder:t,onChange:a,onBlur:o,value:i}),u&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(a.memo)(o)},85:function(e,t,n){},88:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var a=n(95),r=a.d({email:a.e("Enter your email").required("Email is required").email("Email not valid"),password:a.e("Enter your password").required("Password is required")}),o=a.d({email:a.e("Enter your email").required("Email is required").email("Email not valid"),accountName:a.e("Enter your name").required("Name is required"),cobrandName:a.e("Enter your brand name").required("Brand name is required"),thumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.e("Enter your phone number").required("Phone number is required").matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Invalid phone number format"),address:a.e("Enter your address").required("Address is required"),password:a.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:a.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),i=a.d({programName:a.e("Enter your program title").required("Program title is required"),programDescription:a.e("Enter the program description").required("Program description is required"),programThumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.b("Insert start date").required("Date is required")}),s=a.d({programName:a.e("Enter your program title").required("Program title is required"),programDescription:a.e("Enter the program description").required("Program description is required"),startDate:a.b("Insert start date").required("Date is required")}),c=a.d({contentName:a.e("Enter your content title").required("Content title is required"),contentDescription:a.e("Enter the content description").required("Content description is required"),contents:a.e("Enter the content description").required("Content description is required"),contentSource:a.e("Enter the content source").required("Content source is required"),contentThumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.b("Insert start date").required("Date is required"),isActive:a.a()}),l=a.d({contentName:a.e("Enter your content title").required("Content title is required"),contentDescription:a.e("Enter the content description").required("Content description is required"),contents:a.e("Enter the content description").required("Content description is required"),contentSource:a.e("Enter the content source").required("Content source is required"),startDate:a.b("Insert start date").required("Date is required")})},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return j}));var a=n(7),r=n(22),o=n.n(r),i=n(31);function s(e){var t="",n="";return e.includes("facebook.com/")?t="https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(e)+"&show_text=1&width=200":e.includes("vimeo.com/")?((n=void 0!==typeof e.split("vimeo.com/")[1]?e.split("vimeo.com/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://player.vimeo.com/video/"+n):e.includes("youtube.com/")?((n=void 0!==typeof e.split("v=")[1]?e.split("v=")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.youtube.com/embed/"+n):e.includes("youtu.be/")?((n=void 0!==typeof e.split("youtu.be/")[1]?e.split("youtu.be/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.youtube.com/embed/"+n):e.includes("dailymotion.com/")?((n=void 0!==typeof e.split("dailymotion.com/")[1]?e.split("dailymotion.com/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.dailymotion.com/embed/"+n):t=e,t}var c=function(){return{type:a.f}},l=function(){return{type:a.d}},d=function(e,t){return{type:a.b,message:e,idMessage:t}},u=function(e,t){return{type:a.c,message:e,idMessage:t}},m=function(e,t,n,a,r,s){return function(m){m(c()),Object(i.a)(a).then((function(a){console.log(typeof a);var i={cobrandEmail:e,programName:t,ProgramDescription:n,programthumnail:a,startDate:r};console.log(i),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programAdd",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),s.push("/program"),m(u('Program "'+t+'" berhasil ditambahkan.')),m(l())})).catch((function(e){console.error("Error:",e),m(d('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),m(l())})),console.log(i)}))}},p=function(e,t,n,a,r,s,m){return function(p){if(p(c()),console.log("Photo is empty:",""===r),""===r){var g={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:a,startDate:s}};console.log(g),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programUpdate",data:g,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),m.push("/program"),p(u('Program "'+n+'" berhasil diubah.')),p(l())})).catch((function(e){console.error("Error:",e),p(d('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),p(l())}))}else{Object(i.a)(r).then((function(r){console.log(typeof r);var i={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:a,programthumnail:r,startDate:s}};console.log(i),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programUpdate",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),m.push("/program"),p(u('Program "'+n+'" berhasil diubah.')),p(l())})).catch((function(e){console.error("Error:",e),p(d('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),p(l())}))}))}}},g=function(e,t,n){return function(a){a(c());var r={whereValues:{cobrandEmail:e,_id:t[0]}};o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programRemove",data:r,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),a(u('Program "'+t[1]+'" berhasil dihapus.')),a(l()),n()})).catch((function(e){console.log(e),a(d('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),a(l()),n()}))}},h=function(e,t,n,a,r,m,p,g,h,b,j){return function(f){f(c()),Object(i.a)(p).then((function(i){console.log(typeof i);var c=i,p=b?"active":"inactive";g="Video"===r?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+s(g)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===r?'<img src="'+g+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+g+"</div></body></html>",console.log(g);var y={cobrandEmail:e,programId:t,contentName:n,contentDescription:a,contentType:r,contentSource:m,contentThumbnail:c,contents:g,status:p,startDate:h};console.log(y),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentAdd",data:y,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),j.push("/content"),f(u('Content "'+n+'" berhasil ditambahkan.')),f(l())})).catch((function(e){console.error("Error:",e),f(d('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),f(l())})),console.log(y)}))}},b=function(e,t,n,a,r,m,p,g,h,b,j){return function(f){if(f(c()),console.log("Photo is empty:",""===g),""===g){h="Video"===m?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+s(h)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===m?'<img src="'+h+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h+"</div></body></html>",console.log(h);var y={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:n,contentName:a,contentDescription:r,contentType:m,contentSource:p,contents:h,startDate:b}};console.log(y),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:y,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),j.push("/content"),f(u('Content "'+a+'" berhasil diubah.')),f(l())})).catch((function(e){console.error("Error:",e),f(d('Content "'+a+'" gagal diubah. Coba beberapa saat lagi.')),f(l())})),console.log(y)}else{Object(i.a)(g).then((function(i){console.log(typeof i);var s={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:n,contentName:a,contentDescription:r,contentType:m,contentSource:p,contents:h,startDate:b}};console.log(s),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:s,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),j.push("/content"),f(u('Content "'+a+'" berhasil diubah.')),f(l())})).catch((function(e){console.error("Error:",e),f(d('Content "'+a+'" gagal diubah. Coba beberapa saat lagi.')),f(l())})),console.log(s)}))}}},j=function(e,t,n){return function(a){a(c());var r={whereValues:{cobrandEmail:e,_id:t[0]}};o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentRemove",data:r,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),a(u('Content "'+t[1]+'" berhasil dihapus.')),a(l()),n()})).catch((function(e){console.log(e),a(d('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),a(l()),n()}))}}}}]);
//# sourceMappingURL=8.1e8ab143.chunk.js.map