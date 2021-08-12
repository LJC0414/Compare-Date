
const dayjs = require('dayjs');
const fs = require('fs');

const nowTime = dayjs().startOf('day');
const inputTimeJson = require('./InputTime.json');
let inputTime = dayjs(inputTimeJson.inputTime).startOf('day');
let result = 'Date incorrect';

if (inputTime.isSame(nowTime)){
    result = 'Input time is now';
}
else if (inputTime.isBefore(nowTime)){
    result = 'Input time is in the past';
}
else if (inputTime.isAfter(nowTime)){
    result = 'Input time is in the future';
}

console.log(result);
