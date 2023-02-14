console.log('Оценка за задание: 20 баллов');
console.log('Мой diskord - gromotron5525#6640');
console.log('Мой telegram - https://t.me/gromotron');
// let lang = 'ru-RU';
let lang = 'en-US';
const greetingEn = ['Good night', 'Good morning', 'Good afternoon', 'Good evening'];
const greetingRu = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер']
const greeting = {'en-US': greetingEn, 'ru-RU': greetingRu}



function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    document.querySelector('.time').innerHTML = currentTime;
    showGreeting();
    showDate();
    setTimeout(showTime, 1000);
}
showTime();
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
function showWelcName () {
    welcInput.value = localStorage.getItem('name');
}
showWelcName ();
