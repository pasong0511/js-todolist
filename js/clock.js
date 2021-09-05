const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();    //시간 가져오는 객체 생성

    const day = date.getDate();
    const hours = String(date.getHours()).padStart(2,"0");      //string이 가져야할 길이를 2로 설정
    const minutes = String(date.getMinutes()).padStart(2,"0");  //2가 아니면 앞에 0을 추가한다.
    const secondes = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerHTML = `${day}day ${hours}:${minutes}:${secondes}`;
}

getClock();
setInterval(getClock, 1000);    //주기적인 재실행(실행할 함수, 초) 