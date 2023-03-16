# 챕터 1

> 💫 : 이 글은 [VeloPert](https://github.com/velopert) 님이 만드신 책 `리액트를 다루는 기술` 로 공부한 내용을 올립니다.

![](https://velog.velcdn.com/images/jaepal/post/a2008cb8-12ae-43b2-b00d-e8a45ab82b18/image.png)

리액트는 사용자 인터페이스를 만들기 위한 `JavaScript` 라이브러리 중 하나이다.

___

# ⚛️ 리액트의 특징

## Virtual DOM

리액트의 주요 특징 중 하나는 `Virtual DOM`을 사용한다는 것이다.
웹 브라우저는 `DOM`을 활용해 객체에 `JS`와 `CSS`를 적용하는데, 여기서 `DOM`은 트리 형태이기에 **특정 노드를 검색, 수정, 삽입, 제거가 가능**하다.

![](https://velog.velcdn.com/images/jaepal/post/8e5604d8-5464-4554-abd2-835ac89db041/image.png)

>그러나, DOM은 동적 UI에 최적화되어 있지 않다. 
**기본적으로 HTML은 자체적으로 정적인 요소**이기 때문이다. 

요즘 접하는 웹 어플리케이션들은 스크롤을 내릴 때마다 매우 많은 데이터가 로딩 되기 때문에 이는 비효율적일 수 있다!

⬇️

이 문제를 해결하기 위해 `DOM`을 최소한으로 조작하여 작업을 처리하는 방식으로 개선할 수 있다. **리액트는 `Virtual DOM` 방식으로 DOM 업데이트를 추상화함으로써 `DOM` 처리를 최소화하고 효율적으로 진행**한다!

> `Virtual DOM`을 사용해 실제 `DOM`에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성해 사용한다.

✅ 리액트에서 데이터가 변하여 웹 브라우저에 실제 `DOM`을 업데이트 할 때는 다음 세가지 절차를 밟는다.

1. **데이터를 업데이트하면 전체 UI를 `Virtual DOM`에 리렌더링**한다.
2. 이전 `Virtual DOM`에 있던 내용과 현재 내용을 비교한다.
3. 바뀐 부분만 실제 `DOM`에 적용한다.

## `View` 중심의 라이브러리

자바스크립트의 프레임워크들은 `MVC 아키텍처` & `MVVM 아키텍쳐` 를 사용한다.
예를 들어 `AngularJS` 의 경우 `MVW 아키텍쳐` 를 사용해 애플리케이션을 구조화한다.

하지만 `React`의 경우 자바스크립트 라이브러리로 `사용자 인터페이스(UI)`를 만드는 데 사용한다. 위에 설명한 프레임 워크와는 달리, **VIEW 만 신경쓰는 라이브러리이다.**

___

# 👨‍💻 기술 용어

## 렌더링 🖥️

> 🖥️ : 사용자 화면에 보여주는 것을 **렌더링**이라고 한다.

## 컴포넌트 

>리액트에서의 컴포넌트는 페이지에 렌더링할 `React 엘리먼트`를 반환하는 
작고 재사용 가능한 코드 조각이다.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

컴포넌트는 기능별로 나눌 수 있으며 다른 컴포넌트 안에서도 사용할 수 있으며
컴포넌트는 다른 `컴포넌트`, `배열`, `문자열` 그리고 `숫자`를 반환할 수 있다.

___


# `const` & `let`

`const`는 ES6 문법에서 새로 도입된 기능이다. 한번 지정하고 나면 변경이 불가능한 상수를 선언할 때 사용하는 키워드이다.

`let`은 동적인 값을 담을 수 있는 변수를 선언할 때 사용하는 키워드이다.

## `let` & `var`의 차이

`var`은 사실상 사용하지 않는 키워드이다. 그 이유는 `scope`의 범위 차이 때문이다.

**※ `scope`  : 해당 값을 사용할 수 있는 코드 영역 범위**


🔴 `var` : **함수 단위의 범위**를 갖고있다.

🟡 `let` & `const` : **블록 단위의 범위**를 갖고있다.


`var`  사용시

```js
function checkScope() {
	var a = "Kim";
  
  	if(true) {
    	var a = "Lee";
      	console.log(a);	// Lee
    }
  
  	console.log(a); // Lee
}
```

`if`문 바깥에서 값을 `Kim`으로 선언하고 내부에서 `Lee`로 설정했음에도 바깥에서 `a`를 호출하면 `Lee`가 나오는 문제가 발생한다.

`let` 사용시
```js
function checkScope() {
	let a = 1;
  
  	if(true) {
    	let a = 500;
      	console.log(a);	// 500
    }
  
  	console.log(a); // 1
}
```

> ⚠️ **주의 사항 !**
`let` & `const`는 같은 블록 내부에서 중복 선언이 불가능하다.

✅ `let`은 선언 후 값이 유동적으로 변할 수 있을 때(`for 문`)에서 사용한다.
✅ `const`는 **한번 설정한 후 변할 일이 없는 값**에 사용한다.
___

# `JSX`

> JSX는 자바스크립트의 확장 문법이며, `JavaScript` + `XML` 의 문법이라고 생각하면 된다.

✅ `JSX`는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 
바벨을 사용해 일반 자바스크립트 형태의 코드로 변환되어 실행된다.

```js
function App() {
	return (
    	<div>
      		Hello <b>react</b>
      	</div>
    );
}
```
이렇게 작성된 코드는 다음과 같이 변환된다.

```js
function App() {
	return Reac.createElement("div",null,"hello", React.createElement("b",null,"react"));
}
```

이처럼 `JSX`를 사용하면 간단하게 렌더링이 가능하다!

## `JSX` 문법

>`JSX`는 편리한 문법이나, 올바르게 사용하기 위해선 몇 가지 규칙을 준수해야 한다.

### 감싸인 요소

컴포넌트 내부에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.

```js
fuction App() {
	return (
    	<h1>Hello React !</h1>
      	<h2>안녕하세요 리액트 !</h2>
    )
}
```

이런 형태의 코드는 제대로 작동하지 않는다. 
오류를 해결하기 위해 여러 개의 요소를 하나의 요소로 감싸야한다.

```js
fuction App() {
	return (
      <div>
    	<h1>Hello React !</h1>
      	<h2>안녕하세요 리액트 !</h2>
      </div>
    )
}
```
이런 식으로 `div` 태그를 통해 하나의 요소로 감싸줘야 한다.

그 이유는 `Virtual DOM`에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 **컴포넌트 내부는 하나의 `DOM` 트리 구조로 이루어져야하는 규칙**이 있기 때문이다.

🌟 `div`로 하나의 요소로 구성하고 싶지 않을 경우, `Fragment`라는 기능을 사용해도 무방하다.


### `JS` 표현

`JSX` 내부에서는 `JS` 표현식을 사용할 수 있다. 간단하게 내부에서 코드를 `{}` 로 감싸주면 된다.

```js
function App() {
	const name = "React";
  return (
  	<>
    	<h1>{name} 안녕하세요 !</h1>
    </>
  )
}
```

### `undefined`를 렌더링하지 않는다.

리액트 컴포넌트에서는 함수에서 `undefined`만 반환하여 렌더링하는 상황을 만들면 안된다. 다음과 같은 코드는 오류를 발생시킨다!

```js
function App() {
	const name = undefined;
  	return name;
}

export default App:
```

위와 같은 코드에서 이런 오류를 확인할 수 있다.
```
App(...) : Nothing was returned from render. 
This usually means a return statement is missing. Or, to render nothing, return null.
```

어떤 값이 `undefined`일 수도 있다면, `OR (||)` 연산자를 통해서 해당 값이 `undefined`일 경우 사용할 값을 지정해주면 오류를 방지할 수 있다.

```js
fuction App() {
	const name = undefined;
  	return name || '현재 이 값은 undefined 인데요 ?';
}
```
또는 JSX 내부에서 `undefined`를 렌더링하는 것은 괜찮다.

```js
function App() {
	const name = undefined;
  	return <div>{name}</div>;
}
```

### 인라인 스타일링

리액트에서 DOM 요소를 스타일 적용할 때는 문자열 형태로 넣는 것이 아닌 객체 형태로 넣어줘야 한다.

또한 스타일 이름 중에서 `background-color` & `font-weight` 처럼 `-` 문자가 포함되는 이름은 카멜 표기법으로 변환해 작성 해줘야한다.

```js
import './App.css';

function App() {
	const name = 'React';
	const style = {
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: '48px', // font-size --> fontSize
		fontWeight: 'bold', // font-weight --> fontWeight
		padding: 16, // 단위 생략 시 기본 단위는 px
	};

	return <div style={style}>{name}</div>;
}

export default App;
```

**결과**

![](https://velog.velcdn.com/images/jaepal/post/58057b89-2ec7-4e09-aa24-be2708c4a187/image.png)


### `className`

일반적인 `HTML` 에서는 CSS 클래스 사용시 `<div class="fontClass"></div>`와 같이 `class` 속성을 지정해줬다.

하지만 `JSX`에서는 `class` 가 아닌 `className`으로 지정해줘야한다.

```js
import './App.css';

function App() {
	const name = '리액트';
	return <div className="react">{name}</div>;
}

export default App;

```

![](https://velog.velcdn.com/images/jaepal/post/94cb3f9e-109a-4145-b47b-9982d8f6b879/image.png)

### `self-closing` 태그

`HTML` 에서는 `input` 같은 태그는 태그를 닫지않아도 정상적으로 작동된다.
하지만 `JSX`에서는 태그를 닫지 않을 경우 오류가 발생한다.
```js
fuction App() {
	const name = "React";
  	return (
    	<>
      	<div className = "react">{name}</div>
		<input></input> // 이런 식으로 태그를 닫아줘야한다.
      	</>
    )
}
```
태그 사이에 별도의 내용이 들어가지 않는 경우 다음과 같이 작성도 가능하다.
이러한 태그를 `self-closing` 태그라고 부른다.

```js
fuction App() {
	const name = "React";
  	return (
    	<>
      	<div className = "react">{name}</div>
		<input /> // 이런 식으로 닫아준다.
      	</>
    )
}
```

___

+ **정리** ✅

`JSX`는 `HTML`과 비슷하지만 완전히 똑같지 않다. 
`XML` 형식이지만 실제론 자바스크립트 객체이며, 용도도 다르고 문법도 조금씩 차이가 난다!

> *Reference*
+ 도서 :  **리액트를 다루는 기술** 📖
+ [React 공식 사이트](https://ko.reactjs.org/)