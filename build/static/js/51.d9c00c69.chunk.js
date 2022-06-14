(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[51],{114:function(e,t,a){"use strict";var r=a(2),n=(a(115),a(0));function o(e){var t=e.placeholder,a=e.type,r=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,l=e.name,u=e.min,d=e.max,m=e.disabled,g=e.isError;return"textarea"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:l,id:l,className:s,placeholder:t,onChange:r,onBlur:o,value:i,disabled:m}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===a||"datetime-local"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,min:u,max:"9999-12-31",disabled:m}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"number"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,onChange:r,onBlur:o,value:i,min:u,max:d,disabled:m}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:l,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,disabled:m}),g&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(o)},115:function(e,t,a){},120:function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"k",(function(){return c})),a.d(t,"l",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"o",(function(){return m})),a.d(t,"i",(function(){return g})),a.d(t,"a",(function(){return p})),a.d(t,"h",(function(){return h})),a.d(t,"j",(function(){return b})),a.d(t,"n",(function(){return f})),a.d(t,"d",(function(){return y})),a.d(t,"m",(function(){return j}));var r=a(141),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=r.f({email:r.g("Enter your email").required("Email is required").email("Email not valid"),password:r.g("Enter your password").required("Password is required")}),i=r.f({email:r.g("Enter your email").required("Email is required").email("Email not valid"),accountName:r.g("Enter your name").required("Name is required"),cobrandName:r.g("Enter your brand name").required("Brand name is required"),thumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.g("Enter your address").required("Address is required"),password:r.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.g("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=r.f({email:r.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:r.g("Enter your brand name").required("Brand name is required"),thumbnail:r.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.g("Enter your address").required("Address is required"),password:r.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:r.g("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=r.f({programName:r.g("Enter your program title").required("Program title is required"),programDescription:r.g("Enter the program description").required("Program description is required"),programThumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required"),category:r.g(),targetAudiance:r.a().min(1,"Pilih minimal 1"),contentPrograms:r.a().min(1).of(r.f({namaTahapan:r.g().required("Nama Tahapan harus diisi"),contentName:r.g().required("Judul Tahapan harus diisi"),contents:r.g().required("Isi Tahapan harus diisi"),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required")}))}),l=r.f({programName:r.g("Enter your program title").required("Program title is required"),programDescription:r.g("Enter the program description").required("Program description is required"),startDate:r.c("Insert start date").required("Date is required")}),u=r.f({contentName:r.g("Enter your content title").required("Content title is required"),contentDescription:r.g("Enter the content description").required("Content description is required"),contents:r.g("Enter the content description").required("Content is required"),contentSource:r.g("Enter the content source").required("Content source is required"),contentThumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required"),isActive:r.b(),topics:r.a().min(1),targetAudience:r.a().min(1)}),d=r.f({contentName:r.g("Enter your content title").required("Content title is required"),contentDescription:r.g("Enter the content description").required("Content description is required"),contents:r.g("Enter the content description").required("Content is required"),contentSource:r.g("Enter the content source").required("Content source is required"),startDate:r.c("Insert start date").required("Date is required")}),m=r.f({nameUser:r.g("Enter your content title").required("User name is required"),emailUser:r.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:r.c("Insert start date").required("Date is required")}),g=r.f({destination:r.a().min(1),messageSubject:r.g("Enter the message subject").required("Message Subject is required"),messageContent:r.g("Enter the message content").required("Message Content is required"),scheduleTime:r.c("Insert start date").required("Date is required"),mediaType:r.g("Enter the media type").required("Media type is required"),category:r.g("Enter the category").required("Category is required")}),p=r.f({audianceName:r.g("Enter your audience name").required("Audience Name is required")}),h=r.f({category:r.g("Enter category name").required("Category is required"),description:r.g("Enter description").required("Description is required")}),b=r.f({category:r.g("Enter category name").required("Category is required"),description:r.g("Enter description").required("Description is required")}),f=r.f({emailUser:r.g("Enter your email").required("Email is required").email("Email not valid"),userName:r.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:r.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),password:r.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),y=r.f({topicName:r.g("Enter topic name").required("Topic Name is required")}),j=r.f({controlParameterName:r.g("Enter category name").required("Category is required"),controlParameterValue:r.e().required("Number is required")})},121:function(e,t,a){"use strict";a.d(t,"g",(function(){return b})),a.d(t,"o",(function(){return f})),a.d(t,"k",(function(){return y})),a.d(t,"b",(function(){return j})),a.d(t,"m",(function(){return v})),a.d(t,"j",(function(){return q})),a.d(t,"n",(function(){return E})),a.d(t,"e",(function(){return w})),a.d(t,"a",(function(){return C})),a.d(t,"d",(function(){return N})),a.d(t,"f",(function(){return O})),a.d(t,"i",(function(){return x})),a.d(t,"c",(function(){return S})),a.d(t,"h",(function(){return D})),a.d(t,"l",(function(){return P}));var r=a(8),n=a(18),o=a.n(n),i=a(37),s=a(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},d=a(25),m=function(){return{type:r.f}},g=function(){return{type:r.d}},p=function(e,t){return{type:r.b,message:e,idMessage:t}},h=function(e,t){return{type:r.c,message:e,idMessage:t}},b=function(e,t,a,n,c,l,u,d,b,f){return function(y){y(m()),y({type:r.a}),Object(i.b)(n).then((function(r){console.log(typeof r);for(var n=r,i=[],m=0;m<b.length;m++){for(var j=b[m],v={},q=0;q<j.response.length;q++)v[j.response[q]]=0;var E={nomerUrutTahapan:j.nomerUrutTahapan,namaTahapan:j.namaTahapan,contentName:j.contentName,contentType:j.contentType,contentSource:j.contentSource,contents:j.contents,startDate:j.startDate,endDate:j.endDate,topics:j.topics,targetAudiance:j.targetAudiance,respons:v};i.push(E)}var w=[];for(q=0;q<d.length;q++)w.push(d[q].value);var C,N={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:n,startDate:c,endDate:l,category:u,targetAudiance:w,contentPrograms:i};console.log(N),(C=N,o()({method:"post",url:s.a+"/cobrand/v2-programAdd",data:C,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),f.push("/cms/program"),y(h('Program "'+t+'" berhasil ditambahkan.')),y(g())})).catch((function(e){console.error("Error:",e),y(p('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),y(g())})),console.log(N)}))}},f=function(e,t,a,n,o,s,l){return function(u){if(u(m()),u({type:r.a}),console.log("Photo is empty:",""===o),""===o){var d={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,startDate:s}};console.log(d),c(d).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),u(h('Program "'+a+'" berhasil diubah.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),u(g())}))}else{Object(i.b)(o).then((function(r){console.log(typeof r);var o={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,programthumnail:r,startDate:s}};console.log(o),c(o).then((function(e){console.log("Success:",e.data),l.push("/cms/program"),u(h('Program "'+a+'" berhasil diubah.')),u(g())})).catch((function(e){console.error("Error:",e),u(p('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),u(g())}))}))}}},y=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Program "'+t[1]+'" berhasil dihapus.')),n(g()),a()})).catch((function(e){console.log(e),n(p('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(g()),a()}))}},j=function(e,t,a,n,o,s,c,u,d,b,f,y,j,v){return function(q){q(m()),q({type:r.a}),Object(i.b)(c).then((function(r){var c=[],m=[];y.map((function(e){c.push(e.value)})),j.map((function(e){m.push(e.value)})),console.log(typeof r);var E=r,w=f?"active":"inactive";if("Video"===o)"string"===typeof u?u='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(u)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(u).then((function(r){u='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var f={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:E,contents:u,status:w,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(f),l(f).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(f)}));else if("Image"===o){if("string"===typeof u)u='<img src="'+u+'" style="width:100%;"/>';else Object(i.b)(u).then((function(r){u='<img src="'+r+'" style="width:100%;"/>',console.log(u);var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:E,contents:u,status:w,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(i),l(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof u)u='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+u+(u.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(u).then((function(r){var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:E,contents:u='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:w,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(i),l(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(i)}))}else u='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+u+"</div></body></html>";console.log(u);var C={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:E,contents:u,status:w,startDate:d,endDate:b,topics:c,targetAudiance:m};console.log(C),l(C).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(h('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(p('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(C)}))}},v=function(e,t,a,n,o,s,c,l,d,b,f){return function(l){l(m()),l({type:r.a});if("Video"===s)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(r){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var m={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(m),u(m).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+n+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(m)}));else if("Image"===s){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(r){d='<img src="'+r+'" style="width:100%;"/>',console.log(d);var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(i),u(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+n+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(i)}))}else if("Pdf"===s){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(r){var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b}};console.log(i),u(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+n+'" berhasil ditambahkan.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),l(g())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var y={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:d,startDate:b}};console.log(y),u(y).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),l(h('Content "'+n+'" berhasil diubah.')),l(g())})).catch((function(e){console.error("Error:",e),l(p('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),l(g())})),console.log(y)}},q=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(h('Content "'+t[1]+'" berhasil dihapus.')),n(g()),a()})).catch((function(e){console.log(e),n(p('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(g()),a()}))}},E=function(e,t,a,n,o,s,c){return function(l){l(m()),l({type:r.a});var u={email:e,password:t},b={};(a&&(b=Object.assign(b,{cobrandName:a})),o&&(b=Object.assign(b,{phoneNumber:o})),s&&(b=Object.assign(b,{address:s})),c&&(b=Object.assign(b,{password:c})),n)?Object(i.b)(n).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",u),console.log("newValues: ",b),Object(d.a)(u,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),u.password=c),Object(d.b)(u).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})):(console.log("whereValues: ",u),console.log("newValues: ",b),Object(d.a)(u,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),u.password=c),Object(d.b)(u).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),l(h("Profil berhasil diubah.")),l(g())})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())}))})).catch((function(e){console.error("Error:",e),l(p("Profil gagal diubah. Coba beberapa saat lagi.")),l(g())})))}},w=function(e,t,a,n,i,c,l,u){return function(d){d(m()),d({type:r.a});var b,f=n?i:"",y={destination:e.join(","),messageSubject:t,messageContent:a,scheduleTime:f,mediaType:c,category:l};console.log(y),(b=y,o()({method:"post",url:s.a+"/user/broadcastAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),u.push("/cms/notifications"),d(h("Notifikasi berhasil dikirim.")),d(g())})).catch((function(e){console.error("Error:",e),d(p("Notifikasi gagal dikirim. Coba beberapa saat lagi.")),d(g())})),console.log(y)}},C=function(e,t){return function(a){a(m()),a({type:r.a});var n,i={audianceName:e};console.log(i),(n=i,o()({method:"post",url:s.a+"/cms/audianceTargetAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(r){console.log("Success:",r.data),t.push("/tools/setting/target-audience"),a(h('Target pembaca "'+e+'" berhasil ditambahkan.')),a(g())})).catch((function(t){console.error("Error:",t),a(p('Target pembaca "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(g())})),console.log(i)}},N=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={category:e,description:t};console.log(c),(i=c,o()({method:"post",url:s.a+"/cms/notificationCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),a.push("/tools/setting/notification-category"),n(h('Kategori Notifikasi "'+e+'" berhasil ditambahkan.')),n(g())})).catch((function(t){console.error("Error:",t),n(p('Kategori Notifikasi "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),n(g())})),console.log(c)}},O=function(e,t,a){return function(n){n(m()),n({type:r.a});var i,c={category:e,description:t};console.log(c),(i=c,o()({method:"post",url:s.a+"/cms/programCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),a.push("/tools/setting/program-category"),n(h('Kategori Program "'+e+'" berhasil ditambahkan.')),n(g())})).catch((function(t){console.error("Error:",t),n(p('Kategori Program "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),n(g())})),console.log(c)}},x=function(e,t,a,n,i,c,l,u){return function(d){d(m()),d({type:r.a});var b,f={userName:e,password:t,userType:a,cobrandEmail:n,userLevel:i,emailUser:c,phone:l};console.log(f),(b=f,o()({method:"post",url:s.a+"/cms/userAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),u.push("/tools/admin-staff"),d(h('User "'+e+'" berhasil ditambahkan.')),d(g())})).catch((function(t){console.error("Error:",t),d(p('User"'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(g())})),console.log(f)}},S=function(e,t){return function(a){a(m()),a({type:r.a});var n,i={topicName:e};console.log(i),(n=i,o()({method:"post",url:s.a+"/cms/contentTopicAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(r){console.log("Success:",r.data),t.push("/tools/setting/topic"),a(h('Topik konten "'+e+'" berhasil ditambahkan.')),a(g())})).catch((function(t){console.error("Error:",t),a(p('Topik konten "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(g())})),console.log(i)}},D=function(e,t,a,n,i){return function(c){c(m()),c({type:r.a});var l,u={cobrandEmail:e,controlParameterName:t,controlParameterValue:a,unit:n};console.log(u),(l=u,o()({method:"post",url:s.a+"/cobrand/configurationAdd",data:l,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),i.push("/tools/setting/screentime"),c(h('Standar Screentime "'+t+'" berhasil ditambahkan.')),c(g())})).catch((function(e){console.error("Error:",e),c(p('Standar Screentime "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),c(g())})),console.log(u)}},P=function(e,t,a,n,i,c,l,u,d){return function(b){b(m()),b({type:r.a});var f,y={whereValues:{emailUser:e},newValues:{nameUser:t,emailUser:a,gender:n,birdDate:i,address:c,imagePhoto:l,phoneNumber:u}};console.log(y),(f=y,o()({method:"post",url:s.a+"/user/edit",data:f,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),d.push("/cms/user"),b(h('Informasi pengguna "'+e+'" berhasil diubah.')),b(g())})).catch((function(t){console.error("Error:",t),b(p('Informasi pengguna "'+e+'" gagal diubah. Coba beberapa saat lagi.')),b(g())})),console.log(y)}}},1234:function(e,t,a){},1402:function(e,t,a){"use strict";a.r(t);a(2);var r=a(95),n=(a(1234),a(140)),o=a(6),i=a(121),s=a(36),c=a(17),l=a(120),u=a(114),d=a(0);t.default=Object(c.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddScreenTime:function(t,a,r,n,o){return e(Object(i.h)(t,a,r,n,o))}}}))((function(e){var t=e.onAddScreenTime,a=e.isLoading,i=Object(o.g)(),c=JSON.parse(localStorage.getItem("userData")).email;return a?Object(d.jsx)(s.a,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(r.a,{headingName:"Kategori Program",routes:[{path:"/tools/setting/program-category",name:"Kategori Program"},{path:"/tools/setting/program-category/add",name:"Tambah"}]}),Object(d.jsx)(n.a,{initialValues:{controlParameterName:"TK",controlParameterValue:24},validationSchema:l.m,validateOnChange:!0,onSubmit:function(e){t(c,e.controlParameterName,e.controlParameterValue,"jam",i)},children:function(e){var t=e.handleChange,a=e.handleSubmit,r=e.handleBlur,n=e.setFieldValue,o=e.values,i=e.errors,s=e.touched;return Object(d.jsx)("form",{onSubmit:a,children:Object(d.jsxs)("div",{className:"AddScreenTime",children:[Object(d.jsx)("h1",{children:"Tambah"}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Kelompok Pengguna"}),Object(d.jsxs)("select",{name:"controlParameterName",value:o.controlParameterName,onChange:function(e){n("controlParameterName",e.currentTarget.value)},children:[Object(d.jsx)("option",{value:"TK",children:"TK"}),Object(d.jsx)("option",{value:"SD",children:"SD"}),Object(d.jsx)("option",{value:"SMP",children:"SMP"}),Object(d.jsx)("option",{value:"SMA",children:"SMA"})]}),s.controlParameterName&&Object(d.jsx)("span",{className:"message__error",children:i.controlParameterName})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("label",{children:["Standar Penggunaan Gadget ","(Jam)"]}),Object(d.jsx)(u.a,{type:"number",name:"controlParameterValue",className:"form-group__input",value:o.controlParameterValue,min:1,max:24,onChange:t,onBlur:r}),s.controlParameterValue&&Object(d.jsx)("span",{className:"message__error",children:i.controlParameterValue})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Tambah"})})]})})}}),console.log(a),a?Object(d.jsx)(s.a,{}):null]})}))},95:function(e,t,a){"use strict";a(2);var r=a(7),n=(a(97),a(0));t.a=function(e){var t=e.headingName,a=e.routes,o=void 0===a?[]:a;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},t)}))})]})}},97:function(e,t,a){}}]);
//# sourceMappingURL=51.d9c00c69.chunk.js.map