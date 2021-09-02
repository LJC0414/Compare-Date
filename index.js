
const dayjs = require('dayjs');
const fs = require('fs');

const nowTime = dayjs().startOf('day');
var result = 'Date incorrect.';
exports.handler = async (event) => {
    let inputTime;
    let inputTimeString;
    console.log(event);
    if (event.body) {
        inputTimeString = event.body;
        inputTime = dayjs(JSON.parse(inputTimeString).inputTime).startOf('day');
        if (inputTime.isSame(nowTime)) {
            result = 'Input time is today.';
        } else if (inputTime.isBefore(nowTime)) {
            result = 'Input time is in the past.';
        } else if (inputTime.isAfter(nowTime)) {
            result = 'Input time is in the future.';
        }
    }
    return result;
}
const inputTimeEvent = {
    inputTime: "2021-9-2"
};
const event = {
    body: JSON.stringify(inputTimeEvent)
}
console.log(this.handler(event));
