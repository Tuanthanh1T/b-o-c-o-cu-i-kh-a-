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
    // Kiểm tra thông tin đăng nhập
    let user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        return;
    }

    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng nhập thành công!");

    window.location.href = "index.html";
});

