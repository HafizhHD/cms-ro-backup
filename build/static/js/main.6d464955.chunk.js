(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[5],{20:function(e,n,a){"use strict";n.a="https://as01.prod.ruangortu.id:8080/api"},23:function(e,n,a){"use strict";a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return l})),a.d(n,"d",(function(){return d})),a.d(n,"e",(function(){return u}));var t=a(8),i=(a(18),a(34)),c=a(25),s=function(){return{type:t.f}},r=function(){return{type:t.d}},o=function(){return{type:t.g}},l=function(e,n){return console.log({email:e,password:n}),function(a){a(s());var t={email:e,password:n};Object(c.b)(t).then((function(e){console.log(e.data);var t=e.data;"OK"===t.resultCode&&t.resultData&&t.resultData.user.password===n?(localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),localStorage.removeItem("loginMessage"),a(o())):(localStorage.setItem("loginMessage","Incorrect Email/Password."),a(r()))})).catch((function(e){console.error("Error:",e)}))}},d=function(e){return function(n){n(s()),localStorage.clear(),e.push("/"),n({type:t.a}),n({type:t.e})}},u=function(e,n,a,r,o,l,d,u,j){return function(b){b(s()),Object(i.b)(r).then((function(i){console.log(i);var s=i;setTimeout((function(){var i={email:e,accountName:n,cobrandName:a,thumbnail:s,phoneNumber:o,address:l,password:d,confirmPassword:u};Object(c.c)(i).then((function(e){console.log("Success:",e.data),localStorage.setItem("loginMessage","Successfully registered. You can now log in.")})).catch((function(e){console.error("Error:",e)})),console.log(i),j.push("/"),b({type:t.e})}),2e3)}))}}},25:function(e,n,a){"use strict";a.d(n,"b",(function(){return s})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return o}));var t=a(18),i=a.n(t),c=a(20),s=function(e){return i()({method:"post",url:c.a+"/cobrand/cobrandLogin",data:e,headers:{"Content-Type":"application/json"}})},r=function(e){return i()({method:"post",url:c.a+"/cobrand/register",data:e,headers:{"Content-Type":"application/json"}})},o=function(e,n){return i()({method:"post",url:c.a+"/cobrand/edit",data:{whereValues:e,newValues:n},headers:{"Content-Type":"application/json"}})}},27:function(e,n,a){"use strict";a(2);var t=a(35),i=(a(82),a(1));n.a=function(e){var n=e.text,a=void 0===n?"Mohon Tunggu":n;return Object(i.jsxs)("div",{className:"LoadingFullRk",children:[Object(i.jsxs)("h1",{className:"LoadingFullRk__heading",children:[Object(i.jsx)("span",{children:"RUANG ORTU by ASIA"})," "]}),Object(i.jsx)(t.a,{}),Object(i.jsx)("p",{children:a})]})}},34:function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"a",(function(){return i}));var t=function(e){return new Promise((function(n,a){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){return n(t.result)},t.onerror=function(e){return a(e)}}))},i=function(e){var n="",a="";return e.includes("facebook.com/")?n="https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(e)+"&show_text=1&width=200":e.includes("vimeo.com/")?((a=void 0!==typeof e.split("vimeo.com/")[1]?e.split("vimeo.com/")[1]:null).includes("&")&&(a=a.split("&")[0]),n="https://player.vimeo.com/video/"+a):e.includes("youtube.com/")&&!e.includes("embed")?((a=void 0!==typeof e.split("v=")[1]?e.split("v=")[1]:null).includes("&")&&(a=a.split("&")[0]),n="https://www.youtube.com/embed/"+a):e.includes("youtu.be/")?((a=void 0!==typeof e.split("youtu.be/")[1]?e.split("youtu.be/")[1]:null).includes("&")&&(a=a.split("&")[0]),n="https://www.youtube.com/embed/"+a):e.includes("dailymotion.com/")?((a=void 0!==typeof e.split("dailymotion.com/")[1]?e.split("dailymotion.com/")[1]:null).includes("&")&&(a=a.split("&")[0]),n="https://www.dailymotion.com/embed/"+a):n=e,n}},35:function(e,n,a){"use strict";a(2),a(81);var t=a(1);n.a=function(){return Object(t.jsxs)("div",{className:"spinner",children:[Object(t.jsx)("div",{className:"bounce1"}),Object(t.jsx)("div",{className:"bounce2"}),Object(t.jsx)("div",{className:"bounce3"})]})}},37:function(e,n,a){"use strict";n.a=a.p+"static/media/Logo_2.17216ad5.png"},53:function(e,n,a){},54:function(e,n,a){},55:function(e,n,a){},61:function(e,n,a){},62:function(e,n,a){},8:function(e,n,a){"use strict";a.d(n,"f",(function(){return t})),a.d(n,"g",(function(){return i})),a.d(n,"d",(function(){return c})),a.d(n,"e",(function(){return s})),a.d(n,"a",(function(){return r})),a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return l}));var t="AUTH_START",i="AUTH_SUCCESS",c="AUTH_FAILED",s="AUTH_LOGOUT",r="ALERT_CLOSE",o="ALERT_ERROR",l="ALERT_SUCCESS"},81:function(e,n,a){},82:function(e,n,a){},83:function(e,n,a){"use strict";a.r(n);var t=a(2),i=a.n(t),c=a(21),s=a.n(c),r=(a(53),function(e){e&&e instanceof Function&&a.e(28).then(a.bind(null,510)).then((function(n){var a=n.getCLS,t=n.getFID,i=n.getFCP,c=n.getLCP,s=n.getTTFB;a(e),t(e),i(e),c(e),s(e)}))}),o=a(7),l=a(5),d=a(6),u=a(10),j=(a(54),a.p,a(37)),b=(a(55),a(3)),m=a(1);var h=function(e){var n=e.MenuItems,a=e.ShowAside,i=Object(d.h)();console.log(i);var c=Object(t.useState)({path:"",active:!1}),s=Object(u.a)(c,2),r=s[0],l=s[1];return Object(m.jsx)("aside",{className:"Aside",children:Object(m.jsx)("ul",{className:"Aside__Nav",children:n.map((function(e,n){return console.log(e.path),Object(m.jsx)("li",{className:"Aside__Nav_item",children:null==e.children?"/"===e.path?Object(m.jsxs)(o.b,{exact:!0,to:e.path,className:"Aside__Nav_item-link",onClick:function(){window.scroll(0,0),window.innerWidth<900&&a(!1)},children:[e.icon,Object(m.jsx)("p",{children:e.pathName})]}):Object(m.jsxs)(o.b,{to:e.path,className:"Aside__Nav_item-link",onClick:function(){window.scroll(0,0),window.innerWidth<900&&a(!1)},children:[e.icon,Object(m.jsx)("p",{children:e.pathName}),r.path===e.path&&!0===r.active?Object(m.jsx)(b.h,{}):Object(m.jsx)(b.g,{})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(o.b,{to:i.pathname,className:"Aside__Nav_item-disabled",onClick:function(){var n={},a=e.path;n=r.path!=a?{path:a,active:!0}:!0===r.active?{path:a,active:!1}:{path:a,active:!0},l(n)},children:[e.icon,Object(m.jsx)("p",{children:e.pathName}),r.path===e.path&&!0===r.active?Object(m.jsx)(b.h,{className:"Aside__Nav_item-disabled-icon"}):Object(m.jsx)(b.g,{className:"Aside__Nav_item-disabled-icon"})]}),r.path===e.path&&!0===r.active?e.children.map((function(n,t){return console.log(n.path),Object(m.jsx)("li",{className:"Aside__Nav_item",children:Object(m.jsxs)(o.b,{to:e.path+n.path,className:"Aside__Nav_item-children",onClick:function(){window.scroll(0,0),window.innerWidth<900&&a(!1)},children:[n.icon,Object(m.jsx)("p",{children:n.pathName})]})},e.path+t)})):null]})},n)}))})})},p=[{path:"/",pathName:"Dashboard",icon:Object(m.jsx)(b.n,{className:"Aside__Nav_item-icon"})},{path:"/report",pathName:"Report",icon:Object(m.jsx)(b.i,{className:"Aside__Nav_item-icon"}),children:[{path:"/user",pathName:"User",icon:Object(m.jsx)(b.A,{className:"Aside__Nav_item-icon"})},{path:"/program",pathName:"Program",icon:Object(m.jsx)(b.a,{className:"Aside__Nav_item-icon"})},{path:"/content",pathName:"Content",icon:Object(m.jsx)(b.o,{className:"Aside__Nav_item-icon"})},{path:"/redzone",pathName:"Redzone",icon:Object(m.jsx)(b.s,{className:"Aside__Nav_item-icon"})},{path:"/monitoring-status",pathName:"Monitoring Status",icon:Object(m.jsx)(b.u,{className:"Aside__Nav_item-icon"})},{path:"/controlling-status",pathName:"Controlling Status",icon:Object(m.jsx)(b.x,{className:"Aside__Nav_item-icon"})}]},{path:"/cms",pathName:"Content Management System",icon:Object(m.jsx)(b.o,{className:"Aside__Nav_item-icon"}),children:[{path:"/user",pathName:"User",icon:Object(m.jsx)(b.A,{className:"Aside__Nav_item-icon"})},{path:"/program",pathName:"Program",icon:Object(m.jsx)(b.a,{className:"Aside__Nav_item-icon"})},{path:"/content",pathName:"Content",icon:Object(m.jsx)(b.o,{className:"Aside__Nav_item-icon"})},{path:"/redzone",pathName:"Redzone",icon:Object(m.jsx)(b.s,{className:"Aside__Nav_item-icon"})},{path:"/messaging",pathName:"Messaging",icon:Object(m.jsx)(b.p,{className:"Aside__Nav_item-icon"})},{path:"/forum-moderator",pathName:"Forum Moderator",icon:Object(m.jsx)(b.q,{className:"Aside__Nav_item-icon"})}]},{path:"/tools",pathName:"Tools",icon:Object(m.jsx)(b.y,{className:"Aside__Nav_item-icon"}),children:[{path:"/admin-staff-management",pathName:"Admin & Staff Management",icon:Object(m.jsx)(b.y,{className:"Aside__Nav_item-icon"})},{path:"/setting",pathName:"Settings",icon:Object(m.jsx)(b.y,{className:"Aside__Nav_item-icon"})}]}],O=(b.n,b.i,b.a,b.o,b.y,function(e,n){var a=Object(t.useState)(n),i=Object(u.a)(a,2),c=i[0],s=i[1];return Object(t.useEffect)((function(){var n=function(n){null===e.current||e.current.contains(n.target)||s(!c)};return c&&window.addEventListener("click",n),function(){window.removeEventListener("click",n)}}),[c,e]),[c,s]});a(61);var g=function(){return Object(m.jsx)("div",{className:"HelpOverlay",children:Object(m.jsxs)("div",{className:"HelpOverlay-content",children:[Object(m.jsx)("h1",{children:"Guide Co-Brand Ruang Ortu"}),Object(m.jsx)("h2",{children:"Dashboard Co-Brand Ruang Ortu"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsxs)("p",{children:["Setelah berhasil login, Anda akan masuk ke halaman Dashboard Co-Brand Ruang Ortu. Pada tampilan awal, Anda akan menemukan tombol berikut di bagian",Object(m.jsx)("br",{})]}),Object(m.jsxs)("ol",{children:[Object(m.jsxs)("li",{children:["Kanan atas, yaitu:",Object(m.jsx)("br",{}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Tombol Notifikasi, yaitu tombol untuk menampilkan notifikasi terkait cobrand Anda jika diklik"}),Object(m.jsx)("li",{children:"Tombol Profil Brand Anda. Jika diklik, Anda akan menemukan empat tombol, yaitu \u201cBantuan\u201d, \u201cProfile\u201d, \u201cSetting\u201d, dan \u201cLogout\u201d"})]})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("li",{children:["Kiri, yang merupakan tombol navigasi, yaitu:",Object(m.jsx)("br",{}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Dashboard"}),Object(m.jsx)("li",{children:"Program, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus program yang diselenggarakan oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP."}),Object(m.jsx)("li",{children:"Report, yaitu halaman untuk melihat berbagai data yang terkait dengan pelanggan dan aktivitas Brand Anda."}),Object(m.jsx)("li",{children:"Content, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus konten yang dibuat oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP."}),Object(m.jsx)("li",{children:"Redzone"}),Object(m.jsx)("li",{children:"Setting, yaitu halaman untuk menyunting profil Brand Anda."})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("li",{children:"Halaman Utama (tengah), berisi informasi umum yang terkait dengan aktivitas Brand Anda, yaitu Subscription, Ongoing Program, dan Content List."})]}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"Program"}),Object(m.jsx)("p",{children:"Pada saat masuk ke halaman utama program, Anda akan menemukan tombol \u201cAdd New Program\u201d dan tabel di bawahnya. Tabel tersebut berisi program yang telah Anda buat atau kosong jika Anda belum pernah membuat program. Jika Anda sudah pernah membuat program, Anda akan melihat judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada program yang telah Anda buat, yaitu tombol \u201cView\u201d (ikon mata), \u201cEdit\u201d (ikon pena/pensil), dan \u201cRemove\u201d (ikon tempat sampah)."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Add New Program (Tambah Program Baru)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat menambahkan program baru untuk Brand Anda. Untuk membuat program, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut."}),Object(m.jsxs)("ol",{children:[Object(m.jsx)("li",{children:"Title, yaitu judul program Brand Anda"}),Object(m.jsx)("li",{children:"Description, yaitu deskripsi umum dari program Brand Anda"}),Object(m.jsx)("li",{children:"Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada program Brand Anda"}),Object(m.jsx)("li",{children:"Set Schedule, yaitu tanggal mulai untuk program Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan."})]}),Object(m.jsx)("p",{children:"Setelah mengisi kolom-kolom di atas, klik tombol \u201cPost Program\u201d untuk mengunggah program Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama program."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"View Program (ikon mata, Lihat Program)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat melihat program yang telah Anda buat secara detail."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Edit Program (ikon pena/pensil, Sunting Program)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat menyunting program yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Program."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Remove Program (ikon tempat sampah)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Jika tombol ini diklik, program yang Anda pilih akan terhapus."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h2",{children:"Content"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada saat masuk ke halaman utama content, Anda akan menemukan tombol \u201cAdd New Content\u201d dan tabel di bawahnya. Tabel tersebut berisi konten yang telah Anda buat atau kosong jika Anda belum pernah membuat konten. Jika Anda sudah pernah membuat konten, Anda akan melihat kategori, judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada konten yang telah Anda buat, yaitu tombol \u201cView\u201d (ikon mata), \u201cEdit\u201d (ikon pena/pensil), dan \u201cRemove\u201d (ikon tempat sampah)."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Add New Content (Tambah Konten Baru)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat menambahkan konten baru untuk Brand Anda. Untuk membuat konten, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut."}),Object(m.jsxs)("ol",{children:[Object(m.jsx)("li",{children:"Category, yaitu kategori konten yang akan Anda buat. Pilih kategori \u201cArtikel\u201d untuk membuat konten tulisan, \u201cImage\u201d untuk membuat konten gambar, dan \u201cVideo\u201d untuk membuat konten video."}),Object(m.jsx)("li",{children:"Program Name, yaitu pilihan program yang telah Anda buat untuk dikaitkan dengan konten Anda. Pilih \u201c--Tanpa Program--\u201d jika konten yang disediakan tidak membutuhkan program, atau pilih program yang telah Anda buat untuk mengaitkan konten Brand Anda dengan program Brand Anda."}),Object(m.jsx)("li",{children:"Title, yaitu judul konten Brand Anda"}),Object(m.jsx)("li",{children:"Description, yaitu deskripsi umum dari konten Brand Anda"}),Object(m.jsx)("li",{children:"Source, yaitu narasumber atau referensi yang digunakan pada konten yang dibuat"}),Object(m.jsx)("li",{children:"Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada konten Brand Anda"}),Object(m.jsx)("li",{children:"Contents, yaitu kolom untuk mengisi konten yang diinginkan. Jika Anda memilih Category \u201cArtikel\u201d, Anda dapat membuat tulisan pada kolom yang tersedia. Jika Anda memilih Category \u201cImage\u201d, Anda diminta untuk memasukkan link gambar yang ingin dipakai. Jika Anda memilih Category \u201cVideo\u201d, Anda diminta untuk memasukkan link video (Youtube, Dailymotion, Vimeo) yang ingin dipakai."}),Object(m.jsx)("li",{children:"Set Schedule, yaitu tanggal mulai untuk konten Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan."})]}),Object(m.jsx)("p",{children:"Setelah mengisi kolom-kolom di atas, klik tombol \u201cPost Content\u201d untuk mengunggah konten Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama Content."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"View Content (ikon mata, Lihat Konten)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat melihat konten yang telah Anda buat secara detail."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Edit Content (ikon pena/pensil, Sunting Konten)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat menyunting konten yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Content."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Remove Content (ikon tempat sampah)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Jika tombol ini diklik, konten yang Anda pilih akan terhapus."})]})})};a(62);var x=function(e){var n=e.type,a=e.message,i=Object(t.useState)(!1),c=Object(u.a)(i,2);return c[0],c[1],Object(m.jsx)("div",{className:"alert",children:Object(m.jsxs)("div",{className:n,children:[Object(m.jsxs)("div",{className:"alert-header",children:["ALERT_ERROR"===n?Object(m.jsx)(b.B,{}):Object(m.jsx)(b.f,{}),Object(m.jsx)("span",{children:"ALERT_ERROR"===n?"Error!":"Success!"})]}),Object(m.jsx)("div",{className:"alert-message",children:Object(m.jsx)("span",{children:a})})]})},a)};var k=Object(d.i)((function(e){var n=e.children,a=e.location,i=e.logoutHandler,c=e.showAlert,s=e.alertType,r=e.alertMessage,l=Object(t.useRef)(null),d=O(l,!1),k=Object(u.a)(d,2),f=k[0],y=k[1],A=function(){return y(!f)},v=Object(t.useRef)(null),N=O(v,!1),_=Object(u.a)(N,2),w=_[0],S=_[1],P=Object(t.useState)(JSON.parse(localStorage.getItem("userData"))),C=Object(u.a)(P,2),L=C[0],T=C[1],R=Object(t.useState)(!1),B=Object(u.a)(R,2),E=B[0],M=B[1],z=Object(t.useState)(window.innerWidth>=900),H=Object(u.a)(z,2),I=H[0],D=H[1],U=Object(t.useState)(!1),J=Object(u.a)(U,2),K=J[0],F=J[1];return Object(t.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth<900?D(!1):D(!0)}))}),[I,K]),Object(t.useEffect)((function(){"Profil berhasil diubah."===r&&c&&T(JSON.parse(localStorage.getItem("userData")))}),[r,c]),Object(m.jsxs)(m.Fragment,{children:[E?Object(m.jsx)(g,{}):null,E?Object(m.jsxs)("button",{className:"CloseHelpDashboard",onClick:function(){M(!1),document.getElementsByTagName("main")[0].style.overflowY="visible"},children:[Object(m.jsx)(b.B,{})," "]}):null,c&&s?Object(m.jsx)(x,{type:s,message:r}):null,Object(m.jsxs)("div",{className:"Layout",children:[Object(m.jsxs)("header",{className:"Header",children:[I?null:Object(m.jsx)("button",{className:"Header__menu",onClick:function(e){F(!K)},children:Object(m.jsx)(b.t,{})}),Object(m.jsx)(o.b,{to:"/",children:Object(m.jsx)("img",{src:j.a,alt:"Logo Ruang Keluarga",className:"Header__img"})}),Object(m.jsxs)("div",{className:"Header__infoaccount",children:[Object(m.jsxs)("div",{className:"Header__infoaccount__Notification",children:[Object(m.jsx)("div",{className:"Header__notification-btn",onClick:function(){return S(!0)},children:Object(m.jsx)(b.w,{className:"Header__icon ".concat(w&&"Header__icon__active")})}),Object(m.jsx)("nav",{ref:v,className:"Menudropdown ".concat(w?"active":"inactive"),children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)(o.b,{to:"/",children:"Broadcast telah dikirimkan kepada semua pengguna."}),Object(m.jsx)("p",{children:"12:23 - 31 Maret 2022"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(o.b,{to:"/",children:"Pesan bantuan telah dikirimkan kepada ricko@ide2sen.com"}),Object(m.jsx)("p",{children:"12:03 - 31 Januari 2022"})]}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",children:"BUAT PESAN BARU"})})]})})]}),Object(m.jsxs)("div",{className:"Header__infoaccount__profile",children:[Object(m.jsxs)("button",{className:"Header__activeUser",onClick:A,children:[Object(m.jsx)("img",{src:L.thumbnail,className:"Header__profileImg ".concat(f&&"Header__profileImg__active")}),Object(m.jsx)("span",{children:L.cobrandName}),f?Object(m.jsx)(b.h,{}):Object(m.jsx)(b.g,{})]}),Object(m.jsx)("nav",{ref:l,className:"Menudropdown ".concat(f?"active":"inactive"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:a.pathname,onClick:function(){M(!0),A(),document.getElementsByTagName("main")[0].style.overflowY="hidden"},children:"Bantuan"})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",children:"Profile"})}),Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/setting",onClick:A,children:"Setting"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"true",onClick:function(e){e.preventDefault(),A(),i()},children:"Logout"})})]})})]})]})]}),(I||K)&&Object(m.jsx)(h,{MenuItems:p,ShowAside:F}),Object(m.jsx)("main",{className:"Main",children:n})]})]})})),f=a(33),y=a(16),A=Object(y.b)((function(e){return{isLogin:e.auth.isLogin}}))((function(e){var n=e.component,a=e.isLogin,i=Object(f.a)(e,["component","isLogin"]);return Object(m.jsx)(d.b,Object(l.a)(Object(l.a)({},i),{},{render:function(e){return a?Object(m.jsx)(t.Suspense,{fallback:Object(m.jsx)("p",{children:"Loading..."}),children:Object(m.jsx)(n,Object(l.a)({},e))}):Object(m.jsx)(d.a,{to:{pathname:"/"}})}}))})),v=a(23),N=a(27),_=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,511))})),w=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,512))})),S=Object(t.lazy)((function(){return Promise.all([a.e(27),a.e(19)]).then(a.bind(null,513))})),P=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(3),a.e(23)]).then(a.bind(null,525))})),C=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(3),a.e(25)]).then(a.bind(null,514))})),L=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,515))})),T=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,516))})),R=Object(t.lazy)((function(){return a.e(20).then(a.bind(null,517))})),B=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(16)]).then(a.bind(null,526))})),E=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(4),a.e(22)]).then(a.bind(null,527))})),M=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(4),a.e(21)]).then(a.bind(null,518))})),z=Object(t.lazy)((function(){return a.e(14).then(a.bind(null,519))})),H=Object(t.lazy)((function(){return Promise.all([a.e(1),a.e(8),a.e(12)]).then(a.bind(null,524))})),I=Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,523))})),D=Object(t.lazy)((function(){return a.e(15).then(a.bind(null,520))})),U=Object(t.lazy)((function(){return a.e(11).then(a.bind(null,521))}));var J=Object(y.b)((function(e){return{isLogin:e.auth.isLogin,showAlert:e.dashboard.showAlert,alertType:e.dashboard.alertType,alertMessage:e.dashboard.alertMessage}}),(function(e){return{onAuthSuccess:function(){return e(Object(v.c)())},onAuthFailed:function(){return e(Object(v.b)())},onLogout:function(n){return e(Object(v.d)(n))}}}))((function(e){var n=e.isLogin,a=e.onAuthSuccess,i=e.onAuthFailed,c=e.onLogout,s=e.showAlert,r=e.alertType,o=e.alertMessage,u=Object(d.g)(),j=Object(t.useCallback)((function(){localStorage.getItem("accessToken")?a():i()}),[a,i]);return Object(t.useEffect)((function(){j()}),[n,j]),n?Object(m.jsx)(k,{logoutHandler:function(){return c(u)},showAlert:s,alertType:r,alertMessage:o,children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(A,{exact:!0,path:"/",component:S}),Object(m.jsx)(A,{exact:!0,path:"/report/user",component:P}),Object(m.jsx)(A,{path:"/cms/user",exact:!0,component:D}),Object(m.jsx)(A,{path:"/cms/program",exact:!0,component:C}),Object(m.jsx)(A,{path:"/cms/program/add",exact:!0,component:function(e){return Object(m.jsx)(L,Object(l.a)({},e))}}),Object(m.jsx)(A,{path:"/cms/program/edit",exact:!0,component:T}),Object(m.jsx)(A,{path:"/cms/program/view",exact:!0,component:R}),Object(m.jsx)(A,{path:"/cms/content",exact:!0,component:B}),Object(m.jsx)(A,{path:"/cms/content/add",exact:!0,component:function(e){return Object(m.jsx)(E,Object(l.a)({},e))}}),Object(m.jsx)(A,{path:"/cms/content/edit",exact:!0,component:M}),Object(m.jsx)(A,{path:"/cms/content/view",exact:!0,component:z}),Object(m.jsx)(A,{path:"/cms/redzone",exact:!0,component:H}),Object(m.jsx)(A,{path:"/cms/redzone/add",exact:!0,component:U}),Object(m.jsx)(A,{path:"/tools/setting",exact:!0,component:I})]})}):Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{exact:!0,path:"/",render:function(e){return Object(m.jsx)(t.Suspense,{fallback:Object(m.jsx)(N.a,{}),children:Object(m.jsx)(_,Object(l.a)({},e))})}}),Object(m.jsx)(d.b,{exact:!0,path:"/register",render:function(e){return Object(m.jsx)(t.Suspense,{fallback:Object(m.jsx)(N.a,{}),children:Object(m.jsx)(w,Object(l.a)({},e))})}})]})})),K=a(15),F=a(8),V={isLogin:!1,error:null,isLoading:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case F.f:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case F.g:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,isLogin:!0});case F.d:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1});case F.e:return Object(l.a)(Object(l.a)({},e),{},{isLogin:!1,isLoading:!1});default:return e}},Y={showAlert:!0,alertType:null,alertMessage:"Nganu bikin enak.",idMessage:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case F.a:return Object(l.a)(Object(l.a)({},e),{},{showAlert:!1});case F.b:case F.c:return Object(l.a)(Object(l.a)({},e),{},{alertType:n.type,alertMessage:n.message,idMessage:n.idMessage,showAlert:!0});default:return e}},q=Object(K.b)({auth:W,dashboard:G}),Q=a(32),X=K.c,Z=Object(K.d)(q,Object(K.a)(Q.a));X&&(Z=Object(K.d)(q,X(Object(K.a)(Q.a)))),s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(y.a,{store:Z,children:Object(m.jsx)(o.a,{children:Object(m.jsx)(J,{})})})}),document.getElementById("root")),r()}},[[83,6,7]]]);
//# sourceMappingURL=main.6d464955.chunk.js.map