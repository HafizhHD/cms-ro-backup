(this["webpackJsonpco-branding-web-app"]=this["webpackJsonpco-branding-web-app"]||[]).push([[10],{20:function(e,t,n){"use strict";t.a="https://as01.prod.ruangortu.id:8080/api"},22:function(e,t,n){"use strict";n(2),n(68);var a=n(0);t.a=function(){return Object(a.jsxs)("div",{className:"spinner",children:[Object(a.jsx)("div",{className:"bounce1"}),Object(a.jsx)("div",{className:"bounce2"}),Object(a.jsx)("div",{className:"bounce3"})]})}},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u}));var a=n(9),i=(n(18),n(37)),c=n(26),r=function(){return{type:a.f}},o=function(){return{type:a.d}},s=function(){return{type:a.g}},l=function(e,t){return console.log({userName:e,password:t}),function(n){n(r());var a={userName:e,password:t};Object(c.b)(a).then((function(e){var t=e.data;"OK"===t.resultCode&&t.resultData?(localStorage.setItem("accessToken",t.resultData.token),localStorage.setItem("userData",JSON.stringify(t.resultData.user)),localStorage.setItem("userLevel",t.resultData.user.userLevel),localStorage.removeItem("loginMessage"),n(s())):(localStorage.setItem("loginMessage","Incorrect Email/Password."),n(o()))})).catch((function(e){console.error("Error:",e)}))}},d=function(e){return function(t){t(r()),localStorage.clear(),e.push("/"),t({type:a.a}),t({type:a.e})}},u=function(e,t,n,o,s,l,d,u,m){return function(j){j(r()),Object(i.b)(o).then((function(i){var r=i;setTimeout((function(){var i={email:e,accountName:t,cobrandName:n,thumbnail:r,phoneNumber:s,address:l,password:d,confirmPassword:u};Object(c.c)(i).then((function(e){localStorage.setItem("loginMessage","Successfully registered. You can now log in.")})).catch((function(e){console.error("Error:",e)})),m.push("/"),j({type:a.e})}),2e3)}))}}},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s}));var a=n(18),i=n.n(a),c=n(20),r=function(e){return i()({method:"post",url:c.a+"/cms/cmsLogin",data:e,headers:{"Content-Type":"application/json"}})},o=function(e){return i()({method:"post",url:c.a+"/cobrand/register",data:e,headers:{"Content-Type":"application/json"}})},s=function(e,t){return i()({method:"post",url:c.a+"/cobrand/edit",data:{whereValues:e,newValues:t},headers:{"Content-Type":"application/json"}})}},29:function(e,t,n){"use strict";n(2);var a=n(22),i=(n(88),n(0));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(i.jsxs)("div",{className:"LoadingFullRk",children:[Object(i.jsxs)("h1",{className:"LoadingFullRk__heading",children:[Object(i.jsx)("span",{children:"RUANG ORTU INDONESIA"})," "]}),Object(i.jsx)(a.a,{}),Object(i.jsx)("p",{children:n})]})}},36:function(e,t,n){"use strict";n(2);var a=n(22),i=(n(69),n(0));t.a=function(e){var t=e.text,n=void 0===t?"Mohon Tunggu":t;return Object(i.jsxs)("div",{className:"LoadingFullRkInner",children:[Object(i.jsxs)("h1",{className:"LoadingFullRkInner__heading",children:[Object(i.jsx)("span",{children:"RUANG ORTU INDONESIA"})," "]}),Object(i.jsx)(a.a,{}),Object(i.jsx)("p",{children:n})]})}},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var a=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))},i=function(e){var t="",n="";return e.includes("facebook.com/")?t="https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(e)+"&show_text=1&width=200":e.includes("vimeo.com/")?((n=void 0!==typeof e.split("vimeo.com/")[1]?e.split("vimeo.com/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://player.vimeo.com/video/"+n):e.includes("youtube.com/")&&!e.includes("embed")?((n=void 0!==typeof e.split("v=")[1]?e.split("v=")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.youtube.com/embed/"+n):e.includes("youtu.be/")?((n=void 0!==typeof e.split("youtu.be/")[1]?e.split("youtu.be/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.youtube.com/embed/"+n):e.includes("dailymotion.com/")?((n=void 0!==typeof e.split("dailymotion.com/")[1]?e.split("dailymotion.com/")[1]:null).includes("&")&&(n=n.split("&")[0]),t="https://www.dailymotion.com/embed/"+n):t=e,t}},41:function(e,t,n){"use strict";t.a=n.p+"static/media/Logo_5.25eba424.png"},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(21),r=n.n(c),o=(n(58),function(e){e&&e instanceof Function&&n.e(70).then(n.bind(null,1399)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))}),s=n(8),l=n(5),d=n(7),u=n(6),m=(n(59),n.p,n(41)),j=(n(60),n(3)),b=n(0);var p=function(e){var t=e.MenuItems,n=e.ShowAside,i=Object(u.h)(),c=Object(a.useState)({path:i.pathname,active:!0}),r=Object(d.a)(c,2),o=r[0],l=r[1],m=Object(a.useState)({path:i.pathname,active:!0}),p=Object(d.a)(m,2),h=p[0],O=p[1];return Object(b.jsx)("aside",{className:"Aside",children:Object(b.jsx)("ul",{className:"Aside__Nav",children:t.map((function(e,t){return Object(b.jsx)("li",{className:"Aside__Nav_item",children:e.children?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(s.b,{to:i.pathname,className:"Aside__Nav_item-disabled",onClick:function(){var t={},n=e.path;t=o.path!=n?{path:n,active:!0}:!0===o.active?{path:n,active:!1}:{path:n,active:!0},l(t)},children:[e.icon,Object(b.jsx)("p",{children:e.pathName}),o.path===e.path&&!0===o.active?Object(b.jsx)(j.g,{className:"Aside__Nav_item-disabled-icon"}):Object(b.jsx)(j.f,{className:"Aside__Nav_item-disabled-icon"})]}),o.path===e.path&&!0===o.active?e.children.map((function(t,a){return Object(b.jsx)("li",{className:"Aside__Nav_item",children:t.children?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(s.b,{to:i.pathname,className:"Aside__Nav_item-disabled-children",onClick:function(){var n={},a=e.path+t.path;n=h.path!=a?{path:a,active:!0}:!0===h.active?{path:a,active:!1}:{path:a,active:!0},O(n)},children:[t.icon,Object(b.jsx)("p",{children:t.pathName}),h.path===e.path+t.path&&!0===h.active?Object(b.jsx)(j.g,{className:"Aside__Nav_item-disabled-icon"}):Object(b.jsx)(j.f,{className:"Aside__Nav_item-disabled-icon"})]}),h.path===e.path+t.path&&!0===h.active?t.children.map((function(a,i){return Object(b.jsx)("li",{className:"Aside__Nav_item",children:Object(b.jsxs)(s.b,{to:e.path+t.path+a.path,className:"Aside__Nav_item-children-children",onClick:function(){window.scroll(0,0),window.innerWidth<900&&n(!1)},children:[a.icon,Object(b.jsx)("p",{children:a.pathName})]})},e.path+t.path+i)})):null]}):Object(b.jsxs)(s.b,{to:e.path+t.path,className:"Aside__Nav_item-children",onClick:function(){window.scroll(0,0),window.innerWidth<900&&n(!1)},children:[t.icon,Object(b.jsx)("p",{children:t.pathName})]})},e.path+a)})):null]}):"/"===e.path?Object(b.jsxs)(s.b,{exact:!0,to:e.path,className:"Aside__Nav_item-link",onClick:function(){window.scroll(0,0),window.innerWidth<900&&n(!1)},children:[e.icon,Object(b.jsx)("p",{children:e.pathName})]}):Object(b.jsxs)(s.b,{to:e.path,className:"Aside__Nav_item-link",onClick:function(){window.scroll(0,0),window.innerWidth<900&&n(!1)},children:[e.icon,Object(b.jsx)("p",{children:e.pathName}),o.path===e.path&&!0===o.active?Object(b.jsx)(j.g,{}):Object(b.jsx)(j.f,{})]})},t)}))})})},h=function(){var e=localStorage.getItem("userLevel"),t=[{path:"/",pathName:"Dashboard",icon:Object(b.jsx)(j.n,{className:"Aside__Nav_item-icon"})}];return"Super Admin"!==e&&"Admin"!==e&&"Reporter"!==e||t.push({path:"/report",pathName:"Report",icon:Object(b.jsx)(j.i,{className:"Aside__Nav_item-icon"}),children:[{path:"/user",pathName:"Report Pengguna",icon:Object(b.jsx)(j.A,{className:"Aside__Nav_item-icon"})},{path:"/content",pathName:"Report Artikel",icon:Object(b.jsx)(j.o,{className:"Aside__Nav_item-icon"})},{path:"/program",pathName:"Report Program",icon:Object(b.jsx)(j.a,{className:"Aside__Nav_item-icon"})},{path:"/redzone",pathName:"Report Redzone",icon:Object(b.jsx)(j.s,{className:"Aside__Nav_item-icon"})},{path:"/monitoring-content",pathName:"Monitoring Artikel",icon:Object(b.jsx)(j.v,{className:"Aside__Nav_item-icon"})},{path:"/monitoring-program",pathName:"Monitoring Program",icon:Object(b.jsx)(j.v,{className:"Aside__Nav_item-icon"})},{path:"/monitoring-status",pathName:"Monitoring Aktivitas",icon:Object(b.jsx)(j.v,{className:"Aside__Nav_item-icon"})},{path:"/controlling-status",pathName:"Controlling Status",icon:Object(b.jsx)(j.x,{className:"Aside__Nav_item-icon"})},{path:"/commercial",pathName:"Laporan Keuangan Terestimasi",icon:Object(b.jsx)(j.h,{className:"Aside__Nav_item-icon"})}]}),"Super Admin"===e||"Admin"===e||"Editor"===e?t.push({path:"/cms",pathName:"Manajemen Data",icon:Object(b.jsx)(j.o,{className:"Aside__Nav_item-icon"}),children:[{path:"/user",pathName:"Pengguna",icon:Object(b.jsx)(j.A,{className:"Aside__Nav_item-icon"})},{path:"/program",pathName:"Program",icon:Object(b.jsx)(j.a,{className:"Aside__Nav_item-icon"})},{path:"/content",pathName:"Artikel",icon:Object(b.jsx)(j.o,{className:"Aside__Nav_item-icon"})},{path:"/redzone",pathName:"Redzone",icon:Object(b.jsx)(j.s,{className:"Aside__Nav_item-icon"})},{path:"/notifications",pathName:"Notifikasi",icon:Object(b.jsx)(j.p,{className:"Aside__Nav_item-icon"})},{path:"/forum-moderator",pathName:"Forum Moderator",icon:Object(b.jsx)(j.q,{className:"Aside__Nav_item-icon"})}]}):"Reporter"===e&&t.push({path:"/cms",pathName:"Manajemen Data",icon:Object(b.jsx)(j.o,{className:"Aside__Nav_item-icon"}),children:[{path:"/notifications",pathName:"Notifikasi",icon:Object(b.jsx)(j.p,{className:"Aside__Nav_item-icon"})}]}),"Super Admin"===e?t.push({path:"/tools",pathName:"Tools",icon:Object(b.jsx)(j.y,{className:"Aside__Nav_item-icon"}),children:[{path:"/admin-staff",pathName:"Manajemen Admin & Staff",icon:Object(b.jsx)(j.A,{className:"Aside__Nav_item-icon"})},{path:"/setting",pathName:"Pengaturan",icon:Object(b.jsx)(j.y,{className:"Aside__Nav_item-icon"}),children:[{path:"/topic",pathName:"Topik Artikel",icon:Object(b.jsx)(j.o,{className:"Aside__Nav_item-icon"})},{path:"/program-category",pathName:"Kategori Program",icon:Object(b.jsx)(j.a,{className:"Aside__Nav_item-icon"})},{path:"/target-audience",pathName:"Target Pembaca",icon:Object(b.jsx)(j.q,{className:"Aside__Nav_item-icon"})},{path:"/notification-category",pathName:"Kategori Notifikasi",icon:Object(b.jsx)(j.p,{className:"Aside__Nav_item-icon"})},{path:"/screentime",pathName:"Standar Screen Time",icon:Object(b.jsx)(j.v,{className:"Aside__Nav_item-icon"})}]}]}):"Admin"===e&&t.push({path:"/tools",pathName:"Tools",icon:Object(b.jsx)(j.y,{className:"Aside__Nav_item-icon"}),children:[{path:"/setting",pathName:"Pengaturan",icon:Object(b.jsx)(j.y,{className:"Aside__Nav_item-icon"}),children:[{path:"/topic",pathName:"Topik Artikel",icon:Object(b.jsx)(j.o,{className:"Aside__Nav_item-icon"})},{path:"/program-category",pathName:"Kategori Program",icon:Object(b.jsx)(j.a,{className:"Aside__Nav_item-icon"})},{path:"/target-audience",pathName:"Target Pembaca",icon:Object(b.jsx)(j.q,{className:"Aside__Nav_item-icon"})},{path:"/notification-category",pathName:"Kategori Notifikasi",icon:Object(b.jsx)(j.p,{className:"Aside__Nav_item-icon"})},{path:"/screentime",pathName:"Standar Screen Time",icon:Object(b.jsx)(j.v,{className:"Aside__Nav_item-icon"})}]}]}),t},O=(j.n,j.i,j.a,j.o,j.y,function(e,t){var n=Object(a.useState)(t),i=Object(d.a)(n,2),c=i[0],r=i[1];return Object(a.useEffect)((function(){var t=function(t){null===e.current||e.current.contains(t.target)||r(!c)};return c&&window.addEventListener("click",t),function(){window.removeEventListener("click",t)}}),[c,e]),[c,r]});n(66);var g=function(){return Object(b.jsx)("div",{className:"HelpOverlay",children:Object(b.jsxs)("div",{className:"HelpOverlay-content",children:[Object(b.jsx)("h1",{children:"Guide Co-Brand Ruang Ortu"}),Object(b.jsx)("h2",{children:"Dashboard Co-Brand Ruang Ortu"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsxs)("p",{children:["Setelah berhasil login, Anda akan masuk ke halaman Dashboard Co-Brand Ruang Ortu. Pada tampilan awal, Anda akan menemukan tombol berikut di bagian",Object(b.jsx)("br",{})]}),Object(b.jsxs)("ol",{children:[Object(b.jsxs)("li",{children:["Kanan atas, yaitu:",Object(b.jsx)("br",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Tombol Notifikasi, yaitu tombol untuk menampilkan notifikasi terkait cobrand Anda jika diklik"}),Object(b.jsx)("li",{children:"Tombol Profil Brand Anda. Jika diklik, Anda akan menemukan empat tombol, yaitu \u201cBantuan\u201d, \u201cProfile\u201d, \u201cSetting\u201d, dan \u201cLogout\u201d"})]})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("li",{children:["Kiri, yang merupakan tombol navigasi, yaitu:",Object(b.jsx)("br",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Dashboard"}),Object(b.jsx)("li",{children:"Program, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus program yang diselenggarakan oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP."}),Object(b.jsx)("li",{children:"Report, yaitu halaman untuk melihat berbagai data yang terkait dengan pelanggan dan aktivitas Brand Anda."}),Object(b.jsx)("li",{children:"Content, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus konten yang dibuat oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP."}),Object(b.jsx)("li",{children:"Redzone"}),Object(b.jsx)("li",{children:"Setting, yaitu halaman untuk menyunting profil Brand Anda."})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("li",{children:"Halaman Utama (tengah), berisi informasi umum yang terkait dengan aktivitas Brand Anda, yaitu Subscription, Ongoing Program, dan Content List."})]}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"Program"}),Object(b.jsx)("p",{children:"Pada saat masuk ke halaman utama program, Anda akan menemukan tombol \u201cAdd New Program\u201d dan tabel di bawahnya. Tabel tersebut berisi program yang telah Anda buat atau kosong jika Anda belum pernah membuat program. Jika Anda sudah pernah membuat program, Anda akan melihat judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada program yang telah Anda buat, yaitu tombol \u201cView\u201d (ikon mata), \u201cEdit\u201d (ikon pena/pensil), dan \u201cRemove\u201d (ikon tempat sampah)."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Add New Program (Tambah Program Baru)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menambahkan program baru untuk Brand Anda. Untuk membuat program, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut."}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Title, yaitu judul program Brand Anda"}),Object(b.jsx)("li",{children:"Description, yaitu deskripsi umum dari program Brand Anda"}),Object(b.jsx)("li",{children:"Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada program Brand Anda"}),Object(b.jsx)("li",{children:"Set Schedule, yaitu tanggal mulai untuk program Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan."})]}),Object(b.jsx)("p",{children:"Setelah mengisi kolom-kolom di atas, klik tombol \u201cPost Program\u201d untuk mengunggah program Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama program."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"View Program (ikon mata, Lihat Program)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat melihat program yang telah Anda buat secara detail."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Edit Program (ikon pena/pensil, Sunting Program)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menyunting program yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Program."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Remove Program (ikon tempat sampah)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Jika tombol ini diklik, program yang Anda pilih akan terhapus."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h2",{children:"Content"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada saat masuk ke halaman utama content, Anda akan menemukan tombol \u201cAdd New Content\u201d dan tabel di bawahnya. Tabel tersebut berisi konten yang telah Anda buat atau kosong jika Anda belum pernah membuat konten. Jika Anda sudah pernah membuat konten, Anda akan melihat kategori, judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada konten yang telah Anda buat, yaitu tombol \u201cView\u201d (ikon mata), \u201cEdit\u201d (ikon pena/pensil), dan \u201cRemove\u201d (ikon tempat sampah)."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Add New Content (Tambah Konten Baru)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menambahkan konten baru untuk Brand Anda. Untuk membuat konten, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut."}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Category, yaitu kategori konten yang akan Anda buat. Pilih kategori \u201cArtikel\u201d untuk membuat konten tulisan, \u201cImage\u201d untuk membuat konten gambar, dan \u201cVideo\u201d untuk membuat konten video."}),Object(b.jsx)("li",{children:"Program Name, yaitu pilihan program yang telah Anda buat untuk dikaitkan dengan konten Anda. Pilih \u201c--Tanpa Program--\u201d jika konten yang disediakan tidak membutuhkan program, atau pilih program yang telah Anda buat untuk mengaitkan konten Brand Anda dengan program Brand Anda."}),Object(b.jsx)("li",{children:"Title, yaitu judul konten Brand Anda"}),Object(b.jsx)("li",{children:"Description, yaitu deskripsi umum dari konten Brand Anda"}),Object(b.jsx)("li",{children:"Source, yaitu narasumber atau referensi yang digunakan pada konten yang dibuat"}),Object(b.jsx)("li",{children:"Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada konten Brand Anda"}),Object(b.jsx)("li",{children:"Contents, yaitu kolom untuk mengisi konten yang diinginkan. Jika Anda memilih Category \u201cArtikel\u201d, Anda dapat membuat tulisan pada kolom yang tersedia. Jika Anda memilih Category \u201cImage\u201d, Anda diminta untuk memasukkan link gambar yang ingin dipakai. Jika Anda memilih Category \u201cVideo\u201d, Anda diminta untuk memasukkan link video (Youtube, Dailymotion, Vimeo) yang ingin dipakai."}),Object(b.jsx)("li",{children:"Set Schedule, yaitu tanggal mulai untuk konten Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan."})]}),Object(b.jsx)("p",{children:"Setelah mengisi kolom-kolom di atas, klik tombol \u201cPost Content\u201d untuk mengunggah konten Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama Content."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"View Content (ikon mata, Lihat Konten)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat melihat konten yang telah Anda buat secara detail."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Edit Content (ikon pena/pensil, Sunting Konten)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Pada menu ini, Anda dapat menyunting konten yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Content."}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("h3",{children:"Remove Content (ikon tempat sampah)"}),Object(b.jsx)("p",{children:Object(b.jsx)("br",{})}),Object(b.jsx)("p",{children:"Jika tombol ini diklik, konten yang Anda pilih akan terhapus."})]})})};n(67);var x=function(e){var t=e.type,n=e.message,i=Object(a.useState)(!1),c=Object(d.a)(i,2);return c[0],c[1],Object(b.jsx)("div",{className:"alert",children:Object(b.jsxs)("div",{className:t,children:[Object(b.jsxs)("div",{className:"alert-header",children:["ALERT_ERROR"===t?Object(b.jsx)(j.B,{}):Object(b.jsx)(j.e,{}),Object(b.jsx)("span",{children:"ALERT_ERROR"===t?"Error!":"Success!"})]}),Object(b.jsx)("div",{className:"alert-message",children:Object(b.jsx)("span",{children:n})})]})},n)};var A=Object(u.i)((function(e){var t=e.children,n=e.location,i=e.logoutHandler,c=e.showAlert,r=e.alertType,o=e.alertMessage,l=Object(a.useRef)(null),u=O(l,!1),A=Object(d.a)(u,2),k=A[0],f=A[1],N=function(){return f(!k)},_=Object(a.useRef)(null),y=O(_,!1),v=Object(d.a)(y,2),S=(v[0],v[1],Object(a.useState)(JSON.parse(localStorage.getItem("userData")))),P=Object(d.a)(S,2),w=P[0],R=P[1],z=Object(a.useState)(!1),E=Object(d.a)(z,2),T=E[0],L=E[1],C=Object(a.useState)(window.innerWidth>=900),B=Object(d.a)(C,2),I=B[0],M=B[1],D=Object(a.useState)(!1),H=Object(d.a)(D,2),K=H[0],U=H[1];return Object(a.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth<900?M(!1):M(!0)}))}),[I,K]),Object(a.useEffect)((function(){"Profil berhasil diubah."===o&&c&&R(JSON.parse(localStorage.getItem("userData")))}),[o,c]),Object(b.jsxs)(b.Fragment,{children:[T?Object(b.jsx)(g,{}):null,T?Object(b.jsxs)("button",{className:"CloseHelpDashboard",onClick:function(){L(!1),document.getElementsByTagName("main")[0].style.overflowY="visible"},children:[Object(b.jsx)(j.B,{})," "]}):null,c&&r?Object(b.jsx)(x,{type:r,message:o}):null,Object(b.jsxs)("div",{className:"Layout",children:[Object(b.jsxs)("header",{className:"Header",children:[I?null:Object(b.jsx)("button",{className:"Header__menu",onClick:function(e){U(!K)},children:Object(b.jsx)(j.t,{})}),Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)("img",{src:m.a,alt:"Logo Ruang Keluarga",className:"Header__img"})}),Object(b.jsx)("div",{className:"Header__infoaccount",children:Object(b.jsxs)("div",{className:"Header__infoaccount__profile",children:[Object(b.jsxs)("button",{className:"Header__activeUser",onClick:N,children:[Object(b.jsx)("img",{src:w.thumbnail,className:"Header__profileImg ".concat(k&&"Header__profileImg__active")}),Object(b.jsx)("span",{children:w.userName}),k?Object(b.jsx)(j.g,{}):Object(b.jsx)(j.f,{})]}),Object(b.jsx)("nav",{ref:l,className:"Menudropdown ".concat(k?"active":"inactive"),children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:n.pathname,onClick:function(){L(!0),N(),document.getElementsByTagName("main")[0].style.overflowY="hidden"},children:"Bantuan"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/",children:"Profile"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/tools/admin-staff",onClick:N,children:"Setting"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"true",onClick:function(e){e.preventDefault(),N(),i()},children:"Logout"})})]})})]})})]}),(I||K)&&Object(b.jsx)(p,{MenuItems:h(),ShowAside:U}),Object(b.jsx)("main",{className:"Main",children:t})]})]})})),k=n(34),f=n(17),N=n(36),_=Object(f.b)((function(e){return{isLogin:e.auth.isLogin}}))((function(e){var t=e.component,n=e.isLogin,i=Object(k.a)(e,["component","isLogin"]);return Object(b.jsx)(u.b,Object(l.a)(Object(l.a)({},i),{},{render:function(e){return n?Object(b.jsx)(a.Suspense,{fallback:Object(b.jsx)(N.a,{}),children:Object(b.jsx)(t,Object(l.a)({},e))}):Object(b.jsx)(u.a,{to:{pathname:"/"}})}}))})),y=n(24),v=n(29),S=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(53)]).then(n.bind(null,1457))})),P=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(6),n.e(8),n.e(31)]).then(n.bind(null,1400))})),w=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(7),n.e(2),n.e(55)]).then(n.bind(null,1401))})),R=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(3),n.e(8),n.e(17)]).then(n.bind(null,1458))})),z=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(7),n.e(2),n.e(56)]).then(n.bind(null,1402))})),E=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(36)]).then(n.bind(null,1459))})),T=Object(a.lazy)((function(){return n.e(66).then(n.bind(null,1403))})),L=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(52)]).then(n.bind(null,1460))})),C=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(6),n.e(7),n.e(15)]).then(n.bind(null,1461))})),B=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(7),n.e(2),n.e(54)]).then(n.bind(null,1404))})),I=Object(a.lazy)((function(){return n.e(43).then(n.bind(null,1405))})),M=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(9),n.e(35)]).then(n.bind(null,1462))})),D=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(16),n.e(44)]).then(n.bind(null,1453))})),H=Object(a.lazy)((function(){return n.e(30).then(n.bind(null,1407))})),K=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(62)]).then(n.bind(null,1463))})),U=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(63)]).then(n.bind(null,1455))})),F=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(4),n.e(67),n.e(34)]).then(n.bind(null,1452))})),J=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(5),n.e(51)]).then(n.bind(null,1464))})),V=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(5),n.e(50)]).then(n.bind(null,1465))})),W=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(5),n.e(58)]).then(n.bind(null,1466))})),G=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(5),n.e(46)]).then(n.bind(null,1467))})),Y=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(5),n.e(59)]).then(n.bind(null,1468))})),q=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(5),n.e(45)]).then(n.bind(null,1469))})),Q=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(5),n.e(48)]).then(n.bind(null,1470))})),X=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(5),n.e(49)]).then(n.bind(null,1471))})),Z=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(5),n.e(13)]).then(n.bind(null,1472))})),$=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(5),n.e(47)]).then(n.bind(null,1473))})),ee=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(65),n.e(2),n.e(57)]).then(n.bind(null,1429))})),te=Object(a.lazy)((function(){return n.e(21).then(n.bind(null,1430))})),ne=Object(a.lazy)((function(){return n.e(28).then(n.bind(null,1431))})),ae=Object(a.lazy)((function(){return n.e(20).then(n.bind(null,1432))})),ie=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(37)]).then(n.bind(null,1433))})),ce=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(32)]).then(n.bind(null,1434))})),re=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(60)]).then(n.bind(null,1474))})),oe=Object(a.lazy)((function(){return n.e(23).then(n.bind(null,1435))})),se=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(38)]).then(n.bind(null,1436))})),le=Object(a.lazy)((function(){return n.e(27).then(n.bind(null,1437))})),de=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(42)]).then(n.bind(null,1438))})),ue=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(40)]).then(n.bind(null,1439))})),me=Object(a.lazy)((function(){return n.e(25).then(n.bind(null,1440))})),je=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(39)]).then(n.bind(null,1441))})),be=Object(a.lazy)((function(){return n.e(24).then(n.bind(null,1442))})),pe=Object(a.lazy)((function(){return n.e(26).then(n.bind(null,1443))})),he=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(41)]).then(n.bind(null,1444))})),Oe=Object(a.lazy)((function(){return n.e(19).then(n.bind(null,1445))})),ge=Object(a.lazy)((function(){return Promise.all([n.e(9),n.e(18)]).then(n.bind(null,1446))})),xe=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(33)]).then(n.bind(null,1447))}));var Ae=Object(f.b)((function(e){return{isLogin:e.auth.isLogin,showAlert:e.dashboard.showAlert,alertType:e.dashboard.alertType,alertMessage:e.dashboard.alertMessage}}),(function(e){return{onAuthSuccess:function(){return e(Object(y.c)())},onAuthFailed:function(){return e(Object(y.b)())},onLogout:function(t){return e(Object(y.d)(t))}}}))((function(e){var t=e.isLogin,n=e.onAuthSuccess,i=e.onAuthFailed,c=e.onLogout,r=e.showAlert,o=e.alertType,s=e.alertMessage,m=Object(u.g)(),j=Object(a.useState)(""),p=Object(d.a)(j,2),h=p[0],O=p[1],g=Object(a.useCallback)((function(){localStorage.getItem("accessToken")?(O(JSON.parse(localStorage.getItem("userData")).userLevel),n()):i()}),[n,i]);return Object(a.useEffect)((function(){g()}),[t,g]),t?Object(b.jsx)(A,{logoutHandler:function(){return c(m)},showAlert:r,alertType:o,alertMessage:s,children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(_,{exact:!0,path:"/",component:F}),"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/user",component:J}):null,"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/program",component:V}):null,"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/program/step",component:W}):null,"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/content",component:G}):null,"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/redzone",component:Y}):null,"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/monitoring-content",component:Q}):null,"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/monitoring-program",component:X}):null,"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/monitoring-status",component:Z}):null,"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/controlling-status",component:$}):null,"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/controlling-status",component:$}):null,"Super Admin"===h||"Admin"===h||"Reporter"===h?Object(b.jsx)(_,{exact:!0,path:"/report/commercial",component:q}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/user",exact:!0,component:D}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/user/edit",exact:!0,component:xe}):null,"Super Admin"===h||"Admin"===h||"Editor"===h||"Reporter"===h?Object(b.jsx)(_,{path:"/cms/notifications/add",exact:!0,component:function(e){return Object(b.jsx)(ee,Object(l.a)({},e))}}):null,"Super Admin"===h||"Admin"===h||"Editor"===h||"Reporter"===h?Object(b.jsx)(_,{path:"/cms/notifications",exact:!0,component:te}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/forum-add",exact:!0,component:ne}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/forum-moderator",exact:!0,component:ae}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/program",exact:!0,component:S}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/program/add",exact:!0,component:function(e){return Object(b.jsx)(P,Object(l.a)({},e))}}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/program/edit",exact:!0,component:R}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/program/edit/add-step",exact:!0,component:w}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/program/edit/step",exact:!0,component:z}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/program/view",exact:!0,component:E}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/program/view/step",exact:!0,component:T}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/content",exact:!0,component:L}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/content/add",exact:!0,component:function(e){return Object(b.jsx)(C,Object(l.a)({},e))}}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/content/edit",exact:!0,component:B}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/content/view",exact:!0,component:I}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/content/view-komen",exact:!0,component:Oe}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/redzone",exact:!0,component:M}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{path:"/cms/redzone/add",exact:!0,component:H}):null,"Super Admin"===h||"Admin"===h||"Editor"===h?Object(b.jsx)(_,{exact:!0,path:"/cms/redzone/edit",component:ge}):null,"Super Admin"===h||"Admin"===h?Object(b.jsx)(_,{path:"/tools/setting/program-category/add",exact:!0,component:ue}):null,"Super Admin"===h||"Admin"===h?Object(b.jsx)(_,{path:"/tools/setting/notification-category",exact:!0,component:be}):null,"Super Admin"===h||"Admin"===h?Object(b.jsx)(_,{path:"/tools/setting/notification-category/add",exact:!0,component:je}):null,"Super Admin"===h||"Admin"===h?Object(b.jsx)(_,{path:"/tools/setting/program-category",exact:!0,component:me}):null,"Super Admin"===h||"Admin"===h?Object(b.jsx)(_,{path:"/tools/setting/screentime/add",exact:!0,component:he}):null,"Super Admin"===h||"Admin"===h?Object(b.jsx)(_,{path:"/tools/setting/screentime",exact:!0,component:pe}):null,"Super Admin"===h||"Admin"===h?Object(b.jsx)(_,{path:"/tools/setting/target-audience",exact:!0,component:oe}):null,"Super Admin"===h||"Admin"===h?Object(b.jsx)(_,{path:"/tools/setting/target-audience/add",exact:!0,component:se}):null,"Super Admin"===h||"Admin"===h?Object(b.jsx)(_,{path:"/tools/setting/topic",exact:!0,component:le}):null,"Super Admin"===h||"Admin"===h?Object(b.jsx)(_,{path:"/tools/setting/topic/add",exact:!0,component:de}):null,"Super Admin"===h?Object(b.jsx)(_,{path:"/tools/admin-staff/add",exact:!0,component:ie}):null,"Super Admin"===h?Object(b.jsx)(_,{path:"/tools/admin-staff/edit",exact:!0,component:ce}):null,"Super Admin"===h?Object(b.jsx)(_,{path:"/tools/admin-staff",exact:!0,component:re}):null]})}):Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/",render:function(e){return Object(b.jsx)(a.Suspense,{fallback:Object(b.jsx)(v.a,{}),children:Object(b.jsx)(K,Object(l.a)({},e))})}}),Object(b.jsx)(u.b,{exact:!0,path:"/register",render:function(e){return Object(b.jsx)(a.Suspense,{fallback:Object(b.jsx)(v.a,{}),children:Object(b.jsx)(U,Object(l.a)({},e))})}})]})})),ke=n(15),fe=n(9),Ne={isLogin:!1,error:null,isLoading:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.f:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case fe.g:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,isLogin:!0});case fe.d:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1});case fe.e:return Object(l.a)(Object(l.a)({},e),{},{isLogin:!1,isLoading:!1});default:return e}},ye={showAlert:!0,alertType:null,alertMessage:"Nganu bikin enak.",idMessage:null},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.a:return Object(l.a)(Object(l.a)({},e),{},{showAlert:!1});case fe.b:case fe.c:return Object(l.a)(Object(l.a)({},e),{},{alertType:t.type,alertMessage:t.message,idMessage:t.idMessage,showAlert:!0});default:return e}},Se=Object(ke.b)({auth:_e,dashboard:ve}),Pe=n(33),we=ke.c,Re=Object(ke.d)(Se,Object(ke.a)(Pe.a));we&&(Re=Object(ke.d)(Se,we(Object(ke.a)(Pe.a)))),r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(f.a,{store:Re,children:Object(b.jsx)(s.a,{children:Object(b.jsx)(Ae,{})})})}),document.getElementById("root")),o()},9:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var a="AUTH_START",i="AUTH_SUCCESS",c="AUTH_FAILED",r="AUTH_LOGOUT",o="ALERT_CLOSE",s="ALERT_ERROR",l="ALERT_SUCCESS"}},[[89,11,14]]]);
//# sourceMappingURL=main.e80f2043.chunk.js.map