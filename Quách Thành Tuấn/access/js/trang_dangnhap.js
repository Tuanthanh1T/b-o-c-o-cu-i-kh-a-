document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Kiểm tra rỗng
    if (!username || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
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
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng nhập thành công!");

    window.location.href = "trang_chu.html";
});

