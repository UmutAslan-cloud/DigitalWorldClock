function convertTime(poffset) {
    let newTime = new Date()
    let localNewTime = newTime.getTime()
    let localOffset = newTime.getTimezoneOffset() * 6000
    let utc = localNewTime + localOffset
    let beijingTime = utc + (3600000 * poffset)
    let convertedTime = new Date(beijingTime)
    return convertedTime;
}

function writeTime() {
    let cityDate = (convertTime(offset))
    let localHours = cityDate.getHours();
    let localMin = cityDate.getMinutes();
    let localSec = cityDate.getSeconds();
    addzero(localHours,localMin,localSec)
    let time = `${localHours} : ${localMin} : ${localSec} `
    digitalClock.innerHTML = time;
}

function addzero(plocalHours,plocalMin,plocalSec) {
    plocalHours = (plocalHours < 10) ? "0" + plocalHours : plocalHours;
    plocalMin = (plocalMin < 10) ? "0" + plocalMin : plocalMin;
    plocalSec = (plocalSec < 10) ? "0" + plocalSec : plocalSec;
}