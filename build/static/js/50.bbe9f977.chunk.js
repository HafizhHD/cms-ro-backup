(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[50],{113:function(e,t,a){"use strict";var r=a(2),n=(a(115),a(0));function o(e){var t=e.placeholder,a=e.type,r=e.onChange,o=e.onBlur,i=e.value,s=e.className,c=e.message,u=e.name,d=e.min,l=e.max,g=e.disabled,m=e.isError;return"textarea"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("textarea",{name:u,id:u,className:s,placeholder:t,onChange:r,onBlur:o,value:i,disabled:g}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"date"===a||"datetime-local"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,min:d,max:"9999-12-31",disabled:g}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):"number"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:s,type:a,onChange:r,onBlur:o,value:i,min:d,max:l,disabled:g}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:u,className:s,type:a,placeholder:t,onChange:r,onBlur:o,value:i,disabled:g}),m&&Object(n.jsx)("div",{className:"message",children:Object(n.jsx)("span",{className:"message__error",children:c})})]})}t.a=Object(r.memo)(o)},115:function(e,t,a){},120:function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"k",(function(){return c})),a.d(t,"l",(function(){return u})),a.d(t,"o",(function(){return d})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return g})),a.d(t,"p",(function(){return m})),a.d(t,"i",(function(){return p})),a.d(t,"a",(function(){return h})),a.d(t,"h",(function(){return b})),a.d(t,"j",(function(){return f})),a.d(t,"n",(function(){return y})),a.d(t,"d",(function(){return j})),a.d(t,"m",(function(){return v}));var r=a(141),n=/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,o=r.f({email:r.g("Enter your email").required("Email is required").email("Email not valid"),password:r.g("Enter your password").required("Password is required")}),i=r.f({email:r.g("Enter your email").required("Email is required").email("Email not valid"),accountName:r.g("Enter your name").required("Name is required"),cobrandName:r.g("Enter your brand name").required("Brand name is required"),thumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.g("Enter your address").required("Address is required"),password:r.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more"),confirmPassword:r.g("Confirm your password").required("Password is required").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e},message:"Password doesn't match"})}))}),s=r.f({email:r.g("Enter your email").required("Email is required").email("Email not valid"),cobrandName:r.g("Enter your brand name").required("Brand name is required"),thumbnail:r.d("Insert your image, 2 MB max").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)||!e})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),phoneNumber:r.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),address:r.g("Enter your address").required("Address is required"),password:r.g("Enter your password").min(8,"Password should be 8 characters or more"),confirmPassword:r.g("Confirm your password").when("password",(function(e,t){return t.test({test:function(t){return e&&t===e||!e},message:"Password doesn't match"})}))}),c=r.f({programName:r.g("Enter your program title").required("Program title is required"),programDescription:r.g("Enter the program description").required("Program description is required"),programThumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required"),category:r.g(),targetAudiance:r.a().min(1,"Pilih minimal 1"),contentPrograms:r.a().min(1).of(r.f({namaTahapan:r.g().required("Nama Tahapan harus diisi"),contentName:r.g().required("Judul Tahapan harus diisi"),contents:r.g().required("Isi Tahapan harus diisi"),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required"),answerKey:r.g().when("category",{is:"Ujian",then:r.g().required("Kunci Jawaban harus diisi"),otherwise:r.g()})}))}),u=r.f({programName:r.g("Enter your program title").required("Program title is required"),programDescription:r.g("Enter the program description").required("Program description is required"),startDate:r.c("Insert start date").required("Date is required")}),d=r.f({namaTahapan:r.g().required("Nama Tahapan harus diisi"),contentName:r.g().required("Judul Tahapan harus diisi"),contents:r.g().required("Isi Tahapan harus diisi")}),l=r.f({contentName:r.g("Enter your content title").required("Content title is required"),contentDescription:r.g("Enter the content description").required("Content description is required"),contents:r.g("Enter the content description").required("Content is required"),contentSource:r.g("Enter the content source").required("Content source is required"),contentThumbnail:r.d("Insert your image, 2 MB max").required("Image is required").test("imageType","Incorrect file extension, must be .jpg, .jpeg, or .png",(function(e){return e&&["image/png","image/jpg","image/jpeg"].includes(e.type)})).test("imageSize","Image file size too large, max image file size is 2 MB",(function(e){return!e||e.size<=2097152})),startDate:r.c("Insert start date").required("Date is required"),endDate:r.c("Insert end date").required("Date is required"),isActive:r.b(),topics:r.a().min(1),targetAudience:r.a().min(1)}),g=r.f({contentName:r.g("Enter your content title").required("Content title is required"),contentDescription:r.g("Enter the content description").required("Content description is required"),contents:r.g("Enter the content description").required("Content is required"),contentSource:r.g("Enter the content source").required("Content source is required"),startDate:r.c("Insert start date").required("Date is required")}),m=r.f({nameUser:r.g("Enter your content title").required("User name is required"),emailUser:r.g("Enter the content description").required("Email is required").email("Email not valid"),birdDate:r.c("Insert start date").required("Date is required")}),p=r.f({destination:r.a().min(1),messageSubject:r.g("Enter the message subject").required("Message Subject is required"),messageContent:r.g("Enter the message content").required("Message Content is required"),scheduleTime:r.c("Insert start date").required("Date is required"),mediaType:r.g("Enter the media type").required("Media type is required"),category:r.g("Enter the category").required("Category is required")}),h=r.f({audianceName:r.g("Enter your audience name").required("Audience Name is required")}),b=r.f({category:r.g("Enter category name").required("Category is required"),description:r.g("Enter description").required("Description is required")}),f=r.f({category:r.g("Enter category name").required("Category is required"),description:r.g("Enter description").required("Description is required")}),y=r.f({emailUser:r.g("Enter your email").required("Email is required").email("Email not valid"),userName:r.g("Enter your name").required("Name is required").matches(/^\S*$/,"Invalid username format"),phone:r.g("Enter your phone number").required("Phone number is required").matches(n,"Invalid phone number format"),password:r.g("Enter your password").required("Password is required").min(8,"Password should be 8 characters or more")}),j=r.f({topicName:r.g("Enter topic name").required("Topic Name is required")}),v=r.f({controlParameterName:r.g("Enter category name").required("Category is required"),controlParameterValue:r.e().required("Number is required")})},121:function(e,t,a){"use strict";a.d(t,"g",(function(){return h})),a.d(t,"o",(function(){return b})),a.d(t,"p",(function(){return f})),a.d(t,"k",(function(){return y})),a.d(t,"b",(function(){return j})),a.d(t,"m",(function(){return v})),a.d(t,"j",(function(){return q})),a.d(t,"n",(function(){return w})),a.d(t,"e",(function(){return E})),a.d(t,"a",(function(){return C})),a.d(t,"d",(function(){return N})),a.d(t,"f",(function(){return O})),a.d(t,"i",(function(){return x})),a.d(t,"c",(function(){return T})),a.d(t,"h",(function(){return D})),a.d(t,"l",(function(){return S}));var r=a(8),n=a(18),o=a.n(n),i=a(37),s=a(20),c=function(e){return o()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},d=a(25),l=function(){return{type:r.f}},g=function(){return{type:r.d}},m=function(e,t){return{type:r.b,message:e,idMessage:t}},p=function(e,t){return{type:r.c,message:e,idMessage:t}},h=function(e,t,a,n,c,u,d,h,b,f){return function(y){y(l()),y({type:r.a}),Object(i.b)(n).then((function(r){console.log(typeof r);for(var n=r,i=[],l=0;l<b.length;l++){for(var j=b[l],v={},q=0;q<j.response.length;q++)v[j.response[q]]=0;var w={nomerUrutTahapan:j.nomerUrutTahapan,namaTahapan:j.namaTahapan,contentName:j.contentName,contentType:j.contentType,contentSource:j.contentSource,contents:j.contents,startDate:j.startDate,endDate:j.endDate,topics:j.topics,targetAudiance:j.targetAudiance,respons:v,answerKey:j.answerKey};i.push(w)}var E=[];for(q=0;q<h.length;q++)E.push(h[q].value);var C,N={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:n,startDate:c,endDate:u,category:d,targetAudiance:E,contentPrograms:i};console.log(N),(C=N,o()({method:"post",url:s.a+"/cobrand/v2-programAdd",data:C,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),f.push("/cms/program"),y(p('Program "'+t+'" berhasil ditambahkan.')),y(g())})).catch((function(e){console.error("Error:",e),y(m('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),y(g())})),console.log(N)}))}},b=function(e,t,a,n,i,c,u,d,h){return function(b){b(l()),b({type:r.a});var f,y={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:n,startDate:i,endDate:c,category:u,targetAudiance:d}};console.log(y),(f=y,o()({method:"post",url:s.a+"/cobrand/programUpdate",data:f,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),h.push("/cms/program"),b(p('Program "'+a+'" berhasil diubah.')),b(g())})).catch((function(e){console.error("Error:",e),b(m('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),b(g())}))}},f=function(e,t,a,n,o,i,s,c){return function(d){d(l()),d({type:r.a});for(var h={},b=0;b<i.length;b++)h[i[b]]=0;var f={whereValues:{cobrandEmail:t,_id:e},newValues:{namaTahapan:a,contentName:n,contents:o,response:i,answerKey:s}};console.log(f),u(f).then((function(e){console.log("Success:",e.data),c.push("/cms/program/view/step"),d(p('Tahap program "'+n+'" berhasil diubah.')),d(g())})).catch((function(e){console.error("Error:",e),d(m('Tahap program "'+n+'" gagal diubah. Coba beberapa saat lagi.')),d(g())}))}},y=function(e,t,a){return function(n){n(l()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/programRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(p('Program "'+t[1]+'" berhasil dihapus.')),n(g()),a()})).catch((function(e){console.log(e),n(m('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(g()),a()}))}},j=function(e,t,a,n,o,s,u,d,h,b,f,y,j,v){return function(q){q(l()),q({type:r.a}),Object(i.b)(u).then((function(r){var u=[],l=[];y.map((function(e){u.push(e.value)})),j.map((function(e){l.push(e.value)})),console.log(typeof r);var w=r,E=f?"active":"inactive";if("Video"===o)"string"===typeof d?d='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(d)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(d).then((function(r){d='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var f={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:w,contents:d,status:E,startDate:h,endDate:b,topics:u,targetAudiance:l};console.log(f),c(f).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(p('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(m('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(f)}));else if("Image"===o){if("string"===typeof d)d='<img src="'+d+'" style="width:100%;"/>';else Object(i.b)(d).then((function(r){d='<img src="'+r+'" style="width:100%;"/>',console.log(d);var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:w,contents:d,status:E,startDate:h,endDate:b,topics:u,targetAudiance:l};console.log(i),c(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(p('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(m('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(i)}))}else if("Pdf"===o){if("string"===typeof d)d='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+d+(d.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(d).then((function(r){var i={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:w,contents:d='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:E,startDate:h,endDate:b,topics:u,targetAudiance:l};console.log(i),c(i).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(p('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(m('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(i)}))}else d='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+d+"</div></body></html>";console.log(d);var C={cobrandEmail:e,programId:t,contentName:a,contentDescription:n,contentType:o,contentSource:s,contentThumbnail:w,contents:d,status:E,startDate:h,endDate:b,topics:u,targetAudiance:l};console.log(C),c(C).then((function(e){console.log("Success:",e.data),v.push("/cms/content"),q(p('Content "'+a+'" berhasil ditambahkan.')),q(g())})).catch((function(e){console.error("Error:",e),q(m('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),q(g())})),console.log(C)}))}},v=function(e,t,a,n,o,s,c,d,h,b,f){return function(d){d(l()),d({type:r.a});if("Video"===s)"string"===typeof h?h='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(i.a)(h)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(i.b)(h).then((function(r){h='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(i.a)(r)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var l={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:h,startDate:b}};console.log(l),u(l).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),d(p('Content "'+n+'" berhasil diubah.')),d(g())})).catch((function(e){console.error("Error:",e),d(m('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),d(g())})),console.log(l)}));else if("Image"===s){if("string"===typeof h)h='<img src="'+h+'" style="width:100%;"/>';else Object(i.b)(h).then((function(r){h='<img src="'+r+'" style="width:100%;"/>',console.log(h);var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:h,startDate:b}};console.log(i),u(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),d(p('Content "'+n+'" berhasil diubah.')),d(g())})).catch((function(e){console.error("Error:",e),d(m('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),d(g())})),console.log(i)}))}else if("Pdf"===s){if("string"===typeof h)h='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+h+(h.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(i.b)(h).then((function(r){var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:h='<div style="width:100%;height:100vh;"><iframe src="'+r+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:b}};console.log(i),u(i).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),d(p('Content "'+n+'" berhasil ditambahkan.')),d(g())})).catch((function(e){console.error("Error:",e),d(m('Content "'+n+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(g())})),console.log(i)}))}else h='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h+"</div></body></html>";console.log(h);var y={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:n,contentDescription:o,contentType:s,contentSource:c,contents:h,startDate:b}};console.log(y),u(y).then((function(e){console.log("Success:",e.data),f.push("/cms/content"),d(p('Content "'+n+'" berhasil diubah.')),d(g())})).catch((function(e){console.error("Error:",e),d(m('Content "'+n+'" gagal diubah. Coba beberapa saat lagi.')),d(g())})),console.log(y)}},q=function(e,t,a){return function(n){n(l()),n({type:r.a});var i,c={whereValues:{cobrandEmail:e,_id:t[0]}};(i=c,o()({method:"post",url:s.a+"/cobrand/contentRemove",data:i,headers:{"Content-Type":"application/json"}})).then((function(e){console.log(e.data),n(p('Content "'+t[1]+'" berhasil dihapus.')),n(g()),a()})).catch((function(e){console.log(e),n(m('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),n(g()),a()}))}},w=function(e,t,a,n,o,s,c){return function(u){u(l()),u({type:r.a});var h={email:e,password:t},b={};(a&&(b=Object.assign(b,{cobrandName:a})),o&&(b=Object.assign(b,{phoneNumber:o})),s&&(b=Object.assign(b,{address:s})),c&&(b=Object.assign(b,{password:c})),n)?Object(i.b)(n).then((function(e){b=Object.assign(b,{thumbnail:e}),console.log("whereValues: ",h),console.log("newValues: ",b),Object(d.a)(h,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),h.password=c),Object(d.b)(h).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),u(p("Profil berhasil diubah.")),u(g())})).catch((function(e){console.error("Error:",e),u(m("Profil gagal diubah. Coba beberapa saat lagi.")),u(g())}))})).catch((function(e){console.error("Error:",e),u(m("Profil gagal diubah. Coba beberapa saat lagi.")),u(g())}))})):(console.log("whereValues: ",h),console.log("newValues: ",b),Object(d.a)(h,b).then((function(e){console.log("Success:",e.data),c&&(console.log("YOI BRUH"),h.password=c),Object(d.b)(h).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),u(p("Profil berhasil diubah.")),u(g())})).catch((function(e){console.error("Error:",e),u(m("Profil gagal diubah. Coba beberapa saat lagi.")),u(g())}))})).catch((function(e){console.error("Error:",e),u(m("Profil gagal diubah. Coba beberapa saat lagi.")),u(g())})))}},E=function(e,t,a,n,i,c,u,d){return function(h){h(l()),h({type:r.a});var b,f=n?i:"",y={destination:e.join(","),messageSubject:t,messageContent:a,scheduleTime:f,mediaType:c,category:u};console.log(y),(b=y,o()({method:"post",url:s.a+"/user/broadcastAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),d.push("/cms/notifications"),h(p("Notifikasi berhasil dikirim.")),h(g())})).catch((function(e){console.error("Error:",e),h(m("Notifikasi gagal dikirim. Coba beberapa saat lagi.")),h(g())})),console.log(y)}},C=function(e,t){return function(a){a(l()),a({type:r.a});var n,i={audianceName:e};console.log(i),(n=i,o()({method:"post",url:s.a+"/cms/audianceTargetAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(r){console.log("Success:",r.data),t.push("/tools/setting/target-audience"),a(p('Target pembaca "'+e+'" berhasil ditambahkan.')),a(g())})).catch((function(t){console.error("Error:",t),a(m('Target pembaca "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(g())})),console.log(i)}},N=function(e,t,a){return function(n){n(l()),n({type:r.a});var i,c={category:e,description:t};console.log(c),(i=c,o()({method:"post",url:s.a+"/cms/notificationCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),a.push("/tools/setting/notification-category"),n(p('Kategori Notifikasi "'+e+'" berhasil ditambahkan.')),n(g())})).catch((function(t){console.error("Error:",t),n(m('Kategori Notifikasi "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),n(g())})),console.log(c)}},O=function(e,t,a){return function(n){n(l()),n({type:r.a});var i,c={category:e,description:t};console.log(c),(i=c,o()({method:"post",url:s.a+"/cms/programCategoryAdd",data:i,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),a.push("/tools/setting/program-category"),n(p('Kategori Program "'+e+'" berhasil ditambahkan.')),n(g())})).catch((function(t){console.error("Error:",t),n(m('Kategori Program "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),n(g())})),console.log(c)}},x=function(e,t,a,n,i,c,u,d){return function(h){h(l()),h({type:r.a});var b,f={userName:e,password:t,userType:a,cobrandEmail:n,userLevel:i,emailUser:c,phone:u};console.log(f),(b=f,o()({method:"post",url:s.a+"/cms/userAdd",data:b,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),d.push("/tools/admin-staff"),h(p('User "'+e+'" berhasil ditambahkan.')),h(g())})).catch((function(t){console.error("Error:",t),h(m('User"'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),h(g())})),console.log(f)}},T=function(e,t){return function(a){a(l()),a({type:r.a});var n,i={topicName:e};console.log(i),(n=i,o()({method:"post",url:s.a+"/cms/contentTopicAdd",data:n,headers:{"Content-Type":"application/json"}})).then((function(r){console.log("Success:",r.data),t.push("/tools/setting/topic"),a(p('Topik konten "'+e+'" berhasil ditambahkan.')),a(g())})).catch((function(t){console.error("Error:",t),a(m('Topik konten "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(g())})),console.log(i)}},D=function(e,t,a,n,i){return function(c){c(l()),c({type:r.a});var u,d={cobrandEmail:e,controlParameterName:t,controlParameterValue:a,unit:n};console.log(d),(u=d,o()({method:"post",url:s.a+"/cobrand/configurationAdd",data:u,headers:{"Content-Type":"application/json"}})).then((function(e){console.log("Success:",e.data),i.push("/tools/setting/screentime"),c(p('Standar Screentime "'+t+'" berhasil ditambahkan.')),c(g())})).catch((function(e){console.error("Error:",e),c(m('Standar Screentime "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),c(g())})),console.log(d)}},S=function(e,t,a,n,i,c,u,d,h){return function(b){b(l()),b({type:r.a});var f,y={whereValues:{emailUser:e},newValues:{nameUser:t,emailUser:a,gender:n,birdDate:i,address:c,imagePhoto:u,phoneNumber:d}};console.log(y),(f=y,o()({method:"post",url:s.a+"/user/edit",data:f,headers:{"Content-Type":"application/json"}})).then((function(t){console.log("Success:",t.data),h.push("/cms/user"),b(p('Informasi pengguna "'+e+'" berhasil diubah.')),b(g())})).catch((function(t){console.error("Error:",t),b(m('Informasi pengguna "'+e+'" gagal diubah. Coba beberapa saat lagi.')),b(g())})),console.log(y)}}},1231:function(e,t,a){},1400:function(e,t,a){"use strict";a.r(t);a(2);var r=a(95),n=(a(1231),a(138)),o=a(6),i=a(121),s=a(36),c=a(17),u=a(120),d=a(113),l=a(0);t.default=Object(c.b)((function(e){return console.log(e.auth.isLoading),{isLoading:e.auth.isLoading}}),(function(e){return{onAddProgCategory:function(t,a,r){return e(Object(i.f)(t,a,r))}}}))((function(e){var t=e.onAddProgCategory,a=e.isLoading,i=Object(o.g)();return JSON.parse(localStorage.getItem("userData")).email,a?Object(l.jsx)(s.a,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r.a,{headingName:"Kategori Program",routes:[{path:"/tools/setting/program-category",name:"Kategori Program"},{path:"/tools/setting/program-category/add",name:"Tambah"}]}),Object(l.jsx)(n.a,{initialValues:{category:"",description:""},validationSchema:u.j,validateOnChange:!0,onSubmit:function(e){t(e.category,e.description,i)},children:function(e){var t=e.handleChange,a=e.handleSubmit,r=e.handleBlur,n=(e.setFieldValue,e.values),o=e.errors,i=e.touched;return Object(l.jsx)("form",{onSubmit:a,children:Object(l.jsxs)("div",{className:"AddProgCategory",children:[Object(l.jsx)("h1",{children:"Tambah"}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Nama Kategori Program"}),Object(l.jsx)(d.a,{type:"text",name:"category",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:n.category,onChange:t,onBlur:r}),i.category&&Object(l.jsx)("span",{className:"message__error",children:o.category})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Deskripsi"}),Object(l.jsx)(d.a,{type:"text",name:"description",className:"form-group__input form-group__input--fullwidth",placeholder:"Example",value:n.description,onChange:t,onBlur:r}),i.description&&Object(l.jsx)("span",{className:"message__error",children:o.description})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Tambah"})})]})})}}),console.log(a),a?Object(l.jsx)(s.a,{}):null]})}))},95:function(e,t,a){"use strict";a(2);var r=a(7),n=(a(96),a(0));t.a=function(e){var t=e.headingName,a=e.routes,o=void 0===a?[]:a;return Object(n.jsxs)("div",{className:"Heading",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ul",{className:"Heading__breadcumb",children:o.length>0&&o.map((function(e,t){return e.path?Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[Object(n.jsx)(r.b,{exact:!0,to:e.path,children:e.name})," "]},t):Object(n.jsxs)("li",{className:"Heading__breadcumb-item",children:[" ",Object(n.jsx)("span",{children:e.name})," "]},t)}))})]})}},96:function(e,t,a){}}]);
//# sourceMappingURL=50.bbe9f977.chunk.js.map