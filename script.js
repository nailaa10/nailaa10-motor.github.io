// Fungsi untuk membuka popup reguler
function openPopupReg() {
    document.getElementById("popupOverlayReg").style.display = "flex";
}

// Fungsi untuk menutup popup reguler
function closePopupReg() {
    document.getElementById("popupOverlayReg").style.display = "none";
}

// Fungsi untuk membuka popup darurat
function openPopupDar() {
    document.getElementById("popupOverlayDar").style.display = "flex";
}

// Fungsi untuk menutup popup darurat
function closePopupDar() {
    document.getElementById("popupOverlayDar").style.display = "none";
}

// Fungsi untuk membuka popup login
function openLogin() {
    document.getElementById("popupLogin").style.display = "flex";
}

// Fungsi untuk menutup popup login
function closeLogin() {
    document.getElementById("popupLogin").style.display = "none";
}

// Fungsi untuk menangani form submit login
function handleSubmit(event) {
    event.preventDefault(); // Mencegah halaman refresh
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    alert("Username: " + username + "\nPassword: " + password);
    closeLogin(); // Menutup popup setelah submit
}

// Fungsi untuk membuka popup sign-up
function openSignupPopup() {
    document.getElementById("signupPopupOverlay").style.display = "flex";
}

// Fungsi untuk menutup popup sign-up
function closeSignupPopup() {
    document.getElementById("signupPopupOverlay").style.display = "none";
}

// Fungsi untuk menangani form submit sign-up
function handleSignup(event) {
    event.preventDefault(); // Mencegah halaman refresh

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validasi password
    if (password !== confirmPassword) {
        alert("Password dan Konfirmasi Password tidak sama.");
        return;
    }

    alert("Pendaftaran berhasil!\nNama: " + nama + "\nEmail: " + email + "\nUsername: " + username);
    closeSignupPopup(); // Menutup popup setelah submit
}

// Fungsi untuk membuka popup akun
function openAccountPopup() {
    document.getElementById("accountPopup").style.display = "block";
}

// Fungsi untuk menutup popup akun
function closeAccountPopup() {
    document.getElementById("accountPopup").style.display = "none";
}

// Menutup pop-up ketika pengguna mengklik di luar pop-up
window.onclick = function(event) {
    var popup = document.getElementById("accountPopup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
}

// Fungsi untuk menampilkan popup GPS
function showPopupGps() {
    document.getElementById("overlaygps").style.display = "block";
}

// Fungsi untuk menutup popup GPS
function closePopupGps() {
    document.getElementById("overlaygps").style.display = "none";
}

// Tambahkan fungsi-fungsi lain yang mungkin Anda perlukan di sini
function openRiwayat() {
    // Implementasi untuk membuka riwayat transaksi
}

function openJadwal() {
    // Implementasi untuk membuka jadwal servis
}