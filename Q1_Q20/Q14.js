'use strict';

//문제 14: 3의 배수인가요?
//서로 돌아가며 랜덤으로 숫자를 하나씩 말하고 그게 3의 배수이면 박수를 치고 아니면 숫자를 그대로 말하는 게임.
//3의 배수라면 '짝'이라는 글자를, 아니라면 n을 출력

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', function () {
  const num = document.getElementById('num').value;

  if (num % 3 == 0) {
    result.innerHTML = '짝';
  } else {
    result.innerHTML = num;
  }
});
