$(document).ready(function() {
    // Fungsi untuk melakukan proses login
    function loginUser(email, password) {
        // Data yang akan dikirim dalam permintaan
        var data = {
            email: email,
            password: password
        };

        // Konfigurasi untuk permintaan Ajax
        var config = {
            method: 'POST',
            url: 'http://api-layanan-web.test/api/login',
            data: data
        };

        // Kirim permintaan ke backend menggunakan Ajax
        $.ajax(config)
            .done(function(response) {
                console.log(response); // Tangani respons dari backend
                // Lanjutkan ke halaman berikutnya atau lakukan tindakan lainnya setelah login berhasil
                alert('Login berhasil!');
                window.location.href = "/welcome";
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error('Error during login:', errorThrown); // Tangani error jika terjadi
                alert('Login gagal. Silakan coba lagi.');
            });
    }

    // Handle submit form
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Ambil nilai email dan password dari form
        var email = $('#email').val();
        var password = $('#password').val();

        // Panggil fungsi loginUser dengan email dan password yang diberikan
        loginUser(email, password);
    });
});