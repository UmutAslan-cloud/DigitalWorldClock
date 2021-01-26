/**
 * Musterimiz bizden istedigi 3 sehirin dijital saatlerini gosteren bir program yapmamizi istiyor
 * Sagda olusturacagamiz bir dropdown menude bu 3 sehir listelenecek
 * Kullanicinin sectigi sehire gore saatler sayfada gosterilecek
 * secilen sehire gore saat degismeli
 * bu odevimizde fonksiyonlar kullanacagiz
 * secimlerde yapacagimiz eventlere bir takim fonksiyonlar ekleyerek saatlerin degismesini saglayacagiz.
 */


let digitalClock = document.getElementById("digi")
let dropDown = document.querySelector("#city-label");
let cityName = document.getElementById("city")
let mainContent = document.getElementById("main-content")
let offset = 0;

dropDown.addEventListener("change", function (e) {
    if (e.target.value == "Beijing") {
        offset = 7;
        cityName.innerHTML = e.target.value
    } else if (e.target.value == "Zürich") {
        offset = 0;
        cityName.innerHTML = e.target.value
    } else if (e.target.value == "Toronto") {
        offset = -6
        cityName.innerHTML = e.target.value
    }
})
let timerHandler = setInterval(writeTime, 1000);