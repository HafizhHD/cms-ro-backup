(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[10],{278:function(e,t,r){},319:function(e,t,r){"use strict";r.r(t);var a=r(14),n=r(2),o=r(82),i=(r(278),r(94)),s=r(5),c=r(89),l=r(80),d=r(16),u=r(88),m=r(84),p=r(22),g=r.n(p),h=r(1);t.default=Object(d.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onEditProgram:function(t,r,a,n,o,i,s){return e(Object(c.f)(t,r,a,n,o,i,s))}}}))((function(e){var t=e.onEditProgram,r=e.isLoading,c=Object(n.useState)(!0),d=Object(a.a)(c,2),p=d[0],b=d[1],f=Object(n.useState)(),j=Object(a.a)(f,2),y=j[0],v=j[1],x=Object(n.useState)(),O=Object(a.a)(x,2),w=O[0],q=O[1],N=Object(s.g)(),E=JSON.parse(localStorage.getItem("userData")).email,C=localStorage.getItem("programSelected");return Object(n.useEffect)((function(){if(b(!0),console.log(C),C){var e={whereKeyValues:{cobrandEmail:E,_id:C}};g()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),v(e.data.programs[0]),console.log("This is ",y);var t=e.data.programs[0].startDate.split("T")[0];console.log(t),q(t),b(!1)})).catch((function(e){console.log(e),b(!1)}))}}),[]),p||r?Object(h.jsx)(l.a,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.a,{headingName:"Program",routes:[{path:"/program",name:"On Going Program"},{path:"/program/edit",name:"Edit Selected Program"}]}),Object(h.jsx)(i.a,{initialValues:{programName:y.programName,programDescription:y.ProgramDescription,startDate:w},validationSchema:u.f,validateOnChange:!0,onSubmit:function(e){t(C,E,e.programName,e.programDescription,"",e.startDate,N)},children:function(e){var t=e.handleChange,r=e.handleSubmit,a=e.handleBlur,n=(e.setFieldValue,e.values),o=e.errors,i=e.touched;return Object(h.jsx)("form",{onSubmit:r,children:Object(h.jsxs)("div",{className:"EditProgram",children:[Object(h.jsxs)("h1",{children:["Edit Selected Program: ",y.programName]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Title"}),Object(h.jsx)(m.a,{type:"text",name:"programName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:n.programName,onChange:t,onBlur:a}),i.programName&&Object(h.jsx)("span",{className:"message__error",children:o.programName})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Description"}),Object(h.jsx)(m.a,{type:"textarea",name:"programDescription",placeholder:"Type Something...",value:n.programDescription,onChange:t,onBlur:a}),i.programDescription&&Object(h.jsx)("span",{className:"message__error",children:o.programDescription})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Set Schedule"}),Object(h.jsx)(m.a,{type:"date",className:"form-group__input",name:"startDate",value:n.startDate,min:(new Date).toISOString().split("T")[0],onChange:t,onBlur:a}),i.startDate&&Object(h.jsx)("span",{className:"message__error",children:o.startDate})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Program"})})]})})}}),console.log(r),r?Object(h.jsx)(l.a,{}):null]})}))},80:function(e,t,r){"use strict";r(2);var a=r(30),n=(r(81),r(1));t.a=function(e){var t=e.text,r=void 0===t?"Mohon Tunggu":t;return Object(n.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(n.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(n.jsx)("span",{children:"Keluarga HKBP"})," "]}),Object(n.jsx)(a.a,{}),Object(n.jsx)("p",{children:r})]})}},81:function(e,t,r){},82:function(e,t,r){"use strict";r(2);var a=r(12),n=(r(83),r(1));t.a=function(e){var t=e.headingName,r=e.routes,o=void 0===r?[]:r;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},t)}))})]})}},83:function(e,t,r){},84:function(e,t,r){"use strict";var a=r(2),n=(r(85),r(1));function o(e){var t=e.placeholder,r=e.type,a=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,d=e.min,u=e.isError;return"textarea"===r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:a,onBlur:o,value:i}),u&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:r,placeholder:t,onChange:a,onBlur:o,value:i,min:d,max:"9999-12-31"}),u&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:r,placeholder:t,onChange:a,onBlur:o,value:i}),u&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(a.memo)(o)},85:function(e,t,r){},88:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"f",(function(){return s})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var a=r(95),n=a.d({email:a.e("Enter your email").required("Email is required").email("Email not valid"),password:a.e("Enter your password").required("Password is required")}),o=a.d({email:a.e("Enter your email").required("Email is required").email("Email not valid"),accountName:a.e("Enter your name").required("Name is required"),cobrandName:a.e("Enter your brand name").required("Brand name is required"),thumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.e("Enter your phone number").required("Phone number is required").matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Invalid phone number format"),address:a.e("Enter your address").required("Address is required"),password:a.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:a.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),i=a.d({programName:a.e("Enter your program title").required("Program title is required"),programDescription:a.e("Enter the program description").required("Program description is required"),programThumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.b("Insert start date").required("Date is required")}),s=a.d({programName:a.e("Enter your program title").required("Program title is required"),programDescription:a.e("Enter the program description").required("Program description is required"),startDate:a.b("Insert start date").required("Date is required")}),c=a.d({contentName:a.e("Enter your content title").required("Content title is required"),contentDescription:a.e("Enter the content description").required("Content description is required"),contents:a.e("Enter the content description").required("Content description is required"),contentSource:a.e("Enter the content source").required("Content source is required"),contentThumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.b("Insert start date").required("Date is required"),isActive:a.a()}),l=a.d({contentName:a.e("Enter your content title").required("Content title is required"),contentDescription:a.e("Enter the content description").required("Content description is required"),contents:a.e("Enter the content description").required("Content description is required"),contentSource:a.e("Enter the content source").required("Content source is required"),startDate:a.b("Insert start date").required("Date is required")})},89:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"f",(function(){return p})),r.d(t,"d",(function(){return g})),r.d(t,"a",(function(){return h})),r.d(t,"e",(function(){return b})),r.d(t,"c",(function(){return f}));var a=r(7),n=r(22),o=r.n(n),i=r(31);function s(e){var t="",r="";return e.includes("facebook.com/")?t="https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(e)+"&show_text=1&width=200":e.includes("vimeo.com/")?((r=void 0!==typeof e.split("vimeo.com/")[1]?e.split("vimeo.com/")[1]:null).includes("&")&&(r=r.split("&")[0]),t="https://player.vimeo.com/video/"+r):e.includes("youtube.com/")?((r=void 0!==typeof e.split("v=")[1]?e.split("v=")[1]:null).includes("&")&&(r=r.split("&")[0]),t="https://www.youtube.com/embed/"+r):e.includes("youtu.be/")?((r=void 0!==typeof e.split("youtu.be/")[1]?e.split("youtu.be/")[1]:null).includes("&")&&(r=r.split("&")[0]),t="https://www.youtube.com/embed/"+r):e.includes("dailymotion.com/")?((r=void 0!==typeof e.split("dailymotion.com/")[1]?e.split("dailymotion.com/")[1]:null).includes("&")&&(r=r.split("&")[0]),t="https://www.dailymotion.com/embed/"+r):t=e,t}var c=function(){return{type:a.f}},l=function(){return{type:a.d}},d=function(e,t){return{type:a.b,message:e,idMessage:t}},u=function(e,t){return{type:a.c,message:e,idMessage:t}},m=function(e,t,r,a,n,s){return function(m){m(c()),Object(i.a)(a).then((function(a){console.log(typeof a);var i={cobrandEmail:e,programName:t,ProgramDescription:r,programthumnail:a,startDate:n};console.log(i),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programAdd",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),s.push("/program"),m(u('Program "'+t+'" berhasil ditambahkan.')),m(l())})).catch((function(e){console.error("Error:",e),m(d('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),m(l())})),console.log(i)}))}},p=function(e,t,r,a,n,s,m){return function(p){if(p(c()),console.log("Photo is empty:",""===n),""===n){var g={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:r,ProgramDescription:a,startDate:s}};console.log(g),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programUpdate",data:g,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),m.push("/program"),p(u('Program "'+r+'" berhasil diubah.')),p(l())})).catch((function(e){console.error("Error:",e),p(d('Program "'+r+'" gagal diubah. Coba beberapa saat lagi.')),p(l())}))}else{Object(i.a)(n).then((function(n){console.log(typeof n);var i={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:r,ProgramDescription:a,programthumnail:n,startDate:s}};console.log(i),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programUpdate",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),m.push("/program"),p(u('Program "'+r+'" berhasil diubah.')),p(l())})).catch((function(e){console.error("Error:",e),p(d('Program "'+r+'" gagal diubah. Coba beberapa saat lagi.')),p(l())}))}))}}},g=function(e,t,r){return function(a){a(c());var n={whereValues:{cobrandEmail:e,_id:t[0]}};o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programRemove",data:n,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),a(u('Program "'+t[1]+'" berhasil dihapus.')),a(l()),r()})).catch((function(e){console.log(e),a(d('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),a(l()),r()}))}},h=function(e,t,r,a,n,m,p,g,h,b,f){return function(j){j(c()),Object(i.a)(p).then((function(i){console.log(typeof i);var c=i,p=b?"active":"inactive";g="Video"===n?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+s(g)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===n?'<img src="'+g+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+g+"</div></body></html>",console.log(g);var y={cobrandEmail:e,programId:t,contentName:r,contentDescription:a,contentType:n,contentSource:m,contentThumbnail:c,contents:g,status:p,startDate:h};console.log(y),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentAdd",data:y,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),f.push("/content"),j(u('Content "'+r+'" berhasil ditambahkan.')),j(l())})).catch((function(e){console.error("Error:",e),j(d('Content "'+r+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(l())})),console.log(y)}))}},b=function(e,t,r,a,n,m,p,g,h,b,f){return function(j){if(j(c()),console.log("Photo is empty:",""===g),""===g){h="Video"===m?'<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+s(h)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':"Image"===m?'<img src="'+h+'" style="width:100%;"/>':'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h+"</div></body></html>",console.log(h);var y={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:r,contentName:a,contentDescription:n,contentType:m,contentSource:p,contents:h,startDate:b}};console.log(y),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:y,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),f.push("/content"),j(u('Content "'+a+'" berhasil diubah.')),j(l())})).catch((function(e){console.error("Error:",e),j(d('Content "'+a+'" gagal diubah. Coba beberapa saat lagi.')),j(l())})),console.log(y)}else{Object(i.a)(g).then((function(i){console.log(typeof i);var s={whereValues:{cobrandEmail:t,_id:e},newValues:{programId:r,contentName:a,contentDescription:n,contentType:m,contentSource:p,contents:h,startDate:b}};console.log(s),o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate",data:s,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),f.push("/content"),j(u('Content "'+a+'" berhasil diubah.')),j(l())})).catch((function(e){console.error("Error:",e),j(d('Content "'+a+'" gagal diubah. Coba beberapa saat lagi.')),j(l())})),console.log(s)}))}}},f=function(e,t,r){return function(a){a(c());var n={whereValues:{cobrandEmail:e,_id:t[0]}};o()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/contentRemove",data:n,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),a(u('Content "'+t[1]+'" berhasil dihapus.')),a(l()),r()})).catch((function(e){console.log(e),a(d('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),a(l()),r()}))}}}}]);
//# sourceMappingURL=10.c41fb939.chunk.js.map