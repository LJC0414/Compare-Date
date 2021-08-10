
const dayjs = require('dayjs');
const fs = require('fs');

const nowTime = dayjs().startOf('day');
const inputTimeJson = require('./InputTime.json');
let inputTimeString = inputTimeJson.inputTime;
let inputTime = dayjs(inputTimeJson.inputTime).startOf('day');

if (inputTime.isSame(nowTime)){
    console.log('Input time is now');
}
else if (inputTime.isBefore(nowTime)){
    console.log('Input time is in the past')
}
else if (inputTime.isAfter(nowTime)){
    console.log('Input time is in the future')
}

