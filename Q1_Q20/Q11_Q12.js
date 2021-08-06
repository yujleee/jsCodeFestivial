'use strict';

//문제 11: for를 이용한 기본 활용
//1부터 100까지 모두 더하는 코드

{
  let s = 0;

  //pass
  for (let i = 0; i <= 100; i++) {
    s += i;
  }

  console.log(s);
}

//문제 12: 게임 캐릭터 클래스 만들기
//다음 소스코드에서 클래스를 작서앟여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
//단, 주어진 소스코드를 수정해서는 안됨.

{
  //class 선언 자리
  class Wizard {
    constructor(health, mana, armor) {
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }

    attack() {
      console.log('파이어볼');
    }
  }

  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.attack();

  //출력 545 210 10
  //파이어볼
}
