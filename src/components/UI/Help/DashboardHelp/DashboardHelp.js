import React from 'react';
import './DashboardHelp.scss';

function DashboardHelp() {
    return (
        <div className="HelpOverlay">
            <div className="HelpOverlay-content">
                <h1>Guide Co-Brand Ruang Keluarga</h1>
                <h2>Dashboard Co-Brand Ruang Keluarga</h2>
                <p><br/></p>
                <p>Setelah berhasil login, Anda akan masuk ke halaman Dashboard Co-Brand Ruang Keluarga. Pada tampilan awal, Anda akan menemukan tombol berikut di bagian<br/></p>
                <ol>
                    <li>Kanan atas, yaitu:<br/>
                        <ul>
                            <li>Tombol Notifikasi, yaitu tombol untuk menampilkan notifikasi terkait cobrand Anda jika diklik</li>
                            <li>Tombol Profil Brand Anda. Jika diklik, Anda akan menemukan empat tombol, yaitu “Bantuan”, “Profile”, “Setting”, dan “Logout”</li>
                        </ul>
                    </li><br/>
                    <li>Kiri, yang merupakan tombol navigasi, yaitu:<br/>
                        <ul>
                            <li>Dashboard</li>
                            <li>Program, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus program yang diselenggarakan oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP.</li>
                            <li>Report, yaitu halaman untuk melihat berbagai data yang terkait dengan pelanggan dan aktivitas Brand Anda.</li>
                            <li>Content, yaitu halaman untuk membuat, melihat, menyunting, dan menghapus konten yang dibuat oleh Brand Anda untuk disajikan ke pengguna aplikasi Ruang Ortu dan Keluarga HKBP.</li>
                            <li>Redzone</li>
                            <li>Setting, yaitu halaman untuk menyunting profil Brand Anda.</li>
                        </ul>
                    </li><br/>
                    <li>Halaman Utama (tengah), berisi informasi umum yang terkait dengan aktivitas Brand Anda, yaitu Subscription, Ongoing Program, dan Content List.</li>
                </ol><br/>
                <h2>Program</h2>
                <p>Pada saat masuk ke halaman utama program, Anda akan menemukan tombol “Add New Program” dan tabel di bawahnya. Tabel tersebut berisi program yang telah Anda buat atau kosong jika Anda belum pernah membuat program. Jika Anda sudah pernah membuat program, Anda akan melihat judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada program yang telah Anda buat, yaitu tombol “View” (ikon mata), “Edit” (ikon pena/pensil), dan “Remove” (ikon tempat sampah).</p>
                <p><br/></p>
                <h3>Add New Program (Tambah Program Baru)</h3>
                <p><br/></p>
                <p>Pada menu ini, Anda dapat menambahkan program baru untuk Brand Anda. Untuk membuat program, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut.</p>
                <ol>
                    <li>Title, yaitu judul program Brand Anda</li>
                    <li>Description, yaitu deskripsi umum dari program Brand Anda</li>
                    <li>Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada program Brand Anda</li>
                    <li>Set Schedule, yaitu tanggal mulai untuk program Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan.</li>
                </ol>
                <p>Setelah mengisi kolom-kolom di atas, klik tombol “Post Program” untuk mengunggah program Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama program.</p>
                <p><br/></p>
                <h3>View Program (ikon mata, Lihat Program)</h3>
                <p><br/></p>
                <p>Pada menu ini, Anda dapat melihat program yang telah Anda buat secara detail.</p>
                <p><br/></p>
                <h3>Edit Program (ikon pena/pensil, Sunting Program)</h3>
                <p><br/></p>
                <p>Pada menu ini, Anda dapat menyunting program yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Program.</p>
                <p><br/></p>
                <h3>Remove Program (ikon tempat sampah)</h3>
                <p><br/></p>
                <p>Jika tombol ini diklik, program yang Anda pilih akan terhapus.</p>
                <p><br/></p>
                <h2>Content</h2>
                <p><br/></p>
                <p>Pada saat masuk ke halaman utama content, Anda akan menemukan tombol “Add New Content” dan tabel di bawahnya. Tabel tersebut berisi konten yang telah Anda buat atau kosong jika Anda belum pernah membuat konten. Jika Anda sudah pernah membuat konten, Anda akan melihat kategori, judul, tanggal mulai, beserta tiga tombol untuk melakukan aksi pada konten yang telah Anda buat, yaitu tombol “View” (ikon mata), “Edit” (ikon pena/pensil), dan “Remove” (ikon tempat sampah).</p>
                <p><br/></p>
                <h3>Add New Content (Tambah Konten Baru)</h3>
                <p><br/></p>
                <p>Pada menu ini, Anda dapat menambahkan konten baru untuk Brand Anda. Untuk membuat konten, Anda harus mengisi kolom-kolom yang disediakan sebagai berikut.</p>
                <ol>
                    <li>Category, yaitu kategori konten yang akan Anda buat. Pilih kategori “Artikel” untuk membuat konten tulisan, “Image” untuk membuat konten gambar, dan “Video” untuk membuat konten video.</li>
                    <li>Program Name, yaitu pilihan program yang telah Anda buat untuk dikaitkan dengan konten Anda. Pilih “--Tanpa Program--” jika konten yang disediakan tidak membutuhkan program, atau pilih program yang telah Anda buat untuk mengaitkan konten Brand Anda dengan program Brand Anda.</li>
                    <li>Title, yaitu judul konten Brand Anda</li>
                    <li>Description, yaitu deskripsi umum dari konten Brand Anda</li>
                    <li>Source, yaitu narasumber atau referensi yang digunakan pada konten yang dibuat</li>
                    <li>Photo, yaitu gambar yang digunakan untuk dijadikan thumbnail pada konten Brand Anda</li>
                    <li>Contents, yaitu kolom untuk mengisi konten yang diinginkan. Jika Anda memilih Category “Artikel”, Anda dapat membuat tulisan pada kolom yang tersedia. Jika Anda memilih Category “Image”, Anda diminta untuk memasukkan link gambar yang ingin dipakai. Jika Anda memilih Category “Video”, Anda diminta untuk memasukkan link video (Youtube, Dailymotion, Vimeo) yang ingin dipakai.</li>
                    <li>Set Schedule, yaitu tanggal mulai untuk konten Brand Anda. Klik ikon kalender untuk membuka kalender dan pilih tanggal yang Anda inginkan.</li>
                </ol>
                <p>Setelah mengisi kolom-kolom di atas, klik tombol “Post Content” untuk mengunggah konten Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman utama Content.</p>
                <p><br/></p>
                <h3>View Content (ikon mata, Lihat Konten)</h3>
                <p><br/></p>
                <p>Pada menu ini, Anda dapat melihat konten yang telah Anda buat secara detail.</p>
                <p><br/></p>
                <h3>Edit Content (ikon pena/pensil, Sunting Konten)</h3>
                <p><br/></p>
                <p>Pada menu ini, Anda dapat menyunting konten yang telah Anda buat. Kolom yang disediakan sama dengan kolom yang berada pada Add New Content.</p>
                <p><br/></p>
                <h3>Remove Content (ikon tempat sampah)</h3>
                <p><br/></p>
                <p>Jika tombol ini diklik, konten yang Anda pilih akan terhapus.</p>
            </div>
        </div>
    )
}

export default DashboardHelp