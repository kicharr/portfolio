// animation tips

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('showAdvice');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.separate-advice');

for (let elm of elements) {
    observer.observe(elm);
}




document.getElementById("showSearchBtn").addEventListener("click", showSearchBlock);

function showSearchBlock() {
    let searchBlock = document.getElementById('search-action__wrapper');
    if (!searchBlock.style.cssText || searchBlock.style.cssText === "display: none;") {
        searchBlock.style.cssText = " display: flex;"
    } else {
        searchBlock.style.cssText = " display: none;"
    }
}

$(function () {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
            $('body').css({
                'paddingTop': hederHeight + '100px' // делаем отступ у body, равный высоте шапки
            });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': 100 // удаляю отступ у body, равный высоте шапки
            })
        }
    });
});