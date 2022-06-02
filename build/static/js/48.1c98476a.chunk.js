(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[48,6],{108:function(e,t,r){"use strict";r(2);var a=r(7),n=(r(110),r(0));t.a=function(e){var t=e.headingName,r=e.routes,o=void 0===r?[]:r;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},t)}))})]})}},110:function(e,t,r){},130:function(e,t,r){"use strict";var a=r(2),n=(r(133),r(0));function o(e){var t=e.placeholder,r=e.type,a=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,d=e.min,u=e.disabled,m=e.isError;return"textarea"===r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:a,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:r,placeholder:t,onChange:a,onBlur:o,value:i,min:d,max:"9999-12-31",disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:r,placeholder:t,onChange:a,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(a.memo)(o)},133:function(e,t,r){},1354:function(e,t,r){"use strict";r.r(t);r(2);var a=r(108),n=(r(645),r(194)),o=r(6),i=r(151),s=r(36),c=r(17),l=r(144),d=r(130),u=r(0);t.default=Object(c.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddProgram:function(t,r,a,n,o,s){return e(Object(i.b)(t,r,a,n,o,s))}}}))((function(e){var t=e.onAddProgram,r=e.isLoading,i=Object(o.g)(),c=JSON.parse(localStorage.getItem("userData")).email;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a.a,{headingName:"Program",routes:[{path:"/cms/program",name:"On Going Program"},{path:"/cms/program/add",name:"Create new Program"}]}),Object(u.jsx)(n.a,{initialValues:{programName:"",programDescription:"",programThumbnail:"",startDate:(new Date).toISOString().split("T")[0]},validationSchema:l.f,validateOnChange:!0,onSubmit:function(e){t(c,e.programName,e.programDescription,e.programThumbnail,e.startDate,i)},children:function(e){var t=e.handleChange,r=e.handleSubmit,a=e.handleBlur,n=e.setFieldValue,o=e.values,i=e.errors,s=e.touched;return Object(u.jsx)("form",{onSubmit:r,children:Object(u.jsxs)("div",{className:"AddProgram",children:[Object(u.jsx)("h1",{children:"Create New Program"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)(d.a,{type:"text",name:"programName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.programName,onChange:t,onBlur:a}),s.programName&&Object(u.jsx)("span",{className:"message__error",children:i.programName})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Description"}),Object(u.jsx)(d.a,{type:"textarea",name:"programDescription",placeholder:"Type Something...",value:o.programDescription,onChange:t,onBlur:a}),s.programDescription&&Object(u.jsx)("span",{className:"message__error",children:i.programDescription})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Photo"}),Object(u.jsx)(d.a,{type:"file",className:"form-group__input",name:"programThumbnail",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),n("programThumbnail",t))}}),s.programThumbnail&&Object(u.jsx)("span",{className:"message__error",children:i.programThumbnail})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Set Schedule"}),Object(u.jsx)(d.a,{type:"date",className:"form-group__input",name:"startDate",min:(new Date).toISOString().split("T")[0],value:o.startDate,onChange:t,onBlur:a}),s.startDate&&Object(u.jsx)("span",{className:"message__error",children:i.startDate})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Post Program"})})]})})}}),console.log(r),r?Object(u.jsx)(s.a,{}):null]})}))},144:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"f",(function(){return c})),r.d(t,"g",(function(){return l})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var a=r(210),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=a.d({email:a.e("Enter your email").required("Email is required").email("Email not valid"),password:a.e("Enter your password").required("Password is required")}),i=a.d({email:a.e("Enter your email").required("Email is required").email("Email not valid"),accountName:a.e("Enter your name").required("Name is required"),cobrandName:a.e("Enter your brand name").required("Brand name is required"),thumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:a.e("Enter your address").required("Address is required"),password:a.e("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:a.e("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=a.d({email:a.e("Enter your email").required("Email is required").email("Email not valid"),cobrandName:a.e("Enter your brand name").required("Brand name is required"),thumbnail:a.c("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.e("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:a.e("Enter your address").required("Address is required"),password:a.e("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:a.e("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=a.d({programName:a.e("Enter your program title").required("Program title is required"),programDescription:a.e("Enter the program description").required("Program description is required"),programThumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.b("Insert start date").required("Date is required")}),l=a.d({programName:a.e("Enter your program title").required("Program title is required"),programDescription:a.e("Enter the program description").required("Program description is required"),startDate:a.b("Insert start date").required("Date is required")}),d=a.d({contentName:a.e("Enter your content title").required("Content title is required"),contentDescription:a.e("Enter the content description").required("Content description is required"),contents:a.e("Enter the content description").required("Content description is required"),contentSource:a.e("Enter the content source").required("Content source is required"),contentThumbnail:a.c("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.b("Insert start date").required("Date is required"),isActive:a.a()}),u=a.d({contentName:a.e("Enter your content title").required("Content title is required"),contentDescription:a.e("Enter the content description").required("Content description is required"),contents:a.e("Enter the content description").required("Content description is required"),contentSource:a.e("Enter the content source").required("Content source is required"),startDate:a.b("Insert start date").required("Date is required")})},151:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"g",(function(){return f})),r.d(t,"d",(function(){return j})),r.d(t,"a",(function(){return y})),r.d(t,"e",(function(){return v})),r.d(t,"c",(function(){return w})),r.d(t,"f",(function(){return O}));var a=r(8),n=r(18),o=r.n(n),i=r(37),s=r(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return o()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},u=r(26),m=function(){return{type:a.f}},g=function(){return{type:a.d}},p=function(e,t){return{type:a.b,message:e,idMessage:t}},h=function(e,t){return{type:a.c,message:e,idMessage:t}},b=function(e,t,r,n,c,l){return function(d){d(m()),d({type:a.a}),Object(i.b)(n).then((function(a){console.log(typeof a);var n,i={cobrandEmail:e,programName:t,ProgramDescription:r,programthumnail:a,startDate:c};console.log(i),(n=i,o()({method:"post",url:s.a+"/cobrand/programAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+t+'" berhasil ditambahkan.')),d(g())})).catch((function(e){console.error("Error:",e),d(p('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(g())})),console.log(i)}))}},f=function(e,t,r,n,o,s,l){return function(d){if(d(m()),d({type:a.a}),console.log("Photo is empty:",""===o),""===o){var u={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:r,ProgramDescription:n,startDate:s}};console.log(u),c(u).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+r+'" berhasil diubah.')),d(g())})).catch((function(e){console.error("Error:",e),d(p('Program "'+r+'" gagal diubah. Coba beberapa saat lagi.')),d(g())}))}else{Object(i.b)(o).then((function(a){console.log(typeof a);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:r,ProgramDescription:n,programthumnail:a,startDate:s}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+r+'" berhasil diubah.')),d(g())})).catch((function(e){console.error("Error:",e),d(p('Program "'+r+'" gagal diubah. Coba beberapa saat lagi.')),d(g())}))}))}}},j=function(e,t,r){return function(n){n(m()),n({type:a.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Program "'+t[1]+'" berhasil dihapus.')),n(g()),r()})).catch((function(e){console.log(e),n(p('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(g()),r()}))}},y=function(e,t,r,n,o,s,c,d,u,b,f){return function(j){j(m()),j({type:a.a}),Object(i.b)(c).then((function(a){console.log(typeof a);var c=a,m=b?"active":"inactive";if("Video"===o)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(a){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(a)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var b={cobrandEmail:e,programId:t,contentName:r,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(b),l(b).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+r+'" berhasil ditambahkan.')),j(g())})).catch((function(e){console.error("Error:",e),j(p('Content "'+r+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(g())})),console.log(b)}));else if("Image"===o){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(a){d='<img src="'+a+'" style="width:100%;"/>',console.log(d);var i={cobrandEmail:e,programId:t,contentName:r,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+r+'" berhasil ditambahkan.')),j(g())})).catch((function(e){console.error("Error:",e),j(p('Content "'+r+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(g())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(a){var i={cobrandEmail:e,programId:t,contentName:r,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:m,startDate:u};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/content"),j(h('Content "'+r+'" berhasil ditambahkan.')),j(g())})).catch((function(e){console.error("Error:",e),j(p('Content "'+r+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(g())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var y={cobrandEmail:e,programId:t,contentName:r,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:c,contents:d,status:m,startDate:u};console.log(y),l(y).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),j(h('Content "'+r+'" berhasil ditambahkan.')),j(g())})).catch((function(e){console.error("Error:",e),j(p('Content "'+r+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(g())})),console.log(y)}))}},v=function(e,t,r,n,o,s,c,l,u,b,f){return function(e){e(m()),e({type:a.a});if("Video"===s)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(u).then((function(a){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(a)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var l={cobrandEmail:t,programId:r,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:b};console.log(l),d(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(g())})).catch((function(t){console.error("Error:",t),e(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(g())})),console.log(l)}));else if("Image"===s){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(i.b)(u).then((function(a){u='<img src="'+a+'" style="width:100%;"/>',console.log(u);var i={cobrandEmail:t,programId:r,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:b};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(g())})).catch((function(t){console.error("Error:",t),e(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(g())})),console.log(i)}))}else if("Pdf"===s){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(a){var i={cobrandEmail:t,programId:r,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(g())})).catch((function(t){console.error("Error:",t),e(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(g())})),console.log(i)}))}else if("Artikel"===s){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(a){var i={cobrandEmail:t,programId:r,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b};console.log(i),d(i).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(g())})).catch((function(t){console.error("Error:",t),e(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(g())})),console.log(i)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var l={cobrandEmail:t,programId:r,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:b};console.log(l),d(l).then((function(t){console.log("Success:",t.data),f.push("/content"),e(h('Content "'+n+'" berhasil ditambahkan.')),e(g())})).catch((function(t){console.error("Error:",t),e(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(g())})),console.log(l)}},w=function(e,t,r){return function(n){n(m()),n({type:a.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Content "'+t[1]+'" berhasil dihapus.')),n(g()),r()})).catch((function(e){console.log(e),n(p('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(g()),r()}))}},O=function(e,t,r,n,o,s,c){return function(l){l(m()),l({type:a.a});var d={email:e,password:t},b={};(r&&(b=Object.assign(b,{cobrandName:r})),o&&(b=Object.assign(b,{phoneNumber:o})),s&&(b=Object.assign(b,{address:s})),c&&(b=Object.assign(b,{password:c})),n)?Object(i.b)(n).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",d),console.log("newValues: ",b),Object(u.a)(d,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})):(console.log("whereValues: ",d),console.log("newValues: ",b),Object(u.a)(d,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())})))}}},645:function(e,t,r){}}]);
//# sourceMappingURL=48.1c98476a.chunk.js.map