document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formDangTin");
    const thongBao = document.getElementById("thongBao");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const tieuDe = document.getElementById("tieu_de").value.trim();
        const noiDung = document.getElementById("noidung").value.trim();
        const anh = document.getElementById("anh").value.trim();

        // ===== VALIDATION =====
        if (tieuDe.length < 10) {
            alert("Tiêu đề phải ít nhất 10 ký tự!");
            return;
        }

        if (noiDung.length < 20) {
            alert("Nội dung phải ít nhất 20 ký tự!");
            return;
        }

        // ===== TẠO OBJECT =====
        const tinMoi = {
            id: Date.now(),
            title: tieuDe,
            content: noiDung,
            image: anh || "https://via.placeholder.com/400x200",
            date: new Date().toLocaleString()
        };

        // ===== LẤY DANH SÁCH CŨ =====
        let danhSachTin = JSON.parse(localStorage.getItem("tinTuc")) || [];

        // ===== THÊM TIN MỚI =====
        danhSachTin.unshift(tinMoi);

        // ===== LƯU LẠI =====
        localStorage.setItem("tinTuc", JSON.stringify(danhSachTin));

        // ===== THÔNG BÁO =====
        thongBao.style.display = "block";

        // ===== RESET FORM =====
        form.reset();

        // ===== CHUYỂN VỀ TRANG CHỦ SAU 1 GIÂY =====
        setTimeout(function () {
            window.location.replace("index.html");
        }, 1000);

    });

});