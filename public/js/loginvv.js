function login() {
    // Ambil nilai username dan password dari form
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Lakukan pengecekan login, contoh sederhana hanya mengecek username dan password tertentu
    if (email === "fajri@gmail.com" && password === "fajri123") {
        // Jika login berhasil, buka tab baru (ganti dengan URL yang sesuai)
        window.location.href = "success.blade.php";
        return false; // Mencegah form untuk submit
    } else {
        // Jika login gagal, tampilkan pesan kesalahan
        alert("Login gagal. Silakan coba lagi.");
        return false; // Mencegah form untuk submit
    }
}
