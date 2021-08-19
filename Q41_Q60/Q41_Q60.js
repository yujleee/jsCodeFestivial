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
