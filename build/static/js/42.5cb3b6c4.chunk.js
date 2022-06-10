(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[42],{115:function(e,t,n){"use strict";var a=n(2),r=(n(116),n(0));function o(e){var t=e.placeholder,n=e.type,a=e.onChange,o=e.onBlur,i=e.value,c=e.className,s=e.message,l=e.name,u=e.min,d=e.max,m=e.disabled,g=e.isError;return"textarea"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("textarea",{name:l,id:l,className:c,placeholder:t,onChange:a,onBlur:o,value:i,disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:s})})]}):"date"===n||"datetime-local"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:c,type:n,placeholder:t,onChange:a,onBlur:o,value:i,min:u,max:"9999-12-31",disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:s})})]}):"number"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:c,type:n,onChange:a,onBlur:o,value:i,min:u,max:d,disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:s})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:c,type:n,placeholder:t,onChange:a,onBlur:o,value:i,disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:s})})]})}t.a=Object(a.memo)(o)},116:function(e,t,n){},121:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"k",(function(){return s})),n.d(t,"l",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"i",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"h",(function(){return p})),n.d(t,"j",(function(){return h})),n.d(t,"n",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"m",(function(){return y}));var a=n(146),r=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),password:a.g("Enter your password").required("Password is required")}),i=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),accountName:a.g("Enter your name").required("Name is required"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),c=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),s=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),programThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required")}),l=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),startDate:a.c("Insert start date").required("Date is required")}),u=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description").required("Content description is required"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),contentThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),isActive:a.b(),topics:a.a().min(1),targetAudience:a.a().min(1)}),d=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description").required("Content description is required"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),startDate:a.c("Insert start date").required("Date is required")}),m=a.f({destination:a.a().min(1),messageSubject:a.g("Enter the message subject").required("Message Subject is required"),messageContent:a.g("Enter the message content").required("Message Content is required"),scheduleTime:a.c("Insert start date").required("Date is required"),mediaType:a.g("Enter the media type").required("Media type is required"),category:a.g("Enter the category").required("Category is required")}),g=a.f({audianceName:a.g("Enter your audience name").required("Audience Name is required")}),p=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),h=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),b=a.f({emailUser:a.g("Enter your email").required("Email is required").email("Email not valid"),userName:a.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:a.g("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),f=a.f({topicName:a.g("Enter topic name").required("Topic Name is required")}),y=a.f({controlParameterName:a.g("Enter category name").required("Category is required"),controlParameterValue:a.e().required("Number is required")})},122:function(e,t,n){"use strict";n.d(t,"g",(function(){return b})),n.d(t,"n",(function(){return f})),n.d(t,"k",(function(){return y})),n.d(t,"b",(function(){return j})),n.d(t,"l",(function(){return v})),n.d(t,"j",(function(){return E})),n.d(t,"m",(function(){return O})),n.d(t,"e",(function(){return w})),n.d(t,"a",(function(){return C})),n.d(t,"d",(function(){return x})),n.d(t,"f",(function(){return S})),n.d(t,"i",(function(){return T})),n.d(t,"c",(function(){return N})),n.d(t,"h",(function(){return q}));var a=n(8),r=n(18),o=n.n(r),i=n(37),c=n(20),s=function(e){return o()({method:"post",url:c.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:c.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:c.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},d=n(25),m=function(){return{type:a.f}},g=function(){return{type:a.d}},p=function(e,t){return{type:a.b,message:e,idMessage:t}},h=function(e,t){return{type:a.c,message:e,idMessage:t}},b=function(e,t,n,r,s,l){return function(u){u(m()),u({type:a.a}),Object(i.b)(r).then((function(a){console.log(typeof a);var r,i={cobrandEmail:e,programName:t,ProgramDescription:n,programthumnail:a,startDate:s};console.log(i),(r=i,o()({method:"post",url:c.a+"/cobrand/programAdd",data:r,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),u(h('Program "'+t+'" berhasil ditambahkan.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),u(g())})),console.log(i)}))}},f=function(e,t,n,r,o,c,l){return function(u){if(u(m()),u({type:a.a}),console.log("Photo is empty:",""===o),""===o){var d={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:r,startDate:c}};console.log(d),s(d).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),u(h('Program "'+n+'" berhasil diubah.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),u(g())}))}else{Object(i.b)(o).then((function(a){console.log(typeof a);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:r,programthumnail:a,startDate:c}};console.log(o),s(o).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),u(h('Program "'+n+'" berhasil diubah.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),u(g())}))}))}}},y=function(e,t,n){return function(r){r(m()),r({type:a.a});var i,s={whereValues:{cobrandEmail:e,_id:t[0]}};(i=s,o()({method:"post",url:c.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),r(h('Program "'+t[1]+'" berhasil dihapus.')),r(g()),n()})).catch((function(e){console.log(e),r(p('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(g()),n()}))}},j=function(e,t,n,r,o,c,s,u,d,b,f,y,j,v){return function(E){E(m()),E({type:a.a}),Object(i.b)(s).then((function(a){var s=[],m=[];y.map((function(e){s.push(e.value)})),j.map((function(e){m.push(e.value)})),console.log(typeof a);var O=a,w=f?"active":"inactive";if("Video"===o)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(u).then((function(a){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(a)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var f={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:c,contentThumbnail:O,contents:u,status:w,startDate:d,endDate:b,topics:s,targetAudiance:m};console.log(f),l(f).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),E(h('Content "'+n+'" berhasil ditambahkan.')),E(g())})).catch((function(e){console.error("Error:",e),E(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),E(g())})),console.log(f)}));else if("Image"===o){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(i.b)(u).then((function(a){u='<img src="'+a+'" style="width:100%;"/>',console.log(u);var i={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:c,contentThumbnail:O,contents:u,status:w,startDate:d,endDate:b,topics:s,targetAudiance:m};console.log(i),l(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),E(h('Content "'+n+'" berhasil ditambahkan.')),E(g())})).catch((function(e){console.error("Error:",e),E(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),E(g())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(a){var i={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:c,contentThumbnail:O,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:w,startDate:d,endDate:b,topics:s,targetAudiance:m};console.log(i),l(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),E(h('Content "'+n+'" berhasil ditambahkan.')),E(g())})).catch((function(e){console.error("Error:",e),E(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),E(g())})),console.log(i)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var C={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:c,contentThumbnail:O,contents:u,status:w,startDate:d,endDate:b,topics:s,targetAudiance:m};console.log(C),l(C).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),E(h('Content "'+n+'" berhasil ditambahkan.')),E(g())})).catch((function(e){console.error("Error:",e),E(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),E(g())})),console.log(C)}))}},v=function(e,t,n,r,o,c,s,l,d,b,f){return function(l){l(m()),l({type:a.a});if("Video"===c)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(a){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(a)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var m={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:n,contentName:r,contentDescription:o,contentType:c,contentSource:s,contents:d,startDate:b}};console.log(m),u(m).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+r+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(m)}));else if("Image"===c){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(a){d='<img src="'+a+'" style="width:100%;"/>',console.log(d);var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:n,contentName:r,contentDescription:o,contentType:c,contentSource:s,contents:d,startDate:b}};console.log(i),u(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+r+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(i)}))}else if("Pdf"===c){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(a){var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:n,contentName:r,contentDescription:o,contentType:c,contentSource:s,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b}};console.log(i),u(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+r+'" berhasil ditambahkan.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+r+'" gagal ditambahkan. Coba beberapa saat lagi.')),l(g())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var y={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:n,contentName:r,contentDescription:o,contentType:c,contentSource:s,contents:d,startDate:b}};console.log(y),u(y).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+r+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(y)}},E=function(e,t,n){return function(r){r(m()),r({type:a.a});var i,s={whereValues:{cobrandEmail:e,_id:t[0]}};(i=s,o()({method:"post",url:c.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),r(h('Content "'+t[1]+'" berhasil dihapus.')),r(g()),n()})).catch((function(e){console.log(e),r(p('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(g()),n()}))}},O=function(e,t,n,r,o,c,s){return function(l){l(m()),l({type:a.a});var u={email:e,password:t},b={};(n&&(b=Object.assign(b,{cobrandName:n})),o&&(b=Object.assign(b,{phoneNumber:o})),c&&(b=Object.assign(b,{address:c})),s&&(b=Object.assign(b,{password:s})),r)?Object(i.b)(r).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",u),console.log("newValues: ",b),Object(d.a)(u,b).then((function(e){console.log("Success:",e.data),s&&(console.log("YOI BRUH"),u.password=s),Object(d.b)(u).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})):(console.log("whereValues: ",u),console.log("newValues: ",b),Object(d.a)(u,b).then((function(e){console.log("Success:",e.data),s&&(console.log("YOI BRUH"),u.password=s),Object(d.b)(u).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())})))}},w=function(e,t,n,r,i,s,l,u){return function(d){d(m()),d({type:a.a});var b,f=r?i:"",y={destination:e.join(","),messageSubject:t,messageContent:n,scheduleTime:f,mediaType:s,category:l};console.log(y),(b=y,o()({method:"post",url:c.a+"/user/broadcastAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),u.push("/cms/notifications"),d(h("Notifikasi berhasil dikirim.")),d(g())})).catch((function(e){console.error("Error:",e),d(p("Notifikasi gagal dikirim. Coba beberapa saat lagi.")),d(g())})),console.log(y)}},C=function(e,t){return function(n){n(m()),n({type:a.a});var r,i={audianceName:e};console.log(i),(r=i,o()({method:"post",url:c.a+"/cms/audianceTargetAdd",data:r,headers:{"Content-Type":"application/json"}})).then((function(a){console.log("Success:",a.data),t.push("/tools/setting/target-audience"),n(h('Target pembaca "'+e+'" berhasil ditambahkan.')),n(g())})).catch((function(t){console.error("Error:",t),n(p('Target pembaca "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),n(g())})),console.log(i)}},x=function(e,t,n){return function(r){r(m()),r({type:a.a});var i,s={category:e,description:t};console.log(s),(i=s,o()({method:"post",url:c.a+"/cms/notificationCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),n.push("/tools/setting/notification-category"),r(h('Kategori Notifikasi "'+e+'" berhasil ditambahkan.')),r(g())})).catch((function(t){console.error("Error:",t),r(p('Kategori Notifikasi "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(g())})),console.log(s)}},S=function(e,t,n){return function(r){r(m()),r({type:a.a});var i,s={category:e,description:t};console.log(s),(i=s,o()({method:"post",url:c.a+"/cms/programCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),n.push("/tools/setting/program-category"),r(h('Kategori Program "'+e+'" berhasil ditambahkan.')),r(g())})).catch((function(t){console.error("Error:",t),r(p('Kategori Program "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(g())})),console.log(s)}},T=function(e,t,n,r,i,s,l,u){return function(d){d(m()),d({type:a.a});var b,f={userName:e,password:t,userType:n,cobrandEmail:r,userLevel:i,emailUser:s,phone:l};console.log(f),(b=f,o()({method:"post",url:c.a+"/cms/userAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),u.push("/tools/admin-staff"),d(h('User "'+e+'" berhasil ditambahkan.')),d(g())})).catch((function(t){console.error("Error:",t),d(p('User"'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(g())})),console.log(f)}},N=function(e,t){return function(n){n(m()),n({type:a.a});var r,i={topicName:e};console.log(i),(r=i,o()({method:"post",url:c.a+"/cms/contentTopicAdd",data:r,headers:{"Content-Type":"application/json"}})).then((function(a){console.log("Success:",a.data),t.push("/tools/setting/topic"),n(h('Topik konten "'+e+'" berhasil ditambahkan.')),n(g())})).catch((function(t){console.error("Error:",t),n(p('Topik konten "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),n(g())})),console.log(i)}},q=function(e,t,n,r,i){return function(s){s(m()),s({type:a.a});var l,u={cobrandEmail:e,controlParameterName:t,controlParameterValue:n,unit:r};console.log(u),(l=u,o()({method:"post",url:c.a+"/cobrand/configurationAdd",data:l,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),i.push("/tools/setting/screentime"),s(h('Standar Screentime "'+t+'" berhasil ditambahkan.')),s(g())})).catch((function(e){console.error("Error:",e),s(p('Standar Screentime "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),s(g())})),console.log(u)}}},1377:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(2),o=n(97),i=(n(868),n(145)),c=n(6),s=n(122),l=n(36),u=n(17),d=n(121),m=n(115),g=n(18),p=n.n(g),h=n(443),b=n.n(h),f=n(335),y=n(200),j=(n(482),n(337)),v=n.n(j),E=(n(618),n(869)),O=n.n(E),w=n(0);t.default=Object(u.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onEditContent:function(t,n,a,r,o,i,c,l,u,d,m){return e(Object(s.l)(t,n,a,r,o,i,c,l,u,d,m))}}}))((function(e){var t=e.onEditContent,n=e.isLoading,s=y.EditorState.createEmpty(),u=Object(r.useState)(s),g=Object(a.a)(u,2),h=g[0],j=g[1],E=function(e){j(e)},C=Object(r.useState)(s),x=Object(a.a)(C,2),S=x[0],T=x[1],N=function(e){T(e)},q=Object(r.useState)(!0),k=Object(a.a)(q,2),D=k[0],_=k[1],I=Object(r.useState)(),P=Object(a.a)(I,2),M=(P[0],P[1]),A=Object(r.useState)(),B=Object(a.a)(A,2),L=B[0],V=B[1],H=Object(r.useState)(),U=Object(a.a)(H,2),z=U[0],F=U[1],R=Object(r.useState)(""),K=Object(a.a)(R,2),J=K[0],Y=K[1],$=Object(r.useState)(b.a.createEmptyValue()),W=Object(a.a)($,2),G=(W[0],W[1]),Q=Object(r.useState)(b.a.createEmptyValue()),X=Object(a.a)(Q,2),Z=X[0],ee=X[1],te=Object(c.g)(),ne=JSON.parse(localStorage.getItem("userData")).email,ae=localStorage.getItem("contentSelected"),re={whereKeyValues:{cobrandEmail:ne}};return Object(r.useEffect)((function(){if(_(!0),console.log(ae),ae){var e={whereKeyValues:{cobrandEmail:ne,_id:ae}};p()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),V(e.data.contents[0]);var t=(new DOMParser).parseFromString(e.data.contents[0].contents,"text/html");if(console.log(t),"Artikel"===e.data.contents[0].contentType){var n=t.getElementById("contents");console.log("Ini adalah con1 outer"+n.outerHTML),console.log("Ini adalah con1 inner"+n.innerHTML);var a=O()(n.innerHTML);ee(b.a.createValueFromString(n.outerHTML,"html")),Y(n.outerHTML),T(y.EditorState.createWithContent(y.ContentState.createFromBlockArray(a.contentBlocks,a.entityMap)));var r=e.data.contents[0].contentDescription;console.log(r);var o=O()(r);G(b.a.createValueFromString(r.outerHTML,"html")),j(y.EditorState.createWithContent(y.ContentState.createFromBlockArray(o.contentBlocks,o.entityMap)))}else if("Image"===e.data.contents[0].contentType){var i=t.getElementsByTagName("img")[0].toString();Y(i.src)}else if("Video"===e.data.contents[0].contentType){var c=t.getElementsByTagName("iframe")[0];Y(c.src)}else if("Pdf"===e.data.contents[0].contentType){var s=t.getElementsByTagName("iframe")[0].src;s.includes("&embedded=true")&&(s=s.replace("&embedded=true","")),s.includes("http://docs.google.com/gview?url=")&&(s=s.replace("http://docs.google.com/gview?url=","")),Y(s)}var l=e.data.contents[0].startDate.split("T")[0];console.log(l),F(l),p()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:re,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),M(e.data.programs),_(!1)})).catch((function(e){console.log(e),_(!1)}))})).catch((function(e){console.log(e),_(!1)}))}}),[]),D?Object(w.jsx)(l.a,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(o.a,{headingName:"Content",routes:[{path:"/cms/content",name:"Content"},{path:"/cms/content/edit",name:"Edit Selected content"}]}),Object(w.jsx)(i.a,{initialValues:{programId:L.programId,contentName:L.contentName,contentDescription:L.contentDescription,contentType:L.contentType,contentSource:L.contentSource,contents:J,startDate:z},validationSchema:d.c,validateOnChange:!0,onSubmit:function(e){t(ae,ne,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,te)},children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.handleBlur,r=e.setFieldValue,o=e.values,i=e.errors,c=e.touched;return Object(w.jsx)("form",{onSubmit:n,children:Object(w.jsxs)("div",{className:"EditContent",children:[Object(w.jsxs)("h1",{children:["Edit Selected Content: ",L.contentName]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Content Type"}),Object(w.jsxs)("select",{name:"contentType",value:o.contentType,onChange:function(e){r("contentType",e.currentTarget.value),r("contents","")},children:[Object(w.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(w.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(w.jsx)("option",{value:"Image",children:"Image"}),Object(w.jsx)("option",{value:"Video",children:"Video"}),Object(w.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Title"}),Object(w.jsx)(m.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentName,onChange:t,onBlur:a}),c.contentName&&Object(w.jsx)("span",{className:"message__error",children:i.contentName})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Description"}),Object(w.jsx)(f.Editor,{editorState:h,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:E,values:o.contentDescription,name:"contentDescription",onChange:function(e){G(o.contentDescription),r("contentDescription",v()(Object(y.convertToRaw)(h.getCurrentContent()))),console.log(h),console.log(o.contentDescription)}})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Source"}),Object(w.jsx)(m.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentSource,onChange:t,onBlur:a}),c.contentSource&&Object(w.jsx)("span",{className:"message__error",children:i.contentSource})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Photo"}),Object(w.jsx)("img",{className:"photo",src:L.contentThumbnail}),Object(w.jsx)("br",{}),Object(w.jsx)(m.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contentThumbnail",t))}})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Contents"}),"Artikel"===o.contentType?Object(w.jsx)(f.Editor,{editorState:S,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:N,values:o.contents,name:"contents",onChange:function(e){ee(o.contents),r("contents",v()(Object(y.convertToRaw)(S.getCurrentContent()))),console.log(Z),console.log(o.contents),console.log(S)}}):null,"Image"===o.contentType?Object(w.jsx)(m.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,value:o.contents,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contents",t))}}):null,"Video"===o.contentType?Object(w.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:o.contents,onChange:t,onBlur:a}):null,"Pdf"===o.contentType?Object(w.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (just for pdf file)",value:o.contents,onChange:t,onBlur:a}):null,c.contents&&Object(w.jsx)("span",{className:"message__error",children:i.contents})]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Content"})})]})})}}),n?Object(w.jsx)(l.a,{}):null]})}))},868:function(e,t,n){},869:function(e,t,n){window,e.exports=function(e,t){return r={},n.m=a=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},i=function(e,t,n){var a,o=e.textContent;return""===o.trim()?{chunk:(a=n,{text:" ",inlines:[new r.OrderedSet],entities:[a],blocks:[]})}:{chunk:{text:o,inlines:Array(o.length).fill(t),entities:Array(o.length).fill(n),blocks:[]}}},c=function(){return{text:"\n",inlines:[new r.OrderedSet],entities:new Array(1),blocks:[]}},s=function(){return{text:"",inlines:[],entities:[],blocks:[]}},l=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new r.Map({})}]}},u=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new r.Map({})}]}},d=function(e){return{text:"\r ",inlines:[new r.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new r.Map({})}]}},m=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},g=new r.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),p={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function h(e){return e.style.textAlign?new r.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new r.Map({"margin-left":e.style.marginLeft}):void 0}var b=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,a.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,a.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return E}));var f=" ",y=new RegExp("&nbsp;","g"),j=!0;function v(e,t,n,r,o,f){var y=e.nodeName.toLowerCase();if(f){var E=f(y,e);if(E){var O=a.Entity.__create(E.type,E.mutability,E.data||{});return{chunk:d(O)}}}if("#text"===y&&"\n"!==e.textContent)return i(e,t,o);if("br"===y)return{chunk:c()};if("img"===y&&e instanceof HTMLImageElement){var w={};w.src=e.getAttribute&&e.getAttribute("src")||e.src,w.alt=e.alt,w.height=e.style.height,w.width=e.style.width,e.style.float&&(w.alignment=e.style.float);var C=a.Entity.__create("IMAGE","MUTABLE",w);return{chunk:d(C)}}if("video"===y&&e instanceof HTMLVideoElement){var x={};x.src=e.getAttribute&&e.getAttribute("src")||e.src,x.alt=e.alt,x.height=e.style.height,x.width=e.style.width,e.style.float&&(x.alignment=e.style.float);var S=a.Entity.__create("VIDEO","MUTABLE",x);return{chunk:d(S)}}if("iframe"===y&&e instanceof HTMLIFrameElement){var T={};T.src=e.getAttribute&&e.getAttribute("src")||e.src,T.height=e.height,T.width=e.width;var N=a.Entity.__create("EMBEDDED_LINK","MUTABLE",T);return{chunk:d(N)}}var q,k=function(e,t){var n=g.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(y,r);k&&("ul"===y||"ol"===y?(r=y,n+=1):("unordered-list-item"!==k&&"ordered-list-item"!==k&&(r="",n=-1),j?(q=l(k,h(e)),j=!1):q=u(k,n,h(e)))),q=q||s(),t=function(e,t,n){var a,r=p[e];if(r)a=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){var o=t;a=(a=n).withMutations((function(e){var t=o.style.color,n=o.style.backgroundColor,a=o.style.fontSize,r=o.style.fontFamily.replace(/^"|"$/g,""),i=o.style.fontWeight,c=o.style.textDecoration,s=o.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),a&&e.add("fontsize-".concat(a.replace(/px$/g,""))),r&&e.add("fontfamily-".concat(r)),"bold"===i&&e.add(p.strong),"underline"===c&&e.add(p.ins),"italic"===s&&e.add(p.em)})).toOrderedSet()}return a}(y,e,t);for(var D=e.firstChild;D;){var _=v(D,t,n,r,b(D)||o,f).chunk;q=m(q,_),D=D.nextSibling}return{chunk:q}}function E(e,t){var n,i,c,s=(n=t,i=e.trim().replace(y,f),(c=o(i))?(j=!0,{chunk:v(c,new r.OrderedSet,-1,"",void 0,n).chunk}):null);if(s){var l=s.chunk,u=new r.OrderedMap({});l.entities&&l.entities.forEach((function(e){e&&(u=u.set(e,a.Entity.__get(e)))}));var d=0;return{contentBlocks:l.text.split("\r").map((function(e,t){var n=d+e.length,o=l&&l.inlines.slice(d,n),i=l&&l.entities.slice(d,n),c=new r.List(o.map((function(e,t){var n={style:e,entity:null};return i[t]&&(n.entity=i[t]),a.CharacterMetadata.create(n)})));return d=n,new a.ContentBlock({key:Object(a.genKey)(),type:l&&l.blocks[t]&&l.blocks[t].type||"unstyled",depth:l&&l.blocks[t]&&l.blocks[t].depth,data:l&&l.blocks[t]&&l.blocks[t].data||new r.Map({}),text:e,characterList:c})})),entityMap:u}}return null}}],n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var a,r}(n(336),n(200))},97:function(e,t,n){"use strict";n(2);var a=n(7),r=(n(98),n(0));t.a=function(e){var t=e.headingName,n=e.routes,o=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},98:function(e,t,n){}}]);
//# sourceMappingURL=42.5cb3b6c4.chunk.js.map