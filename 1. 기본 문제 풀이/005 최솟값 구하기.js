//나의 풀이

function solution(arr) {
  let answer = Math.min(...arr);

  return answer;
}
let arr = [5, 7, 3, 9, 11];
console.log(solution(arr));

//문제 해답

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr1 = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr1));

//자바스크립트에서는 너무나 큰 수가 들어오게 되면 정확성이 떨어지게 된다. 의미는 즉 그 값을 정확하게 보관할 수 없다는 의미이다.
//이런 문제를 사전에 방지하기 위해 존재하는 것이 Number.MAX_SAFE_INTEGER와 Number.MAX_VALUE이다. 사전에 한도를 알고 사용할 수 있게 해준다.

//참조: https://jam-ws.tistory.com/7
