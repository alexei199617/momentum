console.log('Оценка за задание: 20 баллов');
console.log('Мой diskord - gromotron5525#6640');
console.log('Мой telegram - https://t.me/gromotron');
let lang = 'ru-RU'; //'en-US'
const greeting = ['night', 'morning', 'afternoon', 'evening'];



function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    document.querySelector('.time').innerHTML = currentTime;
    showGreeting()
    showDate()
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
    getTimeOfDay(hours)
}
function getTimeOfDay(h) {
    const num = Math.floor(h / 6);
    const currentGreating = `Good ${greeting[num]}`;
    document.querySelector('.welcome').innerHTML = currentGreating;
}
