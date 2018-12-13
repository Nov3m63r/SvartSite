let linksArray = [
    "media/slider-img/IMG_0143.jpg",
    "media/slider-img/IMG_0149.jpg",
    "media/slider-img/IMG_9407.jpg",
    "media/slider-img/IMG_0267.jpg",
    "media/slider-img/IMG_0512.jpg",
    "media/slider-img/IMG_1081.jpg",
    "media/slider-img/IMG_9530.jpg",
    "media/slider-img/IMG_0516.jpg",
    "media/slider-img/IMG_1063.jpg"
];
let currentIndex = 0;
let fullSizeImg = document.querySelector(".full-size");
let nextButton = document.querySelector(".fa-angle-right");
let prevButton = document.querySelector(".fa-angle-left");

function next() {
    currentIndex++;
    if (currentIndex >= linksArray.length) {
        currentIndex = 0;
    }
    fullSizeImg.src = linksArray[currentIndex];
}

function prev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = linksArray.length - 1;
    }
    fullSizeImg.src = linksArray[currentIndex];
}

nextButton.addEventListener('click', next);
prevButton.addEventListener('click', prev);