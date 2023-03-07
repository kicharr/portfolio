// Слайдер с товаром
$(document).ready(function () {
    $('.images-product__wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
});

// Кнопки покупки
const checkbox = document.getElementById('input-checkbox');
checkbox.addEventListener("change", function () {
    if (this.checked) {
        console.log("checked");
    } else {
        console.log("unchecked");
    }
})

let addCardBtn = document.getElementById('addCardBtn').addEventListener('click', () => {
    alert('Вы добавили товар в корзину!')
})

let payBtn = document.getElementById('payBtn').addEventListener('click', () => {
    const modalPay = document.getElementById('payment-window');
    modalPay.style.cssText = 'transform:translate(0)'
});

// Закрыть модальное окно, если клик не по нему.

// document.onclick = function (e) {
//     if (e.target.className != "modalPay") {
//         this.modalPay.style.cssText = "transform:translate(100%)";
//     };
// };

let closePayBtn = document.getElementById('closeModalPay').addEventListener('click', () => {
    const modalPay = document.getElementById('payment-window');
    modalPay.style.cssText = 'transform:translate(100%)'
});








const test = document.getElementById('test1').textContent ='Тестовое сообщение 2!';
