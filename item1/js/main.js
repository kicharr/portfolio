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

let modalQuestion = document.getElementById('more__button').addEventListener('click', () => alert('Вы переходите на страницу каталога наших товаров!'));

// Рассылка Email
function subscribeNewsLetter() {
    const mailingList = document.getElementById('footer-email__input');
    const sendEmail = document.getElementById('sendEmail').addEventListener('click', subscribeNewsLetter)
    // проверка на инпут

    alert('Спасибо, что подписались! Теперь вы будете получать новости о наших новых товарах!')
}