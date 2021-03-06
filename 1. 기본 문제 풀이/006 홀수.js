//나의 풀이
      function solution(arr) {
        let total = 0;
        const answer = [];
        let odd = arr.filter((x) => x % 2 == 1);
        let min = Math.min(...odd);
        odd.forEach((x) => {
          total += x;
        });

        answer.push(total);
        answer.push(min);
        return answer;
      }

      let arr = [12, 77, 38, 41, 53, 92, 85];
      console.log(solution(arr));
  

//문제 해답

      function solution(arr) {
        let answer = [];
        let sum = 0,
          min = 1000;
        for (let x of arr) {
          if (x % 2 === 1) {
            sum += x;
            if (x < min) min = x;
          }
        }
        answer.push(sum);
        answer.push(min);
        return answer;
      }

      arr = [12, 77, 38, 41, 53, 92, 85];
      console.log(solution(arr));






//for of문법 [Symbol.iterator]속성을 가지는 컬렉션 전용, for in [[Enumerable]] 값이 true인 객체의 경우 key값으로 접근하여 프로퍼티 전부 탐색
//쉽게 말해 for of는 배열전용, for in은 객체의 프로퍼티중 열거가능한 요소들 전용이라 생각하자(for in이 배열에서 쓰이면 index를 key로 사용하여 검색)

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

var iterable = [3, 5, 7];
iterable.foo = "hello";

for (var key in iterable) {
  console.log(key); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (var value of iterable) {
  console.log(value); // 3, 5, 7
} 
