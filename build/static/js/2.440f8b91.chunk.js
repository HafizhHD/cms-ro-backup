(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[2],{129:function(e,t,a){"use strict";a.d(t,"g",(function(){return d})),a.d(t,"p",(function(){return g})),a.d(t,"j",(function(){return h})),a.d(t,"q",(function(){return p})),a.d(t,"l",(function(){return b})),a.d(t,"b",(function(){return f})),a.d(t,"n",(function(){return m})),a.d(t,"k",(function(){return y})),a.d(t,"o",(function(){return v})),a.d(t,"e",(function(){return w})),a.d(t,"a",(function(){return j})),a.d(t,"d",(function(){return C})),a.d(t,"f",(function(){return T})),a.d(t,"i",(function(){return O})),a.d(t,"c",(function(){return S})),a.d(t,"h",(function(){return k})),a.d(t,"m",(function(){return D}));var n=a(8),o=(a(18),a(37)),r=a(181),c=a(26),i=function(){return{type:n.f}},s=function(){return{type:n.d}},l=function(e,t){return{type:n.b,message:e,idMessage:t}},u=function(e,t){return{type:n.c,message:e,idMessage:t}},d=function(e,t,a,c,d,g,h,p,b,f){return function(m){m(i()),m({type:n.a}),Object(o.b)(c).then((function(n){console.log(typeof n);for(var o=n,c=[],i=0;i<b.length;i++){for(var y=b[i],v={},w=0;w<y.response.length;w++)v[y.response[w]]=0;var j='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+y.contents+"</div></body></html>",C={nomerUrutTahapan:y.nomerUrutTahapan,namaTahapan:y.namaTahapan,contentName:y.contentName,contentType:y.contentType,contentSource:y.contentSource,contents:j,startDate:y.startDate,endDate:y.endDate,topics:y.topics,targetAudiance:y.targetAudiance,respons:v,answerKey:y.answerKey};c.push(C)}var T=[];for(w=0;w<p.length;w++)T.push(p[w].value);var O={cobrandEmail:e,programName:t,ProgramDescription:a,programthumnail:o,startDate:d,endDate:g,category:h,targetAudiance:T,contentPrograms:c};console.log(O),Object(r.j)(O).then((function(e){console.log("Success:",e.data),f.push("/cms/program"),m(u('Program "'+t+'" berhasil ditambahkan.')),m(s())})).catch((function(e){console.error("Error:",e),m(l('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),m(s())})),console.log(O)}))}},g=function(e,t,a,o,c,d,g,h,p){return function(b){b(i()),b({type:n.a});var f={whereValues:{cobrandEmail:t,_id:e},newValues:{programName:a,ProgramDescription:o,startDate:c,endDate:d,category:g,targetAudiance:h}};console.log(f),Object(r.m)(f).then((function(e){console.log("Success:",e.data),p.push("/cms/program"),b(u('Program "'+a+'" berhasil diubah.')),b(s())})).catch((function(e){console.error("Error:",e),b(l('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),b(s())}))}},h=function(e,t,a,o,c,d,g,h,p,b,f,m,y,v,w){return function(j){j(i()),j({type:n.a});for(var C={},T=0;T<y.length;T++)C[y[T]]=0;var O={programId:e,cobrandEmail:t,nomerUrutTahapan:a,namaTahapan:o,contentName:c,contentType:d,contentSource:g,contents:h,startDate:p,endDate:b,topics:f,targetAudiance:m,respons:C,answerKey:v,status:"active"};console.log(O),Object(r.d)(O).then((function(e){console.log("Success:",e.data),w.push("/cms/program/edit/"),j(u('Tahap program "'+c+'" berhasil ditambahkan.')),j(s())})).catch((function(e){console.error("Error:",e),j(l('Tahap program "'+c+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())}))}},p=function(e,t,a,o,c,d,g,h){return function(p){p(i()),p({type:n.a});for(var b={},f=0;f<d.length;f++)b[d[f]]=0;var m={whereValues:{cobrandEmail:t,_id:e},newValues:{namaTahapan:a,contentName:o,contents:c,response:d,answerKey:g}};console.log(m),Object(r.f)(m).then((function(e){console.log("Success:",e.data),h.push("/cms/program/view/step"),p(u('Tahap program "'+o+'" berhasil diubah.')),p(s())})).catch((function(e){console.error("Error:",e),p(l('Tahap program "'+o+'" gagal diubah. Coba beberapa saat lagi.')),p(s())}))}},b=function(e,t,a){return function(o){o(i()),o({type:n.a});var c={whereValues:{cobrandEmail:e,_id:t[0]}};Object(r.l)(c).then((function(e){console.log(e.data);var n={whereValues:{programId:t[0]}};Object(r.e)(n).then((function(e){console.log(e.data),o(u('Program "'+t[1]+'" berhasil dihapus.')),o(s()),a()})).catch((function(e){console.log(e),o(u('Program "'+t[1]+'" berhasil dihapus, namun tahap pada program gagal dihapus.')),o(s()),a()}))})).catch((function(e){console.log(e),o(l('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),o(s()),a()}))}},f=function(e,t,a,c,d,g,h,p,b,f,m,y,v,w){return function(j){j(i()),j({type:n.a}),Object(o.b)(h).then((function(n){var i=[],h=[];y.map((function(e){i.push(e.value)})),v.map((function(e){h.push(e.value)})),console.log(typeof n);var C=n,T=m?"active":"inactive";if("Video"===d)"string"===typeof p?p='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(o.a)(p)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(o.b)(p).then((function(n){p='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(o.a)(n)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var m={cobrandEmail:e,programId:t,contentName:a,contentDescription:c,contentType:d,contentSource:g,contentThumbnail:C,contents:p,status:T,startDate:b,endDate:f,topics:i,targetAudiance:h};console.log(m),Object(r.d)(m).then((function(e){console.log("Success:",e.data),w.push("/cms/content"),j(u('Content "'+a+'" berhasil ditambahkan.')),j(s())})).catch((function(e){console.error("Error:",e),j(l('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())})),console.log(m)}));else if("Image"===d){if("string"===typeof p)p='<img src="'+p+'" style="width:100%;"/>';else Object(o.b)(p).then((function(n){p='<img src="'+n+'" style="width:100%;"/>',console.log(p);var o={cobrandEmail:e,programId:t,contentName:a,contentDescription:c,contentType:d,contentSource:g,contentThumbnail:C,contents:p,status:T,startDate:b,endDate:f,topics:i,targetAudiance:h};console.log(o),Object(r.d)(o).then((function(e){console.log("Success:",e.data),w.push("/cms/content"),j(u('Content "'+a+'" berhasil ditambahkan.')),j(s())})).catch((function(e){console.error("Error:",e),j(l('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())})),console.log(o)}))}else if("Pdf"===d){if("string"===typeof p)p='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+p+(p.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(o.b)(p).then((function(n){var o={cobrandEmail:e,programId:t,contentName:a,contentDescription:c,contentType:d,contentSource:g,contentThumbnail:C,contents:p='<div style="width:100%;height:100vh;"><iframe src="'+n+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:T,startDate:b,endDate:f,topics:i,targetAudiance:h};console.log(o),Object(r.d)(o).then((function(e){console.log("Success:",e.data),w.push("/cms/content"),j(u('Content "'+a+'" berhasil ditambahkan.')),j(s())})).catch((function(e){console.error("Error:",e),j(l('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())})),console.log(o)}))}else p='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+p+"</div></body></html>";console.log(p);var O={cobrandEmail:e,programId:t,contentName:a,contentDescription:c,contentType:d,contentSource:g,contentThumbnail:C,contents:p,status:T,startDate:b,endDate:f,topics:i,targetAudiance:h};console.log(O),Object(r.d)(O).then((function(e){console.log("Success:",e.data),w.push("/cms/content"),j(u('Content "'+a+'" berhasil ditambahkan.')),j(s())})).catch((function(e){console.error("Error:",e),j(l('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())})),console.log(O)}))}},m=function(e,t,a,c,d,g,h,p,b,f,m){return function(p){p(i()),p({type:n.a});if("Video"===g)"string"===typeof b?b='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(o.a)(b)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(o.b)(b).then((function(n){b='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(o.a)(n)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var i={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:c,contentDescription:d,contentType:g,contentSource:h,contents:b,startDate:f}};console.log(i),Object(r.f)(i).then((function(e){console.log("Success:",e.data),m.push("/cms/content"),p(u('Content "'+c+'" berhasil diubah.')),p(s())})).catch((function(e){console.error("Error:",e),p(l('Content "'+c+'" gagal diubah. Coba beberapa saat lagi.')),p(s())})),console.log(i)}));else if("Image"===g){if("string"===typeof b)b='<img src="'+b+'" style="width:100%;"/>';else Object(o.b)(b).then((function(n){b='<img src="'+n+'" style="width:100%;"/>',console.log(b);var o={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:c,contentDescription:d,contentType:g,contentSource:h,contents:b,startDate:f}};console.log(o),Object(r.f)(o).then((function(e){console.log("Success:",e.data),m.push("/cms/content"),p(u('Content "'+c+'" berhasil diubah.')),p(s())})).catch((function(e){console.error("Error:",e),p(l('Content "'+c+'" gagal diubah. Coba beberapa saat lagi.')),p(s())})),console.log(o)}))}else if("Pdf"===g){if("string"===typeof b)b='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+b+(b.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(o.b)(b).then((function(n){var o={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:c,contentDescription:d,contentType:g,contentSource:h,contents:b='<div style="width:100%;height:100vh;"><iframe src="'+n+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:f}};console.log(o),Object(r.f)(o).then((function(e){console.log("Success:",e.data),m.push("/cms/content"),p(u('Content "'+c+'" berhasil ditambahkan.')),p(s())})).catch((function(e){console.error("Error:",e),p(l('Content "'+c+'" gagal ditambahkan. Coba beberapa saat lagi.')),p(s())})),console.log(o)}))}else b='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+b+"</div></body></html>";console.log(b);var y={whereValues:{_id:e},newValues:{cobrandEmail:t,programId:a,contentName:c,contentDescription:d,contentType:g,contentSource:h,contents:b,startDate:f}};console.log(y),Object(r.f)(y).then((function(e){console.log("Success:",e.data),m.push("/cms/content"),p(u('Content "'+c+'" berhasil diubah.')),p(s())})).catch((function(e){console.error("Error:",e),p(l('Content "'+c+'" gagal diubah. Coba beberapa saat lagi.')),p(s())})),console.log(y)}},y=function(e,t,a){return function(o){o(i()),o({type:n.a});var c={whereValues:{cobrandEmail:e,_id:t[0]}};Object(r.e)(c).then((function(e){console.log(e.data),o(u('Content "'+t[1]+'" berhasil dihapus.')),o(s()),a()})).catch((function(e){console.log(e),o(l('Content "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),o(s()),a()}))}},v=function(e,t,a,r,d,g,h){return function(p){p(i()),p({type:n.a});var b={email:e,password:t},f={};(a&&(f=Object.assign(f,{cobrandName:a})),d&&(f=Object.assign(f,{phoneNumber:d})),g&&(f=Object.assign(f,{address:g})),h&&(f=Object.assign(f,{password:h})),r)?Object(o.b)(r).then((function(e){f=Object.assign(f,{thumbnail:e}),console.log("whereValues: ",b),console.log("newValues: ",f),Object(c.a)(b,f).then((function(e){console.log("Success:",e.data),h&&(console.log("YOI BRUH"),b.password=h),Object(c.b)(b).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),p(u("Profil berhasil diubah.")),p(s())})).catch((function(e){console.error("Error:",e),p(l("Profil gagal diubah. Coba beberapa saat lagi.")),p(s())}))})).catch((function(e){console.error("Error:",e),p(l("Profil gagal diubah. Coba beberapa saat lagi.")),p(s())}))})):(console.log("whereValues: ",b),console.log("newValues: ",f),Object(c.a)(b,f).then((function(e){console.log("Success:",e.data),h&&(console.log("YOI BRUH"),b.password=h),Object(c.b)(b).then((function(e){console.log("Success 2: ",e.data);var t=e.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),p(u("Profil berhasil diubah.")),p(s())})).catch((function(e){console.error("Error:",e),p(l("Profil gagal diubah. Coba beberapa saat lagi.")),p(s())}))})).catch((function(e){console.error("Error:",e),p(l("Profil gagal diubah. Coba beberapa saat lagi.")),p(s())})))}},w=function(e,t,a,o,c,d,g,h){return function(p){p(i()),p({type:n.a});var b=o?c:"",f={destination:e.join(","),messageSubject:t,messageContent:a,scheduleTime:b,mediaType:d,category:g};console.log(f),Object(r.i)(f).then((function(e){console.log("Success:",e.data),h.push("/cms/notifications"),p(u("Notifikasi berhasil dikirim.")),p(s())})).catch((function(e){console.error("Error:",e),p(l("Notifikasi gagal dikirim. Coba beberapa saat lagi.")),p(s())})),console.log(f)}},j=function(e,t){return function(a){a(i()),a({type:n.a});var o={audianceName:e};console.log(o),Object(r.c)(o).then((function(n){console.log("Success:",n.data),t.push("/tools/setting/target-audience"),a(u('Target pembaca "'+e+'" berhasil ditambahkan.')),a(s())})).catch((function(t){console.error("Error:",t),a(l('Target pembaca "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(s())})),console.log(o)}},C=function(e,t,a){return function(o){o(i()),o({type:n.a});var c={category:e,description:t};console.log(c),Object(r.h)(c).then((function(t){console.log("Success:",t.data),a.push("/tools/setting/notification-category"),o(u('Kategori Notifikasi "'+e+'" berhasil ditambahkan.')),o(s())})).catch((function(t){console.error("Error:",t),o(l('Kategori Notifikasi "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),o(s())})),console.log(c)}},T=function(e,t,a){return function(o){o(i()),o({type:n.a});var c={category:e,description:t};console.log(c),Object(r.k)(c).then((function(t){console.log("Success:",t.data),a.push("/tools/setting/program-category"),o(u('Kategori Program "'+e+'" berhasil ditambahkan.')),o(s())})).catch((function(t){console.error("Error:",t),o(l('Kategori Program "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),o(s())})),console.log(c)}},O=function(e,t,a,o,c,d,g,h){return function(p){p(i()),p({type:n.a});var b={userName:e,password:t,userType:a,cobrandEmail:o,userLevel:c,emailUser:d,phone:g};console.log(b),Object(r.a)(b).then((function(t){console.log("Success:",t.data),h.push("/tools/admin-staff"),p(u('User "'+e+'" berhasil ditambahkan.')),p(s())})).catch((function(t){console.error("Error:",t),p(l('User"'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),p(s())})),console.log(b)}},S=function(e,t){return function(a){a(i()),a({type:n.a});var o={topicName:e};console.log(o),Object(r.g)(o).then((function(n){console.log("Success:",n.data),t.push("/tools/setting/topic"),a(u('Topik konten "'+e+'" berhasil ditambahkan.')),a(s())})).catch((function(t){console.error("Error:",t),a(l('Topik konten "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(s())})),console.log(o)}},k=function(e,t,a,o,c){return function(d){d(i()),d({type:n.a});var g={cobrandEmail:e,controlParameterName:t,controlParameterValue:a,unit:o};console.log(g),Object(r.n)(g).then((function(e){console.log("Success:",e.data),c.push("/tools/setting/screentime"),d(u('Standar Screentime "'+t+'" berhasil ditambahkan.')),d(s())})).catch((function(e){console.error("Error:",e),d(l('Standar Screentime "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),d(s())})),console.log(g)}},D=function(e,t,a,o,c,d,g,h,p){return function(b){b(i()),b({type:n.a});var f={whereValues:{emailUser:e},newValues:{nameUser:t,emailUser:a,gender:o,birdDate:c,address:d,imagePhoto:g,phoneNumber:h}};console.log(f),Object(r.b)(f).then((function(t){console.log("Success:",t.data),p.push("/cms/user"),b(u('Informasi pengguna "'+e+'" berhasil diubah.')),b(s())})).catch((function(t){console.error("Error:",t),b(l('Informasi pengguna "'+e+'" gagal diubah. Coba beberapa saat lagi.')),b(s())})),console.log(f)}}},181:function(e,t,a){"use strict";a.d(t,"j",(function(){return c})),a.d(t,"m",(function(){return i})),a.d(t,"l",(function(){return s})),a.d(t,"d",(function(){return l})),a.d(t,"f",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"i",(function(){return g})),a.d(t,"c",(function(){return h})),a.d(t,"h",(function(){return p})),a.d(t,"k",(function(){return b})),a.d(t,"g",(function(){return f})),a.d(t,"a",(function(){return m})),a.d(t,"n",(function(){return y})),a.d(t,"b",(function(){return v}));var n=a(18),o=a.n(n),r=a(20),c=function(e){return o()({method:"post",url:r.a+"/cobrand/v2-programAdd",data:e,headers:{"Content-Type":"application/json"}})},i=function(e){return o()({method:"post",url:r.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return o()({method:"post",url:r.a+"/cobrand/programRemove",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return o()({method:"post",url:r.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return o()({method:"post",url:r.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return o()({method:"post",url:r.a+"/cobrand/contentRemove",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return o()({method:"post",url:r.a+"/user/broadcastAdd",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return o()({method:"post",url:r.a+"/cms/audianceTargetAdd",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return o()({method:"post",url:r.a+"/cms/notificationCategoryAdd",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return o()({method:"post",url:r.a+"/cms/programCategoryAdd",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return o()({method:"post",url:r.a+"/cms/contentTopicAdd",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return o()({method:"post",url:r.a+"/cms/userAdd",data:e,headers:{"Content-Type":"application/json"}})},y=function(e){return o()({method:"post",url:r.a+"/cobrand/configurationAdd",data:e,headers:{"Content-Type":"application/json"}})},v=function(e){return o()({method:"post",url:r.a+"/user/edit",data:e,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=2.440f8b91.chunk.js.map