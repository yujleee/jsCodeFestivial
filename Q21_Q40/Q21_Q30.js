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

// //문제 25: 원의 넓이를 구하라
// // 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 생성
{
  function area(n) {
    return 3.14 * n * n;
  }

  const radius = parseInt(prompt('반지름을 입력해주세요.'));
  const result = area(radius);
  console.log(result);
}

//문제 26: 행성문제 2
//태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있다.
//이 행성들의 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune 이다.
//행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램 생성
{
  const planet = {
    수성: 'Mercury',
    금성: 'Venus',
    지구: 'Earth',
    화성: 'Mars',
    목성: 'Jupiter',
    토성: 'Saturn',
    천왕성: 'Uranus',
    해왕성: 'Neptune',
  };

  const name = prompt('행성의 이름을 한글로 입력하세요');

  for (let pName in planet) {
    if (pName == name) {
      console.log(planet[pName]);
      break;
    }
  }
}

//문제 27: 객체 만들기
//첫번째 입력에서는 학생 이름이 공백으로 구분되어 입력되고,
//두번째에는 그 학생의 수학점수가 공백으로 구분되어 주어진다.
// 두개를 합쳐 학생의 이름이 key이고 value가 수학점수인 객체를 출력
{
  const name = prompt('이름을 한 칸씩 공백을 주어 입력하세요');
  const score = prompt('점수를 한 칸씩 공백을 주어 입력하세요.');

  const nameArr = name.split(' ');
  const scoreArr = score.split(' ');

  const obj = {}; //객체 생성

  //객체에 값 넣기
  for (let i = 0; i < nameArr.length; i++) {
    obj[nameArr[i]] = scoreArr[i];
  }

  console.log(obj);
}

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
{
  const str = prompt('문자열을 입력하세요.');

  for (let i = 0; i < str.length; i++) {
    console.log(str[i], str[i + 1]);
  }
}

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

  console.log(str.indexOf(words));
}

//문제 31: 자바스크립트 자료형의 복잡도
//배열 내장함수의 시간복잡도가 O(1)이 아닌것을 모두 고르시오. 3,5번
//1) arr[i] => 하나의 인덱스 선택 크기와 관계없음
//2) arr.push(5) => 배열의 끝에 하나의 값 삽입.
//3) arr.slice() => 새로운 배열로 반환할 때 배열의 크기가 크다면 메모리 사용량 증가.
//4) arr.pop() => 가장 끝에 있는 원소 제거.
//4) arr.includes(5) => 매개변수에 해당하는 값 탐색. 배열의 크기가 클수록 탐색 시간 증가

//시간복잡도 => 알고리즘의 성능을 나타냄
//O(1) = 데이터의 크기와 관계없이 알고리즘의 성능이 일정함
{
  const arr = [1, 2, 3, 4, 5];
}

//문제 32: 문자열 만들기
// 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램
{
  const word = prompt('문자열을 입력하세요.').split(' ');

  console.log(`단어의 갯수: ${word.length}개`);
}

//문제 33: 거꾸로 출력하기
//한 줄에 여러개의 숫자가 입력되면 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오
{
  const num = prompt('여러 개의 숫자를 입력하세요. 예) 1 2 3 4 5').split(' ');
  console.log(num.reverse());
}

//문제 34: sort 구현하기
//키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램. 키는 공백으로 구분
{
  const height = prompt('여러 명의 키를 순서대로 입력하세요. 예) 150 153 166');
  const sorted = height
    .split(' ')
    .sort((a, b) => a - b)
    .join(' ');

  console.log(height);
  console.log(sorted);

  if (height === sorted) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

//문제 35: Factory 함수 사용하기
//2,3,4제곱을 할 수 있는 factory 함수를 만드려고 한다.
//pass부분에 코드를 작성하여 two 함수를 완성.
{
  function one(n) {
    function two(sq) {
      const num = Math.pow(sq, n);
      return num;
    }
    return two;
  }

  const a = one(2);
  const b = one(3);
  const c = one(4);

  console.log(a(10));
  console.log(b(10));
  console.log(c(10));
}

//문제 36: 구구단 출력하기
//1부터 9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램
{
  const dan = prompt('1부터 9까지의 숫자 중 하나를 입력하세요');

  let result = '';
  for (let i = 1; i <= 9; i++) {
    result += `${dan * i} `;
  }

  console.log(result);
}
