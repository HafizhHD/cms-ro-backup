(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[3],{122:function(e,a,t){"use strict";t.d(a,"i",(function(){return p})),t.d(a,"y",(function(){return h})),t.d(a,"m",(function(){return m})),t.d(a,"A",(function(){return b})),t.d(a,"r",(function(){return f})),t.d(a,"c",(function(){return g})),t.d(a,"v",(function(){return y})),t.d(a,"p",(function(){return v})),t.d(a,"x",(function(){return k})),t.d(a,"f",(function(){return j})),t.d(a,"a",(function(){return A})),t.d(a,"e",(function(){return C})),t.d(a,"h",(function(){return T})),t.d(a,"l",(function(){return E})),t.d(a,"z",(function(){return w})),t.d(a,"t",(function(){return I})),t.d(a,"b",(function(){return O})),t.d(a,"j",(function(){return S})),t.d(a,"g",(function(){return N})),t.d(a,"w",(function(){return V})),t.d(a,"o",(function(){return U})),t.d(a,"s",(function(){return D})),t.d(a,"q",(function(){return _})),t.d(a,"d",(function(){return K})),t.d(a,"k",(function(){return P})),t.d(a,"u",(function(){return M})),t.d(a,"n",(function(){return F})),t.d(a,"B",(function(){return R}));var n=t(8),r=(t(18),t(37)),o=t(158),i=t(27),u=t(99),s=function(){return{type:n.f}},c=function(){return{type:n.d}},d=function(e,a){return{type:n.b,message:e,idMessage:a}},l=function(e,a){return{type:n.c,message:e,idMessage:a}},p=function(e,a,t,i,p,h,m,b,f,g){return function(y){y(s()),y({type:n.a}),Object(r.b)(i).then((function(n){for(var r=n,i=[],s=0;s<b.length;s++)i.push(b[s].value);var v={cobrandEmail:e,programName:a,ProgramDescription:t,programthumnail:r,startDate:p,endDate:h,category:m,targetAudiance:i};Object(o.A)(v).then((function(t){console.log("response:",t.data);for(var n=t.data.resultData.progrram._id,r=[],s=0;s<f.length;s++){for(var h=f[s],m={},b=0;b<h.response.length;b++)m[h.response[b]]=0;var v='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h.contents+"</div></body></html>",k={programId:n,cobrandEmail:e,nomerUrutTahapan:h.nomerUrutTahapan,namaTahapan:h.namaTahapan,contentName:h.contentName,contentType:h.contentType,contentSource:h.contentSource,contents:v,startDate:h.startDate,endDate:h.endDate,topics:h.topics,targetAudiance:h.targetAudiance,status:"active",respons:m,answerKey:h.answerKey};r.push(Object(o.o)(k).then((function(e){console.log("Respons "+s,e)}))),console.log("content Program 1",r)}var j={whereKeyValues:{userType:"parent",packageId:"com.byasia.ruangortu"},limit:Number.MAX_SAFE_INTEGER};Object(u.x)(j).then((function(t){console.log(t);var n=t.data.users,u=[];n.forEach((function(e){u.push(e.emailUser)}));var s=u.join(",");if(r.length===f.length){g.push("/cms/program"),y(l('Program "'+a+'" berhasil ditambahkan.'));var h={cobrandEmail:e,destination:s,messageSubject:"Program Baru Untuk Anak",messageContent:"Hi Papa mama Ada Program Baru Lho! Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa program baru, papa mama bisa bagikan program tersebut ke anak Anda. Yuk ikuti program barunya.",scheduleTime:p,mediaType:"Device",category:"Informasi"};Object(o.x)(h).then((function(){h.destination=i.join(", "),h.messageSubject="Hi Adik-Adik Ada Program Baru Lho!",h.messageContent="Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa program baru, yuk adik-adik kita ikuti program baru nya, Seru Lho!",g.push("/cms/program"),y(d('Program "'+a+'" berhasil ditambahkan.')),y(c())}))}else{var m={cobrandEmail:e,destination:s,messageSubject:"Hai Papa Mama Ada Program Baru Lho! ",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa program baru, papa mama bisa bagikan program tersebut ke anak Anda. Yuk ikuti program barunya.",scheduleTime:p,mediaType:"Device",category:"Informasi"};Object(o.x)(m).then((function(){m.destination=i.join(", "),m.messageSubject="Hi Adik-Adik Ada Program Baru Lho!",m.messageContent="Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa program baru, yuk adik-adik kita ikuti program baru nya, Seru Lho!",g.push("/cms/program"),y(d('Program "'+a+'" berhasil ditambahkan, namun beberapa tahap gagal ditambahkan.')),y(c())}))}}))})).catch((function(e){console.log("Error:",e),y(d('Program "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),y(c())}))}))}},h=function(e,a,t,r,i,u,p,h,m){return function(b){b(s()),b({type:n.a});var f={whereValues:{cobrandEmail:a,_id:e},newValues:{programName:t,ProgramDescription:r,startDate:i,endDate:u,category:p,targetAudiance:h}};Object(o.D)(f).then((function(e){m.push("/cms/program"),b(l('Program "'+t+'" berhasil diubah.')),b(c())})).catch((function(e){console.error("Error:",e),b(d('Program "'+t+'" gagal diubah. Coba beberapa saat lagi.')),b(c())}))}},m=function(e,a,t,r,i,u,p,h,m,b,f,g,y,v,k){return function(j){j(s()),j({type:n.a});for(var A={},C=0;C<y.length;C++)A[y[C]]=0;var T={programId:e,cobrandEmail:a,nomerUrutTahapan:t,namaTahapan:r,contentName:i,contentType:u,contentSource:p,contents:'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+h+"</div></body></html>",startDate:m,endDate:b,topics:f,targetAudiance:g,respons:A,answerKey:v,status:"active"};console.log(T),Object(o.n)(T).then((function(e){k.push("/cms/program/edit/"),j(l('Tahap program "'+i+'" berhasil ditambahkan.')),j(c())})).catch((function(e){console.error("Error:",e),j(d('Tahap program "'+i+'" gagal ditambahkan. Coba beberapa saat lagi.')),j(c())}))}},b=function(e,a,t,r,i,u,p,h){return function(m){m(s()),m({type:n.a});for(var b={},f=0;f<u.length;f++)b[u[f]]=0;var g={whereValues:{cobrandEmail:a,_id:e},newValues:{namaTahapan:t,contentName:r,contents:'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+i+"</div></body></html>",respons:b,answerKey:p}};Object(o.q)(g).then((function(e){h.push("/cms/program/view/step"),m(l('Tahap program "'+r+'" berhasil diubah.')),m(c())})).catch((function(e){console.error("Error:",e),m(d('Tahap program "'+r+'" gagal diubah. Coba beberapa saat lagi.')),m(c())}))}},f=function(e,a,t){return function(r){r(s()),r({type:n.a});var i={whereValues:{cobrandEmail:e,_id:a[0]}};Object(o.C)(i).then((function(e){var n={whereValues:{programId:a[0]}};Object(o.p)(n).then((function(e){r(l('Program "'+a[1]+'" berhasil dihapus.')),r(c()),t()})).catch((function(e){r(l('Program "'+a[1]+'" berhasil dihapus, namun tahap pada program gagal dihapus.')),r(c()),t()}))})).catch((function(e){r(d('Program "'+a[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(c()),t()}))}},g=function(e,a,t,i,p,h,m,b,f,g,y,v,k,j,A,C,T){return function(E){E(s()),E({type:n.a}),console.log("Comunity: "+j);var w=j;Object(r.b)(m).then((function(n){var s=[],m=[];v.map((function(e){s.push(e.value)})),k.map((function(e){m.push(e.value)}));var I=n,O=y?"active":"inactive";if("Video"===p)"string"===typeof b?b='<div><iframe src="'+Object(r.a)(b)+'" style="width:100%;height:30vh;" frameborder="0" width="100%" height="30vh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(r.b)(b).then((function(n){b='<div><video autoplay controls src="'+Object(r.a)(n)+'" style="width:100%;height:30vh;" frameborder="0" width="100%" height="30vh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var y={cobrandEmail:e,programId:a,contentName:t,contentDescription:i,contentType:p,contentSource:h,contentThumbnail:I,contents:b,status:O,startDate:f,endDate:g,topics:s,targetAudiance:m,cobrandComunityId:j,groupMitraAsuhId:A,sekolah:C};Object(o.n)(y).then((function(a){var n=""!==C?{whereKeyValues:{packageId:"com.byasia.ruangortu",sekolah:C},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:""!==A?{whereKeyValues:{packageId:"com.byasia.ruangortu",groupMitraAsuhId:A},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:""!==w?{whereKeyValues:{packageId:"com.byasia.ruangortu",cobrandComunityId:w},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:{whereKeyValues:{packageId:"com.byasia.ruangortu"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};Object(u.x)(n).then((function(a){console.log(a);var n=a.data.users,r=[];n.forEach((function(e){r.push(e.emailUser)}));var i=r.join(","),u={cobrandEmail:e,destination:i,messageSubject:"Hai, Ada Artikel Baru Lho!",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa artikel baru, yuk dicek sekarang.",scheduleTime:f,mediaType:"Device",category:"Informasi"};Object(o.x)(u).then((function(e){T.push("/cms/content"),E(l('Artikel "'+t+'" berhasil ditambahkan.')),E(c())}))}))})).catch((function(e){console.error("Error:",e),E(d('Content "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),E(c())}))}));else if("Image"===p){if("string"===typeof b)b='<img src="'+b+'" style="width:100%;"/>';else Object(r.b)(b).then((function(n){var r={cobrandEmail:e,programId:a,contentName:t,contentDescription:i,contentType:p,contentSource:h,contentThumbnail:I,contents:b='<img src="'+n+'" style="width:100%;"/>',status:O,startDate:f,endDate:g,topics:s,targetAudiance:m,cobrandComunityId:j,groupMitraAsuhId:A,sekolah:C};Object(o.n)(r).then((function(a){var n=""!==C?{whereKeyValues:{packageId:"com.byasia.ruangortu",sekolah:C},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:""!==A?{whereKeyValues:{packageId:"com.byasia.ruangortu",groupMitraAsuhId:A},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:""!==w?{whereKeyValues:{packageId:"com.byasia.ruangortu",cobrandComunityId:w},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:{whereKeyValues:{packageId:"com.byasia.ruangortu"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};Object(u.x)(n).then((function(a){console.log(a);var n=a.data.users,r=[];n.forEach((function(e){r.push(e.emailUser)}));var i=r.join(","),u={cobrandEmail:e,destination:i,messageSubject:"Hai, Ada Artikel Baru Lho!",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa artikel baru, yuk dicek sekarang.",scheduleTime:f,mediaType:"Device",category:"Informasi"};Object(o.x)(u).then((function(e){T.push("/cms/content"),E(l('Artikel "'+t+'" berhasil ditambahkan.')),E(c())}))}))})).catch((function(e){console.error("Error:",e),E(d('Content "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),E(c())}))}))}else if("Pdf"===p){if("string"===typeof b)b='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+b+(b.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(r.b)(b).then((function(n){var r={cobrandEmail:e,programId:a,contentName:t,contentDescription:i,contentType:p,contentSource:h,contentThumbnail:I,contents:b='<div style="width:100%;height:100vh;"><iframe src="'+n+'" frameborder="0" width="100%" height="100%"></iframe></div>',status:O,startDate:f,endDate:g,topics:s,targetAudiance:m,cobrandComunityId:j,groupMitraAsuhId:A,sekolah:C};Object(o.n)(r).then((function(a){var n=""!==C?{whereKeyValues:{packageId:"com.byasia.ruangortu",sekolah:C},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:""!==A?{whereKeyValues:{packageId:"com.byasia.ruangortu",groupMitraAsuhId:A},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:""!==w?{whereKeyValues:{packageId:"com.byasia.ruangortu",cobrandComunityId:w},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:{whereKeyValues:{packageId:"com.byasia.ruangortu"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};Object(u.x)(n).then((function(a){console.log(a);var n=a.data.users,r=[];n.forEach((function(e){r.push(e.emailUser)}));var i=r.join(","),u={cobrandEmail:e,destination:i,messageSubject:"Hai, Ada Artikel Baru Lho!",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa artikel baru, yuk dicek sekarang.",scheduleTime:f,mediaType:"Device",category:"Informasi"};Object(o.x)(u).then((function(e){T.push("/cms/content"),E(l('Artikel "'+t+'" berhasil ditambahkan.')),E(c())}))}))})).catch((function(e){console.error("Error:",e),E(d('Artikel "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),E(c())}))}))}else b='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+b+"</div></body></html>";var S={cobrandEmail:e,programId:a,contentName:t,contentDescription:i,contentType:p,contentSource:h,contentThumbnail:I,contents:b,status:O,startDate:f,endDate:g,topics:s,targetAudiance:m,cobrandComunityId:j,groupMitraAsuhId:A,sekolah:C};console.log(S),Object(o.n)(S).then((function(a){var n=""!==C?{whereKeyValues:{packageId:"com.byasia.ruangortu",sekolah:C},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:""!==A?{whereKeyValues:{packageId:"com.byasia.ruangortu",groupMitraAsuhId:A},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:""!==w?{whereKeyValues:{packageId:"com.byasia.ruangortu",cobrandComunityId:w},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER}:{whereKeyValues:{packageId:"com.byasia.ruangortu"},orderKeyValues:{nameUser:1},limit:Number.MAX_SAFE_INTEGER};Object(u.x)(n).then((function(a){console.log(a);var n=a.data.users,r=[];n.forEach((function(e){r.push(e.emailUser)}));var i=r.join(","),u={cobrandEmail:e,destination:i,messageSubject:"Hai, Ada Artikel Baru Lho!",messageContent:"Saat ini aplikasi Ruang Ortu by ASIA sudah menambahkan beberapa artikel baru, yuk dicek sekarang.",scheduleTime:f,mediaType:"Device",category:"Informasi"};Object(o.x)(u).then((function(e){T.push("/cms/content"),E(l('Artikel "'+t+'" berhasil ditambahkan.')),E(c())}))}))})).catch((function(e){console.error("Error:",e),E(d('Artikel "'+t+'" gagal ditambahkan. Coba beberapa saat lagi.')),E(c())}))}))}},y=function(e,a,t,i,u,p,h,m,b,f,g){return function(m){m(s()),m({type:n.a});if("Video"===p)"string"===typeof b?b='<div><iframe src="'+Object(r.a)(b)+'" style="width:100%;height:30vh;" frameborder="0" width="100%" height="30vh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>':Object(r.b)(b).then((function(n){b='<div><video autoplay controls src="'+Object(r.a)(n)+'" style="width:100%;height:30vh;" frameborder="0" width="100%" height="30vh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></video></div>';var s={whereValues:{_id:e},newValues:{cobrandEmail:a,programId:t,contentName:i,contentDescription:u,contentType:p,contentSource:h,contents:b,startDate:f}};Object(o.q)(s).then((function(e){g.push("/cms/content"),m(l('Artikel "'+i+'" berhasil diubah.')),m(c())})).catch((function(e){console.error("Error:",e),m(d('Artikel "'+i+'" gagal diubah. Coba beberapa saat lagi.')),m(c())}))}));else if("Image"===p){if("string"===typeof b)b='<img src="'+b+'" style="width:100%;"/>';else Object(r.b)(b).then((function(n){var r={whereValues:{_id:e},newValues:{cobrandEmail:a,programId:t,contentName:i,contentDescription:u,contentType:p,contentSource:h,contents:b='<img src="'+n+'" style="width:100%;"/>',startDate:f}};Object(o.q)(r).then((function(e){g.push("/cms/content"),m(l('Content "'+i+'" berhasil diubah.')),m(c())})).catch((function(e){console.error("Error:",e),m(d('Content "'+i+'" gagal diubah. Coba beberapa saat lagi.')),m(c())}))}))}else if("Pdf"===p){if("string"===typeof b)b='<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url='+b+(b.includes("&embedded=true")?"":"&embedded=true")+'" frameborder="0" width="100%" height="100%"></iframe></div>';else Object(r.b)(b).then((function(n){var r={whereValues:{_id:e},newValues:{cobrandEmail:a,programId:t,contentName:i,contentDescription:u,contentType:p,contentSource:h,contents:b='<div style="width:100%;height:100vh;"><iframe src="'+n+'" frameborder="0" width="100%" height="100%"></iframe></div>',startDate:f}};Object(o.q)(r).then((function(e){g.push("/cms/content"),m(l('Artikel "'+i+'" berhasil ditambahkan.')),m(c())})).catch((function(e){console.error("Error:",e),m(d('Artikel "'+i+'" gagal ditambahkan. Coba beberapa saat lagi.')),m(c())}))}))}else b='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>#contents {overflow-y: scroll;text-align: justify;font-family: Arial, Helvetica, sans-serif;padding: 1%;}#contents li {margin-left: 5%;}</style></head><body><div id="contents">'+b+"</div></body></html>";var y={whereValues:{_id:e},newValues:{cobrandEmail:a,programId:t,contentName:i,contentDescription:u,contentType:p,contentSource:h,contents:b,startDate:f}};Object(o.q)(y).then((function(e){g.push("/cms/content"),m(l('Artikel "'+i+'" berhasil diubah.')),m(c())})).catch((function(e){console.error("Error:",e),m(d('Artikel "'+i+'" gagal diubah. Coba beberapa saat lagi.')),m(c())}))}},v=function(e,a,t){return function(r){r(s()),r({type:n.a});var i={whereValues:{cobrandEmail:e,_id:a[0]}};Object(o.p)(i).then((function(e){r(l('Artikel "'+a[1]+'" berhasil dihapus.')),r(c()),t()})).catch((function(e){r(d('Artikel "'+a[1]+'" gagal dihapus. Coba beberapa saat lagi.')),r(c()),t()}))}},k=function(e,a,t,o,u,p,h){return function(m){m(s()),m({type:n.a});var b={email:e,password:a},f={};(t&&(f=Object.assign(f,{cobrandName:t})),u&&(f=Object.assign(f,{phoneNumber:u})),p&&(f=Object.assign(f,{address:p})),h&&(f=Object.assign(f,{password:h})),o)?Object(r.b)(o).then((function(e){f=Object.assign(f,{thumbnail:e}),Object(i.a)(b,f).then((function(e){h&&(b.password=h),Object(i.b)(b).then((function(e){var a=e.data;localStorage.removeItem("accessToken"),localStorage.removeItem("userData"),localStorage.setItem("accessToken",a.resultData.token),localStorage.setItem("userData",JSON.stringify(a.resultData.user)),m(l("Profil berhasil diubah.")),m(c())})).catch((function(e){console.error("Error:",e),m(d("Profil gagal diubah. Coba beberapa saat lagi.")),m(c())}))})).catch((function(e){console.error("Error:",e),m(d("Profil gagal diubah. Coba beberapa saat lagi.")),m(c())}))})):Object(i.a)(b,f).then((function(e){h&&(b.password=h),Object(i.b)(b).then((function(e){var a=e.data;localStorage.setItem("accessToken",a.resultData.token),localStorage.setItem("userData",JSON.stringify(a.resultData.user)),m(l("Profil berhasil diubah.")),m(c())})).catch((function(e){console.error("Error:",e),m(d("Profil gagal diubah. Coba beberapa saat lagi.")),m(c())}))})).catch((function(e){console.error("Error:",e),m(d("Profil gagal diubah. Coba beberapa saat lagi.")),m(c())}))}},j=function(e,a,t,r,i,u,p,h,m,b){return function(f){f(s()),f({type:n.a});var g=i?u:"",y={cobrandEmail:e,destination:a.join(","),messageSubject:t,messageContent:r,scheduleTime:g,mediaType:p,category:h,cobrandComunityId:m};Object(o.x)(y).then((function(e){b.push("/cms/notifications"),f(l("Notifikasi berhasil dikirim.")),f(c())})).catch((function(e){console.error("Error:",e),f(d("Notifikasi gagal dikirim. Coba beberapa saat lagi.")),f(c())}))}},A=function(e,a){return function(t){t(s()),t({type:n.a});var r={audianceName:e};Object(o.i)(r).then((function(n){a.push("/tools/setting/target-audience"),t(l('Target pembaca "'+e+'" berhasil ditambahkan.')),t(c())})).catch((function(a){console.error("Error:",a),t(d('Target pembaca "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),t(c())}))}},C=function(e,a,t){return function(r){r(s()),r({type:n.a});var i={category:e,description:a};Object(o.w)(i).then((function(a){t.push("/tools/setting/notification-category"),r(l('Kategori Notifikasi "'+e+'" berhasil ditambahkan.')),r(c())})).catch((function(a){console.error("Error:",a),r(d('Kategori Notifikasi "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(c())}))}},T=function(e,a,t){return function(r){r(s()),r({type:n.a});var i={category:e,description:a};Object(o.B)(i).then((function(a){t.push("/tools/setting/program-category"),r(l('Kategori Program "'+e+'" berhasil ditambahkan.')),r(c())})).catch((function(a){console.error("Error:",a),r(d('Kategori Program "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),r(c())}))}},E=function(e,a,t,r,i,u,p,h,m,b,f){return function(g){g(s()),g({type:n.a});var y={userName:e,password:a,userType:t,cobrandEmail:r,userLevel:i,sekolah:u,emailUser:p,phone:h,cobrandComunityId:m,groupMitraAsuhId:b};Object(o.a)(y).then((function(a){f.push("/tools/admin-staff"),g(l('User "'+e+'" berhasil ditambahkan.')),g(c())})).catch((function(a){console.error("Error:",a),g(d('User"'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),g(c())}))}},w=function(e,a,t,r,i,u,p,h,m,b,f){return function(g){g(s()),g({type:n.a});var y={whereValues:{_id:localStorage.getItem("staffSelected")},newKeyValues:{userName:e,password:a,userType:t,cobrandEmail:r,userLevel:i,emailUser:u,sekolah:p,phone:h,cobrandComunityId:m,groupMitraAsuhId:b}};Object(o.c)(y).then((function(a){f.push("/tools/admin-staff"),g(l('User "'+e+'" berhasil diubah.')),g(c()),localStorage.removeItem("staffSelected")})).catch((function(a){console.error("Error:",a),g(d('User"'+e+'" gagal diubah. Coba beberapa saat lagi.')),g(c())}))}},I=function(e,a,t){return function(e){e(s()),e({type:n.a});var r={whereValues:{_id:a[0]}};Object(o.b)(r).then((function(n){e(l('User "'+a[1]+'" berhasil dihapus.')),e(c()),t()})).catch((function(n){e(d('User "'+a[1]+'" gagal dihapus. Coba beberapa saat lagi.')),e(c()),t()}))}},O=function(e,a,t,r){return function(i){i(s()),i({type:n.a});var u={cobrandComunityId:e,cobrandComunityName:e,cobrandEmail:a,partComunityId:e+"-"+t};Object(o.j)(u).then((function(a){r.push("/tools/setting/komunitas"),i(l('Komunitas "'+e+'" berhasil ditambahkan.')),i(c())})).catch((function(a){console.error("Error:",a),i(d('Komunitas "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),i(c())}))}},S=function(e,a,t,r){return function(i){i(s()),i({type:n.a});for(var u=[],p=0;p<t.length;p++)u.push(t[p].value);var h={groupMitraAsuhId:e,groupMitraAsuhName:e,cobrandEmail:a,memberSekolah:u};Object(o.E)(h).then((function(a){r.push("/tools/setting/school-group"),i(l('Kelompok mitra asuh "'+e+'" berhasil ditambahkan.')),i(c())})).catch((function(a){console.error("Error:",a),i(d('Kelompok mitra asuh "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),i(c())}))}},N=function(e,a,t,r,i,u,p){return function(h){h(s()),h({type:n.a});var m=new Date(e).toISOString();console.log(m);var b={prd:m,shubuh:a,dzuhur:t,ashr:r,maghrib:i,isya:u};Object(o.y)(b).then((function(a){p.push("/cms/praytime-message"),h(l('Hadits/Pesan untuk tanggal "'+e+'" berhasil ditambahkan.')),h(c())})).catch((function(a){console.error("Error:",a),h(d('Hadits/Pesan untuk tanggal "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),h(c())}))}},V=function(e,a,t,r,i,u,p,h){return function(m){m(s()),m({type:n.a});var b={whereValues:{_id:e},newValues:{prayDate:a,shubuh:t,dzuhur:r,ashr:i,maghrib:u,isya:p}};Object(o.y)(b).then((function(e){h.push("/cms/praytime-message"),m(l('Hadits/Pesan untuk tanggal "'+a+'" berhasil diubah.')),m(c())})).catch((function(e){console.error("Error:",e),m(d('Hadits/Pesan untuk tanggal "'+a+'" gagal diubah. Coba beberapa saat lagi.')),m(c())}))}},U=function(e,a,t){return function(e){e(s()),e({type:n.a});var r={whereValues:{cobrandComunityId:a[0]}};Object(o.k)(r).then((function(n){e(l('Komunitas "'+a[1]+'" berhasil dihapus.')),e(c()),t()})).catch((function(n){e(d('Komunitas "'+a[1]+'" gagal dihapus. Coba beberapa saat lagi.')),e(c()),t()}))}},D=function(e,a,t){return function(e){e(s()),e({type:n.a});var r={whereValues:{groupMitraAsuhId:a[0]}};Object(o.F)(r).then((function(n){e(l('Kelompok mitra asuh "'+a[1]+'" berhasil dihapus.')),e(c()),t()})).catch((function(n){e(d('Kelompok mitra asuh "'+a[1]+'" gagal dihapus. Coba beberapa saat lagi.')),e(c()),t()}))}},_=function(e,a,t){return function(e){e(s()),e({type:n.a});var r={whereKeyValues:{_id:a[0]}};Object(o.z)(r).then((function(n){e(l('Hadits/Pesan tanggal "'+a[1]+'" berhasil dihapus.')),e(c()),t()})).catch((function(n){e(d('Hadits/Pesan tanggal "'+a[1]+'" gagal dihapus. Coba beberapa saat lagi.')),e(c()),t()}))}},K=function(e,a){return function(t){t(s()),t({type:n.a});var r={topicName:e};Object(o.r)(r).then((function(n){a.push("/tools/setting/topic"),t(l('Topik konten "'+e+'" berhasil ditambahkan.')),t(c())})).catch((function(a){console.error("Error:",a),t(d('Topik konten "'+e+'" gagal ditambahkan. Coba beberapa saat lagi.')),t(c())}))}},P=function(e,a,t,r,i){return function(u){u(s()),u({type:n.a});var p={cobrandEmail:e,controlParameterName:a,controlParameterValue:t,unit:r};Object(o.G)(p).then((function(e){i.push("/tools/setting/screentime"),u(l('Standar Screentime "'+a+'" berhasil ditambahkan.')),u(c())})).catch((function(e){console.error("Error:",e),u(d('Standar Screentime "'+a+'" gagal ditambahkan. Coba beberapa saat lagi.')),u(c())}))}},M=function(e,a,t,r,i,u,p,h,m,b){return function(f){f(s()),f({type:n.a});var g={whereValues:{emailUser:e},newValues:{nameUser:a,emailUser:t,gender:r,birdDate:i,address:u,imagePhoto:p,phoneNumber:h}};Object(o.h)(g).then((function(a){var n=[];Object(o.m)({whereValues:{emailUser:e}}).then((function(a){console.log(a.data),m.map((function(e){var a={cobrandComunityId:e.value,emailUser:t};n.push(Object(o.l)(a))})),b.push("/cms/user"),f(l('Informasi pengguna "'+e+'" berhasil diubah.')),f(c())})),b.push("/cms/user"),f(l('Informasi pengguna "'+e+'" berhasil diubah.')),f(c())})).catch((function(a){console.error("Error:",a),f(d('Informasi pengguna "'+e+'" gagal diubah. Coba beberapa saat lagi.')),f(c())}))}},F=function(e,a,t,r,i,u,d,p){return function(a){a(s()),a({type:n.a}),d(!0);for(var p=[],h=0;h<t.length;h++){var m=t[h];if(m.isChanged)if(""===m._id){if("1"===m.mode){var b={emailUser:e,appId:m.packageId,limit:0,appCategory:m.appCategory,status:"Aktif"},f=Object(o.f)(b);p.push(f)}else if("2"===m.mode){var g={emailUser:e,appId:m.packageId,limit:m.limit,appCategory:m.appCategory,status:"Aktif"},y=Object(o.f)(g);p.push(y)}}else if("0"===m.mode){var v={whereValues:{emailUser:e,appId:m.packageId}},k=Object(o.g)(v);p.push(k)}else if("1"===m.mode){var j={emailUser:e,appId:m.packageId,limit:0,appCategory:m.appCategory,status:"Aktif"},A=Object(o.f)(j);p.push(A)}else if("2"===m.mode){var C={emailUser:e,appId:m.packageId,limit:m.limit,appCategory:m.appCategory,status:"Aktif"};console.log(C);var T=Object(o.f)(C);p.push(T)}}var E={emailUser:e,modeAsuhName:r},w=Object(o.v)(E);p.push(w);for(var I=0;I<i.length;I++){var O=i[I];if(O.willBeRemoved){var S={whereValues:{_id:O._id}},N=Object(o.t)(S);p.push(N)}else if(""!==O._id){var V={whereValues:{_id:O._id},newValues:{scheduleName:O.scheduleName,scheduleDescription:O.scheduleDescription,scheduleType:O.schedule,deviceUsageDays:O.deviceUsageDays,deviceUsageStartTime:O.deviceUsageStartTime,deviceUsageEndTime:O.deviceUsageEndTime,status:O.status}},U=Object(o.u)(V);p.push(U)}else{var D=O,_=Object(o.s)(D);p.push(_)}}Promise.all(p).then((function(t){setTimeout((function(){u(!0)}),1e3),setTimeout((function(){u(!1),d(!1),a(l('Pengguna Anak "'+e+'" berhasil dikontrol.')),a(c())}),1e3)}))}},R=function(e,a,t,r,i,u){return function(d){d(s()),d({type:n.a}),u(!0),Object(o.e)({sekolah:r}).then((function(){for(var n=[],s=0;s<t.length;s++){var p=t[s];if(p.willBeRemoved){if(""!==p._id){var h={whereValues:{scheduleName:p.oldValue}},m=Object(o.t)(h);n.push(m)}}else if(""!==p._id){var b=p.scheduleName;b=b.replace(" "+r,""),console.log("eksoldfalu = "+p.oldValue);var f={whereValues:{scheduleName:p.oldValue},newValues:{scheduleName:b+" "+r,scheduleDescription:p.scheduleDescription,scheduleType:p.schedule,deviceUsageDays:p.deviceUsageDays,deviceUsageStartTime:p.deviceUsageStartTime,deviceUsageEndTime:p.deviceUsageEndTime,status:p.status}},g=Object(o.u)(f);n.push(g)}else{var y=p;y.scheduleName=y.scheduleName+" "+r;for(var v=0;v<e.length;v++){y.emailUser=e[v];var k=Object(o.s)(y);n.push(k)}}}for(var j=[],A=0;A<a.length;A++)j.push(a[A].value);var C={sekolah:r,applications:j},T=Object(o.d)(C);n.push(T),Promise.all(n).then((function(e){setTimeout((function(){i(!0)}),1e3),setTimeout((function(){i(!1),u(!1),d(l("Seluruh murid sekolah berhasil dikontrol.")),d(c())}),1e3)})).catch((function(e){console.log("error: ",e),u(!1)}))}))}}},158:function(e,a,t){"use strict";t.d(a,"A",(function(){return c})),t.d(a,"D",(function(){return d})),t.d(a,"C",(function(){return l})),t.d(a,"n",(function(){return p})),t.d(a,"o",(function(){return h})),t.d(a,"q",(function(){return m})),t.d(a,"p",(function(){return b})),t.d(a,"x",(function(){return f})),t.d(a,"i",(function(){return g})),t.d(a,"w",(function(){return y})),t.d(a,"B",(function(){return v})),t.d(a,"r",(function(){return k})),t.d(a,"a",(function(){return j})),t.d(a,"c",(function(){return A})),t.d(a,"b",(function(){return C})),t.d(a,"j",(function(){return T})),t.d(a,"k",(function(){return E})),t.d(a,"l",(function(){return w})),t.d(a,"m",(function(){return I})),t.d(a,"E",(function(){return O})),t.d(a,"F",(function(){return S})),t.d(a,"G",(function(){return N})),t.d(a,"y",(function(){return V})),t.d(a,"z",(function(){return U})),t.d(a,"h",(function(){return D})),t.d(a,"f",(function(){return _})),t.d(a,"g",(function(){return K})),t.d(a,"v",(function(){return P})),t.d(a,"s",(function(){return M})),t.d(a,"u",(function(){return F})),t.d(a,"t",(function(){return R})),t.d(a,"d",(function(){return x})),t.d(a,"e",(function(){return G}));var n=t(132),r=t.n(n),o=t(135),i=t(18),u=t.n(i),s=t(20),c=function(e){return u()({method:"post",url:s.a+"/cobrand/programAdd",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return u()({method:"post",url:s.a+"/cobrand/programUpdate",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return u()({method:"post",url:s.a+"/cobrand/programRemove",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return u()({method:"post",url:s.a+"/cobrand/contentAdd",data:e,headers:{"Content-Type":"application/json"}})},h=function(){var e=Object(o.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()({method:"post",url:s.a+"/cobrand/contentAdd",data:a,headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),m=function(e){return u()({method:"post",url:s.a+"/cobrand/contentUpdate",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return u()({method:"post",url:s.a+"/cobrand/contentRemove",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return u()({method:"post",url:s.a+"/user/broadcastAdd",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return u()({method:"post",url:s.a+"/cms/audianceTargetAdd",data:e,headers:{"Content-Type":"application/json"}})},y=function(e){return u()({method:"post",url:s.a+"/cms/notificationCategoryAdd",data:e,headers:{"Content-Type":"application/json"}})},v=function(e){return u()({method:"post",url:s.a+"/cms/programCategoryAdd",data:e,headers:{"Content-Type":"application/json"}})},k=function(e){return u()({method:"post",url:s.a+"/cms/contentTopicAdd",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return u()({method:"post",url:s.a+"/cms/userAdd",data:e,headers:{"Content-Type":"application/json"}})},A=function(e){return u()({method:"post",url:s.a+"/cms/userUpdate",data:e,headers:{"Content-Type":"application/json"}})},C=function(e){return u()({method:"post",url:s.a+"/cms/userRemove",data:e,headers:{"Content-Type":"application/json"}})},T=function(e){return u()({method:"post",url:s.a+"/cobrand/cobrandComunityAdd",data:e,headers:{"Content-Type":"application/json"}})},E=function(e){return u()({method:"post",url:s.a+"/cobrand/cobrandComunityRemove",data:e,headers:{"Content-Type":"application/json"}})},w=function(){var e=Object(o.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()({method:"post",url:s.a+"/cobrand/cobrandComunityMemberAdd",data:a,headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),I=function(e){return u()({method:"post",url:s.a+"/cobrand/cobrandComunityMemberRemove",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return u()({method:"post",url:s.a+"/cobrand/cobrandGroupMitraAsuhAdd",data:e,headers:{"Content-Type":"application/json"}})},S=function(e){return u()({method:"post",url:s.a+"/cobrand/cobrandGroupMitraAsuhRemove",data:e,headers:{"Content-Type":"application/json"}})},N=function(e){return u()({method:"post",url:s.a+"/cobrand/configurationAdd",data:e,headers:{"Content-Type":"application/json"}})},V=function(e){return u()({method:"post",url:s.a+"/cobrand/prayAlertMessageAdd",data:e,headers:{"Content-Type":"application/json"}})},U=function(e){return u()({method:"post",url:s.a+"/cobrand/prayAlertMessageRemove",data:e,headers:{"Content-Type":"application/json"}})},D=function(e){return u()({method:"post",url:s.a+"/user/edit",data:e,headers:{"Content-Type":"application/json"}})},_=function(e){return u()({method:"post",url:s.a+"/user/appUsageLimitAdd",data:e,headers:{"Content-Type":"application/json"}})},K=function(e){return u()({method:"post",url:s.a+"/user/appUsageLimitRemove",data:e,headers:{"Content-Type":"application/json"}})},P=function(e){return u()({method:"post",url:s.a+"/user/childModeAsuhAdd",data:e,headers:{"Content-Type":"application/json"}})},M=function(e){return u()({method:"post",url:s.a+"/user/deviceUsageScheduleAdd",data:e,headers:{"Content-Type":"application/json"}})},F=function(e){return u()({method:"post",url:s.a+"/user/deviceUsageScheduleUpdate",data:e,headers:{"Content-Type":"application/json"}})},R=function(e){return u()({method:"post",url:s.a+"/user/deviceUsageScheduleRemove",data:e,headers:{"Content-Type":"application/json"}})},x=function(e){return u()({method:"post",url:s.a+"/user/appAlwaysOnBySekolahAdd",data:e,headers:{"Content-Type":"application/json"}})},G=function(e){return u()({method:"post",url:s.a+"/user/appAlwaysOnBySekolahRemove",data:e,headers:{"Content-Type":"application/json"}})}},99:function(e,a,t){"use strict";t.d(a,"s",(function(){return i})),t.d(a,"i",(function(){return u})),t.d(a,"x",(function(){return s})),t.d(a,"t",(function(){return c})),t.d(a,"e",(function(){return d})),t.d(a,"m",(function(){return l})),t.d(a,"d",(function(){return p})),t.d(a,"n",(function(){return h})),t.d(a,"c",(function(){return m})),t.d(a,"p",(function(){return b})),t.d(a,"o",(function(){return f})),t.d(a,"f",(function(){return g})),t.d(a,"k",(function(){return y})),t.d(a,"j",(function(){return v})),t.d(a,"l",(function(){return k})),t.d(a,"r",(function(){return j})),t.d(a,"a",(function(){return A})),t.d(a,"g",(function(){return C})),t.d(a,"h",(function(){return T})),t.d(a,"v",(function(){return E})),t.d(a,"u",(function(){return w})),t.d(a,"q",(function(){return I})),t.d(a,"w",(function(){return O})),t.d(a,"b",(function(){return S}));var n=t(18),r=t.n(n),o=t(20),i=function(e){return r()({method:"post",url:o.a+"/cobrand/programFilter",data:e,headers:{"Content-Type":"application/json"}})},u=function(e){return r()({method:"post",url:o.a+"/cobrand/contentFilter",data:e,headers:{"Content-Type":"application/json"}})},s=function(e){return r()({method:"post",url:o.a+"/user/userFilter",data:e,headers:{"Content-Type":"application/json"}})},c=function(e){return r()({method:"post",url:o.a+"/cobrand/redZoneFilter",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return r()({method:"post",url:o.a+"/user/appUsageFilter",data:e,headers:{"Content-Type":"application/json"}})},l=function(e){return r()({method:"post",url:o.a+"/user/deviceUsageScheduleFilter",data:e,headers:{"Content-Type":"application/json"}})},p=function(e){return r()({method:"post",url:o.a+"/user/appUsageLimitFilter",data:e,headers:{"Content-Type":"application/json"}})},h=function(e){return r()({method:"post",url:o.a+"/user/childModeAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},m=function(e){return r()({method:"post",url:o.a+"/user/appIconFilter",data:e,headers:{"Content-Type":"application/json"}})},b=function(e){return r()({method:"post",url:o.a+"/user/broadcastFilter",data:e,headers:{"Content-Type":"application/json"}})},f=function(e){return r()({method:"post",url:o.a+"/cms/notificationCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},g=function(e){return r()({method:"post",url:o.a+"/cms/audianceTargetFilter",data:e,headers:{"Content-Type":"application/json"}})},y=function(e){return r()({method:"post",url:o.a+"/cms/contentTopicFilter",data:e,headers:{"Content-Type":"application/json"}})},v=function(e){return r()({method:"post",url:o.a+"/user/userContentResponFilter",data:e,headers:{"Content-Type":"application/json"}})},k=function(e){return r()({method:"post",url:o.a+"/user/userContentViewFilter",data:e,headers:{"Content-Type":"application/json"}})},j=function(e){return r()({method:"post",url:o.a+"/cms/programCategoryFilter",data:e,headers:{"Content-Type":"application/json"}})},A=function(e){return r()({method:"post",url:o.a+"/cms/userFilter",data:e,headers:{"Content-Type":"application/json"}})},C=function(e){return r()({method:"post",url:o.a+"/cobrand/cobrandComunityFilter",data:e,headers:{"Content-Type":"application/json"}})},T=function(e){return r()({method:"post",url:o.a+"/cobrand/cobrandComunityMemberFilter",data:e,headers:{"Content-Type":"application/json"}})},E=function(e){return r()({method:"post",url:o.a+"/cobrand/AlAzharSchoolFilter",data:e,headers:{"Content-Type":"application/json"}})},w=function(e){return r()({method:"post",url:o.a+"/cobrand/cobrandGroupMitraAsuhFilter",data:e,headers:{"Content-Type":"application/json"}})},I=function(e){return r()({method:"post",url:o.a+"/cobrand/prayAlertMessageFilter",data:e,headers:{"Content-Type":"application/json"}})},O=function(e){return r()({method:"post",url:o.a+"/user/appDeviceFilter",data:e,headers:{"Content-Type":"application/json"}})},S=function(e){return r()({method:"post",url:o.a+"/user/appAlwaysOnBySekolahFilter",data:e,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=3.f3cb2137.chunk.js.map