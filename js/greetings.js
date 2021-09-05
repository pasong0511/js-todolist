const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


function onLoginSubmit(event) {
    event.preventDefault();                 //form 태그 화면 새로고침 방지
    loginForm.classList.add("hidden");      //입력 값 화면 숨기기

    const username = loginInput.value;      //입력 값(vlue) 받기
    localStorage.setItem("usernameKey", username)   //입력 값 로컬스토리지 저장
    greeting.innerText = `안녕! ${username}`;       //입력 값 화면 출력
    greeting.classList.remove("hidden");
    
}

const savedUsername = localStorage.getItem("usernameKey");
console.log(savedUsername);

if (savedUsername === null) {               //입력 값이 비어있으면
    loginForm.classList.remove("hidden");   //로그인 폼 보여줌
    loginForm.addEventListener("submit", onLoginSubmit);
} else {                                    //입력 값이 로컬스토리지 저장 중
    greeting.innerText = `안녕! ${savedUsername}`;  //화면에 출력
    greeting.classList.remove("hidden");
    loginForm.classList.add("hidden");
}