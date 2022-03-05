const promptName = prompt("Lütfen adınızı giriniz.")

let fullName = `${promptName[0].toUpperCase()}${promptName.slice(1).toLowerCase()}`
document.querySelector("#userName").innerText = fullName;
function showCurrentDayAndTime() {
    
  
    const date = new Date()
    let [hour, minute, second] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var gunler = ["pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
   

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    setTimeout(showCurrentDayAndTime, 1000);

let tarih=gunler[date.getDay()];
    const infoTimer = `${hour}:${minute}:${second} ${tarih[0].toUpperCase()}${tarih.slice(1).toLowerCase()}`
    document.querySelector("#myTime").innerText = infoTimer;
    //`${infoTimer[0].toUpperCase()}${infoTimer.search(1).toLowerCase()}.`
}
showCurrentDayAndTime();