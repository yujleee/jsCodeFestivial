'use strict';

//문제 41: 소수 판별 프로그램
//소수 =  약수가 1과 자기 자신뿐인 수.
//소수면 yes, 아니면 no를 출력
{
  const num = parseInt(prompt('숫자를 입력하세요'));

  if (num % num === 0) {
    console.log('No');
  } else if (Math.sqrt(i)) {
    console.log('YES');
  }
}

//문제 42: 2020년
//2020년 1월 1일은 수요일. 2020년 a월 b일은 무슨요일일까요?
//ex) a=5, b=24라면 5월 24일은 일요일 => 문자열 SUN 반환
{
  let month;
  let date;

  calendar();
  function calendar() {
    month = prompt('월을 입력하세요.');
    if (month < 1 || month > 12) {
      alert('범위를 벗어났습니다');
      return calendar();
    }

    date = prompt('일을 입력하세요.');
    if (date < 1 || date > 31) {
      alert('범위를 벗어났습니다');
      return calendar();
    }
  }

  console.log(`month: ${month}, date:${date}`);

  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const setDate = new Date(2020, month - 1, date);
  console.log(setDate);

  const yoil = setDate.getDay();
  console.log(yoil);

  console.log(day[yoil]);
}

//문제 43: 10진수를 2진수로
//사용자에게 숫자를 입력받고 이를 2진수로 바꿔 그 값을 출력
{
  let num = prompt('숫자를 입력하세요');

  let binary = [];

  do {
    num = parseInt(num / 2);
    binary.push(num % 2);
  } while (num);

  binary.reverse();

  let result = binary.join();

  console.log(result);
}

//문제 44: 각 자리 수의 합
//사용자가 입력한 양의 정수의 각 자리 수의 합을 구하는 프로그램
//ex) 18234 = 1+8+2+3+4
{
  let num = prompt('숫자를 입력해주세요').split('');

  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += parseInt(num[i]);
  }

  console.log(result);
}

//문제 45: getTime() 함수 사용하기
//getTime()은 1970년 1월 1일 0시 0분 0초 이후부터 지금까지 흐른 시간을 ms 단위로 반환한다.
//이를 이용하여 현재 연도를 출력
{
  let date = new Date();
  const year = Math.floor(parseInt(date.getTime()) / 3.154e10) + 1970;

  console.log(year);
}

//문제 46: 각 자리 수의 합2
//1부터 20까지의 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.
//ex) 10부터 15 => 101112131415 => 21
{
  let num = [];
  for (let i = 1; i <= 20; i++) {
    num[i] = i;
  }

  let result = 0;
  num.forEach((n) => {
    result += n;
  });

  console.log(result);
}

//문제 47: set 자료형의 응용
//중복된 데이터를 삭제하여 실제 접수 명단이 몇 명인지 알고 싶다.
//중복을 제거하여 실제 접수 인원을 출력
{
  const people = [
    ('이호준', '01050442903'),
    ('이호상', '01051442094'),
    ('이준호', '01050342904'),
    ('이호준', '01050442903'),
    ('이준', '01050412904'),
    ('이호', '01050443904'),
    ('이호준', '01050442903'),
  ];

  //중복값이 있는 배열을 set 객체로 생성한다
  const set = new Set(people);
  console.log(`실제 접수인원: ${set.size}`);
}
