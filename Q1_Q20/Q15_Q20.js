'use strict';

//문제 15: 자기소개
//이름을 입력하면 안녕하세요, 저는 ㅇㅇㅇ입니다. 라고 출력하기
{
  const name = prompt('이름 입력');
  console.log(`안녕하세요. 저는 ${name}입니다.`);
}

// //문제 16: 로꾸거
// //문장이 입력되면 거꾸로 출력하는 프로그램 만들기
{
  const word = prompt('문장입력');
  const reverse = word.split('').reverse().join('');
  console.log(reverse);

  //split() => 한글자씩 나눠 배열로 저장
  //reverse() => 배열을 뒤집음
  //join() => 다시 하나의 문자열80로 생성
}

// 문제 17 : 놀이기구 키 제한
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있다.
// 입력으로 키가 주어졌을 때 키가 150이 넘으면 Yes, 틀리면 NO를 출력하는 프로그램
{
  const height = prompt('키를 입력하세요');
  if (height >= 150) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

// 문제 18: 평균 점수
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램 작성
// 단, 소숫점 자리는 모두 버린다.

{
  const score = prompt('점수를 입력하세요 예) 20 30 40');
  const scoreList = score.split(' ');
  let total = 0;
  let num;
  for (num of scoreList) {
    total += parseInt(num);
  }
  console.log(total);

  const avg = Math.floor(total / 3);
  console.log(avg);
}

// 문제 19: 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면 a의 b승을 구하는 프로그램 작성
{
  const num = prompt('두 숫자를 입력하세요. 예) 2 3');
  const numArr = num.split(' ');

  const exponentiation = Math.pow(parseInt(numArr[0]), parseInt(numArr[1]));
  console.log(exponentiation);

  //Math.pow() => 제곱을 구하는 메소드
}

//문제 20: 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어진다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력
{
  const num = prompt('두 숫자를 입력하세요. 예) 10 2');
  const numArr = num.split(' ');

  const div = parseInt(numArr[0]) / parseInt(numArr[1]);
  const remainder = parseInt(numArr[0]) % parseInt(numArr[1]);

  console.log(`${div} ${remainder}`);
}
