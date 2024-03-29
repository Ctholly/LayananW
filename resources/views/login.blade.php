<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="/public/css/login.css">
</head>
<body>
    <div class="login-container">
        <form class="login-form" id="loginForm" action="#" method="post" onsubmit="return login()">
            <h2>Login</h2>
            <div class="input-group">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" required>
            </div>
            <div class="input-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="register">
            <p>Belum punya akun? <a href="#">Daftar</a></p>
        </div>
    </div>
    <script src="/public/js/login.js"></script>
</body>
</html>
