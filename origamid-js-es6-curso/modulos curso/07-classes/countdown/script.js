import Countdown from "./countdown.js";

const diaFuturo = new Countdown('24 December 2021 23:59:59 GMT-0300');

console.log(diaFuturo._timestamp)
console.log(diaFuturo.days)