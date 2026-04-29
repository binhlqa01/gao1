// Thiết lập ngày dự sinh của bé Gạo: Ngày 10 tháng 5 năm 2026, lúc 08:00 sáng
const dueDate = new Date("May 10, 2026 08:00:00").getTime();

const updateCountdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = dueDate - now;

    // Tính toán thời gian cho Ngày, Giờ, Phút, Giây
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị ra màn hình (thêm số 0 phía trước nếu nhỏ hơn 10)
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Nếu đã đến ngày hoặc qua ngày dự sinh
    if (distance < 0) {
        clearInterval(updateCountdown);
        document.querySelector(".title").innerText = "Chào mừng bé Gạo!";
        document.getElementById("countdown").innerHTML = "Em bé đã chào đời!";
    }
}, 1000);
