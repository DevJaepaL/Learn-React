import React, { useCallback, useMemo, useRef } from "react";
import { useState } from "react";

const getAvg = (numbers) => {
  console.log("평균값 계산 중 . . . .");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Avg = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputElement = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 최초 렌더링시에만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputElement.current.focus();
  }, [number, list]); // number 또는 list 값이 변경될 때에만 함수 생성

  const avg = useMemo(() => getAvg(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputElement} />
      <button onClick={onInsert}>등 록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Avg;
