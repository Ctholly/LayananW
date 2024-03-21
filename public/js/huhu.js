
const users = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Cek apakah akun ada dalam database
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Jika login berhasil, redirect ke halaman success.html
        window.location.href = "success.html";
    } else {
        // Jika login gagal, tampilkan popup error
        alert("Username atau password salah!");
    }
});