console.log('Оценка за задание: 20 баллов');
console.log('Мой diskord - gromotron5525#6640');
console.log('Мой telegram - https://t.me/gromotron');
// let lang = 'ru-RU';
let lang = 'en-US';
const greetingEn = ['Good night', 'Good morning', 'Good afternoon', 'Good evening'];
const greetingRu = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер']
const greeting = {'en-US': greetingEn, 'ru-RU': greetingRu}
const settings = document.querySelector('.settings');



function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    document.querySelector('.time').innerHTML = currentTime;
    showGreeting();
    showDate();
    setTimeout(showTime, 1000);
}
function showDate() {
    const date = new Date();
    const options = {weekday: 'long', day: 'numeric', month: 'long'};
    const currentDate = date.toLocaleDateString(lang, options);
    document.querySelector('.date').innerHTML = currentDate;
}
function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    getTimeOfDay(hours);
}
function getTimeOfDay(h) {
    const num = Math.floor(h / 6);
    const currentGreating = greeting[lang][num];
    document.querySelector('.welcome').innerHTML = currentGreating;
}

const welcInput = document.querySelector('.welcomeInput');
welcInput.addEventListener('keyup', changeWelcName);
function changeWelcName () {
    localStorage.setItem('name', welcInput.value);
}
function showLocalStorage () {
    welcInput.value = localStorage.getItem('name');
    if (localStorage.getItem('lang') == 'ru-RU' || localStorage.getItem('lang') == 'en-US') {
        lang = localStorage.getItem('lang');
        changeLangStorage(lang);
    } else {
        console.log('Page languge - English');
    }
    showTime();
}
showLocalStorage ();


settings.addEventListener('click', changeLang);
function changeLang () {
    if (lang == 'en-US') {
        changeLangStorage('ru-RU');
    } else {
        changeLangStorage('en-US');
    }
    localStorage.setItem('lang', lang);
    showTime();
}

function changeLangStorage (str) {
    if (str == 'ru-RU') {
        lang = 'ru-RU';
        settings.innerHTML = 'RU';
        welcInput.placeholder = '[Введите имя]';
    } else {
        lang = 'en-US';
        settings.innerHTML = 'EN';
        welcInput.placeholder = '[Enter name]';
    }
}
