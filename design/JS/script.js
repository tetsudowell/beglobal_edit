
// 以下はハンバーガーメニュー

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.global-nav');
const overlay = document.querySelector('.menu-overlay');


hamburger.addEventListener('click', () => {
nav.classList.toggle('open');
hamburger.classList.toggle('active');
overlay.classList.toggle('open');
});



// 以下はカルーセル

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let timer;

// スライドを移動する関数
function showSlide(index) {
    currentIndex = index;
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
    // 既存のタイマーをリセット
    clearTimeout(timer);
    // この写真が表示されてから5秒後に次へ
    timer = setTimeout(() => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }, 7000);
}

// 次へ
nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

// 前へ
prevButton.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
});

// ドットをクリック
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

showSlide(0);
