import React from "react";
import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "올라프" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextID, setNextID] = useState(5); // 새로운 항목 추가시 사용할 ID

  //    onClick 메소드, 파라미터를 전달받아 input 태그의 값 변경.
  const onChange = (e) => setInputText(e.target.value);
  /*    onClick 메소드, 버튼클릭 시 concat 함수를 통해 배열에 새로운 이름 추가
        NextID를 통해 번호를 추가하고, InputText를 비워준다. */
  const onClick = () => {
    const nextNames = names.concat({
      id: nextID,
      text: inputText,
    });

    setNextID(nextID + 1);
    setNames(nextNames);
    setInputText("");
  };
  // 요소 삭제 메소드(배열 내장 함수 filter를 사용함.)
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
