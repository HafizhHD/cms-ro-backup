(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[3],{21:function(e,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return l})),a.d(n,"a",(function(){return d})),a.d(n,"d",(function(){return u})),a.d(n,"e",(function(){return j}));var t=a(7),i=a(22),r=a.n(i),c=a(31),s=function(){return{type:t.f}},o=function(){return{type:t.d}},l=function(){return{type:t.g}},d=function(e,n){return console.log({email:e,password:n}),function(a){a(s());var t={email:e,password:n};r()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/cobrandLogin",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data);var t=e.data;"OK"===t.resultCode&&t.resultData&&t.resultData.user.password===n?(localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),localStorage.removeItem("loginMessage"),a(l())):(localStorage.setItem("loginMessage","Incorrect Email/Password."),a(o()))})).catch((function(e){console.error("Error:",e)}))}},u=function(e){return function(n){n(s()),localStorage.clear(),e.push("/"),n({type:t.a}),n({type:t.e})}},j=function(e,n,a,i,o,l,d,u,j){return function(b){b(s()),Object(c.a)(i).then((function(i){console.log(i);var c=i;setTimeout((function(){var i={email:e,accountName:n,cobrandName:a,thumbnail:c,phoneNumber:o,address:l,password:d,confirmPassword:u};r()({method:"post",url:"https://rk.defghi.biz.id:8080/api/cobrand/register",data:i,headers:{"Content-Type":"application/json"}}).then((function(e){console.log("Success:",e.data),localStorage.setItem("loginMessage","Successfully registered. You can now log in.")})).catch((function(e){console.error("Error:",e)})),console.log(i),j.push("/"),b({type:t.e})}),2e3)}))}}},24:function(e,n,a){"use strict";a(2);var t=a(30),i=(a(78),a(1));n.a=function(e){var n=e.text,a=void 0===n?"Mohon Tunggu":n;return Object(i.jsxs)("div",{className:"LoadingFullRk",children:[Object(i.jsxs)("h1",{className:"LoadingFullRk__heading",children:[Object(i.jsx)("span",{children:"Keluarga HKBP"})," "]}),Object(i.jsx)(t.a,{}),Object(i.jsx)("p",{children:a})]})}},30:function(e,n,a){"use strict";a(2),a(77);var t=a(1);n.a=function(){return Object(t.jsxs)("div",{className:"spinner",children:[Object(t.jsx)("div",{className:"bounce1"}),Object(t.jsx)("div",{className:"bounce2"}),Object(t.jsx)("div",{className:"bounce3"})]})}},31:function(e,n,a){"use strict";a.d(n,"a",(function(){return t}));var t=function(e){return new Promise((function(n,a){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){return n(t.result)},t.onerror=function(e){return a(e)}}))}},33:function(e,n,a){"use strict";n.a=a.p+"static/media/Logo_1.d0bc700f.png"},49:function(e,n,a){},50:function(e,n,a){},51:function(e,n,a){},57:function(e,n,a){},58:function(e,n,a){},7:function(e,n,a){"use strict";a.d(n,"f",(function(){return t})),a.d(n,"g",(function(){return i})),a.d(n,"d",(function(){return r})),a.d(n,"e",(function(){return c})),a.d(n,"a",(function(){return s})),a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return l}));var t="AUTH_START",i="AUTH_SUCCESS",r="AUTH_FAILED",c="AUTH_LOGOUT",s="ALERT_CLOSE",o="ALERT_ERROR",l="ALERT_SUCCESS"},77:function(e,n,a){},78:function(e,n,a){},79:function(e,n,a){"use strict";a.r(n);var t=a(2),i=a.n(t),r=a(19),c=a.n(r),s=(a(49),function(e){e&&e instanceof Function&&a.e(23).then(a.bind(null,314)).then((function(n){var a=n.getCLS,t=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;a(e),t(e),i(e),r(e),c(e)}))}),o=a(12),l=a(4),d=a(5),u=a(14),j=(a(50),a(33)),b=(a(51),a(1));var m=function(e){var n=e.MenuItems,a=e.ShowAside;return Object(b.jsx)("aside",{className:"Aside",children:Object(b.jsx)("ul",{className:"Aside__Nav",children:n.map((function(e,n){return Object(b.jsx)("li",{className:"Aside__Nav_item",children:"/"===e.path?Object(b.jsxs)(o.b,{exact:!0,to:e.path,className:"Aside__Nav_item-link",onClick:function(){window.scroll(0,0),window.innerWidth<900&&a(!1)},children:[e.icon,Object(b.jsx)("p",{children:e.pathName})]}):Object(b.jsxs)(o.b,{to:e.path,className:"Aside__Nav_item-link",onClick:function(){window.scroll(0,0),window.innerWidth<900&&a(!1)},children:[e.icon,Object(b.jsx)("p",{children:e.pathName})]})},n)}))})})},h=a(6),g=[{path:"/",pathName:"Dashboard",icon:Object(b.jsx)(h.n,{className:"Aside__Nav_item-icon"})},{path:"/program",pathName:"Program",icon:Object(b.jsx)(h.a,{className:"Aside__Nav_item-icon"})},{path:"/report",pathName:"Report",icon:Object(b.jsx)(h.i,{className:"Aside__Nav_item-icon"})},{path:"/content",pathName:"Content",icon:Object(b.jsx)(h.o,{className:"Aside__Nav_item-icon"})},{path:"/setting",pathName:"Setting",icon:Object(b.jsx)(h.s,{className:"Aside__Nav_item-icon"})}],O=(h.n,h.i,h.a,h.o,h.s,function(e,n){var a=Object(t.useState)(n),i=Object(u.a)(a,2),r=i[0],c=i[1];return Object(t.useEffect)((function(){var n=function(n){null===e.current||e.current.contains(n.target)||c(!r)};return r&&window.addEventListener("click",n),function(){window.removeEventListener("click",n)}}),[r,e]),[r,c]});a(57);var p=function(){return Object(b.jsx)("div",{className:"HelpOverlayDashboard",children:Object(b.jsxs)("div",{className:"HelpOverlayDashboard-content",children:[Object(b.jsx)("h1",{children:"Guide Co-Brand Keluarga HKBP"}),Object(b.jsx)("h2",{children:"Dashboard Co-Brand Keluarga HKBP"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsxs)("p",{children:["Setelah berhasil login, Anda akan masuk ke halaman Dashboard Co-Brand Ruang Keluarga. Pada tampilan awal, Anda akan menemukan tombol berikut di bagian",Object(b.jsx)("br",{})]}),Object(b.jsxs)("ol",{children:[Object(b.jsxs)("li",{children:["Kanan atas, yaitu:",Object(b.jsx)("br",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Tombol Notifikasi, yaitu tombol untuk menampilkan notifikasi terkait cobrand Anda jika diklik"}),Object(b.jsx)("li",{children:"Tombol Profil Brand Anda. Jika diklik, Anda akan menemukan empat tombol, yaitu \u201cBantuan\u201d, \u201cProfile\u201d, \u201cSetting\u201d, dan \u201cLogout\u201d"})]})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("li",{children:["Kiri, yang merupakan tombol navigasi, yaitu:",Object(b.jsx)("br",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Dashboard"}),Object(b.jsx)("li",{children:"Program, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus program yang diselenggarakan oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP."}),Object(b.jsx)("li",{children:"Report, yaitu halaman untuk melihat berbagai data yang terkait dengan pelanggan dan aktivitas Brand Anda."}),Object(b.jsx)("li",{children:"Content, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus konten yang dibuat oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP."}),Object(b.jsx)("li",{children:"Redzone"}),Object(b.jsx)("li",{children:"Setting, yaitu halaman untuk menyunting profil Brand Anda."})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("li",{children:"Halaman Utama (tengah), berisi informasi umum yang terkait dengan aktivitas Brand Anda, yaitu Subscription, Ongoing Program, dan Content List."})]}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"Program"}),Object(b.jsx)("p",{children:"Pada saat masuk ke halaman utama program, Anda akan menemukan tombol \u201cAdd New Program\u201d dan tabel di bawahnya. Tabel tersebut berisi program yang telah Anda buat atau kosong jika Anda belum pernah membuat program. Jika Anda sudah pernah membuat program, Anda akan melihat judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada program yang telah Anda buat, yaitu tombol \u201cView\u201d (ikon mata), \u201cEdit\u201d (ikon pena/pensil), dan \u201cRemove\u201d (ikon tempat sampah)."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Add New Program (Tambah Program Baru)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menambahkan program baru untuk Brand Anda. Untuk membuat program, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut."}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Title, yaitu judul program Brand Anda"}),Object(b.jsx)("li",{children:"Description, yaitu deskripsi umum dari program Brand Anda"}),Object(b.jsx)("li",{children:"Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada program Brand Anda"}),Object(b.jsx)("li",{children:"Set Schedule, yaitu tanggal mulai untuk program Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan."})]}),Object(b.jsx)("p",{children:"Setelah mengisi kolom-kolom di atas, klik tombol \u201cPost Program\u201d untuk mengunggah program Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama program."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"View Program (ikon mata, Lihat Program)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat melihat program yang telah Anda buat secara detail."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Edit Program (ikon pena/pensil, Sunting Program)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menyunting program yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Program."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Remove Program (ikon tempat sampah)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Jika tombol ini diklik, program yang Anda pilih akan terhapus."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h2",{children:"Content"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada saat masuk ke halaman utama content, Anda akan menemukan tombol \u201cAdd New Content\u201d dan tabel di bawahnya. Tabel tersebut berisi konten yang telah Anda buat atau kosong jika Anda belum pernah membuat konten. Jika Anda sudah pernah membuat konten, Anda akan melihat kategori, judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada konten yang telah Anda buat, yaitu tombol \u201cView\u201d (ikon mata), \u201cEdit\u201d (ikon pena/pensil), dan \u201cRemove\u201d (ikon tempat sampah)."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Add New Content (Tambah Konten Baru)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menambahkan konten baru untuk Brand Anda. Untuk membuat konten, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut."}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Category, yaitu kategori konten yang akan Anda buat. Pilih kategori \u201cArtikel\u201d untuk membuat konten tulisan, \u201cImage\u201d untuk membuat konten gambar, dan \u201cVideo\u201d untuk membuat konten video."}),Object(b.jsx)("li",{children:"Program Name, yaitu pilihan program yang telah Anda buat untuk dikaitkan dengan konten Anda. Pilih \u201c--Tanpa Program--\u201d jika konten yang disediakan tidak membutuhkan program, atau pilih program yang telah Anda buat untuk mengaitkan konten Brand Anda dengan program Brand Anda."}),Object(b.jsx)("li",{children:"Title, yaitu judul konten Brand Anda"}),Object(b.jsx)("li",{children:"Description, yaitu deskripsi umum dari konten Brand Anda"}),Object(b.jsx)("li",{children:"Source, yaitu narasumber atau referensi yang digunakan pada konten yang dibuat"}),Object(b.jsx)("li",{children:"Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada konten Brand Anda"}),Object(b.jsx)("li",{children:"Contents, yaitu kolom untuk mengisi konten yang diinginkan. Jika Anda memilih Category \u201cArtikel\u201d, Anda dapat membuat tulisan pada kolom yang tersedia. Jika Anda memilih Category \u201cImage\u201d, Anda diminta untuk memasukkan link gambar yang ingin dipakai. Jika Anda memilih Category \u201cVideo\u201d, Anda diminta untuk memasukkan link video (Youtube, Dailymotion, Vimeo) yang ingin dipakai."}),Object(b.jsx)("li",{children:"Set Schedule, yaitu tanggal mulai untuk konten Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan."})]}),Object(b.jsx)("p",{children:"Setelah mengisi kolom-kolom di atas, klik tombol \u201cPost Content\u201d untuk mengunggah konten Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama Content."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"View Content (ikon mata, Lihat Konten)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat melihat konten yang telah Anda buat secara detail."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Edit Content (ikon pena/pensil, Sunting Konten)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menyunting konten yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Content."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Remove Content (ikon tempat sampah)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Jika tombol ini diklik, konten yang Anda pilih akan terhapus."})]})})};a(58);var k=function(e){var n=e.type,a=e.message;return Object(b.jsx)("div",{className:"alert",children:Object(b.jsxs)("div",{className:n,children:[Object(b.jsxs)("div",{className:"alert-header",children:["ALERT_ERROR"===n?Object(b.jsx)(h.u,{}):Object(b.jsx)(h.f,{}),Object(b.jsx)("span",{children:"ALERT_ERROR"===n?"Error!":"Success!"})]}),Object(b.jsx)("div",{className:"alert-message",children:Object(b.jsx)("span",{children:a})})]})},a)};var x=Object(d.h)((function(e){var n=e.children,a=e.location,i=e.logoutHandler,r=e.showAlert,c=e.alertType,s=e.alertMessage,l=Object(t.useRef)(null),d=O(l,!1),x=Object(u.a)(d,2),f=x[0],y=x[1],A=function(){return y(!f)},v=Object(t.useRef)(null),N=O(v,!1),w=Object(u.a)(N,2),_=(w[0],w[1],Object(t.useState)(JSON.parse(localStorage.getItem("userData")))),P=Object(u.a)(_,2),S=P[0],L=P[1],C=Object(t.useState)(!1),T=Object(u.a)(C,2),B=T[0],R=T[1],E=Object(t.useState)(window.innerWidth>=900),H=Object(u.a)(E,2),K=H[0],D=H[1],z=Object(t.useState)(!1),M=Object(u.a)(z,2),I=M[0],J=M[1];return Object(t.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth<900?D(!1):D(!0)}))}),[K,I]),Object(t.useEffect)((function(){"Profil berhasil diubah."===s&&L(JSON.parse(localStorage.getItem("userData")))}),[s]),Object(b.jsxs)(b.Fragment,{children:[B?Object(b.jsx)(p,{}):null,B?Object(b.jsxs)("button",{className:"CloseHelpDashboard",onClick:function(){R(!1),document.getElementsByTagName("main")[0].style.overflowY="visible"},children:[Object(b.jsx)(h.u,{})," "]}):null,r&&c?Object(b.jsx)(k,{type:c,message:s}):null,Object(b.jsxs)("div",{className:"Layout",children:[Object(b.jsxs)("header",{className:"Header",children:[K?null:Object(b.jsx)("button",{className:"Header__menu",onClick:function(e){J(!I)},children:Object(b.jsx)(h.q,{})}),Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("img",{src:j.a,alt:"Logo Ruang Keluarga",className:"Header__img"})}),Object(b.jsx)("div",{className:"Header__infoaccount",children:Object(b.jsxs)("div",{className:"Header__infoaccount__profile",children:[Object(b.jsxs)("button",{className:"Header__activeUser",onClick:A,children:[Object(b.jsx)("img",{src:S.thumbnail,className:"Header__profileImg ".concat(f&&"Header__profileImg__active")}),Object(b.jsx)("span",{children:S.cobrandName}),f?Object(b.jsx)(h.h,{}):Object(b.jsx)(h.g,{})]}),Object(b.jsx)("nav",{ref:l,className:"Menudropdown ".concat(f?"active":"inactive"),children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:a.pathname,onClick:function(){R(!0),A(),document.getElementsByTagName("main")[0].style.overflowY="hidden"},children:"Bantuan"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/",children:"Profile"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/setting",onClick:A,children:"Setting"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"true",onClick:function(e){e.preventDefault(),A(),i()},children:"Logout"})})]})})]})})]}),(K||I)&&Object(b.jsx)(m,{MenuItems:g,ShowAside:J}),Object(b.jsx)("main",{className:"Main",children:n})]})]})})),f=a(43),y=a(16),A=Object(y.b)((function(e){return{isLogin:e.auth.isLogin}}))((function(e){var n=e.component,a=e.isLogin,i=Object(f.a)(e,["component","isLogin"]);return Object(b.jsx)(d.b,Object(l.a)(Object(l.a)({},i),{},{render:function(e){return a?Object(b.jsx)(t.Suspense,{fallback:Object(b.jsx)("p",{children:"Loading..."}),children:Object(b.jsx)(n,Object(l.a)({},e))}):Object(b.jsx)(d.a,{to:{pathname:"/"}})}}))})),v=a(21),N=a(24),w=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,315))})),_=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,316))})),P=Object(t.lazy)((function(){return a.e(18).then(a.bind(null,317))})),S=Object(t.lazy)((function(){return a.e(20).then(a.bind(null,327))})),L=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(16)]).then(a.bind(null,328))})),C=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,318))})),T=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,319))})),B=Object(t.lazy)((function(){return a.e(19).then(a.bind(null,320))})),R=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(15)]).then(a.bind(null,329))})),E=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(7)]).then(a.bind(null,321))})),H=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(8)]).then(a.bind(null,322))})),K=Object(t.lazy)((function(){return a.e(17).then(a.bind(null,323))})),D=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(6),a.e(11)]).then(a.bind(null,326))})),z=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,324))}));var M=Object(y.b)((function(e){return{isLogin:e.auth.isLogin,showAlert:e.dashboard.showAlert,alertType:e.dashboard.alertType,alertMessage:e.dashboard.alertMessage}}),(function(e){return{onAuthSuccess:function(){return e(Object(v.c)())},onAuthFailed:function(){return e(Object(v.b)())},onLogout:function(n){return e(Object(v.d)(n))}}}))((function(e){var n=e.isLogin,a=e.onAuthSuccess,i=e.onAuthFailed,r=e.onLogout,c=e.showAlert,s=e.alertType,o=e.alertMessage,u=Object(d.g)(),j=Object(t.useCallback)((function(){localStorage.getItem("accessToken")?a():i()}),[a,i]);return Object(t.useEffect)((function(){j()}),[n,j]),n?Object(b.jsx)(x,{logoutHandler:function(){return r(u)},showAlert:c,alertType:s,alertMessage:o,children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(A,{exact:!0,path:"/",component:P}),Object(b.jsx)(A,{exact:!0,path:"/report",component:S}),Object(b.jsx)(A,{path:"/program",exact:!0,component:L}),Object(b.jsx)(A,{path:"/program/add",exact:!0,component:function(e){return Object(b.jsx)(C,Object(l.a)({},e))}}),Object(b.jsx)(A,{path:"/program/edit",exact:!0,component:T}),Object(b.jsx)(A,{path:"/program/view",exact:!0,component:B}),Object(b.jsx)(A,{path:"/content",exact:!0,component:R}),Object(b.jsx)(A,{path:"/content/add",exact:!0,component:function(e){return Object(b.jsx)(E,Object(l.a)({},e))}}),Object(b.jsx)(A,{path:"/content/edit",exact:!0,component:H}),Object(b.jsx)(A,{path:"/content/view",exact:!0,component:K}),Object(b.jsx)(A,{path:"/redzone",exact:!0,component:D}),Object(b.jsx)(A,{path:"/setting",exact:!0,component:z})]})}):Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/",render:function(e){return Object(b.jsx)(t.Suspense,{fallback:Object(b.jsx)(N.a,{}),children:Object(b.jsx)(w,Object(l.a)({},e))})}}),Object(b.jsx)(d.b,{exact:!0,path:"/register",render:function(e){return Object(b.jsx)(t.Suspense,{fallback:Object(b.jsx)(N.a,{}),children:Object(b.jsx)(_,Object(l.a)({},e))})}})]})})),I=a(15),J=a(7),U={isLogin:!1,error:null,isLoading:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J.f:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case J.g:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,isLogin:!0});case J.d:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1});case J.e:return Object(l.a)(Object(l.a)({},e),{},{isLogin:!1,isLoading:!1});default:return e}},V={showAlert:!0,alertType:null,alertMessage:"Nganu bikin enak.",idMessage:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J.a:return Object(l.a)(Object(l.a)({},e),{},{showAlert:!1});case J.b:case J.c:return Object(l.a)(Object(l.a)({},e),{},{alertType:n.type,alertMessage:n.message,idMessage:n.idMessage,showAlert:!0});default:return e}},Y=Object(I.b)({auth:F,dashboard:W}),G=a(29),q=I.c,Q=Object(I.d)(Y,Object(I.a)(G.a));q&&(Q=Object(I.d)(Y,q(Object(I.a)(G.a)))),c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(y.a,{store:Q,children:Object(b.jsx)(o.a,{children:Object(b.jsx)(M,{})})})}),document.getElementById("root")),s()}},[[79,4,5]]]);
//# sourceMappingURL=main.6c5b7561.chunk.js.map