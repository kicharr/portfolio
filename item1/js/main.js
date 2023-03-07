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

let modalQuestion = document.getElementById('more__button').addEventListener('click', () => alert.apply('Вы переходите на страницу каталога наших товаров!'));

// Рассылка Email

let footerInput = document.getElementById('footerInput');
let sendEmail = document.getElementById('sendEmail').addEventListener('click', followSendMail);



function followSendMail() {
    let userEmail = footerInput.value;
    const ERROR = 'К сожалению произошла ошибка, повторите ещё раз!';
    const SUCCESS = `${userEmail}` + ' — на эту почту теперь будут приходить свежие обновления о наших товарах!';

    if (userEmail == null || userEmail == undefined || userEmail == '') {
        alert(ERROR);
        console.log('К сожалению произошла ошибка, повторите ещё раз! Попробуйте написать свою почту!');
    } else {
        alert(SUCCESS);
    }
}


// const payLink = document.getElementById('payLink').addEventListener('click', addErrorPage);

// function addErrorPage() {

//     if(payLink.getAttribute('href') == "#") {
//         payLink.setAttribute('href', "http://127.0.0.1:5500/item1/ErrorPage.html");
//     } else {
//         console.log('attr fill');
//     }

//     // console.log(payLink);
// }