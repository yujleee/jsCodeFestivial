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

//문제 48: 대소문자 바꿔서 출력하기
//문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램 작성
{
  const str = prompt('문자열을 영어로 입력하세요');
  let b = [];
  let s = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      b.push(str[i].toUpperCase());
    } else {
      b.push(str[i].toLowerCase());
    }
  }

  for (let j = 0; j < b.length; j++) {
    s += b[j];
  }

  console.log(s);
}

//문제 49: 최댓값 구하기
//순서가 없는 10개의 숫자가 공백으로 구분되어 진다. 주어진 숫자들 중 최댓값 반환
{
  const arr = prompt('10개의 숫자를 공백을 넣어 입력하세요').split(' ');
  console.log(arr);
  arr.sort((a, b) => a - b).reverse();
  console.log(arr[0]);
}

//문제 50: 버블정렬 구현하기
{
  function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - i; j++) {
        if (result[j] > result[j + 1]) {
          let temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
    return result;
  }

  const item = prompt('공백을 넣어 숫자 배열을 입력해주세요')
    .split(' ')
    .map((n) => {
      return parseInt(n, 10);
    });

  console.log(bubble(item));
}

//문제 51: merge sort (합병정렬)
// 리스트의 길이가 0또는 1이면 정렬된 것으로 보고,
//그 이외에는 반으로 잘라 정렬 후 다시 하나의 리스트로 합병.
{
  function mergesort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2); //리스트를 반으로 자르기 위한 기준
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergesort(left), mergesort(right));
  }

  function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) {
      result.push(arr[i]);
    }
    result.push(left.shift());
    while (right.length) {
      result.push(right.shift());
    }

    return result;
  }

  const array = prompt('배열을 입력하세요.')
    .split(' ')
    .map((n) => parseInt(n, 10));
  console.log(mergeSort(array));
}

// 문제 52: 퀵정렬
{
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return arr;
  }
  const array = prompt('배열을 입력하세요.')
    .split(' ')
    .map((n) => parseInt(n, 10));

  console.log(quickSort(array));
}

// 문제 53: 괄호 문자열
// 괄호 모양이 바르게 구성된 문자열 => 바른 문자열. (())
// 그렇지 않은 문자열 => 바르지 않은 문자열. ()())
{
  function bracketCheck(str) {
    let cnt = 0;

    for (let i = 0; i < str.length; i++) {
      if (e[i] === '(') {
        cnt++;
      }

      if (e[i] == ')') {
        cnt--;
      }
    }

    if (cnt !== 0) {
      return false;
    }

    let bracket = [];
    for (let i in str) {
      if (str[i] == '(') {
        bracket.push('(');
      }

      if (e[i] == ')') {
        if (bracket.length == 0) {
          return false;
        }
        bracket.pop();
      }
    }
    return true;
  }

  const n = prompt('괄호를 바르게 구성하여 입력하세요').split('');

  if (bracketCheck(n) == true) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

//문제 54: 연속되는 수
//스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지
//YES와 NO로 판별하는 프로그램
{
  const arr = prompt('숫자를 입력하세요').split(' ');

  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i + 1) {
      cnt++;
    }
  }
  if (cnt == 5) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

//문제 55: 하노이의 탑
//하노이의 탑은 A,B,C 3개의 기둥과 기둥에 꽂을 수 있는 N개의 원판으로 이루어져 있다.
//또한 다음과 같은 규칙들을 만족해야 한다.
//1. 처음에 모든 원판은 A기둥에 꽂혀 있다.
//2. 모든 원판의 지름은 다르다.
//3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
//4. 작은 원반 위에 큰 원반을 놓을 수 없다.
//5. 한 번에 하나의 원판만 옮길 수 있다.

//위 규칙들을 만족하며 A기둥의 원반 N개를 모두 C원반으로 옮기고 싶다.
//실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램
{
  const route = [];

  function hanoi(num, start, end, mid) {
    if (num === 1) {
      route.push([start, end]);
      return NaN;
    }
    //원반 n-1개를 경유기둥(c)로 이동
    hanoi(num - 1, start, mid, end);

    //가장 큰 원반은 목표기둥으로
    route.push([start, end]);

    //경유기둥와 시작기둥 바꿈
    hanoi(num - 1, mid, end, start);
  }

  hanoi(3, 'a', 'b', 'c');
  console.log(route);
  console.log(route.length);
}
