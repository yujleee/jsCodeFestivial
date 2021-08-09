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
// {
//   const name = prompt('이름을 입력하세요.');
//   const result = name.toUpperCase();

//   console.log(result);
// }

// //문제 25: 원의 넓이를 구하라
// // 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 생성
// {
//   function area(n) {
//     return 3.14 * n * n;
//   }

//   const radius = parseInt(prompt('반지름을 입력해주세요.'));
//   const result = area(radius);
//   console.log(result);
// }

//문제 26: 행성문제 2
//태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있다.
//이 행성들의 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune 이다.
//행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램 생성
// {
//   const planet = {
//     수성: 'Mercury',
//     금성: 'Venus',
//     지구: 'Earth',
//     화성: 'Mars',
//     목성: 'Jupiter',
//     토성: 'Saturn',
//     천왕성: 'Uranus',
//     해왕성: 'Neptune',
//   };

//   const name = prompt('행성의 이름을 한글로 입력하세요');

//   for (let pName in planet) {
//     if (pName == name) {
//       console.log(planet[pName]);
//       break;
//     }
//   }
// }

//문제 27: 객체 만들기
//첫번째 입력에서는 학생 이름이 공백으로 구분되어 입력되고,
//두번째에는 그 학생의 수학점수가 공백으로 구분되어 주어진다.
// 두개를 합쳐 학생의 이름이 key이고 value가 수학점수인 객체를 출력
// {
//   const name = prompt('이름을 한 칸씩 공백을 주어 입력하세요');
//   const score = prompt('점수를 한 칸씩 공백을 주어 입력하세요.');

//   const nameArr = name.split(' ');
//   const scoreArr = score.split(' ');

//   const obj = {}; //객체 생성

//   //객체에 값 넣기
//   for (let i = 0; i < nameArr.length; i++) {
//     obj[nameArr[i]] = scoreArr[i];
//   }

//   console.log(obj);
// }

// 문제 28: 2-gram (2개의 연속된 요소 출력)
// 입력된 문자열을 2-gram으로 출력하는 프로그램
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t
// {
//   const str = prompt('문자열을 입력하세요.');

//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i], str[i + 1]);
//   }
// }

//문제 29: 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 Yes,
//아니면 No를 출력하는 프로그램
{
  const alphabet = prompt('알파벳 하나를 입력하세요');

  const alphaNum = alphabet.charCodeAt(0);
  //charCodeAt() => 인덱스에 해당하는 값을 아스키 코드로 변환

  if (alphaNum >= 65 && alphaNum <= 90) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

//문제 30: 문자열 속 문자 찾기
//첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력.
//그 문자가 시작하는 index 값을 반환하는 프로그램

//pineapple is yammy
//apple => 4

{
  const str = prompt('문자열을 입력하세요');
  const words = prompt('찾을 단어를 입력하세요');

  str.startsWith(words);
}
