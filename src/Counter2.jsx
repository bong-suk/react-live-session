import { useState } from "react";

//함수 방식
const Counter = () => {
  //상태 값
  const [number, setNumber] = useState(0);
};
//핸들러 구성

//더하는 함수
const onIncrease = () => {
  //1더하기
  setNumber((prev) => prev + 1);
};

//빼는 함수
const onDecrease = () => {
  //1빼기
  setNumber((prev) => prev - 1);
};

//화면을 렌더링 하는 부분
//html, h1, h2, <br>, div
return (
  <div>
    <h1>{number}</h1>
    <button onClick={onIncrease}>+1</button>
    <button onClick={onDecrease}>-1</button>
  </div>
);

export default Counter;
