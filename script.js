// ============================
// MỞ WEBSITE
// ============================

const openButton = document.getElementById("openButton");

const welcome = document.querySelector(".welcome");

const mainContent = document.getElementById("mainContent");

const music = document.getElementById("music");


openButton.addEventListener("click", function () {

    welcome.style.display = "none";

    mainContent.style.display = "block";


    // Thử phát nhạc
    music.volume = 0.5;

    music.play().catch(function () {
        console.log("Trình duyệt đã chặn tự động phát nhạc.");
    });


    // Cuộn lên đầu
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ============================
// HOA / TRÁI TIM BAY
// ============================

function createFloatingHeart() {

    const heart = document.createElement("div");

    const symbols = [
        "❤️",
        "💕",
        "🌸",
        "🌷",
        "💗"
    ];

    heart.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];


    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        15 + Math.random() * 20 + "px";

    heart.style.zIndex = "999";

    heart.style.pointerEvents = "none";

    heart.style.transition =
        "transform 6s linear, opacity 6s";


    document.body.appendChild(heart);


    setTimeout(function () {

        heart.style.transform =
            "translateY(-110vh) rotate(30deg)";

        heart.style.opacity = "0";

    }, 100);


    setTimeout(function () {

        heart.remove();

    }, 6500);

}
setInterval(createFloatingHeart, 900);

document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("music");
    music.volume = 0.5;
    music.play().then(() => {
        console.log("Nhạc đang tự động phát.");
    }).catch(function (error) {
        console.log("Trình duyệt đã chặn autoplay. Nhạc sẽ phát khi người dùng nhấn nút 'MỞ QUÀ'.");
    });
});