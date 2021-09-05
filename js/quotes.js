const quotes = [
    {
      quote: "아무리 나이를 먹었다 해도 배울 수 있을 만큼은 충분히 젊다..",
      author: "아이스큐로스",
    },
    {
      quote: "아무렇게나 사는 40살 사람보다는 일하는 70살의 노인이 더 명랑하고 더 희망이 많다..",
      author: "올리버 웬델 홈즈",
    },
    {
      quote:
        "T무언가 큰 일을 성취하려고 한다면, 나이를 먹어도 청년이 되지 않으면 안 된다..",
      author: "괴테",
    },
    {
      quote: "바쁜 사람에게는 나쁜 버릇을 가질 시간이 없는 것처럼 늙을 시간이 없다..",
      author: "앙드레 모로아",
    },
    {
      quote: "마음을 위대한 일로 이끄는 것은 오직 열정, 위대한 열정뿐이다..",
      author: "스탠리 쿠니츠",
    },
    {
      quote: "삶의 원동력은 무엇일까? 첫째도 욕망, 둘째도 욕망, 셋째도 욕망이다..",
      author: "스탠리 쿠니츠",
    },
    {
      quote: "나는 삶에서 언제나 치열함을 추구하라고, 삶을 만끽하라고 배웠다..",
      author: "니나 베르베로바",
    },
    {
      quote: "도전은 인생을 흥미롭게 만들며, 도전의 극복이 인생을 의미있게 한다..",
      author: "조슈아 J. 마린",
    },
    {
      quote: "불가능해 보이는 것은 불확실한 가능성보다 항상 더 낫다..",
      author: "아리스토텔레스",
    },
    {
      quote: "도전은 우리로 하여금 새로운 무게 중심을 찾게 하는 선물입니다. 맞서 싸우지 마세요. 그저 중심을 잡을 수 있는 다른 방법을 찾아 보세요..",
      author: "오프라 윈프리",
    },
    {
        quote: "무릅써라! 그 어떤 위험도 무릅써라! 다른 이들의 말, 그들의 목소리에 더 이상 신경쓰지 마라. 세상에서 가장 어려운 것에 도전하라. 스스로 행동하라. 진실을 대면하라..",
        author: "캐서린 맨스필드",
      },
  ];
  
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todqyQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todqyQuote.quote;
author.innerText = todqyQuote.author;