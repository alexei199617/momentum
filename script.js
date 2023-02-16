console.log('Оценка за задание: 51 баллов');
console.log('Мой diskord - gromotron5525#6640');
console.log('Мой telegram - https://t.me/gromotron');
// let lang = 'ru-RU';
let lang = 'en-US';
const greetingEn = ['Good night', 'Good morning', 'Good afternoon', 'Good evening'];
const greetingRu = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'];
const greeting = {'en-US': greetingEn, 'ru-RU': greetingRu};
const sliderTime = ['night', 'morning', 'afternoon', 'evening'];
const settings = document.querySelector('.settings');
let sliderTimeUrl = '';
let randomNum = '';


//Время и дата (1)
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
    // console.log(sliderTime[num]);
    sliderTimeUrl = sliderTime[num];
    document.querySelector('.welcome').innerHTML = currentGreating;
}

//Приветствие (2)
const welcInput = document.querySelector('.welcomeInput');
welcInput.addEventListener('keyup', changeWelcName);
function changeWelcName () {
    localStorage.setItem('name', welcInput.value);
}
function showLocalStorage () {
    welcInput.value = localStorage.getItem('name');
    if (localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
        changeLangStorage(lang);
    } else {
        console.log('Page languge - English');
    }
    showTime();
}
showLocalStorage ();

//Смена языка (8)
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

//Слайдер (3)
function getRandomInt(max) {
  randomNum = Math.ceil(Math.random() * max);
  return randomNumCheck(randomNum);
}
function randomNumCheck (rn) {
    let rnCheck = numCheck(rn);
    if (String(rnCheck).length < 2) {
        randomNum = String('0' + rnCheck);
        return randomNum;
    } else {
        randomNum = String(rnCheck);
        return randomNum;
    }
}
function slider(int) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${sliderTimeUrl}/${int}.jpg`;
    img.addEventListener('load', () => {
        document.querySelector('html').style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${sliderTimeUrl}/${int}.jpg')`;
    });
}
slider(getRandomInt(10));
document.querySelector('.arrowLeft').addEventListener('click', getSlidePrev);
document.querySelector('.arrowRight').addEventListener('click', getSlideNext);
function getSlidePrev() {
    slider(randomNumCheck(Number(randomNum)-1));
}
function getSlideNext() {
    slider(randomNumCheck(Number(randomNum)+1));
}
function numCheck (num) {
    if (num < 1) {
        randomNum = 20;
        return randomNum;
    } else if (num > 20) {
        randomNum = 1;
        return randomNum;
    } else {
        randomNum = num;
        return randomNum;
    }
}
