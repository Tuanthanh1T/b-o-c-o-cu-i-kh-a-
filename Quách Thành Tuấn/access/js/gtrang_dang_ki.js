document.getElementById("registerForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm_password").value.trim();
    const email = document.getElementById("email").value.trim();

    // Kiểm tra rỗng
    if (!username || !password || !confirmPassword || !email) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Kiểm tra mật khẩu
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    // Lấy danh sách tài khoản đã lưu
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra trùng tên đăng nhập
    let existed = users.find(user => user.username === username);

    if (existed) {
        alert("Tên đăng nhập đã tồn tại!");
        return;
    }

    // Lưu tài khoản
    users.push({
        username: username,
        password: password,
        email: email
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");

    window.location.href = "trang_chu.html";
});

