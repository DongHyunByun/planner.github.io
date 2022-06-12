const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000) //파라미터는 (함수, 간격(ms)) 간격마다 반복
// setTimeout(sayHello, 5000) //파라미터는 (함수, 간격(ms)) 시간이 지난 후 한번만 반복