(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[45],{114:function(e,t,n){"use strict";var a=n(2),r=(n(115),n(0));function o(e){var t=e.placeholder,n=e.type,a=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,u=e.min,d=e.max,m=e.disabled,g=e.isError;return"textarea"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:a,onBlur:o,value:i,disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]}):"date"===n||"datetime-local"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:s,type:n,placeholder:t,onChange:a,onBlur:o,value:i,min:u,max:"9999-12-31",disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]}):"number"===n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:s,type:n,onChange:a,onBlur:o,value:i,min:u,max:d,disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:l,className:s,type:n,placeholder:t,onChange:a,onBlur:o,value:i,disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(a.memo)(o)},115:function(e,t,n){},120:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"o",(function(){return m})),n.d(t,"i",(function(){return g})),n.d(t,"a",(function(){return p})),n.d(t,"h",(function(){return h})),n.d(t,"j",(function(){return b})),n.d(t,"n",(function(){return f})),n.d(t,"d",(function(){return j})),n.d(t,"m",(function(){return y}));var a=n(140),r=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),password:a.g("Enter your password").required("Password is required")}),i=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),accountName:a.g("Enter your name").required("Name is required"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=a.f({email:a.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:a.g("Enter your brand name").required("Brand name is required"),thumbnail:a.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:a.g("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),address:a.g("Enter your address").required("Address is required"),password:a.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:a.g("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),programThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),category:a.g(),targetAudiance:a.a().min(1,"Pilih minimal 1"),contentPrograms:a.a().min(1).of(a.f({namaTahapan:a.g().required("Nama Tahapan harus diisi"),contentName:a.g().required("Judul Tahapan harus diisi"),contents:a.g().required("Isi Tahapan harus diisi"),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),answerKey:a.g().when("category",{is:"Ujian",then:a.g().required("Kunci Jawaban harus diisi"),otherwise:a.g()})}))}),l=a.f({programName:a.g("Enter your program title").required("Program title is required"),programDescription:a.g("Enter the program description").required("Program description is required"),startDate:a.c("Insert start date").required("Date is required")}),u=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description").required("Content description is required"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),contentThumbnail:a.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:a.c("Insert start date").required("Date is required"),endDate:a.c("Insert end date").required("Date is required"),isActive:a.b(),topics:a.a().min(1),targetAudience:a.a().min(1)}),d=a.f({contentName:a.g("Enter your content title").required("Content title is required"),contentDescription:a.g("Enter the content description").required("Content description is required"),contents:a.g("Enter the content description").required("Content is required"),contentSource:a.g("Enter the content source").required("Content source is required"),startDate:a.c("Insert start date").required("Date is required")}),m=a.f({nameUser:a.g("Enter your content title").required("User name is required"),emailUser:a.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:a.c("Insert start date").required("Date is required")}),g=a.f({destination:a.a().min(1),messageSubject:a.g("Enter the message subject").required("Message Subject is required"),messageContent:a.g("Enter the message content").required("Message Content is required"),scheduleTime:a.c("Insert start date").required("Date is required"),mediaType:a.g("Enter the media type").required("Media type is required"),category:a.g("Enter the category").required("Category is required")}),p=a.f({audianceName:a.g("Enter your audience name").required("Audience Name is required")}),h=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),b=a.f({category:a.g("Enter category name").required("Category is required"),description:a.g("Enter description").required("Description is required")}),f=a.f({emailUser:a.g("Enter your email").required("Email is required").email("Email not valid"),userName:a.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:a.g("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),password:a.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),j=a.f({topicName:a.g("Enter topic name").required("Topic Name is required")}),y=a.f({controlParameterName:a.g("Enter category name").required("Category is required"),controlParameterValue:a.e().required("Number is required")})},121:function(e,t,n){"use strict";n.d(t,"g",(function(){return b})),n.d(t,"o",(function(){return f})),n.d(t,"k",(function(){return j})),n.d(t,"b",(function(){return y})),n.d(t,"m",(function(){return v})),n.d(t,"j",(function(){return C})),n.d(t,"n",(function(){return O})),n.d(t,"e",(function(){return q})),n.d(t,"a",(function(){return E})),n.d(t,"d",(function(){return w})),n.d(t,"f",(function(){return N})),n.d(t,"i",(function(){return x})),n.d(t,"c",(function(){return T})),n.d(t,"h",(function(){return S})),n.d(t,"l",(function(){return D}));var a=n(8),r=n(18),o=n.n(r),i=n(37),s=n(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},d=n(25),m=function(){return{type:a.f}},g=function(){return{type:a.d}},p=function(e,t){return{type:a.b,message:e,idMessage:t}},h=function(e,t){return{type:a.c,message:e,idMessage:t}},b=function(e,t,n,r,c,l,u,d,b,f){return function(j){j(m()),j({type:a.a}),Object(i.b)(r).then((function(a){console.log(typeof a);for(var r=a,i=[],m=0;m<b.length;m++){for(var y=b[m],v={},C=0;C<y.response.length;C++)v[y.response[C]]=0;var O={nomerUrutTahapan:y.nomerUrutTahapan,namaTahapan:y.namaTahapan,contentName:y.contentName,contentType:y.contentType,contentSource:y.contentSource,contents:y.contents,startDate:y.startDate,endDate:y.endDate,topics:y.topics,targetAudiance:y.targetAudiance,respons:v,answerKey:y.answerKey};i.push(O)}var q=[];for(C=0;C<d.length;C++)q.push(d[C].value);var E,w={cobrandEmail:e,programName:t,ProgramDescription:n,programthumnail:r,startDate:c,endDate:l,category:u,targetAudiance:q,contentPrograms:i};console.log(w),(E=w,o()({method:"post",url:s.a+"/cobrand/v2-programAdd",data:E,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),f.push("/cms/program"),j(h('Program "'+t+'" berhasil ditambahkan.')),j(g())})).catch((function(e){console.error("Error:",e),j(p('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(g())})),console.log(w)}))}},f=function(e,t,n,r,o,s,l){return function(u){if(u(m()),u({type:a.a}),console.log("Photo is empty:",""===o),""===o){var d={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:r,startDate:s}};console.log(d),c(d).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),u(h('Program "'+n+'" berhasil diubah.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),u(g())}))}else{Object(i.b)(o).then((function(a){console.log(typeof a);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:n,ProgramDescription:r,programthumnail:a,startDate:s}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),u(h('Program "'+n+'" berhasil diubah.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),u(g())}))}))}}},j=function(e,t,n){return function(r){r(m()),r({type:a.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),r(h('Program "'+t[1]+'" berhasil dihapus.')),r(g()),n()})).catch((function(e){console.log(e),r(p('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(g()),n()}))}},y=function(e,t,n,r,o,s,c,u,d,b,f,j,y,v){return function(C){C(m()),C({type:a.a}),Object(i.b)(c).then((function(a){var c=[],m=[];j.map((function(e){c.push(e.value)})),y.map((function(e){m.push(e.value)})),console.log(typeof a);var O=a,q=f?"active":"inactive";if("Video"===o)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(u).then((function(a){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(a)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var f={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:O,contents:u,status:q,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(f),l(f).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),C(h('Content "'+n+'" berhasil ditambahkan.')),C(g())})).catch((function(e){console.error("Error:",e),C(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),C(g())})),console.log(f)}));else if("Image"===o){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(i.b)(u).then((function(a){u='<img src="'+a+'" style="width:100%;"/>',console.log(u);var i={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:O,contents:u,status:q,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(i),l(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),C(h('Content "'+n+'" berhasil ditambahkan.')),C(g())})).catch((function(e){console.error("Error:",e),C(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),C(g())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(a){var i={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:O,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:q,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(i),l(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),C(h('Content "'+n+'" berhasil ditambahkan.')),C(g())})).catch((function(e){console.error("Error:",e),C(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),C(g())})),console.log(i)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var E={cobrandEmail:e,programId:t,contentName:n,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:O,contents:u,status:q,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(E),l(E).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),C(h('Content "'+n+'" berhasil ditambahkan.')),C(g())})).catch((function(e){console.error("Error:",e),C(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),C(g())})),console.log(E)}))}},v=function(e,t,n,r,o,s,c,l,d,b,f){return function(l){l(m()),l({type:a.a});if("Video"===s)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(a){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(a)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var m={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:n,contentName:r,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(m),u(m).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+r+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(m)}));else if("Image"===s){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(a){d='<img src="'+a+'" style="width:100%;"/>',console.log(d);var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:n,contentName:r,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(i),u(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+r+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(i)}))}else if("Pdf"===s){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(a){var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:n,contentName:r,contentDescription:o,contentType:s,contentSource:c,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+a+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b}};console.log(i),u(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+r+'" berhasil ditambahkan.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+r+'" gagal ditambahkan. Coba beberapa saat lagi.')),l(g())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var j={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:n,contentName:r,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(j),u(j).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+r+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(j)}},C=function(e,t,n){return function(r){r(m()),r({type:a.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),r(h('Content "'+t[1]+'" berhasil dihapus.')),r(g()),n()})).catch((function(e){console.log(e),r(p('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(g()),n()}))}},O=function(e,t,n,r,o,s,c){return function(l){l(m()),l({type:a.a});var u={email:e,password:t},b={};(n&&(b=Object.assign(b,{cobrandName:n})),o&&(b=Object.assign(b,{phoneNumber:o})),s&&(b=Object.assign(b,{address:s})),c&&(b=Object.assign(b,{password:c})),r)?Object(i.b)(r).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",u),console.log("newValues: ",b),Object(d.a)(u,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),u.password=c),Object(d.b)(u).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})):(console.log("whereValues: ",u),console.log("newValues: ",b),Object(d.a)(u,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),u.password=c),Object(d.b)(u).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())})))}},q=function(e,t,n,r,i,c,l,u){return function(d){d(m()),d({type:a.a});var b,f=r?i:"",j={destination:e.join(","),messageSubject:t,messageContent:n,scheduleTime:f,mediaType:c,category:l};console.log(j),(b=j,o()({method:"post",url:s.a+"/user/broadcastAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),u.push("/cms/notifications"),d(h("Notifikasi berhasil dikirim.")),d(g())})).catch((function(e){console.error("Error:",e),d(p("Notifikasi gagal dikirim. Coba beberapa saat lagi.")),d(g())})),console.log(j)}},E=function(e,t){return function(n){n(m()),n({type:a.a});var r,i={audianceName:e};console.log(i),(r=i,o()({method:"post",url:s.a+"/cms/audianceTargetAdd",data:r,headers:{"Content-Type":"application/json"}})).then((function(a){console.log("Success:",a.data),t.push("/tools/setting/target-audience"),n(h('Target pembaca "'+e+'" berhasil ditambahkan.')),n(g())})).catch((function(t){console.error("Error:",t),n(p('Target pembaca "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),n(g())})),console.log(i)}},w=function(e,t,n){return function(r){r(m()),r({type:a.a});var i,c={category:e,description:t};console.log(c),(i=c,o()({method:"post",url:s.a+"/cms/notificationCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),n.push("/tools/setting/notification-category"),r(h('Kategori Notifikasi "'+e+'" berhasil ditambahkan.')),r(g())})).catch((function(t){console.error("Error:",t),r(p('Kategori Notifikasi "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(g())})),console.log(c)}},N=function(e,t,n){return function(r){r(m()),r({type:a.a});var i,c={category:e,description:t};console.log(c),(i=c,o()({method:"post",url:s.a+"/cms/programCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),n.push("/tools/setting/program-category"),r(h('Kategori Program "'+e+'" berhasil ditambahkan.')),r(g())})).catch((function(t){console.error("Error:",t),r(p('Kategori Program "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(g())})),console.log(c)}},x=function(e,t,n,r,i,c,l,u){return function(d){d(m()),d({type:a.a});var b,f={userName:e,password:t,userType:n,cobrandEmail:r,userLevel:i,emailUser:c,phone:l};console.log(f),(b=f,o()({method:"post",url:s.a+"/cms/userAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),u.push("/tools/admin-staff"),d(h('User "'+e+'" berhasil ditambahkan.')),d(g())})).catch((function(t){console.error("Error:",t),d(p('User"'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(g())})),console.log(f)}},T=function(e,t){return function(n){n(m()),n({type:a.a});var r,i={topicName:e};console.log(i),(r=i,o()({method:"post",url:s.a+"/cms/contentTopicAdd",data:r,headers:{"Content-Type":"application/json"}})).then((function(a){console.log("Success:",a.data),t.push("/tools/setting/topic"),n(h('Topik konten "'+e+'" berhasil ditambahkan.')),n(g())})).catch((function(t){console.error("Error:",t),n(p('Topik konten "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),n(g())})),console.log(i)}},S=function(e,t,n,r,i){return function(c){c(m()),c({type:a.a});var l,u={cobrandEmail:e,controlParameterName:t,controlParameterValue:n,unit:r};console.log(u),(l=u,o()({method:"post",url:s.a+"/cobrand/configurationAdd",data:l,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),i.push("/tools/setting/screentime"),c(h('Standar Screentime "'+t+'" berhasil ditambahkan.')),c(g())})).catch((function(e){console.error("Error:",e),c(p('Standar Screentime "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),c(g())})),console.log(u)}},D=function(e,t,n,r,i,c,l,u,d){return function(b){b(m()),b({type:a.a});var f,j={whereValues:{emailUser:e},newValues:{nameUser:t,emailUser:n,gender:r,birdDate:i,address:c,imagePhoto:l,phoneNumber:u}};console.log(j),(f=j,o()({method:"post",url:s.a+"/user/edit",data:f,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),d.push("/cms/user"),b(h('Informasi pengguna "'+e+'" berhasil diubah.')),b(g())})).catch((function(t){console.error("Error:",t),b(p('Informasi pengguna "'+e+'" gagal diubah. Coba beberapa saat lagi.')),b(g())})),console.log(j)}}},1362:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(2),o=n(95),i=(n(856),n(139)),s=n(6),c=n(121),l=n(36),u=n(17),d=n(120),m=n(114),g=n(18),p=n.n(g),h=n(333),b=n.n(h),f=n(269),j=n(188),y=(n(329),n(280)),v=n.n(y),C=(n(402),n(857)),O=n.n(C),q=n(0);t.default=Object(u.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onEditContent:function(t,n,a,r,o,i,s,l,u,d,m){return e(Object(c.m)(t,n,a,r,o,i,s,l,u,d,m))}}}))((function(e){var t=e.onEditContent,n=e.isLoading,c=j.EditorState.createEmpty(),u=Object(r.useState)(c),g=Object(a.a)(u,2),h=g[0],y=g[1],C=function(e){y(e)},E=Object(r.useState)(c),w=Object(a.a)(E,2),N=w[0],x=w[1],T=function(e){x(e)},S=Object(r.useState)(!0),D=Object(a.a)(S,2),I=D[0],k=D[1],P=Object(r.useState)(),_=Object(a.a)(P,2),A=(_[0],_[1]),V=Object(r.useState)(),B=Object(a.a)(V,2),U=B[0],M=B[1],z=Object(r.useState)(),F=Object(a.a)(z,2),H=F[0],L=F[1],K=Object(r.useState)(""),R=Object(a.a)(K,2),J=R[0],Y=R[1],W=Object(r.useState)(b.a.createEmptyValue()),$=Object(a.a)(W,2),G=($[0],$[1]),Q=Object(r.useState)(b.a.createEmptyValue()),X=Object(a.a)(Q,2),Z=X[0],ee=X[1],te=Object(s.g)(),ne=JSON.parse(localStorage.getItem("userData")).email,ae=localStorage.getItem("contentSelected"),re={whereKeyValues:{cobrandEmail:ne}};return Object(r.useEffect)((function(){if(k(!0),console.log(ae),ae){var e={whereKeyValues:{cobrandEmail:ne,_id:ae}};p()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Response data: ",e.data),M(e.data.contents[0]);var t=(new DOMParser).parseFromString(e.data.contents[0].contents,"text/html");if(console.log(t),"Artikel"===e.data.contents[0].contentType){var n=t.getElementById("contents");console.log("Ini adalah con1 outer"+n.outerHTML),console.log("Ini adalah con1 inner"+n.innerHTML);var a=O()(n.innerHTML);ee(b.a.createValueFromString(n.outerHTML,"html")),Y(n.outerHTML),x(j.EditorState.createWithContent(j.ContentState.createFromBlockArray(a.contentBlocks,a.entityMap)))}else if("Image"===e.data.contents[0].contentType){var r=t.getElementsByTagName("img")[0].toString();Y(r.src)}else if("Video"===e.data.contents[0].contentType){var o=t.getElementsByTagName("iframe")[0];Y(o.src)}else if("Pdf"===e.data.contents[0].contentType){var i=t.getElementsByTagName("iframe")[0].src;i.includes("&embedded=true")&&(i=i.replace("&embedded=true","")),i.includes("http://docs.google.com/gview?url=")&&(i=i.replace("http://docs.google.com/gview?url=","")),Y(i)}var s=e.data.contents[0].contentDescription;console.log("des",s);var c=O()(s);y(j.EditorState.createWithContent(j.ContentState.createFromBlockArray(c.contentBlocks,c.entityMap)));var l=e.data.contents[0].startDate.split("T")[0];console.log(l),L(l),p()({method:"post",url:"https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter",data:re,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Program list: ",e.data),A(e.data.programs),k(!1)})).catch((function(e){console.log(e),k(!1)}))})).catch((function(e){console.log(e),k(!1)}))}}),[]),I?Object(q.jsx)(l.a,{}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(o.a,{headingName:"Artikel",routes:[{path:"/cms/content",name:"Artikel"},{path:"/cms/content/edit",name:"Ubah Artikel Terpilih"}]}),Object(q.jsx)(i.a,{initialValues:{programId:U.programId,contentName:U.contentName,contentDescription:h,contentType:U.contentType,contentSource:U.contentSource,contents:J,startDate:H},validationSchema:d.c,validateOnChange:!0,onSubmit:function(e){t(ae,ne,e.programId,e.contentName,e.contentDescription,e.contentType,e.contentSource,e.contentThumbnail,e.contents,e.startDate,te)},children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.handleBlur,r=e.setFieldValue,o=e.values,i=e.errors,s=e.touched;return Object(q.jsx)("form",{onSubmit:n,children:Object(q.jsxs)("div",{className:"EditContent",children:[Object(q.jsxs)("h1",{children:["Ubah Artikel: ",U.contentName]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Tipe Artikel"}),Object(q.jsxs)("select",{name:"contentType",value:o.contentType,onChange:function(e){r("contentType",e.currentTarget.value),r("contents","")},children:[Object(q.jsx)("option",{value:"",disabled:!0,children:"Select Content Type"}),Object(q.jsx)("option",{value:"Artikel",children:"Artikel"}),Object(q.jsx)("option",{value:"Image",children:"Image"}),Object(q.jsx)("option",{value:"Video",children:"Video"}),Object(q.jsx)("option",{value:"Pdf",children:"File Pdf"})]})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Judul"}),Object(q.jsx)(m.a,{type:"text",name:"contentName",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentName,onChange:t,onBlur:a}),s.contentName&&Object(q.jsx)("span",{className:"message__error",children:i.contentName})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Deskripsi"}),Object(q.jsx)(f.Editor,{editorState:h,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:C,values:o.contentDescription,name:"contentDescription",onChange:function(e){G(o.contentDescription),r("contentDescription",v()(Object(j.convertToRaw)(h.getCurrentContent()))),console.log(h),console.log(o.contentDescription)}})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Sumber"}),Object(q.jsx)(m.a,{type:"text",name:"contentSource",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.contentSource,onChange:t,onBlur:a}),s.contentSource&&Object(q.jsx)("span",{className:"message__error",children:i.contentSource})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Thumbnail"}),Object(q.jsx)("img",{className:"photo",src:U.contentThumbnail}),Object(q.jsx)("br",{}),Object(q.jsx)(m.a,{type:"file",className:"form-group__input",name:"contentThumbnail",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contentThumbnail",t))}})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Isi Artikel"}),"Artikel"===o.contentType?Object(q.jsx)(f.Editor,{editorState:N,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:T,values:o.contents,name:"contents",onChange:function(e){ee(o.contents),r("contents",v()(Object(j.convertToRaw)(N.getCurrentContent()))),console.log(Z),console.log(o.contents),console.log(N)}}):null,"Image"===o.contentType?Object(q.jsx)(m.a,{type:"file",className:"form-group__input",name:"contents",onBlur:a,onChange:function(e){var t=e.currentTarget.files[0];t&&(console.log("File to upload: ",t),r("contents",t))}}):null,"Video"===o.contentType?Object(q.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Video URL... (Youtube/Vimeo/Dailymotion/etc)",value:o.contents,onChange:t,onBlur:a}):null,"Pdf"===o.contentType?Object(q.jsx)(m.a,{type:"text",name:"contents",className:"form-group__input form-group__input--fullwidth",placeholder:"Type Pdf URL... (just for pdf file)",value:o.contents,onChange:t,onBlur:a}):null,s.contents&&Object(q.jsx)("span",{className:"message__error",children:i.contents})]}),Object(q.jsx)("div",{children:Object(q.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Artikel"})})]})})}}),n?Object(q.jsx)(l.a,{}):null]})}))},856:function(e,t,n){},95:function(e,t,n){"use strict";n(2);var a=n(7),r=(n(96),n(0));t.a=function(e){var t=e.headingName,n=e.routes,o=void 0===n?[]:n;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(a.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},96:function(e,t,n){}}]);
//# sourceMappingURL=45.888d5dcb.chunk.js.map