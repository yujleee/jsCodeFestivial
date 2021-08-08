'use strict';

// 문제 21: set은 어떻게 만드나요?
// set을 만드는 방법으로 올바른 것을 모두 고르시오.  3,5번
// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
// 3)  var x = new Set('javascript'); //생성자를 이용해 배열을 set으로 변환
// 4)  var x = new Set(range(5));
// 5)  var x = new Set(); => 새로운 set 객체 생성

// 문제 22: 배수인지 확인하기
// 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은? 2번

// 1)  i / 6 == 0
// 2)  i % 6 == 0 => 나머지가 0
// 3)  i & 6 == 0
// 4)  i | 6 == 0
// 5)  i // 6 == 0

//문제 23: OX문제
//console.log(10/3)의 출력 결과는 3이다 => X. 10/3은 3.3333333... 에 해당하는 수가 나옴
//3으로 떨어지기 위해선 Math.floor() 메소드를 사용

//문제 24: 대문자로 바꾸기
// 이름이 입력되면 전부 대문자로 출력되는 프로그램
{
  const name = prompt('이름을 입력하세요.');
  const result = name.toUpperCase();

  console.log(result);
}

//문제 25: 원의 넓이를 구하라
// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 생성
{
  function area(n) {
    return 3.14 * n * n;
  }

  const radius = parseInt(prompt('반지름을 입력해주세요.'));
  const result = area(radius);
  console.log(result);
}
