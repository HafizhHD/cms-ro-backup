(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[0],{124:function(a,t,e){"use strict";e.d(t,"i",(function(){return p})),e.d(t,"w",(function(){return h})),e.d(t,"m",(function(){return m})),e.d(t,"y",(function(){return b})),e.d(t,"q",(function(){return f})),e.d(t,"c",(function(){return g})),e.d(t,"u",(function(){return y})),e.d(t,"o",(function(){return v})),e.d(t,"v",(function(){return k})),e.d(t,"f",(function(){return j})),e.d(t,"a",(function(){return C})),e.d(t,"e",(function(){return T})),e.d(t,"h",(function(){return A})),e.d(t,"l",(function(){return w})),e.d(t,"x",(function(){return O})),e.d(t,"s",(function(){return E})),e.d(t,"b",(function(){return I})),e.d(t,"j",(function(){return S})),e.d(t,"g",(function(){return D})),e.d(t,"n",(function(){return N})),e.d(t,"r",(function(){return P})),e.d(t,"p",(function(){return V})),e.d(t,"d",(function(){return U})),e.d(t,"k",(function(){return F})),e.d(t,"t",(function(){return M}));var n=e(8),r=(e(18),e(37)),o=e(185),i=e(27),c=e(98),u=function(){return{type:n.f}},s=function(){return{type:n.d}},d=function(a,t){return{type:n.b,message:a,idMessage:t}},l=function(a,t){return{type:n.c,message:a,idMessage:t}},p=function(a,t,e,i,p,h,m,b,f,g){return function(y){y(u()),y({type:n.a}),Object(r.b)(i).then((function(n){for(var r=n,i=[],u=0;u<b.length;u++)i.push(b[u].value);var v={cobrandEmail:a,programName:t,ProgramDescription:e,programthumnail:r,startDate:p,endDate:h,category:m,targetAudiance:i};Object(o.s)(v).then((function(e){console.log("response:",e.data);for(var n=e.data.resultData.progrram._id,r=[],u=0;u<f.length;u++){for(var h=f[u],m={},b=0;b<h.response.length;b++)m[h.response[b]]=0;var v='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h.contents+"</div></body></html>",k={programId:n,cobrandEmail:a,nomerUrutTahapan:h.nomerUrutTahapan,namaTahapan:h.namaTahapan,contentName:h.contentName,contentType:h.contentType,contentSource:h.contentSource,contents:v,startDate:h.startDate,endDate:h.endDate,topics:h.topics,targetAudiance:h.targetAudiance,status:"active",respons:m,answerKey:h.answerKey};r.push(Object(o.k)(k).then((function(a){console.log("Respons "+u,a)}))),console.log("content Program 1",r)}var j={whereKeyValues:{userType:"parent",packageId:"com.byasia.ruangortu"},limit:Number.MAX_SAFE_INTEGER};Object(c.v)(j).then((function(e){console.log(e);var n=e.data.users,c=[];n.forEach((function(a){c.push(a.emailUser)}));var u=c.join(",");if(r.length===f.length){g.push("/cms/program"),y(l('Program "'+t+'" berhasil ditambahkan.'));var h={cobrandEmail:a,destination:u,messageSubject:"Program Baru Untuk Anak",messageContent:"Hi Papa mama Ada Program Baru Lho! Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa program baru, papa mama bisa bagikan program tersebut ke anak Anda. Yuk ikuti program barunya.",scheduleTime:p,mediaType:"Device",category:"Informasi"};Object(o.p)(h).then((function(){h.destination=i.join(", "),h.messageSubject="Hi Adik-Adik Ada Program Baru Lho!",h.messageContent="Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa program baru, yuk adik-adik kita ikuti program baru nya, Seru Lho!",g.push("/cms/program"),y(d('Program "'+t+'" berhasil ditambahkan.')),y(s())}))}else{var m={cobrandEmail:a,destination:u,messageSubject:"Hai Papa Mama Ada Program Baru Lho! ",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa program baru, papa mama bisa bagikan program tersebut ke anak Anda. Yuk ikuti program barunya.",scheduleTime:p,mediaType:"Device",category:"Informasi"};Object(o.p)(m).then((function(){m.destination=i.join(", "),m.messageSubject="Hi Adik-Adik Ada Program Baru Lho!",m.messageContent="Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa program baru, yuk adik-adik kita ikuti program baru nya, Seru Lho!",g.push("/cms/program"),y(d('Program "'+t+'" berhasil ditambahkan, namun beberapa tahap gagal ditambahkan.')),y(s())}))}}))})).catch((function(a){console.log("Error:",a),y(d('Program "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),y(s())}))}))}},h=function(a,t,e,r,i,c,p,h,m){return function(b){b(u()),b({type:n.a});var f={whereValues:{cobrandEmail:t,_id:a},newValues:{programName:e,ProgramDescription:r,startDate:i,endDate:c,category:p,targetAudiance:h}};Object(o.v)(f).then((function(a){m.push("/cms/program"),b(l('Program "'+e+'" berhasil diubah.')),b(s())})).catch((function(a){console.error("Error:",a),b(d('Program "'+e+'" gagal diubah. Coba beberapa saat lagi.')),b(s())}))}},m=function(a,t,e,r,i,c,p,h,m,b,f,g,y,v,k){return function(j){j(u()),j({type:n.a});for(var C={},T=0;T<y.length;T++)C[y[T]]=0;var A={programId:a,cobrandEmail:t,nomerUrutTahapan:e,namaTahapan:r,contentName:i,contentType:c,contentSource:p,contents:'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h+"</div></body></html>",startDate:m,endDate:b,topics:f,targetAudiance:g,respons:C,answerKey:v,status:"active"};console.log(A),Object(o.j)(A).then((function(a){k.push("/cms/program/edit/"),j(l('Tahap program "'+i+'" berhasil ditambahkan.')),j(s())})).catch((function(a){console.error("Error:",a),j(d('Tahap program "'+i+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(s())}))}},b=function(a,t,e,r,i,c,p,h){return function(m){m(u()),m({type:n.a});for(var b={},f=0;f<c.length;f++)b[c[f]]=0;var g={whereValues:{cobrandEmail:t,_id:a},newValues:{namaTahapan:e,contentName:r,contents:'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+i+"</div></body></html>",respons:b,answerKey:p}};Object(o.m)(g).then((function(a){h.push("/cms/program/view/step"),m(l('Tahap program "'+r+'" berhasil diubah.')),m(s())})).catch((function(a){console.error("Error:",a),m(d('Tahap program "'+r+'" gagal diubah. Coba beberapa saat lagi.')),m(s())}))}},f=function(a,t,e){return function(r){r(u()),r({type:n.a});var i={whereValues:{cobrandEmail:a,_id:t[0]}};Object(o.u)(i).then((function(a){var n={whereValues:{programId:t[0]}};Object(o.l)(n).then((function(a){r(l('Program "'+t[1]+'" berhasil dihapus.')),r(s()),e()})).catch((function(a){r(l('Program "'+t[1]+'" berhasil dihapus, namun tahap pada program gagal dihapus.')),r(s()),e()}))})).catch((function(a){r(d('Program "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(s()),e()}))}},g=function(a,t,e,i,p,h,m,b,f,g,y,v,k,j,C,T){return function(A){A(u()),A({type:n.a}),console.log("Comunity: "+j),Object(r.b)(m).then((function(n){var u=[],m=[];v.map((function(a){u.push(a.value)})),k.map((function(a){m.push(a.value)}));var w=n,O=y?"active":"inactive";if("Video"===p)"string"===typeof b?b='<div><iframe src="'+Object(r.a)(b)+'" style="width:100%;height:30vh;" frameborder="0" width="100%" height="30vh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(r.b)(b).then((function(n){b='<div><video autoplay controls src="'+Object(r.a)(n)+'" style="width:100%;height:30vh;" frameborder="0" width="100%" height="30vh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var y={cobrandEmail:a,programId:t,contentName:e,contentDescription:i,contentType:p,contentSource:h,contentThumbnail:w,contents:b,status:O,startDate:f,endDate:g,topics:u,targetAudiance:m,cobrandComunityId:j,groupMitraAsuhId:C};Object(o.j)(y).then((function(t){var n={whereKeyValues:{packageId:"com.byasia.ruangortu"},limit:Number.MAX_SAFE_INTEGER};Object(c.v)(n).then((function(t){console.log(t);var n=t.data.users,r=[];n.forEach((function(a){r.push(a.emailUser)}));var i=r.join(","),c={cobrandEmail:a,destination:i,messageSubject:"Hai, Ada Artikel Baru Lho!",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa artikel baru, yuk dicek sekarang.",scheduleTime:f,mediaType:"Device",category:"Informasi"};Object(o.p)(c).then((function(a){T.push("/cms/content"),A(l('Artikel "'+e+'" berhasil ditambahkan.')),A(s())}))}))})).catch((function(a){console.error("Error:",a),A(d('Content "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),A(s())}))}));else if("Image"===p){if("string"===typeof b)b='<img src="'+b+'" style="width:100%;"/>';else Object(r.b)(b).then((function(n){var r={cobrandEmail:a,programId:t,contentName:e,contentDescription:i,contentType:p,contentSource:h,contentThumbnail:w,contents:b='<img src="'+n+'" style="width:100%;"/>',status:O,startDate:f,endDate:g,topics:u,targetAudiance:m,cobrandComunityId:j,groupMitraAsuhId:C};Object(o.j)(r).then((function(t){var n={whereKeyValues:{packageId:"com.byasia.ruangortu"},limit:Number.MAX_SAFE_INTEGER};Object(c.v)(n).then((function(t){console.log(t);var n=t.data.users,r=[];n.forEach((function(a){r.push(a.emailUser)}));var i=r.join(","),c={cobrandEmail:a,destination:i,messageSubject:"Hai, Ada Artikel Baru Lho!",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa artikel baru, yuk dicek sekarang.",scheduleTime:f,mediaType:"Device",category:"Informasi"};Object(o.p)(c).then((function(a){T.push("/cms/content"),A(l('Artikel "'+e+'" berhasil ditambahkan.')),A(s())}))}))})).catch((function(a){console.error("Error:",a),A(d('Content "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),A(s())}))}))}else if("Pdf"===p){if("string"===typeof b)b='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+b+(b.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(r.b)(b).then((function(n){var r={cobrandEmail:a,programId:t,contentName:e,contentDescription:i,contentType:p,contentSource:h,contentThumbnail:w,contents:b='<div style="width:100%;height:100vh;"><iframe src="'+n+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:O,startDate:f,endDate:g,topics:u,targetAudiance:m,cobrandComunityId:j,groupMitraAsuhId:C};Object(o.j)(r).then((function(t){var n={whereKeyValues:{packageId:"com.byasia.ruangortu"},limit:Number.MAX_SAFE_INTEGER};Object(c.v)(n).then((function(t){console.log(t);var n=t.data.users,r=[];n.forEach((function(a){r.push(a.emailUser)}));var i=r.join(","),c={cobrandEmail:a,destination:i,messageSubject:"Hai, Ada Artikel Baru Lho!",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa artikel baru, yuk dicek sekarang.",scheduleTime:f,mediaType:"Device",category:"Informasi"};Object(o.p)(c).then((function(a){T.push("/cms/content"),A(l('Artikel "'+e+'" berhasil ditambahkan.')),A(s())}))}))})).catch((function(a){console.error("Error:",a),A(d('Artikel "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),A(s())}))}))}else b='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+b+"</div></body></html>";var E={cobrandEmail:a,programId:t,contentName:e,contentDescription:i,contentType:p,contentSource:h,contentThumbnail:w,contents:b,status:O,startDate:f,endDate:g,topics:u,targetAudiance:m,cobrandComunityId:j,groupMitraAsuhId:C};console.log(E),Object(o.j)(E).then((function(t){if(""!==j){var n={whereKeyValues:{cobrandComunityId:j},limit:Number.MAX_SAFE_INTEGER};Object(c.g)(n).then((function(t){console.log(t);var n=t.data.Data,r=[];n.forEach((function(a){r.push(a.emailUser)}));var i=r.join(","),c={cobrandEmail:a,destination:i,messageSubject:"Hai, Ada Artikel Baru Lho!",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa artikel baru, yuk dicek sekarang.",scheduleTime:f,mediaType:"Device",category:"Informasi"};Object(o.p)(c).then((function(a){T.push("/cms/content"),A(l('Artikel "'+e+'" berhasil ditambahkan.')),A(s())}))}))}else{var r={whereKeyValues:{packageId:"com.byasia.ruangortu"},limit:Number.MAX_SAFE_INTEGER};Object(c.v)(r).then((function(t){console.log(t);var n=t.data.users,r=[];n.forEach((function(a){r.push(a.emailUser)}));var i=r.join(","),c={cobrandEmail:a,destination:i,messageSubject:"Hai, Ada Artikel Baru Lho!",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa artikel baru, yuk dicek sekarang.",scheduleTime:f,mediaType:"Device",category:"Informasi"};Object(o.p)(c).then((function(a){T.push("/cms/content"),A(l('Artikel "'+e+'" berhasil ditambahkan.')),A(s())}))}))}})).catch((function(a){console.error("Error:",a),A(d('Artikel "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),A(s())}))}))}},y=function(a,t,e,i,c,p,h,m,b,f,g){return function(m){m(u()),m({type:n.a});if("Video"===p)"string"===typeof b?b='<div><iframe src="'+Object(r.a)(b)+'" style="width:100%;height:30vh;" frameborder="0" width="100%" height="30vh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(r.b)(b).then((function(n){b='<div><video autoplay controls src="'+Object(r.a)(n)+'" style="width:100%;height:30vh;" frameborder="0" width="100%" height="30vh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var u={whereValues:{_id:a},newValues:{cobrandEmail:t,programId:e,contentName:i,contentDescription:c,contentType:p,contentSource:h,contents:b,startDate:f}};Object(o.m)(u).then((function(a){g.push("/cms/content"),m(l('Artikel "'+i+'" berhasil diubah.')),m(s())})).catch((function(a){console.error("Error:",a),m(d('Artikel "'+i+'" gagal diubah. Coba beberapa saat lagi.')),m(s())}))}));else if("Image"===p){if("string"===typeof b)b='<img src="'+b+'" style="width:100%;"/>';else Object(r.b)(b).then((function(n){var r={whereValues:{_id:a},newValues:{cobrandEmail:t,programId:e,contentName:i,contentDescription:c,contentType:p,contentSource:h,contents:b='<img src="'+n+'" style="width:100%;"/>',startDate:f}};Object(o.m)(r).then((function(a){g.push("/cms/content"),m(l('Content "'+i+'" berhasil diubah.')),m(s())})).catch((function(a){console.error("Error:",a),m(d('Content "'+i+'" gagal diubah. Coba beberapa saat lagi.')),m(s())}))}))}else if("Pdf"===p){if("string"===typeof b)b='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+b+(b.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(r.b)(b).then((function(n){var r={whereValues:{_id:a},newValues:{cobrandEmail:t,programId:e,contentName:i,contentDescription:c,contentType:p,contentSource:h,contents:b='<div style="width:100%;height:100vh;"><iframe src="'+n+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:f}};Object(o.m)(r).then((function(a){g.push("/cms/content"),m(l('Artikel "'+i+'" berhasil ditambahkan.')),m(s())})).catch((function(a){console.error("Error:",a),m(d('Artikel "'+i+'" gagal ditambahkan. Coba beberapa saat lagi.')),m(s())}))}))}else b='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+b+"</div></body></html>";var y={whereValues:{_id:a},newValues:{cobrandEmail:t,programId:e,contentName:i,contentDescription:c,contentType:p,contentSource:h,contents:b,startDate:f}};Object(o.m)(y).then((function(a){g.push("/cms/content"),m(l('Artikel "'+i+'" berhasil diubah.')),m(s())})).catch((function(a){console.error("Error:",a),m(d('Artikel "'+i+'" gagal diubah. Coba beberapa saat lagi.')),m(s())}))}},v=function(a,t,e){return function(r){r(u()),r({type:n.a});var i={whereValues:{cobrandEmail:a,_id:t[0]}};Object(o.l)(i).then((function(a){r(l('Artikel "'+t[1]+'" berhasil dihapus.')),r(s()),e()})).catch((function(a){r(d('Artikel "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(s()),e()}))}},k=function(a,t,e,o,c,p,h){return function(m){m(u()),m({type:n.a});var b={email:a,password:t},f={};(e&&(f=Object.assign(f,{cobrandName:e})),c&&(f=Object.assign(f,{phoneNumber:c})),p&&(f=Object.assign(f,{address:p})),h&&(f=Object.assign(f,{password:h})),o)?Object(r.b)(o).then((function(a){f=Object.assign(f,{thumbnail:a}),Object(i.a)(b,f).then((function(a){h&&(b.password=h),Object(i.b)(b).then((function(a){var t=a.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),m(l("Profil berhasil diubah.")),m(s())})).catch((function(a){console.error("Error:",a),m(d("Profil gagal diubah. Coba beberapa saat lagi.")),m(s())}))})).catch((function(a){console.error("Error:",a),m(d("Profil gagal diubah. Coba beberapa saat lagi.")),m(s())}))})):Object(i.a)(b,f).then((function(a){h&&(b.password=h),Object(i.b)(b).then((function(a){var t=a.data;localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),m(l("Profil berhasil diubah.")),m(s())})).catch((function(a){console.error("Error:",a),m(d("Profil gagal diubah. Coba beberapa saat lagi.")),m(s())}))})).catch((function(a){console.error("Error:",a),m(d("Profil gagal diubah. Coba beberapa saat lagi.")),m(s())}))}},j=function(a,t,e,r,i,c,p,h,m,b){return function(f){f(u()),f({type:n.a});var g=i?c:"",y={cobrandEmail:a,destination:t.join(","),messageSubject:e,messageContent:r,scheduleTime:g,mediaType:p,category:h,cobrandComunityId:m};Object(o.p)(y).then((function(a){b.push("/cms/notifications"),f(l("Notifikasi berhasil dikirim.")),f(s())})).catch((function(a){console.error("Error:",a),f(d("Notifikasi gagal dikirim. Coba beberapa saat lagi.")),f(s())}))}},C=function(a,t){return function(e){e(u()),e({type:n.a});var r={audianceName:a};Object(o.e)(r).then((function(n){t.push("/tools/setting/target-audience"),e(l('Target pembaca "'+a+'" berhasil ditambahkan.')),e(s())})).catch((function(t){console.error("Error:",t),e(d('Target pembaca "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(s())}))}},T=function(a,t,e){return function(r){r(u()),r({type:n.a});var i={category:a,description:t};Object(o.o)(i).then((function(t){e.push("/tools/setting/notification-category"),r(l('Kategori Notifikasi "'+a+'" berhasil ditambahkan.')),r(s())})).catch((function(t){console.error("Error:",t),r(d('Kategori Notifikasi "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(s())}))}},A=function(a,t,e){return function(r){r(u()),r({type:n.a});var i={category:a,description:t};Object(o.t)(i).then((function(t){e.push("/tools/setting/program-category"),r(l('Kategori Program "'+a+'" berhasil ditambahkan.')),r(s())})).catch((function(t){console.error("Error:",t),r(d('Kategori Program "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(s())}))}},w=function(a,t,e,r,i,c,p,h,m){return function(b){b(u()),b({type:n.a});var f={userName:a,password:t,userType:e,cobrandEmail:r,userLevel:i,emailUser:c,phone:p,cobrandComunityId:h};Object(o.a)(f).then((function(t){m.push("/tools/admin-staff"),b(l('User "'+a+'" berhasil ditambahkan.')),b(s())})).catch((function(t){console.error("Error:",t),b(d('User"'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),b(s())}))}},O=function(a,t,e,r,i,c,p,h,m){return function(b){b(u()),b({type:n.a});var f={whereValues:{_id:localStorage.getItem("staffSelected")},newKeyValues:{userName:a,password:t,userType:e,cobrandEmail:r,userLevel:i,emailUser:c,phone:p,cobrandComunityId:h}};Object(o.c)(f).then((function(t){m.push("/tools/admin-staff"),b(l('User "'+a+'" berhasil diubah.')),b(s()),localStorage.removeItem("staffSelected")})).catch((function(t){console.error("Error:",t),b(d('User"'+a+'" gagal diubah. Coba beberapa saat lagi.')),b(s())}))}},E=function(a,t,e){return function(a){a(u()),a({type:n.a});var r={whereValues:{_id:t[0]}};Object(o.b)(r).then((function(n){a(l('User "'+t[1]+'" berhasil dihapus.')),a(s()),e()})).catch((function(n){a(d('User "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),a(s()),e()}))}},I=function(a,t,e,r){return function(i){i(u()),i({type:n.a});var c={cobrandComunityId:a,cobrandComunityName:a,cobrandEmail:t,partComunityId:a+"-"+e};Object(o.f)(c).then((function(t){r.push("/tools/setting/komunitas"),i(l('Komunitas "'+a+'" berhasil ditambahkan.')),i(s())})).catch((function(t){console.error("Error:",t),i(d('Komunitas "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),i(s())}))}},S=function(a,t,e,r){return function(i){i(u()),i({type:n.a});var c={groupMitraAsuhId:a,groupMitraAsuhName:a,cobrandEmail:t,memberSekolah:e};Object(o.w)(c).then((function(t){r.push("/tools/setting/school-group"),i(l('Kelompok mitra asuh "'+a+'" berhasil ditambahkan.')),i(s())})).catch((function(t){console.error("Error:",t),i(d('Kelompok mitra asuh "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),i(s())}))}},D=function(a,t,e,r,i,c,p){return function(h){h(u()),h({type:n.a});var m={prayDate:a,shubuh:t,dzuhur:e,ashr:r,maghrib:i,isya:c};Object(o.q)(m).then((function(t){p.push("/cms/praytime-message"),h(l('Hadits/Pesan untuk tanggal "'+a+'" berhasil ditambahkan.')),h(s())})).catch((function(t){console.error("Error:",t),h(d('Hadits/Pesan untuk tanggal "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),h(s())}))}},N=function(a,t,e){return function(a){a(u()),a({type:n.a});var r={whereValues:{cobrandComunityId:t[0]}};Object(o.g)(r).then((function(n){a(l('Komunitas "'+t[1]+'" berhasil dihapus.')),a(s()),e()})).catch((function(n){a(d('Komunitas "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),a(s()),e()}))}},P=function(a,t,e){return function(a){a(u()),a({type:n.a});var r={whereValues:{groupMitraAsuhId:t[0]}};Object(o.x)(r).then((function(n){a(l('Kelompok mitra asuh "'+t[1]+'" berhasil dihapus.')),a(s()),e()})).catch((function(n){a(d('Kelompok mitra asuh "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),a(s()),e()}))}},V=function(a,t,e){return function(a){a(u()),a({type:n.a});var r={whereValues:{_id:t[0]}};Object(o.r)(r).then((function(n){a(l('Hadits/Pesan tanggal "'+t[1]+'" berhasil dihapus.')),a(s()),e()})).catch((function(n){a(d('Hadits/Pesan tanggal "'+t[1]+'" gagal dihapus. Coba beberapa saat lagi.')),a(s()),e()}))}},U=function(a,t){return function(e){e(u()),e({type:n.a});var r={topicName:a};Object(o.n)(r).then((function(n){t.push("/tools/setting/topic"),e(l('Topik konten "'+a+'" berhasil ditambahkan.')),e(s())})).catch((function(t){console.error("Error:",t),e(d('Topik konten "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),e(s())}))}},F=function(a,t,e,r,i){return function(c){c(u()),c({type:n.a});var p={cobrandEmail:a,controlParameterName:t,controlParameterValue:e,unit:r};Object(o.y)(p).then((function(a){i.push("/tools/setting/screentime"),c(l('Standar Screentime "'+t+'" berhasil ditambahkan.')),c(s())})).catch((function(a){console.error("Error:",a),c(d('Standar Screentime "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),c(s())}))}},M=function(a,t,e,r,i,c,p,h,m,b){return function(f){f(u()),f({type:n.a});var g={whereValues:{emailUser:a},newValues:{nameUser:t,emailUser:e,gender:r,birdDate:i,address:c,imagePhoto:p,phoneNumber:h}};Object(o.d)(g).then((function(t){var n=[];Object(o.i)({whereValues:{emailUser:a}}).then((function(t){console.log(t.data),m.map((function(a){var t={cobrandComunityId:a.value,emailUser:e};n.push(Object(o.h)(t))})),b.push("/cms/user"),f(l('Informasi pengguna "'+a+'" berhasil diubah.')),f(s())})),b.push("/cms/user"),f(l('Informasi pengguna "'+a+'" berhasil diubah.')),f(s())})).catch((function(t){console.error("Error:",t),f(d('Informasi pengguna "'+a+'" gagal diubah. Coba beberapa saat lagi.')),f(s())}))}}},185:function(a,t,e){"use strict";e.d(t,"s",(function(){return s})),e.d(t,"v",(function(){return d})),e.d(t,"u",(function(){return l})),e.d(t,"j",(function(){return p})),e.d(t,"k",(function(){return h})),e.d(t,"m",(function(){return m})),e.d(t,"l",(function(){return b})),e.d(t,"p",(function(){return f})),e.d(t,"e",(function(){return g})),e.d(t,"o",(function(){return y})),e.d(t,"t",(function(){return v})),e.d(t,"n",(function(){return k})),e.d(t,"a",(function(){return j})),e.d(t,"c",(function(){return C})),e.d(t,"b",(function(){return T})),e.d(t,"f",(function(){return A})),e.d(t,"g",(function(){return w})),e.d(t,"h",(function(){return O})),e.d(t,"i",(function(){return E})),e.d(t,"w",(function(){return I})),e.d(t,"x",(function(){return S})),e.d(t,"y",(function(){return D})),e.d(t,"q",(function(){return N})),e.d(t,"r",(function(){return P})),e.d(t,"d",(function(){return V}));var n=e(136),r=e.n(n),o=e(127),i=e(18),c=e.n(i),u=e(20),s=function(a){return c()({method:"post",url:u.a+"/cobrand/programAdd",data:a,headers:{"Content-Type":"application/json"}})},d=function(a){return c()({method:"post",url:u.a+"/cobrand/programUpdate",data:a,headers:{"Content-Type":"application/json"}})},l=function(a){return c()({method:"post",url:u.a+"/cobrand/programRemove",data:a,headers:{"Content-Type":"application/json"}})},p=function(a){return c()({method:"post",url:u.a+"/cobrand/contentAdd",data:a,headers:{"Content-Type":"application/json"}})},h=function(){var a=Object(o.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c()({method:"post",url:u.a+"/cobrand/contentAdd",data:t,headers:{"Content-Type":"application/json"}});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}(),m=function(a){return c()({method:"post",url:u.a+"/cobrand/contentUpdate",data:a,headers:{"Content-Type":"application/json"}})},b=function(a){return c()({method:"post",url:u.a+"/cobrand/contentRemove",data:a,headers:{"Content-Type":"application/json"}})},f=function(a){return c()({method:"post",url:u.a+"/user/broadcastAdd",data:a,headers:{"Content-Type":"application/json"}})},g=function(a){return c()({method:"post",url:u.a+"/cms/audianceTargetAdd",data:a,headers:{"Content-Type":"application/json"}})},y=function(a){return c()({method:"post",url:u.a+"/cms/notificationCategoryAdd",data:a,headers:{"Content-Type":"application/json"}})},v=function(a){return c()({method:"post",url:u.a+"/cms/programCategoryAdd",data:a,headers:{"Content-Type":"application/json"}})},k=function(a){return c()({method:"post",url:u.a+"/cms/contentTopicAdd",data:a,headers:{"Content-Type":"application/json"}})},j=function(a){return c()({method:"post",url:u.a+"/cms/userAdd",data:a,headers:{"Content-Type":"application/json"}})},C=function(a){return c()({method:"post",url:u.a+"/cms/userUpdate",data:a,headers:{"Content-Type":"application/json"}})},T=function(a){return c()({method:"post",url:u.a+"/cms/userRemove",data:a,headers:{"Content-Type":"application/json"}})},A=function(a){return c()({method:"post",url:u.a+"/cobrand/cobrandComunityAdd",data:a,headers:{"Content-Type":"application/json"}})},w=function(a){return c()({method:"post",url:u.a+"/cobrand/cobrandComunityRemove",data:a,headers:{"Content-Type":"application/json"}})},O=function(){var a=Object(o.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c()({method:"post",url:u.a+"/cobrand/cobrandComunityMemberAdd",data:t,headers:{"Content-Type":"application/json"}});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}(),E=function(a){return c()({method:"post",url:u.a+"/cobrand/cobrandComunityMemberRemove",data:a,headers:{"Content-Type":"application/json"}})},I=function(a){return c()({method:"post",url:u.a+"/cobrand/groupMitraAsuhAdd",data:a,headers:{"Content-Type":"application/json"}})},S=function(a){return c()({method:"post",url:u.a+"/cobrand/groupMitraAsuhRemove",data:a,headers:{"Content-Type":"application/json"}})},D=function(a){return c()({method:"post",url:u.a+"/cobrand/configurationAdd",data:a,headers:{"Content-Type":"application/json"}})},N=function(a){return c()({method:"post",url:u.a+"/cobrand/prayAlertMessageAdd",data:a,headers:{"Content-Type":"application/json"}})},P=function(a){return c()({method:"post",url:u.a+"/cobrand/prayAlertMessageRemove",data:a,headers:{"Content-Type":"application/json"}})},V=function(a){return c()({method:"post",url:u.a+"/user/edit",data:a,headers:{"Content-Type":"application/json"}})}},98:function(a,t,e){"use strict";e.d(t,"r",(function(){return i})),e.d(t,"h",(function(){return c})),e.d(t,"v",(function(){return u})),e.d(t,"s",(function(){return s})),e.d(t,"d",(function(){return d})),e.d(t,"l",(function(){return l})),e.d(t,"c",(function(){return p})),e.d(t,"m",(function(){return h})),e.d(t,"b",(function(){return m})),e.d(t,"o",(function(){return b})),e.d(t,"n",(function(){return f})),e.d(t,"e",(function(){return g})),e.d(t,"j",(function(){return y})),e.d(t,"i",(function(){return v})),e.d(t,"k",(function(){return k})),e.d(t,"q",(function(){return j})),e.d(t,"a",(function(){return C})),e.d(t,"f",(function(){return T})),e.d(t,"g",(function(){return A})),e.d(t,"u",(function(){return w})),e.d(t,"t",(function(){return O})),e.d(t,"p",(function(){return E}));var n=e(18),r=e.n(n),o=e(20),i=function(a){return r()({method:"post",url:o.a+"/cobrand/programFilter",data:a,headers:{"Content-Type":"application/json"}})},c=function(a){return r()({method:"post",url:o.a+"/cobrand/contentFilter",data:a,headers:{"Content-Type":"application/json"}})},u=function(a){return r()({method:"post",url:o.a+"/user/userFilter",data:a,headers:{"Content-Type":"application/json"}})},s=function(a){return r()({method:"post",url:o.a+"/cobrand/redZoneFilter",data:a,headers:{"Content-Type":"application/json"}})},d=function(a){return r()({method:"post",url:o.a+"/user/appUsageFilter",data:a,headers:{"Content-Type":"application/json"}})},l=function(a){return r()({method:"post",url:o.a+"/user/deviceUsageScheduleFilter",data:a,headers:{"Content-Type":"application/json"}})},p=function(a){return r()({method:"post",url:o.a+"/user/appUsageLimitFilter",data:a,headers:{"Content-Type":"application/json"}})},h=function(a){return r()({method:"post",url:o.a+"/user/childModeAsuhFilter",data:a,headers:{"Content-Type":"application/json"}})},m=function(a){return r()({method:"post",url:o.a+"/user/appIconFilter",data:a,headers:{"Content-Type":"application/json"}})},b=function(a){return r()({method:"post",url:o.a+"/user/broadcastFilter",data:a,headers:{"Content-Type":"application/json"}})},f=function(a){return r()({method:"post",url:o.a+"/cms/notificationCategoryFilter",data:a,headers:{"Content-Type":"application/json"}})},g=function(a){return r()({method:"post",url:o.a+"/cms/audianceTargetFilter",data:a,headers:{"Content-Type":"application/json"}})},y=function(a){return r()({method:"post",url:o.a+"/cms/contentTopicFilter",data:a,headers:{"Content-Type":"application/json"}})},v=function(a){return r()({method:"post",url:o.a+"/user/userContentResponFilter",data:a,headers:{"Content-Type":"application/json"}})},k=function(a){return r()({method:"post",url:o.a+"/user/userContentViewFilter",data:a,headers:{"Content-Type":"application/json"}})},j=function(a){return r()({method:"post",url:o.a+"/cms/programCategoryFilter",data:a,headers:{"Content-Type":"application/json"}})},C=function(a){return r()({method:"post",url:o.a+"/cms/userFilter",data:a,headers:{"Content-Type":"application/json"}})},T=function(a){return r()({method:"post",url:o.a+"/cobrand/cobrandComunityFilter",data:a,headers:{"Content-Type":"application/json"}})},A=function(a){return r()({method:"post",url:o.a+"/cobrand/cobrandComunityMemberFilter",data:a,headers:{"Content-Type":"application/json"}})},w=function(a){return r()({method:"post",url:o.a+"/cobrand/AlAzharSchoolFilter",data:a,headers:{"Content-Type":"application/json"}})},O=function(a){return r()({method:"post",url:o.a+"/cobrand/groupMitraAsuhList",data:a,headers:{"Content-Type":"application/json"}})},E=function(a){return r()({method:"post",url:o.a+"/cobrand/prayAlertMessageFilter",data:a,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=0.fb672106.chunk.js.map