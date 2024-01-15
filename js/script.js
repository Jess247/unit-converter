const numberEl = document.querySelector('.sub-heading');
const meterToFeetEl = document.querySelector('.meter-to-feet');
const feetToMeterEl = document.querySelector('.feet-to-meter');
const gallonsToLitersEl = document.querySelector('.gallons-to-liters');
const litersToGallonsEl = document.querySelector('.liters-to-gallons');
const kiloToPoundsEl = document.querySelector('.kilos-to-pounds');
const poundsToKilosEl = document.querySelector('.pounds-to-kilos');

const number = 20;
numberEl.textContent = number;

function convertToFeet(num) {
    let mToFt = (num * 3.28084).toFixed(3);
    meterToFeetEl.textContent = `${number} meters = ${mToFt} feet`;
}

function convertToMeter(num) {
    let ftToM = (num / 3.281).toFixed(3);
    feetToMeterEl.textContent = `${number} feet = ${ftToM} meters`;
}

function convertToGallons(num) {
    let ltrToGal = (num / 3.785).toFixed(3);
    litersToGallonsEl.textContent = `${number} liters = ${ltrToGal} gallons`;
}

function convertToLiters(num) {
    let galToLtr =  (num * 3.785).toFixed(3);
    gallonsToLitersEl.textContent = `${number} gallons = ${galToLtr} liters`;
}

function convertToKilos(num){
    let poundsToKg =  (num / 2.205).toFixed(3);
    poundsToKilosEl.textContent =  `${number} pounds = ${poundsToKg} kilo`;
}

function convertToPounds(num) {
    let kgToPounds =  (num * 2.205).toFixed(3);
    kiloToPoundsEl.textContent = `${number} kilo = ${kgToPounds} pounds`;
}

function renderPage() {
    convertToFeet(number);
    convertToMeter(number);
    convertToGallons(number);
    convertToLiters(number);
    convertToPounds(number);
    convertToKilos(number);
}

renderPage();