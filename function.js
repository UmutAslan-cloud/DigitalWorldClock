
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
    localHours = (localHours < 10) ? "0" + localHours : localHours;
    localMin = (localMin < 10) ? "0" + localMin : localMin;
    localSec = (localSec < 10) ? "0" + localSec : localSec;
    let time = `${localHours} : ${localMin} : ${localSec} `
    digitalClock.innerHTML = time;
}


