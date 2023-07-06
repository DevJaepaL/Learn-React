import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // DOM 객체에 접근하기 위해 ref 설정

  // props 지정하기 위한 생성자
  constructor(pros) {
    super(pros);
    console.log("This is Constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("This is getDerivedStateFromPropsgetDr");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }

    return null;
  }

  componentDidMount() {
    console.log("This is componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("This is shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4일 경우 리렌더링 X
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("This is componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("This is getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("This is componentDidUpdate", prevProps, prevState);

    if (snapshot) {
      console.log("업데이트 되기 직전의 색상 : ", snapshot);
    }
  }

  render() {
    console.log("This is Render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>Current Color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
