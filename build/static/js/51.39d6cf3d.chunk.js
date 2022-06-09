(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[51],{101:function(e,t,a){},119:function(e,t,a){"use strict";var r=a(2),n=(a(120),a(0));function o(e){var t=e.placeholder,a=e.type,r=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,d=e.min,u=e.disabled,m=e.isError;return"textarea"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:r,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===a||"datetime-local"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,min:d,max:"9999-12-31",disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,disabled:u}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(o)},120:function(e,t,a){},1243:function(e,t,a){},126:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"j",(function(){return c})),a.d(t,"k",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return u})),a.d(t,"h",(function(){return m})),a.d(t,"a",(function(){return g})),a.d(t,"g",(function(){return p})),a.d(t,"i",(function(){return h})),a.d(t,"l",(function(){return b}));var r=a(155),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=r.e({email:r.f("Enter your email").required("Email is required").email("Email not valid"),password:r.f("Enter your password").required("Password is required")}),i=r.e({email:r.f("Enter your email").required("Email is required").email("Email not valid"),accountName:r.f("Enter your name").required("Name is required"),cobrandName:r.f("Enter your brand name").required("Brand name is required"),thumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.f("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.f("Enter your address").required("Address is required"),password:r.f("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.f("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=r.e({email:r.f("Enter your email").required("Email is required").email("Email not valid"),cobrandName:r.f("Enter your brand name").required("Brand name is required"),thumbnail:r.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.f("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.f("Enter your address").required("Address is required"),password:r.f("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:r.f("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=r.e({programName:r.f("Enter your program title").required("Program title is required"),programDescription:r.f("Enter the program description").required("Program description is required"),programThumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.c("Insert start date").required("Date is required")}),l=r.e({programName:r.f("Enter your program title").required("Program title is required"),programDescription:r.f("Enter the program description").required("Program description is required"),startDate:r.c("Insert start date").required("Date is required")}),d=r.e({contentName:r.f("Enter your content title").required("Content title is required"),contentDescription:r.f("Enter the content description").required("Content description is required"),contents:r.f("Enter the content description").required("Content is required"),contentSource:r.f("Enter the content source").required("Content source is required"),contentThumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required"),isActive:r.b(),topics:r.a().min(1),targetAudience:r.a().min(1)}),u=r.e({contentName:r.f("Enter your content title").required("Content title is required"),contentDescription:r.f("Enter the content description").required("Content description is required"),contents:r.f("Enter the content description").required("Content is required"),contentSource:r.f("Enter the content source").required("Content source is required"),startDate:r.c("Insert start date").required("Date is required")}),m=r.e({destination:r.a().min(1),messageSubject:r.f("Enter the message subject").required("Message Subject is required"),messageContent:r.f("Enter the message content").required("Message Content is required"),scheduleTime:r.c("Insert start date").required("Date is required"),mediaType:r.f("Enter the media type").required("Media type is required"),category:r.f("Enter the category").required("Category is required")}),g=r.e({audianceName:r.f("Enter your audience name").required("Audience Name is required")}),p=r.e({category:r.f("Enter category name").required("Category is required"),description:r.f("Enter description").required("Description is required")}),h=r.e({category:r.f("Enter category name").required("Category is required"),description:r.f("Enter description").required("Description is required")}),b=r.e({emailUser:r.f("Enter your email").required("Email is required").email("Email not valid"),userName:r.f("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:r.f("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),password:r.f("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")})},127:function(e,t,a){"use strict";a.d(t,"f",(function(){return b})),a.d(t,"l",(function(){return f})),a.d(t,"i",(function(){return y})),a.d(t,"b",(function(){return j})),a.d(t,"j",(function(){return v})),a.d(t,"h",(function(){return q})),a.d(t,"k",(function(){return w})),a.d(t,"d",(function(){return E})),a.d(t,"a",(function(){return C})),a.d(t,"c",(function(){return O})),a.d(t,"e",(function(){return x})),a.d(t,"g",(function(){return N}));var r=a(8),n=a(18),o=a.n(n),i=a(37),s=a(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return o()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},u=a(25),m=function(){return{type:r.f}},g=function(){return{type:r.d}},p=function(e,t){return{type:r.b,message:e,idMessage:t}},h=function(e,t){return{type:r.c,message:e,idMessage:t}},b=function(e,t,a,n,c,l){return function(d){d(m()),d({type:r.a}),Object(i.b)(n).then((function(r){console.log(typeof r);var n,i={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:r,startDate:c};console.log(i),(n=i,o()({method:"post",url:s.a+"/cobrand/programAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+t+'" berhasil ditambahkan.')),d(g())})).catch((function(e){console.error("Error:",e),d(p('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(g())})),console.log(i)}))}},f=function(e,t,a,n,o,s,l){return function(d){if(d(m()),d({type:r.a}),console.log("Photo is empty:",""===o),""===o){var u={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,startDate:s}};console.log(u),c(u).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+a+'" berhasil diubah.')),d(g())})).catch((function(e){console.error("Error:",e),d(p('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(g())}))}else{Object(i.b)(o).then((function(r){console.log(typeof r);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,programthumnail:r,startDate:s}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),d(h('Program "'+a+'" berhasil diubah.')),d(g())})).catch((function(e){console.error("Error:",e),d(p('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),d(g())}))}))}}},y=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Program "'+t[1]+'" berhasil dihapus.')),n(g()),a()})).catch((function(e){console.log(e),n(p('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(g()),a()}))}},j=function(e,t,a,n,o,s,c,d,u,b,f,y,j,v){return function(q){q(m()),q({type:r.a}),Object(i.b)(c).then((function(r){var c=[],m=[];y.map((function(e){c.push(e.value)})),j.map((function(e){m.push(e.value)})),console.log(typeof r);var w=r,E=f?"active":"inactive";if("Video"===o)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(r){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var f={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:w,contents:d,status:E,startDate:u,endDate:b,topics:c,targetAudiance:m};console.log(f),l(f).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(f)}));else if("Image"===o){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(r){d='<img src="'+r+'" style="width:100%;"/>',console.log(d);var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:w,contents:d,status:E,startDate:u,endDate:b,topics:c,targetAudiance:m};console.log(i),l(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(r){var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:w,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:E,startDate:u,endDate:b,topics:c,targetAudiance:m};console.log(i),l(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var C={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:w,contents:d,status:E,startDate:u,endDate:b,topics:c,targetAudiance:m};console.log(C),l(C).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(C)}))}},v=function(e,t,a,n,o,s,c,l,u,b,f){return function(l){l(m()),l({type:r.a});if("Video"===s)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(u).then((function(r){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var m={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:b}};console.log(m),d(m).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+n+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(m)}));else if("Image"===s){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(i.b)(u).then((function(r){u='<img src="'+r+'" style="width:100%;"/>',console.log(u);var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:b}};console.log(i),d(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+n+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(i)}))}else if("Pdf"===s){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(r){var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b}};console.log(i),d(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+n+'" berhasil ditambahkan.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),l(g())})),console.log(i)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var y={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:u,startDate:b}};console.log(y),d(y).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+n+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(y)}},q=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Content "'+t[1]+'" berhasil dihapus.')),n(g()),a()})).catch((function(e){console.log(e),n(p('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(g()),a()}))}},w=function(e,t,a,n,o,s,c){return function(l){l(m()),l({type:r.a});var d={email:e,password:t},b={};(a&&(b=Object.assign(b,{cobrandName:a})),o&&(b=Object.assign(b,{phoneNumber:o})),s&&(b=Object.assign(b,{address:s})),c&&(b=Object.assign(b,{password:c})),n)?Object(i.b)(n).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",d),console.log("newValues: ",b),Object(u.a)(d,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})):(console.log("whereValues: ",d),console.log("newValues: ",b),Object(u.a)(d,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),d.password=c),Object(u.b)(d).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())})))}},E=function(e,t,a,n,i,c,l,d){return function(u){u(m()),u({type:r.a});var b,f=n?i:"",y={destination:e.join(","),messageSubject:t,messageContent:a,scheduleTime:f,mediaType:c,category:l};console.log(y),(b=y,o()({method:"post",url:s.a+"/user/broadcastAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),d.push("/cms/notifications"),u(h("Notifikasi berhasil dikirim.")),u(g())})).catch((function(e){console.error("Error:",e),u(p("Notifikasi gagal dikirim. Coba beberapa saat lagi.")),u(g())})),console.log(y)}},C=function(e,t){return function(a){a(m()),a({type:r.a});var n,i={audianceName:e};console.log(i),(n=i,o()({method:"post",url:s.a+"/cms/audianceTargetAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(r){console.log("Success:",r.data),t.push("/tools/setting/target-audience"),a(h('Target pembaca "'+e+'" berhasil ditambahkan.')),a(g())})).catch((function(t){console.error("Error:",t),a(p('Target pembaca "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(g())})),console.log(i)}},O=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={category:e,description:t};console.log(c),(i=c,o()({method:"post",url:s.a+"/cms/notificationCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),a.push("/tools/setting/notification-category"),n(h('Kategori Notifikasi "'+e+'" berhasil ditambahkan.')),n(g())})).catch((function(t){console.error("Error:",t),n(p('Kategori Notifikasi "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),n(g())})),console.log(c)}},x=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={category:e,description:t};console.log(c),(i=c,o()({method:"post",url:s.a+"/cms/programCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),a.push("/tools/setting/notification-category"),n(h('Kategori Program "'+e+'" berhasil ditambahkan.')),n(g())})).catch((function(t){console.error("Error:",t),n(p('Kategori Program "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),n(g())})),console.log(c)}},N=function(e,t,a,n,i,c,l,d){return function(u){u(m()),u({type:r.a});var b,f={userName:e,password:t,userType:a,cobrandEmail:n,userLevel:i,emailUser:c,phone:l};console.log(f),(b=f,o()({method:"post",url:s.a+"/cms/userAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),d.push("/tools/admin-staff"),u(h('User "'+e+'" berhasil ditambahkan.')),u(g())})).catch((function(t){console.error("Error:",t),u(p('User"'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),u(g())})),console.log(f)}}},1413:function(e,t,a){"use strict";a.r(t);a(2);var r=a(99),n=(a(1243),a(154)),o=a(6),i=a(127),s=a(36),c=a(17),l=a(126),d=a(119),u=a(0);t.default=Object(c.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddProgCategory:function(t,a,r){return e(Object(i.e)(t,a,r))}}}))((function(e){var t=e.onAddProgCategory,a=e.isLoading,i=Object(o.g)();return JSON.parse(localStorage.getItem("userData")).email,Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.a,{headingName:"Kategori Program",routes:[{path:"/tools/setting/program-category",name:"Kategori Notifikasi"},{path:"/tools/setting/program-category/add",name:"Tambah"}]}),Object(u.jsx)(n.a,{initialValues:{category:"",description:""},validationSchema:l.i,validateOnChange:!0,onSubmit:function(e){t(e.category,e.description,i)},children:function(e){var t=e.handleChange,a=e.handleSubmit,r=e.handleBlur,n=(e.setFieldValue,e.values),o=e.errors,i=e.touched;return Object(u.jsx)("form",{onSubmit:a,children:Object(u.jsxs)("div",{className:"AddProgCategory",children:[Object(u.jsx)("h1",{children:"Tambah"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Nama Kategori Program"}),Object(u.jsx)(d.a,{type:"text",name:"category",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:n.category,onChange:t,onBlur:r}),i.category&&Object(u.jsx)("span",{className:"message__error",children:o.category})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Deskripsi"}),Object(u.jsx)(d.a,{type:"text",name:"description",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:n.description,onChange:t,onBlur:r}),i.description&&Object(u.jsx)("span",{className:"message__error",children:o.description})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Tambah"})})]})})}}),console.log(a),a?Object(u.jsx)(s.a,{}):null]})}))},99:function(e,t,a){"use strict";a(2);var r=a(7),n=(a(101),a(0));t.a=function(e){var t=e.headingName,a=e.routes,o=void 0===a?[]:a;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},t)}))})]})}}}]);
//# sourceMappingURL=51.39d6cf3d.chunk.js.map