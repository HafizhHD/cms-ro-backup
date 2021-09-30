import React from 'react'
import './LoginHelp.scss';

function LoginHelp() {
    return (
        <div className="HelpOverlay">
            <div className="HelpOverlay-content">
                <h1>Guide Cobrand Ruang Keluarga</h1>
                <h2>Registrasi</h2>
                <p>Pada halaman utama (Login), klik pada tulisan <span className="HelpOverlay-content-keyword">Daftar Sekarang</span> untuk masuk ke halaman registrasi. Pada halaman registrasi, Anda harus mengisi delapan kolom yang disediakan, yaitu:</p>
                <p><br/></p>
                <ol>
                    <li>E-Mail</li>
                    <li>Password</li>
                    <li>Confirm Password (isi harus sama dengan password)</li>
                    <li>Your Name (Nama Anda)</li>
                    <li>Your Brand Name (Nama Brand Anda)</li>
                    <li>Phone Number (Nomor Telepon yang terhubung dengan brand Anda)</li>
                    <li>Address (Alamat Brand Anda)</li>
                    <li>Photo (Foto atau Gambar Logo dari Brand Anda)</li>
                </ol>
                <p><br/></p>
                <p>Setelah mengisi delapan kolom di atas, klik <span className="HelpOverlay-content-keyword">Sign Up</span> untuk mendaftarkan Brand Anda. Jika berhasil, Anda akan dialihkan ke halaman Login untuk masuk.</p>
                <p><br/></p>
                <p><br/></p>
                <h2>Login</h2>
                <p>Pada halaman login, masukkan e-mail dan password yang telah dibuat pada saat registrasi. Lalu, klik tombol <span className="HelpOverlay-content-keyword">Login</span>. Jika berhasil, Anda akan dialihkan ke halaman Dashboard.</p>   
            </div>
        </div>
    )
}

export default LoginHelp