const daysel = document.getElementById('days');     
const hoursel = document.getElementById('hours');
const minutesel = document.getElementById('min'); 
const secondsel = document.getElementById('seconds');
const newYears = '1 jan 2022';

//Função que formata os numeros merores que 10.
//Function that formats numbers less than 10.
function formaTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//Função que calcula os milisegundos para o ano novo e converte para outras medidas de tempo.
//Function that calculates the milliseconds for the new year and converts it to other time measures. 
function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24; 
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysel.innerHTML = formaTime(days);
    hoursel.innerHTML = formaTime(hours);
    minutesel.innerHTML = formaTime(minutes);
    secondsel.innerHTML = formaTime(seconds);
    //console.log(minutes);
}

countdown();
setInterval(countdown, 1000);