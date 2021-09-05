const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");      //img 태그 생성


bgImage.src = `img/${chosenImage}` //createElement("img")를 이용해서 img 태그를 만들었기때문에 src 사용가능


document.body.appendChild(bgImage); //img 태그를 html 파일에 추가