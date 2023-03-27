/** Class형 컴포넌트 State
 *  React에서 State는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
 */
import { Component } from "react";

class Counter extends Component {
  /** 컴포넌트에서 state를 설정할 경우, 생성자를 통해 설정해준다.
   *  이 함수가 호출되면 현재 클래스가 상속 받은 Component에서 생성자 함수를 호출 해준다.
   *  this.state로 초깃 값을 지정해준다.
   */
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    const { number, fixedNumber } = this.state; // state 조회 시, this.state로 조회한다.

    return (
      <div>
        <h1>{number}</h1>
        <h2>이 값은 바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // onClick 익명 메소드를 통해 클릭 시 호출할 함수를 지정한다.
          onClick={() => {
            // setState를 통해 새로운 값을 지정해준다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
