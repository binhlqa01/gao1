const dueDate = new Date("May 10, 2026 08:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const distance = dueDate - now;

    // Tính toán các đơn vị
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Cập nhật dữ liệu lên giao diện
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000);
function toggleMusic() {
    const music = document.getElementById("bg-music");
    const icon = document.getElementById("music-icon");
    
    if (music.paused) {
        music.play();
        icon.innerText = "⏸️"; // Đổi icon khi đang phát
    } else {
        music.pause();
        icon.innerText = "🎵"; // Đổi icon khi dừng
    }
}

// Tự động phát nhạc ngay khi người dùng chạm vào bất kỳ đâu trên trang web lần đầu
document.addEventListener('click', function() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
        document.getElementById("music-icon").innerText = "⏸️";
    }
}, { once: true });
