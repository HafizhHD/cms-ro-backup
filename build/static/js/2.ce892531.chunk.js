(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[2],{127:function(t,e,a){"use strict";a.d(e,"g",(function(){return l})),a.d(e,"q",(function(){return h})),a.d(e,"j",(function(){return p})),a.d(e,"s",(function(){return b})),a.d(e,"l",(function(){return f})),a.d(e,"b",(function(){return m})),a.d(e,"o",(function(){return g})),a.d(e,"k",(function(){return y})),a.d(e,"p",(function(){return v})),a.d(e,"e",(function(){return w})),a.d(e,"a",(function(){return j})),a.d(e,"d",(function(){return C})),a.d(e,"f",(function(){return T})),a.d(e,"i",(function(){return O})),a.d(e,"r",(function(){return k})),a.d(e,"m",(function(){return E})),a.d(e,"c",(function(){return D})),a.d(e,"h",(function(){return N})),a.d(e,"n",(function(){return S}));var n=a(9),r=(a(18),a(37)),o=a(181),i=a(26),c=function(){return{type:n.f}},s=function(){return{type:n.d}},u=function(t,e){return{type:n.b,message:t,idMessage:e}},d=function(t,e){return{type:n.c,message:t,idMessage:e}},l=function(t,e,a,i,l,h,p,b,f,m){return function(g){g(c()),g({type:n.a}),Object(r.b)(i).then((function(n){for(var r=n,i=[],c=0;c<f.length;c++){for(var y=f[c],v={},w=0;w<y.response.length;w++)v[y.response[w]]=0;var j='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+y.contents+"</div></body></html>",C={nomerUrutTahapan:y.nomerUrutTahapan,namaTahapan:y.namaTahapan,contentName:y.contentName,contentType:y.contentType,contentSource:y.contentSource,contents:j,startDate:y.startDate,endDate:y.endDate,topics:y.topics,targetAudiance:y.targetAudiance,respons:v,answerKey:y.answerKey};i.push(C)}var T=[];for(w=0;w<b.length;w++)T.push(b[w].value);var O={cobrandEmail:t,programName:e,ProgramDescription:a,programthumnail:r,startDate:l,endDate:h,category:p,targetAudiance:T,contentPrograms:i};Object(o.l)(O).then((function(t){m.push("/cms/program"),g(d('Program "'+e+'" berhasil ditambahkan.')),g(s())})).catch((function(t){console.error("Error:",t),g(u('Program "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),g(s())}))}))}},h=function(t,e,a,r,i,l,h,p,b){return function(f){f(c()),f({type:n.a});var m={whereValues:{cobrandEmail:e,_id:t},newValues:{programName:a,ProgramDescription:r,startDate:i,endDate:l,category:h,targetAudiance:p}};Object(o.o)(m).then((function(t){b.push("/cms/program"),f(d('Program "'+a+'" berhasil diubah.')),f(s())})).catch((function(t){console.error("Error:",t),f(u('Program "'+a+'" gagal diubah. Coba beberapa saat lagi.')),f(s())}))}},p=function(t,e,a,r,i,l,h,p,b,f,m,g,y,v,w){return function(j){j(c()),j({type:n.a});for(var C={},T=0;T<y.length;T++)C[y[T]]=0;var O={programId:t,cobrandEmail:e,nomerUrutTahapan:a,namaTahapan:r,contentName:i,contentType:l,contentSource:h,contents:p,startDate:b,endDate:f,topics:m,targetAudiance:g,respons:C,answerKey:v,status:"active"};Object(o.f)(O).then((function(t){w.push("/cms/program/edit/"),j(d('Tahap program "'+i+'" berhasil ditambahkan.')),j(s())})).catch((function(t){console.error("Error:",t),j(u('Tahap program "'+i+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())}))}},b=function(t,e,a,r,i,l,h,p){return function(b){b(c()),b({type:n.a});for(var f={},m=0;m<l.length;m++)f[l[m]]=0;var g={whereValues:{cobrandEmail:e,_id:t},newValues:{namaTahapan:a,contentName:r,contents:i,response:l,answerKey:h}};Object(o.h)(g).then((function(t){p.push("/cms/program/view/step"),b(d('Tahap program "'+r+'" berhasil diubah.')),b(s())})).catch((function(t){console.error("Error:",t),b(u('Tahap program "'+r+'" gagal diubah. Coba beberapa saat lagi.')),b(s())}))}},f=function(t,e,a){return function(r){r(c()),r({type:n.a});var i={whereValues:{cobrandEmail:t,_id:e[0]}};Object(o.n)(i).then((function(t){var n={whereValues:{programId:e[0]}};Object(o.g)(n).then((function(t){r(d('Program "'+e[1]+'" berhasil dihapus.')),r(s()),a()})).catch((function(t){r(d('Program "'+e[1]+'" berhasil dihapus, namun tahap pada program gagal dihapus.')),r(s()),a()}))})).catch((function(t){r(u('Program "'+e[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(s()),a()}))}},m=function(t,e,a,i,l,h,p,b,f,m,g,y,v,w){return function(j){j(c()),j({type:n.a}),Object(r.b)(p).then((function(n){var c=[],p=[];y.map((function(t){c.push(t.value)})),v.map((function(t){p.push(t.value)}));var C=n,T=g?"active":"inactive";if("Video"===l)"string"===typeof b?b='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(r.a)(b)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(r.b)(b).then((function(n){b='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(r.a)(n)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var g={cobrandEmail:t,programId:e,contentName:a,contentDescription:i,contentType:l,contentSource:h,contentThumbnail:C,contents:b,status:T,startDate:f,endDate:m,topics:c,targetAudiance:p};Object(o.f)(g).then((function(t){w.push("/cms/content"),j(d('Content "'+a+'" berhasil ditambahkan.')),j(s())})).catch((function(t){console.error("Error:",t),j(u('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())}))}));else if("Image"===l){if("string"===typeof b)b='<img src="'+b+'" style="width:100%;"/>';else Object(r.b)(b).then((function(n){var r={cobrandEmail:t,programId:e,contentName:a,contentDescription:i,contentType:l,contentSource:h,contentThumbnail:C,contents:b='<img src="'+n+'" style="width:100%;"/>',status:T,startDate:f,endDate:m,topics:c,targetAudiance:p};Object(o.f)(r).then((function(t){w.push("/cms/content"),j(d('Content "'+a+'" berhasil ditambahkan.')),j(s())})).catch((function(t){console.error("Error:",t),j(u('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())}))}))}else if("Pdf"===l){if("string"===typeof b)b='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+b+(b.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(r.b)(b).then((function(n){var r={cobrandEmail:t,programId:e,contentName:a,contentDescription:i,contentType:l,contentSource:h,contentThumbnail:C,contents:b='<div style="width:100%;height:100vh;"><iframe src="'+n+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:T,startDate:f,endDate:m,topics:c,targetAudiance:p};Object(o.f)(r).then((function(t){w.push("/cms/content"),j(d('Content "'+a+'" berhasil ditambahkan.')),j(s())})).catch((function(t){console.error("Error:",t),j(u('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())}))}))}else b='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;white-space: pre-line;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+b+"</div></body></html>";var O={cobrandEmail:t,programId:e,contentName:a,contentDescription:i,contentType:l,contentSource:h,contentThumbnail:C,contents:b,status:T,startDate:f,endDate:m,topics:c,targetAudiance:p};Object(o.f)(O).then((function(t){w.push("/cms/content"),j(d('Content "'+a+'" berhasil ditambahkan.')),j(s())})).catch((function(t){console.error("Error:",t),j(u('Content "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())}))}))}},g=function(t,e,a,i,l,h,p,b,f,m,g){return function(b){b(c()),b({type:n.a});if("Video"===h)"string"===typeof f?f='<div style="position:relative;padding-bottom:56.25%;"><iframe src="'+Object(r.a)(f)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(r.b)(f).then((function(n){f='<div style="position:relative;padding-bottom:56.25%;"><video autoplay controls src="'+Object(r.a)(n)+'" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var c={whereValues:{_id:t},newValues:{cobrandEmail:e,programId:a,contentName:i,contentDescription:l,contentType:h,contentSource:p,contents:f,startDate:m}};Object(o.h)(c).then((function(t){g.push("/cms/content"),b(d('Content "'+i+'" berhasil diubah.')),b(s())})).catch((function(t){console.error("Error:",t),b(u('Content "'+i+'" gagal diubah. Coba beberapa saat lagi.')),b(s())}))}));else if("Image"===h){if("string"===typeof f)f='<img src="'+f+'" style="width:100%;"/>';else Object(r.b)(f).then((function(n){var r={whereValues:{_id:t},newValues:{cobrandEmail:e,programId:a,contentName:i,contentDescription:l,contentType:h,contentSource:p,contents:f='<img src="'+n+'" style="width:100%;"/>',startDate:m}};Object(o.h)(r).then((function(t){g.push("/cms/content"),b(d('Content "'+i+'" berhasil diubah.')),b(s())})).catch((function(t){console.error("Error:",t),b(u('Content "'+i+'" gagal diubah. Coba beberapa saat lagi.')),b(s())}))}))}else if("Pdf"===h){if("string"===typeof f)f='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+f+(f.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(r.b)(f).then((function(n){var r={whereValues:{_id:t},newValues:{cobrandEmail:e,programId:a,contentName:i,contentDescription:l,contentType:h,contentSource:p,contents:f='<div style="width:100%;height:100vh;"><iframe src="'+n+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:m}};Object(o.h)(r).then((function(t){g.push("/cms/content"),b(d('Content "'+i+'" berhasil ditambahkan.')),b(s())})).catch((function(t){console.error("Error:",t),b(u('Content "'+i+'" gagal ditambahkan. Coba beberapa saat lagi.')),b(s())}))}))}else f='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+f+"</div></body></html>";var y={whereValues:{_id:t},newValues:{cobrandEmail:e,programId:a,contentName:i,contentDescription:l,contentType:h,contentSource:p,contents:f,startDate:m}};Object(o.h)(y).then((function(t){g.push("/cms/content"),b(d('Content "'+i+'" berhasil diubah.')),b(s())})).catch((function(t){console.error("Error:",t),b(u('Content "'+i+'" gagal diubah. Coba beberapa saat lagi.')),b(s())}))}},y=function(t,e,a){return function(r){r(c()),r({type:n.a});var i={whereValues:{cobrandEmail:t,_id:e[0]}};Object(o.g)(i).then((function(t){r(d('Content "'+e[1]+'" berhasil dihapus.')),r(s()),a()})).catch((function(t){r(u('Content "'+e[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(s()),a()}))}},v=function(t,e,a,o,l,h,p){return function(b){b(c()),b({type:n.a});var f={email:t,password:e},m={};(a&&(m=Object.assign(m,{cobrandName:a})),l&&(m=Object.assign(m,{phoneNumber:l})),h&&(m=Object.assign(m,{address:h})),p&&(m=Object.assign(m,{password:p})),o)?Object(r.b)(o).then((function(t){m=Object.assign(m,{thumbnail:t}),Object(i.a)(f,m).then((function(t){p&&(f.password=p),Object(i.b)(f).then((function(t){var e=t.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",e.resultData.token),localStorage.setItem("userData",JSON.stringify(e.resultData.user)),b(d("Profil berhasil diubah.")),b(s())})).catch((function(t){console.error("Error:",t),b(u("Profil gagal diubah. Coba beberapa saat lagi.")),b(s())}))})).catch((function(t){console.error("Error:",t),b(u("Profil gagal diubah. Coba beberapa saat lagi.")),b(s())}))})):Object(i.a)(f,m).then((function(t){p&&(f.password=p),Object(i.b)(f).then((function(t){var e=t.data;localStorage.setItem("accessToken",e.resultData.token),localStorage.setItem("userData",JSON.stringify(e.resultData.user)),b(d("Profil berhasil diubah.")),b(s())})).catch((function(t){console.error("Error:",t),b(u("Profil gagal diubah. Coba beberapa saat lagi.")),b(s())}))})).catch((function(t){console.error("Error:",t),b(u("Profil gagal diubah. Coba beberapa saat lagi.")),b(s())}))}},w=function(t,e,a,r,i,l,h,p){return function(b){b(c()),b({type:n.a});var f=r?i:"",m={destination:t.join(","),messageSubject:e,messageContent:a,scheduleTime:f,mediaType:l,category:h};Object(o.k)(m).then((function(t){p.push("/cms/notifications"),b(d("Notifikasi berhasil dikirim.")),b(s())})).catch((function(t){console.error("Error:",t),b(u("Notifikasi gagal dikirim. Coba beberapa saat lagi.")),b(s())}))}},j=function(t,e){return function(a){a(c()),a({type:n.a});var r={audianceName:t};Object(o.e)(r).then((function(n){e.push("/tools/setting/target-audience"),a(d('Target pembaca "'+t+'" berhasil ditambahkan.')),a(s())})).catch((function(e){console.error("Error:",e),a(u('Target pembaca "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(s())}))}},C=function(t,e,a){return function(r){r(c()),r({type:n.a});var i={category:t,description:e};Object(o.j)(i).then((function(e){a.push("/tools/setting/notification-category"),r(d('Kategori Notifikasi "'+t+'" berhasil ditambahkan.')),r(s())})).catch((function(e){console.error("Error:",e),r(u('Kategori Notifikasi "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(s())}))}},T=function(t,e,a){return function(r){r(c()),r({type:n.a});var i={category:t,description:e};Object(o.m)(i).then((function(e){a.push("/tools/setting/program-category"),r(d('Kategori Program "'+t+'" berhasil ditambahkan.')),r(s())})).catch((function(e){console.error("Error:",e),r(u('Kategori Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(s())}))}},O=function(t,e,a,r,i,l,h,p){return function(b){b(c()),b({type:n.a});var f={userName:t,password:e,userType:a,cobrandEmail:r,userLevel:i,emailUser:l,phone:h};Object(o.a)(f).then((function(e){p.push("/tools/admin-staff"),b(d('User "'+t+'" berhasil ditambahkan.')),b(s())})).catch((function(e){console.error("Error:",e),b(u('User"'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),b(s())}))}},k=function(t,e,a,r,i,l,h,p){return function(b){b(c()),b({type:n.a});var f={whereValues:{_id:localStorage.getItem("staffSelected")},newKeyValues:{userName:t,password:e,userType:a,cobrandEmail:r,userLevel:i,emailUser:l,phone:h}};Object(o.c)(f).then((function(e){p.push("/tools/admin-staff"),b(d('User "'+t+'" berhasil diubah.')),b(s()),localStorage.removeItem("staffSelected")})).catch((function(e){console.error("Error:",e),b(u('User"'+t+'" gagal diubah. Coba beberapa saat lagi.')),b(s())}))}},E=function(t,e,a){return function(t){t(c()),t({type:n.a});var r={whereValues:{_id:e[0]}};Object(o.b)(r).then((function(n){t(d('User "'+e[1]+'" berhasil dihapus.')),t(s()),a()})).catch((function(n){t(u('User "'+e[1]+'" gagal dihapus. Coba beberapa saat lagi.')),t(s()),a()}))}},D=function(t,e){return function(a){a(c()),a({type:n.a});var r={topicName:t};Object(o.i)(r).then((function(n){e.push("/tools/setting/topic"),a(d('Topik konten "'+t+'" berhasil ditambahkan.')),a(s())})).catch((function(e){console.error("Error:",e),a(u('Topik konten "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),a(s())}))}},N=function(t,e,a,r,i){return function(l){l(c()),l({type:n.a});var h={cobrandEmail:t,controlParameterName:e,controlParameterValue:a,unit:r};Object(o.p)(h).then((function(t){i.push("/tools/setting/screentime"),l(d('Standar Screentime "'+e+'" berhasil ditambahkan.')),l(s())})).catch((function(t){console.error("Error:",t),l(u('Standar Screentime "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),l(s())}))}},S=function(t,e,a,r,i,l,h,p,b){return function(f){f(c()),f({type:n.a});var m={whereValues:{emailUser:t},newValues:{nameUser:e,emailUser:a,gender:r,birdDate:i,address:l,imagePhoto:h,phoneNumber:p}};Object(o.d)(m).then((function(e){b.push("/cms/user"),f(d('Informasi pengguna "'+t+'" berhasil diubah.')),f(s())})).catch((function(e){console.error("Error:",e),f(u('Informasi pengguna "'+t+'" gagal diubah. Coba beberapa saat lagi.')),f(s())}))}}},181:function(t,e,a){"use strict";a.d(e,"l",(function(){return i})),a.d(e,"o",(function(){return c})),a.d(e,"n",(function(){return s})),a.d(e,"f",(function(){return u})),a.d(e,"h",(function(){return d})),a.d(e,"g",(function(){return l})),a.d(e,"k",(function(){return h})),a.d(e,"e",(function(){return p})),a.d(e,"j",(function(){return b})),a.d(e,"m",(function(){return f})),a.d(e,"i",(function(){return m})),a.d(e,"a",(function(){return g})),a.d(e,"c",(function(){return y})),a.d(e,"b",(function(){return v})),a.d(e,"p",(function(){return w})),a.d(e,"d",(function(){return j}));var n=a(18),r=a.n(n),o=a(20),i=function(t){return r()({method:"post",url:o.a+"/cobrand/v2-programAdd",data:t,headers:{"Content-Type":"application/json"}})},c=function(t){return r()({method:"post",url:o.a+"/cobrand/programUpdate",data:t,headers:{"Content-Type":"application/json"}})},s=function(t){return r()({method:"post",url:o.a+"/cobrand/programRemove",data:t,headers:{"Content-Type":"application/json"}})},u=function(t){return r()({method:"post",url:o.a+"/cobrand/contentAdd",data:t,headers:{"Content-Type":"application/json"}})},d=function(t){return r()({method:"post",url:o.a+"/cobrand/contentUpdate",data:t,headers:{"Content-Type":"application/json"}})},l=function(t){return r()({method:"post",url:o.a+"/cobrand/contentRemove",data:t,headers:{"Content-Type":"application/json"}})},h=function(t){return r()({method:"post",url:o.a+"/user/broadcastAdd",data:t,headers:{"Content-Type":"application/json"}})},p=function(t){return r()({method:"post",url:o.a+"/cms/audianceTargetAdd",data:t,headers:{"Content-Type":"application/json"}})},b=function(t){return r()({method:"post",url:o.a+"/cms/notificationCategoryAdd",data:t,headers:{"Content-Type":"application/json"}})},f=function(t){return r()({method:"post",url:o.a+"/cms/programCategoryAdd",data:t,headers:{"Content-Type":"application/json"}})},m=function(t){return r()({method:"post",url:o.a+"/cms/contentTopicAdd",data:t,headers:{"Content-Type":"application/json"}})},g=function(t){return r()({method:"post",url:o.a+"/cms/userAdd",data:t,headers:{"Content-Type":"application/json"}})},y=function(t){return r()({method:"post",url:o.a+"/cms/userUpdate",data:t,headers:{"Content-Type":"application/json"}})},v=function(t){return r()({method:"post",url:o.a+"/cms/userRemove",data:t,headers:{"Content-Type":"application/json"}})},w=function(t){return r()({method:"post",url:o.a+"/cobrand/configurationAdd",data:t,headers:{"Content-Type":"application/json"}})},j=function(t){return r()({method:"post",url:o.a+"/user/edit",data:t,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=2.ce892531.chunk.js.map