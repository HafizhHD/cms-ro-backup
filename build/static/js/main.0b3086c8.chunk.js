(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[5],{20:function(e,n,a){"use strict";n.a="https://as01.prod.ruangortu.id:8080/api"},23:function(e,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return s})),a.d(n,"a",(function(){return l})),a.d(n,"d",(function(){return d})),a.d(n,"e",(function(){return u}));var t=a(8),i=(a(18),a(33)),c=a(25),r=function(){return{type:t.f}},o=function(){return{type:t.d}},s=function(){return{type:t.g}},l=function(e,n){return console.log({email:e,password:n}),function(a){a(r());var t={email:e,password:n};Object(c.b)(t).then((function(e){console.log(e.data);var t=e.data;"OK"===t.resultCode&&t.resultData&&t.resultData.user.password===n?(localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),localStorage.removeItem("loginMessage"),a(s())):(localStorage.setItem("loginMessage","Incorrect Email/Password."),a(o()))})).catch((function(e){console.error("Error:",e)}))}},d=function(e){return function(n){n(r()),localStorage.clear(),e.push("/"),n({type:t.a}),n({type:t.e})}},u=function(e,n,a,o,s,l,d,u,j){return function(b){b(r()),Object(i.b)(o).then((function(i){console.log(i);var r=i;setTimeout((function(){var i={email:e,accountName:n,cobrandName:a,thumbnail:r,phoneNumber:s,address:l,password:d,confirmPassword:u};Object(c.c)(i).then((function(e){console.log("Success:",e.data),localStorage.setItem("loginMessage","Successfully registered. You can now log in.")})).catch((function(e){console.error("Error:",e)})),console.log(i),j.push("/"),b({type:t.e})}),2e3)}))}}},25:function(e,n,a){"use strict";a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return s}));var t=a(18),i=a.n(t),c=a(20),r=function(e){return i()({method:"post",url:c.a+"/cobrand/cobrandLogin",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return i()({method:"post",url:c.a+"/cobrand/register",data:e,headers:{"Content-Type":"application/json"}})},s=function(e,n){return i()({method:"post",url:c.a+"/cobrand/edit",data:{whereValues:e,newValues:n},headers:{"Content-Type":"application/json"}})}},27:function(e,n,a){"use strict";a(2);var t=a(34),i=(a(82),a(1));n.a=function(e){var n=e.text,a=void 0===n?"Mohon Tunggu":n;return Object(i.jsxs)("div",{className:"LoadingFullRk",children:[Object(i.jsxs)("h1",{className:"LoadingFullRk__heading",children:[Object(i.jsx)("span",{children:"RUANG ORTU by ASIA"})," "]}),Object(i.jsx)(t.a,{}),Object(i.jsx)("p",{children:a})]})}},33:function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"a",(function(){return i}));var t=function(e){return new Promise((function(n,a){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){return n(t.result)},t.onerror=function(e){return a(e)}}))},i=function(e){var n="",a="";return e.includes("facebook.com/")?n="https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(e)+"&show_text=1&width=200":e.includes("vimeo.com/")?((a=void 0!==typeof e.split("vimeo.com/")[1]?e.split("vimeo.com/")[1]:null).includes("&")&&(a=a.split("&")[0]),n="https://player.vimeo.com/video/"+a):e.includes("youtube.com/")&&!e.includes("embed")?((a=void 0!==typeof e.split("v=")[1]?e.split("v=")[1]:null).includes("&")&&(a=a.split("&")[0]),n="https://www.youtube.com/embed/"+a):e.includes("youtu.be/")?((a=void 0!==typeof e.split("youtu.be/")[1]?e.split("youtu.be/")[1]:null).includes("&")&&(a=a.split("&")[0]),n="https://www.youtube.com/embed/"+a):e.includes("dailymotion.com/")?((a=void 0!==typeof e.split("dailymotion.com/")[1]?e.split("dailymotion.com/")[1]:null).includes("&")&&(a=a.split("&")[0]),n="https://www.dailymotion.com/embed/"+a):n=e,n}},34:function(e,n,a){"use strict";a(2),a(81);var t=a(1);n.a=function(){return Object(t.jsxs)("div",{className:"spinner",children:[Object(t.jsx)("div",{className:"bounce1"}),Object(t.jsx)("div",{className:"bounce2"}),Object(t.jsx)("div",{className:"bounce3"})]})}},37:function(e,n,a){"use strict";n.a=a.p+"static/media/Logo_2.17216ad5.png"},53:function(e,n,a){},54:function(e,n,a){},55:function(e,n,a){},61:function(e,n,a){},62:function(e,n,a){},8:function(e,n,a){"use strict";a.d(n,"f",(function(){return t})),a.d(n,"g",(function(){return i})),a.d(n,"d",(function(){return c})),a.d(n,"e",(function(){return r})),a.d(n,"a",(function(){return o})),a.d(n,"b",(function(){return s})),a.d(n,"c",(function(){return l}));var t="AUTH_START",i="AUTH_SUCCESS",c="AUTH_FAILED",r="AUTH_LOGOUT",o="ALERT_CLOSE",s="ALERT_ERROR",l="ALERT_SUCCESS"},81:function(e,n,a){},82:function(e,n,a){},83:function(e,n,a){"use strict";a.r(n);var t=a(2),i=a.n(t),c=a(21),r=a.n(c),o=(a(53),function(e){e&&e instanceof Function&&a.e(26).then(a.bind(null,507)).then((function(n){var a=n.getCLS,t=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;a(e),t(e),i(e),c(e),r(e)}))}),s=a(7),l=a(4),d=a(6),u=a(14),j=(a(54),a.p,a(37)),b=(a(55),a(1));var m=function(e){var n=e.MenuItems,a=e.ShowAside;return Object(b.jsx)("aside",{className:"Aside",children:Object(b.jsx)("ul",{className:"Aside__Nav",children:n.map((function(e,n){return Object(b.jsx)("li",{className:"Aside__Nav_item",children:"/"===e.path?Object(b.jsxs)(s.b,{exact:!0,to:e.path,className:"Aside__Nav_item-link",onClick:function(){window.scroll(0,0),window.innerWidth<900&&a(!1)},children:[e.icon,Object(b.jsx)("p",{children:e.pathName})]}):"/content-management"===e.path?Object(b.jsxs)(s.b,{exact:!0,to:"/program",className:"Aside__Nav_item-disabled",onClick:function(){window.scroll(0,0),window.innerWidth<900&&a(!1)},children:[e.icon,Object(b.jsx)("p",{children:e.pathName})]}):"/program"===e.path||"/content"===e.path||"/redzone"===e.path?Object(b.jsxs)(s.b,{exact:!0,to:e.path,className:"Aside__Nav_item-cm",onClick:function(){window.scroll(0,0),window.innerWidth<900&&a(!1)},children:[e.icon,Object(b.jsx)("p",{children:e.pathName})]}):Object(b.jsxs)(s.b,{to:e.path,className:"Aside__Nav_item-link",onClick:function(){window.scroll(0,0),window.innerWidth<900&&a(!1)},children:[e.icon,Object(b.jsx)("p",{children:e.pathName})]})},n)}))})})},h=a(5),O=[{path:"/",pathName:"Dashboard",icon:Object(b.jsx)(h.n,{className:"Aside__Nav_item-icon"})},{path:"/report",pathName:"Report",icon:Object(b.jsx)(h.i,{className:"Aside__Nav_item-icon"})},{path:"/content-management",pathName:"Content Management",icon:Object(b.jsx)(h.o,{className:"Aside__Nav_item-icon"})},{path:"/program",pathName:"Program",icon:Object(b.jsx)(h.a,{className:"Aside__Nav_item-icon"})},{path:"/content",pathName:"Content",icon:Object(b.jsx)(h.o,{className:"Aside__Nav_item-icon"})},{path:"/redzone",pathName:"Redzone",icon:Object(b.jsx)(h.q,{className:"Aside__Nav_item-icon"})},{path:"/setting",pathName:"Setting",icon:Object(b.jsx)(h.u,{className:"Aside__Nav_item-icon"})}],p=(h.n,h.i,h.a,h.o,h.u,function(e,n){var a=Object(t.useState)(n),i=Object(u.a)(a,2),c=i[0],r=i[1];return Object(t.useEffect)((function(){var n=function(n){null===e.current||e.current.contains(n.target)||r(!c)};return c&&window.addEventListener("click",n),function(){window.removeEventListener("click",n)}}),[c,e]),[c,r]});a(61);var g=function(){return Object(b.jsx)("div",{className:"HelpOverlay",children:Object(b.jsxs)("div",{className:"HelpOverlay-content",children:[Object(b.jsx)("h1",{children:"Guide Co-Brand Ruang Ortu"}),Object(b.jsx)("h2",{children:"Dashboard Co-Brand Ruang Ortu"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsxs)("p",{children:["Setelah berhasil login, Anda akan masuk ke halaman Dashboard Co-Brand Ruang Ortu. Pada tampilan awal, Anda akan menemukan tombol berikut di bagian",Object(b.jsx)("br",{})]}),Object(b.jsxs)("ol",{children:[Object(b.jsxs)("li",{children:["Kanan atas, yaitu:",Object(b.jsx)("br",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Tombol Notifikasi, yaitu tombol untuk menampilkan notifikasi terkait cobrand Anda jika diklik"}),Object(b.jsx)("li",{children:"Tombol Profil Brand Anda. Jika diklik, Anda akan menemukan empat tombol, yaitu \u201cBantuan\u201d, \u201cProfile\u201d, \u201cSetting\u201d, dan \u201cLogout\u201d"})]})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("li",{children:["Kiri, yang merupakan tombol navigasi, yaitu:",Object(b.jsx)("br",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Dashboard"}),Object(b.jsx)("li",{children:"Program, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus program yang diselenggarakan oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP."}),Object(b.jsx)("li",{children:"Report, yaitu halaman untuk melihat berbagai data yang terkait dengan pelanggan dan aktivitas Brand Anda."}),Object(b.jsx)("li",{children:"Content, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus konten yang dibuat oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP."}),Object(b.jsx)("li",{children:"Redzone"}),Object(b.jsx)("li",{children:"Setting, yaitu halaman untuk menyunting profil Brand Anda."})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("li",{children:"Halaman Utama (tengah), berisi informasi umum yang terkait dengan aktivitas Brand Anda, yaitu Subscription, Ongoing Program, dan Content List."})]}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"Program"}),Object(b.jsx)("p",{children:"Pada saat masuk ke halaman utama program, Anda akan menemukan tombol \u201cAdd New Program\u201d dan tabel di bawahnya. Tabel tersebut berisi program yang telah Anda buat atau kosong jika Anda belum pernah membuat program. Jika Anda sudah pernah membuat program, Anda akan melihat judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada program yang telah Anda buat, yaitu tombol \u201cView\u201d (ikon mata), \u201cEdit\u201d (ikon pena/pensil), dan \u201cRemove\u201d (ikon tempat sampah)."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Add New Program (Tambah Program Baru)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menambahkan program baru untuk Brand Anda. Untuk membuat program, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut."}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Title, yaitu judul program Brand Anda"}),Object(b.jsx)("li",{children:"Description, yaitu deskripsi umum dari program Brand Anda"}),Object(b.jsx)("li",{children:"Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada program Brand Anda"}),Object(b.jsx)("li",{children:"Set Schedule, yaitu tanggal mulai untuk program Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan."})]}),Object(b.jsx)("p",{children:"Setelah mengisi kolom-kolom di atas, klik tombol \u201cPost Program\u201d untuk mengunggah program Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama program."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"View Program (ikon mata, Lihat Program)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat melihat program yang telah Anda buat secara detail."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Edit Program (ikon pena/pensil, Sunting Program)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menyunting program yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Program."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Remove Program (ikon tempat sampah)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Jika tombol ini diklik, program yang Anda pilih akan terhapus."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h2",{children:"Content"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada saat masuk ke halaman utama content, Anda akan menemukan tombol \u201cAdd New Content\u201d dan tabel di bawahnya. Tabel tersebut berisi konten yang telah Anda buat atau kosong jika Anda belum pernah membuat konten. Jika Anda sudah pernah membuat konten, Anda akan melihat kategori, judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada konten yang telah Anda buat, yaitu tombol \u201cView\u201d (ikon mata), \u201cEdit\u201d (ikon pena/pensil), dan \u201cRemove\u201d (ikon tempat sampah)."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Add New Content (Tambah Konten Baru)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menambahkan konten baru untuk Brand Anda. Untuk membuat konten, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut."}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Category, yaitu kategori konten yang akan Anda buat. Pilih kategori \u201cArtikel\u201d untuk membuat konten tulisan, \u201cImage\u201d untuk membuat konten gambar, dan \u201cVideo\u201d untuk membuat konten video."}),Object(b.jsx)("li",{children:"Program Name, yaitu pilihan program yang telah Anda buat untuk dikaitkan dengan konten Anda. Pilih \u201c--Tanpa Program--\u201d jika konten yang disediakan tidak membutuhkan program, atau pilih program yang telah Anda buat untuk mengaitkan konten Brand Anda dengan program Brand Anda."}),Object(b.jsx)("li",{children:"Title, yaitu judul konten Brand Anda"}),Object(b.jsx)("li",{children:"Description, yaitu deskripsi umum dari konten Brand Anda"}),Object(b.jsx)("li",{children:"Source, yaitu narasumber atau referensi yang digunakan pada konten yang dibuat"}),Object(b.jsx)("li",{children:"Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada konten Brand Anda"}),Object(b.jsx)("li",{children:"Contents, yaitu kolom untuk mengisi konten yang diinginkan. Jika Anda memilih Category \u201cArtikel\u201d, Anda dapat membuat tulisan pada kolom yang tersedia. Jika Anda memilih Category \u201cImage\u201d, Anda diminta untuk memasukkan link gambar yang ingin dipakai. Jika Anda memilih Category \u201cVideo\u201d, Anda diminta untuk memasukkan link video (Youtube, Dailymotion, Vimeo) yang ingin dipakai."}),Object(b.jsx)("li",{children:"Set Schedule, yaitu tanggal mulai untuk konten Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan."})]}),Object(b.jsx)("p",{children:"Setelah mengisi kolom-kolom di atas, klik tombol \u201cPost Content\u201d untuk mengunggah konten Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama Content."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"View Content (ikon mata, Lihat Konten)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat melihat konten yang telah Anda buat secara detail."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Edit Content (ikon pena/pensil, Sunting Konten)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menyunting konten yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Content."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Remove Content (ikon tempat sampah)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Jika tombol ini diklik, konten yang Anda pilih akan terhapus."})]})})};a(62);var k=function(e){var n=e.type,a=e.message,i=Object(t.useState)(!1),c=Object(u.a)(i,2);return c[0],c[1],Object(b.jsx)("div",{className:"alert",children:Object(b.jsxs)("div",{className:n,children:[Object(b.jsxs)("div",{className:"alert-header",children:["ALERT_ERROR"===n?Object(b.jsx)(h.w,{}):Object(b.jsx)(h.f,{}),Object(b.jsx)("span",{children:"ALERT_ERROR"===n?"Error!":"Success!"})]}),Object(b.jsx)("div",{className:"alert-message",children:Object(b.jsx)("span",{children:a})})]})},a)};var x=Object(d.h)((function(e){var n=e.children,a=e.location,i=e.logoutHandler,c=e.showAlert,r=e.alertType,o=e.alertMessage,l=Object(t.useRef)(null),d=p(l,!1),x=Object(u.a)(d,2),f=x[0],y=x[1],A=function(){return y(!f)},v=Object(t.useRef)(null),w=p(v,!1),N=Object(u.a)(w,2),_=N[0],P=N[1],S=Object(t.useState)(JSON.parse(localStorage.getItem("userData"))),C=Object(u.a)(S,2),L=C[0],T=C[1],R=Object(t.useState)(!1),B=Object(u.a)(R,2),E=B[0],H=B[1],M=Object(t.useState)(window.innerWidth>=900),z=Object(u.a)(M,2),I=z[0],D=z[1],U=Object(t.useState)(!1),J=Object(u.a)(U,2),K=J[0],F=J[1];return Object(t.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth<900?D(!1):D(!0)}))}),[I,K]),Object(t.useEffect)((function(){"Profil berhasil diubah."===o&&c&&T(JSON.parse(localStorage.getItem("userData")))}),[o,c]),Object(b.jsxs)(b.Fragment,{children:[E?Object(b.jsx)(g,{}):null,E?Object(b.jsxs)("button",{className:"CloseHelpDashboard",onClick:function(){H(!1),document.getElementsByTagName("main")[0].style.overflowY="visible"},children:[Object(b.jsx)(h.w,{})," "]}):null,c&&r?Object(b.jsx)(k,{type:r,message:o}):null,Object(b.jsxs)("div",{className:"Layout",children:[Object(b.jsxs)("header",{className:"Header",children:[I?null:Object(b.jsx)("button",{className:"Header__menu",onClick:function(e){F(!K)},children:Object(b.jsx)(h.r,{})}),Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)("img",{src:j.a,alt:"Logo Ruang Keluarga",className:"Header__img"})}),Object(b.jsxs)("div",{className:"Header__infoaccount",children:[Object(b.jsxs)("div",{className:"Header__infoaccount__Notification",children:[Object(b.jsx)("div",{className:"Header__notification-btn",onClick:function(){return P(!0)},children:Object(b.jsx)(h.t,{className:"Header__icon ".concat(_&&"Header__icon__active")})}),Object(b.jsx)("nav",{ref:v,className:"Menudropdown ".concat(_?"active":"inactive"),children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(s.b,{to:"/",children:"Broadcast telah dikirimkan kepada semua pengguna."}),Object(b.jsx)("p",{children:"12:23 - 31 Maret 2022"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(s.b,{to:"/",children:"Pesan bantuan telah dikirimkan kepada ricko@ide2sen.com"}),Object(b.jsx)("p",{children:"12:03 - 31 Januari 2022"})]}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/",children:"BUAT PESAN BARU"})})]})})]}),Object(b.jsxs)("div",{className:"Header__infoaccount__profile",children:[Object(b.jsxs)("button",{className:"Header__activeUser",onClick:A,children:[Object(b.jsx)("img",{src:L.thumbnail,className:"Header__profileImg ".concat(f&&"Header__profileImg__active")}),Object(b.jsx)("span",{children:L.cobrandName}),f?Object(b.jsx)(h.h,{}):Object(b.jsx)(h.g,{})]}),Object(b.jsx)("nav",{ref:l,className:"Menudropdown ".concat(f?"active":"inactive"),children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:a.pathname,onClick:function(){H(!0),A(),document.getElementsByTagName("main")[0].style.overflowY="hidden"},children:"Bantuan"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/",children:"Profile"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/setting",onClick:A,children:"Setting"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"true",onClick:function(e){e.preventDefault(),A(),i()},children:"Logout"})})]})})]})]})]}),(I||K)&&Object(b.jsx)(m,{MenuItems:O,ShowAside:F}),Object(b.jsx)("main",{className:"Main",children:n})]})]})})),f=a(35),y=a(16),A=Object(y.b)((function(e){return{isLogin:e.auth.isLogin}}))((function(e){var n=e.component,a=e.isLogin,i=Object(f.a)(e,["component","isLogin"]);return Object(b.jsx)(d.b,Object(l.a)(Object(l.a)({},i),{},{render:function(e){return a?Object(b.jsx)(t.Suspense,{fallback:Object(b.jsx)("p",{children:"Loading..."}),children:Object(b.jsx)(n,Object(l.a)({},e))}):Object(b.jsx)(d.a,{to:{pathname:"/"}})}}))})),v=a(23),w=a(27),N=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,508))})),_=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,509))})),P=Object(t.lazy)((function(){return Promise.all([a.e(25),a.e(17)]).then(a.bind(null,510))})),S=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(3),a.e(21)]).then(a.bind(null,520))})),C=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(3),a.e(23)]).then(a.bind(null,511))})),L=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,512))})),T=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,513))})),R=Object(t.lazy)((function(){return a.e(18).then(a.bind(null,514))})),B=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(13)]).then(a.bind(null,521))})),E=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(4),a.e(20)]).then(a.bind(null,522))})),H=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(4),a.e(19)]).then(a.bind(null,515))})),M=Object(t.lazy)((function(){return a.e(14).then(a.bind(null,518))})),z=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(8),a.e(11)]).then(a.bind(null,519))})),I=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,517))}));var D=Object(y.b)((function(e){return{isLogin:e.auth.isLogin,showAlert:e.dashboard.showAlert,alertType:e.dashboard.alertType,alertMessage:e.dashboard.alertMessage}}),(function(e){return{onAuthSuccess:function(){return e(Object(v.c)())},onAuthFailed:function(){return e(Object(v.b)())},onLogout:function(n){return e(Object(v.d)(n))}}}))((function(e){var n=e.isLogin,a=e.onAuthSuccess,i=e.onAuthFailed,c=e.onLogout,r=e.showAlert,o=e.alertType,s=e.alertMessage,u=Object(d.g)(),j=Object(t.useCallback)((function(){localStorage.getItem("accessToken")?a():i()}),[a,i]);return Object(t.useEffect)((function(){j()}),[n,j]),n?Object(b.jsx)(x,{logoutHandler:function(){return c(u)},showAlert:r,alertType:o,alertMessage:s,children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(A,{exact:!0,path:"/",component:P}),Object(b.jsx)(A,{exact:!0,path:"/report",component:S}),Object(b.jsx)(A,{path:"/program",exact:!0,component:C}),Object(b.jsx)(A,{path:"/program/add",exact:!0,component:function(e){return Object(b.jsx)(L,Object(l.a)({},e))}}),Object(b.jsx)(A,{path:"/program/edit",exact:!0,component:T}),Object(b.jsx)(A,{path:"/program/view",exact:!0,component:R}),Object(b.jsx)(A,{path:"/content",exact:!0,component:B}),Object(b.jsx)(A,{path:"/content/add",exact:!0,component:function(e){return Object(b.jsx)(E,Object(l.a)({},e))}}),Object(b.jsx)(A,{path:"/content/edit",exact:!0,component:H}),Object(b.jsx)(A,{path:"/content/view",exact:!0,component:M}),Object(b.jsx)(A,{path:"/redzone",exact:!0,component:z}),Object(b.jsx)(A,{path:"/setting",exact:!0,component:I})]})}):Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/",render:function(e){return Object(b.jsx)(t.Suspense,{fallback:Object(b.jsx)(w.a,{}),children:Object(b.jsx)(N,Object(l.a)({},e))})}}),Object(b.jsx)(d.b,{exact:!0,path:"/register",render:function(e){return Object(b.jsx)(t.Suspense,{fallback:Object(b.jsx)(w.a,{}),children:Object(b.jsx)(_,Object(l.a)({},e))})}})]})})),U=a(15),J=a(8),K={isLogin:!1,error:null,isLoading:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J.f:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case J.g:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,isLogin:!0});case J.d:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1});case J.e:return Object(l.a)(Object(l.a)({},e),{},{isLogin:!1,isLoading:!1});default:return e}},V={showAlert:!0,alertType:null,alertMessage:"Nganu bikin enak.",idMessage:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J.a:return Object(l.a)(Object(l.a)({},e),{},{showAlert:!1});case J.b:case J.c:return Object(l.a)(Object(l.a)({},e),{},{alertType:n.type,alertMessage:n.message,idMessage:n.idMessage,showAlert:!0});default:return e}},Y=Object(U.b)({auth:F,dashboard:W}),G=a(32),q=U.c,Q=Object(U.d)(Y,Object(U.a)(G.a));q&&(Q=Object(U.d)(Y,q(Object(U.a)(G.a)))),r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(y.a,{store:Q,children:Object(b.jsx)(s.a,{children:Object(b.jsx)(D,{})})})}),document.getElementById("root")),o()}},[[83,6,7]]]);
//# sourceMappingURL=main.0b3086c8.chunk.js.map