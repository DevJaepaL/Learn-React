import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state 조회할 때는 this.state를 통해 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>이 값은 안 바뀌는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                // setState 함수 내부의 파라미터로 콜백 함수 등록해서 작업 처리 가능
                console.log("setState가 호출 됐어요.");
                console.log(this.state);
              }
            );
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}
