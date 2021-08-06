'use strict';

// 문제 13: 몇 번째 행성인가요?
// 우리 태양계는 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성의 총 8개의 행성으로 이루어져 있다.
// 태양계의 n번째 행성이 무엇인지 알고 싶다.
// 입력으로 행성의 숫자를 나타내는 숫자 n이 입력된다.
// 출력으로 그 순서에 해당하는 이름을 출력.
// 예를 들어 1이 입력되면 첫번째 행성인 수성이 출력된다.

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  const num = document.getElementById('num').value;

  const arr = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

  document.getElementById('result').innerHTML = arr[num - 1];
  console.log(arr[num - 1]);
});
