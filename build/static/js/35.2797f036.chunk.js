(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[35],{110:function(e,t,a){"use strict";a.d(t,"l",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"n",(function(){return c})),a.d(t,"m",(function(){return u})),a.d(t,"c",(function(){return l})),a.d(t,"g",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"h",(function(){return g})),a.d(t,"a",(function(){return p})),a.d(t,"j",(function(){return h})),a.d(t,"i",(function(){return b})),a.d(t,"d",(function(){return f})),a.d(t,"f",(function(){return j})),a.d(t,"k",(function(){return y}));var n=a(18),r=a.n(n),o=a(20),i=function(e){return r()({method:"post",url:o.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return r()({method:"post",url:o.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return r()({method:"post",url:o.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:o.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:o.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:o.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:o.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:o.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:o.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:o.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:o.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return r()({method:"post",url:o.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:o.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},y=function(e){return r()({method:"post",url:o.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})}},114:function(e,t,a){"use strict";var n=a(2),r=(a(115),a(0));function o(e){var t=e.placeholder,a=e.type,n=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,u=e.name,l=e.min,d=e.max,m=e.disabled,g=e.isError;return"textarea"===a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("textarea",{name:u,id:u,className:s,placeholder:t,onChange:n,onBlur:o,value:i,disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]}):"date"===a||"datetime-local"===a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:u,className:s,type:a,placeholder:t,onChange:n,onBlur:o,value:i,min:l,max:"9999-12-31",disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]}):"number"===a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:u,className:s,type:a,onChange:n,onBlur:o,value:i,min:l,max:d,disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{name:u,className:s,type:a,placeholder:t,onChange:n,onBlur:o,value:i,disabled:m}),g&&Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(n.memo)(o)},115:function(e,t,a){},120:function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"k",(function(){return c})),a.d(t,"l",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return d})),a.d(t,"o",(function(){return m})),a.d(t,"i",(function(){return g})),a.d(t,"a",(function(){return p})),a.d(t,"h",(function(){return h})),a.d(t,"j",(function(){return b})),a.d(t,"n",(function(){return f})),a.d(t,"d",(function(){return j})),a.d(t,"m",(function(){return y}));var n=a(141),r=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),password:n.g("Enter your password").required("Password is required")}),i=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),accountName:n.g("Enter your name").required("Name is required"),cobrandName:n.g("Enter your brand name").required("Brand name is required"),thumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.g("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),address:n.g("Enter your address").required("Address is required"),password:n.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:n.g("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=n.f({email:n.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:n.g("Enter your brand name").required("Brand name is required"),thumbnail:n.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:n.g("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),address:n.g("Enter your address").required("Address is required"),password:n.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:n.g("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=n.f({programName:n.g("Enter your program title").required("Program title is required"),programDescription:n.g("Enter the program description").required("Program description is required"),programThumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),category:n.g(),targetAudiance:n.a().min(1,"Pilih minimal 1"),contentPrograms:n.a().min(1).of(n.f({namaTahapan:n.g().required("Nama Tahapan harus diisi"),contentName:n.g().required("Judul Tahapan harus diisi"),contents:n.g().required("Isi Tahapan harus diisi"),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),answerKey:n.g().when("category",{is:"Ujian",then:n.g().required("Kunci Jawaban harus diisi"),otherwise:n.g()})}))}),u=n.f({programName:n.g("Enter your program title").required("Program title is required"),programDescription:n.g("Enter the program description").required("Program description is required"),startDate:n.c("Insert start date").required("Date is required")}),l=n.f({contentName:n.g("Enter your content title").required("Content title is required"),contentDescription:n.g("Enter the content description").required("Content description is required"),contents:n.g("Enter the content description").required("Content is required"),contentSource:n.g("Enter the content source").required("Content source is required"),contentThumbnail:n.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:n.c("Insert start date").required("Date is required"),endDate:n.c("Insert end date").required("Date is required"),isActive:n.b(),topics:n.a().min(1),targetAudience:n.a().min(1)}),d=n.f({contentName:n.g("Enter your content title").required("Content title is required"),contentDescription:n.g("Enter the content description").required("Content description is required"),contents:n.g("Enter the content description").required("Content is required"),contentSource:n.g("Enter the content source").required("Content source is required"),startDate:n.c("Insert start date").required("Date is required")}),m=n.f({nameUser:n.g("Enter your content title").required("User name is required"),emailUser:n.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:n.c("Insert start date").required("Date is required")}),g=n.f({destination:n.a().min(1),messageSubject:n.g("Enter the message subject").required("Message Subject is required"),messageContent:n.g("Enter the message content").required("Message Content is required"),scheduleTime:n.c("Insert start date").required("Date is required"),mediaType:n.g("Enter the media type").required("Media type is required"),category:n.g("Enter the category").required("Category is required")}),p=n.f({audianceName:n.g("Enter your audience name").required("Audience Name is required")}),h=n.f({category:n.g("Enter category name").required("Category is required"),description:n.g("Enter description").required("Description is required")}),b=n.f({category:n.g("Enter category name").required("Category is required"),description:n.g("Enter description").required("Description is required")}),f=n.f({emailUser:n.g("Enter your email").required("Email is required").email("Email not valid"),userName:n.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:n.g("Enter your phone number").required("Phone number is required").matches(r,"Invalid phone number format"),password:n.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),j=n.f({topicName:n.g("Enter topic name").required("Topic Name is required")}),y=n.f({controlParameterName:n.g("Enter category name").required("Category is required"),controlParameterValue:n.e().required("Number is required")})},121:function(e,t,a){"use strict";a.d(t,"g",(function(){return b})),a.d(t,"o",(function(){return f})),a.d(t,"k",(function(){return j})),a.d(t,"b",(function(){return y})),a.d(t,"m",(function(){return v})),a.d(t,"j",(function(){return q})),a.d(t,"n",(function(){return C})),a.d(t,"e",(function(){return w})),a.d(t,"a",(function(){return O})),a.d(t,"d",(function(){return E})),a.d(t,"f",(function(){return x})),a.d(t,"i",(function(){return N})),a.d(t,"c",(function(){return T})),a.d(t,"h",(function(){return D})),a.d(t,"l",(function(){return S}));var n=a(8),r=a(18),o=a.n(r),i=a(37),s=a(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},d=a(25),m=function(){return{type:n.f}},g=function(){return{type:n.d}},p=function(e,t){return{type:n.b,message:e,idMessage:t}},h=function(e,t){return{type:n.c,message:e,idMessage:t}},b=function(e,t,a,r,c,u,l,d,b,f){return function(j){j(m()),j({type:n.a}),Object(i.b)(r).then((function(n){console.log(typeof n);for(var r=n,i=[],m=0;m<b.length;m++){for(var y=b[m],v={},q=0;q<y.response.length;q++)v[y.response[q]]=0;var C={nomerUrutTahapan:y.nomerUrutTahapan,namaTahapan:y.namaTahapan,contentName:y.contentName,contentType:y.contentType,contentSource:y.contentSource,contents:y.contents,startDate:y.startDate,endDate:y.endDate,topics:y.topics,targetAudiance:y.targetAudiance,respons:v,answerKey:y.answerKey};i.push(C)}var w=[];for(q=0;q<d.length;q++)w.push(d[q].value);var O,E={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:r,startDate:c,endDate:u,category:l,targetAudiance:w,contentPrograms:i};console.log(E),(O=E,o()({method:"post",url:s.a+"/cobrand/v2-programAdd",data:O,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),f.push("/cms/program"),j(h('Program "'+t+'" berhasil ditambahkan.')),j(g())})).catch((function(e){console.error("Error:",e),j(p('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(g())})),console.log(E)}))}},f=function(e,t,a,r,o,s,u){return function(l){if(l(m()),l({type:n.a}),console.log("Photo is empty:",""===o),""===o){var d={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:r,startDate:s}};console.log(d),c(d).then((function(e){console.log("Success:",e.data),u.push("/cms/program"),l(h('Program "'+a+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),l(g())}))}else{Object(i.b)(o).then((function(n){console.log(typeof n);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:r,programthumnail:n,startDate:s}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),u.push("/cms/program"),l(h('Program "'+a+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),l(g())}))}))}}},j=function(e,t,a){return function(r){r(m()),r({type:n.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),r(h('Program "'+t[1]+'" berhasil dihapus.')),r(g()),a()})).catch((function(e){console.log(e),r(p('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(g()),a()}))}},y=function(e,t,a,r,o,s,c,l,d,b,f,j,y,v){return function(q){q(m()),q({type:n.a}),Object(i.b)(c).then((function(n){var c=[],m=[];j.map((function(e){c.push(e.value)})),y.map((function(e){m.push(e.value)})),console.log(typeof n);var C=n,w=f?"active":"inactive";if("Video"===o)"string"===typeof l?l='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(l)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(l).then((function(n){l='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(n)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var f={cobrandEmail:e,programId:t,contentName:a,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:C,contents:l,status:w,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(f),u(f).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(f)}));else if("Image"===o){if("string"===typeof l)l='<img src="'+l+'" style="width:100%;"/>';else Object(i.b)(l).then((function(n){l='<img src="'+n+'" style="width:100%;"/>',console.log(l);var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:C,contents:l,status:w,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(i),u(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof l)l='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+l+(l.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(l).then((function(n){var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:C,contents:l='<div style="width:100%;height:100vh;"><iframe src="'+n+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:w,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(i),u(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(i)}))}else l='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+l+"</div></body></html>";console.log(l);var O={cobrandEmail:e,programId:t,contentName:a,contentDescription:r,contentType:o,contentSource:s,contentThumbnail:C,contents:l,status:w,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(O),u(O).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(O)}))}},v=function(e,t,a,r,o,s,c,u,d,b,f){return function(u){u(m()),u({type:n.a});if("Video"===s)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(n){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(n)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var m={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:r,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(m),l(m).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),u(h('Content "'+r+'" berhasil diubah.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),u(g())})),console.log(m)}));else if("Image"===s){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(n){d='<img src="'+n+'" style="width:100%;"/>',console.log(d);var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:r,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),u(h('Content "'+r+'" berhasil diubah.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),u(g())})),console.log(i)}))}else if("Pdf"===s){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(n){var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:r,contentDescription:o,contentType:s,contentSource:c,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+n+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b}};console.log(i),l(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),u(h('Content "'+r+'" berhasil ditambahkan.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Content "'+r+'" gagal ditambahkan. Coba beberapa saat lagi.')),u(g())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var j={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:r,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(j),l(j).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),u(h('Content "'+r+'" berhasil diubah.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Content "'+r+'" gagal diubah. Coba beberapa saat lagi.')),u(g())})),console.log(j)}},q=function(e,t,a){return function(r){r(m()),r({type:n.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),r(h('Content "'+t[1]+'" berhasil dihapus.')),r(g()),a()})).catch((function(e){console.log(e),r(p('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(g()),a()}))}},C=function(e,t,a,r,o,s,c){return function(u){u(m()),u({type:n.a});var l={email:e,password:t},b={};(a&&(b=Object.assign(b,{cobrandName:a})),o&&(b=Object.assign(b,{phoneNumber:o})),s&&(b=Object.assign(b,{address:s})),c&&(b=Object.assign(b,{password:c})),r)?Object(i.b)(r).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",l),console.log("newValues: ",b),Object(d.a)(l,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),l.password=c),Object(d.b)(l).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),u(h("Profil berhasil diubah.")),u(g())})).catch((function(e){console.error("Error:",e),u(p("Profil gagal diubah. Coba beberapa saat lagi.")),u(g())}))})).catch((function(e){console.error("Error:",e),u(p("Profil gagal diubah. Coba beberapa saat lagi.")),u(g())}))})):(console.log("whereValues: ",l),console.log("newValues: ",b),Object(d.a)(l,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),l.password=c),Object(d.b)(l).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),u(h("Profil berhasil diubah.")),u(g())})).catch((function(e){console.error("Error:",e),u(p("Profil gagal diubah. Coba beberapa saat lagi.")),u(g())}))})).catch((function(e){console.error("Error:",e),u(p("Profil gagal diubah. Coba beberapa saat lagi.")),u(g())})))}},w=function(e,t,a,r,i,c,u,l){return function(d){d(m()),d({type:n.a});var b,f=r?i:"",j={destination:e.join(","),messageSubject:t,messageContent:a,scheduleTime:f,mediaType:c,category:u};console.log(j),(b=j,o()({method:"post",url:s.a+"/user/broadcastAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),l.push("/cms/notifications"),d(h("Notifikasi berhasil dikirim.")),d(g())})).catch((function(e){console.error("Error:",e),d(p("Notifikasi gagal dikirim. Coba beberapa saat lagi.")),d(g())})),console.log(j)}},O=function(e,t){return function(a){a(m()),a({type:n.a});var r,i={audianceName:e};console.log(i),(r=i,o()({method:"post",url:s.a+"/cms/audianceTargetAdd",data:r,headers:{"Content-Type":"application/json"}})).then((function(n){console.log("Success:",n.data),t.push("/tools/setting/target-audience"),a(h('Target pembaca "'+e+'" berhasil ditambahkan.')),a(g())})).catch((function(t){console.error("Error:",t),a(p('Target pembaca "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(g())})),console.log(i)}},E=function(e,t,a){return function(r){r(m()),r({type:n.a});var i,c={category:e,description:t};console.log(c),(i=c,o()({method:"post",url:s.a+"/cms/notificationCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),a.push("/tools/setting/notification-category"),r(h('Kategori Notifikasi "'+e+'" berhasil ditambahkan.')),r(g())})).catch((function(t){console.error("Error:",t),r(p('Kategori Notifikasi "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(g())})),console.log(c)}},x=function(e,t,a){return function(r){r(m()),r({type:n.a});var i,c={category:e,description:t};console.log(c),(i=c,o()({method:"post",url:s.a+"/cms/programCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),a.push("/tools/setting/program-category"),r(h('Kategori Program "'+e+'" berhasil ditambahkan.')),r(g())})).catch((function(t){console.error("Error:",t),r(p('Kategori Program "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(g())})),console.log(c)}},N=function(e,t,a,r,i,c,u,l){return function(d){d(m()),d({type:n.a});var b,f={userName:e,password:t,userType:a,cobrandEmail:r,userLevel:i,emailUser:c,phone:u};console.log(f),(b=f,o()({method:"post",url:s.a+"/cms/userAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),l.push("/tools/admin-staff"),d(h('User "'+e+'" berhasil ditambahkan.')),d(g())})).catch((function(t){console.error("Error:",t),d(p('User"'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(g())})),console.log(f)}},T=function(e,t){return function(a){a(m()),a({type:n.a});var r,i={topicName:e};console.log(i),(r=i,o()({method:"post",url:s.a+"/cms/contentTopicAdd",data:r,headers:{"Content-Type":"application/json"}})).then((function(n){console.log("Success:",n.data),t.push("/tools/setting/topic"),a(h('Topik konten "'+e+'" berhasil ditambahkan.')),a(g())})).catch((function(t){console.error("Error:",t),a(p('Topik konten "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(g())})),console.log(i)}},D=function(e,t,a,r,i){return function(c){c(m()),c({type:n.a});var u,l={cobrandEmail:e,controlParameterName:t,controlParameterValue:a,unit:r};console.log(l),(u=l,o()({method:"post",url:s.a+"/cobrand/configurationAdd",data:u,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),i.push("/tools/setting/screentime"),c(h('Standar Screentime "'+t+'" berhasil ditambahkan.')),c(g())})).catch((function(e){console.error("Error:",e),c(p('Standar Screentime "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),c(g())})),console.log(l)}},S=function(e,t,a,r,i,c,u,l,d){return function(b){b(m()),b({type:n.a});var f,j={whereValues:{emailUser:e},newValues:{nameUser:t,emailUser:a,gender:r,birdDate:i,address:c,imagePhoto:u,phoneNumber:l}};console.log(j),(f=j,o()({method:"post",url:s.a+"/user/edit",data:f,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),d.push("/cms/user"),b(h('Informasi pengguna "'+e+'" berhasil diubah.')),b(g())})).catch((function(t){console.error("Error:",t),b(p('Informasi pengguna "'+e+'" gagal diubah. Coba beberapa saat lagi.')),b(g())})),console.log(j)}}},1237:function(e,t,a){},1405:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(2),o=a(95),i=(a(1237),a(140)),s=a(6),c=a(121),u=a(110),l=a(36),d=a(17),m=a(120),g=a(114),p=(a(18),a(0));t.default=Object(d.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onEditUser:function(t,a,n,r,o,i,s,u,l){return e(Object(c.l)(t,a,n,r,o,i,s,u,l))}}}))((function(e){var t,a,c,d,h,b,f=e.onEditUser,j=e.isLoading,y=Object(r.useState)(!0),v=Object(n.a)(y,2),q=v[0],C=v[1],w=Object(r.useState)(),O=Object(n.a)(w,2),E=O[0],x=O[1],N=Object(r.useState)(),T=Object(n.a)(N,2),D=(T[0],T[1],Object(s.g)()),S=(JSON.parse(localStorage.getItem("userData")).email,localStorage.getItem("userSelected"));return Object(r.useEffect)((function(){if(C(!0),console.log(S),S){var e={whereKeyValues:{emailUser:S}};Object(u.n)(e).then((function(e){console.log("Response data: ",e.data),x(e.data.users[0]),C(!1)})).catch((function(e){console.log(e),C(!1)}))}}),[]),q||j?Object(p.jsx)(l.a,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,{headingName:"Manajemen Pengguna",routes:[{path:"/cms/user",name:"Pengguna"},{path:"/cms/user/edit",name:"Ubah Pengguna"}]}),Object(p.jsx)(i.a,{initialValues:{nameUser:null!==(t=E.nameUser)&&void 0!==t?t:"",emailUser:null!==(a=E.emailUser)&&void 0!==a?a:"",gender:null!==(c=E.gender)&&void 0!==c?c:"pria",birdDate:null!==(d=E.birdDate.split("T")[0])&&void 0!==d?d:(new Date).toISOString.split("T")[0],address:null!==(h=E.address)&&void 0!==h?h:"",imagePhoto:"",phoneNumber:null!==(b=E.phoneNumber)&&void 0!==b?b:""},validationSchema:m.o,validateOnChange:!0,onSubmit:function(e){E.imagePhoto;""!==e.imagePhoto&&e.imagePhoto,f(S,e.nameUser,e.emailUser,e.gender,e.birdDate,e.address,e.imagePhoto,e.phoneNumber,D)},children:function(e){var t=e.handleChange,a=e.handleSubmit,n=e.handleBlur,r=e.setFieldValue,o=e.values,i=e.errors,s=e.touched;return Object(p.jsx)("form",{onSubmit:a,children:Object(p.jsxs)("div",{className:"EditUser",children:[Object(p.jsxs)("h1",{children:["Ubah Pengguna Terpilih: ",E.nameUser]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Nama"}),Object(p.jsx)(g.a,{type:"text",name:"nameUser",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.nameUser,onChange:t,onBlur:n}),s.nameUser&&Object(p.jsx)("span",{className:"message__error",children:i.nameUser})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Email"}),Object(p.jsx)(g.a,{type:"text",name:"emailUser",className:"form-group__input form-group__input--fullwidth",placeholder:"example@example.com",value:o.emailUser,onChange:t,onBlur:n}),s.emailUser&&Object(p.jsx)("span",{className:"message__error",children:i.emailUser})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Jenis Kelamin"}),Object(p.jsxs)("select",{name:"gender",value:o.gender,onChange:function(e){r("gender",e.currentTarget.value)},children:[Object(p.jsx)("option",{value:"pria",children:"Pria"}),Object(p.jsx)("option",{value:"wanita",children:"Wanita"})]})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Tanggal Lahir"}),Object(p.jsx)(g.a,{type:"date",className:"form-group__input",name:"birdDate",value:o.birdDate,min:new Date("1980-01-01"),onChange:t,onBlur:n}),s.birdDate&&Object(p.jsx)("span",{className:"message__error",children:i.birdDate})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Alamat"}),Object(p.jsx)(g.a,{type:"text",name:"address",className:"form-group__input form-group__input--fullwidth",placeholder:"Jl. Example",value:o.address,onChange:t,onBlur:n})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("label",{children:["Foto Profil Baru ","(Opsional)"]}),Object(p.jsx)(g.a,{type:"file",className:"form-group__input",name:"imagePhoto",onChange:function(e){var t=e.currentTarget.files[0];if(t){var a=new FileReader;a.readAsDataURL(t),a.onloadend=function(){var e=a.result;r("imagePhoto",e)}}}})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Nomor Telepon"}),Object(p.jsx)(g.a,{type:"text",name:"phoneNumber",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:o.phoneNumber,onChange:function(e){var t=e.currentTarget.value.replace(/\D/g,"");r("phoneNumber",t)},onBlur:n}),s.phoneNumber&&Object(p.jsx)("span",{className:"message__error",children:i.phoneNumber})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Update Pengguna"})})]})})}}),console.log(j),j?Object(p.jsx)(l.a,{}):null]})}))},95:function(e,t,a){"use strict";a(2);var n=a(7),r=(a(97),a(0));t.a=function(e){var t=e.headingName,a=e.routes,o=void 0===a?[]:a;return Object(r.jsxs)("div",{className:"Heading",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(r.jsx)(n.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(r.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(r.jsx)("span",{children:e.name})," "]},t)}))})]})}},97:function(e,t,a){}}]);
//# sourceMappingURL=35.2797f036.chunk.js.map