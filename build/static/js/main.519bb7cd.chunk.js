(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[10],{20:function(e,t,n){"use strict";t.a="https://as01.prod.ruangortu.id:8080/api"},22:function(e,t,n){"use strict";n(2),n(68);var a=n(0);t.a=function(){return Object(a.jsxs)("div",{className:"spinner",children:[Object(a.jsx)("div",{className:"bounce1"}),Object(a.jsx)("div",{className:"bounce2"}),Object(a.jsx)("div",{className:"bounce3"})]})}},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return j}));var a=n(8),c=(n(18),n(37)),i=n(25),o=function(){return{type:a.f}},r=function(){return{type:a.d}},s=function(){return{type:a.g}},l=function(e,t){return console.log({email:e,password:t}),function(n){n(o());var a={email:e,password:t};Object(i.b)(a).then((function(e){console.log(e.data);var a=e.data;"OK"===a.resultCode&&a.resultData&&a.resultData.user.password===t?(localStorage.setItem("accessToken",a.resultData.token),localStorage.setItem("userData",JSON.stringify(a.resultData.user)),localStorage.removeItem("loginMessage"),n(s())):(localStorage.setItem("loginMessage","Incorrect Email/Password."),n(r()))})).catch((function(e){console.error("Error:",e)}))}},d=function(e){return function(t){t(o()),localStorage.clear(),e.push("/"),t({type:a.a}),t({type:a.e})}},j=function(e,t,n,r,s,l,d,j,u){return function(b){b(o()),Object(c.b)(r).then((function(c){console.log(c);var o=c;setTimeout((function(){var c={email:e,accountName:t,cobrandName:n,thumbnail:o,phoneNumber:s,address:l,password:d,confirmPassword:j};Object(i.c)(c).then((function(e){console.log("Success:",e.data),localStorage.setItem("loginMessage","Successfully registered. You can now log in.")})).catch((function(e){console.error("Error:",e)})),console.log(c),u.push("/"),b({type:a.e})}),2e3)}))}}},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return s}));var a=n(18),c=n.n(a),i=n(20),o=function(e){return c()({method:"post",url:i.a+"/cobrand/cobrandLogin",data:e,headers:{"Content-Type":"application/json"}})},r=function(e){return c()({method:"post",url:i.a+"/cobrand/register",data:e,headers:{"Content-Type":"application/json"}})},s=function(e,t){return c()({method:"post",url:i.a+"/cobrand/edit",data:{whereValues:e,newValues:t},headers:{"Content-Type":"application/json"}})}},29:function(e,t,n){"use strict";n(2);var a=n(22),c=(n(88),n(0));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(c.jsxs)("div",{className:"LoadingFullRk",children:[Object(c.jsxs)("h1",{className:"LoadingFullRk__heading",children:[Object(c.jsx)("span",{children:"RUANG ORTU by ASIA"})," "]}),Object(c.jsx)(a.a,{}),Object(c.jsx)("p",{children:n})]})}},36:function(e,t,n){"use strict";n(2);var a=n(22),c=(n(69),n(0));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(c.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(c.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(c.jsx)("span",{children:"Ruang Ortu by ASIA"})," "]}),Object(c.jsx)(a.a,{}),Object(c.jsx)("p",{children:n})]})}},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var a=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))},c=function(e){var t="",n="";return e.includes("facebook.com/")?t="https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(e)+"&show_text=1&width=200":e.includes("vimeo.com/")?((n=void 0!==typeof e.split("vimeo.com/")[1]?e.split("vimeo.com/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://player.vimeo.com/video/"+n):e.includes("youtube.com/")&&!e.includes("embed")?((n=void 0!==typeof e.split("v=")[1]?e.split("v=")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.youtube.com/embed/"+n):e.includes("youtu.be/")?((n=void 0!==typeof e.split("youtu.be/")[1]?e.split("youtu.be/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.youtube.com/embed/"+n):e.includes("dailymotion.com/")?((n=void 0!==typeof e.split("dailymotion.com/")[1]?e.split("dailymotion.com/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.dailymotion.com/embed/"+n):t=e,t}},39:function(e,t,n){"use strict";t.a=n.p+"static/media/Logo_2.17216ad5.png"},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},8:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var a="AUTH_START",c="AUTH_SUCCESS",i="AUTH_FAILED",o="AUTH_LOGOUT",r="ALERT_CLOSE",s="ALERT_ERROR",l="ALERT_SUCCESS"},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(21),o=n.n(i),r=(n(58),function(e){e&&e instanceof Function&&n.e(65).then(n.bind(null,1360)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))}),s=n(7),l=n(5),d=n(6),j=n(9),u=(n(59),n.p,n(39)),b=(n(60),n(3)),m=n(0);var h=function(e){var t=e.MenuItems,n=e.ShowAside,c=Object(d.h)();console.log("Current location:",c);var i=Object(a.useState)({path:c.pathname,active:!0}),o=Object(j.a)(i,2),r=o[0],l=o[1],u=Object(a.useState)({path:c.pathname,active:!0}),h=Object(j.a)(u,2),p=h[0],O=h[1];return Object(m.jsx)("aside",{className:"Aside",children:Object(m.jsx)("ul",{className:"Aside__Nav",children:t.map((function(e,t){return console.log(e.path),Object(m.jsx)("li",{className:"Aside__Nav_item",children:e.children?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(s.b,{to:c.pathname,className:"Aside__Nav_item-disabled",onClick:function(){var t={},n=e.path;t=r.path!=n?{path:n,active:!0}:!0===r.active?{path:n,active:!1}:{path:n,active:!0},l(t)},children:[e.icon,Object(m.jsx)("p",{children:e.pathName}),r.path===e.path&&!0===r.active?Object(m.jsx)(b.f,{className:"Aside__Nav_item-disabled-icon"}):Object(m.jsx)(b.e,{className:"Aside__Nav_item-disabled-icon"})]}),r.path===e.path&&!0===r.active?e.children.map((function(t,a){return console.log(t.path),Object(m.jsx)("li",{className:"Aside__Nav_item",children:t.children?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(s.b,{to:c.pathname,className:"Aside__Nav_item-disabled-children",onClick:function(){var n={},a=e.path+t.path;n=p.path!=a?{path:a,active:!0}:!0===p.active?{path:a,active:!1}:{path:a,active:!0},O(n)},children:[t.icon,Object(m.jsx)("p",{children:t.pathName}),p.path===e.path+t.path&&!0===p.active?Object(m.jsx)(b.f,{className:"Aside__Nav_item-disabled-icon"}):Object(m.jsx)(b.e,{className:"Aside__Nav_item-disabled-icon"})]}),p.path===e.path+t.path&&!0===p.active?t.children.map((function(a,c){return console.log(a.path),Object(m.jsx)("li",{className:"Aside__Nav_item",children:Object(m.jsxs)(s.b,{to:e.path+t.path+a.path,className:"Aside__Nav_item-children-children",onClick:function(){window.scroll(0,0),window.innerWidth<900&&n(!1)},children:[a.icon,Object(m.jsx)("p",{children:a.pathName})]})},e.path+t.path+c)})):null]}):Object(m.jsxs)(s.b,{to:e.path+t.path,className:"Aside__Nav_item-children",onClick:function(){window.scroll(0,0),window.innerWidth<900&&n(!1)},children:[t.icon,Object(m.jsx)("p",{children:t.pathName})]})},e.path+a)})):null]}):"/"===e.path?Object(m.jsxs)(s.b,{exact:!0,to:e.path,className:"Aside__Nav_item-link",onClick:function(){window.scroll(0,0),window.innerWidth<900&&n(!1)},children:[e.icon,Object(m.jsx)("p",{children:e.pathName})]}):Object(m.jsxs)(s.b,{to:e.path,className:"Aside__Nav_item-link",onClick:function(){window.scroll(0,0),window.innerWidth<900&&n(!1)},children:[e.icon,Object(m.jsx)("p",{children:e.pathName}),r.path===e.path&&!0===r.active?Object(m.jsx)(b.f,{}):Object(m.jsx)(b.e,{})]})},t)}))})})},p=[{path:"/",pathName:"Dashboard",icon:Object(m.jsx)(b.m,{className:"Aside__Nav_item-icon"})},{path:"/report",pathName:"Report",icon:Object(m.jsx)(b.h,{className:"Aside__Nav_item-icon"}),children:[{path:"/user",pathName:"Report Pengguna",icon:Object(m.jsx)(b.A,{className:"Aside__Nav_item-icon"})},{path:"/content",pathName:"Report Artikel",icon:Object(m.jsx)(b.n,{className:"Aside__Nav_item-icon"})},{path:"/program",pathName:"Report Program",icon:Object(m.jsx)(b.a,{className:"Aside__Nav_item-icon"})},{path:"/redzone",pathName:"Report Redzone",icon:Object(m.jsx)(b.r,{className:"Aside__Nav_item-icon"})},{path:"/monitoring-content",pathName:"Monitoring Artikel",icon:Object(m.jsx)(b.u,{className:"Aside__Nav_item-icon"})},{path:"/monitoring-program",pathName:"Monitoring Program",icon:Object(m.jsx)(b.u,{className:"Aside__Nav_item-icon"})},{path:"/monitoring-status",pathName:"Monitoring Aktivitas",icon:Object(m.jsx)(b.u,{className:"Aside__Nav_item-icon"})},{path:"/controlling-status",pathName:"Controlling Status",icon:Object(m.jsx)(b.x,{className:"Aside__Nav_item-icon"})},{path:"/commercial",pathName:"Laporan Keuangan Terestimasi",icon:Object(m.jsx)(b.g,{className:"Aside__Nav_item-icon"})}]},{path:"/cms",pathName:"Manajemen Data",icon:Object(m.jsx)(b.n,{className:"Aside__Nav_item-icon"}),children:[{path:"/user",pathName:"Pengguna",icon:Object(m.jsx)(b.A,{className:"Aside__Nav_item-icon"})},{path:"/program",pathName:"Program",icon:Object(m.jsx)(b.a,{className:"Aside__Nav_item-icon"})},{path:"/content",pathName:"Artikel",icon:Object(m.jsx)(b.n,{className:"Aside__Nav_item-icon"})},{path:"/redzone",pathName:"Redzone",icon:Object(m.jsx)(b.r,{className:"Aside__Nav_item-icon"})},{path:"/notifications",pathName:"Notifikasi",icon:Object(m.jsx)(b.o,{className:"Aside__Nav_item-icon"})},{path:"/forum-moderator",pathName:"Forum Moderator",icon:Object(m.jsx)(b.p,{className:"Aside__Nav_item-icon"})}]},{path:"/tools",pathName:"Tools",icon:Object(m.jsx)(b.y,{className:"Aside__Nav_item-icon"}),children:[{path:"/admin-staff",pathName:"Manajemen Admin & Staff",icon:Object(m.jsx)(b.A,{className:"Aside__Nav_item-icon"})},{path:"/setting",pathName:"Pengaturan",icon:Object(m.jsx)(b.y,{className:"Aside__Nav_item-icon"}),children:[{path:"/topic",pathName:"Topik Artikel",icon:Object(m.jsx)(b.n,{className:"Aside__Nav_item-icon"})},{path:"/program-category",pathName:"Kategori Program",icon:Object(m.jsx)(b.a,{className:"Aside__Nav_item-icon"})},{path:"/target-audience",pathName:"Target Pembaca",icon:Object(m.jsx)(b.p,{className:"Aside__Nav_item-icon"})},{path:"/notification-category",pathName:"Kategori Notifikasi",icon:Object(m.jsx)(b.o,{className:"Aside__Nav_item-icon"})},{path:"/screentime",pathName:"Standar Screen Time",icon:Object(m.jsx)(b.u,{className:"Aside__Nav_item-icon"})}]}]}],O=(b.m,b.h,b.a,b.n,b.y,function(e,t){var n=Object(a.useState)(t),c=Object(j.a)(n,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){var t=function(t){null===e.current||e.current.contains(t.target)||o(!i)};return i&&window.addEventListener("click",t),function(){window.removeEventListener("click",t)}}),[i,e]),[i,o]});n(66);var x=function(){return Object(m.jsx)("div",{className:"HelpOverlay",children:Object(m.jsxs)("div",{className:"HelpOverlay-content",children:[Object(m.jsx)("h1",{children:"Guide Co-Brand Ruang Ortu"}),Object(m.jsx)("h2",{children:"Dashboard Co-Brand Ruang Ortu"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsxs)("p",{children:["Setelah berhasil login, Anda akan masuk ke halaman Dashboard Co-Brand Ruang Ortu. Pada tampilan awal, Anda akan menemukan tombol berikut di bagian",Object(m.jsx)("br",{})]}),Object(m.jsxs)("ol",{children:[Object(m.jsxs)("li",{children:["Kanan atas, yaitu:",Object(m.jsx)("br",{}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Tombol Notifikasi, yaitu tombol untuk menampilkan notifikasi terkait cobrand Anda jika diklik"}),Object(m.jsx)("li",{children:"Tombol Profil Brand Anda. Jika diklik, Anda akan menemukan empat tombol, yaitu \u201cBantuan\u201d, \u201cProfile\u201d, \u201cSetting\u201d, dan \u201cLogout\u201d"})]})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("li",{children:["Kiri, yang merupakan tombol navigasi, yaitu:",Object(m.jsx)("br",{}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Dashboard"}),Object(m.jsx)("li",{children:"Program, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus program yang diselenggarakan oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP."}),Object(m.jsx)("li",{children:"Report, yaitu halaman untuk melihat berbagai data yang terkait dengan pelanggan dan aktivitas Brand Anda."}),Object(m.jsx)("li",{children:"Content, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus konten yang dibuat oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP."}),Object(m.jsx)("li",{children:"Redzone"}),Object(m.jsx)("li",{children:"Setting, yaitu halaman untuk menyunting profil Brand Anda."})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("li",{children:"Halaman Utama (tengah), berisi informasi umum yang terkait dengan aktivitas Brand Anda, yaitu Subscription, Ongoing Program, dan Content List."})]}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"Program"}),Object(m.jsx)("p",{children:"Pada saat masuk ke halaman utama program, Anda akan menemukan tombol \u201cAdd New Program\u201d dan tabel di bawahnya. Tabel tersebut berisi program yang telah Anda buat atau kosong jika Anda belum pernah membuat program. Jika Anda sudah pernah membuat program, Anda akan melihat judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada program yang telah Anda buat, yaitu tombol \u201cView\u201d (ikon mata), \u201cEdit\u201d (ikon pena/pensil), dan \u201cRemove\u201d (ikon tempat sampah)."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Add New Program (Tambah Program Baru)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat menambahkan program baru untuk Brand Anda. Untuk membuat program, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut."}),Object(m.jsxs)("ol",{children:[Object(m.jsx)("li",{children:"Title, yaitu judul program Brand Anda"}),Object(m.jsx)("li",{children:"Description, yaitu deskripsi umum dari program Brand Anda"}),Object(m.jsx)("li",{children:"Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada program Brand Anda"}),Object(m.jsx)("li",{children:"Set Schedule, yaitu tanggal mulai untuk program Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan."})]}),Object(m.jsx)("p",{children:"Setelah mengisi kolom-kolom di atas, klik tombol \u201cPost Program\u201d untuk mengunggah program Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama program."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"View Program (ikon mata, Lihat Program)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat melihat program yang telah Anda buat secara detail."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Edit Program (ikon pena/pensil, Sunting Program)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat menyunting program yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Program."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Remove Program (ikon tempat sampah)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Jika tombol ini diklik, program yang Anda pilih akan terhapus."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h2",{children:"Content"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada saat masuk ke halaman utama content, Anda akan menemukan tombol \u201cAdd New Content\u201d dan tabel di bawahnya. Tabel tersebut berisi konten yang telah Anda buat atau kosong jika Anda belum pernah membuat konten. Jika Anda sudah pernah membuat konten, Anda akan melihat kategori, judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada konten yang telah Anda buat, yaitu tombol \u201cView\u201d (ikon mata), \u201cEdit\u201d (ikon pena/pensil), dan \u201cRemove\u201d (ikon tempat sampah)."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Add New Content (Tambah Konten Baru)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat menambahkan konten baru untuk Brand Anda. Untuk membuat konten, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut."}),Object(m.jsxs)("ol",{children:[Object(m.jsx)("li",{children:"Category, yaitu kategori konten yang akan Anda buat. Pilih kategori \u201cArtikel\u201d untuk membuat konten tulisan, \u201cImage\u201d untuk membuat konten gambar, dan \u201cVideo\u201d untuk membuat konten video."}),Object(m.jsx)("li",{children:"Program Name, yaitu pilihan program yang telah Anda buat untuk dikaitkan dengan konten Anda. Pilih \u201c--Tanpa Program--\u201d jika konten yang disediakan tidak membutuhkan program, atau pilih program yang telah Anda buat untuk mengaitkan konten Brand Anda dengan program Brand Anda."}),Object(m.jsx)("li",{children:"Title, yaitu judul konten Brand Anda"}),Object(m.jsx)("li",{children:"Description, yaitu deskripsi umum dari konten Brand Anda"}),Object(m.jsx)("li",{children:"Source, yaitu narasumber atau referensi yang digunakan pada konten yang dibuat"}),Object(m.jsx)("li",{children:"Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada konten Brand Anda"}),Object(m.jsx)("li",{children:"Contents, yaitu kolom untuk mengisi konten yang diinginkan. Jika Anda memilih Category \u201cArtikel\u201d, Anda dapat membuat tulisan pada kolom yang tersedia. Jika Anda memilih Category \u201cImage\u201d, Anda diminta untuk memasukkan link gambar yang ingin dipakai. Jika Anda memilih Category \u201cVideo\u201d, Anda diminta untuk memasukkan link video (Youtube, Dailymotion, Vimeo) yang ingin dipakai."}),Object(m.jsx)("li",{children:"Set Schedule, yaitu tanggal mulai untuk konten Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan."})]}),Object(m.jsx)("p",{children:"Setelah mengisi kolom-kolom di atas, klik tombol \u201cPost Content\u201d untuk mengunggah konten Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama Content."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"View Content (ikon mata, Lihat Konten)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat melihat konten yang telah Anda buat secara detail."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Edit Content (ikon pena/pensil, Sunting Konten)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Pada menu ini, Anda dapat menyunting konten yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Content."}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("h3",{children:"Remove Content (ikon tempat sampah)"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})}),Object(m.jsx)("p",{children:"Jika tombol ini diklik, konten yang Anda pilih akan terhapus."})]})})};n(67);var g=function(e){var t=e.type,n=e.message,c=Object(a.useState)(!1),i=Object(j.a)(c,2);return i[0],i[1],Object(m.jsx)("div",{className:"alert",children:Object(m.jsxs)("div",{className:t,children:[Object(m.jsxs)("div",{className:"alert-header",children:["ALERT_ERROR"===t?Object(m.jsx)(b.B,{}):Object(m.jsx)(b.d,{}),Object(m.jsx)("span",{children:"ALERT_ERROR"===t?"Error!":"Success!"})]}),Object(m.jsx)("div",{className:"alert-message",children:Object(m.jsx)("span",{children:n})})]})},n)};var k=Object(d.i)((function(e){var t=e.children,n=e.location,c=e.logoutHandler,i=e.showAlert,o=e.alertType,r=e.alertMessage,l=Object(a.useRef)(null),d=O(l,!1),k=Object(j.a)(d,2),f=k[0],y=k[1],N=function(){return y(!f)},_=Object(a.useRef)(null),v=O(_,!1),A=Object(j.a)(v,2),w=A[0],P=A[1],S=Object(a.useState)(JSON.parse(localStorage.getItem("userData"))),z=Object(j.a)(S,2),C=z[0],R=z[1],T=Object(a.useState)(!1),L=Object(j.a)(T,2),B=L[0],E=L[1],M=Object(a.useState)(window.innerWidth>=900),H=Object(j.a)(M,2),I=H[0],D=H[1],K=Object(a.useState)(!1),U=Object(j.a)(K,2),F=U[0],J=U[1];return Object(a.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth<900?D(!1):D(!0)}))}),[I,F]),Object(a.useEffect)((function(){"Profil berhasil diubah."===r&&i&&R(JSON.parse(localStorage.getItem("userData")))}),[r,i]),Object(m.jsxs)(m.Fragment,{children:[B?Object(m.jsx)(x,{}):null,B?Object(m.jsxs)("button",{className:"CloseHelpDashboard",onClick:function(){E(!1),document.getElementsByTagName("main")[0].style.overflowY="visible"},children:[Object(m.jsx)(b.B,{})," "]}):null,i&&o?Object(m.jsx)(g,{type:o,message:r}):null,Object(m.jsxs)("div",{className:"Layout",children:[Object(m.jsxs)("header",{className:"Header",children:[I?null:Object(m.jsx)("button",{className:"Header__menu",onClick:function(e){J(!F)},children:Object(m.jsx)(b.s,{})}),Object(m.jsx)(s.b,{to:"/",children:Object(m.jsx)("img",{src:u.a,alt:"Logo Ruang Keluarga",className:"Header__img"})}),Object(m.jsxs)("div",{className:"Header__infoaccount",children:[Object(m.jsxs)("div",{className:"Header__infoaccount__Notification",children:[Object(m.jsx)("div",{className:"Header__notification-btn",onClick:function(){return P(!0)},children:Object(m.jsx)(b.w,{className:"Header__icon ".concat(w&&"Header__icon__active")})}),Object(m.jsx)("nav",{ref:_,className:"Menudropdown ".concat(w?"active":"inactive"),children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)(s.b,{to:"/",children:"Broadcast telah dikirimkan kepada semua pengguna."}),Object(m.jsx)("p",{children:"12:23 - 31 Maret 2022"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(s.b,{to:"/",children:"Pesan bantuan telah dikirimkan kepada ricko@ide2sen.com"}),Object(m.jsx)("p",{children:"12:03 - 31 Januari 2022"})]}),Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{to:"/",children:"BUAT PESAN BARU"})})]})})]}),Object(m.jsxs)("div",{className:"Header__infoaccount__profile",children:[Object(m.jsxs)("button",{className:"Header__activeUser",onClick:N,children:[Object(m.jsx)("img",{src:C.thumbnail,className:"Header__profileImg ".concat(f&&"Header__profileImg__active")}),Object(m.jsx)("span",{children:C.cobrandName}),f?Object(m.jsx)(b.f,{}):Object(m.jsx)(b.e,{})]}),Object(m.jsx)("nav",{ref:l,className:"Menudropdown ".concat(f?"active":"inactive"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{to:n.pathname,onClick:function(){E(!0),N(),document.getElementsByTagName("main")[0].style.overflowY="hidden"},children:"Bantuan"})}),Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{to:"/",children:"Profile"})}),Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{to:"/setting",onClick:N,children:"Setting"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"true",onClick:function(e){e.preventDefault(),N(),c()},children:"Logout"})})]})})]})]})]}),(I||F)&&Object(m.jsx)(h,{MenuItems:p,ShowAside:J}),Object(m.jsx)("main",{className:"Main",children:t})]})]})})),f=n(34),y=n(17),N=n(36),_=Object(y.b)((function(e){return{isLogin:e.auth.isLogin}}))((function(e){var t=e.component,n=e.isLogin,c=Object(f.a)(e,["component","isLogin"]);return Object(m.jsx)(d.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return n?Object(m.jsx)(a.Suspense,{fallback:Object(m.jsx)(N.a,{}),children:Object(m.jsx)(t,Object(l.a)({},e))}):Object(m.jsx)(d.a,{to:{pathname:"/"}})}}))})),v=n(24),A=n(29),w=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(58)]).then(n.bind(null,1417))})),P=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(5),n.e(7),n.e(36)]).then(n.bind(null,1361))})),S=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(7),n.e(29)]).then(n.bind(null,1418))})),z=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(6),n.e(9),n.e(61)]).then(n.bind(null,1362))})),C=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(55)]).then(n.bind(null,1419))})),R=Object(a.lazy)((function(){return n.e(59).then(n.bind(null,1363))})),T=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(57)]).then(n.bind(null,1420))})),L=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(5),n.e(6),n.e(15)]).then(n.bind(null,1421))})),B=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(6),n.e(9),n.e(60)]).then(n.bind(null,1364))})),E=Object(a.lazy)((function(){return n.e(56).then(n.bind(null,1365))})),M=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(8),n.e(34)]).then(n.bind(null,1422))})),H=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,1413))})),I=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(16),n.e(38)]).then(n.bind(null,1415))})),D=Object(a.lazy)((function(){return n.e(33).then(n.bind(null,1366))})),K=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(53)]).then(n.bind(null,1367))})),U=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(54)]).then(n.bind(null,1368))})),F=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(62),n.e(35)]).then(n.bind(null,1414))})),J=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(45)]).then(n.bind(null,1423))})),V=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(44)]).then(n.bind(null,1424))})),W=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(40)]).then(n.bind(null,1425))})),Y=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(46)]).then(n.bind(null,1426))})),G=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(39)]).then(n.bind(null,1427))})),q=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(42)]).then(n.bind(null,1428))})),Q=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(43)]).then(n.bind(null,1429))})),X=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(13)]).then(n.bind(null,1430))})),Z=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(41)]).then(n.bind(null,1431))})),$=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,1390))})),ee=Object(a.lazy)((function(){return n.e(22).then(n.bind(null,1391))})),te=Object(a.lazy)((function(){return n.e(31).then(n.bind(null,1392))})),ne=Object(a.lazy)((function(){return n.e(20).then(n.bind(null,1393))})),ae=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(47)]).then(n.bind(null,1394))})),ce=Object(a.lazy)((function(){return n.e(21).then(n.bind(null,1395))})),ie=Object(a.lazy)((function(){return n.e(24).then(n.bind(null,1396))})),oe=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(48)]).then(n.bind(null,1397))})),re=Object(a.lazy)((function(){return n.e(28).then(n.bind(null,1398))})),se=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(52)]).then(n.bind(null,1399))})),le=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(50)]).then(n.bind(null,1400))})),de=Object(a.lazy)((function(){return n.e(26).then(n.bind(null,1401))})),je=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(49)]).then(n.bind(null,1402))})),ue=Object(a.lazy)((function(){return n.e(25).then(n.bind(null,1403))})),be=Object(a.lazy)((function(){return n.e(27).then(n.bind(null,1404))})),me=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(51)]).then(n.bind(null,1405))})),he=Object(a.lazy)((function(){return n.e(19).then(n.bind(null,1406))})),pe=Object(a.lazy)((function(){return Promise.all([n.e(8),n.e(17)]).then(n.bind(null,1407))})),Oe=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(37)]).then(n.bind(null,1408))})),xe=Object(a.lazy)((function(){return n.e(32).then(n.bind(null,1410))}));var ge=Object(y.b)((function(e){return{isLogin:e.auth.isLogin,showAlert:e.dashboard.showAlert,alertType:e.dashboard.alertType,alertMessage:e.dashboard.alertMessage}}),(function(e){return{onAuthSuccess:function(){return e(Object(v.c)())},onAuthFailed:function(){return e(Object(v.b)())},onLogout:function(t){return e(Object(v.d)(t))}}}))((function(e){var t=e.isLogin,n=e.onAuthSuccess,c=e.onAuthFailed,i=e.onLogout,o=e.showAlert,r=e.alertType,s=e.alertMessage,j=Object(d.g)(),u=Object(a.useCallback)((function(){localStorage.getItem("accessToken")?n():c()}),[n,c]);return Object(a.useEffect)((function(){u()}),[t,u]),t?Object(m.jsx)(k,{logoutHandler:function(){return i(j)},showAlert:o,alertType:r,alertMessage:s,children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(_,{exact:!0,path:"/",component:F}),Object(m.jsx)(_,{exact:!0,path:"/report/user",component:J}),Object(m.jsx)(_,{exact:!0,path:"/report/program",component:V}),Object(m.jsx)(_,{exact:!0,path:"/report/content",component:W}),Object(m.jsx)(_,{exact:!0,path:"/report/redzone",component:Y}),Object(m.jsx)(_,{exact:!0,path:"/report/monitoring-content",component:q}),Object(m.jsx)(_,{exact:!0,path:"/report/monitoring-program",component:Q}),Object(m.jsx)(_,{exact:!0,path:"/report/monitoring-status",component:X}),Object(m.jsx)(_,{exact:!0,path:"/report/controlling-status",component:Z}),Object(m.jsx)(_,{exact:!0,path:"/report/controlling-status",component:Z}),Object(m.jsx)(_,{exact:!0,path:"/report/commercial",component:G}),Object(m.jsx)(_,{path:"/cms/user",exact:!0,component:I}),Object(m.jsx)(_,{path:"/cms/user/edit",exact:!0,component:Oe}),Object(m.jsx)(_,{path:"/cms/notifications/add",exact:!0,component:function(e){return Object(m.jsx)($,Object(l.a)({},e))}}),Object(m.jsx)(_,{path:"/cms/notifications",exact:!0,component:ee}),Object(m.jsx)(_,{path:"/cms/forum-add",exact:!0,component:te}),Object(m.jsx)(_,{path:"/cms/forum-moderator",exact:!0,component:ne}),Object(m.jsx)(_,{path:"/cms/program",exact:!0,component:w}),Object(m.jsx)(_,{path:"/cms/program/add",exact:!0,component:function(e){return Object(m.jsx)(P,Object(l.a)({},e))}}),Object(m.jsx)(_,{path:"/cms/program/edit",exact:!0,component:S}),Object(m.jsx)(_,{path:"/cms/program/edit/step",exact:!0,component:z}),Object(m.jsx)(_,{path:"/cms/program/view",exact:!0,component:C}),Object(m.jsx)(_,{path:"/cms/program/view/step",exact:!0,component:R}),Object(m.jsx)(_,{path:"/cms/program/revisilist",exact:!0,component:w}),Object(m.jsx)(_,{path:"/cms/program/revisilist-add",exact:!0,component:xe}),Object(m.jsx)(_,{path:"/cms/content",exact:!0,component:T}),Object(m.jsx)(_,{path:"/cms/content/add",exact:!0,component:function(e){return Object(m.jsx)(L,Object(l.a)({},e))}}),Object(m.jsx)(_,{path:"/cms/content/edit",exact:!0,component:B}),Object(m.jsx)(_,{path:"/cms/content/view",exact:!0,component:E}),Object(m.jsx)(_,{path:"/cms/content/view-komen",exact:!0,component:he}),Object(m.jsx)(_,{path:"/cms/redzone",exact:!0,component:M}),Object(m.jsx)(_,{path:"/cms/redzone/add",exact:!0,component:D}),Object(m.jsx)(_,{exact:!0,path:"/cms/redzone/edit",component:pe}),Object(m.jsx)(_,{path:"/tools/setting/program-category/add",exact:!0,component:le}),Object(m.jsx)(_,{path:"/tools/setting/notification-category",exact:!0,component:ue}),Object(m.jsx)(_,{path:"/tools/setting/notification-category/add",exact:!0,component:je}),Object(m.jsx)(_,{path:"/tools/setting/program-category",exact:!0,component:de}),Object(m.jsx)(_,{path:"/tools/setting/screentime/add",exact:!0,component:me}),Object(m.jsx)(_,{path:"/tools/setting/screentime",exact:!0,component:be}),Object(m.jsx)(_,{path:"/tools/setting",exact:!0,component:H}),Object(m.jsx)(_,{path:"/tools/setting/target-audience",exact:!0,component:ie}),Object(m.jsx)(_,{path:"/tools/setting/target-audience/add",exact:!0,component:oe}),Object(m.jsx)(_,{path:"/tools/setting/topic",exact:!0,component:re}),Object(m.jsx)(_,{path:"/tools/setting/topic/add",exact:!0,component:se}),Object(m.jsx)(_,{exact:!0,path:"/",component:F}),Object(m.jsx)(_,{exact:!0,path:"/report/user",component:J}),Object(m.jsx)(_,{path:"/cms/user",exact:!0,component:I}),Object(m.jsx)(_,{path:"/cms/program",exact:!0,component:w}),Object(m.jsx)(_,{path:"/cms/program/add",exact:!0,component:function(e){return Object(m.jsx)(P,Object(l.a)({},e))}}),Object(m.jsx)(_,{path:"/cms/program/edit",exact:!0,component:S}),Object(m.jsx)(_,{path:"/cms/program/view",exact:!0,component:C}),Object(m.jsx)(_,{path:"/cms/content",exact:!0,component:T}),Object(m.jsx)(_,{path:"/cms/content/add",exact:!0,component:function(e){return Object(m.jsx)(L,Object(l.a)({},e))}}),Object(m.jsx)(_,{path:"/cms/content/edit",exact:!0,component:B}),Object(m.jsx)(_,{path:"/cms/content/view",exact:!0,component:E}),Object(m.jsx)(_,{path:"/cms/redzone",exact:!0,component:M}),Object(m.jsx)(_,{path:"/cms/redzone/add",exact:!0,component:D}),Object(m.jsx)(_,{path:"/tools/setting",exact:!0,component:H}),Object(m.jsx)(_,{path:"/tools/admin-staff/add",exact:!0,component:ae}),Object(m.jsx)(_,{path:"/tools/admin-staff",exact:!0,component:ce})]})}):Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{exact:!0,path:"/",render:function(e){return Object(m.jsx)(a.Suspense,{fallback:Object(m.jsx)(A.a,{}),children:Object(m.jsx)(K,Object(l.a)({},e))})}}),Object(m.jsx)(d.b,{exact:!0,path:"/register",render:function(e){return Object(m.jsx)(a.Suspense,{fallback:Object(m.jsx)(A.a,{}),children:Object(m.jsx)(U,Object(l.a)({},e))})}})]})})),ke=n(15),fe=n(8),ye={isLogin:!1,error:null,isLoading:!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.f:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case fe.g:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,isLogin:!0});case fe.d:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1});case fe.e:return Object(l.a)(Object(l.a)({},e),{},{isLogin:!1,isLoading:!1});default:return e}},_e={showAlert:!0,alertType:null,alertMessage:"Nganu bikin enak.",idMessage:null},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.a:return Object(l.a)(Object(l.a)({},e),{},{showAlert:!1});case fe.b:case fe.c:return Object(l.a)(Object(l.a)({},e),{},{alertType:t.type,alertMessage:t.message,idMessage:t.idMessage,showAlert:!0});default:return e}},Ae=Object(ke.b)({auth:Ne,dashboard:ve}),we=n(33),Pe=ke.c,Se=Object(ke.d)(Ae,Object(ke.a)(we.a));Pe&&(Se=Object(ke.d)(Ae,Pe(Object(ke.a)(we.a)))),o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y.a,{store:Se,children:Object(m.jsx)(s.a,{children:Object(m.jsx)(ge,{})})})}),document.getElementById("root")),r()}},[[89,11,14]]]);
//# sourceMappingURL=main.519bb7cd.chunk.js.map