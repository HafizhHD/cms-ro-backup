(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[9,2],{283:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a(2),o=a(85),i=(a(283),a(98)),s=a(5),c=a(92),l=a(83),d=a(16),u=a(91),m=a(89),g=a(18),p=a.n(g),h=a(1);t.default=Object(d.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onEditProgram:function(t,a,r,n,o,i,s){return e(Object(c.g)(t,a,r,n,o,i,s))}}}))((function(e){var t=e.onEditProgram,a=e.isLoading,c=Object(n.useState)(!0),d=Object(r.a)(c,2),g=d[0],b=d[1],f=Object(n.useState)(),j=Object(r.a)(f,2),y=j[0],v=j[1],O=Object(n.useState)(),w=Object(r.a)(O,2),x=w[0],E=w[1],q=Object(s.g)(),C=JSON.parse(localStorage.getItem("userData")).email,N=localStorage.getItem("programSelected");return Object(n.useEffect)((function(){if(b(!0),console.log(N),N){var e={whereKeyValues:{cobrandEmail:C,_id:N}};p()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),v(e.data.programs[0]),console.log("This is ",y);var t=e.data.programs[0].startDate.split("T")[0];console.log(t),E(t),b(!1)})).catch((function(e){console.log(e),b(!1)}))}}),[]),g||a?Object(h.jsx)(l.a,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.a,{headingName:"Program",routes:[{path:"/program",name:"On Going Program"},{path:"/program/edit",name:"Edit Selected Program"}]}),Object(h.jsx)(i.a,{initialValues:{programName:y.programName,programDescription:y.ProgramDescription,startDate:x},validationSchema:u.g,validateOnChange:!0,onSubmit:function(e){t(N,C,e.programName,e.programDescription,"",e.startDate,q)},children:function(e){var t=e.handleChange,a=e.handleSubmit,r=e.handleBlur,n=(e.setFieldValue,e.values),o=e.errors,i=e.touched;return Object(h.jsx)("form",{onSubmit:a,children:Object(h.jsxs)("div",{className:"EditProgram",children:[Object(h.jsxs)("h1",{children:["Edit Selected Program: ",y.programName]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Title"}),Object(h.jsx)(m.a,{type:"text",name:"programName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:n.programName,onChange:t,onBlur:r}),i.programName&&Object(h.jsx)("span",{className:"message__error",children:o.programName})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Description"}),Object(h.jsx)(m.a,{type:"textarea",name:"programDescription",placeholder:"Type Something...",value:n.programDescription,onChange:t,onBlur:r}),i.programDescription&&Object(h.jsx)("span",{className:"message__error",children:o.programDescription})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Set Schedule"}),Object(h.jsx)(m.a,{type:"date",className:"form-group__input",name:"startDate",value:n.startDate,min:(new Date).toISOString().split("T")[0],onChange:t,onBlur:r}),i.startDate&&Object(h.jsx)("span",{className:"message__error",children:o.startDate})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Program"})})]})})}}),console.log(a),a?Object(h.jsx)(l.a,{}):null]})}))},83:function(e,t,a){"use strict";a(2);var r=a(32),n=(a(84),a(1));t.a=function(e){var t=e.text,a=void 0===t?"Mohon Tunggu":t;return Object(n.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(n.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(n.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(n.jsx)(r.a,{}),Object(n.jsx)("p",{children:a})]})}},84:function(e,t,a){},85:function(e,t,a){"use strict";a(2);var r=a(12),n=(a(88),a(1));t.a=function(e){var t=e.headingName,a=e.routes,o=void 0===a?[]:a;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},t)}))})]})}},88:function(e,t,a){},89:function(e,t,a){"use strict";var r=a(2),n=(a(90),a(1));function o(e){var t=e.placeholder,a=e.type,r=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,d=e.min,u=e.disabled,m=e.isError;return"textarea"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:r,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,min:d,max:"9999-12-31",disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(o)},90:function(e,t,a){},91:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var r=a(99),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),password:r.e("Enter your password").required("Password is required")}),i=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),accountName:r.e("Enter your name").required("Name is required"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),programThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required")}),l=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),startDate:r.b("Insert start date").required("Date is required")}),d=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),contentThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required"),isActive:r.a()}),u=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),startDate:r.b("Insert start date").required("Date is required")})},92:function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"g",(function(){return b})),a.d(t,"d",(function(){return f})),a.d(t,"a",(function(){return j})),a.d(t,"e",(function(){return y})),a.d(t,"c",(function(){return v})),a.d(t,"f",(function(){return O}));var r=a(7),n=a(18),o=a.n(n),i=a(33),s=a(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},d=a(24),u=function(){return{type:r.f}},m=function(){return{type:r.d}},g=function(e,t){return{type:r.b,message:e,idMessage:t}},p=function(e,t){return{type:r.c,message:e,idMessage:t}},h=function(e,t,a,n,c,l){return function(d){d(u()),d({type:r.a}),Object(i.b)(n).then((function(r){console.log(typeof r);var n,i={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:r,startDate:c};console.log(i),(n=i,o()({method:"post",url:s.a+"/cobrand/programAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/program"),d(p('Program "'+t+'" berhasil ditambahkan.')),d(m())})).catch((function(e){console.error("Error:",e),d(g('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(m())})),console.log(i)}))}},b=function(e,t,a,n,o,s,l){return function(d){if(d(u()),d({type:r.a}),console.log("Photo is empty:",""===o),""===o){var h={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,startDate:s}};console.log(h),c(h).then((function(e){console.log("Success:",e.data),l.push("/program"),d(p('Program "'+a+'" berhasil diubah.')),d(m())})).catch((function(e){console.error("Error:",e),d(g('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(m())}))}else{Object(i.b)(o).then((function(r){console.log(typeof r);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,programthumnail:r,startDate:s}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),l.push("/program"),d(p('Program "'+a+'" berhasil diubah.')),d(m())})).catch((function(e){console.error("Error:",e),d(g('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(m())}))}))}}},f=function(e,t,a){return function(n){n(u()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(p('Program "'+t[1]+'" berhasil dihapus.')),n(m()),a()})).catch((function(e){console.log(e),n(g('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(m()),a()}))}},j=function(e,t,a,n,o,s,c,d,h,b,f){return function(j){j(u()),j({type:r.a}),Object(i.b)(c).then((function(r){console.log(typeof r);var c=r,u=b?"active":"inactive";if("Video"===o)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(r){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var b={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:u,startDate:h};console.log(b),l(b).then((function(e){console.log("Success:",e.data),f.push("/content"),j(p('Content "'+a+'" berhasil ditambahkan.')),j(m())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(m())})),console.log(b)}));else if("Image"===o){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(r){d='<img src="'+r+'" style="width:100%;"/>',console.log(d);var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:u,startDate:h};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(p('Content "'+a+'" berhasil ditambahkan.')),j(m())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(m())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(r){var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:u,startDate:h};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(p('Content "'+a+'" berhasil ditambahkan.')),j(m())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(m())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var y={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:u,startDate:h};console.log(y),l(y).then((function(e){console.log("Success:",e.data),f.push("/content"),j(p('Content "'+a+'" berhasil ditambahkan.')),j(m())})).catch((function(e){console.error("Error:",e),j(g('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(m())})),console.log(y)}))}},y=function(e,t,a,n,o,s,c,d,h,b,f){return function(e){e(u()),e({type:r.a}),Object(i.b)(d).then((function(r){if(console.log(typeof r),"Video"===s)"string"===typeof h?h='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(h)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(h).then((function(r){h='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var d={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:h,startDate:b};console.log(d),l(d).then((function(t){console.log("Success:",t.data),f.push("/content"),e(p('Content "'+n+'" berhasil ditambahkan.')),e(m())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(m())})),console.log(d)}));else if("Image"===s){if("string"===typeof h)h='<img src="'+h+'" style="width:100%;"/>';else Object(i.b)(h).then((function(r){h='<img src="'+r+'" style="width:100%;"/>',console.log(h);var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:h,startDate:b};console.log(i),l(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(p('Content "'+n+'" berhasil ditambahkan.')),e(m())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(m())})),console.log(i)}))}else if("Pdf"===s){if("string"===typeof h)h='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+h+(h.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(h).then((function(r){var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:h='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b};console.log(i),l(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(p('Content "'+n+'" berhasil ditambahkan.')),e(m())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(m())})),console.log(i)}))}else h='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h+"</div></body></html>";console.log(h);var d={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:h,startDate:b};console.log(d),l(d).then((function(t){console.log("Success:",t.data),f.push("/content"),e(p('Content "'+n+'" berhasil ditambahkan.')),e(m())})).catch((function(t){console.error("Error:",t),e(g('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(m())})),console.log(d)}))}},v=function(e,t,a){return function(n){n(u()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(p('Content "'+t[1]+'" berhasil dihapus.')),n(m()),a()})).catch((function(e){console.log(e),n(g('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(m()),a()}))}},O=function(e,t,a,n,o,s,c){return function(l){l(u()),l({type:r.a});var h={email:e,password:t},b={};(a&&(b=Object.assign(b,{cobrandName:a})),o&&(b=Object.assign(b,{phoneNumber:o})),s&&(b=Object.assign(b,{address:s})),c&&(b=Object.assign(b,{password:c})),n)?Object(i.b)(n).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",h),console.log("newValues: ",b),Object(d.a)(h,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),h.password=c),Object(d.b)(h).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(p("Profil berhasil diubah.")),l(m())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(m())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(m())}))})):(console.log("whereValues: ",h),console.log("newValues: ",b),Object(d.a)(h,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),h.password=c),Object(d.b)(h).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(p("Profil berhasil diubah.")),l(m())})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(m())}))})).catch((function(e){console.error("Error:",e),l(g("Profil gagal diubah. Coba beberapa saat lagi.")),l(m())})))}}}}]);
//# sourceMappingURL=9.4c78cad7.chunk.js.map