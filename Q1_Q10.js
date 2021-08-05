'use strict';

// 문제 1: 배열의 삭제
// 다음 배열에서 400,500을 삭제하는 code를 입력하세요.
{
  var nums = [100, 200, 300, 400, 500];

  nums.pop();
  nums.pop();

  console.log(nums);
}

// 문제 2: 배열의 내장함수
// <pass> 부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

//데이터
{
  var arr = [200, 100, 300];

  //pass
  arr.splice(1, 0, 10000);

  console.log(arr);
}

//출력될 값 => [200, 100, 10000, 300];

/*
    splice 메소드 
    배열의 앞,뒤,중간에 요소를 삭제/삽입할 때 사용

     splice(start: number, deleteCount?: number, ...items: T[]): T[];
     start - 변경 시작할 배열 인덱스
     deleteCount - 삭제할 갯수
     item - 추가할 요소 

*/

// 문제 3: 변수의 타입
// 다음의 출력값으로 올바른 것은?
{
  var arr = [100, 200, 300];
  console.log(typeof arr);
}
// => Object

// typeof => 해당 요소의 자료형

//문제 4: 변수의 타입2
//다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은? 2번.

//1) 입력: a=1, 출력: number
//2) 입력: a=2.22,  출력: boolean ==> number
//3) 입력: a = 'p', 출력: String
//4) 입력: a = [1,2,3], 출력: object

//문제 5: for문 계산
//다음 코드의 출력 값으로 알맞은 것은?
{
  var a = 10;
  var b = 2;

  for (var i = 1; i < 5; i += 2) {
    a += i;
  }

  console.log(a + b); //  a=10+1  a=11+3  a=14   a+b = 16
}

//문제 6: False
//False로 취급하지 않고 True로 취급하는 것 하나는?

// 1) NaN
// 2) 1           ==> 정답
// 3) ""
// 4) 0
// 5) undefined

// NaN, 0, "", undefined 외의 모든 값은 참으로 판단함

//문제 7: 변수명
//변수명으로 사용할 수 없는 것 2개를 고르시오
// 1) age
// 2) &age
// 3) let   ==> 정답    let은 이미 자바스크립트에 있는 예약어
// 4) _age
// 5) 1age  ==> 정답     맨 앞에 숫자 x

//문제 8: 객체의 키 이름 중복
//다음 객체의 출력값을 입력하시오. (공백을 넣지 않는다)
{
  var d = {
    height: 180,
    weight: 78,
    weight: 84,
    temperature: 36,
    eyesight: 1,
  };

  console.log(d['weight']);
  //중복 변수명은 마지막으로 작성한 값으로 인식한다.
}

//문제 9: concat을 활용한 출력 방법
//다음 소스코드를 완성하여 날짜와 시간을 출력하시오

//데이터
{
  var year = '2019';
  var month = '04';
  var day = '26';
  var hour = '11';
  var minute = '34';
  var second = '27';

  var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

  console.log(result);
}
//출력 => 2019/04/26 11:34:27

//문제 10: 별찍기
//입력한 수만큼 별을 트리모양으로 찍어보기
{
  const num = prompt('숫자를 입력해주세요');
  let tree = '';

  for (let i = 0; i <= num; i++) {
    for (let j = 0; j < num - i; j++) {
      tree += ' ';
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      tree += '*';
    }
    tree += '\n';
  }

  console.log(tree);
}
