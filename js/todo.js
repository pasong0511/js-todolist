const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input"); //위와 동일
const toDoList = document.getElementById("todo-list");

let toDoArr = [];                       //항상 빈 값으로 시작함

function saveLocalTodos() {              //로컬스토리지에 저장하기
    localStorage.setItem("localSaveKey", JSON.stringify(toDoArr));   //로컬 스토리지에 array 형태로 저장하기
}                                                                      //key 이름 : localSaveKey

//삭제 버튼 클릭시 삭제
function deleteTodo(event) {
    //console.log(event.target.parentElement.innerText);    //클릭한 x의 텍스트 가져올수있음

    const li = event.target.parentElement;
    li.remove();
    toDoArr = toDoArr.filter((toDoArr) => toDoArr.id !== parseInt(li.id));  //우리가 클릭한 li.id와 다른 toDoArr는 남겨두고 삭제
    saveLocalTodos();
}

//입력 값 li > span에 입력
//삭제 버튼 추가
function paintTodo(newTodo) {
    console.log(newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;                 //newTodoObj의 id값으로 text찾기?
    const span = document.createElement("span");
    span.innerText = newTodo.text;           //li>span 안에 입력 값 추가

    const a = document.createElement("a");
    a.innerText = "❌";
    a.setAttribute("href","#");
    a.addEventListener("click", deleteTodo);
    li.appendChild(span);               //li 태그 안에 span 넣기
    li.appendChild(a);             //li > button 추가
    toDoList.appendChild(li);           //hmtl 파일 안에 li>span>vlue 추가
}

function handleToDoSubmit(event) {
    event.preventDefault();             //새로고침 방지
    const newTodo = toDoInput.value;    //input 값을 새로운 변수에 저장
    toDoInput.value = "";               //input 값은 비우기
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDoArr.push(newTodoObj);              //toDoArr 배열에 값 푸쉬
    paintTodo(newTodoObj);
    saveLocalTodos();                   //로컬스토리지에 저장 함수 실행
}

function sayhello(item) {
    console.log("이게 순서임", item);
}

toDoForm.addEventListener("submit", handleToDoSubmit);      //입력 값에 이벤트 리스너 실행

const saveToDos = localStorage.getItem("localSaveKey");     //로컬 스토리지 localSaveKey 키에서 값 가져오기

if(saveToDos !== null) {                                    //로컬스토리지의 localSaveKey가 비어있지 않는다면
    const parsedToDos = JSON.parse(saveToDos);              //Json형태의 array 형태로 저장하기                                 //새로 고침 전의 value 저장
    parsedToDos.forEach(paintTodo);
}