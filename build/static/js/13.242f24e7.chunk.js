(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[13,4],{100:function(e,t,a){"use strict";a(2);var r=a(35),n=(a(102),a(1));t.a=function(e){var t=e.text,a=void 0===t?"Mohon Tunggu":t;return Object(n.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(n.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(n.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(n.jsx)(r.a,{}),Object(n.jsx)("p",{children:a})]})}},102:function(e,t,a){},1103:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(2),o=a(95),i=(a(646),a(173)),s=a(6),c=a(139),l=a(100),d=a(16),u=a(133),m=a(125),g=a(18),p=a.n(g),h=a(1);t.default=Object(d.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onEditProgram:function(t,a,r,n,o,i,s){return e(Object(c.g)(t,a,r,n,o,i,s))}}}))((function(e){var t=e.onEditProgram,a=e.isLoading,c=Object(n.useState)(!0),d=Object(r.a)(c,2),g=d[0],b=d[1],f=Object(n.useState)(),j=Object(r.a)(f,2),y=j[0],v=j[1],O=Object(n.useState)(),w=Object(r.a)(O,2),x=w[0],E=w[1],C=Object(s.g)(),q=JSON.parse(localStorage.getItem("userData")).email,N=localStorage.getItem("programSelected");return Object(n.useEffect)((function(){if(b(!0),console.log(N),N){var e={whereKeyValues:{cobrandEmail:q,_id:N}};p()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),v(e.data.programs[0]),console.log("This is ",y);var t=e.data.programs[0].startDate.split("T")[0];console.log(t),E(t),b(!1)})).catch((function(e){console.log(e),b(!1)}))}}),[]),g||a?Object(h.jsx)(l.a,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.a,{headingName:"Program",routes:[{path:"/cms/program",name:"On Going Program"},{path:"/cms/program/edit",name:"Edit Selected Program"}]}),Object(h.jsx)(i.a,{initialValues:{programName:y.programName,programDescription:y.ProgramDescription,startDate:x},validationSchema:u.g,validateOnChange:!0,onSubmit:function(e){t(N,q,e.programName,e.programDescription,"",e.startDate,C)},children:function(e){var t=e.handleChange,a=e.handleSubmit,r=e.handleBlur,n=(e.setFieldValue,e.values),o=e.errors,i=e.touched;return Object(h.jsx)("form",{onSubmit:a,children:Object(h.jsxs)("div",{className:"EditProgram",children:[Object(h.jsxs)("h1",{children:["Edit Selected Program: ",y.programName]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Title"}),Object(h.jsx)(m.a,{type:"text",name:"programName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:n.programName,onChange:t,onBlur:r}),i.programName&&Object(h.jsx)("span",{className:"message__error",children:o.programName})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Description"}),Object(h.jsx)(m.a,{type:"textarea",name:"programDescription",placeholder:"Type Something...",value:n.programDescription,onChange:t,onBlur:r}),i.programDescription&&Object(h.jsx)("span",{className:"message__error",children:o.programDescription})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Set Schedule"}),Object(h.jsx)(m.a,{type:"date",className:"form-group__input",name:"startDate",value:n.startDate,min:(new Date).toISOString().split("T")[0],onChange:t,onBlur:r}),i.startDate&&Object(h.jsx)("span",{className:"message__error",children:o.startDate})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Program"})})]})})}}),console.log(a),a?Object(h.jsx)(l.a,{}):null]})}))},125:function(e,t,a){"use strict";var r=a(2),n=(a(130),a(1));function o(e){var t=e.placeholder,a=e.type,r=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,d=e.min,u=e.disabled,m=e.isError;return"textarea"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:r,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,min:d,max:"9999-12-31",disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(o)},130:function(e,t,a){},133:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var r=a(184),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),password:r.e("Enter your password").required("Password is required")}),i=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),accountName:r.e("Enter your name").required("Name is required"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=r.d({email:r.e("Enter your email").required("Email is required").email("Email not valid"),cobrandName:r.e("Enter your brand name").required("Brand name is required"),thumbnail:r.c("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.e("Enter your address").required("Address is required"),password:r.e("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:r.e("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),programThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required")}),l=r.d({programName:r.e("Enter your program title").required("Program title is required"),programDescription:r.e("Enter the program description").required("Program description is required"),startDate:r.b("Insert start date").required("Date is required")}),d=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),contentThumbnail:r.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.b("Insert start date").required("Date is required"),isActive:r.a()}),u=r.d({contentName:r.e("Enter your content title").required("Content title is required"),contentDescription:r.e("Enter the content description").required("Content description is required"),contents:r.e("Enter the content description").required("Content description is required"),contentSource:r.e("Enter the content source").required("Content source is required"),startDate:r.b("Insert start date").required("Date is required")})},139:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"g",(function(){return f})),a.d(t,"d",(function(){return j})),a.d(t,"a",(function(){return y})),a.d(t,"e",(function(){return v})),a.d(t,"c",(function(){return O})),a.d(t,"f",(function(){return w}));var r=a(8),n=a(18),o=a.n(n),i=a(36),s=a(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return o()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},u=a(25),m=function(){return{type:r.f}},g=function(){return{type:r.d}},p=function(e,t){return{type:r.b,message:e,idMessage:t}},h=function(e,t){return{type:r.c,message:e,idMessage:t}},b=function(e,t,a,n,c,l){return function(d){d(m()),d({type:r.a}),Object(i.b)(n).then((function(r){console.log(typeof r);var n,i={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:r,startDate:c};console.log(i),(n=i,o()({method:"post",url:s.a+"/cobrand/programAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+t+'" berhasil ditambahkan.')),d(g())})).catch((function(e){console.error("Error:",e),d(p('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(g())})),console.log(i)}))}},f=function(e,t,a,n,o,s,l){return function(d){if(d(m()),d({type:r.a}),console.log("Photo is empty:",""===o),""===o){var u={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,startDate:s}};console.log(u),c(u).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+a+'" berhasil diubah.')),d(g())})).catch((function(e){console.error("Error:",e),d(p('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(g())}))}else{Object(i.b)(o).then((function(r){console.log(typeof r);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,programthumnail:r,startDate:s}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+a+'" berhasil diubah.')),d(g())})).catch((function(e){console.error("Error:",e),d(p('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(g())}))}))}}},j=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Program "'+t[1]+'" berhasil dihapus.')),n(g()),a()})).catch((function(e){console.log(e),n(p('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(g()),a()}))}},y=function(e,t,a,n,o,s,c,d,u,b,f){return function(j){j(m()),j({type:r.a}),Object(i.b)(c).then((function(r){console.log(typeof r);var c=r,m=b?"active":"inactive";if("Video"===o)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(r){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var b={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(b),l(b).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(g())})).catch((function(e){console.error("Error:",e),j(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(g())})),console.log(b)}));else if("Image"===o){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(r){d='<img src="'+r+'" style="width:100%;"/>',console.log(d);var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(g())})).catch((function(e){console.error("Error:",e),j(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(g())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(r){var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:m,startDate:u};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(g())})).catch((function(e){console.error("Error:",e),j(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(g())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var y={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(y),l(y).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+a+'" berhasil ditambahkan.')),j(g())})).catch((function(e){console.error("Error:",e),j(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(g())})),console.log(y)}))}},v=function(e,t,a,n,o,s,c,l,u,b,f){return function(e){e(m()),e({type:r.a});if("Video"===s)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(u).then((function(r){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var l={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:b};console.log(l),d(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(g())})).catch((function(t){console.error("Error:",t),e(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(g())})),console.log(l)}));else if("Image"===s){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(i.b)(u).then((function(r){u='<img src="'+r+'" style="width:100%;"/>',console.log(u);var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:b};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(g())})).catch((function(t){console.error("Error:",t),e(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(g())})),console.log(i)}))}else if("Pdf"===s){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(r){var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(g())})).catch((function(t){console.error("Error:",t),e(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(g())})),console.log(i)}))}else if("Artikel"===s){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(r){var i={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(g())})).catch((function(t){console.error("Error:",t),e(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(g())})),console.log(i)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var l={cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:b};console.log(l),d(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(g())})).catch((function(t){console.error("Error:",t),e(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(g())})),console.log(l)}},O=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Content "'+t[1]+'" berhasil dihapus.')),n(g()),a()})).catch((function(e){console.log(e),n(p('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(g()),a()}))}},w=function(e,t,a,n,o,s,c){return function(l){l(m()),l({type:r.a});var d={email:e,password:t},b={};(a&&(b=Object.assign(b,{cobrandName:a})),o&&(b=Object.assign(b,{phoneNumber:o})),s&&(b=Object.assign(b,{address:s})),c&&(b=Object.assign(b,{password:c})),n)?Object(i.b)(n).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",d),console.log("newValues: ",b),Object(u.a)(d,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})):(console.log("whereValues: ",d),console.log("newValues: ",b),Object(u.a)(d,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())})))}}},646:function(e,t,a){},95:function(e,t,a){"use strict";a(2);var r=a(7),n=(a(99),a(1));t.a=function(e){var t=e.headingName,a=e.routes,o=void 0===a?[]:a;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},t)}))})]})}},99:function(e,t,a){}}]);
//# sourceMappingURL=13.242f24e7.chunk.js.map